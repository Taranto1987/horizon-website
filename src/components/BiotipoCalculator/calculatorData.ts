export interface Product {
  name: string;
  price: string;
  description?: string;
  category?: string;
}

export const castorProducts: Product[] = [
  { 
    name: "Produto Castor Premium", 
    price: "Consultar preço",
    description: "Produto de alta qualidade da linha premium",
    category: "premium"
  },
  { 
    name: "Produto Castor Tradicional", 
    price: "Consultar preço",
    description: "Nosso produto tradicional de confiança",
    category: "tradicional"
  },
  { 
    name: "Produto Castor Econômico", 
    price: "Consultar preço",
    description: "Qualidade Castor com preço acessível",
    category: "economico"
  },
  { 
    name: "Kit Castor Completo", 
    price: "Consultar preço",
    description: "Kit completo com todos os produtos essenciais",
    category: "kit"
  }
];

export interface BiotipoQuestion {
  id: string;
  question: string;
  options: Array<{
    value: string;
    label: string;
    points: number;
  }>;
}

export const biotipoQuestions: BiotipoQuestion[] = [
  {
    id: "estrutura_corporal",
    question: "Como você descreveria sua estrutura corporal?",
    options: [
      { value: "magro", label: "Magro(a) naturalmente", points: 1 },
      { value: "medio", label: "Estrutura média", points: 2 },
      { value: "largo", label: "Estrutura mais larga", points: 3 }
    ]
  },
  {
    id: "metabolismo",
    question: "Como é seu metabolismo?",
    options: [
      { value: "rapido", label: "Muito rápido (dificuldade para ganhar peso)", points: 1 },
      { value: "normal", label: "Normal", points: 2 },
      { value: "lento", label: "Mais lento (facilidade para ganhar peso)", points: 3 }
    ]
  },
  {
    id: "apetite",
    question: "Como é seu apetite?",
    options: [
      { value: "pequeno", label: "Pequeno (como pouco)", points: 1 },
      { value: "normal", label: "Normal", points: 2 },
      { value: "grande", label: "Grande (gosto de comer)", points: 3 }
    ]
  }
];

export const getBiotipoResult = (totalPoints: number): string => {
  if (totalPoints <= 4) {
    return "Ectomorfo - Corpo naturalmente magro, metabolismo acelerado";
  } else if (totalPoints <= 7) {
    return "Mesomorfo - Corpo equilibrado, facilidade para ganhar massa muscular";
  } else {
    return "Endomorfo - Tendência a acumular gordura, metabolismo mais lento";
  }
};