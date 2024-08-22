import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>1234 Construction Ave</p>
          <p>Building City, BC 56789</p>
          <p>Email: info@valleyconstruction.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/services">
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:col-span-4 text-center mt-8 md:mt-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Valley Construction Supply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
