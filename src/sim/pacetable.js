// Clean-lap time (s) of the rivals at each difficulty preset, per circuit: the same numbers as the README pace table.
// Regenerate with `JSON=pace.json node tools/pace-table.mjs` after anything that changes the racing line or the AI's pace.
// tests/pacetable.mjs checks the table against DIFFICULTIES and the circuit list.
export const PACE_LEVELS = [0.08, 0.3, 0.55, 0.8, 1.0, 1.15];
export const PACE = {
  vettore: [81.63, 75.83, 71.13, 67.34, 65.42, 64.67],
  rade: [74.53, 69.74, 65.22, 61.42, 59.16, 58.02],
  northfield: [90.44, 83.91, 78.59, 74.31, 72.66, 71.8],
  ardennes: [88.09, 81.6, 76.32, 72.22, 70.68, 69.97],
  costa: [90.98, 84.27, 78.6, 74.35, 72.68, 71.76],
  aurora: [77.89, 72.17, 67.3, 63.55, 61.78, 60.94],
  mirage: [93.82, 86.89, 80.89, 76.38, 74.31, 73.36],
  lumiere: [97.13, 89.83, 83.74, 78.74, 75.85, 74.58],
  porto: [94.45, 87.67, 81.74, 76.97, 74.27, 73.15],
  sakura: [111.96, 103.6, 96.34, 91.17, 89.37, 88.31],
  bastide: [83.32, 77.49, 72.27, 68.53, 67.03, 66.18],
  caldera: [81.69, 75.85, 70.9, 67.24, 65.55, 64.92],
  serpent: [123.77, 114.07, 105.91, 100.62, 98.75, 97.59],
  vortex: [86.04, 79.57, 74.4, 70.38, 68.59, 67.77],
  kasbah: [105.94, 98.17, 91.07, 87.12, 85.32, 84.2],
  neon: [112.75, 104.04, 96.7, 91.92, 90.19, 89.18],
  meridian: [90.43, 83.8, 78.44, 74.09, 72.37, 71.77],
  scarp: [107.9, 99.77, 92.85, 88.2, 86.52, 85.5],
  ironwood: [88.99, 82.7, 77.22, 73.29, 71.9, 71.24],
  frost: [85.41, 79.36, 74.22, 70.31, 68.93, 68.15],
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
