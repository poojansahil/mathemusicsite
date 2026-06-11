interface SineWaveDividerProps {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
  className?: string;
}

export default function SineWaveDivider({
  topColor = 'transparent',
  bottomColor = '#ffffff',
  flip = false,
  className = '',
}: SineWaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${className}`}
      style={{ background: topColor, marginBottom: '-1px' }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 72"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ transform: flip ? 'scaleY(-1)' : undefined }}
      >
        <path
          d="M0,36 C180,72 360,0 540,36 C720,72 900,0 1080,36 C1260,72 1380,18 1440,36 L1440,72 L0,72 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
