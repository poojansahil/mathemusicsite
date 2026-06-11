'use client';

import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

function Avatar({ name, image }: { name: string; image: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-[rgb(var(--dark-blue))]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div
        className="absolute inset-0 items-center justify-center text-[rgb(var(--yellow))] font-bold text-sm"
        style={{ display: 'none' }}
        aria-label={name}
      >
        {initials}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 180 : -180, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 180 : -180, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="section-padding bg-[#f0f8fa]">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="eyebrow text-[rgb(var(--primary-blue))]"
          >
            § From the Schools
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[rgb(var(--dark-blue))] mt-3 mb-4"
          >
            What Happens When a Room Encounters an Idea Through Music
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            The students who were unreachable are suddenly in the room. The ones who believed mathematics was not for them are leaning forward. Something shifts.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden" style={{ minHeight: 280 }}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.45 }}
                className="absolute inset-0"
              >
                <Card className="bg-white shadow-md border-none h-full">
                  <CardContent className="p-8 md:p-12 flex flex-col justify-between h-full">
                    <div className="relative">
                      <Quote className="h-8 w-8 text-[rgb(var(--yellow))] rotate-180 mb-4 opacity-60" />
                      <p className="text-lg md:text-xl text-[rgb(var(--dark-blue))] leading-relaxed italic">
                        "{testimonials[current].quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-8">
                      <Avatar
                        name={testimonials[current].name}
                        image={testimonials[current].image}
                      />
                      <div>
                        <p className="font-bold text-[rgb(var(--dark-blue))]">
                          {testimonials[current].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[current].title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center mt-8 gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="bg-white hover:bg-[rgb(var(--primary-blue))]/10 border-[rgb(var(--primary-blue))]/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-[rgb(var(--primary-blue))] w-6 h-2'
                    : 'bg-[rgb(var(--primary-blue))]/20 hover:bg-[rgb(var(--primary-blue))]/40 w-2 h-2'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="bg-white hover:bg-[rgb(var(--primary-blue))]/10 border-[rgb(var(--primary-blue))]/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
