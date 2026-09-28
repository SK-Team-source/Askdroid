// The original Askdroid directory loads listing thumbnails via client-side
// JavaScript, so no stable image URL exists for most entries. Rather than
// invent a fake image path, each listing gets a deterministic generated
// monogram card in the site's own palette.

const PALETTES = [
  ['#0c6bd6', '#0a4e9f'],
  ['#3b82f6', '#1d4ed8'],
  ['#12151b', '#3a4150'],
  ['#0c6bd6', '#7cc7ff'],
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export default function MonogramThumb({ name, size = 96 }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const idx = hashString(name) % PALETTES.length;
  const [from, to] = PALETTES[idx];

  return (
    <div
      className="monogram"
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        width: size,
        height: size,
        fontSize: Math.max(12, size * 0.34),
      }}
    >
      {initials}
    </div>
  );
}
