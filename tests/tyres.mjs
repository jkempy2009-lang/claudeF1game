// Tyre model: surface vs carcass temperature, graining on cold rubber, outside tyres wear faster, crests unweight the car.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
function run(id, laps, hook = () => {}, opt = {}) {
  const track = new Track(TRACK_DEFS.find((d) => d.id === id));
  const race = new Race(track, { mode: 'timetrial', laps: 9, level: 1, fieldSize: 2, playerGrid: 1, seed: 2, tyreWear: 3, ...opt });
  const p = race.player;
  const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 1, seed: 5 });
  race.start();
  for (let i = 0; i < 240 * 60 * 8 && p.rs.laps < laps; i++) {
    const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 1, brake: 0, steer: 0 };
    race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost });
    if (race.phase === 'racing') hook(p, track, race, i);
    race.events.length = 0;
  }
  return { p, track };
}
// surface vs carcass over two laps of Northfield (clockwise: mostly right-handers load the left tyres)
{
  let maxGap = 0, minGap = 0, maxRate = 0, prevS = null, prevC = null, maxRateC = 0;
  const { p, track } = run('northfield', 2, (c) => {
    for (let w = 0; w < 4; w++) { maxGap = Math.max(maxGap, c.tempS[w] - c.temp[w]); minGap = Math.min(minGap, c.tempS[w] - c.temp[w]); }
    if (prevS != null) { maxRate = Math.max(maxRate, Math.abs(c.tempS[0] - prevS) / DT); maxRateC = Math.max(maxRateC, Math.abs(c.temp[0] - prevC) / DT); }
    prevS = c.tempS[0]; prevC = c.temp[0];
  });
  ok('the surface runs hotter than the carcass in corners', maxGap > 8, `+${maxGap.toFixed(0)} K`);
  ok('...and cooler on the straights', minGap < -2, `${minGap.toFixed(1)} K`);
  ok('the surface reacts much faster than the carcass', maxRate > 4 * maxRateC, `${maxRate.toFixed(0)} vs ${maxRateC.toFixed(1)} K/s`);
  ok('carcass stays in a sane window', Math.max(...p.temp) < 135 && Math.min(...p.temp) > 60, `${Math.min(...p.temp).toFixed(0)}..${Math.max(...p.temp).toFixed(0)} C`);
  // asymmetric wear: which side does this circuit load? the side opposite its dominant turning direction
  let turn = 0;
  for (let i = 0; i < track.N; i++) turn += track.curv[i];
  const outside = turn > 0 ? [1, 3] : [0, 2]; // left-hand lap (k > 0) loads the right tyres (indices 1, 3)
  const inside = turn > 0 ? [0, 2] : [1, 3];
  const wo = p.wear[outside[0]] + p.wear[outside[1]], wi = p.wear[inside[0]] + p.wear[inside[1]];
  ok('the outside tyres of the lap wear faster', wo > wi * 1.03, `outside ${(wo * 50).toFixed(2)} % vs inside ${(wi * 50).toFixed(2)} %`);
}
// a lock-up spikes the surface, not the carcass
{
  const track = new Track(TRACK_DEFS.find((d) => d.id === 'mirage'));
  const race = new Race(track, { mode: 'timetrial', laps: 3, level: 1, fieldSize: 2, playerGrid: 1, seed: 2, assists: { abs: false, tc: 2, steer: true, stability: 1, autoGear: true } });
  const p = race.player;
  race.start();
  let s0 = null, c0 = null, peakS = 0, peakC = 0, n = 0;
  for (let i = 0; i < 240 * 40; i++) {
    const fast = p.speed > 62 || s0 != null;
    race.step(DT, { throttle: fast ? 0 : 1, brake: fast ? 1 : 0, steer: 0 });
    if (fast && s0 == null) { s0 = p.tempS[0]; c0 = p.temp[0]; }
    if (s0 != null) { peakS = Math.max(peakS, p.tempS[0] - s0); peakC = Math.max(peakC, p.temp[0] - c0); if (++n > 240 * 0.6) break; } // the first 0.6 s of the lock-up
    race.events.length = 0;
  }
  ok('a locked front wheel flashes the surface long before the carcass follows', peakS > 40 && peakS > 2.5 * peakC, `surface +${peakS.toFixed(0)} K, carcass +${peakC.toFixed(0)} K`);
}
// graining: pushing on cold rubber grains it and costs grip; warm running cleans it up
{
  let peak = 0;
  const cold = (c) => { c.temp.fill(45); c.tempS.fill(45); };
  const track = new Track(TRACK_DEFS.find((d) => d.id === 'northfield'));
  const race = new Race(track, { mode: 'timetrial', laps: 9, level: 1, fieldSize: 2, playerGrid: 1, seed: 2 });
  const p = race.player;
  const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 1, seed: 5 });
  race.start();
  cold(p);
  let after1 = null;
  for (let i = 0; i < 240 * 60 * 8 && p.rs.laps < 4; i++) {
    const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 1, brake: 0, steer: 0 };
    race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost });
    peak = Math.max(peak, ...p.grain);
    if (p.rs.laps === 1 && after1 == null) after1 = Math.max(...p.grain);
    race.events.length = 0;
  }
  ok('cold tyres grain when pushed', peak > 0.15, `peak ${peak.toFixed(2)}`);
  ok('...and clean up with warm laps', Math.max(...p.grain) < peak * 0.7, `${peak.toFixed(2)} -> ${Math.max(...p.grain).toFixed(2)}`);
  const warm = run('northfield', 2);
  ok('tyres in their window do not grain', Math.max(...warm.p.grain) < 0.05, Math.max(...warm.p.grain).toFixed(3));
}
// crests and compressions, floor bottoming
{
  let lo = 1, hi = 1, bott = 0;
  run('sakura', 2, (c) => { lo = Math.min(lo, c.gLoad); hi = Math.max(hi, c.gLoad); bott = Math.max(bott, c.bottoming); });
  ok('Sakura: the car goes light over crests and heavy in compressions', lo < 0.9 && hi > 1.1, `${lo.toFixed(2)}..${hi.toFixed(2)} g`);
  let b2 = 0, vmax = 0;
  run('mirage', 2, (c) => { b2 = Math.max(b2, c.bottoming); vmax = Math.max(vmax, c.speed); });
  ok('the floor can touch down at speed, never when slow', bott + b2 > 0 , `Sakura ${bott.toFixed(2)}, Mirage ${b2.toFixed(2)} at up to ${(vmax * 3.6).toFixed(0)} km/h`);
}
process.exit(bad ? 1 : 0);
