import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

// Geometry builders for the car model: smooth lofted bodywork, airfoil-section wings, curved thin plates and
// aero-section rods. Everything returns an indexed BufferGeometry with position + normal, wound outwards, so the pieces
// can be merged into a handful of meshes. Car frame: +X forward, +Y up, Z across (the car's left is -Z).

/** Catmull-Rom through uniformly spaced values. */
function cr(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}

/** Resamples a list of objects with numeric fields: `sub` points per interval, smooth through every control point. */
export function resample(list, keys, sub) {
  if (sub <= 1 || list.length < 3) return list.map((o) => ({ ...o }));
  const out = [];
  const n = list.length;
  for (let i = 0; i < n - 1; i++) {
    const a = list[Math.max(0, i - 1)], b = list[i], c = list[i + 1], d = list[Math.min(n - 1, i + 2)];
    for (let s = 0; s < sub; s++) {
      const t = s / sub, o = {};
      for (const k of keys) {
        const v = cr(a[k], b[k], c[k], d[k], t);
        // a spline may not overshoot outside its two neighbours: a body that bulges between two sections reads as a dent
        const lo = Math.min(b[k], c[k]), hi = Math.max(b[k], c[k]), m = (hi - lo) * 0.12;
        o[k] = Math.min(hi + m, Math.max(lo - m, v));
      }
      out.push(o);
    }
  }
  out.push({ ...list[n - 1] });
  return out;
}

function finish(pos, idx) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  outward(g);
  g.computeVertexNormals();
  return g;
}

/** Signed volume of a closed mesh: positive when its triangles are wound outwards. */
export function signedVolume(g) {
  const p = g.attributes.position.array, ix = g.index.array;
  let v = 0;
  for (let i = 0; i < ix.length; i += 3) {
    const a = ix[i] * 3, b = ix[i + 1] * 3, c = ix[i + 2] * 3;
    v += p[a] * (p[b + 1] * p[c + 2] - p[b + 2] * p[c + 1]) + p[a + 1] * (p[b + 2] * p[c] - p[b] * p[c + 2]) + p[a + 2] * (p[b] * p[c + 1] - p[b + 1] * p[c]);
  }
  return v / 6;
}

/** Flips every triangle when the closed mesh is wound inside out. */
function outward(g) {
  if (signedVolume(g) >= 0) return g;
  const a = g.index.array;
  for (let i = 0; i < a.length; i += 3) { const t = a[i + 1]; a[i + 1] = a[i + 2]; a[i + 2] = t; }
  return g;
}

const SECT_KEYS = ['x', 'w', 'yb', 'yt', 'zc', 'nt', 'nb', 'ym', 'lean'];

/**
 * A body lofted through cross-sections along X. Each section: x, w (half width), yb / yt (bottom and top), and optionally
 * zc (centre), nt / nb (superellipse exponent of the top and bottom halves: 2 is an ellipse, 5 nearly a box), ym (0..1, the
 * height of the widest point) and lean (the top pushed outwards and the bottom tucked in by this much: an undercut).
 * The sections are joined by a spline, so a dozen of them describe a smooth body.
 */
export function loftBody(sections, { seg = 28, sub = 3, capA = true, capB = true } = {}) {
  const S = resample(sections.map((s) => ({ zc: 0, nt: 2.6, ym: 0.5, lean: 0, ...s, nb: s.nb ?? s.nt ?? 2.6 })), SECT_KEYS, sub);
  const pos = [], idx = [];
  const ring = (s) => {
    const ymid = s.yb + (s.yt - s.yb) * s.ym;
    for (let k = 0; k < seg; k++) {
      const a = (k / seg) * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a);
      const n = sn >= 0 ? s.nt : s.nb;
      const ex = Math.sign(c) * Math.pow(Math.abs(c), 2 / n), ey = Math.sign(sn) * Math.pow(Math.abs(sn), 2 / n);
      pos.push(s.x, ymid + ey * (sn >= 0 ? s.yt - ymid : ymid - s.yb), s.zc + ex * s.w + s.lean * ey * Math.sign(s.zc || 1));
    }
  };
  for (const s of S) ring(s);
  const R = S.length;
  for (let r = 0; r < R - 1; r++) for (let k = 0; k < seg; k++) {
    const a = r * seg + k, b = r * seg + ((k + 1) % seg), c = (r + 1) * seg + k, d = (r + 1) * seg + ((k + 1) % seg);
    idx.push(a, c, b, b, c, d);
  }
  // caps on their own vertices, so the edge of an open end (an inlet, the tail) stays crisp
  const cap = (s, flip) => {
    const base = pos.length / 3;
    ring(s);
    const ci = pos.length / 3;
    pos.push(s.x, s.yb + (s.yt - s.yb) * s.ym, s.zc);
    for (let k = 0; k < seg; k++) { const a = base + k, b = base + ((k + 1) % seg); if (flip) idx.push(ci, b, a); else idx.push(ci, a, b); }
  };
  if (capA) cap(S[0], false);
  if (capB) cap(S[R - 1], true);
  return finish(pos, idx);
}

