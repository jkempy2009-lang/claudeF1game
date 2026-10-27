import { clamp, smoothstep } from '../util/math.js';

/**
 * Racecraft brain: how a rival decides what to do about the cars around it, ten times a second.
 *
 * Perception turns the traffic into a handful of 0..1 FEATURES. Every candidate ACTION has one row of the decision
 * MATRIX (a weight per feature plus a bias); its utility is the dot product, scaled by the driver's personality for
 * the actions that depend on it. Actions that are impossible right now (no car to attack, no room on that side) are
 * masked out, the current action gets a small hysteresis bonus (so a driver commits instead of dithering) and the best
 * one wins. The winner is turned into an INTENT for the driver: where to put the car, how late to brake, whether to
 * push, which engine and energy modes to run. `explain()` returns the whole table, so a test (or a curious player) can
 * see why a rival did what it did.
 */

export const ACTIONS = ['LINE', 'FOLLOW', 'DRAFT', 'ATTACK', 'COVER', 'BLOCK', 'YIELD'];
export const FEATURES = ['close', 'edge', 'brake', 'corner', 'straight', 'room', 'drs', 'threat', 'lapped', 'risk'];

/**
 * The decision matrix: rows are actions, columns are features (see `sense`). Positive weights make an action more
 * attractive when the feature is high, negative less.
 *  close    how tightly we sit behind the car ahead (1 = bumper to bumper, 0 = more than 1.2 s)
 *  edge     our pace advantage on it: closing speed, plus DRS
 *  brake    1 while we are in the braking zone of the next corner
 *  corner   how near the next corner is (0 = 400 m away)
 *  straight 1 on a long straight with a corner still far off
 *  room     there is free road beside the car ahead on the side we would use
 *  drs      DRS is available to us now
 *  threat   how tightly a car sits behind us
 *  lapped   a leader (a lap up on us) is right behind: blue flag
 *  risk     wet track, damage, penalties on the sheet: reasons to keep the car in one piece
 */
export const MATRIX = {
  //          bias   close   edge   brake  corner straight room   drs    threat lapped risk
  LINE:   { bias: 0.45, close: -0.7, threat: -0.5 },
  FOLLOW: { bias: 0.05, close: 0.9, edge: -0.35, risk: 0.15 },
  DRAFT:  { bias: -0.3, close: 0.55, edge: 0.45, straight: 1.9, drs: -0.9, brake: -1.5, corner: -0.6 },
  ATTACK: { bias: -0.55, close: 1.0, edge: 0.9, brake: 0.9, corner: 1.0, straight: -0.6, room: 0.8, drs: 0.9, threat: -0.2, risk: -1.1 },
  COVER:  { bias: -0.35, threat: 1.2, straight: 0.6, brake: -0.5 },
  BLOCK:  { bias: -0.55, threat: 1.1, brake: 0.9, corner: 0.5 },
  YIELD:  { bias: -2.0, lapped: 3.2, threat: 0.4 },
};

/** Which personality trait scales an action's utility (0.55 .. 1.45 times). */
const TRAIT = { ATTACK: 'aggr', COVER: 'defend', BLOCK: 'defend' };

const CAR_W = 2.6; // lateral spacing for a side-by-side pass (centre to centre; the cars are 2.0 m wide)
const HUMAN_W = 3.0; // a human at the wheel is less predictable: leave a little more room
const HYSTERESIS = 0.25;

export class RaceBrain {
  constructor(driver) {
    this.drv = driver;
    const a = driver.dp.aggression;
    // personality: a little spread between drivers, anchored on the difficulty
    const r1 = driver.rng(), r2 = driver.rng(), r3 = driver.rng();
    this.traits = {
      aggr: clamp(a + (r1 - 0.5) * 0.3, 0.05, 1),
      defend: clamp(1.3 * (a - 0.3) + (r2 - 0.5) * 0.2, 0, 1), // novices do not defend; a professional covers the inside every time
      riskTol: clamp(0.4 + 0.5 * a + (r3 - 0.5) * 0.3, 0.05, 1),
    };
    this.action = 'LINE';
    this.side = 0; // +1 left, -1 right (the side the action is played on)
    this.since = 0;
    this.nextThink = 0;
    this.noAttackUntil = 0;
    this.closeRate = 0; // smoothed closing speed on the car ahead (m/s)
    this.lastAhead = null;
    this.f = Object.fromEntries(FEATURES.map((k) => [k, 0]));
    this.scores = Object.fromEntries(ACTIONS.map((k) => [k, -Infinity]));
    this.intent = { action: 'LINE', side: 0, target: null, brakeLate: 1, push: 1, ers: 1, fuel: 1, yieldLift: 1, rival: null };
    this.fuelPerLap = 0;
    this._fuel0 = null;
    this._dist0 = 0;
    this.powerT = 0;
  }

