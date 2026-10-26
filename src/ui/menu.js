import { TRACK_DEFS } from '../sim/trackdefs.js';
import { TEAMS } from '../sim/teams.js';
import { DIFFICULTIES } from '../sim/race.js';
import { COMPOUNDS, COMPOUND_IDS } from '../sim/carspec.js';
import { formatTime } from '../util/math.js';
import { drawLineChart } from './charts.js';
import { ACHIEVEMENTS, DEFAULT_STATS } from '../sim/achievements.js';
import { LESSONS, sanitizeSchool } from '../sim/school.js';
import { KEY_ACTIONS, keyLabel, mergeKeys, sanitizeKeys } from './input.js';
import { CHAMP_CAL, sanitizeCareer, UPGRADE_KEYS, UPGRADE_INFO, UPGRADE_MAX, upgradeCost, objectiveFor, DISTANCES, seasonDone, driverStandings, constructorStandings, lapsFor, teamRank, weatherFor, WEATHER_NAMES } from '../sim/career.js';

export const SAVE_KEY = 'apex-grand-prix.v1';

export const DEFAULT_SETTINGS = { quality: 'high', volume: 0.55, units: 'kmh', line: true, minimap: true, shake: true, camera: 'chase', tower: true, blur: true, steerSpeed: 1, padDead: 0.07, rumble: true, autoQuality: true, cbSafe: false, calm: false, bigHud: false, bloom: true, keys: {} };
export const DEFAULT_CONFIG = {
  mode: 'race',
  trackId: 'northfield',
  laps: 5,
  level: 0.55,
  fieldSize: 20,
  playerGrid: 12,
  team: 1,
  compound: 'medium',
  tyreWear: 3,
  damage: true,
  collisions: true,
  mandatoryStop: false,
  pitCalls: 'radio',
  adaptive: false,
  qualify: false,
  equalCars: true,
  weather: 'dry',
  timeOfDay: 'progress',
  frontWing: null,
  rearWing: null,
  brakeBias: 0.58,
  pressure: 0,
  assists: { abs: true, tc: 2, steer: true, stability: 1, autoGear: true, pitAuto: true, pitGame: true },
};
const ASSIST_PRESETS = {
  Beginner: { abs: true, tc: 3, steer: true, stability: 3, autoGear: true, pitAuto: true, pitGame: false },
  Intermediate: { abs: true, tc: 2, steer: true, stability: 1, autoGear: true, pitAuto: true, pitGame: true },
  Pro: { abs: true, tc: 1, steer: false, stability: 0, autoGear: true, pitAuto: true, pitGame: true },
  Simulator: { abs: false, tc: 0, steer: false, stability: 0, autoGear: false, pitAuto: false, pitGame: true },
};
const TC_NAMES = ['Off', 'Low', 'Medium', 'High'];

const isObj = (o) => o && typeof o === 'object' && !Array.isArray(o);
const num = (v, lo, hi, d) => (Number.isFinite(+v) && v !== null && v !== '' ? Math.min(hi, Math.max(lo, +v)) : d);
const oneOf = (v, list, d) => (list.includes(v) ? v : d);
const bool = (v, d) => (typeof v === 'boolean' ? v : d);

/** Makes any stored/foreign config safe to run: right types, in range, existing ids. */
export function sanitizeConfig(raw) {
  const r = isObj(raw) ? raw : {};
  const D = DEFAULT_CONFIG;
  const ra = isObj(r.assists) ? r.assists : {};
  const fieldSize = Math.round(num(r.fieldSize, 2, 20, D.fieldSize));
  const wing = (v) => (v === null || v === undefined ? null : Math.round(num(v, 0, 10, 5)));
  return {
    mode: oneOf(r.mode, ['race', 'timetrial', 'qualifying'], D.mode),
    trackId: oneOf(r.trackId, TRACK_DEFS.map((t) => t.id), D.trackId),
    laps: Math.round(num(r.laps, 1, 30, D.laps)),
    level: num(r.level, 0, 1, D.level),
    fieldSize,
    playerGrid: Math.round(num(r.playerGrid, 1, fieldSize, Math.min(D.playerGrid, fieldSize))),
    team: Math.round(num(r.team, 0, TEAMS.length - 1, D.team)),
    compound: oneOf(r.compound, COMPOUND_IDS, D.compound),
    tyreWear: oneOf(+r.tyreWear, [0, 1.5, 3, 6], D.tyreWear),
    damage: bool(r.damage, D.damage),
    collisions: bool(r.collisions, D.collisions),
    mandatoryStop: bool(r.mandatoryStop, D.mandatoryStop),
    pitCalls: ['off', 'radio', 'auto'].includes(r.pitCalls) ? r.pitCalls : D.pitCalls,
    adaptive: bool(r.adaptive, D.adaptive),
    qualify: bool(r.qualify, D.qualify),
    equalCars: bool(r.equalCars, D.equalCars),
    weather: oneOf(r.weather, ['dry', 'light', 'heavy', 'changing'], D.weather),
    timeOfDay: oneOf(r.timeOfDay, ['progress', 'day', 'night'], D.timeOfDay),
    frontWing: wing(r.frontWing),
    rearWing: wing(r.rearWing),
    brakeBias: num(r.brakeBias, 0.5, 0.7, D.brakeBias),
    pressure: Math.round(num(r.pressure, -3, 3, D.pressure)),
    assists: {
      abs: bool(ra.abs, D.assists.abs),
      tc: Math.round(num(ra.tc, 0, 3, D.assists.tc)),
      steer: bool(ra.steer, D.assists.steer),
      stability: Math.round(num(ra.stability, 0, 3, D.assists.stability)),
      autoGear: bool(ra.autoGear, D.assists.autoGear),
      pitAuto: bool(ra.pitAuto, D.assists.pitAuto),
      pitGame: bool(ra.pitGame, D.assists.pitGame),
    },
  };
}

export function sanitizeSettings(raw) {
  const r = isObj(raw) ? raw : {};
  const D = DEFAULT_SETTINGS;
  return {
    quality: oneOf(r.quality, ['low', 'medium', 'high'], D.quality),
    volume: num(r.volume, 0, 1, D.volume),
    units: oneOf(r.units, ['kmh', 'mph'], D.units),
    line: bool(r.line, D.line),
    minimap: bool(r.minimap, D.minimap),
    shake: bool(r.shake, D.shake),
    camera: oneOf(r.camera, ['chase', 'close', 'cockpit', 'tcam', 'heli', 'tv'], D.camera),
    tower: bool(r.tower, D.tower),
    blur: bool(r.blur, D.blur),
    steerSpeed: oneOf(+r.steerSpeed, [0.7, 1, 1.4], D.steerSpeed),
    padDead: num(r.padDead, 0, 0.3, D.padDead),
    rumble: bool(r.rumble, D.rumble),
    autoQuality: bool(r.autoQuality, D.autoQuality),
    cbSafe: bool(r.cbSafe, D.cbSafe),
    keys: sanitizeKeys(r.keys),
    bloom: bool(r.bloom, D.bloom),
    calm: bool(r.calm, D.calm),
    bigHud: bool(r.bigHud, D.bigHud),
  };
}

function sanitizeRecords(raw) {
  const out = {};
  if (!isObj(raw)) return out;
  for (const t of TRACK_DEFS) {
    const r = raw[t.id];
    if (isObj(r) && Number.isFinite(r.best) && r.best > 5 && r.best < 1000) out[t.id] = { ...r, best: +r.best };
  }
  return out;
}

function sanitizeSeason(raw) {
  if (!isObj(raw)) return null;
  const ids = TRACK_DEFS.map((t) => t.id);
  const calendar = Array.isArray(raw.calendar) ? raw.calendar.filter((id) => ids.includes(id)) : CHAMP_CAL.slice();
  if (!calendar.length) return null;
  const round = Math.round(num(raw.round, 0, calendar.length, 0));
  const numMap = (m) => {
    const out = {};
    if (isObj(m)) for (const [k, v] of Object.entries(m)) if (Number.isFinite(+v)) out[String(k).slice(0, 40)] = Math.max(0, Math.round(+v));
    return out;
  };
  const strMap = (m) => {
    const out = {};
    if (isObj(m)) for (const [k, v] of Object.entries(m)) out[String(k).slice(0, 40)] = String(v).slice(0, 40);
    return out;
  };
  return { calendar, round, points: numMap(raw.points), teamPoints: numMap(raw.teamPoints), teamOf: strMap(raw.teamOf), results: Array.isArray(raw.results) ? raw.results.slice(0, 40) : [] };
}

