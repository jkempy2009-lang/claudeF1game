import { wetGripFactor } from './carspec.js';
import { clamp, lerp, loopDelta, mod, smoothstep, wrapAngle, mulberry32 } from '../util/math.js';
import { RaceBrain } from './racecraft.js';

const CAR_LEN = 5.5;
const RACE_MARGIN = 0.02; // share of the hot-lap pace a top driver leaves in hand in a race
const PIT_LIMIT = 22.2;

/** Maps a 0..1 difficulty slider to driver behaviour. */
export function difficultyParams(level) {
  // 0..1 is the normal slider; above 1 is the 'Apex' preset: the same cars driven right at the limit of the profile
  const L = clamp(level, 0, 1.3);
  const Lc = Math.min(1, L);
  return {
    // fraction of the speed profile the AI drives: Legend = 100 % (about the pace of a very good human lap), Rookie ~ 21 % slower
    pace: 0.8 + 0.2 * Math.pow(L, 0.8),
    mistakesPerLap: 1.4 * (1 - Lc) ** 2 + 0.03 * (1 - 0.6 * Math.max(0, L - 1) / 0.3),
    reaction: Math.max(0.1, 0.55 - 0.38 * L),
    aggression: Math.min(1, 0.2 + 0.7 * L),
    lineScale: 0.55 + 0.45 * Math.min(1, L * 1.4), // how much of the racing line they use (novices stay near the middle)
    brakeBias: 0.85 + 0.13 * Lc, // how late they brake relative to the maximum
  };
}

/**
 * Autonomous driver. Same inputs a human has (throttle, brake, steering, DRS, ERS boost, pit limiter) and the same
 * car physics - it simply tracks a minimum-curvature racing line at the speeds from the speed profile.
 */
export class AIDriver {
  constructor({ car, track, profile, skill = 1, level = 0.5, seed = 1, teamIdx = 0, boxS = null, boxD = null }) {
    this.car = car;
    this.track = track;
    this.profile = profile;
    this.skill = skill; // 0.97..1.0 personal talent multiplier
    this.rng = mulberry32(seed * 7919 + 13);
    this.teamIdx = teamIdx;
    this.box = { s: boxS, d: boxD };
    this.inp = { throttle: 0, brake: 0, steer: 0, drs: false, boost: false, gearUp: false, gearDown: false, pitLimit: 0 };
    this.setLevel(level);

    this.offset = 0; // current lateral offset from the base line (overtaking)
    this.offTarget = 0;
    this.rcMode = 'free';
    this.neigh = [];
    this.neighTimer = 0;
    this.paceAdapt = 1;
    this.t = 0;
    this.goTime = null;
    this.mistake = null; // {from, to, factor}
    this.lastMistakeLap = -1;
    this.mistakeRoll = 0;
    this.stuckT = 0;
    this.lastMistakeCorner = '';
    // pit
    this.wantsPit = false;
    this.pitState = 'none'; // none | in | stopped | out
    this.pitDone = 0;
    this.autopilotPit = false;
    this.gripAdapt = 1;
    this.lastLap = 0;
    this.speedUp = 1;
    this.brain = new RaceBrain(this); // the decision matrix: what to do about the cars around us
    this.intent = this.brain.intent;
    this.managePower = false; // the Race switches this on for the field: they run their own ERS and fuel modes
  }

  setLevel(level) {
    this.level = level;
    this.raceK = 1;
    this.dp = difficultyParams(level);
    this.dp.pace *= this.track.def?.aiPace ?? 1; // per-circuit calibration (see trackdefs)
    this.react = this.dp.reaction * (0.7 + 0.6 * this.rng());
  }

  // ---- reference path ------------------------------------------------------------------------
  basePath(s) {
    return this.track.lineAt(s) * this.dp.lineScale;
  }

  pathD(s, withOffset = true) {
    const tr = this.track;
    let d = this.basePath(s) + (withOffset ? this.offset : 0);
    if (this.pitState === 'in' || this.pitState === 'stopped' || this.pitState === 'out') {
      const b = tr._pitBlend(s);
      if (b > 0.001) {
        // follow the actual lane centreline (it slides back into the track on the exit ramp)
        let target = tr.pitCentre(s) + 1.4 * b;
        if (this.box.s != null) {
          // slide into the working lane for the box, and back out afterwards
          const rel = loopDelta(s, this.box.s, tr.length);
          const toBox = smoothstep(-70, -18, rel) * (1 - smoothstep(10, 55, rel));
          target = lerp(target, this.box.d, toBox);
        }
        d = lerp(d, target, smoothstep(0, 0.45, b));
      }
    }
    return d;
  }

