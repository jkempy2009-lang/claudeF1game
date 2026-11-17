import { makeSpec, envelope } from './carspec.js';
import { CAR_POWER } from './race.js';

const G = 9.81;

/**
 * Setup-screen estimates (SPEC 8.1): top speed, 0-100 km/h, sustained cornering g at a slow and a fast corner,
 * and the aero balance. They come from the same smooth envelope the AI speed profiles use, so they are right
 * relative to each other (this setup against the recommended one) rather than lap-exact: the live physics,
 * with its tyre temperatures, slip and ERS, is still the source of truth.
 */
export function setupStats(setup = {}, carPower = 'standard') {
  const spec = makeSpec(setup);
  const b = CAR_POWER[carPower] || CAR_POWER.standard;
  spec.powerScale *= b.power;
  spec.clAf *= b.aero;
  spec.clAr *= b.aero;
  const mass = spec.dryMass + spec.fuelKg;
  const env = envelope(spec, mass);
  let top = 40;
  while (top < 130 && env.accel(top) > 0) top += 0.1;
  let v = 0, t = 0;
  const dt = 0.005;
  while (v < 100 / 3.6 && t < 10) { v += Math.max(0.5, env.accel(v)) * dt; t += dt; }
  const aeroFront = spec.clAf / (spec.clAf + spec.clAr);
  return {
    topKph: top * 3.6,
    zeroTo100: t,
    slowG: env.latAccel(120 / 3.6) / G,
    fastG: env.latAccel(250 / 3.6) / G,
    aeroFront,
    dragCdA: spec.cdA,
  };
}
