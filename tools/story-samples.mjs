// Runs every function in src/sim/story.js over 20 varied fake races with a seeded rng, prints a sample of the text, and checks
// it: no 'undefined', 'null', 'NaN' or template braces, no doubled spaces, no radio line repeated within five calls, effects in
// range, promises only on confident or combative answers, deterministic for a seed. Usage: node tools/story-samples.mjs [quiet]
import { pressConference, headline, rivalryUpdate, engineerRadio, resetRadio, settlePromises, RADIO_EVENTS } from '../src/sim/story.js';

const quiet = process.argv[2] === 'quiet';
let bad = 0;
const fail = (msg) => { bad++; console.log('FAIL', msg); };
const rngFor = (seed) => { let s = seed >>> 0 || 1; return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296); };
const checkText = (where, t) => {
  if (typeof t !== 'string' || !t.length) return fail(`${where}: empty`);
  if (/undefined|null|NaN|[{}]|\$\{/.test(t)) fail(`${where}: "${t}"`);
  if (/ {2}/.test(t)) fail(`${where}: doubled space in "${t}"`);
};
const NAMES = ['Hana Weiss', 'Marco Benedetti', 'Lukas Brandt', 'Ayo Okafor', 'Rafael Duarte', 'Kenji Mori'];
const TRACKS = ['Circuit de la Rade', 'Neon Crescent', 'Kasbah Streets', 'Meridian Airfield'];
const WEATHER = ['dry', 'light', 'heavy', 'changing'];
const DNF = [null, null, null, null, 'Power unit', 'Crash', 'Retired by the driver'];

function race(i, rng) {
  const pos = 1 + Math.floor(rng() * 20);
  const grid = 1 + Math.floor(rng() * 20);
  const dnf = DNF[Math.floor(rng() * DNF.length)];
  const contact = rng() < 0.3 ? [NAMES[1 + Math.floor(rng() * 5)]] : [];
  return {
    driver: i % 2 ? 'ABC' : 'the Kestrel #7', team: 'Kestrel', mate: 'Hana Weiss', track: TRACKS[i % TRACKS.length], weather: WEATHER[i % 4],
    pos, grid, objective: 10, matePos: 1 + ((pos + 7) % 20), points: i * 4, champPos: 1 + (i % 6), rep: 50, round: 1 + (i % 10),
    rounds: 10, seasonNo: 1, dnf, penalties: rng() < 0.2 ? [{ secs: 5, reason: 'causing a collision' }] : [], fastestLap: rng() < 0.15,
    contact, rival: rng() < 0.3 ? NAMES[2] : null, contractYears: i % 3 === 0 ? 1 : 2,
  };
}

function run(seed) {
  const rng = rngFor(seed);
  const out = [];
  let rivals = null, promises = [];
  resetRadio();
  for (let i = 0; i < 20; i++) {
    const ctx = race(i, rng);
    const pc = pressConference(ctx, rng);
    checkText(`press q ${i}`, pc.question);
    if (pc.answers.length < 3 || pc.answers.length > 4) fail(`press ${i}: ${pc.answers.length} answers`);
    for (const a of pc.answers) {
      checkText(`press a ${i}`, a.text);
      if (Math.abs(a.effect.rep) > 3 || Math.abs(a.effect.mate) > 2 || Math.abs(a.effect.team) > 2) fail(`effect out of range: ${JSON.stringify(a.effect)}`);
      if (a.promise && !['confident', 'combative'].includes(a.tone)) fail(`a ${a.tone} answer promises something`);
      if (a.promise && !(a.promise.byRound > ctx.round)) fail('a promise with no race left to keep it');
    }
    const choice = pc.answers[Math.floor(rng() * pc.answers.length)];
    if (choice.promise) promises.push({ ...choice.promise, made: ctx.round });
    const settled = settlePromises(promises, { round: ctx.round + 1, pos: 1 + Math.floor(rng() * 20), dnf: null, matePos: 9 });
    promises = settled.promises;
    settled.news.forEach((n) => checkText('promise news', n));
    const h = headline(ctx, rng);
    checkText(`headline ${i}`, h);
    const order = Array.from({ length: 20 }, (_, k) => ({ name: k === ctx.pos - 1 ? 'You' : NAMES[k % NAMES.length] + (k >= NAMES.length ? ' ' + k : ''), pos: k + 1, contactWith: [], overtook: [] }));
    const me = order.find((o) => o.name === 'You');
    me.contactWith = ctx.contact;
    if (rng() < 0.5) me.overtook = [NAMES[2]];
    const ru = rivalryUpdate(rivals, { round: i + 1, player: 'You', order }, rng);
    rivals = ru.state;
    ru.news.forEach((n) => checkText('rival news', n));
    if (JSON.stringify(rivals).length > 2048) fail('rivalry state over 2 KB');
    out.push({ q: pc.question, a: choice.text, h, news: ru.news });
  }
  // radio: every event, 12 calls each, no line repeated within five calls
  const ctxFor = { n: 5, s: 1.4, pos: 6, lap: 18, compound: 'medium', laps: 3, part: 'front wing', secs: 5, reason: 'track limits' };
  for (const ev of RADIO_EVENTS) {
    const last = [];
    for (let k = 0; k < 12; k++) {
      const line = engineerRadio(ev, ctxFor, rng);
      checkText(`radio ${ev}`, line);
      if (last.slice(-5).includes(line)) fail(`radio ${ev} repeats "${line}" within five calls`);
      last.push(line);
    }
  }
  if (engineerRadio('nonsense', {}, rng) !== null) fail('unknown radio event should give null');
  return { out, rivals };
}

const a = run(7), b = run(7);
if (JSON.stringify(a) !== JSON.stringify(b)) fail('not deterministic for the same seed');
for (let s = 1; s <= 30; s++) run(s);
if (!quiet) {
  for (const r of a.out.slice(0, 6)) console.log(`\n${r.h}\n  Q: ${r.q}\n  A: ${r.a}${r.news.length ? '\n  ' + r.news.join('\n  ') : ''}`);
  console.log('\nrivalry state:', JSON.stringify(a.rivals));
}
console.log(bad ? `story: ${bad} problems` : 'story: ok');
process.exit(bad ? 1 : 0);
