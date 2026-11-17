# Apex Grand Prix — technical upgrade specification (v1.2 → v2.0)

The to-do list for the next stage of the game, as written by the project owner. On top of the items below: make the
graphics as realistic as possible, and do substantial work on the sound.

Status: **implemented**, every section including the additions in section 9. `CHANGELOG.md` lists each item as it landed and, item by item, where the game differs from this text and why: the wet line (3.1) is built but switched off because it made the AI slower and less safe; banking is 2.9° rather than 8°; a single wider shadow map instead of blended cascades; ACES tone mapping kept over AgX; the spoken engineer is not run through the radio filter; the formation lap's final line-up into the grid boxes is a cut.

---

## 1. Physics & vehicle dynamics (`src/sim/car.js`, `src/sim/carspec.js`, `src/sim/race.js`)

### 1.1 4-corner suspension kinematics & ground effect
- **State:** add `suspZ = new Float64Array(4)` (compression, m) and `suspV = new Float64Array(4)` (damper velocity, m/s) to `Car`.
- **Integration (240 Hz):**
  - Static ride height `h0 = 0.045` (front), `0.065` (rear).
  - Kerb step input: `zRoad[w] = surf[w] === SURF.KERB ? 0.025 * Math.sin(kerbPhase + w * 1.7) : 0`.
  - Spring/damper force: `F_susp[w] = kSpring[w] * (suspZ[w] - zRoad[w]) + cDamper[w] * suspV[w]` (`kSpring = 180000` N/m front, `160000` N/m rear; `cDamper = 12000` Ns/m).
  - Couple `suspZ` to dynamic ride height `h_ride = h0 - 0.5 * (suspZ[0] + suspZ[1])` (front) and `h_rear = h0_r - 0.5 * (suspZ[2] + suspZ[3])`.
  - **Ground-effect aero sensitivity:** scale `clAf` and `clAr` by `1 + 0.18 * clamp((0.045 - h_ride) / 0.025, -0.5, 1.0)`. If `h_ride <= 0.005`, clamp floor height, spike `bottoming = 1`, apply an upward normal impulse + longitudinal drag spike (`+400 N` plank friction).
  - Pass `suspZ` directly to `CarView.update()` instead of approximating travel from `fz`.

### 1.2 Flat-spot wheel hop & self-aligning torque (SAT)
- **Wheel angle tracking:** track cumulative `wheelAngle[w] = (wheelAngle[w] + omega[w] * dt) % TAU` in `car.js`.
- **Flat-spot load oscillation:** when `flat[w] > 0.02` and `V > 5`, add vertical load ripple `dFz_flat = flat[w] * 1400 * clamp(V / 40, 0, 1) * Math.sin(wheelAngle[w])` to `fz[w]`, plus a high-frequency steering torque kick `dSteer_flat = flat[w] * 0.015 * Math.sin(wheelAngle[w])` fed to `CameraRig` and `Input.rumble()`.
- **Self-aligning torque (`sat`):** pneumatic trail `t_p = 0.035 * Math.exp(-12 * Math.abs(alphaLag[w]))`; `sat = (wheelFy[0] + wheelFy[1]) * t_p`. Expose `car.sat` (Nm) for steering weight feedback and audio/HUD slip cues.

### 1.3 Off-line rubber marbles & track evolution
- **Grid structure (`race.js`):** allocate `this.marbles = new Float32Array(track.N * 5)` (5 lateral bins across `[-wr, +wl]`).
- **Accumulation:** each physics step (or every 8 steps), for each car `w = 0..3`, compute lateral bin `b = clamp(Math.floor(((d + wr[i]) / (wl[i] + wr[i])) * 5), 0, 4)`. Increment `marbles[i * 5 + b] += wearDelta * 0.15` for bins where `Math.abs(d - lineD[i]) > 2.2` (marbles are shed off-line). Decay on-line bins via aerodynamic sweep `marbles[i * 5 + lineBin] *= (1 - 0.02 * dt)`.
- **Grip penalty (`car.js`):** sample `m = race.marbles[pj.i * 5 + bin]`; apply `mu *= (1 - clamp(m * 0.09, 0, 0.11))` and increase `tempS[w] += m * 4 * dt` (marbles stick to hot slicks and take 3–4 corners to scrub off via `marblePickUp[w]` decay).

