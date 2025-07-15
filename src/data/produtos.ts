export interface Produto {
  id: number;
  name: string;
  category: string;
  subCategory?: string;
  sizes: string[];
  comfort: string[];
  price: string;
  description: string;
  benefits: string[];
  usage: string[];
  inStock: boolean;
}

export const produtos: Produto[] = [
  {
    id: 1,
    name: "Sapato Social Masculino Confort",
    category: "sapatos",
    subCategory: "social",
    sizes: ["39", "40", "41", "42", "43", "44"],
    comfort: ["Extra Confort", "Palmilha Anatômica", "Solado Antiderrapante"],
    price: "R$ 189,90",
    description: "Sapato social masculino em couro legítimo com acabamento premium",
    benefits: ["Couro legítimo", "Costura reforçada", "Design clássico", "Durabilidade superior"],
    usage: ["Trabalho", "Eventos sociais", "Casamentos", "Reuniões"],
    inStock: true
  },
  {
    id: 2,
    name: "Tênis Casual Masculino Sport",
    category: "tenis",
    subCategory: "casual",
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    comfort: ["Tecnologia Air", "Amortecimento EVA", "Respirável"],
    price: "R$ 159,90",
    description: "Tênis casual masculino com tecnologia de amortecimento e design moderno",
    benefits: ["Amortecimento superior", "Material respirável", "Design moderno", "Versatilidade"],
    usage: ["Caminhada", "Academia", "Dia a dia", "Esportes leves"],
    inStock: true
  },
  {
    id: 3,
    name: "Sandália Feminina Confort Plus",
    category: "sandalias",
    subCategory: "feminina",
    sizes: ["34", "35", "36", "37", "38", "39", "40"],
    comfort: ["Palmilha Memory Foam", "Tiras Ajustáveis", "Solado Ergonômico"],
    price: "R$ 89,90",
    description: "Sandália feminina com palmilha memory foam e design ergonômico",
    benefits: ["Memory foam", "Tiras ajustáveis", "Leveza", "Elegância"],
    usage: ["Verão", "Praia", "Passeios", "Dia a dia"],
    inStock: true
  },
  {
    id: 4,
    name: "Bota Masculina Adventure",
    category: "botas",
    subCategory: "adventure",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    comfort: ["Impermeável", "Solado Antiderrapante", "Forro Respirável"],
    price: "R$ 299,90",
    description: "Bota masculina adventure impermeável com solado antiderrapante",
    benefits: ["100% impermeável", "Resistência extrema", "Aderência superior", "Conforto total"],
    usage: ["Trilhas", "Trabalho pesado", "Aventura", "Chuva"],
    inStock: true
  },
  {
    id: 5,
    name: "Sapatênis Masculino Casual",
    category: "sapatenis",
    subCategory: "casual",
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    comfort: ["Palmilha Gel", "Couro Macio", "Costura Dupla"],
    price: "R$ 149,90",
    description: "Sapatênis masculino casual em couro com palmilha gel",
    benefits: ["Versatilidade total", "Couro premium", "Palmilha gel", "Design atemporal"],
    usage: ["Trabalho", "Lazer", "Festas", "Viagens"],
    inStock: true
  },
  {
    id: 6,
    name: "Tênis Feminino Running Pro",
    category: "tenis",
    subCategory: "running",
    sizes: ["34", "35", "36", "37", "38", "39", "40"],
    comfort: ["Amortecimento Gel", "Mesh Respirável", "Suporte do Arco"],
    price: "R$ 199,90",
    description: "Tênis feminino para corrida com tecnologia de amortecimento gel",
    benefits: ["Performance máxima", "Respirabilidade", "Amortecimento gel", "Suporte ideal"],
    usage: ["Corrida", "Caminhada", "Academia", "Exercícios"],
    inStock: true
  },
  {
    id: 7,
    name: "Chinelo Masculino Ortopédico",
    category: "chinelos",
    subCategory: "ortopedico",
    sizes: ["39", "40", "41", "42", "43", "44"],
    comfort: ["Palmilha Ortopédica", "Massageador", "Antiderrapante"],
    price: "R$ 59,90",
    description: "Chinelo masculino ortopédico com palmilha massageadora",
    benefits: ["Alívio dos pés", "Palmilha massageadora", "Formato anatômico", "Durabilidade"],
    usage: ["Casa", "Piscina", "Praia", "Relaxamento"],
    inStock: true
  },
  {
    id: 8,
    name: "Sapato Feminino Salto Baixo",
    category: "sapatos",
    subCategory: "feminino",
    sizes: ["34", "35", "36", "37", "38", "39", "40"],
    comfort: ["Salto 3cm", "Palmilha Acolchoada", "Bico Arredondado"],
    price: "R$ 119,90",
    description: "Sapato feminino com salto baixo e palmilha acolchoada",
    benefits: ["Elegância discreta", "Conforto o dia todo", "Versátil", "Qualidade premium"],
    usage: ["Trabalho", "Eventos", "Social", "Dia a dia"],
    inStock: true
  },
  {
    id: 9,
    name: "Tênis Infantil Velcro Fun",
    category: "tenis",
    subCategory: "infantil",
    sizes: ["25", "26", "27", "28", "29", "30", "31", "32", "33"],
    comfort: ["Velcro Duplo", "Solado Flexível", "Forro Macio"],
    price: "R$ 79,90",
    description: "Tênis infantil com velcro duplo e design divertido",
    benefits: ["Fácil de calçar", "Segurança", "Diversão", "Resistência"],
    usage: ["Escola", "Brincadeiras", "Esportes", "Dia a dia"],
    inStock: true
  },
  {
    id: 10,
    name: "Mocassim Masculino Premium",
    category: "mocassins",
    subCategory: "premium",
    sizes: ["39", "40", "41", "42", "43", "44"],
    comfort: ["Couro Premium", "Solado de Borracha", "Forro Antialérgico"],
    price: "R$ 249,90",
    description: "Mocassim masculino premium em couro com acabamento artesanal",
    benefits: ["Sofisticação máxima", "Couro premium", "Artesanal", "Exclusividade"],
    usage: ["Eventos especiais", "Negócios", "Social", "Viagens"],
    inStock: true
  }
];

export const categorias = [
  "sapatos",
  "tenis", 
  "sandalias",
  "botas",
  "sapatenis",
  "chinelos",
  "mocassins"
];

export const subcategorias = [
  "social",
  "casual", 
  "feminina",
  "adventure",
  "running",
  "ortopedico",
  "feminino",
  "infantil",
  "premium"
];