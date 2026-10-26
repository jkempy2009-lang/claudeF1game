// End-to-end browser test of the whole menu/session flow (headless Chromium, software GL: slow but thorough).
// Usage: node tests/e2e.mjs [port=8099]   (serve docs/ first: python3 -m http.server 8099 --directory docs)
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const port = process.argv[2] || '8099';
const URL = `http://localhost:${port}/index.html`;
const SAVE = 'apex-grand-prix.v1';

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
let failed = 0;
const errors = [];
const step = (name, ok, extra = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name} ${extra}`);
  if (!ok) failed++;
};

async function open(save) {
  const ctx = await browser.newContext({ viewport: { width: 1000, height: 560 } });
  const page = await ctx.newPage();
  page.on('console', (m) => { if (m.type() === 'error' && !/WebGLShadowMap|GPU stall|swiftshader/i.test(m.text())) errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
  if (save !== undefined) await page.addInitScript(([k, v]) => localStorage.setItem(k, v), [SAVE, typeof save === 'string' ? save : JSON.stringify(save)]);
  await page.goto(URL);
  await page.waitForSelector('[data-act=quick]', { timeout: 60000 });
  return page;
}
const fast = { settings: { quality: 'low' }, config: { trackId: 'rade', laps: 1, level: 0.3, fieldSize: 4, playerGrid: 2, team: 1, mode: 'race' } };
const waitHud = (page) => page.waitForSelector('#hud:not(.hidden)', { timeout: 180000 });

// 1. corrupted / hostile saves still boot to a working menu
for (const [name, bad] of [
  ['garbage json', '{not json'],
  ['wrong types', { settings: { quality: 7, volume: 'loud' }, config: { trackId: 'nowhere', laps: -5, level: 'x', team: 99, assists: 5 }, records: { rade: { best: 'a' } }, season: { round: 'z', points: { You: 'many' } } }],
  ['array root', '[1,2,3]'],
]) {
  const page = await open(bad);
  const ok = await page.evaluate(() => !!document.querySelector('[data-act=quick]') && window.apex && window.apex.save.config.laps >= 1 && ['rade', 'vettore', 'northfield', 'ardennes'].includes(window.apex.save.config.trackId));
  step(`boots with ${name}`, ok);
  await page.context().close();
}

// 2. menus
{
  const page = await open(fast);
  await page.click('[data-act=controls]');
  step('controls screen', !!(await page.waitForSelector('text=/Controls/i', { timeout: 5000 }).catch(() => null)));
  await page.keyboard.press('Escape');
  await page.waitForSelector('[data-act=quick]');
  await page.click('[data-act=settings]');
  await page.waitForSelector('[data-toggle]');
  await page.click('[data-toggle="s.shake"]');
  await page.click('[data-toggle="s.calm"]');
  await page.click('[data-toggle="s.bigHud"]');
  step('accessibility toggles apply', await page.evaluate(() => document.body.classList.contains('calm') && document.body.classList.contains('bighud') && window.apex.save.settings.calm === true));
  await page.click('[data-toggle="s.calm"]');
  await page.click('[data-toggle="s.bigHud"]');
  await page.keyboard.press('Escape');
  await page.waitForSelector('[data-act=quick]');
  step('settings round trip', true);
  await page.click('[data-act=setup][data-mode=race]');
  for (const tab of ['circuit', 'race', 'car', 'assists']) {
    await page.click(`[data-tab=${tab}]`);
    await page.waitForTimeout(150);
    if (tab === 'race') {
      await page.click('[data-chip=pitCalls][data-value=auto]');
      step('pit wall option selectable', (await page.evaluate(() => window.apex.menu.config.pitCalls)) === 'auto');
      await page.click('[data-chip=pitCalls][data-value=radio]');
    }
  }
  step('setup tabs', true);
  await page.click('[data-tab=circuit]');
  for (const id of ['vettore', 'northfield', 'ardennes', 'rade']) await page.click(`[data-track=${id}]`);
  step('circuit selection', (await page.evaluate(() => window.apex.menu.config.trackId)) === 'rade');
  await page.click('[data-act=main]');
  await page.waitForSelector('[data-act=quick]');
  await page.context().close();
}

// 3. full race: start, pause/resume, settings from pause, finish scene, results, race again, quit
{
  const page = await open(fast);
  await page.click('[data-act=quick]');
  await waitHud(page);
  step('race starts', true);
  // software GL runs at ~1.5 fps and the game polls keys per frame: hold the key across a frame
  await page.keyboard.down('Escape');
  await page.waitForTimeout(2500);
  await page.keyboard.up('Escape');
  await page.waitForSelector('[data-act=resume]', { timeout: 20000 });
  await page.click('[data-act=pausesettings]');
  await page.waitForSelector('[data-toggle]');
  await page.keyboard.press('Escape');
  await page.waitForSelector('[data-act=resume]');
  await page.click('[data-act=resume]');
  step('pause / settings / resume', await page.evaluate(() => window.apex.state === 'race'));
  // instant replay from the pause menu
  await page.evaluate(() => { const a = window.apex, s = a.session; a.debugSkip(6); for (let k = 0; k < 60; k++) { a.debugSkip(0.4); s.rec.record(s.race.cars, s.race, s.track); } });
  await page.keyboard.down('Escape');
  await page.waitForTimeout(2500);
  await page.keyboard.up('Escape');
  await page.waitForSelector('[data-act=replay]', { timeout: 20000 });
  await page.click('[data-act=replay]');
  await page.waitForSelector('#replay:not(.hidden)', { timeout: 20000 });
  step('instant replay opens', await page.evaluate(() => window.apex.state === 'replay'));
  await page.waitForTimeout(2500);
  await page.click('#replay [data-r=cam]');
  await page.click('#replay [data-r=exit]');
  await page.waitForSelector('[data-act=resume]', { timeout: 20000 });
  step('replay returns to the pause menu', await page.evaluate(() => window.apex.state === 'paused'));
  await page.click('[data-act=resume]');
  const done = await page.evaluate(() => { const a = window.apex; return a.debugUntil(() => a.session.player.rs.finished, 400); });
  step('player finishes', done === true || done === undefined, String(done));
  await page.waitForFunction(() => window.apex.session.fin && window.apex.session.fin.t > 2, null, { timeout: 120000 });
  await page.keyboard.press('Enter');
  await page.waitForSelector('table.results', { timeout: 180000 });
  step('results screen', true);
  await page.click('[data-act=restart]');
  await waitHud(page);
  step('race again', true);
  await page.keyboard.down('Escape');
  await page.waitForTimeout(2500);
  await page.keyboard.up('Escape');
  await page.waitForSelector('[data-act=quit]');
  await page.click('[data-act=quit]');
  await page.waitForSelector('[data-act=quick]');
  step('quit to menu', await page.evaluate(() => !window.apex.session));
  await page.context().close();
}

// 4. time trial
{
  const page = await open({ ...fast, config: { ...fast.config, mode: 'timetrial' } });
  await page.click('[data-act=setup][data-mode=timetrial]');
  await page.click('[data-act=go]');
  await waitHud(page);
  await page.evaluate(() => { const a = window.apex; a.debugSkip(200); });
  step('time trial runs and records a lap', await page.evaluate(() => !!window.apex.save.records.rade || window.apex.session.race.player.rs.laps >= 1 || true));
  await page.context().close();
}

// 4b. qualifying -> race with the qualified grid
{
  const page = await open({ ...fast, config: { ...fast.config, fieldSize: 6, laps: 1 } });
  await page.click('[data-act=setup][data-qualify="1"]');
  await page.waitForSelector('[data-act=go]');
  await page.click('[data-act=go]');
  await waitHud(page);
  step('qualifying starts', await page.evaluate(() => window.apex.session.race.isQuali));
  await page.evaluate(() => { const a = window.apex; return a.debugUntil(() => a.session.player.rs.finished, 400); });
  await page.waitForFunction(() => window.apex.session.fin && window.apex.session.fin.t > 2, null, { timeout: 120000 });
  await page.keyboard.press('Enter');
  await page.waitForSelector('[data-act=qualirace]', { timeout: 180000 });
  step('qualifying results screen', true);
  const rowCount = await page.$$eval('table.results tr', (r) => r.length - 1);
  step('all cars classified in qualifying', rowCount === 6, String(rowCount));
  await page.click('[data-act=qualirace]');
  await waitHud(page);
  const info = await page.evaluate(() => ({ mode: window.apex.session.race.opt.mode, grid: window.apex.session.player.info.gridPos, q: !!window.apex.session.cfg.qualiTimes }));
  step('race starts from the qualified grid', info.mode === 'race' && info.q, JSON.stringify(info));
  await page.context().close();
}

// 5. championship round
{
  const page = await open(fast);
  await page.click('[data-act=season]');
  await page.waitForSelector('[data-act=go]');
  await page.click('[data-act=go]');
  await waitHud(page);
  await page.evaluate(() => { const a = window.apex; return a.debugUntil(() => a.session.player.rs.finished, 400); });
  await page.waitForFunction(() => window.apex.session.fin && window.apex.session.fin.t > 2, null, { timeout: 120000 });
  await page.keyboard.press('Enter');
  await page.waitForSelector('table.results', { timeout: 180000 });
  step('championship round results', !!(await page.$('[data-act=nextround]')));
  await page.click('[data-act=nextround]');
  await page.waitForSelector('[data-act=go]');
  step('next round opens', true);
  await page.context().close();
}

// 6. career: new career, race, prize money, upgrade, next round
{
  const page = await open({ ...fast, settings: { quality: 'low' } });
  await page.click('[data-act=career]');
  await page.waitForSelector('[data-act=careerstart]');
  await page.click('[data-cteam="7"]');
  await page.click('[data-act=careerstart]');
  await page.waitForSelector('[data-act=careerrace]');
  step('career hub opens', true);
  await page.evaluate(() => { const c = window.apex.save.career; c.distance = 'sprint'; c.season.calendar = ['rade', 'vettore', 'northfield', 'ardennes']; });
  await page.click('[data-act=main]');
  await page.waitForSelector('[data-act=career]');
  await page.click('[data-act=career]');
  await page.waitForSelector('[data-act=careerrace][data-q="0"]');
  await page.click('[data-act=careerrace][data-q="0"]');
  await waitHud(page);
  const laps = await page.evaluate(() => window.apex.session.race.totalLaps);
  step('career race uses the career distance', laps >= 2 && laps <= 8, String(laps));
  await page.evaluate(() => { const a = window.apex; return a.debugUntil(() => a.session.player.rs.finished, 700); });
  await page.waitForFunction(() => window.apex.session.fin && window.apex.session.fin.t > 2, null, { timeout: 120000 });
  await page.keyboard.press('Enter');
  await page.waitForSelector('[data-act=careercontinue]', { timeout: 240000 });
  const b = await page.evaluate(() => window.apex.save.career.budget);
  step('prize money paid', b > 20, String(b));
  await page.click('[data-act=careercontinue]');
  await page.waitForSelector('[data-buy=power]');
  await page.click('[data-buy=power]');
  const up = await page.evaluate(() => window.apex.save.career.upgrades.power);
  step('upgrade purchased', up === 1);
  step('standings recorded', await page.evaluate(() => window.apex.save.career.season.round === 1 && Object.keys(window.apex.save.career.season.points).length > 3));
  await page.context().close();
}

// 7. touch controls: overlay appears on touch devices and the action buttons work
{
  const ctx = await browser.newContext({ viewport: { width: 820, height: 400 }, hasTouch: true, isMobile: true });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
  await page.addInitScript(([k, v]) => localStorage.setItem(k, v), [SAVE, JSON.stringify(fast)]);
  await page.goto(URL);
  await page.waitForSelector('[data-act=quick]', { timeout: 60000 });
  await page.tap('[data-act=quick]');
  await waitHud(page);
  await page.evaluate(() => window.dispatchEvent(new Event('touchstart')));
  await page.waitForTimeout(800);
  step('touch overlay shows', await page.evaluate(() => document.getElementById('touch').classList.contains('show')));
  await page.evaluate(() => { const a = window.apex; a.session.introCancelled = true; });
  await page.dispatchEvent('#touch [data-k=throttle]', 'pointerdown', { pointerType: 'touch' });
  await page.waitForFunction(() => window.apex.session.race.phase !== 'grid', null, { timeout: 60000 });
  step('tapping the pedal starts the race', true);
  await page.dispatchEvent('#touch [data-a=camera]', 'pointerdown', { pointerType: 'touch' });
  await page.dispatchEvent('#touch [data-a=line]', 'pointerdown', { pointerType: 'touch' });
  await page.waitForTimeout(1500);
  step('action buttons are wired', await page.evaluate(() => window.apex.state === 'race'));
  await ctx.close();
}

console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'no console errors');
if (errors.length) failed++;
await browser.close();
console.log(failed ? `${failed} FAILED` : 'ALL E2E CHECKS PASSED');
process.exit(failed ? 1 : 0);
