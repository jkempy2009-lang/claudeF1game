// Career / season bookkeeping checks (pure logic).
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
import * as C from '../src/sim/career.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };

const career = C.newCareer({ team: 6, level: 0.5, rounds: 4 });
ok('new career has a 4 round calendar', career.season.calendar.length === 4);
{ const c = C.newCareer({ rounds: 8 }); ok('every round has a valid forecast', c.season.weather.length === c.season.calendar.length && c.season.weather.every((w) => C.WEATHER_IDS.includes(w)) && C.weatherFor(c.season, 0) === 'dry'); const bad = C.sanitizeCareer({ ...c, season: { ...c.season, weather: ['monsoon', 3] } }); ok('bad forecasts are repaired', bad && bad.season.weather.length === c.season.calendar.length && bad.season.weather.every((w) => C.WEATHER_IDS.includes(w))); }
ok('full calendar uses every circuit', C.makeCalendar(8).length === TRACK_DEFS.length && TRACK_DEFS.length >= 10);
ok('lapsFor scales with distance', C.lapsFor(3000, 'sprint') < C.lapsFor(3000, 'grandprix'));
ok('upgrade fails without budget', !C.buyUpgrade({ ...career, budget: 5, upgrades: { ...career.upgrades } }, 'power').ok);
const r = C.buyUpgrade(career, 'aero');
ok('upgrade bought and budget spent', r.ok && career.upgrades.aero === 1 && career.budget === 20 - 12, JSON.stringify(career.upgrades) + ' ' + career.budget);
const eff = C.upgradeEffects({ power: 6, aero: 6, grip: 6 });
ok('upgrade effects are bounded', eff.power < 1.1 && eff.aero < 1.1 && eff.grip < 1.05);
ok('sanitizeCareer accepts a good save', !!C.sanitizeCareer(JSON.parse(JSON.stringify(career))));
ok('sanitizeCareer rejects junk', C.sanitizeCareer({ v: 2 }) === null && C.sanitizeCareer('x') === null && C.sanitizeCareer(null) === null);

// play a whole season with a bot as the player (2-lap races, 8 cars)
for (let rd = 0; rd < career.season.calendar.length; rd++) {
  const id = career.season.calendar[rd];
  const track = new Track(TRACK_DEFS.find((d) => d.id === id));
  const race = new Race(track, { mode: 'race', laps: 2, level: career.level, fieldSize: 8, playerTeam: career.team, playerGrid: 6, seed: 3 + rd, upgrades: career.upgrades });
  const prof = race.getProfile(race.player.spec, 'bot');
  const bot = new AIDriver({ car: race.player, track, profile: prof, level: 0.7, seed: 5, boxS: null, boxD: null });
  race.start();
  let n = 0;
  while (race.phase !== 'finished' && n < 240 * 500) {
    const i = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
    race.step(DT, { throttle: i.throttle, brake: i.brake, steer: i.steer, boost: i.boost, drsPress: i.drs });
    race.events.length = 0;
    n++;
  }
  const cls = race.classification();
  const row = C.recordRound(career.season, cls);
  const res = C.settleRace(career, row, cls);
  console.log(`  round ${rd + 1} ${id}: P${res.pos} prize ${res.prize} (objective P${res.objective}${res.met ? ' met' : ''}) budget ${career.budget}`);
}
ok('season is complete', C.seasonDone(career.season));
const ds = C.driverStandings(career.season);
ok('driver standings include the player', ds.some((d) => d.name === 'You'));
ok('constructor standings exist', C.constructorStandings(career.season).length > 3);
const recap = C.endSeason(career);
ok('season recap and history', !!recap && career.history.length === 1 && recap.driverPos >= 1);
C.nextSeason(career, career.team);
ok('next season resets the calendar and keeps upgrades', career.season.round === 0 && career.seasonNo === 2 && career.upgrades.aero === 1);
process.exit(bad ? 1 : 0);
