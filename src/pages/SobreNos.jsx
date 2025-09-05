import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Target, MapPin, Phone, Mail, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SobreNos = () => {
  const pageTitle = "Sobre a Exclusiva Castor Cabo Frio";
  const pageDescription = "Conheça nossa história, missão e o compromisso com a sua saúde do sono e bem-estar através da excelência dos colchões Castor.";

  const storeAddress = "Avenida Júlia Kubitschek, 64, Cabo Frio, RJ";
  const googleMapsLink = `https://maps.google.com/?q=${encodeURIComponent(storeAddress)}`;
  const storePhoneNumber = "(22) 99241-012"; // Thalles
  const storeEmail = "contato@lojacastorcabofrio.com.br";


  const sections = [
    {
      icon: Building,
      title: "Nossa História em Cabo Frio",
      content: "Há mais de 5 anos, a Exclusiva Castor Cabo Frio, sob a gerência de Thalles ((22) 99241-012), se dedica a oferecer o que há de melhor em tecnologia do sono para a Região dos Lagos. Estamos localizados na Avenida Júlia Kubitschek, 64. Somos uma loja especializada e autorizada Castor, trazendo tradição, inovação e um atendimento personalizado para cada cliente que busca mais qualidade de vida através de um sono reparador.",
      image: "Fachada da loja Exclusiva Castor Cabo Frio em um dia ensolarado"
    },
    {
      icon: Award,
      title: "Exclusividade e Qualidade Castor",
      content: "Ser uma loja exclusiva Castor significa ter acesso direto aos lançamentos, tecnologias e todo o suporte de uma das marcas mais renomadas e premiadas do Brasil. Nossos produtos passam por rigorosos testes de qualidade, garantindo durabilidade, conforto e os benefícios ortopédicos que sua coluna merece.",
      image: "Selo de qualidade Castor e prêmios da marca"
    },
    {
      icon: Target,
      title: "Nossa Missão: Saúde e Bem-Estar",
      content: "Nossa missão vai além de vender colchões. Queremos promover a saúde do sono e da coluna, educando nossos clientes sobre a importância de uma escolha consciente. Acreditamos que um bom colchão é um investimento essencial para uma vida mais saudável, produtiva e feliz. Por isso, nosso time, liderado por Thalles, é treinado para oferecer a melhor orientação.",
      image: "Consultor de vendas sorridente ajudando um cliente a testar um colchão Castor"
    },
    {
      icon: Sparkles,
      title: "Por que Escolher a Castor Cabo Frio?",
      content: "Atendimento especializado com Thalles e equipe, focado nas suas necessidades; Produtos originais Castor com garantia de fábrica; Quiz Inteligente para recomendação personalizada; Compromisso com a saúde do seu sono e coluna; Loja física na Avenida Júlia Kubitschek, 64, Cabo Frio para você testar os modelos; Condições facilitadas de pagamento e entrega na região.",
      image: "Cliente satisfeito apertando a mão de um vendedor na loja"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 md:py-16"
    >
      <header className="text-center mb-12 md:mb-16">
        <motion.h1 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold gradient-text mb-4"
        >
          {pageTitle}
        </motion.h1>
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          {pageDescription}
        </motion.p>
      </header>

      {sections.map((section, index) => (
        <motion.section 
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 * index }}
          className={`mb-12 md:mb-16 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 glass-effect-castor p-6 md:p-10 rounded-2xl shadow-xl`}
        >
          <div className="md:w-1/2">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-primary/20 p-3 rounded-full">
                <section.icon className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{section.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{section.content}</p>
          </div>
          <div className="md:w-1/2">
            <img  
              alt={section.image} 
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
             src="https://images.unsplash.com/photo-1572157923338-da124589dec1" />
          </div>
        </motion.section>
      ))}

      <motion.section
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6, delay:0.5 }}
        className="text-center mt-16 glass-effect-castor p-8 md:p-12 rounded-2xl"
      >
        <Users className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Venha nos Visitar!</h3>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6 text-base md:text-lg">
          Nossa equipe, liderada por Thalles, está pronta para te receber e ajudar a encontrar o colchão Castor dos seus sonhos. Experimente o conforto e a tecnologia que só a Castor oferece.
        </p>
        <div className="space-y-3 text-muted-foreground mb-8 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-primary" /> {storeAddress}
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-primary" /> {storePhoneNumber} (Thalles)
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-primary" /> {storeEmail}
          </div>
        </div>
        <Button 
          onClick={() => window.open(googleMapsLink, '_blank')}
          className="button-castor-primary px-8 py-3 text-base md:text-lg"
        >
          Ver no Mapa
        </Button>
      </motion.section>

    </motion.div>
  );
};

export default SobreNos;