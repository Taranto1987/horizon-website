import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Product types
interface Product {
  id: string;
  name: string;
  category: 'colchoes' | 'travesseiros' | 'acessorios' | 'protetores';
  price: {
    min: number;
    max?: number;
  };
  description: string;
  features: string[];
  image: string;
  featured: boolean;
  sizes?: string[];
}

// Product data
const products: Product[] = [
  // Colchões
  {
    id: 'amazon-prime-gel-pocket',
    name: 'Amazon Prime Gel Pocket®',
    category: 'colchoes',
    price: { min: 1299, max: 2599 },
    description: 'Tecnologia gel com molas pocket para temperatura ideal e suporte personalizado. O colchão perfeito para quem busca frescor e conforto durante toda a noite.',
    features: [
      'Tecnologia Gel para regulação de temperatura',
      'Molas Pocket independentes',
      'Suporte personalizado para cada parte do corpo',
      'Tecido com tratamento antimicrobiano',
      'Garantia de 10 anos'
    ],
    image: '🛏️',
    featured: true,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'silver-star-air-pocket',
    name: 'Silver Star Air Pocket®',
    category: 'colchoes',
    price: { min: 999, max: 1999 },
    description: 'Sistema de ventilação avançado com molas pocket independentes. Ideal para casais que buscam movimento independente e circulação de ar.',
    features: [
      'Sistema Air Pocket para ventilação',
      'Molas independentes',
      'Movimento zero entre parceiros',
      'Espuma de alta densidade',
      'Garantia de 8 anos'
    ],
    image: '🌟',
    featured: true,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'kingdom-latex',
    name: 'Kingdom Látex',
    category: 'colchoes',
    price: { min: 1599, max: 2999 },
    description: 'Látex natural premium para máximo conforto e durabilidade. A escolha perfeita para quem valoriza materiais naturais e sustentáveis.',
    features: [
      'Látex 100% natural',
      'Propriedades antialérgicas',
      'Durabilidade superior',
      'Elasticidade e suporte ideais',
      'Garantia de 12 anos'
    ],
    image: '👑',
    featured: true,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'technopadic-hibrido-pocket',
    name: 'Technopadic Híbrido Pocket®',
    category: 'colchoes',
    price: { min: 1199, max: 2399 },
    description: 'Tecnologia híbrida combinando espumas avançadas e molas pocket para o equilíbrio perfeito entre conforto e suporte.',
    features: [
      'Tecnologia híbrida exclusiva',
      'Espuma viscoelástica',
      'Molas pocket de alta performance',
      'Alívio de pontos de pressão',
      'Garantia de 10 anos'
    ],
    image: '⚡',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'light-stress-pocket',
    name: 'Light Stress Pocket®',
    category: 'colchoes',
    price: { min: 899, max: 1799 },
    description: 'Desenvolvido especialmente para alívio do estresse e tensões do dia a dia. Perfeito para quem busca relaxamento total.',
    features: [
      'Espuma que alivia tensões',
      'Molas pocket suaves',
      'Tecido com infusão calmante',
      'Suporte anatômico',
      'Garantia de 8 anos'
    ],
    image: '🌙',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  // Travesseiros
  {
    id: 'viscosoft-travesseiro',
    name: 'Travesseiro ViscoSoft',
    category: 'travesseiros',
    price: { min: 149, max: 249 },
    description: 'Travesseiro em espuma viscoelástica que se adapta perfeitamente ao contorno da cabeça e pescoço.',
    features: [
      'Espuma viscoelástica',
      'Adaptação anatômica',
      'Alívio de tensões cervicais',
      'Capa removível e lavável',
      'Garantia de 2 anos'
    ],
    image: '🛌',
    featured: false,
    sizes: ['50x70cm', '50x90cm']
  },
  // Protetores
  {
    id: 'protetor-impermeavel',
    name: 'Protetor Impermeável',
    category: 'protetores',
    price: { min: 79, max: 159 },
    description: 'Protetor de colchão impermeável que mantém a garantia do seu colchão, protegendo contra líquidos e ácaros.',
    features: [
      'Impermeável e respirável',
      'Proteção contra ácaros',
      'Não altera o conforto',
      'Elástico em todo contorno',
      'Lavável na máquina'
    ],
    image: '🛡️',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  }
];

const categories = [
  { id: 'colchoes', name: 'Colchões', count: products.filter(p => p.category === 'colchoes').length },
  { id: 'travesseiros', name: 'Travesseiros', count: products.filter(p => p.category === 'travesseiros').length },
  { id: 'protetores', name: 'Protetores', count: products.filter(p => p.category === 'protetores').length },
  { id: 'acessorios', name: 'Acessórios', count: products.filter(p => p.category === 'acessorios').length },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-gradient-to-br from-red-50 to-red-100 h-48 flex items-center justify-center">
        <div className="text-[#C8102B] text-6xl">{product.image}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          {product.featured && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Destaque
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {product.sizes && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">Tamanhos:</h4>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((size) => (
                <span key={size} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-[#C8102B]">
              A partir de R$ {product.price.min.toLocaleString('pt-BR')}
            </span>
            {product.price.max && (
              <div className="text-sm text-gray-500">
                até R$ {product.price.max.toLocaleString('pt-BR')}
              </div>
            )}
          </div>
          <a 
            href={`https://wa.me/5522992410112?text=Olá! Gostaria de saber mais sobre o ${product.name}. Pode me dar mais informações?`}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm font-medium"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
};

export default function CatalogoPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredProducts = products.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    
    if (priceRange) {
      const price = product.price.min;
      switch (priceRange) {
        case 'under-500':
          return price < 500;
        case '500-1000':
          return price >= 500 && price < 1000;
        case '1000-1500':
          return price >= 1000 && price < 1500;
        case 'over-1500':
          return price >= 1500;
        default:
          return true;
      }
    }
    
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price.min - b.price.min;
      case 'price-desc':
        return b.price.min - a.price.min;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'featured':
      default:
        return b.featured === a.featured ? 0 : b.featured ? 1 : -1;
    }
  });

  return (
    <>
      <Head>
        <title>Catálogo de Produtos - Loja Castor Cabo Frio</title>
        <meta name="description" content="Explore nosso catálogo completo de colchões, travesseiros e acessórios Castor. Encontre o produto perfeito para o seu sono com filtros por categoria e preço." />
        <meta name="keywords" content="catálogo, colchões Castor, travesseiros, acessórios, filtros, preços, Cabo Frio" />
        <meta name="author" content="Loja Castor Cabo Frio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.lojacastorcabofrio.com.br/catalogo" />
        
        {/* OpenGraph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lojacastorcabofrio.com.br/catalogo" />
        <meta property="og:title" content="Catálogo de Produtos - Loja Castor Cabo Frio" />
        <meta property="og:description" content="Explore nosso catálogo completo de colchões, travesseiros e acessórios Castor. Encontre o produto perfeito para o seu sono." />
        <meta property="og:image" content="https://www.lojacastorcabofrio.com.br/catalogo-og-image.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Loja Castor Cabo Frio" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.lojacastorcabofrio.com.br/catalogo" />
        <meta property="twitter:title" content="Catálogo de Produtos - Loja Castor Cabo Frio" />
        <meta property="twitter:description" content="Explore nosso catálogo completo de colchões, travesseiros e acessórios Castor." />
        <meta property="twitter:image" content="https://www.lojacastorcabofrio.com.br/catalogo-og-image.jpg" />

        {/* Structured Data for Product Catalog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Loja Castor Cabo Frio - Catálogo",
              "description": "Catálogo completo de colchões, travesseiros e acessórios para o sono",
              "url": "https://www.lojacastorcabofrio.com.br/catalogo",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Produtos Castor",
                "itemListElement": products.map((product, index) => ({
                  "@type": "Offer",
                  "position": index + 1,
                  "itemOffered": {
                    "@type": "Product",
                    "name": product.name,
                    "description": product.description,
                    "category": product.category
                  },
                  "price": product.price.min,
                  "priceCurrency": "BRL"
                }))
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#C8102B] to-[#A00D23] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Catálogo de Produtos
              </h1>
              <p className="text-xl text-red-100">
                Descubra a linha completa de colchões, travesseiros e acessórios Castor. 
                Qualidade garantida para o seu melhor sono.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === '' 
                      ? 'bg-[#C8102B] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Todos ({products.length})
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id 
                        ? 'bg-[#C8102B] text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              {/* Additional Filters */}
              <div className="flex flex-wrap gap-4">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102B] focus:border-transparent"
                >
                  <option value="">Todas as faixas de preço</option>
                  <option value="under-500">Até R$ 500</option>
                  <option value="500-1000">R$ 500 - R$ 1.000</option>
                  <option value="1000-1500">R$ 1.000 - R$ 1.500</option>
                  <option value="over-1500">Acima de R$ 1.500</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C8102B] focus:border-transparent"
                >
                  <option value="featured">Destaques primeiro</option>
                  <option value="price-asc">Menor preço</option>
                  <option value="price-desc">Maior preço</option>
                  <option value="name">Nome A-Z</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Nenhum produto encontrado
                </h3>
                <p className="text-gray-600 mb-6">
                  Tente ajustar os filtros para encontrar o produto ideal.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('');
                    setPriceRange('');
                    setSortBy('featured');
                  }}
                  className="bg-[#C8102B] text-white px-6 py-3 rounded-lg hover:bg-[#A00D23] transition-colors"
                >
                  Limpar Filtros
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'Todos os Produtos'}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'} encontrado{filteredProducts.length === 1 ? '' : 's'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#C8102B] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Encontrou o produto ideal?
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
              Entre em contato conosco para mais informações, preços especiais e condições de pagamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5522992410112?text=Olá! Vi o catálogo de produtos e gostaria de mais informações sobre os colchões Castor." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Falar no WhatsApp
              </a>
              <a 
                href="tel:22992410112" 
                className="bg-white text-[#C8102B] px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-block"
              >
                (22) 99241-0112
              </a>
              <Link
                href="/"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#C8102B] transition-colors inline-block"
              >
                Voltar ao Início
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}