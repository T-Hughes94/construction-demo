// components/Hero.tsx
import Link from 'next/link';

const Hero = () => {
    return (
      <section className="bg-hero-pattern bg-cover bg-center h-screen flex items-center">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-bold">Your Partner in Construction Supply</h1>
          <p className="mt-4 text-lg">Quality products and reliable services for all your construction needs.</p>
          <Link href="/services" className="mt-6 inline-block bg-blue-600 px-8 py-4 rounded-md text-lg hover:bg-blue-700">
            Explore Our Services
          </Link>
        </div>
      </section>
    );
  };
  
  export default Hero;
  