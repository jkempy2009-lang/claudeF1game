// Career storytelling: post-race press conferences with choices that have consequences, rivalries that build over a season,
// newspaper headlines and the race engineer's radio. Pure logic and text (no DOM), deterministic for a given rng.
// First draft by an outside model (a 6.2-class model working blind from a brief); reworked here: every answer set is written
// for its situation (the draft gave the same four answers to every question), promises are tracked and settled, unreachable
// questions are wired up, and a few broken lines fixed. tools/story-samples.mjs exercises all of it.

const pick = (items, rng) => items[Math.min(items.length - 1, Math.floor(rng() * items.length))];
const nameOr = (name, fallback) => (name ? String(name) : fallback);

// ---- press conference ------------------------------------------------------------------------------------------------------

// The questions, by situation. Several can apply after one race; one is picked from all that do.
const PRESS = [
  ['win', 'You looked in control from the first stint. Was that your strongest drive yet?'],
  ['win', 'The team called that a statement. Do you see it that way?'],
  ['win', 'How much did the car make that simple today, and how much was you?'],
  ['win', 'Does a win like that change what you expect from this season?'],
  ['podium', 'A podium: relief, or frustration at what might have been?'],
  ['podium', 'You were on the pace all afternoon. Was there a win in it?'],
  ['podium', 'The team found speed since the last round. What changed?'],
  ['podium', 'Is the top step realistic from here, or is this the ceiling for now?'],
  ['points', 'Points, but only just. How much could a result like this matter in the end?'],
  ['points', 'Was there more in the car than the result shows?'],
  ['points', 'A quiet, tidy afternoon. Is that what the team needs from you right now?'],
  ['bad', 'You went backwards in the second half of the race. What went wrong?'],
  ['bad', 'The pace came in patches, but not over a full stint. Why?'],
  ['bad', 'Was this a missed opportunity for the team?'],
  ['bad', 'You sounded unhappy on the radio. Have you spoken to the engineers yet?'],
  ['dnf', 'A retirement is a hard result to take. Where does the team go from here?'],
  ['dnf', 'Did you have any warning before it ended?'],
  ['dnf', 'You were running well before it stopped. Does that make it harder?'],
  ['dnf', 'Is reliability becoming a concern inside the garage?'],
  ['beatMate', 'You finished ahead of your team-mate again. Is the balance of the garage changing?'],
  ['beatMate', 'Your team-mate had a difficult afternoon. Should the team be worried about the other car?'],
  ['beatMate', 'Beating the other car is the first job, they say. Job done?'],
  ['lostMate', 'Your team-mate beat you comfortably today. Was it simply a better race?'],
  ['lostMate', 'Do you need to change something after losing out to the other car?'],
  ['lostMate', 'The team-mate battle is not going your way at the moment. How do you turn it round?'],
  ['penalty', 'The penalty shaped your race. Do you accept the stewards\' decision?'],
  ['penalty', 'Would you make the same move again, knowing what it cost?'],
  ['wet', 'The conditions caught out several drivers. What made the difference for you?'],
  ['wet', 'How much were you guessing out there in the wet?'],
  ['rainChange', 'The weather kept changing. Did the pit wall get the calls right?'],
  ['title', 'The points picture is tightening. Are you thinking about the title now?'],
  ['title', 'The championship is coming into view. Does that change how you race?'],
  ['contract', 'Your contract runs out at the end of the season. Did today strengthen your position?'],
  ['contract', 'Other teams are watching. Are you talking to anyone?'],
  ['contact', 'There was contact out there. Hard racing, or a step too far?'],
  ['contact', 'The other driver says you left no room. What is your response?'],
  ['rival', 'Your fight with your rival is attracting attention. Is it personal now?'],
  ['rival', 'Every race seems to put the two of you on the same piece of track. Coincidence?'],
  ['fastest', 'The fastest lap: a bonus point, or a message to everyone else?'],
  ['gridGain', 'You made up a lot of places from the grid. Where did the race turn?'],
  ['recovery', 'That was a long way from where you started. Your best recovery drive?'],
  ['gridLoss', 'You lost places from the grid. Is the race pace the problem, or the start?'],
];

