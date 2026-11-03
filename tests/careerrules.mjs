// Career rules: laps per race (down to one), field, weather, wear, prizes, season length, creep; old saves keep working.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
import * as C from '../src/sim/career.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };

const d = C.sanitizeRules({});
ok('defaults', d.laps === 0 && d.fieldSize === 20 && d.weather === 'forecast' && d.damage === true && d.prize === 1 && d.creep === true);
const j = C.sanitizeRules({ laps: 99, fieldSize: 1, playerGrid: 30, weather: 'snow', tyreWear: 4, damage: 'yes', prize: 3, pitCalls: 'x' });
ok('junk is repaired', j.laps === 30 && j.fieldSize === 2 && j.playerGrid === 2 && j.weather === 'forecast' && j.tyreWear === 3 && j.damage === true && j.prize === 1 && j.pitCalls === 'radio', JSON.stringify(j));
ok('a null or array is a default set', C.sanitizeRules(null).laps === 0 && C.sanitizeRules([1]).fieldSize === 20);
ok('one lap per race', C.careerLaps({ rules: { laps: 1 }, distance: 'standard' }, 5000) === 1);
ok('laps 0 follows the distance preset', C.careerLaps({ rules: { laps: 0 }, distance: 'sprint' }, 3000) === C.lapsFor(3000, 'sprint'));

const c = C.newCareer({ team: 3, level: 1.15, rounds: 6, rules: { laps: 1, fieldSize: 8, prize: 2, creep: false } });
ok('a 6-round season', c.season.calendar.length === 6 && c.rounds === 6);
ok('rules are kept', c.rules.laps === 1 && c.rules.fieldSize === 8 && c.rules.prize === 2 && c.rules.creep === false);
ok('a season longer than the circuits goes round again', C.makeCalendar(20).length === 20 && C.makeCalendar(20)[TRACK_DEFS.length] === TRACK_DEFS[0].id && C.makeCalendar(99).length === C.MAX_ROUNDS && C.makeCalendar(0).length === 1);
// prize money multiplier
{
  const base = C.newCareer({ team: 6 }), rich = C.newCareer({ team: 6, rules: { prize: 5 } });
  const row = { order: [{ name: 'You', pos: 1 }] };
  const b0 = base.budget, r0 = rich.budget;
  const a = C.settleRace(base, row, []), b = C.settleRace(rich, row, []);
  ok('prize money multiplier applies to race prizes', b.prize === a.prize * 5 && rich.budget - r0 === 5 * (base.budget - b0), `${a.prize} -> ${b.prize}`);
}
// creep and the F1 level
{
  const a = C.newCareer({ level: 0.5 }), b = C.newCareer({ level: 0.5, rules: { creep: false } }), f = C.newCareer({ level: 1.15 });
  C.nextSeason(a); C.nextSeason(b); C.nextSeason(f);
  ok('the AI improves between seasons by default', a.level > 0.5);
  ok('...unless the rival-creep rule is off', b.level === 0.5);
  ok('the F1 level is kept, not clamped to Legend', f.level >= 1.15, f.level.toFixed(2));
}
// saves
{
  const old = JSON.parse(JSON.stringify(C.newCareer({ team: 2 }))); delete old.rules;
  const s = C.sanitizeCareer(old);
  ok('an old save without rules gets the defaults', !!s && s.rules.laps === 0 && s.rules.fieldSize === 20);
  const eight = JSON.parse(JSON.stringify(C.newCareer({ team: 2 }))); delete eight.rules; eight.rounds = 8;
  ok("an old save's 8 rounds meant every circuit", C.sanitizeCareer(eight).rounds === TRACK_DEFS.length);
  const round = C.sanitizeCareer(JSON.parse(JSON.stringify(c)));
  ok('rules survive a save round trip', round.rules.laps === 1 && round.rounds === 6 && round.level === 1.15 && round.rules.prize === 2);
  const junk = JSON.parse(JSON.stringify(c)); junk.rules = { laps: 'many', weather: 7 };
  ok('junk rules in a save are repaired', C.sanitizeCareer(junk).rules.laps === 0 && C.sanitizeCareer(junk).rules.weather === 'forecast');
}
// a one-lap race really runs and finishes, with a small field
for (const id of ['rade', 'sakura']) {
  const track = new Track(TRACK_DEFS.find((t) => t.id === id));
  const race = new Race(track, { mode: 'race', laps: 1, level: 0.7, fieldSize: 6, playerGrid: 3, seed: 9, tyreWear: 0, damage: false, collisions: false, mandatoryStop: false });
  const p = race.player;
  const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 0.7, seed: 5 });
  race.start();
  let n = 0;
  while (race.phase !== 'finished' && n < 240 * 400) {
    const i = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
    race.step(DT, { throttle: i.throttle, brake: i.brake, steer: i.steer, boost: i.boost, drsPress: i.drs });
    race.events.length = 0;
    n++;
  }
  const cls = race.classification();
  ok(`${id}: a one-lap race finishes and classifies everyone`, race.phase === 'finished' && cls.length === 6 && cls.every((e) => e.time != null), `${(n * DT).toFixed(0)} s`);
}
process.exit(bad ? 1 : 0);
