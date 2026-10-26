import * as THREE from 'three';
import { mulberry32 } from '../util/math.js';

export const SPONSORS = ['VELOCE', 'PETRONOVA', 'QUANTUM', 'AXIOM', 'NOVATEL', 'STRATOS', 'HYPERION', 'ORBITAL', 'ZENITH', 'TORQUE+', 'APEXFUEL', 'MERIDIAN', 'KINETIC', 'SOLARIS'];
const SPONSOR_COLORS = [['#ffffff', '#d8102b'], ['#0b1f4d', '#ffffff'], ['#ffd400', '#111111'], ['#111111', '#ff7a14'], ['#ffffff', '#0a7d4f'], ['#e8e8e8', '#6a2fb5']];

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}

function toTexture(c, { repeat = true, srgb = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}

function speckle(ctx, w, h, n, rnd, colors, minR, maxR, alpha = 1) {
  for (let i = 0; i < n; i++) {
    ctx.globalAlpha = alpha * (0.3 + 0.7 * rnd());
    ctx.fillStyle = colors[Math.floor(rnd() * colors.length)];
    const r = minR + (maxR - minR) * rnd();
    const x = rnd() * w, y = rnd() * h;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 6.283);
    ctx.fill();
    // wrap-around so the tile is seamless
    if (x < r) { ctx.beginPath(); ctx.arc(x + w, y, r, 0, 6.283); ctx.fill(); }
    if (y < r) { ctx.beginPath(); ctx.arc(x, y + h, r, 0, 6.283); ctx.fill(); }
    if (x > w - r) { ctx.beginPath(); ctx.arc(x - w, y, r, 0, 6.283); ctx.fill(); }
    if (y > h - r) { ctx.beginPath(); ctx.arc(x, y - h, r, 0, 6.283); ctx.fill(); }
  }
  ctx.globalAlpha = 1;
}

export function asphaltTexture() {
  const [c, g] = canvas(512, 512);
  const rnd = mulberry32(11);
  g.fillStyle = '#3b3c40';
  g.fillRect(0, 0, 512, 512);
  // large soft patches (repairs, wear)
  speckle(g, 512, 512, 60, rnd, ['#35363a', '#444549', '#3f4044'], 30, 90, 0.35);
  speckle(g, 512, 512, 5200, rnd, ['#2b2c2f', '#505156', '#5b5c61', '#222326'], 0.5, 1.6, 0.55);
  // hairline cracks / tar snakes
  g.strokeStyle = 'rgba(15,15,18,0.4)';
  g.lineWidth = 1;
  for (let i = 0; i < 9; i++) {
    g.beginPath();
    let x = rnd() * 512, y = rnd() * 512;
    g.moveTo(x, y);
    for (let k = 0; k < 8; k++) {
      x += (rnd() - 0.5) * 60;
      y += (rnd() - 0.5) * 60;
      g.lineTo(x, y);
    }
    g.stroke();
  }
  return toTexture(c);
}

export function runoffTexture() {
  const [c, g] = canvas(256, 256);
  const rnd = mulberry32(21);
  g.fillStyle = '#5b5f66';
  g.fillRect(0, 0, 256, 256);
  speckle(g, 256, 256, 1800, rnd, ['#4d5157', '#6b7078', '#41454b'], 0.5, 1.5, 0.6);
  return toTexture(c);
}

export function grassTexture(a = '#4a7d2f', b = '#5e9238') {
  const [c, g] = canvas(512, 512);
  const rnd = mulberry32(31);
  g.fillStyle = a;
  g.fillRect(0, 0, 512, 512);
  speckle(g, 512, 512, 70, rnd, [b, a, '#3c6a27'], 20, 70, 0.28);
  // blades
  g.lineWidth = 1;
  for (let i = 0; i < 7000; i++) {
    g.strokeStyle = rnd() < 0.5 ? b : '#2f5a1e';
    g.globalAlpha = 0.35;
    const x = rnd() * 512, y = rnd() * 512;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + (rnd() - 0.5) * 3, y - 2 - rnd() * 4);
    g.stroke();
  }
  g.globalAlpha = 1;
  return toTexture(c);
}

export function gravelTexture() {
  const [c, g] = canvas(256, 256);
  const rnd = mulberry32(41);
  g.fillStyle = '#b9a98a';
  g.fillRect(0, 0, 256, 256);
  speckle(g, 256, 256, 3500, rnd, ['#a69677', '#cbbb9c', '#8f8062', '#d8cdb4'], 0.6, 1.8, 0.8);
  return toTexture(c);
}

export function kerbTexture() {
  const [c, g] = canvas(64, 128);
  g.fillStyle = '#e53935';
  g.fillRect(0, 0, 64, 128);
  g.fillStyle = '#f5f5f5';
  g.fillRect(0, 64, 64, 64);
  const rnd = mulberry32(51);
  speckle(g, 64, 128, 300, rnd, ['#00000022', '#ffffff22'], 0.5, 1.2, 0.5);
  return toTexture(c);
}

export function startLineTexture() {
  const [c, g] = canvas(64, 64);
  g.fillStyle = '#f2f2f2';
  g.fillRect(0, 0, 64, 64);
  g.fillStyle = '#151515';
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) if ((x + y) % 2 === 0) g.fillRect(x * 16, y * 16, 16, 16);
  return toTexture(c);
}

