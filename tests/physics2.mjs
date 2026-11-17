// The v2 physics (SPEC-v2 sections 1 and 5): suspension and ground effect, flat-spot hop and self-aligning torque, marbles,
// launch clutch, reliability and retirement, banking, two-node brakes and glazing, fuel CG, progressive punctures.
import { Car, PHYS, FL, FR, RL, RR } from '../src/sim/car.js';
import { makeSpec } from '../src/sim/carspec.js';
import { FlatTrack } from './mocktrack.js';
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT as RDT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';

const DT = 1 / 240;
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const flat = new FlatTrack();
const fresh = (setup = {}) => { const c = new Car(makeSpec({ fuel: 45, ...setup }), flat); c.reset(0, 0, 0, 0); return c; };
const drive = (c, secs, inp) => { for (let t = 0; t < secs; t += DT) c.step(DT, typeof inp === 'function' ? inp(t) : inp); };

// ---- suspension and ground effect
{
  const c = fresh();
  drive(c, 14, { throttle: 1, brake: 0, steer: 0 });
  ok('springs compress with downforce: ride height falls at speed', c.rideF < 0.035 && c.rideR < 0.055 && c.rideF >= 0.005, `front ${(c.rideF * 1000).toFixed(1)} mm rear ${(c.rideR * 1000).toFixed(1)} mm at ${(c.speed * 3.6).toFixed(0)} km/h`);
  ok('suspension state stays finite', [...c.suspZ, ...c.suspV].every(Number.isFinite));
  const vOn = c.speed;
  const keep = PHYS.suspension; PHYS.suspension = false;
  const d = fresh(); drive(d, 14, { throttle: 1, brake: 0, steer: 0 });
  PHYS.suspension = keep;
  ok('ground effect is measured against the steady ride height: straight-line speed unchanged within 1.5 %', Math.abs(vOn / d.speed - 1) < 0.015, `${(vOn * 3.6).toFixed(1)} vs ${(d.speed * 3.6).toFixed(1)} km/h`);
  // hard braking from top speed dives the nose onto the plank
  let minF = 1, scraped = false;
  drive(c, 1.2, () => { const r = { throttle: 0, brake: 1, steer: 0 }; minF = Math.min(minF, c.rideF); scraped ||= c.bottoming >= 1; return r; });
  ok('heavy braking at speed dives the front onto the plank (never below it)', minF >= 0.005 - 1e-9 && minF < 0.012, `min front ${(minF * 1000).toFixed(1)} mm`);
}

// ---- flat-spot hop and self-aligning torque
{
  const c = fresh();
  drive(c, 4, { throttle: 0.6, brake: 0, steer: 0 });
  c.flat[FL] = 0.8;
  const loads = [];
  drive(c, 1, () => { loads.push(c.fz[FL]); return { throttle: 0.5, brake: 0, steer: 0 }; });
  const ripple = Math.max(...loads) - Math.min(...loads);
  ok('a flat-spotted tyre hops: the corner load pulses as it rolls', ripple > 600 && Math.abs(c.flatShake) <= 0.02, `${ripple.toFixed(0)} N`);
  const s = fresh();
  drive(s, 3, { throttle: 0.5, brake: 0, steer: 0 });
  drive(s, 1.5, { throttle: 0.4, brake: 0, steer: 0.25 });
  const satMild = Math.abs(s.sat);
  ok('self-aligning torque builds in a turn', satMild > 20 && Number.isFinite(s.sat), `${s.sat.toFixed(0)} Nm`);
}

// ---- launch clutch
{
  const launch = (rpmThrottle, manual) => {
    const c = fresh();
    drive(c, 1, { throttle: rpmThrottle, brake: 1, steer: 0, hold: true, manualLaunch: manual });
    let t = 0, kMax = 0;
    while (c.u < 100 / 3.6 && t < 10) { c.step(DT, { throttle: 1, brake: 0, steer: 0, manualLaunch: manual }); kMax = Math.max(kMax, c.kappa[RL]); t += DT; }
    return { t, kMax, stall: c.antiStallT };
  };
  const auto = launch(1, false), hot = launch(1, true), bog = launch(0.15, true);
  ok('launch control: 0-100 km/h still about 2.6 s', auto.t > 2.3 && auto.t < 2.95, auto.t.toFixed(2) + ' s');
  ok('a manual dump from the limiter lights up the rears', hot.kMax > auto.kMax * 1.15, `slip ${hot.kMax.toFixed(2)} vs ${auto.kMax.toFixed(2)}`);
  ok('a manual launch with too few revs bogs down (anti-stall)', bog.t > auto.t + 0.08, `${bog.t.toFixed(2)} s against ${auto.t.toFixed(2)} s`);
}

