import { G, clamp, smoothstep, table } from '../util/math.js';
import { SURF } from './track.js';

export const AIR_DENSITY = 1.2;

/** Tyre compounds. `mu` scales peak grip, `wearLaps` is how many reference laps to 100 % wear. */
export const COMPOUNDS = {
  soft: { id: 'soft', name: 'Soft', letter: 'S', color: '#ee3340', mu: 1.0, wearLaps: 14, tOpt: 100, tRange: 24 },
  medium: { id: 'medium', name: 'Medium', letter: 'M', color: '#f6d13a', mu: 0.965, wearLaps: 24, tOpt: 98, tRange: 28 },
  hard: { id: 'hard', name: 'Hard', letter: 'H', color: '#f2f2f2', mu: 0.93, wearLaps: 38, tOpt: 96, tRange: 32 },
  // full wets: deep tread that clears water, soft and cool-running, but they overheat and wear quickly on a dry track
  wet: { id: 'wet', name: 'Wet', letter: 'W', color: '#3a8bff', mu: 0.88, wearLaps: 22, tOpt: 80, tRange: 50, wetTyre: true },
};
export const COMPOUND_IDS = ['soft', 'medium', 'hard', 'wet'];
export const DRY_COMPOUND_IDS = ['soft', 'medium', 'hard'];

/**
 * Grip multiplier for a compound on a track with `wet` water level (0 dry .. 1 flooded).
 * Slicks lose 30 % of their grip on a wet track; wets lose a little on a dry one.
 */
export function wetGripFactor(compound, wet) {
  const e = smoothstep(0.08, 0.7, wet);
  if (compound.wetTyre) return 1 - 0.1 * (1 - e) - 0.08 * e;
  return 1 - 0.3 * e;
}

/** Per-surface tyre grip multiplier and rolling resistance coefficient. Indexed by SURF. */
export const SURFACE = [];
SURFACE[SURF.ASPHALT] = { grip: 1.0, rr: 0.012 };
SURFACE[SURF.KERB] = { grip: 0.94, rr: 0.02 };
SURFACE[SURF.GRASS] = { grip: 0.52, rr: 0.1 };
SURFACE[SURF.GRAVEL] = { grip: 0.48, rr: 0.38 };
SURFACE[SURF.RUNOFF] = { grip: 0.92, rr: 0.016 };
SURFACE[SURF.PIT] = { grip: 1.0, rr: 0.012 };
SURFACE[SURF.WALL] = { grip: 0.4, rr: 0.4 };

/** Engine torque (Nm) vs rpm - peaky V6-turbo-hybrid-ish curve, ~650 kW peak. */
const TORQUE_CURVE = [
  [3000, 250],
  [4500, 330],
  [6000, 400],
  [8000, 470],
  [10000, 520],
  [11500, 530],
  [13000, 490],
  [14000, 455],
  [15000, 420],
  [15600, 0],
];
export const engineTorque = (rpm) => table(TORQUE_CURVE, rpm);

/** Gear tops (m/s at ~14.6k rpm) for gears 1..8; ratios are derived from these. */
const GEAR_TOP_SPEED = [21, 32, 43, 54, 65, 76, 88, 101];

/**
 * Builds the full set of car constants. `setup`:
 *  frontWing / rearWing (0..10), brakeBias (0.5..0.7), compound, performance (~0.97..1), fuel (kg)
 */
export function makeSpec(setup = {}) {
  const fw = clamp(setup.frontWing ?? 5, 0, 10);
  const rw = clamp(setup.rearWing ?? 5, 0, 10);
  const perf = setup.performance ?? 1;
  const wheelR = 0.35;
  const spec = {
    // chassis
    dryMass: 770,
    wheelbase: 3.6,
    weightFront: 0.455,
    trackF: 1.6,
    trackR: 1.55,
    hCg: 0.28,
    izDry: 1050,
    wheelR,
    length: 5.5,
    width: 2.0,
    // aero (effective areas, m^2)
    clAf: 1.6 + 0.16 * fw + 0.32,
    clAr: 2.2 + 0.18 * rw + 0.48,
    cdA: 0.35 + 0.25 + 0.012 * fw + 0.35 + 0.035 * rw,
    cdSide: 2.8,
    drsDragCut: 0.2,
    drsLiftCut: 0.45,
    // tyres
    mu0: 2.0,
    loadSens: 1.1e-4,
    fz0: 2000,
    kappaPeak: 0.11,
    alphaPeak: 0.09,
    pacejkaB: 2.06,
    pacejkaC: 1.4,
    relaxLength: 0.35,
    rollFrontShare: 0.55,
    frontGrip: setup.frontGrip ?? 1.0,
    rearGrip: setup.rearGrip ?? 1.15, // wider rear tyres: the front gives way first (stable understeer at the limit)
    // wheel inertia (per wheel)
    iFront: 1.5,
    iRear: 1.8,
    // powertrain
    idleRpm: 4200,
    maxRpm: 15000,
    shiftUpRpm: 13600,
    shiftDownRpm: 8300,
    driveEff: 0.93,
    powerScale: perf,
    ersPower: 120e3,
    ersCapacity: 4e6,
    // brakes
    brakeTorque: 19000,
    brakeBias: setup.brakeBias ?? 0.58,
    // steering
    maxSteer: 0.36,
    // tyre compound
    compound: COMPOUNDS[setup.compound || 'medium'],
    pressure: clamp(Math.round(setup.pressure ?? 0), -3, 3),
    fuelKg: setup.fuel ?? 40,
  };
  spec.gearRatios = GEAR_TOP_SPEED.map((v) => ((14600 * 2 * Math.PI) / 60) * wheelR / v);
  spec.aeroBalanceFront = (spec.clAf + 0.4 * 0) / (spec.clAf + spec.clAr);
  return spec;
}

