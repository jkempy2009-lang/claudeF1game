// How well does the field race? Passes, contacts, recoveries and penalties for a 20-car race (the player is a bot at the field's level).
// Usage: node tools/racing-quality.mjs [level=0.8] [laps=5] [tracks=rade,northfield,vettore]
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
const level = +(process.argv[2] || 0.8), laps = +(process.argv[3] || 5);
const ids = (process.argv[4] || 'rade,northfield,vettore').split(',');
let tot = { passes: 0, cars: 0, walls: 0, recov: 0, pens: 0, fin: 0, n: 0 };
console.log('track        passes  car-contacts  wall  recov  pens  finish  fastest');
for (const id of ids) {
  const track = new Track(TRACK_DEFS.find((d) => d.id === id));
  const race = new Race(track, { mode: 'race', laps, level, fieldSize: 20, playerGrid: 12, seed: 7, tyreWear: 3, collisions: true, damage: true });
  const p = race.player;
  const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level, seed: 5 });
  race.start();
  const pos = new Map();
  let passes = 0, cars = 0, walls = 0, recov = 0, pens = 0;
  for (let i = 0; i < 240 * 60 * 25 && race.phase !== 'finished'; i++) {
    const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
    if (p.rs.pilot && p.rs.pilot.pitState !== 'none') bot.pitState = 'none';
    race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, drsPress: inp.drs && !p.rs.drsLatch });
    if (race.phase === 'racing' && race.time - race.t0 > 20 && i % 120 === 0) for (const c of race.cars) { const q = pos.get(c); if (q != null && q !== c.rs.pos && !c.rs.inPitLane) passes += q > c.rs.pos ? 1 : 0; pos.set(c, c.rs.pos); }
    for (const e of race.events) {
      // the player here is a bot that does not recover or pit when it breaks: only the field's events count
      if (e.type === 'impact' && e.speed > 3 && !(e.wall && e.car === p)) e.wall ? walls++ : cars++;
      if (e.type === 'recover' && e.car !== p) recov++;
      if (e.type === 'penalty' && e.car !== p) pens++;
    }
    race.events.length = 0;
  }
  const cls = race.classification();
  const fin = cls.filter((c) => c.time != null).length;
  tot.passes += passes; tot.cars += cars; tot.walls += walls; tot.recov += recov; tot.pens += pens; tot.fin += fin; tot.n++;
  console.log(`${id.padEnd(12)} ${String(passes).padStart(6)}  ${String(cars).padStart(12)}  ${String(walls).padStart(4)}  ${String(recov).padStart(5)}  ${String(pens).padStart(4)}  ${fin}/20   ${Math.min(...cls.map((c) => c.best || 1e9)).toFixed(2)}`);
}
console.log(`TOTAL        ${String(tot.passes).padStart(6)}  ${String(tot.cars).padStart(12)}  ${String(tot.walls).padStart(4)}  ${String(tot.recov).padStart(5)}  ${String(tot.pens).padStart(4)}  ${tot.fin}/${20 * tot.n}`);
