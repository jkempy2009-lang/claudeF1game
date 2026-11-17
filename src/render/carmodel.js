import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { COMPOUNDS } from '../sim/carspec.js';
import * as TX from './textures.js';
import { clamp, lerp } from '../util/math.js';
import { loftBody, wing, ribbon, rod, plate, panel, blob, tube } from './carshape.js';

// Car frame: +X forward, +Y up, -Z is the car's left (physics y maps to -Z).
const WHEEL_R = 0.36;

const WING_PIVOT_FL = new THREE.Vector3(2.55, 0.15, -0.1), WING_PIVOT_FR = new THREE.Vector3(2.55, 0.15, 0.1), WING_PIVOT_R = new THREE.Vector3(-2.4, 0.8, 0);
const pivotTmp = new THREE.Vector3();
/** Tilts a wing about its mount point (not the model origin, which would swing it metres away) and drops it by dy. */
function bendAbout(obj, pivot, rx, rz, dy) {
  obj.rotation.set(rx, 0, rz);
  obj.position.copy(pivot).sub(pivotTmp.copy(pivot).applyEuler(obj.rotation));
  obj.position.y += dy;
}

/** Merge geometries after dropping attributes they don't all share (UVs). */
function mergeClean(list) {
  for (const g of list) g.deleteAttribute('uv');
  return mergeGeometries(list);
}

function colorize(g, fn) {
  const p = g.attributes.position;
  const col = new Float32Array(p.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    fn(c, p.getX(i), p.getY(i), p.getZ(i));
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

const solid = (hex) => (c) => c.set(hex);

/**
 * The paint scheme as a function of position. Every car has bare carbon along its lower edge and at the tip of the nose;
 * the team's livery adds its accent colour as a centre stripe, a two-tone split or diagonal bands.
 */
function paintFn(team) {
  const base = new THREE.Color(team.color), acc = new THREE.Color(team.accent), dark = new THREE.Color('#111317');
  return (part) => (c, x, y, z) => {
    c.copy(base);
    const az = Math.abs(z);
    if (part === 'mirror') return void c.copy(acc);
    switch (team.livery) {
      case 'stripe':
        if (az < 0.062 && (part === 'airbox' || (part === 'body' && y > 0.3))) c.copy(acc);
        if (part === 'pod' && y > 0.5 && x < 0.55) c.copy(acc);
        break;
      case 'split':
        if (part === 'pod' && y < 0.34) c.copy(acc);
        if (part === 'body' && x > 2.4) c.copy(acc);
        if ((part === 'airbox' || part === 'fin') && x < -1.05) c.copy(acc);
        break;
      case 'chevron': {
        const t0 = x * 1.5 + y * 2.6, t = t0 - Math.floor(t0);
        if ((part === 'pod' || part === 'airbox') && t > 0.8) c.copy(acc);
        if (part === 'body' && x > 2.6) c.copy(acc);
        if (part === 'fin') c.copy(acc);
        break;
      }
    }
    if ((part === 'body' || part === 'pod') && y < 0.17) c.copy(dark);
    if (part === 'body' && x > 2.94) c.copy(dark);
  };
}

function textColorFor(hex) {
  const c = new THREE.Color(hex);
  return c.r * 0.299 + c.g * 0.587 + c.b * 0.114 > 0.6 ? '#111' : '#fff';
}

const shared = {};
function sharedBlobMaterial() {
  if (shared.blob) return shared.blob;
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 64;
  const g = c.getContext('2d');
  g.scale(1, 0.5); // the gradient is drawn in the squashed space, so it becomes an ellipse
  const grad = g.createRadialGradient(64, 64, 4, 64, 64, 62);
  grad.addColorStop(0, 'rgba(0,0,0,0.78)');
  grad.addColorStop(0.55, 'rgba(0,0,0,0.42)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  shared.blob = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  shared.blob.userData.shared = true;
  return shared.blob;
}
function sharedMaterials() {
  if (shared.ready) return shared;
  shared.carbon = new THREE.MeshStandardMaterial({ color: 0x15171b, roughness: 0.42, metalness: 0.45 });
  shared.tyre = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.92, metalness: 0 });
  shared.rim = new THREE.MeshStandardMaterial({ color: 0x2b2e34, roughness: 0.35, metalness: 0.85 });
  shared.metal = new THREE.MeshStandardMaterial({ color: 0x555a62, roughness: 0.4, metalness: 0.8 });
  shared.helmetVisor = new THREE.MeshStandardMaterial({ color: 0x0b0b10, roughness: 0.1, metalness: 0.6 });
  for (const m of [shared.carbon, shared.tyre, shared.rim, shared.metal, shared.helmetVisor]) m.userData.shared = true;
  shared.tyreGeoF = null;
  shared.ready = true;
  return shared;
}

/** Tyres and wheel covers share one mesh: the rubber (the darkest vertex colour) is matt, the cover and its lip are satin metal. */
function sharedWheelMaterial() {
  if (shared.wheel) return shared.wheel;
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0 });
  m.customProgramCacheKey = () => 'apexWheel';
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n  roughnessFactor = vColor.r < 0.012 ? 0.93 : 0.38;')
      .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\n  metalnessFactor = vColor.r < 0.012 ? 0.0 : 0.75;');
  };
  m.userData.shared = true;
  shared.wheel = m;
  return m;
}

/** Shared render switches (set from the settings): calm = no strobing lamps. */
export const VIEW_OPTS = { calm: false };

