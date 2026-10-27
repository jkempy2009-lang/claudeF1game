// Prints the README pace table: clean-lap time of the best car for every circuit at each difficulty preset.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Car } from '../src/sim/car.js';
import { makeSpec } from '../src/sim/carspec.js';
import { buildSpeedProfile } from '../src/sim/speedprofile.js';
import { AIDriver } from '../src/sim/ai.js';
import { formatTime } from '../src/util/math.js';
import { DIFFICULTIES, CAR_BASE } from '../src/sim/race.js';
const DT = 1 / 240;
console.log('| | ' + DIFFICULTIES.map((d) => d.name).join(' | ') + ' |');
console.log('|---|' + DIFFICULTIES.map(() => '---').join('|') + '|');
for (const def of TRACK_DEFS) {
  const track = new Track(def);
  const row = [];
  for (const d of DIFFICULTIES) {
    const spec = makeSpec({ fuel: 20, compound: 'medium', frontWing: def.setup?.front, rearWing: def.setup?.rear });
    spec.powerScale *= CAR_BASE.power; spec.clAf *= CAR_BASE.aero; spec.clAr *= CAR_BASE.aero; spec.frontGrip *= CAR_BASE.grip; spec.rearGrip *= CAR_BASE.grip; spec.launchGrip = CAR_BASE.launch;
    const prof = buildSpeedProfile(track, spec, { latUse: 0.9, brakeUse: 0.95, accelUse: 1.0 });
    const car = new Car(spec, track);
    car.assist = { abs: true, tc: 2, steer: 0, autoGear: true, stability: 1 };
    const slot = track.gridSlot(0);
    const p = track.pointAt(slot.s, slot.d);
    car.reset(p.x, p.y, p.heading, 0);
    const drv = new AIDriver({ car, track, profile: prof, level: d.level, skill: 1, seed: 3 });
    const race = { phase: 'racing', time: 0, cars: [car], lapsLeft: () => 9 };
    let laps = 0, last = 0, t0 = 0, times = [];
    for (let t = 0; t < 600 && laps < 3; t += DT) {
      car.step(DT, drv.update(DT, race));
      race.time = t;
      if (last > track.length * 0.9 && car.s < track.length * 0.1 && t > 5) { laps++; times.push(t - t0); t0 = t; }
      last = car.s;
    }
    row.push(formatTime(Math.min(...times.slice(1))));
  }
  console.log(`| ${def.name} | ${row.join(' | ')} |`);
}
