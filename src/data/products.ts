export interface Product {
  id: string;
  name: string;
  category: 'colchao' | 'travesseiro' | 'protetor' | 'acessorio';
  description: string;
  features: string[];
  price?: string;
  image: string;
  highlighted?: boolean;
}

export const products: Product[] = [
  {
    id: 'amazon-prime-gel-pocket',
    name: 'Amazon Prime Gel Pocket®',
    category: 'colchao',
    description: 'Colchão premium com tecnologia de gel refrescante e sistema de molas pocket para o máximo conforto e suporte.',
    features: [
      'Tecnologia Gel Pocket®',
      'Sistema de molas individuais',
      'Resfriamento natural',
      'Suporte anatômico'
    ],
    image: '/images/amazon-prime-gel.jpg',
    highlighted: true,
  },
  {
    id: 'silver-star-air-pocket',
    name: 'Silver Star Air Pocket®',
    category: 'colchao',
    description: 'Colchão com tecnologia de circulação de ar e molas pocket para noites frescas e confortáveis.',
    features: [
      'Tecnologia Air Pocket®',
      'Circulação superior de ar',
      'Molas ensacadas',
      'Tecido respirável'
    ],
    image: '/images/silver-star-air.jpg',
  },
  {
    id: 'technopadic-hibrido-pocket',
    name: 'Technopadic Híbrido Pocket®',
    category: 'colchao',
    description: 'Combinação perfeita de espuma viscoelástica e molas pocket para suporte híbrido incomparável.',
    features: [
      'Tecnologia híbrida',
      'Espuma viscoelástica',
      'Molas pocket',
      'Alívio de pressão'
    ],
    image: '/images/technopadic-hibrido.jpg',
    highlighted: true,
  },
  {
    id: 'kingdom-latex',
    name: 'Kingdom Látex',
    category: 'colchao',
    description: 'Colchão 100% látex natural, hipoalergênico e com excelente durabilidade.',
    features: [
      'Látex 100% natural',
      'Hipoalergênico',
      'Alta durabilidade',
      'Regulação térmica'
    ],
    image: '/images/kingdom-latex.jpg',
  },
  {
    id: 'light-stress-pocket',
    name: 'Light Stress Pocket®',
    category: 'colchao',
    description: 'Desenvolvido especialmente para alívio do estresse e relaxamento profundo.',
    features: [
      'Alívio do estresse',
      'Molas pocket',
      'Relaxamento profundo',
      'Suporte anatômico'
    ],
    image: '/images/light-stress.jpg',
  },
  {
    id: 'fontana-pocket',
    name: 'Fontana Pocket®',
    category: 'colchao',
    description: 'Colchão elegante com molas pocket e acabamento premium para o seu quarto.',
    features: [
      'Design elegante',
      'Molas pocket',
      'Acabamento premium',
      'Conforto superior'
    ],
    image: '/images/fontana-pocket.jpg',
  },
  {
    id: 'revolution-pocket',
    name: 'Revolution Pocket®',
    category: 'colchao',
    description: 'Inovação em conforto com tecnologia revolucionária de molas ensacadas.',
    features: [
      'Tecnologia revolucionária',
      'Molas ensacadas',
      'Inovação em conforto',
      'Suporte personalizado'
    ],
    image: '/images/revolution-pocket.jpg',
  },
  {
    id: 'evolution-gel-pocket',
    name: 'Evolution Gel Pocket®',
    category: 'colchao',
    description: 'Evolução em conforto com gel refrescante e sistema pocket avançado.',
    features: [
      'Gel refrescante',
      'Sistema pocket avançado',
      'Evolução em conforto',
      'Controle de temperatura'
    ],
    image: '/images/evolution-gel.jpg',
    highlighted: true,
  },
  {
    id: 'gold-star-pocket',
    name: 'Gold Star Pocket®',
    category: 'colchao',
    description: 'O melhor da linha Castor com acabamento dourado e tecnologia premium.',
    features: [
      'Linha premium',
      'Acabamento dourado',
      'Tecnologia avançada',
      'Luxo e conforto'
    ],
    image: '/images/gold-star.jpg',
  },
  {
    id: 'ortopedic-d33',
    name: 'Ortopédico (Espuma D33)',
    category: 'colchao',
    description: 'Colchão ortopédico com espuma de alta densidade para suporte firme.',
    features: [
      'Espuma D33',
      'Suporte ortopédico',
      'Alta densidade',
      'Firmeza ideal'
    ],
    image: '/images/ortopedic-d33.jpg',
  },
  {
    id: 'evolution-gel-sem-molas',
    name: 'Evolution Gel (sem molas)',
    category: 'colchao',
    description: 'Versão em espuma do Evolution Gel com mesma tecnologia refrescante.',
    features: [
      'Sem molas',
      'Gel refrescante',
      'Espuma premium',
      'Conforto adaptável'
    ],
    image: '/images/evolution-gel-foam.jpg',
  },
  {
    id: 'travesseiro-viscosoft',
    name: 'Travesseiro ViscoSoft',
    category: 'travesseiro',
    description: 'Travesseiro com espuma viscoelástica que se adapta perfeitamente ao contorno da cabeça e pescoço.',
    features: [
      'Espuma viscoelástica',
      'Adaptação perfeita',
      'Alívio de tensão',
      'Suporte cervical'
    ],
    image: '/images/travesseiro-viscosoft.jpg',
  },
  {
    id: 'travesseiro-sleep-flocos',
    name: 'Travesseiro Sleep Flocos',
    category: 'travesseiro',
    description: 'Travesseiro com flocos de espuma que permitem ajuste personalizado de altura e firmeza.',
    features: [
      'Flocos de espuma',
      'Altura ajustável',
      'Firmeza personalizada',
      'Moldagem individual'
    ],
    image: '/images/travesseiro-sleep-flocos.jpg',
  },
  {
    id: 'protetor-impermeavel',
    name: 'Protetor Impermeável',
    category: 'protetor',
    description: 'Protetor de colchão impermeável que mantém seu colchão sempre protegido e limpo.',
    features: [
      'Impermeável',
      'Respirável',
      'Fácil lavagem',
      'Proteção total'
    ],
    image: '/images/protetor-impermeavel.jpg',
  }
];

export const categories = [
  { id: 'colchao', name: 'Colchões', description: 'Linha completa de colchões para o seu conforto' },
  { id: 'travesseiro', name: 'Travesseiros', description: 'Travesseiros para o suporte ideal' },
  { id: 'protetor', name: 'Protetores', description: 'Proteja seu investimento em sono' },
  { id: 'acessorio', name: 'Acessórios', description: 'Complemente seu quarto dos sonhos' },
];

export const companyInfo = {
  name: 'Loja Castor Cabo Frio',
  address: 'Av. Júlia Kubitschek, Nº 64 – Jardim Flamboyant',
  city: 'Cabo Frio - RJ',
  phone: '(22) 99241-0112',
  whatsapp: '5522992410112',
  instagram: '@castorcabofrio',
  googleMaps: 'https://g.co/kgs/AJb6386',
  website: 'https://www.lojacastorcabofrio.com.br/',
  description: 'Especialistas em sono e conforto há anos em Cabo Frio. Oferecemos a melhor linha de colchões, travesseiros e acessórios da marca Castor para garantir noites bem dormidas e dias mais produtivos.',
};