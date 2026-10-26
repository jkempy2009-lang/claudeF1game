import { clamp } from '../util/math.js';

export const DEFAULT_KEYS = {
  throttle: ['KeyW', 'ArrowUp'],
  brake: ['KeyS', 'ArrowDown'],
  left: ['KeyA', 'ArrowLeft'],
  right: ['KeyD', 'ArrowRight'],
  drs: ['Space'],
  boost: ['ShiftLeft', 'ShiftRight'],
  gearUp: ['KeyE'],
  gearDown: ['KeyQ'],
  pit: ['KeyB'],
  tyre: ['KeyT'],
  camera: ['KeyC'],
  lookBack: ['KeyV'],
  reset: ['KeyR'],
  pause: ['Escape', 'KeyP'],
  map: ['KeyM'],
  mute: ['KeyN'],
  auto: ['KeyG'],
  line: ['KeyL'],
  tele: ['KeyY'],
  ersMode: ['KeyX'],
  fuelMode: ['KeyZ'],
  bbUp: ['BracketRight', 'Equal'],
  bbDown: ['BracketLeft', 'Minus'],
  confirm: ['Enter', 'Space'],
};

/** Rebindable actions in the order the controls screen lists them. */
export const KEY_ACTIONS = [
  ['throttle', 'Throttle'], ['brake', 'Brake / reverse'], ['left', 'Steer left'], ['right', 'Steer right'], ['drs', 'DRS / wheel nut'], ['boost', 'ERS boost (hold)'],
  ['gearUp', 'Gear up (manual)'], ['gearDown', 'Gear down (manual)'], ['pit', 'Pit request'], ['tyre', 'Change pit tyre'], ['camera', 'Camera'], ['lookBack', 'Look back'],
  ['reset', 'Reset to track'], ['pause', 'Pause'], ['line', 'Racing line guide'], ['tele', 'Live telemetry'], ['map', 'Minimap size'], ['mute', 'Mute'],
  ['ersMode', 'ERS mode'], ['fuelMode', 'Fuel mix'], ['bbUp', 'Brake bias forward'], ['bbDown', 'Brake bias rearward'],
];
const KEY_CODE = /^[A-Za-z][A-Za-z0-9]{1,23}$/;
const RESERVED = new Set(['Escape', 'Enter', 'Tab', 'F5', 'F11', 'F12']);

/** Human-readable label for a KeyboardEvent.code. */
export function keyLabel(code) {
  if (/^Key[A-Z]$/.test(code)) return code.slice(3);
  if (/^Digit\d$/.test(code)) return code.slice(5);
  const map = { ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Space: 'Space', ShiftLeft: 'Shift', ShiftRight: 'R-Shift', ControlLeft: 'Ctrl', ControlRight: 'R-Ctrl', AltLeft: 'Alt', AltRight: 'R-Alt', BracketLeft: '[', BracketRight: ']', Equal: '=', Minus: '-', Comma: ',', Period: '.', Slash: '/', Semicolon: ';', Quote: "'", Backquote: '`', Backslash: '\\', Backspace: 'Backspace', Escape: 'Esc' };
  return map[code] || code.replace(/^Numpad/, 'Num ');
}

/** Saved custom bindings -> a clean { action: [codes] } (unknown actions, junk codes and reserved keys dropped). */
export function sanitizeKeys(raw) {
  const out = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return out;
  for (const [a] of KEY_ACTIONS) {
    const v = raw[a];
    if (!Array.isArray(v)) continue;
    const codes = v.filter((c) => typeof c === 'string' && KEY_CODE.test(c) && !RESERVED.has(c)).slice(0, 3);
    if (codes.length || v.length === 0) out[a] = [...new Set(codes)]; // [] = deliberately unbound
  }
  return out;
}

/** Defaults overlaid with the custom bindings; Esc always still pauses. */
export function mergeKeys(custom) {
  const keys = {};
  for (const a of Object.keys(DEFAULT_KEYS)) keys[a] = DEFAULT_KEYS[a].slice();
  const c = sanitizeKeys(custom);
  for (const a of Object.keys(c)) keys[a] = c[a];
  if (!keys.pause.includes('Escape')) keys.pause.push('Escape');
  return keys;
}

/** Binds `code` to `action` (replacing its keys) and takes it away from any other action. Returns the new custom map. */
export function bindKey(custom, action, code) {
  const out = sanitizeKeys(custom);
  if (RESERVED.has(code) || !KEY_CODE.test(code)) return out;
  const merged = mergeKeys(out);
  for (const a of Object.keys(merged)) if (a !== action && merged[a].includes(code)) out[a] = merged[a].filter((c) => c !== code);
  out[action] = [code];
  return out; // an action that lost its only key stays unbound until the player gives it one (or resets the keys)
}

const dead = (v, d) => (Math.abs(v) < d ? 0 : (v - Math.sign(v) * d) / (1 - d));