// Answers written for each situation: humble / confident / combative / diplomatic, with their effect on reputation (rep),
// the relationship with the team-mate (mate) and the team's morale (team). A confident or combative answer can carry a promise
// that the next few rounds will hold you to (kept: reputation; broken: it costs more than it gained).
// promise: the kind; settled by settlePromises.
const A = (tone, text, rep, mate, team, promise = null) => ({ tone, text, effect: { rep, mate, team }, promise });
const ANSWERS = {
  win: [
    A('humble', 'The team gave me a car that did everything I asked. I just tried not to waste it.', 1, 0, 2),
    A('confident', 'We were quickest all weekend. I expect to be back up here soon.', 2, 0, 1, 'podium'),
    A('combative', 'A few people wrote us off. They might want to write something else now.', 3, -1, 0, 'win'),
    A('diplomatic', 'A good day for everyone in the team. We will enjoy it tonight and start again tomorrow.', 1, 1, 1),
  ],
  podium: [
    A('humble', 'Three cars were quicker than us at times today; we made fewer mistakes. I will take it.', 1, 0, 2),
    A('confident', 'The pace is real. The next step is the top one.', 2, 0, 1, 'win'),
    A('combative', 'With a cleaner first stint we win that. We will not leave it on the table again.', 2, 0, -1, 'podium'),
    A('diplomatic', 'A solid result for the team. There is plenty to learn from the data.', 1, 1, 1),
  ],
  points: [
    A('humble', 'Points are points. We did not have the speed for more, so we took what was there.', 1, 0, 1),
    A('confident', 'We are better than tenth. Expect us further up the order soon.', 1, 0, 1, 'points'),
    A('combative', 'We lost a chunk of time in the pit stop and that cost us places. It needs fixing.', 1, 0, -2, 'points'),
    A('diplomatic', 'A tidy afternoon. Not exciting, but it all counts at the end of the year.', 0, 1, 1),
  ],
  bad: [
    A('humble', 'I did not get the best out of the tyres. That one is on me.', 0, 0, 2),
    A('confident', 'One bad afternoon. We will be in the points next time out.', 1, 0, 0, 'points'),
    A('combative', 'The car was undriveable in the second stint. We need answers, not excuses.', 0, 0, -2),
    A('diplomatic', 'We will look at everything calmly before we say what went wrong.', 0, 0, 1),
  ],
  dnf: [
    A('humble', 'It happens. The team will find out why, and we will come back stronger.', 0, 0, 2),
    A('confident', 'We were in good shape before it stopped. We will show that properly next time.', 1, 0, 1, 'points'),
    A('combative', 'That cannot keep happening. We are throwing away points we have earned.', 0, 0, -2),
    A('diplomatic', 'Frustrating, but nobody in the garage wants that less than the mechanics do.', 0, 1, 2),
  ],
  beatMate: [
    A('humble', 'We pushed each other. Some days it falls my way, some days it will not.', 1, 2, 1),
    A('confident', 'I am on top of the car right now. I want to keep it that way.', 2, -1, 0, 'beatMate'),
    A('combative', 'The first driver you have to beat is the other one in the garage. I am doing that.', 2, -2, 0, 'beatMate'),
    A('diplomatic', 'It is a team result first. They had a tougher afternoon than they deserved.', 1, 2, 1),
  ],
  lostMate: [
    A('humble', 'They did a better job today. I have to look at where I lost the time.', 1, 2, 1),
    A('confident', 'One race. I will be ahead next time.', 1, -1, 0, 'beatMate'),
    A('combative', 'We were on different strategies. I would not read much into it.', 0, -2, -1),
    A('diplomatic', 'Good for the team. I will study their data and learn from it.', 0, 2, 1),
  ],
  penalty: [
    A('humble', 'The stewards saw it and decided. I accept that and I will learn from it.', 1, 0, 1),
    A('confident', 'Even with the penalty we were quick. Next time there will be no penalty to pay.', 1, 0, 0, 'points'),
    A('combative', 'I disagree with it. That was racing, and you cannot race without contact sometimes.', 1, 0, -1),
    A('diplomatic', 'We will talk to the stewards about it privately. There is no point arguing here.', 0, 0, 1),
  ],
  contact: [
    A('humble', 'I misjudged the gap. I will go and speak to them.', 1, 0, 1),
    A('confident', 'I was there first. I would make the same move again.', 1, 0, 0),
    A('combative', 'If they want to race like that, they will find I race like that too.', 2, 0, -1),
    A('diplomatic', 'It was a racing incident. Neither of us wanted it.', 0, 0, 1),
  ],
  rival: [
    A('humble', 'They are quick and they race hard. I respect that.', 1, 0, 1),
    A('confident', 'I enjoy it. And I intend to keep finishing ahead.', 1, 0, 0, 'points'),
    A('combative', 'They seem to take it personally. That is their problem.', 2, 0, -1),
    A('diplomatic', 'It is good racing. That is what people come to watch.', 1, 0, 1),
  ],
  wet: [
    A('humble', 'Mostly I tried to stay on the track. Plenty of people did not.', 1, 0, 1),
    A('confident', 'I like these conditions. It is where you can make a difference.', 2, 0, 0, 'points'),
    A('combative', 'Some drivers should have been more careful out there.', 1, 0, -1),
    A('diplomatic', 'The team made the right calls at the right time. Credit to the pit wall.', 1, 0, 2),
  ],
  title: [
    A('humble', 'It is far too early. We take it one race at a time.', 1, 0, 1),
    A('confident', 'Of course. We are here to win the championship.', 2, 0, 1, 'podium'),
    A('combative', 'The others are the ones who should be worried.', 3, -1, 0, 'win'),
    A('diplomatic', 'The team is fighting for both titles. That matters more than my position.', 1, 1, 2),
  ],
  contract: [
    A('humble', 'I want to stay here. The results will do the talking.', 0, 0, 2),
    A('confident', 'I am driving well. I expect plenty of teams want to talk to me.', 2, 0, -1, 'points'),
    A('combative', 'If this team does not want me, others will.', 2, 0, -2),
    A('diplomatic', 'My manager handles that. I am concentrating on the next race.', 0, 0, 1),
  ],
  fastest: [
    A('humble', 'Clean air and fresh tyres at the end. It was there, so we took it.', 1, 0, 1),
    A('confident', 'It shows where the pace is. We will be quicker still.', 2, 0, 0, 'points'),
    A('combative', 'Everyone saw that lap. They know what we can do.', 2, 0, 0, 'podium'),
    A('diplomatic', 'A useful extra point for the team.', 1, 0, 1),
  ],
  recovery: [
    A('humble', 'The car came alive in the race. The engineers deserve the credit.', 1, 0, 2),
    A('confident', 'Start us further up and we will be fighting for more.', 2, 0, 0, 'points'),
    A('combative', 'We had no business starting back there. Qualifying has to be sorted.', 1, 0, -1),
    A('diplomatic', 'A good recovery and good points. We will take that.', 1, 0, 1),
  ],
  gridLoss: [
    A('humble', 'I got the start wrong and then had to fight from behind. My mistake.', 1, 0, 1),
    A('confident', 'The race pace is fine. Sort the start and we move forward.', 1, 0, 0, 'points'),
    A('combative', 'The car was a handful on the full fuel load. We need more from the set-up.', 0, 0, -2),
    A('diplomatic', 'We will look at the first lap closely and learn from it.', 0, 0, 1),
  ],
};
const ANSWER_SET = { gridGain: 'recovery', rainChange: 'wet' };

