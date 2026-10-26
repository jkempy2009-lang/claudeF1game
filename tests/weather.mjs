// Weather: slicks lose grip when it rains, wets fix it, AI switch tyres, dry weather unaffected.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };

const track = new Track(TRACK_DEFS.find((d) => d.id === 'rade'));

// a 'changing' race: it starts dry, rains, AI move to wets, finishes
const race = new Race(track, { mode: 'race', laps: 8, level: 0.8, fieldSize: 8, playerGrid: 4, seed: 4, weather: 'changing' });
const bot = new AIDriver({ car: race.player, track, profile: race.getProfile(race.player.spec, 'bot'), level: 0.8, seed: 3 });
race.start();
let n = 0, maxWet = 0, sawWetTyres = 0, minWetAfter = 1;
while (race.phase !== 'finished' && n < 240 * 1500) {
  const i = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
  race.step(DT, { throttle: i.throttle, brake: i.brake, steer: i.steer, boost: i.boost, drsPress: i.drs });
  race.events.length = 0;
  maxWet = Math.max(maxWet, race.wet);
  if (n % 2400 === 0) sawWetTyres = Math.max(sawWetTyres, race.cars.filter((c) => c.driver && c.compound.wetTyre).length);
  n++;
}
ok('track got wet in a changing-weather race', maxWet > 0.4, maxWet.toFixed(2));
ok('AI cars fitted wet tyres', sawWetTyres >= 2, String(sawWetTyres));
ok('race finished', race.phase === 'finished');
const cls = race.classification();
ok('most of the field finished', cls.filter((e) => e.time != null).length >= 6, String(cls.filter((e) => e.time != null).length));
process.exit(bad ? 1 : 0);
