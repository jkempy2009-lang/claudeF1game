// Clean-lap time (s) of the rivals at each difficulty preset, per circuit: the same numbers as the README pace table.
// Regenerate with `JSON=pace.json node tools/pace-table.mjs` after anything that changes the racing line or the AI's pace.
// tests/pacetable.mjs checks the table against DIFFICULTIES and the circuit list.
export const PACE_LEVELS = [0.08, 0.3, 0.55, 0.8, 1.0, 1.15];
export const PACE = {
  vettore: [79.7, 74.4, 70.08, 67.06, 65.55, 64.81],
  rade: [73.16, 68.65, 64.35, 61.11, 59.33, 58.26],
  northfield: [88.13, 82.06, 77.52, 74.26, 72.83, 72],
  ardennes: [86.06, 80.06, 75.54, 72.32, 70.86, 70.15],
  costa: [88.96, 82.85, 77.88, 74.48, 72.91, 71.97],
  aurora: [76.27, 71.02, 66.62, 63.57, 62, 61.19],
  mirage: [91.47, 84.99, 79.72, 76.13, 74.48, 73.53],
  lumiere: [94.9, 88.22, 82.53, 78.44, 76.16, 74.89],
  porto: [92.35, 85.87, 80.5, 76.67, 74.45, 73.4],
  sakura: [109.13, 101.41, 95.38, 91.43, 89.65, 88.68],
  bastide: [81.8, 76.25, 71.73, 68.76, 67.23, 66.37],
  caldera: [79.64, 74.22, 69.83, 66.97, 65.61, 65.02],
};

/** About how fast the rivals lap this circuit at an AI level (linear between the measured presets); null for an unknown circuit. */
export function rivalLap(trackId, level) {
  const row = PACE[trackId];
  if (!row) return null;
  const L = PACE_LEVELS;
  if (level <= L[0]) return row[0];
  for (let i = 1; i < L.length; i++) if (level <= L[i]) return row[i - 1] + ((row[i] - row[i - 1]) * (level - L[i - 1])) / (L[i] - L[i - 1]);
  return row[row.length - 1];
}

/** The AI level whose rivals lap in `lap` seconds (clamped to the preset range); null for an unknown circuit or a missing time. */
export function matchLevel(trackId, lap) {
  const row = PACE[trackId];
  if (!row || !(lap > 0)) return null;
  const L = PACE_LEVELS;
  if (lap >= row[0]) return L[0];
  for (let i = 1; i < L.length; i++) if (lap >= row[i]) return L[i - 1] + ((L[i] - L[i - 1]) * (row[i - 1] - lap)) / (row[i - 1] - row[i]);
  return L[L.length - 1];
}
