import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import type { Metadata } from 'next';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return {
      title: 'Produto não encontrado - Loja Castor Cabo Frio',
    };
  }

  return {
    title: `${product.name} - Loja Castor Cabo Frio`,
    description: product.description,
    keywords: `${product.name}, colchão, Castor, Cabo Frio, ${product.category}`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-castor">Início</Link>
            <span className="mx-2">›</span>
            <Link href="/produtos" className="hover:text-castor">Catálogo Completo</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-castor text-8xl">{product.image}</div>
              </div>
              
              {/* Additional Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-green-600 mb-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Entrega Grátis</h4>
                  <p className="text-gray-600 text-xs">Cabo Frio e região</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-blue-600 mb-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Garantia Oficial</h4>
                  <p className="text-gray-600 text-xs">Direto da fábrica</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                  {product.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded">
                      Destaque
                    </span>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Price */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-castor">
                    A partir de R$ {product.price.min.toLocaleString('pt-BR')}
                  </span>
                  {product.price.max && (
                    <div className="text-lg text-gray-500 mt-1">
                      até R$ {product.price.max.toLocaleString('pt-BR')}
                    </div>
                  )}
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    À vista com desconto
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    12x sem juros no cartão
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Frete grátis em Cabo Frio
                  </div>
                </div>
              </div>

              {/* Sizes */}
              {product.sizes && (
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tamanhos Disponíveis</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.sizes.map((size) => (
                      <div key={size} className="border border-gray-200 rounded-lg p-3 text-center hover:border-castor transition-colors cursor-pointer">
                        <span className="font-medium text-gray-900">{size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Características</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5522992410112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block text-center text-lg"
                >
                  💬 Falar no WhatsApp - Comprar Agora
                </a>
                <a 
                  href="tel:22992410112" 
                  className="w-full bg-castor text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block text-center text-lg"
                >
                  📞 Ligar Agora: (22) 99241-0112
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Produtos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 h-48 flex items-center justify-center">
                    <div className="text-castor text-6xl">{relatedProduct.image}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{relatedProduct.description.substring(0, 100)}...</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-castor">
                        R$ {relatedProduct.price.min.toLocaleString('pt-BR')}
                      </span>
                      <Link 
                        href={`/produtos/${relatedProduct.id}`}
                        className="bg-castor text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm font-medium"
                      >
                        Ver Produto
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="gradient-castor text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interessado neste produto?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Fale diretamente com o dono da loja para condições especiais e orientação personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5522992410112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Negociar no WhatsApp
            </a>
            <Link 
              href="/mapa" 
              className="bg-white text-castor px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-block"
            >
              Fazer Teste do Sono
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}