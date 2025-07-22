import Layout from '@/components/layout/Layout';
import { PRODUCTS } from '@/data/products';
import { CONTACT_INFO } from '@/constants/contact';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === id);
  
  if (!product) {
    return {
      title: 'Produto não encontrado - Loja Castor Cabo Frio',
    };
  }

  return {
    title: `${product.name} - Loja Castor Cabo Frio`,
    description: product.description,
    keywords: `${product.name}, colchão cabo frio, ${product.category}`,
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  const formatPrice = (price: typeof product.price) => {
    if (price.from && price.to) {
      return `R$ ${price.from.toLocaleString()} - R$ ${price.to.toLocaleString()}`;
    }
    if (price.from) {
      return `A partir de R$ ${price.from.toLocaleString()}`;
    }
    return 'Consulte o preço';
  };

  const getCategoryLabel = (category: typeof product.category) => {
    const labels = {
      'colchao': 'Colchão',
      'travesseiro': 'Travesseiro',
      'protetor': 'Protetor',
      'acessorio': 'Acessório'
    };
    return labels[category];
  };

  const relatedProducts = PRODUCTS.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/produtos" className="text-blue-600 hover:text-blue-800">Produtos</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                {product.images[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-8xl">🛏️</span>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {getCategoryLabel(product.category)}
                  </span>
                </div>

                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Destaque
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-3xl font-bold text-blue-900">
                  {formatPrice(product.price)}
                </span>
                {product.warranty && (
                  <p className="text-sm text-gray-500 mt-2">
                    Garantia: {product.warranty}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Características:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              {Object.keys(product.specifications).length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Especificações:</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <dl className="space-y-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row">
                          <dt className="font-medium text-gray-900 sm:w-1/3">{key}:</dt>
                          <dd className="text-gray-700 sm:w-2/3">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              )}

              {/* Stock Status */}
              <div className="mb-8">
                {product.inStock ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    ✓ Em estoque
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    ✗ Indisponível
                  </span>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Olá! Tenho interesse no ${product.name}. Pode me dar mais informações sobre preços e condições?`}
                  className="w-full bg-green-500 text-white py-4 px-6 rounded-lg hover:bg-green-600 transition-colors font-semibold text-lg text-center block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📱 Consultar Preço no WhatsApp
                </a>
                <a
                  href={`tel:+${CONTACT_INFO.whatsapp}`}
                  className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg text-center block"
                >
                  📞 Ligar Agora: {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Produtos Relacionados
              </h2>
              <p className="text-lg text-gray-600">
                Outros produtos da categoria {getCategoryLabel(product.category)}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-100">
                    {relatedProduct.images[0] ? (
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-4xl">🛏️</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex space-x-2">
                      <Link
                        href={`/produtos/${relatedProduct.id}`}
                        className="flex-1 bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors text-center text-sm font-medium"
                      >
                        Ver Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Vantagens de Comprar na Loja Castor
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
                <p className="text-gray-600 text-sm">
                  Entregamos em Cabo Frio e região em até 3 dias úteis
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Facilidade de Pagamento</h3>
                <p className="text-gray-600 text-sm">
                  Parcelamos em até 12x sem juros no cartão
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Garantia Estendida</h3>
                <p className="text-gray-600 text-sm">
                  Produtos com garantia de até 12 anos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}