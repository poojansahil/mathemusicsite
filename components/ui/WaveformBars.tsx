'use client';

import { motion } from 'framer-motion';

interface WaveformBarsProps {
  count?: number;
  color?: string;
  animated?: boolean;
  className?: string;
}

const sineHeights = Array.from({ length: 20 }, (_, i) =>
  Math.round(30 + Math.abs(Math.sin(i * 0.45 + 0.3)) * 70)
);

export default function WaveformBars({
  count = 20,
  color = 'currentColor',
  animated = false,
  className = '',
}: WaveformBarsProps) {
  const heights = sineHeights.slice(0, count);

  return (
    <div
      className={`flex items-end gap-[2px] ${className}`}
      aria-hidden="true"
    >
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="rounded-full w-[3px] flex-shrink-0"
          style={{ background: color, height: `${h}%` }}
          animate={
            animated
              ? {
                  height: [
                    `${h}%`,
                    `${Math.min(100, h + 30)}%`,
                    `${Math.max(10, h - 20)}%`,
                    `${h}%`,
                  ],
                }
              : undefined
          }
          transition={
            animated
              ? {
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.04,
                  ease: 'easeInOut',
                }
              : undefined
          }
        />
      ))}
    </div>
  );
}
