import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const out = process.argv[2];
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
const logs = [];
page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message + '\n' + (e.stack || '').split('\n').slice(0, 5).join('\n')));
await page.addInitScript(() => localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: 'northfield', laps: 5, level: 0.6, fieldSize: 8, playerGrid: 4, team: 1, mode: 'race' }, settings: { quality: 'low', camera: 'chase' } })));
await page.goto('http://localhost:8099/index.html');
await page.waitForTimeout(4000);
await page.click('[data-act=quick]');
await page.waitForSelector('#hud:not(.hidden)', { timeout: 120000 });
await page.waitForTimeout(500);
for (let k = 1; k <= 5; k++) {
  await page.keyboard.press('KeyC');
  await page.waitForTimeout(2500);
  const m = await page.evaluate(() => window.apex.session.camRig.mode + ' phase=' + window.apex.session.race.phase);
  console.log('camera', k, m);
  await page.screenshot({ path: `${out}/grid-cam-${k}.png`, timeout: 120000 });
}
console.log(logs.join('\n') || 'no errors');
await browser.close();
