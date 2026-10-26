# Apex Grand Prix

A 3D Formula-style racing game that runs in the browser. Twenty cars, four original circuits, a physics model built from first principles (not a canned arcade handling model), and an AI field with adjustable difficulty.

**Play:** open `dist/apex-grand-prix.html` (single self-contained file), or serve `docs/` with any static server (GitHub Pages works: set the source to the `docs` folder).

```bash
npm install
npm run build        # bundles src/ -> docs/game.js and dist/apex-grand-prix.html
npm run dev          # esbuild watch + local server on http://localhost:8080
npm test             # physics validation + headless AI race
```

## What's in it

**Modes** – Race (1–30 laps, 2–20 cars), Time Trial with a persistent ghost of your best lap, and a 4-round Championship with points.

**Circuits** (generated procedurally from corner data, with elevation, kerbs, run-off, pit lane, DRS zones, brake boards)

| Circuit | Length | Character |
|---|---|---|
| Autodromo del Vettore | 5.3 km | Monza-style: long straights, chicanes, low downforce |
| Circuit de la Rade | 3.0 km | Street circuit, walls at the track edge, high downforce |
| Northfield Grand Prix Circuit | 5.7 km | Flowing high-speed aero circuit |
| Circuit des Hautes-Fagnes | 4.9 km | Spa-like: big elevation, hairpin, fast sweepers |

**Racing** – standing start with lights, 10 fictional teams × 2 drivers, live timing tower with real time gaps, sector timing (purple/green), best-lap delta, DRS (detection line + <1 s rule), ERS deploy/harvest with a boost button, slipstream and dirty air, damage (wings, floor, punctures), tyre compounds with a temperature window and wear, mandatory-stop option, pit lane with speed limiter, garage boxes, a pit-stop service and an optional autopilot through the lane, track-limits warnings, false start, pit speeding penalties, marshal recovery, fast-forward to the final classification.

**Difficulty** – five presets (Rookie → Legend) plus a continuous 0–100 % slider. Difficulty changes how much of the *same* physical limit the AI uses, how often it makes mistakes, how early it brakes, how much of the track it uses, how aggressively it overtakes and its reaction time at the start. Optional adaptive pace nudges the AI ±3–5 % depending on the gap to you. Nothing is "cheated": AI cars run the identical car model.

**Driver aids** – ABS, traction control (4 levels), stability control, steering-lock assist, automatic/manual gearbox, pit autopilot; presets from Beginner to Simulator. Keyboard, gamepad and basic touch controls.

**Presentation** – Three.js scene with procedural textures, sky shader with clouds, terrain following the track elevation, trees/stands/billboards/buildings, F1 car models with team liveries, tyre smoke, skid marks, sparks, camera shake, six cameras (chase, low chase, cockpit, T-cam, helicopter, TV), WebAudio synthesised engine (V6-style harmonics), tyre squeal, kerb rumble, wind and Doppler on nearby cars.

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
| Pause | Esc / P | Start |

Holding the brake while stopped engages reverse, so you can get out of the gravel.

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
