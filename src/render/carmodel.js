import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { COMPOUNDS } from '../sim/carspec.js';
import * as TX from './textures.js';
import { clamp, lerp } from '../util/math.js';

// Car frame: +X forward, +Y up, -Z is the car's left (physics y maps to -Z).
const WHEEL_R = 0.36;

function superellipse(a, n) {
  const c = Math.cos(a), s = Math.sin(a);
  return [Math.sign(c) * Math.pow(Math.abs(c), 2 / n), Math.sign(s) * Math.pow(Math.abs(s), 2 / n)];
}

/** Loft a rounded-box tube through sections [{x, w, yb, yt, cz?}] (front to back or back to front). */
function loft(sections, seg = 18, n = 3.4) {
  const pos = [], idx = [];
  const rings = sections.length;
  for (const sct of sections) {
    const hh = (sct.yt - sct.yb) / 2, yc = (sct.yt + sct.yb) / 2, cz = sct.cz || 0;
    for (let k = 0; k < seg; k++) {
      const [ex, ey] = superellipse((k / seg) * Math.PI * 2, sct.n || n);
      pos.push(sct.x, yc + ey * hh, cz + ex * sct.w);
    }
  }
  for (let r = 0; r < rings - 1; r++) {
    for (let k = 0; k < seg; k++) {
      const a = r * seg + k, b = r * seg + ((k + 1) % seg), c = (r + 1) * seg + k, d = (r + 1) * seg + ((k + 1) % seg);
      idx.push(a, c, b, b, c, d);
    }
  }
  // end caps
  for (const [r, flip] of [[0, false], [rings - 1, true]]) {
    const sct = sections[r];
    const ci = pos.length / 3;
    pos.push(sct.x, (sct.yb + sct.yt) / 2, sct.cz || 0);
    for (let k = 0; k < seg; k++) {
      const a = r * seg + k, b = r * seg + ((k + 1) % seg);
      if (flip) idx.push(ci, a, b);
      else idx.push(ci, b, a);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return ensureOutward(g);
}

function ensureOutward(g) {
  g.computeBoundingBox();
  const c = new THREE.Vector3();
  g.boundingBox.getCenter(c);
  const p = g.attributes.position, ix = g.index;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), d = new THREE.Vector3(), n = new THREE.Vector3(), f = new THREE.Vector3();
  let score = 0;
  for (let i = 0; i < ix.count; i += 3) {
    a.fromBufferAttribute(p, ix.getX(i));
    b.fromBufferAttribute(p, ix.getX(i + 1));
    d.fromBufferAttribute(p, ix.getX(i + 2));
    n.subVectors(b, a).cross(f.subVectors(d, a));
    f.copy(a).add(b).add(d).multiplyScalar(1 / 3).sub(c);
    score += Math.sign(n.dot(f));
  }
  if (score < 0) {
    const arr = ix.array;
    for (let i = 0; i < arr.length; i += 3) {
      const t = arr[i + 1];
      arr[i + 1] = arr[i + 2];
      arr[i + 2] = t;
    }
    g.computeVertexNormals();
  }
  return g;
}

/** Merge geometries after dropping attributes they don't all share (UVs). */
function mergeClean(list) {
  for (const g of list) g.deleteAttribute('uv');
  return mergeGeometries(list);
}

function box(x0, x1, y0, y1, z0, z1) {
  const g = new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0);
  g.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  return g;
}

/** A thin tilted wing element spanning z in [-hw, hw]. */
function wingElement(x, y, chord, hw, thick, pitch) {
  const g = new THREE.BoxGeometry(chord, thick, hw * 2);
  g.rotateZ(pitch);
  g.translate(x, y, 0);
  return g;
}