const AIR_KEYS = ['z', 'x', 'y', 'chord', 'aoa', 't', 'camber'];
/** Half an airfoil's thickness at chord fraction c (0 leading edge .. 1 trailing edge), for a unit chord and thickness t. */
function foil(c, t) {
  return 5 * t * (0.2969 * Math.sqrt(c) - 0.126 * c - 0.3516 * c * c + 0.2843 * c * c * c - 0.1036 * c * c * c * c);
}

/**
 * A wing element: an airfoil section swept through span stations. Each station: z (span position), x / y (leading edge),
 * chord, aoa (rad: the trailing edge raised by this, as on a downforce wing), t (thickness / chord) and camber
 * (negative: bulging downwards). Stations are joined by a spline; both ends are closed.
 */
export function wing(stations, { around = 7, sub = 3 } = {}) {
  const S = resample(stations.map((s) => ({ aoa: 0, t: 0.11, camber: -0.04, ...s })), AIR_KEYS, sub);
  const pos = [], idx = [];
  const M = around * 2; // points round the section
  const ring = (s) => {
    const ca = Math.cos(s.aoa), sa = Math.sin(s.aoa);
    for (let k = 0; k < M; k++) {
      // upper surface from the trailing edge forward, then the lower surface back again (cosine spacing: fine at the nose)
      const up = k < around;
      const u = up ? k / around : (k - around) / around;
      const c = up ? 0.5 * (1 + Math.cos(u * Math.PI)) : 0.5 * (1 - Math.cos(u * Math.PI));
      const th = foil(c, s.t) + 0.0025 / Math.max(s.chord, 0.02) * (c > 0.98 ? 1 : 0); // a trailing edge with a little thickness
      const yc = s.camber * 4 * c * (1 - c);
      const xi = c * s.chord, eta = (yc + (up ? th : -th)) * s.chord;
      pos.push(s.x - xi * ca + eta * sa, s.y + xi * sa + eta * ca, s.z);
    }
  };
  for (const s of S) ring(s);
  const R = S.length;
  for (let r = 0; r < R - 1; r++) for (let k = 0; k < M; k++) {
    const a = r * M + k, b = r * M + ((k + 1) % M), c = (r + 1) * M + k, d = (r + 1) * M + ((k + 1) % M);
    idx.push(a, c, b, b, c, d);
  }
  const cap = (s, flip) => {
    const base = pos.length / 3;
    ring(s);
    const ci = pos.length / 3;
    const ca = Math.cos(s.aoa), sa = Math.sin(s.aoa);
    pos.push(s.x - 0.4 * s.chord * ca, s.y + 0.4 * s.chord * sa, s.z);
    for (let k = 0; k < M; k++) { const a = base + k, b = base + ((k + 1) % M); if (flip) idx.push(ci, b, a); else idx.push(ci, a, b); }
  };
  cap(S[0], false);
  cap(S[R - 1], true);
  return finish(pos, idx);
}

const RIB_KEYS = ['x', 'z', 'y0', 'y1'];
/**
 * A thin upright plate that follows a curve in plan view: an endplate, a fence, a strake. path: [{x, z, y0, y1}] (its
 * bottom and top edge at each point), joined by a spline. The faces are smooth along the curve and crisp at the edges.
 */
export function ribbon(path, { thick = 0.012, sub = 4 } = {}) {
  const P = resample(path, RIB_KEYS, sub);
  const n = P.length, h = thick / 2;
  const pos = [], idx = [];
  const nrm = P.map((p, i) => {
    const a = P[Math.max(0, i - 1)], b = P[Math.min(n - 1, i + 1)];
    const tx = b.x - a.x, tz = b.z - a.z, l = Math.hypot(tx, tz) || 1;
    return [-tz / l, tx / l];
  });
  // four strips (outer face, inner face, top edge, bottom edge), each with its own vertices
  const strip = (fa, fb) => {
    const base = pos.length / 3;
    for (let i = 0; i < n; i++) { pos.push(...fa(i), ...fb(i)); }
    for (let i = 0; i < n - 1; i++) { const a = base + i * 2, b = a + 1, c = a + 2, d = a + 3; idx.push(a, b, c, b, d, c); }
  };
  const pt = (i, sgn, top) => [P[i].x + nrm[i][0] * h * sgn, top ? P[i].y1 : P[i].y0, P[i].z + nrm[i][1] * h * sgn];
  strip((i) => pt(i, 1, false), (i) => pt(i, 1, true));
  strip((i) => pt(i, -1, true), (i) => pt(i, -1, false));
  strip((i) => pt(i, 1, true), (i) => pt(i, -1, true));
  strip((i) => pt(i, -1, false), (i) => pt(i, 1, false));
  for (const [i, flip] of [[0, false], [n - 1, true]]) {
    const base = pos.length / 3;
    pos.push(...pt(i, 1, false), ...pt(i, 1, true), ...pt(i, -1, true), ...pt(i, -1, false));
    if (flip) idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
    else idx.push(base, base + 2, base + 1, base, base + 3, base + 2);
  }
  return finish(pos, idx);
}

