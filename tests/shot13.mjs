// Menu + new circuits screenshots. Usage: node tests/shot13.mjs outdir
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [out] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 1120, height: 630 } });
const logs = [];
page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message));
await page.addInitScript(() => localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: 'porto', laps: 5, level: 0.4, fieldSize: 8, playerGrid: 3, team: 1, mode: 'race', weather: 'dry' }, settings: { quality: 'high', camera: 'chase' } })));
await page.goto('http://localhost:8099/index.html');
await page.waitForSelector('[data-act=quick]', { timeout: 60000 });
await page.click('[data-act=setup][data-mode=race]');
await page.click('[data-tab=circuit]');
await page.waitForTimeout(800);
await page.screenshot({ path: `${out}/circuits.png` });
for (const id of ['porto', 'sakura']) {
  await page.evaluate((t) => { const c = window.apex.save.config; c.trackId = t; }, id);
  await page.click(`[data-track=${id}]`);
  await page.click('[data-act=go]');
  await page.waitForSelector('#hud:not(.hidden)', { timeout: 180000 });
  await page.evaluate(() => { const a = window.apex; a.session.introCancelled = true; a.debugSkip(22); });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${out}/${id}.png`, timeout: 180000 });
  await page.keyboard.down('Escape'); await page.waitForTimeout(2500); await page.keyboard.up('Escape');
  await page.waitForSelector('[data-act=quit]', { timeout: 30000 });
  await page.click('[data-act=quit]');
  await page.waitForSelector('[data-act=quick]');
  await page.click('[data-act=setup][data-mode=race]');
  await page.click('[data-tab=circuit]');
}
console.log(logs.join('\n') || 'no errors');
await browser.close();