  /** One decision. `ctx`: { list, V, base, wl, wr, dCorner, inside, straight, now, race }. Returns the intent. */
  think(ctx) {
    const { now } = ctx;
    if (now < this.nextThink) return this.intent;
    this.nextThink = now + 0.1;
    const drv = this.drv, car = drv.car;
    const it = this.intent;
    if ((ctx.race.sc && ctx.race.sc.state !== 'none') || drv.pitState !== 'none') {
      this.action = 'LINE';
      this.side = 0;
      return this.fill(it, ctx, null, null, 'LINE');
    }
    const s = this.sense(ctx);
    const f = this.f;
    // feasibility masks: an action that cannot be played right now is not a candidate
    const ok = {
      LINE: true,
      FOLLOW: !!s.ahead,
      DRAFT: !!s.ahead && ctx.straight && s.ahead.gap > 14,
      ATTACK: !!s.ahead && now >= this.noAttackUntil && s.atkSide !== 0 && s.ahead.gap < 40 && !s.alongsideAttackerSide,
      COVER: this.traits.defend > 0.25 && !!s.behind && ctx.straight && !s.aside,
      BLOCK: this.traits.defend > 0.25 && !!s.behind && ctx.dCorner > 55 && ctx.dCorner < 330 && !!ctx.inside && !s.aside,
      YIELD: !!s.lapper,
    };
    let best = 'LINE', bestU = -Infinity;
    for (const a of ACTIONS) {
      if (!ok[a]) {
        this.scores[a] = -Infinity;
        continue;
      }
      const row = MATRIX[a];
      let u = row.bias || 0;
      for (const k of FEATURES) if (row[k]) u += row[k] * f[k];
      const tr = TRAIT[a];
      if (tr) u = (row.bias || 0) + (u - (row.bias || 0)) * (0.55 + 0.9 * this.traits[tr]);
      if (a === 'ATTACK') u += 0.5 * (this.traits.riskTol - 0.5); // bold drivers go for gaps a careful one leaves alone
      if (a === this.action) u += HYSTERESIS;
      this.scores[a] = u;
      if (u > bestU) {
        bestU = u;
        best = a;
      }
    }
    // a committed attack is only dropped when it is no longer possible or something clearly better appears
    if (best !== this.action) this.since = now;
    this.action = best;
    // an attack that did not get its nose alongside by the turn-in is abandoned (and not retried straight away)
    if (best === 'ATTACK' && s.atkInside && ctx.dCorner < 52 && s.ahead.ds > 3.2 && !s.alongsideAny) {
      this.action = 'FOLLOW';
      this.noAttackUntil = now + 3.5;
      this.since = now;
      best = 'FOLLOW';
    }
    this.side = best === 'ATTACK' ? s.atkSide : best === 'COVER' ? s.coverSide : best === 'BLOCK' ? ctx.inside : best === 'YIELD' ? s.yieldSide : 0;
    return this.fill(it, ctx, s, ok, best);
  }

