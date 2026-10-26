// Replay screenshots. Usage: node tests/shot10.mjs outdir [trackId]
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [out, track = 'costa'] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 1120, height: 630 } });
const logs = [];
page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message + '\n' + (e.stack || '').split('\n').slice(0, 4).join('\n')));
await page.addInitScript((t) => localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: t, laps: 6, level: 0.5, fieldSize: 10, playerGrid: 3, team: 1, mode: 'race', weather: 'dry' }, settings: { quality: 'medium', camera: 'chase' } })), track);
await page.goto('http://localhost:8099/index.html');
await page.waitForTimeout(4000);
await page.click('[data-act=quick]');
await page.waitForSelector('#hud:not(.hidden)', { timeout: 180000 });
await page.waitForTimeout(500);
await page.evaluate(() => {
  const a = window.apex, s = a.session;
  s.introCancelled = true;
  a.debugSkip(10);
  for (let k = 0; k < 70; k++) { a.debugSkip(0.5); s.rec.record(s.race.cars, s.race, s.track); }
});
const info = await page.evaluate(() => ({ dur: window.apex.session.rec.duration, count: window.apex.session.rec.count }));
console.log(JSON.stringify(info));
await page.evaluate(() => window.apex.startReplay('pause'));
await page.waitForTimeout(3000);
await page.screenshot({ path: `${out}/replay-tv.png`, timeout: 180000 });
await page.evaluate(() => { window.apex.replayAction('cam'); window.apex.session.replay.t = 12; window.apex.session.replay.playing = false; });
await page.waitForTimeout(3000);
await page.screenshot({ path: `${out}/replay-chase.png`, timeout: 180000 });
await page.evaluate(() => window.apex.replayAction('exit'));
await page.waitForTimeout(1500);
console.log('state after exit', await page.evaluate(() => window.apex.state));
console.log(logs.join('\n') || 'no errors');
await browser.close();
