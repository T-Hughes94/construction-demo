import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Link from 'next/link';  // Import Link from Next.js

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Our Story Section */}
      <section
        className="relative pt-28 md:pt-20 pb-10 md:pb-10 h-60 md:h-80 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/bkgrnd3.jpg')" }} // Replace with your image path
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center h-full">
          
          {/* Left Side: Subheader and Title */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="h-1 w-16 bg-yellow-500"></div>
              <span className="ml-4 text-lg font-medium text-yellow-500">Building Futures</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">About Mock-Up Construction</h2>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-yellow-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Doe', role: 'Project Manager', phone: '(123) 456-7890', imageSrc: '/emp1.jpg' },
              { name: 'Jane Doe', role: 'Sales', phone: '(123) 456-7891', imageSrc: '/emp2.jpg' },
              { name: 'Patrick Doe', role: 'Consulting', phone: '(123) 456-7892', imageSrc: '/emp3.webp' },
              { name: 'Brittney Doe', role: 'Operations', phone: '(123) 456-7893', imageSrc: '/emp4.jpg' },
            ].map((member) => (
              <div key={member.name} className="bg-blue-900 text-white rounded-lg border-4 border-yellow-500 shadow-lg p-6 text-center transform transition-transform hover:scale-105">
                <img
                  src={member.imageSrc}
                  alt={`Team Member ${member.name}`}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-yellow-500"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
                <p className="text-gray-300 mt-2">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-yellow-600">Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-900 text-white rounded-lg border-4 border-yellow-500 shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Construction Foreman</h3>
              <p className="text-gray-300 mb-4">We are looking for an experienced Construction Foreman to join our team. If you have a passion for leading projects and a commitment to quality, we'd love to hear from you.</p>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">Apply Now</button>
            </div>
            <div className="bg-blue-900 text-white rounded-lg border-4 border-yellow-500 shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Safety Coordinator</h3>
              <p className="text-gray-300 mb-4">We are looking for an experienced Safety Coordinator to join our team. If you have a passion for leading projects and a commitment to quality, we'd love to hear from you.</p>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-yellow-600">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Main Office', address: '1234 Construction Ave, Building City, BC 56789', officeHours: 'Mon-Fri: 9am - 5pm', iframeSrc: 'https://www.google.com/maps/embed?...' },
              { name: 'Second Office', address: '5678 Build Lane, Construct City, BC 56789', officeHours: 'Mon-Fri: 9am - 5pm', iframeSrc: 'https://www.google.com/maps/embed?...' },
              { name: 'Third Office', address: '9101 Build Blvd, Develop City, BC 56789', officeHours: 'Mon-Fri: 9am - 5pm', iframeSrc: 'https://www.google.com/maps/embed?...' },
            ].map((location) => (
              <div key={location.name} className="bg-blue-900 text-white rounded-lg border-4 border-yellow-500 shadow-lg p-6 transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <p className="text-gray-300 mb-2">{location.address}</p>
                <p className="text-gray-300 mb-4">Office Hours: {location.officeHours}</p>
                <iframe
                  src={location.iframeSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="bg-blue-900 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-2xl font-bold text-white">Questions? Get in touch right away.</h3>
          <Link href="/contact">
            <button className="mt-4 md:mt-0 bg-yellow-600 text-white px-8 py-4 rounded-md hover:bg-yellow-700 transition-colors">
              Contact Mock-Up
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}












