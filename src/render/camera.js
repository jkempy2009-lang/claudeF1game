import * as THREE from 'three';
import { clamp, lerp, wrapAngle } from '../util/math.js';

export const CAMERA_MODES = ['chase', 'close', 'cockpit', 'tcam', 'heli', 'tv'];
export const CAMERA_NAMES = { chase: 'Chase', close: 'Low chase', cockpit: 'Cockpit', tcam: 'T-cam', heli: 'Helicopter', tv: 'TV broadcast' };

const up = new THREE.Vector3(0, 1, 0);
const qTmp = new THREE.Quaternion();
const qY = new THREE.Quaternion().setFromAxisAngle(up, -Math.PI / 2);
const v1 = new THREE.Vector3(), v2 = new THREE.Vector3(), v3 = new THREE.Vector3();

export class CameraRig {
  constructor(camera) {
    this.camera = camera;
    this.mode = 'chase';
    this.yaw = 0;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.shake = 0;
    this.lookBack = false;
    this.tvIndex = -1;
    this.tvPoints = null;
    this.fov = 62;
    this.time = 0;
    this.init = false;
    this.impact = 0;
  }

  next() {
    this.setMode(CAMERA_MODES[(CAMERA_MODES.indexOf(this.mode) + 1) % CAMERA_MODES.length]);
    return this.mode;
  }

  setMode(m) {
    this.mode = m;
    this.init = false;
  }

  buildTv(track) {
    // trackside camera positions every ~320 m, alternating sides, set back a little
    const pts = [];
    const n = Math.max(6, Math.round(track.length / 320));
    const pt = {};
    for (let k = 0; k < n; k++) {
      const s = (k / n) * track.length;
      const side = k % 2 ? 1 : -1;
      const i = track.idx(s);
      const street = track.def.runoff && track.def.runoff.mode === 'street';
      track.pointAt(s, side * (track.wallDist(i, side) + (street ? 2.2 : 5 + (k % 3) * 3)), pt);
      pts.push(new THREE.Vector3(pt.x, pt.h + (street ? 6 + (k % 3) * 1.5 : 4.5 + (k % 3) * 2), -pt.y));
    }
    this.tvPoints = pts;
  }

  /** target: CarView; car: physics car. */
  update(dt, view, car, track) {
    this.time += dt;
    const cam = this.camera;
    const g = view.group;
    const speed = car.speed;
    const th = g.rotation.y;
    const fwd = v1.set(Math.cos(th), 0, -Math.sin(th));
    const carPos = g.position;
    const beta = clamp(Math.atan2(car.v, Math.max(Math.abs(car.u), 8)), -0.5, 0.5);
    let fovTarget = 62 + clamp(speed * 0.1, 0, 14);
    view.helmet.visible = this.mode !== 'cockpit' && this.mode !== 'tcam';

    if (this.mode === 'chase' || this.mode === 'close' || this.mode === 'heli') {
      const yawT = th - beta * 0.35 + (this.lookBack ? Math.PI : 0);
      if (!this.init) this.yaw = yawT;
      this.yaw += wrapAngle(yawT - this.yaw) * (1 - Math.exp(-dt * (this.mode === 'heli' ? 3 : 7)));
      const dist = this.mode === 'close' ? 5.2 + speed * 0.012 : this.mode === 'heli' ? 18 : 7.4 + speed * 0.022;
      const h = this.mode === 'close' ? 1.35 : this.mode === 'heli' ? 42 : 2.1 + speed * 0.004;
      const dir = v2.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
      const want = v3.copy(carPos).addScaledVector(dir, -dist).setY(carPos.y + h);
      if (!this.init) this.pos.copy(want);
      const k = 1 - Math.exp(-dt * (this.mode === 'heli' ? 4 : 14));
      this.pos.lerp(want, k);
      cam.position.copy(this.pos);
      const lookAt = v3.copy(carPos).addScaledVector(dir, this.mode === 'heli' ? 4 : 5).setY(carPos.y + (this.mode === 'close' ? 0.9 : 1.1));
      cam.lookAt(lookAt);
      if (this.mode === 'heli') fovTarget = 52;
    } else if (this.mode === 'cockpit' || this.mode === 'tcam') {
      const local = this.mode === 'cockpit' ? v2.set(0.12, 1.0, 0) : v2.set(-0.25, 1.38, 0);
      view.model.updateWorldMatrix(true, false);
      view.model.localToWorld(local);
      cam.position.copy(local);
      view.model.getWorldQuaternion(qTmp);
      qTmp.multiply(qY);
      if (this.lookBack) qTmp.multiply(new THREE.Quaternion().setFromAxisAngle(up, Math.PI));
      cam.quaternion.copy(qTmp);
      fovTarget = this.mode === 'cockpit' ? 76 + clamp(speed * 0.05, 0, 8) : 74;
    } else if (this.mode === 'tv') {
      if (!this.tvPoints) this.buildTv(track);
      // pick the nearest camera that's ahead of the car, keep until the car passes it
      let best = this.tvIndex, bd = Infinity;
      if (best >= 0) {
        const d = this.tvPoints[best].distanceTo(carPos);
        const ahead = v2.copy(this.tvPoints[best]).sub(carPos).dot(fwd);
        if (d > 280 || (ahead < -25 && d > 40)) best = -1;
      }
      if (best < 0) {
        this.tvPoints.forEach((p, i) => {
          const d = p.distanceTo(carPos);
          const ahead = v2.copy(p).sub(carPos).dot(fwd);
          if (ahead > 15 && d < bd && d > 30) {
            bd = d;
            best = i;
          }
        });
        if (best < 0) best = 0;
      }
      this.tvIndex = best;
      cam.position.copy(this.tvPoints[best]);
      const target = v3.copy(carPos).addScaledVector(fwd, speed * 0.05).setY(carPos.y + 0.8);
      cam.lookAt(target);
      const d = this.tvPoints[best].distanceTo(carPos);
      fovTarget = clamp(2 * Math.atan(10 / Math.max(d, 15)) * (180 / Math.PI), 8, 55);
    }
    this.init = true;

    // vibration: kerbs, speed, impacts
    const sh = (car.kerbShake * 0.03 + clamp(speed / 100, 0, 1) * 0.004 + this.impact * 0.25);
    this.impact *= Math.exp(-dt * 6);
    if (sh > 0.001 && this.mode !== 'tv') {
      const t = this.time * 53;
      cam.position.x += Math.sin(t * 1.3) * sh;
      cam.position.y += Math.sin(t * 1.9 + 1) * sh;
      cam.position.z += Math.cos(t * 1.1) * sh;
    }
    this.fov = lerp(this.fov, fovTarget, 1 - Math.exp(-dt * 4));
    if (Math.abs(cam.fov - this.fov) > 0.01) {
      cam.fov = this.fov;
      cam.updateProjectionMatrix();
    }
  }
}
