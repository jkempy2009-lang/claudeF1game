// An absent player must not hang the session: the field finishes, the idle car is classified, the race ends.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const track = new Track(TRACK_DEFS.find((d) => d.id === 'rade'));
for (const mode of ['race', 'qualifying']) {
  const race = new Race(track, { mode, laps: 3, level: 0.6, fieldSize: 8, playerGrid: 4, seed: 2 });
  race.start();
  let n = 0;
  while (race.phase !== 'finished' && n < 240 * 1500) { race.step(DT, { throttle: 0, brake: 0, steer: 0 }); race.events.length = 0; n++; }
  const t = n * DT;
  ok(`${mode}: idle player: session ends by itself`, race.phase === 'finished', `${t.toFixed(0)} s`);
  const cls = race.classification();
  const me = cls.find((c) => c.info.isPlayer);
  ok(`${mode}: idle player is classified`, !!me && cls.length === 8, `P${me && me.pos}`);
  if (mode === 'race') ok('race: idle player is last or lapped', me.pos >= 7 || me.laps < 3, `P${me.pos} laps ${me.laps}`);
}
process.exit(bad ? 1 : 0);
