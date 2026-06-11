import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import ScrollProgressBar from '@/components/ScrollProgressBar';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Math-e-Music | Learning With Music',
  description:
    'Original songs and live performances that make mathematics, science, and beyond feel like they were always yours. School performances and student workshops across India.',
  keywords: 'math music education, school performance India, NCERT songs, learning with music, Poojan Sahil',
  openGraph: {
    title: 'Math-e-Music | Learning With Music',
    description:
      'The first step to learning is wanting to. Math-e-Music exists to create that wanting.',
    url: 'https://mathemusic.in',
    siteName: 'Math-e-Music',
    locale: 'en_IN',
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
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ScrollProgressBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
