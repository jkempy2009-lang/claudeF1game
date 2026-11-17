// Career / season bookkeeping checks (pure logic).
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
import * as C from '../src/sim/career.js';
import { TEAMS } from '../src/sim/teams.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };

const career = C.newCareer({ team: 6, level: 0.5, rounds: 4 });
ok('new career has a 4 round calendar', career.season.calendar.length === 4);
{ const c = C.newCareer({ rounds: 8 }); ok('every round has a valid forecast', c.season.weather.length === c.season.calendar.length && c.season.weather.every((w) => C.WEATHER_IDS.includes(w)) && C.weatherFor(c.season, 0) === 'dry'); const bad = C.sanitizeCareer({ ...c, season: { ...c.season, weather: ['monsoon', 3] } }); ok('bad forecasts are repaired', bad && bad.season.weather.length === c.season.calendar.length && bad.season.weather.every((w) => C.WEATHER_IDS.includes(w))); }
ok('a calendar of every circuit', C.makeCalendar(TRACK_DEFS.length).length === TRACK_DEFS.length && new Set(C.makeCalendar(TRACK_DEFS.length)).size === TRACK_DEFS.length && TRACK_DEFS.length >= 12);
ok('lapsFor scales with distance', C.lapsFor(3000, 'sprint') < C.lapsFor(3000, 'grandprix'));
ok('upgrade fails without budget', !C.buyUpgrade({ ...career, budget: 5, upgrades: { ...career.upgrades } }, 'power').ok);
const r = C.buyUpgrade(career, 'aero');
ok('upgrade bought and budget spent', r.ok && career.upgrades.aero === 1 && career.budget === 20 - 12, JSON.stringify(career.upgrades) + ' ' + career.budget);
const eff = C.upgradeEffects({ power: 6, aero: 6, grip: 6 });
ok('upgrade effects are bounded', eff.power < 1.1 && eff.aero < 1.1 && eff.grip < 1.05);
ok('sanitizeCareer accepts a good save', !!C.sanitizeCareer(JSON.parse(JSON.stringify(career))));
ok('sanitizeCareer rejects junk', C.sanitizeCareer({ v: 2 }) === null && C.sanitizeCareer('x') === null && C.sanitizeCareer(null) === null);

