// The car-model geometry builders: every piece must be a closed, consistently wound, outward-facing solid with finite
// normals, or it renders with holes or black faces.
import assert from 'node:assert/strict';
import { loftBody, wing, ribbon, rod, plate, panel, blob, tube, signedVolume } from '../src/render/carshape.js';

function check(name, g) {
  const p = g.attributes.position, ix = g.index.array;
  assert.ok(g.index, `${name}: indexed`);
  assert.ok(g.attributes.normal, `${name}: has normals`);
  for (const v of p.array) assert.ok(Number.isFinite(v), `${name}: finite positions`);
  for (const v of g.attributes.normal.array) assert.ok(Number.isFinite(v), `${name}: finite normals`);
  // weld by position, then every directed edge must be matched by exactly one opposite edge
  const id = new Map(), key = (i) => `${Math.round(p.getX(i) * 1e4) + 0},${Math.round(p.getY(i) * 1e4) + 0},${Math.round(p.getZ(i) * 1e4) + 0}`;
  const vid = (i) => { const k = key(i); if (!id.has(k)) id.set(k, id.size); return id.get(k); };
  const edges = new Map();
  let tris = 0;
  for (let i = 0; i < ix.length; i += 3) {
    const a = vid(ix[i]), b = vid(ix[i + 1]), c = vid(ix[i + 2]);
    if (a === b || b === c || a === c) continue; // degenerate (a fan at a pole, a closed tip)
    tris++;
    for (const [u, v] of [[a, b], [b, c], [c, a]]) edges.set(`${u}>${v}`, (edges.get(`${u}>${v}`) || 0) + 1);
  }
  let open = 0, twice = 0;
  for (const [k, n] of edges) {
    const [u, v] = k.split('>');
    if (n > 1) twice++;
    if (!edges.has(`${v}>${u}`)) open++;
  }
  assert.equal(open, 0, `${name}: closed and consistently wound (${open} unmatched edges of ${edges.size})`);
  assert.equal(twice, 0, `${name}: no edge used twice in the same direction`);
  assert.ok(signedVolume(g) > 0, `${name}: wound outwards`);
  return tris;
}

let total = 0;
total += check('loftBody', loftBody([{ x: 3, w: 0.04, yb: 0.12, yt: 0.16 }, { x: 2, w: 0.2, yb: 0.1, yt: 0.4, nb: 4 }, { x: 0, w: 0.34, yb: 0.09, yt: 0.64, nt: 3.2, nb: 5 }, { x: -2.4, w: 0.06, yb: 0.2, yt: 0.3 }]));
total += check('loftBody reversed', loftBody([{ x: -2.4, w: 0.06, yb: 0.2, yt: 0.3 }, { x: 0, w: 0.34, yb: 0.09, yt: 0.64 }, { x: 3, w: 0.04, yb: 0.12, yt: 0.16 }]));
for (const side of [-1, 1]) total += check('pod ' + side, loftBody([{ x: 0.9, w: 0.18, yb: 0.3, yt: 0.56, zc: side * 0.5, lean: 0.03 }, { x: 0, w: 0.25, yb: 0.15, yt: 0.6, zc: side * 0.53, lean: 0.05 }, { x: -1.9, w: 0.1, yb: 0.1, yt: 0.24, zc: side * 0.23 }]));
for (const side of [-1, 1]) total += check('wing ' + side, wing([0, 0.3, 0.7, 0.95].map((z) => ({ z: side * z, x: 3 - 0.2 * z * z, y: 0.08 + 0.02 * z, chord: 0.27 - 0.06 * z, aoa: 0.1 + 0.1 * z }))));
total += check('wing full span', wing([-0.5, 0, 0.5].map((z) => ({ z, x: -2.1, y: 0.7, chord: 0.3, aoa: 0.2 }))));
for (const side of [-1, 1]) total += check('ribbon ' + side, ribbon([{ x: 3, z: side * 0.96, y0: 0.05, y1: 0.1 }, { x: 2.7, z: side * 0.97, y0: 0.05, y1: 0.26 }, { x: 2.4, z: side * 1.0, y0: 0.06, y1: 0.24 }]));
total += check('rod along z', rod([1.9, 0.4, 0.16], [1.96, 0.5, 0.6], 0.011, 2.4));
total += check('rod along -z', rod([1.9, 0.4, -0.16], [1.96, 0.5, -0.6], 0.011, 2.4));
total += check('rod along x', rod([-2.3, 0.4, 0], [-2.47, 0.415, 0], 0.045, 1, 12));
total += check('plate', plate([[-2.02, 0.3], [-1.99, 0.56], [-2.1, 0.94], [-2.6, 1.0], [-2.65, 0.55], [-2.6, 0.3]], 0.018, 0.535));
total += check('panel', panel([[1.7, 0], [1.2, 0.7], [0, 0.8], [-2.3, 0.46], [-2.3, -0.46], [0, -0.8], [1.2, -0.7]], 0.095, 0.04));
total += check('blob', blob(0, 0.7, 0, 0.1, 0.1, 0.2));
total += check('tube', tube([[0.8, 0.6, 0], [0.6, 0.8, 0], [0.4, 0.92, 0]], 0.034));
total += check('flat tube', tube([[-1.9, 0.48, 0], [-2.1, 0.66, 0], [-2.26, 0.79, 0]], 0.04, { flatZ: 0.35 }));

// the aero section of a wishbone points along the car, whichever way the rod runs
{
  const g = rod([1.9, 0.4, 0.16], [1.96, 0.5, 0.6], 0.01, 3);
  g.computeBoundingBox();
  const b = g.boundingBox;
  assert.ok(b.max.x - b.min.x > 0.1, 'rod chord lies along x');
}
console.log(`carshape: ok (${total} triangles checked)`);
