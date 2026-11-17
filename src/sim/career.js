// Season + career bookkeeping. Pure data, no DOM or rendering, so it is easy to test and to persist (JSON).
import { TRACK_DEFS } from './trackdefs.js';
import { mulberry32 } from '../util/math.js';
import { TEAMS, DRIVERS } from './teams.js';

export const POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
export const UPGRADE_KEYS = ['power', 'aero', 'grip', 'ers', 'tyres', 'pit'];
export const UPGRADE_MAX = 6;
export const UPGRADE_INFO = {
  power: { name: 'Power unit', blurb: '+1.2 % engine output per level', per: 0.012 },
  aero: { name: 'Aerodynamics', blurb: '+1.4 % downforce per level', per: 0.014 },
  grip: { name: 'Chassis', blurb: '+0.6 % mechanical grip per level', per: 0.006 },
  ers: { name: 'Hybrid system', blurb: '+5 % battery capacity per level', per: 0.05 },
  tyres: { name: 'Tyre management', blurb: '-4 % tyre wear per level', per: 0.04 },
  pit: { name: 'Pit crew', blurb: '-0.2 s on every pit stop per level', per: 0.2 },
};
export const DISTANCES = [
  { id: 'sprint', name: 'Sprint', km: 14 },
  { id: 'standard', name: 'Standard', km: 28 },
  { id: 'grandprix', name: 'Grand Prix', km: 50 },
];

/** Calendar of circuit ids: the first `rounds` circuits (the classic four, then the rest in order); a longer season than there are circuits goes round again. */
export function makeCalendar(rounds = 4) {
  const ids = TRACK_DEFS.map((d) => d.id);
  const n = Math.max(1, Math.min(MAX_ROUNDS, Math.round(Number.isFinite(+rounds) ? +rounds : 4)));
  return Array.from({ length: n }, (_, i) => ids[i % ids.length]);
}
export const MAX_ROUNDS = 24;

/** The rules of a career, editable at any time from the career hub. */
export const DEFAULT_RULES = {
  laps: 0, // 0 = by the distance preset, otherwise a fixed number of laps for every race
  fieldSize: 20,
  playerGrid: 12, // starting position when you skip qualifying
  weather: 'forecast', // 'forecast' = each round's own forecast; or force one condition for the whole season
  tyreWear: 3,
  damage: true,
  collisions: true,
  mandatoryStop: false,
  adaptive: false, // adaptive AI pace
  pitCalls: 'radio',
  prize: 1, // multiplier on prize money and the season bonus
  creep: true, // the AI gets a little faster every season
};
export const RULE_WEATHERS = ['forecast', ...['dry', 'light', 'heavy', 'changing']];

export function sanitizeRules(raw) {
  const r = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
  const D = DEFAULT_RULES;
  const num = (v, lo, hi, d) => ((typeof v === 'number' || (typeof v === 'string' && v.trim() !== '')) && Number.isFinite(+v) ? Math.max(lo, Math.min(hi, Math.round(+v))) : d);
  const bool = (v, d) => (typeof v === 'boolean' ? v : d);
  const fieldSize = num(r.fieldSize, 2, 20, D.fieldSize);
  const prizes = [0.5, 1, 2, 5];
  return {
    laps: num(r.laps, 0, 30, D.laps),
    fieldSize,
    playerGrid: num(r.playerGrid, 1, fieldSize, Math.min(D.playerGrid, fieldSize)),
    weather: RULE_WEATHERS.includes(r.weather) ? r.weather : D.weather,
    tyreWear: [0, 1.5, 3, 6].includes(+r.tyreWear) && r.tyreWear !== null && r.tyreWear !== '' ? +r.tyreWear : D.tyreWear,
    damage: bool(r.damage, D.damage),
    collisions: bool(r.collisions, D.collisions),
    mandatoryStop: bool(r.mandatoryStop, D.mandatoryStop),
    adaptive: bool(r.adaptive, D.adaptive),
    pitCalls: ['off', 'radio', 'auto'].includes(r.pitCalls) ? r.pitCalls : D.pitCalls,
    prize: prizes.includes(+r.prize) ? +r.prize : D.prize,
    creep: bool(r.creep, D.creep),
  };
}