function sanitizeStats(raw) {
  const out = { ...DEFAULT_STATS };
  if (isObj(raw)) for (const k of Object.keys(DEFAULT_STATS)) if (Number.isFinite(+raw[k])) out[k] = Math.max(0, +raw[k]);
  return out;
}

export function loadSave() {
  let raw = {};
  try {
    raw = JSON.parse(localStorage.getItem(SAVE_KEY) || '{}');
  } catch (e) {
    raw = {};
  }
  if (!isObj(raw)) raw = {};
  const ghosts = {};
  if (isObj(raw.ghosts)) for (const t of TRACK_DEFS) if (isObj(raw.ghosts[t.id])) ghosts[t.id] = raw.ghosts[t.id];
  return {
    settings: sanitizeSettings(raw.settings),
    config: sanitizeConfig(raw.config),
    records: sanitizeRecords(raw.records),
    ghosts,
    season: sanitizeSeason(raw.season),
    career: sanitizeCareer(raw.career),
    honours: Array.isArray(raw.honours) ? raw.honours.filter((h) => isObj(h)).slice(-30) : [],
    stats: sanitizeStats(raw.stats),
    school: sanitizeSchool(raw.school),
    achievements: isObj(raw.achievements) ? Object.fromEntries(Object.entries(raw.achievements).filter(([k, v]) => ACHIEVEMENTS.some((a) => a.id === k) && Number.isFinite(+v))) : {},
  };
}
export function persist(save) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(save));
  } catch (e) {
    /* storage unavailable or full: progress just isn't saved */
  }
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

export function trackThumb(track) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < track.N; i++) {
    minX = Math.min(minX, track.x[i]); maxX = Math.max(maxX, track.x[i]);
    minY = Math.min(minY, track.y[i]); maxY = Math.max(maxY, track.y[i]);
  }
  const w = maxX - minX, h = maxY - minY, pad = 0.06 * Math.max(w, h);
  const pts = [];
  for (let i = 0; i < track.N; i += 6) pts.push(`${(track.x[i] - minX + pad).toFixed(0)},${(maxY - track.y[i] + pad).toFixed(0)}`);
  const sx = track.x[0] - minX + pad, sy = maxY - track.y[0] + pad;
  const lw = Math.max(w, h) * 0.028;
  return `<svg viewBox="0 0 ${(w + 2 * pad).toFixed(0)} ${(h + 2 * pad).toFixed(0)}" preserveAspectRatio="xMidYMid meet"><polygon points="${pts.join(' ')}" fill="none" stroke="#000" stroke-opacity=".6" stroke-width="${lw * 1.7}" stroke-linejoin="round"/><polygon points="${pts.join(' ')}" fill="none" stroke="#c9d1db" stroke-width="${lw}" stroke-linejoin="round"/><circle cx="${sx}" cy="${sy}" r="${lw * 1.4}" fill="#ff2a2a"/></svg>`;
}

export class Menu {
  /**
   * hooks: { startRace(config), resume(), restart(), toMenu(), applySettings(), previewTeam(idx), nextRound(), tracks (id -> Track) }
   */
  constructor(root, save, hooks) {
    this.root = root;
    this.save = save;
    this.hooks = hooks;
    this.current = null;
    this.tab = 'circuit';
    this.config = { ...save.config, assists: { ...save.config.assists } };
    root.addEventListener('click', (e) => this.onClick(e));
    root.addEventListener('input', (e) => this.onInput(e));
  }

  persist() {
    this.save.config = this.config;
    persist(this.save);
  }

  clear() {
    this.root.innerHTML = '';
    this.current = null;
  }

  show(name, data) {
    this.current = name;
    this.lastData = data;
    const fn = this['screen_' + name];
    if (!fn) return this.show('main');
    let html;
    try {
      html = fn.call(this, data);
    } catch (e) {
      // a broken screen must never trap the player: log it and fall back to the main menu
      console.error('menu screen failed:', name, e);
      if (name === 'main') html = '<section class="screen dim"><div class="menu-col"><div class="logo">Apex<br><span>Grand Prix</span></div><button class="btn primary" data-act="quick">Quick race</button></div></section>';
      else return this.show('main');
    }
    this.root.innerHTML = html;
    this.afterRender(name);
  }

  drawTelemetry() {
    const d = this.lastData;
    if (!d || !d.race || !d.player) return;
    const { race, player, cls } = d;
    const me = player.rs;
    const winner = cls ? (cls[0] && cls[0].car !== player ? cls[0].car : cls[1] ? cls[1].car : null) : null;
    const fl = race.fastest && race.fastest.car && race.fastest.car !== player && race.fastest.car !== winner ? race.fastest.car : null;
    const cars = [{ car: player, name: 'You', color: '#ff4d4d', width: 3 }];
    if (winner) cars.push({ car: winner, name: winner.info.code + (cls[0].car === winner ? ' (winner)' : ' (P2)'), color: '#31d17a', dash: true });
    if (fl) cars.push({ car: fl, name: fl.info.code + ' (fastest lap)', color: '#4aa3ff', dash: true });
    const laps = Math.max(1, me.tele.length);
    const xt = Array.from({ length: Math.min(laps, 10) }, (_, i) => Math.round(1 + (i * (laps - 1)) / Math.max(1, Math.min(laps, 10) - 1)));
    const markers = me.stopLaps.map((l) => ({ x: l, label: 'PIT' }));
    const canv = (n) => this.root.querySelector(`canvas[data-chart="${n}"]`);
    const best = Math.min(...me.tele.map((t) => t.time).filter(Number.isFinite), Infinity);
    const mk = (fn) => cars.map((c) => ({ name: c.name, color: c.color, dash: c.dash, width: c.width, pts: c.car.rs.tele.map((t) => ({ x: t.lap, y: fn(t) })) }));
    if (canv('laps')) drawLineChart(canv('laps'), mk((t) => t.time), { title: 'Lap time', fmtY: (v) => formatTime(v, 1), xTicks: xt, markers, yMin: Number.isFinite(best) ? best * 0.985 : undefined, yMax: Number.isFinite(best) ? best * 1.3 : undefined });
    if (canv('fuel')) drawLineChart(canv('fuel'), mk((t) => t.fuel), { title: 'Fuel load (kg)', fmtY: (v, span) => v.toFixed(span < 8 ? 1 : 0), minSpan: 3, xTicks: xt, markers });
    if (canv('wear')) drawLineChart(canv('wear'), mk((t) => Math.min(100, t.wear * 100)), { title: 'Tyre wear (%)', fmtY: (v) => v.toFixed(0), xTicks: xt, markers, yMin: 0 });
    if (canv('top')) drawLineChart(canv('top'), mk((t) => t.topSpeed * 3.6), { title: 'Top speed (km/h)', fmtY: (v) => v.toFixed(0), minSpan: 40, xTicks: xt, markers });
  }

  afterRender(name) {
    if (name === 'results') requestAnimationFrame(() => this.drawTelemetry());
    if (name === 'setup' && this.hooks.previewTeam) this.hooks.previewTeam(this.config.team);
    const f = this.root.querySelector('.btn.primary, .btn');
    if (f && name === 'main') f.focus({ preventScroll: true });
  }

  // ---- screens -------------------------------------------------------------------------------
  screen_loading(msg = 'Building circuit') {
    return `<section class="screen loading"><div class="logo">Apex <span>GP</span></div><div class="bar"><i></i></div><div class="hint">${esc(msg)}…</div></section>`;
  }