  /** Perception: the traffic around us as features. */
  sense(ctx) {
    const { list, V, base, wl, wr, dCorner, inside, straight } = ctx;
    const drv = this.drv, car = drv.car, f = this.f;
    const s = { ahead: null, behind: null, aside: null, lapper: null, atkSide: 0, atkInside: false, coverSide: 0, yieldSide: 0, alongsideAny: false, alongsideAttackerSide: false };
    const lat = (n) => Math.abs(n.dd);
    // is the road beside us free at lateral position pd? (nobody within a car's width and a car's length of it)
    s.free = (pd) => !list.some((m) => !m.pace && m.ds > -9 && m.ds < 9 && Math.abs(car.d + m.dd - pd) < 2.8);
    for (const n of list) {
      const o = n.c;
      if (n.pace || !o.rs) continue;
      if (o.rs.inPitLane && !(car.rs && car.rs.inPitLane)) continue;
      if (n.ds > 0 && n.ds < 90 && lat(n) < 4.4 && (!s.ahead || n.ds < s.ahead.ds)) s.ahead = n;
      if (n.ds < -3 && n.ds > -70 && lat(n) < 5 && (!s.behind || n.ds > s.behind.ds)) s.behind = n;
      if (n.ds > -8 && n.ds < 7 && lat(n) < 3.8) {
        s.aside = s.aside || n;
        s.alongsideAny = true;
      }
      // a leader a lap up on us coming up behind: blue flags
      if (n.ds < 0 && n.ds > -140 && o.rs.laps > car.rs.laps && lat(n) < 8 && (!s.lapper || n.ds > s.lapper.ds)) s.lapper = n;
    }
    if (s.ahead) {
      s.ahead.gap = s.ahead.ds - 5.5;
      s.ahead.gapT = Math.max(0, s.ahead.gap) / Math.max(V, 15);
      const raw = V - s.ahead.v;
      this.closeRate = this.lastAhead === s.ahead.c ? this.closeRate + (raw - this.closeRate) * 0.15 : raw;
      this.lastAhead = s.ahead.c;
    } else {
      this.lastAhead = null;
      this.closeRate *= 0.9;
    }
    if (s.behind) {
      s.behind.gapT = -s.behind.ds / Math.max(V, 15);
      s.behind.closing = s.behind.v - V;
    }
    // where would an attack go? the inside of the coming corner when it is near, otherwise the side with room
    if (s.ahead) {
      const o = s.ahead.c;
      const free = (pd) => !list.some((m) => m !== s.ahead && !m.pace && m.ds > -9 && m.ds < s.ahead.ds + 8 && Math.abs(car.d + m.dd - pd) < 2.3);
      // a human at the wheel is less predictable: leave a little more room alongside
      const clear = o.info && o.info.isPlayer ? HUMAN_W : CAR_W;
      const roomAt = (sd) => {
        const pd = o.d + sd * clear;
        return sd > 0 ? pd <= wl && free(pd) : pd >= -wr && free(pd);
      };
      const inRoom = inside && dCorner < 340 && roomAt(inside);
      const outRoom = inside ? roomAt(-inside) : false;
      const leftRoom = roomAt(1), rightRoom = roomAt(-1);
      if (inRoom) {
        s.atkSide = inside;
        s.atkInside = true;
      } else if (inside && dCorner < 340 && outRoom && dCorner > 150) s.atkSide = -inside;
      else if (!inside || dCorner >= 340) s.atkSide = leftRoom && rightRoom ? (Math.abs(o.d + clear - car.d) < Math.abs(o.d - clear - car.d) ? 1 : -1) : leftRoom ? 1 : rightRoom ? -1 : 0;
      s.alongsideAttackerSide = !!list.some((n) => !n.pace && n !== s.ahead && n.ds > -7 && n.ds < 6 && Math.abs(n.dd) < 3.4 && Math.sign(n.dd) === s.atkSide);
      f.room = s.atkSide !== 0 ? 1 : 0;
    } else f.room = 0;
    if (s.behind) {
      const a = s.behind;
      s.coverSide = a.dd > 0.8 ? 1 : a.dd < -0.8 ? -1 : inside || 1;
    }
    if (s.lapper) s.yieldSide = s.lapper.dd > 0.5 ? -1 : s.lapper.dd < -0.5 ? 1 : inside ? -inside : car.d > 0 ? 1 : -1;

    // ---- features
    const wet = car.wetness || 0;
    const dmg = ((car.damageFront || 0) + (car.damageRear || 0) + (car.damageFloor || 0)) / 3 + 0.5 * ((car.damageSideL || 0) + (car.damageSideR || 0)) / 2;
    const penal = car.rs && car.rs.penalty > 0 ? 0.3 : 0;
    f.close = s.ahead ? clamp(1 - (s.ahead.gapT - 0.15) / 1.1, 0, 1) : 0;
    f.edge = s.ahead ? clamp(0.45 + this.closeRate / 9 + (car.drsAllowed ? 0.2 : 0), 0, 1) : 0;
    f.corner = clamp(1 - (dCorner - 50) / 350, 0, 1);
    f.brake = dCorner > 38 && dCorner < 210 ? 1 : 0;
    f.straight = straight && dCorner > 170 ? 1 : 0;
    f.drs = car.drsAllowed ? 1 : 0;
    f.threat = s.behind ? clamp(1 - (s.behind.gapT - 0.1) / 0.9, 0, 1) * (s.behind.closing > -4 ? 1 : 0.5) : 0;
    f.lapped = s.lapper && -s.lapper.ds / Math.max(V, 15) < 5 ? 1 : 0;
    f.risk = clamp(wet * 0.55 + dmg * 0.9 + penal, 0, 1);
    return s;
  }

