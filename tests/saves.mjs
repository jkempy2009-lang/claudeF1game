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

// text from a shared backup must never reach the page as markup
const evil = '<img src=x onerror=alert(1)>';
const x = importSave(JSON.stringify({ save: {
  honours: [{ pos: evil, team: evil, points: evil }],
  career: { v: 1, team: 3, level: 0.5, rounds: 4, distance: 'standard', seasonNo: 2, budget: 10, upgrades: {}, season: { calendar: ['rade'], round: 0, points: { [evil]: evil, You: evil }, teamPoints: { [evil]: 5 }, teamOf: { You: evil }, results: [{ round: evil, trackId: evil, order: [{ name: evil, team: evil, pos: evil, pts: evil, grid: evil }] }] }, history: [{ seasonNo: evil, driverPos: evil, points: evil, team: evil, wins: evil }, 'x', null], seasonRecap: { seasonNo: evil, driverPos: evil, teamPos: evil, points: evil, wins: evil, podiums: evil, offers: [evil, 1], champion: evil } },
  season: { calendar: ['rade'], round: 0, points: { [evil]: 1 }, teamOf: { a: evil }, results: [{ order: [{ name: evil }] }] },
  records: { rade: { best: 70, html: evil } },
  ghosts: { rade: { time: 70, data: 'QUJD' }, vettore: { time: 70, data: evil }, aurora: { time: 'x', data: 'QUJD' }, mirage: { time: 70, data: 'A'.repeat(700000) } },
  achievements: { first_race: 0, podium: 5 },
} }));
const dump = JSON.stringify(x);
ok('no markup characters survive anywhere in an imported save', !/[<>]/.test(dump), dump.length + ' chars');
ok('history and recap are reduced to numbers', x.career.history.length === 1 && Number.isFinite(x.career.history[0].driverPos) && Number.isFinite(x.career.seasonRecap.points) && x.career.seasonRecap.offers.every(Number.isFinite));
ok('records keep only the lap time', JSON.stringify(x.records.rade) === '{"best":70}');
ok('bad ghosts are dropped, a good one stays', Object.keys(x.ghosts).join() === 'rade');
ok('achievements with no value are not counted as earned', !('first_race' in x.achievements) && x.achievements.podium === 5);
const partial = importSave(JSON.stringify({ settings: { volume: 0.3 } }));
ok('a partial backup knows which sections it contains', partial && partial.present.join() === 'settings');
ok('a full backup contains everything it was given', importSave(exportSave(mine)).present.includes('school'));
process.exit(bad ? 1 : 0);
