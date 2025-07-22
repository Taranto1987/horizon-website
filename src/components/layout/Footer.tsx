import Link from 'next/link';
import { CONTACT_INFO, BUSINESS_HOURS, COMPANY_INFO } from '@/constants/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🛏️</span>
              <div>
                <h3 className="text-xl font-bold">Loja Castor</h3>
                <p className="text-gray-400">Cabo Frio</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                className="text-gray-400 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                className="text-gray-400 hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                📱
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-300 hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">
                    {CONTACT_INFO.address.street}, {CONTACT_INFO.address.number}
                  </p>
                  <p className="text-gray-300">
                    {CONTACT_INFO.address.neighborhood}
                  </p>
                  <p className="text-gray-300">
                    {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">📱</span>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">🌐</span>
                <span className="text-gray-300">{CONTACT_INFO.website}</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Segunda à Sexta:</span>
                <span className="text-white">{BUSINESS_HOURS.weekdays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Sábado:</span>
                <span className="text-white">{BUSINESS_HOURS.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Domingo:</span>
                <span className="text-white">{BUSINESS_HOURS.sunday}</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-6">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Gostaria de conhecer os produtos da Loja Castor.`}
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors font-medium inline-block text-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desde {COMPANY_INFO.foundedYear} proporcionando o melhor sono para sua família.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}