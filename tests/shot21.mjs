// In-race chase-camera frames. Usage: node tests/shot21.mjs outdir track weather timeOfDay seconds
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [out, track = 'sakura', weather = 'dry', tod = 'day', secs = '30'] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 1120, height: 630 } });
const logs = [];
page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message));
await page.addInitScript(([t, w, d]) => localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: t, laps: 5, level: 0.5, fieldSize: 12, playerGrid: 6, team: 1, mode: 'race', weather: w, timeOfDay: d }, settings: { quality: 'high' } })), [track, weather, tod]);
await page.goto('http://localhost:8099/index.html');
await page.waitForSelector('[data-act=quick]', { timeout: 60000 });
await page.click('[data-act=quick]');
await page.waitForSelector('#hud:not(.hidden)', { timeout: 180000 });
await page.evaluate(() => { const a = window.apex; a.session.introCancelled = true; a.session.race.start(); a.toggleAutopilot(); });
await page.waitForFunction(() => window.apex.session.race.phase === 'racing', null, { timeout: 600000 });
await page.evaluate((n) => { const a = window.apex; const t0 = a.session.race.time; return a.debugUntil(() => a.session.race.time - t0 > n, 400); }, +secs);
for (const cam of ['chase', 'tv']) {
  await page.evaluate((c) => window.apex.session.camRig.setMode(c), cam);
  await page.waitForTimeout(3500);
  await page.screenshot({ path: `${out}/${track}-${weather}-${tod}-${cam}.png`, timeout: 180000 });
}
console.log(logs.join('\n') || 'no errors');
await browser.close();