  /** Called when the Race recomputes timing so the AI can plan strategy. */
  update(dt, race) {
    const car = this.car, tr = this.track, inp = this.inp;
    const prof = this.profile;
    const V = car.speed;
    this.t += dt;
    // racing is not qualifying: the very top drivers keep a little in hand when there are other cars around (about 1.5 % at full level)
    this.raceK = race.opt && race.opt.mode === 'race' ? 1 - RACE_MARGIN * smoothstep(0.75, 1.0, this.level) : 1;

    // --- pre-race: sit on the grid, launch after lights out + reaction
    if (race.phase === 'grid' || race.phase === 'countdown') {
      inp.throttle = 0;
      inp.brake = 1;
      inp.steer = 0;
      inp.drs = false;
      inp.boost = false;
      inp.pitLimit = 0;
      return inp;
    }
    if (this.goTime === null) this.goTime = race.time + this.react + (this.releaseDelay || 0);

    const s = car.s;
    const inPitZone = this.pitState !== 'none';

    // --- traffic (30 Hz is plenty)
    this.neighTimer -= dt;
    if (this.neighTimer <= 0) {
      this.neighTimer = 1 / 30;
      this.scanTraffic(race);
    }

    // --- feel for the tyres: slow down as grip fades (cold, overheated or worn)
    this.gripT = (this.gripT || 0) - dt;
    if (this.gripT <= 0) {
      this.gripT = 0.5;
      const comp = car.compound;
      let g = 0;
      for (let w = 0; w < 4; w++) {
        const tf = clamp(1 - 0.2 * ((car.temp[w] - comp.tOpt) / comp.tRange) ** 2, 0.7, 1.02);
        const wr = car.wear[w];
        const wf = 1 - 0.06 * wr - 0.2 * smoothstep(0.62, 1.0, wr);
        g += tf * wf;
      }
      g /= 4;
      // a broken wing, floor or punctured tyre costs grip as well: drive to what the car has left
      const punct = Math.max(car.puncture[0], car.puncture[1], car.puncture[2], car.puncture[3]);
      g *= wetGripFactor(comp, car.wetness || 0);
      g *= 1 - clamp(0.4 * (car.damageFront || 0) + 0.15 * (car.damageRear || 0) + 0.2 * (car.damageFloor || 0) + 0.12 * ((car.damageSideL || 0) + (car.damageSideR || 0)) + 0.35 * punct, 0, 0.6);
      const want = Math.sqrt(clamp(g / 0.96, 0.35, 1));
      this.gripAdapt += (Math.min(1, want) - this.gripAdapt) * 0.5;
    }

    // --- mistakes: roll once per corner approach
    this.updateMistakes(race);

    // --- pit planning
    this.updatePit(race);

    // --- lateral target (follow base line, slide aside for traffic)
    this.offset += clamp(this.offTarget - this.offset, -dt * 3.2, dt * 3.2);

    // --- steering: feed-forward from path curvature + Stanley feedback in Frenet coordinates
    const sf = s + clamp(V * 0.09, 1, 9); // preview distance: the car takes ~0.1 s to respond to steering
    const D0 = this.pathD(s), Df = this.pathD(sf);
    const DD = (this.pathD(s + 4) - 2 * this.pathD(s) + this.pathD(s - 4)) / 16;
    const kt = tr.at(tr.curv, sf);
    const kPath = kt / Math.max(0.3, 1 - kt * Df) + DD;
    const slope = (this.pathD(s + 2) - this.pathD(s - 2)) / 4; // symmetric around s, matching the heading it is added to
    const pathHeading = tr.hdgAt(s) + Math.atan(slope);
    const beta = Math.atan2(car.v, Math.max(car.u, 2));
    const psi = wrapAngle(car.theta + beta - pathHeading);
    const e = car.d - D0;
    const L = car.spec.wheelbase;
    let delta = Math.atan(L * kPath);
    delta += 0.0016 * V * V * kPath; // understeer gradient
    delta -= 1.15 * psi + Math.atan((1.9 * e) / (V + 3));
    const maxSteer = car.spec.maxSteer / (1 + (V / 46) ** 2);
    inp.steer = clamp(delta / maxSteer, -1, 1);

    // --- speed target
    const look = clamp(V * 0.09, 2, 14);
    const idx = tr.idx(s + look);
    const air = 1 - 0.06 * (car.dirtyAir || 0); // following closely costs front downforce: take the corners a touch slower
    // every speed target is the same physical profile times this driver's pace, skill, grip feel and traffic effects
    const it = this.intent;
    const paceK = this.dp.pace * this.skill * this.raceK * this.paceAdapt * this.gripAdapt * air * it.push * it.yieldLift;
    let vt = prof.v[idx] * paceK * (this.mistake && this.mistake.active ? this.mistake.factor : 1);
    // use the whole car on the straights: with the wing open the drag falls and the car keeps accelerating past the plain profile speed
    if (this.managePower && this.pitState === 'none' && Math.abs(kt) < 0.0025 && Math.abs(kPath) < 0.003) vt *= 1 + (inp.drs ? 0.05 : 0) + (inp.boost ? 0.02 : 0);
    // off the road (either side; the pit lane is not off the road): slow down and return
    const inPitArea = this.pitState !== 'none' && tr._pitBlend(s) > 0.01;
    if (car.onGrass || (!inPitArea && (car.d > tr.wl[car.i] + 1.5 || -car.d > tr.wr[car.i] + 1.5))) vt = Math.min(vt, 28);
    // traffic cap
    vt = Math.min(vt, this.trafficCap(vt, race));
    if (race.sc && race.sc.state !== 'none' && (this.pitState === 'none' || !tr.inPitRange(car.s))) {
      // behind the pace car everyone slows; cars at the back may close up the queue a little faster
      const ahead = car.ahead;
      const gapM = ahead ? Math.max(0, loopDelta(ahead.s, car.s, tr.length)) : 0;
      const scGap = Math.max(0, loopDelta(race.sc.s, car.s, tr.length));
      vt = Math.min(vt, 40 + 0.07 * Math.min(ahead ? gapM : scGap, 320));
    }
    // pit lane + approach braking to the limiter and the box
    inp.pitLimit = 0;
    if (this.pitState !== 'none') {
      const limStart = tr.pit.limitStart;
      const toLimit = mod(limStart - s, tr.length);
      if (this.pitState === 'in' && toLimit < 500 && !tr.inPitLimiter(s)) {
        // arrive at the limit at the start of the entry ramp (the turn-in), not after it
        const toRamp = mod(tr.pit.start - s, tr.length);
        const d = toRamp < tr.length - 80 ? Math.max(0, toRamp - 6) : 0;
        vt = Math.min(vt, Math.sqrt(PIT_LIMIT * PIT_LIMIT * 0.94 + 2 * 9 * d));
      }
      if (tr.inPitLimiter(s) || this.pitState === 'stopped') {
        vt = Math.min(vt, PIT_LIMIT * 0.97);
        inp.pitLimit = PIT_LIMIT;
      }
      if (this.pitState === 'in' && this.box.s != null && tr.inPitLimiter(s)) {
        const toBox = loopDelta(this.box.s, s, tr.length);
        if (toBox > -3 && toBox < 200) vt = Math.min(vt, Math.sqrt(2 * 6.5 * Math.max(0, toBox - 0.1)) + 0.25);
      }
      if (this.pitState === 'stopped') vt = 0;
    }

    // --- longitudinal control
    // Brake-to-target scan: for every upcoming profile point, the deceleration needed to arrive at that point's
    // target speed from our *actual* speed; brake for the worst one. Otherwise follow the target with a P term.
    let thr = 0, brk = 0;
    {
      // cold carbon bites less and cooked carbon fades: brake for what the discs can deliver right now
      const bt = car.brakeTemp;
      const brakeEff = bt ? (0.86 + 0.14 * smoothstep(120, 420, (bt[0] + bt[1] + bt[2] + bt[3]) / 4)) * (1 - 0.3 * smoothstep(880, 1150, Math.max(bt[0], bt[1], bt[2], bt[3]))) : 1;
      const capBrake = Math.max(12, prof.env.brakeDecel(Math.max(V, 5), 0.92) * this.gripAdapt * this.gripAdapt * brakeEff);
      const maxDist = (V * V) / (2 * 0.4 * capBrake) + 40;
      let aReq = 0;
      const step = Math.max(1, Math.round(6 / prof.ds));
      const base = tr.idx(s);
      for (let k = 1, dist = 0; dist < maxDist; k += step) {
        dist = k * prof.ds;
        const vj = prof.v[(base + k) % tr.N] * paceK;
        if (V > vj) {
          const a = (V * V - vj * vj) / (2 * Math.max(dist - 2, 1));
          if (a > aReq) aReq = a;
        }
      }
      // pit lane: the limiter line and the box are hard braking targets just like corners
      if (this.pitState === 'in') {
        if (!tr.inPitLimiter(s)) {
          // be at the limit before the entry ramp starts turning: braking and the first steering must not overlap
          const toRamp = mod(tr.pit.start - s, tr.length);
          const toLimit = mod(tr.pit.limitStart - s, tr.length);
          const vL = PIT_LIMIT * 0.97;
          const dist = toRamp < tr.length - 80 ? toRamp * 0.8 : toLimit;
          if (toLimit < 500 && V > vL) aReq = Math.max(aReq, (V * V - vL * vL) / (2 * Math.max(dist - 3, 1)));
        } else if (this.box.s != null) {
          const toBox = loopDelta(this.box.s, s, tr.length);
          if (toBox > -2 && toBox < 220 && V > 2) aReq = Math.max(aReq, (V * V) / (2 * Math.max(toBox - 0.3, 0.6)));
        }
      }
      const aDrag = (car.aeroDrag + 0.014 * car.mass * 9.81) / car.mass;
      const errNow = vt - V;
      const brakeFromErr = errNow < -1.5 ? (-errNow - 1.5) * 2.2 : 0;
      // brake late: only once the stopping demand approaches what the brakes (plus drag) can do; until then follow
      // the target speed. Lower levels leave a bigger margin (brakeBias).
      const aLate = (0.78 - 0.14 * (car.wetness || 0)) * this.dp.brakeBias * this.intent.brakeLate * (capBrake + aDrag * 0.9);
      // traffic: deceleration needed to stop behind a car in our lane that is slower than us or braking
      let aTraffic = 0;
      for (const n of this.neigh) {
        const closing = V - n.v;
        if (n.ds <= 0 || n.ds > 40 + 2.4 * Math.max(0, closing) || Math.abs(n.dd) > 2.6) continue;
        if (closing <= 0) continue;
        const gap = Math.max(n.ds - CAR_LEN - 4, 0.8);
        const aLead = Math.max(0, -(n.c.axF || 0)) * 0.7;
        aTraffic = Math.max(aTraffic, aLead + (closing * closing) / (2 * gap));
      }
      const aBrake = Math.max(aReq > aLate ? aReq - aDrag * 0.9 : 0, aTraffic > 0.5 * aLate ? aTraffic - aDrag * 0.5 : 0, brakeFromErr);
      if (aBrake > 1.2) {
        brk = clamp(aBrake / capBrake, 0, 1);
      } else {
        const aMax = Math.max(6, prof.env.accel(Math.max(V, 5), 1));
        const want = 1.8 * errNow + 0;
        thr = clamp(0.16 + (want + aDrag) / (aMax + aDrag), 0, 1);
        if (errNow > 3) thr = 1;
        // friction circle: the more lateral grip we are using, the less throttle the rears can take
        const ayUse = Math.min(1, Math.abs(car.ayF) / Math.max(10, prof.env.latAccel(Math.max(V, 10), 0.97) * this.gripAdapt * this.gripAdapt));
        thr = Math.min(thr, 0.15 + 1.1 * Math.sqrt(Math.max(0, 1 - ayUse * ayUse)));
        // rear stepping out: lift
        const aR = Math.max(Math.abs(car.alpha[2]), Math.abs(car.alpha[3]));
        if (aR > 0.06) thr *= clamp(1 - (aR - 0.06) * 18, 0.1, 1);
      }
      if (this.pitState === 'stopped' || (vt < 0.3 && V < 1)) {
        thr = 0;
        brk = 1;
      }
    }
    // launch: wait for reaction time, then full power
    if (race.time < this.goTime) {
      thr = 0;
      brk = 1;
    } else if (V < 15 && race.time - this.goTime < 4 && this.pitState === 'none' && !this.neigh.some((n) => n.ds > 0 && n.ds < 12 && Math.abs(n.dd) < 2.6 && n.v < V + 3)) {
      thr = Math.max(thr, 1); // the launch: full power, unless a slow starter is right in front
      brk = 0;
    }
    inp.throttle = thr;
    inp.brake = brk;

    // --- DRS / ERS
    const straight = Math.abs(kt) < 0.0025 && Math.abs(kPath) < 0.003;
    inp.drs = !!car.drsAllowed && thr > 0.95 && brk < 0.05 && straight;
    const underSc = race.sc && race.sc.state !== 'none';
    const gapAhead = car.gapAhead ?? 99;
    inp.boost = !underSc && thr > 0.95 && straight && car.soc > 0.12 && (gapAhead < 1.8 || car.soc > 0.55 || race.lapsLeft(car) <= 1 || (this.intent.ers === 2 && car.soc > 0.1));
    if (this.managePower && !underSc) {
      // engine and energy modes follow the racecraft plan (harvest behind a car, attack mode in a fight)
      car.ersMode = this.intent.ers;
      car.fuelMode = this.intent.fuel;
    }

    // --- stuck recovery handled by Race using stuckT
    if (V < 1.2 && race.phase === 'racing' && race.time > this.goTime + 6 && this.pitState !== 'stopped' && !(car.rs && car.rs.service) && !(this.pitState !== 'none' && this.neigh.some((n) => n.ds > 0 && n.ds < 14 && Math.abs(n.dd) < 3.2))) this.stuckT += dt;
    else this.stuckT = 0;
    return inp;
  }

