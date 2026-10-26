// Runs every headless suite (no browser needed). Usage: node tests/all.mjs
import { spawnSync } from 'node:child_process';
const suites = [
  ['physics', 'tests/physics.mjs'],
  ['AI laps + full-grid race', 'tests/run.mjs'],
  ['scoring and standings', 'tests/scoring.mjs'],
  ['qualifying + grid', 'tests/qualisim.mjs'],
  ['career / season', 'tests/career.mjs'],
  ['safety car', 'tests/safetycar.mjs'],
  ['weather', 'tests/weather.mjs'],
  ['DRS rules', 'tests/drs.mjs'],
  ['idle player ends session', 'tests/idle.mjs'],
  ['driving school', 'tests/school.mjs'],
  ['key rebinding model', 'tests/keys.mjs'],
  ['save backup / import', 'tests/saves.mjs'],
  ['setup: tyre pressure', 'tests/setup.mjs'],
  ['pit-wall strategy', 'tests/strategy.mjs'],
  ['racecraft scenarios', 'tests/racecraft.mjs'],
  ['interactive pit stop', 'tests/pitgame.mjs'],
  ['achievements + stats', 'tests/achievements.mjs'],
];
let failed = 0;
for (const [name, file] of suites) {
  const t = Date.now();
  const r = spawnSync('node', [file], { encoding: 'utf8', timeout: 900000 });
  const out = (r.stdout || '') + (r.stderr || '');
  const fails = out.split('\n').filter((l) => /^FAIL|CHECK\(S\) FAILED|FAILED/.test(l));
  const ok = r.status === 0 && !fails.length;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name.padEnd(28)} ${((Date.now() - t) / 1000).toFixed(1)} s`);
  if (!ok) {
    failed++;
    console.log(out.split('\n').filter((l) => /FAIL|Error|error/.test(l)).slice(0, 8).join('\n'));
  }
}
console.log(failed ? `\n${failed} suite(s) FAILED` : '\nALL SUITES PASSED');
process.exit(failed ? 1 : 0);
