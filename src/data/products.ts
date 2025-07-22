import { Product, ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
  phone: "(22) 99241-0112",
  whatsapp: "(22) 99241-0112",
  address: "Av. Júlia Kubitschek, Nº 64 – Jardim Flamboyant, Cabo Frio - RJ",
  instagram: "@castorcabofrio",
  googleMaps: "https://g.co/kgs/AJb6386",
  website: "https://www.lojacastorcabofrio.com.br/"
};

export const products: Product[] = [
  {
    id: "amazon-prime-gel-pocket",
    name: "Amazon Prime Gel Pocket®",
    description: "Colchão com tecnologia de gel que proporciona maior frescor e conforto durante o sono.",
    price: 1299,
    image: "/images/products/amazon-prime-gel.jpg",
    features: [
      "Tecnologia Gel para controle de temperatura",
      "Sistema Pocket para maior adaptabilidade",
      "Tecido hipoalergênico",
      "Bordas reforçadas"
    ],
    specifications: {
      height: "26cm",
      material: "Gel + Molas Pocket",
      warranty: "10 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "silver-star-air-pocket",
    name: "Silver Star Air Pocket®",
    description: "Colchão com sistema de ventilação avançado e molas pocket para máximo conforto.",
    price: 1199,
    image: "/images/products/silver-star-air.jpg",
    features: [
      "Sistema Air para ventilação",
      "Molas Pocket independentes",
      "Tratamento antimicrobiano",
      "Zona de conforto diferenciada"
    ],
    specifications: {
      height: "25cm",
      material: "Molas Pocket + Sistema Air",
      warranty: "10 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "technopadic-hibrido",
    name: "Technopadic Híbrido Pocket®",
    description: "Combinação perfeita entre tecnologia e conforto para uma experiência de sono única.",
    price: 1499,
    image: "/images/products/technopadic-hibrido.jpg",
    features: [
      "Tecnologia híbrida",
      "Molas Pocket de alta qualidade",
      "Camada de viscoelástico",
      "Design ergonômico"
    ],
    specifications: {
      height: "28cm",
      material: "Híbrido: Molas + Viscoelástico",
      warranty: "12 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "kingdom-latex",
    name: "Kingdom Látex",
    description: "Colchão de látex natural que oferece suporte excepcional e durabilidade superior.",
    price: 1799,
    image: "/images/products/kingdom-latex.jpg",
    features: [
      "Látex 100% natural",
      "Propriedades antimicrobianas naturais",
      "Excelente ventilação",
      "Suporte adaptável"
    ],
    specifications: {
      height: "22cm",
      material: "Látex Natural",
      warranty: "15 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "light-stress-pocket",
    name: "Light Stress Pocket®",
    description: "Desenvolvido especialmente para reduzir pontos de pressão e proporcionar relaxamento total.",
    price: 999,
    image: "/images/products/light-stress.jpg",
    features: [
      "Redução de pontos de pressão",
      "Molas Pocket para distribuição de peso",
      "Camada de conforto especial",
      "Alívio do estresse corporal"
    ],
    specifications: {
      height: "24cm",
      material: "Molas Pocket + Espuma Especial",
      warranty: "8 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "fontana-pocket",
    name: "Fontana Pocket®",
    description: "Colchão clássico com molas pocket que oferece equilíbrio perfeito entre firmeza e conforto.",
    price: 899,
    image: "/images/products/fontana-pocket.jpg",
    features: [
      "Molas Pocket tradicionais",
      "Conforto equilibrado",
      "Excelente custo-benefício",
      "Durabilidade comprovada"
    ],
    specifications: {
      height: "23cm",
      material: "Molas Pocket",
      warranty: "8 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "revolution-pocket",
    name: "Revolution Pocket®",
    description: "Inovação em cada detalhe para revolucionar sua experiência de sono.",
    price: 1399,
    image: "/images/products/revolution-pocket.jpg",
    features: [
      "Tecnologia revolucionária",
      "Sistema Pocket avançado",
      "Materiais de última geração",
      "Conforto inovador"
    ],
    specifications: {
      height: "27cm",
      material: "Molas Pocket Revolucionárias",
      warranty: "12 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "evolution-gel-pocket",
    name: "Evolution Gel Pocket®",
    description: "A evolução dos colchões com gel, oferecendo frescor e adaptabilidade superiores.",
    price: 1599,
    image: "/images/products/evolution-gel.jpg",
    features: [
      "Gel evoluído para máximo frescor",
      "Molas Pocket de alta performance",
      "Adaptabilidade superior",
      "Tecnologia de ponta"
    ],
    specifications: {
      height: "29cm",
      material: "Gel Evolution + Molas Pocket",
      warranty: "12 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "gold-star-pocket",
    name: "Gold Star Pocket®",
    description: "O padrão ouro em colchões, combinando luxo e tecnologia para o sono perfeito.",
    price: 1999,
    image: "/images/products/gold-star.jpg",
    features: [
      "Padrão premium gold",
      "Molas Pocket de luxo",
      "Acabamento superior",
      "Máximo conforto"
    ],
    specifications: {
      height: "30cm",
      material: "Molas Pocket Premium",
      warranty: "15 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "ortopedic-d33",
    name: "Ortopédico (Espuma D33)",
    description: "Colchão ortopédico com espuma de alta densidade para suporte firme e saudável.",
    price: 699,
    image: "/images/products/ortopedic-d33.jpg",
    features: [
      "Espuma D33 de alta densidade",
      "Suporte ortopédico",
      "Firme e resistente",
      "Ideal para problemas de coluna"
    ],
    specifications: {
      height: "18cm",
      density: "D33",
      material: "Espuma de Alta Densidade",
      warranty: "5 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "evolution-gel-sem-molas",
    name: "Evolution Gel (sem molas)",
    description: "Tecnologia de gel sem molas para quem prefere suporte uniforme e frescor.",
    price: 1299,
    image: "/images/products/evolution-gel-sem-molas.jpg",
    features: [
      "Gel sem sistema de molas",
      "Suporte uniforme",
      "Controle de temperatura",
      "Conforto personalizado"
    ],
    specifications: {
      height: "25cm",
      material: "Gel + Espuma Especial",
      warranty: "10 anos"
    },
    category: "colchao",
    available: true
  },
  {
    id: "travesseiro-viscosoft",
    name: "Travesseiro ViscoSoft",
    description: "Travesseiro com espuma viscoelástica que se adapta perfeitamente ao contorno da cabeça e pescoço.",
    price: 149,
    image: "/images/products/travesseiro-viscosoft.jpg",
    features: [
      "Espuma viscoelástica",
      "Alívio de pressão",
      "Suporte cervical",
      "Capa removível"
    ],
    specifications: {
      height: "12cm",
      material: "Viscoelástico",
      warranty: "2 anos"
    },
    category: "travesseiro",
    available: true
  },
  {
    id: "travesseiro-sleep-flocos",
    name: "Travesseiro Sleep Flocos",
    description: "Travesseiro com flocos que permite ajuste personalizado da altura e firmeza.",
    price: 99,
    image: "/images/products/sleep-flocos.jpg",
    features: [
      "Flocos ajustáveis",
      "Altura personalizável",
      "Respirável",
      "Fácil manutenção"
    ],
    specifications: {
      height: "Ajustável",
      material: "Flocos de Espuma",
      warranty: "1 ano"
    },
    category: "travesseiro",
    available: true
  },
  {
    id: "protetor-impermeavel",
    name: "Protetor Impermeável",
    description: "Protetor de colchão impermeável que mantém seu colchão sempre protegido.",
    price: 79,
    image: "/images/products/protetor-impermeavel.jpg",
    features: [
      "100% impermeável",
      "Respirável",
      "Ajuste perfeito",
      "Fácil lavagem"
    ],
    specifications: {
      height: "N/A",
      material: "Tecido Impermeável + Algodão",
      warranty: "1 ano"
    },
    category: "protetor",
    available: true
  }
];