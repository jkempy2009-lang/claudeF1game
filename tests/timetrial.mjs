// Time-trial flow: out lap + flying laps with a bot, ghost recorded and replayable.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
import { formatTime } from '../src/util/math.js';
const track = new Track(TRACK_DEFS.find((d) => d.id === 'ardennes'));
const race = new Race(track, { mode: 'timetrial', seed: 1 });
const p = race.player;
const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level: 0.9, seed: 5 });
race.start();
let ghostEvents = 0;
for (let i = 0; i < 240 * 330; i++) {
  const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
  race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, drsPress: inp.drs && !p.rs.drsLatch });
  for (const e of race.events) if (e.type === 'ghost') ghostEvents++;
  race.events.length = 0;
}
console.log('cars', race.cars.length, 'laps', p.rs.lapTimes.map((t) => formatTime(t)).join(' '), 'best', formatTime(p.rs.best), 'ghost events', ghostEvents);
const g = race.ghostBest;
console.log('ghost frames', g ? g.frames.length / 4 : 0, 'ghost time', g ? formatTime(g.time) : '-');
const pose = race.ghostPose(30);
console.log('ghost pose @30s', pose && { x: pose.x.toFixed(0), y: pose.y.toFixed(0) });
console.log('delta', p.rs.delta && p.rs.delta.toFixed(2), 'drs used?', p.rs.drsEligible);
