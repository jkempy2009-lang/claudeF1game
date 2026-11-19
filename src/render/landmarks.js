import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { clamp, mulberry32 } from '../util/math.js';
import * as TX from './textures.js';

// Trackside set pieces (SPEC 2.4, 6.5): a big landmark or two per circuit (Ferris wheel, race-control tower, yachts in the
// harbour, an arch over the track), corner-number boards, LED marshal panels and night searchlights. Built once per World;
// world.update() animates them.

/** Which landmarks each circuit gets: type, where along the lap (fraction), which side, how far beyond the wall. */
const LANDMARKS = {
  rade: [{ type: 'ferris', at: 0.62, side: -1, extra: 55, scale: 1 }, { type: 'yachts' }],
  porto: [{ type: 'yachts' }, { type: 'tower', at: 0.04, side: -1, extra: 18 }],
  costa: [{ type: 'yachts' }, { type: 'tower', at: 0.03, side: -1, extra: 16 }],
  lumiere: [{ type: 'ferris', at: 0.35, side: 1, extra: 45, scale: 0.8 }],
  vettore: [{ type: 'arch', at: 'straight' }, { type: 'tower', at: 0.03, side: -1, extra: 18 }],
  mirage: [{ type: 'arch', at: 'straight' }, { type: 'tower', at: 0.03, side: -1, extra: 20, scale: 1.3 }],
  northfield: [{ type: 'tower', at: 0.03, side: -1, extra: 18 }],
  ardennes: [{ type: 'tower', at: 0.03, side: -1, extra: 18 }],
  aurora: [{ type: 'tower', at: 0.03, side: -1, extra: 16 }],
  sakura: [{ type: 'ferris', at: 0.5, side: 1, extra: 70, scale: 1.1 }, { type: 'tower', at: 0.03, side: -1, extra: 18 }],
  bastide: [{ type: 'tower', at: 0.03, side: -1, extra: 16 }],
  caldera: [{ type: 'arch', at: 'straight' }, { type: 'tower', at: 0.03, side: -1, extra: 18 }],
  serpent: [{ type: 'tower', at: 0.03, side: -1, extra: 14 }],
  vortex: [{ type: 'arch', at: 'straight' }, { type: 'ferris', at: 0.62, side: 1, extra: 40 }, { type: 'tower', at: 0.03, side: -1, extra: 18 }],
  kasbah: [{ type: 'tower', at: 0.03, side: -1, extra: 12 }],
  neon: [{ type: 'arch', at: 'straight' }, { type: 'ferris', at: 0.52, side: -1, extra: 45 }, { type: 'tower', at: 0.03, side: -1, extra: 16 }],
  meridian: [{ type: 'arch', at: 'straight' }, { type: 'tower', at: 0.03, side: -1, extra: 24, scale: 1.2 }],
  scarp: [{ type: 'yachts' }, { type: 'tower', at: 0.03, side: -1, extra: 16 }],
  ironwood: [{ type: 'tower', at: 0.03, side: -1, extra: 16 }],
  frost: [{ type: 'tower', at: 0.03, side: -1, extra: 18 }],
};

const steel = () => new THREE.MeshStandardMaterial({ color: 0xd9dde3, roughness: 0.4, metalness: 0.7 });

export function buildHeroLandmarks(world) {
  const tr = world.track, list = LANDMARKS[tr.id] || [{ type: 'tower', at: 0.03, side: -1, extra: 18 }];
  world.animated = world.animated || [];
  const pt = {};
  for (const L of list) {
    let s = typeof L.at === 'number' ? L.at * tr.length : 0;
    if (L.at === 'straight') s = longestStraightMid(tr);
    if (L.type === 'yachts') { buildYachts(world); continue; }
    if (L.type === 'arch') { buildArch(world, s); continue; }
    const side = L.side || 1, i = tr.idx(s);
    // just beyond the barrier and clear of the pit building on that side
    let extra = L.extra || 30;
    for (let k = 0; k < 12; k++) {
      world.outsidePoint(s, side, extra, pt);
      if (world.clearOfTrack(pt.x, pt.y, L.type === 'ferris' ? 30 : 10) && !(tr.pit && tr.inPitRange(s) && side < 0 && extra < 40)) break;
      extra += 12;
    }
    world.outsidePoint(s, side, extra, pt);
    const gy = world.groundHeight(pt.x, pt.y);
    const g = L.type === 'ferris' ? ferrisWheel(world, L.scale || 1) : controlTower(world, L.scale || 1);
    g.position.set(pt.x, gy, -pt.y);
    g.rotation.y = tr.hdgAt(s) + (L.type === 'ferris' ? 0 : Math.PI / 2);
    world.group.add(g);
    void i;
  }
}

