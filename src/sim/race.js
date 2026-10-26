import { Car } from './car.js';
import { makeSpec, COMPOUNDS, COMPOUND_IDS, DRY_COMPOUND_IDS, wetGripFactor } from './carspec.js';
import { buildSpeedProfile, lineGeometry } from './speedprofile.js';
import { AIDriver } from './ai.js';
import { collideCars, collideWalls } from './collision.js';
import { TEAMS, DRIVERS } from './teams.js';
import { SURF } from './track.js';
import { upgradeEffects } from './career.js';
import { makePitGame, stepPitGame } from './pitgame.js';
import { clamp, loopDelta, mod, mulberry32 } from '../util/math.js';

export const DT = 1 / 240;
export const DIFFICULTIES = [
  { id: 'rookie', name: 'Rookie', level: 0.08, blurb: 'Relaxed pace, frequent mistakes' },
  { id: 'amateur', name: 'Amateur', level: 0.3, blurb: 'Learn the circuit without pressure' },
  { id: 'pro', name: 'Pro', level: 0.55, blurb: 'Fair fight, occasional errors' },
  { id: 'elite', name: 'Elite', level: 0.8, blurb: 'Fast, aggressive, rarely wrong' },
  { id: 'legend', name: 'Legend', level: 1.0, blurb: 'Every car at the limit' },
];

export const DEFAULT_OPTIONS = {
  mode: 'race', // race | timetrial | qualifying
  qualiTime: 180, // seconds of session in qualifying
  weather: 'dry', // dry | light | heavy | changing
  safetyCar: true, // pace car and yellow flags when 3+ cars are stranded
  equalCars: true, // all cars share the player's specification
  upgrades: null, // career car development { power, aero, grip } levels
  qualiTimes: null, // { driverCode: bestLap } from a qualifying session: sets the grid
  laps: 5,
  level: 0.55,
  adaptive: false,
  fieldSize: 20,
  playerTeam: 1,
  playerGrid: 12,
  collisions: true,
  damage: true,
  tyreWear: 3, // multiplier on wear rate
  mandatoryStop: false,
  pitCalls: 'radio', // pit wall: 'off' | 'radio' (advice) | 'auto' (calls you in)
  compound: 'medium',
  setup: { frontWing: null, rearWing: null, brakeBias: 0.58 },
  assists: { abs: true, tc: 2, steer: 1, stability: 1, autoGear: true, pitAuto: true, pitGame: true },
  seed: 1,
};

const FUEL_KG_PER_KM = 0.2;

function nextRng(seed) {
  return mulberry32(seed * 104729 + 7);
}

export class Race {
  constructor(track, options = {}) {
    this.track = track;
    this.opt = { ...DEFAULT_OPTIONS, ...options, assists: { ...DEFAULT_OPTIONS.assists, ...(options.assists || {}) }, setup: { ...DEFAULT_OPTIONS.setup, ...(options.setup || {}) } };
    const opt = this.opt;
    this.rng = nextRng(opt.seed);
    this.time = 0;
    this.t0 = null; // clock value at lights out
    this.phase = 'grid'; // grid | countdown | racing | finished
    this.lights = 0;
    this.lightsOutAt = null;
    this.isQuali = opt.mode === 'qualifying';
    if (this.isQuali) opt.collisions = false;
    this.totalLaps = opt.mode === 'timetrial' ? 9999 : this.isQuali ? 999 : opt.laps;
    this.events = [];
    this.cars = [];
    this.sorted = [];
    this.chequered = false;
    this.chequeredAt = null;
    this.stepCount = 0;
    this.profileCache = new Map();
    this.pairContact = new Map();
    this.fastest = { time: Infinity, car: null, lap: 0 };
    this.bestSectors = [Infinity, Infinity, Infinity];
    this.ghostRec = [];
    this.ghostBest = null;
    this.sc = { state: 'none', s: 0, v: 0, t: 0, clearT: 0, count: 0, pseudo: { s: 0, d: 0, speed: 0, axF: 0, info: {}, rs: {} }, ahead: null };
    this.yellow = false;
    this.rain = 0; // intensity now, 0..1
    this.wet = 0; // water on the track, 0..1
    this.setupWeather();
    this.setupField();
  }

  get playerCar() {
    return this.player;
  }

  // ---- field creation -----------------------------------------------------------------------
  teamSetup(def) {
    const s = def.setup || { front: 5, rear: 5 };
    return s;
  }

  getProfile(spec, key) {
    let p = this.profileCache.get(key);
    if (!p) {
      p = buildSpeedProfile(this.track, spec, { fuel: 25, geometry: this.geometry || (this.geometry = lineGeometry(this.track)) });
      this.profileCache.set(key, p);
    }
    return p;
  }

  makeCarSpec(team, compound, isPlayer) {
    const opt = this.opt;
    const rec = this.track.def.setup || { front: 5, rear: 5 };
    const fuel = this.isQuali ? 14 : clamp(Math.min(this.totalLaps, 60) * (this.track.length / 1000) * FUEL_KG_PER_KM * 1.1 + 2, 6, 105);
    // identical cars: every team runs the same machinery, only the drivers differ (career keeps the team pecking order)
    const rating = opt.equalCars ? 1 : team.rating;
    const grip = 0.985 + 0.015 * rating;
    const setup = isPlayer
      ? { frontWing: opt.setup.frontWing ?? rec.front, rearWing: opt.setup.rearWing ?? rec.rear, brakeBias: opt.setup.brakeBias }
      : { frontWing: rec.front, rearWing: rec.rear };
    const spec = makeSpec({ ...setup, compound, performance: 0.972 + 0.028 * rating, fuel });
    spec.frontGrip *= grip;
    spec.rearGrip *= grip;
    if (isPlayer && opt.upgrades) {
      // career car development
      const u = upgradeEffects(opt.upgrades);
      spec.powerScale *= u.power;
      spec.clAf *= u.aero;
      spec.clAr *= u.aero;
      spec.frontGrip *= u.grip;
      spec.rearGrip *= u.grip;
    }
    return spec;
  }

