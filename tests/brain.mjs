// The rivals' decision matrix: for a set of racing situations, which action wins and why.
import { RaceBrain, MATRIX, ACTIONS, FEATURES } from '../src/sim/racecraft.js';
import { difficultyParams } from '../src/sim/ai.js';
import { mulberry32 } from '../src/util/math.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };

function mk(level = 0.9, seed = 3) {
  const rng = mulberry32(seed);
  const car = { d: 0, s: 1000, speed: 80, rs: { laps: 2, penalty: 0, inPitLane: false, maxDist: 0 }, wetness: 0, soc: 0.6, fuel: 40, ersMode: 1, fuelMode: 1, drsAllowed: false, info: { isPlayer: false } };
  const drv = { dp: difficultyParams(level), rng, car, track: { length: 5000 }, pitState: 'none' };
  return { brain: new RaceBrain(drv), car, drv };
}
const rival = (ds, dd, v = 70, extra = {}) => ({ c: { d: dd, s: 1000 + ds, speed: v, rs: { laps: 2, inPitLane: false }, info: { isPlayer: false }, ...extra }, ds, dd, v });
const race = { sc: { state: 'none' }, lapsLeft: () => 3, time: 10 };
let clock = 100;
function decide(m, list, o = {}) {
  const ctx = { list, V: m.car.speed, base: 0, wl: o.wl ?? 5.5, wr: o.wr ?? 5.5, dCorner: o.dCorner ?? 600, inside: o.inside ?? 0, straight: o.straight ?? true, now: (clock += 1), race };
  m.brain.think(ctx);
  return m.brain;
}

// the matrix itself is a real table
ok('every action has a row and every weight names a real feature', ACTIONS.every((a) => MATRIX[a] && Object.keys(MATRIX[a]).every((k) => k === 'bias' || FEATURES.includes(k))));