function longestStraightMid(tr) {
  const N = tr.N;
  let best = 0, bestLen = 0, run = 0, start = 0;
  for (let k = 0; k < N * 2; k++) {
    const i = k % N;
    const straight = Math.abs(tr.curv[i]) < 1 / 900 && !(tr.pit && tr.inPitRange(i * tr.ds));
    if (straight) { if (!run) start = k; run++; if (run > bestLen) { bestLen = run; best = start; } } else run = 0;
  }
  return ((best + bestLen / 2) % N) * tr.ds;
}

/** A Ferris wheel: rim, spokes, a hub on an A-frame, and cabins that hang level as it turns. */
function ferrisWheel(world, scale) {
  const R = 22 * scale, H = R + 4;
  const g = new THREE.Group();
  const m = steel();
  const legs = [];
  for (const sz of [-1, 1]) for (const sx of [-1, 1]) {
    const a = new THREE.Vector3(sx * R * 0.55, 0, sz * 3), b = new THREE.Vector3(0, H, sz * 1.2);
    const leg = new THREE.CylinderGeometry(0.35, 0.5, a.distanceTo(b), 8);
    leg.translate(0, a.distanceTo(b) / 2, 0);
    leg.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize()));
    leg.translate(a.x, a.y, a.z);
    legs.push(leg);
  }
  g.add(new THREE.Mesh(mergeGeometries(legs), m));
  const wheel = new THREE.Group();
  wheel.position.set(0, H, 0);
  const parts = [];
  for (const z of [-1.2, 1.2]) { const t = new THREE.TorusGeometry(R, 0.28, 8, 96); t.translate(0, 0, z); parts.push(t); }
  for (let k = 0; k < 24; k++) {
    const a = (k / 24) * Math.PI * 2;
    for (const z of [-1.2, 1.2]) {
      const sp = new THREE.CylinderGeometry(0.08, 0.08, R, 4);
      sp.translate(0, R / 2, z);
      sp.rotateZ(a);
      parts.push(sp);
    }
  }
  const hub = new THREE.CylinderGeometry(1.2, 1.2, 3.2, 16); hub.rotateX(Math.PI / 2); parts.push(hub);
  wheel.add(new THREE.Mesh(mergeGeometries(parts.map((p) => p.toNonIndexed())), m));
  // the rim lights up at night
  const lamp = new THREE.MeshBasicMaterial({ color: 0xffe2b0 });
  world.nightGlow = world.nightGlow || [];
  world.nightGlow.push(lamp);
  const lights = new THREE.InstancedMesh(new THREE.SphereGeometry(0.22, 6, 4), lamp, 48);
  const mt = new THREE.Matrix4();
  for (let k = 0; k < 48; k++) { const a = (k / 48) * Math.PI * 2; mt.makeTranslation(Math.cos(a) * R, Math.sin(a) * R, 1.6); lights.setMatrixAt(k, mt); }
  wheel.add(lights);
  const cabinMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.2 });
  const cols = ['#e63946', '#f4a261', '#2a9d8f', '#457b9d', '#e9c46a', '#8d5bd1'];
  const cabins = [];
  for (let k = 0; k < 16; k++) {
    const a = (k / 16) * Math.PI * 2;
    const holder = new THREE.Group(); // pinned to the rim; counter-rotated so the cabin hangs level
    holder.position.set(Math.cos(a) * R, Math.sin(a) * R, 0);
    const c = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 1.8, 10), cabinMat.clone());
    c.material.color.set(cols[k % cols.length]);
    c.rotation.x = Math.PI / 2;
    c.position.y = -1.6;
    holder.add(c);
    wheel.add(holder);
    cabins.push(holder);
  }
  g.add(wheel);
  world.animated.push((dt, time) => {
    wheel.rotation.z = time * 0.05;
    for (const h of cabins) h.rotation.z = -wheel.rotation.z;
  });
  g.traverse((o) => { if (o.isMesh) o.castShadow = false; });
  return g;
}

