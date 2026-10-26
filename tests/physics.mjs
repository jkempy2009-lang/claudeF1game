import { Car } from '../src/sim/car.js';
import { makeSpec, envelope } from '../src/sim/carspec.js';
import { FlatTrack } from './mocktrack.js';

const DT = 1 / 240;
const track = new FlatTrack();
const kmh = (v) => v * 3.6;
const results = [];
const check = (name, value, lo, hi, unit = '') => {
  const ok = value >= lo && value <= hi;
  results.push(ok);
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name.padEnd(46)} ${value.toFixed(2).padStart(9)}${unit}   (expect ${lo}..${hi})`);
};

function fresh(setup = {}, assist = {}) {
  const spec = makeSpec({ fuel: 45, ...setup });
  const car = new Car(spec, track);
  Object.assign(car.assist, assist);
  car.reset(0, 0, 0, 0);
  return car;
}

// ---- 0-100, 0-200, top speed
{
  const car = fresh();
  let t = 0, t100 = 0, t200 = 0, t300 = 0, vmax = 0;
  while (t < 60) {
    car.step(DT, { throttle: 1, brake: 0, steer: 0, boost: true });
    t += DT;
    const k = kmh(car.u);
    if (!t100 && k >= 100) t100 = t;
    if (!t200 && k >= 200) t200 = t;
    if (!t300 && k >= 300) t300 = t;
    vmax = Math.max(vmax, k);
  }
  check('0-100 km/h', t100, 2.3, 3.4, ' s');
  check('0-200 km/h', t200, 4.4, 6.8, ' s');
  check('0-300 km/h', t300, 8.6, 15, ' s');
  check('top speed (ERS exhausted by the end)', vmax, 320, 375, ' km/h');
}

// ---- braking from 300 km/h
{
  const car = fresh();
  car.reset(0, 0, 0, 300 / 3.6);
  let t = 0, dist = 0;
  const x0 = car.x;
  let peakG = 0;
  while (car.u > 1 && t < 15) {
    car.step(DT, { throttle: 0, brake: 1, steer: 0 });
    t += DT;
    peakG = Math.max(peakG, -car.axF / 9.81);
  }
  dist = car.x - x0;
  check('300 -> 0 braking distance (ABS)', dist, 85, 190, ' m');
  check('300 -> 0 braking time', t, 2.6, 5, ' s');
  check('peak braking g', peakG, 4.0, 6.8, ' g');
  const c2 = fresh({}, { abs: false });
  c2.reset(0, 0, 0, 300 / 3.6);
  let t2 = 0;
  while (c2.u > 1 && t2 < 15) { c2.step(DT, { throttle: 0, brake: 1, steer: 0 }); t2 += DT; }
  check('braking time without ABS (lock-ups cost time)', t2, t * 0.98, t * 1.9, ' s');
  const hottest = Math.max(...c2.temp), flatMax = Math.max(...c2.flat);
  check('lock-ups flat-spot the tyres', flatMax, 0.15, 1.01);
  check('lock-ups spike tyre temperature vs ABS braking', hottest - Math.max(...car.temp), 8, 400, ' C');
}

// ---- steady-state cornering: find max sustained lateral accel by circling at radius R
function skidpad(R, vStart, vEnd, setup, wetness = 0) {
  const car = fresh(setup);
  car.wetness = wetness;
  car.reset(0, -R, 0, 8);
  // place on circle centre (0,0), going counter-clockwise (left turn), start at (0,-R) heading +x
  let best = 0, bestV = 0, lastOk = 0;
  let v = vStart;
  const out = [];
  for (let t = 0; t < 120 && v < vEnd; t += DT) {
    const speed = car.speed;
    const target = v;
    // speed controller
    const err = target - speed;
    const thr = Math.max(0, Math.min(1, err * 0.5 + (speed > 40 ? 0.35 : 0.15)));
    const brk = Math.max(0, Math.min(1, -err * 0.5));
    // steering: pure geometric tracking of the circle
    const dx = car.x, dy = car.y;
    const rad = Math.hypot(dx, dy);
    const heading = Math.atan2(dy, dx) + Math.PI / 2; // tangent for CCW travel
    const hErr = Math.atan2(Math.sin(heading - car.theta), Math.cos(heading - car.theta));
    const rErr = R - rad; // positive -> inside circle -> steer right (negative)
    const ff = car.spec.wheelbase / R;
    let steerAngle = ff * 1.0 + hErr * 0.9 - rErr * 0.015;
    const lim = car.spec.maxSteer / (1 + (speed / 46) ** 2);
    const steer = Math.max(-1, Math.min(1, steerAngle / Math.max(lim, 0.01)));
    car.step(DT, { throttle: thr, brake: brk, steer });
    if (t > 1 && Math.abs(rad - R) < 4) {
      const lat = Math.abs(car.latG);
      if (lat > best) { best = lat; bestV = speed; }
    } else if (t > 2 && Math.abs(rad - R) >= 6) break; // lost the line
    v += 0.35 * DT * 4;
  }
  return { best, bestV };
}
{
  const r1 = skidpad(30, 8, 60);
  check('skidpad R=30 m peak lateral g', r1.best, 1.5, 3.2, ` g @${kmh(r1.bestV).toFixed(0)}km/h`);
  const r2 = skidpad(100, 15, 90);
  check('R=100 m peak lateral g', r2.best, 2.6, 4.6, ` g @${kmh(r2.bestV).toFixed(0)}km/h`);
  const r3 = skidpad(150, 30, 110);
  check('R=150 m peak lateral g (high speed)', r3.best, 3.4, 6.2, ` g @${kmh(r3.bestV).toFixed(0)}km/h`);
  const lowWing = skidpad(150, 30, 110, { frontWing: 0, rearWing: 0 });
  check('low-wing setup has less grip at speed', lowWing.best / r3.best, 0.6, 0.96, ' ratio');
  // weather
  const dryM = skidpad(100, 15, 90, { compound: 'medium' }), wetM = skidpad(100, 15, 90, { compound: 'medium' }, 1);
  const dryW = skidpad(100, 15, 90, { compound: 'wet' }), wetW = skidpad(100, 15, 90, { compound: 'wet' }, 1);
  // the tyre loses 30 %; the car then corners slower, so it also has less downforce: the peak-g ratio falls further
  check('rain cuts slick cornering g (tyre grip -30 %)', wetM.best / dryM.best, 0.5, 0.8, ' ratio');
  check('wet tyres restore grip in the rain', wetW.best / wetM.best, 1.2, 1.8, ' ratio');
  check('wet tyres give up some grip on a dry track', dryW.best / dryM.best, 0.7, 0.97, ' ratio');
}

// ---- tyre temperature, wear are sane
{
  const car = fresh();
  car.reset(0, 0, 0, 60);
  for (let t = 0; t < 20; t += DT) car.step(DT, { throttle: 0.6, brake: 0, steer: Math.sin(t) * 0.3 });
  const s = car.tyreSummary();
  check('tyre temp after 20 s of weaving', s.temp, 60, 140, ' C');
  check('tyre wear after 20 s', s.wear, 0, 0.1);
}

// ---- stability: no NaN, car doesn't gain energy while stationary / low speed
{
  const car = fresh();
  for (let t = 0; t < 10; t += DT) car.step(DT, { throttle: 0, brake: 0.3, steer: 0.5 });
  check('stationary with brake: speed stays ~0', car.speed, 0, 0.05, ' m/s');
  const c = fresh();
  for (let t = 0; t < 5; t += DT) c.step(DT, { throttle: 1, brake: 0, steer: 1 });
  check('full lock launch: finite state', Number.isFinite(c.x + c.y + c.theta + c.u + c.v + c.r) ? 1 : 0, 1, 1);
}

console.log(results.every(Boolean) ? '\nALL PHYSICS CHECKS PASSED' : `\n${results.filter((r) => !r).length} CHECK(S) FAILED`);
process.exit(results.every(Boolean) ? 0 : 1);