  screen_main() {
    const s = this.save.season;
    return `<section class="screen dim">
      <div class="menu-col">
        <div class="logo">Apex<br><span>Grand Prix</span></div>
        <div class="tagline">20-CAR GRID · REAL TYRE, AERO &amp; HYBRID POWERTRAIN PHYSICS · ADJUSTABLE AI</div>
        <button class="btn primary" data-act="quick">Quick race<small>Jump straight in with your last settings</small></button>
        <button class="btn" data-act="setup" data-mode="race" data-qualify="0">Custom race<small>Circuit, laps, difficulty, team, setup, assists</small></button>
        <button class="btn" data-act="setup" data-mode="race" data-qualify="1">Qualify &amp; race<small>3-minute qualifying with all 20 cars sets your grid slot</small></button>
        <button class="btn" data-act="setup" data-mode="timetrial">Time trial<small>Chase your ghost, alone on the circuit</small></button>
        <button class="btn" data-act="career">Career<small>${this.save.career ? `Season ${this.save.career.seasonNo} · ${TEAMS[this.save.career.team].short} · round ${Math.min(this.save.career.season.round + 1, this.save.career.season.calendar.length)} of ${this.save.career.season.calendar.length}` : 'Pick a team, develop the car, climb the grid across seasons'}</small></button>
        <button class="btn" data-act="season">Championship<small>${s ? `Round ${Math.min(s.round + 1, s.calendar.length)} of ${s.calendar.length} in progress` : '4 rounds, points, a title to win'}</small></button>
        <div class="row"><button class="btn sm grow" data-act="controls">Controls</button><button class="btn sm grow" data-act="school">School</button><button class="btn sm grow" data-act="profile">Profile</button><button class="btn sm grow" data-act="settings">Settings</button></div>
      </div>
      <div class="version">v1.1 · WASD / arrows to drive · works with gamepads</div>
    </section>`;
  }

  chips(name, options, value, extra = '') {
    return `<div class="chips">${options.map((o) => `<button class="chip ${o.dot ? 'dot' : ''} ${String(o.value) === String(value) ? 'on' : ''}" ${o.dot ? `style="--c:${o.dot}"` : ''} data-chip="${name}" data-value="${esc(o.value)}" ${extra}>${esc(o.label)}</button>`).join('')}</div>`;
  }

  toggle(name, label, hint, on) {
    return `<div class="toggle" data-toggle="${name}"><div>${esc(label)}${hint ? `<div class="hint">${esc(hint)}</div>` : ''}</div><div class="switch ${on ? 'on' : ''}"></div></div>`;
  }

  slider(name, label, value, min, max, step, show) {
    return `<div class="field"><label>${esc(label)}<b>${show}</b></label><input type="range" data-slider="${name}" min="${min}" max="${max}" step="${step}" value="${value}"></div>`;
  }

  screen_setup(data = {}) {
    const c = this.config;
    const mode = c.mode;
    const title = mode === 'timetrial' ? 'Time <span>trial</span>' : data.season ? 'Champion<span>ship</span>' : 'Race <span>setup</span>';
    const tabs = [['circuit', 'Circuit'], ['race', 'Session'], ['car', 'Team & car'], ['assists', 'Assists']];
    const body = this['tab_' + this.tab](data);
    return `<section class="screen panel-screen full">
      <div class="row"><h2>${title}</h2><div class="grow"></div></div>
      <div class="tabs">${tabs.map(([k, n]) => `<button class="tab ${this.tab === k ? 'active' : ''}" data-tab="${k}">${n}</button>`).join('')}</div>
      <div>${body}</div>
      <div class="footer"><button class="btn sm" data-act="main">◀ Back</button><div class="hint">${this.summary()}</div><button class="btn primary" data-act="go">${data.season ? 'Start round' : mode === 'timetrial' ? 'Start session' : 'Go racing'}</button></div>
    </section>`;
  }

  summary() {
    const c = this.config;
    const t = TRACK_DEFS.find((d) => d.id === c.trackId);
    const team = TEAMS[c.team];
    const d = DIFFICULTIES.reduce((a, b) => (Math.abs(b.level - c.level) < Math.abs(a.level - c.level) ? b : a));
    return c.mode === 'timetrial' ? `${esc(t.name)} · ${esc(team.short)}` : `${esc(t.name)} · ${c.laps} laps · ${esc(d.name)} · ${esc(team.short)}`;
  }

  tab_circuit(data) {
    const c = this.config;
    const locked = data && data.season;
    return `<div class="tracks">${TRACK_DEFS.map((d) => {
      const tr = this.hooks.tracks[d.id];
      const rec = this.save.records[d.id];
      const on = c.trackId === d.id;
      return `<button class="tcard ${on ? 'on' : ''}" data-track="${d.id}" ${locked ? 'disabled' : ''}>${tr ? trackThumb(tr) : ''}<h4>${esc(d.name)}</h4><div class="meta"><span>${esc(d.country)}</span><span>${tr ? (tr.length / 1000).toFixed(2) + ' km' : ''} · ${tr ? tr.corners.length : ''} turns</span></div><p>${esc(d.blurb)}</p><div class="meta"><span>Best lap</span><b>${rec ? formatTime(rec.best) : '—'}</b></div></button>`;
    }).join('')}</div>`;
  }

  tab_race() {
    const c = this.config;
    const track = this.hooks.tracks[c.trackId];
    const est = track ? Math.round((c.laps * track.length) / 1000 * 0.5) : 0;
    const diff = DIFFICULTIES.reduce((a, b) => (Math.abs(b.level - c.level) < Math.abs(a.level - c.level) ? b : a));
    const timetrial = c.mode === 'timetrial';
    return `<div class="grid2">
      ${timetrial ? '' : `<div class="panel"><h3>Race</h3>
        ${this.slider('laps', 'Laps', c.laps, 1, 30, 1, `${c.laps} · about ${Math.max(1, est)} min`)}
        <div class="field"><label>AI difficulty<b>${Math.round(c.level * 100)}%</b></label>${this.chips('diff', DIFFICULTIES.map((d) => ({ value: d.level, label: d.name })), diff.level)}
        <input type="range" data-slider="level" min="0" max="100" step="1" value="${Math.round(c.level * 100)}"><div class="hint">${esc(diff.blurb)} — drag for any value in between. Rookie leaves you room to learn; Legend runs every car at the physical limit.</div></div>
        ${this.slider('fieldSize', 'Cars on the grid', c.fieldSize, 2, 20, 1, c.fieldSize)}
        ${this.slider('playerGrid', 'Your starting position', Math.min(c.playerGrid, c.fieldSize), 1, c.fieldSize, 1, 'P' + Math.min(c.playerGrid, c.fieldSize))}
      </div>`}
      <div class="panel"><h3>Tyres &amp; rules</h3>
        <div class="field"><label>Weather</label>${this.chips('weather', [{ value: 'dry', label: 'Dry' }, { value: 'light', label: 'Light rain' }, { value: 'heavy', label: 'Heavy rain' }, { value: 'changing', label: 'Changeable' }], c.weather)}<div class="hint">Rain cuts slick-tyre grip by about 30 %: fit Wet tyres in the pits (T cycles the next set). Changeable: dry start, a shower somewhere in the race.</div></div>
        <div class="field"><label>Lighting</label>${this.chips('timeOfDay', [{ value: 'progress', label: 'Midday to dusk' }, { value: 'day', label: 'Always midday' }, { value: 'night', label: 'Night race' }], c.timeOfDay)}</div>
        <div class="field"><label>Starting compound</label>${this.chips('compound', COMPOUND_IDS.map((id) => ({ value: id, label: COMPOUNDS[id].name, dot: COMPOUNDS[id].color })), c.compound)}</div>
        <div class="field"><label>Tyre wear</label>${this.chips('tyreWear', [{ value: 0, label: 'Off' }, { value: 1.5, label: 'Low' }, { value: 3, label: 'Normal' }, { value: 6, label: 'High' }], c.tyreWear)}<div class="hint">Normal makes the Soft last about 5 laps and the Hard about 12. High forces a stop in a short race.</div></div>
        ${this.toggle('damage', 'Damage', 'Wings, floor and tyre punctures from contact', c.damage)}
        ${timetrial ? '' : this.toggle('collisions', 'Car-to-car collisions', 'Off lets cars pass through each other', c.collisions)}
        ${timetrial ? '' : this.toggle('equalCars', 'Identical cars', 'Every team has exactly your car; only the drivers differ (off: stronger teams have faster cars)', c.equalCars)}
        ${timetrial ? '' : this.toggle('qualify', 'Qualifying session first', '3 minutes, all 20 cars: your best lap sets your grid slot (overrides the start position)', c.qualify)}
        ${timetrial ? '' : this.toggle('mandatoryStop', 'Mandatory pit stop', 'Use two compounds or take +15 s', c.mandatoryStop)}
        ${timetrial ? '' : `<div class="field"><label>Pit wall</label>${this.chips('pitCalls', [{ value: 'off', label: 'Silent' }, { value: 'radio', label: 'Radio advice' }, { value: 'auto', label: 'Calls you in' }], c.pitCalls)}<div class="hint">Advice reads your real tyre wear and tells you when to box and what to fit; Calls you in presses the pit button for you (B cancels).</div></div>`}
        ${timetrial ? '' : this.toggle('adaptive', 'Adaptive AI pace', 'Cars far ahead ease off, cars far behind push (±3-5%)', c.adaptive)}
      </div></div>`;
  }

