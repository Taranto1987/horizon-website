const products = [
  {
    id: 1,
    name: "Amazon Prime Gel Pocket®",
    description: "Colchão com tecnologia gel pocket para máximo conforto e temperatura ideal.",
    features: ["Gel Pocket", "Molas Ensacadas", "Tecido Antialérgico"],
    image: "/colchao-amazon-prime.jpg"
  },
  {
    id: 2,
    name: "Silver Star Air Pocket®",
    description: "Sistema de ventilação avançado com molas pocket individuais.",
    features: ["Air Pocket", "Ventilação Superior", "Suporte Perfeito"],
    image: "/colchao-silver-star.jpg"
  },
  {
    id: 3,
    name: "Technopadic Híbrido Pocket®",
    description: "Combinação perfeita de molas pocket e espuma technopadic.",
    features: ["Híbrido", "Technopadic", "Molas Pocket"],
    image: "/colchao-technopadic.jpg"
  },
  {
    id: 4,
    name: "Kingdom Látex",
    description: "Colchão de látex natural para máximo conforto e durabilidade.",
    features: ["Látex Natural", "Antialérgico", "Alta Durabilidade"],
    image: "/colchao-kingdom.jpg"
  },
  {
    id: 5,
    name: "Light Stress Pocket®",
    description: "Alívio do stress com tecnologia pocket e materiais premium.",
    features: ["Anti-Stress", "Pocket", "Conforto Premium"],
    image: "/colchao-light-stress.jpg"
  },
  {
    id: 6,
    name: "Evolution Gel Pocket®",
    description: "Evolução em conforto com gel avançado e molas pocket.",
    features: ["Gel Avançado", "Evolution", "Molas Pocket"],
    image: "/colchao-evolution.jpg"
  }
]

export default function Catalog() {
  return (
    <section id="catalog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nosso Catálogo Castor
          </h2>
          <p className="text-xl text-gray-600">
            Descubra a linha completa de colchões com tecnologia avançada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Imagem do Produto</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <a 
                  href={`https://wa.me/5522992410112?text=Olá! Gostaria de saber mais sobre o ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors block text-center"
                >
                  Consultar Preço
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5522992410112?text=Olá! Gostaria de ver mais produtos do catálogo Castor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Ver Catálogo Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}