'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CONTACT_INFO } from '@/constants/contact';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📍 {CONTACT_INFO.address.street}, {CONTACT_INFO.address.number} - {CONTACT_INFO.address.neighborhood}</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              className="flex items-center space-x-1 hover:text-green-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>📱</span>
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a 
              href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
              className="flex items-center space-x-1 hover:text-pink-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>📷</span>
              <span>{CONTACT_INFO.instagram}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-900">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🛏️</span>
              <div>
                <div className="text-xl">Loja Castor</div>
                <div className="text-sm text-gray-600">Cabo Frio</div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Home
            </Link>
            <Link href="/produtos" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Produtos
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
              Contato
            </Link>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Vim pelo site e gostaria de conhecer os colchões.`}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/produtos" 
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link 
                href="/sobre" 
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/contato" 
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Vim pelo site e gostaria de conhecer os colchões.`}
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors font-medium text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}