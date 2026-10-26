// Driving school: every lesson is passable, and the tracker only counts what it says it counts.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
import { LESSONS, SchoolTracker, lessonById, sanitizeSchool } from '../src/sim/school.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };

function session(id, tweak = {}) {
  const l = lessonById(id);
  const track = new Track(TRACK_DEFS.find((d) => d.id === l.track));
  const wet = l.weather === 'heavy';
  const race = new Race(track, { mode: l.mode, laps: l.laps || 99, level: l.level ?? 0.3, fieldSize: l.mode === 'race' ? l.fieldSize || 2 : 2, playerGrid: 2, tyreWear: l.tyreWear ?? 2, compound: wet ? 'wet' : l.compound || 'medium', weather: l.weather || 'dry', damage: false, seed: 4, ...tweak });
  const car = race.player;
  const tr = new SchoolTracker(l);
  race.start();
  return { l, track, race, car, tr };
}
function drive(S, level, maxSec, extra = () => ({}), until = () => false) {
  const { race, car, track, tr } = S;
  const bot = new AIDriver({ car, track, profile: race.getProfile(car.spec, 'bot'), level, seed: 5 });
  for (let i = 0; i < maxSec / DT && race.phase !== 'finished'; i++) {
    const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
    if (car.rs.pilot && car.rs.pilot.pitState !== 'none') bot.pitState = 'none';
    race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, drsPress: inp.drs && !car.rs.drsLatch, ...extra(race, car, i) });
    tr.update(DT, car, race);
    for (const e of race.events) tr.onEvent(e, car);
    race.events.length = 0;
    if (until()) break;
  }
}

ok('nine lessons, each with goals and a tip', LESSONS.length >= 9 && LESSONS.every((l) => l.goals.length && l.tip && TRACK_DEFS.some((d) => d.id === l.track)));
ok('save sanitiser keeps only known lessons', JSON.stringify(sanitizeSchool({ launch: true, bogus: true, wet: 'yes' })) === '{"launch":true}' && JSON.stringify(sanitizeSchool([1, 2])) === '{}' && JSON.stringify(sanitizeSchool(null)) === '{}');

