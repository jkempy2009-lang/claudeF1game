/**
 * Engine and drivetrain voices: a 1.6 L turbo V6 hybrid revving to 15,000 rpm.
 *
 * EngineVoice is the player's car: two detuned firing oscillators (rpm/60*3, the V6's firing rate), a sub-octave for the
 * idle burble, a parallel soft-clipped "rasp" path, intake noise, turbo whistle and wastegate chatter, MGU-K whine, a gate
 * for the rev and pit limiters, and short noise bursts for overrun crackle, gear-change cracks and pops. About 33 nodes.
 *
 * DistantEngineVoice is for the other cars: 6 nodes, Doppler on pitch, inverse-distance level, a distance-dependent low-pass
 * for air absorption, and stereo pan.
 *
 * Parameters move through setTargetAtTime or short ramps, so the 60 Hz update never produces clicks or zipper noise.
 *
 * Provenance: the constructor (the node graph) was written by an outside model working blind from a brief; its answer was cut
 * off before update(), so update(), the distant voice and dispose() were written here to the same design. Nobody on the
 * project has listened to it critically yet: it is offered as an alternative engine sound (Settings), the original stays the
 * default.
 */

const SPEED_OF_SOUND = 343; // m/s, for Doppler
const NOISE_SECONDS = 2; // one looped buffer serves every noise source

/** Tunables (units in the names). */
export const ENGINE_CFG = {
  level: 0.8, // master level of the player's voice
  idleRpm: 4000,
  maxRpm: 15000,
  limiterHz: 28, // rev-limiter cut rate
  pitLimiterHz: 11, // the pit limiter's slower stutter
  upshiftCutS: 0.04, // ignition cut on an upshift
  crackleRate: 7, // overrun pops per second at full overrun
  distantRefM: 18, // distance at which a distant car is at half level
  distantLevel: 0.22,
};

const noiseCache = new WeakMap();
const raspCache = new WeakMap();

/** Clamps v into [lo, hi]. */
const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);
/** v when it is a finite number, otherwise the fallback. */
const finite = (v, fallback = 0) => (Number.isFinite(v) ? v : fallback);
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

/**
 * Soft-clip transfer curve for the rasp path, normalised so full scale maps to full scale; the clip adds the odd
 * harmonics that make the mid-range rasp.
 */
const SOFT_CLIP = (() => {
  const n = 1024, k = 3, norm = Math.tanh(k);
  const c = new Float32Array(n);
  for (let i = 0; i < n; i++) c[i] = Math.tanh(k * ((2 * i) / (n - 1) - 1)) / norm;
  return c;
})();

/** White noise, created once per AudioContext (a fixed-seed xorshift, the same buffer every run). */
function noiseBuffer(ctx) {
  let buf = noiseCache.get(ctx);
  if (buf) return buf;
  const len = Math.round(ctx.sampleRate * NOISE_SECONDS);
  buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let seed = 0x2545f491;
  for (let i = 0; i < len; i++) {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    d[i] = ((seed >>> 0) / 4294967296) * 2 - 1;
  }
  noiseCache.set(ctx, buf);
  return buf;
}

/** A sawtooth-like spectrum with the 2nd to 6th partials lifted: raspy rather than buzzy in the mid-range. */
function raspWave(ctx) {
  let w = raspCache.get(ctx);
  if (w) return w;
  const N = 16;
  const real = new Float32Array(N), imag = new Float32Array(N);
  for (let n = 1; n < N; n++) imag[n] = ((n % 2 === 1 ? 1 : -1) * (n >= 2 && n <= 6 ? 1.5 : 1)) / n;
  w = ctx.createPeriodicWave(real, imag);
  raspCache.set(ctx, w);
  return w;
}

/** A one-shot envelope on a persistent gain: attack to `peak`, exponential decay with time constant `tau`. */
function burst(param, now, peak, attack, tau) {
  param.cancelScheduledValues(now);
  param.setValueAtTime(Math.max(param.value, 0.0001), now);
  param.linearRampToValueAtTime(peak, now + attack);
  param.setTargetAtTime(0, now + attack, tau);
}

