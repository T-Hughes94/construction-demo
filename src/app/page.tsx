// pages/index.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About layout="side-by-side" />
      <Contact />
      <Footer />
    </>
  );
}

