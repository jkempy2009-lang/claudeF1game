// Tiny canvas line-chart helper for the post-race telemetry (no dependencies).
const css = (name, d) => (getComputedStyle(document.documentElement).getPropertyValue(name) || '').trim() || d;

/**
 * series: [{ name, color, pts: [{x, y}], dash?: boolean }]
 * opts: { title, fmtY(v), xTicks (array of integers), markers: [{x, label, color}], yMin, yMax, unit }
 */
export function drawLineChart(canvas, series, opts = {}) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = canvas.clientWidth || 420, h = canvas.clientHeight || 200;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  const g = canvas.getContext('2d');
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.clearRect(0, 0, w, h);
  const all = series.flatMap((s) => s.pts).filter((p) => Number.isFinite(p.y));
  const padL = 50, padR = 12, padT = 26, padB = 24;
  g.font = '600 11px system-ui, sans-serif';
  g.fillStyle = 'rgba(255,255,255,0.75)';
  g.textBaseline = 'alphabetic';
  if (opts.title) {
    g.font = '700 12px system-ui, sans-serif';
    g.fillText(opts.title, padL, 15);
  }
  g.font = '600 11px system-ui, sans-serif';
  if (!all.length) {
    g.fillStyle = 'rgba(255,255,255,0.45)';
    g.fillText('No data', padL + 10, h / 2);
    return;
  }
  let x0 = Math.min(...all.map((p) => p.x)), x1 = Math.max(...all.map((p) => p.x));
  let y0 = opts.yMin ?? Math.min(...all.map((p) => p.y)), y1 = opts.yMax ?? Math.max(...all.map((p) => p.y));
  if (x1 === x0) x1 = x0 + 1;
  if (y1 === y0) y1 = y0 + 1;
  if (opts.minSpan && y1 - y0 < opts.minSpan) {
    const mid = (y0 + y1) / 2;
    if (opts.yMin == null) y0 = mid - opts.minSpan / 2;
    if (opts.yMax == null) y1 = mid + opts.minSpan / 2;
  }
  const padY = (y1 - y0) * 0.08;
  if (opts.yMin == null) y0 -= padY;
  if (opts.yMax == null) y1 += padY;
  const X = (x) => padL + ((x - x0) / (x1 - x0)) * (w - padL - padR);
  const Y = (y) => h - padB - ((y - y0) / (y1 - y0)) * (h - padT - padB);
  const fmt = opts.fmtY || ((v) => v.toFixed(0));
  // grid
  g.strokeStyle = 'rgba(255,255,255,0.1)';
  g.lineWidth = 1;
  g.fillStyle = 'rgba(255,255,255,0.55)';
  g.textAlign = 'right';
  for (let k = 0; k <= 4; k++) {
    const v = y0 + ((y1 - y0) * k) / 4;
    const y = Math.round(Y(v)) + 0.5;
    g.beginPath(); g.moveTo(padL, y); g.lineTo(w - padR, y); g.stroke();
    g.fillText(fmt(v, y1 - y0), padL - 6, y + 4);
  }
  g.textAlign = 'center';
  const ticks = opts.xTicks || [x0, x1];
  for (const t of ticks) g.fillText(String(t), X(t), h - 8);
  // markers (pit stops)
  for (const m of opts.markers || []) {
    if (m.x < x0 || m.x > x1) continue;
    g.strokeStyle = m.color || 'rgba(255,200,0,0.7)';
    g.setLineDash([3, 3]);
    g.beginPath(); g.moveTo(X(m.x), padT); g.lineTo(X(m.x), h - padB); g.stroke();
    g.setLineDash([]);
    g.fillStyle = m.color || 'rgba(255,200,0,0.9)';
    g.fillText(m.label || '', X(m.x), padT - 4);
  }
  // series
  for (const s of series) {
    const pts = s.pts.filter((p) => Number.isFinite(p.y));
    if (!pts.length) continue;
    g.strokeStyle = s.color;
    g.fillStyle = s.color;
    g.lineWidth = s.width || 2;
    g.setLineDash(s.dash ? [5, 4] : []);
    g.beginPath();
    pts.forEach((p, i) => (i ? g.lineTo(X(p.x), Y(Math.min(y1, Math.max(y0, p.y)))) : g.moveTo(X(p.x), Y(Math.min(y1, Math.max(y0, p.y))))));
    g.stroke();
    g.setLineDash([]);
    for (const p of pts) {
      g.beginPath();
      g.arc(X(p.x), Y(Math.min(y1, Math.max(y0, p.y))), 2.6, 0, 6.283);
      g.fill();
    }
  }
  // legend
  g.textAlign = 'left';
  let lx = w - padR;
  for (const s of [...series].reverse()) {
    const tw = g.measureText(s.name).width;
    lx -= tw + 18;
    g.fillStyle = s.color;
    g.fillRect(lx, 7, 10, 3);
    g.fillStyle = 'rgba(255,255,255,0.75)';
    g.fillText(s.name, lx + 14, 12);
    lx -= 6;
  }
}
