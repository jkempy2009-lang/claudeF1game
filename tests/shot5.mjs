// Flow test: time trial, pause/resume/restart, championship results. Prints errors; saves a few screenshots.
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
  localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: 'vettore', laps: 1, level: 0.5, fieldSize: 4, playerGrid: 2, team: 4, mode: 'race', tyreWear: 3 }, settings: { quality: 'low', camera: 'chase' } }));
});
await page.goto('http://localhost:8099/index.html');
await page.waitForTimeout(4000);
const step = async (name, fn) => { try { await fn(); console.log('ok  ', name); } catch (e) { console.log('FAIL', name, e.message.split('\n')[0]); } };
await step('time trial start', async () => {
  await page.click('[data-act=setup][data-mode=timetrial]');
  await page.waitForTimeout(400);
  await page.click('[data-tab=race]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${out}/tt-setup.png` });
  await page.click('[data-act=go]');
  await page.waitForSelector('#hud:not(.hidden)', { timeout: 120000 });
});
await step('time trial laps + ghost', async () => {
  await page.evaluate(() => window.apex.debugSkip(300));
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `${out}/tt-run.png`, timeout: 120000 });
  const st = await page.evaluate(() => ({ laps: window.apex.session.player.rs.lapTimes.length, ghost: !!window.apex.session.race.ghostBest, saved: !!JSON.parse(localStorage.getItem('apex-grand-prix.v1')).ghosts }));
  console.log('   ', JSON.stringify(st));
});
await step('pause menu', async () => {
  await page.keyboard.press('Escape');
  await page.waitForSelector('[data-act=resume]', { timeout: 20000 });
  await page.screenshot({ path: `${out}/pause.png` });
  await page.click('[data-act=resume]');
  await page.waitForTimeout(500);
});
await step('quit to menu', async () => {
  await page.keyboard.press('Escape');
  await page.waitForSelector('[data-act=quit]', { timeout: 20000 });
  await page.click('[data-act=quit]');
  await page.waitForSelector('[data-act=quick]', { timeout: 20000 });
});
await step('championship', async () => {
  await page.click('[data-act=season]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${out}/season-setup.png` });
  await page.click('[data-act=go]');
  await page.waitForSelector('#hud:not(.hidden)', { timeout: 120000 });
  await page.evaluate(() => window.apex.debugSkip(900));
  await page.waitForSelector('[data-act=nextround]', { timeout: 60000 });
  await page.screenshot({ path: `${out}/season-results.png`, timeout: 120000 });
  await page.click('[data-act=nextround]');
  await page.waitForTimeout(600);
  const t = await page.evaluate(() => document.querySelector('.tcard.on h4') && document.querySelector('.tcard.on h4').textContent);
  console.log('    next round track:', t);
});
console.log(logs.join('\n') || 'no console errors');
await browser.close();
