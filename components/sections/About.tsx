'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function About() {
  const socialIcons = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/poojan-sahil-1822701b6/', label: 'Linkedin' },
    { icon: Instagram, href: 'https://www.instagram.com/poojansahil/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/c/PoojanSahil/', label: 'YouTube' },
  ];

  return (
    <section id="about" className="py-8 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-xs mx-auto lg:max-w-sm">
              <div className="absolute inset-0 rounded-2xl bg-accent/40 -translate-x-4 -translate-y-4"></div>
              <img
                src="https://static.wixstatic.com/media/8d63a0_b2adbe06803a4c80b31afd6040b587f4~mv2.png/v1/fill/w_1201,h_964,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/me%20png%20copy.png"
                alt="Artist performing music"
                className="rounded-2xl aspect-[4/5] w-full h-full object-cover relative shadow-xl"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Meet the Artist
            </span>
            <h2 className="text-dark-blue mt-2 mb-6">Poojan Sahil</h2>
            <p className="text-muted-foreground mb-4">
              Poojan is an independent musician who has collaborated with the likes of Vishal Dadlani, Saba Azaad, Penn Masala, Sumit Roy etc. 
            </p>
            <p className="text-muted-foreground mb-6">
              His work has also been featured on NDTV, Indian Express, Scroll, ScoopWhoop and by several other media houses.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col">
                <span className="text-dark-blue font-bold text-4xl">7+ Million</span>
                <span className="text-muted-foreground text-sm">Views</span>
              </div>
              <div className="flex flex-col">
                <span className="text-dark-blue font-bold text-4xl">95K+</span>
                <span className="text-muted-foreground text-sm">Subscribers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-dark-blue font-bold text-4xl">10+</span>
                <span className="text-muted-foreground text-sm">Years Experience</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                {socialIcons.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-primary hover:text-yellow transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}