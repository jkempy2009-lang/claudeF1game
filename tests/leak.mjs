// Starts and quits several sessions and checks that GPU resources and the JS heap do not keep growing.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const cycles = +(process.argv[2] || 4);
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl', '--enable-precise-memory-info', '--js-flags=--expose-gc'] });
const page = await browser.newPage({ viewport: { width: 800, height: 450 } });
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
await page.addInitScript(() => localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: 'rade', laps: 2, level: 0.3, fieldSize: 8, playerGrid: 3, team: 1, mode: 'race' }, settings: { quality: 'low' } })));
await page.goto('http://localhost:8099/index.html');
await page.waitForSelector('[data-act=quick]', { timeout: 60000 });
const snap = () => page.evaluate(() => { if (window.gc) window.gc(); const i = window.apex.renderer.info; return { geo: i.memory.geometries, tex: i.memory.textures, prog: i.programs ? i.programs.length : 0, heapMB: (performance.memory ? performance.memory.usedJSHeapSize : 0) / 1048576 }; });
const rows = [await snap()];
for (let k = 0; k < cycles; k++) {
  await page.click('[data-act=quick]');
  await page.waitForSelector('#hud:not(.hidden)', { timeout: 180000 });
  await page.evaluate(() => { const a = window.apex; a.debugSkip(8); });
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.apex.toMain(true));
  await page.waitForSelector('[data-act=quick]', { timeout: 60000 });
  await page.waitForTimeout(800);
  rows.push(await snap());
}
rows.forEach((r, i) => console.log(`after ${i} sessions: geometries ${r.geo}, textures ${r.tex}, programs ${r.prog}, JS heap ${r.heapMB.toFixed(1)} MB`));
const first = rows[1], last = rows[rows.length - 1];
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
ok('geometries do not accumulate across sessions', last.geo <= first.geo + 5, `${first.geo} -> ${last.geo}`);
ok('textures do not accumulate across sessions', last.tex <= first.tex + 5, `${first.tex} -> ${last.tex}`);
ok('JS heap stays within +40 MB across sessions', last.heapMB < first.heapMB + 40, `${first.heapMB.toFixed(0)} -> ${last.heapMB.toFixed(0)} MB`);
ok('no page errors', errs.length === 0, errs.join(' | '));
await browser.close();
process.exit(bad ? 1 : 0);
