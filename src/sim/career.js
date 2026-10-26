// Season + career bookkeeping. Pure data, no DOM or rendering, so it is easy to test and to persist (JSON).
import { TRACK_DEFS } from './trackdefs.js';
import { TEAMS } from './teams.js';

export const POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
export const UPGRADE_KEYS = ['power', 'aero', 'grip'];
export const UPGRADE_MAX = 6;
export const UPGRADE_INFO = {
  power: { name: 'Power unit', blurb: '+1.2 % engine output per level', per: 0.012 },
  aero: { name: 'Aerodynamics', blurb: '+1.4 % downforce per level', per: 0.014 },
  grip: { name: 'Chassis & tyres', blurb: '+0.6 % mechanical grip per level', per: 0.006 },
};
export const DISTANCES = [
  { id: 'sprint', name: 'Sprint', km: 14 },
  { id: 'standard', name: 'Standard', km: 28 },
  { id: 'grandprix', name: 'Grand Prix', km: 50 },
];

/** Calendar of circuit ids: the four original circuits, or every circuit when 8+ rounds are requested. */
export function makeCalendar(rounds = 4) {
  const ids = TRACK_DEFS.map((d) => d.id);
  return rounds >= 8 ? ids.slice() : ids.slice(0, 4);
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
  };
}

export function newCareer({ team = 6, level = 0.55, rounds = 4, distance = 'standard' } = {}) {
  const t = Math.max(0, Math.min(TEAMS.length - 1, Math.round(team)));
  return {
    v: 1,
    team: t,
    level,
    rounds,
    distance,
    seasonNo: 1,
    budget: 20,
    upgrades: { power: 0, aero: 0, grip: 0 },
    season: newSeason(rounds),
    history: [],
    seasonRecap: null,
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
 * Called after a career race has been recorded into the season: prize money, objective check, summary.
 * `row` comes from recordRound; `cls` is the classification (to find the fastest lap).
 */
export function settleRace(career, row, cls) {
  const me = row.order.find((o) => o.name === 'You');
  const obj = objectiveFor(career.team);
  const met = !!me && me.pos <= obj.finish;
  const fl = cls.find((e) => e.info.isPlayer && Number.isFinite(e.best) && e.best === Math.min(...cls.map((c) => c.best)));
  const prize = prizeFor(me ? me.pos : 20, met, !!fl);
  career.budget += prize;
  return { pos: me ? me.pos : null, met, prize, objective: obj.finish, fastest: !!fl };
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
  const cur = teamRank(career.team);
  const sorted = TEAMS.map((t, i) => ({ i, r: teamRank(i) })).sort((a, b) => a.r - b.r);
  for (const { i, r } of sorted) {
    if (i === career.team) continue;
    if (r < cur && dPos <= 2 * r + 3) recap.offers.push(i);
  }
  recap.offers = recap.offers.slice(0, 3); // the best three cars the finishing position has earned
  career.history.push({ ...recap, offers: undefined });
  career.seasonRecap = recap;
  bonusOnEnd(career, recap);
  return recap;
}

function bonusOnEnd(career, recap) {
  career.budget += (recap.champion ? 40 : recap.driverPos <= 3 ? 20 : 8) + (recap.metConstructor ? 15 : 0);
}

/** Starts the next season, optionally with a different team (new car: upgrades start again). */
export function nextSeason(career, teamIdx = career.team) {
  if (teamIdx !== career.team) {
    career.team = teamIdx;
    career.upgrades = { power: 0, aero: 0, grip: 0 };
  }
  career.seasonNo++;
  career.level = Math.min(1, career.level + 0.04);
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
  return { ...base, offers: (Array.isArray(r.offers) ? r.offers : []).map((i) => cleanInt(i, 0, TEAMS.length - 1)).slice(0, 3) };
}

/** Defensive copy for anything read from storage: returns null if it is not a usable career. */
export function sanitizeCareer(raw) {
  try {
    if (!raw || typeof raw !== 'object' || raw.v !== 1) return null;
    const n = (v, lo, hi, d) => (Number.isFinite(+v) ? Math.max(lo, Math.min(hi, +v)) : d);
    const rounds = raw.rounds >= 8 ? 8 : 4;
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
      level: n(raw.level, 0, 1, 0.55),
      rounds,
      distance: DISTANCES.some((d) => d.id === raw.distance) ? raw.distance : 'standard',
      seasonNo: Math.round(n(raw.seasonNo, 1, 99, 1)),
      budget: Math.round(n(raw.budget, 0, 9999, 0)),
      upgrades: { power: Math.round(n(up.power, 0, UPGRADE_MAX, 0)), aero: Math.round(n(up.aero, 0, UPGRADE_MAX, 0)), grip: Math.round(n(up.grip, 0, UPGRADE_MAX, 0)) },
      season,
      history: (Array.isArray(raw.history) ? raw.history.slice(-40) : []).map(cleanHistoryEntry).filter(Boolean),
      seasonRecap: cleanRecap(raw.seasonRecap),
    };
  } catch (e) {
    return null;
  }
}