/**
 * The player's car engine. Call update() about 60 times a second.
 * @example
 * const voice = new EngineVoice(ctx, masterBus);
 * voice.update(state, dt);   // every frame
 * voice.dispose();           // when the car leaves the scene
 */
export class EngineVoice {
  /**
   * @param {AudioContext} ctx
   * @param {AudioNode} out master bus the voice connects to
   */
  constructor(ctx, out) {
    this.ctx = ctx;
    this._nodes = [];
    this._sources = [];
    this._disposed = false;
    // state that evolves between frames: turbo boost, lift transients, gear edges
    this._boost = 0.2;
    this._prevThr = 0;
    this._gear = 0;
    this._crackleAcc = 0;
    this._rand = 0x9e3779b9;

    const track = (n) => { this._nodes.push(n); return n; };
    const source = (n) => { this._sources.push(n); return track(n); };
    const osc = (type) => { const o = source(ctx.createOscillator()); o.type = type; return o; };
    const gain = (v) => { const g = track(ctx.createGain()); g.gain.value = v; return g; };
    const biquad = (type, freq, q, g = 0) => {
      const b = track(ctx.createBiquadFilter());
      b.type = type;
      b.frequency.value = freq;
      b.Q.value = q;
      b.gain.value = g;
      return b;
    };
    const t0 = ctx.currentTime;

    // combustion: the second firing oscillator is detuned by 9 cents, so the two beat against each other (the rough edge of a
    // real firing train)
    this.oscSaw = osc('sawtooth');
    this.oscRasp = osc('sawtooth');
    this.oscRasp.setPeriodicWave(raspWave(ctx));
    this.oscRasp.detune.value = 9;
    this.oscSub = osc('triangle');
    const gSaw = gain(0.5);
    const gRasp = gain(0.4);
    this.gSub = gain(0.1);
    this.oscSaw.connect(gSaw);
    this.oscRasp.connect(gRasp);
    this.oscSub.connect(this.gSub);
    this.fireBus = gain(0.3);
    gSaw.connect(this.fireBus);
    gRasp.connect(this.fireBus);
    this.gSub.connect(this.fireBus);

    // tone: a low-pass that opens with throttle and rpm, a mid-range peak, and a parallel soft clip (the clip path adds the
    // rasp; the dry path keeps the body)
    this.fireLP = biquad('lowpass', 2000, 0.7);
    this.rasp = biquad('peaking', 2200, 1.2, 0);
    this.shaper = track(ctx.createWaveShaper());
    this.shaper.curve = SOFT_CLIP;
    this.shaper.oversample = '2x';
    this.wet = gain(0);
    this.toneBus = gain(1);
    this.boom = biquad('peaking', 110, 0.9, 0); // cockpit body resonance
    this.shelf = biquad('highshelf', 3000, 0.7, 0); // exterior brightness
    this.fireBus.connect(this.fireLP);
    this.fireLP.connect(this.rasp);
    this.rasp.connect(this.toneBus);
    this.rasp.connect(this.shaper);
    this.shaper.connect(this.wet);
    this.wet.connect(this.toneBus);
    this.toneBus.connect(this.boom);
    this.boom.connect(this.shelf);

    // mechanical and air sources; one looped noise source feeds every noise path
    this.mixBus = gain(1);
    this.shelf.connect(this.mixBus);
    const noise = source(ctx.createBufferSource());
    noise.buffer = noiseBuffer(ctx);
    noise.loop = true;
    this.intakeBP = biquad('bandpass', 800, 0.9);
    this.intakeGain = gain(0.05);
    noise.connect(this.intakeBP);
    this.intakeBP.connect(this.intakeGain);
    this.intakeGain.connect(this.mixBus);
    this.hissBP = biquad('bandpass', 3000, 0.8);
    this.hissGain = gain(0);
    noise.connect(this.hissBP);
    this.hissBP.connect(this.hissGain);
    this.hissGain.connect(this.mixBus);

    // turbo whine is a pure sine, which reads as a whistle; the MGU-K whine is a triangle
    this.turbo = osc('sine');
    this.turbo.frequency.value = 1500;
    this.turboGain = gain(0.01);
    this.turbo.connect(this.turboGain);
    this.turboGain.connect(this.mixBus);
    this.mguK = osc('triangle');
    this.mguK.frequency.value = 300;
    this.mguGain = gain(0);
    this.mguK.connect(this.mguGain);
    this.mguGain.connect(this.mixBus);

    // limiter gate: a sine LFO sums into the gate gain, so the level swings between 1 - 2*depth and 1; only the engine mix
    // passes through it, the bursts do not
    this.gate = gain(1);
    this.lfo = osc('sine');
    this.lfo.frequency.value = ENGINE_CFG.limiterHz;
    this.lfoDepth = gain(0);
    this.lfo.connect(this.lfoDepth);
    this.lfoDepth.connect(this.gate.gain);
    this.mixBus.connect(this.gate);

    // ignition duck (upshift cut), then the master level for this voice
    this.duck = gain(1);
    this.voiceGain = gain(ENGINE_CFG.level);
    this.gate.connect(this.duck);
    this.duck.connect(this.voiceGain);
    this.voiceGain.connect(out);

    // bursts: band-passed noise hits with an envelope on their gain
    this.crackBP = biquad('bandpass', 1400, 0.8);
    this.crackGain = gain(0);
    noise.connect(this.crackBP);
    this.crackBP.connect(this.crackGain);
    this.crackGain.connect(this.voiceGain);
    this.popBP = biquad('bandpass', 2800, 1.8);
    this.popGain = gain(0);
    noise.connect(this.popBP);
    this.popBP.connect(this.popGain);
    this.popGain.connect(this.voiceGain);

    for (const s of this._sources) s.start(t0);
  }