/** Laps of one career race on a circuit: the fixed number from the rules, or the distance preset. */
export function careerLaps(career, lengthM) {
  const fixed = career.rules && career.rules.laps;
  return fixed > 0 ? fixed : lapsFor(lengthM, career.distance);
}
/** The classic four-round championship. */
export const CHAMP_CAL = makeCalendar(4);

export function lapsFor(lengthM, distanceId = 'standard') {
  const d = DISTANCES.find((x) => x.id === distanceId) || DISTANCES[1];
  return Math.max(2, Math.min(30, Math.round((d.km * 1000) / lengthM)));
}

export const WEATHER_IDS = ['dry', 'light', 'heavy', 'changing'];
export const WEATHER_NAMES = { dry: 'Dry', light: 'Light rain', heavy: 'Heavy rain', changing: 'Showers possible' };

/** One forecast per round, decided when the season is created so the calendar is stable between sessions. */
export function rollWeather(n, rand = Math.random) {
  const bag = ['dry', 'dry', 'dry', 'dry', 'dry', 'changing', 'changing', 'light', 'heavy'];
  return Array.from({ length: n }, (_, i) => (i === 0 ? 'dry' : bag[Math.floor(rand() * bag.length)]));
}

export function newSeason(rounds = 4) {
  const calendar = makeCalendar(rounds);
  return { calendar, round: 0, points: {}, teamPoints: {}, teamOf: {}, results: [], weather: rollWeather(calendar.length) };
}

export const weatherFor = (season, round = season.round) => (season.weather && WEATHER_IDS.includes(season.weather[round]) ? season.weather[round] : 'dry');

export const seasonDone = (s) => s.round >= s.calendar.length;

/** Adds one classified race (race.classification()) to the season and moves on to the next round. */
export function recordRound(season, cls) {
  const row = { round: season.round, trackId: season.calendar[season.round], order: [] };
  for (const e of cls) {
    const name = e.info.name;
    const team = e.info.team.short;
    season.points[name] = (season.points[name] || 0) + e.points;
    season.teamPoints[team] = (season.teamPoints[team] || 0) + e.points;
    season.teamOf[name] = team;
    row.order.push({ name, team, pos: e.pos, pts: e.points, grid: e.gridPos });
  }
  season.results.push(row);
  season.round++;
  return row;
}

export function driverStandings(season) {
  const names = new Set([...Object.keys(season.points), ...Object.keys(season.teamOf)]);
  return [...names]
    .map((name) => ({ name, team: season.teamOf[name] || '', pts: season.points[name] || 0 }))
    .sort((a, b) => b.pts - a.pts || (a.name === 'You' ? -1 : 0) - (b.name === 'You' ? -1 : 0));
}

export function constructorStandings(season) {
  return Object.entries(season.teamPoints)
    .map(([team, pts]) => ({ team, pts }))
    .sort((a, b) => b.pts - a.pts);
}

/** Team strength rank, 0 = best car. */
export const teamRank = (teamIdx) => [...TEAMS].sort((a, b) => b.rating - a.rating).findIndex((t) => t === TEAMS[teamIdx]);

export function objectiveFor(teamIdx) {
  const r = teamRank(teamIdx);
  return { finish: Math.min(16, r === 0 ? 2 : 2 * r + 2), constructor: Math.min(10, r + 1) };
}

export function prizeFor(pos, objectiveMet, fastestLap = false) {
  const table = [20, 15, 12, 10, 8, 7, 6, 5, 4, 3];
  return (table[pos - 1] ?? 2) + (objectiveMet ? 8 : 0) + (fastestLap ? 3 : 0);
}

export const upgradeCost = (level) => 12 + 10 * level;

export function upgradeEffects(u = {}) {
  const lv = (k) => Math.max(0, Math.min(UPGRADE_MAX, Math.round(u[k] || 0)));
  return {
    power: 1 + UPGRADE_INFO.power.per * lv('power'),
    aero: 1 + UPGRADE_INFO.aero.per * lv('aero'),
    grip: 1 + UPGRADE_INFO.grip.per * lv('grip'),
    ers: 1 + UPGRADE_INFO.ers.per * lv('ers'), // battery capacity
    tyres: 1 - UPGRADE_INFO.tyres.per * lv('tyres'), // tyre wear rate
    pit: UPGRADE_INFO.pit.per * lv('pit'), // seconds off a stop
  };
}

// ---- the driver: reputation, contract, sponsors, team-mate -------------------------------------------------------------------