/** A race-control tower: a tapered concrete core, a ring of glass that glows at night, a roof with antennas. */
function controlTower(world, scale) {
  const g = new THREE.Group();
  const H = 30 * scale;
  const concrete = new THREE.MeshStandardMaterial({ color: 0xe7e7e2, roughness: 0.8 });
  const core = new THREE.CylinderGeometry(2.2 * scale, 3.4 * scale, H, 20);
  core.translate(0, H / 2, 0);
  g.add(new THREE.Mesh(core, concrete));
  const glass = new THREE.MeshStandardMaterial({ color: 0x1a2a3a, roughness: 0.05, metalness: 0.9, emissive: 0xffd9a0, emissiveIntensity: 0 });
  world.nightEmissive = world.nightEmissive || [];
  world.nightEmissive.push(glass);
  const deck = new THREE.CylinderGeometry(6.5 * scale, 5.2 * scale, 5 * scale, 24);
  deck.translate(0, H + 2.5 * scale, 0);
  g.add(new THREE.Mesh(deck, glass));
  const roof = new THREE.CylinderGeometry(7 * scale, 7 * scale, 0.8 * scale, 24);
  roof.translate(0, H + 5.4 * scale, 0);
  g.add(new THREE.Mesh(roof, concrete));
  const ant = [];
  for (const [x, h] of [[1.5, 8], [-2, 5]]) { const a = new THREE.CylinderGeometry(0.08, 0.12, h * scale, 6); a.translate(x * scale, H + 5.8 * scale + (h * scale) / 2, 0); ant.push(a); }
  g.add(new THREE.Mesh(mergeGeometries(ant), steel()));
  // the circuit's name around the deck
  const label = new THREE.Mesh(new THREE.CylinderGeometry(6.55 * scale, 6.55 * scale, 1.2 * scale, 48, 1, true), new THREE.MeshBasicMaterial({ map: TX.labelTexture('  RACE CONTROL  ·  ' + world.track.name.toUpperCase() + '  ·', '#ffffff', '#c9201f', 2048, 64), side: THREE.DoubleSide }));
  label.position.y = H + 4.4 * scale;
  g.add(label);
  return g;
}

/** Yachts moored in the harbour: hull, cabin, mast and a furled sail, gently rocking. */
function buildYachts(world) {
  if (world.waterLevel == null) return;
  const tr = world.track, rnd = mulberry32(77), pt = {};
  const spots = [];
  for (let tries = 0; tries < 400 && spots.length < 14; tries++) {
    const s = rnd() * tr.length, side = rnd() < 0.5 ? 1 : -1;
    world.outsidePoint(s, side, 30 + rnd() * 160, pt);
    if (!world.clearOfTrack(pt.x, pt.y, 20)) continue;
    if (world.groundHeight(pt.x, pt.y) > world.waterLevel - 1.2) continue;
    if (spots.some((p) => Math.hypot(p.x - pt.x, p.y - pt.y) < 22)) continue;
    spots.push({ x: pt.x, y: pt.y, h: rnd() * 6.28, sc: 0.8 + rnd() * 0.7, ph: rnd() * 6.28 });
  }
  const hullMat = new THREE.MeshStandardMaterial({ color: 0xf6f6f2, roughness: 0.35, metalness: 0.1 });
  const deckMat = new THREE.MeshStandardMaterial({ color: 0x8a6a4a, roughness: 0.7 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a2430, roughness: 0.15, metalness: 0.6 });
  // a hull: a lofted half-ellipse, pointed bow
  const hull = new THREE.LatheGeometry([[0, 0], [1.6, 0.2], [2.0, 1.2], [2.1, 1.8]].map(([x, y]) => new THREE.Vector2(x, y)), 18);
  hull.scale(1, 1, 4.2);
  const boats = [];
  for (const sp of spots) {
    const b = new THREE.Group();
    b.add(new THREE.Mesh(hull, hullMat));
    const deck = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.15, 14), deckMat); deck.position.y = 1.8; b.add(deck);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.2, 4.5), darkMat); cab.position.set(0, 2.4, -0.8); b.add(cab);
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 14, 6), hullMat); mast.position.set(0, 8.8, 1.5); b.add(mast);
    const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 5, 6), deckMat); boom.rotation.x = Math.PI / 2; boom.position.set(0, 3.2, -0.9); b.add(boom);
    b.scale.setScalar(sp.sc);
    b.position.set(sp.x, world.waterLevel - 0.6, -sp.y);
    b.rotation.y = sp.h;
    world.group.add(b);
    boats.push({ b, ph: sp.ph });
  }
  world.animated.push((dt, time) => {
    for (const o of boats) { o.b.rotation.z = Math.sin(time * 0.8 + o.ph) * 0.04; o.b.position.y = world.waterLevel - 0.6 + Math.sin(time * 0.6 + o.ph) * 0.12; }
  });
}

