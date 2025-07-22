import Layout from '../components/layout/Layout'

export default function Sobre() {
  const values = [
    {
      title: "Qualidade",
      description: "Trabalhamos apenas com as melhores marcas e produtos certificados para garantir a satisfação dos nossos clientes.",
      icon: "⭐"
    },
    {
      title: "Confiança",
      description: "Anos de experiência no mercado construíram nossa reputação sólida junto aos clientes de Cabo Frio e região.",
      icon: "🤝"
    },
    {
      title: "Atendimento",
      description: "Cada cliente é único. Oferecemos consultoria personalizada para encontrar o produto ideal para suas necessidades.",
      icon: "💬"
    },
    {
      title: "Compromisso",
      description: "Nosso compromisso vai além da venda. Garantimos suporte completo durante toda a vida útil do produto.",
      icon: "✅"
    }
  ]

  const differentials = [
    {
      title: "Consultoria Especializada",
      description: "Nossa equipe está preparada para orientar você na escolha do colchão ideal baseado em suas necessidades específicas de sono e conforto."
    },
    {
      title: "Produtos Certificados",
      description: "Todos os nossos produtos possuem certificações de qualidade e garantia de fábrica, assegurando sua durabilidade e performance."
    },
    {
      title: "Entrega Rápida",
      description: "Atendemos Cabo Frio e região com entrega rápida e montagem gratuita, para que você desfrute do seu novo colchão o quanto antes."
    },
    {
      title: "Pós-venda Dedicado",
      description: "Nossa relação não termina na venda. Oferecemos suporte contínuo para garantia, manutenção e orientações de uso."
    },
    {
      title: "Variedade de Produtos",
      description: "Desde colchões básicos até os mais premium, travesseiros especiais e acessórios completos para todas as necessidades e orçamentos."
    },
    {
      title: "Condições Especiais",
      description: "Trabalhamos com condições de pagamento flexíveis e promoções especiais para tornar seu sono dos sonhos mais acessível."
    }
  ]

  return (
    <Layout 
      title="Sobre Nós - Loja Castor Cabo Frio"
      description="Conheça a história da Loja Castor Cabo Frio. Anos de experiência oferecendo os melhores colchões e produtos para o sono em Cabo Frio - RJ."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre a Loja Castor
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Anos de experiência cuidando do sono de famílias em Cabo Frio e região, 
            oferecendo produtos de qualidade e atendimento personalizado.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A Loja Castor Cabo Frio nasceu da paixão por proporcionar noites de sono reparadoras 
                  para as famílias da nossa região. Localizada estrategicamente na Av. Júlia Kubitschek, 
                  no coração do Jardim Flamboyant, nossa loja se tornou referência em colchões e 
                  produtos para o sono.
                </p>
                <p>
                  Ao longo dos anos, construímos uma reputação sólida baseada na confiança, qualidade 
                  e atendimento diferenciado. Cada cliente que passa por nossa loja recebe atenção 
                  personalizada, pois sabemos que o sono é fundamental para a qualidade de vida.
                </p>
                <p>
                  Trabalhamos com as melhores marcas do mercado, oferecendo desde opções mais 
                  acessíveis até os colchões mais premium, sempre mantendo nosso compromisso 
                  com a excelência e a satisfação do cliente.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-6xl">🏪</span>
                  </div>
                  <p className="text-gray-600 font-medium">Nossa Loja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Missão, Visão e Valores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Mission */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600">
                Proporcionar o melhor sono para nossos clientes através de produtos de qualidade 
                superior e atendimento personalizado, contribuindo para sua qualidade de vida e bem-estar.
              </p>
            </div>
            
            {/* Vision */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser a loja de referência em colchões e produtos para o sono em Cabo Frio e região, 
                reconhecida pela excelência no atendimento e qualidade dos produtos oferecidos.
              </p>
            </div>
            
            {/* Values Preview */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-600">
                Nossos valores fundamentais guiam cada decisão e ação, garantindo que sempre 
                oferecemos o melhor para nossos clientes e comunidade.
              </p>
            </div>
          </div>
          
          {/* Values Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Differentials */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              O que nos torna únicos no mercado de colchões e produtos para o sono em Cabo Frio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {differential.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {differential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais dedicados e especializados em sono, prontos para ajudar você 
              a encontrar o produto perfeito.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl">👥</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Especialistas em Sono
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Nossa equipe é treinada para entender suas necessidades específicas de sono. 
              Com conhecimento técnico sobre diferentes tipos de colchões, materiais e tecnologias, 
              oferecemos orientação especializada para que você faça a melhor escolha.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nosso Compromisso com Você
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Garantia de Qualidade</h3>
              <p className="opacity-90">
                Todos os produtos com garantia de fábrica e suporte completo pós-venda.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💤</div>
              <h3 className="text-xl font-semibold mb-2">Teste de Sono</h3>
              <p className="opacity-90">
                Orientação para teste adequado e período de adaptação para sua total satisfação.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Entrega e Montagem</h3>
              <p className="opacity-90">
                Entrega rápida em Cabo Frio e região com montagem gratuita e retirada do antigo.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5522992410112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Falar Conosco
            </a>
            <a href="/produtos" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Ver Produtos
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}