/** The driver in the other car of a team: the player always takes the team's first seat. */
export const teamMate = (teamIdx) => DRIVERS[teamIdx * 2 + 1] || DRIVERS[1];

/** What the paddock calls a driver with this reputation (0..100). */
export const REP_LEVELS = [[85, 'Legend'], [70, 'Title contender'], [55, 'Podium contender'], [40, 'Midfield regular'], [25, 'Prospect'], [0, 'Rookie']];
export const repLabel = (rep) => REP_LEVELS.find(([m]) => rep >= m)[1];
/** The reputation a team wants before it offers a seat (rank 0 = the best car; the last team takes anybody). */
export const repNeeded = (rank) => (rank >= TEAMS.length - 1 ? 0 : Math.max(0, 85 - 8 * rank));
/** A new signing has just enough of a name to have been hired. */
export const startingRep = (teamIdx) => Math.min(95, repNeeded(teamRank(teamIdx)) + 6);
/** Paid by the team after every race, whatever the result: bigger teams pay more. */
export const retainerFor = (teamIdx) => 2 + Math.round((TEAMS.length - 1 - teamRank(teamIdx)) * 0.7);

/**
 * Sponsor challenges: one may be accepted before each race. `ok` gets the race as the driver saw it:
 * { pos, grid, finished, penalty, fastest, matePos, objective, cars }.
 */
export const SPONSOR_GOALS = {
  clean: { name: 'Clean sheet', text: 'Finish the race without a penalty', pay: 3, ok: (r) => r.finished && !(r.penalty > 0) },
  mate: { name: 'Team leader', text: 'Finish ahead of your team-mate', pay: 4, ok: (r) => r.matePos != null && r.pos < r.matePos },
  points: { name: 'In the points', text: 'Finish in the top ten', pay: 4, top: 10, ok: (r) => r.pos <= 10 },
  gain3: { name: 'Charge through the field', text: 'Finish at least three places higher than you start', pay: 6, ok: (r) => r.grid - r.pos >= 3 },
  target2: { name: 'Overdeliver', text: "Beat the team's target by two places or more", pay: 7, ok: (r) => r.pos <= r.objective - 2 },
  top5: { name: 'Front runner', text: 'Finish in the top five', pay: 7, top: 5, ok: (r) => r.pos <= 5 },
  fastest: { name: 'Purple lap', text: 'Set the fastest lap of the race', pay: 8, ok: (r) => !!r.fastest },
  podium: { name: 'Champagne', text: 'Finish on the podium', pay: 11, top: 3, ok: (r) => r.pos <= 3 },
  win: { name: 'Top step', text: 'Win the race', pay: 16, top: 1, ok: (r) => r.pos === 1 },
};

/** The three challenges on the table for the coming race: the same three every time the hub is opened. */
export function sponsorOffers(career) {
  const obj = objectiveFor(career.team).finish;
  const cars = (career.rules && career.rules.fieldSize) || 20;
  const ids = Object.keys(SPONSOR_GOALS).filter((id) => {
    const g = SPONSOR_GOALS[id];
    if (g.top && (g.top >= obj || g.top > cars - 2)) return false; // already expected of this car, or everybody gets it
    if (id === 'target2' && obj <= 2) return false;
    if (id === 'gain3' && Math.min(career.rules ? career.rules.playerGrid : 12, cars) <= 3) return false;
    if (id === 'mate' && cars < 4) return false;
    return true;
  });
  const rnd = mulberry32(Math.imul(career.seasonNo * 1009 + career.season.round * 97 + career.team * 13 + 5, 2654435761) ^ 0x51ed270b);
  for (let i = 0; i < 4; i++) rnd();
  for (let i = ids.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; }
  return ids.slice(0, 3).sort((a, b) => SPONSOR_GOALS[a].pay - SPONSOR_GOALS[b].pay);
}

/** Accepts one of the offered challenges for the coming race (or none). */
export function chooseSponsor(career, id) {
  career.sponsor = id && sponsorOffers(career).includes(id) ? id : null;
  return career.sponsor;
}

