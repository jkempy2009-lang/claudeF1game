# Changelog

## 1.2 - the big overnight update

Everything below was added or fixed in this release, grouped by area.

### New game modes
- **Qualifying** (main menu: *Qualify & race*, or the *Qualifying session first* toggle in the race setup): a 3-minute session with all 20 cars on track. Cars leave the grid 2.4 s apart, collisions are off, DRS is free, the session ends when the clock runs out and each car completes the lap in progress. The classification screen shows every car's best lap and gap; *Start race from Pn* builds the race grid from the result (player and AI alike).
- **Career mode**: choose a team (the weaker the car, the tougher the start), difficulty, calendar length (4 or 8 rounds) and race distance (Sprint / Standard / Grand Prix). Each race pays prize money by finishing position, with a bonus for hitting the team objective and for the fastest lap. Money buys car upgrades (power unit, aerodynamics, chassis & tyres, six levels each). After the final round you get a season recap (position, constructors' result, wins, podiums, a season bonus) and contract offers from better teams if you earned them. Difficulty rises a little each season. All saved in `localStorage`.
- **Championship** now uses the same season framework: calendar, drivers' and constructors' standings after every round, a season-end screen and a history of your last seasons.
- **Instant replay**: the last 30 seconds of the race for every car are recorded (30 Hz ring buffer) and can be replayed from the pause menu or the results screen with TV / chase / low / helicopter / cockpit / T-cam cameras, slow motion, scrubbing and a choice of which car to follow.
- **Photo mode** (pause menu): free-fly camera with mouse look, zoom and a one-click PNG capture.

### New circuits (6)
- *Autódromo Costa Azul* (coastal, rolling, 4.6 km), *Monte Aurora Ring* (alpine, winding, 3.8 km), *Mirage International Circuit* (desert, two huge straights, 5.1 km) and *Parc Lumière* (tight city park, 3.8 km). All have pits, auto-generated DRS zones, brake boards, kerbs, run-off, scenery, recommended wing setups and clean AI laps. *Porto Vecchio Harbour Circuit* (street, 4.3 km, a long waterfront straight into slow docks) and *Sakura Ridge Circuit* (wooded ridge, 5.5 km, 36 m of elevation change). The long career calendar now uses all ten circuits. `node tools/checktrack.mjs` reports length, self-clearance, tightest radius and elevation for every circuit.

### Racing, rules and AI
- **AI recalibrated against human lap times** (Hautes-Fagnes 1:19, Vettore 1:08.5, Rade 1:06.4): brakes late and hard instead of bleeding speed over a long distance, speed envelope accounts for lateral load transfer, the racing line is smoothed so it can be driven at 340 km/h, longer steering preview. Legend: Vettore 1:08.0, Rade 1:05.3, Hautes-Fagnes 1:17.8, Northfield 1:22.3. Elite about 3 % slower, Pro 7 %, Amateur 13 %, Rookie 20 %.
- **Racecraft**: drivers now draft behind the car in front and pull out to pass, choose the inside of the next corner, defend once with a single move to cover the attacker's side (never weaving, never under braking), refuse to move into a gap another car is taking, hold their line when a car is alongside, and stay on the track. Following cars brake early enough to stop behind a slower or braking car, take corners a little slower in dirty air, and drive to what a damaged or punctured car has left.
- **Identical cars** option (default on): every team has exactly the player's car; only the drivers differ. Off keeps the team pecking order (career always uses it).
- **Safety car**: three or more stranded cars deploy the pace car (yellow flag first for a single stranded car). The field queues behind it, DRS and boost are off, overtaking behind it earns the player a 5 s penalty, cars with worn tyres pit cheaply, and it comes in when the track has been clear for a while, followed by a green flag.
- **Weather**: Dry, Light rain, Heavy rain or Changeable (a dry start with a shower). Rain cuts slick-tyre grip by about 30 % and makes kerbs slippery; the new Wet tyre gives the grip back (and runs cool, but wears and overheats on a dry track). Tyres cool faster on a wet track. AI cars start on and switch to the right tyres, brake earlier and are less aggressive in the wet. Radio calls for the forecast, a wet track and a drying track.
- **Time of day**: midday to dusk over the race (sky, sun colour and angle, longer shadows, exposure), or a full night race with stars, floodlight masts, pools of light on the road and the player's headlights.
- **Interactive pit stops**: press the DRS key as each of the four wheel-nut markers enters the green. A flawless stop is 2.5 s, a so-so press 0.12 s, a cross-threaded nut costs 0.9 s (toggle in Assists).
- **Damage model**: sidepods are separate structures that crumple on side impacts (visible deformation), front and rear wings bend and break, floor damage reduces downforce. The HUD shows wing / sidepod / rear wing health and the downforce lost, heavy damage sets a pit request automatically (B cancels), and repairs add time to the stop in proportion to the damage. AI pit for any severe damage.
- **Tyres**: a lock-up now flat-spots the tyre, spikes its temperature (capped) and accelerates its wear; flat spots cost grip until the tyres are changed.
- **Stewards**: running into the back of the car ahead at speed is a "causing a collision" penalty (5 s, then 10 s, then 20 s for the player; 5 s for AI).
- **DRS** verified end to end: only inside a zone, only after crossing the detection line within 1.0 s of the car ahead, never on lap 1, in the pit lane, under the safety car or in a corner. Painted detection and activation lines and DRS / DRS DETECTION / DRS END signs at every zone.
- **Slipstream** verified: about +15 % extra acceleration 12 m behind and +10 % at 20 m at 270 km/h.
- In-race tuning keys: **X** ERS mode (harvest / balanced / attack), **Z** fuel mix (lean / standard / rich), **[ ]** live brake bias.
- **Pit-entry fixes (changeable weather)**: cars now slow to the pit limit *before* the entry ramp starts turning (they used to brake and steer at the same time and spin on the ramp), call the pits for wet tyres as soon as rain arrives rather than once the track is soaked, abandon a missed entry and try again next lap, and a car wedged in the pit lane is recovered by the marshals like any other. A changeable-weather race went from about 80 marshal recoveries to about 20; the whole field finishes.
- Safety car: a car heading for the pits now obeys the pace-car speed cap until it reaches the pit lane.
- **Pit-wall strategy**: the race setup has a Pit wall option (Silent / Radio advice / Calls you in). The engineers read your actual tyre wear, project it to the flag, and call the lap to box on and the tyre to fit (wets when the track is soaked, slicks when it dries, the mandatory stop before the last laps). The tyre panel shows the box lap, and in the last two laps nothing is called unless the weather demands it. `tests/strategy.mjs` covers it.
- **Brake discs**: each wheel now has a disc temperature (heated by braking power, cooled by speed). Cold carbon bites less, above about 880 C it fades (up to 30 % less torque), and the discs glow orange to white through the wheels from 450 C. The tyre panel shows the hottest disc and the radio warns before fade; street circuits (Rade, Porto Vecchio) cook the brakes most. Typical peaks are 800-1150 C; lap times are unchanged.
- **Career forecasts**: every round of a career season has a fixed forecast (dry, showers possible, light or heavy rain), shown on the career hub; wet-weather rounds start the player on wets.
- Track-limit and pit rules unchanged from 1.1; the fast-forward to results is now about 20 times faster.

### Presentation
- Radial **motion blur** that builds exponentially with speed (and a little more with DRS and boost); camera **rumble** that rises exponentially with speed and RPM, strongest from the cockpit.
- **Rain**: GPU-animated rain streaks, wet glossy asphalt, grey sky and denser fog, water spray behind every wheel.
- **Skid marks** are persistent (36 000 quads for the whole session), also from heavy braking; fainter on a wet track.
- Rear light strobes amber during ERS harvesting; sidepod crumple and bent wings; replay and photo overlays.
- **Race telemetry charts** on the results screen: lap time, fuel load, tyre wear and top speed per lap against the winner, with pit stops marked.
- Adverts and boards are painted plain on the back (no mirrored lettering) and the finish-scene camera stays inside the barriers.
- Audio: exhaust pops and crackles on lift-off, downshift burbles, rain on the bodywork and water spray scaled by speed.

### Controls and settings
- **Touch**: the on-screen pedals now come with pause, camera, racing line, DRS, ERS boost (hold) and pit buttons; the first tap on the gas on the grid starts the lights. Covered by an emulated-touch e2e check.
- **Accessibility**: colour-blind-safe racing line (blue / yellow / magenta), Reduce motion (no blur, shake, strobing tail light or UI animation) and a Larger HUD (x1.2).
- Gamepad vibration (kerbs, grass, tyre slip, impacts), keyboard steering speed, stick deadzone, automatic quality (lowers resolution, then shadows and blur, if the frame rate stays under 40 fps), motion-blur toggle.
- The main menu no longer overlaps on short windows (scrolls and compacts), Escape in the pause-menu settings returns to the pause menu.

### Robustness
- A player who is parked (or has walked away) no longer holds the session open: once the chequered flag has been out for 240 s with the player stationary (or 420 s whatever happens) the race or qualifying session ends and the player is classified on distance covered. `tests/idle.mjs`.
- Saved data is validated and repaired on load (types, ranges, circuit and compound ids, season and career structures); a corrupt or hostile save can no longer stop the game from booting.
- A failure in the frame loop is caught: single errors are ignored, repeated ones show a recovery screen instead of a frozen page.
- Session disposal frees geometries, materials, textures, instancing buffers, the environment map and the rain system; per-frame allocations in the audio / camera paths removed.

### Testing
- `npm test` runs every headless suite: physics (now including rain, wet tyres, lock-ups and slipstream), AI laps and a 20-car race, scoring and standings, qualifying, career, safety car, weather, DRS rules and the pit game.
- Browser tests: `npm run test:e2e` (every menu and mode end to end, hostile saves), `npm run test:monkey` (random clicking through the whole UI), `npm run test:leak` (GPU resources across repeated sessions).

## 1.1
- Finish sequence: chequered flag, slow cool-down lap on autopilot, cinematic orbit camera, a result banner (Victory / Podium / Points finish) with confetti and fanfare for the top three, then Enter or a click for the full results.
- Racing line guide painted on the road: green keep going, yellow ease off, red brake now (key L, Settings).
- Pit wall and garage fronts are solid; the lane is open only at the entry and exit ramps.
- The car is held on the grid until the lights go out, so false starts are impossible; hold the throttle to build revs for the launch.
- Camera keys work from the grid; the opening orbit only plays on the chase camera and any camera key skips it.
- Subtler pitch and roll; smoother, quieter engine, wind and tyre sounds; lower default volume.
- DRS zones are derived from the track geometry and cancelled under heavy cornering load.
- AI recalibrated against human lap times (Hautes-Fagnes 1:19, Vettore 1:08.5, Rade 1:06.4). The AI brakes late and hard instead of bleeding speed over a long distance (it was only using ~2 g of a 5 g braking capability), the speed envelope accounts for lateral load transfer, the racing line is smoothed so it can be driven at 340 km/h without a sideways flick, and the steering preview is longer. Legend now laps at about 1:08.0 (Vettore), 1:05.3 (Rade), 1:17.8 (Hautes-Fagnes), 1:22.3 (Northfield) on a clean lap, roughly 0-2 % faster than those reference laps. Elite is about 3 % slower, Pro 7 %, Amateur 13 %, Rookie 20 %.
- Racing safety for the faster AI: cars brake early enough to stop behind a slower or braking car in their lane, take corners slightly slower in dirty air, and drive to what a damaged or punctured car has left. Full 20-car Legend races are back to near-zero marshal recoveries on every circuit.
- Basics: WebGL check with a friendly message, context-loss recovery, Escape goes back in menus, social/theme meta tags, pause menu key reminders.

## 1.0
- First release: four circuits, 20-car AI grid with adjustable difficulty, four-wheel physics, tyres, DRS/ERS, pit stops, time trial with ghost, championship.