  tab_car() {
    const c = this.config;
    const track = TRACK_DEFS.find((d) => d.id === c.trackId);
    const rec = track.setup || { front: 5, rear: 5 };
    const fw = c.frontWing ?? rec.front, rw = c.rearWing ?? rec.rear;
    return `<div class="panel"><h3>Team</h3><div class="teams">${TEAMS.map((t, i) => `<button class="team ${c.team === i ? 'on' : ''}" data-team="${i}" style="--c:${t.color};--c2:${t.accent}"><i></i><div><b>${esc(t.name)}</b><div class="hint">Car performance</div><div class="bar"><span style="width:${Math.round(55 + t.rating * 45)}%"></span></div></div></button>`).join('')}</div></div>
    <div class="grid2" style="margin-top:1rem">
      <div class="panel"><h3>Aero setup — ${esc(track.name)}</h3>
        ${this.slider('frontWing', 'Front wing', fw, 0, 10, 1, `${fw}  (recommended ${rec.front})`)}
        ${this.slider('rearWing', 'Rear wing', rw, 0, 10, 1, `${rw}  (recommended ${rec.rear})`)}
        <div class="hint">More wing = more downforce and cornering grip, but more drag and a lower top speed. Low wing suits long straights; high wing suits tight, twisty circuits. Setups affect handling balance: more rear wing for stability, more front wing for turn-in.</div>
        <button class="btn sm" data-act="resetsetup" style="margin-top:.6rem">Use recommended</button></div>
      <div class="panel"><h3>Brakes</h3>
        ${this.slider('brakeBias', 'Brake bias (front)', Math.round(c.brakeBias * 100), 50, 68, 1, Math.round(c.brakeBias * 100) + '%')}
        <div class="hint">Higher front bias is stable but can lock the front tyres; lower bias turns in better and risks locking the rears. ABS covers most of it if enabled.</div></div>
      <div class="panel"><h3>Tyre pressure</h3>
        ${this.slider('pressure', 'Pressure offset', c.pressure, -3, 3, 1, c.pressure === 0 ? 'Standard' : (c.pressure > 0 ? '+' : '') + c.pressure)}
        <div class="hint">Higher pressure heats the tyres faster and wears them more slowly but costs grip once it is too high; lower pressure grips better in the wet and gives more feel at the price of faster wear. Standard is the dry-weather sweet spot.</div></div></div>`;
  }

  tab_assists() {
    const a = this.config.assists;
    return `<div class="grid2"><div class="panel"><h3>Driver aids</h3>
      <div class="field"><label>Presets</label><div class="chips">${Object.keys(ASSIST_PRESETS).map((k) => `<button class="chip" data-preset="${k}">${k}</button>`).join('')}</div></div>
      ${this.toggle('a.abs', 'ABS', 'Prevents brake lock-ups', a.abs)}
      ${this.toggle('a.steer', 'Steering assist', 'Limits steering lock so the front tyres don\'t scrub away', a.steer)}
      ${this.toggle('a.autoGear', 'Automatic gearbox', 'Manual: Q / E or paddles', a.autoGear)}
      ${this.toggle('a.pitAuto', 'Pit lane autopilot', 'The car drives itself through the pits once you commit', a.pitAuto)}
      ${this.toggle('a.pitGame', 'Interactive pit stops', 'Time your button press (Space) on each wheel nut: a clean stop takes 2.5 s, a cross-threaded nut costs 0.9 s', a.pitGame)}
    </div><div class="panel"><h3>Stability</h3>
      <div class="field"><label>Traction control</label>${this.chips('tc', TC_NAMES.map((n, i) => ({ value: i, label: n })), a.tc)}</div>
      <div class="field"><label>Stability control (counter-steer help)</label>${this.chips('stability', TC_NAMES.map((n, i) => ({ value: i, label: n })), a.stability)}</div>
      <div class="hint">Keyboard drivers should keep stability and traction on while learning. Gamepad and wheel users can turn them off for a more raw car.</div>
    </div></div>`;
  }

  screen_controls() {
    const keys = mergeKeys(this.save.settings.keys);
    const rows = KEY_ACTIONS.map(([a, label]) => {
      const waiting = this.rebinding === a;
      return `<div class="key"><span>${esc(label)}</span><button class="keybtn ${waiting ? 'wait' : ''}" data-rebind="${a}">${waiting ? 'Press a key…' : keys[a].filter((c) => c !== 'Escape' || a === 'pause').map((c) => `<kbd>${esc(keyLabel(c))}</kbd>`).join('')}</button></div>`;
    });
    const pad = [['Steer', 'Left stick'], ['Throttle / brake', 'RT / LT'], ['DRS', 'A'], ['Boost', 'X'], ['Pit request', 'B'], ['Camera', 'Y'], ['Gears', 'LB / RB'], ['Look back', 'L3'], ['Pause', 'Start'], ['Reset', 'Back'], ['Fuel mix / ERS mode', 'D-pad up / down'], ['Next pit tyre', 'D-pad right']];
    return `<section class="screen panel-screen full"><h2>Con<span>trols</span></h2>
      <div class="grid2"><div class="panel"><h3>Keyboard <small class="hint">· click a key to rebind it</small></h3><div class="keys">${rows.join('')}</div><button class="btn sm" data-act="resetkeys" style="margin-top:.6rem">Reset keys to default</button><div class="hint" style="margin-top:.4rem">Esc always pauses. Enter confirms in menus. In a pit stop, the DRS key hits the wheel nut.</div></div>
      <div class="panel"><h3>Gamepad</h3><div class="keys">${pad.map(([n, v]) => `<div class="key"><span>${n}</span><span><kbd>${v}</kbd></span></div>`).join('')}</div>
      <h3 style="margin-top:1.2rem">Racecraft</h3><div class="hint">• Brake in a straight line, then trail off the pedal as you turn in.<br>• Hit the apex kerb, then use all the track on exit — but not past the white line, or you get a track-limits warning.<br>• DRS opens the rear wing for ~10-15 km/h when you are within one second of the car ahead at the detection line.<br>• ERS boost spends the battery: harvest it by braking hard and lifting.<br>• Follow closely and you lose front downforce (dirty air) but gain a slipstream on the straights.<br>• Tyres have a temperature window: scrubbing them sliding overheats them, and worn tyres lose grip fast.<br>• Press <kbd>B</kbd> to call a pit stop — new tyres, repairs, and a limiter in the lane.</div></div></div>
      <div class="footer"><button class="btn sm" data-act="back">◀ Back</button></div></section>`;
  }

  screen_school() {
    const done = this.save.school || {};
    const n = LESSONS.filter((l) => done[l.id]).length;
    const rows = LESSONS.map((l, i) => {
      const td = TRACK_DEFS.find((d) => d.id === l.track);
      return `<div class="lesson ${done[l.id] ? 'done' : ''}"><div class="lno">${done[l.id] ? '✓' : i + 1}</div><div class="grow"><b>${esc(l.title)}</b><div class="hint">${esc(l.blurb)}</div>
        <div class="hint">${esc(td ? td.name : l.track)} · ${l.mode === 'race' ? 'vs a slow car' : 'alone on the circuit'}${l.weather ? ' · rain' : ''}</div>
        <ul class="goals">${l.goals.map((g) => `<li>${esc(g.text)}</li>`).join('')}</ul></div>
        <button class="btn sm ${done[l.id] ? '' : 'primary'}" data-act="lesson" data-lesson="${l.id}">${done[l.id] ? 'Again' : 'Start'}</button></div>`;
    }).join('');
    return `<section class="screen panel-screen full"><h2>Driving <span>school</span></h2>
      <div class="hint" style="margin-bottom:.8rem">${n} of ${LESSONS.length} lessons passed. Each lesson is a short session with a checklist on screen; finish the goals and carry on driving for as long as you like.</div>
      <div class="lessons">${rows}</div>
      <div class="footer"><button class="btn sm" data-act="main">◀ Back</button></div></section>`;
  }

