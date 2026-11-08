// Each pose: { id, build() -> svg string }. Coordinates in units (see octo.js), origin = body center.
const { COLOR, eyes, octo, svgDoc } = require('./octo');
const { lime, limeText, purple, lilac, grey } = COLOR;

const stroke = (c, w) => `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;
const plain = (units, extra) => svgDoc(units, extra);
// props grow 25% around an anchor; shift moves body + props left to keep a 36px canvas margin
const grow = (u, ax, ay, k = 1.25) => `<g transform="translate(${ax},${ay}) scale(${k}) translate(${-ax},${-ay})">${u}</g>`;
const shift = (u, dx) => `<g transform="translate(${dx},0)">${u}</g>`;

const poses = [
  { id: '01-neutral', build: () => plain(octo()) },
  { id: '02-happy', build: () => plain(octo({ body: { sy: 1.03, sx: 0.99 }, eyes: eyes('arc') })) },
  { id: '03-wink', build: () => plain(octo({ body: { rot: -4 }, eyes: eyes('pill', 'arc') })) },
  { id: '04-blink-calm', build: () => plain(octo({ body: { sy: 0.97, sx: 1.01 }, eyes: eyes('line') })) },
  { id: '05-look-left', build: () => plain(octo({ eyes: eyes('pill', 'pill', { dx: -26 }) })) },
  { id: '06-look-right', build: () => plain(octo({ eyes: eyes('pill', 'pill', { dx: 26 }) })) },
  { id: '07-look-up', build: () => plain(octo({ eyes: eyes('pill', 'pill', { dy: -20, h: 60 }) })) },
  {
    id: '08-surprised',
    build: () => plain(octo({ body: { sy: 1.15, sx: 0.94 }, eyes: eyes('pill', 'pill', { w: 42, h: 80 }), shadow: { w: 0.92 } })),
  },
  {
    id: '09-listening',
    build: () => {
      const waves = [47, 75, 102].map((r, i) => {
        const a = 0.62; // half-angle in rad
        const cx = 126, cy = -12;
        const x1 = cx + r * Math.cos(-a), y1 = cy + r * Math.sin(-a), y2 = cy + r * Math.sin(a);
        return `<path d="M${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 0 1 ${x1.toFixed(1)},${y2.toFixed(1)}" ${stroke(lilac, 11)} opacity="${1 - i * 0.22}"/>`;
      }).join('');
      return plain(octo({ body: { rot: 3 }, eyes: eyes('pill', 'pill', { dx: 24 }) }) + waves);
    },
  },
  {
    id: '10-talking',
    build: () => {
      const bubble = `<g filter="url(#fProp)">
        <path d="M156,-52 L176,-52 L142,-24 Z" fill="${purple}" stroke="${lilac}" stroke-width="3" stroke-linejoin="round"/>
        <rect x="138" y="-130" width="102" height="82" rx="20" fill="${purple}" stroke="${lilac}" stroke-width="3"/>
        <rect x="154" y="-52" width="22" height="6" fill="${purple}"/>
        <rect x="156" y="-112" width="68" height="9" rx="4.5" fill="${lime}"/>
        <rect x="156" y="-92" width="52" height="9" rx="4.5" fill="${lime}"/>
        <rect x="156" y="-72" width="38" height="9" rx="4.5" fill="${lime}"/></g>`;
      return plain(shift(octo({ body: { rot: -2 }, eyes: eyes('pill', 'pill', { dx: 16, dy: -4 }) }) + grow(bubble, 135, -60), -27));
    },
  },
  {
    id: '11-thinking',
    build: () => {
      const dots = `<g fill="${lilac}"><circle cx="26" cy="-134" r="6"/><circle cx="50" cy="-160" r="9"/><circle cx="84" cy="-196" r="14"/></g>`;
      return plain(octo({ body: { rot: 4 }, eyes: eyes('pill', 'pill', { dx: 12, dy: -18, h: 58 }) }) + dots);
    },
  },
  {
    id: '12-task-done',
    build: () => {
      const badge = `<g filter="url(#fProp)"><circle cx="112" cy="-92" r="40" fill="${lime}"/>
        <path d="M94,-92 L108,-77 L132,-107" ${stroke(limeText, 10)}/></g>`;
      return plain(octo({ body: { sy: 1.04, sx: 0.98 }, eyes: eyes('arc') }) + grow(badge, 112, -92));
    },
  },
  {
    id: '13-task-card',
    build: () => {
      const card = `<g filter="url(#fProp)"><rect x="140" y="-80" width="100" height="112" rx="14" fill="#FFFFFF"/></g>
        <rect x="154" y="-64" width="24" height="24" rx="7" fill="${lime}"/>
        <path d="M159,-52 L165,-46 L174,-58" ${stroke(limeText, 4)}/>
        <rect x="188" y="-62" width="38" height="7" rx="3.5" fill="${grey}"/>
        <rect x="188" y="-48" width="26" height="7" rx="3.5" fill="${grey}"/>
        <rect x="154" y="-16" width="72" height="1.5" fill="#EBE8F1"/>
        <rect x="154" y="2" width="72" height="22" rx="11" fill="${lime}"/>
        <circle cx="167" cy="13" r="4" fill="${limeText}"/>
        <rect x="177" y="11" width="36" height="4" rx="2" fill="${limeText}" opacity="0.75"/>`;
      return plain(shift(octo({ eyes: eyes('pill', 'pill', { dx: 20 }) }) + grow(card, 135, -24), -27));
    },
  },
  {
    id: '14-calendar',
    build: () => {
      const cells = [];
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
        const x = 154 + c * 26, y = -46 + r * 22;
        const hot = r === 1 && c === 1;
        cells.push(`<rect x="${x}" y="${y}" width="18" height="14" rx="4" fill="${hot ? lime : '#E3DFEC'}"${hot ? ' stroke="#8FA81A" stroke-width="2"' : ''}/>`);
      }
      const cal = `<g filter="url(#fProp)"><rect x="140" y="-86" width="96" height="112" rx="14" fill="#FFFFFF"/></g>
        <path d="M140,-60 V-72 a14,14 0 0 1 14,-14 H222 a14,14 0 0 1 14,14 V-60 Z" fill="${purple}"/>
        <rect x="160" y="-97" width="8" height="20" rx="4" fill="${lilac}"/><rect x="208" y="-97" width="8" height="20" rx="4" fill="${lilac}"/>
        ${cells.join('')}`;
      return plain(shift(octo({ eyes: eyes('pill', 'pill', { dx: 20 }) }) + grow(cal, 135, -30), -22));
    },
  },
  {
    id: '15-on-call-tile',
    build: () => {
      const tile = `<defs><linearGradient id="gTile" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#46494D"/><stop offset="1" stop-color="#3A3D40"/></linearGradient></defs>
        <rect x="103" y="223" width="994" height="754" rx="40" fill="url(#gTile)" stroke="${lime}" stroke-width="6"/>`;
      const chrome = `<rect x="140" y="900" width="150" height="44" rx="22" fill="#0E0A1A" opacity="0.8"/>
        <circle cx="166" cy="922" r="7" fill="${lime}"/><rect x="184" y="918" width="82" height="8" rx="4" fill="#8F86A8"/>
        <circle cx="1040" cy="262" r="0" fill="none"/>`;
      return svgDoc(octo({ shadow: { o: 0.3 } }), { under: tile, over: chrome });
    },
  },
  {
    id: '16-bounce',
    build: () => {
      const lines = `<path d="M-26,-92 V-122" ${stroke(lilac, 9)} transform="rotate(-8 -26 -92)"/>
        <path d="M26,-100 V-142" ${stroke(lilac, 9)} transform="rotate(8 26 -100)"/>`;
      return plain(octo({ body: { sx: 1.14, sy: 0.78 }, eyes: eyes('arc'), shadow: { w: 1.18, o: 0.65 } }) + lines);
    },
  },
];

module.exports = poses;
