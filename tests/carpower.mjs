// The player's car boost: stronger launch and pace, off in career, junk values fall back, rivals are untouched.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Race, DT, CAR_POWER } from '../src/sim/race.js';
import { sanitizeConfig } from '../src/ui/menu.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const track = new Track(TRACK_DEFS.find((d) => d.id === 'rade'));
function launch(cp, upgrades) {
  const race = new Race(track, { mode: 'race', laps: 2, level: 0.5, fieldSize: 4, playerGrid: 1, seed: 2, carPower: cp, upgrades });
  race.start();
  const p = race.player;
  let t0 = null, v100 = null, v200 = null;
  for (let i = 0; i < 240 * 40 && !v200; i++) {
    race.step(DT, { throttle: 1, brake: 0, steer: 0 });
    if (race.phase === 'racing' && t0 === null) t0 = race.time;
    if (t0 !== null) { const k = p.speed * 3.6; if (!v100 && k >= 100) v100 = race.time - t0; if (!v200 && k >= 200) v200 = race.time - t0; }
  }
  return { v100, v200, race };
}
const s = launch('standard'), q = launch('quick'), r = launch('rocket');
ok('standard launch is a realistic F1 one', s.v100 > 2.4 && s.v100 < 3.4, `0-100 ${s.v100.toFixed(2)} s`);
ok('quick launches harder', q.v100 < s.v100 - 0.4 && q.v200 < s.v200 - 0.6, `0-100 ${q.v100.toFixed(2)} s, 0-200 ${q.v200.toFixed(2)} s`);
ok('rocket launches hardest', r.v100 < q.v100 - 0.25 && r.v200 < q.v200 - 0.5, `0-100 ${r.v100.toFixed(2)} s, 0-200 ${r.v200.toFixed(2)} s`);
const rival = (x) => x.race.cars.find((c) => !c.info.isPlayer).spec;
ok('rivals do not get the boost', rival(q).powerScale === rival(s).powerScale && rival(r).frontGrip === rival(s).frontGrip);
ok('career upgrades replace the boost', launch('rocket', { power: 0, aero: 0, grip: 0 }).race.player.spec.launchGrip === undefined);
ok('an unknown value falls back to standard', launch('banana').v100 === s.v100);
ok('config default and clean-up', sanitizeConfig({}).carPower === 'quick' && sanitizeConfig({ carPower: 'rocket' }).carPower === 'rocket' && sanitizeConfig({ carPower: 'x' }).carPower === 'quick');
ok('three levels exist', Object.keys(CAR_POWER).join() === 'standard,quick,rocket');
process.exit(bad ? 1 : 0);