  /** A cheap deterministic random number (audio texture only). */
  _rnd() {
    let x = this._rand;
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    this._rand = x >>> 0;
    return this._rand / 4294967296;
  }

  /**
   * Advances the engine sound. Call about 60 times a second.
   * state: { rpm, throttle, load (-1..1, negative = overrun), gear, shifting, speed (m/s), ersDeploy, ersHarvest, limiter,
   * pitLimiter, onboard, volume }
   * @param {object} state
   * @param {number} dt seconds since the last call
   */
  update(state, dt) {
    if (this._disposed) return;
    const now = this.ctx.currentTime;
    const s = state || {};
    const h = clamp(finite(dt), 0, 0.1);
    const C = ENGINE_CFG;
    const rpm = clamp(finite(s.rpm, 5000), 3000, 15500);
    const thr = clamp(finite(s.throttle), 0, 1);
    const load = clamp(finite(s.load, thr), -1, 1);
    const speed = Math.max(0, finite(s.speed));
    const rpmN = clamp((rpm - C.idleRpm) / (C.maxRpm - C.idleRpm), 0, 1);
    const onboard = !!s.onboard;
    const limiter = !!s.limiter;
    const pit = !!s.pitLimiter && !limiter;
    const vol = clamp(finite(s.volume, 1), 0, 1);
    const ers = clamp(finite(s.ersDeploy), 0, 1);
    const harv = clamp(finite(s.ersHarvest), 0, 1);
    const gear = Math.round(finite(s.gear, this._gear));
    // overrun: off the throttle with the engine braking the car (crackle)
    const overrun = thr < 0.08 && load < -0.2 && rpm > 7000 ? smooth(7000, 12500, rpm) : 0;
    const set = (p, v, tc = 0.03) => p.setTargetAtTime(v, now, tc);

    // pitch: the firing frequency and its sub-octave (the burble of uneven firing at low revs)
    const f = (rpm / 60) * 3;
    set(this.oscSaw.frequency, f, 0.012);
    set(this.oscRasp.frequency, f, 0.012);
    set(this.oscSub.frequency, f / 2, 0.012);
    set(this.gSub.gain, 0.06 + 0.3 * (1 - rpmN) * (1 - 0.6 * thr), 0.08);

    // level and tone: louder and brighter with throttle; the rasp peaks in the middle of the rev range, the top end is clean
    const mid = Math.sin(Math.PI * clamp((rpmN - 0.1) / 0.75, 0, 1));
    set(this.fireBus.gain, (0.13 + 0.22 * (0.25 + 0.75 * thr)) * (0.65 + 0.35 * rpmN) * (overrun ? 0.7 : 1), 0.04);
    set(this.fireLP.frequency, (700 + 3200 * rpmN + 2600 * thr) * (onboard ? 0.7 : 1), 0.05);
    set(this.rasp.frequency, 1300 + 1600 * rpmN, 0.08);
    set(this.rasp.gain, 7 * thr * mid, 0.06);
    set(this.wet.gain, 0.08 + 0.45 * thr * mid, 0.06);
    // onboard: the chassis booms and the exhaust is behind you; outside: brighter, the exhaust in your face
    set(this.boom.frequency, 85 + 70 * rpmN, 0.1);
    set(this.boom.gain, onboard ? 8 : 0, 0.15);
    set(this.shelf.gain, onboard ? -7 : 4, 0.15);

    // intake roar and the turbo: spools up over a second or so under load, drops fast when lifted
    set(this.intakeBP.frequency, 600 + 1900 * rpmN, 0.06);
    set(this.intakeGain.gain, (0.012 + 0.05 * thr * rpmN) * (onboard ? 1.3 : 0.8), 0.06);
    const boostT = thr * smooth(5500, 11000, rpm);
    const wasBoost = this._boost;
    this._boost += (boostT - this._boost) * Math.min(1, h * (boostT > this._boost ? 1.8 : 6));
    set(this.turbo.frequency, 1800 + 5600 * this._boost, 0.05);
    set(this.turboGain.gain, 0.014 * this._boost * this._boost * (onboard ? 1.4 : 0.8), 0.05);
    // a sharp lift with the turbo spooled: the wastegate chatters and the exhaust pops once or twice
    if (this._prevThr > 0.6 && thr < 0.2 && wasBoost > 0.5) {
      burst(this.hissGain.gain, now, 0.06 * wasBoost, 0.004, 0.09);
      set(this.hissBP.frequency, 2600 + 1800 * wasBoost, 0.01);
      burst(this.popGain.gain, now + 0.03, 0.22 * wasBoost, 0.002, 0.03);
    }

    // MGU-K: an electric whine that follows road speed, louder deploying or harvesting hard
    set(this.mguK.frequency, 90 + speed * 42, 0.05);
    set(this.mguGain.gain, 0.012 * Math.max(ers, harv) * clamp(speed / 30, 0, 1) * (onboard ? 1.5 : 0.7), 0.08);

    // limiters: the rev limiter is a fast hard cut, the pit limiter a slower stutter
    const depth = limiter ? 0.42 : pit ? 0.3 : 0;
    set(this.lfo.frequency, limiter ? C.limiterHz : C.pitLimiterHz, 0.02);
    set(this.lfoDepth.gain, depth, 0.02);
    set(this.gate.gain, 1 - depth, 0.02);

    // gear changes: an upshift cuts the ignition for ~40 ms with a crack; a downshift blips (a pop and a burst of level)
    if (gear !== this._gear && this._gear !== 0 && gear > 0) {
      if (gear > this._gear) {
        this.duck.gain.cancelScheduledValues(now);
        this.duck.gain.setValueAtTime(this.duck.gain.value, now);
        this.duck.gain.linearRampToValueAtTime(0.12, now + 0.006);
        this.duck.gain.setValueAtTime(0.12, now + C.upshiftCutS);
        this.duck.gain.linearRampToValueAtTime(1, now + C.upshiftCutS + 0.02);
        set(this.crackBP.frequency, 1100 + 900 * rpmN, 0.005);
        burst(this.crackGain.gain, now + 0.004, 0.18 + 0.25 * thr, 0.003, 0.025);
      } else {
        set(this.popBP.frequency, 1800 + 1400 * this._rnd(), 0.005);
        burst(this.popGain.gain, now, 0.16 + 0.14 * rpmN, 0.002, 0.035);
        this.fireBus.gain.setTargetAtTime(0.45, now, 0.01);
      }
    }
    this._gear = gear;

    // overrun crackle: irregular pops, more at high revs
    if (overrun > 0) {
      this._crackleAcc += h * C.crackleRate * overrun;
      if (this._crackleAcc > 1) {
        this._crackleAcc -= 1 + this._rnd();
        set(this.popBP.frequency, 1500 + 2500 * this._rnd(), 0.004);
        burst(this.popGain.gain, now, (0.08 + 0.2 * this._rnd()) * overrun, 0.002, 0.02 + 0.03 * this._rnd());
      }
    } else this._crackleAcc = 0;

    set(this.voiceGain.gain, C.level * vol, 0.05);
    this._prevThr = thr;
  }

