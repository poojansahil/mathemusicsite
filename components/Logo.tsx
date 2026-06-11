import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'teal' | 'yellow';
}

export default function Logo({ variant = 'teal' }: LogoProps) {
  const src =
    variant === 'yellow'
      ? '/images/logo-mark-yellow.png'
      : '/images/logo-mark-teal.png';

  const textColor =
    variant === 'yellow' ? 'text-[rgb(var(--yellow))]' : 'text-[rgb(var(--primary-blue))]';

  return (
    <Link href="/">
      <div className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
        <Image
          src={src}
          alt="Math-e-Music logo"
          width={56}
          height={56}
          className="flex-shrink-0 -m-2"
        />
        <span className={`font-bold text-xl hidden sm:inline-block ${textColor}`}>
          Math-e-Music
        </span>
      </div>
    </Link>
  );
}
