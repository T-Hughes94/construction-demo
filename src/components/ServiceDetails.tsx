const serviceDetailsData = [
  {
    title: 'Construction Materials',
    description: `We provide top-quality construction materials to ensure your projects are built to last. Our extensive inventory includes everything you need, from cement to steel beams.`,
    points: [
      'Wide selection of materials',
      'Competitive pricing',
      'Delivery services available',
      'Expert advice on material selection',
    ],
    imageSrc: "/materials.png",
  },
  {
    title: 'Tool Rentals',
    description: `Our tool rental service offers a wide range of tools for every project. Whether you need heavy machinery or specialized tools, we have you covered.`,
    points: [
      'Short and long-term rentals',
      'Latest equipment models',
      'Maintenance and support included',
      'Flexible rental terms',
    ],
    imageSrc: '/tools.png',
  },
  {
    title: 'Consulting Services',
    description: `Our consulting services provide expert advice to help you plan and execute your construction projects efficiently. We bring decades of experience to every consultation.`,
    points: [
      'Project planning',
      'Cost estimation',
      'Risk management',
      'Ongoing project support',
    ],
    imageSrc: '/consulting.png',
  },
];

const ServiceDetails = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {serviceDetailsData.map((service, index) => (
          <div key={service.title} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center mb-20`}>
            {/* Image Section */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 relative group">
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg border-4 border-transparent group-hover:border-yellow-500 transition-all duration-500 ease-in-out"
              />
              <div className="absolute inset-0 rounded-lg border-4 border-transparent group-hover:border-yellow-500 transition-all duration-500 ease-in-out"></div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 md:pl-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block">
                {service.title}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left"></span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-lg text-gray-600">
                {service.points.map((point, idx) => (
                  <li key={idx} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetails;




  