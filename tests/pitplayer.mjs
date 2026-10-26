// Player pit-stop flow with the pit autopilot: request a stop on lap 1 and check it completes without penalties.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
const id = process.argv[2] || 'northfield';
const track = new Track(TRACK_DEFS.find((d) => d.id === id));
const race = new Race(track, { laps: 4, level: 0.6, fieldSize: 8, playerGrid: 3, seed: 3, tyreWear: 3 });
const p = race.player;
const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 0.7, seed: 5 });
race.start();
let toggled = false, log = [];
for (let i = 0; i < 240 * 420 && race.phase !== 'finished'; i++) {
  const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
  if (p.rs.pilot && p.rs.pilot.pitState !== 'none') bot.pitState = 'none';
  const pin = { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, pitToggle: false };
  if (!toggled && race.phase === 'racing' && p.rs.laps >= 1 && p.s > 200) { pin.pitToggle = true; toggled = true; }
  race.step(DT, pin);
  for (const e of race.events) if (['pitEntry', 'pitExit', 'pitStopStart', 'pitStopEnd', 'penalty', 'pitRequest'].includes(e.type) && e.car === p) log.push(`${(race.time - race.t0).toFixed(1)}s ${e.type}${e.reason ? ' ' + e.reason : ''}${e.compound ? ' ' + e.compound : ''}${e.dur ? ' ' + e.dur.toFixed(1) : ''}`);
  race.events.length = 0;
}
console.log(log.join('\n'));
console.log('stops', p.rs.stops, 'compounds', p.rs.compounds.join('>'), 'penalty', p.rs.penalty, 'finished', p.rs.finished, 'pos', p.rs.pos, 'wear now', (p.tyreSummary().wear * 100).toFixed(1) + '%');
if (process.env.DBG) {
  const race2 = new Race(track, { laps: 4, level: 0.6, fieldSize: 8, playerGrid: 3, seed: 3, tyreWear: 3 });
  const p2 = race2.player;
  const bot2 = new AIDriver({ car: p2, track, profile: race2.getProfile(p2.spec, 'bot'), level: 0.7, seed: 5 });
  race2.start();
  let tg = false;
  for (let i = 0; i < 240 * 260; i++) {
    const inp = race2.phase === 'racing' ? bot2.update(DT, race2) : { throttle: 0, brake: 1, steer: 0 };
    if (p2.rs.pilot && p2.rs.pilot.pitState !== 'none') bot2.pitState = 'none';
    const pin = { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, pitToggle: false };
    if (!tg && race2.phase === 'racing' && p2.rs.laps >= 1 && p2.s > 200) { pin.pitToggle = true; tg = true; }
    race2.step(DT, pin);
    race2.events.length = 0;
    if (p2.rs.pilot && p2.rs.pilot.pitState !== 'none' && i % 120 === 0) console.log((race2.time - race2.t0).toFixed(1), 'state', p2.rs.pilot.pitState, 's', p2.s.toFixed(0), 'd', p2.d.toFixed(1), 'v', p2.speed.toFixed(1), 'inPitLane', p2.rs.inPitLane, 'surf', [...p2.surf].join(''), 'svc', !!p2.rs.service, 'pitStopped', p2.pitStopped);
  }
}
