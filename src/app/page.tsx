import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/data/products';
import { CONTACT_INFO, COMPANY_INFO } from '@/constants/contact';
import Link from 'next/link';

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter(product => product.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              O Melhor Sono da Sua Vida Começa Aqui
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Colchões premium, travesseiros e acessórios para o sono perfeito em Cabo Frio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Gostaria de conhecer os colchões da Loja Castor.`}
                className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-semibold text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 Fale Conosco no WhatsApp
              </a>
              <Link
                href="/produtos"
                className="bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                🛏️ Ver Produtos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra nossa seleção especial de colchões e produtos para o sono
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                variant="featured"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/produtos"
              className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors font-semibold text-lg inline-block"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher a Loja Castor?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mais de uma década de experiência proporcionando o melhor sono para famílias em Cabo Frio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_INFO.values.map((value, index) => {
              const icons = ['✅', '🎯', '🚚', '💰'];
              return (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{icons[index]}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value}</h3>
                  <p className="text-gray-600 text-sm">
                    {index === 0 && 'Produtos testados e aprovados pelos melhores fabricantes'}
                    {index === 1 && 'Atendimento especializado para encontrar o colchão ideal'}
                    {index === 2 && 'Entrega rápida em Cabo Frio e região'}
                    {index === 3 && 'Os melhores preços e condições de pagamento'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Depoimentos reais de clientes satisfeitos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                comment: "Comprei um Amazon Prime Gel Pocket e foi a melhor escolha! Durmo muito melhor agora.",
                rating: 5
              },
              {
                name: "João Santos",
                comment: "Atendimento excelente e entrega rápida. O colchão chegou certinho e é muito confortável.",
                rating: 5
              },
              {
                name: "Ana Costa",
                comment: "Produto de qualidade e preço justo. Recomendo a Loja Castor para toda a família!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Melhorar o Seu Sono?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Visite nossa loja ou entre em contato via WhatsApp. Estamos prontos para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Gostaria de visitar a loja para conhecer os produtos.`}
              className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors font-semibold text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 WhatsApp: {CONTACT_INFO.phone}
            </a>
            <Link
              href="/contato"
              className="bg-white text-blue-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              📍 Como Chegar
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
