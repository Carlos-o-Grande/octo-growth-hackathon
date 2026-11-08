// Octo: body, eyes and svg wrapper. All drawing is in "unit" space where
// 1 unit = 1 px of the 800px reference (octo-mascot.png), origin = body center.
const SCALE = 2.35; // units -> canvas px (body ~ 600px wide on the 1200 canvas)
const CX = 600;
const CY = 590;
const BOTTOM = 105; // body bottom in units, squash anchors here

const COLOR = {
  lime: '#C4E833',
  limeText: '#1A2200',
  purple: '#3F007F',
  lilac: '#A98AD8',
  rim: '#CFC2F7',
  eye: '#E9E1FB',
  grey: '#CFCBD8',
};

// Hand-placed knots of the pebble (clockwise from top), smoothed below.
const KNOTS = [
  [-28, -105], [55, -95], [110, -60], [128, -15], [122, 35], [92, 78],
  [40, 104], [-20, 105], [-72, 86], [-112, 48], [-128, 0], [-118, -50], [-85, -86],
];

function smoothClosedPath(pts) {
  const n = pts.length;
  const f = (v) => v.toFixed(2);
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${f(c1[0])},${f(c1[1])} ${f(c2[0])},${f(c2[1])} ${f(p2[0])},${f(p2[1])}`;
  }
  return d + 'Z';
}
const BODY_PATH = smoothClosedPath(KNOTS);

const DEFS = `
<defs>
  <radialGradient id="gBody" cx="0.36" cy="0.28" r="0.85">
    <stop offset="0" stop-color="#2B2445"/><stop offset="1" stop-color="#110D1D"/>
  </radialGradient>
  <linearGradient id="gEye" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#F5F1FF"/><stop offset="1" stop-color="#C8B7F0"/>
  </linearGradient>
  <filter id="fShadow" x="-30%" y="-200%" width="160%" height="500%"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fEye" filterUnits="userSpaceOnUse" x="-200" y="-120" width="400" height="240">
    <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.45"/>
  </filter>
  <filter id="fProp" x="-30%" y="-30%" width="170%" height="170%">
    <feDropShadow dx="0" dy="3" stdDeviation="3.5" flood-color="#0B0618" flood-opacity="0.35"/>
  </filter>
</defs>`;

// ---- eyes (body-local units; they follow body tilt and squash) ----
const LX = -40, RX = 37, EY = -6;
const eye = {
  pill: (x, y, { w = 40, h = 66 } = {}) =>
    `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="${w / 2}" fill="url(#gEye)"/>`,
  arc: (x, y, { r = 18, sw = 11 } = {}) =>
    `<path d="M${x - r},${y + 9} A${r},${r} 0 0 1 ${x + r},${y + 9}" fill="none" stroke="${COLOR.eye}" stroke-width="${sw}" stroke-linecap="round"/>`,
  line: (x, y, { r = 17, sw = 10 } = {}) =>
    `<path d="M${x - r},${y} H${x + r}" fill="none" stroke="${COLOR.eye}" stroke-width="${sw}" stroke-linecap="round"/>`,
};
// kind: 'pill' | 'arc' | 'line'; dx/dy shift both eyes; opts go to the eye builder
function eyes(kindL = 'pill', kindR = kindL, { dx = 0, dy = 0, ...opts } = {}) {
  return `<g filter="url(#fEye)">${eye[kindL](LX + dx, EY + dy, opts)}${eye[kindR](RX + dx, EY + dy, opts)}</g>`;
}

// ---- body ----
function bodyTransform({ sx = 1, sy = 1, rot = 0, dx = 0, dy = 0 } = {}) {
  return `translate(${dx},${dy}) translate(0,${BOTTOM}) scale(${sx},${sy}) translate(0,${-BOTTOM}) rotate(${rot})`;
}

// opts: body {sx,sy,rot,dx,dy}, eyes (svg string), shadow {w,o}
function octo({ body = {}, eyes: eyesSvg = eyes(), shadow = {} } = {}) {
  const t = bodyTransform(body);
  const w = shadow.w ?? 1, o = shadow.o ?? 0.65;
  return `
<ellipse cx="${(body.dx || 0) * 0.5}" cy="112" rx="${105 * w}" ry="15" fill="#7C7A86" opacity="${o}" filter="url(#fShadow)"/>
<g transform="translate(3.6,4.2)"><g transform="${t}"><path d="${BODY_PATH}" fill="${COLOR.rim}"/></g></g>
<g transform="${t}">
  <path d="${BODY_PATH}" fill="url(#gBody)"/>
  <path d="${BODY_PATH}" fill="none" stroke="${COLOR.rim}" stroke-opacity="0.22" stroke-width="1.2"/>
  ${eyesSvg}
</g>`;
}

// Wraps content into the 1200x1200 canvas. under/over are in canvas px, units is the character + props.
function svgDoc(units, { under = '', over = '', size = 1200 } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 1200 1200">${DEFS}
${under}
<g transform="translate(${CX},${CY}) scale(${SCALE})">${units}</g>
${over}
</svg>`;
}

module.exports = { SCALE, CX, CY, COLOR, DEFS, eye, eyes, octo, svgDoc };
