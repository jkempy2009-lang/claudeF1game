// Renders every track as an SVG, prints stats, and flags overlaps. Usage: node tools/plot-tracks.mjs [out.png] [trackId]
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const out = process.argv[2] || '/tmp/tracks.png';
const only = process.argv[3];
const svgs = [];
for (const def of TRACK_DEFS) {
  if (only && def.id !== only) continue;
  let t;
  try {
    t = new Track(def);
  } catch (e) {
    console.log(def.id, 'FAILED:', e.message);
    continue;
  }
  let minR = Infinity;
  for (let i = 0; i < t.N; i++) if (Math.abs(t.curv[i]) > 1e-6) minR = Math.min(minR, 1 / Math.abs(t.curv[i]));
  // overlap check: samples that are close in space but far along the track
  let minSep = Infinity, at = null;
  const sepN = Math.round(120 / t.ds);
  for (let i = 0; i < t.N; i += 2)
    for (let j = i + sepN; j < t.N; j += 2) {
      if (t.N - (j - i) < sepN) continue;
      const d = Math.hypot(t.x[i] - t.x[j], t.y[i] - t.y[j]);
      if (d < minSep) {
        minSep = d;
        at = [i, j];
      }
    }
  const xs = [...t.x], ys = [...t.y];
  const bx = [Math.min(...xs), Math.max(...xs)], by = [Math.min(...ys), Math.max(...ys)];
  console.log(
    `${def.id.padEnd(11)} len=${t.length.toFixed(0)} m  N=${t.N}  minR=${minR.toFixed(0)}  corners=${t.corners.length}  bbox=${(bx[1] - bx[0]).toFixed(0)}x${(by[1] - by[0]).toFixed(0)}  closest-nonadjacent=${minSep.toFixed(0)}m @${at}  zRange=${(Math.max(...t.z) - Math.min(...t.z)).toFixed(0)}`
  );
  if (process.env.SEGS) console.log(t.segInfo.map((g) => (g.type === 'S' ? `  S ${g.length.toFixed(0)} @${g.s.toFixed(0)}` : `  ${g.dir > 0 ? 'L' : 'R'} r${g.r} ${(g.angle * 180 / Math.PI).toFixed(0)}deg @${g.s.toFixed(0)} ${g.name || ''}`)).join('\n'));
  const pad = 80;
  const W = 900;
  const sc = (W - 2 * pad) / Math.max(bx[1] - bx[0], by[1] - by[0]);
  const H = (by[1] - by[0]) * sc + 2 * pad;
  const px = (x) => (pad + (x - bx[0]) * sc).toFixed(1);
  const py = (y) => (H - pad - (y - by[0]) * sc).toFixed(1);
  const poly = (pts) => pts.map(([x, y]) => `${px(x)},${py(y)}`).join(' ');
  const left = [], right = [], line = [];
  for (let i = 0; i < t.N; i++) {
    left.push([t.x[i] + t.nx[i] * t.wl[i], t.y[i] + t.ny[i] * t.wl[i]]);
    right.push([t.x[i] - t.nx[i] * t.wr[i], t.y[i] - t.ny[i] * t.wr[i]]);
    line.push([t.x[i] + t.nx[i] * t.lineD[i], t.y[i] + t.ny[i] * t.lineD[i]]);
  }
  const pitPts = [];
  if (t.pit) for (let s = t.pit.start; s < t.pit.start + t.pit.len; s += 4) { const p = t.pointAt(s, t.pitCentre(s)); pitPts.push([p.x, p.y]); }
  const wall = (side) => Array.from({ length: t.N }, (_, i) => { const d = t.wallDist(i, side); return [t.x[i] + t.nx[i] * d * side, t.y[i] + t.ny[i] * d * side]; });
  const cornerDots = t.corners.map((c) => `<circle cx="${px(t.x[c.apex])}" cy="${py(t.y[c.apex])}" r="3" fill="#e33"/><text x="${+px(t.x[c.apex]) + 5}" y="${+py(t.y[c.apex]) - 5}" font-size="10" fill="#900">${c.id}</text>`).join('');
  const sf = t.pointAt(0, 0);
  svgs.push(`<div style="display:inline-block;margin:6px"><svg width="${W}" height="${H.toFixed(0)}" style="background:#eef2ea">
    <polyline points="${poly(wall(1).concat([wall(1)[0]]))}" fill="none" stroke="#999" stroke-width="1"/>
    <polyline points="${poly(wall(-1).concat([wall(-1)[0]]))}" fill="none" stroke="#999" stroke-width="1"/>
    <polyline points="${poly(left.concat([left[0]]))}" fill="none" stroke="#333" stroke-width="1.5"/>
    <polyline points="${poly(right.concat([right[0]]))}" fill="none" stroke="#333" stroke-width="1.5"/>
    <polyline points="${poly(line.concat([line[0]]))}" fill="none" stroke="#1a6" stroke-width="1"/>
    <polyline points="${poly(pitPts)}" fill="none" stroke="#c80" stroke-width="3"/>
    ${cornerDots}
    <circle cx="${px(sf.x)}" cy="${py(sf.y)}" r="6" fill="#00f"/>
    <text x="20" y="28" font-size="20" font-weight="bold">${def.name} - ${(t.length / 1000).toFixed(2)} km</text></svg></div>`);
}
const html = `<html><body style="margin:0;background:#fff">${svgs.join('')}</body></html>`;
fs.writeFileSync(out.replace(/\.png$/, '.html'), html);
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1860, height: 1000 } });
await pg.setContent(html);
await pg.screenshot({ path: out, fullPage: true });
await b.close();
