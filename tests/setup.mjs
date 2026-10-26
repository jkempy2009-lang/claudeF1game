// Setup knobs: tyre pressure trades wear and heat against grip, and the default is the dry-weather sweet spot.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Car } from '../src/sim/car.js';
import { makeSpec } from '../src/sim/carspec.js';
import { buildSpeedProfile } from '../src/sim/speedprofile.js';
import { AIDriver } from '../src/sim/ai.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const DT = 1 / 240;
const track = new Track(TRACK_DEFS.find((d) => d.id === 'northfield'));

function lap(pressure, wet = 0) {
  const spec = makeSpec({ fuel: 20, compound: wet ? 'wet' : 'medium', frontWing: 4, rearWing: 4, pressure });
  const prof = buildSpeedProfile(track, spec, {});
  const car = new Car(spec, track);
  car.assist = { abs: true, tc: 2, steer: 0, autoGear: true, stability: 1 };
  car.wetness = wet;
  const slot = track.gridSlot(0);
  const p = track.pointAt(slot.s, slot.d);
  car.reset(p.x, p.y, p.heading, 0);
  const drv = new AIDriver({ car, track, profile: prof, level: 0.8, skill: 1, seed: 3 });
  const race = { phase: 'racing', time: 0, cars: [car], lapsLeft: () => 3 };
  let laps = 0, last = 0, t0 = 0, times = [];
  for (let t = 0; t < 400 && laps < 2; t += DT) {
    car.step(DT, drv.update(DT, race));
    race.time = t;
    if (last > track.length * 0.9 && car.s < track.length * 0.1 && t > 5) { laps++; times.push(t - t0); t0 = t; }
    last = car.s;
  }
  return { lapTime: times[1] ?? times[0], wear: car.tyreSummary().wear, temp: car.tyreSummary().temp };
}
const lo = lap(-2), mid = lap(0), hi = lap(2);
ok('higher pressure wears the tyres more slowly', hi.wear < mid.wear && mid.wear < lo.wear, `${lo.wear.toFixed(3)} / ${mid.wear.toFixed(3)} / ${hi.wear.toFixed(3)}`);
ok('higher pressure runs the tyres hotter', hi.temp > mid.temp && mid.temp > lo.temp, `${lo.temp.toFixed(0)} / ${mid.temp.toFixed(0)} / ${hi.temp.toFixed(0)} C`);
ok('standard pressure is within 0.3 s of the best dry lap', mid.lapTime <= Math.min(lo.lapTime, hi.lapTime) + 0.3, `${lo.lapTime.toFixed(2)} / ${mid.lapTime.toFixed(2)} / ${hi.lapTime.toFixed(2)} s`);
const spec = makeSpec({ pressure: 9 });
ok('pressure is clamped to the allowed range', spec.pressure === 3 && makeSpec({}).pressure === 0);
process.exit(bad ? 1 : 0);
