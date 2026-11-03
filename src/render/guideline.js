import * as THREE from 'three';
import { clamp } from '../util/math.js';

const AHEAD = 150; // samples (~300 m)
const HALF = 0.85; // half width of the ribbon near the car, in metres (it widens with distance so it stays readable)
const HALF_FAR = 1.5;
const BLEND_M = 55; // the ribbon starts under the car and eases onto the racing line over this distance
const MARKS = 10; // brake-point and apex markers drawn at once

/** green -> yellow -> red by how hard the braking demand is (0..1+) */
function classicColour(r) {
  if (r < 0.35) return [0.15, 0.95, 0.3];
  if (r < 0.65) {
    const t = (r - 0.35) / 0.3;
    return [0.15 + 0.85 * t, 0.95 - 0.1 * t, 0.3 - 0.2 * t];
  }
  if (r < 0.95) {
    const t = (r - 0.65) / 0.3;
    return [1, 0.85 - 0.72 * t, 0.1];
  }
  return [1, 0.13, 0.1];
}

/** Colour-blind-safe version: blue -> yellow -> magenta (separable for red-green and blue-yellow deficiencies alike by lightness too) */
function cbColour(r) {
  if (r < 0.35) return [0.1, 0.5, 1];
  if (r < 0.65) {
    const t = (r - 0.35) / 0.3;
    return [0.1 + 0.9 * t, 0.5 + 0.4 * t, 1 - 0.9 * t];
  }
  if (r < 0.95) {
    const t = (r - 0.65) / 0.3;
    return [1, 0.9 - 0.8 * t, 0.1 + 0.8 * t];
  }
  return [1, 0.1, 0.9];
}

/**
 * Racing-line guide painted on the road ahead of the car. Each point is coloured by how hard you would have to brake,
 * from where you are now, to be at that point's target speed: green = keep going, yellow = lift / start braking,
 * red = brake now. The target speeds come from the same physics-based profile the AI follows (with a safety margin).
 */
