'use client';

import Link from 'next/link';
import Logo from './Logo';
import { navLinks, socialLinks, footerOfferings } from '@/lib/constants';
import { Instagram, Youtube, Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function getSocialIcon(icon: string) {
    switch (icon) {
      case 'Linkedin': return <Linkedin className="h-5 w-5" />;
      case 'Instagram': return <Instagram className="h-5 w-5" />;
      case 'Youtube': return <Youtube className="h-5 w-5" />;
      default: return null;
    }
  }

  return (
    <footer className="staff-lines bg-[rgb(var(--dark-blue))] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Subtle large symbol decorations */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="absolute font-bold opacity-[0.03] text-white" style={{ fontSize: 240, bottom: -20, right: -20, lineHeight: 1 }}>π</span>
        <span className="absolute font-bold opacity-[0.03] text-white" style={{ fontSize: 160, top: -10, left: -10, lineHeight: 1 }}>♫</span>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo variant="yellow" />
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Music is how we feel the beauty of ideas.
            </p>
            <div className="flex gap-4 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="text-white/50 hover:text-[rgb(var(--yellow))] transition-colors"
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[rgb(var(--yellow))] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-5">
              Offerings
            </h4>
            <ul className="space-y-3">
              {footerOfferings.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-[rgb(var(--yellow))] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:poojansahil@gmail.com"
                  className="flex items-center gap-2.5 text-white/60 hover:text-[rgb(var(--yellow))] transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 text-[rgb(var(--yellow))]/60 flex-shrink-0" />
                  poojansahil@gmail.com
                </a>
              </li>
              <li className="text-white/40 text-sm mt-4 leading-relaxed">
                Based in India.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© {currentYear} Math-e-Music. All rights reserved.</p>
          <p className="italic">Ideas are beautiful. Music is how we feel that beauty.</p>
        </div>
      </div>
    </footer>
  );
}
