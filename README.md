# Apex Grand Prix

A 3D Formula-style racing game that runs in the browser. Twenty cars, ten original circuits, a physics model built from first principles (not a canned arcade handling model), and an AI field with adjustable difficulty.

**Play:** open `dist/apex-grand-prix.html` (single self-contained file), or serve `docs/` with any static server (GitHub Pages works: set the source to the `docs` folder).

```bash
npm install
npm run build        # bundles src/ -> docs/game.js and dist/apex-grand-prix.html
npm run dev          # esbuild watch + local server on http://localhost:8080
npm test             # every headless suite: physics, AI, scoring, qualifying, career, safety car, weather, DRS, pit game
npm run test:e2e     # browser: every menu and mode end to end (serve docs/ on :8099 first)
npm run test:monkey  # browser: random clicking through the whole UI
npm run test:leak    # browser: GPU resources across repeated sessions
```

## What's in it

**Modes** – *Driving school* (seven guided lessons), Race (1-30 laps, 2-20 cars), *Qualify & race* (a 3-minute session with all 20 cars sets the grid), Time Trial with a persistent ghost of your best lap, a 4-round Championship with driver and constructor standings, and a **Career**: pick a team, earn prize money, buy car upgrades (power, aero, grip), earn contract offers and play seasons of 4 or 8 rounds with difficulty that creeps up each year.

**Circuits** (generated procedurally from corner data, with elevation, kerbs, run-off, pit lane, DRS zones, brake boards)

| Circuit | Length | Character |
|---|---|---|
| Autodromo del Vettore | 5.3 km | Monza-style: long straights, chicanes, low downforce |
| Circuit de la Rade | 3.0 km | Street circuit, walls at the track edge, high downforce |
| Northfield Grand Prix Circuit | 5.7 km | Flowing high-speed aero circuit |
| Circuit des Hautes-Fagnes | 4.9 km | Spa-like: big elevation, hairpin, fast sweepers |
| Autódromo Costa Azul | 4.6 km | Coastal rollercoaster, blind crests, plunging hairpin |
| Monte Aurora Ring | 3.8 km | Alpine, wide open, fast and winding |
| Mirage International Circuit | 5.1 km | Desert: two huge straights joined by hairpins |
| Parc Lumière | 3.8 km | Tight city-park ribbon between barriers |
| Porto Vecchio Harbour Circuit | 4.3 km | Waterfront blast then tight docks, street walls |
| Sakura Ridge Circuit | 5.5 km | Wooded ridge, flowing esses, 36 m of elevation change |

**Racing** – standing start with lights, 10 fictional teams x 2 drivers, live timing tower with real time gaps, sector timing (purple/green), best-lap delta, DRS (detection line + <1 s rule, painted lines and signs), ERS deploy/harvest with a boost button and three ERS modes, fuel mix, live brake bias, slipstream and dirty air, damage (wings, bendable and crumpling sidepods, floor, punctures), tyre compounds (including **Wet**) with a temperature window, wear and lock-up flat spots, mandatory-stop option, pit lane with speed limiter and an **interactive pit stop** (time your presses on the four wheel nuts: 2.5 s if perfect), track-limits warnings, collision penalties, pit speeding penalties, **safety car**, marshal recovery, fast-forward to the final classification.

**Weather and light** – Dry, Light rain, Heavy rain or Changeable. Rain cuts slick grip by about 30 %, soaks the track, throws up spray; fit Wets in the pits. The light moves from midday to dusk over the race, or run a full **night race** with floodlights and headlights.

**AI** – identical cars by default (only the drivers differ), five difficulty presets plus a continuous slider. The drivers draft, pull out to pass, choose the inside of the next corner, defend once, give room, use the wet-weather tyres, take a cheap stop under the safety car and pit for damage. Nothing is cheated: AI cars run the identical car model and Legend laps about as quickly as a strong human lap (Vettore 1:08.0, Rade 1:05.3, Hautes-Fagnes 1:17.8, Northfield 1:22.3).

Reference clean-lap pace of the best car at each level (medium tyres, DRS on the straights):

| | Rookie | Amateur | Pro | Elite | Legend |
|---|---|---|---|---|---|
| Autodromo del Vettore | 1:22.0 | 1:16.9 | 1:12.9 | 1:09.8 | 1:08.0 |
| Circuit de la Rade | 1:20.6 | 1:15.2 | 1:10.8 | 1:07.5 | 1:05.3 |
| Circuit des Hautes-Fagnes | 1:34.0 | 1:27.8 | 1:23.0 | 1:19.4 | 1:17.8 |
| Northfield Grand Prix Circuit | 1:39.1 | 1:32.8 | 1:27.9 | 1:24.2 | 1:22.3 |

**After the flag** – a finish scene with a Victory / Podium / Points banner, then the classification with **telemetry charts** (lap time, fuel, tyre wear, top speed against the winner), a 30-second **instant replay** from trackside cameras, and **photo mode** with PNG capture.

