'use client';

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Youtube, Linkedin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 7, suffix: '+ Million', label: 'Views' },
  { value: 95, suffix: 'K+', label: 'Subscribers' },
  { value: 10, suffix: '+', label: 'Years of Music' },
];

const bios = [
  'Math-e-Music is a creative learning project built on the conviction that ideas are beautiful and music is how we feel that beauty. It treats its audience as people capable of wonder, and then gives them something to wonder about.',
  'The project began in mathematics because it carries the heaviest burden: the fear, the failure, and the quiet belief that some minds are simply not built for it. But the ambition is wider. Any idea that carries an emotional truth can carry a melody. The movement is about learning itself.',
  'Poojan Sahil is an independent musician who has collaborated with Vishal Dadlani, Saba Azaad, Penn Masala, and Sumit Roy. Featured on NDTV, Indian Express, Scroll, and ScoopWhoop. He performs solo with a guitar and a screen full of ideas.',
];

const closingLine =
  'A student who, for the first time, wanted to know.';

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col">
      <span className="text-[rgb(var(--dark-blue))] font-extrabold text-4xl md:text-5xl tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-muted-foreground text-sm mt-1">{label}</span>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Image parallax — moves slightly slower than text
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const socialIcons = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/poojan-sahil-1822701b6/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/poojansahil/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/c/PoojanSahil/', label: 'YouTube' },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 items-start">
          {/* Left — Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            ref={imageRef}
          >
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[3/4] max-w-[260px] mx-auto"
            >
              <div className="absolute inset-0 rounded-2xl bg-[rgb(var(--yellow))]/30 translate-x-4 translate-y-4" />
              <img
                src="https://static.wixstatic.com/media/8d63a0_b2adbe06803a4c80b31afd6040b587f4~mv2.png/v1/fill/w_1201,h_964,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/me%20png%20copy.png"
                alt="Poojan Sahil performing"
                className="rounded-2xl aspect-[4/5] w-full h-full object-cover relative shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <div>
              <span className="eyebrow text-[rgb(var(--primary-blue))]">§ The Movement</span>
              <h2 className="text-[rgb(var(--dark-blue))] mt-2">Math-e-Music</h2>
              <p className="text-[rgb(var(--primary-blue))] font-medium mt-1">
                Founded by Poojan Sahil
              </p>
            </div>

            {bios.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-muted-foreground leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-6 my-2"
            >
              {stats.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </motion.div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-[rgb(var(--primary-blue))] hover:text-[rgb(var(--yellow))] transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Closing line — emotional peak */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mt-20 pt-12 border-t border-gray-100"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            The measure of that change is simple.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-[rgb(var(--dark-blue))] leading-snug">
            {closingLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
