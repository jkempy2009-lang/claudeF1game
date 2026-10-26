// The player's autopilot in the real frame loop (not the debug fast-forward): it must drive the car.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 800, height: 450 } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
await page.addInitScript(() => localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: 'rade', laps: 2, level: 0.3, fieldSize: 4, playerGrid: 2, team: 1, mode: 'race' }, settings: { quality: 'low' } })));
await page.goto('http://localhost:8099/index.html');
await page.waitForSelector('[data-act=quick]', { timeout: 60000 });
await page.click('[data-act=quick]');
await page.waitForSelector('#hud:not(.hidden)', { timeout: 180000 });
await page.evaluate(() => { const a = window.apex; a.session.introCancelled = true; a.session.race.start(); a.toggleAutopilot(); });
await page.waitForFunction(() => window.apex.session.race.phase === 'racing', null, { timeout: 120000 });
await page.waitForTimeout(25000);
const r = await page.evaluate(() => { const p = window.apex.session.player; return { v: p.speed, s: p.s, off: Math.abs(p.d), laps: p.rs.laps, dist: p.rs.maxDist }; });
console.log(JSON.stringify(r));
const ok = r.dist > 100 && r.v > 20 && r.off < 12; // software GL runs at ~1.5 fps, so the sim only advances a few seconds
console.log(ok ? 'PASS  the autopilot drives the car in the frame loop' : 'FAIL  the autopilot did not drive');
console.log(errors.length ? 'ERRORS ' + errors.join('|') : 'no page errors');
await browser.close();
process.exit(ok && !errors.length ? 0 : 1);
