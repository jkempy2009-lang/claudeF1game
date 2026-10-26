import { G, clamp, lerp, smoothstep, wrapAngle } from '../util/math.js';
import { SURF } from './track.js';
import { AIR_DENSITY, SURFACE, engineTorque, wetGripFactor } from './carspec.js';

export const FL = 0, FR = 1, RL = 2, RR = 3;
const AMBIENT = 30;
const BRAKE_HEAT_CAP = 720; // J/K per corner (disc, pads and calipers)
const TYRE_HEAT_CAP = 3500; // J/K, lumped surface+carcass
export const TUNE = { heat: 0.1, coolBase: 0.0011, coolSpeed: 0.00007 };
/** Joules of tyre slip energy per tyre per "reference lap" - calibrated so wearLaps reads as real laps at pace 1.0. */
export const WEAR_REF_J = 0.4e6;

const tmpProj = { i: 0, t: 0, s: 0, d: 0, dist: 0 };

/**
 * One car: rigid body (planar, body-frame velocities u/v and yaw rate r) with four independent
 * tyre contact patches. Fixed-step integration (call step() with the same dt every time, 1/240 s).
 */

export class Car {
  constructor(spec, track) {
    this.spec = spec;
    this.track = track;
    this.assist = { abs: true, tc: 2, steer: 1, autoGear: true, stability: 1 };
    this.wheelPos = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const L = spec.wheelbase;
    this.a = L * (1 - spec.weightFront); // CG to front axle
    this.b = L * spec.weightFront; // CG to rear axle
    this.wheelPos[FL] = [this.a, spec.trackF / 2];
    this.wheelPos[FR] = [this.a, -spec.trackF / 2];
    this.wheelPos[RL] = [-this.b, spec.trackR / 2];
    this.wheelPos[RR] = [-this.b, -spec.trackR / 2];

    this.omega = new Float64Array(4);
    this.alphaLag = new Float64Array(4);
    this.temp = new Float64Array(4).fill(85);
    this.brakeTemp = new Float64Array(4).fill(260); // carbon discs, deg C: glow when hot, fade when cooked, weak when cold
    this.wear = new Float64Array(4);
    this.fz = new Float64Array(4);
    this.kappa = new Float64Array(4);
    this.alpha = new Float64Array(4);
    this.slipVis = new Float64Array(4); // 0..1+ smoke/squeal intensity
    this.absF = new Float64Array(4).fill(1);
    this.surf = new Uint8Array(4);
    this.puncture = new Float64Array(4);
    this.flat = new Float64Array(4); // flat-spotted by lock-ups (0..1), cleared by a tyre change
    this.wheelFx = new Float64Array(4);
    this.wheelFy = new Float64Array(4);

    this.fuel = spec.fuelKg;
    this.soc = 0.6;
    this.harvesting = false;
    this.ersMode = 1; // 0 harvest, 1 balanced, 2 attack
    this.fuelMode = 1; // 0 lean, 1 standard, 2 rich
    this.wetness = 0; // track water level, set by the race
    this.compound = spec.compound;
    this.reset(0, 0, 0);
  }

  reset(x, y, theta, speed = 0) {
    this.x = x;
    this.y = y;
    this.theta = theta;
    this.px = x;
    this.py = y;
    this.ptheta = theta;
    this.u = speed;
    this.v = 0;
    this.r = 0;
    this.steer = 0;
    this.gear = 1;
    this.rpm = this.spec.idleRpm;
    this.shiftTimer = 0;
    this.sinceShift = 1;
    this.throttle = 0;
    this.brake = 0;
    this.drsPos = 0;
    this.axF = 0;
    this.ayF = 0;
    this.axBody = 0;
    this.ayBody = 0;
    this.stopTimer = 0;
    this.revHold = 0;
    this.kerbPhase = 0;
    this.kerbShake = 0;
    this.onGrass = false;
    this.lastHint = -1;
    this.omega.fill(speed / this.spec.wheelR);
    this.alphaLag.fill(0);
    this.absF.fill(1);
    this.pitch = 0;
    this.roll = 0;
    this.bottoming = 0;
    this.locate();
  }

  get speed() {
    return Math.hypot(this.u, this.v);
  }

  get mass() {
    return this.spec.dryMass + this.fuel;
  }

