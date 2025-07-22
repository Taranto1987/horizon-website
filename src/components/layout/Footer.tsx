import Link from 'next/link';
import { contactInfo } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Loja Castor Cabo Frio</h3>
                <p className="text-gray-400">Seu sono é nossa prioridade</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Especializada em colchões e travesseiros de alta qualidade. 
              Oferecemos as melhores marcas e tecnologias para garantir 
              o seu conforto e bem-estar durante o sono.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                {contactInfo.address}
              </p>
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                <a 
                  href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
                  className="hover:text-green-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a 
                  href="mailto:contato@lojacastorcabofrio.com.br"
                  className="hover:text-blue-400 transition-colors"
                >
                  contato@lojacastorcabofrio.com.br
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
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

          {/* Social Media & Business Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="space-y-3 mb-6">
              <a
                href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
              >
                <span className="mr-2">💬</span>
                WhatsApp
              </a>
              <a
                href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-pink-400 transition-colors"
              >
                <span className="mr-2">📸</span>
                Instagram
              </a>
              <a
                href={contactInfo.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <span className="mr-2">🗺️</span>
                Google Maps
              </a>
            </div>

            <h5 className="font-semibold mb-2">Horário de Funcionamento</h5>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 14h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Loja Castor Cabo Frio. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
              >
                💬 Fale Conosco Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}