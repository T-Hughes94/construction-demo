import Link from 'next/link';
import Image from 'next/image'; // Import next/image for optimized image handling
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social Media Icons

const Footer = () => {
  return (
    <footer
      className="relative bg-fixed bg-cover bg-center text-gray-200 py-10"
      style={{ backgroundImage: "url('/prints1.jpg')" }} // Reference to the image in the public folder
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        
        {/* Logo and Contact Information */}
        <div className="md:col-span-1 flex flex-col items-start">
          <Image
            src="/mockup.png" // Replace with your actual logo path in the public folder
            alt="Mockup Construction Logo"
            width={128} // Adjust width according to your needs
            height={64} // Adjust height according to your needs
            className="mb-4" // Adjust size as needed
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="mb-1">info@mockupconstruction.com</p>
            <p className="mb-1">(123) 456-7890</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-2">Our Address</h3>
          <p>1234 Construction Ave</p>
          <p>Building City, BC 56789</p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Copyright Section */}
      <div className="container mx-auto px-6 md:px-12 mt-4 text-center text-black text-lg">
        <p>&copy; {new Date().getFullYear()} Mock-Up Construction Supply. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;








