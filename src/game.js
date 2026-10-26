import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Track } from './sim/track.js';
import { AIDriver } from './sim/ai.js';
import { TRACK_DEFS } from './sim/trackdefs.js';
import { Race, DT, DIFFICULTIES } from './sim/race.js';
import { TEAMS } from './sim/teams.js';
import { COMPOUNDS } from './sim/carspec.js';
import { World } from './render/world.js';
import { CarView, VIEW_OPTS } from './render/carmodel.js';
import { PitCrew } from './render/crew.js';
import { Guideline } from './render/guideline.js';
import { SchoolTracker, lessonById } from './sim/school.js';
import { PostFX } from './render/postfx.js';
import { Rain } from './render/rain.js';
import { ReplayBuffer, makeReplayCars } from './render/replay.js';
import { Effects } from './render/effects.js';
import { CameraRig, CAMERA_MODES, CAMERA_NAMES } from './render/camera.js';
import { Input, bindKey, mergeKeys } from './ui/input.js';
import { AudioEngine } from './ui/audio.js';
import { HUD } from './ui/hud.js';
import { Menu, loadSave, persist, sanitizeConfig } from './ui/menu.js';
import * as Career from './sim/career.js';
import { recordSession, ACHIEVEMENTS } from './sim/achievements.js';
import { clamp, formatTime, lerp } from './util/math.js';

/** Frees everything a session put on the GPU: geometries, materials, their textures, instancing buffers and the environment map. */
function disposeScene(scene) {
  const seen = new Set();
  const texKeys = ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'aoMap', 'emissiveMap', 'alphaMap', 'bumpMap', 'envMap', 'lightMap'];
  scene.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.isInstancedMesh) o.dispose();
    const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of mats) {
      if (seen.has(m) || (m.userData && m.userData.shared)) continue;
      seen.add(m);
      for (const k of texKeys) if (m[k] && m[k].dispose) m[k].dispose();
      if (m.uniforms) for (const u of Object.values(m.uniforms)) if (u.value && u.value.isTexture) u.value.dispose();
      m.dispose();
    }
  });
  if (scene.environment && scene.environment.dispose) scene.environment.dispose();
}

const smooth01 = (x) => { x = Math.min(1, Math.max(0, x)); return x * x * (3 - 2 * x); };

const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));

function b64FromFloats(f32) {
  const u8 = new Uint8Array(f32.buffer, f32.byteOffset, f32.byteLength);
  let s = '';
  for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
  return btoa(s);
}
function floatsFromB64(b64) {
  const s = atob(b64);
  const u8 = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) u8[i] = s.charCodeAt(i);
  return new Float32Array(u8.buffer);
}

