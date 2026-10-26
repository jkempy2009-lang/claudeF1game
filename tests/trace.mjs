// Debug helper: run one AI car until it first leaves the track, then print the preceding seconds.
// Usage: node tests/trace.mjs [trackIdx|id] [level] [secondsBefore]
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Car } from '../src/sim/car.js';
import { makeSpec } from '../src/sim/carspec.js';
import { buildSpeedProfile } from '../src/sim/speedprofile.js';
import { AIDriver } from '../src/sim/ai.js';
const DT = 1 / 240;
const arg = process.argv[2] || '0';
const def = TRACK_DEFS.find((d) => d.id === arg) || TRACK_DEFS[+arg];
const level = process.argv[3] ? +process.argv[3] : 1;
const before = process.argv[4] ? +process.argv[4] : 3;
const track = new Track(def);
const spec = makeSpec({ fuel: 25 });
const prof = buildSpeedProfile(track, spec);
const car = new Car(spec, track);
car.assist = { abs: true, tc: 2, steer: 0, autoGear: true, stability: 1 };
const slot = track.gridSlot(0);
const p = track.pointAt(slot.s, slot.d);
car.reset(p.x, p.y, p.heading, 0);
const drv = new AIDriver({ car, track, profile: prof, level, seed: 3 });
const race = { phase: 'racing', time: 0, cars: [car], lapsLeft: () => 5 };
const hist = [];
for (let k = 0; k < 240 * 400; k++) {
  const inp = drv.update(DT, race);
  car.step(DT, inp);
  race.time += DT;
  if (k % 12 === 0)
    hist.push(`t ${race.time.toFixed(1)} s ${car.s.toFixed(0)} d ${car.d.toFixed(1)} (line ${track.lineAt(car.s).toFixed(1)}) V ${(car.speed * 3.6).toFixed(0)} vt ${(prof.v[car.i] * drv.dp.pace * 3.6).toFixed(0)} g${car.gear} thr ${inp.throttle.toFixed(2)} brk ${inp.brake.toFixed(2)} steer ${inp.steer.toFixed(2)}/${car.steer.toFixed(3)} beta ${Math.atan2(car.v, car.u).toFixed(3)} latG ${car.latG.toFixed(2)} slipF ${car.alpha[0].toFixed(3)} slipR ${car.alpha[2].toFixed(3)} kapR ${car.kappa[2].toFixed(2)} T ${car.temp[0].toFixed(0)}`);
  if (race.time > 6 && Math.abs(car.d) > track.wl[car.i] + 1.2) {
    console.log(`LEFT TRACK at t=${race.time.toFixed(1)} s=${car.s.toFixed(0)} on ${def.id}; corner ids near:`, track.corners.filter((c) => Math.abs(c.sApex - car.s) < 250).map((c) => `#${c.id}@${c.sApex.toFixed(0)} R${c.radius.toFixed(0)}`).join(', '));
    console.log(hist.slice(-Math.round(before * 20)).join('\n'));
    process.exit(0);
  }
}
console.log('no excursion in 400 s');
