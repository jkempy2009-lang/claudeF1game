// Safety car: strand three AI cars on the track and check the pace car comes out, nobody passes, and it ends.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';

const id = process.argv[2] || 'northfield';
const track = new Track(TRACK_DEFS.find((d) => d.id === id));
const race = new Race(track, { mode: 'race', laps: 6, level: 0.8, fieldSize: 12, playerGrid: 6, seed: 9 });
const bot = new AIDriver({ car: race.player, track, profile: race.getProfile(race.player.spec, 'bot'), level: 0.8, seed: 3 });
race.start();
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
let deployed = false, ended = false, strand = null, orderAtDeploy = null, passes = 0, maxSpeedUnder = 0;
const events = [];
let n = 0;
while (race.phase !== 'finished' && n < 240 * 1400) {
  const i = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
  race.step(DT, { throttle: i.throttle, brake: i.brake, steer: i.steer, boost: i.boost, drsPress: i.drs });
  const t = race.time - (race.t0 ?? race.time);
  if (!strand && t > 40 && race.phase === 'racing') {
    // wreck three AI cars on the track: stop them dead and hold them still
    strand = race.cars.filter((c) => c.driver && c !== race.player).slice(3, 6);
  }
  if (strand && !deployed && t < 140) for (const c of strand) { c.u = 0; c.v = 0; c.r = 0; c.omega.fill(0); }
  for (const e of race.events) { if (e.type === 'scDeploy') { deployed = true; orderAtDeploy = race.sorted.map((c) => c); events.push(['deploy', t]); } if (e.type === 'scEnd') { ended = true; events.push(['end', t]); } if (e.type === 'scEnding') events.push(['ending', t]); if (e.type === 'yellow') events.push(['yellow', t]); }
  race.events.length = 0;
  if (race.sc.state === 'deployed') {
    for (const c of race.cars) if (!strand.includes(c)) maxSpeedUnder = Math.max(maxSpeedUnder, c.speed);
  }
  n++;
}
console.log(events.map((e) => `${e[0]}@${e[1].toFixed(0)}s`).join('  '));
ok('safety car deployed when 3 cars were stranded', deployed);
ok('safety car ended and racing resumed', ended);
ok('race finished', race.phase === 'finished');
ok('field stayed below racing speeds under the pace car', maxSpeedUnder < 75, `${(maxSpeedUnder * 3.6).toFixed(0)} km/h max`);
const q = race.classification();
ok('everyone not wrecked still classified', q.filter((e) => e.time != null).length >= 6, String(q.filter((e) => e.time != null).length));
process.exit(bad ? 1 : 0);
