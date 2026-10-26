// Monkey test: clicks randomly through every menu, starts races / qualifying / time trials / career rounds and finishes or abandons them.
// Fails on any page error or console error, or if the game gets stuck. Usage: node tests/monkey.mjs [steps=60] [seed=1]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const steps = +(process.argv[2] || 60);
let seed = +(process.argv[3] || 1);
const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const pick = (a) => a[Math.floor(rnd() * a.length)];

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 1000, height: 600 } });
const errors = [];
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
page.on('console', (m) => { if (m.type() === 'error' && !/WebGLShadowMap|GPU stall|swiftshader/i.test(m.text())) errors.push(m.text()); });
await page.addInitScript(() => localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { laps: 1, fieldSize: 5, level: 0.3 }, settings: { quality: 'low', volume: 0.1 } })));
await page.goto('http://localhost:8099/index.html');
await page.waitForSelector('[data-act=quick]', { timeout: 60000 });

const log = [];
let races = 0;
for (let k = 0; k < steps; k++) {
  const st = await page.evaluate(() => window.apex.state);
  if (st === 'race' || st === 'paused' || st === 'replay') {
    // a session is running: finish it, abandon it, or poke at pause / replay
    const r = rnd();
    if (st === 'replay') { await page.evaluate(() => window.apex.replayAction('exit')); log.push('replay exit'); continue; }
    if (r < 0.6) {
      races++;
      log.push('finish the session');
      await page.evaluate(() => { const a = window.apex; if (a.state === 'paused') a.resume(); a.debugUntil(() => a.session.player.rs.finished, 500); });
      await page.waitForFunction(() => window.apex.state !== 'race' || (window.apex.session && window.apex.session.fin), null, { timeout: 120000 }).catch(() => {});
      await page.evaluate(() => { const s = window.apex.session; if (s && s.fin) s.finConfirm = true; });
      await page.waitForFunction(() => ['results', 'menu'].includes(window.apex.state), null, { timeout: 240000 });
    } else if (r < 0.8) {
      log.push('abandon');
      await page.evaluate(() => window.apex.toMain(true));
    } else {
      log.push('pause + settings');
      await page.evaluate(() => { const a = window.apex; if (a.state === 'race') a.pause(); });
      await page.waitForTimeout(300);
    }
    continue;
  }
  if (st === 'loading' || st === 'boot') { await page.waitForTimeout(1500); continue; }
  // menu / results: click something
  const handles = await page.$$('#screens .btn:not([disabled]), #screens .chip, #screens .tab, #screens .tcard, #screens .team, #screens .toggle, #screens [data-buy]');
  if (!handles.length) {
    await page.keyboard.press('Escape');
    continue;
  }
  const h = pick(handles);
  const label = (await h.evaluate((e) => (e.dataset.act || e.dataset.chip || e.dataset.tab || e.dataset.track || e.dataset.toggle || e.className) + ':' + (e.textContent || '').trim().slice(0, 24))).replace(/\s+/g, ' ');
  // quit-heavy buttons are fine; only skip the destructive wipe so the run keeps its save
  if (/wipe|careerwipe/.test(label)) continue;
  log.push('click ' + label);
  await h.click({ timeout: 4000 }).catch(() => {});
  await page.waitForTimeout(250);
  if (errors.length) break;
}
console.log(`${log.length} actions, ${races} sessions finished`);
console.log(log.slice(-12).join('\n'));
const stuck = await page.evaluate(() => ({ state: window.apex.state, screens: document.getElementById('screens').childElementCount }));
let bad = 0;
if (errors.length) { console.log('FAIL errors:\n' + errors.join('\n')); bad++; } else console.log('PASS  no errors across the monkey run');
console.log(`final state: ${stuck.state}`);
await browser.close();
process.exit(bad ? 1 : 0);
