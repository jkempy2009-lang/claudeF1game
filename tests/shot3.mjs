// Menu / results screenshots.
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const out = process.argv[2];
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const logs = [];
page.on('console', (m) => { if (['error'].includes(m.type())) logs.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message + '\n' + (e.stack || '').split('\n').slice(0, 5).join('\n')));
await page.addInitScript(() => {
  localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: 'rade', laps: 2, level: 0.7, fieldSize: 8, playerGrid: 4, team: 2, mode: 'race' }, settings: { quality: 'low' } }));
});
await page.goto('http://localhost:8099/index.html');
await page.waitForTimeout(4000);
await page.click('[data-act=setup][data-mode=race]');
await page.waitForTimeout(800);
await page.screenshot({ path: `${out}/m-circuit.png` });
for (const tab of ['race', 'car', 'assists']) {
  await page.click(`[data-tab=${tab}]`);
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${out}/m-${tab}.png` });
}
await page.click('[data-act=main]');
await page.waitForTimeout(500);
await page.click('[data-act=controls]');
await page.waitForTimeout(500);
await page.screenshot({ path: `${out}/m-controls.png` });
await page.click('[data-act=back]');
await page.waitForTimeout(400);
await page.click('[data-act=quick]');
await page.waitForSelector('#hud:not(.hidden)', { timeout: 120000 });
await page.waitForTimeout(1500);
await page.evaluate(() => window.apex.debugSkip(900));
await page.waitForTimeout(6000);
await page.screenshot({ path: `${out}/m-results.png`, timeout: 120000 });
console.log(logs.join('\n') || 'no errors');
await browser.close();
