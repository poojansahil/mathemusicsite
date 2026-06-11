'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import PhilosophyStrip from '@/components/sections/PhilosophyStrip';
import Benefits from '@/components/sections/Benefits';
import Offerings from '@/components/sections/Offerings';
import SongCatalog from '@/components/sections/SongCatalog';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';
import PageSkeleton from '@/components/PageSkeleton';
import SineWaveDivider from '@/components/ui/SineWaveDivider';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay so skeleton is visible briefly on fast connections
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{!mounted && <PageSkeleton key="skeleton" />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />

        <main>
          {/* 1 — Hero */}
          <Hero />

          {/* 2 — Philosophy Strip (sticky scroll) */}
          <PhilosophyStrip />

          {/* Divider: dark → white */}
          <SineWaveDivider
            topColor="rgb(12,47,57)"
            bottomColor="#ffffff"
          />

          {/* 3 — Why Math-e-Music */}
          <Benefits />

          {/* Divider: white → dark blue */}
          <SineWaveDivider
            topColor="#ffffff"
            bottomColor="rgb(12,47,57)"
            flip
          />

          {/* 4 — Offerings */}
          <Offerings />

          {/* Divider: dark blue → warm off-white */}
          <SineWaveDivider
            topColor="rgb(12,47,57)"
            bottomColor="#fffbf4"
          />

          {/* 5 — Song Catalog */}
          <SongCatalog />

          {/* Divider: warm off-white → light teal */}
          <SineWaveDivider
            topColor="#fffbf4"
            bottomColor="#f0f8fa"
            flip
          />

          {/* 6 — Testimonials */}
          <Testimonials />

          {/* Divider: light teal → white */}
          <SineWaveDivider
            topColor="#f0f8fa"
            bottomColor="#ffffff"
          />

          {/* 7 — About */}
          <About />

          {/* Divider: white → yellow/peach */}
          <SineWaveDivider
            topColor="#ffffff"
            bottomColor="rgb(255,215,111)"
            flip
          />

          {/* 8 — Contact */}
          <CTA />

          {/* 9 — Footer */}
          <Footer />
        </main>
      </motion.div>
    </>
  );
}