  scanTraffic(race) {
    const car = this.car, tr = this.track;
    const list = this.neigh;
    list.length = 0;
    if (this.ignoreTraffic) return;
    const Ltr = tr.length;
    for (const o of race.cars) {
      if (o === car || o.retired || o.inGarage) continue;
      const ds = loopDelta(o.s, car.s, Ltr);
      if (ds < -60 || ds > 190) continue; // far enough ahead to stop for a car crawling into the pit lane at 250 km/h of closing speed
      list.push({ c: o, ds, dd: o.d - car.d, v: o.speed });
    }
    // the pace car counts as the car in front
    const sc = race.sc;
    if (sc && sc.state !== 'none') {
      const ds = loopDelta(sc.s, car.s, Ltr);
      if (ds > 0 && ds < 90) list.push({ c: sc.pseudo, ds, dd: 0, v: sc.v, pace: true });
    }
    const V = Math.max(car.speed, 5);
    const base = this.basePath(car.s);
    const wl = tr.wl[car.i] - 1.2, wr = tr.wr[car.i] - 1.2;
    const probe = (d) => tr.at(tr.curv, car.s + d);
    // where is the next corner, and which side is its inside?
    let dCorner = Infinity, inside = 0;
    for (let d = 30; d <= 450; d += 15) {
      const k = probe(d);
      if (Math.abs(k) > 0.0035) {
        dCorner = d;
        inside = Math.sign(k); // left-hand corner (k > 0): the inside is on the left (+d)
        break;
      }
    }
    const straight = Math.abs(probe(0)) < 0.0012 && Math.abs(probe(35)) < 0.0018;
    const now = race.time;
    let target = 0;

    // ---- racecraft: the decision matrix picks the action, the intent says where to put the car ----------------------
    const intent = this.brain.think({ list, V, base, wl, wr, dCorner, inside, straight, now, race });
    this.intent = intent;
    this.blocker = intent.rival ? list.find((n) => n.c === intent.rival) || null : null;
    const act = intent.action;
    this.rcMode = act === 'ATTACK' ? 'attack' : act === 'DRAFT' ? 'draft' : act === 'COVER' || act === 'BLOCK' ? 'defend' : act === 'YIELD' ? 'yield' : 'free';
    if (intent.target != null) target = clamp(intent.target - base, -12, 12);

    // a car is alongside: no new lateral commitments, hold the line we are on
    if (list.some((n) => n.ds > -8 && n.ds < 7 && Math.abs(n.dd) < 3.8)) target = this.offset;

    // ---- side by side: leave a car's width, yield when behind -------------------------------------------------------
    for (const n of list) {
      if (n.ds > -7 && n.ds < 6 && Math.abs(n.dd) < 3.0) {
        const away = n.dd > 0 ? -1 : 1;
        const need = 3.0 - Math.abs(n.dd);
        // the car with its nose behind gives way more than the one ahead
        const give = n.ds > 1.5 ? 1.15 : n.ds < -2 ? 0.55 : 0.9;
        target += away * need * give;
        this.rcMode = this.rcMode === 'free' ? 'side' : this.rcMode;
      }
    }
    // never plan a position outside the track
    if (sc && sc.state !== 'none') {
      // behind the pace car: no racing, stay on the line
      this.rcMode = 'free';
      target = 0;
    }
    this.offTarget = clamp(target, -wr - base, wl - base);
  }

