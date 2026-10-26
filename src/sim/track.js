import { TAU, clamp, lerp, mod, smoothstep, wrapAngle } from '../util/math.js';

/** Surface ids used by the physics (grip/rolling resistance lookups live in carspec.js). */
export const SURF = { ASPHALT: 0, KERB: 1, GRASS: 2, GRAVEL: 3, RUNOFF: 4, PIT: 5, WALL: 6 };

const PIT_WIDTH = 12;
const PIT_ISLAND = 4.5;

/**
 * Builds the closed centreline from a list of straights and arcs.
 *
 * Segment syntax: ['S', length] | ['L'|'R', radius, angleDeg], with an optional trailing
 * options object ({free: true} marks the two straights whose length is solved so the loop
 * closes in position, and the one arc whose angle is solved so it closes in heading).
 * Curvature is low-pass filtered so corners ease in and out like clothoids instead of
 * snapping from zero to 1/R.
 */
function layoutCenterline(def) {
  const segs = def.segments.map((s) => {
    const opts = typeof s[s.length - 1] === 'object' ? s[s.length - 1] : {};
    if (s[0] === 'S') return { t: 'S', len: s[1], free: !!opts.free, fixed: !!opts.fixed, name: opts.n };
    const dir = s[0] === 'L' ? 1 : -1;
    return { t: 'A', dir, r: s[1], ang: (s[2] * Math.PI) / 180, free: !!opts.free, name: opts.n };
  });
  // Straights flagged {free:true} (or, if none are flagged, every straight) absorb the position closure.
  const flagged = segs.filter((s) => s.t === 'S' && s.free);
  const adjustable = flagged.length >= 2 ? flagged : segs.filter((s) => s.t === 'S' && !s.fixed);
  const freeArc = segs.find((s) => s.t === 'A' && s.free);
  if (adjustable.length < 2 || !freeArc) throw new Error(`${def.id}: need >=2 adjustable straights and 1 free arc`);

  // Heading closure: the free arc absorbs whatever turning is left over.
  let sum = 0;
  for (const s of segs) if (s.t === 'A' && !s.free) sum += s.dir * s.ang;
  const needed = def.turns * TAU - sum;
  freeArc.ang = Math.abs(needed);
  freeArc.dir = Math.sign(needed);
  if (freeArc.ang < 0.05) throw new Error(`${def.id}: free arc angle degenerate`);

  const smoothSigma = def.smooth ?? 14;

  const build = () => {
    let total = 0;
    for (const s of segs) {
      s.length = s.t === 'S' ? s.len : s.r * s.ang;
      s.start = total;
      total += s.length;
    }
    return total;
  };
  let total = build();
  const N = 2 * Math.round(total / 2); // even so we can decimate to 2 m spacing later

  const integrate = () => {
    total = build();
    const step = total / N;
    // Exact area-preserving sampling: each sample holds the average curvature over its interval,
    // so total turning is a continuous function of the segment lengths (needed by the solver).
    const kappa = new Float64Array(N);
    for (const seg of segs) {
      if (seg.t !== 'A') continue;
      const k0 = seg.dir / seg.r;
      const a = seg.start, b = seg.start + seg.length;
      for (let k = Math.max(0, Math.floor(a / step)); k < N && k * step < b; k++) {
        const ov = Math.min(b, (k + 1) * step) - Math.max(a, k * step);
        if (ov > 0) kappa[k] += (k0 * ov) / step;
      }
    }
    // Cyclic gaussian smoothing.
    const sig = Math.max(0.01, smoothSigma / step);
    const rad = Math.ceil(sig * 3);
    const kern = [];
    let ks = 0;
    for (let j = -rad; j <= rad; j++) {
      const w = Math.exp(-(j * j) / (2 * sig * sig));
      kern.push(w);
      ks += w;
    }
    const sm = new Float64Array(N);
    for (let k = 0; k < N; k++) {
      let a = 0;
      for (let j = -rad; j <= rad; j++) a += kappa[(k + j + N * 4) % N] * kern[j + rad];
      sm[k] = a / ks;
    }
    const x = new Float64Array(N + 1);
    const y = new Float64Array(N + 1);
    const th = new Float64Array(N + 1);
    for (let k = 0; k < N; k++) {
      const mid = th[k] + (sm[k] * step) / 2;
      x[k + 1] = x[k] + Math.cos(mid) * step;
      y[k + 1] = y[k] + Math.sin(mid) * step;
      th[k + 1] = th[k] + sm[k] * step;
    }
    return { x, y, th, kappa: sm, step };
  };

  // Closure: iterate a minimum-relative-change correction of the adjustable straights until the
  // integrated (smoothed, discretised) loop ends exactly where it started.
  let res;
  const active = new Set(adjustable);
  for (let it = 0; it < 60; it++) {
    res = integrate();
    const rx = res.x[N], ry = res.y[N];
    if (Math.hypot(rx, ry) < 1e-4) break;
    const list = [...active];
    // M = A W^2 A^T with columns (cos h, sin h) and weights = length
    let m11 = 0, m12 = 0, m22 = 0;
    const dirs = list.map((sg) => {
      const k = Math.min(N, Math.max(0, Math.round((sg.start + sg.length / 2) / res.step)));
      const h = res.th[k];
      const w2 = sg.len * sg.len;
      const c = Math.cos(h), s2 = Math.sin(h);
      m11 += c * c * w2;
      m12 += c * s2 * w2;
      m22 += s2 * s2 * w2;
      return [c, s2, w2];
    });
    const det = m11 * m22 - m12 * m12;
    if (Math.abs(det) < 1e-9) throw new Error(`${def.id}: straights are all parallel; cannot close the loop`);
    const lx = (-rx * m22 + ry * m12) / det;
    const ly = (rx * m12 - ry * m11) / det;
    list.forEach((sg, n) => {
      const [c, s2, w2] = dirs[n];
      const want = sg.len + w2 * (c * lx + s2 * ly) * 0.8;
      if (want < 25) {
        sg.len = 25;
        active.delete(sg);
      } else sg.len = want;
    });
    if (active.size < 2) throw new Error(`${def.id}: not enough room to close the loop; reshape the corners`);
  }
  res = integrate();
  const closeErr = Math.hypot(res.x[N], res.y[N]);
  if (closeErr > 0.05) throw new Error(`${def.id}: loop did not close (${closeErr.toFixed(3)} m)`);
  return { ...res, N, total, segs };
}

