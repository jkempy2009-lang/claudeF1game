// Sweep: every circuit x a few difficulty levels with a full grid; prints incidents, finishers and the winner's pace.
// Usage: node tests/matrix.mjs [laps=4] [levels=0.3,0.7,1.0] [tracks=all]
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
import { formatTime } from '../src/util/math.js';
const laps = +(process.argv[2] || 4);
const levels = (process.argv[3] || '0.3,0.7,1.0').split(',').map(Number);
const only = process.argv[4] && process.argv[4] !== 'all' ? process.argv[4].split(',') : null;
let flagged = 0;
console.log('track       level  recov  wall  car   pens  finish  winner best lap');
for (const def of TRACK_DEFS) {
  if (only && !only.includes(def.id)) continue;
  const track = new Track(def);
  for (const level of levels) {
    const race = new Race(track, { mode: 'race', laps, level, fieldSize: 20, playerGrid: 10, seed: 7, tyreWear: 3 });
    const p = race.player;
    const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level, seed: 5 });
    race.start();
    let recov = 0, wall = 0, car = 0, pens = 0;
    for (let i = 0; i < 240 * 60 * 40 && race.phase !== 'finished'; i++) {
      const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
      if (p.rs.pilot && p.rs.pilot.pitState !== 'none') bot.pitState = 'none';
      race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, drsPress: inp.drs && !p.rs.drsLatch });
      for (const e of race.events) { if (e.type === 'recover') recov++; else if (e.type === 'impact') (e.wall ? wall++ : car++); else if (e.type === 'penalty') pens++; }
      race.events.length = 0;
    }
    const cls = race.classification();
    const fin = cls.filter((c) => c.time != null).length;
    const best = Math.min(...cls.map((c) => c.best));
    const bad = recov > 12 + laps * 2 || fin < 18 || race.phase !== 'finished';
    if (bad) flagged++;
    console.log(`${def.id.padEnd(11)} ${String(level).padEnd(5)} ${String(recov).padStart(5)} ${String(wall).padStart(5)} ${String(car).padStart(4)} ${String(pens).padStart(5)}  ${String(fin).padStart(2)}/20   ${formatTime(best)} ${bad ? ' <-- check' : ''}`);
  }
}
console.log(flagged ? `${flagged} configuration(s) flagged` : 'all configurations clean');
process.exit(0);
