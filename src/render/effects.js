import * as THREE from 'three';
import { softParticleTexture } from './textures.js';
import { SURF } from '../sim/track.js';
import { clamp, mulberry32 } from '../util/math.js';

const VERT = /* glsl */ `
attribute float size; attribute float alpha; attribute vec3 tint;
varying float vA; varying vec3 vTint;
uniform float scale;
void main() {
  vA = alpha; vTint = tint;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const FRAG = /* glsl */ `
uniform sampler2D map; uniform float light; varying float vA; varying vec3 vTint;
void main() {
  vec4 t = texture2D(map, gl_PointCoord);
  gl_FragColor = vec4(vTint * light, t.a * vA);
  if (gl_FragColor.a < 0.01) discard;
}`;

/** Fixed-size pool of camera-facing particles (smoke, dust, sparks) in one draw call. */
class ParticlePool {
  constructor(max, { additive = false, gravity = 0, drag = 0.5, bounce = 0 } = {}) {
    this.max = max;
    this.bounce = bounce; // > 0: particles skip off the surface they were thrown from
    this.floor = new Float32Array(max);
    this.alive = false;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.size = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.tint = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max).fill(1);
    this.grow = new Float32Array(max);
    this.a0 = new Float32Array(max);
    this.head = 0;
    this.gravity = gravity;
    this.drag = drag;
    const g = new THREE.BufferGeometry();
    this.attrPos = new THREE.BufferAttribute(this.pos, 3);
    this.attrSize = new THREE.BufferAttribute(this.size, 1);
    this.attrAlpha = new THREE.BufferAttribute(this.alpha, 1);
    this.attrTint = new THREE.BufferAttribute(this.tint, 3);
    for (const a of [this.attrPos, this.attrSize, this.attrAlpha, this.attrTint]) a.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.attrPos);
    g.setAttribute('size', this.attrSize);
    g.setAttribute('alpha', this.attrAlpha);
    g.setAttribute('tint', this.attrTint);
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { map: { value: softParticleTexture() }, scale: { value: 600 }, light: { value: 1 } },
    });
    this.points = new THREE.Points(g, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    this.alpha.fill(0);
  }

  emit(x, y, z, vx, vy, vz, size, grow, alpha, life, r, g, b) {
    const i = this.head;
    // a full pool drops the new particle rather than popping a visible old one out of existence
    if (this.life[i] > 0) return;
    this.head = (this.head + 1) % this.max;
    this.alive = true;
    this.floor[i] = y - 0.04;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.size[i] = size;
    this.grow[i] = grow;
    this.a0[i] = alpha;
    this.alpha[i] = alpha;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.tint[i * 3] = r; this.tint[i * 3 + 1] = g; this.tint[i * 3 + 2] = b;
  }

  update(dt, viewportScale) {
    this.points.material.uniforms.scale.value = viewportScale;
    if (!this.alive) return;
    const k = Math.exp(-this.drag * dt);
    let any = false;
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) {
        this.alpha[i] = 0;
        continue;
      }
      this.life[i] -= dt;
      if (this.life[i] > 0) any = true;
      const t = this.life[i] / this.maxLife[i];
      this.vel[i * 3] *= k;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * k + this.gravity * dt;
      this.vel[i * 3 + 2] *= k;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      if (this.bounce && this.pos[i * 3 + 1] < this.floor[i]) {
        this.pos[i * 3 + 1] = this.floor[i];
        this.vel[i * 3 + 1] = Math.abs(this.vel[i * 3 + 1]) * this.bounce;
      }
      this.size[i] += this.grow[i] * dt;
      this.alpha[i] = this.a0[i] * Math.max(0, t) * Math.min(1, (1 - t) * 8);
    }
    this.alive = any; // the frame after the last one dies still uploads (alpha 0); then the pool sleeps
    this.attrPos.needsUpdate = true;
    this.attrSize.needsUpdate = true;
    this.attrAlpha.needsUpdate = true;
    this.attrTint.needsUpdate = true;
  }
}

/** Skid marks: a ring buffer of quads laid on the asphalt. */
class SkidMarks {
  constructor(maxQuads = 36000) {
    this.max = maxQuads;
    this.pos = new Float32Array(maxQuads * 4 * 3);
    this.col = new Float32Array(maxQuads * 4);
    const idx = new Uint32Array(maxQuads * 6);
    for (let q = 0; q < maxQuads; q++) idx.set([q * 4, q * 4 + 1, q * 4 + 2, q * 4 + 1, q * 4 + 3, q * 4 + 2], q * 6);
    const g = new THREE.BufferGeometry();
    this.attrPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.attrCol = new THREE.BufferAttribute(this.col, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.attrPos);
    g.setAttribute('a', this.attrCol);
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -6,
      polygonOffsetUnits: -6,
      vertexShader: 'attribute float a; varying float vA; void main(){ vA = a; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'varying float vA; void main(){ gl_FragColor = vec4(0.02,0.02,0.025, vA); }',
    });
    this.mesh = new THREE.Mesh(g, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 3;
    this.head = 0;
    this.dirtyFrom = -1;
    this.dirtyCount = 0;
    this.dirtyAll = false;
  }

  /** slot: this wheel's last laid point { x, y, z, nx, nz, on }. A short step is not a mark yet: the point stays put until the wheel has moved far enough. */
  add(slot, x, y, z, nx, nz, width, a) {
    if (a <= 0) {
      slot.on = false;
      return;
    }
    if (slot.on) {
      const dx = x - slot.x, dz = z - slot.z, d2 = dx * dx + dz * dz;
      if (d2 < 0.04) return;
      if (d2 < 25) {
        const q = this.head;
        this.head = (this.head + 1) % this.max;
        const p = this.pos, o = q * 12;
        const w = width / 2;
        p[o] = slot.x + slot.nx * w; p[o + 1] = slot.y + 0.02; p[o + 2] = slot.z + slot.nz * w;
        p[o + 3] = slot.x - slot.nx * w; p[o + 4] = slot.y + 0.02; p[o + 5] = slot.z - slot.nz * w;
        p[o + 6] = x + nx * w; p[o + 7] = y + 0.02; p[o + 8] = z + nz * w;
        p[o + 9] = x - nx * w; p[o + 10] = y + 0.02; p[o + 11] = z - nz * w;
        this.col.fill(a, q * 4, q * 4 + 4);
        if (this.dirtyCount === 0) this.dirtyFrom = q;
        else if (q < this.dirtyFrom) this.dirtyAll = true; // the ring wrapped this frame
        this.dirtyCount++;
      }
    }
    slot.x = x; slot.y = y; slot.z = z; slot.nx = nx; slot.nz = nz;
    slot.on = true;
  }

  flush() {
    if (!this.dirtyCount) return;
    // only the quads laid this frame go to the GPU (the buffers hold 36000 of them)
    if (!this.dirtyAll && this.dirtyCount <= this.max - this.dirtyFrom) {
      this.attrPos.clearUpdateRanges();
      this.attrCol.clearUpdateRanges();
      this.attrPos.addUpdateRange(this.dirtyFrom * 12, this.dirtyCount * 12);
      this.attrCol.addUpdateRange(this.dirtyFrom * 4, this.dirtyCount * 4);
    } else {
      this.attrPos.clearUpdateRanges();
      this.attrCol.clearUpdateRanges();
    }
    this.attrPos.needsUpdate = true;
    this.attrCol.needsUpdate = true;
    this.dirtyCount = 0;
    this.dirtyAll = false;
  }
}

const DUST_GRAVEL = [0.78, 0.7, 0.55], DUST_GRASS = [0.38, 0.5, 0.25];
const slotOf = () => ({ x: 0, y: 0, z: 0, nx: 0, nz: 0, on: false });

export class Effects {
  constructor(scene) {
    this.smoke = new ParticlePool(900, { drag: 0.9, gravity: 0.6 });
    this.dust = new ParticlePool(500, { drag: 0.8, gravity: -3 });
    this.sparks = new ParticlePool(500, { additive: true, gravity: -14, drag: 0.4, bounce: 0.3 });
    this.spray = new ParticlePool(1600, { drag: 1.5, gravity: -1.2 });
    this.skid = new SkidMarks();
    this.wet = 0;
    scene.add(this.smoke.points, this.dust.points, this.sparks.points, this.spray.points, this.skid.mesh);
    this.rnd = mulberry32(99);
    this.state = new WeakMap(); // car -> { skid: [slot x4], spray/smoke/dust: accumulators x4, spark }
  }

  /** Daylight scale for the unlit puffs (1 = full sun): they should dim with the evening, the rain and the night. */
  setLight(k) {
    for (const p of [this.smoke, this.dust, this.spray]) p.points.material.uniforms.light.value = k;
  }

  /** Emit for one car per frame (smoke when sliding, dirt when off-road, sparks on scrapes). */
  car(car, dt) {
    const R = this.rnd;
    const co = Math.cos(car.theta), si = Math.sin(car.theta);
    let st = this.state.get(car);
    if (!st) this.state.set(car, (st = { skid: [slotOf(), slotOf(), slotOf(), slotOf()], spray: [0, 0, 0, 0], smoke: [0, 0, 0, 0], dust: [0, 0, 0, 0], spark: 0 }));
    for (let w = 0; w < 4; w++) {
      const lp = car.wheelPos[w];
      const wx = car.x + lp[0] * co - lp[1] * si, wy = car.y + lp[0] * si + lp[1] * co;
      const wz = -wy, wh = car.trackH;
      const sf = car.surf[w];
      const slip = car.slipVis[w];
      const onAsphalt = sf === SURF.ASPHALT || sf === SURF.PIT || sf === SURF.KERB || sf === SURF.RUNOFF;
      // skid marks
      // heavy braking drags the tyres into the surface: lock-ups and near-lock-ups leave rubber (it all stays down for the session)
      const heavyBrake = car.brake > 0.8 && car.speed > 22 && car.kappa[w] < -0.1 && w < 2;
      // lateral direction of the tyre in world coords: car left in physics (-sin, cos) -> world (-sin, -cos)
      if (onAsphalt && (slip > 0.35 || heavyBrake)) this.skid.add(st.skid[w], wx, wh, wz, -si, -co, 0.32, clamp((0.22 + Math.max(slip, heavyBrake ? 0.45 : 0) * 0.45) * (1 - 0.65 * this.wet), 0, 0.8));
      else st.skid[w].on = false;
      // water thrown up by the tyres in the rain: a rooster tail behind every wheel
      if (this.wet > 0.12 && onAsphalt && car.speed > 16) {
        const nn = st.spray[w] + dt * (14 + car.speed * 0.5) * this.wet * (w >= 2 ? 1 : 0.55);
        let kk = Math.floor(nn);
        st.spray[w] = nn - kk;
        while (kk-- > 0) {
          const sp = 0.8 + R() * 0.2;
          this.spray.emit(wx + (R() - 0.5) * 0.4, wh + 0.12, wz + (R() - 0.5) * 0.4, -car.u * co * 0.12 + (R() - 0.5) * 2, 0.9 + R() * 1.8, car.u * si * 0.12 + (R() - 0.5) * 2, 0.5 + R() * 0.5, 1.6 + car.speed * 0.012, (0.11 + 0.07 * this.wet) * Math.min(1, car.speed / 45), 0.55 + R() * 0.55, sp * 0.92, sp * 0.96, sp);
        }
      }
      // smoke
      if (onAsphalt && slip > 0.18 && car.speed > 5) {
        const n = st.smoke[w] + dt * (30 + slip * 70);
        let k = Math.floor(n);
        st.smoke[w] = n - k;
        while (k-- > 0) {
          const g = 0.82 + R() * 0.12;
          this.smoke.emit(wx + (R() - 0.5) * 0.3, wh + 0.12, wz + (R() - 0.5) * 0.3, (R() - 0.5) * 1.2, 0.8 + R() * 1.2, (R() - 0.5) * 1.2, 1.1 + R() * 0.8, 3.4, 0.35 * Math.min(1, slip), 0.9 + R() * 0.8, g, g, g);
        }
      }
      // dust / grass / gravel
      if ((sf === SURF.GRASS || sf === SURF.GRAVEL) && car.speed > 8) {
        const n = st.dust[w] + dt * (12 + car.speed * 0.8);
        let k = Math.floor(n);
        st.dust[w] = n - k;
        const col = sf === SURF.GRAVEL ? DUST_GRAVEL : DUST_GRASS;
        while (k-- > 0) {
          this.dust.emit(wx, wh + 0.15, wz, -car.u * co * 0.2 + (R() - 0.5) * 3, 1.5 + R() * 3.5, car.u * si * 0.2 + (R() - 0.5) * 3, 0.7 + R() * 0.8, 2.2, 0.55, 0.7 + R() * 0.7, col[0], col[1], col[2]);
        }
      }
    }
    // floor sparks at high speed over kerbs / when running very low (about 30 bursts a second whatever the frame rate)
    if (car.kerbShake > 0.5 && car.speed > 55) {
      st.spark += dt * 30;
      let k = Math.floor(st.spark);
      st.spark -= k;
      while (k-- > 0) this.spark(car.x, car.trackH + 0.08, -car.y, 3, 6, car);
    } else st.spark = 0;
  }

  spark(x, y, z, speedMin, speedMax, car) {
    const R = this.rnd;
    const co = car ? Math.cos(car.theta) : 1, si = car ? Math.sin(car.theta) : 0;
    for (let k = 0; k < 4; k++) {
      const v = speedMin + R() * (speedMax - speedMin);
      const ang = (R() - 0.5) * 1.6;
      this.sparks.emit(x - co * 1.4, y, z + si * 1.4, -co * (v + 10) * 0.6 + Math.cos(ang) * v * 0.3, 1 + R() * 3, si * (v + 10) * 0.6 + Math.sin(ang) * v, 0.28 + R() * 0.2, -0.4, 1.0, 0.25 + R() * 0.45, 1, 0.75 + R() * 0.2, 0.35);
    }
  }

  burst(x, y, z, count = 40, power = 12) {
    const R = this.rnd;
    for (let k = 0; k < count; k++) {
      const a = R() * 6.28, up = 1 + R() * power * 0.5, v = R() * power;
      this.sparks.emit(x, y + 0.3, z, Math.cos(a) * v, up, Math.sin(a) * v, 0.3 + R() * 0.25, -0.3, 1, 0.3 + R() * 0.7, 1, 0.6 + R() * 0.3, 0.2);
    }
    for (let k = 0; k < 10; k++) this.smoke.emit(x, y + 0.4, z, (R() - 0.5) * 4, 1 + R() * 2, (R() - 0.5) * 4, 1.5, 4, 0.4, 1.5, 0.6, 0.6, 0.6);
  }

  update(dt, viewportScale) {
    this.smoke.update(dt, viewportScale);
    this.dust.update(dt, viewportScale);
    this.sparks.update(dt, viewportScale);
    this.spray.update(dt, viewportScale);
    this.skid.flush();
  }
}