/**
 * A post-race press-conference question and three or four answers that fit the situation.
 * ctx: { pos, grid, matePos, dnf, penalties: [{secs, reason}], weather, contact: [names], rival, fastestLap, champPos, round,
 * rounds, contractYears }. Returns { tag, question, answers: [{ tone, text, effect: {rep, mate, team}, promise }] } where a
 * promise is { kind: 'beatMate'|'podium'|'win'|'points', byRound } or null.
 * @param {object} ctx
 * @param {() => number} rng
 */
export function pressConference(ctx, rng) {
  const tags = [];
  const pos = ctx.pos || 20;
  const grid = ctx.grid || pos;
  if (ctx.dnf) tags.push('dnf');
  else if (pos === 1) tags.push('win');
  else if (pos <= 3) tags.push('podium');
  else if (pos <= 10) tags.push('points');
  else tags.push('bad');
  if (!ctx.dnf && ctx.matePos) tags.push(pos < ctx.matePos ? 'beatMate' : 'lostMate');
  if (ctx.penalties && ctx.penalties.length) tags.push('penalty');
  if (ctx.weather === 'light' || ctx.weather === 'heavy') tags.push('wet');
  if (ctx.weather === 'changing') tags.push('rainChange');
  if (ctx.contact && ctx.contact.length) tags.push('contact');
  else if (ctx.rival) tags.push('rival');
  if (ctx.fastestLap) tags.push('fastest');
  if (!ctx.dnf && grid - pos >= 6) tags.push('recovery');
  else if (!ctx.dnf && grid - pos >= 3) tags.push('gridGain');
  if (!ctx.dnf && pos - grid >= 3) tags.push('gridLoss');
  if (ctx.champPos && ctx.champPos <= 3 && (ctx.round || 0) >= Math.ceil((ctx.rounds || 1) / 2)) tags.push('title');
  if (ctx.contractYears === 1 && (ctx.round || 0) >= Math.ceil((ctx.rounds || 1) / 2)) tags.push('contract');

  const candidates = PRESS.filter(([tag]) => tags.includes(tag));
  const [tag, question] = pick(candidates.length ? candidates : PRESS.filter(([t]) => t === 'points'), rng);
  const set = ANSWERS[ANSWER_SET[tag] || tag] || ANSWERS.points;
  const round = ctx.round || 1;
  const byRound = Math.min(round + 3, Math.max(round + 1, ctx.rounds || round + 3));
  const answers = set.map((a) => ({
    tone: a.tone,
    text: a.text,
    effect: { ...a.effect },
    // a promise needs races left to keep it in; in the last round there are none, so nothing is promised
    promise: a.promise && round < (ctx.rounds || round + 1) ? { kind: a.promise, byRound } : null,
  }));
  return { tag, question, answers };
}