export class Guideline {
  constructor(track, profile) {
    this.track = track;
    this.profile = profile;
    const n = AHEAD;
    this.pos = new Float32Array(n * 2 * 3);
    this.col = new Float32Array(n * 2 * 4);
    const idx = [];
    for (let k = 0; k < n - 1; k++) idx.push(k * 2, k * 2 + 2, k * 2 + 1, k * 2 + 1, k * 2 + 2, k * 2 + 3);
    const g = new THREE.BufferGeometry();
    this.attrPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.attrCol = new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.attrPos);
    g.setAttribute('color', this.attrCol);
    g.setIndex(idx);
    this.mesh = new THREE.Mesh(
      g,
      new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5 })
    );
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 4;
    // markers across the road: a white bar where braking should start, a small square at each apex
    this.mpos = new Float32Array(MARKS * 4 * 3);
    this.mcol = new Float32Array(MARKS * 4 * 4);
    const midx = [];
    for (let m = 0; m < MARKS; m++) midx.push(m * 4, m * 4 + 2, m * 4 + 1, m * 4 + 1, m * 4 + 2, m * 4 + 3);
    const mg = new THREE.BufferGeometry();
    this.mAttrPos = new THREE.BufferAttribute(this.mpos, 3).setUsage(THREE.DynamicDrawUsage);
    this.mAttrCol = new THREE.BufferAttribute(this.mcol, 4).setUsage(THREE.DynamicDrawUsage);
    mg.setAttribute('position', this.mAttrPos);
    mg.setAttribute('color', this.mAttrCol);
    mg.setIndex(midx);
    this.marks = new THREE.Mesh(mg, this.mesh.material.clone());
    this.marks.frustumCulled = false;
    this.marks.renderOrder = 5;
    this.mesh.add(this.marks);
    this.smooth = new Float32Array(n);
    this.margin = 0.96;
    this.cbSafe = false;
  }

  setVisible(v) {
    this.mesh.visible = v; // the markers are its child, so they follow
  }

  update(car) {
    if (!this.mesh.visible) return;
    const tr = this.track, N = tr.N, ds = tr.ds;
    const V = Math.max(car.speed, 3);
    const v = this.profile.vBrake;
    const env = this.profile.env;
    const cap = Math.max(15, env.brakeDecel(V, 0.9));
    const s0 = car.s;
    const i0 = Math.floor(s0 / ds) + 1;
    const lead = i0 * ds - s0;
    // worst deceleration required by anything between here and each point (a point is only as green as the corners before it)
    const need = this.smooth;
    for (let k = 0; k < AHEAD; k++) {
      const i = (i0 + k) % N;
      const dist = Math.max(lead + k * ds, 1);
      const vt = v[i] * this.margin;
      need[k] = V > vt ? (V * V - vt * vt) / (2 * Math.max(dist - 3, 1)) / cap : 0;
    }
    const pos = this.pos, col = this.col;
    // the ribbon starts under the car (where it actually is) and eases onto the racing line, so it always leads somewhere
    const carD = clamp(car.d, -tr.wr[car.i], tr.wl[car.i]);
    for (let k = 0; k < AHEAD; k++) {
      const i = (i0 + k) % N;
      const tb = clamp((lead + k * ds) / BLEND_M, 0, 1);
      const c = carD + (tr.lineD[i] - carD) * (tb * tb * (3 - 2 * tb));
      const half = HALF + (HALF_FAR - HALF) * (k / AHEAD);
      const z = tr.z[i] + 0.05;
      pos[k * 6] = tr.x[i] + tr.nx[i] * (c - half);
      pos[k * 6 + 1] = z;
      pos[k * 6 + 2] = -(tr.y[i] + tr.ny[i] * (c - half));
      pos[k * 6 + 3] = tr.x[i] + tr.nx[i] * (c + half);
      pos[k * 6 + 4] = z;
      pos[k * 6 + 5] = -(tr.y[i] + tr.ny[i] * (c + half));
      // light smoothing across neighbours so the colours don't flicker
      const r = (need[k] * 2 + need[Math.max(0, k - 1)] + need[Math.min(AHEAD - 1, k + 1)]) / 4;
      const [R, G, B] = this.cbSafe ? cbColour(r) : classicColour(r);
      const fade = clamp(1 - k / AHEAD, 0, 1);
      const a = 0.92 * Math.min(1, fade * 1.7) * (k < 3 ? k / 3 : 1);
      for (let q = 0; q < 2; q++) {
        col[k * 8 + q * 4] = R;
        col[k * 8 + q * 4 + 1] = G;
        col[k * 8 + q * 4 + 2] = B;
        col[k * 8 + q * 4 + 3] = a;
      }
    }
    this.attrPos.needsUpdate = true;
    this.attrCol.needsUpdate = true;
    this.updateMarks(car, i0, lead, need);
  }

  /** A white bar where the braking has to start and a square at the slowest point of each corner ahead. */
  updateMarks(car, i0, lead, need) {
    const tr = this.track, N = tr.N, ds = tr.ds, v = this.profile.vBrake;
    const mp = this.mpos, mc = this.mcol;
    let m = 0;
    const quad = (i, c, halfW, halfL, R, G, B, A) => {
      if (m >= MARKS) return;
      const x = tr.x[i] + tr.nx[i] * c, y = tr.y[i] + tr.ny[i] * c, z = tr.z[i] + 0.07;
      // tangent: the track direction at this sample (normal rotated back)
      const tx = -tr.ny[i], ty = tr.nx[i];
      const o = m * 12;
      const corners = [[-halfW, -halfL], [halfW, -halfL], [-halfW, halfL], [halfW, halfL]];
      for (let q = 0; q < 4; q++) {
        const [a, l] = corners[q];
        mp[o + q * 3] = x + tr.nx[i] * a + tx * l;
        mp[o + q * 3 + 1] = z;
        mp[o + q * 3 + 2] = -(y + tr.ny[i] * a + ty * l);
        mc[m * 16 + q * 4] = R; mc[m * 16 + q * 4 + 1] = G; mc[m * 16 + q * 4 + 2] = B; mc[m * 16 + q * 4 + 3] = A;
      }
      m++;
    };
    let wasRed = need[0] >= 0.95;
    for (let k = 1; k < AHEAD - 2 && m < MARKS; k++) {
      const i = (i0 + k) % N;
      const red = need[k] >= 0.95;
      if (red && !wasRed && k > 2) {
        const a = clamp(1 - k / AHEAD, 0, 1) * 0.95;
        quad(i, tr.lineD[i], 2.4, 0.45, 1, 1, 1, a); // the braking point
      }
      wasRed = red;
      // a corner's apex: the local minimum of the speed profile
      const im = (i0 + k - 1) % N, ip = (i0 + k + 1) % N;
      if (v[i] < v[im] && v[i] <= v[ip] && v[i] < 70) {
        const a = clamp(1 - k / AHEAD, 0, 1) * 0.9;
        quad(i, tr.lineD[i], 0.45, 0.45, 0.3, 0.85, 1, a);
      }
    }
    for (let q = m; q < MARKS; q++) {
      const o = q * 12;
      for (let t = 0; t < 12; t++) mp[o + t] = 0;
      for (let t = 0; t < 4; t++) mc[q * 16 + t * 4 + 3] = 0;
    }
    this.mAttrPos.needsUpdate = true;
    this.mAttrCol.needsUpdate = true;
  }
}
