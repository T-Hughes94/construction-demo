import Header from '@/components/Header';
import Contact from '@/components/Contact'; // Assuming the form is in this component
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Contact Header Section */}
      <section
        className="relative pt-28 md:pt-20 pb-10 md:pb-10 h-60 md:h-80 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/bkgrnd3.jpg')" }} // Use the same image as in the About page
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center h-full">
          
          {/* Left Side: Title */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="h-1 w-16 bg-yellow-500"></div>
              <span className="ml-4 text-lg font-medium text-yellow-500">Get in Touch</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Contact Mock-Up Construction</h2>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <Contact /> {/* Directly use the contact form here without extra containers */}
        </div>
      </section>

      {/* Thanks Section */}
      <section className="py-12 bg-blue-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white text-4xl">Thanks for considering taking the first step towards a future in business with Mock-Up Construction. We appreciate your time, and look forward to working with you!</p>
        </div>
      </section>

      <Footer />
    </>
  );
}



