import { TRACK_DEFS } from '../sim/trackdefs.js';
import { TEAMS } from '../sim/teams.js';
import { DIFFICULTIES } from '../sim/race.js';
import { COMPOUNDS, COMPOUND_IDS } from '../sim/carspec.js';
import { formatTime } from '../util/math.js';

export const SAVE_KEY = 'apex-grand-prix.v1';

export const DEFAULT_SETTINGS = { quality: 'high', volume: 0.55, units: 'kmh', line: true, minimap: true, shake: true, camera: 'chase', tower: true };
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
  adaptive: false,
  frontWing: null,
  rearWing: null,
  brakeBias: 0.58,
  assists: { abs: true, tc: 2, steer: true, stability: 1, autoGear: true, pitAuto: true },
};
const ASSIST_PRESETS = {
  Beginner: { abs: true, tc: 3, steer: true, stability: 3, autoGear: true, pitAuto: true },
  Intermediate: { abs: true, tc: 2, steer: true, stability: 1, autoGear: true, pitAuto: true },
  Pro: { abs: true, tc: 1, steer: false, stability: 0, autoGear: true, pitAuto: true },
  Simulator: { abs: false, tc: 0, steer: false, stability: 0, autoGear: false, pitAuto: false },
};
const TC_NAMES = ['Off', 'Low', 'Medium', 'High'];

