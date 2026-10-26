// Save backup: export/import round trip, hostile imports, sanitising of everything that comes from outside.
import { sanitizeSave, exportSave, importSave } from '../src/ui/menu.js';
let bad = 0;
const ok = (n, c, x = '') => { console.log(`${c ? 'PASS' : 'FAIL'}  ${n} ${x}`); if (!c) bad++; };
const base = sanitizeSave({});
ok('an empty save is complete', base.settings && base.config && base.records && base.stats && base.school && typeof base.achievements === 'object');
const mine = sanitizeSave({ settings: { volume: 0.2, quality: 'medium', keys: { camera: ['KeyJ'] } }, school: { launch: true }, achievements: { first_race: 1 }, stats: { races: 9, wins: 2 } });
const back = importSave(exportSave(mine));
ok('export then import returns the same save', JSON.stringify(back) === JSON.stringify(mine));
ok('a bare save (no wrapper) imports too', importSave(JSON.stringify(mine)) && importSave(JSON.stringify(mine)).school.launch === true);
for (const [name, text] of [['empty', ''], ['garbage', '{nope'], ['array', '[1,2,3]'], ['number', '42'], ['null', 'null'], ['unrelated object', '{"hello":"world"}']]) ok(`rejects ${name}`, importSave(text) === null);
const hostile = importSave(JSON.stringify({ save: { settings: { volume: 'loud', quality: '<img onerror=x>', keys: { drs: ['<b>', 'KeyK'] } }, config: { trackId: 'nowhere', laps: -5 }, career: { v: 1, team: 99, rounds: 3, season: { calendar: ['x'] } }, stats: { races: 'many' }, school: { launch: 'yes', bogus: true }, ghosts: { rade: 5 } } }));
ok('hostile fields are sanitised, not trusted', hostile && hostile.settings.quality === 'high' && hostile.settings.volume >= 0 && hostile.settings.volume <= 1 && JSON.stringify(hostile.settings.keys) === '{"drs":["KeyK"]}' && hostile.career === null && JSON.stringify(hostile.school) === '{}' && Object.keys(hostile.ghosts).length === 0 && hostile.config.laps >= 1, JSON.stringify(hostile.settings));
process.exit(bad ? 1 : 0);
