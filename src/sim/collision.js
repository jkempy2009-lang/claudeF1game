import { clamp } from '../util/math.js';

// Body outline relative to the CG (CG is ~2.0 m behind the nose of the front wing, 3.5 m ahead of the rear wing tip).
export const BODY = { front: 3.0, rear: -2.45, half: 0.98 };
const CX = (BODY.front + BODY.rear) / 2;
const HL = (BODY.front - BODY.rear) / 2;
const HW = BODY.half;

/** Corners of the car outline in body coordinates: front-left, front-right, rear-right, rear-left. */
export const CORNERS = [
  [BODY.front, HW],
  [BODY.front, -HW],
  [BODY.rear, -HW],
  [BODY.rear, HW],
];

const SQRT = Math.sqrt;

function worldCorners(c, out) {
  const co = Math.cos(c.theta), si = Math.sin(c.theta);
  for (let k = 0; k < 4; k++) {
    const [lx, ly] = CORNERS[k];
    out[k * 2] = c.x + lx * co - ly * si;
    out[k * 2 + 1] = c.y + lx * si + ly * co;
  }
}

const ca = new Float64Array(8), cb = new Float64Array(8);

/** Applies an impulse j (world frame, vector jx,jy) at world offset (rx,ry) from the CG and updates u,v,r. */
function applyImpulse(c, jx, jy, rx, ry) {
  const m = c.mass;
  const iz = c.spec.izDry + c.fuel * 0.45;
  const co = Math.cos(c.theta), si = Math.sin(c.theta);
  let vx = c.u * co - c.v * si + jx / m;
  let vy = c.u * si + c.v * co + jy / m;
  c.u = vx * co + vy * si;
  c.v = -vx * si + vy * co;
  c.r += (rx * jy - ry * jx) / iz;
}

function velAt(c, rx, ry) {
  const co = Math.cos(c.theta), si = Math.sin(c.theta);
  const vx = c.u * co - c.v * si, vy = c.u * si + c.v * co;
  return [vx - c.r * ry, vy + c.r * rx];
}

/**
 * Car/car collision: separating-axis test between the two outlines, positional separation, then an impulse with
 * restitution + tangential friction at the deepest contact. Returns impact energy (J) or 0.
 */
export function collideCars(a, b, restitution = 0.12) {
  const dx = b.x - a.x, dy = b.y - a.y;
  if (dx * dx + dy * dy > 49) return 0;
  worldCorners(a, ca);
  worldCorners(b, cb);
  // axes: the two forward and two left vectors
  const axes = [
    [Math.cos(a.theta), Math.sin(a.theta)],
    [-Math.sin(a.theta), Math.cos(a.theta)],
    [Math.cos(b.theta), Math.sin(b.theta)],
    [-Math.sin(b.theta), Math.cos(b.theta)],
  ];
  let minPen = Infinity, nx = 0, ny = 0;
  for (const [ax, ay] of axes) {
    let minA = Infinity, maxA = -Infinity, minB = Infinity, maxB = -Infinity;
    for (let k = 0; k < 4; k++) {
      const pa = ca[k * 2] * ax + ca[k * 2 + 1] * ay;
      const pb = cb[k * 2] * ax + cb[k * 2 + 1] * ay;
      if (pa < minA) minA = pa;
      if (pa > maxA) maxA = pa;
      if (pb < minB) minB = pb;
      if (pb > maxB) maxB = pb;
    }
    const overlap = Math.min(maxA, maxB) - Math.max(minA, minB);
    if (overlap <= 0) return 0;
    if (overlap < minPen) {
      minPen = overlap;
      // normal pointing from a to b
      const sgn = (minB + maxB) / 2 > (minA + maxA) / 2 ? 1 : -1;
      nx = ax * sgn;
      ny = ay * sgn;
    }
  }
  // contact point: deepest corner of one body inside the other (approximate by midpoint of penetrating corners)
  let px = 0, py = 0, cnt = 0;
  const inside = (cx, cy, car) => {
    const co = Math.cos(car.theta), si = Math.sin(car.theta);
    const rx = cx - car.x, ry = cy - car.y;
    const lx = rx * co + ry * si, ly = -rx * si + ry * co;
    return lx > BODY.rear && lx < BODY.front && Math.abs(ly) < HW;
  };
  for (let k = 0; k < 4; k++) {
    if (inside(ca[k * 2], ca[k * 2 + 1], b)) { px += ca[k * 2]; py += ca[k * 2 + 1]; cnt++; }
    if (inside(cb[k * 2], cb[k * 2 + 1], a)) { px += cb[k * 2]; py += cb[k * 2 + 1]; cnt++; }
  }
  if (!cnt) { px = (a.x + b.x) / 2; py = (a.y + b.y) / 2; } else { px /= cnt; py /= cnt; }

  const ma = a.mass, mb = b.mass;
  const push = minPen + 0.01;
  a.x -= nx * push * (mb / (ma + mb));
  a.y -= ny * push * (mb / (ma + mb));
  b.x += nx * push * (ma / (ma + mb));
  b.y += ny * push * (ma / (ma + mb));

  const rax = px - a.x, ray = py - a.y, rbx = px - b.x, rby = py - b.y;
  const va = velAt(a, rax, ray), vb = velAt(b, rbx, rby);
  const rvx = vb[0] - va[0], rvy = vb[1] - va[1];
  const vn = rvx * nx + rvy * ny;
  if (vn >= 0) return 0;
  const ia = a.spec.izDry + a.fuel * 0.45, ib = b.spec.izDry + b.fuel * 0.45;
  const rnA = rax * ny - ray * nx, rnB = rbx * ny - rby * nx;
  const denom = 1 / ma + 1 / mb + (rnA * rnA) / ia + (rnB * rnB) / ib;
  const j = (-(1 + restitution) * vn) / denom;
  applyImpulse(a, -j * nx, -j * ny, rax, ray);
  applyImpulse(b, j * nx, j * ny, rbx, rby);
  // tangential friction (scrubbing)
  const tx = -ny, ty = nx;
  const vt = rvx * tx + rvy * ty;
  const jt = clamp(-vt / denom, -0.25 * j, 0.25 * j);
  applyImpulse(a, -jt * tx, -jt * ty, rax, ray);
  applyImpulse(b, jt * tx, jt * ty, rbx, rby);
  const energy = 0.5 * (1 / (1 / ma + 1 / mb)) * vn * vn;
  // local contact points for damage placement
  const loc = (car) => {
    const co = Math.cos(car.theta), si = Math.sin(car.theta);
    const rx = px - car.x, ry = py - car.y;
    return [rx * co + ry * si, -rx * si + ry * co];
  };
  const la = loc(a), lb = loc(b);
  return { energy, la, lb, speed: -vn };
}

