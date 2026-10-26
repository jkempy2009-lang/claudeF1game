// Draw calls / triangles / textures per frame on each quality level. Usage: node tests/info.mjs [trackId]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const track = process.argv[2] || 'porto';
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
for (const quality of ['low', 'medium', 'high']) {
  const page = await browser.newPage({ viewport: { width: 1120, height: 630 } });
  await page.addInitScript(([t, q]) => localStorage.setItem('apex-grand-prix.v1', JSON.stringify({ config: { trackId: t, laps: 5, level: 0.4, fieldSize: 20, playerGrid: 10, team: 1, mode: 'race', timeOfDay: 'night' }, settings: { quality: q } })), [track, quality]);
  await page.goto('http://localhost:8099/index.html');
  await page.waitForSelector('[data-act=quick]', { timeout: 60000 });
  await page.click('[data-act=quick]');
  await page.waitForSelector('#hud:not(.hidden)', { timeout: 180000 });
  await page.evaluate(() => { const a = window.apex; a.session.introCancelled = true; a.debugSkip(12); });
  await page.evaluate(() => { window.apex.post.enabled = false; });
  await page.waitForTimeout(2500);
  const info = await page.evaluate(() => { const r = window.apex.renderer; return { calls: r.info.render.calls, tris: r.info.render.triangles, geometries: r.info.memory.geometries, textures: r.info.memory.textures, programs: r.info.programs ? r.info.programs.length : 0 }; });
  console.log(quality.padEnd(7), JSON.stringify(info));
  await page.close();
}
await browser.close();
