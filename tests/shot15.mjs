// Live telemetry overlay. Usage: node tests/shot15.mjs outdir
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
await page.addInitScript(() => localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: 'rade', laps: 5, level: 0.4, fieldSize: 8, playerGrid: 3, team: 1, mode: 'race' }, settings: { quality: 'medium' } })));
await page.goto('http://localhost:8099/index.html');
await page.waitForSelector('[data-act=quick]', { timeout: 60000 });
await page.click('[data-act=quick]');
await page.waitForSelector('#hud:not(.hidden)', { timeout: 180000 });
await page.evaluate(() => { const a = window.apex; a.session.introCancelled = true; a.debugSkip(8); });
await page.keyboard.down('KeyY'); await page.waitForTimeout(2500); await page.keyboard.up('KeyY');
// feed the buffer while the autopilot drives the real frame loop
await page.evaluate(() => { const a = window.apex; for (let k = 0; k < 40; k++) { a.debugSkip(0.25); a.hud.tele(a.session.player, performance.now() + k * 60); } });
await page.waitForTimeout(2500);
console.log('tele on:', await page.evaluate(() => window.apex.hud.teleOn));
await page.screenshot({ path: `${out}/tele.png`, timeout: 180000 });
console.log(logs.join('\n') || 'no errors');
await browser.close();
