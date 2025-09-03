import { User, Ruler, Activity, Users as UsersIcon, Moon, AlertTriangle, Thermometer, Target, Package } from 'lucide-react';

export const whatsappNumber = "5522992410112";
export const marcelaNumbers = {
  fixo: "552233437720",
  celular: "5522988447240"
};

export const castorProducts = {
  amazonprimegel: { id: 'amazonprimegel', name: 'Colchão Castor Amazon Prime Gel', price: 2599.90, features: ['Gel Infused', 'Molas Pocket', 'Conforto Intermediário'], image_path: '/amazon_prime_gel.jpg', springType: 'Pocket' },
  silverstar: { id: 'silverstar', name: 'Colchão Castor Silver Star Pocket Híbrido', price: 1999.90, features: ['Molas Pocket', 'Espuma HR', 'Suporte Firme'], image_path: '/silver_star.jpg', springType: 'Pocket' },
  technopadic: { id: 'technopadic', name: 'Colchão Castor Tecnopedic System', price: 1299.90, features: ['Molas Tecnopedic', 'Ortopédico', 'Durabilidade'], image_path: '/technopedic.jpg', springType: 'Tecnopedic' },
  kingdom: { id: 'kingdom', name: 'Colchão Castor Kingdom Pocket Visco', price: 3499.90, features: ['Viscoelástico', 'Molas Pocket', 'Ultra Conforto'], image_path: '/kingdom.jpg', springType: 'Pocket' },
  lightstress: { id: 'lightstress', name: 'Colchão Castor Light Stress Ortopédico', price: 999.90, features: ['Ortopédico', 'Espuma D45', 'Alívio de Stress'], image_path: '/light_stress.jpg', springType: 'Espuma' },
  fontana: { id: 'fontana', name: 'Colchão Castor Fontana Pocket', price: 1799.90, features: ['Molas Pocket', 'Pillow Top', 'Conforto Macio'], image_path: '/fontana.jpg', springType: 'Pocket' },
  revolution: { id: 'revolution', name: 'Colchão Castor Revolution Tecnopedic', price: 1599.90, features: ['Molas Tecnopedic', 'Dupla Face', 'Suporte Equilibrado'], image_path: '/revolution.jpg', springType: 'Tecnopedic' },
  'authentic-pocket': { id: 'authentic-pocket', name: 'Colchão Castor Authentic Pocket (Exemplo)', price: 2899.90, features: ['Molas Ensacadas Authentic', 'Conforto Individual', 'Suporte Premium'], image_path: '/authentic_pocket.jpg', springType: 'Pocket' },
  'sleep-max-d28': { id: 'sleep-max-d28', name: 'Colchão Castor Sleep Max D28', price: 799.90, features: ['Espuma D28', 'Infantil', 'Suporte Firme'], image_path: '/sleep_max_d28.jpg', springType: 'Espuma' },
  'sleep-max-d33': { id: 'sleep-max-d33', name: 'Colchão Castor Sleep Max D33', price: 899.90, features: ['Espuma D33', 'Custo-benefício', 'Suporte Equilibrado'], image_path: '/sleep_max_d33.jpg', springType: 'Espuma' },
  'sleep-max-d45': { id: 'sleep-max-d45', name: 'Colchão Castor Sleep Max D45', price: 1099.90, features: ['Espuma D45', 'Maior Suporte', 'Durabilidade'], image_path: '/sleep_max_d45.jpg', springType: 'Espuma' },
};

