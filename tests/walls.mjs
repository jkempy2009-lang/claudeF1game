// Barriers and circuits: no ledges in any barrier, street circuits really tight, the new circuits really steep, banked and
// drivable.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const tracks = TRACK_DEFS.map((d) => new Track(d));
let worstStep = 0, worstAt = '';
for (const t of tracks) for (const side of [1, -1]) for (let i = 0; i < t.N; i++) {
  const j = Math.abs(t.wallDist((i + 1) % t.N, side) - t.wallDist(i, side)) / t.ds;
  if (j > worstStep) { worstStep = j; worstAt = `${t.id} s${(i * t.ds).toFixed(0)}`; }
}
ok('no ledges: no barrier comes in more than 1 m in 6 between samples, on any circuit', worstStep <= 1 / 6 + 1e-6, `${worstStep.toFixed(3)} at ${worstAt}`);
for (const t of tracks.filter((x) => x.def.runoff && x.def.runoff.mode === 'street' && !x.def.id.startsWith('serpent'))) {
  let room = 0, n = 0;
  for (let i = 0; i < t.N; i++) if (!t.kl[i] && !(t.pit && t.inPitRange(i * t.ds))) { room += t.wallDist(i, 1) - t.wl[i]; n++; }
  ok(`${t.id}: the walls stand within a metre of the track on the straights`, room / n < 1, `${(room / n).toFixed(2)} m`);
}
const shape = (t) => {
  let zmin = 1e9, zmax = -1e9, bank = 0, grade = 0;
  for (let i = 0; i < t.N; i++) { zmin = Math.min(zmin, t.z[i]); zmax = Math.max(zmax, t.z[i]); bank = Math.max(bank, Math.abs(t.bank[i])); grade = Math.max(grade, Math.abs(t.slope[i])); }
  return { h: zmax - zmin, bank, grade };
};
const by = (id) => tracks.find((t) => t.id === id);
ok('Serpentine Pass climbs and drops more than any other circuit (70 m+)', shape(by('serpent')).h > 70 && tracks.every((t) => t.id === 'serpent' || shape(t).h < shape(by('serpent')).h), shape(by('serpent')).h.toFixed(0) + ' m');
ok('Vortex Ring has bowls banked at 10 degrees or more', shape(by('vortex')).bank > 0.17, ((shape(by('vortex')).bank * 180) / Math.PI).toFixed(1) + ' deg');
ok('Kasbah Streets is the narrowest, with grades of 8 % or more', by('kasbah').wl[0] + by('kasbah').wr[0] <= Math.min(...tracks.map((t) => t.wl[0] + t.wr[0])) && shape(by('kasbah')).grade > 0.08);
for (const id of ['serpent', 'vortex', 'kasbah']) {
  const track = by(id);
  const race = new Race(track, { mode: 'timetrial', laps: 99, level: 1, fieldSize: 1, seed: 2, tyreWear: 1 });
  const p = race.player;
  const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 1, seed: 5 });
  race.start();
  let walls = 0, rec = 0;
  for (let i = 0; i < 240 * 300 && p.rs.laps < 2; i++) {
    const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 1, brake: 0, steer: 0 };
    race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer });
    for (const e of race.events) { if (e.type === 'impact' && e.wall) walls++; if (e.type === 'recover') rec++; }
    race.events.length = 0;
  }
  ok(`${track.name}: the AI laps it cleanly at full pace`, p.rs.laps >= 2 && walls === 0 && rec === 0, `${p.rs.lapTimes.map((x) => x.toFixed(1)).join(' / ')} s, ${walls} wall hits`);
}
process.exit(bad ? 1 : 0);
