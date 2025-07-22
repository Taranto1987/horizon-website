import Layout from '@/components/layout/Layout';
import { COMPANY_INFO, CONTACT_INFO } from '@/constants/contact';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre - Loja Castor Cabo Frio',
  description: 'Conheça a história da Loja Castor Cabo Frio. Desde 2010 oferecendo os melhores colchões e produtos para o sono em Cabo Frio e região.',
  keywords: 'sobre loja castor cabo frio, história, empresa, colchões',
};

export default function SobrePage() {
  const timeline = [
    {
      year: '2010',
      title: 'Fundação',
      description: 'A Loja Castor Cabo Frio foi fundada com o objetivo de trazer os melhores produtos para o sono para a região.'
    },
    {
      year: '2015',
      title: 'Expansão do Catálogo',
      description: 'Ampliamos nossa linha de produtos incluindo travesseiros, protetores e acessórios premium.'
    },
    {
      year: '2018',
      title: 'Parcerias Estratégicas',
      description: 'Firmamos parcerias com os principais fabricantes nacionais de colchões e produtos para o sono.'
    },
    {
      year: '2020',
      title: 'Atendimento Digital',
      description: 'Implementamos atendimento via WhatsApp e melhoramos nossa presença digital para melhor servir nossos clientes.'
    },
    {
      year: '2025',
      title: 'Novo Site',
      description: 'Lançamento do novo site com catálogo completo e facilidades para nossos clientes.'
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a Loja Castor
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              {COMPANY_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Nossa História
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Desde {COMPANY_INFO.foundedYear}, a Loja Castor Cabo Frio tem sido referência em 
                    qualidade quando o assunto é sono e descanso. Nascemos com a missão de proporcionar 
                    noites tranquilas e reparadoras para toda a família.
                  </p>
                  <p>
                    Ao longo dos anos, construímos uma reputação sólida baseada na confiança, 
                    qualidade dos produtos e atendimento diferenciado. Nossos clientes sabem que 
                    podem contar conosco para encontrar o colchão perfeito para suas necessidades.
                  </p>
                  <p>
                    Trabalhamos apenas com marcas reconhecidas no mercado e produtos que passam 
                    por rigorosos testes de qualidade, garantindo durabilidade e conforto por muitos anos.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Números que Falam</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900">15+</div>
                    <div className="text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900">1000+</div>
                    <div className="text-gray-600">Clientes Satisfeitos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900">50+</div>
                    <div className="text-gray-600">Modelos Disponíveis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900">12</div>
                    <div className="text-gray-600">Anos de Garantia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-gray-600">
                Os pilares que guiam nosso trabalho todos os dias
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {COMPANY_INFO.values.map((value, index) => {
                const icons = ['🏆', '🎯', '🚚', '💰'];
                const descriptions = [
                  'Trabalhamos apenas com produtos testados e aprovados, garantindo a melhor experiência de sono.',
                  'Cada cliente é único. Nossa equipe está preparada para encontrar a solução ideal para você.',
                  'Entregamos rapidamente em Cabo Frio e região, com todo cuidado que seu produto merece.',
                  'Oferecemos os melhores preços do mercado com condições facilitadas de pagamento.'
                ];
                
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-4xl mb-4">{icons[index]}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{value}</h3>
                    <p className="text-gray-600 text-sm">{descriptions[index]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Nossa Missão
            </h2>
            <blockquote className="text-2xl italic text-gray-700 mb-8">
              &ldquo;{COMPANY_INFO.mission}&rdquo;
            </blockquote>
            <p className="text-lg text-gray-600">
              Acreditamos que um bom sono é a base para uma vida saudável e produtiva. 
              Por isso, dedicamos nosso trabalho para oferecer não apenas produtos de qualidade, 
              mas uma experiência completa de atendimento e suporte.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossa Trajetória
              </h2>
              <p className="text-lg text-gray-600">
                Os principais marcos da nossa história
              </p>
            </div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <span className="text-blue-600 font-medium">{item.year}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team/Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Location */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nossa Localização
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Estrategicamente localizada no coração de Cabo Frio, nossa loja está 
                    facilmente acessível para atender toda a região dos Lagos.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Endereço:</h4>
                    <p className="text-gray-700">
                      {CONTACT_INFO.address.street}, {CONTACT_INFO.address.number}<br />
                      {CONTACT_INFO.address.neighborhood}<br />
                      {CONTACT_INFO.address.city} - {CONTACT_INFO.address.state}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <strong>Fácil acesso:</strong> Próximo ao centro da cidade
                    </p>
                    <p className="text-gray-600">
                      <strong>Estacionamento:</strong> Vagas disponíveis em frente à loja
                    </p>
                    <p className="text-gray-600">
                      <strong>Transporte público:</strong> Linhas de ônibus próximas
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Service Area */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Área de Atendimento
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Atendemos toda a região dos Lagos, oferecendo entrega rápida e 
                    atendimento especializado.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Cidades Atendidas:</h4>
                    <ul className="grid grid-cols-2 gap-2 text-gray-700">
                      <li>• Cabo Frio</li>
                      <li>• Búzios</li>
                      <li>• Arraial do Cabo</li>
                      <li>• São Pedro da Aldeia</li>
                      <li>• Iguaba Grande</li>
                      <li>• Araruama</li>
                      <li>• Saquarema</li>
                      <li>• Região dos Lagos</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">🚚 Entrega Grátis</h4>
                    <p className="text-green-700 text-sm">
                      Entrega gratuita para compras acima de R$ 1.000 na região de Cabo Frio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça Nossa Loja
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Venha nos visitar e conheça pessoalmente nossa linha de produtos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Gostaria de agendar uma visita à loja para conhecer os produtos.`}
              className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-semibold text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 Agendar Visita
            </a>
            <Link
              href="/contato"
              className="bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              📍 Como Chegar
            </Link>
            <Link
              href="/produtos"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition-colors font-semibold text-lg"
            >
              🛏️ Ver Produtos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}