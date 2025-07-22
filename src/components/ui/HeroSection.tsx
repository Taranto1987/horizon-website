import { contactInfo } from '../../data';

export function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Olá! Gostaria de conhecer os colchões Castor e receber um orçamento.`, '_blank');
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-castor-primary via-castor-secondary to-castor-dark text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              O <span className="text-castor-accent">Melhor Sono</span><br />
              da Sua Vida
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Descubra a linha completa de colchões Castor em Cabo Frio. 
              Qualidade premium, conforto incomparável e garantia estendida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleWhatsAppClick}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.598z"/>
                </svg>
                <span>Fale Conosco</span>
              </button>
              
              <a
                href="#produtos"
                className="btn-primary text-lg px-8 py-4 bg-white text-castor-primary hover:bg-gray-100"
              >
                Ver Produtos
              </a>
            </div>

            {/* Destaques */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-castor-accent mb-2">15+</div>
                <div className="text-sm text-gray-300">Anos de Garantia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-castor-accent mb-2">100%</div>
                <div className="text-sm text-gray-300">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-castor-accent mb-2">24h</div>
                <div className="text-sm text-gray-300">Atendimento</div>
              </div>
            </div>
          </div>

          {/* Imagem ou Visual */}
          <div className="relative">
            <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-castor-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 10.5h.5v2A1.5 1.5 0 0 1 20 14H4a1.5 1.5 0 0 1-1.5-1.5v-2H3v-2A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5v2zM4.5 9A.5.5 0 0 0 4 9.5v1h16v-1a.5.5 0 0 0-.5-.5h-15zM20 12.5v-1H4v1a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Colchões Premium</h3>
                <p className="text-gray-300">Tecnologia de ponta para seu melhor descanso</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}