import Layout from '../components/layout/Layout'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: "Amazon Prime Gel Pocket®",
    description: "Tecnologia avançada com gel refrescante e molas ensacadas para noites perfeitas",
    price: "A partir de R$ 899",
    image: "/images/products/amazon-prime-gel.jpg",
    features: ["Gel Refrescante", "Molas Ensacadas", "Anti-Ácaro"]
  },
  {
    id: 2,
    name: "Silver Star Air Pocket®",
    description: "Ventilação superior e conforto incomparável com tecnologia air pocket",
    price: "A partir de R$ 699",
    image: "/images/products/silver-star-air.jpg",
    features: ["Ventilação Air", "Conforto Premium", "Durabilidade"]
  },
  {
    id: 3,
    name: "Kingdom Látex",
    description: "Látex natural para o máximo conforto e sustentabilidade",
    price: "A partir de R$ 1.299",
    image: "/images/products/kingdom-latex.jpg",
    features: ["Látex Natural", "Ecológico", "Anatômico"]
  },
  {
    id: 4,
    name: "Travesseiros e Protetores",
    description: "Complementos essenciais para um sono completo e protegido",
    price: "A partir de R$ 89",
    image: "/images/products/travesseiros.jpg",
    features: ["Diversos Modelos", "Proteção Completa", "Fácil Manutenção"]
  }
]

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente atendimento e produtos de qualidade. Meu sono melhorou muito após a compra do colchão Amazon Prime!",
    rating: 5
  },
  {
    name: "João Santos",
    text: "Loja de confiança em Cabo Frio. Recomendo para quem busca qualidade e bom preço.",
    rating: 5
  },
  {
    name: "Ana Costa",
    text: "Atendimento personalizado e entrega rápida. O colchão superou minhas expectativas!",
    rating: 5
  }
]

const whyChooseUs = [
  {
    title: "Qualidade Garantida",
    description: "Produtos de marcas reconhecidas com garantia de fábrica",
    icon: "✅"
  },
  {
    title: "Atendimento Personalizado",
    description: "Consultoria especializada para encontrar o produto ideal",
    icon: "👥"
  },
  {
    title: "Entrega Rápida",
    description: "Entrega em Cabo Frio e região com agilidade",
    icon: "🚚"
  },
  {
    title: "Melhores Preços",
    description: "Preços competitivos e condições especiais de pagamento",
    icon: "💰"
  }
]

export default function Home() {
  return (
    <Layout 
      title="Loja Castor Cabo Frio - Colchões e Produtos para o Sono"
      description="Especialista em colchões, travesseiros e produtos para um sono de qualidade em Cabo Frio - RJ. Av. Júlia Kubitschek, 64 - Jardim Flamboyant."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Bem-vindos à 
                <span className="text-primary-600 block">Loja Castor</span>
                <span className="text-secondary-600">Cabo Frio</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Há anos cuidando do seu sono com os melhores colchões e produtos para descanso. 
                Oferecemos qualidade, conforto e atendimento personalizado para toda a família.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/produtos" className="btn-primary text-center">
                  Ver Produtos
                </Link>
                <a 
                  href="https://wa.me/5522992410112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline text-center"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-6xl">🛏️</span>
                  </div>
                  <p className="text-gray-600 font-medium">Colchões Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Principais Produtos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra nossa linha completa de colchões e produtos para o sono, 
              desenvolvidos para proporcionar o máximo conforto e qualidade de vida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🛏️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, index) => (
                      <span key={index} className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-600">{product.price}</span>
                  <a 
                    href="https://wa.me/5522992410112" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Consultar →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher a Loja Castor?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Anos de experiência e compromisso com a qualidade fazem da nossa loja 
              a melhor opção para seus produtos de sono em Cabo Frio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista. 
              Veja alguns depoimentos de quem já escolheu a Loja Castor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Melhorar seu Sono?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e descubra o colchão perfeito para você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5522992410112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>📱</span>
              <span>WhatsApp</span>
            </a>
            <Link href="/contato" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Formulário de Contato
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}