// ---- the driver: reputation, contracts, sponsors, team-mate, development (pure logic) ----
{
  const c = C.newCareer({ team: 6, rounds: 4 });
  ok('a new career has reputation, a head-to-head, stats and team form', c.rep === C.startingRep(6) && c.h2h.race.join() === '0,0' && c.stats.races === 0 && c.teamForm.length === 10 && c.news.length === 0);
  ok('six development areas, all at zero', C.UPGRADE_KEYS.length === 6 && C.UPGRADE_KEYS.every((k) => c.upgrades[k] === 0));
  const e = C.upgradeEffects({ ers: 6, tyres: 6, pit: 6 });
  ok('hybrid, tyre and pit crew upgrades are bounded', e.ers > 1.2 && e.ers < 1.4 && e.tyres > 0.7 && e.tyres < 0.8 && Math.abs(e.pit - 1.2) < 1e-9, JSON.stringify(e));
  ok('a better team asks for more reputation and pays more', [0, 1, 2, 3, 4, 5, 6, 7, 8].every((r) => C.repNeeded(r) > C.repNeeded(r + 1)) && C.repNeeded(9) === 0 && C.retainerFor(1) > C.retainerFor(9));
  ok('the team target shrinks with the grid', C.raceObjective(6, 20) === C.objectiveFor(6).finish && C.raceObjective(6, 8) < 8 && C.raceObjective(6, 8) >= 1 && C.raceObjective(1, 2) === 1, `${C.raceObjective(6, 20)} / ${C.raceObjective(6, 8)}`);
  ok('reputation labels', C.repLabel(0) === 'Rookie' && C.repLabel(60) === 'Podium contender' && C.repLabel(100) === 'Legend');
  // sponsors: three distinct offers, the same every time, none that the car is expected to deliver anyway
  const o1 = C.sponsorOffers(c), o2 = C.sponsorOffers(c);
  ok('three sponsor offers, stable for the round', o1.length === 3 && new Set(o1).size === 3 && o1.join() === o2.join(), o1.join());
  const top = C.newCareer({ team: 1, rounds: 4 });
  ok('the best car is not offered a challenge for finishing where it should', !C.sponsorOffers(top).some((id) => ['points', 'top5', 'podium'].includes(id)), C.sponsorOffers(top).join());
  ok('a challenge must be one of the offers', C.chooseSponsor(c, 'nonsense') === null && C.chooseSponsor(c, o1[0]) === o1[0] && c.sponsor === o1[0]);
  let varied = new Set();
  for (let r = 0; r < 4; r++) { c.season.round = r; C.sponsorOffers(c).forEach((id) => varied.add(id)); }
  c.season.round = 0;
  ok('the offers change from round to round', varied.size > 3, [...varied].join());
  // reputation: against the target, the team-mate and the stewards
  const base = { pos: 8, grid: 10, finished: true, penalty: 0, fastest: false, matePos: 10, objective: 8, cars: 20 };
  ok('meeting the target and beating the team-mate raises reputation', C.repDelta(base) > 0);
  ok('a win is worth more than a podium, a podium more than the target', C.repDelta({ ...base, pos: 1 }) > C.repDelta({ ...base, pos: 3 }) && C.repDelta({ ...base, pos: 3 }) > C.repDelta(base));
  ok('missing the target, losing to the team-mate, a penalty and a retirement all cost', C.repDelta({ ...base, pos: 14, matePos: 9 }) < -3 && C.repDelta({ ...base, penalty: 5 }) < C.repDelta(base) && C.repDelta({ ...base, finished: false }) < C.repDelta(base));
  ok('every sponsor goal judges a race', Object.values(C.SPONSOR_GOALS).every((g) => typeof g.ok(base) === 'boolean' && g.pay > 0));
  ok('gain3 / mate / clean / target2', C.SPONSOR_GOALS.gain3.ok({ ...base, grid: 11 }) && !C.SPONSOR_GOALS.gain3.ok(base) && C.SPONSOR_GOALS.mate.ok(base) && !C.SPONSOR_GOALS.mate.ok({ ...base, matePos: null }) && C.SPONSOR_GOALS.clean.ok(base) && !C.SPONSOR_GOALS.clean.ok({ ...base, penalty: 5 }) && C.SPONSOR_GOALS.target2.ok({ ...base, pos: 6 }) && !C.SPONSOR_GOALS.target2.ok({ ...base, pos: 7 }));
  // team development: bounded, zero-sum, the same for the same season, different the next
  const d1 = C.developTeams({ seasonNo: 2, teamForm: c.teamForm }).slice(), d2 = C.developTeams({ seasonNo: 2, teamForm: c.teamForm }).slice(), d3 = C.developTeams({ seasonNo: 3, teamForm: d1 }).slice();
  ok('team development is deterministic, bounded and balanced', d1.join() === d2.join() && d1.join() !== d3.join() && d1.every((v) => Math.abs(v) <= 0.18) && Math.abs(d1.reduce((a, b) => a + b, 0)) < 0.02 && d1.some((v) => v > 0.02) && d1.some((v) => v < -0.02), d1.join(' '));
  ok('team strength follows the form', C.teamStrength({ teamForm: d1 }, 0) !== C.teamStrength({ teamForm: null }, 0) && C.teamStrength({}, 3) > 0);
  // an old save gains the new fields; junk in them is cleaned
  const old = JSON.parse(JSON.stringify(c));
  for (const k of ['rep', 'h2h', 'stats', 'teamForm', 'news', 'sponsor']) delete old[k];
  old.upgrades = { power: 2, aero: 1, grip: 0 };
  const up = C.sanitizeCareer(old);
  ok('a career saved before the revamp loads with defaults', !!up && up.rep === C.startingRep(6) && up.upgrades.power === 2 && up.upgrades.pit === 0 && up.stats.races === 0 && up.teamForm.length === 10 && up.sponsor === null);
  const junk = C.sanitizeCareer({ ...JSON.parse(JSON.stringify(c)), rep: 9999, sponsor: '<img>', h2h: { race: ['x', -5] }, stats: { wins: 'lots' }, teamForm: [9, 'a'], news: ['<b>hi</b>', 5] });
  ok('junk in the new fields is cleaned', !!junk && junk.rep === 100 && junk.sponsor === null && junk.h2h.race.join() === '0,0' && junk.stats.wins === 0 && junk.teamForm[0] === 0.18 && junk.teamForm[1] === 0 && !junk.news.join('').includes('<'), JSON.stringify([junk.h2h, junk.teamForm.slice(0, 2), junk.news]));
  // contracts: reputation earns offers, and a driver far below the team's standard is dropped
  const mk = (team, rep, pts) => { const k = C.newCareer({ team, rounds: 1 }); k.rep = rep; k.season.round = 1; k.season.points = { You: pts, Rival: 20 }; k.season.teamOf = { You: 'X', Rival: 'Y' }; k.season.teamPoints = {}; return k; };
  const star = mk(9, 80, 0), rs = C.endSeason(star);
  ok('a high reputation in the slowest car brings three offers from better teams', rs.offers.length === 3 && rs.offers.every((i) => C.teamRank(i) < C.teamRank(9)) && !rs.dropped, rs.offers.join());
  const flop = mk(1, 30, 0), rf = C.endSeason(flop);
  ok('a driver far below a top team is dropped and offered lesser seats only', rf.dropped === true && rf.offers.length > 0 && rf.offers.every((i) => C.teamRank(i) > C.teamRank(1)), JSON.stringify(rf.offers));
  const last = mk(9, 0, 0), rl = C.endSeason(last);
  ok('the slowest team never drops its driver', rl.dropped === false);
}

