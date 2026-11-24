import { useId } from 'react';

export default function WaveDivider({ flip = false }: { flip?: boolean }) {
  const id = useId();
  return (
    <svg
      className={'ed-wave' + (flip ? ' ed-wave-flip' : '')}
      viewBox="0 0 1440 85"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id + '-metal'} x1="0%" y1="0%" x2="100%" y2="75%">
          <stop stopColor="#b4812e" />
          <stop offset=".18" stopColor="#f7d88b" />
          <stop offset=".36" stopColor="#d3a64d" />
          <stop offset=".53" stopColor="#fff0b5" />
          <stop offset=".76" stopColor="#d0a049" />
          <stop offset="1" stopColor="#e8c16c" />
        </linearGradient>
        <linearGradient id={id + '-paper'} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#f3e9dd" />
          <stop offset=".52" stopColor="#faf5ed" />
          <stop offset="1" stopColor="#f2e8da" />
        </linearGradient>
      </defs>
      <path
        d="M0 16 C195 115 405 32 675 25 S1170 104 1440 13 V85 H0Z"
        fill={`url(#${id}-metal)`}
      />
      <path
        d="M0 26 C195 125 405 39 675 32 S1170 111 1440 23 V85 H0Z"
        fill={`url(#${id}-paper)`}
      />
      <path
        d="M0 24 C195 123 405 37 675 30 S1170 109 1440 21"
        fill="none"
        stroke="#fff1ba"
        strokeWidth="1.4"
        opacity=".8"
      />
    </svg>
  );
}