export class CarView {
  /**
   * @param {object} team  from teams.js
   * @param {object} info  car.info (number, isPlayer, code)
   */
  constructor(team, info, opts = {}) {
    const S = sharedMaterials();
    this.team = team;
    this.info = info;
    this.group = new THREE.Group();
    this.model = new THREE.Group(); // carries pitch/roll
    this.group.add(this.model);
    this.ghost = !!opts.ghost;
    // three levels of mesh density: 'high' for the car the player drives (and the showroom), 'mid' for the rest of the grid,
    // 'low' for the low quality setting, the ghost and the safety car. The shape is the same; only the facets get larger.
    const fine = opts.detail !== 'low';
    const full = opts.detail === 'high';
    this.lodFar = false;

    // ---------------- bodywork (see carshape.js for the builders)
    const Q = full ? 1 : fine ? 0.7 : 0.5; // mesh density
    const seg = Math.round(28 * Q), sub = full ? 3 : 2;
    const curve = full ? 6 : fine ? 4 : 3; // points per span of a plate's outline
    const bs = (n) => Math.max(6, Math.round(n * (full ? 1 : fine ? 0.7 : 0.55))); // segments of the small rounded parts
    const paint = [];
    const carbon = [];
    const podParts = [];
    const P = paintFn(team);
    // nose, survival cell and engine cover in one skin: a drooping nose that lands on the front wing, a flat-bottomed tub,
    // then the cover tightening into the "coke bottle" between the rear wheels
    const body = loftBody(
      [
        { x: 3.0, w: 0.035, yb: 0.125, yt: 0.165, nt: 2.2 },
        { x: 2.96, w: 0.075, yb: 0.1, yt: 0.2, nt: 2.2 },
        { x: 2.82, w: 0.1, yb: 0.1, yt: 0.265, nt: 2.3 },
        { x: 2.5, w: 0.125, yb: 0.125, yt: 0.335, nt: 2.4 },
        { x: 2.1, w: 0.165, yb: 0.14, yt: 0.41, nt: 2.5, nb: 3 },
        { x: 1.7, w: 0.215, yb: 0.13, yt: 0.485, nt: 2.6, nb: 3.5 },
        { x: 1.3, w: 0.275, yb: 0.11, yt: 0.555, nt: 2.8, nb: 4 },
        { x: 0.9, w: 0.315, yb: 0.095, yt: 0.61, nt: 3, nb: 4.5 },
        { x: 0.5, w: 0.335, yb: 0.09, yt: 0.635, nt: 3.2, nb: 5 },
        { x: 0.0, w: 0.34, yb: 0.09, yt: 0.64, nt: 3.2, nb: 5 },
        { x: -0.45, w: 0.335, yb: 0.09, yt: 0.625, nt: 3, nb: 5 },
        { x: -0.9, w: 0.29, yb: 0.095, yt: 0.57, nt: 2.8, nb: 4.5 },
        { x: -1.35, w: 0.215, yb: 0.105, yt: 0.49, nt: 2.6, nb: 4 },
        { x: -1.8, w: 0.15, yb: 0.13, yt: 0.4, nt: 2.5, nb: 3 },
        { x: -2.2, w: 0.1, yb: 0.17, yt: 0.33, nt: 2.4 },
        { x: -2.42, w: 0.06, yb: 0.2, yt: 0.29, nt: 2.2 },
      ],
      { seg, sub }
    );
    paint.push(colorize(body, P('body')));
    // roll hoop, airbox and the spine of the engine cover
    const airbox = loftBody(
      [
        { x: -0.1, w: 0.125, yb: 0.55, yt: 0.965, nt: 2.4, ym: 0.62 },
        { x: -0.3, w: 0.16, yb: 0.48, yt: 0.97, nt: 2.5, ym: 0.5 },
        { x: -0.6, w: 0.17, yb: 0.4, yt: 0.925, nt: 2.6, ym: 0.45 },
        { x: -1.0, w: 0.145, yb: 0.35, yt: 0.82, nt: 2.5, ym: 0.4 },
        { x: -1.4, w: 0.1, yb: 0.32, yt: 0.7, nt: 2.4, ym: 0.4 },
        { x: -1.8, w: 0.055, yb: 0.3, yt: 0.58, nt: 2.2, ym: 0.4 },
        { x: -2.15, w: 0.025, yb: 0.3, yt: 0.48, nt: 2.2, ym: 0.4 },
      ],
      { seg: Math.round(22 * Q), sub }
    );
    paint.push(colorize(airbox, P('airbox')));
    carbon.push(blob(-0.094, 0.855, 0, 0.012, 0.085, 0.092, bs(14), 6)); // the intake
    carbon.push(blob(-0.3, 0.982, 0, 0.05, 0.016, 0.075, bs(12), 6)); // T-cam
    paint.push(colorize(plate([[-0.85, 0.83], [-1.4, 0.8], [-2.02, 0.66], [-2.1, 0.47], [-1.5, 0.52], [-0.9, 0.62]], 0.014, 0, 0.004, curve), P('fin')));
    for (const side of [-1, 1]) {
      // sidepods: a tall inlet with the bodywork undercut beneath it, the top falling away towards the rear
      const pod = loftBody(
        [
          { x: 0.9, w: 0.2, yb: 0.31, yt: 0.56, zc: side * 0.5, nt: 4.5, nb: 4, lean: 0.02 },
          { x: 0.6, w: 0.235, yb: 0.235, yt: 0.6, zc: side * 0.52, nt: 3, nb: 3, lean: 0.045 },
          { x: 0.15, w: 0.25, yb: 0.16, yt: 0.595, zc: side * 0.53, nt: 3, nb: 3.2, lean: 0.05 },
          { x: -0.4, w: 0.245, yb: 0.11, yt: 0.54, zc: side * 0.51, nt: 2.8, nb: 3.5, lean: 0.035 },
          { x: -0.9, w: 0.215, yb: 0.1, yt: 0.44, zc: side * 0.44, nt: 2.6, nb: 3.5, lean: 0.02 },
          { x: -1.4, w: 0.165, yb: 0.1, yt: 0.33, zc: side * 0.34, nt: 2.5, nb: 3 },
          { x: -1.9, w: 0.1, yb: 0.11, yt: 0.24, zc: side * 0.23, nt: 2.4, nb: 3 },
        ],
        { seg: Math.round(22 * Q), sub }
      );
      podParts.push({ geo: colorize(pod, P('pod')), side });
      carbon.push(blob(0.905, 0.44, side * 0.5, 0.012, 0.09, 0.17, bs(14), 6)); // inlet
      // mirrors on stalks
      paint.push(colorize(blob(0.62, 0.745, side * 0.53, 0.05, 0.036, 0.095, bs(12), 6), P('mirror')));
      carbon.push(rod([0.63, 0.6, side * 0.3], [0.62, 0.735, side * 0.47], 0.011, 1.6, 6));
      // floor: the fences at the mouth of the tunnels, the lip along its edge, the fences in the diffuser
      for (const [z0, z1, z2, h] of fine ? [[0.33, 0.4, 0.5, 0.25], [0.43, 0.53, 0.66, 0.22], [0.52, 0.66, 0.77, 0.17]] : [[0.43, 0.53, 0.66, 0.22]]) {
        carbon.push(ribbon([{ x: 1.56, z: side * z0, y0: 0.09, y1: 0.11 }, { x: 1.42, z: side * (z0 + 0.01), y0: 0.09, y1: h }, { x: 1.22, z: side * z1, y0: 0.09, y1: h + 0.02 }, { x: 1.0, z: side * z2, y0: 0.09, y1: h - 0.05 }], { thick: 0.012, sub: full ? 3 : 2 }));
      }
      carbon.push(ribbon([{ x: 0.86, z: side * 0.785, y0: 0.09, y1: 0.1 }, { x: 0.5, z: side * 0.795, y0: 0.09, y1: 0.135 }, { x: -0.4, z: side * 0.795, y0: 0.09, y1: 0.135 }, { x: -1.05, z: side * 0.77, y0: 0.09, y1: 0.1 }], { thick: 0.014, sub: 2 }));
      for (const zf of fine ? [0.16, 0.33] : [0.25]) carbon.push(ribbon([{ x: -1.85, z: side * zf, y0: 0.07, y1: 0.12 }, { x: -2.1, z: side * (zf + 0.01), y0: 0.07, y1: 0.22 }, { x: -2.36, z: side * (zf + 0.03), y0: 0.08, y1: 0.33 }], { thick: 0.012, sub: 2 }));
    }
    // the floor itself, wide ahead of the rear wheels and tucked in between them, and the diffuser rising out of it
    const half = [[1.66, 0.2], [1.46, 0.44], [1.16, 0.69], [0.86, 0.785], [0, 0.8], [-0.9, 0.79], [-1.17, 0.74], [-1.29, 0.61], [-1.42, 0.53], [-2.0, 0.5], [-2.3, 0.46]];
    carbon.push(panel([[1.72, 0], ...half, [-2.32, 0], ...half.slice().reverse().map(([x, z]) => [x, -z])], 0.095, 0.04, 0.008, full ? 5 : 3));
    carbon.push(loftBody([{ x: -1.72, w: 0.46, yb: 0.06, yt: 0.1, nt: 6 }, { x: -2.0, w: 0.47, yb: 0.07, yt: 0.2, nt: 6 }, { x: -2.37, w: 0.48, yb: 0.1, yt: 0.34, nt: 6 }], { seg: 16, sub: 2 }));
    carbon.push(rod([-2.3, 0.4, 0], [-2.47, 0.415, 0], 0.045, 1, 12)); // exhaust
    // cockpit: the opening, the headrest and the halo
    carbon.push(loftBody([{ x: 0.7, w: 0.1, yb: 0.56, yt: 0.632, nt: 2.2 }, { x: 0.5, w: 0.19, yb: 0.56, yt: 0.646, nt: 2.4 }, { x: 0.1, w: 0.225, yb: 0.56, yt: 0.652, nt: 2.6 }, { x: -0.14, w: 0.21, yb: 0.56, yt: 0.652, nt: 2.6 }], { seg: 16, sub: 2 }));
    carbon.push(blob(-0.03, 0.7, 0, 0.11, 0.1, 0.215, bs(14), 6));
    // the halo is its own mesh: from the driver's seat only its centre pillar is drawn, slimmed down (as the eye, focused on
    // the road, sees it), so that it does not wall off the view
    const hr = 0.034;
    const haloG = [tube([[0.8, 0.6, 0], [0.66, 0.78, 0], [0.5, 0.885, 0], [0.4, 0.92, 0]], hr, { seg: full ? 10 : 6, radial: full ? 8 : 6, flatZ: 0.75 })];
    for (const side of [-1, 1]) haloG.push(tube([[0.44, 0.915, 0], [0.3, 0.935, side * 0.13], [0.05, 0.925, side * 0.265], [-0.25, 0.86, side * 0.31], [-0.5, 0.7, side * 0.3]], hr * 0.9, { seg: full ? 14 : 8, radial: full ? 8 : 6 }));
    this.halo = new THREE.Mesh(mergeClean(haloG), S.carbon);
    this.haloSlim = new THREE.Mesh(tube([[0.84, 0.6, 0], [0.74, 0.76, 0], [0.66, 0.9, 0], [0.62, 1.02, 0]], 0.008, { seg: 8, radial: 6 }), S.carbon);
    this.haloSlim.visible = false;
    this.model.add(this.halo, this.haloSlim);

    // ---------------- wings (vertex-coloured: carbon elements, team-coloured endplates and top flap)
    const trimMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.34, metalness: 0.45 });
    const acc = new THREE.Color(team.accent);
    const base = new THREE.Color(team.color);
    const dk = new THREE.Color('#121419');
    const tint = (g, col) => colorize(g, (c) => c.copy(col));
    const around = full ? 6 : 4, wsub = full ? 2 : 1;
    const mkFW = (side) => {
      const els = [];
      for (let k = 0; k < 4; k++) {
        // k = 0 is the main plane, which runs under the nose; the three flaps start beside it. All four sweep back and rise outboard.
        const st = [];
        for (const zz of k === 0 ? [0, 0.22, 0.48, 0.72, 0.88, 0.955] : [0.115, 0.24, 0.48, 0.72, 0.88, 0.955]) {
          const u = zz / 0.955;
          st.push({
            z: side * zz,
            x: 3.03 - 0.13 * k - 0.18 * u * u * (1 - 0.1 * k),
            y: 0.072 + 0.04 * k + 0.008 * k * Math.sin(u * Math.PI),
            chord: (k === 0 ? 0.27 : 0.18) * (1 - 0.22 * u) * (k > 0 && zz < 0.2 ? 0.8 : 1),
            aoa: 0.04 + 0.11 * k + 0.02 * u * k,
            t: 0.1,
            camber: -0.06,
          });
        }
        els.push(tint(wing(st, { around, sub: wsub }), k === 3 ? base : dk));
      }
      // endplate: low at the front, tall at the back, turned outwards
      els.push(tint(ribbon([{ x: 3.01, z: side * 0.962, y0: 0.05, y1: 0.09 }, { x: 2.9, z: side * 0.964, y0: 0.045, y1: 0.15 }, { x: 2.74, z: side * 0.968, y0: 0.045, y1: 0.21 }, { x: 2.56, z: side * 0.976, y0: 0.045, y1: 0.245 }, { x: 2.44, z: side * 0.988, y0: 0.05, y1: 0.24 }, { x: 2.41, z: side * 0.992, y0: 0.08, y1: 0.19 }], { thick: 0.014, sub: full ? 3 : 2 }), acc));
      return new THREE.Mesh(mergeClean(els), trimMat);
    };
    this.frontWing = new THREE.Group();
    this.frontWingL = mkFW(-1);
    this.frontWingR = mkFW(1);
    this.frontWing.add(this.frontWingL, this.frontWingR);

    this.rearWing = new THREE.Group();
    const spoon = (u) => 0.05 * u * u; // deeper in the middle, lifting towards the endplates
    const zsR = [-0.52, -0.4, -0.2, 0, 0.2, 0.4, 0.52];
    const rw = [
      tint(wing(zsR.map((z) => ({ z, x: -2.1, y: 0.71 + spoon(z / 0.52), chord: 0.31, aoa: 0.2, t: 0.12, camber: -0.09 })), { around, sub: wsub }), dk),
      // beam wing, low between the endplates
      tint(wing([-0.5, 0, 0.5].map((z) => ({ z, x: -2.2, y: 0.4, chord: 0.17, aoa: 0.28, camber: -0.07 })), { around: 4, sub: 1 }), dk),
      tint(wing([-0.5, 0, 0.5].map((z) => ({ z, x: -2.32, y: 0.46, chord: 0.13, aoa: 0.5, camber: -0.07 })), { around: 4, sub: 1 }), dk),
      // swan-neck pylon
      tint(tube([[-1.9, 0.48, 0], [-2.04, 0.62, 0], [-2.16, 0.74, 0], [-2.26, 0.79, 0]], 0.04, { seg: 8, radial: 8, flatZ: 0.35 }), dk),
    ];
    for (const side of [-1, 1]) {
      // endplates: the team's colour above, bare carbon and narrower below the wing
      rw.push(tint(plate([[-2.03, 0.62], [-2.02, 0.8], [-2.1, 0.94], [-2.3, 0.995], [-2.6, 1.0], [-2.655, 0.9], [-2.65, 0.62], [-2.34, 0.6]], 0.018, side * 0.535, 0.004, curve), acc));
      rw.push(tint(plate([[-2.12, 0.3], [-2.07, 0.45], [-2.05, 0.63], [-2.34, 0.645], [-2.63, 0.63], [-2.62, 0.45], [-2.58, 0.3], [-2.35, 0.28]], 0.014, side * 0.535, 0.004, curve), dk));
    }
    this.rearWing.add(new THREE.Mesh(mergeClean(rw), trimMat));
    // DRS flap (pivots about its trailing edge)
    this.drsPivot = new THREE.Group();
    this.drsPivot.position.set(-2.56, 0.92, 0);
    const fl = 0.21, fa = 0.6;
    this.drsPivot.add(new THREE.Mesh(tint(wing(zsR.map((z) => ({ z: z * 0.985, x: fl * Math.cos(fa), y: -fl * Math.sin(fa) + spoon(z / 0.52), chord: fl, aoa: fa, t: 0.1, camber: -0.07 })), { around, sub: wsub }), base), trimMat));
    this.rearWing.add(this.drsPivot);

    // ---------------- suspension: wishbones, push rods and track rods (or drive shafts), hinged at the tub so they follow
    // the wheel as the suspension works (see update)
    const WF = 1.962, WR = -1.638;
    this.arms = [];
    for (const [wx, wz, tw, front] of [[WF, -1, 0.8, true], [WF, 1, 0.8, true], [WR, -1, 0.775, false], [WR, 1, 0.775, false]]) { // same order as the wheels: FL, FR, RL, RR
      const zi = wz * 0.16, zo = wz * (tw - (front ? 0.19 : 0.24));
      const rs = full ? 8 : fine ? 6 : 5;
      const rods = [
        rod([wx + 0.34, 0.41, zi], [wx + 0.02, 0.5, zo], 0.011, 2.4, rs), // upper wishbone
        rod([wx - 0.3, 0.4, zi], [wx - 0.02, 0.5, zo], 0.011, 2.4, rs),
        rod([wx + 0.36, 0.17, zi], [wx + 0.02, 0.21, zo], 0.012, 2.6, rs), // lower wishbone
        rod([wx - 0.32, 0.17, zi], [wx - 0.02, 0.21, zo], 0.012, 2.6, rs),
        rod([wx + 0.04, 0.44, zi], [wx, 0.23, zo], 0.01, 1.8, rs), // push rod
        front ? rod([wx + 0.14, 0.33, zi], [wx + 0.11, 0.36, zo], 0.009, 1.8) : rod([wx, 0.36, wz * 0.12], [wx, 0.36, zo], 0.024, 1), // track rod / drive shaft
      ];
      const g = mergeClean(fine ? rods : rods.slice(0, 4).concat(front ? [] : [rods[5]]));
      g.translate(-wx, -0.3, -zi);
      const arm = new THREE.Mesh(g, S.carbon);
      arm.position.set(wx, 0.3, zi);
      arm.userData = { side: wz, len: tw - 0.16 };
      this.arms.push(arm);
    }

    const bodyMat = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.3, metalness: 0.3, clearcoat: 1.0, clearcoatRoughness: 0.06 });
    this.bodyMat = bodyMat;
    this.model.add(new THREE.Mesh(mergeClean(paint), bodyMat), new THREE.Mesh(mergeClean(carbon), S.carbon), this.frontWing, this.rearWing, ...this.arms);
    if (fine && !this.ghost) this.buildSteeringWheel();
    // sidepods are separate meshes so they can crumple on their own when the car is hit from the side
    this.pods = podParts.map(({ geo, side }) => {
      const g = mergeClean([geo]);
      const m = new THREE.Mesh(g, bodyMat);
      m.userData = { base: g.attributes.position.array.slice(), side, d: 0 };
      this.model.add(m);
      return m;
    });

    // helmet: the driver's own colours, a dark visor
    const helmetColor = new THREE.Color().setHSL(((info.number * 53) % 360) / 360, 0.8, 0.5);
    const hg = blob(0.12, 0.745, 0, 0.165, 0.15, 0.14, full ? 20 : 12, full ? 14 : 8);
    const visor = new THREE.Color('#0a0b10'), white = new THREE.Color('#f4f4f4');
    this.helmet = new THREE.Mesh(
      colorize(hg, (c, x, y, z) => {
        c.copy(helmetColor);
        if (Math.abs(z) < 0.035 || y > 0.86) c.copy(white); // a stripe over the crown
        if (x > 0.19 && y > 0.72 && y < 0.8) c.copy(visor);
      }),
      new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.2, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.05 })
    );
    this.model.add(this.helmet);

    // number decals (merged: both sides of the engine cover + the top of the nose)
    const numTex = TX.numberTexture(info.number, textColorFor(team.color));
    const decalMat = new THREE.MeshBasicMaterial({ map: numTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
    const dg = [];
    for (const side of [-1, 1]) {
      const d = new THREE.PlaneGeometry(0.23, 0.23);
      if (side < 0) d.rotateY(Math.PI);
      d.translate(-0.62, 0.66, side * 0.172);
      dg.push(d);
    }
    const top = new THREE.PlaneGeometry(0.24, 0.24);
    top.rotateX(-Math.PI / 2);
    top.rotateY(-Math.PI / 2);
    top.rotateZ(-0.19); // the nose falls away towards the front
    top.translate(1.72, 0.502, 0);
    dg.push(top);
    this.decals = new THREE.Mesh(mergeGeometries(dg), decalMat);
    this.model.add(this.decals);

    // rain / brake light at the tail
    this.brakeLight = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.07, 3, 8), new THREE.MeshBasicMaterial({ color: 0x400000 }));
    this.brakeLight.position.set(-2.435, 0.3, 0);
    this.model.add(this.brakeLight);

    // ---------------- wheels: tyre + wheel cover in one vertex-coloured mesh, the compound stripe, the brake glow
    this.wheels = [];
    const compoundMat = new THREE.MeshBasicMaterial({ color: COMPOUNDS.medium.color });
    this.compoundMat = compoundMat;
    const tyreSeg = full ? 32 : fine ? 18 : 12;
    const wheelMat = sharedWheelMaterial();
    const rubber = new THREE.Color('#0e0e0f'), coverCol = new THREE.Color('#2a2d33'), coverLight = new THREE.Color('#4a4f58'), lipCol = new THREE.Color('#8a9099');
    const mkWheel = (front, left) => {
      const w = front ? 0.34 : 0.44;
      const parts = [];
      // a low-profile tyre with a slightly bulging sidewall and rounded shoulders (a lathe profile, not a cylinder)
      const hw = w / 2;
      const half = [[0.232, hw - 0.012], [0.25, hw], [0.3, hw + 0.004], [0.332, hw - 0.004], [0.35, hw - 0.028], [0.3585, hw - 0.062], [WHEEL_R, hw - 0.11]];
      const prof = half.map(([r, y]) => [r, -y]).concat(half.slice().reverse());
      const tyre = new THREE.LatheGeometry(prof.map(([r, y]) => new THREE.Vector2(r, y)), tyreSeg);
      tyre.deleteAttribute('uv');
      tyre.computeVertexNormals();
      tyre.rotateX(Math.PI / 2);
      parts.push(tint(tyre, rubber));
      const rings = [];
      for (const sd of [-1, 1]) {
        // wheel cover: a shallow dish with a bright lip and a centre nut; faint segments so that it can be seen turning
        const dish = new THREE.LatheGeometry((fine ? [[0.24, hw - 0.012], [0.234, hw - 0.004], [0.215, hw - 0.01], [0.15, hw - 0.016], [0.06, hw - 0.028], [0.045, hw - 0.04], [0.0, hw - 0.04]] : [[0.24, hw - 0.012], [0.232, hw - 0.004], [0.215, hw - 0.01], [0.055, hw - 0.03], [0.0, hw - 0.04]]).map(([r, y]) => new THREE.Vector2(r, y)), tyreSeg);
        dish.deleteAttribute('uv');
        dish.computeVertexNormals();
        dish.rotateX(Math.PI / 2);
        if (sd < 0) dish.rotateY(Math.PI);
        parts.push(colorize(dish, (c, x, y) => {
          const r = Math.hypot(x, y), a = Math.atan2(y, x);
          if (r > 0.21) c.copy(lipCol);
          else if (r < 0.05) c.copy(lipCol);
          else c.copy(Math.cos(a * 5) > 0.55 && r > 0.075 ? coverLight : coverCol);
        }));
        const ring = new THREE.RingGeometry(0.296, 0.314, tyreSeg);
        if (sd < 0) ring.rotateY(Math.PI);
        ring.translate(0, 0, sd * (hw + 0.006));
        rings.push(ring);
      }
      // glowing carbon disc seen through the wheel: the brightness follows the real disc temperature
      const glowMat = new THREE.MeshBasicMaterial({ color: 0xff5a10, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
      const glowGeo = [];
      for (const sd of [-1, 1]) {
        const g = new THREE.RingGeometry(0.07, 0.2, 18);
        if (sd < 0) g.rotateY(Math.PI);
        g.translate(0, 0, sd * (hw + 0.002));
        glowGeo.push(g);
      }
      const assembly = new THREE.Group();
      const spin = new THREE.Group();
      spin.add(new THREE.Mesh(mergeClean(parts), wheelMat));
      const glow = new THREE.Mesh(mergeClean(glowGeo), glowMat);
      glow.visible = false;
      spin.add(glow);
      const rg = mergeClean(rings);
      spin.add(new THREE.Mesh(rg, compoundMat));
      assembly.add(spin);
      this.model.add(assembly);
      return { assembly, spin, front, left, glow, glowMat };
    };
    this.wheelDefs = [mkWheel(true, true), mkWheel(true, false), mkWheel(false, true), mkWheel(false, false)];
    this.wheelFront = [this.wheelDefs[0], this.wheelDefs[1]];
    this.spinAngle = [0, 0, 0, 0];
    this.detailMeshes = [this.helmet, this.decals, this.brakeLight];

    this.group.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = !this.ghost;
        o.receiveShadow = false;
      }
    });
    for (const wd of this.wheelDefs) { wd.glow.castShadow = false; wd.glow.userData.noShadow = true; }
    if (!this.ghost) {
      // a soft contact shadow under the floor: grounds the car on every quality level (the shadow map only reaches the near cars)
      const blob = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 3.0), sharedBlobMaterial());
      blob.rotation.x = -Math.PI / 2;
      blob.position.set(0.1, 0.035, 0);
      blob.renderOrder = 2;
      blob.castShadow = blob.receiveShadow = false;
      blob.userData.noShadow = true;
      this.group.add(blob);
    }
    if (this.ghost) this.makeGhost();
    this.layoutWheels(1.962, 1.638, 1.6, 1.55, 3.6, 0);
    this.pitchSmooth = 0;
    this.rollSmooth = 0;
  }

  makeGhost() {
    this.group.traverse((o) => {
      if (o.isMesh) {
        o.material = o.material.clone();
        o.material.userData = {}; // a clone of a shared material is the ghost's own, so dispose() frees it
        o.material.transparent = true;
        o.material.opacity = 0.35;
        o.material.depthWrite = false;
      }
    });
  }

  setCompound(c) {
    this.compoundMat.color.set(c.color);
  }

  /** Update the car pose from the physics car; alpha interpolates between the last two physics steps. */
  update(car, alpha, dt, carSpec) {
    const spec = car.spec;
    const x = lerp(car.px, car.x, alpha), y = lerp(car.py, car.y, alpha);
    let dth = car.theta - car.ptheta;
    if (dth > Math.PI) dth -= 2 * Math.PI;
    if (dth < -Math.PI) dth += 2 * Math.PI;
    const th = car.ptheta + dth * alpha;
    const slopePitch = Math.atan(car.trackSlope * Math.cos(car.theta - car.trackHeading));
    this.group.position.set(x, car.trackH, -y);
    this.group.rotation.set(0, th, 0);
    // Suspension: each corner's spring travel follows its live vertical load (about 4 cm at full downforce). The body heaves,
    // pitches and rolls on the four travels while the wheels stay on the road, so the car squats, dives, leans and sits down at speed.
    const tv = this.travel || (this.travel = new Float32Array(4));
    const kS = clamp(dt * 12, 0, 1);
    const live = !!car.fz; // a replayed car is only a pose: no loads, so it sits at its static ride height
    const m = (car.mass || 800) * 9.81;
    for (let w = 0; w < 4; w++) {
      const stat = w < 2 ? (m * spec.weightFront) / 2 : (m * (1 - spec.weightFront)) / 2;
      const kerb = car.surf && car.surf[w] === 1 ? Math.sin(this.spinAngle[w] * 3.0) * 0.012 : 0; // SURF.KERB: the ridges work the wheel
      const want = live ? clamp((car.fz[w] - stat) / 150000, -0.03, 0.05) + kerb : 0;
      tv[w] += (want - tv[w]) * kS;
    }
    const heave = -(tv[0] + tv[1] + tv[2] + tv[3]) / 4;
    const bodyPitch = ((tv[2] + tv[3]) - (tv[0] + tv[1])) / 2 / spec.wheelbase - (car.pitch || 0) * 0.5; // front compressed = nose down
    const bodyRoll = ((tv[1] + tv[3]) - (tv[0] + tv[2])) / 2 / spec.trackF - (car.roll || 0) * 0.5;
    this.pitchSmooth = bodyPitch + slopePitch;
    this.rollSmooth = bodyRoll;
    this.model.rotation.order = 'YZX';
    this.model.rotation.set(this.rollSmooth, 0, this.pitchSmooth);
    this.model.position.y = heave;
    this.layoutWheels(car.a, car.b, spec.trackF, spec.trackR, spec.wheelbase, car.steer);
    // put every wheel back on the road (the body moved, the wheels did not) and swing its wishbones to meet it
    for (let w = 0; w < 4; w++) {
      const as = this.wheelDefs[w].assembly;
      const dy = -heave - as.position.x * bodyPitch + as.position.z * bodyRoll;
      as.position.y = WHEEL_R + dy;
      const arm = this.arms && this.arms[w];
      if (arm) arm.rotation.x = (-arm.userData.side * dy) / arm.userData.len;
    }
    for (let w = 0; w < 4; w++) {
      this.spinAngle[w] -= (car.omega[w] * dt) % (Math.PI * 2);
      this.wheelDefs[w].spin.rotation.z = this.spinAngle[w];
      // brake disc glow: visible from about 450 C, orange to yellow-white by 1000 C
      const wd = this.wheelDefs[w];
      const bt = car.brakeTemp ? car.brakeTemp[w] : 0;
      const k = clamp((bt - 450) / 550, 0, 1);
      if (wd.glow.visible !== k > 0.02) wd.glow.visible = k > 0.02;
      if (k > 0.02) {
        wd.glowMat.opacity = Math.min(1, k * 1.25);
        wd.glowMat.color.setRGB(3.2, (0.32 + 0.5 * k) * 3.2, (0.06 + 0.55 * k * k) * 3.2);
      }
    }
    // DRS flap, brake light, damage
    this.drsPivot.rotation.z = car.drsPos * 0.55;
    if (this.steeringWheel) this.steeringWheel.rotation.x = clamp(-car.steer * 6, -2.2, 2.2);
    const br = car.brake > 0.08;
    // brake light; while the hybrid system harvests the lamp strobes amber/red
    this.harvT = (this.harvT || 0) + dt;
    const strobe = car.harvesting && !br && !VIEW_OPTS.calm ? (Math.floor(this.harvT * 9) % 2 ? 0xffa010 : 0xff2010) : null;
    this.brakeLight.material.color.setHex(strobe ?? (br ? 0xff1010 : car.harvesting ? 0xff6a10 : 0x400000));
    const df = car.damageFront || 0, dr = car.damageRear || 0;
    this.frontWingR.visible = df < 0.85;
    this.frontWingL.visible = df < 0.97;
    if (df !== this._df) {
      this._df = df;
      bendAbout(this.frontWingL, WING_PIVOT_FL, df * 0.2, -df * 0.25, -df * 0.04);
      bendAbout(this.frontWingR, WING_PIVOT_FR, -df * 0.3, -df * 0.12, -df * 0.06);
    }
    this.rearWing.visible = dr < 0.92;
    if (dr !== this._dr) {
      this._dr = dr;
      bendAbout(this.rearWing, WING_PIVOT_R, dr * 0.12, dr * 0.12, 0);
    }
    // crumpled sidepods (left pod is the -Z side of the model)
    const sd = [car.damageSideL || 0, car.damageSideR || 0];
    for (let k = 0; k < 2; k++) {
      const m = this.pods[k];
      if (m && Math.abs(sd[k] - m.userData.d) > 0.03) this.crumple(m, sd[k]);
    }
  }

  /** Pushes a sidepod's outer skin inwards with noisy dents, in proportion to the damage d (0..1). */
  crumple(mesh, d) {
    const { base, side } = mesh.userData;
    const pos = mesh.geometry.attributes.position;
    const a = pos.array;
    const hash = (x, y) => {
      const v = Math.sin(x * 127.1 + y * 311.7 + side * 17.3) * 43758.5453;
      return v - Math.floor(v);
    };
    for (let i = 0; i < a.length; i += 3) {
      const x = base[i], y = base[i + 1], z = base[i + 2];
      const outer = clamp((z * side - 0.18) / 0.2, 0, 1); // skin facing outwards
      const n = 0.4 + 0.6 * hash(Math.round(x * 4), Math.round(y * 8));
      const dent = d * outer * n * 0.17;
      a[i] = x + (hash(y * 9, x * 3) - 0.5) * d * 0.05 * outer;
      a[i + 1] = y - d * 0.05 * outer * n;
      a[i + 2] = z - side * dent;
    }
    pos.needsUpdate = true;
    mesh.geometry.computeVertexNormals();
    mesh.userData.d = d;
  }

  /** A small F1 steering wheel in front of the driver, with a display for the gear, speed and shift lights (see updateDash). */
  buildSteeringWheel() {
    const sw = new THREE.Group();
    const parts = [];
    const body = new THREE.BoxGeometry(0.035, 0.13, 0.25);
    parts.push(body);
    for (const sd of [-1, 1]) {
      const grip = new THREE.CapsuleGeometry(0.021, 0.1, 3, 8);
      grip.rotateZ(sd * 0.0);
      grip.translate(0, -0.005, sd * 0.135);
      parts.push(grip);
      const horn = new THREE.BoxGeometry(0.03, 0.035, 0.07);
      horn.translate(0, 0.07, sd * 0.1);
      parts.push(horn);
    }
    const col = new THREE.CylinderGeometry(0.02, 0.025, 0.22, 8);
    col.rotateZ(Math.PI / 2);
    col.translate(0.12, 0, 0);
    parts.push(col);
    sw.add(new THREE.Mesh(mergeGeometries(parts.map((g) => { const n = g.index ? g.toNonIndexed() : g; n.deleteAttribute('uv'); return n; })), shared.carbon));
    // the display
    const cv = document.createElement('canvas');
    cv.width = 128;
    cv.height = 64;
    this.dashCtx = cv.getContext('2d');
    this.dashTex = new THREE.CanvasTexture(cv);
    this.dashTex.colorSpace = THREE.SRGBColorSpace;
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.115, 0.058), new THREE.MeshBasicMaterial({ map: this.dashTex, toneMapped: false }));
    scr.rotation.y = -Math.PI / 2; // faces the driver
    scr.position.set(-0.019, 0.012, 0);
    sw.add(scr);
    // buttons and dials
    const btnGeo = [];
    for (const [by, bz] of [[-0.04, -0.07], [-0.04, 0.07], [0.045, -0.085], [0.045, 0.085], [-0.045, 0], [-0.02, -0.095], [-0.02, 0.095]]) {
      const b = new THREE.CylinderGeometry(0.008, 0.008, 0.008, 8);
      b.rotateZ(Math.PI / 2);
      b.translate(-0.02, by, bz);
      btnGeo.push(b);
    }
    const cols = [0xff3b30, 0x34c759, 0xffcc00, 0x0a84ff, 0xff9f0a, 0xffffff, 0xffffff];
    btnGeo.forEach((g, i) => { const c = new THREE.Color(cols[i]); const n = g.attributes.position.count; const arr = new Float32Array(n * 3); for (let k = 0; k < n; k++) arr.set([c.r, c.g, c.b], k * 3); g.setAttribute('color', new THREE.BufferAttribute(arr, 3)); g.deleteAttribute('uv'); });
    sw.add(new THREE.Mesh(mergeGeometries(btnGeo), new THREE.MeshBasicMaterial({ vertexColors: true })));
    sw.position.set(0.56, 0.7, 0);
    sw.rotation.z = -0.22; // raked towards the driver
    this.steeringWheel = new THREE.Group(); // spins about the column
    this.steeringWheel.add(...sw.children);
    sw.add(this.steeringWheel);
    this.model.add(sw);
    this.drawDash(null);
  }

  /** Redraws the wheel display: shift lights, gear, speed, delta bar. Called a few times a second for the car the camera sits in. */
  drawDash(car, units = 'kmh') {
    const g = this.dashCtx;
    if (!g) return;
    g.fillStyle = '#05070a';
    g.fillRect(0, 0, 128, 64);
    if (car) {
      const k = clamp((car.rpm - 9500) / 4900, 0, 1), n = Math.round(k * 15);
      const flash = car.rpm > 14700 && Math.floor(performance.now() / 70) % 2;
      for (let i = 0; i < 15; i++) {
        g.fillStyle = i < n && !flash ? (i < 5 ? '#27e36a' : i < 10 ? '#ff3b30' : '#3b82ff') : '#1c2128';
        g.fillRect(4 + i * 8.1, 3, 6, 6);
      }
      g.fillStyle = '#ffffff';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.font = '900 40px "Arial Black", Impact, sans-serif';
      g.fillText(car.gear < 0 ? 'R' : String(car.gear), 64, 38);
      g.font = '700 15px Arial, sans-serif';
      g.textAlign = 'left';
      g.fillStyle = '#9fe8ff';
      g.fillText(String(Math.round(car.speed * (units === 'mph' ? 2.23694 : 3.6))), 5, 28);
      g.fillStyle = '#ffd24a';
      g.fillText(`${Math.round(car.soc * 100)}%`, 5, 50);
      g.textAlign = 'right';
      g.fillStyle = car.drsPos > 0.5 ? '#27e36a' : car.drsAllowed ? '#ffd24a' : '#3a4048';
      g.fillText('DRS', 124, 28);
      g.fillStyle = '#ffffff';
      g.fillText(car.rs ? `P${car.rs.pos}` : '', 124, 50);
    }
    this.dashTex.needsUpdate = true;
  }

  setShadow(on) {
    if (this.shadowOn === on) return;
    this.shadowOn = on;
    this.group.traverse((o) => {
      if (o.isMesh && !o.userData.noShadow) o.castShadow = on;
    });
  }

  /** From the driver's seat: no helmet, and the halo reduced to its slim centre pillar. From the T-cam: no helmet. */
  setOnboard(mode) {
    this.helmet.visible = mode !== 'cockpit' && mode !== 'tcam';
    if (this.halo) this.halo.visible = mode !== 'cockpit';
    if (this.haloSlim) this.haloSlim.visible = mode === 'cockpit';
  }

  setLod(far) {
    if (far === this.lodFar) return;
    this.lodFar = far;
    for (const m of this.detailMeshes) m.visible = !far;
  }

  layoutWheels(a, b, trackF, trackR, wheelbase, steer) {
    const W = this.wheelDefs;
    const pos = [
      [a, WHEEL_R, -trackF / 2],
      [a, WHEEL_R, trackF / 2],
      [-b, WHEEL_R, -trackR / 2],
      [-b, WHEEL_R, trackR / 2],
    ];
    const tanS = Math.tan(steer);
    const dL = Math.atan2(wheelbase * tanS, wheelbase - (trackF / 2) * tanS);
    const dR = Math.atan2(wheelbase * tanS, wheelbase + (trackF / 2) * tanS);
    for (let w = 0; w < 4; w++) {
      W[w].assembly.position.set(pos[w][0], pos[w][1], pos[w][2]);
      W[w].assembly.rotation.y = w === 0 ? dL : w === 1 ? dR : 0;
    }
  }

  /** Place the car directly (ghosts, showroom): physics-free. */
  setPose(x, y, theta, h, steer = 0, spin = 0) {
    this.group.position.set(x, h, -y);
    this.group.rotation.set(0, theta, 0);
    this.layoutWheels(1.962, 1.638, 1.6, 1.55, 3.6, steer);
    for (let w = 0; w < 4; w++) this.wheelDefs[w].spin.rotation.z = spin;
  }

  dispose() {
    const done = new Set();
    this.group.traverse((o) => {
      if (!o.isMesh) return;
      o.geometry.dispose();
      for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
        if (!m || done.has(m)) continue;
        done.add(m);
        // textures created for this car (number decals etc.); shared material textures are rebuilt on demand
        for (const k of ['map', 'emissiveMap', 'alphaMap']) if (m[k] && m[k].dispose) m[k].dispose();
        if (m.userData && m.userData.shared) continue;
        m.dispose();
      }
    });
  }
}

/** Shows a wheel cutaway etc. Convenience for the menu showroom. */
export function makeShowroomCar(team, number = 7) {
  return new CarView(team, { number, isPlayer: true, code: 'YOU' }, { detail: 'high' });
}
