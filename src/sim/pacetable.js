// Clean-lap time (s) of the rivals at each difficulty preset, per circuit: the same numbers as the README pace table.
// Regenerate with `JSON=pace.json node tools/pace-table.mjs` after anything that changes the racing line or the AI's pace.
// tests/pacetable.mjs checks the table against DIFFICULTIES and the circuit list.
export const PACE_LEVELS = [0.08, 0.3, 0.55, 0.8, 1.0, 1.15];
export const PACE = {
  vettore: [78.91, 74.05, 70.31, 67.31, 65.78, 65.02],
  rade: [72.93, 68.09, 64.4, 61.46, 59.67, 58.55],
  northfield: [86.94, 81.77, 77.8, 74.53, 72.95, 72.17],
  ardennes: [85.02, 79.92, 75.85, 72.61, 71.14, 70.36],
  costa: [88.2, 82.61, 78.32, 74.91, 73.28, 72.35],
  aurora: [75.86, 70.9, 67.04, 63.98, 62.38, 61.5],
  mirage: [90.45, 84.34, 79.91, 76.52, 74.81, 73.91],
  lumiere: [94.27, 87.74, 82.7, 78.9, 76.51, 75.27],
  porto: [91.67, 85.3, 80.74, 77.06, 74.8, 73.78],
  sakura: [107.97, 101.15, 95.84, 91.88, 90.06, 88.97],
  bastide: [81.31, 76.13, 72.13, 69.12, 67.62, 66.76],
  caldera: [78.75, 73.76, 70.05, 67.19, 65.82, 65.13],
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
