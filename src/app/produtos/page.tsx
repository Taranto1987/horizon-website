import { Metadata } from 'next';
import { products, contactInfo } from '@/data/products';

export const metadata: Metadata = {
  title: 'Produtos - Loja Castor Cabo Frio | Colchões e Travesseiros',
  description: 'Conheça nossa linha completa de colchões Castor: Amazon Prime Gel, Silver Star Air, Kingdom Látex e muito mais. Qualidade garantida.',
  keywords: 'colchões Castor, travesseiros, Amazon Prime Gel, Silver Star Air, Kingdom Látex, loja colchões Cabo Frio',
};

export default function ProdutosPage() {
  const colchoes = products.filter(p => p.category === 'colchao');
  const travesseiros = products.filter(p => p.category === 'travesseiro');
  const protetores = products.filter(p => p.category === 'protetor');

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-center px-4">Foto do {product.name}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        {/* Features */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Características:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-green-600">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Specifications */}
        <div className="mb-4 text-sm">
          <div className="grid grid-cols-2 gap-2">
            <div><strong>Altura:</strong> {product.specifications.height}</div>
            <div><strong>Material:</strong> {product.specifications.material}</div>
            <div className="col-span-2"><strong>Garantia:</strong> {product.specifications.warranty}</div>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            R$ {product.price.toLocaleString('pt-BR')}
          </span>
          <a
            href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}?text=Olá! Gostaria de saber mais sobre o ${product.name} no valor de R$ ${product.price.toLocaleString('pt-BR')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            💬 Consultar
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Nossos Produtos
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Descubra nossa linha completa de colchões, travesseiros e acessórios Castor. 
            Qualidade garantida para o seu melhor sono.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Colchões Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Colchões Castor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa linha premium de colchões oferece tecnologia avançada e conforto excepcional 
              para todas as preferências de sono.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colchoes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Travesseiros Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Travesseiros</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Travesseiros desenvolvidos para proporcionar o suporte ideal para sua cabeça e pescoço.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travesseiros.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Protetores Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Protetores e Acessórios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete sua experiência de sono com nossos protetores e acessórios de alta qualidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protetores.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Não Encontrou o Que Procura?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Entre em contato conosco e nossos especialistas irão ajudá-lo a encontrar o produto perfeito!
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a
              href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              💬 WhatsApp: {contactInfo.phone}
            </a>
            <a
              href="mailto:contato@lojacastorcabofrio.com.br"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📧 E-mail
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}