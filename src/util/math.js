export const TAU = Math.PI * 2;
export const G = 9.81;

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, v) => (b === a ? 0 : (v - a) / (b - a));
export const sign = (v) => (v < 0 ? -1 : 1);
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

export function wrapAngle(a) {
  a %= TAU;
  if (a > Math.PI) a -= TAU;
  else if (a < -Math.PI) a += TAU;
  return a;
}

/** Shortest signed distance along a loop of the given length, in (-len/2, len/2]. */
export function loopDelta(a, b, len) {
  let d = (a - b) % len;
  if (d > len / 2) d -= len;
  else if (d <= -len / 2) d += len;
  return d;
}

export function mod(a, n) {
  return ((a % n) + n) % n;
}

/** Small, fast, seedable PRNG so races/tracks are reproducible. */
export function mulberry32(seed) {
  let a = seed >>> 0;
  const rnd = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  rnd.range = (lo, hi) => lo + (hi - lo) * rnd();
  rnd.gauss = () => {
    let u = 0;
    for (let i = 0; i < 6; i++) u += rnd();
    return (u - 3) / Math.sqrt(0.5);
  };
  return rnd;
}

/** Piecewise-linear interpolation through [[x, y], ...] sorted by x. */
export function table(points, x) {
  if (x <= points[0][0]) return points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (x <= points[i][0]) {
      const [x0, y0] = points[i - 1];
      const [x1, y1] = points[i];
      return y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
    }
  }
  return points[points.length - 1][1];
}

export function formatTime(t, digits = 3) {
  if (t == null || !isFinite(t)) return '--:--.---';
  const sign = t < 0 ? '-' : '';
  t = Math.abs(t);
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return `${sign}${m}:${s.toFixed(digits).padStart(digits + 3, '0')}`;
}

export function formatGap(t) {
  if (t == null || !isFinite(t)) return '';
  return (t >= 0 ? '+' : '-') + Math.abs(t).toFixed(1);
}
