// Race-rule details that are easy to get subtly wrong: live order with lapped cars, flags on laps, fuel, penalties in the wrong mode.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const track = new Track(TRACK_DEFS.find((d) => d.id === 'rade'));

// 1. a lapped car that has taken the flag is still behind a lead-lap car that has not
{
  const race = new Race(track, { mode: 'race', laps: 3, level: 0.5, fieldSize: 4, playerGrid: 4, seed: 3 });
  race.start();
  while (race.phase !== 'racing') race.step(DT, { throttle: 0, brake: 1, steer: 0 });
  const [a, b, c] = race.cars.filter((x) => x.driver);
  const L = track.length;
  race.chequered = true;
  a.rs.finished = true; a.rs.laps = 3; a.rs.finishTime = 200; a.rs.maxDist = 3 * L;
  b.rs.finished = true; b.rs.laps = 2; b.rs.finishTime = 205; b.rs.maxDist = 2 * L; // a lap down but crossed the line first
  c.rs.finished = false; c.rs.laps = 2; c.rs.maxDist = 2.8 * L; // lead lap, still on its last lap
  race.updateRank();
  const order = race.sorted.map((x) => x.info.code);
  ok('lead-lap car still running ranks above a lapped car that has finished', order.indexOf(c.info.code) < order.indexOf(b.info.code), order.join(' '));
  ok('the winner stays first', race.sorted[0] === a);
}

// 2. lap events: the standing-start lap is never a "personal best", an invalid lap is not either
{
  const race = new Race(track, { mode: 'race', laps: 3, level: 0.5, fieldSize: 3, playerGrid: 3, seed: 3 });
  const p = race.player;
  const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 0.6, seed: 2 });
  race.start();
  const laps = [];
  for (let i = 0; i < 240 * 400 && race.phase !== 'finished'; i++) {
    const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
    race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, drsPress: inp.drs && !p.rs.drsLatch });
    for (const e of race.events) if (e.type === 'lap' && e.car === p) laps.push(e);
    race.events.length = 0;
  }
  ok('lap 1 (standing start) is not flagged as a personal best', laps.length >= 2 && laps[0].best === false, JSON.stringify(laps.map((l) => [l.lap, l.best, l.valid])));
  ok('later valid laps can be personal bests', laps.slice(1).some((l) => l.best));
  ok('sector 3 is not set from the standing-start lap', p.rs.bestSectors[2] > 10, `best S3 ${p.rs.bestSectors[2]}`);
}

// 3. time trial: light fuel that does not burn, so laps only change with the driving
{
  const race = new Race(track, { mode: 'timetrial', laps: 3, level: 0.5, fieldSize: 2, playerGrid: 1, seed: 3 });
  const p = race.player;
  const f0 = p.fuel;
  race.start();
  for (let i = 0; i < 240 * 60; i++) race.step(DT, { throttle: race.phase === 'racing' ? 1 : 0, brake: race.phase === 'racing' ? 0 : 1, steer: 0 });
  ok('time trial fuel is light and constant', f0 <= 20 && p.fuel === f0, `${f0} -> ${p.fuel}`);
}

// 4. mandatory-stop penalty only belongs to a race that has a pit lane
{
  const race = new Race(track, { mode: 'qualifying', laps: 3, level: 0.5, fieldSize: 3, playerGrid: 3, seed: 3, mandatoryStop: true });
  race.start();
  race.endRace();
  ok('no mandatory-stop penalty after a qualifying session', (race.player.rs.penalty || 0) === 0);
}

// 5. a driver reset does not hand out free distance
{
  const race = new Race(track, { mode: 'race', laps: 3, level: 0.5, fieldSize: 3, playerGrid: 3, seed: 3 });
  race.start();
  while (race.phase !== 'racing') race.step(DT, { throttle: 0, brake: 1, steer: 0 });
  const p = race.player;
  p.rs.maxDist = p.rs.dist + 80; // 80 m behind its own high-water mark
  const before = p.rs.dist;
  race.resetToTrack(p);
  ok('reset keeps the distance covered, no free credit', Math.abs(p.rs.dist - before) < 1e-9, `${before} -> ${p.rs.dist}`);
}
process.exit(bad ? 1 : 0);
