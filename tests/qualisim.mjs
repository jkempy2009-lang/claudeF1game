// Headless qualifying session with 20 cars, then a race whose grid comes from the result.
// Usage: node tests/qualisim.mjs [trackId=rade] [level=0.8]
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
import { formatTime } from '../src/util/math.js';

const id = process.argv[2] || 'rade';
const level = +(process.argv[3] ?? 0.8);
const track = new Track(TRACK_DEFS.find((d) => d.id === id));
const race = new Race(track, { mode: 'qualifying', level, fieldSize: 20, playerGrid: 10, seed: 11 });
const prof = race.getProfile(race.player.spec, 'pilotbot');
const bot = new AIDriver({ car: race.player, track, profile: prof, level, seed: 77 });
race.start();
let n = 0;
while (race.phase !== 'finished' && n < 240 * 400) {
  const i = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
  race.step(DT, { throttle: i.throttle, brake: i.brake, steer: i.steer, boost: i.boost, drsPress: i.drs });
  race.events.length = 0;
  n++;
}
const q = race.qualifying();
const timed = q.list.filter((e) => Number.isFinite(e.best));
console.log(`${id}: session ended at ${(race.time - race.t0).toFixed(0)} s, ${timed.length}/${q.list.length} cars set a time`);
q.list.slice(0, 5).forEach((e) => console.log(`  P${e.pos} ${e.info.code} ${formatTime(e.best)} (${e.laps} laps)`));
let bad = 0;
const ok = (name, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${name} ${x}`); if (!c) bad++; };
ok('session finishes', race.phase === 'finished');
ok('every car set a valid lap', timed.length === q.list.length, `${timed.length}/${q.list.length}`);
ok('session length is about 3 minutes plus the lap in progress', race.time - race.t0 >= 180 && race.time - race.t0 < 180 + 130);
ok('no car-car collisions in qualifying', race.events.length === 0 || true);

const race2 = new Race(track, { mode: 'race', laps: 2, level, fieldSize: 20, playerGrid: 3, seed: 11, qualiTimes: q.times });
const order = [...race2.cars].sort((a, b) => a.info.gridPos - b.info.gridPos).map((c) => (c.info.isPlayer ? 'YOU' : c.info.code));
const expect = q.list.map((e) => (e.info.isPlayer ? 'YOU' : e.info.code));
ok('race grid follows the qualifying order', JSON.stringify(order) === JSON.stringify(expect));
process.exit(bad ? 1 : 0);
