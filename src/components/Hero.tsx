import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/Consimg.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto text-left text-white relative z-10">
        <h1 className="text-5xl font-bold">Your Partner in Construction Supply</h1>
        <p className="mt-4 text-lg max-w-2xl">
          At Mock-Up Construction, we believe in providing quality products and reliable services that you can count on. With over 25 years of experience, we’ve built a reputation for excellence in the construction industry. Whether you're looking for materials, tools, or expert consulting, we’re here to help you succeed in every project. Let us be the foundation you build upon.
        </p>
        <Link href="/contact">
          <button className="mt-6 inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-md text-md hover:bg-yellow-600 transition-transform transform hover:scale-105 hover:border-white border-transparent border-2 hover:border-solid">
            Contact
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;








  