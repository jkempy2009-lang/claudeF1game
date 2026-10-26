// Headless race: a full grid of AI cars (the "player" is also driven by an AI so the whole pipeline is exercised).
// Usage: node tests/racesim.mjs [trackId] [laps] [level] [fieldSize]
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
import { formatTime } from '../src/util/math.js';

const id = process.argv[2] || 'northfield';
const laps = +(process.argv[3] || 3);
const level = +(process.argv[4] ?? 0.8);
const field = +(process.argv[5] || 20);
const track = new Track(TRACK_DEFS.find((d) => d.id === id));
const race = new Race(track, { laps, level, fieldSize: field, playerGrid: 8, tyreWear: 3, mandatoryStop: false, seed: 5 });
// AI-driven "player"
const pcar = race.player;
const prof = race.getProfile(pcar.spec, 'pilotbot');
const bot = new AIDriver({ car: pcar, track, profile: prof, level, seed: 77, boxS: track.pit?.boxStart ? track.pitBox(pcar.info.teamIdx).s : null, boxD: track.pit ? track.pitBox(pcar.info.teamIdx).d : null });
const wall0 = performance.now();
race.start();
let impacts = 0, wallHits = 0, recover = 0, pits = 0, pens = 0;
let sim = 0;
const log = (...a) => console.log(...a);
while (race.phase !== 'finished' && sim < 60 * 20) {
  const inp = race.phase === 'racing' || race.phase === 'countdown' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
  const pin = { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, drsPress: inp.drs };
  race.step(DT, pin);
  if (bot.stuckT > 5) { bot.stuckT = 0; race.resetToTrack(pcar); }
  sim += DT;
  for (const e of race.events) {
    if (e.type === 'impact') { e.wall ? wallHits++ : impacts++; if (process.env.IMP && (!e.wall || e.speed > 4)) log(`  impact t=${(race.time - race.t0).toFixed(1)} ${e.car.info.code}(${e.car.rs.pos}) x ${e.other ? e.other.info.code : 'WALL'}(${e.other ? e.other.rs.pos : ''}) at s=${e.car.s.toFixed(0)} v=${e.speed.toFixed(1)} dd=${e.other ? (e.car.d - e.other.d).toFixed(1) : e.car.d.toFixed(1)}`); }
    else if (e.type === 'recover') { recover++; if (process.env.IMP) log(`  recover t=${(race.time - race.t0).toFixed(1)} ${e.car.info.code} s=${e.car.s.toFixed(0)} d=${e.car.d.toFixed(1)}`); }
    else if (e.type === 'pitStopEnd') pits++;
    else if (e.type === 'penalty') { pens++; if (process.env.PEN) log(`  penalty ${e.car.info.code} ${e.reason} t=${(race.time-race.t0).toFixed(1)}`); }
    else if (e.type === 'fastest' && process.env.V) log(`  fastest ${e.car.info.code} ${formatTime(e.time)}`);
  }
  race.events.length = 0;
}
const wall = performance.now() - wall0;
log(`${id}: ${laps} laps, level ${level}, ${race.cars.length} cars; simulated ${sim.toFixed(0)} s in ${(wall / 1000).toFixed(1)} s wall (${(sim / (wall / 1000)).toFixed(1)}x realtime)`);
log(`car-car impacts ${impacts}, wall impacts ${wallHits}, marshal recoveries ${recover}, pit stops ${pits}, penalties ${pens}`);
const cls = race.classification();
for (const e of cls) {
  const dmg = ((e.car.damageFront || 0) * 100).toFixed(0);
  log(`${String(e.pos).padStart(2)}. ${e.info.code} ${e.info.team.short.padEnd(9)} grid ${String(e.gridPos).padStart(2)} laps ${e.laps} ${e.time != null ? formatTime(e.time) : 'DNF       '} best ${formatTime(e.best)} stops ${e.stops} pen ${e.penalty}s wear ${(e.car.tyreSummary().wear * 100).toFixed(0)}% dmgF ${dmg}% resets ${e.car.rs.resets}`);
}