/** How much one race moves a driver's reputation: against the team's target, the team-mate and the stewards. */
export function repDelta(r) {
  let d = Math.max(-4, Math.min(5, (r.objective - r.pos) * 0.7));
  if (r.matePos != null) d += r.pos < r.matePos ? 1 : -1;
  d += r.pos === 1 ? 3 : r.pos <= 3 ? 1.5 : 0;
  if (r.fastest) d += 0.5;
  if (r.penalty > 0) d -= 1;
  if (!r.finished) d -= 1.5;
  return d;
}
/** A short season must be able to make or break a name as much as a long one. */
const repScale = (career) => Math.max(0.3, Math.min(1.5, 6 / Math.max(1, career.rounds)));
const clampRep = (v) => Math.max(0, Math.min(100, Math.round(v * 10) / 10));

export const newStats = () => ({ races: 0, wins: 0, podiums: 0, poles: 0, fastest: 0, points: 0, dnfs: 0, best: 0, titles: 0 });
export const newH2H = () => ({ race: [0, 0], quali: [0, 0] });

/** Car strength of a team this season (0..1+): its base rating plus how its development has gone. */
export function teamStrength(career, teamIdx) {
  const f = career && Array.isArray(career.teamForm) ? +career.teamForm[teamIdx] || 0 : 0;
  return Math.max(0.05, Math.min(1.08, TEAMS[teamIdx].rating + f));
}

/** Every team's winter: some find pace, some lose it, and last year's form half carries over. Deterministic per career season. */
export function developTeams(career) {
  const rnd = mulberry32(Math.imul(career.seasonNo + 11, 2654435761) ^ 0x9e3779b9);
  for (let i = 0; i < 8; i++) rnd();
  const old = Array.isArray(career.teamForm) ? career.teamForm : [];
  const step = TEAMS.map(() => (rnd() - 0.5) * 0.16);
  const mean = step.reduce((a, b) => a + b, 0) / step.length; // the field as a whole neither gains nor loses
  career.teamForm = TEAMS.map((t, i) => Math.round(Math.max(-0.18, Math.min(0.18, (+old[i] || 0) * 0.5 + step[i] - mean)) * 1000) / 1000);
  return career.teamForm;
}

function headline(r, trackName, teamName, mateName) {
  const mate = r.matePos != null && mateName ? ` ${mateName} finished P${r.matePos}.` : '';
  if (!r.finished) return `No finish at ${trackName}.${mate}`;
  if (r.pos === 1) return `Victory at ${trackName} for ${teamName}!${mate}`;
  if (r.pos <= 3) return `Podium at ${trackName}: P${r.pos} for ${teamName}.${mate}`;
  if (r.pos <= r.objective - 2) return `P${r.pos} at ${trackName}, well beyond the P${r.objective} the car was expected to manage.${mate}`;
  if (r.pos <= r.objective) return `Job done at ${trackName}: P${r.pos}, target P${r.objective}.${mate}`;
  if (r.pos >= r.objective + 4) return `A weekend to forget at ${trackName}: P${r.pos}, target P${r.objective}.${mate}`;
  return `P${r.pos} at ${trackName}, short of the P${r.objective} target.${mate}`;
}

export function newCareer({ team = 6, level = 0.55, rounds = 4, distance = 'standard', rules = {} } = {}) {
  const t = Math.max(0, Math.min(TEAMS.length - 1, Math.round(team)));
  return {
    v: 1,
    team: t,
    level,
    rounds: Math.max(1, Math.min(MAX_ROUNDS, Math.round(Number.isFinite(+rounds) ? +rounds : 4))),
    distance,
    rules: sanitizeRules(rules),
    seasonNo: 1,
    budget: 20,
    upgrades: Object.fromEntries(UPGRADE_KEYS.map((k) => [k, 0])),
    season: newSeason(rounds),
    history: [],
    seasonRecap: null,
    rep: startingRep(t),
    sponsor: null,
    h2h: newH2H(),
    stats: newStats(),
    teamForm: TEAMS.map(() => 0),
    news: [],
  };
}

export function buyUpgrade(career, key) {
  if (!UPGRADE_KEYS.includes(key)) return { ok: false, reason: 'unknown' };
  const lvl = career.upgrades[key] || 0;
  if (lvl >= UPGRADE_MAX) return { ok: false, reason: 'maxed' };
  const cost = upgradeCost(lvl);
  if (career.budget < cost) return { ok: false, reason: 'budget', cost };
  career.budget -= cost;
  career.upgrades[key] = lvl + 1;
  return { ok: true, cost };
}