// play a whole season with a bot as the player (2-lap races, 8 cars)
const rep0 = career.rep;
let repMoves = 0;
C.chooseSponsor(career, C.sponsorOffers(career)[0]);
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
  const before = career.budget, hadSponsor = career.sponsor;
  const repWas = career.rep;
  const res = C.settleRace(career, row, cls, { qualified: rd === 1 });
  console.log(`  round ${rd + 1} ${id}: P${res.pos} prize ${res.prize} + retainer ${res.retainer}${res.sponsor ? ` + sponsor ${res.sponsor.pay}` : ''} (objective P${res.objective}${res.met ? ' met' : ''}) budget ${career.budget} rep ${res.rep} (${res.repDelta >= 0 ? '+' : ''}${res.repDelta}) mate ${res.mate ? 'P' + res.mate.pos : '-'} | ${res.news}`);
  if (career.rep !== repWas) repMoves++;
  if (rd === 0) {
    ok('the budget grows by prize + retainer + sponsor', career.budget === before + res.prize + res.retainer + (res.sponsor ? res.sponsor.pay : 0) && res.retainer === C.retainerFor(career.team));
    ok('the accepted sponsor challenge is judged once and cleared', !!hadSponsor && !!res.sponsor && res.sponsor.id === hadSponsor && career.sponsor === null && typeof res.sponsor.met === 'boolean');
    ok('the team-mate is in the race and in the result', !!res.mate && res.mate.name === C.teamMate(career.team).name && res.mate.pos !== res.pos);
  }
}
ok('the head-to-head counts every race, and qualifying only when there was one', career.h2h.race[0] + career.h2h.race[1] === 4 && career.h2h.quali[0] + career.h2h.quali[1] === 1, JSON.stringify(career.h2h));
ok('career statistics add up', career.stats.races === 4 && career.stats.points === (career.season.points.You || 0) && career.stats.podiums >= career.stats.wins && (career.stats.best === 0 || career.stats.best >= 1), JSON.stringify(career.stats));
ok('four headlines, newest first, plain text', career.news.length === 4 && career.news.every((n) => typeof n === 'string' && n.length > 10 && !/[<>]/.test(n)));
ok('reputation moved with the results and stayed in range', repMoves >= 2 && career.rep >= 0 && career.rep <= 100, `${rep0} -> ${career.rep}, ${repMoves} moves`);
ok('season is complete', C.seasonDone(career.season));
const ds = C.driverStandings(career.season);
ok('driver standings include the player', ds.some((d) => d.name === 'You'));
ok('constructor standings exist', C.constructorStandings(career.season).length > 3);
const recap = C.endSeason(career);
ok('season recap and history', !!recap && career.history.length === 1 && recap.driverPos >= 1);
C.nextSeason(career, career.team);
ok('next season resets the calendar and keeps upgrades', career.season.round === 0 && career.seasonNo === 2 && career.upgrades.aero === 1);
ok('a new season: fresh head-to-head, developed teams, record kept', career.h2h.race.join() === '0,0' && career.teamForm.some((v) => v !== 0) && career.stats.races === 4 && typeof recap.rep === 'number');
// the developed cars race: team form reaches the car, and the new upgrades reach the player's car
{
  const track = new Track(TRACK_DEFS.find((d) => d.id === 'vettore'));
  const form = TEAMS.map((t, i) => (i === 9 ? 0.18 : i === 1 ? -0.18 : 0));
  const a = new Race(track, { mode: 'race', laps: 2, level: 0.5, fieldSize: 20, playerTeam: 6, seed: 4, equalCars: false });
  const b = new Race(track, { mode: 'race', laps: 2, level: 0.5, fieldSize: 20, playerTeam: 6, seed: 4, equalCars: false, teamForm: form });
  const pw = (r, ti) => r.cars.find((c) => !c.info.isPlayer && c.info.teamIdx === ti).spec.frontGrip;
  ok('a team that found pace has a quicker car, one that lost it a slower one', pw(b, 9) > pw(a, 9) && pw(b, 1) < pw(a, 1) && pw(b, 4) === pw(a, 4), `${pw(a, 9).toFixed(4)} -> ${pw(b, 9).toFixed(4)}`);
  const u = new Race(track, { mode: 'race', laps: 2, level: 0.5, fieldSize: 8, playerTeam: 6, seed: 4, tyreWear: 3, upgrades: { power: 0, aero: 0, grip: 0, ers: 4, tyres: 5, pit: 0 } });
  const n = new Race(track, { mode: 'race', laps: 2, level: 0.5, fieldSize: 8, playerTeam: 6, seed: 4, tyreWear: 3, upgrades: { power: 0, aero: 0, grip: 0, ers: 0, tyres: 0, pit: 0 } });
  ok('hybrid upgrade: a bigger battery on the player car only', u.player.spec.ersCapacity > n.player.spec.ersCapacity * 1.15 && u.cars.find((c) => !c.info.isPlayer).spec.ersCapacity === n.cars.find((c) => !c.info.isPlayer).spec.ersCapacity);
  ok('tyre upgrade: the player car wears its tyres more slowly', Math.abs(u.player.wearMult - 3 * 0.8) < 1e-9 && n.player.wearMult === 3 && u.cars.find((c) => !c.info.isPlayer).wearMult === 3);
}
process.exit(bad ? 1 : 0);
