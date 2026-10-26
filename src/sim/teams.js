/** Fictional teams/drivers. `rating` (0..1) maps to a small power/grip advantage; `skill` is the driver's talent. */
export const TEAMS = [
  { id: 'valdori', name: 'Scuderia Valdori', short: 'Valdori', color: '#d8102b', accent: '#ffffff', livery: 'stripe', rating: 0.92 },
  { id: 'aurelian', name: 'Aurelian Silver Arrows', short: 'Aurelian', color: '#b8c2cc', accent: '#00c7b0', livery: 'split', rating: 1.0 },
  { id: 'northstar', name: 'Northstar Motorsport', short: 'Northstar', color: '#18286b', accent: '#e6232f', livery: 'chevron', rating: 0.97 },
  { id: 'helix', name: 'Helix Dynamics', short: 'Helix', color: '#ff7a14', accent: '#101820', livery: 'stripe', rating: 0.84 },
  { id: 'kestrel', name: 'Kestrel GP', short: 'Kestrel', color: '#0b6e4f', accent: '#d6f23c', livery: 'chevron', rating: 0.7 },
  { id: 'vortex', name: 'Vortex Sport', short: 'Vortex', color: '#6a2fb5', accent: '#ff4fd8', livery: 'split', rating: 0.62 },
  { id: 'ironside', name: 'Ironside Racing', short: 'Ironside', color: '#23272e', accent: '#f2b705', livery: 'stripe', rating: 0.5 },
  { id: 'solace', name: 'Solace Racing', short: 'Solace', color: '#f6f6f2', accent: '#ff5c8a', livery: 'chevron', rating: 0.4 },
  { id: 'marlin', name: 'Marlin Performance', short: 'Marlin', color: '#12a3c4', accent: '#0a2540', livery: 'split', rating: 0.3 },
  { id: 'tempest', name: 'Tempest Auto', short: 'Tempest', color: '#f2d400', accent: '#111111', livery: 'stripe', rating: 0.15 },
];

export const DRIVERS = [
  ['Luca Ferraro', 'FER', 16, 0.95], ['Matteo Bellini', 'BEL', 55, 0.5],
  ['Oliver Hartwell', 'HAR', 44, 1.0], ['Jonas Eklund', 'EKL', 63, 0.75],
  ['Callum Reid', 'REI', 1, 0.98], ['Sven Aaltonen', 'AAL', 11, 0.7],
  ['Diego Marquez', 'MAR', 14, 0.85], ['Kenji Arakawa', 'ARA', 22, 0.8],
  ['Tomás Vidal', 'VID', 23, 0.6], ['Étienne Lacroix', 'LAC', 10, 0.65],
  ['Anders Nyberg', 'NYB', 27, 0.55], ['Rafael Duarte', 'DUA', 77, 0.7],
  ['Idris Okafor', 'OKA', 3, 0.5], ['Hana Weiss', 'WEI', 18, 0.45],
  ['Pavel Novak', 'NOV', 31, 0.55], ['Mateo Rossi', 'ROS', 9, 0.4],
  ['Yuto Mori', 'MOR', 24, 0.5], ['Ben Carroway', 'CAR', 81, 0.35],
  ['Santiago Ibarra', 'IBA', 6, 0.35], ['Finn Lindqvist', 'LIN', 99, 0.3],
].map(([name, code, number, talent]) => ({ name, code, number, talent }));
