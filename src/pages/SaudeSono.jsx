import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Moon, ShieldCheck, BookOpen, Users, Video, Link as LinkIcon, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SaudeSono = () => {
  const pageTitle = "Saúde do Sono e da Coluna: Seu Guia Completo";
  const pageDescription = "Informações essenciais para noites de sono reparadoras e uma coluna saudável. Descubra como um colchão Castor pode transformar seu bem-estar.";

  const sections = [
    {
      icon: Brain,
      title: "A Ciência por Trás de um Bom Sono",
      content: "Entender os ciclos do sono (REM, NREM) é crucial. Um sono de qualidade impacta diretamente a memória, o humor, o sistema imunológico e a saúde cardiovascular. Colchões inadequados podem interromper esses ciclos, prejudicando a restauração física e mental.",
      image: "Pessoa dormindo tranquilamente em um colchão confortável",
      keywords: ["ciclos do sono", "qualidade do sono", "saúde mental", "sistema imunológico"]
    },
    {
      icon: ShieldCheck,
      title: "Prevenindo Dores na Coluna com o Colchão Certo",
      content: "A postura durante o sono é fundamental para a saúde da coluna. Um colchão Castor com suporte adequado pode favorecer o alinhamento da coluna vertebral, pescoço e quadris. A escolha da densidade correta para seu biotipo contribui para maior conforto durante o descanso.",
      image: "Diagrama da coluna vertebral alinhada em um colchão adequado",
      keywords: ["dor nas costas", "postura correta", "hérnia de disco", "densidade do colchão"]
    },
    {
      icon: AlertTriangle,
      title: "O Perigo da Obsolescência Programada em Colchões Baratos",
      content: "Produtos de baixa qualidade podem perder suporte mais rapidamente, comprometendo o conforto. Investir em um colchão Castor significa escolher durabilidade e tecnologia de ponta, com 10 anos de garantia contra defeitos de fabricação.",
      image: "Comparativo de um colchão Castor durável e um colchão barato desgastado",
      keywords: ["obsolescência programada", "colchão barato", "durabilidade", "investimento em saúde"]
    },
    {
      icon: BookOpen,
      title: "Ergonomia e Conforto: Aliados do Seu Descanso",
      content: "A ergonomia de um colchão Castor considera a distribuição do peso corporal, aliviando pontos de pressão em ombros, quadris e joelhos. Tecnologias como molas ensacadas individualmente e espumas especiais adaptam-se às curvas do corpo, proporcionando conforto personalizado.",
      image: "Infográfico mostrando pontos de pressão aliviados por um colchão ergonômico",
      keywords: ["ergonomia", "pontos de pressão", "molas ensacadas", "espuma viscoelástica"]
    },
  ];

  const resources = [
    { title: "Cartilha do Sono - Ministério da Saúde", link: "#", icon: LinkIcon },
    { title: "Guia de Postura - SUS", link: "#", icon: LinkIcon },
    { title: "Associação Brasileira do Sono", link: "#", icon: LinkIcon },
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

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
        {sections.map((section, index) => (
          <motion.section 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="glass-effect-castor p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-primary/20 transition-shadow"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-primary/20 p-3 rounded-full">
                <section.icon className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
            </div>
            <img  
              alt={section.image} 
              className="w-full h-48 object-cover rounded-lg mb-5 shadow-md"
             src="https://images.unsplash.com/photo-1572157923338-da124589dec1" />
            <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>
            <div className="flex flex-wrap gap-2">
              {section.keywords.map(keyword => (
                <span key={keyword} className="text-xs bg-secondary/70 text-primary/80 px-2.5 py-1 rounded-full">{keyword}</span>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
      
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-foreground text-center mb-8 gradient-text">Simulação de Impacto Postural</h2>
        <div className="glass-effect-castor p-6 md:p-8 rounded-2xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Colchão Inadequado vs. Colchão Castor Ideal</h3>
              <p className="text-muted-foreground mb-4">Veja a diferença que um colchão Castor faz para o alinhamento da sua coluna. Um colchão inadequado pode causar desalinhamento, levando a dores e problemas crônicos.</p>
              <Button className="button-castor-primary">
                <Video className="w-5 h-5 mr-2" /> Ver Animação Explicativa
              </Button>
            </div>
            <img  
              alt="Simulação de impacto de colchão inadequado vs adequado na postura" 
              className="w-full h-auto object-contain rounded-lg"
             src="https://images.unsplash.com/photo/photo-1687180497280-c45693896472" />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-foreground text-center mb-8 gradient-text">Recursos Úteis e Orientações Oficiais</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <a 
              key={index} 
              href={resource.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-effect-castor p-6 rounded-xl hover:bg-primary/10 transition-all group block"
            >
              <div className="flex items-center gap-3 mb-2">
                <resource.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary-accent transition-colors">{resource.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80">Acesse informações oficiais e confiáveis sobre saúde do sono e postural.</p>
            </a>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SaudeSono;