const Y = new THREE.Vector3(0, 1, 0), va = new THREE.Vector3(), vb = new THREE.Vector3(), q = new THREE.Quaternion();
/**
 * A rod from a to b ([x, y, z]) with an elliptical section: r is the radius, `chord` stretches it along the car (an aero
 * section, as on a wishbone). Indexed, smooth.
 */
export function rod(a, b, r = 0.014, chord = 1, seg = 8) {
  va.set(...a);
  vb.set(...b);
  const len = va.distanceTo(vb);
  const g = new THREE.CylinderGeometry(r, r, len, seg, 1);
  g.deleteAttribute('uv');
  g.scale(chord, 1, 1);
  q.setFromUnitVectors(Y, vb.clone().sub(va).normalize());
  // keep the long axis of the section pointing along the car: undo the twist the shortest-arc rotation put on it
  const ax = new THREE.Vector3(1, 0, 0).applyQuaternion(q), dir = vb.clone().sub(va).normalize();
  const want = new THREE.Vector3(1, 0, 0).addScaledVector(dir, -dir.x).normalize();
  if (want.lengthSq() > 0.01) q.premultiply(ax.dot(want) < -0.999 ? new THREE.Quaternion().setFromAxisAngle(dir, Math.PI) : new THREE.Quaternion().setFromUnitVectors(ax, want));
  g.applyQuaternion(q);
  g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
  return indexed(g);
}

/** Makes a three.js primitive mergeable with the builders above: no UVs, indexed, hard edges kept. */
export function indexed(g) {
  g.deleteAttribute('uv');
  return g.index ? g : mergeVertices(g, 1e-5);
}

/**
 * A flat plate with a smooth outline and rounded edges: pts are [x, y] in the car's side view, the plate is `thick` wide
 * and centred on z. Used for the rear wing endplates and the engine cover fin.
 */
export function plate(pts, thick, z = 0, bevel = 0.004, curve = 6) {
  const sh = new THREE.Shape();
  sh.moveTo(pts[0][0], pts[0][1]);
  sh.splineThru(pts.slice(1).concat([pts[0]]).map(([x, y]) => new THREE.Vector2(x, y)));
  const g = new THREE.ExtrudeGeometry(sh, { depth: Math.max(0.001, thick - bevel * 2), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: curve > 4 ? 2 : 1, curveSegments: curve });
  g.translate(0, 0, z - (thick - bevel * 2) / 2);
  return indexed(g);
}

/** A flat panel lying down (a floor): pts are [x, z] in plan view, its top face at height y, `thick` deep, rounded edge. */
export function panel(pts, y, thick, bevel = 0.008, curve = 5) {
  const sh = new THREE.Shape();
  sh.moveTo(pts[0][0], pts[0][1]);
  sh.splineThru(pts.slice(1).concat([pts[0]]).map(([x, z]) => new THREE.Vector2(x, z)));
  const g = new THREE.ExtrudeGeometry(sh, { depth: Math.max(0.001, thick - bevel * 2), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: curve > 4 ? 2 : 1, curveSegments: curve });
  g.rotateX(Math.PI / 2); // shape y -> car z, extrusion -> down
  g.translate(0, y - bevel, 0);
  return indexed(g);
}

/** An ellipsoid (mirror housings, the helmet, fairings). */
export function blob(cx, cy, cz, rx, ry, rz, ws = 16, hs = 10) {
  const g = new THREE.SphereGeometry(1, ws, hs);
  g.scale(rx, ry, rz);
  g.translate(cx, cy, cz);
  return indexed(g);
}

/** A tube through points (the halo, a wing pylon), optionally flattened across the car. */
export function tube(pts, r = 0.03, { seg = 20, radial = 10, flatZ = 1 } = {}) {
  const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p))), seg, r, radial, false);
  if (flatZ !== 1) g.scale(1, 1, flatZ);
  // close the two ends
  const p = g.attributes.position, ring = radial + 1, n = p.count, ix = Array.from(g.index.array), pos = Array.from(p.array);
  for (const [start, flip] of [[0, false], [n - ring, true]]) {
    let cx = 0, cy = 0, cz = 0;
    for (let k = 0; k < radial; k++) { cx += p.getX(start + k); cy += p.getY(start + k); cz += p.getZ(start + k); }
    const ci = pos.length / 3;
    pos.push(cx / radial, cy / radial, cz / radial);
    for (let k = 0; k < radial; k++) { const a = start + k, b = start + k + 1; if (flip) ix.push(ci, b, a); else ix.push(ci, a, b); }
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  out.setIndex(ix);
  out.computeVertexNormals();
  return out;
}