/**
 * Waypoint layout: a closed polygon of vertices [x, y, filletRadius, opts]. Each vertex becomes a circular
 * arc tangent to both neighbouring edges, so the loop closes by construction. The result is lightly
 * smoothed (cyclic gaussian on positions) so straight/arc joins aren't curvature steps.
 */
function layoutPolygon(def) {
  const sc = def.scale ?? 1;
  const P = def.points.map((p) => ({ x: p[0] * sc, y: p[1] * sc, r: p[2] ?? 80, o: p[3] || {} }));
  const n = P.length;
  const fil = P.map((p, i) => {
    const a = P[(i + n - 1) % n], b = P[(i + 1) % n];
    let ux = a.x - p.x, uy = a.y - p.y, vx = b.x - p.x, vy = b.y - p.y;
    const lu = Math.hypot(ux, uy), lv = Math.hypot(vx, vy);
    ux /= lu; uy /= lu; vx /= lv; vy /= lv;
    const phi = Math.acos(clamp(ux * vx + uy * vy, -1, 1));
    const theta = Math.PI - phi; // turning angle
    const T = p.r * Math.tan(theta / 2);
    const left = -ux * vy + uy * vx > 0;
    const bx = ux + vx, by = uy + vy, bl = Math.hypot(bx, by) || 1;
    const dc = p.r / Math.sin(phi / 2);
    const cx = p.x + (bx / bl) * dc, cy = p.y + (by / bl) * dc;
    return { T, theta, left, cx, cy, r: p.r, sx: p.x + ux * T, sy: p.y + uy * T, ex: p.x + vx * T, ey: p.y + vy * T, name: p.o.n };
  });
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    const len = Math.hypot(P[j].x - P[i].x, P[j].y - P[i].y);
    if (fil[i].T + fil[j].T > len - 1)
      throw new Error(`${def.id}: corners ${i} and ${j} overlap (need ${(fil[i].T + fil[j].T).toFixed(0)} m, edge is ${len.toFixed(0)} m)`);
  }
  // Walk the path starting at the end of fillet 0.
  const pts = [[fil[0].ex, fil[0].ey]];
  const edgeStart = [];
  let dist = 0;
  const push = (x, y) => {
    const l = pts[pts.length - 1];
    dist += Math.hypot(x - l[0], y - l[1]);
    pts.push([x, y]);
  };
  for (let k = 1; k <= n; k++) {
    const i = k % n;
    edgeStart[k - 1] = dist; // start of the straight leaving fillet k-1
    push(fil[i].sx, fil[i].sy);
    const f = fil[i];
    const a0 = Math.atan2(f.sy - f.cy, f.sx - f.cx);
    const steps = Math.max(2, Math.ceil(f.theta / Math.min(0.06, 0.7 / f.r)));
    for (let q = 1; q <= steps; q++) {
      const a = a0 + (f.left ? 1 : -1) * (f.theta * q) / steps;
      push(f.cx + Math.cos(a) * f.r, f.cy + Math.sin(a) * f.r);
    }
  }
  const total0 = dist;
  const resample = (src, count) => {
    // uniform arc-length resample of a closed polyline (last point == first)
    const cum = [0];
    for (let i = 1; i < src.length; i++) cum.push(cum[i - 1] + Math.hypot(src[i][0] - src[i - 1][0], src[i][1] - src[i - 1][1]));
    const tot = cum[cum.length - 1];
    const out = [];
    let j = 1;
    for (let k = 0; k < count; k++) {
      const s = (k / count) * tot;
      while (j < cum.length - 1 && cum[j] < s) j++;
      const t = (s - cum[j - 1]) / (cum[j] - cum[j - 1] || 1);
      out.push([lerp(src[j - 1][0], src[j][0], t), lerp(src[j - 1][1], src[j][1], t)]);
    }
    out.push([out[0][0], out[0][1]]);
    return { pts: out, total: tot };
  };
  let N = 2 * Math.round(total0 / 2);
  let r1 = resample(pts, N);
  // gaussian smoothing of positions (cyclic)
  const step0 = r1.total / N;
  const sig = Math.max(0.01, (def.smooth ?? 8) / step0);
  const rad = Math.ceil(sig * 3);
  const kern = [];
  let ks = 0;
  for (let j = -rad; j <= rad; j++) { const w = Math.exp(-(j * j) / (2 * sig * sig)); kern.push(w); ks += w; }
  const sx = new Float64Array(N), sy = new Float64Array(N);
  for (let k = 0; k < N; k++) {
    let ax = 0, ay = 0;
    for (let j = -rad; j <= rad; j++) { const q = r1.pts[(k + j + N * 8) % N]; ax += q[0] * kern[j + rad]; ay += q[1] * kern[j + rad]; }
    sx[k] = ax / ks; sy[k] = ay / ks;
  }
  const closed = Array.from({ length: N + 1 }, (_, k) => [sx[k % N], sy[k % N]]);
  const r2 = resample(closed, N);
  const x = new Float64Array(N + 1), y = new Float64Array(N + 1);
  r2.pts.forEach((q, k) => { x[k] = q[0]; y[k] = q[1]; });
  // start/finish: [edgeIndex, metres after that edge's first tangent point]
  const [se, sd] = def.start || [0, 0];
  const startAt = ((edgeStart[se] + sd) / total0) * r2.total;
  const segs = fil.map((f, i) => ({ t: 'A', name: f.name, length: f.theta * f.r, start: 0, dir: f.left ? 1 : -1, r: f.r, ang: f.theta }));
  return { x, y, N, total: r2.total, step: r2.total / N, segs, startAt, edgeStart };
}

