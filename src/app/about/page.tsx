import Header from '@/components/Header';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <About
        layout="stacked"
        title="Our Story"
        content="Here we can go into more detail about the company's history, values, and mission. Valley Construction Supply has been at the forefront of the industry for over 25 years, providing unmatched service and products to our customers. Our commitment to quality and customer satisfaction has made us a trusted partner in the construction industryC"
        imageSrc="/Consimg.jpg"
      />
      <Contact />
      <Footer />
    </>
  );
}



