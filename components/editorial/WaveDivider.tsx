export default function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={'ed-wave' + (flip ? ' ed-wave-flip' : '')}
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 13 C240 78 400 10 720 28 S1200 75 1440 8 V70 H0Z" fill="#c99c49" />
      <path d="M0 24 C240 89 400 21 720 39 S1200 86 1440 19 V70 H0Z" fill="#faf5eb" />
    </svg>
  );
}