/**
 * Settles the promises made in earlier press conferences against the latest race. A promise is kept by the race that
 * fulfils it; one still open after its last round is broken. Returns the promises still open, the reputation change and
 * news lines. result: { round, pos, dnf, matePos }.
 * @param {Array<{kind:string, byRound:number, made:number}>} promises
 * @param {object} result
 */
export function settlePromises(promises, result) {
  const open = [];
  const news = [];
  let rep = 0;
  const done = (p) => {
    if (result.dnf) return false;
    if (p.kind === 'win') return result.pos === 1;
    if (p.kind === 'podium') return result.pos <= 3;
    if (p.kind === 'points') return result.pos <= 10;
    if (p.kind === 'beatMate') return result.matePos ? result.pos < result.matePos : false;
    return false;
  };
  const WHAT = { win: 'a win', podium: 'a podium', points: 'points', beatMate: 'beating the team-mate' };
  for (const p of promises || []) {
    if (result.round <= p.made) { open.push(p); continue; } // not the race it was made after
    if (done(p)) { rep += p.kind === 'win' ? 3 : 2; news.push(`You promised ${WHAT[p.kind] || 'a result'} and delivered it. The paddock noticed.`); }
    else if (result.round >= p.byRound) { rep -= p.kind === 'win' ? 4 : 3; news.push(`The promise of ${WHAT[p.kind] || 'a result'} has come back to bite: the press remembers what you said.`); }
    else open.push(p);
  }
  return { promises: open, rep, news };
}

// ---- headlines ----------------------------------------------------------------------------------------------------------

const H = {
  win: [
    (c) => `${c.driver} takes a measured victory for ${c.team}`,
    (c) => `${c.team} converts pace into a decisive win`,
    (c) => `${c.driver} keeps cool to claim the top step at ${c.track}`,
    (c) => `Late control delivers victory for ${c.driver}`,
    (c) => `${c.driver} leads ${c.team} to a timely win`,
    (c) => `No drama at the flag as ${c.driver} wins at ${c.track}`,
    (c) => `${c.team} finds the answer at ${c.track}`,
    (c) => `A composed drive puts ${c.driver} on top`,
    (c) => `${c.driver} beats the field, and the clock, at ${c.track}`,
    (c) => `Nobody could live with ${c.driver} at ${c.track}`,
  ],
  pole: [
    (c) => `${c.driver} turns pole position into victory`,
    (c) => `Lights to flag: ${c.driver} untouchable at ${c.track}`,
  ],
  podium: [
    (c) => `Podium gives ${c.team} fresh momentum`,
    (c) => `${c.driver} takes a hard-earned place in the top three`,
    (c) => `Measured strategy puts ${c.driver} on the podium`,
    (c) => `${c.team} celebrates a podium at ${c.track}`,
    (c) => `Strong final stint secures silverware for ${c.driver}`,
    (c) => `${c.driver} holds nerve for a valuable podium`,
    (c) => `A cleaner Sunday lifts ${c.driver} into the top three`,
    (c) => `Champagne for ${c.team} after ${c.driver}'s podium`,
  ],
  points: [
    (c) => `${c.driver} salvages points at ${c.track}`,
    (c) => `Useful points for ${c.team} after a tactical race`,
    (c) => `${c.driver} fights through for a top-ten finish`,
    (c) => `Late move brings points for ${c.driver}`,
    (c) => `${c.team} leaves ${c.track} with something to show`,
    (c) => `Steady drive earns ${c.driver} championship points`,
    (c) => `Top-ten finish keeps ${c.team} moving forward`,
    (c) => `Quiet competence: points for ${c.driver}`,
  ],
  bad: [
    (c) => `No reward for ${c.team} at ${c.track}`,
    (c) => `${c.driver} left searching for answers after a quiet Sunday`,
    (c) => `Strategy gamble fails to bring points for ${c.team}`,
    (c) => `Frustration for ${c.driver} as the race slips away`,
    (c) => `${c.team} misses out after a crowded midfield fight`,
    (c) => `A long afternoon ends outside the points for ${c.driver}`,
    (c) => `${c.driver} anonymous at ${c.track}`,
  ],
  dnf: [
    (c) => `Retirement halts ${c.driver} at ${c.track}`,
    (c) => `${c.team} left counting the cost of a retirement`,
    (c) => `Promising run ends early for ${c.driver}`,
    (c) => `Zero points for ${c.team} after ${c.driver} stops`,
    (c) => `${c.driver}'s race over before the flag at ${c.track}`,
    (c) => `A wasted weekend for ${c.team}`,
  ],
  failure: [
    (c) => `Reliability blow costs ${c.team} at ${c.track}`,
    (c) => `Mechanical trouble denies ${c.driver} a result`,
  ],
  crash: [
    (c) => `${c.driver} goes off and out at ${c.track}`,
    (c) => `Costly mistake ends ${c.driver}'s afternoon`,
  ],
  penalty: [
    (c) => `Penalty reshapes ${c.driver}'s afternoon`,
    (c) => `Stewards' decision leaves ${c.team} with work to do`,
    (c) => `${c.driver} pays the price for an ambitious move`,
    (c) => `Time penalty turns points into frustration for ${c.driver}`,
  ],
  wet: [
    (c) => `Wet race rewards ${c.driver}'s calm judgement`,
    (c) => `Rain scrambles the order at ${c.track}`,
    (c) => `Rain makes a strategist of ${c.team}`,
    (c) => `${c.driver} survives a treacherous afternoon at ${c.track}`,
  ],
  fastest: [
    (c) => `Fastest lap adds a sharp edge to ${c.driver}'s result`,
    (c) => `${c.driver} sets the fastest lap at ${c.track}`,
  ],
  beatMate: [
    (c) => `${c.driver} gets the better of ${c.mate} again`,
    (c) => `${c.driver} edges ${c.mate} in the internal contest`,
    (c) => `Advantage ${c.driver} in the ${c.team} garage`,
  ],
  lostMate: [
    (c) => `${c.mate} gets the better of ${c.driver} at ${c.team}`,
    (c) => `${c.mate} leads the way for ${c.team}`,
    (c) => `Questions for ${c.driver} as ${c.mate} finishes ahead`,
  ],
  rival: [
    (c) => `${c.driver} and ${c.rival} renew their duel`,
    (c) => `${c.driver} and ${c.rival} trade blows again`,
    (c) => `Another chapter in ${c.driver} against ${c.rival}`,
  ],
  contact: [
    (c) => `Contact sparks tension between ${c.driver} and ${c.other}`,
    (c) => `${c.driver} and ${c.other} collide at ${c.track}`,
  ],
  title: [
    (c) => `Championship picture tightens after ${c.track}`,
    (c) => `${c.driver} keeps title hopes alive`,
    (c) => `Title race heats up at ${c.track}`,
  ],
  recovery: [
    (c) => `${c.driver} makes the late charge count`,
    (c) => `From P${c.grid} to P${c.pos}: ${c.driver}'s recovery`,
    (c) => `${c.driver} carves through the field at ${c.track}`,
  ],
};