/**
 * Called after a career race has been recorded into the season: prize money and retainer, the team's objective, the
 * sponsor's challenge, the head-to-head with the team-mate, reputation, career statistics and a headline.
 * `row` comes from recordRound; `cls` is the classification. opts.qualified: the grid was set by a qualifying session.
 */
export function settleRace(career, row, cls, opts = {}) {
  const me = row.order.find((o) => o.name === 'You');
  const mine = cls.find((e) => e.info.isPlayer);
  const mateE = cls.find((e) => !e.info.isPlayer && e.info.teamIdx === career.team);
  const obj = objectiveFor(career.team);
  const pos = me ? me.pos : cls.length;
  const met = !!me && me.pos <= obj.finish;
  const fl = cls.find((e) => e.info.isPlayer && Number.isFinite(e.best) && e.best === Math.min(...cls.map((c) => c.best)));
  const mult = (career.rules && career.rules.prize) || 1;
  const r = {
    pos, grid: mine ? mine.gridPos || pos : pos, finished: !!(mine && mine.time != null), penalty: mine ? mine.penalty || 0 : 0, fastest: !!fl,
    matePos: mateE ? mateE.pos : null, objective: obj.finish, cars: cls.length,
  };
  const prize = Math.round(prizeFor(me ? me.pos : 20, met, !!fl) * mult);
  const retainer = Math.round(retainerFor(career.team) * mult);
  let sponsor = null;
  if (career.sponsor && SPONSOR_GOALS[career.sponsor]) {
    const g = SPONSOR_GOALS[career.sponsor], ok = !!g.ok(r);
    sponsor = { id: career.sponsor, name: g.name, text: g.text, met: ok, pay: ok ? Math.round(g.pay * mult) : 0 };
  }
  career.sponsor = null;
  career.budget += prize + retainer + (sponsor ? sponsor.pay : 0);
  // head to head with the other car of the team
  const h = career.h2h || (career.h2h = newH2H());
  if (mateE) {
    h.race[pos < mateE.pos ? 0 : 1]++;
    if (opts.qualified && mine && mine.gridPos && mateE.gridPos) h.quali[mine.gridPos < mateE.gridPos ? 0 : 1]++;
  }
  // reputation
  const before = career.rep ?? startingRep(career.team);
  career.rep = clampRep(before + repDelta(r) * repScale(career));
  // statistics
  const st = career.stats || (career.stats = newStats());
  st.races++;
  if (pos === 1) st.wins++;
  if (pos <= 3) st.podiums++;
  if (opts.qualified && r.grid === 1) st.poles++;
  if (fl) st.fastest++;
  if (!r.finished) st.dnfs++;
  st.points += me ? me.pts || 0 : 0;
  if (r.finished && (!st.best || pos < st.best)) st.best = pos;
  const def = TRACK_DEFS.find((d) => d.id === row.trackId);
  const news = headline(r, def ? def.name : 'the circuit', TEAMS[career.team].short, mateE ? mateE.info.name : '');
  career.news = [news, ...(career.news || [])].slice(0, 6);
  return {
    pos: me ? me.pos : null, met, prize, objective: obj.finish, fastest: !!fl, retainer, sponsor,
    rep: career.rep, repDelta: Math.round((career.rep - before) * 10) / 10, repLabel: repLabel(career.rep),
    mate: mateE ? { name: mateE.info.name, pos: mateE.pos, ahead: pos < mateE.pos } : null, news,
  };
}

