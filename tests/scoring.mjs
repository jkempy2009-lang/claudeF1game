// Win conditions and score counters: classification order, points, penalties, fastest-lap bonus, season bookkeeping.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
import * as C from '../src/sim/career.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

for (const id of ['rade', 'aurora']) {
  const track = new Track(TRACK_DEFS.find((d) => d.id === id));
  const race = new Race(track, { mode: 'race', laps: 3, level: 0.8, fieldSize: 20, playerGrid: 9, seed: 31 });
  const bot = new AIDriver({ car: race.player, track, profile: race.getProfile(race.player.spec, 'bot'), level: 0.8, seed: 3 });
  race.start();
  let n = 0;
  while (race.phase !== 'finished' && n < 240 * 1200) {
    const i = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
    race.step(DT, { throttle: i.throttle, brake: i.brake, steer: i.steer, boost: i.boost, drsPress: i.drs });
    race.events.length = 0;
    n++;
  }
  console.log(`-- ${id}`);
  ok('race reached the finished phase', race.phase === 'finished');
  const cls = race.classification();
  ok('everyone is classified exactly once', cls.length === 20 && new Set(cls.map((e) => e.info.code)).size === 20);
  const fin = cls.filter((e) => e.time != null);
  ok('finishers are ordered by (penalised) race time', fin.every((e, i) => i === 0 || e.laps < fin[i - 1].laps || (e.laps === fin[i - 1].laps && e.time >= fin[i - 1].time - 1e-9)));
  ok('classified positions are 1..20 in order', cls.every((e, i) => e.pos === i + 1));
  const pts = cls.map((e) => e.points);
  const fl = race.fastest.car;
  const flRow = cls.find((e) => e.car === fl);
  const bonus = flRow && flRow.pos <= 10 ? 1 : 0;
  ok('points follow the 25-18-15... table (+1 fastest lap in the top ten)', cls.every((e) => e.points === (POINTS[e.pos - 1] || 0) + (e.car === fl && e.pos <= 10 ? 1 : 0)), `bonus awarded: ${bonus}`);
  ok('total points handed out add up', pts.reduce((a, b) => a + b, 0) === POINTS.reduce((a, b) => a + b, 0) + bonus);
  ok('winner finished all the laps', cls[0].laps === 3 && cls[0].time != null);
  ok('penalties are included in the classified time', cls.every((e) => e.time == null || Math.abs(e.time - (e.raw + e.penalty)) < 1e-6));
  ok('fastest lap belongs to a classified car with a real time', !!fl && race.fastest.time > 30 && race.fastest.time < 200);
  const season = C.newSeason(4);
  const row = C.recordRound(season, cls);
  ok('season records the round and moves on', season.round === 1 && row.order.length === 20);
  const total = Object.values(season.points).reduce((a, b) => a + b, 0);
  ok('driver standings total equals the points awarded', total === pts.reduce((a, b) => a + b, 0), String(total));
  const teamTotal = Object.values(season.teamPoints).reduce((a, b) => a + b, 0);
  ok('constructor standings total equals the points awarded', teamTotal === total);
}
process.exit(bad ? 1 : 0);
