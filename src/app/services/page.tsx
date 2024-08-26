import Header from '@/components/Header';
import ServiceDetails from '@/components/ServiceDetails';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Services Header Section */}
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
              <span className="ml-4 text-lg font-medium text-yellow-500">What We Offer</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Our Services</h2>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <ServiceDetails />     {/* Detailed breakdowns for each service */}
      
      <Footer />
    </>
  );
}
