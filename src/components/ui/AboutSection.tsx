export function AboutSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      title: "Qualidade Premium",
      description: "Produtos Castor com certificação de qualidade e tecnologia de ponta para seu melhor descanso."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Garantia Estendida",
      description: "Oferecemos até 15 anos de garantia nos nossos colchões, demonstrando nossa confiança na qualidade."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Atendimento Especializado",
      description: "Nossa equipe é treinada para te ajudar a escolher o colchão ideal para suas necessidades específicas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
        </svg>
      ),
      title: "Tradição Local",
      description: "Anos de experiência atendendo Cabo Frio e região com produtos de qualidade e preços justos."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre a <span className="text-castor-accent">Loja Castor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tradição, qualidade e confiança em Cabo Frio. Oferecemos os melhores colchões 
            e acessórios para transformar suas noites de sono.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Conteúdo */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nossa História
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A Loja Castor Cabo Frio nasceu com o propósito de oferecer produtos de qualidade 
                premium para o sono e descanso da nossa comunidade. Somos especialistas em colchões 
                Castor, uma das marcas mais respeitadas do Brasil.
              </p>
              <p>
                Nossa missão é simples: proporcionar noites de sono reparadoras através de produtos 
                de excelência, com atendimento personalizado e condições especiais para nossos clientes.
              </p>
              <p>
                Localizada no coração de Cabo Frio, nossa loja oferece toda a linha Castor com 
                garantias estendidas e suporte técnico especializado, porque acreditamos que um 
                bom sono é fundamental para uma vida melhor.
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-castor-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-castor-primary mb-2">15</div>
                <div className="text-sm text-gray-600">Anos de Garantia</div>
              </div>
            </div>
          </div>

          {/* Imagem/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-castor-primary/10 to-castor-accent/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-castor-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 10.5h.5v2A1.5 1.5 0 0 1 20 14H4a1.5 1.5 0 0 1-1.5-1.5v-2H3v-2A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5v2zM4.5 9A.5.5 0 0 0 4 9.5v1h16v-1a.5.5 0 0 0-.5-.5h-15zM20 12.5v-1H4v1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Loja Castor</h4>
                <p className="text-gray-600">Cabo Frio - RJ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-castor-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mapa do Sono IA - Preview */}
        <div className="mt-16 bg-gradient-to-r from-castor-primary to-castor-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            🧠 Mapa do Sono IA - Em Breve!
          </h3>
          <p className="text-lg mb-6 text-gray-200 max-w-2xl mx-auto">
            Tecnologia revolucionária que vai analisar seus padrões de sono e recomendar 
            o colchão ideal baseado em dados de inteligência artificial.
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-castor-accent rounded-full animate-pulse"></div>
            <span className="text-sm">Em desenvolvimento</span>
          </div>
        </div>
      </div>
    </section>
  );
}