**Racing line guide** – a ribbon on the road ahead, coloured from the braking envelope of the circuit: green keep going, yellow ease off, red brake now. Toggle with L or in Settings.

**Driver aids** – ABS, traction control (4 levels), stability control, steering-lock assist, automatic/manual gearbox, pit autopilot, interactive pit stops; presets from Beginner to Simulator. Keyboard, gamepad (with vibration) and basic touch controls.

**Presentation** – Three.js scene with procedural textures, sky shader with clouds and stars, terrain following the track elevation, trees/stands/billboards/buildings, F1 car models with team liveries, tyre smoke, persistent skid marks, sparks, rain, spray, speed blur and engine rumble, camera shake, six cameras (chase, low chase, cockpit, T-cam, helicopter, TV), WebAudio synthesised engine (V6-style harmonics, exhaust pops), tyre squeal, kerb rumble, wind, rain and Doppler on nearby cars. Automatic quality lowers the resolution if the frame rate drops.

## Controls

| | Keyboard | Gamepad |
|---|---|---|
| Throttle / brake | W S · ↑ ↓ | RT / LT |
| Steer | A D · ← → | Left stick |
| DRS | Space | A |
| ERS boost | Shift (hold) | X |
| Gears (manual) | Q / E | LB / RB |
| Pit request · next tyre | B · T | B |
| Camera · look back | C · V | Y · L3 |
| Reset to track | R | Back |
| Autopilot toggle | G | – |
| ERS mode · fuel mix · brake bias | X · Z · [ ] | D-pad up / down |
| Racing line guide on/off | L | – |
| Pause | Esc / P | Start |

Holding the brake while stopped engages reverse, so you can get out of the gravel. The pit wall and garage fronts are solid; the pit lane is open at the entry and exit ramps.

## How the physics works

`src/sim/car.js` is a fixed-step (240 Hz) planar rigid body with body-frame velocities and **four independent tyres**:

* **Tyres** – per-wheel normal load = static weight + aero downforce (front/rear split) + longitudinal and lateral load transfer (with roll-stiffness distribution). Combined-slip friction-ellipse model with a Pacejka-shaped force curve, load sensitivity (grip per Newton falls as load rises), lateral relaxation length so low-speed behaviour is stable, per-wheel angular dynamics (wheel-spin and lock-up emerge, they aren't scripted), and a semi-implicit wheel update so the very stiff slip/wheel-speed loop stays stable at any speed.
* **Tyre state** – temperature (heated by slip power, cooled by airflow) gives a grip window; wear removes grip with a cliff; compounds trade peak grip for life; punctures from big impacts.
* **Aerodynamics** – downforce and drag ∝ v², separate front/rear wing sliders, DRS reduces rear-wing drag and lift, yaw loses downforce, damaged wings lose it, slipstream cuts drag and dirty air cuts front downforce.
* **Powertrain** – torque curve, 8-speed gearbox with shift cut, limited-slip differential, engine braking, ERS deploy/harvest, fuel burn (mass changes), rev limiter, launch clutch, reverse.
* **Brakes & aids** – brake bias, ABS (per-wheel slip modulation), traction control, speed-sensitive steering with optional grip-based lock limit and counter-steer help.
* **Surfaces** – asphalt, kerbs (vibrate the wheel), grass, gravel (big drag), run-off tarmac, with their own grip and rolling resistance.

Reference numbers from `tests/physics.mjs`: 0–100 km/h in 3.0 s, 0–300 in 9.7 s, 5 g peak braking, ~4.2 g lateral at 280 km/h, ~350 km/h top speed.

### The AI

For each circuit the game solves a **minimum-curvature racing line** (banded least squares with an active set for the track limits), then builds a **speed profile** from the car's own grip/downforce/power envelope with forward and backward passes (friction-circle sharing). Each AI car follows the line with a Stanley-style steering law plus curvature feed-forward, brakes with a "brake-to-target" scan, limits throttle by friction circle and rear slip, picks overtaking sides, keeps a safe following gap, uses DRS/ERS, makes difficulty-scaled mistakes, and pits according to its tyre state.

## Project layout

```
src/sim/      track generation, car physics, AI, race rules (no rendering - runs in Node)
src/render/   Three.js world, car models, effects, cameras
src/ui/       HUD, menus, input, audio
tests/        physics checks, lap sims, race sims, keyboard-driver emulation, browser screenshots
tools/        build script, track plotter
docs/         static site (index.html, style.css, built game.js)
dist/         single-file build
```

Useful scripts: `node tests/physics.mjs`, `node tests/lapsim.mjs all 1 3`, `node tests/racesim.mjs northfield 5 0.8 20`, `node tests/keyboard.mjs northfield 0.88`, `node tools/plot-tracks.mjs out.png`.

All teams, drivers and circuits are fictional; layouts are original designs inspired by the character of well-known circuits.