  /** Stops and disconnects every node. Safe to call twice. */
  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    for (const s of this._sources) { try { s.stop(); } catch { /* never started or already stopped */ } }
    for (const n of this._nodes) { try { n.disconnect(); } catch { /* already disconnected */ } }
    this._nodes.length = 0;
    this._sources.length = 0;
  }
}

/**
 * Another car on track: 6 audio nodes. The same state shape, using distance, closingSpeed (+ = approaching) and pan.
 */
export class DistantEngineVoice {
  /**
   * @param {AudioContext} ctx
   * @param {AudioNode} out
   */
  constructor(ctx, out) {
    this.ctx = ctx;
    this._disposed = false;
    this.a = ctx.createOscillator();
    this.a.type = 'sawtooth';
    this.b = ctx.createOscillator();
    this.b.setPeriodicWave(raspWave(ctx));
    this.b.detune.value = -11;
    this.lp = ctx.createBiquadFilter();
    this.lp.type = 'lowpass';
    this.lp.Q.value = 0.6;
    this.g = ctx.createGain();
    this.g.gain.value = 0;
    this.pan = ctx.createStereoPanner ? ctx.createStereoPanner() : ctx.createGain();
    this.a.connect(this.lp);
    this.b.connect(this.lp);
    this.lp.connect(this.g);
    this.g.connect(this.pan);
    this.pan.connect(out);
    const t0 = ctx.currentTime;
    this.a.start(t0);
    this.b.start(t0);
  }

