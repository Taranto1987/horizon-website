
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Zap, Shield, Award } from 'lucide-react';

// Use placeholder image URL instead of local import until assets are available
const kingdomAloeVeraImage = '/kingdom_aloe_vera.jpg';

const Hero = ({ onOpenCalculator, onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 hero-section">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(var(--primary)/0.08),transparent_70%)]" />
      
      <div className="absolute top-10 left-5 md:top-20 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full blur-xl floating-animation" />
      <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-2xl floating-animation" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs md:text-sm font-medium">Exclusiva Castor Cabo Frio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">A Melhor Noite de Sono</span>
              <br />
              <span className="gradient-text">Começa Agora</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Descubra o colchão Castor perfeito para sua coluna com nosso Mapa do Sono IA e aproveite condições exclusivas! Não deixe para depois – ofertas especiais e estoque limitado para você dormir melhor hoje.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                size="lg"
                onClick={onOpenCalculator}
                className="button-castor-primary px-6 py-3 md:px-8 md:py-4 text-base md:text-lg neon-glow-castor-primary"
              >
                <Brain className="w-5 h-5 mr-2" />
                Criar Meu Mapa do Sono
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('produtos')}
                className="button-castor-outline px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
              >
                Ver Modelos Castor
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm"
            >
              <div className="flex items-center gap-2 p-3 bg-card/50 rounded-lg">
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Garantia Oficial Castor</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-card/50 rounded-lg">
                <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Tecnologia e Inovação</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-card/50 rounded-lg">
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Especialistas do Sono</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 p-2 glass-effect-castor rounded-3xl">
              {/* Use a local Castor product image for the hero instead of a remote stock photo */}
              <img
                alt="Colchão Castor Kingdom Aloe Vera em um quarto elegante, representando luxo e conforto"
                className="w-full h-auto rounded-2xl shadow-2xl"
                src={kingdomAloeVeraImage} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