  setupField() {
    const opt = this.opt;
    const track = this.track;
    const rng = this.rng;
    const timeTrial = opt.mode === 'timetrial';
    // seats: 2 per team; the player takes one seat in their team
    const seats = [];
    TEAMS.forEach((team, ti) => {
      for (let k = 0; k < 2; k++) seats.push({ team, ti, driver: DRIVERS[ti * 2 + k], seat: ti * 2 + k });
    });
    const pTeam = clamp(opt.playerTeam, 0, TEAMS.length - 1);
    const playerSeat = seats.findIndex((s) => s.ti === pTeam);
    const mate = seats.findIndex((s, i) => s.ti === pTeam && i !== playerSeat);
    let ai = seats.filter((s, i) => i !== playerSeat);
    if (timeTrial) ai = [];
    else {
      const want = clamp(opt.fieldSize, 2, 20) - 1;
      // drop random surplus seats (never the teammate)
      while (ai.length > want) {
        const k = Math.floor(rng() * ai.length);
        if (seats[mate] === ai[k]) continue;
        ai.splice(k, 1);
      }
    }
    // qualifying-ish order from car + driver + luck
    ai.forEach((s) => (s.q = s.team.rating * 0.55 + s.driver.talent * 0.45 + (rng() - 0.5) * 0.16));
    ai.sort((a, b) => b.q - a.q);
    let grid = ai.map((s) => ({ seat: s, player: false }));
    const pg = clamp(Math.round(opt.playerGrid) - 1, 0, grid.length);
    grid.splice(timeTrial ? 0 : pg, 0, { seat: seats[playerSeat], player: true });
    if (opt.qualiTimes && !this.isQuali && !timeTrial) {
      // the grid is set by the qualifying session (cars without a time start at the back in their old order)
      const qt = opt.qualiTimes;
      const t = (g) => (qt[g.player ? 'YOU' : g.seat.driver.code] ?? Infinity);
      grid = grid.map((g, i) => ({ g, i })).sort((a, b) => t(a.g) - t(b.g) || a.i - b.i).map((x) => x.g);
    }

    const aiCompounds = ['soft', 'medium', 'hard'];
    grid.forEach((g, k) => {
      const { seat, player } = g;
      const team = seat.team;
      let compound = player ? opt.compound : aiCompounds[rng() < 0.45 ? 0 : rng() < 0.75 ? 1 : 2];
      if (!player && this.wet > 0.4) compound = 'wet';
      const spec = this.makeCarSpec(team, compound, player);
      const car = new Car(spec, track);
      car.wearMult = opt.tyreWear;
      const slot = track.gridSlot(k);
      const pt = track.pointAt(slot.s, slot.d);
      car.reset(pt.x, pt.y, pt.heading, 0);
      car.info = {
        name: player ? 'You' : seat.driver.name,
        code: player ? 'YOU' : seat.driver.code,
        number: player ? 7 : seat.driver.number,
        team,
        teamIdx: seat.ti,
        isPlayer: player,
        gridPos: k + 1,
        talent: seat.driver.talent,
      };
      car.assist = player
        ? { abs: opt.assists.abs, tc: opt.assists.tc, steer: opt.assists.steer ? 1 : 0, stability: opt.assists.stability, autoGear: opt.assists.autoGear }
        : { abs: true, tc: 2, steer: 0, autoGear: true, stability: 1 };
      car.rs = this.makeRaceState(car, slot);
      car.rs.compounds = [compound];
      car.drsAllowed = false;
      car.gapAhead = 99;
      if (!player && !timeTrial) {
        const profile = this.getProfile(spec, `${team.id}:${compound}`);
        const driver = new AIDriver({
          car, track, profile, level: opt.level, seed: opt.seed * 31 + k, teamIdx: seat.ti,
          skill: 0.982 + 0.018 * seat.driver.talent,
          boxS: track.pit ? track.pitBox(seat.ti).s : null,
          boxD: track.pit ? track.pitBox(seat.ti).d : null,
        });
        car.driver = driver;
        if (this.isQuali) {
          driver.releaseDelay = k * 2.4; // cars leave one after another so the lap is clear
          driver.ignoreTraffic = true;
        }
        // pit strategy: stop once somewhere in the middle of the race if the race is long enough / wear is high
        const stopLap = Math.round(this.totalLaps * (0.35 + 0.35 * rng()));
        car.rs.plannedStop = !this.isQuali && this.totalLaps >= 4 && (opt.mandatoryStop || opt.tyreWear >= 2.5 || rng() < 0.3) ? Math.max(1, stopLap) : null;
      }
      if (player) {
        this.player = car;
        car.rs.pilot = null;
      }
      this.cars.push(car);
    });
    for (const c of this.cars) c.wetness = this.wet;
    this.sorted = [...this.cars];
    // cars start at the grid slot but the line crossing counts laps from distance 0 at the start line
    this.cars.forEach((c) => this.updateRank());
  }

  makeRaceState(car, slot) {
    const L = this.track.length;
    const startDist = -mod(this.track.length - slot.s, L); // negative: behind the line
    const cpCount = this.track.cpCount;
    return {
      lastS: car.s,
      dist: startDist,
      maxDist: startDist,
      laps: 0,
      lapStart: 0,
      lapTimes: [],
      tele: [], // per-lap telemetry for the results screen
      stopLaps: [],
      last: null,
      best: Infinity,
      sectorIdx: 2,
      sectorStart: 0,
      sectors: [null, null, null],
      bestSectors: [Infinity, Infinity, Infinity],
      cpTimes: new Float64Array(Math.min(this.totalLaps + 3, 400) * cpCount + 16).fill(NaN),
      cpIdx: Math.floor(startDist / this.track.cpSpacing),
      finished: false,
      finishTime: null,
      dnf: false,
      penalty: 0,
      penaltyLog: [],
      warnings: 0,
      limitTimer: 0,
      offTimer: 0,
      stops: 0,
      service: null,
      pitRequested: false,
      nextCompound: null,
      drsEligible: [],
      drsLatch: false,
      inPitLane: false,
      pitSpeedT: 0,
      pitPenalised: false,
      resets: 0,
      falseStart: false,
      moved: false,
      pos: 0,
      mistakeFlash: 0,
      lastImpact: -9,
      stopped: 0,
      cpGap: 0,
    };
  }

  // ---- control ------------------------------------------------------------------------------------
  start() {
    if (this.phase !== 'grid') return;
    this.phase = 'countdown';
    this.cdStart = this.time;
    const quick = this.opt.mode === 'timetrial' || this.isQuali;
    this.lightsSeq = quick ? [0.6, 1.2, 1.8] : [1.2, 2.2, 3.2, 4.2, 5.2];
    this.holdTime = quick ? 0.5 : 0.7 + this.rng() * 2.2;
    this.lightsOutAt = this.cdStart + this.lightsSeq[this.lightsSeq.length - 1] + this.holdTime;
  }

  lapsLeft(car) {
    return this.totalLaps - car.rs.laps;
  }

  pushEvent(e) {
    e.t = this.time;
    this.events.push(e);
    if (this.events.length > 400) this.events.splice(0, 100);
  }

  // ---- main step ----------------------------------------------------------------------------------------
  step(dt, pin) {
    this.time += dt;
    this.stepCount++;
    if (this.phase === 'countdown') {
      const el = this.time - this.cdStart;
      const lit = this.lightsSeq.filter((t) => el >= t).length;
      if (lit !== this.lights) {
        this.lights = lit;
        this.pushEvent({ type: 'light', n: lit });
      }
      if (this.time >= this.lightsOutAt) {
        this.phase = 'racing';
        this.t0 = this.time;
        this.lights = 0;
        this.pushEvent({ type: 'lightsOut' });
        for (const c of this.cars) {
          c.rs.lapStart = this.t0;
          c.rs.sectorStart = this.t0;
        }
      }
    }

    if (this.isQuali && this.phase === 'racing' && !this.chequered && this.time - this.t0 >= this.opt.qualiTime) {
      this.chequered = true;
      this.chequeredAt = this.time;
      this.pushEvent({ type: 'chequered', car: null });
    }
    const racing = this.phase === 'racing' || this.phase === 'finished';
    for (const car of this.cars) {
      const inp = this.inputFor(car, dt, pin);
      car.step(dt, inp);
    }
    // physical interactions
    if (racing || this.phase === 'countdown') {
      if (this.opt.collisions && this.cars.length > 1) this.collisions();
      for (const car of this.cars) {
        const hit = collideWalls(car, this.track);
        if (hit && hit.speed > 0.8) {
          car.locate();
          if (this.opt.damage) car.applyDamage(hit.energy * 0.8, hit.lx, hit.ly);
          if (hit.speed > 3) this.pushEvent({ type: 'impact', car, energy: hit.energy, speed: hit.speed, wall: true, x: hit.wx, y: hit.wy });
          car.rs.lastImpact = this.time;
        } else if (hit) car.locate();
      }
    }
    for (const car of this.cars) this.updateTiming(car, dt);
    if (this.stepCount % 4 === 0) {
      this.updateRank();
      this.updateAeroInteractions();
      for (const car of this.cars) {
        this.updateDrs(car);
        this.updatePit(car, dt * 4);
        this.updateRules(car, dt * 4);
      }
      this.updateWeather(dt * 4);
      this.updateSafetyCar(dt * 4);
      this.updateFinish();
      this.adaptPace();
      this.recoverStuck(dt * 4);
    }
    if (this.opt.mode === 'timetrial') this.recordGhost();
  }

