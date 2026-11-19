// Effects audio the original engine (ui/audio.js) did not have: a tyre voice per wheel (so you hear which end is sliding,
// and a lock-up shrieks differently from a cornering squeal), the pit lane's own ambience, the pit stop's air guns and jacks,
// gravel spray and debris on impact.
//
// Provenance: written from a first draft by an outside model (Grok 4.7) working blind from a brief. Kept: the layer ideas,
// the per-wheel panning, the event set. Changed: the draft duplicated layers the game already had (kerbs, grass, gravel,
// rain, spray, wind, scrape), drove kerb and gravel sounds from tyre slip instead of the surface, made tyres squeal on grass
// and gravel, filtered brown noise at 800+ Hz (brown noise has almost nothing there), ran 5-10x louder than the rest of the
// mix, cleaned up one-shots with timers, and its dispose() never stopped the tyre sources. Its radio chain is not used: the
// engineer speaks through the browser's speech synthesis, which cannot be routed through Web Audio.

/** Tunables (levels are linear gains into the game's master bus, matched to ui/audio.js). */
export const AMBIENCE_CFG = {
  tyreLevel: 0.1, // one wheel sliding at the limit (two front wheels at slip 0.6 ~ the old mono squeal's level, measured offline)
  lockLevel: 0.18, // one wheel locked
  spinLevel: 0.1, // one wheel spinning up
  pitLevel: 0.1, // pit-lane ambience
  gunLevel: 0.15, // a wheel gun
  jackLevel: 0.08,
  gravelLevel: 0.1,
  debrisLevel: 0.09,
};

const noiseCache = new WeakMap();

/** One second of white noise per AudioContext (fixed seed: the same buffer every run). */
function whiteNoise(ctx) {
  let b = noiseCache.get(ctx);
  if (b) return b;
  b = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const d = b.getChannelData(0);
  let x = 0x1234567;
  for (let i = 0; i < d.length; i++) {
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    d[i] = ((x >>> 0) / 4294967296) * 2 - 1;
  }
  noiseCache.set(ctx, b);
  return b;
}

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

/**
 * Per-wheel tyre voices, pit-lane ambience and one-shot effects.
 * @example
 * const amb = new Ambience(ctx, master);
 * amb.update({ speed, slip: [4], lockup: [4], spin: [4], surface: [4], wet, inPitLane, onboard }, dt);
 * amb.trigger('pitGun', { delay: 0.4 });
 */
export class Ambience {
  /**
   * @param {AudioContext} ctx
   * @param {AudioNode} out the master bus
   */
  constructor(ctx, out) {
    this.ctx = ctx;
    this.out = out;
    this.disposed = false;
    this.nodes = [];
    const noise = ctx.createBufferSource();
    noise.buffer = whiteNoise(ctx);
    noise.loop = true;
    this.noise = noise;
    this.nodes.push(noise);
    // one shared noise source feeds four resonant band-passes: a narrow band of noise is what a tyre squeal is
    const PAN = [-0.45, 0.45, -0.25, 0.25];
    this.tyres = PAN.map((p) => {
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 900;
      bp.Q.value = 6;
      const g = ctx.createGain();
      g.gain.value = 0;
      const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : ctx.createGain();
      if (pan.pan) pan.pan.value = p;
      noise.connect(bp);
      bp.connect(g);
      g.connect(pan);
      pan.connect(out);
      this.nodes.push(bp, g, pan);
      return { bp, g, pan, warble: Math.random() * 6 };
    });
    // the pit lane: generators and air tools, a low hum with a band of hiss
    const pf = ctx.createBiquadFilter();
    pf.type = 'bandpass';
    pf.frequency.value = 420;
    pf.Q.value = 1.4;
    this.pitGain = ctx.createGain();
    this.pitGain.gain.value = 0;
    noise.connect(pf);
    pf.connect(this.pitGain);
    this.pitGain.connect(out);
    this.nodes.push(pf, this.pitGain);
    noise.start();
    this.t = 0;
  }