/** Peak friction coefficient of one tyre at normal load fz (before temperature/wear/surface). */
export function tyreMu(spec, fz) {
  return Math.max(0.7, spec.mu0 - spec.loadSens * (fz - spec.fz0)) * spec.compound.mu;
}

/**
 * Approximate performance envelope, used to build AI speed profiles and for tests.
 * Everything here is deliberately conservative / smooth; the live physics is the source of truth.
 */
export function envelope(spec, mass) {
  const rho = AIR_DENSITY;
  const clA = spec.clAf + spec.clAr;
  const down = (v) => 0.5 * rho * clA * v * v;
  const drag = (v) => 0.5 * rho * spec.cdA * v * v;
  const wheelLoad = (v) => (mass * G + down(v)) / 4;
  // Sustained lateral accel (m/s^2) at speed v: tyre grip falls with load, so the lateral load transfer
  // (outer tyres gain what inner ones lose) costs grip. Solved by fixed-point iteration and tabulated per m/s.
  const hHalfTrack = (mass * spec.hCg) / (spec.trackF + spec.trackR);
  const latTable = new Float64Array(161);
  for (let k = 0; k < latTable.length; k++) {
    const fz = wheelLoad(k);
    let ay = (4 * tyreMu(spec, fz) * fz) / mass;
    for (let it = 0; it < 6; it++) {
      const dF = hHalfTrack * ay;
      const fo = fz + dF, fi = Math.max(fz - dF, 50);
      ay = (2 * (tyreMu(spec, fo) * fo + tyreMu(spec, fi) * fi)) / mass;
    }
    latTable[k] = ay;
  }
  const latAccel = (v, use = 1) => {
    const f = Math.min(Math.max(v, 0), latTable.length - 1.001);
    const i = Math.floor(f);
    return (latTable[i] + (latTable[i + 1] - latTable[i]) * (f - i)) * use;
  };
  /** max braking deceleration (m/s^2) at speed v with no lateral load */
  const brakeDecel = (v, use = 1) => {
    const fz = wheelLoad(v);
    return (4 * tyreMu(spec, fz) * fz * use + drag(v)) / mass;
  };
  const enginePower = (v) => {
    // best-gear wheel power at speed v (W)
    let best = 0;
    for (let g = 0; g < spec.gearRatios.length; g++) {
      const rpm = ((v / spec.wheelR) * spec.gearRatios[g] * 60) / (2 * Math.PI);
      if (rpm > spec.maxRpm || rpm < 6000) continue;
      const w = (rpm * 2 * Math.PI) / 60;
      best = Math.max(best, engineTorque(rpm) * w * spec.driveEff * spec.powerScale);
    }
    return best + spec.ersPower * 0.5 * spec.powerScale;
  };
  /** max forward acceleration (m/s^2) at speed v with no lateral load */
  const accel = (v, use = 1) => {
    const fzRear = (mass * G * (1 - spec.weightFront) + down(v) * (1 - spec.aeroBalanceFront)) / 2;
    const traction = 2 * tyreMu(spec, fzRear + 250) * (fzRear + 250) * use;
    const power = enginePower(Math.max(v, 8)) / Math.max(v, 8);
    const rr = 0.014 * (mass * G + down(v));
    return (Math.min(traction, power) - drag(v) - rr) / mass;
  };
  return { down, drag, latAccel, brakeDecel, accel, enginePower };
}

export { smoothstep };
