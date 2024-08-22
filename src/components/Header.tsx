// src/components/Header.tsx
"use client"
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">Valley Construction Supply</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/services" className="hover:text-gray-400">Services</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-700">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-600">Home</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-600">About</Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-gray-600">Services</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-600">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