/**
 * A race headline that fits what happened; many variants. ctx: as pressConference, plus driver, team, mate, track.
 * @param {object} ctx
 * @param {() => number} rng
 * @returns {string}
 */
export function headline(ctx, rng) {
  const pos = ctx.pos || 20;
  const v = {
    driver: nameOr(ctx.driver, 'You'), team: nameOr(ctx.team, 'the team'), mate: nameOr(ctx.mate, 'the team-mate'),
    rival: nameOr(ctx.rival, 'the rival'), track: nameOr(ctx.track, 'the circuit'), grid: ctx.grid || pos, pos,
    other: nameOr(ctx.contact && ctx.contact[0], 'a rival'),
  };
  // the main story of the race first; the side stories get a smaller share
  const main = ctx.dnf ? [...H.dnf, ...(ctx.dnf === 'Crash' ? H.crash : /driver/i.test(ctx.dnf) ? [] : H.failure)]
    : pos === 1 ? [...H.win, ...(ctx.grid === 1 ? H.pole : [])] : pos <= 3 ? H.podium : pos <= 10 ? H.points : H.bad;
  const side = [];
  if (ctx.penalties && ctx.penalties.length) side.push(...H.penalty);
  if (ctx.weather === 'light' || ctx.weather === 'heavy' || ctx.weather === 'changing') side.push(...H.wet);
  if (ctx.fastestLap && !ctx.dnf) side.push(...H.fastest);
  if (!ctx.dnf && ctx.matePos && ctx.mate) side.push(...(pos < ctx.matePos ? H.beatMate : H.lostMate));
  if (ctx.contact && ctx.contact.length) side.push(...H.contact);
  else if (ctx.rival) side.push(...H.rival);
  if (!ctx.dnf && v.grid - pos >= 5) side.push(...H.recovery);
  if (ctx.champPos && ctx.champPos <= 3 && (ctx.round || 0) >= Math.ceil((ctx.rounds || 1) / 2)) side.push(...H.title);
  const pool = side.length && rng() < 0.4 ? side : main;
  const t = pick(pool, rng)(v);
  return t.charAt(0).toUpperCase() + t.slice(1);
}

