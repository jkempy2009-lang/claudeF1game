// World detail shots: start line, pit garages, wall adverts. Usage: node tests/shot19.mjs outdir [trackId]
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
const cams = {
  startline: (t) => { const p = t.pointAt(-12, 0); return [p.x, 3.2, -p.y, p.heading, -0.12]; },
  garages: (t) => { const pt = t.pit; const p = t.pointAt(pt.start + pt.rampIn + 60, -4); return [p.x, 2.4, -p.y, p.heading + 0.9, -0.04]; },
  leftwall: (t) => { const p = t.pointAt(600, 3); return [p.x, 1.8, -p.y, p.heading, -0.02]; },
};
for (const [name, f] of Object.entries(cams)) {
  await page.evaluate(([n, src]) => {
    const a = window.apex, s = a.session;
    const fn = new Function('t', 'return (' + src + ')(t)');
    const [x, y, z, heading, pitch] = fn(s.track);
    s.photo.pos.set(x, y + (s.track.at(s.track.z, 0) || 0), z);
    s.photo.yaw = heading - Math.PI / 2; // photo yaw 0 looks down -Z; heading is measured in the sim plane
    s.photo.pitch = pitch;
  }, [name, f.toString()]);
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${out}/${name}.png`, timeout: 180000 });
}
console.log(logs.join('\n') || 'no errors');
await browser.close();