function colorize(g, fn) {
  const p = g.attributes.position;
  const col = new Float32Array(p.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    fn(c, p.getX(i), p.getY(i), p.getZ(i));
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

const solid = (hex) => (c) => c.set(hex);

function livery(team, part) {
  const base = new THREE.Color(team.color), acc = new THREE.Color(team.accent);
  const dark = new THREE.Color('#14161a');
  return (c, x, y, z) => {
    c.copy(base);
    const az = Math.abs(z);
    switch (team.livery) {
      case 'stripe':
        if (az < 0.075 && y > 0.3) c.copy(acc);
        break;
      case 'split':
        if (part === 'side' && y < 0.3) c.copy(acc);
        if (part === 'nose' && x > 2.35) c.copy(acc);
        if (part === 'cover' && az < 0.05) c.copy(acc);
        break;
      case 'chevron': {
        const t = (x * 1.7 + az * 2.4) % 1;
        if ((part === 'side' || part === 'mono') && t > 0.88) c.copy(acc);
        if (part === 'nose' && x > 2.75) c.copy(acc);
        break;
      }
    }
    if (part === 'nose' && x > 2.88) c.copy(dark);
  };
}

function textColorFor(hex) {
  const c = new THREE.Color(hex);
  return c.r * 0.299 + c.g * 0.587 + c.b * 0.114 > 0.6 ? '#111' : '#fff';
}

const shared = {};
function sharedMaterials() {
  if (shared.ready) return shared;
  shared.carbon = new THREE.MeshStandardMaterial({ color: 0x15171b, roughness: 0.42, metalness: 0.45 });
  shared.tyre = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.92, metalness: 0 });
  shared.rim = new THREE.MeshStandardMaterial({ color: 0x2b2e34, roughness: 0.35, metalness: 0.85 });
  shared.metal = new THREE.MeshStandardMaterial({ color: 0x555a62, roughness: 0.4, metalness: 0.8 });
  shared.helmetVisor = new THREE.MeshStandardMaterial({ color: 0x0b0b10, roughness: 0.1, metalness: 0.6 });
  shared.tyreGeoF = null;
  shared.ready = true;
  return shared;
}

