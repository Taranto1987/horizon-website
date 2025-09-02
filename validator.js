import { CLASSES_TECNICAS, FIRMEZA_ESCALA, MEDIDAS_PADRAO_MM, MEDIDAS_OPCIONAIS_MM, ORIGEM_PRECO_VALIDA, RESPONSAVEIS_PRECO } from './constants.js';

function allUnique(arr) {
  return new Set(arr).size === arr.length;
}
function inRange(n, min, max) {
  return n >= min && n <= max;
}
function isValidMedida(key) {
  return Object.hasOwn(MEDIDAS_PADRAO_MM, key) || Object.hasOwn(MEDIDAS_OPCIONAIS_MM, key);
}
export function validarCatalogo(produtos, bases, precos, estoque) {
  const errors = [];
  if (!allUnique(produtos.map(p => p.sku))) errors.push('SKU duplicado em produto.json');
  if (!allUnique(bases.map(b => b.sku))) errors.push('SKU duplicado em bases.json');
  for (const p of produtos) {
    if (!inRange(p.espessura_mm, 180, 400)) errors.push(`Espessura fora do range 180–400: ${p.sku}`);
    if (!p.classe_tecnica.every(c => CLASSES_TECNICAS.includes(c))) errors.push(`Classe técnica inválida: ${p.sku}`);
    if (!FIRMEZA_ESCALA.includes(p.firmeza)) errors.push(`Firmeza inválida: ${p.sku}`);
    const [minP, maxP] = p.suporte_peso_kg;
    if (!(minP >= 30 && maxP <= 200 && minP < maxP)) errors.push(`Suporte de peso inválido: ${p.sku}`);
    for (const v of p.variantes) {
      if (!isValidMedida(v.medida_key)) errors.push(`Medida inválida em ${p.sku}: ${v.medida_key}`);
    }
  }
  for (const pr of precos) {
    if (!ORIGEM_PRECO_VALIDA.includes(pr.origen)) errors.push(`Preço origem inválida: ${pr.sku}`);
    if (!RESPONSAVEIS_PRECO.includes(pr.autor)) errors.push(`Preço autor inválido: ${pr.sku}`);
    if (!(pr.preco >= 0)) errors.push(`Preço negativo: ${pr.sku}`);
  }
  for (const e of estoque) {
    if (e.qtd < 0) errors.push(`Estoque negativo: ${e.sku}`);
  }
  return { ok: errors.length === 0, errors };
}