/** Pentadiagonal SPD solver (LDL^T). d0 = main diagonal, d1/d2 = first/second super-diagonals. */
function solvePenta(d0, d1, d2, b) {
  const n = b.length;
  const D = new Float64Array(n);
  const l1 = new Float64Array(n); // l[i][i-1]
  const l2 = new Float64Array(n); // l[i][i-2]
  for (let i = 0; i < n; i++) {
    if (i >= 2) l2[i] = d2[i - 2] / D[i - 2];
    if (i >= 1) {
      let v = d1[i - 1];
      if (i >= 2) v -= l2[i] * D[i - 2] * l1[i - 1];
      l1[i] = v / D[i - 1];
    }
    let dd = d0[i];
    if (i >= 1) dd -= l1[i] * l1[i] * D[i - 1];
    if (i >= 2) dd -= l2[i] * l2[i] * D[i - 2];
    D[i] = dd;
  }
  const y = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    let v = b[i];
    if (i >= 1) v -= l1[i] * y[i - 1];
    if (i >= 2) v -= l2[i] * y[i - 2];
    y[i] = v;
  }
  const x = new Float64Array(n);
  for (let i = n - 1; i >= 0; i--) {
    let v = y[i] / D[i];
    if (i + 1 < n) v -= l1[i + 1] * x[i + 1];
    if (i + 2 < n) v -= l2[i + 2] * x[i + 2];
    x[i] = v;
  }
  return x;
}

/**
 * Minimum-curvature racing line. The lateral offsets of a 3-lap unrolled loop are solved as a
 * banded least-squares problem (curvature + a little path length), with an active-set loop to
 * respect the track limits. Returns lateral offsets (+ left) per sample.
 */