export function loadSave() {
  try {
    const raw = JSON.parse(localStorage.getItem(SAVE_KEY) || '{}');
    return {
      settings: { ...DEFAULT_SETTINGS, ...(raw.settings || {}) },
      config: { ...DEFAULT_CONFIG, ...(raw.config || {}), assists: { ...DEFAULT_CONFIG.assists, ...((raw.config || {}).assists || {}) } },
      records: raw.records || {},
      ghosts: raw.ghosts || {},
      season: raw.season || null,
    };
  } catch (e) {
    return { settings: { ...DEFAULT_SETTINGS }, config: { ...DEFAULT_CONFIG }, records: {}, ghosts: {}, season: null };
  }
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
    this.root.innerHTML = fn.call(this, data);
    this.afterRender(name);
  }

  afterRender(name) {
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
        <button class="btn" data-act="setup" data-mode="race">Custom race<small>Circuit, laps, difficulty, team, setup, assists</small></button>
        <button class="btn" data-act="setup" data-mode="timetrial">Time trial<small>Chase your ghost, alone on the circuit</small></button>
        <button class="btn" data-act="season">Championship<small>${s ? `Round ${Math.min(s.round + 1, TRACK_DEFS.length)} of ${TRACK_DEFS.length} in progress` : '4 rounds, points, a title to win'}</small></button>
        <div class="row"><button class="btn sm grow" data-act="controls">Controls</button><button class="btn sm grow" data-act="settings">Settings</button></div>
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
        <div class="field"><label>Starting compound</label>${this.chips('compound', COMPOUND_IDS.map((id) => ({ value: id, label: COMPOUNDS[id].name, dot: COMPOUNDS[id].color })), c.compound)}</div>
        <div class="field"><label>Tyre wear</label>${this.chips('tyreWear', [{ value: 0, label: 'Off' }, { value: 1.5, label: 'Low' }, { value: 3, label: 'Normal' }, { value: 6, label: 'High' }], c.tyreWear)}<div class="hint">Normal makes the Soft last about 5 laps and the Hard about 12. High forces a stop in a short race.</div></div>
        ${this.toggle('damage', 'Damage', 'Wings, floor and tyre punctures from contact', c.damage)}
        ${timetrial ? '' : this.toggle('collisions', 'Car-to-car collisions', 'Off lets cars pass through each other', c.collisions)}
        ${timetrial ? '' : this.toggle('mandatoryStop', 'Mandatory pit stop', 'Use two compounds or take +15 s', c.mandatoryStop)}
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
        <div class="hint">Higher front bias is stable but can lock the front tyres; lower bias turns in better and risks locking the rears. ABS covers most of it if enabled.</div></div></div>`;
  }

  tab_assists() {
    const a = this.config.assists;
    return `<div class="grid2"><div class="panel"><h3>Driver aids</h3>
      <div class="field"><label>Presets</label><div class="chips">${Object.keys(ASSIST_PRESETS).map((k) => `<button class="chip" data-preset="${k}">${k}</button>`).join('')}</div></div>
      ${this.toggle('a.abs', 'ABS', 'Prevents brake lock-ups', a.abs)}
      ${this.toggle('a.steer', 'Steering assist', 'Limits steering lock so the front tyres don\'t scrub away', a.steer)}
      ${this.toggle('a.autoGear', 'Automatic gearbox', 'Manual: Q / E or paddles', a.autoGear)}
      ${this.toggle('a.pitAuto', 'Pit lane autopilot', 'The car drives itself through the pits once you commit', a.pitAuto)}
    </div><div class="panel"><h3>Stability</h3>
      <div class="field"><label>Traction control</label>${this.chips('tc', TC_NAMES.map((n, i) => ({ value: i, label: n })), a.tc)}</div>
      <div class="field"><label>Stability control (counter-steer help)</label>${this.chips('stability', TC_NAMES.map((n, i) => ({ value: i, label: n })), a.stability)}</div>
      <div class="hint">Keyboard drivers should keep stability and traction on while learning. Gamepad and wheel users can turn them off for a more raw car.</div>
    </div></div>`;
  }

  screen_controls() {
    const k = (...a) => a.map((x) => `<kbd>${x}</kbd>`).join('');
    const rows = [
      ['Throttle', k('W', '↑')], ['Brake / reverse', k('S', '↓')], ['Steer', k('A', 'D', '←', '→')], ['DRS (in a zone, when eligible)', k('Space')], ['ERS boost (hold)', k('Shift')],
      ['Gear up / down (manual)', k('E', 'Q')], ['Pit request toggle', k('B')], ['Change pit tyre', k('T')], ['Camera', k('C')], ['Look back', k('V')],
      ['Reset to track', k('R')], ['Pause', k('Esc', 'P')], ['Racing line guide', k('L')], ['Minimap size', k('M')], ['Mute', k('N')],
    ];
    const pad = [['Steer', 'Left stick'], ['Throttle / brake', 'RT / LT'], ['DRS', 'A'], ['Boost', 'X'], ['Pit request', 'B'], ['Camera', 'Y'], ['Gears', 'LB / RB'], ['Look back', 'L3'], ['Pause', 'Start'], ['Reset', 'Back']];
    return `<section class="screen panel-screen full"><h2>Con<span>trols</span></h2>
      <div class="grid2"><div class="panel"><h3>Keyboard</h3><div class="keys">${rows.map(([n, v]) => `<div class="key"><span>${n}</span><span>${v}</span></div>`).join('')}</div></div>
      <div class="panel"><h3>Gamepad</h3><div class="keys">${pad.map(([n, v]) => `<div class="key"><span>${n}</span><span><kbd>${v}</kbd></span></div>`).join('')}</div>
      <h3 style="margin-top:1.2rem">Racecraft</h3><div class="hint">• Brake in a straight line, then trail off the pedal as you turn in.<br>• Hit the apex kerb, then use all the track on exit — but not past the white line, or you get a track-limits warning.<br>• DRS opens the rear wing for ~10-15 km/h when you are within one second of the car ahead at the detection line.<br>• ERS boost spends the battery: harvest it by braking hard and lifting.<br>• Follow closely and you lose front downforce (dirty air) but gain a slipstream on the straights.<br>• Tyres have a temperature window: scrubbing them sliding overheats them, and worn tyres lose grip fast.<br>• Press <kbd>B</kbd> to call a pit stop — new tyres, repairs, and a limiter in the lane.</div></div></div>
      <div class="footer"><button class="btn sm" data-act="back">◀ Back</button></div></section>`;
  }

  screen_settings(data = {}) {
    const s = this.save.settings;
    return `<section class="screen panel-screen full"><h2>Set<span>tings</span></h2>
      <div class="grid2"><div class="panel"><h3>Graphics</h3>
        <div class="field"><label>Quality</label>${this.chips('quality', [{ value: 'low', label: 'Low' }, { value: 'medium', label: 'Medium' }, { value: 'high', label: 'High' }], s.quality)}<div class="hint">Low: no shadows, fewer trees, lower resolution. Changes apply to the next session.</div></div>
        ${this.toggle('s.line', 'Racing line guide', 'Green: keep going. Yellow: ease off. Red: brake now (key L)', s.line !== false)}
        ${this.toggle('s.shake', 'Camera shake', 'Kerbs, speed and impacts', s.shake)}
        ${this.toggle('s.minimap', 'Show minimap', '', s.minimap)}
        ${this.toggle('s.tower', 'Show timing tower', '', s.tower)}
      </div><div class="panel"><h3>Audio &amp; units</h3>
        ${this.slider('s.volume', 'Master volume', Math.round(s.volume * 100), 0, 100, 1, Math.round(s.volume * 100) + '%')}
        <div class="field"><label>Speed units</label>${this.chips('units', [{ value: 'kmh', label: 'km/h' }, { value: 'mph', label: 'mph' }], s.units)}</div>
        <div class="field"><label>Default camera</label>${this.chips('camera', [['chase', 'Chase'], ['close', 'Low chase'], ['cockpit', 'Cockpit'], ['tcam', 'T-cam'], ['tv', 'TV']].map(([v, l]) => ({ value: v, label: l })), s.camera)}</div>
        <button class="btn sm" data-act="wipe">Clear saved records</button>
      </div></div>
      <div class="footer"><button class="btn sm" data-act="${data.from === 'pause' ? 'pause' : 'back'}">◀ Back</button></div></section>`;
  }

  screen_pause() {
    return `<section class="screen full" style="align-items:center;justify-content:center">
      <div class="menu-col" style="align-items:stretch"><div class="logo" style="font-size:2.6rem">Paused</div>
        <button class="btn primary" data-act="resume">Resume</button>
        <button class="btn" data-act="restart">Restart session</button>
        <button class="btn" data-act="pausecam">Camera: <span id="camname"></span></button>
        <button class="btn" data-act="pausesettings">Settings</button>
        <button class="btn" data-act="quit">Quit to menu</button>
        <div class="hint" style="margin-top:.8rem">Racing line guide: <kbd>L</kbd> · Camera: <kbd>C</kbd> · Reset to track: <kbd>R</kbd> · Autopilot: <kbd>G</kbd></div></div></section>`;
  }

  screen_results(data) {
    const { cls, player, race, season, trackName } = data;
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
      const table = Object.entries(season.points).sort((a, b) => b[1] - a[1]).slice(0, 10);
      seasonHtml = `<div class="panel"><h3>Championship standings after round ${season.round + 1}</h3><table class="results"><tr><th>Pos</th><th>Driver</th><th>Pts</th></tr>${table.map(([n, p], i) => `<tr class="${n === 'You' ? 'me' : ''}"><td class="pos">${i + 1}</td><td>${esc(n)}</td><td><b>${p}</b></td></tr>`).join('')}</table></div>`;
    }
    const final = season && season.round + 1 >= TRACK_DEFS.length;
    return `<section class="screen panel-screen full">
      <h2>${esc(trackName)} <span>results</span></h2>
      <div class="podium">${order.map((e) => `<div class="pod p${e.pos}" style="--c:${e.info.team.color}"><div class="hint">P${e.pos}</div><b>${esc(e.info.code)}</b><div>${esc(e.info.team.short)}</div><div class="hint">${fmt(e)}</div></div>`).join('')}</div>
      ${me ? `<div class="hint" style="text-align:center">You finished <b>P${me.pos}</b>${me.penalty ? ` (includes ${me.penalty}s of penalties)` : ''} · best lap ${me.best < Infinity ? formatTime(me.best) : '—'}</div>` : ''}
      <div class="grid2" style="grid-template-columns:${season ? '2fr 1fr' : '1fr'}"><div class="panel" style="overflow:auto"><table class="results"><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Time</th><th>Gap</th><th>Pen</th><th>Best lap</th><th>Stops</th><th>Grid</th><th>Pts</th></tr>${rows}</table></div>${seasonHtml}</div>
      <div class="footer"><button class="btn sm" data-act="quit">Main menu</button><div class="row">
        <button class="btn ${season && !final ? '' : 'primary'}" data-act="restart">Race again</button>
        ${season && !final ? '<button class="btn primary" data-act="nextround">Next round ▶</button>' : ''}
        ${final ? '<button class="btn primary" data-act="endseason">Finish season</button>' : ''}</div></div></section>`;
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
    const t = e.target.closest('[data-act],[data-tab],[data-track],[data-team],[data-chip],[data-toggle],[data-preset],button');
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
    if (t.dataset.chip) {
      const k = t.dataset.chip, v = t.dataset.value;
      const c = this.config;
      if (k === 'diff') c.level = +v;
      else if (k === 'compound') c.compound = v;
      else if (k === 'tyreWear') c.tyreWear = +v;
      else if (k === 'tc') c.assists.tc = +v;
      else if (k === 'stability') c.assists.stability = +v;
      else if (k === 'quality') this.save.settings.quality = v;
      else if (k === 'units') this.save.settings.units = v;
      else if (k === 'camera') this.save.settings.camera = v;
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
        this.tab = 'circuit';
        this.persist();
        return this.show('setup');
      case 'season':
        return H.openSeason();
      case 'go':
        this.persist();
        return H.startRace({ ...c });
      case 'main':
        return H.toMain();
      case 'controls':
        this.prev = this.current;
        return this.show('controls');
      case 'settings':
        this.prev = this.current;
        return this.show('settings');
      case 'back':
        return H.toMain();
      case 'resetsetup':
        c.frontWing = c.rearWing = null;
        c.brakeBias = 0.58;
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
    else if (k === 's.volume') {
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
      else if (k === 's.volume') lab.textContent = v + '%';
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
