'use client';

import { Music4, Plus, SquareEqual } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
        <div className="flex items-center">
          <Music4 className="h-7 w-7" />
          <Plus className="h-5 w-5 mx-1" />
          <SquareEqual className="h-7 w-7" />
        </div>
        <span className="font-bold text-xl hidden sm:inline-block">Math-e-Music</span>
      </div>
    </Link>
  );
}