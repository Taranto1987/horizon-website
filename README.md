# Horizon Website - Loja Castor Cabo Frio

Website para a Loja Castor Cabo Frio com sistema de recomendação inteligente de colchões (Mapa do Sono IA) e chatbot de vendas.

## Funcionalidades

- **Mapa do Sono IA**: Calculadora de biotipo que recomenda o colchão ideal baseado em características pessoais
- **Chatbot de Vendas**: Assistente virtual para orientação sobre produtos
- **Catálogo de Produtos**: Exibição completa da linha Castor
- **Integração WhatsApp**: Direcionamento direto para vendas
- **Design Responsivo**: Interface otimizada para todos os dispositivos

## Tecnologias

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Radix UI
- Lucide React

## Desenvolvimento

### Instalação
```bash
npm install
```

### Executar em modo desenvolvimento
```bash
npm run dev
```

### Build para produção
```bash
npm run build
```

### Preview da build
```bash
npm run preview
```

## Deploy

Para instruções completas de deploy, incluindo configuração de chaves SSH, consulte o [Guia de Deploy](DEPLOYMENT.md).

### Setup Rápido SSH
```bash
ssh-keygen -t ed25519 -C "seu_email@exemplo.com"
```

## Algoritmo Castor

O sistema inclui algoritmos de validação e recomendação:

- `constants.js`: Constantes de medidas, classes técnicas e parâmetros de validação
- `validator.js`: Função `validarCatalogo` que verifica SKU duplicado, medidas válidas, faixas de peso, etc.
- `recommender.js`: Função `rankear` que calcula score de adequação a partir das respostas do Mapa do Sono
- `data/`: Exemplos de JSON de produtos, bases, preços, estoque e perguntas

### Uso dos Algoritmos
```js
import { validarCatalogo } from './algoritmo_castor/validator.js';
import { rankear } from './algoritmo_castor/recommender.js';

// Carregue JSONs de data e utilize
```

## Estrutura do Projeto

```
src/
├── components/     # Componentes React
├── pages/         # Páginas da aplicação
├── assets/        # Recursos estáticos
├── lib/           # Utilitários e configurações
└── google_reviews.js  # Dados de avaliações

algoritmo_castor/  # Sistema de recomendação
├── data/         # JSONs de produtos e configurações
├── constants.js  # Constantes do sistema
├── validator.js  # Validação de catálogo
└── recommender.js # Engine de recomendação
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
