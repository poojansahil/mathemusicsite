'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          <DesktopNav />
          <a href = "mailto:poojansahil@gmail.com">
            <Button className="bg-accent text-dark-blue font-medium">
              Book a Show
            </Button>
          </a>
        </div>
        
        <MobileNav />
      </div>
    </header>
  );
}