  /** Re-projects the body on the track (also called after teleports/collision corrections). */
  locate() {
    const p = this.track.project(this.x, this.y, this.lastHint, tmpProj);
    this.lastHint = p.i;
    this.i = p.i;
    this.s = p.s;
    this.d = p.d;
    this.trackH = this.track.at(this.track.z, p.s);
    this.trackSlope = this.track.slope[p.i];
    this.trackHeading = this.track.hdgAt(p.s);
  }

  /** Aerodynamic state, shared by physics and the speed-profile estimator. */
  _aero(V, beta) {
    const sp = this.spec;
    const q = 0.5 * AIR_DENSITY * V * V;
    const dmgF = 1 - 0.55 * (this.damageFront || 0);
    const dmgR = 1 - 0.55 * (this.damageRear || 0);
    const sideAvg = ((this.damageSideL || 0) + (this.damageSideR || 0)) / 2;
    const dmgFloor = 1 - 0.3 * (this.damageFloor || 0) - 0.2 * sideAvg;
    const drs = this.drsPos;
    const dirty = this.dirtyAir || 0;
    const yawLoss = 1 - 0.45 * smoothstep(0.05, 0.4, Math.abs(beta));
    const clF = sp.clAf * dmgF * (1 - 0.32 * dirty) * dmgFloor * yawLoss;
    const clR = sp.clAr * dmgR * (1 - 0.14 * dirty) * (1 - sp.drsLiftCut * drs) * dmgFloor * yawLoss;
    const slip = this.slipstream || 0;
    const cd = sp.cdA * (1 - sp.drsDragCut * drs) * (1 - 0.28 * slip) * (1 + 0.12 * (this.damageFront || 0) + 0.1 * (this.damageRear || 0) + 0.08 * sideAvg);
    return { q, downF: q * clF, downR: q * clR, drag: q * cd };
  }

