const About = ({
    layout = 'side-by-side', // default layout
    title = "About Us",
    content = "Mock-Up Construction Supply has been serving the construction industry for over 25 years. Our mission is to provide top-quality materials and exceptional service to our customers, helping them complete their projects on time and within budget.",
    imageSrc = "/mockup.png",
  }) => {
    return (
      <section className="py-20 bg-white">
        <div
          className={`container mx-auto px-6 ${
            layout === 'side-by-side' ? 'flex flex-col md:flex-row items-center' : 'text-center'
          }`}
        >
          {layout === 'side-by-side' && (
            <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
                style={{ maxWidth: '400px' }}
              />
            </div>
          )}
  
          <div
            className={`w-full ${
              layout === 'side-by-side' ? 'md:w-1/2 md:pl-10' : 'mx-auto'
            }`}
          >
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-gray-600">
              {content}
            </p>
          </div>
  
          {layout === 'stacked' && (
            <div className="w-full flex justify-center mt-10">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
                style={{ maxWidth: '400px' }}
              />
            </div>
          )}
        </div>
      </section>
    );
  };
  
  export default About;
  
  
  
  
  
  