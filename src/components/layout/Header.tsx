'use client';

import { useState } from 'react';
import Link from 'next/link';
import { contactInfo } from '@/data/products';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-blue-800">
          <div className="flex items-center space-x-4">
            <span>📧 contato@lojacastorcabofrio.com.br</span>
            <span>📍 Cabo Frio - RJ</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              📱 WhatsApp: {contactInfo.whatsapp}
            </a>
            <a 
              href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300 transition-colors"
            >
              📸 {contactInfo.instagram}
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Loja Castor</h1>
              <p className="text-sm text-blue-200">Cabo Frio</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-blue-200 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              💬 Fale Conosco
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Abrir menu</span>
            <div className="w-6 h-6">
              {isMenuOpen ? (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-800 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors text-center"
              >
                💬 Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}