export const calculatorStepsData = [
  {
    id: 'tipoProduto', title: 'Você busca um colchão ou um conjunto (colchão + cama box)?', icon: Package,
    options: [
      { value: 'colchao', label: 'Apenas Colchão', description: 'Somente o colchão' },
      { value: 'conjunto', label: 'Conjunto Completo', description: 'Colchão + Cama Box' }
    ]
  },
  {
    id: 'medida', title: 'Qual medida você precisa?', icon: Ruler,
    options: [
      { value: 'solteiro', label: 'Solteiro', description: 'Ex: 0,88m x 1,88m' },
      { value: 'casal', label: 'Casal', description: 'Ex: 1,38m x 1,88m' },
      { value: 'queen', label: 'Queen Size', description: 'Ex: 1,58m x 1,98m' },
      { value: 'king', label: 'King Size', description: 'Ex: 1,93m x 2,03m' }
    ]
  },
  {
    id: 'frequenciaUso', title: 'Com que frequência o colchão será usado?', icon: Activity,
    options: [
      { value: 'diario', label: 'Uso diário', description: 'Para todas as noites' },
      { value: 'ocasional', label: 'Uso ocasional', description: 'Visitas, hóspedes, segunda casa' }
    ]
  },
  {
    id: 'numeroPessoas', title: 'Quantas pessoas vão dormir neste colchão?', icon: UsersIcon,
    options: [
      { value: '1', label: 'Apenas 1 pessoa', description: 'Uso individual' },
      { value: '2', label: 'Casal (2 pessoas)', description: 'Uso compartilhado' }
    ]
  },
  {
    id: 'idadePessoa1', title: 'Qual sua idade aproximada?', icon: User, type: 'idade', person: 'Pessoa 1'
  },
  {
    id: 'alturaPessoa1', title: 'Qual sua altura aproximada?', icon: Ruler, type: 'altura', person: 'Pessoa 1',
    options: [
      { value: 'ate_150', label: 'Até 1,50m' },
      { value: '151_160', label: '1,51m a 1,60m' },
      { value: '161_170', label: '1,61m a 1,70m' },
      { value: '171_180', label: '1,71m a 1,80m' },
      { value: '181_190', label: '1,81m a 1,90m' },
      { value: 'acima_191', label: 'Acima de 1,91m' }
    ]
  },
  {
    id: 'pesoPessoa1', title: 'Qual seu peso aproximado?', icon: User, type: 'peso', person: 'Pessoa 1',
    options: [
      { value: 'ate_50', label: 'Até 50kg' },
      { value: '51_60', label: '51 a 60kg' },
      { value: '61_70', label: '61 a 70kg' },
      { value: '71_80', label: '71 a 80kg' },
      { value: '81_90', label: '81 a 90kg' },
      { value: '91_100', label: '91 a 100kg' },
      { value: '101_120', label: '101 a 120kg' },
      { value: '121_150', label: '121 a 150kg' }
    ]
  },
  {
    id: 'idadePessoa2', title: 'Idade da outra pessoa (parceiro ou parceira)?', icon: User, type: 'idade', person: 'Pessoa 2',
    condition: (ans) => ans.numeroPessoas === '2'
  },
  {
    id: 'alturaPessoa2', title: 'Altura da outra pessoa (parceiro ou parceira)?', icon: Ruler, type: 'altura', person: 'Pessoa 2',
    condition: (ans) => ans.numeroPessoas === '2',
    options: [
      { value: 'ate_150', label: 'Até 1,50m' },
      { value: '151_160', label: '1,51m a 1,60m' },
      { value: '161_170', label: '1,61m a 1,70m' },
      { value: '171_180', label: '1,71m a 1,80m' },
      { value: '181_190', label: '1,81m a 1,90m' },
      { value: 'acima_191', label: 'Acima de 1,91m' }
    ]
  },
  {
    id: 'pesoPessoa2', title: 'Peso da outra pessoa (parceiro ou parceira)?', icon: User, type: 'peso', person: 'Pessoa 2',
    condition: (ans) => ans.numeroPessoas === '2',
    options: [
      { value: 'ate_50', label: 'Até 50kg' },
      { value: '51_60', label: '51 a 60kg' },
      { value: '61_70', label: '61 a 70kg' },
      { value: '71_80', label: '71 a 80kg' },
      { value: '81_90', label: '81 a 90kg' },
      { value: '91_100', label: '91 a 100kg' },
      { value: '101_120', label: '101 a 120kg' },
      { value: '121_150', label: '121 a 150kg' }
    ]
  },
  {
    id: 'tipoColchaoAtual', title: 'Atualmente, qual o modelo de colchão que você usa?', icon: Bed,
    options: [
      { value: 'espuma', label: 'Espuma', description: 'Conforto tradicional' },
      { value: 'mola', label: 'Mola', description: 'Tecnologia e suporte' },
      { value: 'nao_sei', label: 'Não sei / Não uso', description: 'Primeiro colchão ou sem preferência' }
    ]
  },
  {
    id: 'posicaoDormir', title: 'Qual sua posição mais comum ao dormir?', icon: Moon,
    options: [
      { value: 'lado', label: 'De lado', description: 'Alinhamento da coluna' },
      { value: 'costas', label: 'De costas (barriga pra cima)', description: 'Suporte uniforme' },
      { value: 'brucos', label: 'De bruços', description: 'Menos comum, requer atenção' },
      { value: 'varia', label: 'Vario de posição', description: 'Versatilidade' }
    ]
  },
  {
    id: 'doresColuna', title: 'Você sente dores na coluna frequentemente?', icon: AlertTriangle,
    options: [
      { value: 'cervical', label: 'Sim, na cervical', description: 'Pescoço/ombros' },
      { value: 'lombar_ciatico', label: 'Sim, na lombar ou ciático', description: 'Parte inferior/pernas' },
      { value: 'generalizadas', label: 'Sim, dores generalizadas', description: 'Múltiplos pontos' },
      { value: 'nao', label: 'Não', description: 'Raramente sinto dores' }
    ]
  },
  {
    id: 'temperaturaSono', title: 'Como você se sente em relação à temperatura durante o sono?', icon: Thermometer,
    options: [
      { value: 'calor', label: 'Sinto muito calor', description: 'Busca frescor' },
      { value: 'frio', label: 'Sinto frio com facilidade', description: 'Busca aconchego' },
      { value: 'normal', label: 'Temperatura normal', description: 'Equilíbrio térmico' }
    ]
  },
  {
    id: 'preferenciaFirmeza', title: 'Qual sua preferência de sensação ao deitar?', icon: Target,
    options: [
      { value: 'macio', label: 'Mais macio', description: 'Que me abrace' },
      { value: 'intermediario', label: 'Intermediário', description: 'Nem muito macio nem firme' },
      { value: 'firme', label: 'Mais firme', description: 'Com bom suporte' }
    ]
  },
  {
    id: 'condicaoOrtopedica', title: 'Possui alguma condição ortopédica?', icon: AlertTriangle,
    options: [
      { value: 'hernia', label: 'Hérnia', description: 'Necessita de suporte específico' },
      { value: 'escoliose', label: 'Escoliose', description: 'Alinhamento da coluna' },
      { value: 'artrose', label: 'Artrose', description: 'Alívio de pressão nas articulações' },
      { value: 'cirurgia_recente', label: 'Cirurgia recente', description: 'Recuperação e conforto' },
      { value: 'nenhuma', label: 'Nenhuma', description: 'Sem condições ortopédicas' }
    ]
  }
];