/** Keyboard + gamepad (+ touch overlay) -> a single driver input state with sensible ramping for digital keys. */
export class Input {
  constructor() {
    this.down = new Set();
    this.pressed = new Set();
    this.throttle = 0;
    this.brake = 0;
    this.steer = 0;
    this.keys = DEFAULT_KEYS;
    this.touch = { left: false, right: false, throttle: false, brake: false };
    this.touchMode = false;
    this.padActive = false;
    this.padPrev = [];
    this.opts = { steerSpeed: 1, padDead: 0.07, rumble: true };
    this.rumbleT = 0;
    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
      this.down.add(e.code);
      this.pressed.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.down.delete(e.code));
    window.addEventListener('blur', () => this.down.clear());
  }

  isDown(action) {
    return this.keys[action].some((k) => this.down.has(k));
  }

  wasPressed(action) {
    return this.keys[action].some((k) => this.pressed.has(k));
  }

  pad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) if (p && p.connected && p.axes.length >= 2) return p;
    return null;
  }

  /** Gamepad vibration: kerbs and rough ground, tyres at the limit, impacts. Cheap: updates ten times a second. */
  rumble(car, impact, dt) {
    const p = this.pad();
    if (!p || !this.opts.rumble || !this.padActive) return;
    const act = p.vibrationActuator;
    if (!act || !act.playEffect) return;
    this.rumbleT -= dt;
    if (this.rumbleT > 0) return;
    this.rumbleT = 0.1;
    let slip = 0;
    for (let w = 0; w < 4; w++) slip = Math.max(slip, car.slipVis[w]);
    const strong = clamp(slip * 0.5 + impact * 1.2, 0, 1);
    const weak = clamp(car.kerbShake * 0.9 + (car.onGrass ? 0.3 : 0), 0, 1);
    if (strong < 0.03 && weak < 0.03) return;
    act.playEffect('dual-rumble', { duration: 120, strongMagnitude: strong, weakMagnitude: weak }).catch(() => {});
  }

  /** Called once per rendered frame with the frame dt and the player's speed (m/s). */
  poll(dt, speed) {
    const out = { throttle: 0, brake: 0, steer: 0, boost: false, gearUp: false, gearDown: false, drsPress: false, pitToggle: false, tyreCycle: false, camera: false, reset: false, pause: false, lookBack: false, map: false, mute: false, autoToggle: false, line: false, tele: false, confirm: false, ersCycle: false, fuelCycle: false, bbDelta: 0 };
    // keyboard ramps
    const kThr = this.isDown('throttle') || this.touch.throttle;
    const kBrk = this.isDown('brake') || this.touch.brake;
    const kL = this.isDown('left') || this.touch.left;
    const kR = this.isDown('right') || this.touch.right;
    this.throttle += clamp((kThr ? 1 : 0) - this.throttle, -dt * 12, dt * 5.5);
    this.brake += clamp((kBrk ? 1 : 0) - this.brake, -dt * 14, dt * 5);
    if (kBrk && this.brake < 0.28) this.brake = 0.28; // initial bite
    const target = (kL ? 1 : 0) - (kR ? 1 : 0);
    const sp = clamp(speed / 85, 0, 1);
    const attack = (4.6 - 2.6 * sp) * this.opts.steerSpeed; // slower build-up at speed: digital steering is a blunt tool
    const release = (7.5 - 2.0 * sp) * this.opts.steerSpeed;
    const rate = target !== 0 && Math.sign(target) === Math.sign(this.steer || target) ? attack : release;
    this.steer += clamp(target - this.steer, -dt * rate, dt * rate);
    out.throttle = this.throttle;
    out.brake = this.brake;
    out.steer = this.steer;
    out.boost = this.isDown('boost');
    out.lookBack = this.isDown('lookBack');
    out.gearUp = this.wasPressed('gearUp');
    out.gearDown = this.wasPressed('gearDown');
    out.drsPress = this.wasPressed('drs');
    out.pitToggle = this.wasPressed('pit');
    out.tyreCycle = this.wasPressed('tyre');
    out.camera = this.wasPressed('camera');
    out.reset = this.wasPressed('reset');
    out.pause = this.wasPressed('pause');
    out.map = this.wasPressed('map');
    out.mute = this.wasPressed('mute');
    out.autoToggle = this.wasPressed('auto');
    out.line = this.wasPressed('line');
    out.tele = this.wasPressed('tele');
    out.confirm = this.wasPressed('confirm');
    out.ersCycle = this.wasPressed('ersMode');
    out.fuelCycle = this.wasPressed('fuelMode');
    out.bbDelta = (this.wasPressed('bbUp') ? 1 : 0) - (this.wasPressed('bbDown') ? 1 : 0);

    // gamepad overrides when it is being used
    const p = this.pad();
    if (p) {
      const ax = dead(p.axes[0] || 0, this.opts.padDead);
      const rt = p.buttons[7] ? p.buttons[7].value : 0, lt = p.buttons[6] ? p.buttons[6].value : 0;
      const b = (i) => !!(p.buttons[i] && p.buttons[i].pressed);
      const edge = (i) => b(i) && !this.padPrev[i];
      const using = Math.abs(ax) > 0.05 || rt > 0.05 || lt > 0.05 || b(0) || b(1) || b(2) || b(3);
      const now = performance.now();
      if (using) this.padLast = now;
      const kbd = kThr || kBrk || kL || kR;
      if (kbd) this.padLast = -1e9;
      this.padActive = now - (this.padLast ?? -1e9) < 2500;
      if (this.padActive) {
        out.steer = -Math.sign(ax) * Math.pow(Math.abs(ax), 1.35);
        out.throttle = Math.max(out.throttle * 0, rt);
        out.brake = lt;
        out.boost = out.boost || b(2) || b(5) && false;
        out.gearUp = out.gearUp || edge(5);
        out.gearDown = out.gearDown || edge(4);
        out.drsPress = out.drsPress || edge(0);
        out.pitToggle = out.pitToggle || edge(1);
        out.camera = out.camera || edge(3);
        out.tyreCycle = out.tyreCycle || edge(15);
        out.fuelCycle = out.fuelCycle || edge(12);
        out.ersCycle = out.ersCycle || edge(13);
        out.reset = out.reset || edge(8);
        out.pause = out.pause || edge(9);
        out.lookBack = out.lookBack || b(10);
        out.boost = out.boost || b(2);
      }
      this.padPrev = p.buttons.map((x) => x.pressed);
    }
    this.pressed.clear();
    return out;
  }
}
