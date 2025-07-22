import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'amazon-prime-gel-pocket',
    name: 'Amazon Prime Gel Pocket®',
    description: 'Colchão premium com tecnologia Gel Pocket e sistema de molas ensacadas individuais. Oferece máximo conforto e regulação de temperatura para um sono reparador.',
    category: 'colchao',
    price: {
      from: 1200,
      to: 3500,
      currency: 'BRL'
    },
    features: [
      'Tecnologia Gel Pocket para regulação de temperatura',
      'Sistema de molas ensacadas individuais',
      'Espuma de alta densidade',
      'Tecido anti-ácaro e antibacteriano',
      'Bordas reforçadas',
      'Garantia de 10 anos'
    ],
    specifications: {
      'Altura': '30cm',
      'Densidade da Espuma': 'D33/D28',
      'Firmeza': 'Média/Firme',
      'Tamanhos Disponíveis': 'Solteiro, Casal, Queen, King',
      'Garantia': '10 anos'
    },
    images: ['/images/products/amazon-prime-gel-pocket-1.jpg'],
    inStock: true,
    featured: true,
    warranty: '10 anos'
  },
  {
    id: 'silver-star-air-pocket',
    name: 'Silver Star Air Pocket®',
    description: 'Colchão com sistema Air Pocket que proporciona máxima ventilação e conforto. Ideal para quem busca frescor durante o sono.',
    category: 'colchao',
    price: {
      from: 800,
      to: 2500,
      currency: 'BRL'
    },
    features: [
      'Sistema Air Pocket para ventilação',
      'Molas ensacadas independentes',
      'Tecido com tratamento Silver',
      'Anti-ácaro e antibacteriano',
      'Espuma de alta qualidade',
      'Garantia de 8 anos'
    ],
    specifications: {
      'Altura': '28cm',
      'Densidade da Espuma': 'D33',
      'Firmeza': 'Média',
      'Tamanhos Disponíveis': 'Solteiro, Casal, Queen, King',
      'Garantia': '8 anos'
    },
    images: ['/images/products/silver-star-air-pocket-1.jpg'],
    inStock: true,
    featured: true,
    warranty: '8 anos'
  },
  {
    id: 'kingdom-latex',
    name: 'Kingdom Látex',
    description: 'Colchão de látex natural premium com excelente adaptabilidade ao corpo e durabilidade superior. Perfeito para quem busca conforto natural.',
    category: 'colchao',
    price: {
      from: 1500,
      to: 4000,
      currency: 'BRL'
    },
    features: [
      'Látex natural premium',
      'Excelente adaptabilidade corporal',
      'Hipoalergênico',
      'Resistente a ácaros',
      'Durabilidade superior',
      'Garantia de 12 anos'
    ],
    specifications: {
      'Altura': '32cm',
      'Material': 'Látex Natural + Espuma D33',
      'Firmeza': 'Média/Macia',
      'Tamanhos Disponíveis': 'Solteiro, Casal, Queen, King',
      'Garantia': '12 anos'
    },
    images: ['/images/products/kingdom-latex-1.jpg'],
    inStock: true,
    featured: true,
    warranty: '12 anos'
  },
  {
    id: 'technopadic-hibrido-pocket',
    name: 'Technopadic Híbrido Pocket®',
    description: 'Colchão híbrido que combina espuma viscoelástica com molas ensacadas. Tecnologia avançada para máximo conforto e suporte.',
    category: 'colchao',
    price: {
      from: 1000,
      to: 2800,
      currency: 'BRL'
    },
    features: [
      'Sistema híbrido: Viscoelástico + Molas',
      'Molas ensacadas independentes',
      'Espuma com memória',
      'Alívio de pontos de pressão',
      'Tecido termorregulador',
      'Garantia de 8 anos'
    ],
    specifications: {
      'Altura': '29cm',
      'Densidade da Espuma': 'D50 Viscoelástica',
      'Firmeza': 'Média',
      'Tamanhos Disponíveis': 'Solteiro, Casal, Queen, King',
      'Garantia': '8 anos'
    },
    images: ['/images/products/technopadic-hibrido-1.jpg'],
    inStock: true,
    featured: false,
    warranty: '8 anos'
  },
  {
    id: 'travesseiro-viscosoft',
    name: 'Travesseiro ViscoSoft',
    description: 'Travesseiro de espuma viscoelástica que se adapta perfeitamente ao contorno da cabeça e pescoço.',
    category: 'travesseiro',
    price: {
      from: 150,
      to: 350,
      currency: 'BRL'
    },
    features: [
      'Espuma viscoelástica premium',
      'Adaptação ao contorno cervical',
      'Alívio de tensões',
      'Tecido removível e lavável',
      'Hipoalergênico',
      'Garantia de 3 anos'
    ],
    specifications: {
      'Altura': '12cm',
      'Material': 'Espuma Viscoelástica D50',
      'Tamanho': '50x70cm',
      'Garantia': '3 anos'
    },
    images: ['/images/products/travesseiro-viscosoft-1.jpg'],
    inStock: true,
    featured: false,
    warranty: '3 anos'
  },
  {
    id: 'protetor-impermeavel',
    name: 'Protetor Impermeável',
    description: 'Protetor de colchão impermeável que preserva a vida útil do seu colchão mantendo o conforto.',
    category: 'protetor',
    price: {
      from: 80,
      to: 200,
      currency: 'BRL'
    },
    features: [
      'Impermeável e respirável',
      'Não altera o conforto',
      'Elástico em todo o perímetro',
      'Lavável em máquina',
      'Anti-ácaro',
      'Garantia de 2 anos'
    ],
    specifications: {
      'Material': 'Tecido PU + Algodão',
      'Tamanhos Disponíveis': 'Solteiro, Casal, Queen, King',
      'Garantia': '2 anos'
    },
    images: ['/images/products/protetor-impermeavel-1.jpg'],
    inStock: true,
    featured: false,
    warranty: '2 anos'
  }
];