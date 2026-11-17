import { formatTime, clamp } from '../util/math.js';
import { COMPOUNDS } from '../sim/carspec.js';
const escHtml = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
import { DEFAULT_KEYS, keyLabel } from './input.js';

const $ = (sel, root = document) => root.querySelector(sel);

const REV_LEDS = 15;

/** DOM write helpers that skip no-op updates (cheaper than letting the browser diff them). */
const txt = (el, v) => {
  v = String(v);
  if (el._t !== v) {
    el._t = v;
    el.textContent = v;
  }
};
const cls = (el, v) => {
  if (el._c !== v) {
    el._c = v;
    el.className = v;
  }
};
const sty = (el, prop, v) => {
  const k = '_s' + prop;
  if (el[k] !== v) {
    el[k] = v;
    el.style[prop] = v;
  }
};

/** HUD state colours; the colour-blind palette swaps green / red for blue / orange (SPEC 9). */
const PAL = { good: '#31d17a', warn: '#ffb400', bad: '#ff2a2a', cold: 205, ok: 128, hot: 2 };
const PAL_CB = { good: '#3b9bff', warn: '#ffe14a', bad: '#ff7a00', cold: 230, ok: 195, hot: 30 };

/** Mix two #rrggbb colours (k = 0..1). */
const mixHex = (a, b, k) => {
  const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
  const ch = (sh) => Math.round(((pa >> sh) & 255) * (1 - k) + ((pb >> sh) & 255) * k);
  return '#' + ((ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).padStart(6, '0');
};

const mmss = (t) => {
  t = Math.max(0, Math.ceil(t));
  return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
};

export class HUD {
  constructor(root) {
    this.root = root;
    this.units = 'kmh';
    this.msgs = [];
    this.lastTower = 0;
    this.lastMini = 0;
    this.teleOn = false;
    this.keyNames = { pit: 'B', tyre: 'T' }; // kept in step with the player's bindings by the game
    this.teleBuf = { t: new Float32Array(240), b: new Float32Array(240), s: new Float32Array(240), v: new Float32Array(240), n: 0, last: 0, draw: 0 };
    root.innerHTML = `
      <div id="tower" class="hud-box"><div class="hd"><span>Race</span><span id="tw-lap"></span></div><div id="tw-rows"></div></div>
      <div id="topbar" class="hud-box"><div class="lap" id="tb-lap"></div><div class="clock" id="tb-clock"></div><div class="wx" id="tb-wx"></div><div class="radar" id="tb-radar" title="Weather radar: rain over the next laps"></div></div>
      <div id="timing" class="hud-box">
        <div><span class="cur" id="t-cur">0:00.000</span><span class="delta" id="t-delta"></span></div>
        <div class="dbar" id="t-dbar"><i></i><b></b></div>
        <div class="lines"><span>Last</span><span id="t-last">--:--.---</span><span>Best</span><span id="t-best">--:--.---</span><span>Fastest</span><span id="t-fast">--:--.---</span></div>
        <div class="sectors" id="t-sec"><i></i><i></i><i></i></div>
      </div>
      <div id="minimap" class="hud-box"><canvas width="380" height="260"></canvas></div>
      <div id="lights" class="hud-box hidden"><i></i><i></i><i></i><i></i><i></i></div>
      <div id="pitgame" class="hud-box hidden"><div class="pgt">Pit stop · press <kbd id="pg-key">Space</kbd> with the marker in the green</div><div class="pgw">${['FL', 'FR', 'RL', 'RR'].map((n) => `<div class="nut"><div class="trk"><i class="gd"></i><i class="pf"></i><b></b></div><span>${n}</span></div>`).join('')}</div><div class="pgr"></div></div>
      <div id="msgs"></div>
      <canvas id="livetele" class="hud-box hidden" width="440" height="150"></canvas>
      <div id="brain" class="hud-box hidden"></div>
      <div id="lesson" class="hud-box hidden"></div>
      <div id="bcast" class="hud-box hidden"></div>
      <div id="radio" class="hud-box hidden"><b>Radio</b><span id="radio-t"></span></div>
      <div id="pit" class="hud-box hidden"></div>
      <div id="dash" class="hud-box">
        <div class="revs" id="revs">${'<i></i>'.repeat(REV_LEDS)}</div>
        <div class="side">
          <div><div class="lbl"><span>ERS</span><span id="d-soc">0%</span></div><div class="bar-h" style="--c:#ffb400"><i id="d-socb"></i></div></div>
          <div class="stack"><span class="pill" id="d-drs">DRS</span><span class="pill boost" id="d-boost">BOOST</span></div>
          <div class="hint" id="d-gap"></div>
        </div>
        <div class="mid"><div class="gear" id="d-gear">N</div><div class="spd"><span id="d-spd">0</span><small id="d-unit">KM/H</small></div></div>
        <div class="side r">
          <div class="pedals"><div class="pedal" style="--c:#31d17a"><i id="p-thr"></i></div><div class="pedal" style="--c:#ff3b3b"><i id="p-brk"></i></div></div>
          <div class="hint" id="d-rpm"></div>
        </div>
      </div>
      <div id="tyres" class="hud-box">
        <svg class="dmgcar" id="dmgcar" viewBox="0 0 44 88" width="44" height="88" aria-label="Car damage">
          <path data-z="fw" d="M3 6 H41 V12 H3 Z"/>
          <path data-z="floor" d="M15 14 H29 L31 34 L33 62 L29 74 H15 L11 62 L13 34 Z"/>
          <path data-z="sideL" d="M5 34 Q4 48 9 62 L13 60 L14 34 Z"/>
          <path data-z="sideR" d="M39 34 Q40 48 35 62 L31 60 L30 34 Z"/>
          <path data-z="rw" d="M6 78 H38 V84 H6 Z"/>
          <path class="nose" d="M20 12 H24 L25 24 H19 Z"/>
        </svg>
        <div class="grid"><div class="tyre"><i></i></div><div class="tyre"><i></i></div><div class="tyre"><i></i></div><div class="tyre"><i></i></div></div>
        <div class="info"><div><span class="badge" id="ty-b">M</span><b id="ty-n">Medium</b></div><div id="ty-w">Wear 0%</div><div id="ty-t"></div><div id="ty-f">Fuel</div><div id="ty-d" class="dmg"></div></div>
      </div>
      <div id="mfd" class="hud-box hidden"><div class="mfd-h"><span id="mfd-t">Tyres & brakes</span><i id="mfd-p">1/3</i></div><div id="mfd-b"></div></div>
      <div id="gmeter" class="hud-box"><canvas width="200" height="200"></canvas></div>
      <div id="flag"></div>
      <div id="keyhint" class="hud-box"></div>
      <canvas id="confetti"></canvas>
      <div id="finish" class="hidden"></div>
      <div class="touch" id="touch"><button class="l" data-k="left">◀</button><button class="r" data-k="right">▶</button><button class="b" data-k="brake">BRK</button><button class="g" data-k="throttle">GAS</button><button class="sm s1" data-a="pause">II</button><button class="sm s2" data-a="camera">CAM</button><button class="sm s3" data-a="line">LINE</button><button class="sm s4" data-a="drs">DRS</button><button class="sm s5" data-a="boost" data-hold="1">ERS</button><button class="sm s6" data-a="pit">PIT</button></div>
    `;
    this.el = {
      twRows: $('#tw-rows'), twLap: $('#tw-lap'), tbLap: $('#tb-lap'), tbClock: $('#tb-clock'), tbWx: $('#tb-wx'), pitgame: $('#pitgame'),
      cur: $('#t-cur'), delta: $('#t-delta'), last: $('#t-last'), best: $('#t-best'), fast: $('#t-fast'), sec: $('#t-sec'),
      mini: $('#minimap canvas'), lights: $('#lights'), msgs: $('#msgs'), radio: $('#radio'), lesson: $('#lesson'), tele: $('#livetele'), brain: $('#brain'), radioT: $('#radio-t'), pit: $('#pit'),
      revs: $('#revs'), soc: $('#d-soc'), socb: $('#d-socb'), drs: $('#d-drs'), boost: $('#d-boost'), gap: $('#d-gap'),
      gear: $('#d-gear'), spd: $('#d-spd'), unit: $('#d-unit'), thr: $('#p-thr'), brk: $('#p-brk'), rpm: $('#d-rpm'),
      bcast: $('#bcast'), radar: $('#tb-radar'), dbar: $('#t-dbar'), dmgZones: Object.fromEntries([...root.querySelectorAll('#dmgcar [data-z]')].map((p) => [p.dataset.z, p])), mfd: $('#mfd'), mfdT: $('#mfd-t'), mfdP: $('#mfd-p'), mfdB: $('#mfd-b'),
      tyreBoxes: [...root.querySelectorAll('#tyres .tyre')], tyB: $('#ty-b'), tyN: $('#ty-n'), tyW: $('#ty-w'), tyT: $('#ty-t'), tyF: $('#ty-f'), tyD: $('#ty-d'),
      g: $('#gmeter canvas'), flag: $('#flag'), keyhint: $('#keyhint'), finish: $('#finish'), confetti: $('#confetti'), tower: $('#tower'), minimap: $('#minimap'), touch: $('#touch'),
    };
    this.rev = [...this.el.revs.children];
    this.rev.forEach((el, i) => el.classList.add(i < 5 ? 'g' : i < 10 ? 'r' : 'b'));
    this.rows = [];
    for (let i = 0; i < 13; i++) {
      const r = document.createElement('div');
      r.className = 'r';
      r.innerHTML = '<span class="p"></span><span class="c"></span><span class="n"></span><span class="nm"></span><span class="g"></span>';
      this.el.twRows.appendChild(r);
      this.rows.push(r);
    }
    this.lightEls = [...this.el.lights.children];
    this.mapBase = null;
  }

  setUnits(u) {
    this.units = u;
    this.el.unit.textContent = u === 'mph' ? 'MPH' : 'KM/H';
  }

  setTrack(track) {
    this.track = track;
    const c = document.createElement('canvas');
    c.width = 380;
    c.height = 260;
    const g = c.getContext('2d');
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (let i = 0; i < track.N; i++) {
      minX = Math.min(minX, track.x[i]); maxX = Math.max(maxX, track.x[i]);
      minY = Math.min(minY, track.y[i]); maxY = Math.max(maxY, track.y[i]);
    }
    const pad = 22;
    const sc = Math.min((c.width - 2 * pad) / (maxX - minX), (c.height - 2 * pad) / (maxY - minY));
    const ox = (c.width - (maxX - minX) * sc) / 2, oy = (c.height - (maxY - minY) * sc) / 2;
    this.map = { sc, ox, oy, minX, minY, h: c.height };
    const px = (x) => ox + (x - minX) * sc, py = (y) => c.height - (oy + (y - minY) * sc);
    g.lineJoin = 'round';
    g.lineCap = 'round';
    const path = () => {
      g.beginPath();
      for (let i = 0; i <= track.N; i += 2) {
        const k = i % track.N;
        if (i === 0) g.moveTo(px(track.x[k]), py(track.y[k]));
        else g.lineTo(px(track.x[k]), py(track.y[k]));
      }
      g.closePath();
    };
    g.strokeStyle = 'rgba(0,0,0,0.8)';
    g.lineWidth = 9;
    path();
    g.stroke();
    g.strokeStyle = '#8c95a3';
    g.lineWidth = 5;
    path();
    g.stroke();
    // start line
    const sx = px(track.x[0]), sy = py(track.y[0]);
    g.fillStyle = '#fff';
    g.fillRect(sx - 5, sy - 2, 10, 4);
    // DRS zones
    g.strokeStyle = '#31d17a';
    g.lineWidth = 3;
    for (const z of track.drs) {
      g.beginPath();
      let first = true;
      const a = Math.floor(z.start / track.ds), b = Math.floor(((z.end - z.start + track.length) % track.length) / track.ds);
      for (let k = 0; k <= b; k += 2) {
        const i = (a + k) % track.N;
        if (first) g.moveTo(px(track.x[i]), py(track.y[i]));
        else g.lineTo(px(track.x[i]), py(track.y[i]));
        first = false;
      }
      g.stroke();
    }
    this.mapBase = c;
    this.mapPx = px;
    this.mapPy = py;
  }

  /** Full-screen finish banner. info: {pos, total, team, time, gap, best, points, winner, penalties} */
  showFinish(info) {
    const o = (n) => n + (['th', 'st', 'nd', 'rd'][n % 100 > 10 && n % 100 < 14 ? 0 : n % 10 < 4 ? n % 10 : 0]);
    const p = info.pos;
    const [title, tone] = p === 1 ? ['Victory', 'gold'] : p <= 3 ? ['Podium', 'podium'] : p <= 10 ? ['Points finish', 'points'] : ['Chequered flag', 'plain'];
    const gap = p === 1 ? 'Winner' : info.gap != null ? `+${info.gap.toFixed(3)} s to the winner` : '';
    this.el.finish.className = 'tone-' + tone;
    this.el.finish.style.setProperty('--c', String(info.team.color).replace(/[^#0-9a-zA-Z(),. %]/g, ''));
    this.el.finish.innerHTML = `
      <div class="eyebrow">${escHtml(info.name)} · ${escHtml(info.team.name)}</div>
      <div class="big"><span class="pos">${p}</span><span class="ord">${o(p).replace(/^\d+/, '')}</span></div>
      <div class="title">${title}</div>
      <div class="facts"><div><span>Race time</span><b>${formatTime(info.time)}</b></div><div><span>Gap</span><b>${gap}</b></div><div><span>Best lap</span><b>${info.best < Infinity ? formatTime(info.best) : '—'}</b></div></div>
      ${info.penalty ? `<div class="hint">Includes pending time penalties (+${info.penalty}s) when classified</div>` : ''}
      <div class="cont" id="fin-cont"><button class="btn primary" id="fin-skip">Results ▶</button> <span>or press <kbd>Enter</kbd></span></div>`;
    this.el.finish.classList.remove('hidden');
    document.getElementById('hud').classList.add('cine');
    clearTimeout(this._finT);
    this.stopConfetti();
    if (p <= 3) this.startConfetti(p === 1 ? 260 : 150);
    this._finT = setTimeout(() => {
      const c = document.getElementById('fin-cont');
      if (c) c.classList.add('show');
    }, 600);
  }

  hideFinish() {
    this.el.finish.classList.add('hidden');
    document.getElementById('hud').classList.remove('cine');
    clearTimeout(this._finT);
    this.stopConfetti();
  }

  startConfetti(count) {
    const c = this.el.confetti;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = window.innerWidth * dpr;
    c.height = window.innerHeight * dpr;
    c.style.display = 'block';
    const g = c.getContext('2d');
    const cols = ['#ff2a2a', '#ffb400', '#f4f4f4', '#31d17a', '#3b9bff', '#b36bff'];
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * c.width, y: -Math.random() * c.height * 0.6, vx: (Math.random() - 0.5) * 160 * dpr, vy: (120 + Math.random() * 220) * dpr,
      w: (6 + Math.random() * 8) * dpr, h: (4 + Math.random() * 6) * dpr, r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 10, col: cols[Math.floor(Math.random() * cols.length)], ph: Math.random() * 6,
    }));
    let last = performance.now(), t0 = last;
    const run = (this._confettiRun = {}); // a token per run: a stale animation frame from an earlier run stops itself
    const tick = (now) => {
      if (this._confettiRun !== run) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      g.clearRect(0, 0, c.width, c.height);
      const el = (now - t0) / 1000;
      for (const q of parts) {
        q.x += (q.vx + Math.sin(el * 2 + q.ph) * 40 * dpr) * dt;
        q.y += q.vy * dt;
        q.r += q.vr * dt;
        if (q.y > c.height + 20 && el < 7) { q.y = -20; q.x = Math.random() * c.width; }
        g.save();
        g.translate(q.x, q.y);
        g.rotate(q.r);
        g.fillStyle = q.col;
        g.globalAlpha = el > 8 ? Math.max(0, 1 - (el - 8) / 2) : 1;
        g.fillRect(-q.w / 2, -q.h / 2, q.w, q.h * Math.abs(Math.cos(q.r * 2)));
        g.restore();
      }
      if (el < 10) requestAnimationFrame(tick);
      else this.stopConfetti();
    };
    requestAnimationFrame(tick);
  }

  stopConfetti() {
    this._confettiRun = null;
    const c = this.el.confetti;
    c.style.display = 'none';
    c.getContext('2d').clearRect(0, 0, c.width, c.height);
  }

  showKeyHint(ms = 9000, keys = null) {
    const k = (action) => ((keys && keys[action]) || DEFAULT_KEYS[action] || []).filter((c) => c !== 'Escape' || action === 'pause').slice(0, 1).map((c) => `<kbd>${keyLabel(c)}</kbd>`).join('');
    const pair = (a, b) => k(a) + k(b);
    this.el.keyhint.innerHTML = `<div><b>${pair('throttle', 'brake')}</b> throttle / brake &nbsp; <b>${pair('left', 'right')}</b> steer &nbsp; <b>${k('drs')}</b> DRS &nbsp; <b>${k('boost')}</b> ERS boost &nbsp; <b>${k('pit')}</b> pit &nbsp; <b>${k('camera')}</b> camera &nbsp; <b>${k('reset')}</b> reset &nbsp; <b>${k('pause')}</b> pause</div><div class="hint">Press ${k('drs')} to start the lights · hold ${k('throttle')} to build revs; the car is held until the lights go out · brake at a standstill to reverse · ${k('auto')} hands the car to the autopilot</div>`;
    this.el.keyhint.classList.remove('hidden');
    this.el.keyhint.style.opacity = 1;
    clearTimeout(this._khT);
    clearTimeout(this._khT2);
    this._khT = setTimeout(() => {
      this.el.keyhint.style.opacity = 0;
      this._khT2 = setTimeout(() => this.el.keyhint.classList.add('hidden'), 600);
    }, ms);
  }

  show(on) {
    this.root.classList.toggle('hidden', !on);
    if (on) {
      // a new session never inherits the last one's finish banner, confetti, lights or telemetry trace
      this.hideFinish();
      this.setLights(0);
      this.el.msgs.innerHTML = '';
      this.el.radio.classList.add('hidden');
      this.el.lesson.classList.add('hidden');
      this._lessonHtml = '';
      this.teleBuf.n = 0;
      this.teleBuf.last = 0;
    }
  }

  message(text, kind = '', sub = '', ttl = 3.2) {
    const el = document.createElement('div');
    el.className = 'msg ' + kind;
    el.innerHTML = text + (sub ? `<small>${sub}</small>` : '');
    this.el.msgs.prepend(el);
    while (this.el.msgs.children.length > 4) this.el.msgs.lastChild.remove();
    setTimeout(() => el.remove(), ttl * 1000);
  }

  /** Driving-school checklist: lesson = {title, goals:[{id,text,progress?}]}, done = {id: bool}, ctx for progress text. */
  setLesson(lesson, done, ctx, complete) {
    const el = this.el.lesson;
    if (!lesson) return el.classList.add('hidden');
    el.classList.remove('hidden');
    const html = `<b>${lesson.title}</b>` + lesson.goals.map((g) => `<div class="goal ${done[g.id] ? 'ok' : ''}">${done[g.id] ? '✓' : '○'} ${g.text}${!done[g.id] && g.progress ? ` <i>${g.progress(ctx)}</i>` : ''}</div>`).join('') + (complete ? '<div class="goal ok">Lesson complete: keep driving or press Esc</div>' : '');
    if (html !== this._lessonHtml) { this._lessonHtml = html; el.innerHTML = html; }
  }

  setColorblind(on) {
    this.pal = on ? PAL_CB : PAL;
  }

  /** The multi-function display (SPEC 8.2): M shows it and cycles its three pages, a fourth press hides it. */
  cycleMfd() {
    if (!this.mfdOn) { this.mfdOn = true; this.mfdPage = 0; }
    else if (this.mfdPage < 2) this.mfdPage++;
    else this.mfdOn = false;
    this.el.mfd.classList.toggle('hidden', !this.mfdOn);
    this._mfdT = 0;
  }

  updateMfd(race, p) {
    const now = performance.now();
    if (now - (this._mfdT || 0) < 250) return; // four times a second is plenty for a display you glance at
    this._mfdT = now;
    const el = this.el, rs = p.rs, comp = p.compound;
    const pages = ['Tyres & brakes', 'Strategy & fuel', 'Sectors & damage'];
    txt(el.mfdT, pages[this.mfdPage]);
    txt(el.mfdP, `${this.mfdPage + 1}/3`);
    let h = '';
    if (this.mfdPage === 0) {
      const cell = (w) => {
        const c = p.temp[w], sf = p.tempS ? p.tempS[w] : c, b = p.brakeTemp[w];
        const tone = (t) => (t < comp.tOpt - comp.tRange * 0.5 ? 'cold' : t > comp.tOpt + comp.tRange * 0.5 ? 'hot' : 'ok');
        return `<div class="mc"><b class="${tone(sf)}">${Math.round(sf)}°</b><span class="${tone(c)}">core ${Math.round(c)}°</span><span>brake ${Math.round(b / 10) * 10}°</span><span>wear ${Math.round(p.wear[w] * 100)}%</span></div>`;
      };
      h = `<div class="mgrid">${cell(0)}${cell(1)}${cell(2)}${cell(3)}</div><div class="mhint">${escHtml(comp.name || comp.id)} · window ${Math.round(comp.tOpt - comp.tRange)}-${Math.round(comp.tOpt + comp.tRange)}°</div>`;
    } else if (this.mfdPage === 1) {
      const left = race.totalLaps - rs.laps;
      if (!this._f0 || this._f0.race !== race) this._f0 = { race, fuel: p.fuel, laps: rs.laps };
      const per = rs.laps > this._f0.laps ? (this._f0.fuel - p.fuel) / (rs.laps - this._f0.laps) : null;
      const spare = per ? p.fuel / per - left : null;
      const adv = rs.advice;
      h = `<div class="mrow"><span>Fuel</span><b>${p.fuel.toFixed(1)} kg</b></div>
        <div class="mrow"><span>Target</span><b class="${spare == null ? '' : spare < 0 ? 'hot' : 'ok'}">${spare == null ? '—' : (spare >= 0 ? '+' : '') + spare.toFixed(1) + ' laps'}</b></div>
        <div class="mrow"><span>Mix / ERS</span><b>${['LEAN', 'STD', 'RICH'][p.fuelMode]} · ${['HARV', 'BAL', 'ATK'][p.ersMode]}</b></div>
        <div class="mrow"><span>Stops</span><b>${rs.stops} · ${(rs.compounds || []).map((c) => c[0].toUpperCase()).join('›')}</b></div>
        <div class="mrow"><span>Pit wall</span><b>${adv && adv.lap != null ? `box lap ${adv.lap}${adv.compound ? ' · ' + esc(adv.compound) : ''}` : 'no stop needed'}</b></div>
        <div class="mrow"><span>Power unit</span><b class="${p.engStress > 0.75 ? 'hot' : p.engStress > 0.5 ? 'warn' : 'ok'}">${Math.round((1 - (p.engStress || 0)) * 100)}% health</b></div>`;
    } else {
      const sec = (k) => (rs.sectors[k] != null ? rs.sectors[k].toFixed(3) : '—');
      const best = (k) => (rs.bestSectors && Number.isFinite(rs.bestSectors[k]) ? rs.bestSectors[k].toFixed(3) : '—');
      const dm = p.damageSummary();
      h = `<div class="mrow"><span>Sector</span><b>last · best</b></div>${[0, 1, 2].map((k) => `<div class="mrow"><span>S${k + 1}</span><b>${sec(k)} · ${best(k)}</b></div>`).join('')}
        <div class="mrow"><span>Damage</span><b class="${dm.worst > 0.4 ? 'hot' : dm.worst > 0.1 ? 'warn' : 'ok'}">${dm.worst > 0.02 ? `F ${Math.round(dm.fw * 100)} R ${Math.round(dm.rw * 100)} Fl ${Math.round(dm.floor * 100)} P ${Math.round(Math.max(dm.sideL, dm.sideR) * 100)}%` : 'none'}</b></div>
        <div class="mrow"><span>Downforce</span><b>−${Math.round(dm.aeroLoss * 100)}%</b></div>`;
    }
    if (h !== this._mfdH) { this._mfdH = h; el.mfdB.innerHTML = h; }
  }

  radio(text, ttl = 5) {
    if (this.onRadio && this.el.radioT.textContent !== text) this.onRadio(text, ttl);
    this.el.radio.classList.remove('hidden');
    this.el.radioT.textContent = text;
    clearTimeout(this._radioT);
    this._radioT = setTimeout(() => this.el.radio.classList.add('hidden'), ttl * 1000);
  }

  flag(text, color, ttl = 2, cls = '') {
    const f = this.el.flag;
    f.textContent = text;
    f.style.color = color;
    f.className = 'show ' + cls;
    clearTimeout(this._flagT);
    this._flagT = setTimeout(() => (f.className = ''), ttl * 1000);
  }

  setLights(n, out = false) {
    this.el.lights.classList.toggle('hidden', n === 0 && !out);
    this.lightEls.forEach((el, i) => el.classList.toggle('on', i < n));
    clearTimeout(this._lightT);
    if (out) this._lightT = setTimeout(() => this.el.lights.classList.add('hidden'), 700);
  }

  /** Frame update. race: Race, p: player car, pin: current input. */
  toggleTele() {
    this.teleOn = !this.teleOn;
    this.el.tele.classList.toggle('hidden', !this.teleOn);
    this.el.brain.classList.toggle('hidden', !this.teleOn);
    return this.teleOn;
  }

  /** The decision matrix of the rivals next to you (shown with the live telemetry): what they chose and how the options scored. */
  brainPanel(race, p, now) {
    if (!this.teleOn || now - (this._brainT || 0) < 250) return;
    this._brainT = now;
    const rows = [];
    for (const [label, d] of [['ahead', -1], ['behind', 1]]) {
      const c = race.cars.find((o) => o.rs.pos === p.rs.pos + d);
      const b = c && c.driver && c.driver.brain;
      if (!b) continue;
      const e = b.explain();
      const top = Object.entries(e.scores).filter(([, v]) => Number.isFinite(v)).sort((a, b2) => b2[1] - a[1]).slice(0, 3);
      const max = Math.max(1, ...top.map((t) => t[1]));
      rows.push(`<div class="bh"><b>${escHtml(c.info.code)}</b> ${label} · <em>${e.action}${e.side ? (e.side > 0 ? ' ◀' : ' ▶') : ''}</em></div>` + top.map(([k, v]) => `<div class="br ${k === e.action ? 'on' : ''}"><span>${k}</span><i style="width:${Math.round((Math.max(0, v) / max) * 100)}%"></i><u>${v.toFixed(1)}</u></div>`).join(''));
    }
    const html = rows.length ? '<div class="bt">Rival decision matrix</div>' + rows.join('') : '';
    if (html !== this._brainHtml) {
      this._brainHtml = html;
      this.el.brain.innerHTML = html;
    }
  }

  /** Live traces of the last 12 seconds: throttle, brake, steering and speed. 20 samples a second, drawn 10 times a second. */
  tele(p, now) {
    const T = this.teleBuf;
    if (now - T.last >= 50) {
      T.last = now;
      const i = T.n % 240;
      T.t[i] = p.throttle; T.b[i] = p.brake; T.s[i] = p.steer; T.v[i] = p.speed;
      T.n++;
    }
    if (!this.teleOn || now - T.draw < 100) return;
    T.draw = now;
    const cv = this.el.tele, g = cv.getContext('2d');
    const W = cv.width, H = cv.height;
    g.clearRect(0, 0, W, H);
    g.fillStyle = 'rgba(8,10,16,0.62)';
    g.fillRect(0, 0, W, H);
    const n = Math.min(T.n, 240), start = T.n - n;
    const plot = (arr, y0, h, color, lo, hi, fill) => {
      g.beginPath();
      for (let k = 0; k < n; k++) {
        const v = (arr[(start + k) % 240] - lo) / (hi - lo);
        const x = ((240 - n + k) / 239) * W, y = y0 + h - clamp(v, 0, 1) * h;
        k ? g.lineTo(x, y) : g.moveTo(x, y);
      }
      g.strokeStyle = color; g.lineWidth = 2; g.stroke();
      if (fill) { g.lineTo(W, y0 + h); g.lineTo(((240 - n) / 239) * W, y0 + h); g.fillStyle = fill; g.fill(); }
    };
    plot(T.v, 8, 62, '#e8ecf4', 0, 100); // 360 km/h
    plot(T.t, 78, 28, '#3ddc84', 0, 1, 'rgba(61,220,132,0.16)');
    plot(T.b, 78, 28, '#ff4b4b', 0, 1, 'rgba(255,75,75,0.16)');
    g.strokeStyle = 'rgba(255,255,255,0.18)'; g.lineWidth = 1;
    g.beginPath(); g.moveTo(0, 128); g.lineTo(W, 128); g.stroke();
    plot(T.s, 112, 32, '#58a6ff', -1, 1);
    g.fillStyle = 'rgba(255,255,255,0.6)'; g.font = '11px sans-serif';
    g.fillText('SPEED', 6, 18); g.fillText('THROTTLE / BRAKE', 6, 92); g.fillText('STEER', 6, 124);
  }

  update(race, p, pin, now) {
    const el = this.el;
    this.tele(p, now);
    this.brainPanel(race, p, now);
    const rs = p.rs;
    const mph = this.units === 'mph';
    const speed = p.speed * (mph ? 2.23694 : 3.6);
    txt(el.spd, Math.round(speed));
    const gear = p.gear < 0 ? 'R' : p.speed < 0.5 && p.throttle < 0.05 && p.gear === 1 ? 'N' : p.gear;
    txt(el.gear, gear);
    // rev lights
    const lo = 9500, hi = 14400;
    const frac = clamp((p.rpm - lo) / (hi - lo), 0, 1);
    const lit = Math.round(frac * REV_LEDS);
    const flash = p.rpm > 14700;
    cls(el.revs, 'revs' + (flash && Math.floor(now / 70) % 2 === 0 ? ' flash' : ''));
    if (this._lit !== lit) {
      this._lit = lit;
      for (let i = 0; i < REV_LEDS; i++) this.rev[i].classList.toggle('on', i < lit);
    }
    txt(el.soc, Math.round(p.soc * 100) + '%');
    sty(el.socb, 'width', Math.round(p.soc * 100) + '%');
    sty(el.thr, 'height', Math.round(p.throttle * 100) + '%');
    sty(el.brk, 'height', Math.round(p.brake * 100) + '%');
    txt(el.rpm, Math.round(p.rpm / 100) * 100 + ' rpm');
    cls(el.drs, 'pill' + (p.drsPos > 0.5 ? ' on' : p.drsAllowed ? ' avail' : ''));
    cls(el.boost, 'pill boost' + (pin.boost && p.soc > 0.01 ? ' on' : ''));

    // timing
    if (race.phase === 'racing' || race.phase === 'finished') {
      const t = Math.max(0, race.time - rs.lapStart);
      txt(el.cur, rs.finished ? formatTime(rs.last) : formatTime(t));
    } else txt(el.cur, '0:00.000');
    txt(el.last, formatTime(rs.last));
    txt(el.best, formatTime(rs.best));
    txt(el.fast, race.fastest.car ? `${race.fastest.car.info.code} ${formatTime(race.fastest.time)}` : '--:--.---');
    if (race.sc && race.sc.state === 'vsc' && rs.vscDelta != null) {
      // under the virtual safety car the delta is to the VSC minimum time: + (red) = too fast, keep it at or below zero
      txt(el.delta, 'VSC ' + (rs.vscDelta > 0 ? '+' : '-') + Math.abs(rs.vscDelta).toFixed(2));
      cls(el.delta, 'delta ' + (rs.vscDelta <= 0 ? 'neg' : 'pos'));
    } else if (rs.delta != null && rs.lapCpBest) {
      txt(el.delta, (rs.delta >= 0 ? '+' : '-') + Math.abs(rs.delta).toFixed(2));
      cls(el.delta, 'delta ' + (rs.delta < 0 ? 'neg' : 'pos'));
    } else txt(el.delta, '');
    // the delta bar (SPEC 4.2): centre zero, +-1 s; green to the left when ahead, red to the right when behind
    {
      const dv = race.sc && race.sc.state === 'vsc' && rs.vscDelta != null ? -rs.vscDelta : rs.delta != null && rs.lapCpBest ? rs.delta : null;
      const bar = el.dbar.firstElementChild;
      if (dv == null) sty(bar, 'width', '0%');
      else {
        const k = clamp(dv, -1, 1);
        sty(bar, 'width', Math.abs(k) * 50 + '%');
        sty(bar, 'left', (k < 0 ? 50 - Math.abs(k) * 50 : 50) + '%');
        sty(bar, 'background', k < 0 ? (this.pal || PAL).good : (this.pal || PAL).bad);
      }
    }
    if (this.mfdOn) this.updateMfd(race, p);
    // broadcast pit-stop clock (SPEC 9): a rival stationary in its box, timed live
    {
      let bc = '';
      if (race.opt.mode === 'race' && !race.isQuali) {
        let best = null;
        for (const c of race.cars) if (c !== p && c.rs.service && (!best || c.rs.pos < best.rs.pos)) best = c;
        if (best) bc = `<b>PIT STOP</b><span style="--c:${best.info.team.color}">${escHtml(best.info.code)}</span><i>${best.rs.service.t.toFixed(1)}s</i>`;
      }
      if (this._bc !== bc) {
        this._bc = bc;
        el.bcast.innerHTML = bc;
        el.bcast.classList.toggle('hidden', !bc);
      }
    }
    const secEls = el.sec.children;
    for (let k = 0; k < 3; k++) {
      const flagOn = rs.sectorFlag && rs.sectorFlag.idx === k ? rs.sectorFlag.kind : '';
      let cls_ = '';
      if (rs.sectors[k] != null) cls_ = rs.sectors[k] <= race.bestSectors[k] + 1e-6 ? 'purple' : rs.sectors[k] <= rs.bestSectors[k] + 1e-6 ? 'green' : 'yellow';
      cls(secEls[k], (k < rs.sectorIdx || (rs.sectorIdx === 0 && k === 2 && rs.sectors[2] != null && rs.laps > 0) ? cls_ : '') + (k === rs.sectorIdx ? ' cur' : ''));
    }

    // top bar
    const total = race.totalLaps;
    const lap = Math.min(total, Math.max(1, rs.laps + 1));
    const lapHtml = race.phase === 'formation' ? '<small>Formation</small>lap' : race.isQuali ? `<small>${race.chequered ? 'Final lap' : 'Time left'}</small>${race.chequered ? '' : mmss(race.qualiLeft())}` : race.opt.mode === 'timetrial' ? `<small>Lap</small>${Math.max(1, rs.laps + 1)}` : `<small>${race.opt.sprint ? 'Sprint · lap' : 'Lap'}</small>${rs.finished ? total : lap}/${total}`;
    if (this._lapHtml !== lapHtml) {
      this._lapHtml = lapHtml;
      el.tbLap.innerHTML = lapHtml;
    }
    const rt = race.t0 != null ? race.time - race.t0 : 0;
    let clockTxt = race.phase === 'grid' || race.phase === 'countdown' ? (race.opt.mode === 'timetrial' ? 'Time trial' : 'Formation') : formatTime(Math.max(0, rt), 1);
    if (race.sc && race.sc.state !== 'none') clockTxt = race.sc.state === 'vsc' ? 'VIRTUAL SC' : race.sc.state === 'ending' ? 'SC in this lap' : 'SAFETY CAR';
    else if (race.isQuali) clockTxt = rs.laps < 1 ? 'Out lap' : rs.finished ? 'Session over' : rs.laps < 2 ? 'Push lap' : 'Flying lap';
    else if (race.opt.mode === 'timetrial') clockTxt = rs.laps < 2 ? (rs.laps === 0 ? 'Out lap' : 'Push lap') : 'Flying lap';
    txt(el.tbClock, clockTxt);

    // weather
    let wx = '';
    if (race.wet > 0.12 || race.rain > 0.05) {
      wx = race.rain > 0.05 ? `Rain ${Math.round(race.rain * 100)}% · track ${race.wet > 0.6 ? 'soaked' : race.wet > 0.3 ? 'wet' : 'damp'}` : `Track ${race.wet > 0.6 ? 'soaked' : race.wet > 0.3 ? 'wet' : 'damp'} · drying`;
    } else {
      const f = race.forecast && race.forecast();
      if (f && f.rainIn < 150) wx = `Rain in ${mmss(f.rainIn)}`;
    }
    // weather radar (SPEC 9): one cell per lap for the next eight laps, from the race's own rain timeline
    const nowMs = performance.now();
    if (nowMs - (this._radarT || 0) > 1000) {
      this._radarT = nowMs;
      let radar = '';
      if (race.wx && race.wx.length && race.opt.mode === 'race' && !race.isQuali) {
        const t = race.t0 == null ? 0 : race.time - race.t0;
        const L = Number.isFinite(rs.best) ? rs.best : race.track.length / 52;
        const left = Math.max(1, race.totalLaps - rs.laps);
        const cells = [];
        for (let k = 0; k < Math.min(8, left); k++) {
          let lv = 0;
          for (const seg of race.wx) if (seg.t1 > t + k * L && seg.t0 < t + (k + 1) * L) lv = Math.max(lv, seg.level);
          cells.push(`<i class="${lv > 0.75 ? 'r3' : lv > 0.4 ? 'r2' : lv > 0.05 ? 'r1' : ''}" title="Lap ${rs.laps + 1 + k}: ${lv > 0.75 ? 'heavy rain' : lv > 0.4 ? 'rain' : lv > 0.05 ? 'light rain' : 'dry'}"></i>`);
        }
        radar = `<small>Radar</small>${cells.join('')}`;
      }
      if (this._radar !== radar) {
        this._radar = radar;
        el.radar.innerHTML = radar;
        el.radar.style.display = radar ? '' : 'none';
      }
    }
    if (this._wx !== wx) {
      this._wx = wx;
      el.tbWx.textContent = wx;
      el.tbWx.style.display = wx ? '' : 'none';
    }

    // gaps
    const ahead = p.ahead, behind = p.behind;
    const gapHtml = race.opt.mode === 'timetrial' ? '' : race.isQuali ? `P${rs.pos} of ${race.cars.length}${ahead && Number.isFinite(rs.best) ? `<br>▲ ${ahead.info.code} <b>${(p.gapAhead ?? 0).toFixed(3)}</b>` : ''}` : `${ahead ? `▲ ${ahead.info.code} <b>+${(p.gapAhead ?? 0).toFixed(1)}</b>` : 'Leading'}<br>${behind ? `▼ ${behind.info.code} <b>-${(behind.gapAhead ?? 0).toFixed(1)}</b>` : ''}`;
    if (this._gapHtml !== gapHtml) {
      this._gapHtml = gapHtml;
      el.gap.innerHTML = gapHtml;
    }

    // tyres
    const ts = p.tyreSummary();
    const comp = p.compound;
    txt(el.tyB, comp.letter);
    sty(el.tyB, 'background', comp.color);
    txt(el.tyN, comp.name);
    const adv = p.rs.advice;
    txt(el.tyW, `Wear ${Math.round(ts.wear * 100)}%` + (adv && !p.rs.pitRequested ? ` · box ${adv.thisLap ? 'now' : 'lap ' + adv.lap} (${COMPOUNDS[adv.compound].letter})` : ''));
    const bmax = Math.max(p.brakeTemp[0], p.brakeTemp[1], p.brakeTemp[2], p.brakeTemp[3]);
    txt(el.tyT, `Temp ${Math.round(ts.temp)}°C · Brakes ${Math.round(bmax / 10) * 10}°${bmax > 1000 ? ' FADE' : ''}`);
    txt(el.tyF, `Fuel ${p.fuel.toFixed(1)} kg · ${['LEAN', 'STD', 'RICH'][p.fuelMode]} · ERS ${['HARV', 'BAL', 'ATK'][p.ersMode]} · BB ${Math.round(p.spec.brakeBias * 100)}`);
    const dm = p.damageSummary();
    const dmg = dm.worst;
    const flat = Math.max(p.flat[0], p.flat[1], p.flat[2], p.flat[3]);
    txt(el.tyD, dmg > 0.05 ? `FW ${Math.round(dm.fw * 100)}% · SP ${Math.round(Math.max(dm.sideL, dm.sideR) * 100)}% · RW ${Math.round(dm.rw * 100)}% · downforce −${Math.round(dm.aeroLoss * 100)}%` : flat > 0.2 ? 'Flat spots' : p.grain && Math.max(p.grain[0], p.grain[1], p.grain[2], p.grain[3]) > 0.3 ? 'Graining: tyres too cold to push' : '');
    // the damage diagram (SPEC 4.2): each zone green (intact) -> amber -> red
    for (const z of ['fw', 'rw', 'floor', 'sideL', 'sideR']) {
      const v = clamp(dm[z] || 0, 0, 1);
      const pal = this.pal || PAL;
      const col = v < 0.5 ? mixHex(pal.good, pal.warn, v / 0.5) : mixHex(pal.warn, pal.bad, (v - 0.5) / 0.5);
      if (el.dmgZones[z] && el.dmgZones[z]._c !== col) { el.dmgZones[z]._c = col; el.dmgZones[z].style.fill = col; }
    }
    for (let w = 0; w < 4; w++) {
      const tb = el.tyreBoxes[w];
      const temp = p.tempS ? p.tempS[w] : p.temp[w]; // the skin: reacts at once to a slide or a lock-up
      const opt = comp.tOpt;
      const dt = temp - opt;
      // blue = cold, green = in window, red = overheated
      const tp = this.pal || PAL;
      sty(tb, 'background', `hsl(${dt < -comp.tRange * 0.5 ? tp.cold : dt > comp.tRange * 0.5 ? tp.hot : tp.ok}, 70%, 42%)`);
      sty(tb.firstElementChild, 'height', Math.round(clamp(p.wear[w], 0, 1) * 1000) / 10 + '%');
    }

    // pit panel
    // interactive pit stop
    const pgEl = el.pitgame;
    const pg = rs.service && rs.service.pg;
    if (pg) {
      pgEl.classList.remove('hidden');
      const nuts = pgEl.querySelectorAll('.nut');
      pg.w.forEach((w, k) => {
        const n = nuts[k];
        const m = n.querySelector('b');
        m.style.left = clamp(w.p, 0, 1) * 100 + '%';
        const c = w.res ? 'r-' + w.res : w.p >= 0 ? 'live' : '';
        if (n._c !== c) {
          n._c = c;
          n.className = 'nut ' + c;
        }
      });
      const msg = pg.done ? (pg.misses ? `${pg.misses} cross-threaded: ${pg.dur.toFixed(1)} s` : pg.goods ? `Clean stop: ${pg.dur.toFixed(1)} s` : `Perfect stop: ${pg.dur.toFixed(1)} s`) : '';
      if (pgEl._m !== msg) {
        pgEl._m = msg;
        pgEl.querySelector('.pgr').textContent = msg;
      }
    } else if (!pgEl.classList.contains('hidden')) pgEl.classList.add('hidden');

    const pitEl = el.pit;
    if (rs.service) {
      pitEl.classList.remove('hidden');
      pitEl.classList.add('service');
      const svcHtml = `<div class="big">${Number.isFinite(rs.service.dur) ? Math.max(0, rs.service.dur - rs.service.t).toFixed(1) : '…'}</div>Pit stop in progress`;
      if (pitEl._h !== svcHtml) { pitEl._h = svcHtml; pitEl.innerHTML = svcHtml; }
    } else if (rs.pitRequested && race.track.pit) {
      pitEl.classList.remove('hidden', 'service');
      const next = rs.nextCompound || '(auto)';
      const reqHtml = `<div class="big">Box, box</div>Entering pits this lap · next tyre <b>${next.toUpperCase()}</b> <span class="hint">[${this.keyNames.tyre}] to change · [${this.keyNames.pit}] cancel</span>`;
      if (pitEl._h !== reqHtml) { pitEl._h = reqHtml; pitEl.innerHTML = reqHtml; }
    } else pitEl.classList.add('hidden');

    // throttled things
    if (now - this.lastTower > 120) {
      this.lastTower = now;
      this.updateTower(race, p);
      this.drawG(p);
    }
    if (now - this.lastMini > 50) {
      this.lastMini = now;
      this.drawMap(race, p);
    }
  }

  updateTower(race, p) {
    const list = race.sorted;
    if (race.opt.mode === 'timetrial') {
      this.el.tower.classList.add('hidden');
      return;
    }
    this.el.tower.classList.remove('hidden');
    const n = list.length;
    const pos = p.rs.pos - 1;
    // choose rows: top 3 (or 5), then a window around the player
    let idx = [];
    if (n <= 13) idx = list.map((_, i) => i);
    else {
      const set = new Set([0, 1, 2, 3, 4]);
      for (let i = pos - 3; i <= pos + 3; i++) if (i >= 0 && i < n) set.add(i);
      idx = [...set].sort((a, b) => a - b).slice(0, 13);
    }
    this.el.twLap.textContent = race.isQuali ? 'Qualifying' : `${n} cars`;
    this.rows.forEach((row, k) => {
      if (k >= idx.length) {
        row.style.display = 'none';
        return;
      }
      row.style.display = '';
      const c = list[idx[k]];
      const rs = c.rs;
      row.classList.toggle('me', c === p);
      row.style.setProperty('--c', c.info.team.color);
      row.children[0].textContent = idx[k] + 1;
      row.children[2].textContent = c.info.code;
      let g = '';
      if (race.isQuali) g = Number.isFinite(rs.best) ? (idx[k] === 0 ? formatTime(rs.best) : `+${(rs.best - list[0].rs.best).toFixed(3)}`) : '--';
      else if (idx[k] === 0) g = rs.finished ? 'FIN' : race.phase === 'racing' ? `L${Math.min(race.totalLaps, rs.laps + 1)}` : '';
      else if (race.phase !== 'racing' && race.phase !== 'finished') g = '';
      else if (rs.lapsDown > 0) g = `+${rs.lapsDown}L`;
      else g = `+${(c.gapAhead ?? 0).toFixed(1)}`;
      if (rs.inPitLane || rs.service) g = '<span class="pit">PIT</span>';
      // tyre age chip (SPEC 9 broadcast graphics): laps on this set
      const age = race.isQuali ? '' : `<em class="age">${Math.max(0, rs.laps - (rs.stopLaps && rs.stopLaps.length ? rs.stopLaps[rs.stopLaps.length - 1] : 0))}</em>`;
      const rh = `${g}<span class="t" style="background:${c.compound.color}">${c.compound.letter}</span>${age}`;
      if (row._h !== rh) { // rewritten only when the gap or tyre changes
        row._h = rh;
        row.children[4].innerHTML = rh;
      }
    });
  }

  drawG(p) {
    const g = this.el.g.getContext('2d');
    const w = 200;
    g.clearRect(0, 0, w, w);
    g.fillStyle = 'rgba(13,16,21,0.8)';
    g.beginPath();
    g.arc(100, 100, 98, 0, 6.283);
    g.fill();
    g.strokeStyle = 'rgba(255,255,255,0.18)';
    g.lineWidth = 2;
    for (const r of [32, 65, 96]) {
      g.beginPath();
      g.arc(100, 100, r, 0, 6.283);
      g.stroke();
    }
    g.beginPath();
    g.moveTo(100, 6); g.lineTo(100, 194); g.moveTo(6, 100); g.lineTo(194, 100);
    g.stroke();
    // the dot shows the force you feel: braking throws you forward (up), accelerating pushes you back (down), a left turn throws you right
    const gx = clamp(p.latG / 5, -1, 1) * 96, gy = clamp(p.longG / 5, -1, 1) * 96;
    g.fillStyle = '#ff2a2a';
    g.beginPath();
    g.arc(100 + gx, 100 + gy, 9, 0, 6.283);
    g.fill();
    g.fillStyle = '#fff';
    g.font = '700 22px sans-serif';
    g.textAlign = 'center';
    g.fillText(Math.hypot(p.latG, p.longG).toFixed(1) + 'g', 100, 190);
  }

  drawMap(race, p) {
    if (!this.mapBase) return;
    const c = this.el.mini;
    const g = c.getContext('2d');
    g.clearRect(0, 0, c.width, c.height);
    g.drawImage(this.mapBase, 0, 0);
    const px = this.mapPx, py = this.mapPy;
    for (const car of race.cars) {
      if (car === p) continue;
      g.fillStyle = car.info.team.color;
      g.beginPath();
      g.arc(px(car.x), py(car.y), 4.2, 0, 6.283);
      g.fill();
      g.strokeStyle = '#000';
      g.lineWidth = 1;
      g.stroke();
    }
    if (race.ghostPos) {
      g.fillStyle = 'rgba(255,255,255,0.5)';
      g.beginPath();
      g.arc(px(race.ghostPos.x), py(race.ghostPos.y), 4.5, 0, 6.283);
      g.fill();
    }
    g.fillStyle = '#fff';
    g.strokeStyle = '#ff2a2a';
    g.lineWidth = 3;
    g.beginPath();
    g.arc(px(p.x), py(p.y), 6.5, 0, 6.283);
    g.fill();
    g.stroke();
  }
}
