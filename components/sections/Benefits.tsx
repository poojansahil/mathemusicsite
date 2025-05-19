'use client';

import { benefits } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            Transform Learning
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-dark-blue mt-2 mb-4"
          >
            Why Math-e-Music?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Our unique approach combines the universal language of music with mathematical principles,
            creating an immersive educational experience that resonates with students of all learning styles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-accent/20 text-primary mb-5">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-blue">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}