// How lively is the career driver market? Simulates winters with plausible standings (car strength + talent + luck) and
// counts AI drivers who change team, retirements, rookies, and the offers a player gets for a given level of results.
// Usage: node tools/market-sim.mjs [seasons=10] [careers=6]   (DIR=<repo> to measure another copy)
const dir = process.env.DIR || new URL('..', import.meta.url).pathname;
const C = await import(dir + '/src/sim/career.js');
const { TEAMS } = await import(dir + '/src/sim/teams.js');
const seasons = +(process.argv[2] || 10), careers = +(process.argv[3] || 6);
const POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
let seed = 7;
const rnd = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
function playSeason(k, playerSkill) {
  const s = k.season, rounds = s.calendar.length;
  s.points = {}; s.teamPoints = {}; s.teamOf = {};
  const entries = [];
  for (let seat = 0; seat < 20; seat++) {
    const id = k.lineup[seat], ti = Math.floor(seat / 2);
    const str = C.teamStrength(k, ti);
    if (id === -1) entries.push({ name: 'You', team: TEAMS[ti].short, q: () => str * 0.7 + playerSkill * 0.3 });
    else { const d = k.drivers.find((x) => x.id === id); entries.push({ name: d.name, team: TEAMS[ti].short, q: () => str * 0.7 + d.talent * 0.3 }); }
  }
  for (let r = 0; r < rounds; r++) {
    const order = entries.map((e) => ({ e, v: e.q() + (rnd() - 0.5) * 0.25 })).sort((a, b) => b.v - a.v);
    order.forEach(({ e }, i) => { const p = POINTS[i] || 0; s.points[e.name] = (s.points[e.name] || 0) + p; s.teamPoints[e.team] = (s.teamPoints[e.team] || 0) + p; s.teamOf[e.name] = e.team; });
    // the reputation moves after every race, as in the game (the same rule, settleRace)
    const pos = order.findIndex((o) => o.e.name === 'You') + 1;
    const mateName = (() => { const id = k.lineup[k.team * 2 + 1]; const d = k.drivers.find((x) => x.id === id); return d && d.name; })();
    const matePos = order.findIndex((o) => o.e.name === mateName) + 1;
    const dRep = C.repDelta({ pos, objective: C.raceObjective(k.team, 20), matePos: matePos || null, finished: true, penalty: 0, fastest: false });
    k.rep = Math.max(0, Math.min(100, (k.rep ?? C.startingRep(k.team)) + dRep * Math.max(0.25, Math.min(1, 4 / rounds))));
  }
  s.round = rounds;
}
for (const [label, skill] of [['beats the car (talent 0.9)', 0.9], ['meets the car (talent 0.65)', 0.65], ['below the car (talent 0.45)', 0.45]]) {
  let moves = 0, retire = 0, rookies = 0, offers = 0, better = 0, lateralOrWorse = 0, winters = 0, playerMoves = 0;
  for (let c = 0; c < careers; c++) {
    const k = C.newCareer({ team: 5 + (c % 3), rounds: 10 });
    for (let y = 0; y < seasons; y++) {
      playSeason(k, skill);
      const before = Object.fromEntries(k.lineup.map((id, seat) => [id, Math.floor(seat / 2)]));
      const rc = C.endSeason(k);
      for (const [seat, id] of k.lineup.entries()) if (id >= 0 && before[id] != null && before[id] !== Math.floor(seat / 2)) moves++;
      retire += rc.market.filter((n) => /retires/.test(n)).length;
      rookies += rc.market.filter((n) => /^Rookie/.test(n)).length;
      offers += rc.offers.length;
      for (const o of rc.offers) (C.teamRank(o) < C.teamRank(k.team) ? better++ : lateralOrWorse++);
      winters++;
      // the player takes the best car offered (offers come best first)
      const bestOffer = rc.offers.length ? rc.offers.reduce((a, b) => (C.teamRank(b) < C.teamRank(a) ? b : a)) : k.team;
      const to = C.teamRank(bestOffer) < C.teamRank(k.team) ? bestOffer : k.team; // moves only for a better car
      if (process.env.NEWS && c === 0 && y < 3) console.log(`winter ${y + 1}:\n  ` + rc.market.join('\n  '));
      if (to !== k.team) playerMoves++;
      C.nextSeason(k, to);
    }
  }
  console.log(`player ${label}: per winter ${(moves / winters).toFixed(1)} AI drivers change team, ${(retire / winters).toFixed(1)} retire, ${(rookies / winters).toFixed(1)} rookies | offers to the player ${(offers / winters).toFixed(1)} a winter (${better} from better teams, ${lateralOrWorse} others) | the player changed team in ${playerMoves} of ${winters} winters`);
}