  screen_profile() {
    const st = { ...DEFAULT_STATS, ...(this.save.stats || {}) };
    const have = this.save.achievements || {};
    const n = Object.keys(have).length;
    const tile = (k, v) => `<div class="stat"><small>${k}</small><b>${v}</b></div>`;
    const recs = TRACK_DEFS.map((d) => ({ d, r: this.save.records[d.id] })).filter((x) => x.r);
    const hon = (this.save.honours || []).slice(-6).reverse();
    return `<section class="screen panel-screen full"><h2>Driver <span>profile</span></h2>
      <div class="panel"><div class="stats">${tile('Races', st.races)}${tile('Wins', st.wins)}${tile('Podiums', st.podiums)}${tile('Poles', st.poles)}${tile('Fastest laps', st.fastestLaps)}${tile('Passes', st.passes)}${tile('Distance', Math.round(st.km) + ' km')}${tile('Pit stops', st.pitStops + (st.perfectStops ? ` (${st.perfectStops} perfect)` : ''))}${tile('Clean races', st.cleanRaces)}${tile('Titles', st.championships + st.careerTitles)}</div></div>
      <div class="grid2" style="margin-top:1rem"><div class="panel"><h3>Achievements · ${n} / ${ACHIEVEMENTS.length}</h3><div class="achs">${ACHIEVEMENTS.map((a) => `<div class="ach ${have[a.id] ? 'got' : ''}"><b>${esc(a.name)}</b><span>${esc(a.desc)}</span></div>`).join('')}</div></div>
      <div class="panel"><h3>Lap records</h3>${recs.length ? `<table class="results">${recs.map((x) => `<tr><td>${esc(x.d.name)}</td><td><b>${formatTime(x.r.best)}</b></td></tr>`).join('')}</table>` : '<div class="hint">Set a time trial lap to record it here.</div>'}
        <h3 style="margin-top:1rem">Season history</h3>${hon.length ? `<div class="hint">${hon.map((h) => `P${h.pos} · ${esc(h.team)} · ${h.points} pts`).join('<br>')}</div>` : '<div class="hint">Finish a championship to see it here.</div>'}</div></div>
      <div class="footer"><button class="btn sm" data-act="back">◀ Back</button></div></section>`;
  }

  screen_settings(data = {}) {
    const s = this.save.settings;
    return `<section class="screen panel-screen full"><h2>Set<span>tings</span></h2>
      <div class="grid2"><div class="panel"><h3>Graphics</h3>
        <div class="field"><label>Quality</label>${this.chips('quality', [{ value: 'low', label: 'Low' }, { value: 'medium', label: 'Medium' }, { value: 'high', label: 'High' }], s.quality)}<div class="hint">Low: no shadows, fewer trees, lower resolution. Changes apply to the next session.</div></div>
        ${this.toggle('s.autoQuality', 'Automatic quality', 'Lowers the resolution (then shadows and blur) if the frame rate stays under 40 fps', s.autoQuality !== false)}
        ${this.toggle('s.line', 'Racing line guide', 'Green: keep going. Yellow: ease off. Red: brake now (key L)', s.line !== false)}
        ${this.toggle('s.shake', 'Camera shake', 'Kerbs, speed, engine rumble and impacts', s.shake)}
        ${this.toggle('s.blur', 'Motion blur', 'Radial speed blur that builds up fast at high speed (not on Low quality)', s.blur !== false)}
        ${this.toggle('s.bloom', 'Bloom', 'Lights, windows and hot brake discs glow at dusk and at night (High and Medium quality)', s.bloom !== false)}
        ${this.toggle('s.cbSafe', 'Colour-blind-safe guide', 'Racing line in blue / yellow / magenta instead of green / yellow / red', s.cbSafe)}
        ${this.toggle('s.calm', 'Reduce motion', 'No motion blur, camera shake or flashing lights', s.calm)}
        ${this.toggle('s.bigHud', 'Larger HUD', 'Scales the race HUD up by a fifth', s.bigHud)}
        ${this.toggle('s.minimap', 'Show minimap', '', s.minimap)}
        ${this.toggle('s.tower', 'Show timing tower', '', s.tower)}
      </div><div class="panel"><h3>Audio &amp; units</h3>
        ${this.slider('s.volume', 'Master volume', Math.round(s.volume * 100), 0, 100, 1, Math.round(s.volume * 100) + '%')}
        <div class="field"><label>Speed units</label>${this.chips('units', [{ value: 'kmh', label: 'km/h' }, { value: 'mph', label: 'mph' }], s.units)}</div>
        <div class="field"><label>Default camera</label>${this.chips('camera', [['chase', 'Chase'], ['close', 'Low chase'], ['cockpit', 'Cockpit'], ['tcam', 'T-cam'], ['tv', 'TV']].map(([v, l]) => ({ value: v, label: l })), s.camera)}</div>
        <div class="field"><label>Keyboard steering speed</label>${this.chips('steerSpeed', [{ value: 0.7, label: 'Gentle' }, { value: 1, label: 'Normal' }, { value: 1.4, label: 'Quick' }], s.steerSpeed)}<div class="hint">How fast A / D turn the wheel. Gamepads and wheels are not affected.</div></div>
        ${this.slider('s.padDead', 'Gamepad stick deadzone', Math.round(s.padDead * 100), 0, 30, 1, Math.round(s.padDead * 100) + '%')}
        ${this.toggle('s.rumble', 'Gamepad vibration', 'Kerbs, grass, tyre slip and impacts', s.rumble !== false)}
        <button class="btn sm" data-act="wipe">Clear saved records</button>
      </div></div>
      <div class="footer"><button class="btn sm" data-act="${data.from === 'pause' ? 'pause' : 'back'}">◀ Back</button></div></section>`;
  }

  screen_pause() {
    return `<section class="screen full" style="align-items:center;justify-content:center">
      <div class="menu-col" style="align-items:stretch"><div class="logo" style="font-size:2.6rem">Paused</div>
        <button class="btn primary" data-act="resume">Resume</button>
        <button class="btn" data-act="replay">Instant replay<small>The last 30 seconds from trackside cameras</small></button>
        <button class="btn" data-act="photo">Photo mode<small>Fly a free camera and save a screenshot</small></button>
        <button class="btn" data-act="restart">Restart session</button>
        <button class="btn" data-act="pausecam">Camera: <span id="camname"></span></button>
        <button class="btn" data-act="pausesettings">Settings</button>
        <button class="btn" data-act="quit">Quit to menu</button>
        <div class="hint" style="margin-top:.8rem">Racing line guide: <kbd>L</kbd> · Camera: <kbd>C</kbd> · Reset to track: <kbd>R</kbd> · Autopilot: <kbd>G</kbd></div></div></section>`;
  }