function computeRacingLine(track, margin = 1.1, lengthWeight = 0.04, smoothLen = 24) {
  const N = track.N;
  const M = N * 3;
  const cx = new Float64Array(M), cy = new Float64Array(M), nx = new Float64Array(M), ny = new Float64Array(M);
  const lo = new Float64Array(M), hi = new Float64Array(M);
  for (let k = 0; k < M; k++) {
    const i = k % N;
    cx[k] = track.x[i];
    cy[k] = track.y[i];
    nx[k] = track.nx[i];
    ny[k] = track.ny[i];
    lo[k] = -(track.wr[i] - margin);
    hi[k] = track.wl[i] - margin;
  }
  // Second-difference of the centre line (the d = 0 part of the residuals).
  const a0x = new Float64Array(M), a0y = new Float64Array(M);
  for (let m = 1; m < M - 1; m++) {
    a0x[m] = cx[m - 1] - 2 * cx[m] + cx[m + 1];
    a0y[m] = cy[m - 1] - 2 * cy[m] + cy[m + 1];
  }
  const l0x = new Float64Array(M), l0y = new Float64Array(M);
  for (let m = 0; m < M - 1; m++) {
    l0x[m] = cx[m + 1] - cx[m];
    l0y[m] = cy[m + 1] - cy[m];
  }
  const dotN = (j, k) => nx[j] * nx[k] + ny[j] * ny[k];
  const B0 = new Float64Array(M), B1 = new Float64Array(M), B2 = new Float64Array(M), rhs = new Float64Array(M);
  for (let m = 1; m < M - 1; m++) {
    const idx = [m - 1, m, m + 1];
    const co = [1, -2, 1];
    for (let p = 0; p < 3; p++) {
      const j = idx[p];
      rhs[j] -= co[p] * (nx[j] * a0x[m] + ny[j] * a0y[m]);
      for (let q = p; q < 3; q++) {
        const k = idx[q];
        const v = co[p] * co[q] * dotN(j, k) * (p === q ? 1 : 1);
        if (k === j) B0[j] += v;
        else if (k - j === 1) B1[j] += v;
        else if (k - j === 2) B2[j] += v;
      }
    }
  }
  for (let m = 0; m < M - 1; m++) {
    // length term: |q_{m+1} - q_m|^2, coefficients (-1, +1)
    const idx = [m, m + 1];
    const co = [-1, 1];
    for (let p = 0; p < 2; p++) {
      const j = idx[p];
      rhs[j] -= lengthWeight * co[p] * (nx[j] * l0x[m] + ny[j] * l0y[m]);
      for (let q = p; q < 2; q++) {
        const k = idx[q];
        const v = lengthWeight * co[p] * co[q] * dotN(j, k);
        if (k === j) B0[j] += v;
        else if (k - j === 1) B1[j] += v;
      }
    }
  }
  for (let k = 0; k < M; k++) B0[k] += 1e-5;

  const d = new Float64Array(M);
  const fixed = new Int8Array(M); // 0 free, -1 at lower bound, +1 at upper bound
  for (let iter = 0; iter < 60; iter++) {
    const e0 = Float64Array.from(B0), e1 = Float64Array.from(B1), e2 = Float64Array.from(B2), b = Float64Array.from(rhs);
    // Eliminate fixed variables (keeps the system banded).
    for (let j = 0; j < M; j++) {
      if (!fixed[j]) continue;
      const val = fixed[j] < 0 ? lo[j] : hi[j];
      for (let k = Math.max(0, j - 2); k <= Math.min(M - 1, j + 2); k++) {
        if (k === j || fixed[k]) continue;
        const a = Math.min(j, k);
        const h = Math.abs(j - k);
        const hv = h === 1 ? B1[a] : B2[a];
        b[k] -= hv * val;
      }
    }
    for (let j = 0; j < M; j++) {
      if (!fixed[j]) continue;
      e0[j] = 1;
      b[j] = fixed[j] < 0 ? lo[j] : hi[j];
      if (j + 1 < M) e1[j] = 0;
      if (j + 2 < M) e2[j] = 0;
      if (j >= 1) e1[j - 1] = 0;
      if (j >= 2) e2[j - 2] = 0;
    }
    const sol = solvePenta(e0, e1, e2, b);
    let changed = 0;
    for (let j = 0; j < M; j++) {
      d[j] = sol[j];
      if (!fixed[j]) {
        if (sol[j] < lo[j]) {
          fixed[j] = -1;
          changed++;
        } else if (sol[j] > hi[j]) {
          fixed[j] = 1;
          changed++;
        }
      }
    }
    // Release bound variables whose gradient wants to move inward.
    for (let j = 0; j < M; j++) {
      if (!fixed[j]) continue;
      let g = B0[j] * d[j] - rhs[j];
      if (j >= 1) g += B1[j - 1] * d[j - 1];
      if (j >= 2) g += B2[j - 2] * d[j - 2];
      if (j + 1 < M) g += B1[j] * d[j + 1];
      if (j + 2 < M) g += B2[j] * d[j + 2];
      if ((fixed[j] > 0 && g > 0) || (fixed[j] < 0 && g < 0)) {
        fixed[j] = 0;
        changed++;
      }
    }
    if (!changed) break;
  }
  const out = new Float64Array(N);
  for (let i = 0; i < N; i++) out[i] = clamp(d[N + i], lo[N + i], hi[N + i]);
  return smoothLine(out, track.ds, smoothLen);
}

/**
 * Gaussian smoothing of the line's lateral offset. Where the optimal line is pinned against a track limit its
 * path has a corner (the car would have to flick sideways at full speed); averaging can only pull values away from
 * the limits, so the result stays legal and becomes physically drivable.
 */
function smoothLine(d, ds, sigma) {
  if (!(sigma > 0)) return d;
  const N = d.length;
  const sd = sigma / ds;
  const R = Math.ceil(sd * 3);
  const w = [];
  let sum = 0;
  for (let k = -R; k <= R; k++) {
    const v = Math.exp(-(k * k) / (2 * sd * sd));
    w.push(v);
    sum += v;
  }
  const out = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    let a = 0;
    for (let k = -R; k <= R; k++) a += w[k + R] * d[(i + k + N * 4) % N];
    out[i] = a / sum;
  }
  return out;
}

export class Track {
  constructor(def) {
    this.def = def;
    this.id = def.id;
    this.name = def.name;
    this.theme = def.theme || {};
    const lay = def.points ? layoutPolygon(def) : layoutCenterline(def);
    const startAt = lay.startAt ?? def.startAt;

    // Roll so s = 0 is the start/finish line, then decimate to ~2 m spacing.
    const N1 = lay.N;
    let shift = Math.round(startAt / lay.step);
    shift -= shift % 2;
    const N = N1 / 2;
    this.N = N;
    this.length = lay.total;
    this.ds = lay.total / N;
    this.x = new Float64Array(N);
    this.y = new Float64Array(N);
    this.z = new Float64Array(N); // elevation
    for (let i = 0; i < N; i++) {
      const k = (shift + i * 2) % N1;
      this.x[i] = lay.x[k];
      this.y[i] = lay.y[k];
    }
    // Recentre around the origin so the world stays near zero.
    let mx = 0, my = 0;
    for (let i = 0; i < N; i++) {
      mx += this.x[i];
      my += this.y[i];
    }
    mx /= N;
    my /= N;
    for (let i = 0; i < N; i++) {
      this.x[i] -= mx;
      this.y[i] -= my;
    }

    this.hdg = new Float64Array(N);
    this.curv = new Float64Array(N);
    this.nx = new Float64Array(N);
    this.ny = new Float64Array(N);
    for (let i = 0; i < N; i++) {
      const p = (i + N - 1) % N, n = (i + 1) % N;
      this.hdg[i] = Math.atan2(this.y[n] - this.y[p], this.x[n] - this.x[p]);
    }
    for (let i = 0; i < N; i++) {
      const p = (i + N - 2) % N, n = (i + 2) % N;
      this.curv[i] = wrapAngle(this.hdg[n] - this.hdg[p]) / (4 * this.ds);
      this.nx[i] = -Math.sin(this.hdg[i]);
      this.ny[i] = Math.cos(this.hdg[i]);
    }

    // Elevation: a few periodic harmonics, plus slope per sample.
    const L = this.length;
    for (let i = 0; i < N; i++) {
      let h = 0;
      for (const [k, amp, ph] of def.elevation || []) h += amp * Math.sin((TAU * k * i * this.ds) / L + ph);
      this.z[i] = h;
    }
    this.slope = new Float64Array(N);
    for (let i = 0; i < N; i++) this.slope[i] = (this.z[(i + 1) % N] - this.z[(i + N - 1) % N]) / (2 * this.ds);

    this.segInfo = lay.segs.map((sg) => ({ type: sg.t, name: sg.name, length: sg.length, s: mod(sg.start - startAt, this.length), dir: sg.dir, r: sg.r, angle: sg.ang }));
    this._buildCorners();
    this._buildEdges();
    this._buildPit();
    this._buildMarkers();

    this.lineD = computeRacingLine(this, def.lineMargin ?? 1.1);
    this._finishLine();
  }

  // ---- geometry helpers -------------------------------------------------------------------
  wrapS(s) {
    return mod(s, this.length);
  }

  /** Interpolated centreline + normal at arc length s and lateral offset d (+ left). */
  pointAt(s, d, out = {}) {
    const f = mod(s, this.length) / this.ds;
    const i = Math.floor(f) % this.N;
    const j = (i + 1) % this.N;
    const t = f - Math.floor(f);
    const x = lerp(this.x[i], this.x[j], t);
    const y = lerp(this.y[i], this.y[j], t);
    const nx = lerp(this.nx[i], this.nx[j], t);
    const ny = lerp(this.ny[i], this.ny[j], t);
    const nl = Math.hypot(nx, ny);
    out.x = x + (nx / nl) * d;
    out.y = y + (ny / nl) * d;
    out.cx = x;
    out.cy = y;
    out.h = lerp(this.z[i], this.z[j], t);
    out.heading = this.hdgAt(s);
    return out;
  }

  hdgAt(s) {
    const f = mod(s, this.length) / this.ds;
    const i = Math.floor(f) % this.N;
    const j = (i + 1) % this.N;
    const t = f - Math.floor(f);
    return this.hdg[i] + wrapAngle(this.hdg[j] - this.hdg[i]) * t;
  }

  at(arr, s) {
    const f = mod(s, this.length) / this.ds;
    const i = Math.floor(f) % this.N;
    const t = f - Math.floor(f);
    return lerp(arr[i], arr[(i + 1) % this.N], t);
  }

  /** Index (not interpolated) for a given arc length. */
  idx(s) {
    return Math.floor(mod(s, this.length) / this.ds) % this.N;
  }

  /**
   * Projects a world point onto the centreline. `hint` is the previous segment index (or -1 to
   * search globally). Fills `out` with {i, t, s, d, dist}; d > 0 means left of the centreline.
   */
  project(px, py, hint, out) {
    const N = this.N, X = this.x, Y = this.y;
    let bi = -1, bd = Infinity, bt = 0;
    const scan = (i) => {
      const j = i + 1 === N ? 0 : i + 1;
      const ex = X[j] - X[i], ey = Y[j] - Y[i];
      let t = ((px - X[i]) * ex + (py - Y[i]) * ey) / (ex * ex + ey * ey);
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const qx = X[i] + ex * t - px, qy = Y[i] + ey * t - py;
      const d2 = qx * qx + qy * qy;
      if (d2 < bd) {
        bd = d2;
        bi = i;
        bt = t;
      }
    };
    if (hint >= 0) {
      for (let k = -12; k <= 12; k++) scan((hint + k + N) % N);
    }
    if (bi < 0 || bd > 900) {
      // Global: coarse pass then refine.
      let ci = 0, cd = Infinity;
      for (let i = 0; i < N; i += 6) {
        const dx = X[i] - px, dy = Y[i] - py;
        const d2 = dx * dx + dy * dy;
        if (d2 < cd) {
          cd = d2;
          ci = i;
        }
      }
      bd = Infinity;
      for (let k = -9; k <= 9; k++) scan((ci + k + N) % N);
    }
    const j = (bi + 1) % N;
    const ex = X[j] - X[bi], ey = Y[j] - Y[bi];
    const qx = X[bi] + ex * bt, qy = Y[bi] + ey * bt;
    const cross = ex * (py - qy) - ey * (px - qx);
    const dist = Math.sqrt(bd);
    out.i = bi;
    out.t = bt;
    out.s = (bi + bt) * this.ds;
    out.d = cross >= 0 ? dist : -dist;
    out.dist = dist;
    return out;
  }

  // ---- track edges / surfaces ---------------------------------------------------------------
  _buildCorners() {
    const N = this.N, ds = this.ds;
    const thr = 1 / 380;
    const k = this.curv;
    const corners = [];
    // find a start index that is not inside a corner
    let s0 = 0;
    while (Math.abs(k[s0]) > thr && s0 < N) s0++;
    let cur = null;
    for (let n = 0; n < N; n++) {
      const i = (s0 + n) % N;
      const on = Math.abs(k[i]) > thr;
      if (on && (!cur || Math.sign(k[i]) !== cur.sign)) {
        if (cur) corners.push(cur);
        cur = { sign: Math.sign(k[i]), start: i, end: i, maxK: Math.abs(k[i]), apex: i, len: 1 };
        continue;
      }
      if (on && cur) {
        cur.end = i;
        cur.len++;
        if (Math.abs(k[i]) > cur.maxK) {
          cur.maxK = Math.abs(k[i]);
          cur.apex = i;
        }
      } else if (!on && cur) {
        // allow short gaps (a few samples) to merge into one corner
        let g = 0;
        while (g < 8 && Math.abs(k[(i + g) % N]) <= thr) g++;
        if (g >= 8 || Math.sign(k[(i + g) % N]) !== cur.sign) {
          corners.push(cur);
          cur = null;
        } else cur.len++;
      }
    }
    if (cur) corners.push(cur);
    this.corners = corners
      .filter((c) => c.len * ds > 25)
      .map((c, n) => ({
        ...c,
        id: n + 1,
        sApex: c.apex * ds,
        sStart: c.start * ds,
        sEnd: c.end * ds,
        radius: 1 / c.maxK,
      }));
  }