// ---- rivalries ----------------------------------------------------------------------------------------------------------

/**
 * Tracks who the player keeps fighting with: contact counts double, positions swapped on track count, and a close finish
 * (within a place, either side) counts once. Heat builds over races and cools when you stop meeting; a rival is declared
 * at heat 8 and dropped below 4. state is JSON-serialisable and small (at most 8 names kept).
 * race: { round, player: name, order: [{ name, pos, contactWith: [names], overtook: [names] }] }
 * @param {object|null} state
 * @param {object} race
 * @param {() => number} rng
 * @returns {{state: object, news: string[]}}
 */
export function rivalryUpdate(state, race, rng) {
  const next = state && typeof state === 'object' ? JSON.parse(JSON.stringify(state)) : { rivals: {}, active: null, round: 0 };
  next.rivals = next.rivals || {};
  next.round = race.round || next.round + 1;
  const order = race.order || [];
  const me = order.find((e) => e.name === (race.player || 'You') || e.player);
  if (!me) return { state: next, news: [] };
  const news = [];
  const heat = new Map();
  const add = (name, h, kind) => {
    if (!name || name === me.name) return;
    const x = heat.get(name) || { h: 0, contact: false, swap: false };
    x.h += h;
    if (kind === 'contact') x.contact = true;
    if (kind === 'swap') x.swap = true;
    heat.set(name, x);
  };
  for (const n of me.contactWith || []) add(n, 4, 'contact');
  for (const n of me.overtook || []) add(n, 2, 'swap');
  for (const e of order) {
    if ((e.contactWith || []).includes(me.name) && !(me.contactWith || []).includes(e.name)) add(e.name, 4, 'contact');
    if ((e.overtook || []).includes(me.name)) add(e.name, 2, 'swap');
    if (me.pos && e.pos && Math.abs(e.pos - me.pos) === 1) add(e.name, 1, 'close');
  }
  for (const [name, x] of heat) {
    const r = next.rivals[name] || { heat: 0, meetings: 0, last: 0 };
    r.heat = Math.min(12, r.heat + x.h);
    r.meetings += 1;
    r.last = next.round;
    next.rivals[name] = r;
    if (r.heat >= 8 && next.active !== name) {
      next.active = name;
      news.push(pick([
        `${name} and you: the paddock has a new rivalry to talk about.`,
        `Another race, another fight with ${name}. It is becoming a rivalry.`,
        `${name} keeps turning up in your mirrors, and you in theirs.`,
      ], rng));
    } else if (x.contact && r.heat >= 5) news.push(`More contact with ${name}. Neither side is backing down.`);
    else if (x.swap && r.heat >= 6 && rng() > 0.35) news.push(`You and ${name} swapped places again.`);
  }
  for (const [name, r] of Object.entries(next.rivals)) {
    if (heat.has(name)) continue;
    r.heat = Math.max(0, r.heat - (next.round - r.last > 2 ? 2 : 1));
    if (r.heat === 0) delete next.rivals[name];
  }
  // keep the state small: the eight hottest
  const keep = Object.entries(next.rivals).sort((a, b) => b[1].heat - a[1].heat).slice(0, 8);
  next.rivals = Object.fromEntries(keep);
  if (next.active && (!next.rivals[next.active] || next.rivals[next.active].heat < 4)) {
    news.push(`The edge has gone out of your rivalry with ${next.active}.`);
    next.active = null;
  }
  return { state: next, news };
}

// ---- the race engineer -----------------------------------------------------------------------------------------------------

const RADIO = {
  lightsOut: [
    'Lights out. Good launch, build into it.', 'Away we go. Mind the wheelspin.', 'Race start. Keep it tidy into turn one.',
    'Lights out, hold your line.', 'Good getaway. Settle in.', 'We are racing. Eyes up.', 'Clean start. Long way to go.',
    'Green light, everybody is racing. Be patient.',
  ],
  lapsLeft: [
    ({ n }) => `${n} laps remaining. Keep hitting your marks.`, ({ n }) => `${n} to go. This is still on.`,
    ({ n }) => `${n} laps left. Look after the tyres.`, ({ n }) => `${n} remaining. Stay disciplined.`,
    ({ n }) => `${n} laps. Plenty of race left.`, ({ n }) => `${n} to the flag. Good pace.`,
    ({ n }) => `${n} laps remaining. Keep the pressure on.`, ({ n }) => `${n} left. Bring it home cleanly.`,
  ],
  lastLap: [
    'Last lap. No mistakes now.', 'Final lap. Bring it home.', 'This is the last lap. Clean and tidy.',
    'Last lap. Everything you have got, but stay on the track.', 'One to go. Keep it out of the walls.',
    'Final lap. Watch the car behind into the last sector.', 'Last lap. Hit your marks.', 'White flag. Bring it home.',
  ],
  gapAhead: [
    ({ s }) => `Car ahead is ${s.toFixed(1)} seconds.`, ({ s }) => `${s.toFixed(1)} seconds to the car in front.`,
    ({ s }) => `Gap ahead: ${s.toFixed(1)}.`, ({ s }) => `You are ${s.toFixed(1)} behind the car ahead.`,
    ({ s }) => `Target ahead is ${s.toFixed(1)} away.`, ({ s }) => `${s.toFixed(1)} to the next car. Push when ready.`,
    ({ s }) => `Gap ahead holding at ${s.toFixed(1)}.`, ({ s }) => `Car ahead, ${s.toFixed(1)} seconds.`,
  ],
  gapBehind: [
    ({ s }) => `Car behind is ${s.toFixed(1)} seconds back.`, ({ s }) => `${s.toFixed(1)} behind. Keep it neat.`,
    ({ s }) => `Gap behind: ${s.toFixed(1)}.`, ({ s }) => `You have ${s.toFixed(1)} in hand.`,
    ({ s }) => `Gap to the car behind is ${s.toFixed(1)} seconds.`, ({ s }) => `${s.toFixed(1)} to the car behind.`,
    ({ s }) => `Car behind closing slowly, ${s.toFixed(1)}.`, ({ s }) => `Defend only if you need to. Gap is ${s.toFixed(1)}.`,
  ],
  fastestLap: [
    'Fastest lap. Strong work.', 'Fastest lap of the race.', 'Purple lap. Keep that reference.', 'That is the quickest lap so far.',
    'Fastest lap, nicely done.', 'You have the fastest lap.', 'Purple sectors and the fastest lap.', 'That lap puts us top of the timing.',
  ],
  pitWindow: [
    ({ lap, compound }) => `Pit window opens on lap ${lap} for the ${compound}.`, ({ lap, compound }) => `The ${compound} is on from lap ${lap}.`,
    ({ lap, compound }) => `Strategy: lap ${lap}, ${compound}.`, ({ lap, compound }) => `We can box on lap ${lap} for the ${compound}.`,
    ({ lap, compound }) => `${compound} window begins lap ${lap}.`, ({ lap, compound }) => `Think about the ${compound} from lap ${lap}.`,
    ({ lap, compound }) => `Lap ${lap} is our earliest ${compound} stop.`, ({ lap, compound }) => `Pit window lap ${lap}, ${compound}.`,
  ],
  boxBox: [
    'Box, box. Confirmed.', 'Box this lap, box.', 'Pit this lap. Pit confirm.', 'Box now. We are ready for you.',
    'Box, box. Hit your marks.', 'Pit lane this lap.', 'You are boxing. Watch the limiter.', 'Box at the end of this lap.',
  ],
  rainComing: [
    ({ laps }) => `Rain expected in about ${laps} laps.`, ({ laps }) => `Weather coming in, about ${laps} laps.`,
    ({ laps }) => `Radar says rain in ${laps} laps.`, ({ laps }) => `Expect rain in ${laps} laps.`,
    ({ laps }) => `Light rain approaching, ${laps} laps.`, ({ laps }) => `Conditions may change in ${laps} laps.`,
    ({ laps }) => `Rain is on its way, ${laps} laps or so.`, ({ laps }) => `Be ready for rain in around ${laps} laps.`,
  ],
  damage: [
    ({ part }) => `Damage on the ${part}. We are checking it.`, ({ part }) => `We see damage to the ${part}. Keep us informed.`,
    ({ part }) => `${part} damage confirmed. Drive around it if you can.`, ({ part }) => `The ${part} is compromised.`,
    ({ part }) => `We see an issue with the ${part}.`, ({ part }) => `${part} damage, but the car is running.`,
    ({ part }) => `Damage on the ${part}. Stay off the kerbs.`, ({ part }) => `We have logged ${part} damage.`,
  ],
  penalty: [
    ({ secs, reason }) => `${secs}-second penalty for ${reason}.`, ({ secs, reason }) => `Penalty: ${secs} seconds, ${reason}.`,
    ({ secs, reason }) => `We have ${secs} seconds for ${reason}.`, ({ secs, reason }) => `${reason}. That is ${secs} seconds.`,
    ({ secs, reason }) => `The stewards have given us ${secs} seconds for ${reason}.`, ({ secs, reason }) => `Penalty confirmed: ${secs} seconds, ${reason}.`,
    ({ secs, reason }) => `We need to cover ${secs} seconds. Reason: ${reason}.`, ({ secs, reason }) => `${secs} seconds added for ${reason}.`,
  ],
  blueFlags: [
    'Blue flags. Let the faster car through cleanly.', 'Blue flag. Give them room at a safe point.', 'Leaders approaching. Blue flags.',
    'Blue flag, no need to fight this one.', 'Let the car behind through safely.', 'Blue flags. Keep it tidy.',
    'Faster car arriving. Give it up cleanly.', 'Blue flag. We get our rhythm back afterwards.',
  ],
  safetyCar: [
    'Safety car deployed. Keep the delta positive.', 'Safety car. Slow down and watch the delta.', 'Safety car is out. No risks.',
    'Safety car. Look after the tyres.', 'Safety car period. Stay above the delta.', 'Safety car, safety car.',
    'Neutralised. Keep heat in the tyres.', 'Safety car has been called.',
  ],
  vsc: [
    'Virtual safety car. Delta positive.', 'VSC deployed. Watch your delta.', 'Virtual safety car. Reduce pace now.',
    'VSC. No overtaking.', 'Delta is live. VSC.', 'Virtual safety car, keep it legal.', 'VSC. Lift and hold the delta.',
    'Virtual safety car has been called.',
  ],
  positionGained: [
    ({ pos }) => `That is P${pos}. Good move.`, ({ pos }) => `Position gained, P${pos}.`, ({ pos }) => `Up to P${pos}. Keep going.`,
    ({ pos }) => `Nice pass. You are P${pos}.`, ({ pos }) => `P${pos} now. Clean work.`, ({ pos }) => `You have P${pos}. Reset and focus.`,
    ({ pos }) => `P${pos}. Well judged.`, ({ pos }) => `Up one place, P${pos}.`,
  ],
  positionLost: [
    ({ pos }) => `We have dropped to P${pos}. Reset.`, ({ pos }) => `P${pos} now. Stay with them.`, ({ pos }) => `Position lost, P${pos}.`,
    ({ pos }) => `Down to P${pos}. Keep your head.`, ({ pos }) => `You are P${pos}. We can get that back.`,
    ({ pos }) => `P${pos}. Focus on your exits.`, ({ pos }) => `Lost that place, now P${pos}.`, ({ pos }) => `P${pos} for now. Keep pressing.`,
  ],
  tyresGone: [
    'Tyres are dropping away. Be gentle on traction.', 'We are seeing the tyres fall off now.', 'Tyres are gone. Manage what is left.',
    'Rear grip is fading. Short-shift if you need to.', 'The tyres are past their best. Look after them.', 'Grip is falling quickly now.',
    'Tyre life is critical. Stay smooth.', 'We need to nurse these tyres to the stop.',
  ],
  finish: [
    ({ pos }) => `Chequered flag. P${pos}, good job.`, ({ pos }) => `That is the flag. We finish P${pos}.`,
    ({ pos }) => `Race complete, P${pos}. Well done.`, ({ pos }) => `Chequered flag. P${pos} today.`,
    ({ pos }) => `P${pos} at the finish. Thank you.`, ({ pos }) => `That is it. P${pos}.`,
    ({ pos }) => `Flag is out. P${pos}.`, ({ pos }) => `Race over. P${pos}, good effort.`,
  ],
  win: [
    'Yes! You have won the race! Get in there!', 'P1! That is a win! Fantastic drive.', 'You are the winner! Brilliant, absolutely brilliant.',
    'Race winner! What a drive.', 'That is the win! Enjoy the slow-down lap.', 'P1, P1! Superb job.',
    'You did it. Race winner. Thank you for that.', 'Chequered flag and you are the winner!',
  ],
};

const radioHistory = new Map();

/**
 * A short engineer line for a race event, or null for an unknown event. The same line never repeats within the last five
 * calls for that event (the history is module state; resetRadio clears it).
 * @param {string} event
 * @param {object} ctx event values ({n}, {s}, {pos}, {lap, compound}, {laps}, {part}, {secs, reason})
 * @param {() => number} rng
 * @returns {string|null}
 */
export function engineerRadio(event, ctx = {}, rng = Math.random) {
  const options = RADIO[event];
  if (!options) return null;
  const history = radioHistory.get(event) || [];
  const start = Math.min(options.length - 1, Math.floor(rng() * options.length));
  for (let step = 0; step < options.length; step++) {
    const candidate = options[(start + step) % options.length];
    const line = typeof candidate === 'function' ? candidate(ctx) : candidate;
    if (!history.includes(line)) {
      history.push(line);
      if (history.length > 5) history.shift();
      radioHistory.set(event, history);
      return line;
    }
  }
  return null;
}

/** Clears the radio's repeat protection (a new session). */
export function resetRadio() {
  radioHistory.clear();
}

/** The events engineerRadio knows. */
export const RADIO_EVENTS = Object.keys(RADIO);
