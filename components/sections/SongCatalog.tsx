'use client';

import { useRef, useState } from 'react';
import { songs } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Play, Pause, ExternalLink, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Pre-computed waveform heights — deterministic, no hydration mismatch
const WAVE = Array.from({ length: 42 }, (_, i) =>
  Math.round(15 + Math.abs(Math.sin(i * 0.42 + 0.6)) * 85)
);

function NowPlayingCard({ song, index }: { song: (typeof songs.recorded)[0]; index: number }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function togglePlay() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-[rgb(var(--primary-blue))]/10 hover:shadow-xl transition-all duration-300 flex flex-col gap-5"
    >
      {/* Hidden audio — no controls, no download */}
      {song.audioUrl && (
        <audio
          ref={audioRef}
          src={song.audioUrl}
          onEnded={() => setIsPlaying(false)}
          preload="none"
          onContextMenu={(e) => e.preventDefault()}
        />
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[rgb(var(--yellow))]/30 text-[rgb(var(--primary-blue))]">
            <Music className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold text-[rgb(var(--dark-blue))] text-lg leading-tight">
              {song.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">{song.concept}</p>
          </div>
        </div>

        <button
          onClick={togglePlay}
          className="flex-shrink-0 h-9 w-9 flex items-center justify-center rounded-full bg-[rgb(var(--primary-blue))] text-white hover:bg-[rgb(var(--primary-blue))]/80 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 fill-current" />
          )}
        </button>
      </div>

      {/* Full-width waveform — only animates when playing */}
      <div className="flex items-end gap-[2px] w-full h-14">
        {WAVE.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 min-w-[2px] max-w-[8px] rounded-full bg-[rgb(var(--primary-blue))]"
            style={{ opacity: isPlaying ? 0.75 : 0.25 }}
            animate={
              isPlaying
                ? {
                    height: [
                      `${h}%`,
                      `${Math.min(100, h + 38)}%`,
                      `${Math.max(10, h - 28)}%`,
                      `${h}%`,
                    ],
                  }
                : { height: `${h}%` }
            }
            transition={
              isPlaying
                ? { duration: 1.3, repeat: Infinity, delay: i * 0.028, ease: 'easeInOut' }
                : { duration: 0.4 }
            }
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function SongCatalog() {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <section id="songs" className="section-padding bg-[#fffbf4]">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow text-[rgb(var(--primary-blue))]"
          >
            § The Catalog
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[rgb(var(--dark-blue))] mt-3 mb-5"
          >
            Songs That Make Ideas Feel Real
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground leading-relaxed"
          >
            Every song begins with a concept and ends with a feeling. Warm and familial. Eerie and playful. Each one follows the emotional truth of the idea at its centre.
          </motion.p>
        </div>

        {/* Now Playing cards */}
        <div className="mb-12 mt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[rgb(var(--primary-blue))]/60 mb-5">
            Now Playing
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {songs.recorded.map((song, i) => (
              <NowPlayingCard key={song.id} song={song} index={i} />
            ))}
          </div>
        </div>

        {/* Coming Soon — draggable chips */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[rgb(var(--primary-blue))]/60 mb-5">
            Coming Soon
          </p>

          <div ref={constraintRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
              drag="x"
              dragConstraints={constraintRef}
              dragElastic={0.05}
              className="flex gap-3 w-max pb-3"
            >
              {songs.upcoming.map((song, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-shrink-0 bg-white border border-[rgb(var(--primary-blue))]/10 rounded-xl px-4 py-3 shadow-sm select-none"
                >
                  <p className="font-semibold text-[rgb(var(--dark-blue))] text-sm">{song.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{song.concept}</p>
                </motion.div>
              ))}
              {/* Many more indicator */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="flex-shrink-0 bg-[rgb(var(--yellow))]/15 border border-[rgb(var(--yellow))]/30 rounded-xl px-4 py-3 shadow-sm select-none flex items-center gap-2"
              >
                <span className="font-semibold text-[rgb(var(--dark-blue))]/60 text-sm">+ Many more</span>
              </motion.div>
            </motion.div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 opacity-60">← Drag to explore →</p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex items-center gap-4"
        >
          <a href="https://www.youtube.com/c/PoojanSahil/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-[rgb(var(--primary-blue))]/40 text-[rgb(var(--primary-blue))] hover:bg-[rgb(var(--primary-blue))] hover:text-white gap-2 transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4" />
              Listen on YouTube
            </Button>
          </a>
          <span className="text-xs text-muted-foreground">More songs releasing soon</span>
        </motion.div>
      </div>
    </section>
  );
}