  /**
   * @param {{rpm:number, throttle:number, distance:number, closingSpeed:number, pan:number, volume:number}} state
   * @param {number} dt
   */
  update(state, dt) {
    if (this._disposed) return;
    const now = this.ctx.currentTime;
    const s = state || {};
    const C = ENGINE_CFG;
    const rpm = clamp(finite(s.rpm, 8000), 3000, 15500);
    const thr = clamp(finite(s.throttle), 0, 1);
    const d = Math.max(1, finite(s.distance, 50));
    // Doppler: the pitch rises approaching and falls going away
    const dop = SPEED_OF_SOUND / (SPEED_OF_SOUND - clamp(finite(s.closingSpeed), -120, 120));
    const f = (rpm / 60) * 3 * dop;
    this.a.frequency.setTargetAtTime(f, now, 0.03);
    this.b.frequency.setTargetAtTime(f, now, 0.03);
    // air absorbs the top end with distance
    this.lp.frequency.setTargetAtTime(400 + (900 + 2200 * thr + 0.12 * rpm) / (1 + d / 60), now, 0.08);
    const att = 1 / (1 + (d / C.distantRefM) ** 1.6);
    this.g.gain.setTargetAtTime(C.distantLevel * att * (0.35 + 0.65 * thr) * clamp(finite(s.volume, 1), 0, 1), now, 0.06);
    if (this.pan.pan) this.pan.pan.setTargetAtTime(clamp(finite(s.pan), -1, 1), now, 0.05);
  }

  /** Stops and disconnects every node. Safe to call twice. */
  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    for (const o of [this.a, this.b]) { try { o.stop(); } catch { /* already stopped */ } }
    for (const n of [this.a, this.b, this.lp, this.g, this.pan]) { try { n.disconnect(); } catch { /* already */ } }
  }
}
