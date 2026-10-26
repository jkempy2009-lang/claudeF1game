import * as THREE from 'three';

/**
 * Screen-space motion blur: a radial blur that starts at the screen edges and strengthens with speed.
 * Below a small strength the scene renders straight to the screen (no render target, no cost).
 */
export class PostFX {
  constructor(renderer) {
    this.renderer = renderer;
    this.enabled = true;
    this.rt = null;
    this.strength = 0;
    this.scene = new THREE.Scene();
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, strength: { value: 0 }, aspect: { value: 1 }, center: { value: new THREE.Vector2(0.5, 0.46) } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: `
        uniform sampler2D tDiffuse; uniform float strength; uniform float aspect; uniform vec2 center;
        varying vec2 vUv;
        void main() {
          vec2 d = vUv - center;
          float r = length(d * vec2(aspect, 1.0));
          float m = smoothstep(0.16, 0.8, r) * strength;
          vec4 col = vec4(0.0);
          const int N = 12;
          for (int i = 0; i < N; i++) {
            float t = float(i) / float(N - 1);
            col += texture2D(tDiffuse, center + d * (1.0 - m * 0.16 * t));
          }
          col /= float(N);
          gl_FragColor = vec4(col.rgb, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.mat);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
  }

  ensureTarget() {
    const size = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    if (this.rt && this.rt.width === size.x && this.rt.height === size.y) return;
    if (this.rt) this.rt.dispose();
    this.rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4, depthBuffer: true });
    this.mat.uniforms.aspect.value = size.x / size.y;
  }

  /** Renders `scene` with the given blur strength (0..1). */
  render(scene, camera, strength) {
    const r = this.renderer;
    this.strength += (strength - this.strength) * 0.25;
    if (!this.enabled || this.strength < 0.03) {
      if (this.strength < 0.03) this.strength = Math.max(0, this.strength);
      r.render(scene, camera);
      return;
    }
    this.ensureTarget();
    r.setRenderTarget(this.rt);
    r.render(scene, camera);
    r.setRenderTarget(null);
    this.mat.uniforms.tDiffuse.value = this.rt.texture;
    this.mat.uniforms.strength.value = this.strength;
    r.render(this.scene, this.cam);
  }

  dispose() {
    if (this.rt) this.rt.dispose();
    this.mat.dispose();
    this.quad.geometry.dispose();
  }
}
