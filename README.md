# Algoritmo de Validação e Recomendação Castor

Esta pasta contém a implementação do algoritmo de validação de catálogo e recomendação do Mapa do Sono utilizado pela Loja Castor Cabo Frio.

## Estrutura
- `constants.js`: Constantes de medidas, classes técnicas e parâmetros de validação.
- `validator.js`: Função `validarCatalogo` que verifica SKU duplicado, medidas válidas, faixas de peso, autores de preço, etc.
- `recommender.js`: Função `rankear` que calcula score de adequação a partir das respostas do Mapa do Sono e retorna uma lista ordenada de produtos.
- `data/`: Exemplos de JSON de produtos, bases, preços, estoque e perguntas do Mapa do Sono.

## Uso
Importe as funções conforme necessário em seu projeto React/Vite. Exemplo:

```js
import { validarCatalogo } from './algoritmo_castor/validator.js';
import { rankear } from './algoritmo_castor/recommender.js';

// Carregue JSONs de data e utilize
```

As funções não dependem do framework e podem ser usadas em qualquer contexto JavaScript.
