import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import About from '@/components/sections/About';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}