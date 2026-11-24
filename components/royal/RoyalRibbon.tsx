import { useId } from 'react';

const heroTop =
  'M-12 39 C115 54 190 131 339 99 C483 68 545 42 670 67 C827 98 944 137 1080 100 C1240 57 1345 8 1452 -12';
const heroBottom =
  'M-12 153 C105 78 220 146 339 113 C481 84 548 59 670 81 C830 113 949 153 1080 126 C1244 96 1355 60 1452 53';
const heroBand =
  'M-12 39 C115 54 190 131 339 99 C483 68 545 42 670 67 C827 98 944 137 1080 100 C1240 57 1345 8 1452 -12 L1452 53 C1355 60 1244 96 1080 126 C949 153 830 113 670 81 C548 59 481 84 339 113 C220 146 105 78 -12 153 Z';
const edgeTop = 'M-12 26 C213 2 390 85 633 59 S1060 -3 1452 34';
const edgeBottom = 'M-12 40 C213 16 390 99 633 73 S1060 11 1452 48';
const edgeBand =
  'M-12 26 C213 2 390 85 633 59 S1060 -3 1452 34 L1452 48 C1060 11 876 46 633 73 C390 99 213 16 -12 40 Z';

export default function RoyalRibbon({ variant = 'hero' }: { variant?: 'hero' | 'top' | 'bottom' }) {
  const id = useId();
  const hero = variant === 'hero';
  const top = hero ? heroTop : edgeTop;
  const bottom = hero ? heroBottom : edgeBottom;
  const band = hero ? heroBand : edgeBand;

  return (
    <svg
      className={'royal-ribbon royal-ribbon--' + variant}
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id + '-metal'} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#8b591b" />
          <stop offset=".09" stopColor="#e7bd65" />
          <stop offset=".22" stopColor="#fff1bb" />
          <stop offset=".38" stopColor="#c2913c" />
          <stop offset=".65" stopColor="#e8bd68" />
          <stop offset=".85" stopColor="#a97122" />
          <stop offset="1" stopColor="#f8df9a" />
        </linearGradient>
        <linearGradient id={id + '-navy'} x1="0%" y1="10%" x2="100%" y2="75%">
          <stop stopColor="#071e40" />
          <stop offset=".28" stopColor="#18467b" />
          <stop offset=".56" stopColor="#0b2850" />
          <stop offset="1" stopColor="#103966" />
        </linearGradient>
        <pattern id={id + '-pattern'} width="145" height="145" patternUnits="userSpaceOnUse">
          <image href="/images/preview-3/patterns/navy-botanical.svg" width="145" height="145" />
        </pattern>
        <pattern id={id + '-grain'} width="320" height="96" patternUnits="userSpaceOnUse">
          <image
            href="/images/preview-3/textures/metallic-gold.svg"
            width="320"
            height="96"
            opacity=".3"
          />
        </pattern>
        <pattern id={id + '-paper'} width="420" height="420" patternUnits="userSpaceOnUse">
          <rect width="420" height="420" fill="#faf2e4" />
          <image href="/images/preview-3/textures/luxury-paper.svg" width="420" height="420" />
        </pattern>
      </defs>
      {!hero && <path d={bottom + ' V150H-12Z'} fill={`url(#${id}-paper)`} />}
      <path d={band} fill={`url(#${id}-navy)`} />
      <path d={band} fill={`url(#${id}-pattern)`} />
      {/* Stroke only open curves: never the perimeter of a closed fill. */}
      <path d={top} fill="none" stroke={`url(#${id}-metal)`} strokeWidth={hero ? 17 : 12} />
      <path d={top} fill="none" stroke={`url(#${id}-grain)`} strokeWidth={hero ? 14 : 9} />
      <path
        d={top}
        fill="none"
        stroke="#ffe7aa"
        strokeWidth="1.2"
        transform="translate(0 -6)"
        opacity=".88"
      />
      <path d={bottom} fill="none" stroke={`url(#${id}-metal)`} strokeWidth={hero ? 5 : 4} />
      <path d={bottom} fill="none" stroke="#fff1c4" strokeWidth=".8" transform="translate(0 2)" />
    </svg>
  );
}
