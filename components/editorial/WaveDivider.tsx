import { useId } from 'react';

export default function WaveDivider({ flip = false }: { flip?: boolean }) {
  const id = useId();
  const goldId = `${id}-gold`;
  const creamId = `${id}-cream`;

  return (
    <svg
      className={'ed-wave' + (flip ? ' ed-wave-flip' : '')}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={goldId} x1="0" y1="0" x2="1" y2=".3">
          <stop stopColor="#f4d382" />
          <stop offset=".35" stopColor="#b98225" />
          <stop offset=".62" stopColor="#f6da90" />
          <stop offset="1" stopColor="#d5a54b" />
        </linearGradient>
        <linearGradient id={creamId} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#f1e8de" />
          <stop offset=".55" stopColor="#faf4ed" />
          <stop offset="1" stopColor="#f3e9dc" />
        </linearGradient>
      </defs>
      <path
        d="M0 19 C175 105 390 36 570 25 C850 -3 1170 102 1440 20 V80 H0Z"
        fill={`url(#${goldId})`}
      />
      <path
        d="M0 29 C175 114 390 45 570 34 C850 6 1170 111 1440 30 V80 H0Z"
        fill={`url(#${creamId})`}
      />
    </svg>
  );
}