// launch: the AI drives a quick lap
{
  const S = session('launch');
  drive(S, 0.8, 120, () => ({}), () => S.tr.complete);
  ok('launch: top-speed goals reached', S.tr.complete, `max ${S.tr.ctx.maxKmh.toFixed(0)} km/h`);
}
// brake: manual driving, three clean stops from 220 km/h on Mirage's straight
{
  const S = session('brake');
  const { race, car, tr } = S;
  let phase = 0; // 0 accelerate, 1 brake
  for (let i = 0; i < 240 * 300 && !tr.complete; i++) {
    if (race.phase === 'racing') {
      const kmh = car.speed * 3.6;
      if (phase === 0 && kmh > 225) phase = 1;
      if (phase === 1 && kmh < 3) phase = 0;
    }
    race.step(DT, { throttle: race.phase === 'racing' && phase === 0 ? 1 : 0, brake: phase === 1 ? 1 : race.phase === 'racing' ? 0 : 1, steer: 0 });
    tr.update(DT, car, race);
    race.events.length = 0;
  }
  ok('brake: three clean full stops count', tr.complete && tr.ctx.cleanStops >= 3, `stops ${tr.ctx.cleanStops}`);
  // lifting off early is not a stop
  const S2 = session('brake');
  let ph = 0, lifted = 0;
  for (let i = 0; i < 240 * 120; i++) {
    const kmh = S2.car.speed * 3.6;
    if (ph === 0 && kmh > 215) ph = 1;
    if (ph === 1 && kmh < 120) { ph = 2; lifted++; }
    S2.race.step(DT, { throttle: S2.race.phase === 'racing' && ph === 0 ? 1 : 0, brake: ph === 1 ? 1 : S2.race.phase === 'racing' ? 0 : 1, steer: 0 });
    S2.tr.update(DT, S2.car, S2.race);
    S2.race.events.length = 0;
    if (ph === 2) break;
  }
  ok('brake: easing off at 120 km/h is not a stop', S2.tr.ctx.cleanStops === 0 && lifted === 1);
}
// clean laps: the AI at a modest level on Rade
{
  const S = session('line');
  drive(S, 0.6, 400, () => ({}), () => S.tr.complete);
  ok('line: two valid laps and a time under 1:20', S.tr.complete, `valid ${S.tr.ctx.validLaps}, best ${S.tr.ctx.bestValid.toFixed(1)}`);
}
// hybrid power: holding boost on the straights adds up; boosting with an empty battery does not count
{
  const S = session('ers');
  drive(S, 0.8, 200, () => ({ boost: true }), () => S.tr.ctx.boostSec >= 8);
  ok('ers: boost seconds are counted', S.tr.ctx.boostSec >= 8, `${S.tr.ctx.boostSec.toFixed(1)} s`);
  const S2 = session('ers');
  S2.car.soc = 0;
  drive(S2, 0.8, 20, () => ({ boost: true }), () => false);
  ok('ers: an empty battery earns little boost credit', S2.tr.ctx.boostSec < 4, `${S2.tr.ctx.boostSec.toFixed(2)} s`);
}
// smooth laps: a modest AI lap has no lock-ups; a lap with a flat-spotted tyre does not count
{
  const S = session('smooth');
  drive(S, 0.6, 400, () => ({}), () => S.tr.complete);
  ok('smooth: two clean valid laps pass', S.tr.complete, `smooth ${S.tr.ctx.smoothLaps}, valid ${S.tr.ctx.validLaps}`);
  const T = new SchoolTracker(lessonById('smooth'));
  const car = { flat: [0, 0, 0, 0] };
  T.onEvent({ type: 'lap', car, valid: true, time: 80 }, car);
  car.flat[1] = 0.3;
  T.onEvent({ type: 'lap', car, valid: true, time: 80 }, car);
  T.onEvent({ type: 'lap', car, valid: true, time: 80 }, car);
  ok('smooth: the lap that flat-spots a tyre is not counted', T.ctx.smoothLaps === 2 && T.ctx.validLaps === 3, `${T.ctx.smoothLaps} smooth of ${T.ctx.validLaps}`);
}
// wet laps
{
  const S = session('wet');
  drive(S, 0.55, 600, () => ({}), () => S.tr.complete);
  ok('wet: two valid laps in the rain', S.tr.complete, `valid ${S.tr.ctx.validLaps}`);
}
// DRS in a time trial: the bot opens it in the zones
{
  const S = session('drs');
  drive(S, 0.8, 300, () => ({}), () => S.tr.complete);
  ok('drs: two openings counted', S.tr.complete, `opens ${S.tr.ctx.drsOpens}`);
}
// slipstream + overtaking: a quick bot against the slow car
{
  const S = session('slip', { laps: 6 });
  drive(S, 1.0, 600, () => ({}), () => S.tr.complete);
  ok('slip: got within a second and made an overtake', S.tr.done.a && S.tr.done.b, `minGap ${S.tr.ctx.minGap.toFixed(2)} passes ${S.tr.ctx.passes}`);
}
// pit: a stop is counted, perfect wheels only count from the pit game
{
  const S = session('pit');
  let toggled = false;
  drive(S, 0.6, 500, (race, car) => {
    if (!toggled && race.phase === 'racing' && car.rs.laps >= 1 && car.s > 200) { toggled = true; return { pitToggle: true }; }
    return { pitToggle: false };
  }, () => S.tr.ctx.stops >= 1);
  ok('pit: the stop is counted', S.tr.done.a && S.tr.ctx.stops >= 1);
  ok('pit: perfect wheels are not given for free', !S.tr.done.b || S.tr.ctx.bestPerfects >= 3);
  S.tr.onEvent({ type: 'pitGameDone', car: S.car, perfects: 4 }, S.car);
  ok('pit: four perfect wheels pass the lesson', S.tr.complete, `perfects ${S.tr.ctx.bestPerfects}`);
}
process.exit(bad ? 1 : 0);