export class CarView {
  /**
   * @param {object} team  from teams.js
   * @param {object} info  car.info (number, isPlayer, code)
   */
  constructor(team, info, opts = {}) {
    const S = sharedMaterials();
    this.team = team;
    this.info = info;
    this.group = new THREE.Group();
    this.model = new THREE.Group(); // carries pitch/roll
    this.group.add(this.model);
    this.ghost = !!opts.ghost;
    const fine = opts.detail !== 'low';
    this.lodFar = false;

    // ---------------- bodywork
    const paint = [];
    const carbon = [];
    const podParts = [];
    const nose = loft(
      [
        { x: 3.0, w: 0.03, yb: 0.16, yt: 0.2 },
        { x: 2.9, w: 0.09, yb: 0.15, yt: 0.25 },
        { x: 2.3, w: 0.13, yb: 0.14, yt: 0.33 },
        { x: 1.7, w: 0.2, yb: 0.13, yt: 0.43 },
        { x: 1.25, w: 0.27, yb: 0.12, yt: 0.52 },
      ],
      16
    );
    paint.push(colorize(nose, livery(team, 'nose')));
    const mono = loft(
      [
        { x: 1.25, w: 0.27, yb: 0.12, yt: 0.52 },
        { x: 0.7, w: 0.33, yb: 0.1, yt: 0.58 },
        { x: 0.15, w: 0.35, yb: 0.09, yt: 0.62 },
        { x: -0.35, w: 0.33, yb: 0.09, yt: 0.6 },
      ],
      18
    );
    paint.push(colorize(mono, livery(team, 'mono')));
    const cover = loft(
      [
        { x: -0.3, w: 0.28, yb: 0.2, yt: 0.78 },
        { x: -0.7, w: 0.26, yb: 0.2, yt: 0.95 },
        { x: -1.2, w: 0.2, yb: 0.2, yt: 0.78 },
        { x: -1.8, w: 0.12, yb: 0.2, yt: 0.52 },
        { x: -2.25, w: 0.07, yb: 0.2, yt: 0.4 },
      ],
      16
    );
    paint.push(colorize(cover, livery(team, 'cover')));
    for (const side of [-1, 1]) {
      const pod = loft(
        [
          { x: 0.95, w: 0.2, yb: 0.12, yt: 0.46, cz: side * 0.5 },
          { x: 0.5, w: 0.27, yb: 0.1, yt: 0.52, cz: side * 0.52 },
          { x: -0.3, w: 0.26, yb: 0.1, yt: 0.5, cz: side * 0.5 },
          { x: -1.0, w: 0.18, yb: 0.1, yt: 0.4, cz: side * 0.4 },
          { x: -1.75, w: 0.08, yb: 0.12, yt: 0.3, cz: side * 0.26 },
        ],
        14
      );
      podParts.push({ geo: colorize(pod, livery(team, 'side')), side });
      // sidepod inlet (dark)
      carbon.push(box(0.9, 1.0, 0.2, 0.42, side * 0.5 - 0.17, side * 0.5 + 0.17));
    }
    // airbox intake + shark fin
    carbon.push(box(-0.32, -0.2, 0.7, 0.9, -0.1, 0.1));
    const fin = new THREE.BoxGeometry(1.3, 0.34, 0.03);
    fin.translate(-1.5, 0.62, 0);
    paint.push(colorize(fin, solid(team.color)));
    // floor / plank + diffuser
    carbon.push(box(-1.95, 1.7, 0.05, 0.1, -0.8, 0.8));
    carbon.push(box(-2.35, -1.8, 0.1, 0.26, -0.5, 0.5));
    const lip = box(1.6, 2.1, 0.06, 0.1, -0.7, 0.7);
    carbon.push(lip);
    // cockpit rim + headrest
    carbon.push(box(-0.05, 0.55, 0.6, 0.66, -0.26, 0.26));
    paint.push(colorize(box(-0.55, -0.25, 0.6, 0.78, -0.24, 0.24), solid('#1d1f24')));

    // halo
    const halo = [];
    const tube = (pts, r = 0.025) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p))), 12, r, 6, false);
    halo.push(tube([[0.7, 0.58, 0], [0.55, 0.75, 0], [0.3, 0.9, 0]], 0.03));
    halo.push(tube([[0.3, 0.9, 0], [0.05, 0.9, 0.18], [-0.3, 0.74, 0.3]], 0.026));
    halo.push(tube([[0.3, 0.9, 0], [0.05, 0.9, -0.18], [-0.3, 0.74, -0.3]], 0.026));
    carbon.push(...halo);
    // mirrors
    for (const side of [-1, 1]) {
      carbon.push(box(0.75, 0.9, 0.62, 0.72, side * 0.58, side * 0.76));
      carbon.push(box(0.78, 0.8, 0.55, 0.62, side * 0.4, side * 0.42));
    }

    // ---------------- wings (vertex-coloured: dark elements, team-coloured endplates)
    const trimMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.4, metalness: 0.4 });
    const acc = new THREE.Color(team.accent);
    const dk = new THREE.Color('#15171b');
    const tint = (g, col) => colorize(g, (c) => c.copy(col));
    const mkFW = (side) => {
      const els = [
        wingElement(2.92, 0.095, 0.42, 0.97, 0.025, 0.04),
        wingElement(2.72, 0.14, 0.3, 0.92, 0.02, 0.12),
        wingElement(2.55, 0.19, 0.24, 0.84, 0.02, 0.2),
      ].map((e) => {
        e.scale(1, 1, 0.5);
        e.translate(0, 0, side * 0.47 * 0.97);
        return tint(e, dk);
      });
      els.push(tint(box(2.52, 3.1, 0.07, 0.3, side * 0.96, side * 1.0), acc));
      return new THREE.Mesh(mergeClean(els), trimMat);
    };
    this.frontWing = new THREE.Group();
    this.frontWingL = mkFW(-1);
    this.frontWingR = mkFW(1);
    this.frontWing.add(this.frontWingL, this.frontWingR);
    carbon.push(box(2.35, 2.55, 0.13, 0.22, -0.05, 0.05), box(2.55, 2.7, 0.1, 0.2, -0.18, -0.12), box(2.55, 2.7, 0.1, 0.2, 0.12, 0.18));

    this.rearWing = new THREE.Group();
    const rw = [tint(wingElement(-2.3, 0.78, 0.4, 0.53, 0.025, -0.12), dk), tint(wingElement(-2.38, 0.5, 0.3, 0.5, 0.02, 0.08), dk)];
    for (const side of [-1, 1]) rw.push(tint(box(-2.58, -2.0, 0.42, 0.98, side * 0.53, side * 0.56), acc));
    this.rearWing.add(new THREE.Mesh(mergeClean(rw), trimMat));
    // DRS flap (pivots about its trailing edge)
    this.drsPivot = new THREE.Group();
    this.drsPivot.position.set(-2.48, 0.9, 0);
    this.drsPivot.add(new THREE.Mesh(tint(wingElement(0.22, 0.0, 0.34, 0.51, 0.022, -0.08), dk), trimMat));
    this.rearWing.add(this.drsPivot);
    carbon.push(box(-2.2, -2.1, 0.5, 0.82, -0.05, 0.05), box(-2.45, -2.38, 0.46, 0.5, -0.4, 0.4));

    // suspension arms (static: merged into the carbon mesh)
    const WF = 1.962, WR = -1.638;
    for (const [wx, wz, tw] of [[WF, 1, 0.8], [WF, -1, 0.8], [WR, 1, 0.775], [WR, -1, 0.775]]) {
      carbon.push(box(wx + 0.12, wx + 0.22, 0.24, 0.27, Math.min(wz * 0.25, wz * tw), Math.max(wz * 0.25, wz * tw)));
      carbon.push(box(wx - 0.22, wx - 0.12, 0.2, 0.23, Math.min(wz * 0.25, wz * tw), Math.max(wz * 0.25, wz * tw)));
    }

    const bodyMat = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.28, metalness: 0.35, clearcoat: 1.0, clearcoatRoughness: 0.08 });
    this.bodyMat = bodyMat;
    this.model.add(new THREE.Mesh(mergeClean(paint), bodyMat), new THREE.Mesh(mergeClean(carbon), S.carbon), this.frontWing, this.rearWing);
    // sidepods are separate meshes so they can crumple on their own when the car is hit from the side
    this.pods = podParts.map(({ geo, side }) => {
      const g = mergeClean([geo]);
      const m = new THREE.Mesh(g, bodyMat);
      m.userData = { base: g.attributes.position.array.slice(), side, d: 0 };
      this.model.add(m);
      return m;
    });

    // helmet
    const helmetColor = new THREE.Color().setHSL(((info.number * 53) % 360) / 360, 0.8, 0.5);
    const hg = new THREE.SphereGeometry(0.15, 12, 9);
    hg.scale(1.15, 1, 0.95);
    hg.translate(0.18, 0.66, 0);
    this.helmet = new THREE.Mesh(colorize(hg, (c) => c.copy(helmetColor)), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.25, metalness: 0.2 }));
    this.model.add(this.helmet);

    // number decals (merged: two sides + nose top)
    const numTex = TX.numberTexture(info.number, textColorFor(team.color));
    const decalMat = new THREE.MeshBasicMaterial({ map: numTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
    const dg = [];
    for (const side of [-1, 1]) {
      const d = new THREE.PlaneGeometry(0.26, 0.26);
      if (side < 0) d.rotateY(Math.PI);
      d.translate(-0.6, 0.62, side * 0.285);
      dg.push(d);
    }
    const top = new THREE.PlaneGeometry(0.3, 0.3);
    top.rotateX(-Math.PI / 2);
    top.rotateY(-Math.PI / 2);
    top.translate(1.7, 0.455, 0);
    dg.push(top);
    this.decals = new THREE.Mesh(mergeGeometries(dg), decalMat);
    this.model.add(this.decals);

    // brake light
    this.brakeLight = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.1), new THREE.MeshBasicMaterial({ color: 0x400000 }));
    this.brakeLight.position.set(-2.4, 0.33, 0);
    this.model.add(this.brakeLight);

    // ---------------- wheels: 2 meshes each (tyre+rim+caps in vertex colours, compound rings)
    this.wheels = [];
    const compoundMat = new THREE.MeshBasicMaterial({ color: COMPOUNDS.medium.color });
    this.compoundMat = compoundMat;
    const tyreSeg = fine ? 28 : 14;
    const wheelMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.75, metalness: 0.25 });
    const mkWheel = (front, left) => {
      const w = front ? 0.34 : 0.44;
      const parts = [];
      const tyre = new THREE.CylinderGeometry(WHEEL_R, WHEEL_R, w, tyreSeg, 1);
      tyre.rotateX(Math.PI / 2);
      parts.push(tint(tyre, new THREE.Color('#141414')));
      const rim = new THREE.CylinderGeometry(0.235, 0.235, w * 0.92, 14);
      rim.rotateX(Math.PI / 2);
      parts.push(tint(rim, new THREE.Color('#3a3e46')));
      const rings = [];
      for (const sd of [-1, 1]) {
        const ring = new THREE.RingGeometry(0.295, 0.335, tyreSeg);
        const cap = new THREE.CircleGeometry(0.2, 12);
        if (sd < 0) {
          ring.rotateY(Math.PI);
          cap.rotateY(Math.PI);
        }
        ring.translate(0, 0, sd * (w / 2 + 0.002));
        cap.translate(0, 0, sd * (w / 2 + 0.004));
        rings.push(ring);
        parts.push(tint(cap, new THREE.Color('#1a1c21')));
      }
      const assembly = new THREE.Group();
      const spin = new THREE.Group();
      spin.add(new THREE.Mesh(mergeClean(parts), wheelMat));
      const rg = mergeClean(rings);
      spin.add(new THREE.Mesh(rg, compoundMat));
      assembly.add(spin);
      this.model.add(assembly);
      return { assembly, spin, front, left };
    };
    this.wheelDefs = [mkWheel(true, true), mkWheel(true, false), mkWheel(false, true), mkWheel(false, false)];
    this.wheelFront = [this.wheelDefs[0], this.wheelDefs[1]];
    this.spinAngle = [0, 0, 0, 0];
    this.detailMeshes = [this.helmet, this.decals, this.brakeLight];

    this.group.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = !this.ghost;
        o.receiveShadow = false;
      }
    });
    if (this.ghost) this.makeGhost();
    this.layoutWheels(1.962, 1.638, 1.6, 1.55, 3.6, 0);
    this.pitchSmooth = 0;
    this.rollSmooth = 0;
  }

  makeGhost() {
    this.group.traverse((o) => {
      if (o.isMesh) {
        o.material = o.material.clone();
        o.material.transparent = true;
        o.material.opacity = 0.35;
        o.material.depthWrite = false;
      }
    });
  }

  setCompound(c) {
    this.compoundMat.color.set(c.color);
  }

  /** Update the car pose from the physics car; alpha interpolates between the last two physics steps. */
  update(car, alpha, dt, carSpec) {
    const spec = car.spec;
    const x = lerp(car.px, car.x, alpha), y = lerp(car.py, car.y, alpha);
    let dth = car.theta - car.ptheta;
    if (dth > Math.PI) dth -= 2 * Math.PI;
    if (dth < -Math.PI) dth += 2 * Math.PI;
    const th = car.ptheta + dth * alpha;
    const slopePitch = Math.atan(car.trackSlope * Math.cos(car.theta - car.trackHeading));
    this.group.position.set(x, car.trackH, -y);
    this.group.rotation.set(0, th, 0);
    this.pitchSmooth = lerp(this.pitchSmooth, -car.pitch + slopePitch, clamp(dt * 6, 0, 1));
    this.rollSmooth = lerp(this.rollSmooth, -car.roll, clamp(dt * 6, 0, 1));
    this.model.rotation.order = 'YZX';
    this.model.rotation.set(this.rollSmooth, 0, this.pitchSmooth);
    this.layoutWheels(car.a, car.b, spec.trackF, spec.trackR, spec.wheelbase, car.steer);
    for (let w = 0; w < 4; w++) {
      this.spinAngle[w] -= (car.omega[w] * dt) % (Math.PI * 2);
      this.wheelDefs[w].spin.rotation.z = this.spinAngle[w];
    }
    // DRS flap, brake light, damage
    this.drsPivot.rotation.z = car.drsPos * 0.55;
    const br = car.brake > 0.08;
    // brake light; while the hybrid system harvests the lamp strobes amber/red
    this.harvT = (this.harvT || 0) + dt;
    const strobe = car.harvesting && !br ? (Math.floor(this.harvT * 9) % 2 ? 0xffa010 : 0xff2010) : null;
    this.brakeLight.material.color.setHex(strobe ?? (br ? 0xff1010 : car.harvesting ? 0xff6a10 : 0x400000));
    const df = car.damageFront || 0, dr = car.damageRear || 0;
    this.frontWingR.visible = df < 0.85;
    this.frontWingL.visible = df < 0.97;
    this.frontWingL.rotation.z = -df * 0.25;
    this.frontWingL.rotation.x = df * 0.2;
    this.frontWingL.position.y = -df * 0.04;
    this.frontWingR.rotation.z = -df * 0.12;
    this.frontWingR.rotation.x = -df * 0.3;
    this.frontWingR.position.y = -df * 0.06;
    this.rearWing.visible = dr < 0.92;
    this.rearWing.rotation.z = dr * 0.12;
    this.rearWing.rotation.x = dr * 0.12;
    // crumpled sidepods (left pod is the -Z side of the model)
    const sd = [car.damageSideR || 0, car.damageSideL || 0];
    for (let k = 0; k < 2; k++) {
      const m = this.pods[k];
      if (m && Math.abs(sd[k] - m.userData.d) > 0.03) this.crumple(m, sd[k]);
    }
  }

  /** Pushes a sidepod's outer skin inwards with noisy dents, in proportion to the damage d (0..1). */
  crumple(mesh, d) {
    const { base, side } = mesh.userData;
    const pos = mesh.geometry.attributes.position;
    const a = pos.array;
    const hash = (x, y) => {
      const v = Math.sin(x * 127.1 + y * 311.7 + side * 17.3) * 43758.5453;
      return v - Math.floor(v);
    };
    for (let i = 0; i < a.length; i += 3) {
      const x = base[i], y = base[i + 1], z = base[i + 2];
      const outer = Math.max(0, (z * side - 0.18) / 0.2); // skin facing outwards
      const n = 0.4 + 0.6 * hash(Math.round(x * 4), Math.round(y * 8));
      const dent = d * outer * n * 0.17;
      a[i] = x + (hash(y * 9, x * 3) - 0.5) * d * 0.05 * outer;
      a[i + 1] = y - d * 0.05 * outer * n;
      a[i + 2] = z - side * dent;
    }
    pos.needsUpdate = true;
    mesh.geometry.computeVertexNormals();
    mesh.userData.d = d;
  }

  setShadow(on) {
    if (this.shadowOn === on) return;
    this.shadowOn = on;
    this.group.traverse((o) => {
      if (o.isMesh) o.castShadow = on;
    });
  }

  setLod(far) {
    if (far === this.lodFar) return;
    this.lodFar = far;
    for (const m of this.detailMeshes) m.visible = !far;
  }

  layoutWheels(a, b, trackF, trackR, wheelbase, steer) {
    const W = this.wheelDefs;
    const pos = [
      [a, WHEEL_R, -trackF / 2],
      [a, WHEEL_R, trackF / 2],
      [-b, WHEEL_R, -trackR / 2],
      [-b, WHEEL_R, trackR / 2],
    ];
    const tanS = Math.tan(steer);
    const dL = Math.atan2(wheelbase * tanS, wheelbase - (trackF / 2) * tanS);
    const dR = Math.atan2(wheelbase * tanS, wheelbase + (trackF / 2) * tanS);
    for (let w = 0; w < 4; w++) {
      W[w].assembly.position.set(pos[w][0], pos[w][1], pos[w][2]);
      W[w].assembly.rotation.y = w === 0 ? dL : w === 1 ? dR : 0;
    }
  }

  /** Place the car directly (ghosts, showroom): physics-free. */
  setPose(x, y, theta, h, steer = 0, spin = 0) {
    this.group.position.set(x, h, -y);
    this.group.rotation.set(0, theta, 0);
    this.layoutWheels(1.962, 1.638, 1.6, 1.55, 3.6, steer);
    for (let w = 0; w < 4; w++) this.wheelDefs[w].spin.rotation.z = spin;
  }

  dispose() {
    this.group.traverse((o) => {
      if (o.isMesh) {
        o.geometry.dispose();
      }
    });
  }
}

/** Shows a wheel cutaway etc. Convenience for the menu showroom. */
export function makeShowroomCar(team, number = 7) {
  return new CarView(team, { number, isPlayer: true, code: 'YOU' }, { detail: 'high' });
}
