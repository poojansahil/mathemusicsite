'use client';

import { benefits } from '@/lib/constants';
import { motion } from 'framer-motion';

const directions = [
  { x: -60, y: -30 },
  { x: 60, y: -30 },
  { x: -60, y: 30 },
  { x: 60, y: 30 },
];

const introParagraphs = [
  'Mathematics is the subject most associated with fear. But to those who have spent time inside it, it is one of the most beautiful things we have ever created.',
  'The gap between that beauty and the fear most students carry is the space Math-e-Music was built to live in.',
  'And it goes beyond mathematics — any idea that carries an emotional truth can carry a melody.',
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow text-[rgb(var(--primary-blue))]"
          >
            § The Argument
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[rgb(var(--dark-blue))] mt-3 mb-8"
          >
            Why Math-e-Music?
          </motion.h2>

          {/* Line-by-line reveal for intro paragraphs */}
          <div className="space-y-4 text-left md:text-center">
            {introParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                className={`text-muted-foreground leading-relaxed ${
                  i === 1 ? 'font-medium text-[rgb(var(--primary-blue))] text-base' : ''
                }`}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Cards — assemble from four compass directions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const dir = directions[index];
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, x: dir.x, y: dir.y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="flex flex-col items-start text-left p-6 rounded-2xl border border-gray-100 hover:border-[rgb(var(--primary-blue))]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[rgb(var(--yellow))]/20 text-[rgb(var(--primary-blue))] mb-4 group-hover:bg-[rgb(var(--yellow))]/40 transition-colors">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold mb-2 text-[rgb(var(--dark-blue))]">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
