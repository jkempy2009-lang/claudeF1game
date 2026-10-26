// Design aid: draws the *unsolved* turtle path of one or more tracks at nominal straight lengths so you can see how far
// the loop is from closing before running the real solver. Usage: node tools/design.mjs out.png trackId...
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import fs from 'node:fs';
import { createRequire } from 'node:module';
const [out, ...ids] = process.argv.slice(2);
const parts = [];
for (const id of ids) {
  const def = TRACK_DEFS.find((d) => d.id === id);
  const segs = def.segments.map((s) => {
    const o = typeof s[s.length - 1] === 'object' ? s[s.length - 1] : {};
    return s[0] === 'S' ? { t: 'S', len: s[1], n: o.n, free: o.free } : { t: 'A', dir: s[0] === 'L' ? 1 : -1, r: s[1], ang: (s[2] * Math.PI) / 180, n: o.n, free: o.free };
  });
  let sum = 0;
  for (const s of segs) if (s.t === 'A' && !s.free) sum += s.dir * s.ang;
  const need = def.turns * 2 * Math.PI - sum;
  const fa = segs.find((s) => s.t === 'A' && s.free);
  fa.dir = Math.sign(need); fa.ang = Math.abs(need);
  let h = 0, x = 0, y = 0, total = 0;
  const pts = [[0, 0]];
  for (const s of segs) {
    if (s.t === 'S') { for (let d = 0; d < s.len; d += 5) pts.push([x + Math.cos(h) * d, y + Math.sin(h) * d]); x += s.len * Math.cos(h); y += s.len * Math.sin(h); total += s.len; }
    else {
      const n = Math.max(2, Math.ceil(s.ang / 0.05));
      for (let k = 1; k <= n; k++) { const h2 = h + (s.dir * s.ang * k) / n; const hm = h + (s.dir * s.ang * (k - 0.5)) / n; const st = (s.r * s.ang) / n; pts.push([pts.at(-1)[0] + Math.cos(hm) * st, pts.at(-1)[1] + Math.sin(hm) * st]); if (k === n) { h = h2; } }
      const last = pts.at(-1); x = last[0]; y = last[1]; total += s.r * s.ang;
    }
  }
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const bx = [Math.min(...xs), Math.max(...xs)], by = [Math.min(...ys), Math.max(...ys)];
  const W = 900, pad = 40, sc = (W - 2 * pad) / Math.max(bx[1] - bx[0], by[1] - by[0], 1);
  const H = (by[1] - by[0]) * sc + 2 * pad;
  const P = ([a, b]) => `${(pad + (a - bx[0]) * sc).toFixed(1)},${(H - pad - (b - by[0]) * sc).toFixed(1)}`;
  parts.push(`<svg width="${W}" height="${H.toFixed(0)}" style="background:#f4f4f0;margin:4px"><polyline points="${pts.map(P).join(' ')}" fill="none" stroke="#222" stroke-width="2"/><circle cx="${P([0, 0]).split(',')[0]}" cy="${P([0, 0]).split(',')[1]}" r="6" fill="blue"/><circle cx="${P(pts.at(-1)).split(',')[0]}" cy="${P(pts.at(-1)).split(',')[1]}" r="6" fill="red"/><text x="10" y="20">${id}: length ${total.toFixed(0)} m, gap to close ${Math.hypot(x, y).toFixed(0)} m, free arc ${((fa.dir * fa.ang * 180) / Math.PI).toFixed(0)} deg</text></svg>`);
}
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1860, height: 900 } });
await pg.setContent(`<body style="margin:0">${parts.join('')}</body>`);
await pg.screenshot({ path: out, fullPage: true });
await b.close();