### 1.4 Launch clutch & anti-stall
- **Clutch state (`car.js`):** add `clutch = 1` (0 = engaged, 1 = disengaged) and `clutchInput`.
- **Grid hold:** during `countdown`, the player holds throttle to build `rpm` (`4200..15000`); releasing `hold` (or pressing the launch clutch button) ramps `clutch` over `0.25 s`.
- **Bite curve:** transmitted torque `Tw_trans = Tw * (1 - smoothstep(0.15, 0.85, clutch))`. If `rpm > 11800` at clutch drop, rear `kappa` spikes (wheelspin); if `rpm < 6500` under load, trigger `antiStallT = 0.6 s` (clamps torque to 35 % while `rpm` recovers).

### 1.5 Thermal reliability & component stress
- **State (`car.js`):** `engStress = 0`, `boxStress = 0`, `brakeStress = 0` (`0..1`).
- **Accumulation:**
  - `engStress += dt * (fuelMode === 2 ? 0.0022 : fuelMode === 1 ? 0.0004 : 0) * clamp((rpm - 12500) / 2500, 0, 1)`.
  - `brakeStress += dt * 0.008 * smoothstep(980, 1180, Math.max(...brakeTemp))`.
  - `boxStress += dt * (shiftTimer > 0 && rpm > 14600 ? 0.003 : 0)`.
- **Failure modes:**
  - `engStress > 0.75`: cylinder misfire (`powerScale *= 0.85 + 0.15 * Math.sin(time * 40)`), smoke puffs from the airbox. `engStress >= 1.0`: `car.retired = true`, `dnfReason = 'Power unit'`.
  - `brakeStress >= 1.0`: single front brake line failure (`brakeTorque *= 0.55`, asymmetric yaw pull under braking).

---

## 2. Graphics, shaders & rendering (`src/render/`, `src/game.js`)

### 2.1 Procedural normal & roughness maps (`src/render/textures.js`)
- **Sobel height-to-normal generator:** implement `heightToNormalTexture(canvas, strength = 2.0)`: read `ImageData`, compute Sobel `dX` and `dY` gradients on luminance, encode `R = (nx * 0.5 + 0.5) * 255`, `G = (ny * 0.5 + 0.5) * 255`, `B = (nz * 0.5 + 0.5) * 255`, set `colorSpace = THREE.NoColorSpace`.
- **Target materials:**
  - `asphaltNormal`: run `heightToNormalTexture` on `asphaltBumpTexture()` (`strength = 3.2`), attach to `roadMat.normalMap` with `normalScale = new THREE.Vector2(0.8, 0.8)`.
  - `carbonNormal` & `carbonRoughness`: generate a 16×16 twill weave pattern, attach to `shared.carbon` (`normalScale = (0.35, 0.35)`).
  - `barrierNormal`: generate concrete panel seams + horizontal impact scuffs, attach to `wallMat.normalMap`.

### 2.2 Dynamic environment reflections & wet road sky reflection
- **Periodic IBL update (`game.js`):** track `this._lastEnvDusk` and `this._lastEnvNight`. Whenever `Math.abs(dusk - _lastEnvDusk) > 0.08 || Math.abs(night - _lastEnvNight) > 0.08`, dispose the old `scene.environment`, render `envScene` (updated `world.sky` uniforms) via `pm.fromScene(envScene, 0.02)`, and assign `scene.environment`.
- **Wet asphalt Fresnel & floodlight specular (`world.js` `roadMat.onBeforeCompile`):**
  - Inject view-space normal and `vWorldPos`. Fresnel term `F = pow(1.0 - max(dot(N, V), 0.0), 4.0)`.
  - Sample the sky horizon/zenith gradient along the reflection vector `R = reflect(-V, N)` modulated by `rsWet` and `rsPud`, adding a crisp specular reflection of the sun/moon and floodlight pools on puddles (`rsPud > 0.2`).

