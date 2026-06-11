'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Music, CalendarDays, Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { floatingSymbols } from '@/lib/constants';

const waveBarHeights = Array.from({ length: 24 }, (_, i) =>
  Math.round(20 + Math.abs(Math.sin(i * 0.42 + 0.5)) * 75)
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Waveform backdrop drifts up slowly
  const waveY = useTransform(scrollY, [0, 600], [0, -90]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center gradient-yellow-peach overflow-hidden pt-20"
    >
      {/* Layer A — Waveform Backdrop */}
      <motion.div
        className="absolute inset-x-0 bottom-0 top-0 flex items-end pointer-events-none"
        style={{ y: waveY }}
        aria-hidden="true"
      >
        <motion.div
          className="flex items-end gap-[3px] w-full h-48 px-4 opacity-[0.06]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
        >
          {waveBarHeights.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-full bg-[rgb(var(--primary-blue))]"
              variants={{
                hidden: { scaleY: 0 },
                visible: { scaleY: 1 },
              }}
              style={{ height: `${h}%`, transformOrigin: 'bottom' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Layer B — Floating Math/Music Symbols */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {floatingSymbols.map((sym, i) => {
          const symY = useTransform(scrollY, [0, 800], [0, -800 * sym.parallax]);
          return (
            // Outer: scroll-based parallax only
            <motion.div
              key={i}
              className="absolute"
              style={{ top: sym.top, left: sym.left, y: symY }}
            >
              {/* Inner: gentle float animation — separate from scroll y */}
              <motion.span
                className="select-none font-bold block"
                style={{
                  fontSize: sym.size,
                  opacity: sym.opacity,
                  color: 'rgb(var(--dark-blue))',
                  lineHeight: 1,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: sym.duration,
                  delay: sym.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {sym.symbol}
              </motion.span>
            </motion.div>
          );
        })}
      </div>

      {/* Layer C — Text Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Tagline pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="bg-white/80 backdrop-blur-sm text-[rgb(var(--primary-blue))] px-5 py-1.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-sm">
              <Music className="h-3.5 w-3.5" />
              Learning With Music
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-dark-blue mb-6 font-extrabold"
          >
            What if learning{' '}
            <br className="hidden sm:block" />
            felt like a song?
          </motion.h1>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="max-w-2xl mb-10 space-y-1"
          >
            <p className="text-lg md:text-xl text-[rgb(var(--dark-blue))]/90 font-medium">
              The first step to learning is wanting to.
            </p>
            <p className="text-lg md:text-xl text-[rgb(var(--dark-blue))]/80">
              Math-e-Music exists to create that wanting.
            </p>
            <p className="text-base md:text-lg text-[rgb(var(--dark-blue))]/70 mt-3">
              Original songs, live performances, and immersive experiences{' '}
              <br className="hidden md:block" />
              across Maths, Science, History, and beyond.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton href="#contact" primary>
              <CalendarDays className="h-4 w-4" />
              Book a Performance
            </MagneticButton>
            <MagneticButton href="https://www.youtube.com/c/PoojanSahil/" external>
              <Play className="h-4 w-4 fill-current" />
              Watch a Song
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-[rgb(var(--dark-blue))]/50"
        >
          <div className="w-px h-8 bg-current" />
          <div className="w-1.5 h-1.5 rounded-full bg-current" />
        </motion.div>
      </div>
    </section>
  );
}

function MagneticButton({
  href,
  primary,
  external,
  children,
}: {
  href: string;
  primary?: boolean;
  external?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
    ref.current.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
  }

  return (
    <a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease' }}
    >
      <Button
        size="lg"
        className={
          primary
            ? 'bg-[rgb(var(--dark-blue))] text-white hover:bg-[rgb(var(--dark-blue))]/90 gap-2 text-base font-semibold px-7 shadow-lg'
            : 'bg-white/70 backdrop-blur-sm text-[rgb(var(--dark-blue))] hover:bg-white gap-2 text-base font-semibold px-7 border border-[rgb(var(--dark-blue))]/20'
        }
      >
        {children}
      </Button>
    </a>
  );
}