/**
 * Barrier collisions: each outline corner is tested against the wall distance on the side it is closest to.
 * Returns the strongest impact {energy, lx, ly, speed} or null.
 */
const tmp = { i: 0, t: 0, s: 0, d: 0, dist: 0 };
export function collideWalls(car, track, restitution = 0.2, friction = 0.35) {
  worldCorners(car, ca);
  let worst = null;
  const co = Math.cos(car.theta), si = Math.sin(car.theta);
  const resolve = (pen, nx, ny, wx, wy) => {
    // positional correction (move the whole car out of the barrier)
    car.x += nx * (pen + 0.01);
    car.y += ny * (pen + 0.01);
    const rx = wx - car.x, ry = wy - car.y;
    const v = velAt(car, rx, ry);
    const vn = v[0] * nx + v[1] * ny;
    if (vn >= 0) return;
    const m = car.mass, iz = car.spec.izDry + car.fuel * 0.45;
    const rn = rx * ny - ry * nx;
    const denom = 1 / m + (rn * rn) / iz;
    const j = (-(1 + restitution) * vn) / denom;
    applyImpulse(car, j * nx, j * ny, rx, ry);
    // friction along the wall
    const tx = -ny, ty = nx;
    const vt = v[0] * tx + v[1] * ty;
    const jt = clamp(-vt / denom, -friction * j, friction * j);
    applyImpulse(car, jt * tx, jt * ty, rx, ry);
    const energy = 0.5 * m * vn * vn;
    if (!worst || energy > worst.energy) {
      const lx = rx * co + ry * si, ly = -rx * si + ry * co;
      worst = { energy, lx, ly, speed: -vn, wx, wy };
    }
  };
  // which side of the pit wall is the car on? (decided by its centre, so a car is never trapped on the wrong side)
  let pitSide = 0, pitWp = 0;
  if (track.pit && track.pitWallRange(car.s)) {
    pitWp = track.pitWallLat(car.s);
    pitSide = car.d > pitWp ? 1 : -1;
  }
  for (let k = 0; k < 4; k++) {
    const wx = ca[k * 2], wy = ca[k * 2 + 1];
    const p = track.project(wx, wy, car.i, tmp);
    const side = p.d >= 0 ? 1 : -1;
    const lim = track.wallDist(p.i, side);
    const pen = Math.abs(p.d) - lim;
    if (pen > 0) resolve(pen, -side * track.nx[p.i], -side * track.ny[p.i], wx, wy);
    if (pitSide && track.pitWallRange(p.s)) {
      // solid pit wall, 0.4 m thick, closed to traffic from either side between the entry and exit ramps
      const wp = track.pitWallLat(p.s);
      const pp = pitSide > 0 ? wp + 0.2 - p.d : p.d - (wp - 0.2);
      if (pp > 0) resolve(pp, pitSide * track.nx[p.i], pitSide * track.ny[p.i], wx, wy);
    }
  }
  return worst;
}
