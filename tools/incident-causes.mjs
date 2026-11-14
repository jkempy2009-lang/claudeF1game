// Why do cars need recovering? For every marshal recovery, what happened to that car in the 10 s before it.
// Usage: node tools/incident-causes.mjs [level=0.8] [track=northfield] [seeds=1,2] [laps=5]
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT } from '../src/sim/race.js';
import { AIDriver } from '../src/sim/ai.js';
import { RC_TUNE } from '../src/sim/racecraft.js';
for (const k of (process.env.RC_OFF || '').split(',').filter(Boolean)) RC_TUNE[k] = false;
const level = +(process.argv[2] || 0.8), tid = process.argv[3] || 'northfield', seeds = (process.argv[4] || '1,2').split(',').map(Number), laps = +(process.argv[5] || 5);
const track = new Track(TRACK_DEFS.find((d) => d.id === tid));
const cause = {}, where = {}, examples = [], pitZones = {}, pitEx = [];
for (const seed of seeds) {
  const race = new Race(track, { mode: 'race', laps, level, fieldSize: 20, playerGrid: 12, seed, tyreWear: 3, collisions: true, damage: true });
  const p = race.player;
  const bot = new AIDriver({ car: p, track, profile: race.getProfile(p.spec, 'bot'), level, seed: 5 + seed });
  race.start();
  const hist = new Map(race.cars.map((c) => [c, { carHit: -99, wallHit: -99, hitBy: '', firstOff: -99, dmg0: 0 }]));
  for (let i = 0; i < 240 * 60 * 25 && race.phase !== 'finished'; i++) {
    const inp = race.phase === 'racing' ? bot.update(DT, race) : { throttle: 0, brake: 1, steer: 0 };
    if (p.rs.pilot && p.rs.pilot.pitState !== 'none') bot.pitState = 'none';
    race.step(DT, { throttle: inp.throttle, brake: inp.brake, steer: inp.steer, boost: inp.boost, drsPress: inp.drs && !p.rs.drsLatch });
    const t = race.time - race.t0;
    if (i % 24 === 0) for (const c of race.cars) { const h = hist.get(c); const off = c.d > track.wl[c.i] + 1 || -c.d > track.wr[c.i] + 1; if (off && t - h.firstOff > 12) { h.firstOff = t; h.offInfo = { s: c.s, v: c.speed, dmg: c.damageSummary().severity, punct: Math.max(...c.puncture), wear: c.tyreSummary().wear, act: c.driver ? c.driver.brain.action : 'bot', pit: c.driver ? c.driver.pitState : '', mist: !!(c.driver && c.driver.mistake && c.driver.mistake.active), carHitAgo: t - h.carHit, T: c.temp[0], Ts: c.tempS[0], gz: c.gLoad, grain: Math.max(...c.grain) }; } }
    for (const e of race.events) {
      if (e.type === 'impact' && e.speed > 2) { if (e.wall) hist.get(e.car).wallHit = t; else { hist.get(e.car).carHit = t; hist.get(e.other).carHit = t; } }
      if (e.type === 'recover' && e.car !== p) {
        const h = hist.get(e.car), o = h.offInfo || {};
        let k;
        if (o.pit && o.pit !== 'none') k = 'in the pit lane / entry';
        else if (o.carHitAgo != null && o.carHitAgo < 6) k = 'knocked off by car contact';
        else if (o.dmg > 0.35 || o.punct > 0) k = 'already damaged or punctured';
        else if (o.mist) k = 'scripted driver mistake';
        else if (o.wear > 0.75) k = 'worn-out tyres';
        else k = 'solo: ran off on its own';
        cause[k] = (cause[k] || 0) + 1;
        if (k.startsWith('in the pit')) {
          const c = e.car, pt = track.pit, rel = ((c.s - pt.start + track.length) % track.length);
          const zone = rel > track.length - 400 ? 'approach (before the ramp)' : rel < pt.rampIn ? 'entry ramp' : rel < pt.len - pt.rampOut ? 'pit lane' : rel < pt.len ? 'exit ramp' : 'after the exit';
          pitZones[zone] = (pitZones[zone] || 0) + 1;
          if (pitEx.length < 10) pitEx.push(`seed${seed} t${t.toFixed(0)} ${c.info.code} ${zone} rel${rel.toFixed(0)} d${c.d.toFixed(1)} v${(c.speed*3.6).toFixed(0)} state:${c.driver.pitState} stuckT${c.driver.stuckT.toFixed(1)} lane${(track.pitCentre(c.s)).toFixed(1)} box rel${(((c.driver.box.s - pt.start + track.length) % track.length)).toFixed(0)} boxd${c.driver.box.d.toFixed(1)} service:${!!c.rs.service} heading${(((c.theta - track.hdgAt(c.s)) * 57.3 + 540) % 360 - 180).toFixed(0)}deg`);
        }
        if (k.startsWith('solo')) { const b = Math.round((o.s || 0) / 100) * 100; where[b] = (where[b] || 0) + 1; if (examples.length < 8) examples.push(`seed${seed} t${t.toFixed(0)} ${e.car.info.code} s${(o.s||0).toFixed(0)} v${((o.v||0)*3.6).toFixed(0)} act:${o.act} wear${(o.wear||0).toFixed(2)} T${(o.T||0).toFixed(0)}/${(o.Ts||0).toFixed(0)} gz${(o.gz||1).toFixed(2)} grain${(o.grain||0).toFixed(2)}`); }
      }
    }
    race.events.length = 0;
  }
}
console.log(`${tid} level ${level}, ${seeds.length} races:`, JSON.stringify(cause, null, 1));
console.log('solo run-offs by track position (m):', JSON.stringify(where));
console.log(examples.join('\n'));
console.log('pit-lane recoveries by zone:', JSON.stringify(pitZones));
console.log(pitEx.join('\n'));