// ---- reliability
{
  const c = fresh();
  c.fuelMode = 2;
  drive(c, 20, { throttle: 1, brake: 0, steer: 0 });
  const st = c.engStress;
  c.engStress = 0.8;
  const p0 = c.u; drive(c, 0.5, { throttle: 1, brake: 0, steer: 0 });
  ok('a rich mix at high revs stresses the power unit', st > 0.005 && st < 0.06, st.toFixed(4));
  c.engStress = 1; c.step(DT, { throttle: 1, brake: 0, steer: 0 });
  ok('a fully stressed power unit fails', c.failed === 'Power unit');
  const lean = fresh(); lean.fuelMode = 0; drive(lean, 20, { throttle: 1, brake: 0, steer: 0 });
  ok('a lean mix does not stress it', lean.engStress === 0);
}

// ---- brakes: two nodes, glazing; fuel CG; punctures
{
  const c = fresh();
  drive(c, 10, { throttle: 1, brake: 0, steer: 0 });
  drive(c, 0.6, { throttle: 0, brake: 1, steer: 0 });
  ok('the friction face runs hotter than the disc core under braking', c.brakeTemp[FL] > c.brakeCore[FL] + 40, `${c.brakeTemp[FL].toFixed(0)} vs ${c.brakeCore[FL].toFixed(0)} C`);
  const g = fresh(); g.brakeTemp.fill(120); g.brakeCore.fill(120);
  drive(g, 3, { throttle: 0.6, brake: 0, steer: 0 });
  drive(g, 6, { throttle: 0.55, brake: 0.15, steer: 0 });
  const gl = g.glaze[FL];
  drive(g, 8, { throttle: 1, brake: 0, steer: 0 });
  drive(g, 1, { throttle: 0, brake: 1, steer: 0 });
  ok('light cold dragging glazes the pads; one hard stop cleans them', gl > 0.05 && g.glaze[FL] < gl * 0.5, `${gl.toFixed(3)} -> ${g.glaze[FL].toFixed(3)}`);
  const f = fresh({ fuel: 100 });
  const wf0 = f.weightFront; f.fuel = 5;
  ok('an emptying tank moves the CG forward', f.weightFront > wf0 + 0.008 && f.weightFront < wf0 + 0.013, `${wf0.toFixed(3)} -> ${f.weightFront.toFixed(3)}`);
  const p = fresh();
  drive(p, 4, { throttle: 0.7, brake: 0, steer: 0 });
  p.puncture[RR] = 0.05; p.punctureRate[RR] = 0.45;
  drive(p, 1, { throttle: 0.5, brake: 0, steer: 0 });
  const mid = p.puncture[RR];
  drive(p, 3, { throttle: 0.5, brake: 0, steer: 0 });
  ok('a puncture deflates progressively, then runs on the rim', mid > 0.3 && mid < 0.8 && p.puncture[RR] === 1, `${mid.toFixed(2)} after 1 s`);
  ok('...and the car pulls towards the flat (yaw to the right)', p.r < 0 || p.theta < 0, `yaw ${p.theta.toFixed(3)} rad`);
}

