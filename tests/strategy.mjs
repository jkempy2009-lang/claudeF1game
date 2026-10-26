// Pit-wall strategy: advice follows the real tyre wear, 'auto' calls the player in, 'off' stays silent.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const track = new Track(TRACK_DEFS.find((d) => d.id === 'rade'));

function run(pitCalls, extra = {}) {
  const race = new Race(track, { mode: 'race', laps: 10, level: 0.6, fieldSize: 6, playerGrid: 3, seed: 3, tyreWear: 3.5, compound: 'soft', pitCalls, ...extra });
  const p = race.player;
  const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 0.7, seed: 5 });
  race.start();
  const calls = [];
  let sawAdvice = false;
  for (let i = 0; i < 240 * 1300 && race.phase !== 'finished'; i++) {
    const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
    if (p.rs.pilot && p.rs.pilot.pitState !== 'none') bot.pitState = 'none';
    race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, pitToggle: false });
    if (p.rs.advice) sawAdvice = true;
    for (const e of race.events) { if (e.type === 'pitCall' && e.car === p) { calls.push(e.advice); if (process.env.DBG) console.log('  call', JSON.stringify(e.advice), 'laps', p.rs.laps, 'wear', p.tyreSummary().wear.toFixed(2), p.compound.id); } if (e.type === 'penalty' && e.car === p) console.log('  penalty', e.reason, e.secs); }
    race.events.length = 0;
  }
  return { race, p, calls, sawAdvice };
}

const a = run('auto');
ok('auto: the pit wall called the player in', a.calls.length >= 1, JSON.stringify(a.calls[0]));
ok('auto: the stop happened', a.p.rs.stops >= 1, `stops ${a.p.rs.stops} ${a.p.rs.compounds.join('>')}`);
ok('auto: new tyres differ from the start set', a.p.rs.compounds.length < 2 || a.p.rs.compounds[1] !== 'soft' || a.calls[0].compound === 'soft', a.p.rs.compounds.join('>'));
ok('auto: finished without a penalty', a.p.rs.finished && !a.p.rs.penalty, `fin ${a.p.rs.finished} laps ${a.p.rs.laps} pen ${a.p.rs.penalty}`);
const r = run('radio');
ok('radio: advice was calling but no automatic stop', r.calls.length >= 1 && r.p.rs.stops === 0, `calls ${r.calls.length} stops ${r.p.rs.stops}`);
const o = run('off');
ok('off: silent', o.calls.length === 0 && !o.sawAdvice);
const w = run('auto', { weather: 'heavy', compound: 'wet', tyreWear: 1.5 });
ok('wet tyres: no needless stop on a wet track', w.p.rs.stops === 0, `stops ${w.p.rs.stops}`);
process.exit(bad ? 1 : 0);
