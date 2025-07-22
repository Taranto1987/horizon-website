import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Loja Castor</h1>
              <p className="text-sm text-gray-600">Cabo Frio</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Início
            </Link>
            <Link href="/produtos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Produtos
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contato
            </Link>
            <a 
              href="https://wa.me/5522992410112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>📱</span>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <Link href="/" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                Início
              </Link>
              <Link href="/produtos" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                Produtos
              </Link>
              <Link href="/sobre" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                Contato
              </Link>
              <a 
                href="https://wa.me/5522992410112" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mx-4 mt-2 btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>📱</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}