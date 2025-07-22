import { Metadata } from 'next';
import Link from 'next/link';
import { contactInfo } from '@/data/products';

export const metadata: Metadata = {
  title: 'Sobre Nós - Loja Castor Cabo Frio | Nossa História e Valores',
  description: 'Conheça a história da Loja Castor Cabo Frio. Especialistas em colchões e travesseiros há anos, oferecendo qualidade e conforto para toda família.',
  keywords: 'Loja Castor Cabo Frio, história, sobre nós, qualidade, colchões, confiança',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Sobre a Loja Castor
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Especialistas em sono e conforto em Cabo Frio há anos, 
            oferecendo os melhores produtos para toda a família.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Nossa História */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Nossa História</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                A <strong>Loja Castor Cabo Frio</strong> nasceu da paixão por proporcionar noites de sono 
                reparadoras e confortáveis para as famílias da região. Localizada estrategicamente 
                na Av. Júlia Kubitschek, no coração de Cabo Frio, somos especializados em colchões 
                e travesseiros da renomada marca Castor.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Nossa trajetória é marcada pelo compromisso com a qualidade e pela dedicação em 
                entender as necessidades específicas de cada cliente. Sabemos que um bom sono é 
                fundamental para a saúde e bem-estar, por isso oferecemos apenas produtos que 
                passaram por rigorosos testes de qualidade.
              </p>
              <p className="text-lg leading-relaxed">
                Hoje, somos referência em Cabo Frio quando o assunto é conforto para dormir, 
                combinando tradição, inovação e atendimento personalizado.
              </p>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Qualidade</h3>
              <p className="text-gray-600">
                Trabalhamos exclusivamente com produtos Castor, marca reconhecida 
                nacionalmente pela excelência e durabilidade.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Confiança</h3>
              <p className="text-gray-600">
                Atendimento transparente e honesto, sempre priorizando 
                a satisfação e o bem-estar dos nossos clientes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cuidado</h3>
              <p className="text-gray-600">
                Cada cliente é único. Oferecemos consultoria personalizada 
                para encontrar o produto ideal para suas necessidades.
              </p>
            </div>
          </div>
        </section>

        {/* Por Que Escolher a Castor */}
        <section className="mb-16 bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Por Que Escolher a Marca Castor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="block">Tradição de mais de 70 anos</strong>
                    <span className="text-gray-600">Uma das marcas mais confiáveis do Brasil</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="block">Tecnologia avançada</strong>
                    <span className="text-gray-600">Produtos com inovações para melhor conforto</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="block">Garantia estendida</strong>
                    <span className="text-gray-600">Produtos com garantia de até 15 anos</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="block">Variedade completa</strong>
                    <span className="text-gray-600">Opções para todos os perfis e preferências</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-lg p-8 h-64 flex items-center justify-center">
                <span className="text-gray-500">Logo ou imagem da marca Castor</span>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Localização */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nossa Localização</h2>
          <div className="bg-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Venha nos Visitar</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">📍</span>
                    <div>
                      <strong>Endereço:</strong><br />
                      {contactInfo.address}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">🕒</span>
                    <div>
                      <strong>Horário de Funcionamento:</strong><br />
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 14h<br />
                      Domingo: Fechado
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1">📱</span>
                    <div>
                      <strong>Telefone/WhatsApp:</strong><br />
                      <a 
                        href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
                        className="text-green-600 hover:text-green-700"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-500">Mapa da localização</span>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href={contactInfo.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    🗺️ Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Conhecer Nossos Produtos?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Visite nossa loja ou entre em contato conosco. 
            Estamos aqui para ajudá-lo a encontrar o colchão perfeito!
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link
              href="/produtos"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              🛏️ Ver Produtos
            </Link>
            <a
              href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              💬 Fale Conosco
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}