  _buildEdges() {
    const N = this.N, def = this.def;
    const W = def.width ?? 14;
    this.wl = new Float64Array(N).fill(W / 2);
    this.wr = new Float64Array(N).fill(W / 2);
    // widen the start straight a little
    for (let i = 0; i < N; i++) {
      const s = i * this.ds;
      const rel = Math.min(s, this.length - s);
      const w = (W / 2) * (1 + 0.08 * (1 - smoothstep(0, 500, rel)));
      this.wl[i] = w;
      this.wr[i] = w;
    }
    this.kl = new Float64Array(N);
    this.kr = new Float64Array(N);
    this.r1l = new Float64Array(N);
    this.r1r = new Float64Array(N);
    this.t1l = new Uint8Array(N);
    this.t1r = new Uint8Array(N);
    this.r2l = new Float64Array(N);
    this.r2r = new Float64Array(N);

    const ro = def.runoff || { mode: 'modern' };
    const kerbW = def.kerbWidth ?? 1.5;
    const street = ro.mode === 'street';

    const markRange = (a, b, fn) => {
      for (let i = a; i !== b + 1; i = (i + 1) % N) fn(i);
    };
    const frac = (c, f) => (c.start + Math.round(((c.end - c.start + N) % N) * f)) % N;

    if (!street || ro.kerbs) {
      for (const c of this.corners) {
        if (c.maxK < 1 / 230) continue;
        const left = c.sign > 0;
        const inner = left ? this.kl : this.kr;
        const outer = left ? this.kr : this.kl;
        markRange(frac(c, 0.12), frac(c, 0.9), (i) => (inner[i] = kerbW));
        if (c.maxK > 1 / 120) markRange(frac(c, 0.6), (frac(c, 1) + 10) % N, (i) => (outer[i] = kerbW));
      }
    }

    // Run-off areas.
    const base1 = ro.base1 ?? 0;
    const grass = ro.grass ?? 16;
    const cornerRoom = ro.cornerRoom ?? 12;
    for (let i = 0; i < N; i++) {
      this.r1l[i] = this.r1r[i] = base1;
      this.r2l[i] = this.r2r[i] = street ? ro.gap ?? 1.2 : grass;
      this.t1l[i] = this.t1r[i] = SURF.GRASS;
    }
    if (!street) {
      for (const c of this.corners) {
        if (c.maxK < 1 / 450) continue;
        const outerLeft = c.sign < 0; // right-hander: outside is left
        const arr1 = outerLeft ? this.r1l : this.r1r;
        const typ1 = outerLeft ? this.t1l : this.t1r;
        const arr2 = outerLeft ? this.r2l : this.r2r;
        const pre = Math.round(30 / this.ds);
        const post = Math.round(60 / this.ds);
        const a = (c.start - pre + N) % N;
        const b = (c.end + post) % N;
        const fast = c.maxK < 1 / 140;
        const wRoom = cornerRoom * (fast ? 1.5 : 1);
        markRange(a, b, (i) => {
          arr1[i] = wRoom;
          typ1[i] = ro.mode === 'classic' ? SURF.GRAVEL : fast || ro.mode === 'modern' ? SURF.RUNOFF : SURF.GRAVEL;
          if (ro.mode === 'mixed') typ1[i] = fast ? SURF.GRAVEL : SURF.RUNOFF;
          arr2[i] = Math.max(6, grass - 4);
        });
      }
      // smooth widths (types stay discrete)
      const smooth = (arr) => {
        const copy = Float64Array.from(arr);
        const R = 10;
        for (let i = 0; i < N; i++) {
          let a = 0;
          for (let j = -R; j <= R; j++) a += copy[(i + j + N) % N];
          arr[i] = a / (2 * R + 1);
        }
      };
      smooth(this.r1l);
      smooth(this.r1r);
    }
  }

  wallDist(i, side) {
    // distance from the centreline to the barrier on the given side (+1 left, -1 right)
    if (side > 0) return this.wl[i] + this.kl[i] + this.r1l[i] + this.r2l[i];
    let w = this.wr[i] + this.kr[i] + this.r1r[i] + this.r2r[i];
    if (this.pit) {
      const s = i * this.ds;
      const b = this._pitBlend(s);
      if (this.pitWallRange(s)) w = b * this.pit.offset + PIT_WIDTH / 2 + 0.7; // garage front
      else if (b > 0.01) w = Math.max(w, b * this.pit.offset + PIT_WIDTH / 2 + 3);
    }
    return w;
  }

  // ---- pit lane -------------------------------------------------------------------------------
  _buildPit() {
    const p = this.def.pit;
    if (!p) {
      this.pit = null;
      return;
    }
    const L = this.length;
    const i0 = this.idx(0);
    const offset = this.wr[i0] + this.kr[i0] + PIT_ISLAND + PIT_WIDTH / 2 + 1;
    // the ramps must be long enough for a car at the pit limit to make the sideways move without the tyres giving up:
    // peak lateral acceleration of the smoothstep shift is 6 * offset * v^2 / ramp^2, kept under ~0.75 g at 80 km/h
    const rampMin = Math.sqrt((6 * offset * 22.2 * 22.2) / 7.4);
    const rampIn = Math.max(p.rampIn ?? 90, rampMin);
    const rampOut = Math.max(p.rampOut ?? 90, rampMin * 0.95);
    const boxStart = p.boxStart ?? 60, boxSpacing = p.boxSpacing ?? 15;
    this.pit = {
      start: mod(p.in, L), // arc length of the entry ramp start
      len: Math.max(p.out - p.in, rampIn + boxStart + 9 * boxSpacing + 30 + rampOut),
      rampIn,
      rampOut,
      offset,
      width: PIT_WIDTH,
      island: PIT_ISLAND,
      limit: 22.2, // 80 km/h
      boxStart,
      boxSpacing,
      boxCount: 10,
    };
    this.pit.limitStart = mod(this.pit.start + this.pit.rampIn * 0.35, L);
    this.pit.limitLen = this.pit.len - this.pit.rampIn * 0.35 - this.pit.rampOut * 0.5;
  }