### 2.3 Post-processing: visor raindrops & exhaust backfire (`postfx.js`, `effects.js`)
- **Cockpit visor rain (`postfx.js`):** add uniform `uVisorRain` (`0..1`, active when `camRig.mode` is `'cockpit'` or `'tcam'` and `race.rain > 0.05`). In the fragment shader, generate cellular grid droplets (Voronoi hash cells) that refract `uv` (`uv += dropNormal * 0.018 * uVisorRain`) and streak downward/outward based on `speed` and `latG`.
- **Exhaust backfire flashes (`effects.js`, `carmodel.js`):** add `flamePool = new ParticlePool(120, { additive: true, drag: 4.0 })` with a blue-orange core tint (`[1.0, 0.45, 0.1]`). Trigger 2–3 short-lived (`0.04 s`) high-intensity particles at the exhaust (`[-2.47, 0.415, 0]` in the car frame) when `car.shiftTimer > 0.03` or `audio.lift` triggers.

### 2.4 Articulated cockpit driver arms & hero landmarks
- **Driver arms (`carmodel.js`):** in `buildSteeringWheel()`, create left/right forearm + glove meshes (`CapsuleGeometry` + `BoxGeometry` knuckles) parented to `this.steeringWheel` at `z = ±0.135`, with upper-arm IK tubes anchored to the cockpit shoulders `[0.15, 0.58, ±0.18]`. Hide when `mode !== 'cockpit' && mode !== 'tcam'`.
- **Per-track hero landmarks (`trackdefs.js`, `world.js`):** add `landmarks: [{ type, s, side, extra, scale }]` to `TRACK_DEFS`:
  - `ferris`: spoked `CylinderGeometry` + rim + instanced cabins (rotates in `world.update()`).
  - `tower`: tapered `CylinderGeometry` race-control tower with an emissive glass observation deck.
  - `yachts`: procedural hull + mast + sail meshes at `waterLevel` on `rade` and `costa`.
  - `arch`: parabolic truss arch spanning the track (`vettore`, `mirage`).

---

## 3. AI racecraft & simulation (`src/sim/ai.js`, `src/sim/racecraft.js`, `src/sim/race.js`)

### 3.1 Wet-weather line adaptation (`ai.js`)
- In `basePath(s)`: rubber density on the dry line `rub = (this.raceRubber || 0) * car.wetness`.
- When `car.wetness > 0.25`, shift the target lateral offset away from `track.lineD[i]` inside corners (`Math.abs(kt) > 0.004`): `wetOff = -Math.sign(track.lineD[i]) * 2.4 * smoothstep(0.25, 0.75, car.wetness)`. Clamp within `[-wr + 2.0, wl - 2.0]`.

### 3.2 Safe multi-lap ERS saving (`racecraft.js`)
- Set `RC_TUNE.saving = true`.
- In `RaceBrain.plan()`: add a rear-threat abort guard. If `this.energy === 'saving'` and `s.behind && s.behind.gapT < 0.65 && s.behind.closing > 2.5`, cancel saving immediately (`this.energy = 'none'`, `it.ers = 1`, `it.saveErs = false`) so the AI defends / keeps straight-line speed instead of causing a closing-speed collision.

### 3.3 Virtual Safety Car (VSC) & delta enforcement (`race.js`, `ai.js`, `hud.js`)
- **State (`race.js`):** extend `this.sc` with `state: 'none' | 'vsc' | 'deployed' | 'ending'`, `vscTargetDelta = 0`.
- **Trigger:** when `disabledCars().length` is 1 or 2 (and `t > 20`, `lapsLeft > 1`), deploy `sc.state = 'vsc'` for `18..28 s` until the stranded cars are cleared/recovered.
- **Speed/delta cap:** under `vsc`, reference speed profile multiplier `vscCap = 0.62`.
  - AI drivers clamp `vt = Math.min(vt, prof.v[idx] * 0.60)`.
  - The player HUD shows a live `VSC DELTA` (`+0.00 s`, green if `<= 0`, red if `> 0`, where the delta integrates `(car.speed - prof.v[car.i] * 0.62) * dt`). If `vscDelta > 1.5 s` when the VSC ends (or after a 5 s warning), `addPenalty(player, 5, 'VSC delta infringement')`.

