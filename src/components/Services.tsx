// components/Services.tsx
const services = [
    { title: 'Construction Materials', description: 'High-quality materials for every project.' },
    { title: 'Tool Rentals', description: 'Reliable tools to get the job done.' },
    { title: 'Consulting Services', description: 'Expert advice for your construction projects.' },
  ];
  
  const Services = () => {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service) => (
              <div key={service.title} className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  