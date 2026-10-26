// "Keyboard human" emulation: the AI's intent is quantised to key presses (steer left/right/none, throttle, brake) and fed through
// the same ramping as ui/input.js, with the default assists. If this can lap cleanly, a real keyboard driver can too.
// Usage: node tests/keyboard.mjs [trackId] [pace] [laps]
import { Track } from '../src/sim/track.js';
import { TRACK_DEFS } from '../src/sim/trackdefs.js';
import { Car } from '../src/sim/car.js';
import { makeSpec } from '../src/sim/carspec.js';
import { buildSpeedProfile } from '../src/sim/speedprofile.js';
import { AIDriver } from '../src/sim/ai.js';
import { clamp, formatTime } from '../src/util/math.js';

const DT = 1 / 240, FRAME = 1 / 60;
const id = process.argv[2] || 'northfield';
const pace = +(process.argv[3] || 0.85);
const laps = +(process.argv[4] || 2);
const assistLevel = process.env.ASSIST || 'intermediate';
const track = new Track(TRACK_DEFS.find((d) => d.id === id));
const rec = track.def.setup;
const spec = makeSpec({ frontWing: rec.front, rearWing: rec.rear, fuel: 20, compound: 'medium' });
const car = new Car(spec, track);
const assists = { beginner: { abs: true, tc: 3, steer: 1, stability: 3, autoGear: true }, intermediate: { abs: true, tc: 2, steer: 1, stability: 1, autoGear: true }, pro: { abs: true, tc: 1, steer: 0, stability: 0, autoGear: true }, none: { abs: false, tc: 0, steer: 0, stability: 0, autoGear: true } }[assistLevel];
car.assist = { ...assists };
const slot = track.gridSlot(0);
const p = track.pointAt(slot.s, slot.d);
car.reset(p.x, p.y, p.heading, 0);
const prof = buildSpeedProfile(track, spec);
const brain = new AIDriver({ car, track, profile: prof, level: 1, seed: 8 });
brain.dp.pace = pace;
const race = { phase: 'racing', time: 0, cars: [car], lapsLeft: () => 5 };
brain.goTime = 0;

// Input state (same ramps as ui/input.js)
const st = { thr: 0, brk: 0, steer: 0 };
function keys(intent, speed, dt) {
  const kThr = intent.throttle > 0.5, kBrk = intent.brake > 0.3;
  const dead = 0.12 + 0.1 * clamp(speed / 80, 0, 1);
  const target = intent.steer > dead ? 1 : intent.steer < -dead ? -1 : 0;
  st.thr += clamp((kThr ? 1 : 0) - st.thr, -dt * 12, dt * 5.5);
  st.brk += clamp((kBrk ? 1 : 0) - st.brk, -dt * 14, dt * 5);
  if (kBrk && st.brk < 0.28) st.brk = 0.28;
  const sp = clamp(speed / 85, 0, 1);
  const attack = 4.6 - 2.6 * sp, release = 7.5 - 2.0 * sp;
  const rate = target !== 0 && Math.sign(target) === Math.sign(st.steer || target) ? attack : release;
  st.steer += clamp(target - st.steer, -dt * rate, dt * rate);
}
let t = 0, lapStart = 0, lastS = 0, lapTimes = [], off = 0, walls = 0, maxD = 0;
let intent = brain.inp;
for (let k = 0; t < 600 && lapTimes.length < laps; k++) {
  if (k % 4 === 0) {
    intent = brain.update(FRAME, race);
    keys(intent, car.speed, FRAME);
  }
  car.step(DT, { throttle: st.thr, brake: st.brk, steer: st.steer, boost: false, allowReverse: false });
  t += DT;
  race.time = t;
  if (car.surf.every((s) => s >= 2 && s !== 5)) off += DT;
  if (car.surf.some((s) => s === 6)) walls++;
  maxD = Math.max(maxD, Math.abs(car.d));
  if (lastS > track.length * 0.9 && car.s < track.length * 0.1 && t > 5) { lapTimes.push(t - lapStart); lapStart = t; }
  lastS = car.s;
}
console.log(`${id} keyboard-emulation pace ${pace} assists=${assistLevel}: laps ${lapTimes.map(formatTime).join(' ') || 'none'}  time fully off-track ${off.toFixed(1)}s  maxOffset ${maxD.toFixed(1)} m (half width ${track.wl[0].toFixed(1)})`);