### 3.4 Cold out-lap tyres & blue-flag tuning (`ai.js`, `racecraft.js`)
- **Out-lap warm-up:** in `ai.js`, if `car.rs.stops > 0 && car.rs.laps === car.rs.stopLaps[car.rs.stopLaps.length - 1]`, scale `gripAdapt *= 0.91 + 0.09 * smoothstep(60, compound.tOpt - 5, avgTemp)`.
- **Blue flags:** in `racecraft.js` `MATRIX.YIELD`, set `lapped: 4.2`, and in `fill()`: when `action === 'YIELD'` and `-s.lapper.ds < 65`, set `it.yieldLift = 0.86` and move cleanly off the racing line (`it.target = clamp(-Math.sign(base) * (Math.min(wl, wr) - 1.5), -wr, wl)`).

---

## 4. Audio & telemetry HUD (`src/ui/audio.js`, `src/ui/hud.js`)

### 4.1 Aero buffeting, brake squeal & plank scrape (`audio.js`)
- **Slipstream buffeting:** add a low-frequency noise modulator (`bandpass 95 Hz, Q = 1.8`) driven by `Math.sin(player.slipstream * Math.PI)` (peaks at `slipstream = 0.5`, entering/leaving the wake) for audible dirty-air buffeting.
- **Carbon brake squeal:** add `squealOsc` (`sine` + `triangle` at `3150 Hz` and `4720 Hz`) routed through `squealGain`. Active when `player.brake > 0.15 && player.speed > 2 && player.speed < 28 && avgBrakeTemp < 380` with gain `0.025 * player.brake * (1 - player.speed / 28)`.
- **Harmonic plank scrape:** layer a metallic ring-modulated noise burst (`bandpass 2400 Hz` + `4800 Hz`) onto `scrapeGain`, scaled by `player.bottoming * clamp(player.speed / 70, 0, 1)`.

### 4.2 Visual damage diagram & VSC / live delta bar (`hud.js`)
- **Car damage icon (`#tyres`):** a compact inline SVG top-down F1 silhouette (`44×88 px`) with 5 separate `<path>` zones (`fw`, `rw`, `floor`, `sideL`, `sideR`), each coloured from `#31d17a` (0 %) → `#ffb400` (50 %) → `#ff2a2a` (100 %) by `car.damageSummary()`.
- **Delta bar (`#timing`):** a horizontal centre-zero bar (`160×6 px`) below `#t-cur` showing live `rs.delta` (or `vscDelta` during a VSC) clamped to `[-1.0 s, +1.0 s]`, filling green left of centre when ahead and red right of centre when behind.

---

## 5. Advanced vehicle & track physics (`src/sim/car.js`, `src/sim/track.js`, `src/sim/carspec.js`)

### 5.1 Road camber / banking & cross-slope load transfer (`track.js`, `car.js`)
- **Track geometry (`track.js`):** add `bank = new Float64Array(N)` (radians, `+` = banked left, i.e. the left edge higher). Compute from corner curvature `bank[i] = clamp(curv[i] * 18, -0.14, 0.14)` smoothed over `±10` samples, or read explicit `[s0, s1, rad]` overrides from `def.banking`.
- **Car integration (`car.js`):**
  - Sample `trackBank = track.at(track.bank, p.s)` in `locate()`.
  - Project gravity onto the lateral body axis: `bankLatG = G * Math.sin(trackBank) * Math.cos(wrapAngle(theta - trackHeading))`. Add `+m * bankLatG` to `sumFy` and scale normal load `gz *= Math.cos(trackBank)`.
  - Pass `trackBank` to `CarView.update()` so the visual chassis roll includes it (`this.rollSmooth = bodyRoll - trackBank`).

