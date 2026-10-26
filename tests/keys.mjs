// Key rebinding model: sanitising, merging and conflict handling (no browser needed).
import { DEFAULT_KEYS, KEY_ACTIONS, bindKey, mergeKeys, sanitizeKeys, keyLabel } from '../src/ui/input.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };

ok('every rebindable action has a default', KEY_ACTIONS.every(([a]) => Array.isArray(DEFAULT_KEYS[a]) && DEFAULT_KEYS[a].length));
ok('no custom keys: defaults, pause keeps Esc', JSON.stringify(mergeKeys({}).throttle) === JSON.stringify(DEFAULT_KEYS.throttle) && mergeKeys({}).pause.includes('Escape'));
ok('junk is dropped, an empty list means unbound', JSON.stringify(sanitizeKeys({ drs: ['<script>', 5, 'KeyJ'], nope: ['KeyA'], pit: 'KeyB', boost: ['Escape'], line: [] })) === '{"drs":["KeyJ"],"line":[]}');
ok('non-objects are harmless', Object.keys(sanitizeKeys(null)).length === 0 && Object.keys(sanitizeKeys([1])).length === 0 && Object.keys(sanitizeKeys('x')).length === 0);

let c = bindKey({}, 'drs', 'KeyJ');
ok('binding replaces the action\'s keys', JSON.stringify(mergeKeys(c).drs) === '["KeyJ"]');
ok('Esc can never be bound elsewhere', JSON.stringify(bindKey({}, 'drs', 'Escape')) === '{}');
c = bindKey({}, 'camera', 'KeyW');
ok('a key taken from another action is removed there', mergeKeys(c).camera.join() === 'KeyW' && !mergeKeys(c).throttle.includes('KeyW') && mergeKeys(c).throttle.includes('ArrowUp'));
c = bindKey(bindKey({}, 'throttle', 'KeyI'), 'brake', 'KeyI');
ok('an action that loses its only key stays unbound, never doubled up', mergeKeys(c).throttle.length === 0 && mergeKeys(c).brake.join() === 'KeyI', JSON.stringify(c));
c = bindKey({}, 'camera', 'KeyM');
ok('stealing a single-key action\'s key really leaves it unbound', mergeKeys(c).camera.join() === 'KeyM' && mergeKeys(c).map.length === 0, JSON.stringify(mergeKeys(c).map));
ok('an unbound action survives a save round trip', mergeKeys(JSON.parse(JSON.stringify(c))).map.length === 0);
ok('pause always keeps Esc', mergeKeys(bindKey({}, 'pause', 'KeyO')).pause.includes('Escape'));
ok('labels read well', keyLabel('KeyW') === 'W' && keyLabel('ArrowUp') === '↑' && keyLabel('Space') === 'Space' && keyLabel('ShiftLeft') === 'Shift' && keyLabel('Digit5') === '5' && keyLabel('Numpad7') === 'Num 7');
process.exit(bad ? 1 : 0);