  /**
   * Advance the car by dt seconds.
   * input: {throttle, brake, steer(-1..1, + = left), gearUp, gearDown, drs, boost, pitLimit(m/s or 0)}
   */
  step(dt, inp) {
    const sp = this.spec;
    const mass = this.mass;
    const iz = sp.izDry + this.fuel * 0.45;
    const L = sp.wheelbase;
    const a = this.a, b = this.b;
    this.px = this.x;
    this.py = this.y;
    this.ptheta = this.theta;

    const u = this.u, v = this.v, r = this.r;
    const V = Math.hypot(u, v);
    const beta = Math.atan2(v, Math.max(Math.abs(u), 3)) * (u < 0 ? -1 : 1);

    // ---------------------------------------------------------------- pedals / reverse
    let thrIn = clamp(inp.throttle, 0, 1);
    let brkIn = clamp(inp.brake, 0, 1);
    const speed = V;
    if (this.gear >= 1) {
      if (inp.allowReverse && speed < 1.5 && brkIn > 0.4 && thrIn < 0.05) {
        this.revHold += dt;
        if (this.revHold > 0.45) {
          this.gear = -1;
          this.revHold = 0;
        }
      } else this.revHold = 0;
    } else if (this.gear < 0) {
      if (u > -1.5 && thrIn > 0.4 && brkIn < 0.05) {
        this.revHold += dt;
        if (this.revHold > 0.2) {
          this.gear = 1;
          this.revHold = 0;
        }
      } else this.revHold = 0;
    }
    if (this.gear < 0) {
      const t = thrIn;
      thrIn = brkIn;
      brkIn = t;
    }
    // pedal dynamics (a little lag keeps digital input from instantly stepping loads)
    this.throttle += clamp(thrIn - this.throttle, -dt * 14, dt * 9);
    this.brake += clamp(brkIn - this.brake, -dt * 16, dt * 10);
    let thr = this.throttle;
    const brk = this.brake;

    // pit limiter
    if (inp.pitLimit > 0) {
      const over = speed - inp.pitLimit;
      thr *= clamp(1 - over * 0.7, 0, 1);
    }

    // ---------------------------------------------------------------- aero + DRS
    this.drsPos += clamp((inp.drs ? 1 : 0) - this.drsPos, -dt * 5, dt * 5);
    const aero = this._aero(V, beta);

    // ---------------------------------------------------------------- wheel loads
    const m = mass;
    const g = G;
    // front wing + front floor load the front axle; rear wing + diffuser the rear
    let fFront = m * g * sp.weightFront + aero.downF;
    let fRear = m * g * (1 - sp.weightFront) + aero.downR;
    const dLong = (m * this.axF * sp.hCg) / L;
    fFront -= dLong;
    fRear += dLong;
    const dLatF = (m * this.ayF * sp.hCg * sp.rollFrontShare) / sp.trackF;
    const dLatR = (m * this.ayF * sp.hCg * (1 - sp.rollFrontShare)) / sp.trackR;
    const fz = this.fz;
    const split = (F, dl, i0) => {
      let left = F / 2 - dl;
      let right = F / 2 + dl;
      if (left < 60) {
        left = 60;
        right = Math.max(60, F - 60);
      } else if (right < 60) {
        right = 60;
        left = Math.max(60, F - 60);
      }
      fz[i0] = left;
      fz[i0 + 1] = right;
    };
    split(Math.max(fFront, 200), dLatF, 0);
    split(Math.max(fRear, 200), dLatR, 2);

    // ---------------------------------------------------------------- steering
    const maxSteer = sp.maxSteer / (1 + (V / 46) * (V / 46));
    let lim = maxSteer;
    if (this.assist.steer && !inp.aiDriven) {
      // never ask for more front slip than the tyres can use: delta ~ L*ay/V^2 + alpha_peak
      let ayLim = 0;
      for (let w = 0; w < 4; w++) ayLim += (sp.mu0 - sp.loadSens * (fz[w] - sp.fz0)) * fz[w];
      ayLim = (ayLim * sp.compound.mu * 0.97) / m;
      const dGrip = (L * ayLim) / Math.max(V * V, 1) + sp.alphaPeak * 0.95;
      lim = Math.min(maxSteer, dGrip);
    }
    let want = clamp(inp.steer, -1, 1) * lim;
    if (this.assist.stability && V > 6 && u > 0) {
      const k = [0, 0.7, 1.1, 1.5][this.assist.stability] ?? 0.7;
      want += clamp(beta, -0.4, 0.4) * k * smoothstep(8, 22, V);
    }
    want = clamp(want, -sp.maxSteer, sp.maxSteer);
    this.steer += clamp(want - this.steer, -dt * 2.4, dt * 2.4);
    const dSteer = this.steer;
    const tanS = Math.tan(dSteer);
    const dL = Math.atan2(L * tanS, L - (sp.trackF / 2) * tanS);
    const dR = Math.atan2(L * tanS, L + (sp.trackF / 2) * tanS);

    // ---------------------------------------------------------------- powertrain
    const omegaRear = (this.omega[RL] + this.omega[RR]) / 2;
    let ratio = 0;
    if (this.gear > 0) ratio = sp.gearRatios[this.gear - 1];
    else if (this.gear < 0) ratio = -8.5;
    const rpmWheel = Math.abs(omegaRear) * Math.abs(ratio) * (30 / Math.PI);
    let rpm = rpmWheel;
    const launching = Math.abs(ratio) > 12 && speed < 14;
    if (launching) rpm = Math.max(rpm, sp.idleRpm + (8200 - sp.idleRpm) * Math.max(thr, 0.2));
    rpm = Math.max(rpm, sp.idleRpm);
    this.rpm = lerp(this.rpm, rpm, 1 - Math.exp(-dt * 40));

    // gear selection
    this.sinceShift += dt;
    if (this.shiftTimer > 0) this.shiftTimer -= dt;
    if (this.gear >= 1) {
      let up = !!inp.gearUp, down = !!inp.gearDown;
      if (this.assist.autoGear) {
        up = rpmWheel > sp.shiftUpRpm && this.gear < 8;
        const nextRpm = rpmWheel * (sp.gearRatios[Math.min(this.gear, 7)] / ratio);
        down = this.gear > 1 && rpmWheel < sp.shiftDownRpm && (this.gear === 1 || (rpmWheel * (sp.gearRatios[this.gear - 2] / ratio)) < sp.maxRpm * 0.9);
        if (thr > 0.92 && this.gear > 1 && rpmWheel < 9800 && this.sinceShift > 0.6) down = rpmWheel * (sp.gearRatios[this.gear - 2] / ratio) < 13800;
        if (up && nextRpm < 8500) up = false;
      }
      if (this.sinceShift > 0.22) {
        if (up && this.gear < 8) {
          this.gear++;
          this.shiftTimer = 0.045;
          this.sinceShift = 0;
        } else if (down && this.gear > 1) {
          this.gear--;
          this.shiftTimer = 0.03;
          this.sinceShift = 0;
        }
      }
    }

    // traction control: cut throttle when the driven wheels slip too much
    const tcLim = [9, 0.13, 0.09, 0.06][this.assist.tc] ?? 9;
    if (this.assist.tc > 0 && thr > 0.02) {
      const kMax = Math.max(this.kappa[RL], this.kappa[RR]);
      if (kMax > tcLim) thr *= clamp(1 - (kMax - tcLim) * 14, 0.1, 1);
    }

    // engine torque (Nm at the crank) incl. ERS
    let Te = 0;
    const ersAvail = this.soc > 0.01;
    const boost = !!inp.boost && ersAvail;
    let ersP = 0;
    if (ersAvail && thr > 0.5 && this.gear > 0) ersP = (boost ? 1 : [0.1, 0.3, 0.6][this.ersMode]) * sp.ersPower;
    if (Math.abs(ratio) > 0) {
      const tPos = engineTorque(this.rpm) * sp.powerScale * thr * [0.97, 1, 1.025][this.fuelMode];
      const ersT = (ersP * sp.powerScale * thr) / Math.max((this.rpm * Math.PI) / 30, 300);
      const tBrake = (30 + 0.0075 * this.rpm) * (1 - thr);
      Te = tPos + ersT - tBrake;
      if (this.fuel <= 0) Te = Math.min(Te, 0);
    }
    let Tw = Te * ratio * sp.driveEff;
    if (inp.hold) Tw = 0; // clutch held on the grid: revs build, nothing is driven
    if (this.shiftTimer > 0) Tw *= 0.05;
    // limited-slip differential: faster wheel loses torque to the slower one
    const dw = this.omega[RL] - this.omega[RR];
    const lockMax = 0.5 * Math.abs(Tw) * 0.5 + 120;
    const lock = clamp(dw * 55, -lockMax, lockMax);
    const driveL = Tw / 2 - lock;
    const driveR = Tw / 2 + lock;

    // ---------------------------------------------------------------- tyre forces, wheel dynamics
    const cosT = Math.cos(this.theta), sinT = Math.sin(this.theta);
    const R = sp.wheelR;
    const mu0 = sp.mu0;
    // tyre pressure offset (-3..+3 steps): the grip peak sits at 0 when dry and moves lower in the wet; higher pressure heats faster and wears slower
    const pr = sp.pressure || 0;
    const pressureGrip = 1 - 0.0045 * (pr + 2 * (this.wetness || 0)) ** 2;
    const pressureHeat = 1 + 0.06 * pr;
    const pressureWear = 1 - 0.05 * pr;
    const comp = sp.compound;
    let sumFx = 0, sumFy = 0, sumMz = 0;
    let kerbHit = 0, grassHit = 0;
    const dens = this.tyreScale || 1;
    for (let w = 0; w < 4; w++) {
      const front = w < 2;
      const px = this.wheelPos[w][0], py = this.wheelPos[w][1];
      const dlt = w === FL ? dL : w === FR ? dR : 0;
      const cd = Math.cos(dlt), sd = Math.sin(dlt);
      // surface under this tyre
      const wx = this.x + px * cosT - py * sinT;
      const wy = this.y + px * sinT + py * cosT;
      const pj = this.track.project(wx, wy, this.i, tmpProj);
      const sf = this.track.surface(pj.i, pj.d);
      this.surf[w] = sf;
      const surf = SURFACE[sf];
      if (sf === SURF.KERB) kerbHit++;
      else if (sf === SURF.GRASS || sf === SURF.GRAVEL) grassHit++;

      let Fz = fz[w];
      if (sf === SURF.KERB) Fz *= 1 + 0.22 * Math.sin(this.kerbPhase * 1.0 + w * 1.7) * Math.min(1, V / 25);

      const vxw = u - r * py;
      const vyw = v + r * px;
      const vlong = vxw * cd + vyw * sd;
      const vlat = -vxw * sd + vyw * cd;
      const absVl = Math.abs(vlong);
      const kap = (this.omega[w] * R - vlong) / Math.max(absVl, 2.2);
      const alphaRaw = Math.atan2(vlat, Math.max(absVl, 1.2));
      // lateral force relaxation (tyre carcass): rate ~ speed / relaxation length
      const relax = 1 - Math.exp((-Math.max(absVl, 1.2) * dt) / sp.relaxLength);
      this.alphaLag[w] += (alphaRaw - this.alphaLag[w]) * relax;
      const al = this.alphaLag[w];

      // grip
      const tempF = clamp(1 - 0.2 * ((this.temp[w] - comp.tOpt) / comp.tRange) ** 2, 0.7, 1.02);
      const wearW = this.wear[w];
      const wearF = 1 - 0.06 * wearW - 0.2 * smoothstep(0.62, 1.0, wearW);
      let mu = Math.max(0.7, mu0 - sp.loadSens * (Fz - sp.fz0)) * comp.mu * tempF * wearF * surf.grip * (front ? sp.frontGrip : sp.rearGrip);
      if (this.puncture[w] > 0) mu *= 1 - 0.55 * this.puncture[w];
      mu *= pressureGrip * (1 - 0.16 * this.flat[w]) * wetGripFactor(comp, this.wetness) * (sf === SURF.KERB ? 1 - 0.14 * this.wetness : 1);
      const sx = kap / sp.kappaPeak;
      const sy = Math.tan(al) / Math.tan(sp.alphaPeak);
      const s = Math.hypot(sx, sy) + 1e-9;
      const Fm = mu * Fz * Math.sin(sp.pacejkaC * Math.atan(sp.pacejkaB * s));
      const FxT = (Fm * sx) / s; // pure tyre longitudinal force (drives the wheel dynamics)
      let FxW = FxT;
      const FyW = (-Fm * sy) / s;

      // rolling resistance / drag from soft surfaces
      FxW -= Math.tanh(vlong * 1.5) * surf.rr * Fz;
      if (sf === SURF.GRAVEL || sf === SURF.GRASS) FxW -= Math.tanh(vlong * 0.6) * 0.05 * Fz * Math.min(1, absVl / 20);

      // wheel angular dynamics
      let I = front ? sp.iFront : sp.iRear + 0.012 * ratio * ratio * 0.5;
      const drv = w === RL ? driveL : w === RR ? driveR : 0;
      // semi-implicit wheel update: linearise the tyre force around the current slip so the stiff
      // slip<->wheel-speed loop stays stable at any speed (secant stiffness, never negative)
      const slipSpeed = this.omega[w] * R - vlong;
      const kFull = (mu * Fz * sp.pacejkaC * sp.pacejkaB) / (sp.kappaPeak * Math.max(absVl, 2.2));
      const kSec = Math.abs(slipSpeed) > 1e-4 ? Math.min(kFull, Math.abs(FxT / slipSpeed)) : kFull;
      let om = this.omega[w] + (dt * (drv - FxT * R)) / (I + dt * kSec * R * R);

      // brakes (+ABS)
      let Tb = front ? brk * sp.brakeTorque * sp.brakeBias * 0.5 : brk * sp.brakeTorque * (1 - sp.brakeBias) * 0.5;
      {
        // carbon discs: weak when cold, best at 450-850 C, fading beyond ~900 C
        const bt = this.brakeTemp[w];
        Tb *= (0.86 + 0.14 * smoothstep(120, 420, bt)) * (1 - 0.3 * smoothstep(880, 1150, bt));
      }
      if (brk > 0.02 && this.assist.abs) {
        if (absVl > 4 && Math.abs(kap) > sp.kappaPeak * 1.1 && kap < 0) this.absF[w] = Math.max(0.1, this.absF[w] - 14 * dt);
        else this.absF[w] = Math.min(1, this.absF[w] + 9 * dt);
        Tb *= this.absF[w];
      } else this.absF[w] = 1;
      // disc heating: friction power in, convection out (cooling ducts work harder at speed)
      this.brakeTemp[w] += ((Tb * Math.abs(om)) / BRAKE_HEAT_CAP - (this.brakeTemp[w] - AMBIENT) * (0.011 + 0.0008 * V)) * dt;
      if (Tb > 0) {
        const dwb = (Tb / I) * dt;
        if (Math.abs(om) <= dwb) om = 0;
        else om -= Math.sign(om) * dwb;
      }
      this.omega[w] = om;

      this.kappa[w] = kap;
      this.alpha[w] = al;
      this.wheelFx[w] = FxW;
      this.wheelFy[w] = FyW;
      // visual slip metric: how far beyond peak
      const over = Math.max(0, s - 1);
      this.slipVis[w] = V > 4 ? clamp(over * 0.8, 0, 1.5) * clamp(absVl / 15, 0.3, 1) : 0;

      // thermal + wear
      const slideLong = om * R - vlong;
      const slideLat = Math.max(absVl, 2) * Math.tan(Math.abs(al));
      const P = Math.abs(FxW * slideLong) + Math.abs(FyW) * slideLat;
      const Prr = 0.02 * Fz * absVl;
      this.temp[w] += ((TUNE.heat * (comp.wetTyre ? 0.55 : 1) * pressureHeat * (P + Prr)) / TYRE_HEAT_CAP - (this.temp[w] - AMBIENT) * (TUNE.coolBase + TUNE.coolSpeed * V) * (1 + 0.6 * this.wetness)) * dt;
      // a locked wheel scrubs the same patch of rubber: the surface temperature spikes, a flat spot forms and wear races ahead
      const locked = absVl > 6 && kap < -0.6;
      if (locked) {
        this.temp[w] += 55 * dt * clamp(1 - (this.temp[w] - comp.tOpt) / 75, 0, 1);
        this.flat[w] = Math.min(1, this.flat[w] + dt * 0.5);
      }
      const overheat = Math.max(0, this.temp[w] - comp.tOpt - comp.tRange * 0.9) / 30;
      this.wear[w] = Math.min(1.2, this.wear[w] + ((P * dt) / (comp.wearLaps * WEAR_REF_J)) * (this.wearMult ?? 1) * pressureWear * (1 + 3 * overheat + (locked ? 5 : 0) + (comp.wetTyre ? 2.5 * (1 - smoothstep(0.05, 0.4, this.wetness)) : 0)) * dens);

      // to body frame
      const Fxb = FxW * cd - FyW * sd;
      const Fyb = FxW * sd + FyW * cd;
      sumFx += Fxb;
      sumFy += Fyb;
      sumMz += px * Fyb - py * Fxb;
    }

    // ---------------------------------------------------------------- aerodynamic body forces
    const Vq = Math.max(V, 0.001);
    const qd = aero.drag / Vq; // drag force per m/s... = q*cd / V
    sumFx -= qd * u;
    sumFy -= (0.5 * AIR_DENSITY * sp.cdSide * V * v);
    // slope
    const slopeAlong = this.trackSlope * Math.cos(wrapAngle(this.theta - this.trackHeading));
    sumFx -= m * g * slopeAlong * 0.8;
    // surface side-load noise on kerbs (a jolt you feel in the wheel)
    this.kerbPhase += dt * (40 + V * 0.9);
    this.kerbShake = kerbHit ? Math.min(1, V / 40) : 0;

    // soft-surface yaw damping so cars don't cartwheel on grass
    if (grassHit) sumMz -= r * 400 * grassHit;

    // ---------------------------------------------------------------- integrate
    const axBody = sumFx / m;
    const ayBody = sumFy / m;
    this.axBody = axBody;
    this.ayBody = ayBody;
    const k = 1 - Math.exp(-dt / 0.05);
    this.axF += (axBody - this.axF) * k;
    this.ayF += (ayBody - this.ayF) * k;

    this.u += (axBody + v * r) * dt;
    this.v += (ayBody - u * r) * dt;
    this.r += (sumMz / iz) * dt;

    // parking: a stationary car on the brakes stays put
    if (Math.abs(this.u) < 0.35 && Math.abs(this.v) < 0.35 && thr < 0.05 && (brk > 0.05 || Math.abs(this.r) < 0.05)) {
      this.stopTimer += dt;
      if (this.stopTimer > 0.1) {
        this.u *= 0.9;
        this.v *= 0.9;
        this.r *= 0.85;
        if (Math.abs(this.u) < 0.04) this.u = 0;
        if (Math.abs(this.v) < 0.04) this.v = 0;
        if (Math.abs(this.r) < 0.01) this.r = 0;
        for (let w = 0; w < 4; w++) if (brk > 0.05) this.omega[w] *= 0.8;
      }
    } else this.stopTimer = 0;

    const c = Math.cos(this.theta), s = Math.sin(this.theta);
    this.x += (this.u * c - this.v * s) * dt;
    this.y += (this.u * s + this.v * c) * dt;
    this.theta += this.r * dt;
    if (this.theta > Math.PI) this.theta -= 2 * Math.PI;
    else if (this.theta < -Math.PI) this.theta += 2 * Math.PI;

    // ---------------------------------------------------------------- energy / fuel / ERS
    // fuel is burnt per distance driven (about 0.2 kg/km at full race pace) plus a small idle flow: a slow driver or a car waiting
    // for the marshals uses no more than a quick one, so the tank loaded for the race distance always lasts
    const burn = (0.0015 + 0.0002 * Math.abs(this.u) * (0.5 + 0.75 * thr)) * (this.fuelRate ?? 1) * [0.85, 1, 1.2][this.fuelMode];
    this.fuel = Math.max(0, this.fuel - burn * dt);
    let harvest = 0;
    const hMul = [1.6, 1, 0.7][this.ersMode];
    if (brk > 0.05 && this.gear > 0) harvest = sp.ersPower * Math.min(1, brk * 1.2) * hMul;
    else if (thr < 0.05 && speed > 10) harvest = sp.ersPower * 0.25 * hMul;
    this.soc = clamp(this.soc + ((harvest - ersP) * dt) / sp.ersCapacity, 0, 1);
    this.harvesting = harvest > 0.2 * sp.ersPower && this.soc < 0.999;

    this.locate();
    this.pitch = lerp(this.pitch, clamp(-this.axF * 0.0006, -0.025, 0.025), 1 - Math.exp(-dt * 5));
    this.roll = lerp(this.roll, clamp(-this.ayF * 0.0005, -0.025, 0.025), 1 - Math.exp(-dt * 5));
    this.onGrass = grassHit >= 3;
    this.aeroDown = aero.downF + aero.downR;
    this.aeroDrag = aero.drag;
    this.latG = this.ayF / G;
    this.longG = this.axF / G;
  }

