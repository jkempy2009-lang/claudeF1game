import { lerp } from '../util/math.js';

// Per car and frame: x, y, theta, h, pitch, roll, steer, w0..w3, drs, brake, harvest, slopePitch, speed
const F = 17;

/**
 * Ring buffer of the last `seconds` of the race for every car (30 Hz), plus the pace car. Cheap enough to run all race
 * (about 1 MB for 20 cars and 30 s) and lets the game replay the closing moments from trackside cameras.
 */
export class ReplayBuffer {
  constructor(carCount, seconds = 30, hz = 30) {
    this.n = carCount;
    this.hz = hz;
    this.frames = Math.round(seconds * hz);
    this.data = new Float32Array(this.frames * carCount * F);
    this.sc = new Float32Array(this.frames * 3); // pace car: x, y, theta (NaN when off track)
    this.times = new Float32Array(this.frames);
    this.head = 0; // next write slot
    this.count = 0;
    this.acc = 0;
  }

  /** Call every render frame with the elapsed real time; it records at the buffer rate. */
  tick(dt, cars, race, track) {
    this.acc += dt;
    const step = 1 / this.hz;
    if (this.acc < step) return;
    this.acc = Math.min(this.acc - step, step);
    this.record(cars, race, track);
  }

  record(cars, race, track) {
    const f = this.head;
    for (let c = 0; c < this.n; c++) {
      const car = cars[c];
      const o = (f * this.n + c) * F;
      const d = this.data;
      d[o] = car.x; d[o + 1] = car.y; d[o + 2] = car.theta; d[o + 3] = car.trackH;
      d[o + 4] = car.pitch; d[o + 5] = car.roll; d[o + 6] = car.steer;
      d[o + 7] = car.omega[0]; d[o + 8] = car.omega[1]; d[o + 9] = car.omega[2]; d[o + 10] = car.omega[3];
      d[o + 11] = car.drsPos; d[o + 12] = car.brake; d[o + 13] = car.harvesting ? 1 : 0;
      d[o + 14] = Math.atan(car.trackSlope * Math.cos(car.theta - car.trackHeading));
      d[o + 15] = car.speed;
    }
    const sc = race.sc;
    if (sc && sc.state !== 'none') {
      const p = track.pointAt(sc.s, 0);
      this.sc[f * 3] = p.x; this.sc[f * 3 + 1] = p.y; this.sc[f * 3 + 2] = p.heading;
    } else this.sc[f * 3] = NaN;
    this.times[f] = race.time;
    this.head = (f + 1) % this.frames;
    this.count = Math.min(this.frames, this.count + 1);
  }

  get duration() {
    return Math.max(0, (this.count - 1) / this.hz);
  }

  /** Ring index of the k-th recorded frame (0 = oldest). */
  idx(k) {
    return (this.head - this.count + k + this.frames * 2) % this.frames;
  }

  /** Fills `out[c]` (objects shaped like a physics car, as far as CarView needs) at replay time t (0 = oldest). */
  sample(t, out) {
    const f = Math.min(Math.max(t * this.hz, 0), this.count - 1);
    const k0 = Math.floor(f), k1 = Math.min(this.count - 1, k0 + 1), a = f - k0;
    const i0 = this.idx(k0), i1 = this.idx(k1);
    for (let c = 0; c < this.n; c++) {
      const o0 = (i0 * this.n + c) * F, o1 = (i1 * this.n + c) * F;
      const d = this.data;
      const o = out[c];
      o.x = o.px = lerp(d[o0], d[o1], a);
      o.y = o.py = lerp(d[o0 + 1], d[o1 + 1], a);
      let dth = d[o1 + 2] - d[o0 + 2];
      if (dth > Math.PI) dth -= 2 * Math.PI;
      if (dth < -Math.PI) dth += 2 * Math.PI;
      o.theta = o.ptheta = d[o0 + 2] + dth * a;
      o.trackH = lerp(d[o0 + 3], d[o1 + 3], a);
      o.pitch = lerp(d[o0 + 4], d[o1 + 4], a);
      o.roll = lerp(d[o0 + 5], d[o1 + 5], a);
      o.steer = lerp(d[o0 + 6], d[o1 + 6], a);
      for (let w = 0; w < 4; w++) o.omega[w] = lerp(d[o0 + 7 + w], d[o1 + 7 + w], a);
      o.drsPos = lerp(d[o0 + 11], d[o1 + 11], a);
      o.brake = d[o0 + 12];
      o.harvesting = d[o0 + 13] > 0.5;
      o.trackSlope = Math.tan(lerp(d[o0 + 14], d[o1 + 14], a));
      o.trackHeading = o.theta;
      o.speed = lerp(d[o0 + 15], d[o1 + 15], a);
      o.u = o.speed;
      o.v = 0;
      const L = o.live; // bodywork damage shown as it is now
      o.damageFront = L.damageFront || 0; o.damageRear = L.damageRear || 0; o.damageFloor = L.damageFloor || 0; o.damageSideL = L.damageSideL || 0; o.damageSideR = L.damageSideR || 0;
    }
    const s0 = i0 * 3, s1 = i1 * 3;
    const sc = this.sc;
    this.scPose = Number.isNaN(sc[s0]) ? null : { x: lerp(sc[s0], sc[s1], a), y: lerp(sc[s0 + 1], sc[s1 + 1], a), theta: sc[s0 + 2] };
  }
}

/** Objects shaped like Car, reused every frame (spec / geometry copied from the live cars). */
export function makeReplayCars(cars) {
  return cars.map((c) => ({
    spec: c.spec, a: c.a, b: c.b, x: 0, y: 0, px: 0, py: 0, theta: 0, ptheta: 0, trackH: 0, pitch: 0, roll: 0, steer: 0, omega: new Float64Array(4),
    drsPos: 0, brake: 0, harvesting: false, trackSlope: 0, trackHeading: 0, speed: 0, u: 0, v: 0, kerbShake: 0, rpm: 9000,
    damageFront: 0, damageRear: 0, damageFloor: 0, damageSideL: 0, damageSideR: 0, live: c, info: c.info,
  }));
}