  screen_results(data) {
    const { cls, player, race, season, trackName, careerRes } = data;
    const top3 = cls.slice(0, 3);
    const order = [top3[1], top3[0], top3[2]].filter(Boolean);
    const fmt = (e) => (e.time != null ? formatTime(e.time) : 'DNF');
    const bestLap = Math.min(...cls.map((e) => e.best));
    const me = cls.find((e) => e.car === player);
    const rows = cls
      .map((e, i) => {
        const lead = cls[0];
        let gap = '';
        if (e.time != null && i > 0) gap = e.laps < lead.laps ? `+${lead.laps - e.laps} lap` : '+' + (e.time - lead.time).toFixed(3);
        const grid = e.gridPos - e.pos;
        return `<tr class="${e.car === player ? 'me' : ''}"><td class="pos">${e.pos}</td><td><span class="tc" style="--c:${e.info.team.color}"></span>${esc(e.info.name)}</td><td>${esc(e.info.team.short)}</td><td>${fmt(e)}</td><td>${gap}</td><td>${e.penalty ? '+' + e.penalty + 's' : ''}</td><td>${e.best < Infinity ? formatTime(e.best) : ''}${e.best === bestLap ? ' ◆' : ''}</td><td>${e.stops}</td><td>${grid > 0 ? '▲' + grid : grid < 0 ? '▼' + -grid : '–'}</td><td><b>${e.points}</b></td></tr>`;
      })
      .join('');
    let seasonHtml = '';
    if (season) {
      const dr = driverStandings(season).slice(0, 10);
      const cons = constructorStandings(season).slice(0, 6);
      seasonHtml = `<div class="panel"><h3>Drivers' standings · after round ${season.round} of ${season.calendar.length}</h3><table class="results"><tr><th>Pos</th><th>Driver</th><th>Pts</th></tr>${dr.map((d, i) => `<tr class="${d.name === 'You' ? 'me' : ''}"><td class="pos">${i + 1}</td><td>${esc(d.name)}</td><td><b>${d.pts}</b></td></tr>`).join('')}</table>
        <h3 style="margin-top:1rem">Constructors</h3><table class="results">${cons.map((d, i) => `<tr><td class="pos">${i + 1}</td><td>${esc(d.team)}</td><td><b>${d.pts}</b></td></tr>`).join('')}</table></div>`;
    }
    const final = season && season.round >= season.calendar.length;
    return `<section class="screen panel-screen full">
      <h2>${esc(trackName)} <span>results</span></h2>
      <div class="podium">${order.map((e) => `<div class="pod p${e.pos}" style="--c:${e.info.team.color}"><div class="hint">P${e.pos}</div><b>${esc(e.info.code)}</b><div>${esc(e.info.team.short)}</div><div class="hint">${fmt(e)}</div></div>`).join('')}</div>
      ${me ? `<div class="hint" style="text-align:center">You finished <b>P${me.pos}</b>${me.penalty ? ` (includes ${me.penalty}s of penalties)` : ''} · best lap ${me.best < Infinity ? formatTime(me.best) : '—'}</div>` : ''}
      ${careerRes ? `<div class="panel"><h3>Career</h3><div class="hint">Finished <b style="color:#fff">P${careerRes.pos}</b> · objective P${careerRes.objective} ${careerRes.met ? '<b style="color:#31d17a">achieved</b>' : '<b style="color:#ff6b6b">missed</b>'} · prize money <b style="color:#ffd24a">+${careerRes.prize}</b>${careerRes.fastest ? ' (fastest lap bonus)' : ''} · budget now <b style="color:#ffd24a">${careerRes.budget}</b></div></div>` : ''}
      <div class="grid2" style="grid-template-columns:${season ? '2fr 1fr' : '1fr'}"><div class="panel" style="overflow:auto"><table class="results"><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Time</th><th>Gap</th><th>Pen</th><th>Best lap</th><th>Stops</th><th>Grid</th><th>Pts</th></tr>${rows}</table></div>${seasonHtml}</div>
      <div class="panel telemetry"><h3>Race telemetry</h3><div class="charts"><canvas data-chart="laps"></canvas><canvas data-chart="fuel"></canvas><canvas data-chart="wear"></canvas><canvas data-chart="top"></canvas></div></div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><div class="row">
        <button class="btn" data-act="replay">Watch replay</button>
        ${careerRes ? '<button class="btn primary" data-act="careercontinue">Continue career ▶</button>' : `<button class="btn ${season && !final ? '' : 'primary'}" data-act="restart">Race again</button>`}
        ${season && !final ? '<button class="btn primary" data-act="nextround">Next round ▶</button>' : ''}
        ${final ? '<button class="btn primary" data-act="endseason">Finish season</button>' : ''}</div></div></section>`;
  }

  // ---- career ------------------------------------------------------------------------------------
  screen_career_new() {
    const n = this.cnew || (this.cnew = { team: 6, level: 0.55, rounds: 4, distance: 'standard' });
    const diff = DIFFICULTIES.reduce((a, b) => (Math.abs(b.level - n.level) < Math.abs(a.level - n.level) ? b : a));
    return `<section class="screen panel-screen full">
      <div class="row"><h2>New <span>career</span></h2><div class="grow"></div></div>
      <div class="panel"><h3>Choose your team</h3><div class="teams">${TEAMS.map((t, i) => {
        const o = objectiveFor(i);
        return `<button class="team ${n.team === i ? 'on' : ''}" data-cteam="${i}" style="--c:${t.color};--c2:${t.accent}"><i></i><div><b>${esc(t.name)}</b><div class="hint">Car ${Math.round(55 + t.rating * 45)}% · target P${o.finish}</div><div class="bar"><span style="width:${Math.round(55 + t.rating * 45)}%"></span></div></div></button>`;
      }).join('')}</div>
      <div class="hint" style="margin-top:.5rem">A weaker car is a tougher start: prize money buys upgrades, and strong seasons earn offers from better teams.</div></div>
      <div class="grid2" style="margin-top:1rem">
        <div class="panel"><h3>AI difficulty</h3>${this.chips('cn.level', DIFFICULTIES.map((d) => ({ value: d.level, label: d.name })), diff.level)}<div class="hint">${esc(diff.blurb)}. It rises a little every season.</div></div>
        <div class="panel"><h3>Season</h3><div class="field"><label>Calendar</label>${this.chips('cn.rounds', [{ value: 4, label: '4 rounds' }, { value: 8, label: TRACK_DEFS.length + ' rounds (all circuits)' }], n.rounds)}</div>
        <div class="field"><label>Race distance</label>${this.chips('cn.distance', DISTANCES.map((d) => ({ value: d.id, label: `${d.name} · ${d.km} km` })), n.distance)}</div></div></div>
      <div class="footer"><button class="btn sm" data-act="main">◀ Back</button><div class="hint">${esc(TEAMS[n.team].name)} · ${n.rounds} rounds · ${esc(diff.name)}</div><button class="btn primary" data-act="careerstart">Start career</button></div></section>`;
  }

  screen_career_hub() {
    const c = this.save.career;
    const s = c.season;
    const id = s.calendar[s.round];
    const def = TRACK_DEFS.find((d) => d.id === id);
    const tr = this.hooks.tracks[id];
    const laps = tr ? lapsFor(tr.length, c.distance) : 5;
    const obj = objectiveFor(c.team);
    const team = TEAMS[c.team];
    const dr = driverStandings(s).slice(0, 8);
    const cons = constructorStandings(s).slice(0, 6);
    const ups = UPGRADE_KEYS.map((k) => {
      const lv = c.upgrades[k] || 0;
      const cost = upgradeCost(lv);
      const pips = Array.from({ length: UPGRADE_MAX }, (_, i) => `<i class="${i < lv ? 'on' : ''}"></i>`).join('');
      return `<div class="upg"><div><b>${esc(UPGRADE_INFO[k].name)}</b><div class="hint">${esc(UPGRADE_INFO[k].blurb)}</div><div class="pips">${pips}</div></div>
        <button class="btn sm" data-buy="${k}" ${lv >= UPGRADE_MAX || c.budget < cost ? 'disabled' : ''}>${lv >= UPGRADE_MAX ? 'Max' : `Upgrade · ${cost}`}</button></div>`;
    }).join('');
    return `<section class="screen panel-screen full">
      <div class="row"><h2>Career <span>season ${c.seasonNo}</span></h2><div class="grow"></div><div class="hint"><b style="color:#fff">${esc(team.name)}</b> · budget <b style="color:#ffd24a;font-size:1.3rem">${c.budget}</b></div></div>
      <div class="grid2" style="grid-template-columns:1.1fr 1fr">
        <div class="panel"><h3>Round ${s.round + 1} of ${s.calendar.length}</h3>
          <div class="hubtrack">${tr ? trackThumb(tr) : ''}<div><b style="font-size:1.3rem">${esc(def.name)}</b><div class="hint">${esc(def.country)} · ${tr ? (tr.length / 1000).toFixed(2) + ' km' : ''} · ${laps} laps</div>
          <div class="hint" style="margin-top:.5rem">Forecast: <b style="color:#fff">${esc(WEATHER_NAMES[weatherFor(s)])}</b>${weatherFor(s) !== 'dry' ? ' — be ready to change tyres' : ''}</div>
          <div class="hint" style="margin-top:.3rem">Objective: finish <b style="color:#fff">P${obj.finish}</b> or better (+8 prize). Constructors target: P${obj.constructor}.</div></div></div>
          <div class="row" style="margin-top:.8rem"><button class="btn primary grow" data-act="careerrace" data-q="1">Qualify &amp; race</button><button class="btn grow" data-act="careerrace" data-q="0">Race now</button></div>
        </div>
        <div class="panel"><h3>Car development</h3>${ups}</div>
      </div>
      <div class="grid2" style="margin-top:1rem">
        <div class="panel"><h3>Drivers' championship</h3><table class="results">${dr.length ? dr.map((d, i) => `<tr class="${d.name === 'You' ? 'me' : ''}"><td class="pos">${i + 1}</td><td>${esc(d.name)}</td><td>${esc(d.team)}</td><td><b>${d.pts}</b></td></tr>`).join('') : '<tr><td class="hint">No races yet</td></tr>'}</table></div>
        <div class="panel"><h3>Constructors</h3><table class="results">${cons.length ? cons.map((d, i) => `<tr class="${d.team === team.short ? 'me' : ''}"><td class="pos">${i + 1}</td><td>${esc(d.team)}</td><td><b>${d.pts}</b></td></tr>`).join('') : '<tr><td class="hint">No races yet</td></tr>'}</table></div>
      </div>
      <div class="footer"><button class="btn sm" data-act="main">Main menu</button><div class="hint">${c.history.length ? `Previous seasons: ${c.history.map((h) => `S${h.seasonNo} P${h.driverPos}`).join(' · ')}` : ''}</div><button class="btn sm" data-act="careerwipe" data-confirm="0">Abandon career</button></div></section>`;
  }

