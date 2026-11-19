import { clamp } from '../util/math.js';
import { EngineVoice, DistantEngineVoice } from './audio/engineVoice.js';
import { Ambience } from './audio/ambience.js';

/** Procedural audio: a V6-hybrid-ish engine synth for the player, simple voices for nearby cars, wind, tyres, kerbs, UI. */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.55;
    this.voices = [];
    this.started = false;
    this.lastGear = 1;
    this.prevThr = 0;
    this.weather = { rain: 0, wet: 0 };
    this.engineSound = 'classic'; // 'v6': the newer synth in audio/engineVoice.js (player and the cars nearby)
    this.onboard = false;
    this.v6 = null;
    this.v6state = { rpm: 5000, throttle: 0, load: 0, gear: 1, speed: 0, ersDeploy: 0, ersHarvest: 0, limiter: false, pitLimiter: false, onboard: false, volume: 1 };
    this.dvState = { rpm: 8000, throttle: 0, distance: 50, closingSpeed: 0, pan: 0, volume: 1 };
  }

  /** Which engine synth to use: 'classic' (the original) or 'v6' (audio/engineVoice.js). Takes effect at once. */
  setEngineSound(mode) {
    this.engineSound = mode === 'v6' ? 'v6' : 'classic';
    if (this.started) this._applyEngineSound();
  }

  _applyEngineSound() {
    const want = this.engineSound === 'v6';
    if (want && !this.v6) {
      this.v6 = new EngineVoice(this.ctx, this.master);
      this.dv = this.voices.map(() => new DistantEngineVoice(this.ctx, this.master));
    } else if (!want && this.v6) {
      this.v6.dispose();
      for (const d of this.dv) d.dispose();
      this.v6 = null;
      this.dv = null;
    }
  }

  start() {
    if (this.started || this.failed) return;
    try {
      this._build();
    } catch (e) {
      // an old or restricted browser: the game runs silently rather than throwing on every race start
      console.warn('audio unavailable', e);
      this.failed = true;
      this.started = false;
      this.master = null;
      try { if (this.ctx) this.ctx.close(); } catch { /* already gone */ }
      this.ctx = null;
    }
  }

  _build() {
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
    // firing pulses (SPEC 8.1): a V6 fires three times a revolution; an audio-rate modulator on the engine's level at that rate
    // adds the side bands that make it sound like a combustion engine and not an organ (lumpier at low revs)
    this.pulse = ctx.createGain();
    this.pulse.gain.value = 1;
    this.fire = ctx.createOscillator();
    this.fire.type = 'sine';
    this.fireDepth = ctx.createGain();
    this.fireDepth.gain.value = 0.3;
    this.fire.connect(this.fireDepth);
    this.fireDepth.connect(this.pulse.gain);
    this.fire.start();
    bp.connect(this.pulse);
    this.pulse.connect(eng);
    // overrun (SPEC 8.1): off the throttle the exhaust resonates in a low band that sweeps with the revs
    this.overF = ctx.createBiquadFilter();
    this.overF.type = 'lowpass';
    this.overF.Q.value = 9;
    this.overF.frequency.value = 220;
    this.overGain = ctx.createGain();
    this.overGain.gain.value = 0;
    shaper.connect(this.overF);
    this.overF.connect(this.overGain);
    this.overGain.connect(eng);
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

    // ---- transmission whine: straight-cut gears sing with the shaft speed, loudest under load
    const gw = ctx.createOscillator(), gw2 = ctx.createOscillator();
    gw.type = 'sawtooth';
    gw2.type = 'triangle';
    const gwf = ctx.createBiquadFilter();
    gwf.type = 'bandpass';
    gwf.frequency.value = 1800;
    gwf.Q.value = 4;
    this.whineGain = ctx.createGain();
    this.whineGain.gain.value = 0;
    gw.connect(gwf);
    gw2.connect(gwf);
    gwf.connect(this.whineGain);
    this.whineGain.connect(this.master);
    gw.start();
    gw2.start();
    this.whine = [gw, gw2, gwf];
    // ---- turbocharger: a whistle that spools up with boost; the wastegate flutters when you lift (see flutter())
    const tb = ctx.createOscillator();
    tb.type = 'sine';
    this.turboGain = ctx.createGain();
    this.turboGain.gain.value = 0;
    tb.connect(this.turboGain);
    this.turboGain.connect(this.master);
    tb.start();
    this.turbo = tb;
    this.spool = 0;
    // ---- floor scrape: the plank on the asphalt at speed
    const scn = noise();
    const scf = ctx.createBiquadFilter();
    scf.type = 'bandpass';
    scf.frequency.value = 3400;
    scf.Q.value = 1.1;
    this.scrapeGain = ctx.createGain();
    this.scrapeGain.gain.value = 0;
    scn.connect(scf);
    scf.connect(this.scrapeGain);
    this.scrapeGain.connect(this.master);
    scn.start();

    // a second, ring-modulated band for the plank: a metallic ring instead of plain hiss (SPEC 4.1)
    const scn2 = noise();
    const scf2 = ctx.createBiquadFilter();
    scf2.type = 'bandpass';
    scf2.frequency.value = 2400;
    scf2.Q.value = 3;
    const ring = ctx.createGain();
    ring.gain.value = 0;
    const ringOsc = ctx.createOscillator();
    ringOsc.frequency.value = 4800;
    ringOsc.connect(ring.gain);
    ringOsc.start();
    scn2.connect(scf2);
    scf2.connect(ring);
    ring.connect(this.scrapeGain);
    scn2.start();

    // ---- carbon brake squeal at walking pace on cold brakes (SPEC 4.1)
    this.squealGain = ctx.createGain();
    this.squealGain.gain.value = 0;
    for (const [f, type] of [[3150, 'sine'], [4720, 'triangle']]) {
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.value = f;
      o.connect(this.squealGain);
      o.start();
    }
    this.squealGain.connect(this.master);

    // ---- buffeting in and out of the tow (SPEC 4.1): low noise, loudest crossing the edge of the wake
    const bn = noise();
    const bf = ctx.createBiquadFilter();
    bf.type = 'bandpass';
    bf.frequency.value = 95;
    bf.Q.value = 1.8;
    this.buffetGain = ctx.createGain();
    this.buffetGain.gain.value = 0;
    bn.connect(bf);
    bf.connect(this.buffetGain);
    this.buffetGain.connect(this.master);
    bn.start();

    // ---- surfaces (SPEC 8.1): the kerb's ridges as a periodic thump, gravel as crackle, grass as a soft brush
    const ko = ctx.createOscillator();
    ko.type = 'sawtooth';
    const kof = ctx.createBiquadFilter();
    kof.type = 'lowpass';
    kof.frequency.value = 160;
    this.kerbOsc = ko;
    this.kerbGain = ctx.createGain();
    this.kerbGain.gain.value = 0;
    ko.connect(kof);
    kof.connect(this.kerbGain);
    this.kerbGain.connect(this.master);
    ko.start();
    const gn = noise();
    const gnf = ctx.createBiquadFilter();
    gnf.type = 'highpass';
    gnf.frequency.value = 1800;
    this.gravelGain = ctx.createGain();
    this.gravelGain.gain.value = 0;
    gn.connect(gnf);
    gnf.connect(this.gravelGain);
    this.gravelGain.connect(this.master);
    gn.start();
    const grn = noise();
    const grf = ctx.createBiquadFilter();
    grf.type = 'lowpass';
    grf.frequency.value = 400;
    this.grassGain = ctx.createGain();
    this.grassGain.gain.value = 0;
    grn.connect(grf);
    grf.connect(this.grassGain);
    this.grassGain.connect(this.master);
    grn.start();

    // ---- radio static under the engineer's messages (SPEC 8.1)
    const rsn = noise();
    const rsb = ctx.createBiquadFilter();
    rsb.type = 'bandpass';
    rsb.frequency.value = 1100;
    rsb.Q.value = 0.45; // about 400-2800 Hz: the telephone band
    this.staticGain = ctx.createGain();
    this.staticGain.gain.value = 0;
    rsn.connect(rsb);
    rsb.connect(this.staticGain);
    this.staticGain.connect(this.master);
    rsn.start();
    this.staticUntil = 0;

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

    // ---- rain on the car and water thrown off the tyres
    const rn = noise();
    const rf = ctx.createBiquadFilter();
    rf.type = 'highpass';
    rf.frequency.value = 2200;
    this.rainGain = ctx.createGain();
    this.rainGain.gain.value = 0;
    rn.connect(rf);
    rf.connect(this.rainGain);
    this.rainGain.connect(this.master);
    rn.start();
    const sn = noise();
    const sf = ctx.createBiquadFilter();
    sf.type = 'bandpass';
    sf.frequency.value = 1700;
    sf.Q.value = 0.7;
    this.sprayGain = ctx.createGain();
    this.sprayGain.gain.value = 0;
    sn.connect(sf);
    sf.connect(this.sprayGain);
    this.sprayGain.connect(this.master);
    sn.start();
    this.sprayFilter = sf;

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
      const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : Object.assign(ctx.createGain(), { pan: { setTargetAtTime() {} } });
      o1.connect(f);
      o2.connect(f);
      f.connect(g);
      g.connect(pan);
      pan.connect(this.master);
      o1.start();
      o2.start();
      this.voices.push({ o1, o2, g, f, pan, car: null, d2: 0 });
    }
    this.started = true;
    this._applyEngineSound();
    this.amb = new Ambience(ctx, this.master);
    this.ambState = { speed: 0, slip: [0, 0, 0, 0], lockup: [0, 0, 0, 0], spin: [0, 0, 0, 0], surface: [0, 0, 0, 0], wet: 0, inPitLane: false, onboard: false };
    this.nGravel = 0;
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
    // a non-finite value (a physics blow-up) must never throw inside the frame loop
    const set = (param, v, tc = 0.03) => { if (Number.isFinite(v)) param.setTargetAtTime(v, t, tc); };
    if (paused) {
      set(this.eng.gain, 0, 0.1);
      set(this.windGain.gain, 0, 0.1);
      set(this.tyreGain.gain, 0, 0.1);
      set(this.rumbleGain.gain, 0, 0.1);
      set(this.rainGain.gain, 0, 0.1);
      set(this.sprayGain.gain, 0, 0.1);
      set(this.whineGain.gain, 0, 0.1);
      set(this.turboGain.gain, 0, 0.1);
      set(this.scrapeGain.gain, 0, 0.1);
      for (const g of [this.squealGain, this.buffetGain, this.kerbGain, this.gravelGain, this.grassGain, this.overGain, this.staticGain]) set(g.gain, 0, 0.1);
      for (const v of this.voices) { set(v.g.gain, 0, 0.1); v.car = null; }
      if (this.amb) { this.ambState.speed = 0; this.ambState.inPitLane = false; this.amb.update(this.ambState, dt); }
      if (this.v6) {
        this.v6.update({ ...this.v6state, rpm: player.rpm, throttle: 0, volume: 0 }, dt);
        for (const d of this.dv) d.update({ ...this.dvState, volume: 0 }, dt);
      }
      this.lastGear = player.gear;
      this.prevThr = player.throttle;
      return;
    }
    const rpm = player.rpm;
    const fc = rpm / 60;
    const thr = player.throttle;
    const load = 0.25 + 0.75 * thr;
    const cl = this.v6 ? 0 : 1; // the classic engine layers are silent when the V6 synth plays
    for (const v of this.oscs) set(v.o.frequency, fc * v.mult, 0.02);
    set(this.engFilter.frequency, 240 + rpm * 0.13 + thr * 320, 0.08);
    set(this.eng.gain, cl * (0.12 + 0.2 * load) * (0.65 + rpm / 40000), 0.08);
    set(this.nzGain.gain, cl * (0.015 + thr * 0.03 * (rpm / 15000)), 0.08);
    set(this.fire.frequency, fc * 3, 0.02);
    set(this.fireDepth.gain, 0.42 - 0.3 * clamp((rpm - 4000) / 10000, 0, 1), 0.1);
    const over = thr < 0.12 && rpm > 6000 ? clamp((rpm - 6000) / 7000, 0, 1) : 0;
    set(this.overGain.gain, cl * over * 0.22, 0.06);
    set(this.overF.frequency, 180 + 140 * clamp((rpm - 6000) / 8000, 0, 1), 0.05);
    set(this.nzf.frequency, 900 + rpm * 0.08, 0.1);
    const V = player.speed;
    set(this.windGain.gain, clamp((V / 95) ** 2 * 0.22, 0, 0.25), 0.15);
    set(this.windFilter.frequency, 250 + V * 5, 0.15);
    let slip = 0;
    for (let w = 0; w < 4; w++) slip = Math.max(slip, player.slipVis[w]);
    // the per-wheel tyre voices (audio/ambience.js) carry the squeal; this mono layer is the fallback
    set(this.tyreGain.gain, this.amb ? 0 : clamp(slip * 0.16, 0, 0.14), 0.08);
    if (this.amb) {
      const a = this.ambState;
      a.speed = V; a.wet = this.weather.wet; a.onboard = !!this.onboard; a.inPitLane = !!(player.rs && player.rs.inPitLane);
      for (let w = 0; w < 4; w++) {
        const k = player.kappa ? player.kappa[w] : 0;
        a.slip[w] = player.slipVis[w] || 0;
        a.lockup[w] = k < -0.25 ? clamp((-k - 0.25) / 0.5, 0, 1) : 0;
        a.spin[w] = k > 0.2 ? clamp((k - 0.2) / 0.6, 0, 1) : 0;
        a.surface[w] = player.surf ? player.surf[w] : 0;
      }
      this.amb.update(a, dt);
    }
    set(this.tyreFilter.frequency, 800 + 300 * clamp(V / 60, 0, 1) + slip * 200, 0.1);
    const rumble = player.kerbShake * 0.13 + (player.onGrass ? clamp(V / 60, 0, 1) * 0.12 : 0); // (the surface layers below carry the rest)
    set(this.rumbleGain.gain, rumble, 0.04);
    set(this.rumbleFilter.frequency, 90 + V * 2.5, 0.1);
    // weather: rain on the bodywork, spray from the wheels (louder the faster you go)
    set(this.rainGain.gain, this.weather.rain * 0.05, 0.4);
    set(this.sprayGain.gain, clamp(this.weather.wet * (V / 80) * 0.11, 0, 0.12), 0.2);
    set(this.sprayFilter.frequency, 1200 + V * 12, 0.2);
    // exhaust pops and crackles when the throttle is lifted at high revs; a burble on downshifts
    const lift = this.prevThr > 0.6 && thr < 0.1 && rpm > 8500 && V > 25;
    if (this.v6) { /* the V6 synth makes its own pops */ } else if (lift) this.pops(3 + Math.floor(Math.random() * 5), clamp((rpm - 7000) / 8000, 0.2, 1));
    else if (thr < 0.05 && rpm > 9500 && V > 40 && Math.random() < dt * 3.2) this.pops(1 + Math.floor(Math.random() * 2), clamp((rpm - 8000) / 7000, 0.15, 0.8));
    // gearbox whine (pitched by the shaft speed), turbo spool and wastegate flutter, floor scrape
    const gf = (rpm / 60) * 8.5;
    set(this.whine[0].frequency, gf, 0.03);
    set(this.whine[1].frequency, gf * 1.5, 0.03);
    set(this.whine[2].frequency, clamp(gf * 1.2, 500, 5000), 0.05);
    set(this.whineGain.gain, 0.016 * (0.35 + 0.65 * thr) * clamp(V / 35, 0, 1), 0.06);
    const spoolT = thr * clamp((rpm - 5000) / 7000, 0, 1);
    const wasSpool = this.spool;
    this.spool += (spoolT - this.spool) * Math.min(1, dt * (spoolT > this.spool ? 2.4 : 5));
    set(this.turbo.frequency, 2600 + 6200 * this.spool, 0.05);
    set(this.turboGain.gain, cl * 0.011 * this.spool * this.spool, 0.05);
    if (!this.v6 && this.prevThr > 0.7 && thr < 0.25 && wasSpool > 0.55 && V > 20) this.flutter(wasSpool);
    set(this.scrapeGain.gain, clamp((player.bottoming || 0) * 0.09 * clamp(V / 70, 0, 1), 0, 0.09), 0.03);
    // brake squeal: light braking at walking pace on cold carbon
    const bt = player.brakeTemp ? (player.brakeTemp[0] + player.brakeTemp[1] + player.brakeTemp[2] + player.brakeTemp[3]) / 4 : 500;
    const sq = player.brake > 0.15 && V > 2 && V < 28 && bt < 380 ? 0.025 * player.brake * (1 - V / 28) : 0;
    set(this.squealGain.gain, sq, 0.05);
    // the edge of the tow
    set(this.buffetGain.gain, 0.12 * Math.sin(clamp(player.slipstream || 0, 0, 1) * Math.PI) * clamp(V / 50, 0, 1), 0.08);
    // surfaces under the tyres
    let nK = 0, nG = 0, nGr = 0;
    if (player.surf) for (let w = 0; w < 4; w++) { const sf = player.surf[w]; if (sf === 1) nK++; else if (sf === 3) nG++; else if (sf === 2) nGr++; }
    if (this.amb && nG && !this.nGravel && V > 15) this.amb.trigger('gravelSpray', { intensity: clamp(V / 60, 0.3, 1) });
    this.nGravel = nG;
    set(this.kerbOsc.frequency, 35 + 40 * clamp(V / 70, 0, 1), 0.05);
    set(this.kerbGain.gain, nK ? 0.05 * (nK / 2) * clamp(V / 25, 0, 1) : 0, 0.03);
    set(this.gravelGain.gain, nG ? 0.05 * (nG / 4) * clamp(V / 30, 0.2, 1) : 0, 0.05);
    set(this.grassGain.gain, nGr ? 0.09 * (nGr / 4) * clamp(V / 30, 0.2, 1) : 0, 0.05);
    set(this.staticGain.gain, t < this.staticUntil ? 0.012 : 0, 0.05);
    if (this.v6) {
      const st = this.v6state;
      st.rpm = rpm; st.throttle = thr; st.load = thr < 0.08 ? -1 : thr; st.gear = player.gear; st.speed = V;
      st.ersDeploy = player.boostOn ? 1 : 0; st.ersHarvest = player.harvesting ? 1 : 0;
      st.limiter = thr > 0.8 && rpm > (player.spec ? player.spec.maxRpm : 15000) - 200;
      st.pitLimiter = !!(player.rs && player.rs.inPitLane) && thr > 0.3 && V > 3;
      st.onboard = !!this.onboard; st.volume = 1;
      this.v6.update(st, dt);
    }
    this.prevThr = thr;
    // gear change thump
    if (player.gear !== this.lastGear) {
      if (!this.v6 && player.gear < this.lastGear && thr < 0.3 && rpm > 8000) this.pops(2, 0.7); // downshift burble
      this.lastGear = player.gear;
      this.blip(110, 0.08, 0.035, 'sine');
    }
    // other cars: nearest 6 audible
    const lp = listener.pos, lr = listener.right, lv = listener.vel;
    // each car keeps its voice while it stays among the nearest, so two cars trading places in the pack do not swap pitch and pan
    const nv = this.voices.length, sel = this._sel || (this._sel = []);
    sel.length = 0;
    for (const c of others) {
      const dx = c.wx - lp.x, dz = c.wz - lp.z;
      c.d2 = dx * dx + dz * dz;
      if (c.d2 > 250 * 250) continue;
      if (sel.length < nv) sel.push(c);
      else {
        let far = 0;
        for (let k = 1; k < nv; k++) if (sel[k].d2 > sel[far].d2) far = k;
        if (c.d2 < sel[far].d2) sel[far] = c;
      }
    }
    // (the records are reused frame to frame, so a voice remembers the physics car, not the record)
    for (const v of this.voices) if (v.car && !sel.some((c) => c.car === v.car)) { v.car = null; set(v.g.gain, 0, 0.1); }
    for (const c of sel) {
      if (this.voices.some((v) => v.car === c.car)) continue;
      const free = this.voices.find((v) => !v.car);
      if (free) free.car = c.car;
    }
    for (let k = 0; k < this.voices.length; k++) {
      const v = this.voices[k];
      const e = v.car ? sel.find((c) => c.car === v.car) : null;
      if (!e) {
        v.car = null;
        set(v.g.gain, 0, 0.1);
        if (this.dv) { this.dvState.volume = 0; this.dv[k].update(this.dvState, dt); }
        continue;
      }
      const car = e.car;
      const dx = e.wx - lp.x, dz = e.wz - lp.z;
      const d = Math.sqrt(e.d2) + 1;
      // radial speed for Doppler (approx): relative velocity along the line of sight
      const vx = e.vx - lv.x, vz = e.vz - lv.z;
      const radial = (vx * dx + vz * dz) / d;
      const dop = 1 / (1 + clamp(radial, -90, 90) / 340);
      const f = (car.rpm / 60) * 3 * dop;
      set(v.o1.frequency, f, 0.04);
      set(v.o2.frequency, f * 0.5, 0.04);
      set(v.f.frequency, 220 + car.rpm * 0.09, 0.1);
      if (this.dv) {
        const ds = this.dvState;
        ds.rpm = car.rpm; ds.throttle = car.throttle; ds.distance = d; ds.closingSpeed = -radial; ds.volume = 1;
        ds.pan = clamp((dx * lr.x + dz * lr.z) / d, -1, 1);
        this.dv[k].update(ds, dt);
        set(v.g.gain, 0, 0.05);
        continue;
      }
      const att = 1 / (1 + (d / 18) ** 1.6);
      set(v.g.gain, 0.07 * att * (0.4 + 0.6 * car.throttle), 0.08);
      set(v.pan.pan, clamp((dx * lr.x + dz * lr.z) / d, -1, 1), 0.05);
    }
  }

  /** A run of short, sharp exhaust bangs: `n` pops, `strength` 0..1. */
  pops(n, strength = 0.6) {
    if (!this.started || !this.enabled) return;
    const ctx = this.ctx;
    let at = 0;
    for (let k = 0; k < n; k++) {
      at += 0.03 + Math.random() * 0.09;
      const t = ctx.currentTime + at;
      const s = this.makeNoise(false);
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.value = 500 + Math.random() * 1400;
      f.Q.value = 0.9;
      const g = ctx.createGain();
      const a = (0.1 + 0.16 * strength) * (0.5 + Math.random() * 0.6);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(a, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0005, t + 0.05 + Math.random() * 0.05);
      s.connect(f);
      f.connect(g);
      g.connect(this.master);
      s.start(t, Math.random());
      s.stop(t + 0.14);
      const o = ctx.createOscillator(), og = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(140, t);
      o.frequency.exponentialRampToValueAtTime(55, t + 0.06);
      og.gain.setValueAtTime(0.0001, t);
      og.gain.linearRampToValueAtTime(a * 0.8, t + 0.004);
      og.gain.exponentialRampToValueAtTime(0.0005, t + 0.08);
      o.connect(og);
      og.connect(this.master);
      o.start(t);
      o.stop(t + 0.1);
    }
  }

  /** delay: seconds from now, on the audio clock (so a busy frame cannot bunch up an arpeggio). */
  /** Wastegate / compressor flutter on a throttle lift: a short stuttering burst of rushing air. */
  flutter(strength = 1) {
    if (!this.started || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this.makeNoise(true);
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = 2100;
    f.Q.value = 1.6;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    for (let k = 0; k < 7; k++) {
      const a = 0.05 * strength * (1 - k / 8);
      g.gain.setValueAtTime(a, t + k * 0.042);
      g.gain.setValueAtTime(a * 0.12, t + k * 0.042 + 0.022);
    }
    g.gain.setValueAtTime(0.0001, t + 0.32);
    s.connect(f);
    f.connect(g);
    g.connect(this.master);
    s.start(t);
    s.stop(t + 0.35);
  }

  blip(freq, dur = 0.1, gain = 0.1, type = 'sine', slide = 0, delay = 0) {
    if (!this.started) return;
    const ctx = this.ctx, t = ctx.currentTime + delay;
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

  /** The pit stop: the car drops off the jacks after `dur` s; four wheel guns unless the player times them (pit game). */
  pitStop(dur, guns = true) {
    if (!this.amb) return;
    this.amb.trigger('airJack', { up: true, delay: 0.1 });
    if (guns) for (let k = 0; k < 4; k++) this.amb.trigger('pitGun', { delay: 0.35 + k * 0.08 + (k > 1 ? 0.9 : 0) });
    this.amb.trigger('airJack', { up: false, delay: Math.max(0.6, dur - 0.3) });
  }

  /** One wheel gun (the interactive pit stop's button presses). */
  wheelGun() {
    if (this.amb) this.amb.trigger('pitGun');
  }

  /** Carbon fragments after a car-to-car hit. */
  debris(k) {
    if (this.amb) this.amb.trigger('debris', { intensity: k });
  }

  light(n) {
    this.blip(n >= 5 ? 880 : 660, 0.18, 0.12, 'sine');
  }

  /** Crowd roar swelling and fading over a few seconds. */
  cheer(strength = 1) {
    if (!this.started) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const n = this.makeNoise(true); // the roar outlasts the 2 s noise buffer
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
    [[523.25, 0], [659.25, 0.16], [783.99, 0.32], [1046.5, 0.5]].forEach(([f, d]) => this.blip(f, 0.45, 0.08, 'triangle', 0, d));
  }

  go() {
    this.blip(1320, 0.45, 0.14, 'sine');
  }

  /** Team-radio squelch: a short burst of band-passed noise, then a two-tone chirp. */
  /**
   * The race engineer speaks the message (section 9 of SPEC-v2): the browser's own speech synthesis, a calm male-ish voice
   * if one exists, a little quicker than default; a new message cuts the old one off, as on a real radio.
   */
  say(text) {
    const ss = typeof window !== 'undefined' && window.speechSynthesis;
    if (!ss || !this.enabled || !text) return;
    try {
      ss.cancel();
      const u = new SpeechSynthesisUtterance(String(text).replace(/[·•]/g, ',').slice(0, 220));
      const voices = ss.getVoices ? ss.getVoices() : [];
      const v = voices.find((x) => /en[-_]GB/i.test(x.lang) && /male|daniel|george|arthur/i.test(x.name)) || voices.find((x) => /^en/i.test(x.lang));
      if (v) u.voice = v;
      u.rate = 1.08;
      u.pitch = 0.92;
      u.volume = Math.min(1, 0.4 + this.volume);
      ss.speak(u);
    } catch (e) {
      /* no speech in this browser: the text is on screen anyway */
    }
  }

  /** The engineer's channel is open for `secs`: a low static floor under the message. */
  radioOpen(secs = 3) {
    if (!this.started) return;
    this.staticUntil = Math.max(this.staticUntil, this.ctx.currentTime + secs);
  }

  radioClick() {
    if (!this.started) return;
    const ctx = this.ctx, t = ctx.currentTime;
    this.radioOpen(2.5);
    const src = this.makeNoise(false);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1900;
    bp.Q.value = 1.4;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.09, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0008, t + 0.16);
    src.connect(bp);
    bp.connect(g);
    g.connect(this.master);
    src.start(t);
    src.stop(t + 0.2);
    this.blip(1500, 0.05, 0.035, 'square', 0, 0.17);
    this.blip(1180, 0.05, 0.03, 'square', 0, 0.235);
  }

  ui(kind = 'click') {
    if (kind === 'click') this.blip(720, 0.05, 0.05, 'triangle');
    else if (kind === 'good') {
      this.blip(660, 0.1, 0.07, 'triangle');
      this.blip(990, 0.14, 0.07, 'triangle', 0, 0.09);
    } else if (kind === 'bad') this.blip(180, 0.25, 0.1, 'sawtooth', -60);
    else if (kind === 'radio') this.radioClick();
  }
}
