import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { companyInfo } from '@/data/products';

export default function Sobre() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre a Loja Castor
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Especialistas em sono e conforto em Cabo Frio, oferecendo produtos 
            de qualidade superior para transformar suas noites de descanso.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-lg text-muted">
                <p>
                  A Loja Castor Cabo Frio nasceu da paixão por proporcionar noites de sono 
                  verdadeiramente reparadoras. Localizada estrategicamente na Av. Júlia Kubitschek, 
                  nossa loja se tornou referência na região para quem busca qualidade e conforto.
                </p>
                <p>
                  Somos distribuidores oficiais da marca Castor, uma das mais respeitadas do 
                  Brasil no segmento de colchões e acessórios para o sono. Nossa equipe 
                  especializada está sempre pronta para ajudar você a encontrar o produto 
                  ideal para suas necessidades específicas.
                </p>
                <p>
                  Acreditamos que um bom sono é fundamental para uma vida saudável e produtiva. 
                  Por isso, oferecemos apenas produtos de alta qualidade, com garantia de 
                  fábrica e atendimento personalizado.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/loja-fachada.jpg"
                alt="Fachada da Loja Castor Cabo Frio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Values */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Princípios que guiam nosso trabalho e relacionamento com nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cuidado Genuíno</h3>
              <p className="text-muted">
                Tratamos cada cliente com carinho e atenção, entendendo suas necessidades 
                específicas para o melhor sono.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-muted">
                Trabalhamos apenas com produtos originais e de alta qualidade, 
                com garantia de fábrica e certificações.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Ágil</h3>
              <p className="text-muted">
                Resposta rápida pelo WhatsApp, entrega eficiente e suporte 
                completo antes, durante e após a compra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/showroom-interior.jpg"
                alt="Interior da loja com colchões expostos"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Por que nos escolher?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Linha Completa Castor</h3>
                    <p className="text-muted">
                      Maior variedade de produtos Castor em Cabo Frio, incluindo lançamentos e linhas premium.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Atendimento Especializado</h3>
                    <p className="text-muted">
                      Nossa equipe conhece profundamente cada produto e pode orientá-lo na melhor escolha.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Localização Privilegiada</h3>
                    <p className="text-muted">
                      Fácil acesso na Av. Júlia Kubitschek com estacionamento e facilidade para teste dos produtos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Entrega e Montagem</h3>
                    <p className="text-muted">
                      Serviço completo de entrega e montagem em Cabo Frio e região com equipe treinada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visite Nossa Loja
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Venha conhecer nossos produtos pessoalmente e receba orientação especializada 
            para escolher o colchão ideal para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=Olá! Gostaria de visitar a loja. Quando vocês estão abertos?`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Agendar Visita
            </a>
            <a
              href={companyInfo.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-opacity-90 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Localização
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}