import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contato - Loja Castor Cabo Frio',
  description: 'Entre em contato com a Loja Castor Cabo Frio. WhatsApp: (22) 99241-0112. Av. Júlia Kubitschek, Nº 64 - Jardim Flamboyant, Cabo Frio - RJ.',
}

export default function ContatoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aqui para ajudar você a encontrar o colchão perfeito
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-600">Av. Júlia Kubitschek, Nº 64</p>
                    <p className="text-gray-600">Jardim Flamboyant, Cabo Frio - RJ</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📱</span>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a 
                      href="https://wa.me/5522992410112" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      (22) 99241-0112
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📷</span>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a 
                      href="https://instagram.com/castorcabofrio" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      @castorcabofrio
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-2xl mr-4">🗺️</span>
                  <div>
                    <p className="font-semibold">Google Maps</p>
                    <a 
                      href="https://g.co/kgs/AJb6386" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Ver no Mapa
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Fale Conosco</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600 mb-4">
                  A melhor forma de entrar em contato conosco é através do WhatsApp. 
                  Nossa equipe está pronta para ajudar você a escolher o colchão ideal!
                </p>
                
                <a 
                  href="https://wa.me/5522992410112?text=Olá! Gostaria de conhecer os colchões Castor disponíveis na loja."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors block text-center"
                >
                  Conversar no WhatsApp
                </a>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600">Sábado: 9h às 17h</p>
                  <p className="text-gray-600">Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}