import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { products, companyInfo } from '@/data/products';
import { generateBusinessSchema } from '@/components/SEOSchema';

export default function Home() {
  const highlightedProducts = products.filter(product => product.highlighted);
  const businessSchema = generateBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Seu Melhor Sono 
                <span className="block text-secondary">Começa Aqui</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Descubra a linha completa de colchões, travesseiros e acessórios Castor. 
                Qualidade, conforto e tecnologia para transformar suas noites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/produtos"
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Ver Produtos
                </Link>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/hero-bedroom.jpg"
                alt="Quarto confortável com colchão Castor"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher a Loja Castor?
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Somos especialistas em sono há anos, oferecendo produtos de qualidade superior 
              e atendimento personalizado em Cabo Frio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-muted">Produtos originais Castor com garantia de fábrica e qualidade comprovada.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Rápido</h3>
              <p className="text-muted">Resposta imediata pelo WhatsApp e atendimento personalizado na loja.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega em Cabo Frio</h3>
              <p className="text-muted">Entrega rápida e montagem na região de Cabo Frio e cidades próximas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-muted">
              Conheça nossa seleção de produtos mais procurados pelos nossos clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted mb-4">{product.description}</p>
                  <ul className="text-sm text-muted mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center mb-1">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Olá! Tenho interesse no ${product.name}. Gostaria de mais informações.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors inline-block"
                  >
                    Consultar Preço
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/produtos"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visite Nossa Loja em Cabo Frio
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Venha conhecer pessoalmente nossa linha completa de produtos e receba atendimento especializado.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-2">
                <p><span className="font-semibold">Endereço:</span> {companyInfo.address}</p>
                <p>{companyInfo.city}</p>
                <p><span className="font-semibold">WhatsApp:</span> {companyInfo.phone}</p>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2">
                <p><span className="font-semibold">Segunda a Sexta:</span> 9h às 18h</p>
                <p><span className="font-semibold">Sábado:</span> 9h às 17h</p>
                <p><span className="font-semibold">Domingo:</span> Fechado</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Falar no WhatsApp
            </a>
            <a
              href={companyInfo.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver no Google Maps
            </a>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
}
