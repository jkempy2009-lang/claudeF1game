// DRS rules: only inside a zone, only after crossing the detection line within 1.0 s of the car ahead, never on lap 1 / pit lane / under the safety car.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const track = new Track(TRACK_DEFS.find((d) => d.id === (process.argv[2] || 'vettore')));
const race = new Race(track, { mode: 'race', laps: 5, level: 0.9, fieldSize: 14, playerGrid: 8, seed: 21 });
const bot = new AIDriver({ car: race.player, track, profile: race.getProfile(race.player.spec, 'bot'), level: 0.9, seed: 3 });
race.start();
let n = 0, active = 0, outsideZone = 0, lap1 = 0, badGap = 0, underSc = 0, openAtStart = false, maxGapUsed = 0;
const wasAllowed = new Map();
while (race.phase !== 'finished' && n < 240 * 900) {
  const i = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
  race.step(DT, { throttle: i.throttle, brake: i.brake, steer: i.steer, boost: i.boost, drsPress: i.drs });
  race.events.length = 0;
  if (race.stepCount % 4 === 0 && race.phase === 'racing') {
    for (const c of race.cars) {
      if (!c.drsAllowed) continue;
      active++;
      const z = track.inDrsZone(c.s);
      if (z < 0) outsideZone++;
      if (c.rs.laps < 1) lap1++;
      if (race.sc.state !== 'none') underSc++;
      const g = c.rs.drsGap && c.rs.drsGap[z];
      if (g == null || g >= 1.0) badGap++;
      else maxGapUsed = Math.max(maxGapUsed, g);
    }
  }
  n++;
}
ok('DRS was available at times', active > 50, String(active));
ok('never outside a zone', outsideZone === 0);
ok('never on the first lap', lap1 === 0);
ok('never under the safety car', underSc === 0);
ok('only with a gap below 1.0 s at the detection line', badGap === 0, `largest gap used ${maxGapUsed.toFixed(2)} s`);
process.exit(bad ? 1 : 0);
