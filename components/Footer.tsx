'use client';

import Link from 'next/link';
import Logo from './Logo';
import { navLinks, socialLinks } from '@/lib/constants';
import { Twitter, Facebook, Instagram, Youtube, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Footer() {
  const getSocialIcon = (icon: string) => {
    switch(icon) {
      case 'Linkedin': return <Linkedin className="h-5 w-5" />;
      case 'Instagram': return <Instagram className="h-5 w-5" />;
      case 'Youtube': return <Youtube className="h-5 w-5" />;
      default: return null;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-white/70 mt-4">
              Transforming education through the perfect blend of mathematics and music.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  aria-label={link.platform}
                  className="text-white/70 hover:text-yellow transition-colors"
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-white/70 hover:text-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="text-white/70 hover:text-yellow transition-colors"
                >
                  Elementary (K-5)
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-white/70 hover:text-yellow transition-colors"
                >
                  Middle School (6-8)
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-white/70 hover:text-yellow transition-colors"
                >
                  High School (9-12)
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-white/70 hover:text-yellow transition-colors"
                >
                  Special Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-5 w-5 text-yellow" />
                <span>info@mathemusic.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-5 w-5 text-yellow" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-yellow mt-1" />
                <span>123 Harmony Lane<br />Musicville, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {currentYear} Math-e-Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}