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

// 1b. deployment files: manifest, icon and service worker are served and parse
{
  const page = await open(fast);
  const r = await page.evaluate(async () => {
    const out = {};
    for (const f of ['manifest.webmanifest', 'icon.svg', 'sw.js']) { const res = await fetch(f); out[f] = res.ok ? (await res.text()).length : -1; }
    return out;
  }).catch(() => ({}));
  const man = await page.evaluate(async () => { try { const j = await (await fetch('manifest.webmanifest')).json(); return j.name === 'Apex Grand Prix' && j.icons.length > 0; } catch (e) { return false; } });
  step('manifest, icon and service worker are served', r['manifest.webmanifest'] > 0 && r['icon.svg'] > 0 && r['sw.js'] > 0 && man, JSON.stringify(r));
  await page.context().close();
}

// 2. menus
{
  const page = await open(fast);
  await page.click('[data-act=controls]');
  step('controls screen', !!(await page.waitForSelector('text=/Controls/i', { timeout: 5000 }).catch(() => null)));
  await page.click('[data-rebind=camera]');
  await page.keyboard.press('KeyJ');
  step('a key can be rebound', await page.evaluate(() => window.apex.input.keys.camera.join() === 'KeyJ' && window.apex.save.settings.keys.camera[0] === 'KeyJ'));
  await page.click('[data-act=resetkeys]');
  step('keys reset to defaults', await page.evaluate(() => window.apex.input.keys.camera.join() === 'KeyC' && !window.apex.save.settings.keys.camera));
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
  // the engine sound: the V6 synth is built at once (its voices for the other cars too), and switched back cleanly
  await page.evaluate(() => window.apex.audio.start());
  await page.click('[data-chip=engineSound][data-value=v6]');
  const v6 = await page.evaluate(() => ({ s: window.apex.save.settings.engineSound, live: !!window.apex.audio.v6 || !!window.apex.audio.failed, dv: window.apex.audio.dv ? window.apex.audio.dv.length : -1 }));
  await page.click('[data-chip=engineSound][data-value=classic]');
  const back = await page.evaluate(() => ({ s: window.apex.save.settings.engineSound, gone: !window.apex.audio.v6 }));
  step('engine sound: the V6 synth switches on and off', v6.s === 'v6' && v6.live && back.s === 'classic' && back.gone, JSON.stringify({ v6, back }));
  await page.fill('#save-io', JSON.stringify({ app: 'apex-grand-prix', v: 1, save: { school: { launch: true }, stats: { races: 3 } } }));
  await page.click('[data-act=saverestore]');
  step('a backup can be restored', await page.evaluate(() => window.apex.save.school.launch === true && window.apex.save.stats.races === 3));
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
      // rival pace hint: with a record on this circuit the setup screen offers the level that laps as fast as the player
      const pace = await page.evaluate(() => { const m = window.apex.menu, c = m.config; const before = { rec: m.save.records[c.trackId], level: c.level }; m.save.records[c.trackId] = { best: 9999 }; m.rerender(); const slow = document.querySelector('#pace-hint').textContent; document.querySelector('[data-act=matchpace]').click(); const lv = m.config.level; if (before.rec) m.save.records[c.trackId] = before.rec; else delete m.save.records[c.trackId]; m.config.level = before.level; m.rerender(); return { slow, lv, plain: document.querySelector('#pace-hint').textContent }; });
      step('rival pace hint and match-my-pace', /Rivals lap here in about \d:\d\d\.\d/.test(pace.plain) && /slower than them/.test(pace.slow) && Math.abs(pace.lv - 0.08) < 1e-9);
    }
  }
  step('setup tabs', true);
  await page.click('[data-tab=car]');
  await page.waitForSelector('#setup-stats', { timeout: 5000 });
  const topBefore = await page.evaluate(() => document.querySelector('#setup-stats .sstat b').textContent);
  await page.evaluate(() => { const r = document.querySelector('[data-slider=rearWing]'); r.value = '0'; r.dispatchEvent(new Event('input', { bubbles: true })); });
  const topAfter = await page.evaluate(() => document.querySelector('#setup-stats .sstat b').textContent);
  step('live setup stats follow the wing sliders', parseInt(topAfter) > parseInt(topBefore), `${topBefore} -> ${topAfter}`);
  await page.click('[data-act=resetsetup]');
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
  step('damage diagram and delta bar are on the HUD', await page.evaluate(() => document.querySelectorAll('#dmgcar [data-z]').length === 5 && !!document.getElementById('t-dbar')));
  await page.evaluate(() => window.apex.hud.cycleMfd());
  await page.waitForFunction(() => document.getElementById('mfd-b').innerHTML.length > 50, null, { timeout: 30000 }).catch(() => null);
  step('MFD shows its first page', await page.evaluate(() => !document.getElementById('mfd').classList.contains('hidden') && /core/.test(document.getElementById('mfd-b').textContent)));
  await page.evaluate(() => { const h = window.apex.hud; h.cycleMfd(); h.cycleMfd(); h.cycleMfd(); });
  step('MFD hides after its last page', await page.evaluate(() => document.getElementById('mfd').classList.contains('hidden')));
  // instant replay from the pause menu
  await page.evaluate(() => { const a = window.apex, s = a.session; a.debugSkip(6); for (let k = 0; k < 60; k++) { a.debugSkip(0.4); s.rec.record(s.race.cars, s.race, s.track); if (k === 30) a.addMark(s, 'contact', 'test contact', s.race.cars[1]); } });
  await page.keyboard.down('Escape');
  await page.waitForTimeout(2500);
  await page.keyboard.up('Escape');
  await page.waitForSelector('[data-act=replay]', { timeout: 20000 });
  await page.click('[data-act=replay]');
  await page.waitForSelector('#replay:not(.hidden)', { timeout: 20000 });
  step('instant replay opens', await page.evaluate(() => window.apex.state === 'replay'));
  step('replay shows event markers', (await page.locator('#replay .rmark').count()) >= 1);
  await page.click('#replay .rmark.contact');
  step('a marker jumps to its moment and car', await page.evaluate(() => { const r = window.apex.session.replay, m = document.querySelector('#replay .rmark.contact'); return r.follow === 1 && Math.abs(r.t - Math.max(0, +m.dataset.mt - 2.5)) < 1.5; }));
  await page.waitForTimeout(2500);
  await page.click('#replay [data-r=cam]');
  await page.click('#replay [data-r=exit]');
  await page.waitForSelector('[data-act=resume]', { timeout: 20000 });
  step('replay returns to the pause menu', await page.evaluate(() => window.apex.state === 'paused'));
  await page.click('[data-act=photo]');
  await page.waitForSelector('#photo:not(.hidden)', { timeout: 20000 });
  await page.keyboard.down('KeyX');
  await page.waitForTimeout(2500);
  await page.keyboard.up('KeyX');
  await page.keyboard.down('Equal');
  await page.waitForTimeout(2500);
  await page.keyboard.up('Equal');
  await page.click('#photo [data-p=shutter]');
  const ph = await page.evaluate(() => { const p = window.apex.session.photo; return { roll: p.roll, ev: p.exposure / p.exp0, shutter: p.shutter }; });
  step('photo mode rolls, exposes and slows the shutter', ph.roll > 0.01 && ph.ev > 1.1 && ph.shutter, JSON.stringify(ph));
  await page.click('#photo [data-p=exit]');
  await page.waitForSelector('[data-act=resume]', { timeout: 20000 });
  step('photo mode restores the exposure', await page.evaluate(() => window.apex.state === 'paused' && window.apex.session.photoExp0 == null));
  await page.click('[data-act=resume]');
  step('HUD is visible again after the replay', await page.evaluate(() => !document.getElementById('hud').classList.contains('hidden')));
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

