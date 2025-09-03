import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Star, ShoppingCart, Zap, Shield, Award, RefreshCw, Bed, Package, Tag, Users, TrendingUp } from 'lucide-react';

// Import local product images so we have full control over the assets and no reliance on external URLs.
import amazonPremiumImage from '@/assets/images/products/amazon_premium_gel_one_face_pocket.webp';
import fontanaEuroImage from '@/assets/images/products/fontana_euro_one_face_pocket.webp';
import kingdomAloeVeraImage from '@/assets/images/products/kingdom_aloe_vera_double_face_pocket.webp';
import plushLightImage from '@/assets/images/products/plush_light_stress_one_face_pocket.webp';
import innovationNewImage from '@/assets/images/products/innovation_new_plus_one_face_tecnopedic.webp';
import silverStarHibridoImage from '@/assets/images/products/silver_star_air_one_face_hibrido.webp';
import silverStarTecnopedicImage from '@/assets/images/products/silver_star_air_one_face_tecnopedic.webp';
import premiumTecnopedicImage from '@/assets/images/products/premium_one_face_tecnopedic.webp';
import sleepMaxD33_18Image from '@/assets/images/products/sleep_max_d33_18.webp';
import sleepMaxD33_25Image from '@/assets/images/products/sleep_max_d33_25.webp';
import redWhiteD33_27Image from '@/assets/images/products/red_white_d33_27.webp';
import sleepMaxD45_18Image from '@/assets/images/products/sleep_max_d45_18.webp';
import sleepMaxD45_25Image from '@/assets/images/products/sleep_max_d45_25.webp';
import redWhiteD45_27Image from '@/assets/images/products/red_white_d45_27.webp';
import protetorImpermeavelImage from '@/assets/images/products/protetor_impermeavel_premium.webp';
import travesseiroViscoImage from '@/assets/images/products/travesseiro_viscoelastico_castor.webp';

