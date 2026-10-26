import { clamp } from '../util/math.js';

/** Procedural audio: a V6-hybrid-ish engine synth for the player, simple voices for nearby cars, wind, tyres, kerbs, UI. */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.55;
    this.voices = [];
    this.started = false;
    this.lastGear = 1;
  }

  start() {
    if (this.started) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    const ctx = this.ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.enabled ? this.volume : 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 6;
    this.master.connect(comp);
    comp.connect(ctx.destination);

    // shared noise buffer
    const len = ctx.sampleRate * 2;
    const nb = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = nb.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99765 * b0 + w * 0.099046;
      b1 = 0.963 * b1 + w * 0.2965164;
      b2 = 0.57 * b2 + w * 1.0526913;
      d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.2;
    }
    this.noiseBuf = nb;
    const noise = (loop = true) => {
      const s = ctx.createBufferSource();
      s.buffer = nb;
      s.loop = loop;
      return s;
    };
    this.makeNoise = noise;

    // ---- player engine
    const eng = ctx.createGain();
    eng.gain.value = 0;
    const shaper = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const x = (i / 512) - 1;
      curve[i] = Math.tanh(x * 1.3) * 0.9;
    }
    shaper.curve = curve;
    this.engFilter = ctx.createBiquadFilter();
    this.engFilter.type = 'lowpass';
    this.engFilter.Q.value = 0.6;
    const bp = ctx.createBiquadFilter();
    bp.type = 'peaking';
    bp.frequency.value = 700;
    bp.gain.value = 3;
    this.oscs = [
      { o: ctx.createOscillator(), g: ctx.createGain(), mult: 1.5, w: 'triangle', a: 0.5 },
      { o: ctx.createOscillator(), g: ctx.createGain(), mult: 3, w: 'sawtooth', a: 0.2 },
      { o: ctx.createOscillator(), g: ctx.createGain(), mult: 6, w: 'triangle', a: 0.08 },
    ];
    for (const v of this.oscs) {
      v.o.type = v.w;
      v.g.gain.value = v.a;
      v.o.connect(v.g);
      v.g.connect(shaper);
      v.o.start();
    }
    shaper.connect(this.engFilter);
    this.engFilter.connect(bp);
    bp.connect(eng);
    // intake / turbo whistle noise
    const nz = noise();
    const nzf = ctx.createBiquadFilter();
    nzf.type = 'bandpass';
    nzf.frequency.value = 1200;
    nzf.Q.value = 0.5;
    this.nzGain = ctx.createGain();
    this.nzGain.gain.value = 0;
    nz.connect(nzf);
    nzf.connect(this.nzGain);
    this.nzGain.connect(eng);
    nz.start();
    this.nzf = nzf;
    eng.connect(this.master);
    this.eng = eng;

    // ---- wind
    const wn = noise();
    const wf = ctx.createBiquadFilter();
    wf.type = 'lowpass';
    wf.frequency.value = 900;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    wn.connect(wf);
    wf.connect(this.windGain);
    this.windGain.connect(this.master);
    wn.start();
    this.windFilter = wf;

    // ---- tyre squeal
    const tn = noise();
    const tf = ctx.createBiquadFilter();
    tf.type = 'bandpass';
    tf.frequency.value = 1000;
    tf.Q.value = 2.5;
    this.tyreGain = ctx.createGain();
    this.tyreGain.gain.value = 0;
    tn.connect(tf);
    tf.connect(this.tyreGain);
    this.tyreGain.connect(this.master);
    tn.start();
    this.tyreFilter = tf;

    // ---- kerb / gravel rumble
    const kn = noise();
    const kf = ctx.createBiquadFilter();
    kf.type = 'lowpass';
    kf.frequency.value = 180;
    this.rumbleGain = ctx.createGain();
    this.rumbleGain.gain.value = 0;
    kn.connect(kf);
    kf.connect(this.rumbleGain);
    this.rumbleGain.connect(this.master);
    kn.start();
    this.rumbleFilter = kf;

    // ---- crowd / ambience bed
    const cn = noise();
    const cf = ctx.createBiquadFilter();
    cf.type = 'bandpass';
    cf.frequency.value = 700;
    cf.Q.value = 0.4;
    const cg = ctx.createGain();
    cg.gain.value = 0.05;
    cn.connect(cf);
    cf.connect(cg);
    cg.connect(this.master);
    cn.start();

    // ---- other cars
    this.voices = [];
    for (let i = 0; i < 6; i++) {
      const o1 = ctx.createOscillator(), o2 = ctx.createOscillator();
      o1.type = 'triangle';
      o2.type = 'triangle';
      const g = ctx.createGain();
      g.gain.value = 0;
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 600;
      const pan = ctx.createStereoPanner();
      o1.connect(f);
      o2.connect(f);
      f.connect(g);
      g.connect(pan);
      pan.connect(this.master);
      o1.start();
      o2.start();
      this.voices.push({ o1, o2, g, f, pan, car: null });
    }
    this.started = true;
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  setEnabled(on) {
    this.enabled = on;
    if (this.master) this.master.gain.setTargetAtTime(on ? this.volume : 0, this.ctx.currentTime, 0.05);
  }

  setVolume(v) {
    this.volume = v;
    if (this.master && this.enabled) this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
  }

  /** Per-frame update from the player's car + the list of other cars (with listener pose). */
  update(player, others, listener, dt, paused) {
    if (!this.started) return;
    const t = this.ctx.currentTime;
    const set = (param, v, tc = 0.03) => param.setTargetAtTime(v, t, tc);
    if (paused) {
      set(this.eng.gain, 0, 0.1);
      set(this.windGain.gain, 0, 0.1);
      set(this.tyreGain.gain, 0, 0.1);
      set(this.rumbleGain.gain, 0, 0.1);
      for (const v of this.voices) set(v.g.gain, 0, 0.1);
      return;
    }
    const rpm = player.rpm;
    const fc = rpm / 60;
    const thr = player.throttle;
    const load = 0.25 + 0.75 * thr;
    for (const v of this.oscs) set(v.o.frequency, fc * v.mult, 0.02);
    set(this.engFilter.frequency, 240 + rpm * 0.13 + thr * 320, 0.08);
    set(this.eng.gain, (0.12 + 0.2 * load) * (0.65 + rpm / 40000), 0.08);
    set(this.nzGain.gain, 0.015 + thr * 0.03 * (rpm / 15000), 0.08);
    set(this.nzf.frequency, 900 + rpm * 0.08, 0.1);
    const V = player.speed;
    set(this.windGain.gain, clamp((V / 95) ** 2 * 0.22, 0, 0.25), 0.15);
    set(this.windFilter.frequency, 250 + V * 5, 0.15);
    let slip = 0;
    for (let w = 0; w < 4; w++) slip = Math.max(slip, player.slipVis[w]);
    set(this.tyreGain.gain, clamp(slip * 0.16, 0, 0.14), 0.08);
    set(this.tyreFilter.frequency, 800 + 300 * clamp(V / 60, 0, 1) + slip * 200, 0.1);
    const rumble = player.kerbShake * 0.22 + (player.onGrass ? clamp(V / 60, 0, 1) * 0.2 : 0);
    set(this.rumbleGain.gain, rumble, 0.04);
    set(this.rumbleFilter.frequency, 90 + V * 2.5, 0.1);
    // gear change thump
    if (player.gear !== this.lastGear) {
      this.lastGear = player.gear;
      this.blip(110, 0.08, 0.035, 'sine');
    }
    // other cars: nearest 6 audible
    const lp = listener.pos, lr = listener.right, lv = listener.vel;
    const list = others
      .map((c) => {
        const dx = c.wx - lp.x, dz = c.wz - lp.z;
        return { c, d2: dx * dx + dz * dz, dx, dz };
      })
      .sort((a, b) => a.d2 - b.d2)
      .slice(0, this.voices.length);
    this.voices.forEach((v, i) => {
      const e = list[i];
      if (!e || e.d2 > 250 * 250) {
        set(v.g.gain, 0, 0.1);
        return;
      }
      const car = e.c.car;
      const d = Math.sqrt(e.d2) + 1;
      const rv = (car.u * (e.dx * Math.cos(car.theta) - e.dz * Math.sin(car.theta) * 0) + 0) * 0;
      // radial speed for Doppler (approx): relative velocity along the line of sight
      const vx = e.c.vx - lv.x, vz = e.c.vz - lv.z;
      const radial = (vx * e.dx + vz * e.dz) / d;
      const dop = 1 / (1 + clamp(radial, -90, 90) / 340);
      const f = (car.rpm / 60) * 3 * dop;
      set(v.o1.frequency, f, 0.04);
      set(v.o2.frequency, f * 0.5, 0.04);
      set(v.f.frequency, 220 + car.rpm * 0.09, 0.1);
      const att = 1 / (1 + (d / 18) ** 1.6);
      set(v.g.gain, 0.07 * att * (0.4 + 0.6 * car.throttle), 0.08);
      set(v.pan.pan, clamp((e.dx * lr.x + e.dz * lr.z) / d, -1, 1), 0.05);
    });
  }

  blip(freq, dur = 0.1, gain = 0.1, type = 'sine', slide = 0) {
    if (!this.started) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + dur);
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  thud(strength = 1) {
    if (!this.started) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this.makeNoise(false);
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 500 + 900 * strength;
    const g = ctx.createGain();
    g.gain.setValueAtTime(clamp(0.35 + strength * 0.5, 0, 1), t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.35 + 0.3 * strength);
    s.connect(f);
    f.connect(g);
    g.connect(this.master);
    s.start(t, Math.random());
    s.stop(t + 0.8);
    this.blip(90, 0.25, 0.3 * strength, 'sine', -50);
  }

  light(n) {
    this.blip(n >= 5 ? 880 : 660, 0.18, 0.12, 'sine');
  }

  /** Crowd roar swelling and fading over a few seconds. */
  cheer(strength = 1) {
    if (!this.started) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const n = this.makeNoise(false);
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.setValueAtTime(700, t);
    f.frequency.linearRampToValueAtTime(1500, t + 1.2);
    f.Q.value = 0.5;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.35 * strength, t + 0.9);
    g.gain.exponentialRampToValueAtTime(0.0008, t + 4.5);
    n.connect(f);
    f.connect(g);
    g.connect(this.master);
    n.start(t, Math.random());
    n.stop(t + 4.6);
  }

  fanfare() {
    [[523.25, 0], [659.25, 0.16], [783.99, 0.32], [1046.5, 0.5]].forEach(([f, d]) => setTimeout(() => this.blip(f, 0.45, 0.08, 'triangle'), d * 1000));
  }

  go() {
    this.blip(1320, 0.45, 0.14, 'sine');
  }

  ui(kind = 'click') {
    if (kind === 'click') this.blip(720, 0.05, 0.05, 'triangle');
    else if (kind === 'good') {
      this.blip(660, 0.1, 0.07, 'triangle');
      setTimeout(() => this.blip(990, 0.14, 0.07, 'triangle'), 90);
    } else if (kind === 'bad') this.blip(180, 0.25, 0.1, 'sawtooth', -60);
    else if (kind === 'radio') this.blip(2200, 0.06, 0.05, 'square');
  }
}
