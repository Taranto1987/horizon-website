
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowLeft, ShoppingCart, Star, CheckCircle, Tag, Ruler, Palette, Info, Zap, Users, Phone, MessageSquare, ShieldCheck, Truck } from 'lucide-react';

const ProductPage = ({ product, onBack }) => {
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-destructive">Ops! Produto não encontrado.</h1>
        <p className="text-muted-foreground mt-2">Parece que este colchão Castor deu um cochilo. Tente outro!</p>
        <Button onClick={onBack} className="mt-6 button-castor-primary">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar aos Modelos Incríveis
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "🛒 Seu Castor está no carrinho!",
      description: `${product.name} adicionado. Finalize sua compra e prepare-se para noites de sono renovadoras!`,
      className: "toast-success-castor",
      duration: 5000,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "🚧 Quase lá! Compra Direta em Breve!",
      description: "A compra direta ainda não está habilitada. Adicione ao carrinho ou fale com nosso especialista para garantir seu Castor!",
      variant: "default",
      className: "toast-info-castor",
      duration: 5000,
    });
  };
  
  const castorColors = {
    'Vermelho Detalhe': 'bg-primary',
    'Branco': 'bg-white',
    'Dourado': 'bg-accent-castor-gold',
    'Prata': 'bg-gray-400',
    'Cinza': 'bg-gray-500',
    'Azul Claro': 'bg-blue-300',
    'Bege': 'bg-yellow-100',
    'Grafite': 'bg-gray-700',
  };

  const whatsappNumber = "5522992410112";
  const whatsappMessage = `Olá! Tenho interesse no ${product.name} (${product.sizes ? product.sizes[0] : ''}) e gostaria de mais informações e das condições especiais para Cabo Frio.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const stockLevel = Math.floor(Math.random() * 10) + 3; // Simula estoque entre 3 e 12

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-10 md:py-16"
    >
      <Button onClick={onBack} variant="outline" className="mb-8 group button-castor-outline border-primary/70 text-primary hover:bg-primary/10 hover:text-primary-accent">
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Voltar aos Modelos Castor
      </Button>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative glass-effect-castor p-4 md:p-6 rounded-2xl shadow-2xl"
        >
          {product.discount && (
            <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1.5 rounded-full text-sm font-bold z-10 shadow-md flex items-center gap-1.5 animate-pulse">
              <Tag className="w-4 h-4"/> {product.discount}% OFF HOJE!
            </div>
          )}
          <img   
            alt={product.image_placeholder || `Imagem principal do ${product.name}`}
            className="w-full h-auto aspect-[4/3] object-cover rounded-xl shadow-lg"
           src="https://images.unsplash.com/photo-1687180497280-c45693896472" />
          <div className="mt-4 flex justify-center gap-2">
            {[
              product.image_placeholder || `Colchão Castor ${product.name} detalhe do tecido`,
              product.image_placeholder || `Colchão Castor ${product.name} vista lateral`,
              product.image_placeholder || `Colchão Castor ${product.name} em um quarto decorado`
            ].map((thumb, i) => (
              <div key={i} className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-secondary/50 border-2 border-transparent hover:border-primary cursor-pointer transition-all overflow-hidden">
                <img  alt={`Thumbnail ${i+1} de ${product.name}`} className="w-full h-full object-cover rounded-md" src="https://images.unsplash.com/photo-1506833738595-90dd5fe75ea9" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold">
            {product.category || 'Colchão Castor'} - Exclusivo Loja Castor Cabo Frio
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{product.name}</h1>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating || 4) ? 'text-accent-castor-gold fill-accent-castor-gold' : 'text-muted'}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews || 0} avaliações de clientes 100% satisfeitos)</span>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed">
            {product.shortDesc || 'Descubra o conforto e a tecnologia que só um colchão Castor pode oferecer. Ideal para noites de sono revigorantes e saúde da sua coluna.'}
            <span className="font-semibold text-primary"> Invista no seu bem-estar e transforme suas noites AGORA!</span>
          </p>

          <div className="glass-effect-castor p-5 rounded-xl border border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center"><Zap className="w-5 h-5 mr-2 text-primary"/> Por que o {product.name} é PERFEITO para você?</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground list-inside">
              {(product.features || []).map((feature, i) => (
                <li key={i} className="flex items-center"><CheckCircle className="w-3.5 h-3.5 mr-2 text-primary flex-shrink-0"/>{feature}</li>
              ))}
               <li className="flex items-center font-semibold text-primary"><CheckCircle className="w-3.5 h-3.5 mr-2 text-primary flex-shrink-0"/>Qualidade e Tradição Castor que você confia!</li>
            </ul>
          </div>
          
          <div className="flex items-center gap-3">
            <Ruler className="w-5 h-5 text-primary"/>
            <span className="text-muted-foreground">Tamanhos disponíveis: <span className="font-medium text-foreground">{(product.sizes || ['Padrão']).join(', ')}</span></span>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-primary"/>
              <span className="text-muted-foreground mr-2">Cores Exclusivas Castor:</span>
              {product.colors.map(colorName => (
                <span key={colorName} title={colorName} className={`w-5 h-5 rounded-full border border-border shadow-sm ${castorColors[colorName] || 'bg-gray-200'}`}></span>
              ))}
            </div>
          )}

          <div className="pt-4 space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">
                R$ {(product.price || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">💳 Em até 12x sem juros no cartão. <span className="font-semibold text-destructive animate-pulse">OFERTA POR TEMPO LIMITADO para Cabo Frio!</span></p>
            <p className={`text-sm font-medium ${stockLevel <= 5 ? 'text-destructive animate-pulse' : 'text-green-600'}`}>
              {stockLevel <= 5 ? `Corra! Apenas ${stockLevel} unidades restantes com esta condição!` : `Em estoque! ${stockLevel} unidades disponíveis.`}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" onClick={handleAddToCart} variant="outline" className="flex-1 button-castor-outline border-primary/70 text-primary hover:bg-primary/10 hover:text-primary-accent text-base shadow-sm hover:shadow-md">
              <ShoppingCart className="mr-2 h-5 w-5" /> Adicionar ao Carrinho
            </Button>
            <Button size="lg" onClick={handleBuyNow} className="flex-1 button-castor-primary text-base shadow-md hover:shadow-lg">
              Comprar Agora e Dormir Melhor!
            </Button>
          </div>
          
          <div className="pt-6 border-t border-border/50 space-y-4">
             <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center"><Info className="w-5 h-5 mr-2 text-primary"/> Mais sobre o seu futuro {product.name}:</h3>
             <p className="text-sm text-muted-foreground leading-relaxed">
                {product.fullDescription || 'Este é um produto de excelência da Castor, desenvolvido com as mais altas tecnologias para proporcionar o máximo de conforto e durabilidade. Para informações técnicas completas, densidade, especificações de garantia e vídeos ilustrativos, por favor, consulte a documentação oficial do produto ou fale com um de nossos especialistas do sono.'}
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 p-2 bg-secondary/30 rounded-md">
                    <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Garantia Oficial Castor de até {Math.floor(Math.random()*3)+1} ano(s).</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-secondary/30 rounded-md">
                    <Truck className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Entrega rápida e segura em Cabo Frio.</span>
                </div>
             </div>
             <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mt-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary"/> Fale com um Especialista do Sono Castor em Cabo Frio:</h4>
                <p className="text-sm text-muted-foreground mb-2">Tire todas as suas dúvidas e receba um atendimento personalizado para escolher o colchão dos seus sonhos.</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline font-medium text-base">
                    <MessageSquare className="w-4 h-4 mr-1.5"/> WhatsApp Direto: (22) 99241-0112
                </a>
                <p className="text-xs text-muted-foreground mt-1.5">Ou ligue para nossa loja: (22) 99222-7396</p>
             </div>
          </div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductPage;