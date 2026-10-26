import { envelope } from './carspec.js';

/**
 * Builds the target speed for every track sample along the racing line: the corner speed limit from the
 * car's grip/downforce envelope, then a forward pass (what power/traction allows out of a corner) and a
 * backward pass (what braking allows into one), each taking friction-circle sharing into account.
 *
 * `use` factors are <1 to leave a safety margin: AI calibration lives here (tests/lapsim.mjs tunes them).
 */
export function lineGeometry(track) {
  const N = track.N, ds = track.ds;
  const px = new Float64Array(N), py = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    px[i] = track.x[i] + track.nx[i] * track.lineD[i];
    py[i] = track.y[i] + track.ny[i] * track.lineD[i];
  }
  const kappa = new Float64Array(N);
  const K = 2; // 3-point curvature over +-2 samples
  for (let i = 0; i < N; i++) {
    const a = (i - K + N) % N, b = (i + K) % N;
    const ax = px[i] - px[a], ay = py[i] - py[a];
    const bx = px[b] - px[i], by = py[b] - py[i];
    const cross = ax * by - ay * bx;
    const la = Math.hypot(ax, ay), lb = Math.hypot(bx, by), lc = Math.hypot(px[b] - px[a], py[b] - py[a]);
    kappa[i] = (2 * cross) / (la * lb * lc + 1e-9);
  }
  // light smoothing to remove sampling noise
  const out = new Float64Array(N);
  for (let i = 0; i < N; i++) out[i] = (kappa[(i - 1 + N) % N] + 2 * kappa[i] + kappa[(i + 1) % N]) / 4;
  return { px, py, kappa: out, ds };
}

export function buildSpeedProfile(track, spec, opts = {}) {
  const latUse = opts.latUse ?? 0.8;
  const brakeUse = opts.brakeUse ?? 0.85;
  const accelUse = opts.accelUse ?? 0.92;
  const mass = spec.dryMass + (opts.fuel ?? 30);
  const env = envelope(spec, mass);
  const { kappa, ds } = opts.geometry || lineGeometry(track);
  const N = track.N;
  const vTop = 110;

  // corner limit: m v^2 |k| = latAccel(v)*m  -> solve v by bisection on f(v) = v^2 |k| - ay(v)
  const vCorner = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const k = Math.abs(kappa[i]);
    if (k < 1e-5) {
      vCorner[i] = vTop;
      continue;
    }
    let lo = 4, hi = vTop;
    for (let it = 0; it < 28; it++) {
      const mid = (lo + hi) / 2;
      if (mid * mid * k > env.latAccel(mid, latUse)) hi = mid;
      else lo = mid;
    }
    vCorner[i] = lo;
  }

  // friction circle: how much of the grip budget remains for longitudinal at speed v with curvature k
  const circle = (v, k) => {
    const ay = v * v * Math.abs(k);
    const lim = env.latAccel(v, latUse);
    const r = Math.min(1, ay / lim);
    return Math.sqrt(Math.max(0.02, 1 - r * r));
  };

  const v = Float64Array.from(vCorner);
  const twoLaps = 2 * N;
  // forward pass (acceleration), two laps for the cyclic boundary
  for (let n = 0; n < twoLaps; n++) {
    const i = n % N, j = (n + 1) % N;
    const a = env.accel(v[i], accelUse) * circle(v[i], kappa[i]);
    const vn = Math.sqrt(Math.max(0, v[i] * v[i] + 2 * Math.max(a, 0) * ds));
    if (vn < v[j]) v[j] = vn;
  }
  // backward pass (braking)
  for (let n = twoLaps; n > 0; n--) {
    const j = n % N, i = (n - 1 + N) % N;
    const b = env.brakeDecel(v[j], brakeUse) * circle(v[j], kappa[j]);
    const vp = Math.sqrt(v[j] * v[j] + 2 * b * ds);
    if (vp < v[i]) v[i] = vp;
  }
  return { v, kappa, ds, env, mass };
}
