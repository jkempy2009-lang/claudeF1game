// Pit-crew + championship flow screenshots.
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const out = process.argv[2];
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 1120, height: 630 } });
const logs = [];
page.on('console', (m) => { if (['error'].includes(m.type())) logs.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message + '\n' + (e.stack || '').split('\n').slice(0, 5).join('\n')));
await page.addInitScript(() => {
  localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: 'northfield', laps: 3, level: 0.7, fieldSize: 6, playerGrid: 3, team: 3, mode: 'race', tyreWear: 3 }, settings: { quality: 'low', camera: 'close' } }));
});
await page.goto('http://localhost:8099/index.html');
await page.waitForTimeout(4000);
await page.click('[data-act=quick]');
await page.waitForSelector('#hud:not(.hidden)', { timeout: 120000 });
await page.waitForTimeout(1000);
const got = await page.evaluate(() => { const a = window.apex; a.debugSkip(20); a.session.player.rs.pitRequested = true; return a.debugUntil(() => !!a.session.player.rs.service, 400); });
console.log('service reached', got);
await page.waitForTimeout(1200);
await page.screenshot({ path: `${out}/pit-service.png`, timeout: 120000 });
// results / championship
await page.evaluate(() => window.apex.debugSkip(900));
await page.waitForTimeout(8000);
await page.screenshot({ path: `${out}/after-race.png`, timeout: 120000 });
console.log(logs.join('\n') || 'no errors');
await browser.close();