/** End of season: final standings, objective, history entry and contract offers for next year. */
export function endSeason(career) {
  const s = career.season;
  const drivers = driverStandings(s);
  const cons = constructorStandings(s);
  const dPos = drivers.findIndex((d) => d.name === 'You') + 1;
  const cPos = cons.findIndex((c) => c.team === TEAMS[career.team].short) + 1;
  const obj = objectiveFor(career.team);
  const recap = {
    seasonNo: career.seasonNo,
    team: career.team,
    driverPos: dPos,
    teamPos: cPos,
    points: s.points.You || 0,
    champion: dPos === 1,
    constructorObjective: obj.constructor,
    metConstructor: cPos > 0 && cPos <= obj.constructor,
    wins: s.results.filter((r) => r.order.some((o) => o.name === 'You' && o.pos === 1)).length,
    podiums: s.results.filter((r) => r.order.some((o) => o.name === 'You' && o.pos <= 3)).length,
    offers: [],
  };
  // the season's verdict on the driver
  const repBefore = career.rep ?? startingRep(career.team);
  career.rep = clampRep(repBefore + (recap.champion ? 10 : dPos > 0 && dPos <= 3 ? 5 : 0) + (recap.metConstructor ? 3 : -2));
  recap.rep = career.rep;
  if (recap.champion) (career.stats || (career.stats = newStats())).titles++;
  const cur = teamRank(career.team);
  const sorted = TEAMS.map((t, i) => ({ i, r: teamRank(i) })).sort((a, b) => a.r - b.r);
  // a better seat is earned by reputation, or by a season that speaks for itself
  for (const { i, r } of sorted) {
    if (i === career.team) continue;
    if (r < cur && (career.rep >= repNeeded(r) || dPos <= 2 * r + 3)) recap.offers.push(i);
  }
  recap.offers = recap.offers.slice(0, 3); // the best three cars on offer
  // and a seat can be lost: a driver far below what the team expects is not kept on
  recap.dropped = cur < TEAMS.length - 1 && career.rep < repNeeded(cur) - 18 && !recap.metConstructor;
  if (recap.dropped) recap.offers = sorted.filter(({ i, r }) => i !== career.team && r > cur && career.rep >= repNeeded(r)).slice(0, 3).map((o) => o.i);
  career.history.push({ ...recap, offers: undefined, dropped: undefined });
  career.seasonRecap = recap;
  bonusOnEnd(career, recap);
  return recap;
}

function bonusOnEnd(career, recap) {
  career.budget += Math.round(((recap.champion ? 40 : recap.driverPos <= 3 ? 20 : 8) + (recap.metConstructor ? 15 : 0)) * ((career.rules && career.rules.prize) || 1));
}

/** Starts the next season, optionally with a different team (new car: upgrades start again). */
export function nextSeason(career, teamIdx = career.team) {
  if (teamIdx !== career.team) {
    career.team = teamIdx;
    career.upgrades = Object.fromEntries(UPGRADE_KEYS.map((k) => [k, 0]));
  }
  career.seasonNo++;
  career.h2h = newH2H();
  career.sponsor = null;
  developTeams(career);
  if (!career.rules || career.rules.creep !== false) career.level = Math.min(Math.max(1, career.level), career.level + 0.04);
  career.season = newSeason(career.rounds);
  career.seasonRecap = null;
  return career;
}

