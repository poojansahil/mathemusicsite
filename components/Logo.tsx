'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Math-e-Music Logo"
          width={40}
          height={40}
        />
        <span className="font-bold text-xl hidden sm:inline-block text-primary hover:opacity-90 transition-opacity">
          Math-e-Music
        </span>
      </div>
    </Link>
  );
}