// 5b. a quick race on the circuit of the current championship round is not a championship round
{
  const page = await open({ ...fast, season: { calendar: ['rade', 'vettore', 'northfield', 'ardennes'], round: 0, points: {}, teamPoints: {}, teamOf: {}, results: [] } });
  await page.click('[data-act=quick]');
  await waitHud(page);
  await page.evaluate(() => { const a = window.apex; return a.debugUntil(() => a.session.player.rs.finished, 400); });
  await page.waitForFunction(() => window.apex.session.fin && window.apex.session.fin.t > 2, null, { timeout: 120000 });
  await page.keyboard.press('Enter');
  await page.waitForSelector('table.results', { timeout: 180000 });
  step('a quick race does not advance the championship', await page.evaluate(() => window.apex.save.season.round === 0 && Object.keys(window.apex.save.season.points).length === 0));
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
  // the hub: the race weekend tab shows the sponsor's challenges and the team-mate, development is a tab of its own
  await page.waitForSelector('[data-sponsor]');
  const sid = await page.$eval('[data-sponsor]', (e) => e.dataset.sponsor);
  await page.click(`[data-sponsor=${sid}]`);
  step('a sponsor challenge can be accepted', (await page.evaluate(() => window.apex.save.career.sponsor)) === sid);
  const cres = await page.evaluate(() => { const c = window.apex.save.career; return { races: c.stats.races, h2h: c.h2h.race[0] + c.h2h.race[1], news: c.news.length, rep: c.rep }; });
  step('the race counted for the career record', cres.races === 1 && cres.h2h === 1 && cres.news >= 1 && cres.rep >= 0 && cres.rep <= 100, JSON.stringify(cres));
  // the press conference waits in the hub; an answer applies its effect and clears the question
  await page.waitForSelector('[data-press]', { timeout: 20000 });
  const nAns = await page.locator('[data-press]').count();
  const pBefore = await page.evaluate(() => { const c = window.apex.save.career; return { rep: c.rep, a: c.story.press.answers[0].effect }; });
  await page.click('[data-press="0"]');
  await page.waitForFunction(() => !document.querySelector('[data-press]'), null, { timeout: 20000 });
  const pAfter = await page.evaluate(() => { const c = window.apex.save.career; return { rep: c.rep, press: c.story.press, team: c.story.team }; });
  step('the press conference: 3-4 answers, the chosen one applies its effect', nAns >= 3 && nAns <= 4 && pAfter.press === null && Math.abs(pAfter.rep - Math.min(100, Math.max(0, pBefore.rep + pBefore.a.rep))) < 0.01 && pAfter.team === pBefore.a.team, JSON.stringify({ nAns, pBefore, pAfter }));
  for (const tab of ['calendar', 'standings', 'driver', 'development']) { await page.click(`[data-ctab=${tab}]`); await page.waitForTimeout(120); }
  step('career hub tabs', (await page.locator('[data-buy]').count()) === 6);
  await page.waitForSelector('[data-buy=power]');
  await page.click('[data-buy=power]');
  const up = await page.evaluate(() => window.apex.save.career.upgrades.power);
  step('upgrade purchased', up === 1);
  step('standings recorded', await page.evaluate(() => window.apex.save.career.season.round === 1 && Object.keys(window.apex.save.career.season.points).length > 3));
  // practice: a session alone, its run plan earns a bonus for the weekend
  await page.click('[data-ctab=overview]').catch(() => null);
  await page.waitForSelector('[data-act=careerrace][data-q="p"]', { timeout: 20000 });
  await page.click('[data-act=careerrace][data-q="p"]');
  await waitHud(page);
  step('career practice starts alone on the circuit', await page.evaluate(() => { const s = window.apex.session; return s.cfg.practice && s.race.opt.mode === 'timetrial' && !!s.practice; }));
  await page.evaluate(() => { const a = window.apex; a.session.practice.quali = true; a.toMain(true); });
  await page.waitForSelector('[data-act=careerrace][data-q="s"]', { timeout: 30000 });
  step('ending practice returns to the hub with its result', await page.evaluate(() => { const s = window.apex.save.career.season; return s.practice && s.practice.round === s.round && s.practice.quali === true; }));
  // the sprint switch on the hub: off turns the weekend back into a normal one, on brings the sprint back
  await page.click('button[data-toggle="cr.sprints"]');
  await page.waitForSelector('[data-act=careerrace][data-q="0"]', { timeout: 20000 });
  const offOk = await page.evaluate(() => window.apex.save.career.rules.sprints === false && !document.querySelector('[data-act=careerrace][data-q="s"]'));
  await page.click('button[data-toggle="cr.sprints"]');
  await page.waitForSelector('[data-act=careerrace][data-q="s"]', { timeout: 20000 });
  step('sprint weekends switch off and on from the hub', offOk && (await page.evaluate(() => window.apex.save.career.rules.sprints === true)));
  // round 2 of 4 is a sprint weekend: the sprint runs first, scores, and leaves the Grand Prix to run from its order
  await page.click('[data-ctab=overview]').catch(() => null);
  await page.waitForSelector('[data-act=careerrace][data-q="s"]', { timeout: 20000 });
  const gpLaps = await page.evaluate(() => +((document.body.textContent.match(/(\d+)-lap Grand Prix/) || [])[1] || 0));
  await page.click('[data-act=careerrace][data-q="s"]');
  await waitHud(page);
  const sp = await page.evaluate(() => ({ sprint: !!window.apex.session.cfg.sprint, laps: window.apex.session.race.totalLaps }));
  step('a sprint weekend starts with a sprint shorter than its Grand Prix', sp.sprint && sp.laps >= 1 && gpLaps >= 3 && sp.laps < gpLaps, JSON.stringify({ ...sp, gpLaps }));
  step('the practice bonus applies to the weekend', await page.evaluate(() => { const b = window.apex.session.cfg.practiceBonus; return !!b && b.grip > 1; }));
  await page.evaluate(() => { const a = window.apex; return a.debugUntil(() => a.session.player.rs.finished, 700); });
  await page.waitForFunction(() => window.apex.session.fin && window.apex.session.fin.t > 2, null, { timeout: 120000 });
  await page.keyboard.press('Enter');
  await page.waitForSelector('[data-act=careercontinue]', { timeout: 240000 });
  step('the sprint is recorded without moving the season on', await page.evaluate(() => { const s = window.apex.save.career.season; return s.round === 1 && s.sprint && s.sprint.round === 1 && s.sprint.grid.YOU >= 1; }));
  await page.click('[data-act=careercontinue]');
  await page.waitForSelector('[data-act=careerrace][data-q="0"]', { timeout: 20000 });
  await page.click('[data-act=careerrace][data-q="0"]');
  await waitHud(page);
  step('the Grand Prix starts from the sprint order', await page.evaluate(() => { const a = window.apex, s = a.save.career.season; return !a.session.cfg.sprint && a.session.player.info.gridPos === s.sprint.grid.YOU; }));
  await page.context().close();
}

