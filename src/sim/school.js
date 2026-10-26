// Driving school: short guided lessons. Pure data + a small tracker that turns what the player does into progress.
// The tracker is fed the player's car and the race every frame (and race events), so it is easy to test headlessly.

/** ctx fields the goals read; see SchoolTracker.update. */
export const LESSONS = [
  {
    id: 'launch',
    title: 'Launch & top speed',
    track: 'aurora',
    mode: 'timetrial',
    blurb: 'Hold the throttle, let the gearbox work, and learn what 300 km/h feels like.',
    goals: [
      { id: 'a', text: 'Reach 200 km/h', test: (c) => c.maxKmh >= 200 },
      { id: 'b', text: 'Reach 280 km/h', test: (c) => c.maxKmh >= 280 },
    ],
    tip: 'Hold W. Stay on the road: the grass costs you speed.',
  },
  {
    id: 'brake',
    title: 'Braking in a straight line',
    track: 'mirage',
    mode: 'timetrial',
    blurb: 'Brake hard and straight without locking a wheel. The brake bite is the first skill in racing.',
    goals: [{ id: 'a', text: 'Three clean stops from 200+ km/h (no lock-ups)', test: (c) => c.cleanStops >= 3, progress: (c) => `${Math.min(3, c.cleanStops)}/3` }],
    tip: 'Reach 200 km/h on a straight, then press S firmly and hold it until you stop. Ease off the pedal if the tyres smoke.',
  },
  {
    id: 'line',
    title: 'Clean laps',
    track: 'rade',
    mode: 'timetrial',
    blurb: 'Follow the colours: green keep going, yellow ease off, red brake. Keep it tidy between the walls.',
    goals: [
      { id: 'a', text: 'Two valid laps (no track limits)', test: (c) => c.validLaps >= 2, progress: (c) => `${Math.min(2, c.validLaps)}/2` },
      { id: 'b', text: 'A valid lap under 1:20', test: (c) => c.bestValid <= 80 },
    ],
    tip: 'The racing line guide (L) is on. Smooth steering is quicker than late steering.',
  },
  {
    id: 'drs',
    title: 'DRS',
    track: 'northfield',
    mode: 'timetrial',
    blurb: 'The rear wing flap opens in marked zones for extra top speed. In a race you need to be within a second of the car ahead; here it is always available.',
    goals: [{ id: 'a', text: 'Open the DRS twice (Space on a straight, in a zone)', test: (c) => c.drsOpens >= 2, progress: (c) => `${Math.min(2, c.drsOpens)}/2` }],
    tip: 'Watch for the DRS signs and the green markers at the side of the track. Press Space on the straight; braking closes the flap.',
  },
  {
    id: 'slip',
    title: 'Slipstream and overtaking',
    track: 'northfield',
    mode: 'race',
    level: 0.25,
    fieldSize: 2,
    laps: 5,
    blurb: 'A slow car ahead is a free lesson: tuck in behind it, use the tow down the straight and pull out to pass.',
    goals: [
      { id: 'a', text: 'Close to within 1 second of the car ahead', test: (c) => c.minGap <= 1.0 },
      { id: 'b', text: 'Make an overtake', test: (c) => c.passes >= 1 },
    ],
    tip: 'Stay in its slipstream to gain speed, then pull out early so you are alongside before the braking zone.',
  },
  {
    id: 'pit',
    title: 'Pit stop',
    track: 'rade',
    mode: 'race',
    level: 0.25,
    fieldSize: 2,
    laps: 6,
    tyreWear: 6,
    blurb: 'Press B to call the stop, take the pit lane at the limiter and nail the wheel nuts.',
    goals: [
      { id: 'a', text: 'Complete a pit stop', test: (c) => c.stops >= 1 },
      { id: 'b', text: 'Hit at least three wheel nuts perfectly', test: (c) => c.bestPerfects >= 3 },
    ],
    tip: 'B to call the stop. Press Space as each marker enters the green band.',
  },
  {
    id: 'wet',
    title: 'Wet-weather driving',
    track: 'aurora',
    mode: 'timetrial',
    weather: 'heavy',
    compound: 'wet',
    blurb: 'Rain halves your margin for error. Brake earlier, turn in gently and be smooth with the throttle.',
    goals: [{ id: 'a', text: 'Two valid laps in the rain', test: (c) => c.validLaps >= 2, progress: (c) => `${Math.min(2, c.validLaps)}/2` }],
    tip: 'You are on wet tyres. Everything takes longer: brake earlier and lift through the corners.',
  },
];

export const lessonById = (id) => LESSONS.find((l) => l.id === id) || null;

export class SchoolTracker {
  constructor(lesson) {
    this.lesson = lesson;
    this.ctx = { maxKmh: 0, cleanStops: 0, validLaps: 0, bestValid: Infinity, drsOpens: 0, minGap: Infinity, passes: 0, stops: 0, bestPerfects: 0 };
    this.done = Object.fromEntries(lesson.goals.map((g) => [g.id, false]));
    this.complete = false;
    this._stop = null; // { flat0 } while braking from a high speed
    this._armed = false;
    this._drsOpen = false;
  }

  /** Per-frame update with the player's car; returns true the frame the whole lesson becomes complete. */
  update(dt, car, race) {
    const c = this.ctx;
    const kmh = car.speed * 3.6;
    c.maxKmh = Math.max(c.maxKmh, kmh);
    const open = car.drsPos > 0.5;
    if (open && !this._drsOpen) c.drsOpens++;
    this._drsOpen = open;
    if (race.opt.mode === 'race' && car.gapAhead != null && Number.isFinite(car.gapAhead) && car.ahead) c.minGap = Math.min(c.minGap, car.gapAhead);
    c.passes = car.rs.passes || 0;
    c.stops = car.rs.stops || 0;
    // a clean stop: reach 200 km/h, then brake from there down to a walking pace without flat-spotting a tyre
    const flat = Math.max(car.flat[0], car.flat[1], car.flat[2], car.flat[3]);
    if (kmh > 200) { this._armed = true; this._stop = null; }
    else if (this._armed && !this._stop && car.brake > 0.5) this._stop = { flat0: flat };
    if (this._stop && car.brake < 0.1 && kmh > 30) { this._stop = null; this._armed = false; } // let go too early: not a stop
    if (this._stop && kmh < 25) {
      if (flat - this._stop.flat0 < 0.12) c.cleanStops++;
      this._stop = null;
      this._armed = false;
    }
    return this.check();
  }

  onEvent(e, car) {
    if (e.car !== car) return false;
    const c = this.ctx;
    if (e.type === 'lap' && e.valid) {
      c.validLaps++;
      c.bestValid = Math.min(c.bestValid, e.time);
    }
    if (e.type === 'pitGameDone') c.bestPerfects = Math.max(c.bestPerfects, e.perfects || 0);
    return this.check();
  }

  check() {
    let all = true;
    for (const g of this.lesson.goals) {
      if (!this.done[g.id] && g.test(this.ctx)) this.done[g.id] = true;
      if (!this.done[g.id]) all = false;
    }
    if (all && !this.complete) {
      this.complete = true;
      return true;
    }
    return false;
  }
}

/** Sanitised copy of the saved lesson results: { lessonId: true }. */
export function sanitizeSchool(raw) {
  const out = {};
  if (raw && typeof raw === 'object' && !Array.isArray(raw)) for (const l of LESSONS) if (raw[l.id] === true) out[l.id] = true;
  return out;
}
