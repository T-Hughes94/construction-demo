import Image from 'next/image';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <Image
            src="/mockup.png"
            alt="About Mock-Up Construction"
            width={400} // Specify width
            height={300} // Specify height
            layout="responsive" // Automatically adjusts size while keeping aspect ratio
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600">
            Mock-Up Construction Supply has been serving the construction industry for over 25 years. Our mission is to provide top-quality materials and exceptional service to our customers, helping them complete their projects on time and within budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


  
  
  
  
  