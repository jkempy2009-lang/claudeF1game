// Formation lap (SPEC 9): one slow lap in grid order, tyres and brakes warmed, then the field lines up and the lights run.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const track = new Track(TRACK_DEFS.find((d) => d.id === (process.env.TRACK || 'rade')));
const race = new Race(track, { mode: 'race', laps: 3, level: 0.6, fieldSize: +(process.env.FIELD || 10), playerGrid: 5, seed: 5, formation: true, safetyCar: true });
const pin = { throttle: 0, brake: 0, steer: 0, aiDriven: true };
// the player on autopilot: copy the car ahead's AI by giving it an AIDriver of its own
const { AIDriver } = await import('../src/sim/ai.js');
const pilot = new AIDriver({ car: race.player, track, profile: race.getProfile(race.player.spec, 'pilot'), level: 0.6, seed: 9 });
const t0 = race.cars.map((c) => c.temp.reduce((a, b) => a + b, 0) / 4);
const b0 = race.cars.map((c) => (c.brakeTemp[0] + c.brakeTemp[1]) / 2);
race.start();
ok('the start begins a formation lap', race.phase === 'formation');
let tForm = 0, impacts = 0, endSeen = false;
const step = () => {
  const ai = race.phase === 'racing' || race.phase === 'formation' ? pilot.update(DT, race) : null;
  if (ai) Object.assign(pin, { throttle: ai.throttle, brake: ai.brake, steer: ai.steer });
  else Object.assign(pin, { throttle: 0, brake: 1, steer: 0 });
  race.step(DT, pin);
  for (const e of race.events) { if (e.type === 'impact' && e.speed > 4) impacts++; if (e.type === 'formationEnd') endSeen = true; }
  race.events.length = 0;
};
while (race.phase === 'formation' && tForm < 400) { step(); tForm += DT; }
const t1 = race.cars.map((c) => c.temp.reduce((a, b) => a + b, 0) / 4);
ok('the formation lap ends with the field lining up', endSeen && race.phase === 'countdown', `${tForm.toFixed(0)} s, phase ${race.phase}`);
ok('it takes a slow lap (more than 1.5x a racing lap)', tForm > (track.length / 52) * 1.5 && tForm < 300, tForm.toFixed(0) + ' s');
ok('the tyres keep most of their blanket heat (within 10 C)', t1.every((v, i) => v > t0[i] - 10), `${(t0.reduce((a, b) => a + b) / t0.length).toFixed(0)} -> ${(t1.reduce((a, b) => a + b) / t1.length).toFixed(0)} C`);
const b1 = race.cars.map((c) => (c.brakeTemp[0] + c.brakeTemp[1]) / 2);
ok('the front brakes arrive hotter than they left', b1.filter((v, i) => v > b0[i] + 30).length >= race.cars.length - 2, b1.map((v) => v.toFixed(0)).join(' '));
ok('nobody has a lap counted', race.cars.every((c) => c.rs.laps === 0));
ok('every car is back in its own grid box, at rest', race.cars.every((c) => { const sl = track.gridSlot(c.info.gridPos - 1); const p = track.pointAt(sl.s, sl.d); return Math.hypot(c.x - p.x, c.y - p.y) < 0.5 && c.speed < 0.5; }));
ok('no contact on the formation lap', impacts === 0, String(impacts));
let n = 0;
while (race.phase !== 'racing' && n < 20 / DT) { step(); n++; }
let t = 0;
while (t < 60) { step(); t += DT; }
ok('the race then starts and runs', race.phase === 'racing' && race.cars.filter((c) => c.rs.dist > 1000).length >= 8);
const r2 = new Race(track, { mode: 'race', laps: 3, level: 0.6, fieldSize: 10, seed: 5 });
r2.start();
ok('without the option the lights come straight on', r2.phase === 'countdown');
process.exit(bad ? 1 : 0);