  /** Mean tyre wear 0..1 and hottest tyre, for HUD/strategy. */
  tyreSummary() {
    let w = 0, t = 0;
    for (let i = 0; i < 4; i++) {
      w += this.wear[i] / 4;
      t = Math.max(t, this.temp[i]);
    }
    return { wear: w, temp: t };
  }

  fitTyres(compound) {
    this.compound = compound;
    this.spec = { ...this.spec, compound };
    this.wear.fill(0);
    this.temp.fill(72);
    this.puncture.fill(0);
    this.flat.fill(0);
  }

  /** Apply an impact (energy in J at body point (lx, ly)) - damages wings/floor and may puncture. */
  applyDamage(energy, lx, ly) {
    const e = energy / 55000; // ~55 kJ ~ a destroyed wing
    if (lx > 1.5) this.damageFront = Math.min(1, (this.damageFront || 0) + e * (0.8 + Math.abs(ly) * 0.2));
    else if (lx < -1.2) this.damageRear = Math.min(1, (this.damageRear || 0) + e);
    else if (Math.abs(ly) > 0.55) {
      // a side hit crumples the sidepod on that side (physics y is left); some of it reaches the floor
      if (ly > 0) this.damageSideL = Math.min(1, (this.damageSideL || 0) + e * 0.9);
      else this.damageSideR = Math.min(1, (this.damageSideR || 0) + e * 0.9);
      this.damageFloor = Math.min(1, (this.damageFloor || 0) + e * 0.25);
    } else this.damageFloor = Math.min(1, (this.damageFloor || 0) + e * 0.5);
    if (e > 0.5) {
      const w = lx > 0 ? (ly > 0 ? FL : FR) : ly > 0 ? RL : RR;
      if (Math.random() < Math.min(0.5, e * 0.4)) this.puncture[w] = 1;
    }
  }

  /** Structural health for the HUD (0..1 damage per component) and the downforce lost to it. */
  damageSummary() {
    const sp = this.spec;
    const dF = this.damageFront || 0, dR = this.damageRear || 0, dFl = this.damageFloor || 0, sL = this.damageSideL || 0, sR = this.damageSideR || 0;
    const sideAvg = (sL + sR) / 2;
    const fl = 1 - 0.3 * dFl - 0.2 * sideAvg;
    const full = sp.clAf + sp.clAr;
    const now = sp.clAf * (1 - 0.55 * dF) * fl + sp.clAr * (1 - 0.55 * dR) * fl;
    const worst = Math.max(dF, dR, dFl, sL, sR);
    return { fw: dF, rw: dR, floor: dFl, sideL: sL, sideR: sR, aeroLoss: 1 - now / full, worst, severity: Math.max(dF * 0.9, sL * 0.7, sR * 0.7, dR * 0.6, dFl * 0.7) };
  }

  repair() {
    this.damageFront = this.damageRear = this.damageFloor = this.damageSideL = this.damageSideR = 0;
    this.puncture.fill(0);
    this.flat.fill(0);
  }
}