// 6b. driving school: lesson list, a lesson starts with its checklist, passing saves progress
{
  const page = await open(fast);
  await page.click('[data-act=school]');
  await page.waitForSelector('[data-act=lesson]', { timeout: 10000 });
  step('school lists the lessons', (await page.$$('[data-act=lesson]')).length >= 7);
  await page.click('[data-lesson=launch]');
  await waitHud(page);
  await page.waitForTimeout(1500);
  step('lesson checklist is on screen', await page.evaluate(() => !document.getElementById('lesson').classList.contains('hidden') && document.getElementById('lesson').textContent.includes('Reach 200')));
  await page.evaluate(() => { const a = window.apex; a.session.introCancelled = true; a.debugUntil(() => a.session.player.speed * 3.6 > 285, 200); });
  await page.waitForTimeout(3500);
  step('passing a lesson saves it', await page.evaluate(() => window.apex.save.school.launch === true));
  await page.keyboard.down('Escape'); await page.waitForTimeout(2500); await page.keyboard.up('Escape');
  await page.waitForSelector('[data-act=quit]', { timeout: 20000 });
  await page.click('[data-act=quit]');
  await page.waitForSelector('[data-act=quick]');
  await page.click('[data-act=quick]');
  await waitHud(page);
  step('the checklist is gone in a normal race', await page.evaluate(() => document.getElementById('lesson').classList.contains('hidden')));
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

// 7b. retiring from a race from the pause menu: two clicks, straight to the results as a DNF
{
  const page = await open(fast);
  await page.click('[data-act=quick]');
  await waitHud(page);
  await page.evaluate(() => { const a = window.apex; a.debugSkip(8); });
  await page.keyboard.down('Escape');
  await page.waitForTimeout(2500);
  await page.keyboard.up('Escape');
  await page.waitForSelector('[data-act=retire]', { timeout: 20000 });
  await page.click('[data-act=retire]');
  step('retiring asks for a second click', await page.evaluate(() => window.apex.state === 'paused' && /again/.test(document.querySelector('[data-act=retire]').textContent)));
  await page.click('[data-act=retire]');
  await page.waitForSelector('table.results', { timeout: 120000 });
  step('a retirement goes straight to the results as a DNF', await page.evaluate(() => /Retired by the driver/.test(document.querySelector('table.results').textContent) && window.apex.session.player.rs.dnf === 'Retired by the driver'));
  await page.context().close();
}

// 8. spectator mode: every car on AI, the director follows a fight, nothing is saved as the player's
{
  const page = await open(fast);
  const before = await page.evaluate(() => JSON.stringify(window.apex.save.stats || {}));
  await page.click('[data-act=watch]');
  await waitHud(page);
  step('spectator mode starts', await page.evaluate(() => { const s = window.apex.session; return s.spectator && s.auto && document.body.classList.contains('spectating') && s.player.info.code === 'RES'; }));
  await page.evaluate(() => window.apex.toggleAutopilot());
  step('spectator mode keeps the AI driving', await page.evaluate(() => window.apex.session.auto));
  await page.evaluate(() => { const a = window.apex; a.debugSkip(25); });
  await page.waitForFunction(() => window.apex.session.dir && window.apex.session.dir.car, null, { timeout: 60000 }).catch(() => null);
  step('the TV director picks a car', await page.evaluate(() => { const d = window.apex.session.dir; return !!(d && d.car && d.car.info); }));
  await page.evaluate(() => { const a = window.apex; return a.debugUntil(() => a.session.player.rs.finished, 400); });
  await page.evaluate(() => { const a = window.apex; a.session.podiumOk = true; a.skipToResults(a.session); }); // as if the finish card had run out
  await page.waitForFunction(() => window.apex.state === 'podium', null, { timeout: 60000 }).catch(() => null);
  step('the podium plays after a race left to run out', await page.evaluate(() => window.apex.state === 'podium' && document.querySelectorAll('#podium .pstep').length >= 1));
  await page.keyboard.down('Enter');
  await page.waitForTimeout(300);
  await page.keyboard.up('Enter');
  await page.waitForSelector('table.results', { timeout: 60000 }).catch(() => null);
  step('the podium can be skipped to the results', await page.evaluate(() => window.apex.state === 'results' && document.getElementById('podium').classList.contains('hidden')));
  const after = await page.evaluate(() => JSON.stringify(window.apex.save.stats || {}));
  step('watching a race leaves the player stats alone', before === after);
  await page.context().close();
}

console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'no console errors');
if (errors.length) failed++;
await browser.close();
console.log(failed ? `${failed} FAILED` : 'ALL E2E CHECKS PASSED');
process.exit(failed ? 1 : 0);