class Game {
  constructor() {
    this.canvas = document.getElementById('gl');
    this.save = loadSave();
    this.state = 'boot';
    this.tracks = {};
    this.input = new Input();
    this.audio = new AudioEngine();
    this.lastT = performance.now();
    try {
      this.initRenderer();
    } catch (e) {
      document.getElementById('screens').innerHTML = '<section class="screen loading"><div class="logo">Apex <span>GP</span></div><div class="hint" style="max-width:34rem;text-align:center;line-height:1.5">This game needs WebGL, and your browser could not start it. Try a current Chrome, Edge, Firefox or Safari with hardware acceleration enabled.</div></section>';
      throw e;
    }
    this.canvas.addEventListener('webglcontextlost', (ev) => {
      ev.preventDefault();
      this.toast('Graphics context lost: reloading…');
      setTimeout(() => location.reload(), 1200);
    });
    this.hud = new HUD(document.getElementById('hud'));
    this.screens = document.getElementById('screens');
    this.menu = new Menu(this.screens, this.save, this.hooks());
    this.session = null;
    this.showroom = null;
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('keydown', (e) => {
      this.audio.start();
      this.audio.resume();
      // controls screen: the next key press is the new binding for the chosen action
      if (this.menu.rebinding) {
        e.preventDefault();
        const a = this.menu.rebinding;
        this.menu.rebinding = null;
        if (e.code !== 'Escape') {
          this.save.settings.keys = bindKey(this.save.settings.keys, a, e.code);
          persist(this.save);
          this.applySettings();
        }
        this.input.pressed.clear();
        this.input.down.clear();
        this.menu.rerender();
        return;
      }
      if (this.state === 'replay') {
        const r = this.session && this.session.replay;
        if (e.code === 'Space') { e.preventDefault(); this.replayAction('play'); }
        else if (e.code === 'KeyN') this.replayAction('car');
        else if (e.code === 'KeyS') this.replayAction('slow');
        else if (e.code === 'KeyF') this.replayAction('normal');
        else if (e.code === 'ArrowLeft' && r) r.t = Math.max(0, r.t - 2);
        else if (e.code === 'ArrowRight' && r) r.t = Math.min(this.session.rec.duration, r.t + 2);
        return;
      }
      if (this.state === 'paused' && e.code === 'Escape' && this.menu.current === 'settings') {
        this.input.pressed.delete('Escape'); // back to the pause menu, not out of it
        this.menu.show('pause');
        const el = document.getElementById('camname');
        if (el && this.session) el.textContent = CAMERA_NAMES[this.session.camRig.mode];
        return;
      }
      if (this.state === 'menu' && e.code === 'Escape' && this.menu.current && this.menu.current !== 'main') {
        if (this.menu.current === 'settings' && this.session) this.menu.show('pause');
        else this.toMain();
      }
      if ((this.state === 'menu' || this.state === 'results') && e.code === 'Enter') {
        const b = this.screens.querySelector('.btn.primary');
        if (b && document.activeElement === document.body) b.click();
      }
    });
    window.addEventListener('pointerdown', () => {
      this.audio.start();
      this.audio.resume();
    });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'race') this.pause();
    });
    // anything that slips through: tell the player once in a while instead of failing silently
    const report = (msg) => {
      const t = performance.now();
      if (t - (this._errT || -1e9) < 6000) return;
      this._errT = t;
      console.error(msg);
      this.toast('Something went wrong, but the game is still running (details in the console)');
    };
    window.addEventListener('error', (ev) => report(ev.message));
    window.addEventListener('unhandledrejection', (ev) => report(String(ev.reason)));
    this.setupTouch();
    this.hud.onRadio = () => this.audio.ui('radio');
    document.getElementById('hud').addEventListener('click', (e) => {
      if (e.target.closest('#finish') && this.session && this.session.fin) this.session.finConfirm = true;
    });
    this.boot();
  }

  hooks() {
    return {
      tracks: this.tracks,
      sfx: (k) => this.audio.ui(k),
      startRace: (cfg) => this.startRace(cfg),
      startLesson: (id) => this.startLesson(id),
      raceFromQuali: (qr) => this.startRace({ ...qr.cfg, mode: 'race', qualiTimes: qr.times, playerGrid: qr.grid }),
      toMain: (fromRace) => this.toMain(fromRace),
      resume: () => this.resume(),
      restart: () => this.restart(),
      applySettings: () => this.applySettings(),
      previewTeam: (i) => this.previewTeam(i),
      openSeason: () => this.openSeason(),
      replay: (from) => this.startReplay(from),
      photo: () => this.startPhoto(),
      openCareer: () => this.openCareer(),
      careerStart: (o) => this.careerStart(o),
      careerRace: (q) => this.careerRace(q),
      careerBuy: (k) => this.careerBuy(k),
      careerNext: (t) => this.careerNext(t),
      careerAbandon: () => this.careerAbandon(),
      nextRound: () => this.nextRound(),
      endSeason: () => this.endSeason(),
      cycleCamera: () => this.cycleCamera(),
      toast: (t) => this.toast(t),
    };
  }

  // ---- bootstrap ----------------------------------------------------------------------------------
  initRenderer() {
    const q = this.save.settings.quality;
    const r = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: q !== 'low', powerPreference: 'high-performance' });
    this.renderer = r;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    r.shadowMap.enabled = q !== 'low';
    r.shadowMap.type = THREE.PCFShadowMap;
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.25, 9000);
    this.post = new PostFX(r);
    this.resize();
  }

  resize() {
    const q = this.save.settings.quality;
    const cap = q === 'high' ? 2 : q === 'medium' ? 1.5 : 1;
    const pr = Math.min(window.devicePixelRatio || 1, cap) * (this.resScale || 1);
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.pointScale = (window.innerHeight * pr) / (2 * Math.tan((this.camera.fov * Math.PI) / 360));
  }

  applySettings() {
    persist(this.save);
    this.audio.setVolume(this.save.settings.volume);
    Object.assign(this.input.opts, { steerSpeed: this.save.settings.steerSpeed, padDead: this.save.settings.padDead, rumble: this.save.settings.rumble !== false });
    this.input.keys = mergeKeys(this.save.settings.keys);
    this.hud.setUnits(this.save.settings.units);
    this.hud.el.minimap.classList.toggle('hidden', !this.save.settings.minimap);
    if (this.session && this.session.guide) this.session.guide.setVisible(this.save.settings.line !== false);
    this.hud.el.tower.classList.toggle('force-hide', !this.save.settings.tower);
    const tw = this.hud.el.tower;
    tw.style.visibility = this.save.settings.tower ? '' : 'hidden';
    this.resize();
    if (this.session && this.session.camRig) this.session.camRig.shakeOn = this.save.settings.shake && !this.save.settings.calm;
    if (this.session && this.session.guide) this.session.guide.cbSafe = !!this.save.settings.cbSafe;
    VIEW_OPTS.calm = !!this.save.settings.calm;
    document.body.classList.toggle('calm', !!this.save.settings.calm);
    document.body.classList.toggle('bighud', !!this.save.settings.bigHud);
  }

  async boot() {
    this.screens.innerHTML = this.menu.screen_loading('Warming up the garage');
    await nextFrame();
    try {
      for (const def of TRACK_DEFS) {
        this.tracks[def.id] = new Track(def);
        await nextFrame();
      }
      this.buildShowroom();
      this.applySettings();
      this.toMain();
      this.renderer.setAnimationLoop(() => this.safeFrame());
    } catch (e) {
      console.error(e);
      this.screens.innerHTML = `<section class="screen loading"><div class="logo">Error</div><div class="hint" style="max-width:40rem;white-space:pre-wrap">${String(e.stack || e)}</div></section>`;
    }
  }

  toast(text) {
    const t = document.getElementById('toast');
    document.body.classList.toggle('in-menu', this.screens.childElementCount > 0);
    t.textContent = text;
    t.classList.add('show');
    clearTimeout(this._toastT);
    this._toastT = setTimeout(() => t.classList.remove('show'), 2200);
  }

  // ---- showroom (menu background) -----------------------------------------------------------------------
  buildShowroom() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#07090c');
    scene.fog = new THREE.Fog('#07090c', 18, 60);
    const pm = new THREE.PMREMGenerator(this.renderer);
    scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.9;
    const floor = new THREE.Mesh(new THREE.CircleGeometry(40, 64), new THREE.MeshStandardMaterial({ color: 0x14181f, roughness: 0.38, metalness: 0.55 }));
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);
    const ring = new THREE.Mesh(new THREE.RingGeometry(3.6, 3.75, 96), new THREE.MeshBasicMaterial({ color: 0xff2a2a }));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.01;
    scene.add(ring);
    const key = new THREE.SpotLight(0xffffff, 520, 60, 0.7, 1.0, 1.4);
    key.position.set(-9, 12, 8);
    key.target.position.set(0, 0.5, 0);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    const rim = new THREE.SpotLight(0xff4a3a, 260, 70, 0.8, 1.0, 1.4);
    rim.position.set(10, 6, -9);
    const rim2 = new THREE.SpotLight(0x4a80ff, 220, 70, 0.8, 1.0, 1.4);
    scene.add(new THREE.HemisphereLight(0x8fa0c0, 0x10131a, 0.55));
    rim2.position.set(-10, 5, -8);
    scene.add(key, key.target, rim, rim2);
    this.showroom = { scene, view: null, angle: 0, cam: new THREE.PerspectiveCamera(36, 1, 0.1, 200) };
    this.previewTeam(this.save.config.team);
  }

  previewTeam(idx) {
    if (!this.showroom) return;
    const sr = this.showroom;
    if (sr.view) {
      sr.scene.remove(sr.view.group);
      sr.view.dispose();
    }
    sr.view = new CarView(TEAMS[idx], { number: 7, isPlayer: true, code: 'YOU' }, { detail: 'high' });
    sr.view.setPose(0, 0, 0, 0);
    sr.view.group.traverse((o) => {
      if (o.isMesh) o.castShadow = true;
    });
    sr.scene.add(sr.view.group);
    sr.view.setCompound(COMPOUNDS[this.save.config.compound || 'medium']);
  }

  // ---- navigation ------------------------------------------------------------------------------------------
  toMain(fromRace = false) {
    if (this.session) this.endSession();
    this.state = 'menu';
    this.hud.show(false);
    document.getElementById('vignette').style.display = '';
    this.menu.config = { ...this.save.config, assists: { ...this.save.config.assists } };
    this.menu.show('main');
    this.previewTeam(this.save.config.team);
  }

  openSeason() {
    let s = this.save.season;
    const c = this.menu.config;
    if (!s) {
      s = Career.newSeason(4);
      this.save.season = s;
    } else if (!s.calendar) {
      // a season saved by an older version: upgrade it in place
      Object.assign(s, { ...Career.newSeason(4), ...s, calendar: Career.CHAMP_CAL.slice(), teamPoints: s.teamPoints || {}, teamOf: s.teamOf || {}, results: s.results || [] });
    }
    if (Career.seasonDone(s)) return this.seasonFinale();
    c.mode = 'race';
    c.trackId = s.calendar[Math.min(s.round, s.calendar.length - 1)];
    c.frontWing = c.rearWing = null;
    this.menu.tab = 'race';
    this.menu.show('setup', { season: true });
  }

  // ---- career ----------------------------------------------------------------------------------------------------
  openCareer() {
    const c = this.save.career;
    if (this.session) this.endSession();
    this.state = 'menu';
    this.hud.show(false);
    if (!c) return this.menu.show('career_new');
    if (Career.seasonDone(c.season)) {
      if (!c.seasonRecap) Career.endSeason(c);
      persist(this.save);
      return this.menu.show('career_end');
    }
    this.menu.show('career_hub');
  }

  careerStart(o) {
    this.save.career = Career.newCareer(o);
    this.menu.config.team = this.save.career.team;
    persist(this.save);
    this.openCareer();
  }

  careerBuy(key) {
    const c = this.save.career;
    if (!c) return;
    const r = Career.buyUpgrade(c, key);
    if (r.ok) {
      this.audio.ui('good');
      persist(this.save);
    } else this.toast(r.reason === 'budget' ? 'Not enough budget' : 'Already at maximum');
    this.menu.show('career_hub');
  }

  careerNext(teamIdx) {
    const c = this.save.career;
    if (!c) return this.toMain();
    Career.nextSeason(c, teamIdx);
    persist(this.save);
    this.openCareer();
  }

  careerAbandon() {
    this.save.career = null;
    persist(this.save);
    this.toMain();
  }

  careerRace(qualify) {
    const c = this.save.career;
    if (!c) return;
    const s = c.season;
    const trackId = s.calendar[s.round];
    const track = this.tracks[trackId];
    const base = this.menu.config;
    const cfg = {
      ...base,
      mode: qualify ? 'qualifying' : 'race',
      trackId,
      laps: Career.lapsFor(track.length, c.distance),
      level: c.level,
      fieldSize: 20,
      playerGrid: 12,
      team: c.team,
      frontWing: null,
      rearWing: null,
      mandatoryStop: false,
      adaptive: false,
      weather: Career.weatherFor(s),
      compound: Career.weatherFor(s) === 'light' || Career.weatherFor(s) === 'heavy' ? 'wet' : 'medium',
      qualiTimes: null,
      seed: undefined,
      upgrades: { ...c.upgrades },
      career: true,
    };
    this.startRace(cfg);
  }

  nextRound() {
    const s = this.save.season;
    if (!s) return this.toMain();
    persist(this.save);
    this.openSeason(); // the round counter already moved on when the race was recorded
  }

  seasonFinale() {
    const s = this.save.season;
    this.state = 'menu';
    this.hud.show(false);
    this.menu.show('season_end', { season: s });
  }

  endSeason() {
    const s = this.save.season;
    if (s) {
      const d = Career.driverStandings(s);
      const pos = d.findIndex((x) => x.name === 'You') + 1;
      const cons = Career.constructorStandings(s);
      const myTeam = TEAMS[this.save.config.team].short;
      (this.save.honours || (this.save.honours = [])).push({ pos, points: s.points.You || 0, team: myTeam, constructorPos: cons.findIndex((c) => c.team === myTeam) + 1, rounds: s.calendar.length, at: Date.now() });
      this.save.honours = this.save.honours.slice(-30);
      this.recordStats({ kind: 'championship', pos });
      this.toast(pos === 1 ? 'Champion! Season complete.' : `Season complete: P${pos} in the championship`);
    }
    this.save.season = null;
    persist(this.save);
    this.toMain();
  }

  cycleCamera() {
    if (!this.session) return;
    const n = this.session.camRig.next();
    this.save.settings.camera = n;
    persist(this.save);
    const el = document.getElementById('camname');
    if (el) el.textContent = CAMERA_NAMES[n];
    this.toast('Camera: ' + CAMERA_NAMES[n]);
  }

  // ---- session ------------------------------------------------------------------------------------------------
  startLesson(id) {
    const l = lessonById(id);
    if (!l) return;
    const base = this.menu.config;
    const track = this.tracks[l.track];
    const wet = l.weather === 'heavy' || l.weather === 'light';
    this.startRace({
      ...base,
      mode: l.mode,
      trackId: l.track,
      laps: l.laps || 99,
      level: l.level ?? 0.3,
      fieldSize: l.mode === 'race' ? l.fieldSize || 2 : 2,
      playerGrid: 2,
      tyreWear: l.tyreWear ?? 2,
      compound: wet ? 'wet' : l.compound || 'medium',
      weather: l.weather || 'dry',
      timeOfDay: 'day',
      mandatoryStop: false,
      qualify: false,
      qualiTimes: null,
      damage: false,
      collisions: true,
      lesson: l.id,
      assists: { ...base.assists, abs: true, stability: Math.max(1, base.assists.stability), pitAuto: true, pitGame: true },
    });
  }

  async startRace(cfg) {
    this.audio.start();
    this.audio.resume();
    cfg = { ...cfg, ...sanitizeConfig(cfg) };
    this.lastConfig = cfg;
    if (this.session) this.endSession();
    this.state = 'loading';
    this.screens.innerHTML = this.menu.screen_loading('Building ' + TRACK_DEFS.find((d) => d.id === cfg.trackId).name);
    this.hud.show(false);
    await nextFrame();
    try {
      await this.buildSession(cfg);
    } catch (e) {
      console.error(e);
      this.screens.innerHTML = `<section class="screen loading"><div class="logo">Error</div><div class="hint" style="max-width:44rem;white-space:pre-wrap">${String(e.stack || e)}</div><button class="btn" data-act="quit">Back</button></section>`;
    }
  }

  async buildSession(cfg) {
    const track = this.tracks[cfg.trackId];
    const race = new Race(track, {
      mode: cfg.mode,
      laps: cfg.laps,
      level: cfg.level,
      adaptive: cfg.adaptive,
      fieldSize: cfg.fieldSize,
      playerTeam: cfg.team,
      playerGrid: Math.min(cfg.playerGrid, cfg.fieldSize),
      collisions: cfg.collisions,
      damage: cfg.damage,
      tyreWear: cfg.tyreWear,
      mandatoryStop: cfg.mandatoryStop,
      pitCalls: cfg.pitCalls,
      compound: cfg.compound,
      setup: { frontWing: cfg.frontWing, rearWing: cfg.rearWing, brakeBias: cfg.brakeBias, pressure: cfg.pressure },
      assists: { ...cfg.assists, stability: cfg.assists.stability, tc: cfg.assists.tc, steer: cfg.assists.steer },
      seed: cfg.seed ?? ((Math.random() * 1e6) | 0),
      qualiTimes: cfg.mode === 'race' ? cfg.qualiTimes || null : null,
      upgrades: cfg.upgrades || null,
      weather: cfg.weather || 'dry',
      equalCars: cfg.career ? false : cfg.equalCars !== false,
    });
    await nextFrame();
    const quality = this.save.settings.quality;
    const profile = race.getProfile(race.player.spec, `${race.player.info.team.id}:${cfg.compound}`);
    const world = new World(track, { quality, profile });
    await nextFrame();
    const scene = new THREE.Scene();
    scene.add(world.group);
    const th = track.theme;
    scene.fog = new THREE.FogExp2(new THREE.Color(th.fog), 1.1 / th.fogFar);
    scene.background = new THREE.Color(th.fog);
    // image-based lighting from the sky
    const pm = new THREE.PMREMGenerator(this.renderer);
    const envScene = new THREE.Scene();
    const skyClone = world.sky.clone();
    envScene.add(skyClone);
    scene.environment = pm.fromScene(envScene, 0.02).texture;
    scene.environmentIntensity = 0.75;
    pm.dispose();

    const views = new Map();
    const detail = quality === 'low' ? 'low' : 'high';
    for (const car of race.cars) {
      const view = new CarView(car.info.team, car.info, { detail });
      view.setCompound(car.compound);
      scene.add(view.group);
      views.set(car, view);
    }
    // the player's headlights: two spots on the nose, switched on as the light fades (the light count stays constant, so no shader recompiles)
    const headlights = [];
    if (cfg.timeOfDay !== 'day') {
      const pv = views.get(race.player);
      for (const z of [-0.32, 0.32]) {
        const sl = new THREE.SpotLight(0xfff0d0, 0, 110, 0.34, 0.65, 1.4);
        sl.position.set(2.6, 0.3, z);
        sl.target.position.set(40, -0.5, z * 1.6);
        pv.model.add(sl, sl.target);
        headlights.push(sl);
      }
    }
    const effects = new Effects(scene);
    const rain = new Rain();
    scene.add(rain.mesh);
    const guide = new Guideline(track, profile);
    scene.add(guide.mesh);
    guide.setVisible(this.save.settings.line !== false);
    const camera = this.camera;
    const camRig = new CameraRig(camera);
    camRig.setMode(this.save.settings.camera || 'chase');
    camRig.shakeOn = this.save.settings.shake && !this.save.settings.calm;
    guide.cbSafe = !!this.save.settings.cbSafe;
    let ghostView = null;
    if (cfg.mode === 'timetrial') {
      const g = this.save.ghosts[track.id];
      if (g) race.ghostBest = { time: g.time, frames: floatsFromB64(g.data), track: track.id };
      ghostView = new CarView(TEAMS[cfg.team], { number: 0, isPlayer: false, code: 'GST' }, { ghost: true, detail: 'low' });
      ghostView.group.visible = false;
      scene.add(ghostView.group);
    }
    this.perf = null;
    this.session = {
      cfg: { ...cfg, seed: race.opt.seed }, track, race, world, scene, views, effects, rain, headlights, camRig, ghostView, guide,
      acc: 0, alpha: 0, intro: 4.2, introT: 0, paused: false, finishedShown: false, radioT: 0, fast: false,
      player: race.player, pin: null, sunDir: world.sunDir, stopTimer: 0, lastEventCar: null, seasonRound: this.save.season ? this.save.season.round : null,
      useSeason: cfg.__season,
      rec: new ReplayBuffer(race.cars.length, 30, 30), replayCars: makeReplayCars(race.cars),
      school: cfg.lesson && lessonById(cfg.lesson) ? new SchoolTracker(lessonById(cfg.lesson)) : null,
    };
    this.hud.setTrack(track);
    if (!this.session.school) this.hud.setLesson(null);
    this.hud.setUnits(this.save.settings.units);
    this.hud.show(true);
    this.applySettings();
    this.screens.innerHTML = '';
    this.state = 'race';
    document.getElementById('touch') && this.updateTouchVisibility();
    this.hud.message(cfg.mode === 'qualifying' ? 'Qualifying' : cfg.mode === 'timetrial' ? 'Time trial' : `${track.name}`, '', cfg.mode === 'qualifying' ? '3 minutes · best lap sets your grid slot · all 20 cars on track' : cfg.mode === 'timetrial' ? 'Set your best lap — your ghost follows' : `${cfg.laps} laps · P${race.player.info.gridPos} on the grid${cfg.qualiTimes ? ' (qualified)' : ''}`, 4);
    this.hud.showKeyHint(10000, this.input.keys);
    if (cfg.mode === 'race') this.hud.radio('Welcome to ' + track.name + '. Lights out when you are ready — good luck.', 6);
  }

  endSession() {
    const s = this.session;
    if (!s) return;
    disposeScene(s.scene);
    if (s.rain) s.rain.dispose();
    if (s.rec) s.rec.data = null;
    if (this._replayUI) this._replayUI.classList.add('hidden');
    if (this._photoUI) this._photoUI.classList.add('hidden');
    this.renderer.renderLists.dispose();
    this.session = null;
    this.audio.update({ rpm: 0, throttle: 0, speed: 0, slipVis: [0, 0, 0, 0], kerbShake: 0, gear: 1 }, [], { pos: new THREE.Vector3(), right: new THREE.Vector3(1, 0, 0), vel: new THREE.Vector3() }, 0.016, true);
  }

  toggleAutopilot() {
    const s = this.session;
    if (!s || s.race.opt.mode === 'timetrial' && false) return;
    if (!s.pilot) {
      const prof = s.race.getProfile(s.player.spec, 'pilot');
      s.pilot = new AIDriver({ car: s.player, track: s.track, profile: prof, level: Math.max(0.6, s.cfg.level), seed: 4242 });
      s.pilot.goTime = 0;
    }
    s.auto = !s.auto;
    s.pilot.offset = 0;
    this.toast(s.auto ? 'Autopilot on (G to take over)' : 'You have control');
  }

  /** Test helper: fast-forward until pred() is true (or maxSec simulated seconds pass). */
  debugUntil(pred, maxSec = 300) {
    const s = this.session;
    if (!s) return false;
    if (!s.pilot) this.toggleAutopilot();
    s.auto = true;
    const { race } = s;
    const pin = { throttle: 0, brake: 0, steer: 0, boost: false, aiDriven: true };
    if (race.phase === 'grid') race.start();
    for (let i = 0; i < maxSec / DT; i++) {
      if (race.phase === 'racing') {
        const ai = s.pilot.update(DT, race);
        pin.throttle = ai.throttle; pin.brake = ai.brake; pin.steer = ai.steer; pin.boost = ai.boost;
        pin.drsPress = ai.drs && !s.player.rs.drsLatch;
      } else { pin.throttle = 0; pin.brake = 1; pin.steer = 0; pin.drsPress = false; }
      race.step(DT, pin);
      if (pred()) break;
    }
    s.introT = 99;
    return pred();
  }

  /** Test helper: fast-forward the session with the autopilot driving. */
  debugSkip(sec) {
    const s = this.session;
    if (!s) return;
    if (!s.pilot) this.toggleAutopilot();
    s.auto = true;
    const { race } = s;
    const pin = { throttle: 0, brake: 0, steer: 0, boost: false, aiDriven: true };
    if (race.phase === 'grid') race.start();
    const n = Math.round(sec / DT);
    for (let i = 0; i < n; i++) {
      if (race.phase === 'racing') {
        const ai = s.pilot.update(DT, race);
        pin.throttle = ai.throttle; pin.brake = ai.brake; pin.steer = ai.steer; pin.boost = ai.boost;
        pin.drsPress = ai.drs && !s.player.rs.drsLatch;
      } else { pin.throttle = 0; pin.brake = 1; pin.steer = 0; pin.drsPress = false; }
      race.step(DT, pin);
    }
    race.events.length = 0;
    s.introT = 99;
  }

  pause() {
    const s = this.session;
    if (!s || this.state !== 'race') return;
    this.state = 'paused';
    s.paused = true;
    this.menu.show('pause');
    const el = document.getElementById('camname');
    if (el) el.textContent = CAMERA_NAMES[s.camRig.mode];
  }

  resume() {
    if (!this.session) return;
    this.screens.innerHTML = '';
    this.state = 'race';
    this.session.paused = false;
    this.lastT = performance.now();
  }

  restart() {
    if (this.lastConfig) this.startRace(this.lastConfig);
  }

  // ---- touch (basic) ----------------------------------------------------------------------------------------------
  setupTouch() {
    const touch = document.getElementById('touch');
    if (!touch) return;
    const set = (k, v) => (this.input.touch[k] = v);
    const inp = this.input;
    const press = (action, hold) => {
      const code = inp.keys[action] && inp.keys[action][0];
      if (!code) return;
      inp.pressed.add(code);
      if (hold) inp.down.add(code);
    };
    touch.querySelectorAll('button').forEach((b) => {
      const k = b.dataset.k, a = b.dataset.a;
      if (a) {
        // one-shot action buttons behave like the matching key; ERS boost is held
        b.addEventListener('pointerdown', (e) => { e.preventDefault(); inp.touchMode = true; press(a, !!b.dataset.hold); });
        const rel = () => { if (b.dataset.hold) { const code = inp.keys[a] && inp.keys[a][0]; if (code) inp.down.delete(code); } };
        b.addEventListener('pointerup', rel);
        b.addEventListener('pointercancel', rel);
        b.addEventListener('pointerleave', rel);
        return;
      }
      b.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        inp.touchMode = true;
        set(k, true);
        // on the grid the first tap on the pedal starts the lights
        const rc = this.session && this.session.race;
        if (rc && rc.phase === 'grid' && k === 'throttle') press('drs');
      });
      const up = () => set(k, false);
      b.addEventListener('pointerup', up);
      b.addEventListener('pointercancel', up);
      b.addEventListener('pointerleave', up);
    });
    window.addEventListener('touchstart', () => { this.input.touchMode = true; this.updateTouchVisibility(); }, { passive: true, once: true });
  }
  updateTouchVisibility() {
    const touch = document.getElementById('touch');
    if (touch) touch.classList.toggle('show', this.input.touchMode && this.state === 'race');
  }

  // ---- frame loop ---------------------------------------------------------------------------------------------------
  /**
   * Frame-rate watchdog: when the game cannot hold about 40 fps for several seconds it lowers the render resolution in
   * steps, then drops shadows and motion blur, and tells the player once (Settings: Automatic quality).
   */
  watchPerf(realDt) {
    if (this.save.settings.autoQuality === false || realDt > 0.5) return; // ignore pauses / tab switches
    const p = this.perf || (this.perf = { acc: 0, n: 0, steps: 0, cool: 0 });
    p.acc += realDt;
    p.n++;
    if (p.acc < 4) return;
    const fps = p.n / p.acc;
    p.acc = 0;
    p.n = 0;
    if (p.cool > 0) {
      p.cool--;
      return;
    }
    if (fps >= 40 || p.steps >= 4) return;
    p.steps++;
    p.cool = 1;
    if (p.steps <= 3) this.resScale = [1, 0.85, 0.7, 0.55][p.steps];
    else {
      this.renderer.shadowMap.enabled = false;
      this.save.settings.blur = false;
      this.save.settings.bloom = false;
    }
    this.resize();
    this.toast(p.steps <= 3 ? `Frame rate was ${fps.toFixed(0)} fps: lowered the render resolution (Settings > Automatic quality)` : 'Frame rate is still low: shadows and motion blur turned off');
  }

  /** One frame, guarded: a bug in a single frame must not freeze the game; repeated failures show a recovery screen. */
  safeFrame() {
    try {
      this.frame();
      this.frameErrors = 0;
    } catch (e) {
      this.frameErrors = (this.frameErrors || 0) + 1;
      console.error(e);
      if (this.frameErrors === 5) this.fatal(e);
    }
  }

  fatal(e) {
    this.state = 'menu';
    this.hud.show(false);
    this.screens.innerHTML = `<section class="screen loading"><div class="logo">Apex <span>GP</span></div><div class="hint" style="max-width:40rem;text-align:center;line-height:1.5">Something went wrong in the game loop and the session was stopped. Your settings and records are safe.<br><small style="opacity:.6">${String((e && e.message) || e).replace(/[<>&]/g, '')}</small></div><button class="btn primary" data-act="quit">Back to menu</button></section>`;
  }

  frame() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastT) / 1000);
    if (this.state === 'race') this.watchPerf((now - this.lastT) / 1000);
    this.lastT = now;
    const r = this.renderer;
    if (this.state === 'menu' || this.state === 'loading' || (this.state === 'paused' && !this.session)) {
      this.renderShowroom(dt);
      return;
    }
    const s = this.session;
    if (!s) return;
    if (this.state === 'paused') {
      // keep rendering the frozen world (camera still)
      const pp = this.input.poll(dt, 0);
      if (pp.pause) return this.resume();
      this.audio.update(s.player, [], this.listener(), dt, true);
      this.post.render(s.scene, this.camera, 0, this.bloomFor(s));
      return;
    }
    if (this.state === 'replay') {
      this.runReplay(s, dt);
      return;
    }
    if (this.state === 'photo') {
      this.runPhoto(s, dt);
      return;
    }
    if (this.state === 'race') this.runSession(s, dt);
    this.post.render(s.scene, this.camera, this.speedBlur(s), this.bloomFor(s));
  }

  /** Motion blur strength 0..1: grows exponentially with speed, a little more with DRS / ERS boost. */
  /** Bloom strength: a whisper by day, a strong glow around lights at dusk and at night. */
  bloomFor(s) {
    const set = this.save.settings;
    if (set.bloom === false || set.quality === 'low') return 0;
    return clamp(0.04 + 0.8 * (s.nightK || 0) + 0.2 * (s.duskK || 0), 0, 0.9);
  }

  speedBlur(s) {
    const set = this.save.settings;
    if (!set.blur || set.calm || set.quality === 'low' || s.camRig.mode === 'tv' || s.paused) return 0;
    const p = s.player;
    const x = clamp((p.speed * 3.6 - 140) / 200, 0, 1);
    let k = (Math.exp(3 * x) - 1) / (Math.exp(3) - 1);
    if (p.drsPos > 0.5) k += 0.1;
    if (p.boosting) k += 0.08;
    return clamp(k, 0, 1) * (s.camRig.mode === 'cockpit' ? 1.15 : 1);
  }

  renderShowroom(dt) {
    const sr = this.showroom;
    if (!sr) return;
    sr.angle += dt * 0.28;
    const c = sr.cam;
    c.aspect = window.innerWidth / window.innerHeight;
    // frame the car to the right on wide screens
    const wide = c.aspect > 1.2;
    c.setViewOffset && wide ? c.setViewOffset(window.innerWidth, window.innerHeight, -window.innerWidth * 0.17, 0, window.innerWidth, window.innerHeight) : c.clearViewOffset();
    c.updateProjectionMatrix();
    const R = 11.5;
    c.position.set(Math.cos(sr.angle) * R, 2.6 + Math.sin(sr.angle * 0.7) * 0.6, Math.sin(sr.angle) * R);
    c.lookAt(0, 0.55, 0);
    this.renderer.render(sr.scene, c);
  }

  listener() {
    const cam = this.camera;
    const L = this._listener || (this._listener = { pos: cam.position, right: new THREE.Vector3(), vel: new THREE.Vector3() });
    L.pos = cam.position;
    L.right.set(1, 0, 0).applyQuaternion(cam.quaternion);
    return L;
  }

  runSession(s, dt) {
    const { race, player, views, camRig, effects, world } = s;
    const input = this.input;
    const pin = input.poll(dt, player.speed);
    if (pin.pause) return this.pause();
    if (pin.camera && !s.fin) {
      this.cycleCamera();
      s.introCancelled = true;
      camRig.init = false;
    }
    if (pin.mute) {
      this.audio.setEnabled(!this.audio.enabled);
      this.toast(this.audio.enabled ? 'Sound on' : 'Sound off');
    }
    if (pin.map) this.hud.el.minimap.classList.toggle('hidden');
    if (pin.tele) this.toast('Live telemetry ' + (this.hud.toggleTele() ? 'on' : 'off'));
    if (pin.line) {
      this.save.settings.line = !(this.save.settings.line !== false);
      s.guide.setVisible(this.save.settings.line);
      persist(this.save);
      this.toast('Racing line guide ' + (this.save.settings.line ? 'on' : 'off'));
    }
    camRig.lookBack = pin.lookBack;
    this.input.rumble(player, camRig.impact, dt);
    if (s.fin) {
      s.fin.t += dt;
      if (((pin.confirm || s.finConfirm) && s.fin.t > 1.5) || s.fin.t > 40) {
        if (!s.skipToResults) {
          s.skipToResults = true;
          this.hud.hideFinish();
          this.hud.message('Finishing the classification…', '', 'Waiting for the rest of the field', 3);
        }
      }
    }
    if (pin.autoToggle) this.toggleAutopilot();
    if (s.auto && (race.phase === 'racing' || (s.fin && race.phase === 'finished'))) {
      const ai = s.pilot.update(DT, race);
      pin.throttle = ai.throttle;
      pin.brake = ai.brake;
      pin.steer = ai.steer;
      pin.boost = ai.boost;
      pin.drsPress = ai.drs && !player.rs.drsLatch;
      pin.aiDriven = true;
      if (player.rs.pilot && player.rs.pilot.pitState !== 'none') s.pilot.pitState = 'none';
      s.pilot.wantsPit = player.rs.pitRequested;
    }

    // intro orbit, then lights
    if (race.phase === 'grid') {
      s.introT += dt;
      if (s.introT > s.intro || pin.drsPress || input.isDown('pit')) {
        race.start();
        camRig.init = false;
      }
    }
    if (pin.reset && (race.phase === 'racing' || race.phase === 'countdown')) {
      race.resetToTrack(player, race.opt.mode === 'race' ? 0 : 0);
      if (race.phase === 'racing') this.hud.message('Car recovered', '', 'Back on the racing line', 2);
    }

    // fixed-step physics
    const ff = !!s.skipToResults && race.phase !== 'finished';
    const frameSteps = ff ? 40 : 1;
    let n = 0;
    s.acc += ff ? DT * 300 : dt; // fast-forward: about 1.2 s of racing per frame
    const edges = { gearUp: pin.gearUp, gearDown: pin.gearDown, drsPress: pin.drsPress, pitToggle: pin.pitToggle, tyreCycle: pin.tyreCycle, ersCycle: pin.ersCycle, fuelCycle: pin.fuelCycle, bbDelta: pin.bbDelta };
    const stepPin = { throttle: pin.throttle, brake: pin.brake, steer: pin.steer, boost: pin.boost, aiDriven: !!pin.aiDriven, ...edges };
    let lim = ff ? 300 : 14;
    while (s.acc >= DT && n < lim) {
      race.step(DT, stepPin);
      stepPin.gearUp = stepPin.gearDown = stepPin.drsPress = stepPin.pitToggle = stepPin.tyreCycle = stepPin.ersCycle = stepPin.fuelCycle = false;
      stepPin.bbDelta = 0;
      s.acc -= DT;
      n++;
    }
    if (s.acc > DT * 14) s.acc = 0;
    s.alpha = s.acc / DT;
    if (ff && race.phase !== 'finished') s.acc = 0;

    this.processEvents(s);
    if (race.phase !== 'grid' && race.phase !== 'countdown') s.rec.tick(dt, race.cars, race, s.track);

    this.updateSafetyCarView(s, dt);
    // views
    const camPos = this.camera.position;
    let nearest = null;
    for (const car of race.cars) {
      const v = views.get(car);
      v.update(car, s.alpha, dt);
      const dx = car.x - camPos.x, dy = -car.y - camPos.z;
      const near = dx * dx + dy * dy < 160 * 160;
      v.group.visible = near || car === player || (dx * dx + dy * dy < 1200 * 1200);
      v.setLod(!near && car !== player);
      v.setShadow(near && this.save.settings.quality !== 'low');
      if (car !== player && near) effects.car(car, v, dt, camPos, true);
    }
    effects.car(player, views.get(player), dt, camPos, true);
    // pit crews appear around any car being serviced
    s.crews = s.crews || new Map();
    for (const car of race.cars) {
      const sv = car.rs.service;
      let crew = s.crews.get(car);
      if (sv && !crew) {
        crew = new PitCrew(car.info.team);
        s.scene.add(crew.group);
        s.crews.set(car, crew);
      } else if (!sv && crew) {
        s.scene.remove(crew.group);
        s.crews.delete(car);
        crew = null;
      }
      if (crew) {
        const g = views.get(car).group;
        crew.group.position.copy(g.position);
        crew.group.rotation.y = g.rotation.y;
        crew.update(performance.now() / 1000, sv.t / sv.dur);
      }
    }
    effects.update(dt, this.pointScale);
    s.guide.setVisible(this.save.settings.line !== false && race.phase !== 'grid' && !player.rs.inPitLane && !s.fin);
    s.guide.update(player);
    // ghost
    if (s.ghostView) {
      const pose = race.phase === 'racing' ? race.ghostPose(race.time - player.rs.lapStart) : null;
      if (pose && player.rs.laps >= 1) {
        s.ghostView.group.visible = true;
        s.ghostView.setPose(pose.x, pose.y, pose.theta, this.track ? 0 : 0, pose.steer);
        const i = s.track.idx(0);
        const pr = s.track.project(pose.x, pose.y, -1, {});
        s.ghostView.group.position.y = s.track.at(s.track.z, pr.s);
        race.ghostPos = pose;
      } else {
        s.ghostView.group.visible = false;
        race.ghostPos = null;
      }
    }

    // camera
    const orbitIntro = race.phase === 'grid' && s.introT < s.intro && camRig.mode === 'chase' && !s.introCancelled;
    if (orbitIntro) {
      const a = -0.9 + s.introT * 0.5;
      const pv = views.get(player).group.position;
      this.camera.position.set(pv.x + Math.cos(a) * 9 + 0, pv.y + 2.4, pv.z + Math.sin(a) * 9);
      this.camera.lookAt(pv.x, pv.y + 0.6, pv.z);
      this.camera.fov = 48;
      this.camera.updateProjectionMatrix();
    } else {
      camRig.update(dt, views.get(player), player, s.track);
      if (!camRig.shakeOn) camRig.impact = 0;
    }
    // time of day (midday -> dusk over the race) and weather
    const raceLen = race.totalLaps * s.track.length;
    const prog = race.opt.mode === 'race' && s.cfg.timeOfDay !== 'day' ? clamp((race.sorted[0] ? race.sorted[0].rs.maxDist : 0) / raceLen, 0, 1) : 0;
    const nightRace = s.cfg.timeOfDay === 'night';
    const dusk = nightRace ? 0.9 : 0.88 * Math.pow(prog, 1.1);
    const night = nightRace ? 1 : 0.55 * smooth01((prog - 0.72) / 0.28);
    s.nightK = night;
    s.duskK = dusk;
    const atmo = world.setAtmosphere({ dusk, wet: race.wet, rain: race.rain, night });
    s.scene.fog.color.copy(atmo.fog);
    s.scene.fog.density = 1.1 / (s.track.theme.fogFar * atmo.fogMul);
    s.scene.background.copy(atmo.fog);
    s.scene.environmentIntensity = 0.75 * atmo.envMul;
    this.renderer.toneMappingExposure = atmo.exposure;
    for (const hl of s.headlights) hl.intensity = night * 120;
    effects.wet = race.wet;
    s.rain.update(dt, this.camera.position, race.rain);
    world.focusShadow(views.get(player).group.position);
    world.update(dt, performance.now() / 1000);
    world.setStartLights(race.phase === 'countdown' ? race.lights : 0, race.phase === 'racing' && race.time - race.t0 < 1.5);

    // HUD + audio
    this.hud.update(race, player, pin, performance.now());
    this.radioTick(s, dt);
    this.schoolTick(s, dt);
    // reuse the audio source records every frame (no per-frame allocation)
    const others = s._others || (s._others = []);
    let no = 0;
    for (const car of race.cars) {
      if (car === player) continue;
      const g = views.get(car).group.position;
      const o = others[no] || (others[no] = { car: null, wx: 0, wz: 0, vx: 0, vz: 0 });
      o.car = car; o.wx = g.x; o.wz = g.z; o.vx = car.u * Math.cos(car.theta); o.vz = -car.u * Math.sin(car.theta);
      no++;
    }
    others.length = no;
    const lst = this.listener();
    const pg = views.get(player).group.position;
    lst.vel.set(player.u * Math.cos(player.theta), 0, -player.u * Math.sin(player.theta));
    this.audio.weather.rain = race.rain;
    this.audio.weather.wet = race.wet;
    this.audio.update(player, others, lst, dt, false);

    // results
    if (race.phase === 'finished' && !s.finishedShown && (!s.fin || s.skipToResults)) {
      s.finishedShown = true;
      setTimeout(() => this.showResults(), race.opt.mode === 'timetrial' ? 0 : 600);
    }
  }

  processEvents(s) {
    const { race, player, effects, camRig } = s;
    const hud = this.hud;
    for (const e of race.events) {
      if (s.school && s.school.onEvent(e, player)) this.lessonPassed(s);
      switch (e.type) {
        case 'light':
          hud.setLights(e.n);
          this.audio.light(e.n);
          break;
        case 'lightsOut':
          hud.setLights(0, true);
          this.audio.go();
          if (race.opt.mode === 'race') hud.message('Go go go!', 'good', '', 1.6);
          break;
        case 'lap':
          if (e.car === player) {
            const fast = race.fastest.car === player && race.fastest.time === e.time;
            const pb = player.rs.best === e.time && e.valid;
            if (race.opt.mode === 'timetrial' || e.lap >= 2 || race.totalLaps === 1) {
              hud.message(`Lap ${e.lap} · ${formatTime(e.time)}`, fast ? 'purple' : pb ? 'good' : e.valid ? '' : 'bad', e.valid ? (fast ? 'Fastest lap of the race' : pb ? 'Personal best' : '') : 'Lap invalidated (track limits)', 3.5);
            } else hud.message(`Lap ${e.lap} · ${formatTime(e.time)}`, '', 'Standing-start lap, not counted for records', 3);
          }
          break;
        case 'fastest':
          if (e.car !== player && race.opt.mode === 'race') hud.message(`Fastest lap · ${e.car.info.code}`, 'purple', formatTime(e.time), 2.5);
          break;
        case 'penalty':
          if (e.car === player) {
            hud.message(`+${e.secs}s penalty`, 'bad', e.reason, 4);
            this.audio.ui('bad');
            hud.radio(`Penalty: ${e.reason}. ${e.secs} seconds added to your race time.`, 6);
          }
          break;
        case 'pitStopStart':
          if (e.car === player && e.game && !s._pgTip) {
            s._pgTip = true;
            hud.radio('Pit stop: press Space as each marker enters the green. Perfect timing on all four wheels is a 2.5 second stop.', 7);
          } else if (e.car === player) hud.radio('Box, box — hold position, tyres going on.', 3);
          break;
        case 'pitCall':
          if (e.car === player) {
            const nm = COMPOUNDS[e.advice.compound].name.toUpperCase();
            const why = { wet: 'The track is wet', dry: 'The track is dry', rules: 'We need the mandatory stop', wear: 'The tyres are going' }[e.advice.reason] || 'Strategy';
            hud.radio(e.auto ? `${why}. Box, box: ${nm} tyres. (B cancels)` : `${why}. Box this lap for ${nm}: press B (T changes the tyre).`, 7);
            this.audio.ui('good');
          }
          break;
        case 'mode':
          if (e.car === player) {
            const t = e.what === 'ers' ? `ERS mode: ${['Harvest (recharge)', 'Balanced', 'Attack (deploy more)'][e.value]}` : e.what === 'fuel' ? `Fuel mix: ${['Lean (save fuel)', 'Standard', 'Rich (more power)'][e.value]}` : `Brake bias: ${Math.round(e.value * 100)}% front`;
            hud.message(t, '', e.what === 'bias' ? 'Higher is more stable, lower turns in better' : '', 1.6);
            this.audio.ui('click');
          }
          break;
        case 'damageBox':
          if (e.car === player) {
            hud.message('Box for repairs', 'bad', 'Heavy damage: pit request set (B to cancel)', 4);
            hud.radio('Box, box. You have heavy damage: we need to repair the car. Pit this lap.', 6);
            this.audio.ui('bad');
          }
          break;
        case 'pitWheel':
          if (e.car === player) this.audio.ui(e.res === 'perfect' ? 'good' : e.res === 'good' ? 'click' : 'bad');
          break;
        case 'pitGameDone':
          if (e.car === player) hud.message(e.misses ? 'Cross-threaded wheel nut' : e.perfects === 4 ? 'Perfect pit stop' : 'Clean pit stop', e.misses ? 'bad' : '', `${e.dur.toFixed(1)} seconds`, 3);
          break;
        case 'scDeploy':
          hud.flag('SAFETY CAR', '#ffc400', 6, 'sc');
          hud.radio('Safety car, safety car. Stay in position behind the pace car. No overtaking.', 7);
          this.audio.ui('bad');
          this.ensureSafetyCar(s);
          break;
        case 'scEnding':
          hud.radio('Safety car in this lap. Get ready to go green.', 5);
          hud.flag('SC IN THIS LAP', '#ffc400', 4, 'sc');
          break;
        case 'scEnd':
          hud.flag('GREEN FLAG', '#31d17a', 4, 'green');
          hud.radio('Green, green, green. We are racing again.', 4);
          break;
        case 'yellow':
          if (!s._yellowT || performance.now() - s._yellowT > 12000) {
            s._yellowT = performance.now();
            hud.flag('YELLOW FLAG', '#ffd400', 3.5, 'yellow');
          }
          break;
        case 'warning':
          if (e.car === player) {
            hud.message(`Track limits · warning ${e.n}/3`, 'bad', 'All four wheels beyond the white line', 3);
            this.audio.ui('bad');
          }
          break;
        case 'lapInvalid':
          if (e.car === player) hud.message('Lap invalidated', 'bad', 'Track limits', 2.5);
          break;
        case 'sector':
          if (e.kind === 'purple') hud.message('Purple sector', 'purple', '', 1.4);
          break;
        case 'pitRequest':
          if (e.car === player) hud.message(e.on ? 'Box this lap' : 'Pit request cancelled', e.on ? '' : 'bad', e.on ? 'Press T to pick the next compound' : '', 2.5);
          break;
        case 'pitEntry':
          if (e.car === player) hud.message('Pit lane', '', '80 km/h limit', 2.5);
          break;
        case 'pitStopEnd':
          if (e.car === player) {
            hud.message('Pit stop complete', 'good', `Fitted ${COMPOUNDS[e.compound].name} tyres`, 3);
            this.audio.ui('good');
          }
          break;
        case 'impact': {
          const cam = this.camera.position;
          const d = Math.hypot(e.x - cam.x, -e.y - cam.z);
          if (d < 200) {
            effects.burst(e.x, 0.5, -e.y, Math.min(60, 10 + e.speed * 3), Math.min(18, 4 + e.speed));
            if (d < 90) this.audio.thud(clamp(e.speed / 20, 0.15, 1) * (1 - d / 100));
          }
          if (e.car === player || e.other === player) {
            camRig.impact = Math.max(camRig.impact, clamp(e.speed / 25, 0.1, 1));
            if (race.opt.damage && e.speed > 6) hud.message('Contact', 'bad', e.wall ? 'Barrier impact' : 'Collision with ' + (e.car === player ? e.other : e.car).info.code, 2);
          }
          break;
        }
        case 'chequered':
          hud.flag('Chequered flag', '#fff', 4, 'chequered');
          break;
        case 'finish':
          if (e.car === player && race.opt.mode === 'race') this.startFinishScene(s, e);
          else if (e.car === player && race.isQuali) this.startQualiEnd(s);
          break;
        case 'ghost':
          this.saveGhost(s);
          break;
        case 'recover':
          if (e.car === player) this.input.throttle = 0;
          break;
      }
    }
    race.events.length = 0;
  }

  /** The player takes the chequered flag: hand the car to a slow cool-down, run a cinematic camera and show the result. */
  startFinishScene(s, e) {
    const { race, player, camRig } = s;
    if (s.fin) return;
    s.fin = { t: 0 };
    const rs = player.rs;
    const winner = race.cars.find((c) => c.rs.finished && c !== player && c.rs.pos === 1) || null;
    const gap = winner && rs.pos > 1 ? rs.finishTime - winner.rs.finishTime : null;
    if (!s.pilot) {
      const prof = race.getProfile(player.spec, 'pilot');
      s.pilot = new AIDriver({ car: player, track: s.track, profile: prof, level: 0.6, seed: 4242 });
      s.pilot.goTime = 0;
    }
    s.pilot.paceAdapt = 0.32; // cool-down lap: slow, steady, wave to the crowd
    s.pilot.offset = 0;
    s.auto = true;
    camRig.setMode('finish');
    this.hud.showFinish({ pos: rs.pos, total: race.cars.length, team: player.info.team, name: player.info.name, time: e.time, gap, best: rs.best, penalty: rs.penalty });
    this.audio.cheer(rs.pos <= 3 ? 1 : 0.5);
    if (rs.pos <= 3) this.audio.fanfare();
    else this.audio.ui('good');
  }

  /** Qualifying is over for the player: cool-down lap on autopilot, then the grid. */
  // ---- photo mode ------------------------------------------------------------------------------------------------
  startPhoto() {
    const s = this.session;
    if (!s) return;
    this.state = 'photo';
    this.screens.innerHTML = '';
    this.hud.show(false);
    const cam = this.camera;
    const e = new THREE.Euler().setFromQuaternion(cam.quaternion, 'YXZ');
    s.photo = { yaw: e.y, pitch: e.x, pos: cam.position.clone(), speed: 6, fov: cam.fov, shot: false, flash: 0 };
    s.guide.setVisible(false);
    const ui = this.photoUI();
    ui.classList.remove('hidden');
    if (!this._photoBound) {
      this._photoBound = true;
      let drag = false;
      this.canvas.addEventListener('pointerdown', (ev) => { if (this.state === 'photo') { drag = true; this.canvas.setPointerCapture(ev.pointerId); } });
      this.canvas.addEventListener('pointerup', () => (drag = false));
      this.canvas.addEventListener('pointermove', (ev) => {
        const ph = this.session && this.session.photo;
        if (!drag || !ph || this.state !== 'photo') return;
        ph.yaw -= ev.movementX * 0.004;
        ph.pitch = Math.max(-1.5, Math.min(1.5, ph.pitch - ev.movementY * 0.004));
      });
      this.canvas.addEventListener('wheel', (ev) => {
        const ph = this.session && this.session.photo;
        if (!ph || this.state !== 'photo') return;
        ph.fov = Math.max(12, Math.min(95, ph.fov + ev.deltaY * 0.03));
        ev.preventDefault();
      }, { passive: false });
    }
  }

  photoUI() {
    if (this._photoUI) return this._photoUI;
    const el = document.createElement('div');
    el.id = 'photo';
    el.className = 'hidden';
    el.innerHTML = '<div class="pbar"><b>PHOTO MODE</b><span>WASD move · Q / E down / up · drag to look · wheel zoom · Shift fast</span><button data-p="shot">Capture (Space)</button><button data-p="exit" class="exit">Done (Esc)</button></div><div class="pflash"></div>';
    document.body.appendChild(el);
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-p]');
      if (!b) return;
      if (b.dataset.p === 'shot') this.session.photo.shot = true;
      else this.endPhoto();
    });
    this._photoUI = el;
    return el;
  }

  endPhoto() {
    const s = this.session;
    if (this._photoUI) this._photoUI.classList.add('hidden');
    if (!s) return;
    s.photo = null;
    s.guide.setVisible(this.save.settings.line !== false);
    this.camera.fov = s.camRig.fov;
    this.camera.updateProjectionMatrix();
    this.state = 'paused';
    this.menu.show('pause');
    const el = document.getElementById('camname');
    if (el) el.textContent = CAMERA_NAMES[s.camRig.mode];
  }

  runPhoto(s, dt) {
    const ph = s.photo;
    if (!ph) return;
    const inp = this.input;
    const fast = inp.down.has('ShiftLeft') || inp.down.has('ShiftRight');
    const v = ph.speed * (fast ? 4 : 1) * dt;
    const fwd = new THREE.Vector3(-Math.sin(ph.yaw) * Math.cos(ph.pitch), Math.sin(ph.pitch), -Math.cos(ph.yaw) * Math.cos(ph.pitch));
    const right = new THREE.Vector3(Math.cos(ph.yaw), 0, -Math.sin(ph.yaw));
    const d = (k) => (inp.down.has(k) ? 1 : 0);
    ph.pos.addScaledVector(fwd, (d('KeyW') - d('KeyS')) * v).addScaledVector(right, (d('KeyD') - d('KeyA')) * v);
    ph.pos.y += (d('KeyE') - d('KeyQ')) * v;
    if (inp.pressed.has('Escape') || inp.pressed.has('KeyP')) {
      inp.pressed.clear();
      return this.endPhoto();
    }
    if (inp.pressed.has('Space')) ph.shot = true;
    inp.pressed.clear();
    const cam = this.camera;
    cam.position.copy(ph.pos);
    cam.rotation.set(ph.pitch, ph.yaw, 0, 'YXZ');
    if (Math.abs(cam.fov - ph.fov) > 0.01) {
      cam.fov = ph.fov;
      cam.updateProjectionMatrix();
    }
    s.world.focusShadow(s.views.get(s.player).group.position);
    s.world.update(dt, performance.now() / 1000);
    this.audio.update(s.player, [], this.listener(), dt, true);
    this.post.render(s.scene, cam, 0, this.bloomFor(s));
    const fl = this._photoUI.querySelector('.pflash');
    if (ph.shot) {
      ph.shot = false;
      this.canvas.toBlob((blob) => {
        if (!blob) return;
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `apex-grand-prix-${s.track.id}-${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      }, 'image/png');
      fl.style.opacity = '0.85';
      this.audio.ui('click');
      ph.flash = 0.25;
    }
    if (ph.flash > 0) {
      ph.flash -= dt;
      if (ph.flash <= 0) fl.style.opacity = '0';
    }
  }

  // ---- replay ---------------------------------------------------------------------------------------------------
  startReplay(from) {
    const s = this.session;
    if (!s || !s.rec || s.rec.count < 20) return this.toast('Nothing to replay yet');
    this.replayFrom = from;
    this.state = 'replay';
    this.screens.innerHTML = '';
    this.hud.show(false);
    const rig = new CameraRig(this.camera);
    rig.shakeOn = false;
    rig.setMode('tv');
    s.replay = { t: 0, playing: true, speed: 1, rig, modeIdx: 0, follow: s.race.cars.indexOf(s.player), endHold: 0 };
    s.guide.setVisible(false);
    const ui = this.replayUI();
    ui.classList.remove('hidden');
    this.updateReplayUI();
  }

  replayUI() {
    if (this._replayUI) return this._replayUI;
    const el = document.createElement('div');
    el.id = 'replay';
    el.className = 'hidden';
    el.innerHTML = `<div class="rbar"><b>REPLAY</b><span id="r-time">0:00</span>
      <input id="r-scrub" type="range" min="0" max="1000" value="0">
      <button data-r="play" title="Play / pause (Space)">⏯</button>
      <button data-r="slow" title="Slow motion (S)">¼×</button><button data-r="normal" title="Normal speed (F)">1×</button>
      <button data-r="cam" title="Camera (C)">Camera: <span id="r-cam"></span></button>
      <button data-r="car" title="Follow another car (N)">Car: <span id="r-car"></span></button>
      <button data-r="exit" class="exit" title="Back (Esc)">Done</button></div>`;
    document.body.appendChild(el);
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-r]');
      if (b) this.replayAction(b.dataset.r);
    });
    el.querySelector('#r-scrub').addEventListener('input', (e) => {
      const s = this.session;
      if (!s || !s.replay) return;
      s.replay.t = (+e.target.value / 1000) * s.rec.duration;
      s.replay.playing = false;
    });
    this._replayUI = el;
    return el;
  }

  replayAction(a) {
    const s = this.session;
    if (!s || !s.replay) return;
    const r = s.replay;
    if (a === 'play') {
      if (r.t >= s.rec.duration - 0.05) r.t = 0;
      r.playing = !r.playing;
    } else if (a === 'slow') r.speed = 0.25;
    else if (a === 'normal') r.speed = 1;
    else if (a === 'cam') {
      const modes = ['tv', 'chase', 'close', 'heli', 'cockpit', 'tcam'];
      r.modeIdx = (r.modeIdx + 1) % modes.length;
      r.rig.setMode(modes[r.modeIdx]);
    } else if (a === 'car') {
      const sorted = [...s.race.sorted];
      const cur = sorted.indexOf(s.race.cars[r.follow]);
      r.follow = s.race.cars.indexOf(sorted[(cur + 1) % sorted.length]);
      r.rig.init = false;
    } else if (a === 'exit') return this.endReplay();
    this.updateReplayUI();
  }

  updateReplayUI() {
    const s = this.session;
    const ui = this._replayUI;
    if (!s || !s.replay || !ui) return;
    const r = s.replay;
    ui.querySelector('#r-cam').textContent = CAMERA_NAMES[r.rig.mode];
    ui.querySelector('#r-car').textContent = s.race.cars[r.follow].info.code;
    ui.querySelector('#r-time').textContent = `-${Math.max(0, s.rec.duration - r.t).toFixed(1)} s`;
    const sl = ui.querySelector('#r-scrub');
    if (document.activeElement !== sl) sl.value = Math.round((r.t / Math.max(0.01, s.rec.duration)) * 1000);
  }

  endReplay() {
    const s = this.session;
    if (this._replayUI) this._replayUI.classList.add('hidden');
    if (!s) return;
    s.replay = null;
    s.guide.setVisible(this.save.settings.line !== false);
    s.camRig.init = false;
    for (const v of s.views.values()) v.group.visible = true;
    if (s.scView) s.scView.group.visible = s.race.sc.state !== 'none';
    if (this.replayFrom === 'results') {
      this.state = 'results';
      this.menu.show('results', this.menu.lastData);
    } else {
      this.state = 'paused';
      this.menu.show('pause');
      const el = document.getElementById('camname');
      if (el) el.textContent = CAMERA_NAMES[s.camRig.mode];
    }
  }

  runReplay(s, dt) {
    const r = s.replay;
    if (!r) return;
    const rec = s.rec;
    const input = this.input.poll(dt, 0);
    if (input.pause || input.confirm) return this.endReplay();
    if (input.camera) this.replayAction('cam');
    if (r.playing) {
      r.t += dt * r.speed;
      if (r.t >= rec.duration) {
        r.t = rec.duration;
        r.endHold += dt;
        if (r.endHold > 1.5) {
          r.playing = false;
          r.endHold = 0;
        }
      }
    }
    rec.sample(r.t, s.replayCars);
    const cars = s.race.cars;
    for (let i = 0; i < cars.length; i++) {
      const v = s.views.get(cars[i]);
      v.group.visible = true;
      v.update(s.replayCars[i], 1, dt);
    }
    if (s.scView) {
      const p = rec.scPose;
      s.scView.group.visible = !!p;
      if (p) s.scView.setPose(p.x, p.y, p.theta, s.track.at(s.track.z, 0));
    }
    const fCar = s.replayCars[r.follow];
    r.rig.update(dt, s.views.get(cars[r.follow]), fCar, s.track);
    s.world.focusShadow(s.views.get(cars[r.follow]).group.position);
    s.world.update(dt, performance.now() / 1000);
    s.effects.update(dt, this.pointScale);
    s.rain.update(dt, this.camera.position, s.race.rain);
    this.audio.update(s.player, [], this.listener(), dt, true);
    this.updateReplayUI();
    this.post.render(s.scene, this.camera, 0, this.bloomFor(s));
  }

  /** The pace car: a yellow car with a flashing light bar, created when it is first needed. */
  ensureSafetyCar(s) {
    if (s.scView) return;
    const team = { id: 'pace', name: 'Safety car', short: 'SC', color: '#f2c400', accent: '#111111', livery: 'stripe', rating: 0.5 };
    const view = new CarView(team, { number: 0, isPlayer: false, code: 'SC' }, { detail: 'low' });
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.9), new THREE.MeshBasicMaterial({ color: 0xff8a00 }));
    bar.position.set(-0.3, 1.15, 0);
    view.model.add(bar);
    view.bar = bar;
    view.group.visible = false;
    s.scene.add(view.group);
    s.scView = view;
  }

  updateSafetyCarView(s, dt) {
    const sc = s.race.sc;
    const v = s.scView;
    if (!v) return;
    const on = sc.state !== 'none';
    v.group.visible = on;
    if (!on) return;
    const tr = s.track;
    const pt = tr.pointAt(sc.s, 0);
    v.setPose(pt.x, pt.y, pt.heading, pt.h);
    s.scT = (s.scT || 0) + dt;
    v.bar.material.color.setHex(Math.floor(s.scT * 5) % 2 ? 0xff8a00 : 0x442200);
  }

  startQualiEnd(s) {
    const { race, player, camRig } = s;
    if (s.fin) return;
    s.fin = { t: 0 };
    if (!s.pilot) {
      const prof = race.getProfile(player.spec, 'pilot');
      s.pilot = new AIDriver({ car: player, track: s.track, profile: prof, level: 0.6, seed: 4242 });
      s.pilot.goTime = 0;
    }
    s.pilot.paceAdapt = 0.32;
    s.pilot.offset = 0;
    s.auto = true;
    camRig.setMode('finish');
    const b = player.rs.best;
    this.hud.message('Qualifying complete', '', Number.isFinite(b) ? `Best lap ${formatTime(b)} · P${player.rs.pos}` : 'No timed lap set', 6);
    this.audio.ui('good');
  }

  saveGhost(s) {
    const g = s.race.ghostBest;
    if (!g) return;
    this.save.ghosts[s.track.id] = { time: g.time, data: b64FromFloats(g.frames) };
    const rec = this.save.records[s.track.id];
    if (!rec || g.time < rec.best) {
      this.save.records[s.track.id] = { best: g.time };
      this.toast('New track record: ' + formatTime(g.time));
    }
    persist(this.save);
  }

  /** Driving school: feed the tracker, show the checklist, save the result the moment a lesson is passed. */
  schoolTick(s, dt) {
    if (!s.school) return;
    const sc = s.school;
    const finished = sc.update(dt, s.player, s.race);
    const done = finished || sc.complete;
    this.hud.setLesson(sc.lesson, sc.done, sc.ctx, sc.complete);
    if (!s._schoolTip && s.race.phase === 'racing') {
      s._schoolTip = true;
      this.hud.radio(sc.lesson.tip, 9);
    }
    if (finished) this.lessonPassed(s);
    return done;
  }

  lessonPassed(s) {
    const id = s.school.lesson.id;
    const first = !this.save.school[id];
    this.save.school[id] = true;
    persist(this.save);
    this.hud.message('Lesson complete', 'good', s.school.lesson.title + (first ? '' : ' (again)'), 4);
    this.audio.ui('good');
  }

  radioTick(s, dt) {
    s.radioT += dt;
    if (s.radioT < 8 || s.race.phase !== 'racing' || s.race.opt.mode !== 'race') return;
    const p = s.player, rs = p.rs;
    s.radioT = 0;
    const ts = p.tyreSummary();
    const left = s.race.totalLaps - rs.laps;
    const rc = s.race;
    const fc = rc.forecast();
    if (fc && fc.rainIn < 70 && !s._rainWarn) {
      s._rainWarn = true;
      this.hud.radio(`Rain is coming, about ${Math.round(fc.rainIn / 10) * 10} seconds away. Think about wet tyres (B to box, T to choose Wet).`, 7);
    } else if (rc.wet > 0.35 && !p.compound.wetTyre && s.track.pit && !s._wetCalled) {
      s._wetCalled = true;
      this.hud.radio('The track is wet. Box for wet tyres: press B, then T to pick Wet.', 7);
    } else if (rc.wet < 0.14 && rc.rain < 0.05 && p.compound.wetTyre && !s._dryCalled && rs.laps > 1) {
      s._dryCalled = true;
      this.hud.radio('The track is drying. Box for slicks when you are ready.', 6);
    } else if (rc.wet > 0.35) s._dryCalled = false;
    if (ts.wear > 0.7 && !rs.pitRequested && rs.stops === 0 && left > 1 && s.track.pit && !s._wearCalled) {
      s._wearCalled = true;
      this.hud.radio('Tyres are going off. Press B when you want to box.', 6);
    } else if (p.drsAllowed && !s._drsCalled) {
      s._drsCalled = true;
      this.hud.radio('DRS enabled. Press Space on the straight.', 4);
    } else if (!p.drsAllowed) s._drsCalled = false;
    else if (p.behind && (p.behind.gapAhead ?? 9) < 0.8 && !s._behindCalled) {
      s._behindCalled = true;
      this.hud.radio(`${p.behind.info.code} is right behind, ${(p.behind.gapAhead).toFixed(1)} seconds. Defend.`, 4);
    } else if (!p.behind || (p.behind.gapAhead ?? 9) > 2) s._behindCalled = false;
    const bmax = Math.max(p.brakeTemp[0], p.brakeTemp[1], p.brakeTemp[2], p.brakeTemp[3]);
    if (bmax > 1020 && !s._brakeCalled) {
      s._brakeCalled = true;
      this.hud.radio('Brake temperatures are very high and the pedal will fade. Lift and coast earlier to let them cool.', 6);
    } else if (bmax < 800) s._brakeCalled = false;
    if ((p.damageFront || 0) > 0.3 && !s._dmgCalled && s.track.pit) {
      s._dmgCalled = true;
      this.hud.radio('You have front wing damage. Consider boxing for a new nose.', 5);
    }
  }

  /** Folds a finished session into the lifetime stats and announces anything unlocked. */
  recordStats(ctx) {
    const unlocked = recordSession(this.save, ctx);
    persist(this.save);
    unlocked.forEach((id, k) => {
      const a = ACHIEVEMENTS.find((x) => x.id === id);
      if (a) setTimeout(() => this.toast(`Achievement unlocked: ${a.name}`), 700 + k * 2200);
    });
    if (unlocked.length) this.audio.fanfare();
  }

  showResults() {
    const s = this.session;
    if (!s || this.state === 'menu') return;
    const { race, player, track } = s;
    this.state = 'results';
    this.hud.show(false);
    document.getElementById('touch') && this.updateTouchVisibility();
    const trackName = track.name;
    if (race.opt.mode === 'timetrial') {
      const rec = this.save.records[track.id];
      const best = player.rs.best;
      let newBest = false;
      if (best < Infinity && (!rec || best < rec.best)) {
        this.save.records[track.id] = { best };
        newBest = true;
      }
      persist(this.save);
      this.menu.show('timetrial', { player, race, trackName, best, newBest });
      return;
    }
    if (race.isQuali) {
      const q = race.qualifying();
      const me = q.list.find((e) => e.car === player);
      if (me && Number.isFinite(me.best)) {
        const rec = this.save.records[track.id];
        if (!rec || me.best < rec.best) this.save.records[track.id] = { best: me.best };
        persist(this.save);
      }
      this.recordStats({ kind: 'quali', pos: me ? me.pos : 99, km: Math.max(0, player.rs.maxDist) / 1000 });
      this.menu.show('quali', { q, player, trackName, cfg: s.cfg });
      return;
    }
    const cls = race.classification();
    // records + season
    const me = cls.find((e) => e.car === player);
    if (me && me.best < Infinity) {
      const rec = this.save.records[track.id];
      if (!rec || me.best < rec.best) this.save.records[track.id] = { best: me.best };
    }
    let season = null;
    const cfg = s.cfg;
    if (this.save.season && this.save.season.calendar && this.save.season.calendar[this.save.season.round] === track.id && !cfg.career) {
      season = this.save.season;
      if (!s.seasonRecorded) {
        s.seasonRecorded = true;
        Career.recordRound(season, cls); // moves the season on to the next round
      }
    }
    let careerRes = null;
    if (cfg.career && this.save.career && !s.careerRecorded) {
      s.careerRecorded = true;
      const c = this.save.career;
      const row = Career.recordRound(c.season, cls);
      careerRes = Career.settleRace(c, row, cls);
      careerRes.budget = c.budget;
      if (Career.seasonDone(c.season)) {
        const rc = Career.endSeason(c);
        this.recordStats({ kind: 'career', pos: rc.driverPos });
      }
    }
    if (!s.statsRecorded) {
      s.statsRecorded = true;
      const rsP = player.rs;
      this.recordStats({
        kind: 'race', pos: me ? me.pos : 99, grid: rsP.gridPos || player.info.gridPos, cars: cls.length, laps: race.totalLaps,
        finishedRace: !!(me && me.time != null), penalty: rsP.penalty, damaged: (rsP.maxDamage || 0) > 0.15, passes: rsP.passes || 0,
        level: cfg.level, wet: (race.maxWet || 0) > 0.3, night: cfg.timeOfDay === 'night', km: Math.max(0, rsP.maxDist) / 1000,
        stops: rsP.stops, perfectStops: rsP.perfectStops || 0, fastest: race.fastest.car === player, career: !!cfg.career, teamRank: Career.teamRank(cfg.team),
      });
    }
    persist(this.save);
    this.menu.show('results', { cls, player, race, season, trackName, careerRes });
  }
}

window.apex = new Game();
