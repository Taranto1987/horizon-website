import Layout from '../components/layout/Layout'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: "Amazon Prime Gel Pocket®",
    category: "Colchões Premium",
    description: "Colchão com tecnologia avançada de gel refrescante e molas ensacadas independentes. Proporciona o máximo conforto térmico e alinhamento perfeito da coluna.",
    price: "A partir de R$ 899",
    sizes: ["Solteiro", "Casal", "Queen", "King"],
    features: [
      "Gel refrescante que mantém a temperatura ideal",
      "Molas ensacadas independentes",
      "Tecido anti-ácaro e anti-alérgico",
      "Bordas reforçadas para maior durabilidade",
      "Garantia de 10 anos"
    ],
    image: "/images/products/amazon-prime-gel.jpg"
  },
  {
    id: 2,
    name: "Silver Star Air Pocket®",
    category: "Colchões Premium",
    description: "Sistema exclusivo Air Pocket que garante ventilação superior e distribuição uniforme do peso corporal para noites de sono revigorantes.",
    price: "A partir de R$ 699",
    sizes: ["Solteiro", "Casal", "Queen", "King"],
    features: [
      "Tecnologia Air Pocket para ventilação",
      "Espuma viscoelástica de alta densidade",
      "Sistema anti-ruído",
      "Tratamento antibacteriano",
      "Garantia de 8 anos"
    ],
    image: "/images/products/silver-star-air.jpg"
  },
  {
    id: 3,
    name: "Kingdom Látex",
    category: "Colchões Naturais",
    description: "Colchão 100% látex natural extraído da seringueira. Ecológico, sustentável e com propriedades naturais antibacterianas e antifúngicas.",
    price: "A partir de R$ 1.299",
    sizes: ["Solteiro", "Casal", "Queen", "King"],
    features: [
      "100% látex natural da seringueira",
      "Propriedades antibacterianas naturais",
      "Respirabilidade excepcional",
      "Sustentável e ecológico",
      "Garantia de 15 anos"
    ],
    image: "/images/products/kingdom-latex.jpg"
  },
  {
    id: 4,
    name: "Technopadic Híbrido Pocket®",
    category: "Colchões Premium",
    description: "Combinação perfeita de molas ensacadas e espuma viscoelástica, oferecendo suporte ortopédico e conforto personalizado.",
    price: "A partir de R$ 1.099",
    sizes: ["Solteiro", "Casal", "Queen", "King"],
    features: [
      "Sistema híbrido molas + viscoelástico",
      "Suporte ortopédico personalizado",
      "7 zonas de conforto diferenciado",
      "Tecido Tencel® respirável",
      "Garantia de 12 anos"
    ],
    image: "/images/products/technopadic-hybrid.jpg"
  },
  {
    id: 5,
    name: "Light Stress Pocket®",
    category: "Colchões Intermediários",
    description: "Ideal para quem busca conforto e qualidade com excelente custo-benefício. Molas ensacadas com espuma de alta qualidade.",
    price: "A partir de R$ 549",
    sizes: ["Solteiro", "Casal", "Queen", "King"],
    features: [
      "Molas ensacadas pocket",
      "Espuma D33 de alta qualidade",
      "Tecido matelassê confortável",
      "Excelente custo-benefício",
      "Garantia de 5 anos"
    ],
    image: "/images/products/light-stress.jpg"
  },
  {
    id: 6,
    name: "Fontana Pocket®",
    category: "Colchões Clássicos",
    description: "Colchão tradicional com molas ensacadas, oferecendo o equilíbrio perfeito entre firmeza e conforto para um sono reparador.",
    price: "A partir de R$ 449",
    sizes: ["Solteiro", "Casal", "Queen", "King"],
    features: [
      "Molas ensacadas tradicionais",
      "Espuma D28 confortável",
      "Design clássico atemporal",
      "Ótima relação custo-benefício",
      "Garantia de 3 anos"
    ],
    image: "/images/products/fontana.jpg"
  },
  {
    id: 7,
    name: "Travesseiro ViscoSoft",
    category: "Travesseiros",
    description: "Travesseiro com espuma viscoelástica que se adapta perfeitamente ao contorno da cabeça e pescoço, aliviando tensões.",
    price: "A partir de R$ 149",
    sizes: ["50x70cm", "50x90cm"],
    features: [
      "Espuma viscoelástica premium",
      "Contorno anatômico perfeito",
      "Capa removível e lavável",
      "Anti-ácaro e anti-alérgico",
      "Garantia de 2 anos"
    ],
    image: "/images/products/travesseiro-visco.jpg"
  },
  {
    id: 8,
    name: "Travesseiro Sleep Flocos",
    category: "Travesseiros",
    description: "Travesseiro com flocos de espuma que permitem ajustar a altura e firmeza conforme sua preferência pessoal.",
    price: "A partir de R$ 89",
    sizes: ["50x70cm", "50x90cm"],
    features: [
      "Flocos de espuma ajustáveis",
      "Altura personalizável",
      "Respirabilidade superior",
      "Fácil manutenção",
      "Garantia de 1 ano"
    ],
    image: "/images/products/travesseiro-flocos.jpg"
  },
  {
    id: 9,
    name: "Protetor Impermeável",
    category: "Protetores",
    description: "Protetor de colchão 100% impermeável que mantém a respirabilidade, protegendo contra líquidos e ácaros.",
    price: "A partir de R$ 79",
    sizes: ["Solteiro", "Casal", "Queen", "King"],
    features: [
      "100% impermeável",
      "Respirável e silencioso",
      "Proteção anti-ácaro",
      "Elástico em todo perímetro",
      "Lavável em máquina"
    ],
    image: "/images/products/protetor-impermeavel.jpg"
  }
]

const categories = ["Todos", "Colchões Premium", "Colchões Naturais", "Colchões Intermediários", "Colchões Clássicos", "Travesseiros", "Protetores"]

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <Layout 
      title="Produtos - Loja Castor Cabo Frio"
      description="Confira nossa linha completa de colchões, travesseiros e protetores. Produtos de qualidade para um sono perfeito em Cabo Frio - RJ."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Produtos
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Descubra nossa linha completa de colchões, travesseiros e acessórios 
            para proporcionar o melhor sono da sua vida.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white border-b">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🛏️</span>
                </div>
                
                <div className="mb-2">
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                </div>
                
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="btn-outline text-center"
                  >
                    Ver Detalhes
                  </button>
                  <a 
                    href={`https://wa.me/5522992410112?text=Olá! Tenho interesse no ${product.name}. Podem me passar mais informações?`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                  >
                    Consultar Preço
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="w-full h-64 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-8xl">🛏️</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-sm bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                    {selectedProduct.category}
                  </span>
                </div>
                
                <p className="text-gray-600">{selectedProduct.description}</p>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Características:</h3>
                  <ul className="space-y-1">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {selectedProduct.sizes && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tamanhos disponíveis:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.sizes.map((size, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary-600">{selectedProduct.price}</span>
                  </div>
                  <a 
                    href={`https://wa.me/5522992410112?text=Olá! Tenho interesse no ${selectedProduct.name}. Podem me passar mais informações sobre preços e condições?`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center"
                  >
                    Consultar via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não Encontrou o que Procura?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco! Temos muito mais produtos em nossa loja física.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5522992410112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Falar no WhatsApp
            </a>
            <a href="/contato" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Visitar Nossa Loja
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}