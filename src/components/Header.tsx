// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">Valley Construction Supply</div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link className="hover:text-gray-400" href="/">Home</Link></li>
            <li><Link className="hover:text-gray-400" href="/about">About</Link></li>
            <li><Link className="hover:text-gray-400" href="/services">Services</Link></li>
            <li><Link className="hover:text-gray-400" href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
