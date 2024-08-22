import { FaHammer, FaToolbox, FaComments } from 'react-icons/fa';

const serviceDetailsData = [
    {
      title: 'Construction Materials',
      description: `We provide top-quality construction materials to ensure your projects are built to last. Our extensive inventory includes everything you need, from cement to steel beams. 
      - Wide selection of materials
      - Competitive pricing
      - Delivery services available
      - Expert advice on material selection`,
      imageSrc: "/materials.png",
    },
    {
      title: 'Tool Rentals',
      description: `Our tool rental service offers a wide range of tools for every project. Whether you need heavy machinery or specialized tools, we have you covered.
      - Short and long-term rentals
      - Latest equipment models
      - Maintenance and support included
      - Flexible rental terms`,
      imageSrc: '/tools.png',
    },
    {
      title: 'Consulting Services',
      description: `Our consulting services provide expert advice to help you plan and execute your construction projects efficiently. We bring decades of experience to every consultation.
      - Project planning
      - Cost estimation
      - Risk management
      - Ongoing project support`,
      imageSrc: '/consulting.png',
    },
  ];
  
  const ServiceDetails = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {serviceDetailsData.map((service, index) => (
            <div key={service.title} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center mb-20`}>
              {/* Image Section */}
              <div className="w-full md:w-1/2 mb-10 md:mb-0">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
  
              {/* Text Section */}
              <div className="w-full md:w-1/2 md:pl-10">
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 whitespace-pre-line">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ServiceDetails;
  