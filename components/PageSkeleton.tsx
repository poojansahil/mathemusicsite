'use client';

import { motion } from 'framer-motion';

// Pre-computed at module scope so SSR and client produce identical values
const HERO_WAVE = Array.from({ length: 24 }, (_, i) => Math.round(20 + Math.abs(Math.sin(i * 0.5)) * 70));
const SONG_WAVE = Array.from({ length: 20 }, (_, i) => Math.round(30 + Math.abs(Math.sin(i * 0.45)) * 70));

function Shimmer({ className = '' }: { className?: string }) {
  return (
    <div
      className={`math-shimmer rounded-lg ${className}`}
      aria-hidden="true"
    />
  );
}

function Circle({ size = 48 }: { size?: number }) {
  return (
    <div
      className="math-shimmer rounded-full flex-shrink-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}

export default function PageSkeleton() {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-hidden="true"
    >
      {/* Header */}
      <div className="h-16 bg-white border-b border-gray-100 flex items-center px-8 gap-8">
        <Shimmer className="h-8 w-40" />
        <div className="flex-1" />
        <Shimmer className="h-6 w-20" />
        <Shimmer className="h-6 w-20" />
        <Shimmer className="h-6 w-20" />
        <Shimmer className="h-9 w-28" />
      </div>

      {/* Hero */}
      <div className="px-8 pt-20 pb-16 flex flex-col items-center gap-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <Shimmer className="h-5 w-56" />
        <Shimmer className="h-14 w-[560px] max-w-full" />
        <Shimmer className="h-14 w-[400px] max-w-full" />
        <Shimmer className="h-6 w-[480px] max-w-full" />
        <Shimmer className="h-6 w-[420px] max-w-full" />
        <div className="flex gap-4 mt-2">
          <Shimmer className="h-12 w-44" />
          <Shimmer className="h-12 w-36" />
        </div>
        {/* Waveform placeholder */}
        <div className="flex items-end gap-[3px] h-10 opacity-30 mt-4">
          {HERO_WAVE.map((h, i) => (
            <div
              key={i}
              className="math-shimmer rounded-full w-1"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center gap-3">
            <Shimmer className="h-4 w-28" />
            <Shimmer className="h-10 w-64" />
            <Shimmer className="h-5 w-[480px] max-w-full" />
            <Shimmer className="h-5 w-[440px] max-w-full" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50">
                <Circle size={56} />
                <Shimmer className="h-5 w-36" />
                <Shimmer className="h-4 w-full" />
                <Shimmer className="h-4 w-5/6" />
                <Shimmer className="h-4 w-4/6" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Offerings */}
      <div className="px-8 py-16 bg-[#0c2f39]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center gap-3">
            <Shimmer className="h-4 w-28 opacity-40" />
            <Shimmer className="h-10 w-80 opacity-40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1].map((i) => (
              <div key={i} className="rounded-2xl bg-white/10 p-8 flex flex-col gap-4">
                <Shimmer className="h-7 w-48 opacity-40" />
                <Shimmer className="h-5 w-64 opacity-30" />
                <Shimmer className="h-4 w-full opacity-30" />
                <Shimmer className="h-4 w-5/6 opacity-30" />
                <Shimmer className="h-4 w-4/6 opacity-30" />
                <div className="flex gap-2 flex-wrap mt-2">
                  {[60, 80, 70, 90, 65].map((w, j) => (
                    <div
                      key={j}
                      className="math-shimmer h-6 rounded-full opacity-20"
                      style={{ width: w }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <Shimmer className="h-11 w-40 mt-2 opacity-30" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Song Cards */}
      <div className="px-8 py-16 bg-[#fffbf4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center gap-3">
            <Shimmer className="h-4 w-24" />
            <Shimmer className="h-10 w-72" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1].map((i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <Shimmer className="h-6 w-40" />
                    <Shimmer className="h-4 w-56" />
                    <div className="flex gap-2">
                      <Shimmer className="h-5 w-16 rounded-full" />
                      <Shimmer className="h-5 w-20 rounded-full" />
                    </div>
                  </div>
                  <Shimmer className="h-9 w-24" />
                </div>
                <div className="flex items-end gap-[2px] h-10">
                  {SONG_WAVE.map((h, j) => (
                    <div
                      key={j}
                      className="math-shimmer rounded-full flex-1 min-w-[2px]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
