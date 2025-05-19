import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Math-e-Music | Education Through Performance',
  description: 'Experience the perfect blend of mathematics and music through engaging educational performances for schools and events.',
  keywords: 'math, music, education, performance, school shows, STEM',
  openGraph: {
    title: 'Math-e-Music | Education Through Performance',
    description: 'Experience the perfect blend of mathematics and music through engaging educational performances for schools and events.',
    url: 'https://math-e-music.com',
    siteName: 'Math-e-Music',
    images: [
      {
        url: 'https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg',
        width: 1200,
        height: 630,
        alt: 'Math-e-Music',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}