  screen_career_end() {
    const c = this.save.career;
    const r = c.seasonRecap;
    const team = TEAMS[c.team];
    const offers = (r.offers || []).map((i) => `<button class="team" data-coffer="${i}" style="--c:${TEAMS[i].color};--c2:${TEAMS[i].accent}"><i></i><div><b>${esc(TEAMS[i].name)}</b><div class="hint">Offer: join for season ${c.seasonNo + 1} · car ${Math.round(55 + TEAMS[i].rating * 45)}%</div><div class="bar"><span style="width:${Math.round(55 + TEAMS[i].rating * 45)}%"></span></div></div></button>`).join('');
    return `<section class="screen panel-screen full">
      <div class="row"><h2>Season ${r.seasonNo} <span>${r.champion ? 'champion!' : 'complete'}</span></h2></div>
      <div class="grid2"><div class="panel"><h3>Your season</h3>
        <div class="bigstats"><div><small>Drivers'</small><b>P${r.driverPos}</b></div><div><small>${esc(team.short)}</small><b>P${r.teamPos}</b></div><div><small>Points</small><b>${r.points}</b></div><div><small>Wins</small><b>${r.wins}</b></div><div><small>Podiums</small><b>${r.podiums}</b></div></div>
        <div class="hint" style="margin-top:.6rem">Constructors objective (P${r.constructorObjective}): <b style="color:${r.metConstructor ? '#31d17a' : '#ff6b6b'}">${r.metConstructor ? 'achieved' : 'missed'}</b>. Season bonus added to your budget: now <b style="color:#ffd24a">${c.budget}</b>.</div></div>
        <div class="panel"><h3>Contracts for next season</h3><div class="teams">${offers || '<div class="hint">No offers this year. Finish higher in the standings to attract bigger teams.</div>'}
          <button class="team on" data-coffer="${c.team}" style="--c:${team.color};--c2:${team.accent}"><i></i><div><b>Stay with ${esc(team.short)}</b><div class="hint">Keep your car development</div></div></button></div></div></div>
      <div class="footer"><button class="btn sm" data-act="main">Main menu</button><div class="hint">Moving teams starts car development again.</div></div></section>`;
  }

  screen_season_end(data) {
    const s = data.season;
    const dr = driverStandings(s);
    const cons = constructorStandings(s);
    const pos = dr.findIndex((d) => d.name === 'You') + 1;
    const hist = (this.save.honours || []).slice(-5).reverse();
    return `<section class="screen panel-screen full">
      <div class="row"><h2>${pos === 1 ? 'World <span>champion!</span>' : 'Season <span>complete</span>'}</h2></div>
      <div class="grid2"><div class="panel"><h3>Drivers' championship</h3><table class="results">${dr.slice(0, 12).map((d, i) => `<tr class="${d.name === 'You' ? 'me' : ''}"><td class="pos">${i + 1}</td><td>${esc(d.name)}</td><td>${esc(d.team)}</td><td><b>${d.pts}</b></td></tr>`).join('')}</table></div>
        <div class="panel"><h3>Constructors</h3><table class="results">${cons.map((d, i) => `<tr><td class="pos">${i + 1}</td><td>${esc(d.team)}</td><td><b>${d.pts}</b></td></tr>`).join('')}</table>
        ${hist.length ? `<h3 style="margin-top:1rem">Your recent seasons</h3><div class="hint">${hist.map((h) => `P${h.pos} with ${esc(h.team)} (${h.points} pts)`).join(' · ')}</div>` : ''}</div></div>
      <div class="footer"><button class="btn sm" data-act="main">Main menu</button><div class="hint">You finished P${pos} with ${(s.points.You || 0)} points.</div><button class="btn primary" data-act="endseason">Close the season</button></div></section>`;
  }

  screen_quali(data) {
    const { q, player, trackName } = data;
    const pole = q.list[0] && Number.isFinite(q.list[0].best) ? q.list[0].best : null;
    const rows = q.list.map((e) => {
      const me = e.car === player;
      const gap = Number.isFinite(e.best) ? (pole != null && e.pos > 1 ? '+' + (e.best - pole).toFixed(3) : '') : '';
      return `<tr class="${me ? 'me' : ''}"><td class="pos">${e.pos}</td><td><span class="tc" style="--c:${e.info.team.color}"></span>${esc(e.info.name)}</td><td>${esc(e.info.team.short)}</td><td>${Number.isFinite(e.best) ? formatTime(e.best) : 'no time'}</td><td>${gap}</td><td>${e.laps}</td></tr>`;
    }).join('');
    const mine = q.list.find((e) => e.car === player);
    return `<section class="screen panel-screen full">
      <div class="row"><h2>Qualifying <span>${esc(trackName)}</span></h2><div class="grow"></div><div class="hint">You start from <b style="color:#fff;font-size:1.4rem">P${mine.pos}</b></div></div>
      <div class="panel" style="overflow:auto"><table class="results"><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Best lap</th><th>Gap</th><th>Laps</th></tr>${rows}</table></div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><button class="btn" data-act="restart">Qualify again</button><button class="btn primary" data-act="qualirace">Start race from P${mine.pos}</button></div></section>`;
  }

  screen_timetrial(data) {
    const { player, race, trackName, best, newBest } = data;
    const laps = player.rs.lapTimes.slice(2);
    return `<section class="screen panel-screen full"><h2>${esc(trackName)} <span>time trial</span></h2>
      <div class="panel"><h3>Session</h3><div class="hint">Best lap <b style="color:#fff;font-size:1.6rem">${best < Infinity ? formatTime(best) : '—'}</b> ${newBest ? '· <b style="color:#31d17a">New record!</b>' : ''}</div>
      <div class="hint" style="margin-top:.6rem">Laps: ${player.rs.lapTimes.map((t, i) => `<span style="margin-right:1rem">L${i + 1} ${formatTime(t)}${i === 0 ? ' (out)' : ''}</span>`).join('')}</div></div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><button class="btn primary" data-act="restart">Run again</button></div></section>`;
  }