  /**
   * About 60 times a second. slip: 0..1.5 per wheel beyond peak grip; lockup and spin: 0..1 per wheel; surface: per wheel,
   * 0 asphalt, 1 kerb, 2 grass, 3 gravel (anything else counts as run-off); wet: 0..1 water on the track.
   * @param {object} state
   * @param {number} dt
   */
  update(state, dt) {
    if (this.disposed) return;
    const C = AMBIENCE_CFG;
    const now = this.ctx.currentTime;
    this.t += dt;
    const V = state.speed || 0;
    const dry = 1 - 0.85 * clamp(state.wet || 0, 0, 1); // a wet tyre hisses rather than squeals (the spray layer does that)
    const inside = state.onboard ? 0.6 : 1;
    for (let w = 0; w < 4; w++) {
      const T = this.tyres[w];
      const sf = state.surface ? state.surface[w] : 0;
      const onRoad = sf === 0 || sf === 1;
      const slip = clamp((state.slip && state.slip[w]) || 0, 0, 1.5);
      const lock = clamp((state.lockup && state.lockup[w]) || 0, 0, 1);
      const spin = clamp((state.spin && state.spin[w]) || 0, 0, 1);
      const speedK = clamp(V / 12, 0, 1);
      let level = 0, f = 900, q = 6;
      if (lock > 0.05 && V > 4) {
        // a locked tyre drags one patch of rubber: a higher, narrower shriek
        level = C.lockLevel * lock;
        f = 1450 + 450 * lock;
        q = 10;
      } else if (spin > 0.05) {
        // wheelspin: a lower chirp that rises with the spin
        level = C.spinLevel * spin;
        f = 650 + 350 * spin;
        q = 5;
      } else if (slip > 0.02) {
        // cornering on the limit: the squeal grows with the slide and drops in pitch as the tyre lets go
        level = C.tyreLevel * Math.min(1, slip * 1.4);
        f = 1050 - 220 * Math.min(1, slip);
        q = 6;
      }
      level *= speedK * dry * inside * (onRoad ? (sf === 1 ? 0.6 : 1) : 0);
      // a slow warble: a real squeal is never a steady tone
      f *= 1 + 0.025 * Math.sin(this.t * (7 + T.warble) + T.warble);
      T.bp.frequency.setTargetAtTime(f, now, 0.03);
      T.bp.Q.setTargetAtTime(q, now, 0.05);
      T.g.gain.setTargetAtTime(level, now, level > T.g.gain.value ? 0.03 : 0.06);
    }
    this.pitGain.gain.setTargetAtTime(state.inPitLane ? C.pitLevel * inside : 0, now, 0.4);
  }

  /**
   * One-shot sounds: 'pitGun' (a wheel gun), 'airJack' ({up}), 'gravelSpray' ({intensity}), 'debris' ({intensity}).
   * opts.delay schedules it that many seconds ahead.
   * @param {string} event
   * @param {object} opts
   */
  trigger(event, opts = {}) {
    if (this.disposed) return;
    const C = AMBIENCE_CFG;
    const t = this.ctx.currentTime + Math.max(0, opts.delay || 0);
    if (event === 'pitGun') {
      // a wheel gun: a hard rattle of the impact wrench (amplitude-modulated noise, ~0.35 s)
      this._noiseHit(t, 'bandpass', 2400, 1.2, C.gunLevel, 0.35, 0.01, 38);
    } else if (event === 'airJack') {
      // the jack: a thump and a short pneumatic hiss
      this._noiseHit(t, 'lowpass', opts.up === false ? 260 : 340, 0.8, C.jackLevel, 0.12, 0.004, 0);
      this._noiseHit(t + 0.05, 'highpass', 3200, 0.7, C.jackLevel * 0.5, 0.25, 0.01, 0);
    } else if (event === 'gravelSpray') {
      const k = clamp(opts.intensity ?? 0.6, 0, 1);
      this._noiseHit(t, 'bandpass', 1500, 0.9, C.gravelLevel * k, 0.5, 0.01, 0, 0.25);
    } else if (event === 'debris') {
      const k = clamp(opts.intensity ?? 0.6, 0, 1);
      // carbon fragments skittering: bright, a few separate clicks
      for (let i = 0; i < 4; i++) this._noiseHit(t + i * (0.04 + 0.05 * Math.random()), 'bandpass', 2600 + 1800 * Math.random(), 2, C.debrisLevel * k * (1 - i * 0.18), 0.06, 0.002, 0);
    }
  }

  /** A filtered noise burst that removes itself when it ends. am: rattle rate in Hz (0 = none); decay: release time constant. */
  _noiseHit(t, type, freq, q, level, dur, attack, am, decay = dur / 3) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = whiteNoise(ctx);
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(level, t + attack);
    g.gain.setTargetAtTime(0, t + Math.max(attack, dur - decay), decay / 3);
    src.connect(f);
    f.connect(g);
    let lfo = null, depth = null, am2 = null;
    if (am) {
      // amplitude modulation: the wrench's hammer blows
      am2 = ctx.createGain();
      am2.gain.value = 0.5;
      lfo = ctx.createOscillator();
      lfo.type = 'square';
      lfo.frequency.value = am;
      depth = ctx.createGain();
      depth.gain.value = 0.5;
      lfo.connect(depth);
      depth.connect(am2.gain);
      g.connect(am2);
      am2.connect(this.out);
      lfo.start(t);
      lfo.stop(t + dur + 0.1);
    } else g.connect(this.out);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.1);
    src.onended = () => {
      for (const n of [src, f, g, lfo, depth, am2]) if (n) { try { n.disconnect(); } catch { /* gone */ } }
    };
  }

  /** Stops and disconnects every persistent node. */
  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    try { this.noise.stop(); } catch { /* already stopped */ }
    for (const n of this.nodes) { try { n.disconnect(); } catch { /* already */ } }
    this.nodes.length = 0;
  }
}
