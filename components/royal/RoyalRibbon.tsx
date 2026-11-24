import { useId } from 'react';

export default function RoyalRibbon({ variant = 'hero' }: { variant?: 'hero' | 'top' | 'bottom' }) {
  const id = useId();
  const hero = variant === 'hero';
  const path = hero
    ? 'M0 43C170 42 193 139 391 87S602 43 766 88S1057 176 1440 12V150H0Z'
    : 'M0 37C235 5 377 94 634 67S1058 -2 1440 42V150H0Z';
  const paper = hero
    ? 'M0 149C151 61 263 135 410 96S622 56 785 100S1124 157 1440 37V150H0Z'
    : 'M0 51C235 19 377 108 634 81S1058 12 1440 56V150H0Z';

  return (
    <svg
      className={'royal-ribbon royal-ribbon--' + variant}
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id + '-gold'} x1="0%" y1="12%" x2="100%" y2="80%">
          <stop stopColor="#b7822b" />
          <stop offset=".18" stopColor="#f8de9c" />
          <stop offset=".32" stopColor="#b68432" />
          <stop offset=".51" stopColor="#f2ce7c" />
          <stop offset=".7" stopColor="#a97220" />
          <stop offset=".86" stopColor="#ffe8ac" />
          <stop offset="1" stopColor="#c18a30" />
        </linearGradient>
        <linearGradient id={id + '-blue'} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#123f75" />
          <stop offset=".5" stopColor="#071f43" />
          <stop offset="1" stopColor="#17487c" />
        </linearGradient>
        <pattern id={id + '-pattern'} width="160" height="160" patternUnits="userSpaceOnUse">
          <image href="/images/preview-3/patterns/navy-botanical.svg" width="160" height="160" />
        </pattern>
        <pattern id={id + '-metal'} width="320" height="96" patternUnits="userSpaceOnUse">
          <image
            href="/images/preview-3/textures/metallic-gold.svg"
            width="320"
            height="96"
            opacity=".25"
          />
        </pattern>
      </defs>
      <path
        d={path}
        fill={`url(#${id}-blue)`}
        stroke={`url(#${id}-gold)`}
        strokeWidth={hero ? 18 : 12}
      />
      <path d={path} fill={`url(#${id}-pattern)`} />
      <path d={path} fill="none" stroke={`url(#${id}-metal)`} strokeWidth={hero ? 15 : 9} />
      <path d={paper} fill="#faf2e4" stroke={`url(#${id}-gold)`} strokeWidth="3" />
      <path d={paper} fill="none" stroke="#fff0c1" strokeWidth=".8" />
    </svg>
  );
}
