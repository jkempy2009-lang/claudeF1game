import { formatTime, clamp } from '../util/math.js';

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

export class HUD {
  constructor(root) {
    this.root = root;
    this.units = 'kmh';
    this.msgs = [];
    this.lastTower = 0;
    this.lastMini = 0;
    root.innerHTML = `
      <div id="tower" class="hud-box"><div class="hd"><span>Race</span><span id="tw-lap"></span></div><div id="tw-rows"></div></div>
      <div id="topbar" class="hud-box"><div class="lap" id="tb-lap"></div><div class="clock" id="tb-clock"></div></div>
      <div id="timing" class="hud-box">
        <div><span class="cur" id="t-cur">0:00.000</span><span class="delta" id="t-delta"></span></div>
        <div class="lines"><span>Last</span><span id="t-last">--:--.---</span><span>Best</span><span id="t-best">--:--.---</span><span>Fastest</span><span id="t-fast">--:--.---</span></div>
        <div class="sectors" id="t-sec"><i></i><i></i><i></i></div>
      </div>
      <div id="minimap" class="hud-box"><canvas width="380" height="260"></canvas></div>
      <div id="lights" class="hud-box hidden"><i></i><i></i><i></i><i></i><i></i></div>
      <div id="msgs"></div>
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
      <div class="touch" id="touch"><button class="l" data-k="left">◀</button><button class="r" data-k="right">▶</button><button class="b" data-k="brake">BRK</button><button class="g" data-k="throttle">GAS</button></div>
    `;
    this.el = {
      twRows: $('#tw-rows'), twLap: $('#tw-lap'), tbLap: $('#tb-lap'), tbClock: $('#tb-clock'),
      cur: $('#t-cur'), delta: $('#t-delta'), last: $('#t-last'), best: $('#t-best'), fast: $('#t-fast'), sec: $('#t-sec'),
      mini: $('#minimap canvas'), lights: $('#lights'), msgs: $('#msgs'), radio: $('#radio'), radioT: $('#radio-t'), pit: $('#pit'),
      revs: $('#revs'), soc: $('#d-soc'), socb: $('#d-socb'), drs: $('#d-drs'), boost: $('#d-boost'), gap: $('#d-gap'),
      gear: $('#d-gear'), spd: $('#d-spd'), unit: $('#d-unit'), thr: $('#p-thr'), brk: $('#p-brk'), rpm: $('#d-rpm'),
      tyreBoxes: [...root.querySelectorAll('#tyres .tyre')], tyB: $('#ty-b'), tyN: $('#ty-n'), tyW: $('#ty-w'), tyT: $('#ty-t'), tyF: $('#ty-f'), tyD: $('#ty-d'),
      g: $('#gmeter canvas'), flag: $('#flag'), keyhint: $('#keyhint'), tower: $('#tower'), minimap: $('#minimap'), touch: $('#touch'),
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

  radio(text, ttl = 5) {
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
  update(race, p, pin, now) {
    const el = this.el;
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
    const lap = Math.min(total, Math.max(1, rs.laps + 1 - (rs.finished ? 1 : 0) + (rs.maxDist < 0 ? 0 : 0)));
    const lapHtml = race.opt.mode === 'timetrial' ? `<small>Lap</small>${Math.max(1, rs.laps + 1)}` : `<small>Lap</small>${rs.finished ? total : lap}/${total}`;
    if (this._lapHtml !== lapHtml) {
      this._lapHtml = lapHtml;
      el.tbLap.innerHTML = lapHtml;
    }
    const rt = race.t0 != null ? race.time - race.t0 : 0;
    let clockTxt = race.phase === 'grid' || race.phase === 'countdown' ? (race.opt.mode === 'timetrial' ? 'Time trial' : 'Formation') : formatTime(Math.max(0, rt), 1);
    if (race.opt.mode === 'timetrial') clockTxt = rs.laps < 2 ? (rs.laps === 0 ? 'Out lap' : 'Push lap') : 'Flying lap';
    txt(el.tbClock, clockTxt);

    // gaps
    const ahead = p.ahead, behind = p.behind;
    const gapHtml = race.opt.mode === 'timetrial' ? '' : `${ahead ? `▲ ${ahead.info.code} <b>+${(p.gapAhead ?? 0).toFixed(1)}</b>` : 'Leading'}<br>${behind ? `▼ ${behind.info.code} <b>-${(behind.gapAhead ?? 0).toFixed(1)}</b>` : ''}`;
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
    el.tyW.textContent = `Wear ${Math.round(ts.wear * 100)}%`;
    el.tyT.textContent = `Temp ${Math.round(ts.temp)}°C`;
    el.tyF.textContent = `Fuel ${p.fuel.toFixed(1)} kg`;
    const dmg = Math.max(p.damageFront || 0, p.damageRear || 0, p.damageFloor || 0);
    el.tyD.textContent = dmg > 0.05 ? `Damage ${Math.round(dmg * 100)}%` : '';
    for (let w = 0; w < 4; w++) {
      const tb = el.tyreBoxes[w];
      const temp = p.temp[w];
      const opt = comp.tOpt;
      const dt = temp - opt;
      // blue = cold, green = in window, red = overheated
      const hue = dt < -comp.tRange * 0.5 ? 205 : dt > comp.tRange * 0.5 ? 0 : 130 - Math.max(0, (Math.abs(dt) / (comp.tRange * 0.5))) * 40 * Math.sign(dt || 1) * -1 * 0 + 0;
      tb.style.background = `hsl(${dt < -comp.tRange * 0.5 ? 205 : dt > comp.tRange * 0.5 ? 2 : 128}, 70%, 42%)`;
      tb.firstElementChild.style.height = clamp(p.wear[w], 0, 1) * 100 + '%';
    }

    // pit panel
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
    this.el.twLap.textContent = `${n} cars`;
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
      if (idx[k] === 0) g = rs.finished ? 'FIN' : race.phase === 'racing' ? `L${Math.min(race.totalLaps, rs.laps + 1)}` : '';
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
