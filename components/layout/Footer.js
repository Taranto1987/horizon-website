import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Loja Castor Cabo Frio</h2>
                <p className="text-gray-400">Especialista em Colchões e Produtos para o Sono</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Há anos cuidando do seu sono com os melhores colchões e produtos para descanso. 
              Oferecemos qualidade, conforto e atendimento personalizado para toda a família.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/castorcabofrio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="text-white text-lg">📷</span>
              </a>
              <a
                href="https://wa.me/5522992410112"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="text-white text-lg">📱</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="text-primary-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300 text-sm">
                    Av. Júlia Kubitschek, Nº 64<br />
                    Jardim Flamboyant<br />
                    Cabo Frio - RJ
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">📱</span>
                <a 
                  href="https://wa.me/5522992410112" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (22) 99241-0112
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">📷</span>
                <a 
                  href="https://instagram.com/castorcabofrio" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  @castorcabofrio
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">🌐</span>
                <span className="text-gray-300 text-sm">www.lojacastorcabofrio.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Nossa Localização</h3>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.556789!2d-42.0376!3d-22.8786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUyJzQzLjAiUyA0MsKwMDInMTUuNCJX!5e0!3m2!1spt-BR!2sbr!4v1635000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Loja Castor Cabo Frio"
            ></iframe>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Loja Castor Cabo Frio. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Especialista em colchões e produtos para o sono em Cabo Frio - RJ
          </p>
        </div>
      </div>
    </footer>
  )
}