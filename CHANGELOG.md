# Changelog

## 1.1
- Finish sequence: chequered flag, slow cool-down lap on autopilot, cinematic orbit camera, a result banner (Victory / Podium / Points finish) with confetti and fanfare for the top three, then Enter or a click for the full results.
- Racing line guide painted on the road: green keep going, yellow ease off, red brake now (key L, Settings).
- Pit wall and garage fronts are solid; the lane is open only at the entry and exit ramps.
- The car is held on the grid until the lights go out, so false starts are impossible; hold the throttle to build revs for the launch.
- Camera keys work from the grid; the opening orbit only plays on the chase camera and any camera key skips it.
- Subtler pitch and roll; smoother, quieter engine, wind and tyre sounds; lower default volume.
- DRS zones are derived from the track geometry and cancelled under heavy cornering load.
- AI recalibrated against human lap times (Hautes-Fagnes 1:19, Vettore 1:08.5, Rade 1:06.4). The AI brakes late and hard instead of bleeding speed over a long distance (it was only using ~2 g of a 5 g braking capability), the speed envelope accounts for lateral load transfer, the racing line is smoothed so it can be driven at 340 km/h without a sideways flick, and the steering preview is longer. Legend now laps at about 1:08.0 (Vettore), 1:05.3 (Rade), 1:17.8 (Hautes-Fagnes), 1:22.3 (Northfield) on a clean lap, roughly 0-2 % faster than those reference laps. Elite is about 3 % slower, Pro 7 %, Amateur 13 %, Rookie 20 %.
- Basics: WebGL check with a friendly message, context-loss recovery, Escape goes back in menus, social/theme meta tags, pause menu key reminders.

## 1.0
- First release: four circuits, 20-car AI grid with adjustable difficulty, four-wheel physics, tyres, DRS/ERS, pit stops, time trial with ghost, championship.
