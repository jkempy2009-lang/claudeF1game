import * as THREE from 'three';

/**
 * Rain streaks in a box around the camera, animated entirely in the vertex shader (no per-frame JS work per drop).
 * Drops are anchored to the world and wrap around the camera so the camera's motion gives believable parallax.
 */
export class Rain {
  constructor(count = 4200) {
    const pos = new Float32Array(count * 2 * 3);
    const seed = new Float32Array(count * 2);
    const end = new Float32Array(count * 2);
    let r = 12345;
    const rnd = () => ((r = (r * 1664525 + 1013904223) >>> 0) / 4294967296);
    for (let i = 0; i < count; i++) {
      const x = rnd() * 80, y = rnd() * 32, z = rnd() * 80, sd = rnd();
      for (let k = 0; k < 2; k++) {
        const o = (i * 2 + k) * 3;
        pos[o] = x; pos[o + 1] = y; pos[o + 2] = z;
        seed[i * 2 + k] = sd;
        end[i * 2 + k] = k;
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    g.setAttribute('aEnd', new THREE.BufferAttribute(end, 1));
    this.mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { time: { value: 0 }, cam: { value: new THREE.Vector3() }, intensity: { value: 0 }, wind: { value: new THREE.Vector2(0.18, 0.05) }, tint: { value: new THREE.Color(0.78, 0.84, 0.92) } },
      vertexShader: `
        attribute float aSeed; attribute float aEnd;
        uniform float time; uniform vec3 cam; uniform float intensity; uniform vec2 wind;
        varying float vA;
        void main() {
          float speed = 24.0 + aSeed * 14.0;
          vec3 p = position;
          float y = mod(p.y - time * speed, 32.0);
          vec3 w = vec3(mod(p.x - cam.x + 40.0, 80.0) - 40.0, y - 6.0, mod(p.z - cam.z + 40.0, 80.0) - 40.0);
          w.xz += wind * y * 0.6;
          vec3 world = vec3(cam.x + w.x, cam.y + w.y, cam.z + w.z);
          vec3 dir = normalize(vec3(wind.x * 0.6, -1.0, wind.y * 0.6));
          world -= dir * aEnd * (0.5 + aSeed * 0.5);
          vA = (1.0 - aEnd * 0.8) * step(aSeed, intensity) * smoothstep(0.0, 4.0, 32.0 - y) * 0.5;
          gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
        }`,
      fragmentShader: 'uniform vec3 tint; varying float vA; void main(){ if (vA < 0.01) discard; gl_FragColor = vec4(tint, vA); }',
    });
    this.mesh = new THREE.LineSegments(g, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 8;
    this.mesh.visible = false;
  }

  update(dt, camPos, intensity) {
    this.mesh.visible = intensity > 0.03;
    if (!this.mesh.visible) return;
    this.mat.uniforms.time.value += dt;
    this.mat.uniforms.cam.value.copy(camPos);
    this.mat.uniforms.intensity.value = intensity;
  }

  dispose() {
    this.mesh.geometry.dispose();
    this.mat.dispose();
  }
}
