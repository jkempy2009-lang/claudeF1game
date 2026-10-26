import { PG, makePitGame, stepPitGame } from '../src/sim/pitgame.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
function play(strategy) {
  const pg = makePitGame();
  const dt = 1 / 60;
  for (let t = 0; t < 8 && !pg.done; t += dt) {
    const k = pg.w.findIndex((w) => !w.res);
    stepPitGame(pg, t, strategy(pg, k, t));
  }
  return pg;
}
const perfect = play((pg, k, t) => k >= 0 && Math.abs(pg.w[k].p - PG.sweet) < 0.02);
ok('flawless stop takes 2.5 s', perfect.done && Math.abs(perfect.dur - 2.5) < 1e-6 && perfect.perfects === 4, perfect.dur.toFixed(2));
const sloppy = play((pg, k) => k >= 0 && Math.abs(pg.w[k].p - 0.5) < 0.02);
ok('mistimed presses cross-thread the nuts', sloppy.misses + sloppy.goods === 4 && sloppy.dur > 3.0, `${sloppy.dur.toFixed(2)} s, ${sloppy.misses} missed`);
const none = play(() => false);
ok('doing nothing cross-threads every nut', none.misses === 4 && none.dur >= 2.5 + 4 * PG.missCost - 1e-6, none.dur.toFixed(2));
const mixed = play((pg, k) => k >= 0 && (k === 2 ? false : Math.abs(pg.w[k].p - PG.sweet) < 0.02));
ok('one missed nut costs 0.9 s', Math.abs(mixed.dur - (2.5 + PG.missCost)) < 1e-6, mixed.dur.toFixed(2));
process.exit(bad ? 1 : 0);