  inputFor(car, dt, pin) {
    const rs = car.rs;
    const racing = this.phase === 'racing' || this.phase === 'finished';
    let inp;
    if (car === this.player) {
      inp = this._pin || (this._pin = { throttle: 0, brake: 0, steer: 0, drs: false, boost: false, gearUp: false, gearDown: false, pitLimit: 0, allowReverse: true });
      const p = pin || {};
      inp.throttle = p.throttle || 0;
      inp.brake = p.brake || 0;
      inp.steer = p.steer || 0;
      inp.boost = !!p.boost;
      inp.gearUp = !!p.gearUp;
      inp.gearDown = !!p.gearDown;
      inp.pitLimit = 0;
      if (p.drsPress && rs.service && rs.service.pg) rs.pitAct = true; // DRS key doubles as the wheel-nut button
      inp.aiDriven = !!p.aiDriven;
      inp.allowReverse = this.phase === 'racing' && !this.opt.noReverse;
      // autopilot through the pit lane
      if (rs.pilot && rs.pilot.pitState !== 'none') {
        const pi = rs.pilot.update(dt, this);
        inp.throttle = pi.throttle;
        inp.brake = pi.brake;
        inp.steer = pi.steer;
        inp.pitLimit = pi.pitLimit;
        inp.boost = false;
        inp.aiDriven = true;
      }
      // on the grid the car is held (clutch + brakes) until the lights go out: a false start is impossible
      inp.hold = !racing;
      if (inp.hold) inp.brake = 1;
      if (rs.service) {
        inp.throttle = 0;
        inp.brake = 1;
      }
      if (rs.service || (rs.pilot && rs.pilot.pitState !== 'none')) inp.allowReverse = false;
      // DRS latch
      if (p.drsPress && car.drsAllowed) rs.drsLatch = true;
      if (!car.drsAllowed || inp.brake > 0.1) rs.drsLatch = false;
      inp.drs = rs.drsLatch;
      // pit limiter on the pit lane surface
      if (rs.inPitLane && this.track.inPitLimiter(car.s)) inp.pitLimit = this.track.pit.limit;
      if (this.track.pit && p.pitToggle) {
        rs.pitRequested = !rs.pitRequested;
        this.pushEvent({ type: 'pitRequest', car, on: rs.pitRequested });
      }
      if (p.ersCycle && this.phase === 'racing') {
        car.ersMode = (car.ersMode + 1) % 3;
        this.pushEvent({ type: 'mode', car, what: 'ers', value: car.ersMode });
      }
      if (p.fuelCycle && this.phase === 'racing') {
        car.fuelMode = (car.fuelMode + 1) % 3;
        this.pushEvent({ type: 'mode', car, what: 'fuel', value: car.fuelMode });
      }
      if (p.bbDelta) {
        car.spec.brakeBias = clamp(car.spec.brakeBias + p.bbDelta * 0.01, 0.5, 0.7);
        this.pushEvent({ type: 'mode', car, what: 'bias', value: car.spec.brakeBias });
      }
      if (p.tyreCycle) {
        const order = COMPOUND_IDS;
        const cur = rs.nextCompound || car.compound.id;
        rs.nextCompound = order[(order.indexOf(cur) + 1) % order.length];
      }
      if (this.opt.mode === 'timetrial' && this.phase !== 'racing') {
        inp.brake = 1;
        inp.steer = 0;
      }
      return inp;
    }
    const drv = car.driver;
    if (!drv) return (this._idle || (this._idle = { throttle: 0, brake: 1, steer: 0, drs: false, boost: false }));
    inp = drv.update(dt, this);
    if (rs.service) {
      inp.throttle = 0;
      inp.brake = 1;
    }
    inp.drs = inp.drs && car.drsAllowed && inp.brake < 0.1;
    if (rs.finished && this.chequered) drv.paceAdapt = 0.5;
    return inp;
  }

  onPitSurface(car) {
    let n = 0;
    for (let w = 0; w < 4; w++) if (car.surf[w] === SURF.PIT) n++;
    return n >= 2;
  }