/** A parabolic truss arch over the track, sponsor banner across the top. */
function buildArch(world, s) {
  const tr = world.track, i = tr.idx(s);
  const dl = tr.wallDist(i, 1) + 1.5, dr = -(tr.wallDist(i, -1) + 1.5);
  const pa = tr.pointAt(s, dl), pb = tr.pointAt(s, dr);
  const A = new THREE.Vector3(pa.x, pa.h, -pa.y), B = new THREE.Vector3(pb.x, pb.h, -pb.y);
  const span = A.distanceTo(B), H = Math.max(14, span * 0.75);
  const pts = [];
  for (let k = 0; k <= 32; k++) {
    const t = k / 32;
    const p = A.clone().lerp(B, t);
    p.y += 4 * H * t * (1 - t);
    pts.push(p);
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  const parts = [];
  for (const off of [-0.9, 0.9]) {
    const n = new THREE.Vector3(Math.cos(tr.hdgAt(s)), 0, -Math.sin(tr.hdgAt(s))).multiplyScalar(off);
    const c = new THREE.CatmullRomCurve3(pts.map((p) => p.clone().add(n)));
    parts.push(new THREE.TubeGeometry(c, 64, 0.35, 8, false));
  }
  // lattice: rungs between the two chords
  for (let k = 1; k < 32; k++) {
    const p = curve.getPoint(k / 32);
    const n = new THREE.Vector3(Math.cos(tr.hdgAt(s)), 0, -Math.sin(tr.hdgAt(s)));
    const r = new THREE.CylinderGeometry(0.08, 0.08, 1.8, 5);
    r.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), n));
    r.translate(p.x, p.y, p.z);
    parts.push(r);
  }
  const m = new THREE.Mesh(mergeGeometries(parts.map((g) => (g.index ? g.toNonIndexed() : g)).map((g) => { g.deleteAttribute('uv'); return g; })), steel());
  m.castShadow = true;
  world.group.add(m);
  const top = curve.getPoint(0.5);
  const banner = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(16, span * 0.6), 2.4), new THREE.MeshBasicMaterial({ map: TX.billboardTexture(3), side: THREE.DoubleSide }));
  banner.position.set(top.x, top.y - 2.6, top.z);
  banner.rotation.y = tr.hdgAt(s) + Math.PI / 2;
  world.group.add(banner);
}

/** Corner-number boards at every corner entry, on the outside (SPEC 6.5). */
export function buildCornerSigns(world) {
  const tr = world.track, pt = {};
  const geos = [], atlas = document.createElement('canvas');
  const n = Math.min(tr.corners.length, 32);
  if (!n) return;
  atlas.width = 128; atlas.height = 64 * n;
  const g = atlas.getContext('2d');
  g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = '900 44px "Arial Black", Impact, sans-serif';
  const posts = [];
  tr.corners.slice(0, n).forEach((c, k) => {
    g.fillStyle = '#ffffff'; g.fillRect(0, k * 64, 128, 64);
    g.fillStyle = '#c9201f'; g.fillRect(4, k * 64 + 4, 120, 56);
    g.fillStyle = '#ffffff'; g.fillText('T' + c.id, 64, k * 64 + 34);
    const s = c.sStart - 30;
    const side = c.sign > 0 ? -1 : 1; // the outside of the corner
    const i = tr.idx(s);
    tr.pointAt(s, side * (tr.wallDist(i, side) + 1.2), pt);
    const plane = new THREE.PlaneGeometry(1.6, 0.8);
    const uv = plane.attributes.uv;
    for (let q = 0; q < uv.count; q++) uv.setY(q, (n - 1 - k + uv.getY(q)) / n);
    plane.rotateY(tr.hdgAt(s) - Math.PI / 2);
    plane.translate(pt.x, pt.h + 2.2, -pt.y);
    geos.push(plane);
    posts.push([pt.x, pt.h, -pt.y]);
  });
  const tex = new THREE.CanvasTexture(atlas);
  tex.colorSpace = THREE.SRGBColorSpace;
  world.group.add(new THREE.Mesh(mergeGeometries(geos), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide })));
  const pole = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.05, 0.05, 1.8, 6), steel(), posts.length);
  const mt = new THREE.Matrix4();
  posts.forEach(([x, y, z], k) => { mt.makeTranslation(x, y + 0.9, z); pole.setMatrixAt(k, mt); });
  world.group.add(pole);
}

