// pages/index.tsx (Home Page Example)
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mock-Up Construction | Your Trusted Construction Partner</title>
        <meta name="description" content="Mock-Up Construction Supply offers high-quality construction materials, expert consulting, and tool rentals to help you complete your projects efficiently and on time." />
        <meta name="keywords" content="construction, materials, consulting, tool rentals, building, Mock-Up Construction" />
        <meta name="author" content="Mock-Up Construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.mockupconstruction.com/" />
        <meta property="og:title" content="Mock-Up Construction | Your Trusted Construction Partner" />
        <meta property="og:description" content="Providing high-quality construction materials, expert consulting, and reliable tool rentals." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.mockupconstruction.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mockupconstruction" />
        <meta name="twitter:title" content="Mock-Up Construction | Your Trusted Construction Partner" />
        <meta name="twitter:description" content="Providing high-quality construction materials, expert consulting, and reliable tool rentals." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
      </Head>
      <Header />
      <Hero />
      <Services />
      <About layout="side-by-side" />
      <Contact />
      <Footer />
    </>
  );
}