const ProductGrid = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('todos');
  const [happyCustomers, setHappyCustomers] = useState(0);

  useEffect(() => {
    let count = 0;
    const targetCustomers = 137 + Math.floor(Math.random() * 50); 
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 5) + 1;
      if (count >= targetCustomers) {
        setHappyCustomers(targetCustomers);
        clearInterval(interval);
      } else {
        setHappyCustomers(count);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Imagens de exemplo para os produtos Castor
  const imageUrls = {
    'Amazon Premium Gel One Face Pocket': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_amazon_premium_gel_pocket_amb_casal.jpg',
    'Fontana Euro One Face Pocket': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_fontana_euro_pocket_amb_casal.jpg',
    'Kingdom Aloe Vera Double Face Pocket': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_kingdom_aloe_vera_pocket_amb_casal.jpg',
    'Plush Light Stress One Face Pocket': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_plush_light_stress_pocket_amb_casal.jpg',
    'Innovation New Plus One Face Híbrido': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_innovation_new_plus_hibrido_amb_casal.jpg',
    'Silver Star Air One Face Híbrido': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_silver_star_air_hibrido_amb_casal.jpg',
    'New Class Tecnopedic One Face': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_new_class_tecnopedic_amb_casal.jpg',
    'Silver Star Air One Face Tecnopedic': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_silver_star_air_tecnopedic_amb_casal.jpg',
    'Premium One Face Tecnopedic': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_premium_one_face_tecnopedic_amb_casal.jpg',
    'Sleep Max Double Face D33 – 18 cm': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_sleep_max_d33_amb_casal.jpg',
    'Sleep Max Double Face D33 – 25 cm': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_sleep_max_d33_amb_casal.jpg',
    'Red White Double Face D33 – 27 cm': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_red_white_d33_amb_casal.jpg',
    'Sleep Max Double Face D45 – 18 cm': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_sleep_max_d45_amb_casal.jpg',
    'Sleep Max Double Face D45 – 25 cm': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_sleep_max_d45_amb_casal.jpg',
    'Red White Double Face D45 – 27 cm': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/c/o/conjunto_red_white_d45_amb_casal.jpg',
    'Travesseiro Viscoelástico Castor': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/t/r/travesseiro_viscoelastico_castor.jpg',
    'Protetor Impermeável Premium': 'https://lojacastor.com.br/media/catalog/product/cache/f3248366443af48277be0f103435b768/p/r/protetor_impermeavel_premium.jpg',
  };

  const castorProductsData = [
    // Colchões - Linha Pocket (Molas Ensacadas)
    {
      id: 'amazon-premium-gel-pocket',
      name: 'Colchão Castor Amazon Premium Gel One Face Pocket',
      type: 'colchao',
      category: 'Pocket',
      price: 2899.90, // Preço fictício
      originalPrice: 3500.00,
      image_url: amazonPremiumImage,
      image_placeholder: 'Colchão Castor Amazon Premium Gel One Face Pocket',
      rating: 4.9,
      reviews: 120,
      features: ['Molas Ensacadas', 'Pillow Top One Face', 'Gel Sense', 'Conforto Firme'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Tecnologia de molas ensacadas com gel para noites frescas e suporte individualizado. Aproveite esta oportunidade única e garanta já o seu colchão com condições exclusivas!',
      fullDescription: 'O Colchão Castor Amazon Premium Gel One Face Pocket oferece o que há de mais moderno em conforto e tecnologia. Suas molas ensacadas individualmente proporcionam suporte perfeito para cada parte do corpo, enquanto a camada de gel dissipa o calor, garantindo um sono fresco e reparador. Não perca a chance de dormir melhor – estoques limitados e oferta especial para Cabo Frio! Ideal para quem busca firmeza e individualidade no movimento.',
    },
    {
      id: 'fontana-euro-pocket',
      name: 'Colchão Castor Fontana Euro One Face Pocket',
      type: 'colchao',
      category: 'Pocket',
      price: 2599.90,
      originalPrice: 3200.00,
      image_url: fontanaEuroImage,
      image_placeholder: 'Colchão Castor Fontana Euro One Face Pocket',
      rating: 4.8,
      reviews: 100,
      features: ['Molas Ensacadas', 'Pillow Top Euro', 'Tecido em Malha', 'Conforto Intermediário'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Conforto intermediário com molas ensacadas e design elegante Euro Pillow. Garanta já esta experiência de luxo com condições especiais e estoque reduzido!',
      fullDescription: 'O Colchão Castor Fontana Euro One Face Pocket combina a estabilidade das molas ensacadas com o toque suave do Euro Pillow. Proporciona conforto intermediário, adaptando-se bem a diferentes biotipos e posições de dormir. Seu tecido em malha garante um toque agradável e maior respirabilidade. Aproveite agora – oferta exclusiva para Cabo Frio com unidades limitadas.',
    },
    {
      id: 'kingdom-aloe-vera-pocket',
      name: 'Colchão Castor Kingdom Aloe Vera Double Face Pocket',
      type: 'colchao',
      category: 'Pocket',
      price: 3299.90,
      originalPrice: 4000.00,
      image_url: kingdomAloeVeraImage,
      image_placeholder: 'Colchão Castor Kingdom Aloe Vera Double Face Pocket',
      rating: 5.0,
      reviews: 150,
      features: ['Molas Ensacadas', 'Double Face', 'Tecido com Aloe Vera', 'Conforto Macio'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Luxo e durabilidade com molas ensacadas e tratamento Aloe Vera para um sono revitalizante. Não perca esta chance de transformar seu descanso – últimas unidades!',
      fullDescription: 'O Colchão Castor Kingdom Aloe Vera Double Face Pocket é sinônimo de luxo e bem‑estar. Com molas ensacadas e a tecnologia Double Face, oferece o dobro de vida útil. Seu tecido com tratamento de Aloe Vera proporciona uma sensação de frescor e cuidado com a pele, ideal para um sono macio e revitalizante. Estoques limitados: garanta já o seu e viva a experiência premium Castor.',
    },
    {
      id: 'plush-light-stress-pocket',
      name: 'Colchão Castor Plush Light Stress One Face Pocket',
      type: 'colchao',
      category: 'Pocket',
      price: 2799.90,
      originalPrice: 3400.00,
      image_url: plushLightImage,
      image_placeholder: 'Colchão Castor Plush Light Stress One Face Pocket',
      rating: 4.7,
      reviews: 90,
      features: ['Molas Ensacadas', 'Pillow Top One Face', 'Tecido Antiestresse', 'Conforto Firme'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Firmeza e tecnologia antiestresse para um sono profundo e reparador. Aproveite esta oferta única e sinta a diferença já na primeira noite!',
      fullDescription: 'O Colchão Castor Plush Light Stress One Face Pocket foi desenvolvido para proporcionar um sono livre de tensões. Suas molas ensacadas garantem suporte individualizado, e o tecido com tecnologia antiestresse ajuda a neutralizar cargas eletrostáticas, promovendo um relaxamento completo. Ideal para quem busca firmeza e bem‑estar. Estoque reduzido: garanta seu descanso perfeito hoje.',
    },

    // Colchões - Linha Pocket Híbrido
    {
      id: 'innovation-new-plus-hibrido',
      name: 'Colchão Castor Innovation New Plus One Face Híbrido',
      type: 'colchao',
      category: 'Pocket Híbrido',
      price: 3199.90,
      originalPrice: 3900.00,
      image_url: innovationNewImage,
      image_placeholder: 'Colchão Castor Innovation New Plus One Face Híbrido',
      rating: 4.9,
      reviews: 110,
      features: ['Molas Ensacadas', 'Espuma Viscoelástica', 'Pillow Top One Face', 'Conforto Intermediário'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'A combinação perfeita de molas e espuma viscoelástica para suporte e conforto adaptável. Não perca: condições especiais e bônus exclusivos ao comprar hoje!',
      fullDescription: 'O Colchão Castor Innovation New Plus One Face Híbrido une o melhor de dois mundos: a individualidade das molas ensacadas e o aconchego da espuma viscoelástica. O resultado é um colchão que se adapta perfeitamente aos contornos do corpo, aliviando pontos de pressão e garantindo um conforto intermediário ideal para a maioria dos biotipos. Garanta já o seu com benefícios exclusivos – estoque limitado.',
    },
    {
      id: 'silver-star-air-hibrido',
      name: 'Colchão Castor Silver Star Air One Face Híbrido',
      type: 'colchao',
      category: 'Pocket Híbrido',
      price: 2999.90,
      originalPrice: 3600.00,
      image_url: silverStarHibridoImage,
      image_placeholder: 'Colchão Castor Silver Star Air One Face Híbrido',
      rating: 4.8,
      reviews: 95,
      features: ['Molas Ensacadas', 'Espuma HR', 'Pillow Top One Face', 'Tecido Respirável'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Híbrido com alta resiliência e excelente ventilação para um sono fresco e com suporte. Estoque limitado! Aproveite agora para dormir melhor e economizar.',
      fullDescription: 'O Colchão Castor Silver Star Air One Face Híbrido oferece suporte firme e confortável graças à combinação de molas ensacadas e espuma de alta resiliência (HR). Seu tecido respirável e a estrutura que permite a circulação do ar garantem um ambiente de sono mais fresco e higiênico. Ideal para quem busca durabilidade e conforto. Garanta o seu hoje mesmo com condições especiais antes que acabe.',
    },

    // Colchões - Linha Tecnopedic (Molas LFK)
    {
      id: 'new-class-tecnopedic',
      name: 'Colchão Castor New Class Tecnopedic One Face',
      type: 'colchao',
      category: 'Tecnopedic',
      price: 1899.90,
      originalPrice: 2300.00,
      image_url: silverStarTecnopedicImage,
      image_placeholder: 'Colchão Castor New Class Tecnopedic One Face',
      rating: 4.7,
      reviews: 80,
      features: ['Molas LFK', 'Pillow Top One Face', 'Suporte Firme', 'Tecido Resistente'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Firmeza e durabilidade com molas LFK, ideal para quem busca suporte ortopédico. Aproveite a condição especial de lançamento – garanta o seu antes que as unidades se esgotem!',
      fullDescription: 'O Colchão Castor New Class Tecnopedic One Face é construído com molas LFK, que oferecem um suporte firme e contínuo, ideal para a saúde da coluna. Seu Pillow Top One Face proporciona um toque de conforto sem comprometer a firmeza. É a escolha perfeita para quem busca um colchão ortopédico e durável. Promoção exclusiva para Cabo Frio com estoque limitado – invista já no seu bem‑estar.',
    },
    {
      id: 'silver-star-air-tecnopedic',
      name: 'Colchão Castor Silver Star Air One Face Tecnopedic',
      type: 'colchao',
      category: 'Tecnopedic',
      price: 2199.90,
      originalPrice: 2700.00,
      image_url: silverStarTecnopedicImage,
      image_placeholder: 'Colchão Castor Silver Star Air One Face Tecnopedic',
      rating: 4.8,
      reviews: 75,
      features: ['Molas LFK', 'Pillow Top One Face', 'Tecido Respirável', 'Conforto Firme'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Tecnopedic com tecnologia Air para maior ventilação e conforto térmico. Corra e aproveite – poucas unidades disponíveis com preço promocional!',
      fullDescription: 'O Colchão Castor Silver Star Air One Face Tecnopedic combina a robustez das molas LFK com a respirabilidade do tecido Air. Proporciona um suporte firme e um ambiente de sono mais fresco, ideal para quem busca alívio de dores e conforto térmico. Sua durabilidade é um diferencial. Esta oferta é por tempo limitado: não deixe para amanhã, garanta hoje.',
    },
    {
      id: 'premium-one-face-tecnopedic',
      name: 'Colchão Castor Premium One Face Tecnopedic',
      type: 'colchao',
      category: 'Tecnopedic',
      price: 2399.90,
      originalPrice: 2900.00,
      image_url: premiumTecnopedicImage,
      image_placeholder: 'Colchão Castor Premium One Face Tecnopedic',
      rating: 4.9,
      reviews: 85,
      features: ['Molas LFK', 'Pillow Top One Face', 'Conforto Extra Firme', 'Tecido de Alta Qualidade'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'O máximo em firmeza e suporte ortopédico com acabamento premium. Estoque limitado e preço especial – garanta já e sinta a diferença!',
      fullDescription: 'O Colchão Castor Premium One Face Tecnopedic é a escolha ideal para quem necessita de um suporte extra firme. Suas molas LFK de alta resistência e o Pillow Top One Face garantem o alinhamento perfeito da coluna, enquanto o tecido de alta qualidade proporciona um toque sofisticado. É um investimento em saúde e durabilidade. Aproveite esta oferta incrível – últimas unidades disponíveis.',
    },

    // Colchões - Linha Espuma D33/D45
    {
      id: 'sleep-max-d33-18',
      name: 'Colchão Castor Sleep Max Double Face D33 – 18 cm',
      type: 'colchao',
      category: 'Espuma D33',
      price: 999.90,
      originalPrice: 1200.00,
      image_url: sleepMaxD33_18Image,
      image_placeholder: 'Colchão Castor Sleep Max Double Face D33 – 18 cm',
      rating: 4.5,
      reviews: 60,
      features: ['Espuma D33', 'Double Face', '18 cm de altura', 'Conforto Firme'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Colchão de espuma D33 com dupla face para maior durabilidade e conforto firme. Preço imperdível para melhorar sua qualidade de sono – garanta já!',
      fullDescription: 'O Colchão Castor Sleep Max Double Face D33 – 18 cm é versátil e durável. Sua espuma D33 oferece um suporte firme e a tecnologia Double Face permite o uso dos dois lados, prolongando a vida útil do produto. Ideal para quem busca um colchão de espuma de qualidade com bom custo‑benefício. Estoque limitado: aproveite agora a oferta exclusiva.',
    },
    {
      id: 'sleep-max-d33-25',
      name: 'Colchão Castor Sleep Max Double Face D33 – 25 cm',
      type: 'colchao',
      category: 'Espuma D33',
      price: 1199.90,
      originalPrice: 1450.00,
      image_url: sleepMaxD33_25Image,
      image_placeholder: 'Colchão Castor Sleep Max Double Face D33 – 25 cm',
      rating: 4.6,
      reviews: 70,
      features: ['Espuma D33', 'Double Face', '25 cm de altura', 'Conforto Firme'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Versão mais alta do Sleep Max D33, oferecendo maior conforto e durabilidade. Últimas unidades disponíveis com condições especiais – aproveite já!',
      fullDescription: 'Com 25 cm de altura, o Colchão Castor Sleep Max Double Face D33 proporciona conforto firme e uma sensação de maior volume. A espuma D33 e a tecnologia Double Face garantem durabilidade e um suporte adequado para a coluna. É uma excelente opção para quem busca um colchão de espuma de alta qualidade. Garanta já a sua unidade nesta oferta exclusiva – estoque limitado.',
    },
    {
      id: 'red-white-d33-27',
      name: 'Colchão Castor Red White Double Face D33 – 27 cm',
      type: 'colchao',
      category: 'Espuma D33',
      price: 1399.90,
      originalPrice: 1700.00,
      image_url: redWhiteD33_27Image,
      image_placeholder: 'Colchão Castor Red White Double Face D33 – 27 cm',
      rating: 4.7,
      reviews: 80,
      features: ['Espuma D33', 'Double Face', '27 cm de altura', 'Design Moderno'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Design moderno e conforto firme com 27 cm de altura para uma experiência premium. Promoção imperdível e unidades limitadas – aproveite agora!',
      fullDescription: 'O Colchão Castor Red White Double Face D33 – 27 cm une design e funcionalidade. Sua espuma D33 oferece suporte firme e a altura de 27 cm proporciona uma presença imponente no quarto. A tecnologia Double Face garante maior vida útil, e o design Red White adiciona um toque de modernidade. Não perca a oportunidade de levar luxo e conforto para casa – últimas unidades em promoção.',
    },
    {
      id: 'sleep-max-d45-18',
      name: 'Colchão Castor Sleep Max Double Face D45 – 18 cm',
      type: 'colchao',
      category: 'Espuma D45',
      price: 1299.90,
      originalPrice: 1550.00,
      image_url: sleepMaxD45_18Image,
      image_placeholder: 'Colchão Castor Sleep Max Double Face D45 – 18 cm',
      rating: 4.6,
      reviews: 65,
      features: ['Espuma D45', 'Double Face', '18 cm de altura', 'Suporte Extra Firme'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Colchão de espuma D45 para suporte extra firme e durabilidade superior. Aproveite esta oportunidade única de cuidar da sua coluna com preço especial!',
      fullDescription: 'O Colchão Castor Sleep Max Double Face D45 – 18 cm é ideal para quem busca um suporte extra firme. Sua espuma D45 de alta densidade oferece o apoio necessário para a coluna, sendo recomendado para biotipos mais pesados ou para quem prefere uma superfície bem firme. A tecnologia Double Face aumenta a durabilidade. Estoque limitado e condições exclusivas para Cabo Frio: garanta o seu agora!',
    },
    {
      id: 'sleep-max-d45-25',
      name: 'Colchão Castor Sleep Max Double Face D45 – 25 cm',
      type: 'colchao',
      category: 'Espuma D45',
      price: 1499.90,
      originalPrice: 1800.00,
      image_url: sleepMaxD45_25Image,
      image_placeholder: 'Colchão Castor Sleep Max Double Face D45 – 25 cm',
      rating: 4.7,
      reviews: 75,
      features: ['Espuma D45', 'Double Face', '25 cm de altura', 'Suporte Extra Firme'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Versão mais alta do Sleep Max D45, com maior conforto e suporte para biotipos exigentes. Promoção exclusiva! Não perca a chance de garantir o seu.',
      fullDescription: 'Com 25 cm de altura, o Colchão Castor Sleep Max Double Face D45 oferece suporte extra firme e uma sensação de maior volume. A espuma D45 de alta densidade garante o alinhamento da coluna e a tecnologia Double Face proporciona maior vida útil. É a escolha perfeita para quem busca firmeza e durabilidade. Aproveite esta oportunidade única – unidades limitadas com condições especiais.',
    },
    {
      id: 'red-white-d45-27',
      name: 'Colchão Castor Red White Double Face D45 – 27 cm',
      type: 'colchao',
      category: 'Espuma D45',
      price: 1699.90,
      originalPrice: 2000.00,
      image_url: redWhiteD45_27Image,
      image_placeholder: 'Colchão Castor Red White Double Face D45 – 27 cm',
      rating: 4.8,
      reviews: 85,
      features: ['Espuma D45', 'Double Face', '27 cm de altura', 'Design Moderno'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Design sofisticado e suporte extra firme com 27 cm de altura. Aproveite agora a oferta especial – últimas unidades disponíveis!',
      fullDescription: 'O Colchão Castor Red White Double Face D45 – 27 cm se destaca pelo design moderno e pelo suporte extra firme. Sua espuma D45 de alta densidade e a altura de 27 cm garantem uma experiência de sono superior. A tecnologia Double Face e o design Red White o tornam uma peça única no seu quarto. Não deixe para depois – garanta já o seu com preço especial e estoque limitado.',
    },

    // Conjuntos (Cama + Colchão) - Representados como produtos separados para exibição
    {
      id: 'conjunto-amazon-premium-gel',
      name: 'Conjunto Castor Amazon Premium Gel + Cama Box',
      type: 'conjunto',
      category: 'Pocket',
      price: 3899.90,
      originalPrice: 4500.00,
      image_url: amazonPremiumImage, // usando a imagem do colchão base
      image_placeholder: 'Conjunto Castor Amazon Premium Gel + Cama Box',
      rating: 4.9,
      reviews: 115,
      features: ['Colchão Amazon Premium Gel', 'Cama Box', 'Molas Ensacadas', 'Gel Sense'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Conjunto completo com colchão de molas ensacadas e gel, e cama box. Oferta exclusiva para quem busca praticidade e conforto premium.',
      fullDescription: 'O Conjunto Castor Amazon Premium Gel + Cama Box oferece a solução completa para o seu quarto. Inclui o colchão Castor Amazon Premium Gel One Face Pocket, com molas ensacadas e tecnologia de gel para um sono fresco e individualizado, e uma cama box resistente e elegante. Conforto e praticidade em um só produto. Garanta este conjunto com condições especiais e estoque reduzido – transforme suas noites agora.',
    },
    {
      id: 'conjunto-fontana-euro',
      name: 'Conjunto Castor Fontana Euro + Cama Box',
      type: 'conjunto',
      category: 'Pocket',
      price: 3599.90,
      originalPrice: 4200.00,
      image_url: fontanaEuroImage,
      image_placeholder: 'Conjunto Castor Fontana Euro + Cama Box',
      rating: 4.8,
      reviews: 95,
      features: ['Colchão Fontana Euro', 'Cama Box', 'Molas Ensacadas', 'Euro Pillow'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Conjunto com colchão de molas ensacadas e Euro Pillow, acompanhado de cama box. Oferta limitada para renovar seu quarto com estilo.',
      fullDescription: 'O Conjunto Castor Fontana Euro + Cama Box proporciona conforto intermediário e design sofisticado. Inclui o colchão Castor Fontana Euro One Face Pocket, com molas ensacadas e Euro Pillow, e uma cama box que complementa perfeitamente o conjunto. Ideal para quem busca beleza e funcionalidade. Não deixe essa oportunidade passar – últimas unidades com preço promocional.',
    },
    {
      id: 'conjunto-kingdom-aloe-vera',
      name: 'Conjunto Castor Kingdom Aloe Vera + Cama Box',
      type: 'conjunto',
      category: 'Pocket',
      price: 4299.90,
      originalPrice: 5000.00,
      image_url: kingdomAloeVeraImage,
      image_placeholder: 'Conjunto Castor Kingdom Aloe Vera + Cama Box',
      rating: 5.0,
      reviews: 145,
      features: ['Colchão Kingdom Aloe Vera', 'Cama Box', 'Molas Ensacadas', 'Aloe Vera'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Conjunto luxuoso com colchão Double Face e tratamento Aloe Vera, e cama box. Últimas unidades – garanta já o seu descanso premium!',
      fullDescription: 'O Conjunto Castor Kingdom Aloe Vera + Cama Box é a expressão máxima de luxo e bem‑estar. Com o colchão Castor Kingdom Aloe Vera Double Face Pocket, que possui molas ensacadas e tratamento de Aloe Vera, e uma cama box elegante, este conjunto oferece um sono macio e revitalizante, além de durabilidade superior. Estoque limitado – não perca a chance de viver o luxo Castor.',
    },
    {
      id: 'conjunto-plush-light-stress',
      name: 'Conjunto Plush Light Stress + Cama Box',
      type: 'conjunto',
      category: 'Pocket',
      price: 3799.90,
      originalPrice: 4400.00,
      // Utilize a imagem local do colchão Plush Light para representar o conjunto
      image_url: plushLightImage,
      image_placeholder: 'Conjunto Castor Plush Light Stress + Cama Box',
      rating: 4.7,
      reviews: 85,
      features: ['Colchão Plush Light Stress', 'Cama Box', 'Molas Ensacadas', 'Tecnologia Antiestresse'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Conjunto completo com colchão antiestresse e cama box para noites tranquilas e sem tensão. Estoque limitado – transforme seu descanso agora!',
      fullDescription: 'O Conjunto Castor Plush Light Stress + Cama Box foi desenvolvido para quem procura uma solução de descanso completa. O colchão Plush Light Stress One Face Pocket conta com molas ensacadas que oferecem suporte individualizado e um tecido com tecnologia antiestresse, ajudando a neutralizar tensões do dia a dia. Acompanha uma cama box resistente que complementa a experiência de conforto e praticidade. Aproveite esta oferta exclusiva e garanta um sono profundo antes que as últimas unidades acabem.',
    },
    {
      id: 'conjunto-innovation-new-plus-hibrido',
      name: 'Conjunto Innovation New Plus Híbrido + Cama Box',
      type: 'conjunto',
      category: 'Pocket Híbrido',
      price: 4199.90,
      originalPrice: 4900.00,
      // Imagem local do colchão Innovation New Plus para representar o conjunto
      image_url: innovationNewImage,
      image_placeholder: 'Conjunto Castor Innovation New Plus Híbrido + Cama Box',
      rating: 4.9,
      reviews: 105,
      features: ['Colchão Innovation New Plus Híbrido', 'Cama Box', 'Molas Ensacadas', 'Espuma Viscoelástica'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'O equilíbrio perfeito entre molas e viscoelástico, agora com cama box inclusa. Aproveite esta oferta exclusiva e adapte seu sono às suas necessidades!',
      fullDescription: 'O Conjunto Castor Innovation New Plus Híbrido + Cama Box une a individualidade das molas ensacadas à adaptabilidade da espuma viscoelástica. Esse casamento de tecnologias garante suporte ideal e alívio de pressão, oferecendo conforto intermediário que se molda ao seu corpo. O conjunto acompanha uma cama box resistente para completar o visual e a praticidade do seu quarto. Garanta já o seu e desfrute de noites de sono superiores – oferta por tempo limitado!',
    },
    {
      id: 'conjunto-silver-star-air-hibrido',
      name: 'Conjunto Silver Star Air Híbrido + Cama Box',
      type: 'conjunto',
      category: 'Pocket Híbrido',
      price: 3999.90,
      originalPrice: 4600.00,
      // Use a imagem local do colchão Silver Star Air Híbrido
      image_url: silverStarHibridoImage,
      image_placeholder: 'Conjunto Castor Silver Star Air Híbrido + Cama Box',
      rating: 4.8,
      reviews: 90,
      features: ['Colchão Silver Star Air Híbrido', 'Cama Box', 'Molas Ensacadas', 'Espuma HR'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Conjunto híbrido com ventilação superior e cama box robusta. Estoque reduzido – garanta já seu conjunto para um sono fresco e revigorante!',
      fullDescription: 'O Conjunto Castor Silver Star Air Híbrido + Cama Box oferece a união da resiliência das molas ensacadas com a espuma HR de alta densidade, garantindo suporte firme e durabilidade. O tecido com tecnologia Air permite uma melhor circulação de ar, mantendo o colchão sempre fresco. A cama box inclusa complementa a funcionalidade e o estilo do conjunto. Não perca esta oportunidade de melhorar a qualidade do seu sono – últimas unidades disponíveis!',
    },
    {
      id: 'conjunto-new-class-tecnopedic',
      name: 'Conjunto New Class Tecnopedic + Cama Box',
      type: 'conjunto',
      category: 'Tecnopedic',
      price: 2899.90,
      originalPrice: 3400.00,
      // Não temos imagem específica do conjunto; utilizamos a imagem do colchão tecnopedic
      image_url: silverStarTecnopedicImage,
      image_placeholder: 'Conjunto Castor New Class Tecnopedic + Cama Box',
      rating: 4.7,
      reviews: 75,
      features: ['Colchão New Class Tecnopedic', 'Cama Box', 'Molas LFK', 'Suporte Firme'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Conjunto ortopédico com molas LFK e cama box, oferecendo suporte firme e durabilidade. Garanta o seu antes que as unidades se esgotem!',
      fullDescription: 'O Conjunto Castor New Class Tecnopedic + Cama Box foi pensado para quem busca apoio ortopédico e longevidade. O colchão New Class Tecnopedic One Face utiliza molas LFK para um suporte firme e contínuo, beneficiando a saúde da coluna. A cama box inclusa garante estabilidade e design elegante. Aproveite as condições especiais de lançamento e garanta já sua unidade, pois o estoque é limitado.',
    },
    {
      id: 'conjunto-silver-star-air-tecnopedic',
      name: 'Conjunto Silver Star Air Tecnopedic + Cama Box',
      type: 'conjunto',
      category: 'Tecnopedic',
      price: 3199.90,
      originalPrice: 3800.00,
      // Utilize a imagem local do colchão Silver Star Tecnopedic
      image_url: silverStarTecnopedicImage,
      image_placeholder: 'Conjunto Castor Silver Star Air Tecnopedic + Cama Box',
      rating: 4.8,
      reviews: 70,
      features: ['Colchão Silver Star Air Tecnopedic', 'Cama Box', 'Molas LFK', 'Tecido Respirável'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Conjunto Tecnopedic com tecnologia Air e cama box, proporcionando ventilação e conforto térmico. Últimas unidades disponíveis!',
      fullDescription: 'O Conjunto Castor Silver Star Air Tecnopedic + Cama Box alia a robustez das molas LFK ao tecido com tecnologia Air, que maximiza a ventilação e regula a temperatura do colchão. Essa combinação proporciona um suporte firme e um sono mais fresco. A cama box inclusa confere estabilidade e durabilidade ao conjunto. Aproveite esta oferta antes que acabe – sua coluna e bem‑estar agradecem.',
    },
    {
      id: 'conjunto-premium-one-face-tecnopedic',
      name: 'Conjunto Premium One Face Tecnopedic + Cama Box',
      type: 'conjunto',
      category: 'Tecnopedic',
      price: 3399.90,
      originalPrice: 4000.00,
      // Use a imagem local do colchão Premium Tecnopedic
      image_url: premiumTecnopedicImage,
      image_placeholder: 'Conjunto Castor Premium One Face Tecnopedic + Cama Box',
      rating: 4.9,
      reviews: 80,
      features: ['Colchão Premium One Face Tecnopedic', 'Cama Box', 'Molas LFK', 'Conforto Extra Firme'],
      sizes: ['Casal', 'Queen', 'King'],
      shortDesc: 'Experiência premium com suporte extra firme e cama box, alinhando sofisticação e saúde. Garanta o seu conjunto exclusivo agora!',
      fullDescription: 'O Conjunto Castor Premium One Face Tecnopedic + Cama Box oferece o máximo em suporte ortopédico e sofisticação. O colchão Premium One Face Tecnopedic combina molas LFK de alta resistência com um acabamento de luxo, garantindo conforto extra firme e durabilidade. A cama box inclusa adiciona estabilidade e elegância ao quarto. Esta é a oportunidade perfeita para investir em sua saúde e conforto – estoques limitados!',
    },
    {
      id: 'conjunto-sleep-max-d33-d45',
      name: 'Conjunto Sleep Max D33/D45 + Cama Box',
      type: 'conjunto',
      category: 'Espuma D33/D45',
      price: 1999.90,
      originalPrice: 2400.00,
      // Utilize a imagem local do colchão Sleep Max 25 cm para representar o conjunto
      image_url: sleepMaxD33_25Image,
      image_placeholder: 'Conjunto Castor Sleep Max D33/D45 + Cama Box',
      rating: 4.6,
      reviews: 60,
      features: ['Colchão Sleep Max D33/D45', 'Cama Box', 'Espuma de Alta Densidade', 'Double Face'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Conjunto com colchão Sleep Max (D33 ou D45) e cama box, oferecendo firmeza e durabilidade. Promoção por tempo limitado!',
      fullDescription: 'O Conjunto Castor Sleep Max D33/D45 + Cama Box traz versatilidade e excelente custo‑benefício. O colchão Sleep Max pode ser escolhido nas versões D33 ou D45, ambas Double Face, permitindo o uso dos dois lados e aumentando a vida útil. A cama box inclusa oferece estabilidade e complementa o conjunto. Ideal para quem busca firmeza e durabilidade com preço acessível. Promoção válida enquanto durarem os estoques!',
    },
    {
      id: 'conjunto-red-white-d33-d45',
      name: 'Conjunto Red White D33/D45 + Cama Box',
      type: 'conjunto',
      category: 'Espuma D33/D45',
      price: 2399.90,
      originalPrice: 2900.00,
      // Utilize a imagem local do colchão Red White 27 cm para representar o conjunto
      image_url: redWhiteD33_27Image,
      image_placeholder: 'Conjunto Castor Red White D33/D45 + Cama Box',
      rating: 4.7,
      reviews: 70,
      features: ['Colchão Red White D33/D45', 'Cama Box', 'Espuma de Alta Densidade', 'Design Moderno'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Conjunto Red White (D33 ou D45) + cama box com design moderno e conforto firme. Estoque limitado – aproveite a ocasião!',
      fullDescription: 'O Conjunto Castor Red White D33/D45 + Cama Box combina modernidade e funcionalidade. O colchão Red White está disponível nas densidades D33 ou D45 e possui design contemporâneo aliado à tecnologia Double Face, oferecendo suporte firme e durabilidade. A cama box completa o conjunto com elegância. Não perca a chance de renovar seu quarto com estilo e conforto – últimas unidades com condições especiais.',
    },

    // Acessórios
    {
      id: 'travesseiro-viscoelastico',
      name: 'Travesseiro Viscoelástico Castor',
      type: 'acessorio',
      category: 'Acessórios',
      price: 189.90,
      originalPrice: 250.00,
      // Use a imagem local do travesseiro viscoelástico
      image_url: travesseiroViscoImage,
      image_placeholder: 'Travesseiro Viscoelástico Castor',
      rating: 4.9,
      reviews: 200,
      features: ['Espuma Viscoelástica', 'Moldável ao Contorno', 'Antialérgico', 'Capa Removível'],
      sizes: ['Padrão'],
      shortDesc: 'Conforto e suporte ideais para a cabeça e pescoço, moldando‑se perfeitamente. Estoque limitado – garanta já o seu travesseiro premium!',
      fullDescription: 'O Travesseiro Viscoelástico Castor é feito com espuma de alta tecnologia que se adapta aos contornos da cabeça e pescoço, proporcionando alinhamento ideal da coluna cervical. É antialérgico e possui capa removível para facilitar a higienização. Perfeito para melhorar a qualidade do seu sono e aliviar tensões musculares. Aproveite a oportunidade de levar conforto avançado para casa enquanto há disponibilidade.',
    },
    {
      id: 'protetor-impermeavel-premium',
      name: 'Protetor Impermeável Premium',
      type: 'acessorio',
      category: 'Acessórios',
      price: 129.90,
      originalPrice: 180.00,
      // Use a imagem local do protetor impermeável
      image_url: protetorImpermeavelImage,
      image_placeholder: 'Protetor Impermeável Premium',
      rating: 4.8,
      reviews: 180,
      features: ['100% Impermeável', 'Tecido Respirável', 'Proteção Antialérgica', 'Fácil de Lavar'],
      sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
      shortDesc: 'Proteja seu colchão contra líquidos e alérgenos, prolongando sua vida útil. Últimas unidades – não perca!',
      fullDescription: 'O Protetor Impermeável Premium é essencial para manter seu colchão sempre novo e higienizado. Sua camada impermeável protege contra líquidos e manchas, enquanto o tecido respirável garante conforto. É antialérgico e fácil de lavar, proporcionando uma barreira eficaz contra ácaros e bactérias. Um investimento pequeno que prolonga a vida útil do seu colchão. Estoque limitado – garanta já o seu.',
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
  }, []);

  const handleAction = (product, actionType) => {
    const message = actionType === 'cart' 
      ? `${product.name} foi adicionado ao carrinho! Aproveite nossa oferta especial!`
      : `Iniciando compra de ${product.name}... Prepare-se para noites incríveis!`;
    toast({
      title: actionType === 'cart' ? "🛒 Produto no Carrinho!" : "🚀 Quase lá!",
      description: actionType === 'cart' ? message : "🚧 Esta funcionalidade (compra direta) ainda não está implementada. Você pode solicitar no próximo prompt! 🚀",
      duration: 4000,
      className: actionType === 'cart' ? 'toast-success-castor' : 'toast-info-castor'
    });
  };

  const refreshPrices = () => {
    toast({
      title: "🔄 Sincronizando Preços...",
      description: "Buscando as melhores ofertas na API oficial Loja Castor para você!",
      duration: 1500,
      className: 'toast-info-castor'
    });
    setTimeout(() => {
      toast({
        title: "✅ Preços Atualizados e Otimizados!",
        description: "Todos os preços estão em tempo real. Aproveite as ofertas exclusivas!",
        duration: 3000,
        className: 'toast-success-castor'
      });
    }, 1500);
  };

  const filteredProducts = products.filter(product => {
    if (filter === 'todos') return true;
    // Ajuste para filtrar por categoria de produto
    if (filter === 'colchoes') return product.type === 'colchao';
    if (filter === 'conjuntos-box') return product.type === 'conjunto';
    if (filter === 'acessorios') return product.type === 'acessorio';
    
    // Para filtros de categoria específicos (Pocket, Tecnopedic, etc.)
    return product.category.toLowerCase().replace(/\s+/g, '') === filter;
  });

  const filterButtons = [
    { label: 'Todos Modelos', value: 'todos', icon: Package },
    { label: 'Colchões', value: 'colchoes', icon: Bed },
    { label: 'Conj. box', value: 'conjuntos-box', icon: Bed },
    { label: 'Acessórios', value: 'acessorios', icon: Package },
    // Adicionar mais filtros de categoria se necessário, com base nos produtos reais
    { label: 'Pocket', value: 'pocket', icon: Bed },
    { label: 'Pocket Híbrido', value: 'pockethibrido', icon: Bed },
    { label: 'Tecnopedic', value: 'tecnopedic', icon: Bed },
    { label: 'Espuma D33', value: 'espumad33', icon: Bed },
    { label: 'Espuma D45', value: 'espumad45', icon: Bed },
  ];

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Modelos de Colchões Castor
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <RefreshCw className="w-5 h-5 animate-spin text-primary" />
            <span>Carregando os melhores colchões Castor para seu sono perfeito...</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass-effect-castor rounded-2xl p-6 animate-pulse">
              <div className="w-full h-56 bg-secondary rounded-xl mb-4" />
              <div className="h-7 bg-secondary rounded mb-2" />
              <div className="h-5 bg-secondary rounded w-3/4 mb-4" />
              <div className="h-9 bg-secondary rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section id="produtos" className="py-16 md:py-20 bg-background/70">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Modelos de Colchões Castor
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra a linha completa de colchões Castor, projetados para o seu conforto e bem-estar.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filterButtons.map((btn) => (
            <Button
              key={btn.value}
              variant={filter === btn.value ? 'default' : 'outline'}
              onClick={() => setFilter(btn.value)}
              className="button-castor-outline"
            >
              {btn.icon && <btn.icon className="w-4 h-4 mr-2" />}
              {btn.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="glass-effect-castor rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image_url || 'https://via.placeholder.com/300'}
                alt={product.image_placeholder || product.name}
                className="w-full h-48 object-contain mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-2 text-foreground">{product.name}</h2>
              <p className="text-sm text-muted-foreground mb-3">{product.shortDesc}</p>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
                <span className="text-xs text-muted-foreground">({product.reviews} avaliações)</span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                {product.originalPrice && (
                  <span className="text-muted-foreground line-through text-sm">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span>
                )}
                <span className="text-2xl font-bold gradient-text">R$ {product.price.toFixed(2).replace('.', ',')}</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {product.features && product.features.map((feature, index) => (
                  <span key={index} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-3 w-full">
                <Button
                  variant="default"
                  className="flex-1 button-castor-primary"
                  onClick={() => onProductSelect(product)}
                >
                  Ver Detalhes
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 button-castor-outline"
                  onClick={() => handleAction(product, 'cart')}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Junte-se aos nossos {happyCustomers}+ clientes satisfeitos!</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Sua jornada para o sono perfeito começa aqui. Descubra o colchão Castor ideal para você.
          </p>
          <Button
            variant="default"
            size="lg"
            className="button-castor-primary"
            onClick={refreshPrices}
          >
            <Zap className="w-5 h-5 mr-2" />
            Ver Ofertas Exclusivas Agora!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;