### 5.2 Dynamic aerodynamic pitch sensitivity & porpoising (`car.js`)
- **Aero map (`_aero`):** dynamic pitch angle `aeroPitch = (suspZ[0] + suspZ[1] - suspZ[2] - suspZ[3]) / wheelbase` (`+` = nose down / rake). *(The indices were lost when the spec was pasted; front pair minus rear pair is the evident intent.)*
  - Front wing ground proximity: `fwRake = 1 + 0.22 * clamp(aeroPitch / 0.015, -0.8, 1.2)`.
  - Diffuser stall threshold: if rear ride height `h_rear < 0.012` at `V > 72`, the diffuser stalls (`clAr *= 0.68`), unloading the rear suspension so `h_rear` rebounds: authentic high-speed ground-effect porpoising when the car is run too low or too soft.

### 5.3 Brake duct cooling, core vs. surface brake temperature & pad glazing (`car.js`)
- **Two-node brake thermal model:**
  - Split `brakeTemp[w]` into `brakeCore[w]` (rotor mass, `cap = 620 J/K`) and `brakeSurf[w]` (friction face, `cap = 100 J/K`, conducting to the core at `k = 85 W/K`).
  - Cooling airflow scales with `V * (1 - 0.35 * dirtyAir)` (following closely in dirty air spikes brake temperatures).
  - **Glazing:** sustained light dragging (`brake > 0.05 && brake < 0.25 && brakeSurf[w] < 220`) increments `glaze[w] += dt * 0.04` (cuts the initial bite by 15 %), cleared by one heavy braking event (`brake > 0.75 && V > 45`).

### 5.4 Fuel slosh & weight distribution shift (`car.js`)
- **Dynamic CG (`step`):** as `fuel` burns from `fuelKg` to `0`, shift `weightFront` linearly by `+0.012 * (1 - fuel / spec.fuelKg)` (an empty tank moves the CG slightly forward) and reduce `mass` / `inertia`.
- **Slosh damping:** when `fuel > 8` and `Math.abs(ayF) > 15`, add a first-order lateral fuel slosh state `sloshY` (`tau = 0.35 s`) contributing `m_fuel * 0.18 * sloshY` to lateral load transfer `dLatF` / `dLatR`.

### 5.5 Puncture deflation curve & rim sparks (`car.js`, `effects.js`)
- **Progressive puncture:** instead of an instant `puncture[w] = 1`, trigger slow or rapid deflation (`punctureRate[w] = 0.08` or `0.45` per second).
- **Physics effect:** `wheelR_eff[w] = spec.wheelR * (1 - 0.28 * puncture[w])`, pulling the steering toward the punctured side (`sumMz += side * 1800 * puncture[w]`), cutting `mu *= (1 - 0.65 * puncture[w])`, and emitting continuous titanium sparks (`effects.spark`) when `puncture[w] > 0.75` and `V > 15`.

---

## 6. Graphics, lighting & shader pipeline (`src/render/`)

### 6.1 Blended shadow frustum & contact ambient occlusion (`world.js`, `carmodel.js`)
- **Soft shadow edge (`world.js`):** expand `sun.shadow.camera` to `±95 m` (`4096×4096` on High) and inject a distance fade in `roadMat` / terrain shader (`smoothstep(75.0, 92.0, length(vWorldPos.xz - uCamFocus.xz))`) so the shadow cut-off never forms a hard line across the track.
- **Wheel contact AO (`carmodel.js`):** add 4 small dark radial contact shadow quads (`0.65 × 0.95 m`) under each wheel assembly (`wheelDefs[w].assembly`) so the tyres sit grounded on kerbs and banking.

### 6.2 Dynamic rubber accumulation & wet puddle specular (`effects.js`, `world.js`)
- **Persistent track rubber shader (`world.js`):** bind a `1024×1` `DataTexture` (`rubberTex`) updated from `race.marbles` and the lap count, sampled as `uRubberTex` in the `roadMat` fragment shader to darken braking zones (`brakeZones`) and apexes progressively over a race distance.
- **Rain splash ripples (`world.js`):** in the `roadMat` fragment shader when `uWet > 0.25`, overlay animated concentric ring normals (`sin(r * 45.0 - uTime * 18.0)`) on puddles (`rsPud > 0.3`) to catch floodlight / sky reflections.

