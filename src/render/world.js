import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { SURF } from '../sim/track.js';
import { clamp, lerp, mod, smoothstep, mulberry32, loopDelta } from '../util/math.js';
import * as TX from './textures.js';
import { TEAMS } from '../sim/teams.js';

/** Physics (x, y, height) -> three.js (x, height, -y). */
export const toWorld = (x, y, h = 0, out = new THREE.Vector3()) => out.set(x, h, -y);

// ---- tiny value noise -----------------------------------------------------------------------
function hash2(ix, iy) {
  let h = (ix * 374761393 + iy * 668265263) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
function vnoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy), b = hash2(ix + 1, iy), c = hash2(ix, iy + 1), d = hash2(ix + 1, iy + 1);
  return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}
export function fbm(x, y, oct = 4) {
  let a = 0.5, f = 1, s = 0;
  for (let i = 0; i < oct; i++) {
    s += a * vnoise(x * f, y * f);
    a *= 0.5;
    f *= 2.03;
  }
  return s;
}

// ---- sky -----------------------------------------------------------------------------------
const SKY_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
  gl_Position.z = gl_Position.w; // always at the far plane
}`;
const SKY_FRAG = /* glsl */ `
varying vec3 vDir;
uniform vec3 top; uniform vec3 horizon; uniform vec3 ground; uniform vec3 sunDir; uniform vec3 sunColor; uniform float time; uniform float cloud;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.07; a *= 0.5; } return s; }
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -1.0, 1.0);
  vec3 col = mix(horizon, top, pow(clamp(h, 0.0, 1.0), 0.55));
  col = mix(col, ground, smoothstep(0.0, -0.25, h));
  float sd = max(dot(d, normalize(sunDir)), 0.0);
  col += sunColor * (pow(sd, 6000.0) * 3.0 + pow(sd, 22.0) * 0.22 + pow(sd, 4.0) * 0.07);
  if (h > 0.0) {
    vec2 uv = d.xz / (h + 0.18) * 1.6 + vec2(time * 0.004, 0.0);
    float c = fbm(uv * 1.4);
    float m = smoothstep(0.52 - cloud * 0.2, 0.9, c) * smoothstep(0.0, 0.2, h);
    vec3 cc = mix(vec3(0.82), vec3(1.0), c) * mix(vec3(0.75, 0.8, 0.9), vec3(1.0), sd * 0.6 + 0.4);
    col = mix(col, cc, m * 0.85 * cloud);
  }
  gl_FragColor = vec4(col, 1.0);
}`;

function makeSky(theme) {
  const sky = theme.sky;
  const mat = new THREE.ShaderMaterial({
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      top: { value: new THREE.Color(sky.top) },
      horizon: { value: new THREE.Color(sky.horizon) },
      ground: { value: new THREE.Color(theme.fog).multiplyScalar(0.75) },
      sunDir: { value: new THREE.Vector3(...sky.sun).normalize() },
      sunColor: { value: new THREE.Color(sky.sunColor) },
      time: { value: 0 },
      cloud: { value: theme.cloud ?? 0.8 },
    },
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(6000, 32, 16), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return mesh;
}

// ---- helpers -------------------------------------------------------------------------------
/** Contiguous index ranges [a, b] (inclusive, may wrap) where pred(i) is true. */
function ranges(N, pred) {
  const out = [];
  let start = -1;
  const first = (() => {
    for (let i = 0; i < N; i++) if (!pred(i)) return i;
    return -1;
  })();
  if (first < 0) return [[0, N - 1, true]];
  for (let n = 1; n <= N; n++) {
    const i = (first + n) % N;
    const on = pred(i);
    if (on && start < 0) start = i;
    if (!on && start >= 0) {
      out.push([start, (i - 1 + N) % N]);
      start = -1;
    }
  }
  return out;
}

function mergeClean2(list) {
  for (const g of list) g.deleteAttribute('uv');
  return mergeGeometries(list);
}

export class World {
  constructor(track, opts = {}) {
    this.track = track;
    this.quality = opts.quality || 'high';
    this.theme = track.theme;
    this.group = new THREE.Group();
    this.dynamic = [];
    this.tex = {};
    const th = this.theme;
    this.rnd = mulberry32(1234);
    this.waterLevel = null;

    this.sky = makeSky(th);
    this.group.add(this.sky);

    this.buildLights();
    this.buildTextures();
    this.buildTerrain();
    this.buildRoad();
    this.buildBarriers();
    this.buildPit();
    this.buildStartLine();
    this.buildScenery();
    if (opts.profile) this.buildBrakeBoards(opts.profile);
    this.buildMountains();
  }

  // ---- lights -------------------------------------------------------------------------------
  buildLights() {
    const th = this.theme;
    const sunDir = new THREE.Vector3(...th.sky.sun).normalize();
    this.sunDir = sunDir;
    this.hemi = new THREE.HemisphereLight(new THREE.Color(th.sky.top).lerp(new THREE.Color('#ffffff'), 0.4), new THREE.Color(th.grass[0]).multiplyScalar(0.7), 0.85);
    this.group.add(this.hemi);
    this.sun = new THREE.DirectionalLight(new THREE.Color(th.sky.sunColor), 2.6);
    this.sun.castShadow = this.quality !== 'low';
    const sc = this.sun.shadow.camera;
    sc.left = -70;
    sc.right = 70;
    sc.top = 70;
    sc.bottom = -70;
    sc.near = 10;
    sc.far = 500;
    this.sun.shadow.mapSize.set(this.quality === 'high' ? 4096 : 2048, this.quality === 'high' ? 4096 : 2048);
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.05;
    this.group.add(this.sun, this.sun.target);
  }

  /** Keeps the shadow frustum centred on the action (snapped to texel size to avoid shimmer). */
  focusShadow(pos) {
    const d = this.sunDir;
    const snap = 140 / this.sun.shadow.mapSize.x;
    const x = Math.round(pos.x / snap) * snap, z = Math.round(pos.z / snap) * snap;
    this.sun.position.set(x + d.x * 220, pos.y + d.y * 220, z + d.z * 220);
    this.sun.target.position.set(x, pos.y, z);
    this.sun.target.updateMatrixWorld();
  }

  buildTextures() {
    const th = this.theme;
    const t = this.tex;
    t.asphalt = TX.asphaltTexture();
    t.runoff = TX.runoffTexture();
    t.grass = TX.grassTexture(th.grass[0], th.grass[1]);
    t.gravel = TX.gravelTexture();
    t.kerb = TX.kerbTexture();
    t.barrier = TX.barrierTexture();
    t.tyres = TX.tyreWallTexture();
    t.crowd = TX.crowdTexture();
    t.start = TX.startLineTexture();
  }

  // ---- terrain ----------------------------------------------------------------------------------
  buildTerrain() {
    const tr = this.track, th = this.theme;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (let i = 0; i < tr.N; i += 3) {
      minX = Math.min(minX, tr.x[i]);
      maxX = Math.max(maxX, tr.x[i]);
      minY = Math.min(minY, tr.y[i]);
      maxY = Math.max(maxY, tr.y[i]);
    }
    const margin = 900;
    minX -= margin; maxX += margin; minY -= margin; maxY += margin;
    const cell = 30;
    const nx = Math.ceil((maxX - minX) / cell), ny = Math.ceil((maxY - minY) / cell);
    const pos = new Float32Array((nx + 1) * (ny + 1) * 3);
    const col = new Float32Array((nx + 1) * (ny + 1) * 3);
    const uv = new Float32Array((nx + 1) * (ny + 1) * 2);
    const out = { i: 0, t: 0, s: 0, d: 0, dist: 0 };
    const c1 = new THREE.Color(th.grass[0]), c2 = new THREE.Color(th.grass[1]), rock = new THREE.Color('#6d6a5f');
    const tmp = new THREE.Color();
    const hillAmp = 180 * (th.hills ?? 0.3);
    const water = !!th.water;
    let zmin = Infinity;
    for (let i = 0; i < tr.N; i++) zmin = Math.min(zmin, tr.z[i]);
    this.waterLevel = water ? zmin - 3.2 : null;
    let k = 0;
    for (let j = 0; j <= ny; j++) {
      for (let i = 0; i <= nx; i++, k++) {
        const x = minX + i * cell, y = minY + j * cell;
        tr.project(x, y, -1, out);
        const zNear = tr.at(tr.z, out.s);
        const side = out.d >= 0 ? 1 : -1;
        const wallD = tr.wallDist(out.i, side);
        const edge = wallD + 6;
        const w = smoothstep(edge, edge + (water ? 220 : 180), out.dist);
        const n = fbm(x * 0.0011, y * 0.0011, 5);
        const detail = (fbm(x * 0.02, y * 0.02, 3) - 0.5) * 2.2;
        let far;
        if (water) far = this.waterLevel - 2.5 + (n - 0.5) * 4;
        else far = zNear + hillAmp * (n * 1.5 - 0.55) + detail;
        // land close to the track stays at track level (+ gentle detail)
        const near = zNear - 0.12 + detail * smoothstep(edge, edge + 40, out.dist) * 0.4;
        let h = lerp(near, far, w);
        const edgeD = Math.min(x - minX, maxX - x, y - minY, maxY - y);
        h = lerp(-9, h, smoothstep(0, 500, edgeD));
        pos[k * 3] = x;
        pos[k * 3 + 1] = h;
        pos[k * 3 + 2] = -y;
        uv[k * 2] = x / 40;
        uv[k * 2 + 1] = -y / 40;
        const mixv = fbm(x * 0.006, y * 0.006, 3);
        tmp.copy(c1).lerp(c2, mixv).multiplyScalar(0.8 + 0.4 * fbm(x * 0.05, y * 0.05, 2));
        const slopeRock = clamp((h - zNear - 25) / 90, 0, 0.7) * w;
        tmp.lerp(rock, slopeRock);
        col[k * 3] = tmp.r;
        col[k * 3 + 1] = tmp.g;
        col[k * 3 + 2] = tmp.b;
      }
    }
    const idx = new Uint32Array(nx * ny * 6);
    let q = 0;
    for (let j = 0; j < ny; j++) {
      for (let i = 0; i < nx; i++) {
        const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
        // winding for -y mapping (up-facing)
        idx[q++] = a; idx[q++] = b; idx[q++] = c;
        idx[q++] = b; idx[q++] = d; idx[q++] = c;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.computeVertexNormals();
    // make sure normals point up (winding check)
    const ny0 = geo.attributes.normal.getY(Math.floor(pos.length / 6));
    if (ny0 < 0) {
      for (let n = 0; n < idx.length; n += 3) {
        const t = idx[n + 1];
        idx[n + 1] = idx[n + 2];
        idx[n + 2] = t;
      }
      geo.setIndex(new THREE.BufferAttribute(idx, 1));
      geo.computeVertexNormals();
    }
    this.tex.grass.repeat.set(1, 1);
    const mat = new THREE.MeshStandardMaterial({ map: this.tex.grass, vertexColors: true, roughness: 1, metalness: 0 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true;
    this.group.add(mesh);
    this.terrain = mesh;
    this.bounds = { minX, maxX, minY, maxY };

    if (water) {
      const wg = new THREE.PlaneGeometry(maxX - minX + 4000, maxY - minY + 4000);
      wg.rotateX(-Math.PI / 2);
      const wm = new THREE.MeshStandardMaterial({ color: '#1d6a8f', roughness: 0.12, metalness: 0.25, transparent: true, opacity: 0.92 });
      const water = new THREE.Mesh(wg, wm);
      water.position.set((minX + maxX) / 2, this.waterLevel, -(minY + maxY) / 2);
      this.group.add(water);
      this.water = water;
    }
  }

  // ---- road -----------------------------------------------------------------------------------
  /**
   * Builds a flat ribbon between lateral offsets lo[i] .. hi[i] over a sample range (inclusive; may wrap).
   * u runs 0..uRepeat across, v is arc length / vLen.
   */
  ribbonGeometry(a, b, lo, hi, { yOff = 0, vLen = 10, uRepeat = 1, vertical = null } = {}) {
    const tr = this.track, N = tr.N;
    const count = ((b - a + N) % N) + 1;
    const pos = new Float32Array(count * 2 * 3);
    const uv = new Float32Array(count * 2 * 2);
    const idx = [];
    let sAcc = 0;
    for (let n = 0; n < count; n++) {
      const i = (a + n) % N;
      const l = typeof lo === 'function' ? lo(i) : lo[i];
      const h = typeof hi === 'function' ? hi(i) : hi[i];
      const z = tr.z[i] + yOff;
      const nxv = tr.nx[i], nyv = tr.ny[i];
      pos.set([tr.x[i] + nxv * l, z, -(tr.y[i] + nyv * l)], n * 6);
      pos.set([tr.x[i] + nxv * h, z, -(tr.y[i] + nyv * h)], n * 6 + 3);
      if (n > 0) sAcc += tr.ds;
      const v = sAcc / vLen;
      uv.set([0, v, uRepeat, v], n * 4);
      if (n < count - 1) {
        const p = n * 2;
        idx.push(p, p + 2, p + 1, p + 1, p + 2, p + 3);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    return geo;
  }

  addRibbons(list, mat, { receive = true, order = 0, polygon = 0 } = {}) {
    if (!list.length) return;
    const geo = list.length === 1 ? list[0] : mergeGeometries(list);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = receive;
    mesh.renderOrder = order;
    this.group.add(mesh);
    return mesh;
  }

  buildRoad() {
    const tr = this.track, N = tr.N, T = this.tex;
    const roadMat = new THREE.MeshStandardMaterial({ map: T.asphalt, roughness: 0.92, metalness: 0.0, color: 0xffffff });
    const full = ranges(N, () => true);
    const wl = tr.wl, wr = tr.wr;
    T.asphalt.repeat.set(1, 1);
    // road surface: u spans the width: texture covers 7.5 m across
    const roadW = (wl[0] + wr[0]);
    const roadGeo = this.ribbonGeometry(0, N - 1, (i) => -wr[i], (i) => wl[i], { vLen: 7.5, uRepeat: (wl[0] + wr[0]) / 7.5 });
    // close the loop
    const loopGeo = this.ribbonGeometry(N - 1, 0, (i) => -wr[i], (i) => wl[i], { vLen: 7.5, uRepeat: roadW / 7.5 });
    this.road = this.addRibbons([roadGeo, loopGeo], roadMat, { order: 0 });
    this.road.material.polygonOffset = true;
    this.road.material.polygonOffsetFactor = 1;
    this.road.material.polygonOffsetUnits = 1;

    // rubbered-in racing line
    const lineMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    const ld = tr.lineD;
    const l1 = this.ribbonGeometry(0, N - 1, (i) => ld[i] - 1.1, (i) => ld[i] + 1.1, { yOff: 0.006 });
    const l2 = this.ribbonGeometry(N - 1, 0, (i) => ld[i] - 1.1, (i) => ld[i] + 1.1, { yOff: 0.006 });
    const line = this.addRibbons([l1, l2], lineMat, { receive: false, order: 1 });
    // edge lines
    const edgeMat = new THREE.MeshBasicMaterial({ color: 0xf4f4f0, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const eg = [];
    for (const [g0, g1] of [[0, N - 1], [N - 1, 0]]) {
      eg.push(this.ribbonGeometry(g0, g1, (i) => wl[i] - 0.38, (i) => wl[i] - 0.15, { yOff: 0.01 }));
      eg.push(this.ribbonGeometry(g0, g1, (i) => -wr[i] + 0.15, (i) => -wr[i] + 0.38, { yOff: 0.01 }));
    }
    this.addRibbons(eg, edgeMat, { receive: false, order: 2 });

    // kerbs
    const kerbMat = new THREE.MeshStandardMaterial({ map: T.kerb, roughness: 0.7, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
    const kg = [];
    for (const [a, b] of ranges(N, (i) => tr.kl[i] > 0.1)) kg.push(this.ribbonGeometry(a, b, (i) => wl[i], (i) => wl[i] + tr.kl[i], { yOff: 0.025, vLen: 2.0, uRepeat: 1 }));
    for (const [a, b] of ranges(N, (i) => tr.kr[i] > 0.1)) kg.push(this.ribbonGeometry(a, b, (i) => -wr[i] - tr.kr[i], (i) => -wr[i], { yOff: 0.025, vLen: 2.0, uRepeat: 1 }));
    // kerb texture runs along u for stripes -> swap: rotate texture so stripes alternate along v
    T.kerb.rotation = 0;
    T.kerb.repeat.set(1, 1);
    this.addRibbons(kg, kerbMat, { order: 2 });

    // run-off zones: first zone per surface type, then grass
    const gravelMat = new THREE.MeshStandardMaterial({ map: T.gravel, roughness: 1 });
    const runoffMat = new THREE.MeshStandardMaterial({ map: T.runoff, roughness: 0.95 });
    const grassMat = new THREE.MeshStandardMaterial({ map: T.grass, roughness: 1 });
    const gg = [], rg = [], gr = [];
    const side = (sgn) => {
      const k = sgn > 0 ? tr.kl : tr.kr, w = sgn > 0 ? wl : wr;
      const r1 = sgn > 0 ? tr.r1l : tr.r1r, r2 = sgn > 0 ? tr.r2l : tr.r2r, t1 = sgn > 0 ? tr.t1l : tr.t1r;
      const o = (i, d) => sgn * (w[i] + k[i] + d);
      const wrap = (a, b, fn) => {
        fn(a, b);
      };
      for (const type of [SURF.GRAVEL, SURF.RUNOFF, SURF.GRASS]) {
        for (const [a, b] of ranges(N, (i) => r1[i] > 0.5 && t1[i] === type)) {
          const lo = (i) => (sgn > 0 ? o(i, 0) : o(i, r1[i])), hi = (i) => (sgn > 0 ? o(i, r1[i]) : o(i, 0));
          const g = this.ribbonGeometry(a, b, lo, hi, { yOff: -0.005, vLen: type === SURF.RUNOFF ? 8 : 6, uRepeat: 2 });
          (type === SURF.GRAVEL ? gg : type === SURF.RUNOFF ? rg : gr).push(g);
        }
      }
      // grass beyond (zone 2) and between kerb and wall when no zone1
      const lo2 = (i) => (sgn > 0 ? o(i, r1[i]) : o(i, r1[i] + r2[i])), hi2 = (i) => (sgn > 0 ? o(i, r1[i] + r2[i]) : o(i, r1[i]));
      gr.push(this.ribbonGeometry(0, N - 1, lo2, hi2, { yOff: -0.01, vLen: 8, uRepeat: 2 }));
      gr.push(this.ribbonGeometry(N - 1, 0, lo2, hi2, { yOff: -0.01, vLen: 8, uRepeat: 2 }));
      // thin grass where there is no kerb and no zone1 (road edge to wall start) is covered by zone2 since r1 = 0
    };
    side(1);
    side(-1);
    this.addRibbons(gg, gravelMat);
    this.addRibbons(rg, runoffMat);
    this.addRibbons(gr, grassMat);
    // the gap between the road/kerb edge and zone-2 start where r1 == 0 is zero-width, so nothing is left uncovered.
  }

  // ---- barriers ----------------------------------------------------------------------------------
  buildBarriers() {
    const tr = this.track, N = tr.N, T = this.tex;
    const wallMat = new THREE.MeshStandardMaterial({ map: T.barrier, roughness: 0.85, side: THREE.DoubleSide });
    const tyreMat = new THREE.MeshStandardMaterial({ map: T.tyres, roughness: 0.95, side: THREE.DoubleSide });
    const wallGeos = [], tyreGeos = [];
    const wallStrip = (a, b, sgn, off, h, vLen, dst) => {
      const count = ((b - a + N) % N) + 1;
      const pos = new Float32Array(count * 2 * 3), uv = new Float32Array(count * 4);
      const idx = [];
      let s = 0;
      for (let n = 0; n < count; n++) {
        const i = (a + n) % N;
        const d = sgn * (tr.wallDist(i, sgn) + off);
        const z = tr.z[i];
        const x = tr.x[i] + tr.nx[i] * d, y = tr.y[i] + tr.ny[i] * d;
        pos.set([x, z - 0.1, -y, x, z + h, -y], n * 6);
        if (n > 0) s += tr.ds;
        uv.set([s / vLen, 0, s / vLen, 1], n * 4);
        if (n < count - 1) {
          const p = n * 2;
          idx.push(p, p + 1, p + 2, p + 1, p + 3, p + 2);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      g.setIndex(idx);
      g.computeVertexNormals();
      dst.push(g);
    };
    const street = this.track.def.runoff?.mode === 'street';
    for (const sgn of [1, -1]) {
      wallStrip(0, N - 1, sgn, 0.12, street ? 1.5 : 1.25, 8, wallGeos);
      wallStrip(N - 1, 0, sgn, 0.12, street ? 1.5 : 1.25, 8, wallGeos);
      // tyre walls on the outside of the quicker corners
      for (const c of tr.corners) {
        if (c.maxK < 1 / 420 || street) continue;
        const outer = c.sign > 0 ? -1 : 1;
        if (outer !== sgn) continue;
        const a = (c.start - 12 + N) % N, b = (c.end + 25) % N;
        wallStrip(a, b, sgn, -0.9, 1.15, 4, tyreGeos);
      }
    }
    const wm = new THREE.Mesh(mergeGeometries(wallGeos), wallMat);
    wm.receiveShadow = true;
    wm.castShadow = false;
    this.group.add(wm);
    if (tyreGeos.length) {
      const tm = new THREE.Mesh(mergeGeometries(tyreGeos), tyreMat);
      this.group.add(tm);
    }
    // catch fence posts + mesh on the outside of corners
    if (!street) this.buildFences();
  }

  buildFences() {
    const tr = this.track, N = tr.N;
    const posts = [];
    const meshGeos = [];
    for (const c of tr.corners) {
      if (c.maxK < 1 / 300) continue;
      const sgn = c.sign > 0 ? -1 : 1;
      const a = (c.start - 10 + N) % N, b = (c.end + 20) % N;
      const count = ((b - a + N) % N) + 1;
      const pos = [], idx = [];
      for (let n = 0; n < count; n++) {
        const i = (a + n) % N;
        const d = sgn * (tr.wallDist(i, sgn) + 0.2);
        const x = tr.x[i] + tr.nx[i] * d, y = tr.y[i] + tr.ny[i] * d, z = tr.z[i];
        pos.push(x, z + 1.2, -y, x, z + 5.0, -y);
        if (n % 6 === 0) posts.push([x, z, -y]);
        if (n < count - 1) idx.push(n * 2, n * 2 + 1, n * 2 + 2, n * 2 + 1, n * 2 + 3, n * 2 + 2);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      meshGeos.push(g);
    }
    if (!meshGeos.length) return;
    const fence = new THREE.Mesh(mergeGeometries(meshGeos), new THREE.MeshBasicMaterial({ color: 0x9aa4ad, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false, wireframe: false }));
    this.group.add(fence);
    const pg = new THREE.CylinderGeometry(0.07, 0.07, 5, 5);
    const im = new THREE.InstancedMesh(pg, new THREE.MeshStandardMaterial({ color: 0x6d747b, roughness: 0.6, metalness: 0.5 }), posts.length);
    const m = new THREE.Matrix4();
    posts.forEach((p, k) => {
      m.makeTranslation(p[0], p[1] + 2.5, p[2]);
      im.setMatrixAt(k, m);
    });
    this.group.add(im);
  }

  // ---- pit lane ------------------------------------------------------------------------------------
  buildPit() {
    const tr = this.track;
    if (!tr.pit) return;
    const p = tr.pit;
    const i0 = tr.idx(p.start), i1 = tr.idx(p.start + p.len);
    const c = (i) => tr.pitCentre(i * tr.ds);
    const asphalt = new THREE.MeshStandardMaterial({ map: this.tex.asphalt, roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    const lane = new THREE.Mesh(this.ribbonGeometry(i0, i1, (i) => c(i) - p.width / 2, (i) => c(i) + p.width / 2, { yOff: 0.012, vLen: 7.5, uRepeat: p.width / 7.5 }), asphalt);
    lane.receiveShadow = true;
    lane.renderOrder = 1;
    this.group.add(lane);
    // painted lines: yellow lane divider and white edges
    const yellow = new THREE.MeshBasicMaterial({ color: 0xffd400, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
    this.group.add(new THREE.Mesh(this.ribbonGeometry(i0, i1, (i) => c(i) + 0.05, (i) => c(i) + 0.3, { yOff: 0.02 }), yellow));
    const white = new THREE.MeshBasicMaterial({ color: 0xffffff, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
    this.group.add(
      new THREE.Mesh(
        mergeGeometries([
          this.ribbonGeometry(i0, i1, (i) => c(i) + p.width / 2 - 0.3, (i) => c(i) + p.width / 2 - 0.12, { yOff: 0.02 }),
          this.ribbonGeometry(i0, i1, (i) => c(i) - p.width / 2 + 0.12, (i) => c(i) - p.width / 2 + 0.3, { yOff: 0.02 }),
        ]),
        white
      )
    );

    const sA = p.start + p.rampIn, sB = p.start + p.len - p.rampOut;
    const pt = {};
    const mt = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pv = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    // low pit wall on the track side of the lane
    const count = Math.floor((sB - sA) / 6);
    const wm = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xcfd2d6, roughness: 0.8 }), count);
    for (let k = 0; k < count; k++) {
      const s = sA + k * 6 + 3;
      tr.pointAt(s, tr.pitCentre(s) + p.width / 2 + 0.35, pt);
      pv.set(pt.x, pt.h + 0.55, -pt.y);
      q.setFromAxisAngle(up, pt.heading);
      sc.set(6.05, 1.1, 0.4);
      mt.compose(pv, q, sc);
      wm.setMatrixAt(k, mt);
    }
    wm.castShadow = true;
    wm.receiveShadow = true;
    this.group.add(wm);

    // garage building behind the lane
    const depth = 14, hgt = 7;
    const nseg = Math.floor((sB - sA) / 6);
    const bm = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xe6e8ec, roughness: 0.7 }), nseg);
    for (let k = 0; k < nseg; k++) {
      const s = sA + k * 6 + 3;
      tr.pointAt(s, tr.pitCentre(s) - p.width / 2 - 0.8 - depth / 2, pt);
      pv.set(pt.x, pt.h + hgt / 2, -pt.y);
      q.setFromAxisAngle(up, pt.heading);
      sc.set(6.02, hgt, depth);
      mt.compose(pv, q, sc);
      bm.setMatrixAt(k, mt);
    }
    bm.castShadow = true;
    bm.receiveShadow = true;
    this.group.add(bm);
    // roof canopy over the lane edge
    const cm = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0x2c3036, roughness: 0.6 }), nseg);
    for (let k = 0; k < nseg; k++) {
      const s = sA + k * 6 + 3;
      tr.pointAt(s, tr.pitCentre(s) - p.width / 2 + 1.2, pt);
      pv.set(pt.x, pt.h + 4.6, -pt.y);
      q.setFromAxisAngle(up, pt.heading);
      sc.set(6.02, 0.25, 4.4);
      mt.compose(pv, q, sc);
      cm.setMatrixAt(k, mt);
    }
    cm.castShadow = true;
    this.group.add(cm);

    // garage doors, team signs, name labels and painted service boxes: one merged mesh per kind
    const place = (geo, x, y, z, rotY, pitchX = 0) => {
      if (pitchX) geo.rotateX(pitchX);
      geo.rotateY(rotY);
      geo.translate(x, y, z);
      return geo;
    };
    const doors = [], signs = [], labels = [], boxes = [];
    const atlas = document.createElement('canvas');
    atlas.width = 512;
    atlas.height = 96 * TEAMS.length;
    const ag = atlas.getContext('2d');
    ag.textAlign = 'center';
    ag.textBaseline = 'middle';
    ag.font = '900 64px "Arial Black", Impact, sans-serif';
    const col = (g, hex, a = 1) => {
      const c = new THREE.Color(hex);
      const n = g.attributes.position.count;
      const arr = new Float32Array(n * 4);
      for (let i = 0; i < n; i++) arr.set([c.r, c.g, c.b, a], i * 4);
      g.setAttribute('color', new THREE.BufferAttribute(arr, 4));
      return g;
    };
    TEAMS.forEach((team, ti) => {
      const box = tr.pitBox(ti);
      tr.pointAt(box.s, tr.pitCentre(box.s) - p.width / 2 - 0.78, pt);
      const rot = pt.heading + Math.PI;
      doors.push(place(new THREE.PlaneGeometry(4.8, 3.4), pt.x, pt.h + 1.7, -pt.y, rot));
      signs.push(col(place(new THREE.PlaneGeometry(4.8, 1.0), pt.x, pt.h + 4.05, -pt.y, rot), team.color));
      ag.fillStyle = team.id === 'solace' || team.id === 'tempest' || team.id === 'aurelian' ? '#111' : '#fff';
      ag.fillText(team.short.toUpperCase(), 256, ti * 96 + 50, 480);
      const lg = new THREE.PlaneGeometry(4.4, 0.8);
      const uv = lg.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setY(i, 1 - (ti + 1 - uv.getY(i)) / TEAMS.length);
      labels.push(place(lg, pt.x, pt.h + 4.05, -pt.y, rot).translate(-Math.sin(rot) * 0.03, 0, -Math.cos(rot) * 0.03));
      tr.pointAt(box.s, box.d, pt);
      boxes.push(col(place(new THREE.PlaneGeometry(6.4, 3.4), pt.x, pt.h + 0.03, -pt.y, pt.heading, -Math.PI / 2), team.color, 0.55));
    });
    const tAtlas = new THREE.CanvasTexture(atlas);
    tAtlas.colorSpace = THREE.SRGBColorSpace;
    this.group.add(new THREE.Mesh(mergeGeometries(doors), new THREE.MeshStandardMaterial({ map: TX.pitDoorTexture(), roughness: 0.6 })));
    this.group.add(new THREE.Mesh(mergeClean2(signs), new THREE.MeshBasicMaterial({ vertexColors: true })));
    this.group.add(new THREE.Mesh(mergeGeometries(labels), new THREE.MeshBasicMaterial({ map: tAtlas, transparent: true })));
    const bxm = new THREE.Mesh(mergeClean2(boxes), new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4, depthWrite: false }));
    this.group.add(bxm);
    this.pitInfo = { sA, sB };
  }

  // ---- start line + gantry -------------------------------------------------------------------------------
  buildStartLine() {
    const tr = this.track, N = tr.N;
    const i0 = 0;
    const mat = new THREE.MeshBasicMaterial({ map: this.tex.start, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    this.tex.start.repeat.set(8, 1);
    const g = this.ribbonGeometry(N - 1, 1, (i) => -tr.wr[i], (i) => tr.wl[i], { yOff: 0.018, vLen: 2.4, uRepeat: (tr.wl[0] + tr.wr[0]) / 1.2 });
    // narrow: keep only ~2.4 m long strip around s = 0
    const strip = new THREE.Mesh(g, mat);
    this.group.add(strip);
    // grid slot markings
    const slots = [];
    const pt = {};
    const white = new THREE.MeshBasicMaterial({ color: 0xf2f2f2, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
    const planes = [];
    for (let k = 0; k < 20; k++) {
      const sl = tr.gridSlot(k);
      for (const [dl, ds2, w, l] of [[0, 0, 3.0, 0.14], [-1.5, 2.2, 0.14, 4.4]]) {
        tr.pointAt(sl.s - ds2 + 0.0, sl.d + dl, pt);
        const geo = new THREE.PlaneGeometry(l >= w ? l : w, l >= w ? w : l);
        geo.rotateX(-Math.PI / 2);
        geo.rotateY(pt.heading);
        geo.translate(pt.x, pt.h + 0.02, -pt.y);
        planes.push(geo);
      }
      // front T
      tr.pointAt(sl.s + 0.3, sl.d, pt);
      const t1 = new THREE.PlaneGeometry(0.14, 3.0);
      t1.rotateX(-Math.PI / 2);
      t1.rotateY(pt.heading);
      t1.translate(pt.x, pt.h + 0.02, -pt.y);
      planes.push(t1);
    }
    this.group.add(new THREE.Mesh(mergeGeometries(planes), white));

    // gantry just after the line
    const gp = tr.pointAt(0.0, 0);
    const w = tr.wl[0] + tr.wr[0] + 5;
    const gantry = new THREE.Group();
    const steel = new THREE.MeshStandardMaterial({ color: 0x30343a, roughness: 0.5, metalness: 0.6 });
    const beam = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, w + 2), steel);
    beam.position.set(0, 7.0, 0);
    gantry.add(beam);
    for (const s of [-1, 1]) {
      const pylon = new THREE.Mesh(new THREE.BoxGeometry(1.2, 7.5, 1.2), steel);
      pylon.position.set(0, 3.75, (s * (w + 1)) / 2);
      gantry.add(pylon);
    }
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.1, 8.6), new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.4 }));
    panel.position.set(-0.7, 6.2, 0);
    gantry.add(panel);
    this.startLights = [];
    for (let k = 0; k < 5; k++) {
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 12), new THREE.MeshBasicMaterial({ color: 0x330505 }));
      lamp.position.set(-1.05, 6.2, (k - 2) * 1.6);
      lamp.scale.x = 0.5;
      gantry.add(lamp);
      this.startLights.push(lamp);
    }
    // sponsor banner on the beam
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.7, 1.4), new THREE.MeshBasicMaterial({ map: TX.billboardTexture(2) }));
    banner.position.set(-0.56, 7.0, 0);
    banner.rotation.y = -Math.PI / 2;
    gantry.add(banner);
    gantry.position.set(gp.x, gp.h, -gp.y);
    gantry.rotation.y = gp.heading;
    gantry.traverse((o) => (o.castShadow = true));
    this.group.add(gantry);
    this.gantry = gantry;
  }

  setStartLights(n, go = false) {
    this.startLights.forEach((l, k) => {
      const on = k < n;
      l.material.color.set(on ? 0xff1a1a : go ? 0x0a0a0c : 0x330505);
    });
  }

  // ---- scenery ---------------------------------------------------------------------------------------------------
  buildScenery() {
    const tr = this.track, th = this.theme, N = tr.N;
    this.buildTrees();
    this.buildStands();
    this.buildBillboards();
    if (th.buildings) this.buildBuildings();
  }

  /** Samples a world point outside the track at (s, side, distance beyond the wall). */
  outsidePoint(s, side, extra, out = {}) {
    const tr = this.track;
    const i = tr.idx(s);
    const d = side * (tr.wallDist(i, side) + extra);
    tr.pointAt(s, d, out);
    return out;
  }

  clearOfTrack(x, y, margin) {
    const tr = this.track;
    const pr = tr.project(x, y, -1, this._pr || (this._pr = { i: 0, t: 0, s: 0, d: 0, dist: 0 }));
    const side = pr.d >= 0 ? 1 : -1;
    return pr.dist > tr.wallDist(pr.i, side) + margin;
  }

  groundHeight(x, y) {
    // sample terrain heightfield
    const b = this.bounds;
    const cell = 30;
    const nx = Math.ceil((b.maxX - b.minX) / cell);
    const gx = (x - b.minX) / cell, gy = (y - b.minY) / cell;
    const ix = clamp(Math.floor(gx), 0, nx - 1), iy = Math.floor(gy);
    const arr = this.terrain.geometry.attributes.position;
    const h = (i, j) => arr.getY(j * (nx + 1) + i);
    const fx = gx - ix, fy = gy - iy;
    const j = clamp(iy, 0, Math.ceil((b.maxY - b.minY) / cell) - 1);
    return lerp(lerp(h(ix, j), h(ix + 1, j), fx), lerp(h(ix, j + 1), h(ix + 1, j + 1), fx), fy);
  }

  buildTrees() {
    const th = this.theme, tr = this.track;
    const kind = th.trees?.kind || 'broadleaf';
    const density = (th.trees?.density ?? 0.4) * (this.quality === 'low' ? 0.4 : this.quality === 'medium' ? 0.7 : 1);
    if (density <= 0.01) return;
    const rnd = this.rnd;
    let trunkGeo, leafGeo;
    const brown = new THREE.Color('#4a3524');
    const paint = (g, c) => {
      const n = g.attributes.position.count;
      const col = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) col.set([c.r, c.g, c.b], i * 3);
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      return g;
    };
    if (kind === 'pine') {
      trunkGeo = paint(new THREE.CylinderGeometry(0.25, 0.4, 5, 6).translate(0, 2.5, 0), brown);
      const parts = [];
      for (let k = 0; k < 5; k++) {
        const r = 3.4 - k * 0.55;
        parts.push(paint(new THREE.ConeGeometry(r, 3.4, 8).translate(0, 4.2 + k * 2.1, 0), new THREE.Color().setHSL(0.36, 0.45, 0.17 + k * 0.012)));
      }
      leafGeo = mergeGeometries(parts);
      this.treeScale = [1.1, 1.9];
    } else if (kind === 'palm') {
      trunkGeo = paint(new THREE.CylinderGeometry(0.2, 0.32, 9, 6).translate(0, 4.5, 0), new THREE.Color('#8a6c4a'));
      const fr = [];
      for (let k = 0; k < 8; k++) {
        const g = new THREE.PlaneGeometry(1.1, 5, 1, 3);
        g.rotateX(-Math.PI / 2 + 0.5);
        g.translate(0, 0, 2.4);
        g.rotateY((k / 8) * Math.PI * 2);
        g.translate(0, 9, 0);
        fr.push(paint(g, new THREE.Color('#2f7a3a')));
      }
      leafGeo = mergeGeometries(fr);
      this.treeScale = [0.9, 1.3];
    } else {
      trunkGeo = paint(new THREE.CylinderGeometry(0.3, 0.5, 4.2, 6).translate(0, 2.1, 0), brown);
      const blobs = [];
      const offs = [[0, 6.2, 0, 3.4], [1.9, 5.2, 0.6, 2.5], [-1.7, 5.4, -0.9, 2.6], [0.4, 7.6, 0.4, 2.4]];
      for (const [x, y, z, r] of offs) blobs.push(paint(new THREE.IcosahedronGeometry(r, 1).translate(x, y, z), new THREE.Color().setHSL(0.27 + rnd() * 0.04, 0.45, 0.24 + rnd() * 0.05)));
      leafGeo = mergeGeometries(blobs);
      this.treeScale = [0.8, 1.5];
    }
    const total = Math.floor(2200 * density * (tr.length / 5000));
    const mats = { trunk: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }), leaf: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: kind !== 'palm', side: kind === 'palm' ? THREE.DoubleSide : THREE.FrontSide }) };
    const trunks = new THREE.InstancedMesh(trunkGeo, mats.trunk, total);
    const leaves = new THREE.InstancedMesh(leafGeo, mats.leaf, total);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3();
    const col = new THREE.Color();
    let n = 0;
    const pt = {};
    let tries = 0;
    while (n < total && tries < total * 12) {
      tries++;
      const sArc = rnd() * tr.length;
      const side = rnd() < 0.5 ? 1 : -1;
      const near = rnd() < 0.7;
      const extra = near ? 6 + rnd() * 45 : 20 + Math.pow(rnd(), 1.5) * 260;
      this.outsidePoint(sArc, side, extra, pt);
      if (!this.clearOfTrack(pt.x, pt.y, 7)) continue;
      const gy = this.groundHeight(pt.x, pt.y);
      if (this.waterLevel != null && gy < this.waterLevel + 0.6) continue;
      p.set(pt.x, gy - 0.1, -pt.y);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * 6.28);
      const sc = this.treeScale[0] + rnd() * (this.treeScale[1] - this.treeScale[0]);
      s.set(sc * (0.85 + rnd() * 0.3), sc * (0.85 + rnd() * 0.4), sc * (0.85 + rnd() * 0.3));
      m.compose(p, q, s);
      trunks.setMatrixAt(n, m);
      leaves.setMatrixAt(n, m);
      col.setHSL(0.0, 0, 0.8 + rnd() * 0.4);
      leaves.setColorAt(n, col);
      n++;
    }
    trunks.count = leaves.count = n;
    trunks.castShadow = false;
    leaves.castShadow = false;
    this.group.add(trunks, leaves);
  }

  buildStands() {
    const tr = this.track, th = this.theme;
    const count = th.stands ?? 6;
    if (!count) return;
    const crowdTex = this.tex.crowd.clone();
    crowdTex.needsUpdate = true;
    const tierGeo = new THREE.BoxGeometry(1, 1, 1);
    const uv = tierGeo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 4, uv.getY(i));
    const pt = {};
    const spots = [{ s: tr.length - 70, side: 1, len: 240 }, { s: 200, side: 1, len: 160 }];
    const cs = [...tr.corners].sort((a, b) => b.maxK - a.maxK);
    for (const c of cs) {
      if (spots.length >= count) break;
      spots.push({ s: c.sApex, side: c.sign > 0 ? 1 : -1, len: 90 + this.rnd() * 60 });
    }
    while (spots.length < count) spots.push({ s: this.rnd() * tr.length, side: this.rnd() < 0.5 ? 1 : -1, len: 100 });
    const tiers = [], bases = [], roofs = [];
    const tierH = 0.9, tierD = 1.1, nT = 7, step = 4;
    for (const sp of spots) {
      const segs = Math.floor(sp.len / step);
      for (let k = 0; k < segs; k++) {
        const s = sp.s - sp.len / 2 + k * step + step / 2;
        this.outsidePoint(s, sp.side, 8 + nT * tierD * 0.5, pt);
        if (!this.clearOfTrack(pt.x, pt.y, 4)) continue;
        const gy = Math.max(this.groundHeight(pt.x, pt.y), tr.at(tr.z, s) - 0.1);
        for (let t = 0; t < nT; t++) {
          this.outsidePoint(s, sp.side, 8 + (t + 0.5) * tierD, pt);
          tiers.push([pt.x, gy + t * tierH + tierH / 2, -pt.y, pt.heading, step, tierH, tierD]);
        }
        this.outsidePoint(s, sp.side, 8 + (nT * tierD) / 2, pt);
        bases.push([pt.x, gy + 0.3, -pt.y, pt.heading, step, 0.6, tierD * nT]);
        if (k % 2 === 0) roofs.push([pt.x, gy + nT * tierH + 3.4, -pt.y, pt.heading, step * 2, 0.25, tierD * (nT + 2)]);
      }
    }
    const mk = (list, geo, mat) => {
      if (!list.length) return;
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      const m = new THREE.Matrix4(), q = new THREE.Quaternion(), pv = new THREE.Vector3(), sc = new THREE.Vector3();
      list.forEach((e, k) => {
        pv.set(e[0], e[1], e[2]);
        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), e[3]);
        sc.set(e[4], e[5], e[6]);
        m.compose(pv, q, sc);
        im.setMatrixAt(k, m);
      });
      im.castShadow = false;
      im.receiveShadow = true;
      this.group.add(im);
    };
    mk(tiers, tierGeo, new THREE.MeshStandardMaterial({ map: crowdTex, roughness: 0.95 }));
    mk(bases, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0x9a9da3, roughness: 0.9 }));
    mk(roofs, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xe8eaee, roughness: 0.6, metalness: 0.2 }));
  }

  buildBillboards() {
    const tr = this.track;
    const n = Math.floor(tr.length / 450);
    const pt = {};
    const byTex = new Map();
    const posts = [];
    for (let k = 0; k < n; k++) {
      const s = (k + 0.5) * (tr.length / n) + this.rnd() * 60;
      const side = this.rnd() < 0.5 ? 1 : -1;
      this.outsidePoint(s, side, 4.5, pt);
      if (!this.clearOfTrack(pt.x, pt.y, 3)) continue;
      const gy = Math.max(this.groundHeight(pt.x, pt.y), tr.at(tr.z, s));
      const rot = pt.heading + (side > 0 ? 0 : Math.PI);
      const v = k % 6;
      const g = new THREE.PlaneGeometry(14, 3.5);
      g.translate(0, 4.6, 0);
      g.rotateY(rot);
      g.translate(pt.x, gy, -pt.y);
      // plane is single-sided; add the back face too so it reads from behind
      if (!byTex.has(v)) byTex.set(v, []);
      byTex.get(v).push(g);
      for (const x of [-5.5, 5.5]) posts.push([pt.x + Math.cos(rot) * x, gy + 2.5, -pt.y - Math.sin(rot) * x]);
    }
    if (!this.billTex) this.billTex = [0, 1, 2, 3, 4, 5].map((i) => TX.billboardTexture(i));
    for (const [v, list] of byTex) this.group.add(new THREE.Mesh(mergeGeometries(list), new THREE.MeshBasicMaterial({ map: this.billTex[v], side: THREE.DoubleSide })));
    const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.12, 0.12, 5, 6), new THREE.MeshStandardMaterial({ color: 0x555a60, roughness: 0.6, metalness: 0.5 }), posts.length);
    const m = new THREE.Matrix4();
    posts.forEach((p, i) => {
      m.makeTranslation(p[0], p[1], p[2]);
      im.setMatrixAt(i, m);
    });
    this.group.add(im);
  }

  buildBuildings() {
    const tr = this.track;
    const pt = {};
    const facades = [3, 5, 8, 12, 15].map((sd, k) => new THREE.MeshStandardMaterial({ map: TX.facadeTexture(sd, ['#e8dcc6', '#d9c7a7', '#f1ece0', '#c9b8a0', '#e3d0cf'][k]), roughness: 0.85 }));
    const buckets = facades.map(() => []);
    const roofGeos = [];
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), pv = new THREE.Vector3(), sc = new THREE.Vector3();
    let s = 0;
    while (s < tr.length) {
      for (const side of [1, -1]) {
        if (this.rnd() < 0.2) continue;
        const gap = 4 + this.rnd() * 18;
        this.outsidePoint(s, side, gap + 3, pt);
        if (!this.clearOfTrack(pt.x, pt.y, gap)) continue;
        const w = 18 + this.rnd() * 22, d = 16 + this.rnd() * 14, h = 14 + this.rnd() * 38;
        this.outsidePoint(s, side, gap + 3 + d / 2, pt);
        const gy = Math.max(this.groundHeight(pt.x, pt.y), tr.at(tr.z, s) - 0.2);
        const geo = new THREE.BoxGeometry(w, h, d);
        const uv = geo.attributes.uv;
        const rx = Math.max(1, Math.round(w / 16)), ry = Math.max(1, Math.round(h / 20));
        for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * rx, uv.getY(i) * ry);
        q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), pt.heading);
        m.compose(pv.set(pt.x, gy + h / 2 - 0.3, -pt.y), q, sc.set(1, 1, 1));
        geo.applyMatrix4(m);
        buckets[Math.floor(this.rnd() * facades.length)].push(geo);
        const r = new THREE.BoxGeometry(w + 1, 1.2, d + 1);
        m.compose(pv.set(pt.x, gy + h + 0.3, -pt.y), q, sc.set(1, 1, 1));
        r.applyMatrix4(m);
        roofGeos.push(r);
      }
      s += 22 + this.rnd() * 30;
    }
    buckets.forEach((list, k) => {
      if (list.length) this.group.add(new THREE.Mesh(mergeGeometries(list), facades[k]));
    });
    if (roofGeos.length) this.group.add(new THREE.Mesh(mergeGeometries(roofGeos), new THREE.MeshStandardMaterial({ color: 0x8f4a35, roughness: 0.9 })));
  }

  buildBrakeBoards(profile) {
    const tr = this.track, N = tr.N;
    const v = profile.v;
    const pt = {};
    let i = 0;
    const zones = [];
    while (i < N) {
      let j = i;
      while (j + 1 < i + N && v[(j + 1) % N] < v[j % N] - 0.02) j++;
      if (j - i > 8) {
        const v0 = v[i % N], v1 = v[j % N];
        if (v0 - v1 > 14) zones.push({ start: i % N, end: j % N, drop: v0 - v1 });
      }
      i = j + 1;
    }
    const labels = [200, 150, 100, 50];
    const byLabel = labels.map(() => []);
    const sticks = [];
    for (const z of zones) {
      const sEnd = z.end * tr.ds;
      for (let k = 0; k < 4; k++) {
        const s = sEnd - labels[k];
        const i0 = tr.idx(s);
        const lat = -Math.min(tr.wr[i0] + tr.kr[i0] + 1.6, tr.wallDist(i0, -1) - 0.5);
        tr.pointAt(s, lat, pt);
        const g = new THREE.PlaneGeometry(0.9, 0.9);
        g.translate(0, 1.15, 0);
        g.rotateY(pt.heading - Math.PI / 2); // facing oncoming traffic
        g.translate(pt.x, pt.h, -pt.y);
        byLabel[k].push(g);
        sticks.push([pt.x, pt.h + 0.55, -pt.y]);
      }
    }
    byLabel.forEach((list, k) => {
      if (!list.length) return;
      const tex = TX.labelTexture(String(labels[k]), '#111', '#f4f4f0', 128, 128);
      this.group.add(new THREE.Mesh(mergeGeometries(list), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide })));
    });
    if (sticks.length) {
      const im = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.03, 0.03, 1.1, 5), new THREE.MeshStandardMaterial({ color: 0x777777 }), sticks.length);
      const m = new THREE.Matrix4();
      sticks.forEach((p, i) => {
        m.makeTranslation(p[0], p[1], p[2]);
        im.setMatrixAt(i, m);
      });
      this.group.add(im);
    }
    this.brakeZones = zones;
  }

  buildMountains() {
    const th = this.theme;
    const b = this.bounds;
    const cx = (b.minX + b.maxX) / 2, cy = (b.minY + b.maxY) / 2;
    const hw = (b.maxX - b.minX) / 2, hh = (b.maxY - b.minY) / 2;
    const seg = 220;
    const pos = [], col = [], idx = [];
    const c0 = new THREE.Color(th.fog), c1 = new THREE.Color(th.grass[0]).multiplyScalar(0.55), c2 = new THREE.Color('#8e939a');
    const amp = 160 + 520 * (th.hills ?? 0.3);
    const radii = [0, 700, 2200];
    for (let r = 0; r < 3; r++) {
      for (let i = 0; i <= seg; i++) {
        const a = (i / seg) * Math.PI * 2;
        const ca = Math.cos(a), sa = Math.sin(a);
        const tRay = Math.min(hw / Math.max(Math.abs(ca), 1e-6), hh / Math.max(Math.abs(sa), 1e-6));
        const R = tRay + radii[r] - 40;
        const n = fbm(ca * 2.2 + 5, sa * 2.2 + 5, 5);
        const hgt = r === 0 ? -9 : r === 1 ? amp * (0.12 + n * 0.8) : amp * (0.25 + n * 1.5);
        pos.push(cx + ca * R, hgt, -(cy + sa * R));
        const t = clamp(hgt / amp, 0, 1);
        const c = new THREE.Color().copy(c1).lerp(c2, t * 0.9).lerp(c0, 0.25 + 0.2 * r);
        col.push(c.r, c.g, c.b);
      }
    }
    for (let r = 0; r < 2; r++) {
      for (let i = 0; i < seg; i++) {
        const a = r * (seg + 1) + i, bb = a + 1, c = a + seg + 1, d = c + 1;
        idx.push(a, c, bb, bb, c, d);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    const mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, side: THREE.DoubleSide, flatShading: true }));
    this.group.add(mesh);
  }

  update(dt, time) {
    this.sky.material.uniforms.time.value = time;
    if (this.water) this.water.position.y = this.waterLevel + Math.sin(time * 0.5) * 0.05;
  }
}
