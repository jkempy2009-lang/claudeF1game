import * as THREE from 'three';

const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

/**
 * Screen-space effects on the HDR scene: a radial motion blur that starts at the screen edges and strengthens with
 * speed, and a bloom (bright-pass, two-pass gaussian at quarter resolution) that makes lights, windows and the hot
 * brake discs glow at dusk and at night. With neither effect active the scene renders straight to the screen
 * (no render target, no cost).
 */
export class PostFX {
  constructor(renderer) {
    this.renderer = renderer;
    this.enabled = true;
    this.rt = null;
    this.strength = 0;
    this.bloomOn = true; // user/quality switch
    this.bloom = 0; // current strength (0..1)
    this.rtA = null;
    this.rtB = null;
    this.scene = new THREE.Scene();
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, tBloom: { value: null }, bloom: { value: 0 }, strength: { value: 0 }, aspect: { value: 1 }, center: { value: new THREE.Vector2(0.5, 0.46) } },
      vertexShader: VERT,
      fragmentShader: `
        uniform sampler2D tDiffuse; uniform sampler2D tBloom; uniform float bloom; uniform float strength; uniform float aspect; uniform vec2 center;
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
          vec3 rgb = col.rgb + texture2D(tBloom, vUv).rgb * bloom;
          gl_FragColor = vec4(rgb, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      depthTest: false,
      depthWrite: false,
    });
    // bloom: bright pass + 2x downsample, then separable gaussian
    this.brightMat = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, texel: { value: new THREE.Vector2(1, 1) } },
      vertexShader: VERT,
      fragmentShader: `
        uniform sampler2D tDiffuse; uniform vec2 texel; varying vec2 vUv;
        vec3 bright(vec3 c) { float l = max(c.r, max(c.g, c.b)); float k = smoothstep(2.0, 3.6, l); return c * k; }
        void main() {
          vec3 c = bright(texture2D(tDiffuse, vUv + texel * vec2(-1.0, -1.0)).rgb) + bright(texture2D(tDiffuse, vUv + texel * vec2(1.0, -1.0)).rgb)
                 + bright(texture2D(tDiffuse, vUv + texel * vec2(-1.0, 1.0)).rgb) + bright(texture2D(tDiffuse, vUv + texel * vec2(1.0, 1.0)).rgb);
          gl_FragColor = vec4(min(c * 0.25, vec3(8.0)), 1.0);
        }`,
      depthTest: false, depthWrite: false,
    });
    this.blurMat = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, dir: { value: new THREE.Vector2(1, 0) } },
      vertexShader: VERT,
      fragmentShader: `
        uniform sampler2D tDiffuse; uniform vec2 dir; varying vec2 vUv;
        void main() {
          vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270270;
          c += (texture2D(tDiffuse, vUv + dir * 1.3846153846).rgb + texture2D(tDiffuse, vUv - dir * 1.3846153846).rgb) * 0.3162162162;
          c += (texture2D(tDiffuse, vUv + dir * 3.2307692308).rgb + texture2D(tDiffuse, vUv - dir * 3.2307692308).rgb) * 0.0702702703;
          gl_FragColor = vec4(c, 1.0);
        }`,
      depthTest: false, depthWrite: false,
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
    if (this.rtA) { this.rtA.dispose(); this.rtB.dispose(); }
    const bw = Math.max(2, Math.round(size.x / 4)), bh = Math.max(2, Math.round(size.y / 4));
    const opt = { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
    this.rtA = new THREE.WebGLRenderTarget(bw, bh, opt);
    this.rtB = new THREE.WebGLRenderTarget(bw, bh, opt);
  }

  /** One full-screen pass of `mat` into `target` (null = the screen). */
  pass(mat, target) {
    this.quad.material = mat;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.scene, this.cam);
    this.quad.material = this.mat;
  }

  /** Renders `scene` with the given motion-blur strength and bloom strength (both 0..1). */
  render(scene, camera, strength, bloom = 0) {
    const r = this.renderer;
    this.strength += (strength - this.strength) * 0.25;
    this.bloom += ((this.bloomOn ? bloom : 0) - this.bloom) * 0.1;
    const doBlur = this.enabled && this.strength >= 0.03;
    const doBloom = this.enabled && this.bloom >= 0.02;
    if (!doBlur && !doBloom) {
      r.render(scene, camera);
      return;
    }
    this.ensureTarget();
    r.setRenderTarget(this.rt);
    r.render(scene, camera);
    if (doBloom) {
      const bw = this.rtA.width, bh = this.rtA.height;
      this.brightMat.uniforms.tDiffuse.value = this.rt.texture;
      this.brightMat.uniforms.texel.value.set(1 / this.rt.width, 1 / this.rt.height);
      this.pass(this.brightMat, this.rtA);
      this.blurMat.uniforms.tDiffuse.value = this.rtA.texture;
      this.blurMat.uniforms.dir.value.set(1 / bw, 0);
      this.pass(this.blurMat, this.rtB);
      this.blurMat.uniforms.tDiffuse.value = this.rtB.texture;
      this.blurMat.uniforms.dir.value.set(0, 1 / bh);
      this.pass(this.blurMat, this.rtA);
      // a second, wider round
      this.blurMat.uniforms.tDiffuse.value = this.rtA.texture;
      this.blurMat.uniforms.dir.value.set(2 / bw, 0);
      this.pass(this.blurMat, this.rtB);
      this.blurMat.uniforms.tDiffuse.value = this.rtB.texture;
      this.blurMat.uniforms.dir.value.set(0, 2 / bh);
      this.pass(this.blurMat, this.rtA);
      this.mat.uniforms.tBloom.value = this.rtA.texture;
    }
    r.setRenderTarget(null);
    this.mat.uniforms.tDiffuse.value = this.rt.texture;
    this.mat.uniforms.strength.value = doBlur ? this.strength : 0;
    this.mat.uniforms.bloom.value = doBloom ? this.bloom : 0;
    if (!doBloom) this.mat.uniforms.tBloom.value = this.rt.texture;
    r.render(this.scene, this.cam);
  }

  dispose() {
    if (this.rt) this.rt.dispose();
    if (this.rtA) { this.rtA.dispose(); this.rtB.dispose(); }
    this.brightMat.dispose();
    this.blurMat.dispose();
    this.mat.dispose();
    this.quad.geometry.dispose();
  }
}