  _pitBlend(s) {
    const p = this.pit;
    if (!p) return 0;
    const rel = mod(s - p.start, this.length);
    if (rel > p.len) return 0;
    const a = smoothstep(0, p.rampIn, rel);
    const b = 1 - smoothstep(p.len - p.rampOut, p.len, rel);
    return Math.min(a, b);
  }

  /** Lateral position of the pit-lane centreline at s (negative = right of the track). */
  pitCentre(s) {
    return -this._pitBlend(s) * this.pit.offset;
  }

  /** True where the solid pit wall and the garage building exist (between the entry and exit ramps). */
  pitWallRange(s) {
    const p = this.pit;
    if (!p) return false;
    const rel = mod(s - p.start, this.length);
    return rel >= p.rampIn && rel <= p.len - p.rampOut;
  }

  /** Lateral position (d) of the pit wall's centreline: on the track side of the pit lane. */
  pitWallLat(s) {
    return this.pitCentre(s) + this.pit.width / 2 + 0.35;
  }

  inPitRange(s) {
    return !!this.pit && mod(s - this.pit.start, this.length) <= this.pit.len;
  }

  inPitLimiter(s) {
    return !!this.pit && mod(s - this.pit.limitStart, this.length) <= this.pit.limitLen;
  }

  /** Position (s, d) of the service box for a team index. */
  pitBox(teamIdx) {
    const p = this.pit;
    const s = mod(p.start + p.rampIn + p.boxStart + teamIdx * p.boxSpacing, this.length);
    return { s, d: this.pitCentre(s) - 2.2 };
  }

  surface(i, d) {
    const a = d < 0 ? -d : d;
    if (this.pit) {
      const b = this._pitBlend(i * this.ds);
      if (b > 0.01 && Math.abs(d + b * this.pit.offset) < PIT_WIDTH / 2) return SURF.PIT;
    }
    if (d >= 0) {
      let e = this.wl[i];
      if (a <= e) return SURF.ASPHALT;
      e += this.kl[i];
      if (a <= e) return SURF.KERB;
      e += this.r1l[i];
      if (a <= e) return this.t1l[i];
      e += this.r2l[i];
      return a <= e ? SURF.GRASS : SURF.WALL;
    }
    let e = this.wr[i];
    if (a <= e) return SURF.ASPHALT;
    e += this.kr[i];
    if (a <= e) return SURF.KERB;
    e += this.r1r[i];
    if (a <= e) return this.t1r[i];
    e += this.r2r[i];
    if (a <= e) return SURF.GRASS;
    return a <= this.wallDist(i, -1) ? SURF.GRASS : SURF.WALL;
  }

  // ---- markers / zones -------------------------------------------------------------------
  _buildMarkers() {
    const L = this.length;
    this.drs = this.autoDrsZones();
    const third = L / 3;
    this.sectors = this.def.sectors || [third, 2 * third];
    // Checkpoints every ~100 m for timing gaps.
    this.cpSpacing = L / Math.round(L / 100);
    this.cpCount = Math.round(L / this.cpSpacing);
  }

  /** DRS zones from the geometry: every straight longer than ~450 m opens 25 m after the corner exit and closes 150 m before the next corner. */
  autoDrsZones() {
    const N = this.N, ds = this.ds, L = this.length;
    const straight = (i) => Math.abs(this.curv[i % N]) < 1 / 1200;
    const zones = [];
    let first = -1;
    for (let i = 0; i < N; i++) if (!straight(i)) { first = i; break; }
    if (first < 0) return zones;
    let n = 0;
    while (n < N) {
      const i = (first + n) % N;
      if (!straight(i)) { n++; continue; }
      let m = 0;
      while (n + m < N && straight(first + n + m)) m++;
      const len = m * ds;
      if (len > 480) {
        const s0 = ((first + n) % N) * ds;
        const start = mod(s0 + 25, L), end = mod(s0 + len - 160, L);
        zones.push({ detect: mod(start - 140, L), start, end });
      }
      n += m;
    }
    return zones;
  }

  inDrsZone(s) {
    for (let k = 0; k < this.drs.length; k++) {
      const z = this.drs[k];
      if (mod(s - z.start, this.length) <= mod(z.end - z.start, this.length)) return k;
    }
    return -1;
  }

  _finishLine() {
    // Grid slots: pole is slot 0, two columns, 8 m apart, behind the line.
    this.gridSlot = (k) => ({
      s: mod(-9 - 8 * k - (k % 2) * 0, this.length),
      d: k % 2 === 0 ? 3.3 : -3.3,
    });
  }

  /** Lateral offset of the racing line at s. */
  lineAt(s) {
    return this.at(this.lineD, s);
  }
}