  trafficCap(vt, race) {
    const car = this.car;
    let cap = Infinity;
    for (const n of this.neigh) {
      if (n.ds <= 0 || n.ds > 40) continue;
      const lat = Math.abs(n.dd);
      if (lat > 3.0) continue;
      const overlap = clamp((3.0 - lat) / 0.9, 0, 1);
      const gap = n.ds - CAR_LEN;
      // desired: be able to stop behind it
      const hold = (race.sc && race.sc.state !== 'none' ? 14 : 7.5) + 6 * (car.wetness || 0); // queue up a little further back behind the pace car / in the wet
      const c = n.v + (gap - hold) * 0.9;
      cap = Math.min(cap, lerp(vt, Math.max(c, 2), overlap));
    }
    return cap;
  }

  updateMistakes(race) {
    const car = this.car, tr = this.track;
    const m = this.mistake;
    if (m && m.active) {
      if (loopDelta(car.s, m.to, tr.length) > 0 || loopDelta(car.s, m.from, tr.length) < -40) m.active = false;
      return;
    }
    // look for the next corner approach
    for (const c of tr.corners) {
      const ds = loopDelta(c.sApex, car.s, tr.length);
      if (ds > 60 && ds < 140 && this.lastMistakeCorner !== c.id + ':' + (car.rs ? car.rs.laps : 0)) {
        this.lastMistakeCorner = c.id + ':' + (car.rs ? car.rs.laps : 0);
        const p = (this.dp.mistakesPerLap / Math.max(6, tr.corners.length)) * (1.5 - this.skill + 0.5);
        if (this.rng() < p) {
          this.mistake = { active: true, from: car.s, to: c.sApex + 30, factor: 1.06 + 0.1 * this.rng() + 0.05 * (1 - this.level) };
        }
        break;
      }
    }
  }

