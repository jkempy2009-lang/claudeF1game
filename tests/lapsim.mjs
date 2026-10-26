// Headless lap simulation: one AI car on each track. Usage: node tests/lapsim.mjs [trackId] [level] [laps]
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Car, TUNE } from '../src/sim/car.js';
import { makeSpec } from '../src/sim/carspec.js';
import { buildSpeedProfile } from '../src/sim/speedprofile.js';
import { AIDriver } from '../src/sim/ai.js';
import { formatTime, loopDelta } from '../src/util/math.js';

const DT = 1 / 240;
if (process.env.HEAT) TUNE.heat = +process.env.HEAT;
const only = process.argv[2] && process.argv[2] !== 'all' ? process.argv[2] : null;
const level = process.argv[3] ? +process.argv[3] : 1;
const laps = process.argv[4] ? +process.argv[4] : 3;
const quiet = process.env.QUIET;

for (const def of TRACK_DEFS) {
  if (only && def.id !== only) continue;
  const t0 = performance.now();
  const track = new Track(def);
  const tBuild = performance.now() - t0;
  const spec = makeSpec({ fuel: 8 * laps / 3 + 10, compound: 'medium', frontWing: def.setup?.front, rearWing: def.setup?.rear });
  const prof = buildSpeedProfile(track, spec, { latUse: +(process.env.LAT || 0.9), brakeUse: +(process.env.BRK || 0.95), accelUse: +(process.env.ACC || 1.0) });
  const car = new Car(spec, track);
  car.assist = { abs: true, tc: 2, steer: 0, autoGear: true, stability: 1 };
  const slot = track.gridSlot(0);
  const p = track.pointAt(slot.s, slot.d);
  car.reset(p.x, p.y, p.heading, 0);
  const drv = new AIDriver({ car, track, profile: prof, level, skill: 1, seed: 3 });
  const race = { phase: 'racing', time: 0, cars: [car], lapsLeft: () => 5 };
  car.lap = 0;
  let lapStart = 0, lastS = 0, lapTimes = [], offTrack = 0, maxD = 0, vmax = 0, walls = 0;
  let offT = 0, minSpeedLap = 1e9;
  const t = { v: 0 };
  let tick = 0;
  for (; race.time < 400 && lapTimes.length < laps; tick++) {
    car.drsAllowed = !process.env.NODRS && track.inDrsZone(car.s) >= 0 && Math.abs(car.latG) < 1.4 && race.time > 8;
    const inp = drv.update(DT, race);
    car.step(DT, inp);
    race.time += DT;
    const surf = Math.max(...car.surf);
    if (car.surf[0] >= 2 && car.surf[1] >= 2 && car.surf[2] >= 2 && car.surf[3] >= 2 && car.surf[0] !== 5) offT += DT;
    if (car.surf.some((x) => x === 6)) walls++;
    maxD = Math.max(maxD, Math.abs(car.d));
    vmax = Math.max(vmax, car.speed);
    if (lastS > track.length * 0.9 && car.s < track.length * 0.1 && race.time > 5) {
      // crossed the line
      lapTimes.push(race.time - lapStart);
      lapStart = race.time;
    }
    lastS = car.s;
  }
  const ts = car.tyreSummary();
  const temps = [...car.temp].map((x) => x.toFixed(0)).join('/');
  console.log(
    `${def.id.padEnd(11)} L=${(track.length / 1000).toFixed(2)}km  profile: min ${(Math.min(...prof.v) * 3.6).toFixed(0)} max ${(Math.max(...prof.v) * 3.6).toFixed(0)} km/h` +
      `\n   laps: ${lapTimes.map((x) => formatTime(x)).join('  ')}   (build ${tBuild.toFixed(0)}ms, sim ${(performance.now() - t0).toFixed(0)}ms)` +
      `\n   Vmax ${(vmax * 3.6).toFixed(0)} km/h  maxOffset ${maxD.toFixed(1)} m (half width ${track.wl[0].toFixed(1)})  time all-4-off-track ${offT.toFixed(1)} s  wall-touch steps ${walls}` +
      `\n   tyre wear ${(ts.wear * 100).toFixed(1)}%  temps ${temps}C  fuel left ${car.fuel.toFixed(1)}kg  soc ${car.soc.toFixed(2)}`
  );
}
