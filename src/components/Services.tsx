import { FaHammer, FaToolbox, FaComments } from 'react-icons/fa'; // Example icons from FontAwesome

const services = [
  {
    title: 'Construction Materials',
    description: 'High-quality materials for every project.',
    icon: <FaHammer size={64} />,  // Increased icon size
  },
  {
    title: 'Tool Rentals',
    description: 'Reliable tools to get the job done.',
    icon: <FaToolbox size={64} />,  // Increased icon size
  },
  {
    title: 'Consulting Services',
    description: 'Expert advice for your construction projects.',
    icon: <FaComments size={64} />,  // Increased icon size
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative pt-16 bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl overflow-visible"
            style={{ minHeight: '300px' }}
          >
            {/* Icon positioned halfway out of the card */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full p-5 shadow-md">
              {service.icon}
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full mt-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;







  
  