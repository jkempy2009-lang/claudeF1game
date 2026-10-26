// Usage: node tools/checktrack.mjs [id...]  — length, min self-clearance, curvature stats for each circuit.
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
const ids = process.argv.slice(2);
for (const d of TRACK_DEFS) {
  if (ids.length && !ids.includes(d.id)) continue;
  const t = new Track(d);
  let best = 1e9, at = [0, 0];
  const step = Math.max(1, Math.round(10 / t.ds));
  for (let i = 0; i < t.N; i += step) for (let j = i + step; j < t.N; j += step) {
    const arc = Math.min((j - i) * t.ds, t.length - (j - i) * t.ds);
    if (arc < 250) continue;
    const dd = Math.hypot(t.x[i] - t.x[j], t.y[i] - t.y[j]);
    if (dd < best) { best = dd; at = [i * t.ds, j * t.ds]; }
  }
  let maxK = 0, zmin = 1e9, zmax = -1e9;
  for (let i = 0; i < t.N; i++) { maxK = Math.max(maxK, Math.abs(t.curv[i])); zmin = Math.min(zmin, t.z[i]); zmax = Math.max(zmax, t.z[i]); }
  console.log(`${d.id.padEnd(11)} length ${t.length.toFixed(0)} m  min clearance ${best.toFixed(0)} m at s=${at.map((x) => x.toFixed(0))}  tightest radius ${(1 / maxK).toFixed(0)} m  elevation ${zmin.toFixed(1)}..${zmax.toFixed(1)} m  pit ${t.pit ? 'yes' : 'no'}`);
}