const cleanInt = (v, lo = 0, hi = 9999) => Math.max(lo, Math.min(hi, Math.round(Number.isFinite(+v) ? +v : 0)));
const cleanStr = (v, n = 40) => String(v ?? '').replace(/[<>&"'`]/g, '').slice(0, n);

/** { name: points } with plain-string keys and whole-number values. */
export function cleanNumMap(m) {
  const out = {};
  if (m && typeof m === 'object' && !Array.isArray(m)) for (const [k, v] of Object.entries(m).slice(0, 80)) if (Number.isFinite(+v)) out[cleanStr(k, 40)] = cleanInt(v, 0, 9999);
  return out;
}
export function cleanStrMap(m) {
  const out = {};
  if (m && typeof m === 'object' && !Array.isArray(m)) for (const [k, v] of Object.entries(m).slice(0, 80)) out[cleanStr(k, 40)] = cleanStr(v, 40);
  return out;
}

/** Round results saved in a season: only known fields, numbers as numbers, short plain strings. */
export function cleanResults(arr) {
  if (!Array.isArray(arr)) return [];
  const ids = TRACK_DEFS.map((d) => d.id);
  return arr.slice(0, 40).filter((r) => r && typeof r === 'object').map((r) => ({
    round: cleanInt(r.round, 0, 99),
    trackId: ids.includes(r.trackId) ? r.trackId : ids[0],
    order: (Array.isArray(r.order) ? r.order : []).slice(0, 24).filter((o) => o && typeof o === 'object').map((o) => ({ name: cleanStr(o.name, 28), team: cleanStr(o.team, 12), pos: cleanInt(o.pos, 1, 99), pts: cleanInt(o.pts, 0, 99), grid: cleanInt(o.grid, 0, 99) })),
  }));
}

/** One finished season in the career history. */
export function cleanHistoryEntry(h) {
  if (!h || typeof h !== 'object') return null;
  return { seasonNo: cleanInt(h.seasonNo, 1, 99), team: cleanInt(h.team, 0, TEAMS.length - 1), driverPos: cleanInt(h.driverPos, 0, 99), teamPos: cleanInt(h.teamPos, 0, 99), points: cleanInt(h.points, 0, 9999), champion: !!h.champion, constructorObjective: cleanInt(h.constructorObjective, 0, 99), metConstructor: !!h.metConstructor, wins: cleanInt(h.wins, 0, 99), podiums: cleanInt(h.podiums, 0, 99) };
}

/** The end-of-season recap (with contract offers). */
export function cleanRecap(r) {
  const base = cleanHistoryEntry(r);
  if (!base) return null;
  return { ...base, offers: (Array.isArray(r.offers) ? r.offers : []).map((i) => cleanInt(i, 0, TEAMS.length - 1)).slice(0, 3), dropped: !!r.dropped, rep: Number.isFinite(+r.rep) ? Math.max(0, Math.min(100, +r.rep)) : undefined };
}

const pair = (a) => [cleanInt(Array.isArray(a) ? a[0] : 0, 0, 999), cleanInt(Array.isArray(a) ? a[1] : 0, 0, 999)];

/** Defensive copy for anything read from storage: returns null if it is not a usable career. */
export function sanitizeCareer(raw) {
  try {
    if (!raw || typeof raw !== 'object' || raw.v !== 1) return null;
    const n = (v, lo, hi, d) => (Number.isFinite(+v) ? Math.max(lo, Math.min(hi, +v)) : d);
    // a save from before the rules existed: '8' meant every circuit
    const rounds = !raw.rules && raw.rounds >= 8 ? TRACK_DEFS.length : Math.round(n(raw.rounds, 1, MAX_ROUNDS, 4));
    const season = raw.season && Array.isArray(raw.season.calendar) ? raw.season : newSeason(rounds);
    const ids = TRACK_DEFS.map((d) => d.id);
    season.calendar = season.calendar.filter((id) => ids.includes(id));
    if (!season.calendar.length) return null;
    season.round = Math.round(n(season.round, 0, season.calendar.length, 0));
    season.points = cleanNumMap(season.points);
    season.teamPoints = cleanNumMap(season.teamPoints);
    season.teamOf = cleanStrMap(season.teamOf);
    season.results = cleanResults(season.results);
    if (!Array.isArray(season.weather) || season.weather.length < season.calendar.length) season.weather = rollWeather(season.calendar.length);
    season.weather = season.weather.map((w) => (WEATHER_IDS.includes(w) ? w : 'dry'));
    const up = raw.upgrades || {};
    return {
      v: 1,
      team: Math.round(n(raw.team, 0, TEAMS.length - 1, 6)),
      level: n(raw.level, 0, 1.3, 0.55),
      rounds,
      rules: sanitizeRules(raw.rules),
      distance: DISTANCES.some((d) => d.id === raw.distance) ? raw.distance : 'standard',
      seasonNo: Math.round(n(raw.seasonNo, 1, 99, 1)),
      budget: Math.round(n(raw.budget, 0, 9999, 0)),
      upgrades: Object.fromEntries(UPGRADE_KEYS.map((k) => [k, Math.round(n(up[k], 0, UPGRADE_MAX, 0))])),
      season,
      history: (Array.isArray(raw.history) ? raw.history.slice(-40) : []).map(cleanHistoryEntry).filter(Boolean),
      seasonRecap: cleanRecap(raw.seasonRecap),
      // a career saved before reputation existed starts with the name its team implies
      rep: Math.round(n(raw.rep, 0, 100, startingRep(Math.round(n(raw.team, 0, TEAMS.length - 1, 6)))) * 10) / 10,
      sponsor: typeof raw.sponsor === 'string' && SPONSOR_GOALS[raw.sponsor] ? raw.sponsor : null,
      h2h: { race: pair(raw.h2h && raw.h2h.race), quali: pair(raw.h2h && raw.h2h.quali) },
      stats: Object.fromEntries(Object.keys(newStats()).map((k) => [k, cleanInt(raw.stats && raw.stats[k], 0, 99999)])),
      teamForm: TEAMS.map((t, i) => Math.round(n(Array.isArray(raw.teamForm) ? raw.teamForm[i] : 0, -0.18, 0.18, 0) * 1000) / 1000),
      news: (Array.isArray(raw.news) ? raw.news : []).slice(0, 6).map((x) => cleanStr(x, 160)),
    };
  } catch (e) {
    return null;
  }
}