  /** Turns the winning action into driver-ready numbers. */
  fill(it, ctx, s, ok, action) {
    const { base, wl, wr, now, V, race } = ctx;
    const drv = this.drv, car = drv.car;
    it.action = action;
    it.side = this.side;
    it.target = null; // an absolute lateral position (m from the centre line), or null = no opinion
    it.brakeLate = 1;
    it.push = 1;
    it.yieldLift = 1;
    it.rival = s && s.ahead ? s.ahead.c : null;
    const aggr = this.traits.aggr;
    if (s) {
      const ah = s.ahead, be = s.behind;
      if (action === 'ATTACK' && ah) {
        const o = ah.c;
        it.target = clamp(o.d + this.side * (o.info && o.info.isPlayer ? HUMAN_W : CAR_W), -wr, wl);
        // later on the brakes the more committed the attack (never before the move is made)
        const inZone = ctx.dCorner < 200 && s.atkInside;
        it.brakeLate = inZone ? 1 + clamp(0.035 + 0.09 * aggr * (1 - this.f.risk), 0, 0.11) * smoothstep(0, 0.4, now - this.since + 0.2) : 1;
        it.push = 1 + 0.012 * aggr;
      } else if (action === 'DRAFT' && ah) {
        it.target = clamp(ah.c.d, -wr, wl); // sit in the wake
      } else if (action === 'FOLLOW' && ah) {
        // follow with the nose pointing at the inside gap of the coming corner, out of the worst of the wake
        if (ctx.inside && ctx.dCorner < 420) it.target = clamp(ah.c.d + ctx.inside * 1.6, -wr, wl);
        it.push = 1 + 0.004 * aggr;
      } else if (action === 'COVER') {
        // one move onto the attacker's line, never more than a car and a half across and never into another car
        const pd = clamp(car.d + this.side * 3.5, -wr, wl);
        if (s.free(pd)) it.target = pd;
        it.push = 1 + 0.008 * aggr;
      } else if (action === 'BLOCK') {
        // the inside line, taken once and early: a defender never moves in the braking zone
        const edge = this.side > 0 ? wl : wr;
        const want = clamp(this.side * Math.max(0.5, edge - 1.4), car.d - 4.5, car.d + 4.5);
        if (ctx.dCorner > 38 && s.free(clamp(want, -wr, wl))) it.target = clamp(want, -wr, wl);
        it.push = 1 + 0.008 * aggr;
      } else if (action === 'YIELD' && s.lapper) {
        it.target = clamp(this.side * 3.4, -wr, wl);
        const gap = -s.lapper.ds;
        it.yieldLift = gap < 40 ? 0.93 : 1;
      }
    }
    this.plan(ctx, it, s, action);
    return it;
  }

  /** Engine, energy and fuel modes: the plan for the situation. */
  plan(ctx, it, s, action) {
    const { now, race } = ctx;
    const drv = this.drv, car = drv.car;
    if (now < this.powerT) return;
    this.powerT = now + 0.5;
    const lapsLeft = Math.max(0, race.lapsLeft(car));
    const battling = action === 'ATTACK' || action === 'COVER' || action === 'BLOCK';
    const soc = car.soc;
    // ERS: deploy (attack mode) in a fight, harvest when stuck behind a car or with a flat battery, balanced otherwise
    let ers = 1;
    if (battling && soc > 0.18) ers = 2;
    else if (lapsLeft <= 1.4 && soc > 0.08) ers = 2;
    else if (action === 'FOLLOW' || action === 'DRAFT') ers = soc > 0.75 ? 1 : 0;
    else if (soc < 0.3) ers = 0;
    else if (soc > 0.85) ers = 2;
    it.ers = ers;
    // fuel: measure the burn per lap, then lean it out when short, run it rich in a fight when there is fuel to spare
    const tr = drv.track;
    const dist = (car.rs ? car.rs.maxDist : 0) || 0;
    if (this._fuel0 == null) {
      this._fuel0 = car.fuel;
      this._dist0 = dist;
    } else if (dist - this._dist0 > 600) {
      const per = ((this._fuel0 - car.fuel) / (dist - this._dist0)) * tr.length; // kg per lap at the current mode mix
      const norm = per / [0.85, 1, 1.2][car.fuelMode];
      this.fuelPerLap = this.fuelPerLap ? this.fuelPerLap * 0.6 + norm * 0.4 : norm;
      this._fuel0 = car.fuel;
      this._dist0 = dist;
    }
    let fuel = 1;
    if (this.fuelPerLap > 0) {
      const margin = car.fuel - (lapsLeft + 0.3) * this.fuelPerLap * 1.03;
      const spare = margin / Math.max(this.fuelPerLap, 0.1); // laps of fuel to spare
      if (spare < 0.2) fuel = 0;
      else if (battling && spare > 0.8) fuel = 2;
      else if (action === 'LINE' && spare < 1.0 && spare > 0.2 && lapsLeft > 3) fuel = 1;
    }
    it.fuel = fuel;
  }

  /** The full decision table of the last tick: for tests, debugging and curiosity. */
  explain() {
    return { action: this.action, side: this.side, features: { ...this.f }, scores: { ...this.scores }, traits: { ...this.traits }, closeRate: this.closeRate };
  }
}
