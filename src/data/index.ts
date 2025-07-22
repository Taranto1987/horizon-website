import type { ContactInfo, Product } from '../types';

export const contactInfo: ContactInfo = {
  phone: '(22) 99241-0112',
  whatsapp: '5522992410112',
  address: 'Av. Júlia Kubitschek, Nº 64 – Jardim Flamboyant',
  city: 'Cabo Frio',
  state: 'RJ',
  instagram: '@castorcabofrio',
  googleMaps: 'https://g.co/kgs/AJb6386',
  website: 'https://www.lojacastorcabofrio.com.br/',
};

export const products: Product[] = [
  {
    id: 'amazon-prime-gel-pocket',
    name: 'Amazon Prime Gel Pocket®',
    description: 'Colchão premium com tecnologia de gel refrescante e sistema de molas pocket independentes. Oferece máximo conforto e regulação térmica para noites perfeitas de sono.',
    image: '/images/amazon-prime-gel.jpg',
    price: 2499,
    features: [
      'Tecnologia Gel Refrescante',
      'Molas Pocket Independentes',
      'Tecido Antialérgico',
      'Borda Reforçada',
      'Altura 32cm'
    ],
    category: 'colchao',
    size: ['Solteiro', 'Casal', 'Queen', 'King'],
    warranty: '10 anos',
  },
  {
    id: 'silver-star-air-pocket',
    name: 'Silver Star Air Pocket®',
    description: 'Colchão com sistema de ventilação superior e molas pocket para perfeita adaptação ao corpo. Ideal para quem busca frescor e conforto.',
    image: '/images/silver-star-air.jpg',
    price: 1899,
    features: [
      'Sistema Air Pocket',
      'Ventilação Superior',
      'Tecido Respirável',
      'Molas Independentes',
      'Altura 30cm'
    ],
    category: 'colchao',
    size: ['Solteiro', 'Casal', 'Queen', 'King'],
    warranty: '8 anos',
  },
  {
    id: 'technopadic-hibrido',
    name: 'Technopadic Híbrido Pocket®',
    description: 'Inovação tecnológica que combina espuma viscoelástica com molas pocket. O equilíbrio perfeito entre suporte e conforto.',
    image: '/images/technopadic-hibrido.jpg',
    price: 2199,
    features: [
      'Espuma Viscoelástica',
      'Molas Pocket Híbridas',
      'Tecnologia Adaptativa',
      'Contorno Corporal',
      'Altura 28cm'
    ],
    category: 'colchao',
    size: ['Solteiro', 'Casal', 'Queen', 'King'],
    warranty: '12 anos',
  },
  {
    id: 'kingdom-latex',
    name: 'Kingdom Látex',
    description: 'Colchão de látex natural premium, oferecendo elasticidade única e propriedades naturalmente antibacterianas.',
    image: '/images/kingdom-latex.jpg',
    price: 3299,
    features: [
      'Látex Natural',
      'Antibacteriano Natural',
      'Elasticidade Superior',
      'Hipoalergênico',
      'Altura 25cm'
    ],
    category: 'colchao',
    size: ['Solteiro', 'Casal', 'Queen', 'King'],
    warranty: '15 anos',
  },
  {
    id: 'light-stress-pocket',
    name: 'Light Stress Pocket®',
    description: 'Desenvolvido especialmente para alívio do estresse e tensões do dia a dia. Molas pocket com zonas de conforto diferenciadas.',
    image: '/images/light-stress.jpg',
    price: 1799,
    features: [
      'Zonas de Conforto',
      'Alívio de Tensões',
      'Molas Pocket',
      'Espuma Relaxante',
      'Altura 26cm'
    ],
    category: 'colchao',
    size: ['Solteiro', 'Casal', 'Queen', 'King'],
    warranty: '8 anos',
  },
  {
    id: 'travesseiro-viscosoft',
    name: 'Travesseiro ViscoSoft',
    description: 'Travesseiro em espuma viscoelástica que se adapta perfeitamente ao contorno da cabeça e pescoço.',
    image: '/images/travesseiro-viscosoft.jpg',
    price: 299,
    features: [
      'Espuma Viscoelástica',
      'Contorno Adaptável',
      'Capa Removível',
      'Hipoalergênico',
      'Altura Regulável'
    ],
    category: 'travesseiro',
    warranty: '2 anos',
  },
  {
    id: 'protetor-impermeavel',
    name: 'Protetor Impermeável Premium',
    description: 'Proteção completa para seu colchão contra líquidos, ácaros e bactérias. Tecido respirável e silencioso.',
    image: '/images/protetor-impermeavel.jpg',
    price: 199,
    features: [
      'Impermeável',
      'Respirável',
      'Anti-ácaros',
      'Silencioso',
      'Fácil Lavagem'
    ],
    category: 'protetor',
    size: ['Solteiro', 'Casal', 'Queen', 'King'],
    warranty: '1 ano',
  },
];

export const seoDefaults = {
  title: 'Loja Castor Cabo Frio - Colchões e Acessórios para Dormir',
  description: 'A melhor loja de colchões em Cabo Frio. Oferecemos colchões Castor, travesseiros e acessórios com qualidade premium e garantia estendida.',
  keywords: 'colchões cabo frio, loja castor, colchão pocket, travesseiros, protetor colchão, sono qualidade',
  image: '/images/loja-castor-cabo-frio.jpg',
  url: 'https://www.lojacastorcabofrio.com.br',
};