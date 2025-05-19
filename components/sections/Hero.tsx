'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Music, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 gradient-yellow-peach overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10 bg-cover bg-center"></div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <span className="bg-white text-primary-blue px-4 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1.5">
              <Music className="h-4 w-4" />
              Educational Performance
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-dark-blue"
          >
            Math and Science Like Never Before: A Celebration in Music
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-dark-blue/90 max-w-3xl mb-8"
          >
            Experience the magical intersection of mathematics and music through interactive, 
            educational performances that transform abstract concepts into unforgettable 
            learning experiences for students of all ages.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
          <a href="mailto:poojansahil@gmail.com">
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 gap-2 text-base"
            >
              <Calendar className="h-5 w-5" />
              Schedule a Performance
            </Button>
          </a>
          </motion.div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: -10 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#0c2f39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}