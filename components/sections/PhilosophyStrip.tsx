'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Each chunk reveals together as a unit
const chunks = [
  {
    lines: [
      'Ask a room full of adults when they stopped enjoying school,',
      'and most of them will point to a specific moment.',
    ],
    highlight: false,
    start: 0,
    end: 0.4,
  },
  {
    lines: [
      'The subject varies. The feeling does not.',
      '',
      'Somewhere between childhood curiosity and formal education,',
      'the desire to learn gets replaced by the pressure to perform.',
    ],
    highlight: false,
    start: 0.3,
    end: 0.65,
  },
  {
    lines: ['When that desire goes, everything goes.'],
    highlight: true,
    start: 0.58,
    end: 0.82,
  },
  {
    lines: ['Because the first step to learning is wanting to.'],
    highlight: true,
    large: true,
    start: 0.75,
    end: 1,
  },
];

export default function PhilosophyStrip() {
  const outerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={outerRef} className="relative" style={{ height: '220vh' }}>
      <div className="sticky top-0 h-screen flex items-center justify-center bg-[rgb(var(--dark-blue))] overflow-hidden">

        {/* Staff lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true">
          {[20, 35, 50, 65, 80].map((pct) => (
            <div key={pct} className="absolute inset-x-0 h-px bg-[rgb(var(--yellow))]" style={{ top: `${pct}%` }} />
          ))}
        </div>

        <div className="container-custom max-w-3xl text-center">
          <div className="space-y-3 md:space-y-4">
            {chunks.map((chunk, ci) => {
              const opacity = useTransform(
                scrollYProgress,
                [chunk.start, chunk.start + 0.06, chunk.end - 0.04, chunk.end],
                [0.08, 1, 1, ci < chunks.length - 1 ? 0.3 : 1]
              );
              const y = useTransform(scrollYProgress, [chunk.start, chunk.start + 0.07], [18, 0]);

              return (
                <motion.div key={ci} style={{ opacity, y }} className="space-y-1">
                  {chunk.lines.map((line, li) =>
                    !line ? (
                      <div key={li} className="h-2 md:h-3" />
                    ) : (
                      <p
                        key={li}
                        className={
                          chunk.highlight
                            ? chunk.large
                              ? 'text-2xl md:text-4xl font-bold text-[rgb(var(--yellow))]'
                              : 'text-xl md:text-3xl font-bold text-[rgb(var(--yellow))]'
                            : 'text-lg md:text-2xl text-white/90'
                        }
                      >
                        {line}
                      </p>
                    )
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.p
            style={{ opacity: useTransform(scrollYProgress, [0.88, 1], [0, 0.45]) }}
            className="mt-12 text-white/40 text-sm tracking-widest uppercase"
          >
            Keep scrolling
          </motion.p>
        </div>
      </div>
    </div>
  );
}