// alone on the road: just drive the line
{
  const b = decide(mk(), []);
  ok('alone: LINE', b.action === 'LINE', b.action);
}
// a car 0.4 s ahead on a long straight, corner far away: sit in the tow
{
  const m = mk(); m.car.speed = 80;
  const b = decide(m, [rival(40, 0, 72)], { dCorner: 700 });
  ok('close behind on a long straight: DRAFT', b.action === 'DRAFT', b.action);
}
// the same car with the corner coming up and the inside free: go for it
{
  const m = mk(); m.car.speed = 80;
  const b = decide(m, [rival(14, -0.5, 66)], { dCorner: 130, inside: 1, straight: false });
  ok('close, braking zone, inside free: ATTACK on the inside', b.action === 'ATTACK' && b.side === 1, `${b.action} ${b.side}`);
  ok('...and the dive brakes later than normal', b.intent.brakeLate > 1.03, b.intent.brakeLate.toFixed(3));
  ok('...in attack mode with the battery deployed', b.intent.ers === 2, `ers ${b.intent.ers}`);
}
// inside blocked by a third car: take the free side or wait
{
  const m = mk(); m.car.speed = 80;
  const b = decide(m, [rival(14, -0.5, 66), rival(8, 3.0, 70)], { dCorner: 130, inside: 1, straight: false });
  ok('inside taken by another car: not the inside', !(b.action === 'ATTACK' && b.side === 1), `${b.action} ${b.side}`);
}
// a careless novice does not dive; a bold professional does
{
  const n = mk(0.1, 5), pro = mk(1.1, 5);
  const bn = decide(n, [rival(18, -0.5, 70)], { dCorner: 140, inside: 1, straight: false });
  const bp = decide(pro, [rival(18, -0.5, 70)], { dCorner: 140, inside: 1, straight: false });
  ok('the professional is more eager to attack than the novice', bp.scores.ATTACK > bn.scores.ATTACK, `${bp.scores.ATTACK.toFixed(2)} vs ${bn.scores.ATTACK.toFixed(2)}`);
}
// wet and damaged: the same gap, a calmer decision
{
  const dry = mk(), wet = mk();
  wet.car.wetness = 0.9; wet.car.damageFront = 0.6;
  const a = decide(dry, [rival(14, -0.5, 66)], { dCorner: 130, inside: 1, straight: false });
  const b = decide(wet, [rival(14, -0.5, 66)], { dCorner: 130, inside: 1, straight: false });
  ok('wet track and a damaged car lower the appetite to attack', b.scores.ATTACK < a.scores.ATTACK - 0.5, `${b.scores.ATTACK.toFixed(2)} vs ${a.scores.ATTACK.toFixed(2)}`);
}
// somebody right behind us on a straight: cover; in the braking zone with a corner: take the inside
{
  const m = mk(1.0);
  const b = decide(m, [rival(-9, -1.5, 82)], { dCorner: 400, inside: 1, straight: true });
  ok('attacker on our right on a straight: COVER on their side', b.action === 'COVER' && b.side === -1, `${b.action} ${b.side}`);
  const m2 = mk(1.0);
  const b2 = decide(m2, [rival(-9, -1.5, 82)], { dCorner: 160, inside: 1, straight: false });
  ok('attacker behind in the braking zone: BLOCK the inside', b2.action === 'BLOCK' && b2.side === 1, `${b2.action} ${b2.side}`);
  const nov = mk(0.1);
  const b3 = decide(nov, [rival(-9, -1.5, 82)], { dCorner: 160, inside: 1, straight: false });
  ok('a novice does not defend', b3.action !== 'BLOCK' && b3.action !== 'COVER', b3.action);
}
// a lapped car with the leader on its tail: get out of the way
{
  const m = mk(0.6);
  const lead = rival(-30, 0.5, 90); lead.c.rs.laps = 3;
  const b = decide(m, [lead], { dCorner: 500, straight: true });
  ok('blue flag: YIELD, out of the leader\'s way', b.action === 'YIELD' && b.side === -1, `${b.action} ${b.side}`);
  ok('...and a lift while the leader is close', b.intent.yieldLift < 1, b.intent.yieldLift);
}
// the safety car or the pit lane switches racing off
{
  const m = mk();
  m.drv.pitState = 'in';
  const b = decide(m, [rival(14, -0.5, 66)], { dCorner: 130, inside: 1, straight: false });
  ok('in the pit approach: no racing', b.action === 'LINE', b.action);
  const m2 = mk();
  race.sc.state = 'out';
  const b2 = decide(m2, [rival(14, -0.5, 66)], { dCorner: 130, inside: 1, straight: false });
  race.sc.state = 'none';
  ok('behind the safety car: no racing', b2.action === 'LINE', b2.action);
}
// an attack that never got its nose alongside is abandoned at the turn-in, and not retried at once
{
  const m = mk(1.0); m.car.speed = 80;
  let b = decide(m, [rival(14, -0.5, 66)], { dCorner: 90, inside: 1, straight: false });
  const first = b.action;
  b = decide(m, [rival(14, -0.5, 66)], { dCorner: 40, inside: 1, straight: false });
  ok('attack aborted at the turn-in when not alongside', first === 'ATTACK' && b.action === 'FOLLOW', `${first} -> ${b.action}`);
  b = decide(m, [rival(14, -0.5, 66)], { dCorner: 300, inside: 1, straight: false });
  ok('...and not repeated straight away', b.action !== 'ATTACK', b.action);
}
// energy and fuel
{
  const m = mk(); m.car.soc = 0.2;
  const b = decide(m, [rival(40, 0, 78)], { dCorner: 700 });
  ok('stuck in the tow with a low battery: harvest', b.intent.ers === 0, `ers ${b.intent.ers}`);
}
{
  const m = mk();
  m.brain.fuelPerLap = 3; m.car.fuel = 2; // 3 laps to go on two kilos
  const b = decide(m, []);
  ok('short on fuel: lean', b.intent.fuel === 0, `fuel ${b.intent.fuel}`);
}
// the explanation is available
{
  const m = mk();
  const e = decide(m, [rival(14, -0.5, 66)], { dCorner: 130, inside: 1, straight: false }).explain();
  ok('explain() lists every action with a score and every feature', ACTIONS.every((a) => a in e.scores) && FEATURES.every((k) => k in e.features));
}
process.exit(bad ? 1 : 0);
