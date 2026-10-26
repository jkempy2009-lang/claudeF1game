import * as THREE from 'three';
import { clamp } from '../util/math.js';

const AHEAD = 150; // samples (~300 m)
const HALF = 1.0; // half width of the ribbon in metres

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
    this.smooth = new Float32Array(n);
    this.margin = 0.96;
    this.cbSafe = false;
  }

  setVisible(v) {
    this.mesh.visible = v;
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
    for (let k = 0; k < AHEAD; k++) {
      const i = (i0 + k) % N;
      const c = tr.lineD[i];
      const z = tr.z[i] + 0.05;
      pos[k * 6] = tr.x[i] + tr.nx[i] * (c - HALF);
      pos[k * 6 + 1] = z;
      pos[k * 6 + 2] = -(tr.y[i] + tr.ny[i] * (c - HALF));
      pos[k * 6 + 3] = tr.x[i] + tr.nx[i] * (c + HALF);
      pos[k * 6 + 4] = z;
      pos[k * 6 + 5] = -(tr.y[i] + tr.ny[i] * (c + HALF));
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
  }
}
