'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
              CASTOR
            </div>
            <span className="text-gray-700 font-medium">Cabo Frio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Início
            </Link>
            <Link href="/produtos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Produtos
            </Link>
            <Link href="/mapa" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Mapa do Sono IA
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Contato
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://wa.me/5522992410112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              WhatsApp
            </a>
            <a 
              href="tel:22992410112" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              (22) 99241-0112
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="/produtos" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link 
                href="/mapa" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Mapa do Sono IA
              </Link>
              <Link 
                href="/sobre" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/contato" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="pt-4 space-y-2">
                <a 
                  href="https://wa.me/5522992410112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
                >
                  WhatsApp
                </a>
                <a 
                  href="tel:22992410112" 
                  className="block text-gray-700 hover:text-primary-600 transition-colors font-medium text-center"
                >
                  (22) 99241-0112
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;