// ---- banking, marbles, retirement in a real race
{
  const track = new Track(TRACK_DEFS.find((d) => d.id === 'northfield'));
  const maxB = Math.max(...track.bank.map(Math.abs));
  ok('banking is road-circuit camber (under 3 degrees), level on the pit straight', maxB > 0.02 && maxB <= 0.0501 && track.bank[0] === 0, (maxB * 57.3).toFixed(2) + ' deg');
  let iMax = 0; for (let i = 0; i < track.N; i++) if (Math.abs(track.bank[i]) > Math.abs(track.bank[iMax])) iMax = i;
  const s = iMax * track.ds, b = track.bank[iMax];
  ok('the road surface follows the camber; beyond the tarmac it is level', Math.abs(track.heightAt(s, 3) - track.heightAt(s, -3) + 6 * Math.tan(b)) < 1e-6 && Math.abs(track.heightAt(s, 40) - track.heightAt(s, track.wl[iMax])) < 1e-6);
  ok('a corner is banked into the turn', Math.sign(b) === Math.sign(track.curv[iMax]));

  const race = new Race(track, { mode: 'race', laps: 3, level: 0.8, fieldSize: 12, playerGrid: 8, seed: 3, tyreWear: 3, collisions: true, damage: true });
  const p = race.player, bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 0.8, seed: 7 });
  race.start();
  const victim = race.cars.find((c) => c !== p && c.info.gridPos === 3);
  let n = 0, retiredEv = null;
  for (; race.phase !== 'finished' && n < 240 * 60 * 15; n++) {
    const inp = race.phase === 'racing' ? bot.update(RDT, race) : { throttle: 0, brake: 1, steer: 0 };
    if (p.rs.pilot && p.rs.pilot.pitState !== 'none') bot.pitState = 'none';
    race.step(RDT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, drsPress: inp.drs && !p.rs.drsLatch });
    if (race.phase === 'racing' && race.time - race.t0 > 40 && !victim.failed) victim.engStress = 1; // a failure on lap 1
    for (const e of race.events) if (e.type === 'retired') retiredEv = e;
    race.events.length = 0;
  }
  const M = Array.from(race.marbles);
  const mMax = Math.max(...M);
  let onLine = 0, off = 0;
  for (let i = 0; i < track.N; i++) {
    const wl = track.wl[i], wr = track.wr[i], lb = Math.min(4, Math.max(0, Math.floor(((track.lineD[i] + wr) / (wl + wr)) * 5)));
    onLine += M[i * 5 + lb];
    for (let k = 0; k < 5; k++) if (k !== lb) off += M[i * 5 + k] / 4;
  }
  ok('marbles collect off the racing line, the line itself stays clean', mMax > 0.05 && off > onLine * 3, `max ${mMax.toFixed(2)}, off/on ${(off / Math.max(onLine, 1e-9)).toFixed(1)}`);
  ok('the race finishes despite a retirement', race.phase === 'finished');
  ok('the failed car retired and was wheeled away', !!retiredEv && retiredEv.car === victim && victim.rs.dnf === 'Power unit' && victim.inGarage);
  const cls = race.classification();
  const vc = cls.find((e) => e.car === victim);
  ok('a retired car is classified last with no points', vc.pos === cls.length && vc.points === 0 && vc.dnf === 'Power unit', `P${vc.pos} of ${cls.length}`);
}
// ---- race control: virtual safety car, and skipping to the results
{
  const track = new Track(TRACK_DEFS.find((d) => d.id === 'vettore'));
  const race = new Race(track, { mode: 'race', laps: 4, level: 0.7, fieldSize: 12, playerGrid: 6, seed: 9, tyreWear: 1 });
  const p = race.player, bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 0.7, seed: 7 });
  race.start();
  const victim = race.cars.find((c) => c !== p && c.info.gridPos === 2);
  const seen = new Set();
  let vscSpeed = 0, vscN = 0, normalSpeed = 0, normalN = 0, deltaMax = -99, penalised = false;
  for (let n = 0; race.phase !== 'finished' && n < 240 * 600; n++) {
    const inp = race.phase === 'racing' ? bot.update(RDT, race) : { throttle: 0, brake: 1, steer: 0 };
    race.step(RDT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer });
    const t = race.time - race.t0;
    if (race.phase === 'racing' && t > 45 && !victim.failed) victim.engStress = 1;
    for (const e of race.events) { seen.add(e.type); if (e.type === 'penalty' && e.car === p) penalised = true; }
    race.events.length = 0;
    const others = race.cars.filter((c) => c !== p && c !== victim && !c.rs.inPitLane);
    const avg = others.reduce((a, c) => a + c.speed, 0) / others.length;
    if (race.sc.state === 'vsc' && race.sc.t > 6) { vscSpeed += avg; vscN++; deltaMax = Math.max(deltaMax, p.rs.vscDelta || 0); }
    else if (race.sc.state === 'none' && t > 20) { normalSpeed += avg; normalN++; }
    if (seen.has('vscEnd') && race.chequered) { race.finishNow(); break; }
  }
  ok('one stranded car brings out the virtual safety car, and it ends', seen.has('vscDeploy') && seen.has('vscEnd') && !seen.has('scDeploy'));
  ok('under the VSC the field slows to about 60 % of its pace', vscN > 0 && vscSpeed / vscN < 0.72 * (normalSpeed / normalN), `${(vscSpeed / vscN * 3.6).toFixed(0)} vs ${(normalSpeed / normalN * 3.6).toFixed(0)} km/h`);
  // the delta itself: a player holding racing speed under the VSC goes over the delta and is penalised after 5 s
  const r2 = new Race(track, { mode: 'race', laps: 4, level: 0.7, fieldSize: 2, playerGrid: 1, seed: 9 });
  r2.start();
  r2.phase = 'racing'; r2.t0 = r2.time;
  r2.deployVsc();
  const pl = r2.player;
  pl.u = 75;
  let pen = null;
  for (let k = 0; k < 80; k++) { r2.policeVsc(0.25); for (const e of r2.events) if (e.type === "penalty") pen = e; }
  ok('a player who ignores the VSC goes over the delta and is penalised', pl.rs.vscDelta > 1.5 && !!pen && pen.secs === 5, `delta +${pl.rs.vscDelta.toFixed(2)} s`);
  const r3 = new Race(track, { mode: 'race', laps: 4, level: 0.7, fieldSize: 2, playerGrid: 1, seed: 9 });
  r3.start(); r3.phase = 'racing'; r3.t0 = r3.time; r3.deployVsc();
  r3.player.u = 12;
  for (let k = 0; k < 40; k++) r3.policeVsc(0.25);
  ok('...one who slows down keeps a negative delta', r3.player.rs.vscDelta < 0);
  ok('finishNow ends the race with every running car classified', race.phase === 'finished' && race.cars.every((c) => c.rs.finished || c.rs.dnf));
}
// ---- AI strategy planner, qualifying traffic, corner cutting (SPEC 7.1, 7.4, 7.3)
{
  const track = new Track(TRACK_DEFS.find((d) => d.id === 'northfield'));
  const r = new Race(track, { mode: 'race', laps: 20, level: 0.7, fieldSize: 20, seed: 4, tyreWear: 1 });
  const plans = r.cars.filter((c) => c.rs.plan).map((c) => c.rs.plan);
  const life = (c) => r.tyreLife(c);
  const valid = plans.every((p) => {
    const edges = [0, ...p.stops, r.totalLaps];
    return p.compounds.length === p.stops.length + 1 && p.compounds.every((c, k) => edges[k + 1] - edges[k] <= life(c) * 1.02 + 1.01);
  });
  const shapes = new Set(plans.map((p) => p.compounds.join('-')));
  ok('every AI car has a plan whose stints fit its tyres', plans.length === 19 && valid, [...shapes].join(' '));
  ok('the field does not all run the same strategy', shapes.size >= 2);
  const m = new Race(track, { mode: 'race', laps: 20, level: 0.7, fieldSize: 20, seed: 4, tyreWear: 1, mandatoryStop: true });
  ok('a mandatory stop rule: every plan stops and uses two compounds', m.cars.filter((c) => c.rs.plan).every((c) => c.rs.plan.stops.length >= 1 && new Set(c.rs.plan.compounds).size >= 2));
  const short = new Race(track, { mode: 'race', laps: 5, level: 0.7, fieldSize: 20, seed: 4, tyreWear: 3 });
  ok('a sprint keeps the varied start tyres (no planner under 8 laps)', short.cars.every((c) => !c.rs.plan) && new Set(short.cars.filter((c) => !c.info.isPlayer).map((c) => c.compound.id)).size >= 2);

  const q = new Race(track, { mode: 'qualifying', laps: 99, level: 0.7, fieldSize: 6, seed: 4 });
  q.start();
  for (let n = 0; n < 240 * 8; n++) q.step(RDT, { throttle: 0, brake: 1, steer: 0 });
  ok('qualifying: cars on their out-lap are flagged to give way to flying laps', q.cars.every((c) => c.qualiYield === true));

  // corner cutting: through the cut the car was 0.6 s quicker than its best: an immediate penalty
  const c = new Race(track, { mode: 'race', laps: 5, level: 0.7, fieldSize: 2, seed: 4 });
  c.start(); c.phase = 'racing'; c.t0 = c.time;
  const p = c.player, rs = p.rs;
  rs.lapCpBest = Array.from({ length: track.cpCount }, (_, k) => k * 2);
  rs.cutCp = 3; rs.cpIdx = 5;
  rs.cpTimes[3 + 8] = 100; rs.cpTimes[5 + 8] = 103.4; // the best took 4.0 s over these two checkpoints
  let pen = null;
  c.updateRules(p, 0.01);
  for (const e of c.events) if (e.type === 'penalty') pen = e;
  ok('leaving the track and gaining 0.6 s is penalised at once', !!pen && pen.secs === 5 && /gaining an advantage/.test(pen.reason), pen ? pen.reason : 'none');
  rs.cutCp = 3; rs.cpIdx = 5; rs.cpTimes[5 + 8] = 104.1; c.events.length = 0;
  c.updateRules(p, 0.01);
  ok('...losing time through it is not', !c.events.some((e) => e.type === 'penalty'));
}
process.exit(bad ? 1 : 0);
