import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://math-e-music.com'), // 🔁 use your real domain here
  title: 'Math-e-Music | Math and Science Like Never Before',
  description:
    'Experience the perfect blend of mathematics and music through engaging educational performances for schools and events.',
  keywords: 'math, music, education, performance, school shows, STEM',
  openGraph: {
    title: 'Math-e-Music | Math and Science Like Never Before',
    description:
      'Experience the perfect blend of mathematics and music through engaging educational performances for schools and events.',
    url: 'https://math-e-music.com',
    siteName: 'Math-e-Music',
    images: [
      {
        url: '/images/math-e-music.jpg', // make sure this image is in your /public/images folder
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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}