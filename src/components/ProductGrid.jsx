import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Star, ShoppingCart, Zap, Shield, Award, RefreshCw, Bed, Package, Tag, Users, TrendingUp } from 'lucide-react';

const ProductGrid = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('todos');
  const [happyCustomers, setHappyCustomers] = useState(0);

  const castorProductsData = [
    // Sleep Max D28
    {
      id: 'sleep-max-d28',
      name: 'Colchão Castor Sleep Max D28',
      type: 'colchao',
      category: 'Espuma',
      price: 799.90,
      originalPrice: 950.00,
      image_url: '/sleep_max_d28.jpg',
      image_placeholder: 'Colchão Castor Sleep Max D28',
      rating: 4.5,
      reviews: 85,
      features: ['Espuma D28', 'Suporte Firme', 'Custo-benefício', 'Double Face'],
      sizes: ['Solteiro', 'Casal'],
      shortDesc: 'Colchão de espuma D28 com excelente custo-benefício e suporte firme. Ideal para quem busca qualidade Castor com preço acessível!',
      fullDescription: 'O Colchão Castor Sleep Max D28 oferece a qualidade tradicional Castor com espuma D28 de densidade adequada para um sono confortável. Seu design Double Face permite o uso dos dois lados, aumentando a durabilidade. É perfeito para jovens e adultos que buscam um colchão firme e durável com excelente custo-benefício.',
    },
    // Red White D33
    {
      id: 'red-white-d33',
      name: 'Colchão Castor Red White D33',
      type: 'colchao',
      category: 'Espuma',
      price: 1299.90,
      originalPrice: 1580.00,
      image_url: '/red_white_d33.jpg',
      image_placeholder: 'Colchão Castor Red White D33',
      rating: 4.6,
      reviews: 95,
      features: ['Espuma D33', 'Double Face', 'Design Moderno', 'Conforto Firme'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Espuma D33 de alta densidade com design moderno e tecnologia Double Face. Durabilidade e conforto em destaque!',
      fullDescription: 'O Colchão Castor Red White D33 combina design contemporâneo com a tecnologia de espuma D33 de alta densidade. A tecnologia Double Face garante conforto firme e durabilidade superior. É ideal para quem busca um colchão de espuma robusto com visual moderno.',
    },
    // Silver Star Air Híbrido
    {
      id: 'silver-star-air-hibrido',
      name: 'Colchão Castor Silver Star Air Híbrido',
      type: 'colchao',
      category: 'Híbrido',
      price: 2199.90,
      originalPrice: 2690.00,
      image_url: '/silver_star_air_hibrido.jpg',
      image_placeholder: 'Colchão Castor Silver Star Air Híbrido',
      rating: 4.8,
      reviews: 110,
      features: ['Molas Ensacadas', 'Espuma HR', 'Tecido Air', 'Conforto Firme'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Tecnologia híbrida com molas ensacadas e espuma HR, ideal para suporte firme e durabilidade. Estoque limitado!',
      fullDescription: 'O Colchão Castor Silver Star Air Híbrido oferece suporte firme e confortável graças à combinação de molas ensacadas e espuma de alta resiliência (HR). Seu tecido respirável e a estrutura que permite a circulação do ar garantem um ambiente de sono mais fresco e higiênico.',
    },
    // Silver Star Air Tecnopedic
    {
      id: 'silver-star-air-tecnopedic',
      name: 'Colchão Castor Silver Star Air Tecnopedic',
      type: 'colchao',
      category: 'LFK',
      price: 1899.90,
      originalPrice: 2300.00,
      image_url: '/silver_star_air_tecnopedic.jpg',
      image_placeholder: 'Colchão Castor Silver Star Air Tecnopedic',
      rating: 4.7,
      reviews: 88,
      features: ['Molas LFK', 'Pillow Top One Face', 'Tecido Air', 'Suporte Firme'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Molas LFK com tecido respirável Air, proporcionando suporte firme e ambiente fresco. Oferta por tempo limitado!',
      fullDescription: 'O Colchão Castor Silver Star Air Tecnopedic combina a robustez das molas LFK com a respirabilidade do tecido Air. Proporciona um suporte firme e um ambiente de sono mais fresco, ideal para quem busca alívio de dores e conforto térmico.',
    },
    // Premium Amazon Gel Pocket
    {
      id: 'amazon-premium-gel-pocket',
      name: 'Colchão Castor Premium Amazon Gel Pocket',
      type: 'colchao',
      category: 'Pocket',
      price: 2899.90,
      originalPrice: 3500.00,
      image_url: '/amazon_premium_gel.jpg',
      image_placeholder: 'Colchão Castor Premium Amazon Gel Pocket',
      rating: 4.9,
      reviews: 120,
      features: ['Molas Ensacadas', 'Pillow Top One Face', 'Gel Sense', 'Conforto Firme'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Tecnologia de molas ensacadas com gel para noites frescas e suporte individualizado. Aproveite esta oportunidade única!',
      fullDescription: 'O Colchão Castor Premium Amazon Gel Pocket oferece o que há de mais moderno em conforto e tecnologia. Suas molas ensacadas individualmente proporcionam suporte perfeito para cada parte do corpo, enquanto a camada de gel dissipa o calor, garantindo um sono fresco e reparador.',
    },
    // Plush Light Stress Pocket
    {
      id: 'plush-light-stress-pocket',
      name: 'Colchão Castor Plush Light Stress Pocket',
      type: 'colchao',
      category: 'Pocket',
      price: 2799.90,
      originalPrice: 3400.00,
      image_url: '/plush_light_stress.jpg',
      image_placeholder: 'Colchão Castor Plush Light Stress Pocket',
      rating: 4.7,
      reviews: 90,
      features: ['Molas Ensacadas', 'Pillow Top One Face', 'Tecido Antiestresse', 'Conforto Firme'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Firmeza e tecnologia antiestresse para um sono profundo e reparador. Aproveite esta oferta única!',
      fullDescription: 'O Colchão Castor Plush Light Stress Pocket foi desenvolvido para proporcionar um sono livre de tensões. Suas molas ensacadas garantem suporte individualizado, e o tecido com tecnologia antiestresse ajuda a neutralizar cargas eletrostáticas, promovendo um relaxamento completo.',
    },
    // Kingdom Aloe Vera Pocket
    {
      id: 'kingdom-aloe-vera-pocket',
      name: 'Colchão Castor Kingdom Aloe Vera Pocket',
      type: 'colchao',
      category: 'Pocket',
      price: 3299.90,
      originalPrice: 4000.00,
      image_url: '/kingdom_aloe_vera.jpg',
      image_placeholder: 'Colchão Castor Kingdom Aloe Vera Pocket',
      rating: 5.0,
      reviews: 150,
      features: ['Molas Ensacadas', 'Double Face', 'Tecido com Aloe Vera', 'Conforto Macio'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Luxo e durabilidade com molas ensacadas e tratamento Aloe Vera para um sono revitalizante. Últimas unidades!',
      fullDescription: 'O Colchão Castor Kingdom Aloe Vera Pocket é sinônimo de luxo e bem‑estar. Com molas ensacadas e a tecnologia Double Face, oferece o dobro de vida útil. Seu tecido com tratamento de Aloe Vera proporciona uma sensação de frescor e cuidado com a pele.',
    },
  ];

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800)); 
      setProducts(castorProductsData);
      setLoading(false);
    };

    loadProducts();

    // Animated counter for happy customers
    const targetCustomers = 450;
    let current = 0;
    const increment = targetCustomers / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCustomers) {
        setHappyCustomers(targetCustomers);
        clearInterval(timer);
      } else {
        setHappyCustomers(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const filteredProducts = products.filter(product => {
    if (filter === 'todos') return true;
    return product.category.toLowerCase() === filter.toLowerCase() || product.type === filter;
  });

  const handleProductSelect = (product) => {
    onProductSelect(product);
    toast({
      title: "🛏️ Produto Selecionado!",
      description: `${product.name} - Entre em contato para finalizar a compra!`,
      duration: 3000,
    });
  };

  const filters = [
    { id: 'todos', label: 'Todos os Produtos', icon: Package },
    { id: 'colchao', label: 'Colchões', icon: Bed },
  ];

  if (loading) {
    return (
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <RefreshCw className="w-8 h-8 text-primary animate-spin" />
            <span className="text-xl font-semibold text-muted-foreground">Carregando produtos exclusivos...</span>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="produtos" className="py-20 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          Colchões Castor Exclusivos
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Descubra nossa linha completa de colchões Castor com tecnologia avançada para o seu melhor sono. 
          Produtos reais, preços atualizados e entrega em Cabo Frio.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterItem) => (
            <Button
              key={filterItem.id}
              variant={filter === filterItem.id ? "default" : "outline"}
              onClick={() => setFilter(filterItem.id)}
              className="flex items-center gap-2"
            >
              <filterItem.icon className="w-4 h-4" />
              {filterItem.label}
            </Button>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-full"
        >
          <Users className="w-6 h-6 text-primary" />
          <span className="font-semibold text-foreground">
            <span className="text-2xl text-primary">{happyCustomers}+</span> clientes satisfeitos
          </span>
          <TrendingUp className="w-6 h-6 text-green-500" />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-bold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </div>

            <div className="aspect-video bg-gradient-to-br from-secondary/20 to-muted/20 flex items-center justify-center p-4 relative overflow-hidden">
              <img
                src={product.image_url}
                alt={product.image_placeholder}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <Bed className="w-16 h-16 text-primary/30" />
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
                <span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
              </div>

              <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {product.shortDesc}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {product.features.slice(0, 2).map((feature, idx) => (
                  <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
                {product.features.length > 2 && (
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                    +{product.features.length - 2}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {product.sizes.map((size, idx) => (
                  <span key={idx} className="text-xs border border-border px-2 py-1 rounded bg-background">
                    {size}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs text-muted-foreground line-through">
                    R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  <div className="text-xl font-bold text-primary">
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => handleProductSelect(product)}
                className="w-full group-hover:bg-primary/90 transition-colors"
                size="sm"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Ver Detalhes
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <Package className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">Nenhum produto encontrado para este filtro.</p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { icon: Shield, title: "Garantia Oficial", desc: "Todos os produtos com garantia Castor" },
          { icon: Zap, title: "Entrega Rápida", desc: "Entrega em Cabo Frio em até 3 dias úteis" },
          { icon: Award, title: "Qualidade Premium", desc: "Tecnologia e conforto para seu melhor sono" }
        ].map((benefit, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-card border border-border rounded-2xl"
          >
            <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
            <p className="text-sm text-muted-foreground">{benefit.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProductGrid;