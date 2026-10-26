// Lifetime statistics and achievements. Pure data: `ctx` describes one finished session, `stats` is stored in the save.

export const DEFAULT_STATS = { races: 0, wins: 0, podiums: 0, poles: 0, fastestLaps: 0, finished: 0, km: 0, passes: 0, pitStops: 0, perfectStops: 0, rainRaces: 0, nightRaces: 0, careerTitles: 0, championships: 0, cleanRaces: 0, dnf: 0 };

/** { id, name, desc, test(stats, ctx) } - test runs after the stats were updated with this session. */
export const ACHIEVEMENTS = [
  { id: 'first', name: 'Lights out', desc: 'Finish your first race.', test: (s) => s.finished >= 1 },
  { id: 'podium', name: 'On the podium', desc: 'Finish in the top three.', test: (s) => s.podiums >= 1 },
  { id: 'win', name: 'Winner', desc: 'Win a race.', test: (s) => s.wins >= 1 },
  { id: 'win5', name: 'Serial winner', desc: 'Win five races.', test: (s) => s.wins >= 5 },
  { id: 'pole', name: 'Pole position', desc: 'Set the fastest lap in qualifying.', test: (s) => s.poles >= 1 },
  { id: 'fl', name: 'Purple sectors', desc: 'Set the fastest lap of a race.', test: (s) => s.fastestLaps >= 1 },
  { id: 'lastfirst', name: 'From the back', desc: 'Win a race from the last three places on the grid.', test: (s, c) => !!c && c.finishedRace && c.pos === 1 && c.grid >= c.cars - 2 && c.cars >= 8 },
  { id: 'tenpass', name: 'Overtaker', desc: 'Make 10 passes in a single race.', test: (s, c) => !!c && c.passes >= 10 },
  { id: 'clean', name: 'Clean sweep', desc: 'Finish a 3+ lap race on the podium with no penalties and no damage.', test: (s, c) => !!c && c.finishedRace && c.laps >= 3 && c.pos <= 3 && c.penalty === 0 && !c.damaged },
  { id: 'perfectstop', name: 'Pit crew pride', desc: 'Nail all four wheel nuts for a 2.5 second stop.', test: (s) => s.perfectStops >= 1 },
  { id: 'rain', name: 'Rain master', desc: 'Win a race in the rain.', test: (s, c) => !!c && c.finishedRace && c.pos === 1 && c.wet },
  { id: 'night', name: 'Night owl', desc: 'Win a night race.', test: (s, c) => !!c && c.finishedRace && c.pos === 1 && c.night },
  { id: 'legend', name: 'Against the best', desc: 'Win a race against Legend-level opposition.', test: (s, c) => !!c && c.finishedRace && c.pos === 1 && c.level >= 0.95 && c.cars >= 10 },
  { id: 'grid20', name: 'Full house', desc: 'Finish a race with all 20 cars on the grid.', test: (s, c) => !!c && c.cars >= 20 && c.finishedRace },
  { id: 'km500', name: 'Mileage', desc: 'Drive 500 km in total.', test: (s) => s.km >= 500 },
  { id: 'champ', name: 'Champion', desc: 'Win a championship.', test: (s) => s.championships >= 1 },
  { id: 'career', name: 'Career champion', desc: 'Win a drivers\' title in career mode.', test: (s) => s.careerTitles >= 1 },
  { id: 'underdog', name: 'Underdog', desc: 'Finish on the podium in career mode with one of the bottom three teams.', test: (s, c) => !!c && c.finishedRace && c.career && c.teamRank >= 7 && c.pos <= 3 },
  { id: 'veteran', name: 'Veteran', desc: 'Complete 25 races.', test: (s) => s.finished >= 25 },
  { id: 'cleanx5', name: 'Gentleman driver', desc: 'Finish five races without penalties or damage.', test: (s) => s.cleanRaces >= 5 },
];

/** Folds one finished race into the stats; returns the achievement ids newly unlocked. */
export function recordSession(save, ctx) {
  const st = (save.stats = { ...DEFAULT_STATS, ...(save.stats || {}) });
  const have = (save.achievements = save.achievements || {});
  if (ctx.kind === 'race') {
    st.races++;
    if (ctx.finishedRace) st.finished++;
    else st.dnf++;
    if (ctx.pos === 1 && ctx.finishedRace) st.wins++;
    if (ctx.pos <= 3 && ctx.finishedRace) st.podiums++;
    if (ctx.fastest) st.fastestLaps++;
    st.km += ctx.km || 0;
    st.passes += ctx.passes || 0;
    st.pitStops += ctx.stops || 0;
    st.perfectStops += ctx.perfectStops || 0;
    if (ctx.wet) st.rainRaces++;
    if (ctx.night) st.nightRaces++;
    if (ctx.finishedRace && ctx.penalty === 0 && !ctx.damaged) st.cleanRaces++;
  } else if (ctx.kind === 'quali') {
    if (ctx.pos === 1) st.poles++;
    st.km += ctx.km || 0;
  } else if (ctx.kind === 'championship') {
    if (ctx.pos === 1) st.championships++;
  } else if (ctx.kind === 'career') {
    if (ctx.pos === 1) st.careerTitles++;
  }
  const unlocked = [];
  for (const a of ACHIEVEMENTS) {
    if (have[a.id]) continue;
    let ok = false;
    try {
      ok = !!a.test(st, ctx.kind === 'race' || ctx.kind === 'career-race' ? ctx : null);
    } catch (e) {
      ok = false;
    }
    if (ok) {
      have[a.id] = Date.now();
      unlocked.push(a.id);
    }
  }
  return unlocked;
}