  // ---- events --------------------------------------------------------------------------------------
  onClick(e) {
    const t = e.target.closest('[data-act],[data-tab],[data-track],[data-team],[data-chip],[data-toggle],[data-preset],[data-rebind],button');
    if (!t) return;
    const H = this.hooks;
    H.sfx && H.sfx('click');
    if (t.dataset.tab) {
      this.tab = t.dataset.tab;
      return this.rerender();
    }
    if (t.dataset.track) {
      this.config.trackId = t.dataset.track;
      this.config.frontWing = this.config.rearWing = null;
      this.persist();
      return this.rerender();
    }
    if (t.dataset.team != null && t.dataset.team !== '') {
      this.config.team = +t.dataset.team;
      this.persist();
      H.previewTeam && H.previewTeam(this.config.team);
      return this.rerender();
    }
    if (t.dataset.rebind) {
      this.rebinding = this.rebinding === t.dataset.rebind ? null : t.dataset.rebind;
      return this.rerender();
    }
    if (t.dataset.chip) {
      const k = t.dataset.chip, v = t.dataset.value;
      const c = this.config;
      if (k.startsWith('cn.')) {
        const n = this.cnew || (this.cnew = { team: 6, level: 0.55, rounds: 4, distance: 'standard' });
        const f = k.slice(3);
        n[f] = f === 'distance' ? v : +v;
        return this.rerender();
      }
      if (k === 'diff') c.level = +v;
      else if (k === 'compound') c.compound = v;
      else if (k === 'weather') { c.weather = v; if ((v === 'light' || v === 'heavy') && !COMPOUNDS[c.compound].wetTyre) c.compound = 'wet'; else if ((v === 'dry' || v === 'changing') && COMPOUNDS[c.compound].wetTyre) c.compound = 'medium'; }
      else if (k === 'timeOfDay') c.timeOfDay = v;
      else if (k === 'pitCalls') c.pitCalls = ['off', 'radio', 'auto'].includes(v) ? v : 'radio';
      else if (k === 'tyreWear') c.tyreWear = +v;
      else if (k === 'tc') c.assists.tc = +v;
      else if (k === 'stability') c.assists.stability = +v;
      else if (k === 'quality') this.save.settings.quality = v;
      else if (k === 'units') this.save.settings.units = v;
      else if (k === 'camera') this.save.settings.camera = v;
      else if (k === 'steerSpeed') this.save.settings.steerSpeed = +v;
      this.persist();
      H.applySettings && H.applySettings();
      return this.rerender();
    }
    if (t.dataset.toggle) {
      const k = t.dataset.toggle;
      if (k.startsWith('a.')) this.config.assists[k.slice(2)] = !this.config.assists[k.slice(2)];
      else if (k === 's.line') this.save.settings.line = !(this.save.settings.line !== false);
      else if (k.startsWith('s.')) this.save.settings[k.slice(2)] = !this.save.settings[k.slice(2)];
      else this.config[k] = !this.config[k];
      this.persist();
      H.applySettings && H.applySettings();
      return this.rerender();
    }
    if (t.dataset.cteam != null && t.dataset.cteam !== '') {
      (this.cnew || (this.cnew = { team: 6, level: 0.55, rounds: 4, distance: 'standard' })).team = +t.dataset.cteam;
      return this.rerender();
    }
    if (t.dataset.coffer != null) return H.careerNext(+t.dataset.coffer);
    if (t.dataset.buy) return H.careerBuy(t.dataset.buy);
    if (t.dataset.preset) {
      this.config.assists = { ...ASSIST_PRESETS[t.dataset.preset] };
      this.persist();
      return this.rerender();
    }
    const act = t.dataset.act;
    if (!act) return;
    const c = this.config;
    switch (act) {
      case 'quick':
        c.mode = 'race';
        this.persist();
        return H.startRace({ ...c });
      case 'setup':
        c.mode = t.dataset.mode;
        if (t.dataset.qualify != null) c.qualify = t.dataset.qualify === '1';
        this.tab = 'circuit';
        this.persist();
        return this.show('setup');
      case 'season':
        return H.openSeason();
      case 'career': return H.openCareer();
      case 'careerstart': return H.careerStart({ ...this.cnew });
      case 'careerrace': return H.careerRace(t.dataset.q === '1');
      case 'careercontinue': return H.openCareer();
      case 'careerwipe':
        if (t.dataset.confirm !== '1') {
          t.dataset.confirm = '1';
          t.textContent = 'Click again to delete career';
          return;
        }
        return H.careerAbandon();
      case 'go':
        this.persist();
        if (c.mode === 'race' && c.qualify) return H.startRace({ ...c, mode: 'qualifying', qualiTimes: null, seed: undefined });
        return H.startRace({ ...c });
      case 'qualirace': {
        const d = this.lastData;
        if (d && d.q) return H.raceFromQuali({ cfg: d.cfg, times: d.q.times, grid: d.q.list.find((e) => e.car === d.player).pos });
        return;
      }
      case 'main':
        return H.toMain();
      case 'profile':
        this.prev = this.current;
        return this.show('profile');
      case 'school':
        return this.show('school');
      case 'lesson':
        return H.startLesson(t.dataset.lesson);
      case 'controls':
        this.prev = this.current;
        return this.show('controls');
      case 'settings':
        this.prev = this.current;
        return this.show('settings');
      case 'back':
        return H.toMain();
      case 'resetkeys':
        this.save.settings.keys = {};
        this.rebinding = null;
        H.applySettings();
        return this.rerender();
      case 'resetsetup':
        c.frontWing = c.rearWing = null;
        c.brakeBias = 0.58;
        c.pressure = 0;
        this.persist();
        return this.rerender();
      case 'wipe':
        this.save.records = {};
        this.save.ghosts = {};
        this.save.season = null;
        persist(this.save);
        H.toast && H.toast('Saved records cleared');
        return;
      case 'resume': return H.resume();
      case 'photo': return H.photo();
      case 'replay': return H.replay(this.current === 'pause' ? 'pause' : 'results');
      case 'restart': return H.restart();
      case 'quit': return H.toMain(true);
      case 'pausecam': return H.cycleCamera && H.cycleCamera();
      case 'pausesettings':
        return this.show('settings', { from: 'pause' });
      case 'pause':
        return this.show('pause');
      case 'nextround': return H.nextRound();
      case 'endseason': return H.endSeason();
    }
  }

  onInput(e) {
    const t = e.target;
    const k = t.dataset && t.dataset.slider;
    if (!k) return;
    const v = +t.value;
    const c = this.config;
    if (k === 'laps') c.laps = v;
    else if (k === 'level') c.level = v / 100;
    else if (k === 'fieldSize') {
      c.fieldSize = v;
      c.playerGrid = Math.min(c.playerGrid, v);
    } else if (k === 'playerGrid') c.playerGrid = v;
    else if (k === 'frontWing') c.frontWing = v;
    else if (k === 'rearWing') c.rearWing = v;
    else if (k === 'brakeBias') c.brakeBias = v / 100;
    else if (k === 'pressure') c.pressure = v;
    else if (k === 's.padDead') {
      this.save.settings.padDead = v / 100;
      this.hooks.applySettings && this.hooks.applySettings();
    } else if (k === 's.volume') {
      this.save.settings.volume = v / 100;
      this.hooks.applySettings && this.hooks.applySettings();
    }
    this.persist();
    // update the label next to the slider without rebuilding (keeps drag alive)
    const lab = t.closest('.field').querySelector('label b');
    if (lab) {
      if (k === 'laps') lab.textContent = `${v} · about ${Math.max(1, Math.round((v * (this.hooks.tracks[c.trackId]?.length || 5000)) / 1000 * 0.5))} min`;
      else if (k === 'level') lab.textContent = v + '%';
      else if (k === 'playerGrid') lab.textContent = 'P' + v;
      else if (k === 'brakeBias') lab.textContent = v + '%';
      else if (k === 'pressure') lab.textContent = v === 0 ? 'Standard' : (v > 0 ? '+' : '') + v;
      else if (k === 's.volume' || k === 's.padDead') lab.textContent = v + '%';
      else lab.textContent = v;
    }
    if (k === 'level') {
      const d = DIFFICULTIES.reduce((a, b) => (Math.abs(b.level - c.level) < Math.abs(a.level - c.level) ? b : a));
      t.closest('.field').querySelectorAll('.chip').forEach((ch) => ch.classList.toggle('on', +ch.dataset.value === d.level));
    }
  }

  rerender() {
    const sc = this.root.querySelector('.panel-screen');
    const top = sc ? sc.scrollTop : 0;
    this.show(this.current, this.lastData);
    const n = this.root.querySelector('.panel-screen');
    if (n) n.scrollTop = top;
  }
}
