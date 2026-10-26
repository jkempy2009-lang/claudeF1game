import { formatTime, clamp } from '../util/math.js';
import { COMPOUNDS } from '../sim/carspec.js';

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

const mmss = (t) => {
  t = Math.ceil(t);
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
    this.teleBuf = { t: new Float32Array(240), b: new Float32Array(240), s: new Float32Array(240), v: new Float32Array(240), n: 0, last: 0, draw: 0 };
    root.innerHTML = `
      <div id="tower" class="hud-box"><div class="hd"><span>Race</span><span id="tw-lap"></span></div><div id="tw-rows"></div></div>
      <div id="topbar" class="hud-box"><div class="lap" id="tb-lap"></div><div class="clock" id="tb-clock"></div><div class="wx" id="tb-wx"></div></div>
      <div id="timing" class="hud-box">
        <div><span class="cur" id="t-cur">0:00.000</span><span class="delta" id="t-delta"></span></div>
        <div class="lines"><span>Last</span><span id="t-last">--:--.---</span><span>Best</span><span id="t-best">--:--.---</span><span>Fastest</span><span id="t-fast">--:--.---</span></div>
        <div class="sectors" id="t-sec"><i></i><i></i><i></i></div>
      </div>
      <div id="minimap" class="hud-box"><canvas width="380" height="260"></canvas></div>
      <div id="lights" class="hud-box hidden"><i></i><i></i><i></i><i></i><i></i></div>
      <div id="pitgame" class="hud-box hidden"><div class="pgt">Pit stop · press <kbd>Space</kbd> with the marker in the green</div><div class="pgw">${['FL', 'FR', 'RL', 'RR'].map((n) => `<div class="nut"><div class="trk"><i class="gd"></i><i class="pf"></i><b></b></div><span>${n}</span></div>`).join('')}</div><div class="pgr"></div></div>
      <div id="msgs"></div>
      <canvas id="livetele" class="hud-box hidden" width="440" height="150"></canvas>
      <div id="lesson" class="hud-box hidden"></div>
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
        <div class="grid"><div class="tyre"><i></i></div><div class="tyre"><i></i></div><div class="tyre"><i></i></div><div class="tyre"><i></i></div></div>
        <div class="info"><div><span class="badge" id="ty-b">M</span><b id="ty-n">Medium</b></div><div id="ty-w">Wear 0%</div><div id="ty-t"></div><div id="ty-f">Fuel</div><div id="ty-d" class="dmg"></div></div>
      </div>
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
      mini: $('#minimap canvas'), lights: $('#lights'), msgs: $('#msgs'), radio: $('#radio'), lesson: $('#lesson'), tele: $('#livetele'), radioT: $('#radio-t'), pit: $('#pit'),
      revs: $('#revs'), soc: $('#d-soc'), socb: $('#d-socb'), drs: $('#d-drs'), boost: $('#d-boost'), gap: $('#d-gap'),
      gear: $('#d-gear'), spd: $('#d-spd'), unit: $('#d-unit'), thr: $('#p-thr'), brk: $('#p-brk'), rpm: $('#d-rpm'),
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
    this.el.finish.style.setProperty('--c', info.team.color);
    this.el.finish.innerHTML = `
      <div class="eyebrow">${info.name} · ${info.team.name}</div>
      <div class="big"><span class="pos">${p}</span><span class="ord">${o(p).replace(/^\d+/, '')}</span></div>
      <div class="title">${title}</div>
      <div class="facts"><div><span>Race time</span><b>${formatTime(info.time)}</b></div><div><span>Gap</span><b>${gap}</b></div><div><span>Best lap</span><b>${info.best < Infinity ? formatTime(info.best) : '—'}</b></div></div>
      ${info.penalty ? `<div class="hint">Includes pending time penalties (+${info.penalty}s) when classified</div>` : ''}
      <div class="cont" id="fin-cont">Press <kbd>Enter</kbd> or click for the results</div>`;
    this.el.finish.classList.remove('hidden');
    document.getElementById('hud').classList.add('cine');
    if (p <= 3) this.startConfetti(p === 1 ? 260 : 150);
    this._finT = setTimeout(() => {
      const c = document.getElementById('fin-cont');
      if (c) c.classList.add('show');
    }, 3000);
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
    this._confetti = true;
    const tick = (now) => {
      if (!this._confetti) return;
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
    this._confetti = false;
    const c = this.el.confetti;
    c.style.display = 'none';
    c.getContext('2d').clearRect(0, 0, c.width, c.height);
  }

  showKeyHint(ms = 9000) {
    const k = (t) => `<kbd>${t}</kbd>`;
    this.el.keyhint.innerHTML = `<div><b>${k('W')}${k('S')}</b> throttle / brake &nbsp; <b>${k('A')}${k('D')}</b> steer &nbsp; <b>${k('Space')}</b> DRS &nbsp; <b>${k('Shift')}</b> ERS boost &nbsp; <b>${k('B')}</b> pit &nbsp; <b>${k('C')}</b> camera &nbsp; <b>${k('R')}</b> reset &nbsp; <b>${k('Esc')}</b> pause</div><div class="hint">Press <kbd>Space</kbd> to start the lights · hold W to build revs; the car is held until the lights go out · brake at a standstill to reverse · <kbd>G</kbd> hands the car to the autopilot</div>`;
    this.el.keyhint.classList.remove('hidden');
    this.el.keyhint.style.opacity = 1;
    clearTimeout(this._khT);
    this._khT = setTimeout(() => {
      this.el.keyhint.style.opacity = 0;
      setTimeout(() => this.el.keyhint.classList.add('hidden'), 600);
    }, ms);
  }

  show(on) {
    this.root.classList.toggle('hidden', !on);
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

  radio(text, ttl = 5) {
    if (this.onRadio && this.el.radioT.textContent !== text) this.onRadio();
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
    if (out) setTimeout(() => this.el.lights.classList.add('hidden'), 700);
  }

  /** Frame update. race: Race, p: player car, pin: current input. */
  toggleTele() {
    this.teleOn = !this.teleOn;
    this.el.tele.classList.toggle('hidden', !this.teleOn);
    return this.teleOn;
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
    if (rs.delta != null && rs.lapCpBest) {
      txt(el.delta, (rs.delta >= 0 ? '+' : '-') + Math.abs(rs.delta).toFixed(2));
      cls(el.delta, 'delta ' + (rs.delta < 0 ? 'neg' : 'pos'));
    } else txt(el.delta, '');
    const secEls = el.sec.children;
    for (let k = 0; k < 3; k++) {
      const flagOn = rs.sectorFlag && rs.sectorFlag.idx === k ? rs.sectorFlag.kind : '';
      const done = rs.sectors[k] != null && (k < rs.sectorIdx || (k === 2 && rs.sectorIdx === 0 && false));
      let cls_ = '';
      if (rs.sectors[k] != null) cls_ = rs.sectors[k] <= race.bestSectors[k] + 1e-6 ? 'purple' : rs.sectors[k] <= rs.bestSectors[k] + 1e-6 ? 'green' : 'yellow';
      cls(secEls[k], (k < rs.sectorIdx || (rs.sectorIdx === 0 && k === 2 && rs.sectors[2] != null && rs.laps > 0) ? cls_ : '') + (k === rs.sectorIdx ? ' cur' : ''));
    }

    // top bar
    const total = race.totalLaps;
    const lap = Math.min(total, Math.max(1, rs.laps + 1));
    const lapHtml = race.isQuali ? `<small>${race.chequered ? 'Final lap' : 'Time left'}</small>${race.chequered ? '' : mmss(race.qualiLeft())}` : race.opt.mode === 'timetrial' ? `<small>Lap</small>${Math.max(1, rs.laps + 1)}` : `<small>Lap</small>${rs.finished ? total : lap}/${total}`;
    if (this._lapHtml !== lapHtml) {
      this._lapHtml = lapHtml;
      el.tbLap.innerHTML = lapHtml;
    }
    const rt = race.t0 != null ? race.time - race.t0 : 0;
    let clockTxt = race.phase === 'grid' || race.phase === 'countdown' ? (race.opt.mode === 'timetrial' ? 'Time trial' : 'Formation') : formatTime(Math.max(0, rt), 1);
    if (race.sc && race.sc.state !== 'none') clockTxt = race.sc.state === 'ending' ? 'SC in this lap' : 'SAFETY CAR';
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
    el.tyB.textContent = comp.letter;
    el.tyB.style.background = comp.color;
    el.tyN.textContent = comp.name;
    const adv = p.rs.advice;
    el.tyW.textContent = `Wear ${Math.round(ts.wear * 100)}%` + (adv && !p.rs.pitRequested ? ` · box ${adv.thisLap ? 'now' : 'lap ' + adv.lap} (${COMPOUNDS[adv.compound].letter})` : '');
    const bmax = Math.max(p.brakeTemp[0], p.brakeTemp[1], p.brakeTemp[2], p.brakeTemp[3]);
    el.tyT.textContent = `Temp ${Math.round(ts.temp)}°C · Brakes ${Math.round(bmax / 10) * 10}°${bmax > 1000 ? ' FADE' : ''}`;
    el.tyF.textContent = `Fuel ${p.fuel.toFixed(1)} kg · ${['LEAN', 'STD', 'RICH'][p.fuelMode]} · ERS ${['HARV', 'BAL', 'ATK'][p.ersMode]} · BB ${Math.round(p.spec.brakeBias * 100)}`;
    const dm = p.damageSummary();
    const dmg = dm.worst;
    const flat = Math.max(p.flat[0], p.flat[1], p.flat[2], p.flat[3]);
    el.tyD.textContent = dmg > 0.05 ? `FW ${Math.round(dm.fw * 100)}% · SP ${Math.round(Math.max(dm.sideL, dm.sideR) * 100)}% · RW ${Math.round(dm.rw * 100)}% · downforce −${Math.round(dm.aeroLoss * 100)}%` : flat > 0.2 ? 'Flat spots' : '';
    for (let w = 0; w < 4; w++) {
      const tb = el.tyreBoxes[w];
      const temp = p.temp[w];
      const opt = comp.tOpt;
      const dt = temp - opt;
      // blue = cold, green = in window, red = overheated
      tb.style.background = `hsl(${dt < -comp.tRange * 0.5 ? 205 : dt > comp.tRange * 0.5 ? 2 : 128}, 70%, 42%)`;
      tb.firstElementChild.style.height = clamp(p.wear[w], 0, 1) * 100 + '%';
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
      const msg = pg.done ? (pg.misses ? `${pg.misses} cross-threaded: ${pg.dur.toFixed(1)} s` : pg.goods ? `Clean stop: ${pg.dur.toFixed(1)} s` : 'Perfect stop: 2.5 s') : '';
      if (pgEl._m !== msg) {
        pgEl._m = msg;
        pgEl.querySelector('.pgr').textContent = msg;
      }
    } else if (!pgEl.classList.contains('hidden')) pgEl.classList.add('hidden');

    const pitEl = el.pit;
    if (rs.service) {
      pitEl.classList.remove('hidden');
      pitEl.classList.add('service');
      pitEl.innerHTML = `<div class="big">${Math.max(0, rs.service.dur - rs.service.t).toFixed(1)}</div>Pit stop in progress`;
    } else if (rs.pitRequested && race.track.pit) {
      pitEl.classList.remove('hidden', 'service');
      const next = rs.nextCompound || '(auto)';
      pitEl.innerHTML = `<div class="big">Box, box</div>Entering pits this lap · next tyre <b>${next.toUpperCase()}</b> <span class="hint">[T] to change · [B] cancel</span>`;
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
      row.children[4].innerHTML = `${g}<span class="t" style="background:${c.compound.color}">${c.compound.letter}</span>`;
      row.children[3].textContent = '';
    });
    // second pass: names in column 3 as part of code column: keep simple
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
    const gx = clamp(-p.latG / 5, -1, 1) * 96, gy = clamp(-p.longG / 5, -1, 1) * 96;
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