export function barrierTexture(seed = 5) {
  const [c, g] = canvas(1024, 128);
  const rnd = mulberry32(seed);
  g.fillStyle = '#e9e9e6';
  g.fillRect(0, 0, 1024, 128);
  // concrete tone + stains
  speckle(g, 1024, 128, 120, rnd, ['#d4d4d0', '#f4f4f2', '#c9c9c4'], 8, 40, 0.25);
  let x = 0;
  while (x < 1024) {
    const w = 170 + rnd() * 130;
    const [bg, fg] = SPONSOR_COLORS[Math.floor(rnd() * SPONSOR_COLORS.length)];
    g.fillStyle = bg;
    g.fillRect(x + 6, 14, w - 12, 100);
    g.fillStyle = fg;
    g.font = '900 64px "Arial Black", Impact, sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(SPONSORS[Math.floor(rnd() * SPONSORS.length)], x + w / 2, 66, w - 28);
    x += w;
  }
  // base stripe
  g.fillStyle = '#c9201f';
  g.fillRect(0, 118, 1024, 10);
  return toTexture(c);
}

export function tyreWallTexture() {
  const [c, g] = canvas(512, 128);
  const rnd = mulberry32(61);
  g.fillStyle = '#16171a';
  g.fillRect(0, 0, 512, 128);
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 8; col++) {
      const x = col * 64 + (row % 2) * 32, y = row * 42;
      g.fillStyle = '#26282c';
      g.beginPath();
      g.ellipse(x + 32, y + 21, 30, 19, 0, 0, 6.283);
      g.fill();
      g.fillStyle = '#0c0d0f';
      g.beginPath();
      g.ellipse(x + 32, y + 21, 14, 8, 0, 0, 6.283);
      g.fill();
      if (rnd() < 0.3) {
        g.fillStyle = rnd() < 0.5 ? '#f2f2f2' : '#2a6cd6';
        g.fillRect(x + 8, y + 6, 48, 6);
      }
    }
  }
  return toTexture(c);
}

export function crowdTexture() {
  const [c, g] = canvas(256, 128);
  const rnd = mulberry32(71);
  g.fillStyle = '#2b2b30';
  g.fillRect(0, 0, 256, 128);
  const cols = ['#d33', '#eee', '#36c', '#fc3', '#3a6', '#c6c', '#f80', '#ddd', '#222', '#59f'];
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = cols[Math.floor(rnd() * cols.length)];
    g.fillRect(Math.floor(rnd() * 128) * 2, Math.floor(rnd() * 64) * 2, 2, 2);
  }
  g.globalAlpha = 0.25;
  g.fillStyle = '#000';
  for (let y = 0; y < 128; y += 8) g.fillRect(0, y + 6, 256, 2);
  return toTexture(c);
}

export function facadeTexture(seed = 3, tone = '#e8dcc6') {
  const [c, g] = canvas(256, 512);
  const rnd = mulberry32(seed);
  g.fillStyle = tone;
  g.fillRect(0, 0, 256, 512);
  speckle(g, 256, 512, 200, rnd, ['#00000010', '#ffffff18'], 6, 30, 0.5);
  for (let y = 14; y < 500; y += 46) {
    for (let x = 16; x < 240; x += 48) {
      const lit = rnd() < 0.18;
      g.fillStyle = lit ? '#ffe9a8' : '#3d5266';
      g.fillRect(x, y, 26, 32);
      g.fillStyle = 'rgba(255,255,255,0.18)';
      g.fillRect(x, y, 26, 8);
      g.fillStyle = '#00000033';
      g.fillRect(x - 3, y + 33, 32, 3);
    }
  }
  return toTexture(c);
}

export function billboardTexture(idx = 0) {
  const [c, g] = canvas(512, 128);
  const [bg, fg] = SPONSOR_COLORS[idx % SPONSOR_COLORS.length];
  g.fillStyle = bg;
  g.fillRect(0, 0, 512, 128);
  g.fillStyle = fg;
  g.fillRect(0, 108, 512, 20);
  g.font = '900 78px "Arial Black", Impact, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(SPONSORS[idx % SPONSORS.length], 256, 56, 480);
  return toTexture(c, { repeat: false });
}

export function pitDoorTexture() {
  const [c, g] = canvas(128, 128);
  g.fillStyle = '#2a2d33';
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = '#1b1d22';
  for (let y = 10; y < 118; y += 12) g.fillRect(8, y, 112, 6);
  g.fillStyle = 'rgba(255,255,255,0.12)';
  g.fillRect(0, 0, 128, 6);
  return toTexture(c, { repeat: false });
}

export function softParticleTexture() {
  const [c, g] = canvas(64, 64);
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return toTexture(c, { repeat: false, srgb: false });
}

export function lightsTexture() {
  const [c, g] = canvas(128, 64);
  g.fillStyle = '#0a0a0c';
  g.fillRect(0, 0, 128, 64);
  return toTexture(c, { repeat: false });
}

export function numberTexture(num, fg = '#ffffff', bg = null) {
  const [c, g] = canvas(128, 128);
  if (bg) {
    g.fillStyle = bg;
    g.fillRect(0, 0, 128, 128);
  }
  g.fillStyle = fg;
  g.font = '900 100px "Arial Black", Impact, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(String(num), 64, 68);
  return toTexture(c, { repeat: false });
}

export function labelTexture(text, fg = '#fff', bg = '#111', w = 256, h = 64) {
  const [c, g] = canvas(w, h);
  g.fillStyle = bg;
  g.fillRect(0, 0, w, h);
  g.fillStyle = fg;
  g.font = `900 ${Math.floor(h * 0.62)}px "Arial Black", Impact, sans-serif`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, w / 2, h / 2 + 2, w - 10);
  return toTexture(c, { repeat: false });
}
