'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div 
        className={cn(
          "fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-300 transform pt-16",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={closeMenu}
          className="absolute top-4 right-4"
          aria-label="Close Menu"
        >
          <X className="h-6 w-6" />
        </Button>

        <nav className="flex flex-col items-center justify-center flex-1 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-xl font-medium text-primary hover:text-secondary transition-colors px-4 py-2"
            >
              {link.label}
            </Link>
          ))}
           <a href = "mailto:poojansahil@gmail.com">
            <Button className="bg-accent text-dark-blue font-medium">
              Book a Show
            </Button>
          </a>
        </nav>
      </div>
    </div>
  );
}