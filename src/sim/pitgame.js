// Interactive pit stop: four wheel nuts, one timing window each. Press at the right moment ("perfect" / "good") or cross-thread the nut.
export const PG = {
  start: 0.15, // first window opens
  spacing: 0.5, // between windows
  win: 0.45, // length of one sweep
  sweet: 0.72, // where on the sweep the green zone is centred
  perfect: 0.07,
  good: 0.17,
  base: 2.5, // a flawless stop
  goodCost: 0.12,
  missCost: 0.9, // cross-threaded nut
};

export function makePitGame() {
  return { w: [0, 1, 2, 3].map(() => ({ res: null, p: -1 })), done: false, dur: Infinity, perfects: 0, goods: 0, misses: 0 };
}

const firstOpen = (pg) => pg.w.findIndex((x) => !x.res);

/**
 * Advances the game to service time `t`. `press` is true when the player hit the action key since the last call.
 * Returns an array of wheel results produced by this call (for sound / HUD messages).
 */
export function stepPitGame(pg, t, press) {
  const out = [];
  if (pg.done) return out;
  for (let k = 0; k < 4; k++) if (!pg.w[k].res) pg.w[k].p = (t - (PG.start + k * PG.spacing)) / PG.win;
  // a press is judged before the windows expire: one made in time must not lose to a long frame that also ended the sweep
  if (press) {
    const k = firstOpen(pg);
    if (k >= 0) {
      const w = pg.w[k];
      if (w.p > -0.25) {
        const err = Math.abs(Math.max(0, w.p) - PG.sweet);
        w.res = w.p < 0 ? 'miss' : err <= PG.perfect ? 'perfect' : err <= PG.good ? 'good' : 'miss';
        if (w.res === 'perfect') pg.perfects++;
        else if (w.res === 'good') pg.goods++;
        else pg.misses++;
        out.push({ k, res: w.res });
      }
    }
  }
  for (let k = 0; k < 4; k++) {
    const w = pg.w[k];
    if (!w.res && w.p >= 1) {
      w.res = 'miss';
      pg.misses++;
      out.push({ k, res: 'miss' });
    }
  }
  if (pg.w.every((x) => x.res)) {
    pg.done = true;
    pg.dur = Math.max(PG.base + pg.goods * PG.goodCost + pg.misses * PG.missCost, t + 0.2);
  }
  return out;
}