  collisions() {
    const cars = this.cars;
    for (let i = 0; i < cars.length; i++) {
      for (let j = i + 1; j < cars.length; j++) {
        const a = cars[i], b = cars[j];
        if (a.rs.service || b.rs.service) continue;
        const r = collideCars(a, b);
        if (r && r.energy) {
          a.locate();
          b.locate();
          // a sustained rub counts as one incident: new event only after the pair has been apart for a moment
          const key = i * 32 + j;
          const last = this.pairContact.get(key) ?? -9;
          this.pairContact.set(key, this.time);
          if (this.time - last < 0.25) continue;
          if (this.opt.damage) {
            a.applyDamage(r.energy, r.la[0], r.la[1]);
            b.applyDamage(r.energy, r.lb[0], r.lb[1]);
          }
          if (r.speed > 1.2) this.pushEvent({ type: 'impact', car: a, other: b, energy: r.energy, speed: r.speed, x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
          this.judgeCollision(a, b, r.la, r.speed);
          this.judgeCollision(b, a, r.lb, r.speed);
          a.rs.lastImpact = b.rs.lastImpact = this.time;
        }
      }
    }
  }

  /** Stewards: a car that runs into the back of the car ahead at speed is to blame (`lp` = contact point on `car`, car frame). */
  judgeCollision(car, other, lp, speed) {
    if (this.opt.mode !== 'race' || this.phase !== 'racing' || this.time - this.t0 < 8 || speed < 3.5 || this.sc.state !== 'none') return;
    const ds = loopDelta(other.s, car.s, this.track.length);
    if (!(ds > 1.5 && lp[0] > 1.2 && Math.abs(lp[1]) < 1.1 && car.speed > other.speed + 2)) return;
    const rs = car.rs;
    if (this.time - (rs.lastFault || -99) < 8) return;
    rs.lastFault = this.time;
    rs.faults = (rs.faults || 0) + 1;
    const secs = car.info.isPlayer ? (rs.faults === 1 ? 5 : rs.faults === 2 ? 10 : 20) : 5;
    this.addPenalty(car, secs, rs.faults >= 3 && car.info.isPlayer ? 'Repeated collisions (drive-through equivalent)' : 'Causing a collision');
  }

  // ---- timing ---------------------------------------------------------------------------------------
  updateTiming(car, dt) {
    const rs = car.rs;
    const tr = this.track;
    const L = tr.length;
    const delta = loopDelta(car.s, rs.lastS, L);
    rs.lastS = car.s;
    if (this.phase === 'grid' || this.phase === 'countdown') {
      rs.dist += delta;
      return;
    }
    rs.dist += delta;
    if (car.speed > (rs.lapTop || 0)) rs.lapTop = car.speed;
    const prevMax = rs.maxDist;
    if (rs.dist > rs.maxDist) rs.maxDist = rs.dist;
    if (rs.finished && !car.driver && !car.info.isPlayer) return;
    // checkpoint crossing
    const cpNow = Math.floor(rs.maxDist / tr.cpSpacing);
    while (rs.cpIdx < cpNow) {
      rs.cpIdx++;
      const frac = (rs.cpIdx * tr.cpSpacing - prevMax) / Math.max(1e-6, rs.maxDist - prevMax);
      const idx = rs.cpIdx + 8;
      if (idx >= 0 && idx < rs.cpTimes.length) rs.cpTimes[idx] = this.time - dt * (1 - clamp(frac, 0, 1));
      const kLocal = ((rs.cpIdx % tr.cpCount) + tr.cpCount) % tr.cpCount;
      if (rs.lapCpBest && kLocal > 0 && rs.laps >= 1) rs.delta = rs.cpTimes[idx] - rs.lapStart - rs.lapCpBest[kLocal];
    }
    // sector change
    if (rs.laps >= 0) {
      const sec = car.s < tr.sectors[0] ? 0 : car.s < tr.sectors[1] ? 1 : 2;
      if (sec !== rs.sectorIdx && !(sec === 0 && rs.sectorIdx === 2 && prevMax >= rs.laps * L + L - 1)) {
        if ((rs.sectorIdx === 0 && sec === 1) || (rs.sectorIdx === 1 && sec === 2)) {
          const st = this.time;
          if (rs.laps >= 0) this.finishSector(car, rs.sectorIdx, st - rs.sectorStart);
          rs.sectorStart = st;
          rs.sectorIdx = sec;
        }
      }
    }
    // line crossing
    const lapsNow = Math.max(0, Math.floor(rs.maxDist / L));
    if (lapsNow > rs.laps) {
      const frac = (lapsNow * L - prevMax) / Math.max(1e-6, rs.maxDist - prevMax);
      const tc = this.time - dt * (1 - clamp(frac, 0, 1));
      rs.laps = lapsNow;
      this.crossLine(car, tc);
    }
  }

  finishSector(car, idx, t) {
    const rs = car.rs;
    if (rs.laps < 1 && idx !== 0 && idx !== 1) return;
    rs.sectors[idx] = t;
    rs.sectorPurple = rs.sectorPurple || [];
    if (t < rs.bestSectors[idx]) rs.bestSectors[idx] = t;
    if (t < this.bestSectors[idx]) {
      this.bestSectors[idx] = t;
      rs.sectorFlag = { idx, kind: 'purple', t };
    } else if (t <= rs.bestSectors[idx] + 1e-9) rs.sectorFlag = { idx, kind: 'green', t };
    else rs.sectorFlag = { idx, kind: 'none', t };
    if (car.info.isPlayer) this.pushEvent({ type: 'sector', car, idx, t, kind: rs.sectorFlag.kind });
  }

  crossLine(car, tc) {
    const rs = car.rs;
    const lapTime = tc - rs.lapStart;
    // last sector
    const s3 = tc - rs.sectorStart;
    this.finishSector(car, 2, s3);
    rs.sectorStart = tc;
    rs.sectorIdx = 0;
    if (rs.laps >= 1) {
      rs.last = lapTime;
      rs.lapTimes.push(lapTime);
      const ts = car.tyreSummary();
      rs.tele.push({ lap: rs.laps, time: lapTime, fuel: car.fuel, wear: ts.wear, temp: ts.temp, compound: car.compound.letter, topSpeed: rs.lapTop || 0, wet: this.wet });
      rs.lapTop = 0;
      const counts = rs.laps >= 2 || this.totalLaps === 1;
      const valid = !rs.invalidLap && counts;
      if (valid && lapTime < rs.best) {
        rs.best = lapTime;
        if (car.info.isPlayer) {
          const base = (rs.laps - 1) * this.track.cpCount + 8;
          const t0 = rs.cpTimes[base];
          const arr = new Float64Array(this.track.cpCount);
          let ok = !Number.isNaN(t0);
          for (let k = 0; k < arr.length && ok; k++) {
            arr[k] = rs.cpTimes[base + k] - t0;
            if (Number.isNaN(arr[k])) ok = false;
          }
          if (ok) rs.lapCpBest = arr;
          if (this.opt.mode === 'timetrial') this.commitGhost(lapTime);
        }
      }
      if (valid && lapTime < this.fastest.time) {
        this.fastest = { time: lapTime, car, lap: rs.laps };
        this.pushEvent({ type: 'fastest', car, time: lapTime });
      }
      this.pushEvent({ type: 'lap', car, time: lapTime, lap: rs.laps, best: lapTime <= rs.best, valid });
      rs.invalidLap = false;
    }
    rs.lapStart = tc;
    if (this.opt.mode === 'timetrial') this.ghostRec = [];
    // finish?
    if (!rs.finished && (rs.laps >= this.totalLaps || this.chequered)) {
      rs.finished = true;
      rs.finishTime = tc - this.t0;
      if (!this.chequered) {
        this.chequered = true;
        this.chequeredAt = this.time;
        this.pushEvent({ type: 'chequered', car });
      }
      this.pushEvent({ type: 'finish', car, time: rs.finishTime });
    }
  }

  updateRank() {
    const list = this.sorted;
    if (this.isQuali) {
      // qualifying order: best valid lap, then whoever has covered more ground
      list.sort((a, b) => (a.rs.best - b.rs.best) || (b.rs.maxDist - a.rs.maxDist));
      list.forEach((c, i) => {
        c.rs.pos = i + 1;
        const ahead = i > 0 ? list[i - 1] : null;
        c.ahead = ahead;
        c.behind = i < list.length - 1 ? list[i + 1] : null;
        c.gapAhead = ahead && Number.isFinite(c.rs.best) && Number.isFinite(ahead.rs.best) ? c.rs.best - ahead.rs.best : null;
        c.rs.lapsDown = 0;
      });
      return;
    }
    list.sort((a, b) => {
      const ra = a.rs, rb = b.rs;
      if (ra.finished !== rb.finished) return ra.finished ? -1 : 1;
      if (ra.finished && rb.finished) return ra.finishTime - rb.finishTime;
      return rb.maxDist - ra.maxDist;
    });
    const track = this.track;
    list.forEach((c, i) => {
      const rsx = c.rs;
      if (this.phase === 'racing' && this.time - this.t0 > 6 && rsx.pos > i + 1 && !rsx.inPitLane && !rsx.service && this.sc.state === 'none') {
        const prev = rsx.lastRank != null ? rsx.lastRank : rsx.pos;
        if (prev > i + 1) rsx.passes = (rsx.passes || 0) + (prev - (i + 1)); // net gain on track, not through other cars' pit stops (approximation)
      }
      rsx.lastRank = i + 1;
      c.rs.pos = i + 1;
      const ahead = i > 0 ? list[i - 1] : null;
      c.ahead = ahead;
      c.behind = i < list.length - 1 ? list[i + 1] : null;
      if (!ahead) {
        c.gapAhead = null;
        c.rs.gapLeader = 0;
        return;
      }
      c.gapAhead = this.timeGap(c, ahead);
      c.rs.gapLeader = (ahead.rs.gapLeader ?? 0) + (c.gapAhead ?? 0);
      if (ahead.rs.finished && c.rs.finished) {
        c.gapAhead = c.rs.finishTime - ahead.rs.finishTime;
      }
    });
    // laps down
    const lead = list[0];
    for (const c of list) c.rs.lapsDown = Math.max(0, Math.floor((lead.rs.maxDist - c.rs.maxDist) / track.length + 0.0001));
  }

  /** Time gap (s) between car c and the car directly ahead, from timing loops (falls back to distance / speed). */
  timeGap(c, ahead) {
    const rs = c.rs, ra = ahead.rs;
    const idx = rs.cpIdx + 8;
    const ta = ra.cpTimes[idx], tc = rs.cpTimes[idx];
    if (idx >= 0 && idx < rs.cpTimes.length && !Number.isNaN(ta) && !Number.isNaN(tc) && ra.cpIdx >= rs.cpIdx) {
      return Math.max(0, tc - ta);
    }
    const d = ra.maxDist - rs.maxDist;
    return Math.max(0, d / Math.max(20, c.speed));
  }

  updateAeroInteractions() {
    const L = this.track.length;
    for (const car of this.cars) {
      let f = 0;
      for (const o of this.cars) {
        if (o === car) continue;
        const ds = loopDelta(o.s, car.s, L);
        if (ds < 4 || ds > 42) continue;
        const dd = Math.abs(o.d - car.d);
        if (dd > 3.2) continue;
        const gap = ds - 5.5;
        const fa = clamp(1 - gap / 34, 0, 1) * clamp(1 - Math.max(0, dd - 0.6) / 2.6, 0, 1);
        if (fa > f) f = fa;
      }
      car.slipstream = f;
      car.dirtyAir = f * (this.phase === 'racing' ? 1 : 0);
    }
  }

  updateDrs(car) {
    const tr = this.track;
    const rs = car.rs;
    if (!tr.drs.length) return;
    const enabled = this.phase === 'racing' && (this.opt.mode === 'timetrial' || this.isQuali || rs.laps >= 1);
    const zone = tr.inDrsZone(car.s);
    for (let k = 0; k < tr.drs.length; k++) {
      const z = tr.drs[k];
      // detection line crossed since last tick?
      const rel = loopDelta(car.s, z.detect, tr.length);
      if (rel >= 0 && rel < Math.max(8, car.speed * 0.06)) {
        rs.drsEligible[k] = this.opt.mode === 'timetrial' || this.isQuali || (car.gapAhead != null && car.gapAhead < 1.0);
        (rs.drsGap || (rs.drsGap = []))[k] = car.gapAhead; // the gap measured at the detection line
      }
      if (zone !== k && rs.drsEligible[k] && loopDelta(car.s, z.end, tr.length) > 10 && loopDelta(car.s, z.end, tr.length) < 200) rs.drsEligible[k] = false;
    }
    car.drsAllowed = enabled && this.sc.state === 'none' && zone >= 0 && !!rs.drsEligible[zone] && !rs.inPitLane && !rs.service && Math.abs(car.latG) < 1.4;
    car.drsZone = zone;
    car.drsEligible = rs.drsEligible.some(Boolean);
  }

  // ---- pit stops -------------------------------------------------------------------------------------------
  updatePit(car, dt) {
    const tr = this.track;
    const rs = car.rs;
    if (!tr.pit) return;
    const inRange = tr.inPitRange(car.s) && this.onPitSurface(car) && car.d < -(tr.wr[car.i] + tr.kr[car.i] + 0.8);
    if (inRange !== rs.inPitLane) {
      rs.inPitLane = inRange;
      this.pushEvent({ type: inRange ? 'pitEntry' : 'pitExit', car });
      if (!inRange) rs.pitPenalised = false;
    }
    // speeding in the pit lane
    if (rs.inPitLane && tr.inPitLimiter(car.s)) {
      rs.pitZoneT = (rs.pitZoneT || 0) + dt;
      // a short grace period to get down to the limit after the entry line
      if (rs.pitZoneT > 1.6 && car.speed > tr.pit.limit + 2.5 && !car.driver) {
        rs.pitSpeedT += dt;
        if (rs.pitSpeedT > 0.35 && !rs.pitPenalised) {
          rs.pitPenalised = true;
          this.addPenalty(car, 5, 'Speeding in the pit lane');
        }
      } else rs.pitSpeedT = 0;
    } else rs.pitZoneT = 0;
    // AI pit planning
    const drv = car.driver;
    if (drv) {
      const ts = car.tyreSummary();
      const done = rs.stops >= 1;
      const lapsLeft = this.totalLaps - rs.laps;
      if (!drv.wantsPit && drv.pitState === 'none' && lapsLeft > 1) {
        if (rs.plannedStop != null && !done && rs.laps >= rs.plannedStop) drv.wantsPit = true;
        if (ts.wear > 0.72 && !done) drv.wantsPit = true;
        if (ts.wear > 0.88) drv.wantsPit = true;
        if (car.damageSummary().severity > 0.4 && lapsLeft > 2) drv.wantsPit = true;
        // weather: wets once the track is properly wet, slicks once it dries out
        if (this.track.pit && lapsLeft > 1) {
          if ((this.wet > 0.4 || (this.rain > 0.25 && this.wet > 0.12 + 0.1 * (car.info.number % 3))) && !car.compound.wetTyre) {
            drv.wantsPit = true;
            rs.nextCompound = 'wet';
          } else if (this.wet < 0.14 && this.rain < 0.05 && car.compound.wetTyre) {
            drv.wantsPit = true;
            rs.nextCompound = DRY_COMPOUND_IDS[1];
          }
        }
        if (this.sc.state === 'deployed' && ts.wear > 0.4 && rs.stops === 0 && lapsLeft > 3 && rs.plannedStop != null) drv.wantsPit = true; // a cheap stop
      }
    }
    // heavy damage: the pit wall calls the player in (B cancels it)
    if (car === this.player && this.opt.mode === 'race' && tr.pit && this.phase === 'racing') {
      const sv = car.damageSummary().severity;
      if (sv > 0.5 && !rs.damageBoxed && !rs.pitRequested && this.totalLaps - rs.laps > 1) {
        rs.damageBoxed = true;
        rs.pitRequested = true;
        this.pushEvent({ type: 'damageBox', car });
      }
      if (sv < 0.1) rs.damageBoxed = false;
      // pit-wall strategy: radio the plan, or in 'auto' mode put the call in for the player
      if (this.opt.pitCalls !== 'off' && !rs.pitRequested && !rs.service && !rs.damageBoxed) {
        rs.adviceT = (rs.adviceT || 0) + dt;
        if (rs.adviceT > 1) {
          rs.adviceT = 0;
          const adv = this.strategyAdvice(car);
          rs.advice = adv;
          if (adv && adv.thisLap && rs.calledLap !== adv.lap && car.s / tr.length > 0.12 && car.s / tr.length < 0.9) {
            rs.calledLap = adv.lap;
            this.pushEvent({ type: 'pitCall', car, advice: adv, auto: this.opt.pitCalls === 'auto' });
            if (this.opt.pitCalls === 'auto') { rs.pitRequested = true; if (!rs.nextCompound) rs.nextCompound = adv.compound; }
          }
        }
      }
    }
    // player: stopped in the box?
    if (rs.boxLatch && car.speed > 3) rs.boxLatch = false;
    if (car === this.player && !rs.service && !rs.boxLatch && rs.inPitLane && car.speed < 0.7) {
      const box = tr.pitBox(car.info.teamIdx);
      if (Math.abs(loopDelta(car.s, box.s, tr.length)) < 3.2 && Math.abs(car.d - box.d) < 2.8) car.pitStopped = true;
    }
    // service
    if (car.pitStopped && !rs.service) {
      let dur = 2.3 + this.rng() * (1.1 + (1 - this.opt.level) * 1.2);
      const dm = car.damageSummary();
      const repair = 4 * dm.fw + 2.5 * (dm.sideL + dm.sideR) + 2 * dm.rw + 1.5 * dm.floor;
      dur += repair;
      rs.service = { t: 0, dur, repair };
      if (car === this.player && this.opt.assists.pitGame && this.opt.mode === 'race') {
        rs.service.pg = makePitGame(); // the player's crew needs the right timing on each wheel nut
        rs.service.dur = Infinity;
        rs.pitAct = false;
        dur = 2.5;
      }
      this.pushEvent({ type: 'pitStopStart', car, dur, game: !!rs.service.pg });
    }
    if (rs.service) {
      rs.service.t += dt;
      const pg = rs.service.pg;
      if (pg) {
        const press = rs.pitAct;
        rs.pitAct = false;
        for (const r of stepPitGame(pg, rs.service.t, press)) this.pushEvent({ type: 'pitWheel', car, k: r.k, res: r.res });
        if (pg.done && rs.service.dur === Infinity) {
          rs.service.dur = pg.dur + (rs.service.repair || 0); // bodywork repairs run alongside the wheels but take longer than a clean stop
          if (pg.perfects === 4) rs.perfectStops = (rs.perfectStops || 0) + 1;
          this.pushEvent({ type: 'pitGameDone', car, dur: pg.dur, perfects: pg.perfects, misses: pg.misses });
        }
      }
      if (rs.service.t >= rs.service.dur) {
        let next = rs.nextCompound;
        if (!next) {
          const cur = car.compound.id;
          const options = (this.wet > 0.3 ? ['wet'] : DRY_COMPOUND_IDS).filter((c) => c !== cur);
          if (!options.length) options.push(cur);
          next = options[Math.floor(this.rng() * options.length)];
        }
        car.fitTyres(COMPOUNDS[next]);
        car.repair();
        rs.nextCompound = null;
        rs.compounds.push(next);
        rs.stops++;
        rs.stopLaps.push(rs.laps);
        rs.service = null;
        rs.pitRequested = false;
        rs.boxLatch = true;
        car.pitStopped = false;
        if (drv) {
          // new profile for the new tyre compound
          const team = car.info.team;
          drv.profile = this.getProfile(car.spec, `${team.id}:${next}`);
        }
        this.pushEvent({ type: 'pitStopEnd', car, compound: next });
      }
    }
    // player autopilot hand-over
    if (car === this.player && this.opt.assists.pitAuto && !rs.service) {
      if (!rs.pilot) {
        const box = tr.pitBox(car.info.teamIdx);
        rs.pilot = new AIDriver({ car, track: tr, profile: this.getProfile(car.spec, 'pilot'), level: 1, seed: 99, boxS: box.s, boxD: box.d });
        rs.pilot.dp.pace = 0.9;
        rs.pilot.goTime = 0;
      }
      rs.pilot.profile = this.getProfile(car.spec, 'pilot');
      rs.pilot.wantsPit = rs.pitRequested;
      if (rs.pilot.pitState === 'none') {
        const toEntry = mod(tr.pit.start - car.s, tr.length);
        if (rs.pitRequested && toEntry < 140 && toEntry > 10 && this.phase === 'racing') rs.pilot.pitState = 'in';
      }
      // sync pit stop completion
      if (rs.pilot.pitState === 'stopped' && !car.pitStopped) {
        rs.pilot.pitState = 'out';
      }
    }
  }

  addPenalty(car, secs, reason) {
    const rs = car.rs;
    rs.penalty += secs;
    rs.penaltyLog.push({ secs, reason, t: this.time });
    this.pushEvent({ type: 'penalty', car, secs, reason });
  }

  // ---- weather -----------------------------------------------------------------------------------------------
  /**
   * Pit-wall advice for a car from the wear it has actually shown: the lap to box on and the tyre to fit.
   * Returns null when there is nothing to say (no pit lane, no data yet, or the tyres will last to the flag).
   */
  strategyAdvice(car) {
    const rs = car.rs, tr = this.track;
    if (!tr.pit || this.opt.mode !== 'race' || this.phase !== 'racing' || rs.finished) return null;
    const total = this.totalLaps;
    const lastStop = rs.stopLaps.length ? rs.stopLaps[rs.stopLaps.length - 1] : 0;
    const done = rs.laps - lastStop;
    const frac = clamp(car.s / tr.length, 0, 1);
    const lapsOn = done + (done >= 1 ? 0 : frac);
    const left = total - rs.laps;
    if (left < 2) return null;
    const wearNow = car.tyreSummary().wear;
    const wet = this.wet;
    let reason = 'wear', want = false;
    // weather beats everything
    let compound = null;
    if (wet > 0.35 && !car.compound.wetTyre) { want = true; reason = 'wet'; compound = 'wet'; }
    else if (wet < 0.14 && this.rain < 0.05 && car.compound.wetTyre) { want = true; reason = 'dry'; compound = DRY_COMPOUND_IDS[1]; }
    const rate = lapsOn >= 0.6 ? wearNow / lapsOn : 0; // wear per lap measured so far
    let boxIn = Infinity; // laps from now (0 = this lap)
    if (rate > 0.004 && !car.compound.wetTyre) {
      boxIn = Math.max(0, Math.floor((0.7 - wearNow) / rate - 0.15));
    }
    const finishWear = wearNow + rate * left;
    const mandatoryOpen = this.opt.mandatoryStop && rs.stops === 0 && !car.compound.wetTyre;
    if (mandatoryOpen) {
      // the stop has to happen before the last lap or two
      boxIn = Math.min(boxIn, Math.max(0, left - 3));
      reason = boxIn === Math.max(0, left - 3) && finishWear < 0.85 ? 'rules' : reason;
    } else if ((finishWear < 0.88 || left < 3) && !want) return null;
    if (!want && boxIn === Infinity) return null;
    if (!want && boxIn > 0 && boxIn > left - 2) return null;
    if (!compound) {
      const remaining = Math.max(1, left - boxIn);
      const order = remaining <= 5 ? ['soft', 'medium', 'hard'] : remaining <= 10 ? ['medium', 'hard', 'soft'] : ['hard', 'medium', 'soft'];
      const must = mandatoryOpen ? order.filter((c) => c !== car.compound.id) : order;
      compound = (must.length ? must : order)[0];
    }
    const thisLap = want || boxIn === 0;
    return { lap: rs.laps + 1 + (thisLap ? 0 : boxIn), thisLap, nextLap: !thisLap && boxIn === 1, compound, reason };
  }

  setupWeather() {
    const w = this.opt.weather;
    this.wx = [];
    if (this.isQuali || this.opt.mode === 'timetrial') {
      if (w === 'light') this.wet = 0.5;
      else if (w === 'heavy') this.wet = 0.9;
      if (w === 'light' || w === 'heavy') this.wx.push({ t0: -1, t1: 1e9, level: w === 'heavy' ? 1 : 0.45 });
      this.rain = this.wx.length ? this.wx[0].level : 0;
      return;
    }
    const lapT = this.track.length / 52; // rough lap time, s
    const dur = lapT * Math.min(this.opt.laps, 40);
    const r = this.rng;
    if (w === 'light') {
      this.wet = 0.5;
      this.wx.push({ t0: -1, t1: 1e9, level: 0.45 });
    } else if (w === 'heavy') {
      this.wet = 0.92;
      this.wx.push({ t0: -1, t1: 1e9, level: 1 });
    } else if (w === 'changing') {
      // one or two showers somewhere in the race
      const n = dur > 500 && r() < 0.5 ? 2 : 1;
      let t = dur * (0.15 + 0.25 * r());
      for (let k = 0; k < n; k++) {
        const len = Math.max(90, dur * (0.15 + 0.2 * r()));
        this.wx.push({ t0: t, t1: t + len, level: 0.5 + 0.5 * r() });
        t += len + dur * (0.15 + 0.1 * r());
      }
    }
    this.rain = this.wx.length && this.wx[0].t0 < 0 ? this.wx[0].level : 0;
  }

  /** Forecast text for the HUD / radio: the next change, if there is one. */
  forecast() {
    const t = this.t0 == null ? 0 : this.time - this.t0;
    for (const seg of this.wx) {
      if (seg.t0 > t) return { rainIn: seg.t0 - t, level: seg.level };
    }
    return null;
  }

  updateWeather(dt) {
    if (this.phase !== 'racing' && this.phase !== 'countdown' && this.phase !== 'grid') return;
    const t = this.t0 == null ? 0 : this.time - this.t0;
    let target = 0;
    for (const seg of this.wx) if (t >= seg.t0 && t < seg.t1) target = Math.max(target, seg.level);
    // rain intensity eases in and out
    this.rain += clamp(target - this.rain, -dt * 0.02, dt * 0.015);
    // water collects when it rains and dries slowly (faster when it is not raining)
    if (this.rain > 0.04) this.wet = Math.min(1, this.wet + this.rain * 0.012 * dt);
    else this.wet = Math.max(0, this.wet - 0.0045 * dt);
    if (this.rain > 0.04 && this.wet > this.rain * 1.05 + 0.1) this.wet -= 0.004 * dt; // light rain only wets the track so much
    this.maxWet = Math.max(this.maxWet || 0, this.wet);
    for (const c of this.cars) c.wetness = this.wet;
    const pl = this.player;
    if (pl) pl.rs.maxDamage = Math.max(pl.rs.maxDamage || 0, pl.damageSummary().worst);
  }

  // ---- safety car --------------------------------------------------------------------------------------------
  /** AI cars that are stranded: stationary on or beside the track, not in the pits and not at the start. */
  disabledCars() {
    const tr = this.track;
    const out = [];
    for (const c of this.cars) {
      if (!c.driver || c.rs.finished || c.rs.inPitLane || c.rs.service || c.inGarage) continue;
      const beside = Math.abs(c.d) > tr.wl[c.i] + 1.5 || Math.abs(c.d) > tr.wr[c.i] + 1.5;
      if (c.speed < 3.5 && (c.driver.stuckT > 1.2 || (beside && c.speed < 1.5))) out.push(c);
    }
    return out;
  }

  updateSafetyCar(dt) {
    const sc = this.sc;
    const tr = this.track;
    if (!this.opt.safetyCar || this.isQuali || this.opt.mode === 'timetrial' || this.phase !== 'racing') return;
    const t = this.time - this.t0;
    const dis = t > 20 ? this.disabledCars() : [];
    const stalled = this.player && this.player.rs.pos > 0 ? dis : dis;
    // yellow flag while any car is stranded (local hazard)
    const yel = stalled.length > 0 && sc.state === 'none';
    if (yel !== this.yellow) {
      this.yellow = yel;
      this.pushEvent({ type: yel ? 'yellow' : 'yellowClear' });
    }
    if (sc.state === 'none') {
      sc.count = stalled.length;
      const lapsLeft = this.sorted[0] ? this.totalLaps - this.sorted[0].rs.laps : 9;
      if (stalled.length >= 3 && lapsLeft > 1 && !this.chequered) this.deploySafetyCar();
      return;
    }
    // positions the pace car uses
    sc.t += dt;
    const lead = this.sorted.find((c) => !c.rs.finished && !c.rs.dnf) || null;
    const vTarget = sc.state === 'ending' ? 60 : 38;
    const accel = sc.v < vTarget ? 4 : -4;
    sc.v += clamp(vTarget - sc.v, -Math.abs(accel) * dt, Math.abs(accel) * dt);
    // wait for the leader when it is far behind, so the queue forms behind the pace car
    if (sc.state === 'deployed' && lead) {
      const gap = loopDelta(sc.s, lead.s, tr.length);
      if (gap > 120) sc.v = Math.min(sc.v, Math.max(20, lead.speed * 0.9));
      else if (gap < 25) sc.v = Math.max(sc.v, lead.speed + 2);
    }
    sc.s = mod(sc.s + sc.v * dt, tr.length);
    const ps = sc.pseudo;
    ps.s = sc.s;
    ps.speed = sc.v;
    ps.d = 0;
    if (sc.state === 'deployed') {
      sc.clearT = stalled.length ? 0 : sc.clearT + dt;
      if (sc.clearT > 8 && sc.t > 28) {
        sc.state = 'ending';
        this.pushEvent({ type: 'scEnding' });
      }
    } else if (sc.state === 'ending' && tr.pit) {
      // the pace car peels off into the pit lane; green flag once it has gone
      const toPit = mod(tr.pit.start - sc.s, tr.length);
      if (toPit > tr.length - 40 || toPit < 3) {
        sc.state = 'none';
        this.yellow = false;
        this.pushEvent({ type: 'scEnd' });
      }
    } else if (sc.state === 'ending' && !tr.pit && sc.t > 60) {
      sc.state = 'none';
      this.pushEvent({ type: 'scEnd' });
    }
    this.policeSafetyCar();
  }

  deploySafetyCar() {
    const sc = this.sc;
    const lead = this.sorted.find((c) => !c.rs.finished && !c.rs.dnf);
    if (!lead) return;
    sc.state = 'deployed';
    sc.t = 0;
    sc.clearT = 0;
    sc.s = mod(lead.s + 60, this.track.length);
    sc.v = Math.max(38, lead.speed * 0.9);
    sc.pseudo.s = sc.s;
    sc.pseudo.speed = sc.v;
    sc.ahead = this.player ? this.player.ahead : null;
    this.yellow = false;
    for (const c of this.cars) {
      c.drsAllowed = false; // DRS is shut off the moment the pace car is out
      c.rs.drsEligible = [];
    }
    this.pushEvent({ type: 'scDeploy' });
  }

  /** Overtaking behind the pace car is not allowed: the player is penalised for passing a running car. */
  policeSafetyCar() {
    const p = this.player, sc = this.sc;
    if (!p || p.rs.finished || p.rs.inPitLane || this.opt.mode !== 'race') return;
    if (sc.state !== 'deployed') return;
    const prev = sc.ahead;
    const now = p.ahead;
    if (prev && prev !== now && p.behind === prev && prev.speed > 8 && !prev.rs.inPitLane && this.time - (sc.lastPen || -99) > 15) {
      sc.lastPen = this.time;
      this.addPenalty(p, 5, 'Overtaking under the safety car');
    }
    sc.ahead = now;
  }

  // ---- rules ---------------------------------------------------------------------------------------------------
  updateRules(car, dt) {
    const rs = car.rs;
    if (this.phase !== 'racing' || !car.info.isPlayer) return;
    // track limits: all four wheels beyond the white line (kerb counts as track)
    let off = 0;
    for (let w = 0; w < 4; w++) {
      const s = car.surf[w];
      if (s === SURF.GRASS || s === SURF.GRAVEL || s === SURF.RUNOFF) off++;
    }
    if (off === 4) {
      rs.offTimer += dt;
      if (rs.offTimer > 0.15 && rs.limitTimer <= 0) {
        rs.limitTimer = 2.5;
        rs.invalidLap = true;
        rs.warnings++;
        if (this.opt.mode === 'race') {
          if (rs.warnings % 3 === 0) this.addPenalty(car, 5, 'Track limits (3 warnings)');
          else this.pushEvent({ type: 'warning', car, n: rs.warnings % 3 });
        } else this.pushEvent({ type: 'lapInvalid', car });
      }
    } else rs.offTimer = 0;
    if (rs.limitTimer > 0) rs.limitTimer -= dt;
  }

  // ---- race end -------------------------------------------------------------------------------------------------------
  updateFinish() {
    if (this.phase !== 'racing') return;
    if (this.chequered) {
      const open = this.cars.filter((c) => !c.rs.finished && !c.rs.dnf);
      const pl = this.player && this.player.rs.finished;
      const since = this.time - this.chequeredAt;
      // everyone still out there gets until the flag has had time to reach them; a parked or absent player does not hold the session open
      const parked = this.player && !pl && this.player.speed < 3;
      if (!open.length || (since > 240 && (pl || parked)) || since > 420) {
        this.endRace();
      }
    }
  }

  endRace() {
    this.phase = 'finished';
    // mandatory stop penalty
    if (this.opt.mandatoryStop && this.player) {
      const rs = this.player.rs;
      if (rs.stops < 1 || new Set(rs.compounds).size < 2) this.addPenalty(this.player, 15, 'Mandatory stop / two compounds not completed');
    }
    this.pushEvent({ type: 'raceEnd' });
  }

  /** Qualifying order with each car's best lap (cars without a valid lap follow in track-position order). */
  qualifying() {
    const list = this.cars.map((c) => ({ car: c, info: c.info, best: c.rs.best, laps: c.rs.laps, dist: c.rs.maxDist }));
    list.sort((a, b) => (a.best - b.best) || (b.dist - a.dist));
    list.forEach((e, i) => (e.pos = i + 1));
    const times = {};
    for (const e of list) if (Number.isFinite(e.best)) times[e.info.isPlayer ? 'YOU' : e.info.code] = e.best;
    return { list, times };
  }

  /** Seconds left in a qualifying session (0 once the flag is out). */
  qualiLeft() {
    if (!this.isQuali || this.t0 == null) return this.opt.qualiTime;
    return Math.max(0, this.opt.qualiTime - (this.time - this.t0));
  }

  /** Final classification with penalties applied. */
  classification() {
    const list = this.cars.map((c) => ({
      car: c,
      info: c.info,
      laps: Math.min(c.rs.laps, this.totalLaps),
      time: c.rs.finished ? c.rs.finishTime + c.rs.penalty : null,
      raw: c.rs.finishTime,
      penalty: c.rs.penalty,
      best: c.rs.best,
      stops: c.rs.stops,
      dist: c.rs.maxDist,
      gridPos: c.info.gridPos,
    }));
    list.sort((a, b) => {
      if ((a.time != null) !== (b.time != null)) return a.time != null ? -1 : 1;
      if (a.time != null && b.time != null) return a.laps === b.laps ? a.time - b.time : b.laps - a.laps;
      return b.dist - a.dist;
    });
    list.forEach((e, i) => (e.pos = i + 1));
    const POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
    list.forEach((e) => (e.points = (POINTS[e.pos - 1] || 0) + (this.fastest.car === e.car && e.pos <= 10 ? 1 : 0)));
    return list;
  }

  // ---- AI helpers -------------------------------------------------------------------------------------------------------
  adaptPace() {
    if (!this.opt.adaptive || !this.player || this.stepCount % 240 !== 0) return;
    const p = this.player;
    for (const car of this.cars) {
      if (!car.driver || car.rs.finished) continue;
      const gap = (car.rs.maxDist - p.rs.maxDist) / 60; // seconds-ish at 60 m/s
      let k = 1;
      if (gap > 6) k = 1 - clamp((gap - 6) * 0.004, 0, 0.05);
      else if (gap < -6) k = 1 + clamp((-gap - 6) * 0.004, 0, 0.03);
      car.driver.paceAdapt = k;
    }
  }

  recoverStuck(dt) {
    for (const car of this.cars) {
      const drv = car.driver;
      if (drv && drv.stuckT > 5) {
        drv.stuckT = 0;
        this.resetToTrack(car);
      }
    }
  }

  /** Marshals put a car back on the racing line, pointing the right way, at walking pace. */
  resetToTrack(car, penalty = 0) {
    const tr = this.track;
    const p = tr.pointAt(car.s, clamp(tr.lineAt(car.s) * 0.5, -tr.wr[car.i] + 3, tr.wl[car.i] - 3));
    car.reset(p.x, p.y, p.heading, 6);
    car.repair();
    car.rs.resets++;
    car.rs.lastS = car.s;
    car.rs.dist = car.rs.maxDist;
    car.dirtyAir = 0;
    if (car.driver) {
      car.driver.offset = 0;
      car.driver.mistake = null;
    }
    car.rs.drsLatch = false;
    if (penalty) this.addPenalty(car, penalty, 'Car recovered');
    this.pushEvent({ type: 'recover', car });
  }

  // ---- ghost (time trial) -----------------------------------------------------------------------------
  recordGhost() {
    if (this.phase !== 'racing' || !this.player) return;
    if (this.stepCount % 12 !== 0) return;
    const c = this.player;
    this.ghostRec.push(c.x, c.y, c.theta, c.steer);
  }

  commitGhost(lapTime) {
    this.ghostBest = { time: lapTime, frames: Float32Array.from(this.ghostRec), track: this.track.id };
    this.pushEvent({ type: 'ghost', time: lapTime });
  }

  ghostPose(t) {
    const g = this.ghostBest;
    if (!g) return null;
    const f = t / (12 * DT);
    const i = Math.floor(f);
    const n = g.frames.length / 4;
    if (i < 0 || i >= n - 1) return null;
    const k = f - i;
    const a = i * 4, b = a + 4;
    let dth = g.frames[b + 2] - g.frames[a + 2];
    if (dth > Math.PI) dth -= 2 * Math.PI;
    if (dth < -Math.PI) dth += 2 * Math.PI;
    return {
      x: g.frames[a] + (g.frames[b] - g.frames[a]) * k,
      y: g.frames[a + 1] + (g.frames[b + 1] - g.frames[a + 1]) * k,
      theta: g.frames[a + 2] + dth * k,
      steer: g.frames[a + 3],
    };
  }
}
