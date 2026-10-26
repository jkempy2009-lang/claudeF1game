// Car close-ups with damage: wings and sidepods. Usage: node tests/shot20.mjs outdir [trackId]
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const [out, track = 'rade'] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
const page = await browser.newPage({ viewport: { width: 1120, height: 630 } });
const logs = [];
page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message));
await page.addInitScript((t) => localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: t, laps: 5, level: 0.4, fieldSize: 8, playerGrid: 3, team: 1, mode: 'race' }, settings: { quality: 'high' } })), track);
await page.goto('http://localhost:8099/index.html');
await page.waitForSelector('[data-act=quick]', { timeout: 60000 });
await page.click('[data-act=quick]');
await page.waitForSelector('#hud:not(.hidden)', { timeout: 180000 });
await page.evaluate(() => { const a = window.apex; a.session.introCancelled = true; a.pause(); a.startPhoto(); });
const shots = [
  ['clean', { }, 1, 3.4], ['damaged-left', { damageFront: 0.7, damageRear: 0.6, damageSideL: 0.9, damageSideR: 0.3 }, 1, 3.4], ['damaged-right', null, -1, 3.4],
  ['rear', null, 1, -4.5],
];
for (const [name, dmg, sideSign, fwdOff] of shots) {
  await page.evaluate(([d, sg, fo]) => {
    const s = window.apex.session, p = s.player;
    if (d) Object.assign(p, { damageFront: 0, damageRear: 0, damageSideL: 0, damageSideR: 0 }, d);
    s.views.get(p).update(p, 1, 0.016); // the paused loop does not redraw the car itself
    const th = p.theta;
    const fx = Math.cos(th), fz = -Math.sin(th); // forward in world x/z
    const lx = -Math.sin(th), lz = -Math.cos(th); // physics left in world x/z
    const cx = p.x + fx * fo + lx * 3.2 * sg, cz = -p.y + fz * fo + lz * 3.2 * sg;
    s.photo.pos.set(cx, (p.trackH || 0) + 1.5, cz);
    const dx = p.x - cx, dz = -p.y - cz;
    s.photo.yaw = Math.atan2(-dx, -dz);
    s.photo.pitch = -0.18;
  }, [dmg, sideSign, fwdOff]);
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${out}/${name}.png`, timeout: 180000 });
}
console.log(logs.join('\n') || 'no errors');
await browser.close();
