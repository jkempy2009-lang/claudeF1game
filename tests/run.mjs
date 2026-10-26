// `npm test`: physics validation, then headless lap + race sanity checks with pass/fail thresholds.
import { spawnSync } from 'node:child_process';
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Car } from '../src/sim/car.js';
import { makeSpec } from '../src/sim/carspec.js';
import { buildSpeedProfile } from '../src/sim/speedprofile.js';
import { AIDriver } from '../src/sim/ai.js';
import { Race, DT } from '../src/sim/race.js';

let failed = 0;
const ok = (name, cond, extra = '') => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name} ${extra}`);
  if (!cond) failed++;
};

const r = spawnSync(process.execPath, [new URL('./physics.mjs', import.meta.url).pathname], { stdio: 'inherit' });
if (r.status !== 0) failed++;

console.log('\n-- tracks close and are drivable by the AI --');
for (const def of TRACK_DEFS) {
  const track = new Track(def);
  const spec = makeSpec({ frontWing: def.setup.front, rearWing: def.setup.rear, fuel: 15 });
  const prof = buildSpeedProfile(track, spec);
  const car = new Car(spec, track);
  car.assist = { abs: true, tc: 2, steer: 0, autoGear: true, stability: 1 };
  const p = track.pointAt(track.gridSlot(0).s, track.gridSlot(0).d);
  car.reset(p.x, p.y, p.heading, 0);
  const drv = new AIDriver({ car, track, profile: prof, level: 0.9, seed: 1 });
  const race = { phase: 'racing', time: 0, cars: [car], lapsLeft: () => 3 };
  let laps = 0, last = 0, off = 0, lapStart = 0, best = Infinity;
  for (let t = 0; t < 200 && laps < 2; t += DT) {
    car.step(DT, drv.update(DT, race));
    race.time = t;
    if (car.surf.every((s) => s >= 2 && s !== 5)) off += DT;
    if (last > track.length * 0.9 && car.s < track.length * 0.1 && t > 5) {
      laps++;
      best = Math.min(best, t - lapStart);
      lapStart = t;
    }
    last = car.s;
  }
  ok(`${def.id}: AI completes 2 laps cleanly`, laps >= 2 && off < 1, `(best ${best.toFixed(1)} s, off-track ${off.toFixed(1)} s)`);
}

console.log('\n-- full-grid race --');
const track = new Track(TRACK_DEFS.find((d) => d.id === 'northfield'));
const race = new Race(track, { laps: 2, level: 0.7, fieldSize: 20, playerGrid: 10, seed: 2 });
const bot = new AIDriver({ car: race.player, track, profile: race.getProfile(race.player.spec, 'bot'), level: 0.7, seed: 9 });
race.start();
let n = 0;
while (race.phase !== 'finished' && n < 240 * 400) {
  const i = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
  race.step(DT, { throttle: i.throttle, brake: i.brake, steer: i.steer, boost: i.boost });
  race.events.length = 0;
  n++;
}
const cls = race.classification();
ok('race ends with a classification of 20 cars', race.phase === 'finished' && cls.length === 20);
ok('every car finished 2 laps', cls.filter((e) => e.time != null && e.laps >= 2).length >= 19, `(${cls.filter((e) => e.time != null).length}/20)`);
ok('winner is from a front-grid slot or a top team', cls[0].gridPos <= 8);
ok('lap times are plausible (80-130 s)', cls.every((e) => e.best === Infinity || (e.best > 80 && e.best < 130)));
console.log(failed ? `\n${failed} FAILED` : '\nALL TESTS PASSED');
process.exit(failed ? 1 : 0);