  updatePit(race) {
    const car = this.car, tr = this.track;
    if (!tr.pit) return;
    const s = car.s;
    const st = this.pitState;
    if (st === 'none') {
      // commit when we pass the decision point shortly before the entry
      const toEntry = mod(tr.pit.start - s, tr.length);
      if (this.wantsPit && this.box.s != null && toEntry < 340 && toEntry > 30 && race.phase === 'racing') this.pitState = 'in';
    } else if (st === 'in') {
      // missed the entry (spun, ran wide, or the car behind was in the way): give up and call again next lap
      if (!tr.inPitRange(s) && mod(tr.pit.start - s, tr.length) > 380) { this.pitState = 'none'; return; }
      if (this.box.s != null) {
        const toBox = loopDelta(this.box.s, s, tr.length);
        if (toBox < -4 && tr.inPitLimiter(s) && car.speed > 3) {
          this.pitState = 'out'; // went past the box: carry on out of the lane and try again next lap (wantsPit stays set)
          return;
        }
        if (Math.abs(toBox) < 1.4 && car.speed < 1.0 && tr.inPitLimiter(s)) {
          this.pitState = 'stopped';
          car.pitStopped = true;
        }
      }
    } else if (st === 'stopped') {
      if (!car.pitStopped) {
        this.pitState = 'out';
        this.wantsPit = false;
        this.pitDone++;
      }
    } else if (st === 'out') {
      if (!tr.inPitRange(s)) this.pitState = 'none';
    }
  }
}