/**
 * LED marshal panels at the marshal posts (SPEC 6.5): dark when racing, flashing yellow, SC, VSC, green or the chequered
 * pattern as the race control state demands. One texture atlas of the six states; the state is the texture offset.
 */
export function buildLedPanels(world, posts) {
  if (!posts || !posts.length) return;
  const c = document.createElement('canvas');
  c.width = 128; c.height = 64 * 6;
  const g = c.getContext('2d');
  const states = [['#05070a', ''], ['#ffd400', ''], ['#ffd400', 'SC'], ['#ffd400', 'VSC'], ['#18c24a', ''], ['#ffffff', 'chequer']];
  states.forEach(([col, txt], k) => {
    g.fillStyle = '#05070a'; g.fillRect(0, k * 64, 128, 64);
    if (txt === 'chequer') { for (let y = 0; y < 4; y++) for (let x = 0; x < 8; x++) if ((x + y) % 2) { g.fillStyle = '#ffffff'; g.fillRect(x * 16, k * 64 + y * 16, 16, 16); } }
    else if (k > 0) {
      // LED dots
      g.fillStyle = col;
      for (let y = 4; y < 64; y += 8) for (let x = 4; x < 128; x += 8) { g.globalAlpha = txt ? 0.25 : 1; g.fillRect(x - 2, k * 64 + y - 2, 4, 4); }
      g.globalAlpha = 1;
      if (txt) { g.fillStyle = col; g.font = '900 40px "Arial Black", Impact, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(txt, 64, k * 64 + 34); }
    }
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.repeat.set(1, 1 / 6);
  const mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });
  const geos = posts.map((p) => {
    const pl = new THREE.PlaneGeometry(1.4, 0.7);
    pl.rotateY((p.side * -Math.PI) / 2);
    pl.translate(0, 0.9 + 1.0, 0);
    pl.rotateY(p.h);
    pl.translate(p.x, p.y, p.z);
    return pl;
  });
  world.group.add(new THREE.Mesh(mergeGeometries(geos), mat));
  world.ledTex = tex;
  world.ledState = 0;
}

/** Sets the LED panels: 'none' | 'yellow' | 'sc' | 'vsc' | 'green' | 'chequered'. Yellow states flash. */
export function setLedPanels(world, kind, time) {
  if (!world.ledTex) return;
  const idx = { none: 0, yellow: 1, sc: 2, vsc: 3, green: 4, chequered: 5 }[kind] ?? 0;
  const flash = (idx === 1 || idx === 2 || idx === 3) && Math.floor(time * 2.5) % 2 === 1;
  const show = flash ? 0 : idx;
  if (show !== world.ledState) {
    world.ledState = show;
    world.ledTex.offset.y = (5 - show) / 6;
  }
}

/** Searchlight beams sweeping the sky near the start line at night (SPEC 6.5). */
export function buildSearchlights(world) {
  const tr = world.track, pt = {};
  const mat = new THREE.MeshBasicMaterial({ color: 0xcfe0ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  const beams = [];
  for (let k = 0; k < 4; k++) {
    const s = (k - 1.5) * 40 + tr.length * 0.995;
    world.outsidePoint(((s % tr.length) + tr.length) % tr.length, k % 2 ? 1 : -1, 30, pt);
    const cone = new THREE.ConeGeometry(9, 260, 16, 1, true);
    cone.translate(0, -130, 0); // apex at the lamp
    const m = new THREE.Mesh(cone, mat);
    m.position.set(pt.x, world.groundHeight(pt.x, pt.y) + 1, -pt.y);
    m.visible = false;
    world.group.add(m);
    beams.push({ m, ph: k * 1.7 });
  }
  world.searchMat = mat;
  world.animated = world.animated || [];
  world.animated.push((dt, time) => {
    const on = (world.night || 0) > 0.5;
    mat.opacity = on ? 0.05 * clamp((world.night - 0.5) * 2, 0, 1) : 0;
    for (const b of beams) {
      b.m.visible = on;
      if (!on) continue;
      b.m.rotation.set(Math.PI - 0.5 - 0.25 * Math.sin(time * 0.3 + b.ph), time * 0.2 + b.ph, 0);
    }
  });
}
