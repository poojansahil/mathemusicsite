'use client';

import { useRef } from 'react';
import { offerings } from '@/lib/constants';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';

function OfferingCard({
  offering,
  enterFrom,
  index,
}: {
  offering: (typeof offerings)[0];
  enterFrom: 'left' | 'right';
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const rawTilt = useTransform(scrollVelocity, [-2000, 0, 2000], [-3, 0, 3]);
  const tilt = useSpring(rawTilt, { stiffness: 120, damping: 25 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: enterFrom === 'left' ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: 'easeOut' }}
      style={{ rotateY: tilt }}
      className="flex flex-col bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300"
    >
      {/* Icon + title */}
      <div className="flex items-start gap-4 mb-5">
        <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[rgb(var(--yellow))] text-[rgb(var(--dark-blue))]">
          <offering.icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white leading-tight">
            {offering.title}
          </h3>
          <p className="text-[rgb(var(--yellow))]/80 text-sm mt-1 leading-snug whitespace-pre-line">
            {offering.subhead}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3 mb-6 flex-1">
        {offering.description.split('\n\n').map((para, i) => (
          <p key={i} className="text-white/75 text-sm leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Chips */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.12, duration: 0.4 }}
        className="flex flex-wrap gap-2 mb-6"
      >
        {offering.chips.map((chip) => (
          <span
            key={chip}
            className="text-xs font-medium bg-white/10 text-white/80 border border-white/15 px-3 py-1 rounded-full"
          >
            {chip}
          </span>
        ))}
      </motion.div>

      {/* Pricing */}
      <motion.p
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.42 + index * 0.12 }}
        className="text-[rgb(var(--yellow))] font-semibold text-sm mb-5"
      >
        {offering.pricing}
      </motion.p>

      {/* CTA */}
      <a href="#contact">
        <Button
          className="w-full bg-transparent border border-white/40 text-white hover:bg-white hover:text-[rgb(var(--dark-blue))] transition-all duration-300 font-semibold"
        >
          {offering.cta}
        </Button>
      </a>
    </motion.div>
  );
}

export default function Offerings() {
  return (
    <section
      id="offerings"
      className="section-padding gradient-blue relative overflow-hidden"
    >
      {/* Subtle staff lines in background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[18, 34, 50, 66, 82].map((pct) => (
          <div
            key={pct}
            className="absolute inset-x-0 h-px bg-[rgb(var(--yellow))] opacity-[0.05]"
            style={{ top: `${pct}%` }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow text-[rgb(var(--yellow))]/70"
          >
            § What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white mt-3 mb-4"
          >
            Two Ways to Bring Math-e-Music to Your School
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offerings.map((offering, i) => (
            <OfferingCard
              key={offering.id}
              offering={offering}
              enterFrom={i === 0 ? 'left' : 'right'}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
