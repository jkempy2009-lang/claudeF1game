// Mid-race screenshots using the debug autopilot. Usage: node tests/shot2.mjs <outDir> <trackId> <skipSeconds> [cams...]
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [out, trackId = 'northfield', skip = '40', ...cams] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 1120, height: 630 } });
const logs = [];
page.on('console', (m) => { if (['error'].includes(m.type())) logs.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message + '\n' + (e.stack || '').split('\n').slice(0, 5).join('\n')));
await page.addInitScript((tid) => {
  localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: tid, laps: 5, level: 0.7, fieldSize: 20, playerGrid: 8, team: 1, mode: 'race' }, settings: { quality: 'medium', camera: 'chase' } }));
}, trackId);
await page.goto('http://localhost:8099/index.html');
await page.waitForTimeout(4500);
await page.click('[data-act=quick]');
await page.waitForSelector('#hud:not(.hidden)', { timeout: 120000 });
await page.waitForTimeout(1500);
await page.evaluate((s) => window.apex.debugSkip(+s), skip);
for (const cam of (cams.length ? cams : ['chase'])) {
  await page.evaluate((c) => { const s = window.apex.session; s.camRig.setMode(c); }, cam);
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${out}/${trackId}-${cam}.png`, timeout: 120000 });
}
const info = await page.evaluate(() => { const r = window.apex.renderer.info.render; return { calls: r.calls, tris: r.triangles }; });
console.log('render info', JSON.stringify(info));
if (logs.length) console.log(logs.join('\n'));
await browser.close();
