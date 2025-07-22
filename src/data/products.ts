export interface Product {
  id: string;
  name: string;
  category: 'colchoes' | 'travesseiros' | 'acessorios' | 'protetores';
  price: {
    min: number;
    max?: number;
  };
  description: string;
  features: string[];
  image: string;
  featured: boolean;
  sizes?: string[];
}

export const products: Product[] = [
  // Colchões
  {
    id: 'amazon-prime-gel-pocket',
    name: 'Amazon Prime Gel Pocket®',
    category: 'colchoes',
    price: { min: 1299, max: 2599 },
    description: 'Tecnologia gel com molas pocket para temperatura ideal e suporte personalizado. O colchão perfeito para quem busca frescor e conforto durante toda a noite.',
    features: [
      'Tecnologia Gel para regulação de temperatura',
      'Molas Pocket independentes',
      'Suporte personalizado para cada parte do corpo',
      'Tecido com tratamento antimicrobiano',
      'Garantia de 10 anos'
    ],
    image: '🛏️',
    featured: true,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'silver-star-air-pocket',
    name: 'Silver Star Air Pocket®',
    category: 'colchoes',
    price: { min: 999, max: 1999 },
    description: 'Sistema de ventilação avançado com molas pocket independentes. Ideal para casais que buscam movimento independente e circulação de ar.',
    features: [
      'Sistema Air Pocket para ventilação',
      'Molas independentes',
      'Movimento zero entre parceiros',
      'Espuma de alta densidade',
      'Garantia de 8 anos'
    ],
    image: '🌟',
    featured: true,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'kingdom-latex',
    name: 'Kingdom Látex',
    category: 'colchoes',
    price: { min: 1599, max: 2999 },
    description: 'Látex natural premium para máximo conforto e durabilidade. A escolha perfeita para quem valoriza materiais naturais e sustentáveis.',
    features: [
      'Látex 100% natural',
      'Propriedades antialérgicas',
      'Durabilidade superior',
      'Elasticidade e suporte ideais',
      'Garantia de 12 anos'
    ],
    image: '👑',
    featured: true,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'technopadic-hibrido-pocket',
    name: 'Technopadic Híbrido Pocket®',
    category: 'colchoes',
    price: { min: 1199, max: 2399 },
    description: 'Tecnologia híbrida combinando espumas avançadas e molas pocket para o equilíbrio perfeito entre conforto e suporte.',
    features: [
      'Tecnologia híbrida exclusiva',
      'Espuma viscoelástica',
      'Molas pocket de alta performance',
      'Alívio de pontos de pressão',
      'Garantia de 10 anos'
    ],
    image: '⚡',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'light-stress-pocket',
    name: 'Light Stress Pocket®',
    category: 'colchoes',
    price: { min: 899, max: 1799 },
    description: 'Desenvolvido especialmente para alívio do estresse e tensões do dia a dia. Perfeito para quem busca relaxamento total.',
    features: [
      'Espuma que alivia tensões',
      'Molas pocket suaves',
      'Tecido com infusão calmante',
      'Suporte anatômico',
      'Garantia de 8 anos'
    ],
    image: '🌙',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'fontana-pocket',
    name: 'Fontana Pocket®',
    category: 'colchoes',
    price: { min: 799, max: 1599 },
    description: 'Linha clássica com molas pocket e acabamento premium. Excelente custo-benefício para toda a família.',
    features: [
      'Molas pocket tradicionais',
      'Espuma de alta qualidade',
      'Tecido macio e resistente',
      'Borda reforçada',
      'Garantia de 7 anos'
    ],
    image: '💎',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'revolution-pocket',
    name: 'Revolution Pocket®',
    category: 'colchoes',
    price: { min: 1099, max: 2199 },
    description: 'Revolução em conforto com tecnologia inovadora e design moderno. Para quem não abre mão da qualidade.',
    features: [
      'Tecnologia revolucionária',
      'Molas de última geração',
      'Camadas de conforto múltiplas',
      'Design ergonômico',
      'Garantia de 10 anos'
    ],
    image: '🚀',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'evolution-gel-pocket',
    name: 'Evolution Gel Pocket®',
    category: 'colchoes',
    price: { min: 1399, max: 2699 },
    description: 'Evolução da tecnologia gel com molas pocket avançadas. O futuro do sono chegou à sua casa.',
    features: [
      'Gel de nova geração',
      'Molas pocket evolutivas',
      'Refrigeração inteligente',
      'Adaptação corporal perfeita',
      'Garantia de 12 anos'
    ],
    image: '🔬',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'gold-star-pocket',
    name: 'Gold Star Pocket®',
    category: 'colchoes',
    price: { min: 1199, max: 2399 },
    description: 'Qualidade ouro com molas pocket premium. Para quem busca o melhor em conforto e durabilidade.',
    features: [
      'Molas pocket gold',
      'Espuma premium',
      'Tecido antibacteriano',
      'Suporte diferenciado',
      'Garantia de 10 anos'
    ],
    image: '🏆',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'ortopedic-d33',
    name: 'Ortopedic (Espuma D33)',
    category: 'colchoes',
    price: { min: 599, max: 1199 },
    description: 'Espuma ortopédica D33 para suporte firme e alinhamento da coluna. Ideal para quem prefere superfície mais firme.',
    features: [
      'Espuma D33 ortopédica',
      'Suporte firme',
      'Alinhamento da coluna',
      'Tecido hipoalergênico',
      'Garantia de 5 anos'
    ],
    image: '🦴',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'evolution-gel-sem-molas',
    name: 'Evolution Gel (sem molas)',
    category: 'colchoes',
    price: { min: 899, max: 1799 },
    description: 'Tecnologia gel avançada sem molas, para quem prefere superfície contínua com refrigeração.',
    features: [
      'Gel refrigerante',
      'Espuma viscoelástica',
      'Superfície contínua',
      'Alívio de pressão',
      'Garantia de 8 anos'
    ],
    image: '❄️',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },

  // Travesseiros
  {
    id: 'viscosoft-travesseiro',
    name: 'Travesseiro ViscoSoft',
    category: 'travesseiros',
    price: { min: 149, max: 249 },
    description: 'Travesseiro em espuma viscoelástica que se adapta perfeitamente ao contorno da cabeça e pescoço.',
    features: [
      'Espuma viscoelástica',
      'Adaptação anatômica',
      'Alívio de tensões cervicais',
      'Capa removível e lavável',
      'Garantia de 2 anos'
    ],
    image: '🛌',
    featured: false,
    sizes: ['50x70cm', '50x90cm']
  },
  {
    id: 'sleep-flocos-travesseiro',
    name: 'Travesseiro Sleep Flocos',
    category: 'travesseiros',
    price: { min: 89, max: 149 },
    description: 'Travesseiro em flocos de espuma, permitindo ajuste personalizado de altura e firmeza.',
    features: [
      'Flocos de espuma ajustáveis',
      'Altura personalizável',
      'Respirabilidade excelente',
      'Capa 100% algodão',
      'Garantia de 1 ano'
    ],
    image: '☁️',
    featured: false,
    sizes: ['50x70cm', '50x90cm']
  },

  // Protetores
  {
    id: 'protetor-impermeavel',
    name: 'Protetor Impermeável',
    category: 'protetores',
    price: { min: 79, max: 159 },
    description: 'Protetor de colchão impermeável que mantém a garantia do seu colchão, protegendo contra líquidos e ácaros.',
    features: [
      'Impermeável e respirável',
      'Proteção contra ácaros',
      'Não altera o conforto',
      'Elástico em todo contorno',
      'Lavável na máquina'
    ],
    image: '🛡️',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'protetor-atoalhado',
    name: 'Protetor Atoalhado',
    category: 'protetores',
    price: { min: 59, max: 119 },
    description: 'Protetor atoalhado macio que oferece proteção e conforto extra ao seu colchão.',
    features: [
      'Tecido atoalhado macio',
      'Absorção de umidade',
      'Conforto adicional',
      'Elástico ajustável',
      'Fácil manutenção'
    ],
    image: '🧸',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },

  // Acessórios
  {
    id: 'base-box-premium',
    name: 'Base Box Premium',
    category: 'acessorios',
    price: { min: 399, max: 799 },
    description: 'Base box de alta qualidade que complementa perfeitamente seu colchão Castor.',
    features: [
      'Estrutura reforçada',
      'Tecido de alta durabilidade',
      'Ventilação otimizada',
      'Pés inclusos',
      'Garantia de 5 anos'
    ],
    image: '📦',
    featured: false,
    sizes: ['Solteiro', 'Casal', 'Queen', 'King']
  },
  {
    id: 'cabeceira-estofada',
    name: 'Cabeceira Estofada',
    category: 'acessorios',
    price: { min: 299, max: 599 },
    description: 'Cabeceira estofada elegante que transforma seu quarto em um ambiente ainda mais aconchegante.',
    features: [
      'Design moderno',
      'Estofado de qualidade',
      'Fácil instalação',
      'Várias cores disponíveis',
      'Garantia de 2 anos'
    ],
    image: '🏠',
    featured: false,
    sizes: ['Casal', 'Queen', 'King']
  }
];

export const categories = [
  { id: 'colchoes', name: 'Colchões', count: products.filter(p => p.category === 'colchoes').length },
  { id: 'travesseiros', name: 'Travesseiros', count: products.filter(p => p.category === 'travesseiros').length },
  { id: 'protetores', name: 'Protetores', count: products.filter(p => p.category === 'protetores').length },
  { id: 'acessorios', name: 'Acessórios', count: products.filter(p => p.category === 'acessorios').length },
];