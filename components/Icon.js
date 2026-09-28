// A small hand-built line-icon set so the project has zero dependency on
// external icon fonts/assets. Add new keys as needed.

const paths = {
  leaf: 'M4 20c8-1 14-7 15-15-8 1-14 7-15 15Zm0 0c2-4 4-6 8-8',
  cloud: 'M7 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16.9 9 4.5 4.5 0 0 1 16.5 18H7Z',
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3-13-2 5-5 2 2-5 5-2Z',
  plane: 'M3 13l7-2 4-8 2 1-2 7 6 2v2l-6-1-2 6-2-1 1-5-5 2-2-2 4-1Z',
  map: 'M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Zm0 0v14m6-12v14',
  crane: 'M4 20V6l10-2v4h6l-3 5h-3v7M4 20h9',
  shield: 'M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3Z',
  bolt: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  humanoid: 'M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-5 7h10v6H7v-6Zm2 6 1 5m4-5-1 5M7 10 4 8m13 2 3-2',
  chip: 'M8 3v3M16 3v3M8 18v3M16 18v3M3 8h3M3 16h3M18 8h3M18 16h3M7 7h10v10H7V7Z',
  pulse: 'M3 12h4l2-7 4 14 2-7h6',
  sparkle: 'M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Zm7 10 .8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8.8-2.2Z',
  box: 'M3 8l9-5 9 5-9 5-9-5Zm0 0v9l9 5 9-5V8M12 13v9',
  gear: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm8 3-1.6.4a6.9 6.9 0 0 0-.7-1.7l.9-1.4-1.4-1.4-1.4.9a6.9 6.9 0 0 0-1.7-.7L14 4h-2l-.4 1.6a6.9 6.9 0 0 0-1.7.7L8.5 5.4 7.1 6.8 8 8.2a6.9 6.9 0 0 0-.7 1.7L5.7 10.3v2l1.6.4c.15.6.4 1.18.7 1.7l-.9 1.4 1.4 1.4 1.4-.9c.52.3 1.1.55 1.7.7L10 20h2l.4-1.6c.6-.15 1.18-.4 1.7-.7l1.4.9 1.4-1.4-.9-1.4c.3-.52.55-1.1.7-1.7L20 14v-2Z',
  alert: 'M12 3 2 20h20L12 3Zm0 6v5m0 3h.01',
  code: 'M9 8 4 12l5 4M15 8l5 4-5 4M13 4l-2 16',
  link: 'M9 15 15 9m-6-2 1.5-1.5a3 3 0 0 1 4.24 4.24L13 11m-2 2-1.5 1.5a3 3 0 0 1-4.24-4.24L7 8.5',
  robot: 'M6 9h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9Zm3-5h6l-1 5H10L9 4Zm-3 9v3m12-3v3M9 14h.01M15 14h.01',
  layers: 'M12 3 2 8l10 5 10-5-10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5',
  cube: 'M12 3 3 8v8l9 5 9-5V8l-9-5Zm0 0v10m0 0-9-5m9 5 9-5',
  chat: 'M4 5h16v11H8l-4 4V5Z',
  sensor: 'M12 3v4m0 10v4M3 12h4m10 0h4M6.3 6.3l2.8 2.8m5.8 5.8 2.8 2.8M6.3 17.7l2.8-2.8m5.8-5.8 2.8-2.8M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  phone: 'M6 3h4l1.5 4.5-2.2 1.6a13 13 0 0 0 5.6 5.6l1.6-2.2L21 14v4a2 2 0 0 1-2 2C10.6 20 4 13.4 4 5a2 2 0 0 1 2-2Z',
  mail: 'M3 5h18v14H3V5Zm0 0 9 7 9-7',
  pin: 'M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-5.6-5.6',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  facebook: 'M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1Z',
  x: 'M4 4l16 16M20 4 4 20',
  linkedin: 'M4 4h4v16H4V4Zm7 0h4v2.2c.7-1.2 2.2-2.5 4.4-2.5 3.4 0 5.6 2.3 5.6 6.6V20h-4v-8.6c0-1.9-.7-3.1-2.3-3.1-1.3 0-2 .9-2.4 1.8-.1.3-.1.7-.1 1.2V20h-4V4Z',
};

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.6 }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
