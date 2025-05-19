'use client';

import { useState, useEffect } from 'react';
import { testimonials } from '@/lib/constants';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const handlePrev = () => {
    setDirection(-1);
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };
  
  const handleNext = () => {
    setDirection(1);
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="section-padding bg-accent/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            What People Say
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-dark-blue mt-2 mb-4"
          >
            Educators Love Our Performances
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Hear from educational leaders who have experienced the transformative 
            power of our Math-e-Music performances in their schools.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden h-[400px] md:h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="bg-white shadow-lg border-none h-full">
                  <CardContent className="pt-10 pb-4 px-4 md:px-10 h-full flex flex-col justify-center">
                    <div className="text-yellow absolute top-6 left-8">
                      <Quote className="h-10 w-10 rotate-180" />
                    </div>
                    <p className="text-lg md:text-xl text-center italic text-dark-blue mb-6">
                      {testimonials[current].quote}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonials[current].image} 
                          alt={testimonials[current].name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-dark-blue">{testimonials[current].name}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[current].title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="bg-white hover:bg-accent/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button 
                key={index}
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`h-2 min-w-2 p-0 rounded-full ${
                  index === current 
                    ? 'bg-primary' 
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="bg-white hover:bg-accent/10"
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