### 6.3 Particle depth fade & brake dust (`effects.js`, `postfx.js`)
- **Soft depth fade (`effects.js`):** pass `cameraNear` / `cameraFar` to the `ParticlePool` shader, or scale particle alpha by `smoothstep(0.5, 4.0, -mv.z)`, so smoke/spray never clips harshly against the lens.
- **Brake dust puffs (`effects.js`):** emit dark grey carbon dust (`[0.12, 0.12, 0.13]`, `alpha = 0.28`, `life = 0.22 s`) from the front wheel hubs under heavy braking (`brake > 0.75 && V > 40`).

### 6.4 TV broadcast camera zoom, shake & helicopter tracking (`camera.js`)
- **TV camera optics:** subtle handheld telephoto micro-sway (`Math.sin(time * 2.1) * 0.003` rad) and a dynamic FOV zoom lead (narrowing smoothly as the car approaches the apex, widening as it passes) so `tv` mode feels like a real broadcast feed.
- **Pit-stop camera cut (`camera.js`, `game.js`):** when `player.rs.service` starts, blend the camera to a low pit-box gantry angle (`[box.x + 4.5, box.h + 1.6, -box.y + 3.2]`, looking at the car) and restore the previous `camRig.mode` on lollipop release.

### 6.5 Procedural trackside scenery variety (`world.js`)
- **Kerb & barrier wear:** modulate `kerbMat` vertex colours by corner curvature (painted kerbs show black tyre scuffs at apexes) and add distance marker boards (`300`, `200`, `100`, `50`) plus corner-number apex signs (`T1`, `T2`, …) at every `track.corners` entry.
- **Animated trackside details (`world.update`):** sweeping searchlight beams at night (`night > 0.5`), animated LED trackside marshal boards (`YELLOW`, `SC`, `VSC`, `GREEN`) along the catch fences, and a waving crowd texture UV shimmer on the final lap.

---

## 7. AI intelligence, strategy & race control (`src/sim/`)

### 7.1 Multi-compound pit strategy planner (`race.js`, `ai.js`)
- **Pre-race & live stint solver (`race.js`):** give each AI car `strategy = { stops: [], compounds: [] }`, computed at grid set-up from `totalLaps`, `tyreWear` and `weather`:
  - 1-stop vs. 2-stop evaluation comparing `stintLaps * lapTimePenalty(compound, wear)` + `pitLoss (~22 s)`.
  - Dynamic re-evaluation on a safety car or `vsc`: if `lapsLeft > 4` and the current tyre `wear > 0.32`, pit immediately under neutralised pace (`pitLoss` drops by ~40 %).

### 7.2 Corner-exit traction & slipstream break-tow (`ai.js`, `racecraft.js`)
- **AI corner-exit throttle modulation (`ai.js`):** scale the AI throttle ramp on corner exit by `1 - 0.35 * clamp((rearTemp - compound.tOpt) / 25, 0, 1)` so AI cars preserve their rear tyres in long stints instead of overheating them.
- **Defending break-tow (`racecraft.js`):** when `action === 'COVER'` on a long straight (`dCorner > 220`), allow one clean diagonal drift (`±2.2 m`) to break the attacker's slipstream, then hold the line strictly (`dCorner <= 220`).

### 7.3 Steward system: track limits, corner cutting & false starts (`race.js`)
- **Time-gained corner-cut detection (`race.js`):** record `cpTimes` deltas across chicane/corner sectors; if all 4 wheels leave the track (`off === 4`) AND the sector mini-delta improves by `> 0.25 s`, issue an immediate "give back time / +5 s" penalty instead of waiting for 3 warnings.
- **Manual launch false start option (`race.js`, `menu.js`):** add an `assists.launchControl` toggle (default `true`). When `false`, releasing brake/clutch before `lightsOutAt` triggers a drive-through / +10 s penalty.

