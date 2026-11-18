// What the tyre model gives against F1: per dry compound, one car alone at the pace limit for a long stint.
// Reports the fresh-tyre pace (laps 2-3), the degradation (s/lap over laps 3-12), and the lap where the tyre is used up
// (wear 0.62, where the grip starts to fall away), at the realistic wear setting (1x) unless WEAR is given.
// Usage: node tools/tyre-stints.mjs [track=northfield] [maxLaps=45]
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
const id = process.argv[2] || 'northfield', maxLaps = +(process.argv[3] || 45), wearSet = +(process.env.WEAR || 1);
const track = new Track(TRACK_DEFS.find((d) => d.id === id));
const out = {};
for (const compound of (process.env.COMPOUNDS || 'soft,medium,hard').split(',')) {
  const race = new Race(track, { mode: 'timetrial', laps: 99, level: 1, fieldSize: 1, playerGrid: 1, seed: 2, tyreWear: wearSet, compound });
  const p = race.player;
  p.fuelRate = 0;
  const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 1, seed: 5 });
  race.start();
  const laps = [], wearAt = [];
  let lastLaps = 0, cliff = null;
  for (let i = 0; i < 240 * 200 * maxLaps && p.rs.laps < maxLaps; i++) {
    const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 1, brake: 0, steer: 0 };
    race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer });
    race.events.length = 0;
    if (p.rs.laps > lastLaps) {
      lastLaps = p.rs.laps;
      laps.push(p.rs.lapTimes[p.rs.lapTimes.length - 1]);
      const w = p.tyreSummary().wear;
      wearAt.push(w);
      if (cliff == null && w >= 0.62) cliff = lastLaps;
      if (w > 0.95) break;
    }
  }
  const fresh = (laps[1] + laps[2]) / 2;
  const n = Math.min(laps.length, 12);
  let sx = 0, sy = 0, sxx = 0, sxy = 0, k = 0;
  for (let i = 2; i < n; i++) { sx += i; sy += laps[i]; sxx += i * i; sxy += i * laps[i]; k++; }
  const deg = k > 1 ? (k * sxy - sx * sy) / (k * sxx - sx * sx) : NaN;
  const best = Math.min(...laps.slice(1));
  out[compound] = { fresh, best, deg, cliff, wearPerLap: wearAt.length > 3 ? (wearAt[wearAt.length - 1] - wearAt[1]) / (wearAt.length - 2) : NaN, laps: laps.length };
  console.log(`${compound.padEnd(7)} best ${best.toFixed(3)} s  fresh ${fresh.toFixed(3)} s  deg ${(deg * 1000).toFixed(0)} ms/lap  worn out (0.62) at lap ${cliff ?? '>' + laps.length}  wear/lap ${(out[compound].wearPerLap * 100).toFixed(2)} %`);
}
if (out.soft && out.medium && out.hard) console.log(`gaps (best laps): soft->medium ${(out.medium.best - out.soft.best).toFixed(3)} s, medium->hard ${(out.hard.best - out.medium.best).toFixed(3)} s on a ${out.soft.best.toFixed(1)} s lap`);
