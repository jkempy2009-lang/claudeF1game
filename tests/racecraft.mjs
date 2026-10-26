// Racecraft: a slow "player" (a bot at low level) must be passed cleanly by the field, and a fast player
// must be able to work through slower cars without the AI punting it off. Counts contact and track position swaps.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const id = process.argv[2] || 'northfield';
const track = new Track(TRACK_DEFS.find((d) => d.id === id));

function scenario(name, fieldLevel, playerLevel, laps = 4) {
  const race = new Race(track, { mode: 'race', laps, level: fieldLevel, fieldSize: 12, playerGrid: 6, seed: 11, tyreWear: 1.5, collisions: true, damage: true });
  const p = race.player;
  const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: playerLevel, seed: 5 });
  race.start();
  let hitsPlayer = 0, hitsWall = 0, playerFault = 0, recoveries = 0, swaps = 0, lastPos = 6;
  const pass = new Set();
  for (let i = 0; i < 240 * 1100 && race.phase !== 'finished'; i++) {
    const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
    race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, drsPress: inp.drs });
    if (race.phase === 'racing' && p.rs.pos !== lastPos) { swaps++; lastPos = p.rs.pos; }
    for (const e of race.events) {
      if (e.type === 'impact' && e.speed > 3) {
        if (e.wall && e.car === p) hitsWall++;
        else if (!e.wall && (e.car === p || e.other === p)) { hitsPlayer++; }
      }
      if (e.type === 'recover') recoveries++;
      if (e.type === 'penalty' && e.car !== p) playerFault++; // penalties handed to AI cars = AI at fault
    }
    race.events.length = 0;
  }
  const cls = race.classification();
  const me = cls.find((c) => c.info.isPlayer);
  console.log(`  ${name}: player P${me.pos} (grid 6), position changes ${swaps}, contacts with player ${hitsPlayer}, AI penalties ${playerFault}, player wall hits ${hitsWall}, recoveries ${recoveries}, finished ${cls.filter((c) => c.time != null).length}/${cls.length}`);
  return { me, hitsPlayer, playerFault, hitsWall, swaps, recoveries, cls };
}

const slow = scenario('slow player, fast field', 0.9, 0.35);
ok('slow player is passed by most of the field', slow.me.pos >= 9, `P${slow.me.pos}`);
ok('...without being punted around', slow.hitsPlayer <= 6 && slow.recoveries <= 8, `${slow.hitsPlayer} contacts, ${slow.recoveries} recoveries`);
ok('...and the field classifies', slow.cls.filter((c) => c.time != null).length >= 10);
const fast = scenario('fast player, slow field', 0.35, 1.0);
ok('fast player works through the field', fast.me.pos <= 3, `P${fast.me.pos}`);
ok('...with the AI racing it, not parking', fast.hitsPlayer <= 14 && fast.recoveries <= 6, `${fast.hitsPlayer} contacts, ${fast.recoveries} recoveries`);
const eq = scenario('equal pace', 0.8, 0.8);
ok('equal pace: close racing without chaos', eq.recoveries <= 6, `${eq.recoveries} recoveries`);
process.exit(bad ? 1 : 0);
