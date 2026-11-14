// The rival-pace table behind the setup screen's "Rivals lap here in about ..." hint.
import assert from 'node:assert/strict';
import { PACE, PACE_LEVELS, rivalLap, matchLevel } from '../src/sim/pacetable.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { DIFFICULTIES } from '../src/sim/race.js';

assert.deepEqual(PACE_LEVELS, DIFFICULTIES.map((d) => d.level), 'one column per difficulty preset, in order');
for (const d of TRACK_DEFS) {
  const row = PACE[d.id];
  assert.ok(row, `${d.id} has a pace row`);
  assert.equal(row.length, PACE_LEVELS.length);
  for (let i = 1; i < row.length; i++) assert.ok(row[i] < row[i - 1], `${d.id}: each level is quicker than the one below`);
  assert.ok(row[0] > 40 && row[0] < 200);
  // every preset reads back exactly, and the inverse lands on the level it came from
  PACE_LEVELS.forEach((lv, i) => { assert.equal(rivalLap(d.id, lv), row[i]); assert.ok(Math.abs(matchLevel(d.id, row[i]) - lv) < 1e-9); });
  const mid = rivalLap(d.id, 0.67);
  assert.ok(mid < row[2] && mid > row[3]);
  assert.ok(Math.abs(matchLevel(d.id, mid) - 0.67) < 1e-9);
  assert.equal(matchLevel(d.id, row[0] + 30), PACE_LEVELS[0], 'slower than Rookie clamps to Rookie');
  assert.equal(matchLevel(d.id, row[5] - 5), PACE_LEVELS[5], 'quicker than F1 clamps to F1');
}
assert.equal(Object.keys(PACE).length, TRACK_DEFS.length, 'no rows for circuits that do not exist');
assert.equal(rivalLap('nowhere', 0.5), null);
assert.equal(matchLevel('northfield', 0), null);
assert.equal(matchLevel('northfield', Infinity) , PACE_LEVELS[0]);
console.log('pacetable: ok');