### 7.4 Qualifying traffic management (`ai.js`, `race.js`)
- **Out-lap / cool-down yielding (`race.js`, `ai.js`):** in `qualifying` mode, flag cars on an out-lap (`laps === 0`) or an invalidated lap (`invalidLap === true`) with `car.qualiYield = true`. `RaceBrain` treats approaching hot-lap cars (`!o.qualiYield`) like `lapped` blue-flag cars, pulling off-line and lifting on straights.

---

## 8. Audio synthesis, UX & persistence (`src/ui/`, `src/game.js`)

### 8.1 Multi-layer harmonic engine & transmission audio (`src/ui/audio.js`)
- **Cylinder firing order & exhaust resonance:** add 6th-order firing pulse modulation (an LFO at `rpm / 60 * 3` Hz modulating wave-shaper drive and bandpass Q) plus a distinct throttle-off overrun exhaust resonance (`180–320 Hz` resonant low-pass sweep) so lift-off sounds mechanical rather than a static filter drop.
- **Kerb & surface acoustic differentiation:** separate `rumbleFilter` by surface (`SURF.KERB` = sawtooth `35–75 Hz` periodic thump synced to `car.kerbPhase`; `SURF.GRAVEL` = high-passed crackling noise `1.8 kHz`; `SURF.GRASS` = muffled `400 Hz` brush).
- **Spatial pit radio filter:** process `radioClick()` and UI alert tones through a telephone bandpass (`400–2800 Hz`) with a subtle static floor for the radio message's duration.

### 8.2 Interactive setup telemetry & race engineer feedback (`src/ui/menu.js`, `src/ui/hud.js`)
- **Live setup preview stats (`menu.js` `tab_car`):** compute and display predicted **top speed (km/h)**, **cornering G**, **0–100 km/h (s)** and **oversteer/understeer balance (%)** from `makeSpec()` + `envelope()` as the player drags the `frontWing`, `rearWing`, `brakeBias` and `pressure` sliders.
- **MFD (multi-function display) HUD widget (`hud.js`):** a toggleable compact bottom-right MFD cycling through 3 pages (1: tyre carcass/surface and brake temperatures; 2: pit strategy and fuel target ± laps; 3: session sector splits and the damage diagram).

### 8.3 Replay & photo mode enhancements (`src/game.js`, `src/render/replay.js`)
- **Extended replay buffer & key events (`replay.js`):** increase the buffer to `60 s` (`20 Hz`, about `1.2 MB`) and store event timestamps (overtakes, impacts, fastest laps) as clickable markers on `#r-scrub` so players can jump straight to incidents.
- **Photo mode camera controls (`game.js`):** roll tilt (`Z` / `X`), a depth-of-field / exposure slider (`+` / `-`), and a motion-blur shutter speed toggle (`0` = crisp freeze-frame, `0.4` = panning blur on the wheels and background while the target car stays sharp).

---

## 9. Additions (proposed during implementation)

Items not in the original list that would lift the game noticeably. Same status rules as above.

- **Team radio with a voice:** the race engineer's messages spoken through the browser's speech synthesis (filtered through the radio band-pass of 8.1), with a mute option.
- **Formation lap and grid procedure:** an optional formation lap behind the leader (weaving to warm tyres, brakes held hot), then the cars line up in their boxes for the lights.
- **Podium and parc fermé:** after the flag, a short camera sequence of the top three in parc fermé and on the podium, before the results screen.
- **Broadcast graphics:** TV-style overlays in TV / helicopter camera: battle-for-position banners with the gap, pit-stop timer, fastest-lap banner, tyre-age chips on the tower.
- **Visible tyre wear and graining:** the 3D tyre's tread darkens and shows a grained band as wear and graining rise; marbles stick to the tyre shoulder.
- **Weather radar:** a small HUD forecast strip (dry / rain in N laps / drying) driven by the existing weather timeline.
- **Spectator mode:** watch a full AI race with the broadcast cameras and graphics, any circuit, any weather.
- **Career weekend formats:** sprint weekends (short Saturday race setting the Sunday grid) and practice sessions with a long-run / qualifying-sim run plan that earns small setup bonuses.
- **Colour-blind HUD option:** alternative palette for sector colours, tyre-temperature bars and flags.
