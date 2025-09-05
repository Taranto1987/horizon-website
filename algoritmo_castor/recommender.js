import { FIRMEZA_ESCALA } from './constants.js';
function compatPeso(p, peso) {
  const [minP, maxP] = p.suporte_peso_kg;
  return peso >= minP && peso <= maxP ? 1 : 0;
}
function ajustePosicao(p, posicao) {
  if (posicao === 'lado') return (p.firmeza === 2 || p.firmeza === 3) ? 1 : 0;
  if (posicao === 'costas') return (p.firmeza === 3 || p.firmeza === 4) ? 1 : 0;
  if (posicao === 'bruços') return (p.firmeza === 4 || p.firmeza === 5) ? 1 : 0;
  return (p.firmeza >= 2 && p.firmeza <= 4) ? 1 : 0;
}
function ajusteTermico(p, termico) {
  if (termico === 'sente_calor') return (p.tecnologias || []).some(t => /gel|cool|ventila/i.test(t)) ? 1 : 0;
  if (termico === 'sente_frio') return 1;
  return 1;
}
function ajusteDor(p, dor) {
  if (dor === 'lombar') return (p.firmeza >= 3) ? 1 : 0;
  if (dor === 'cervical') return (p.firmeza === 3 || p.firmeza === 4) ? 1 : 0;
  if (dor === 'ombro' || dor === 'quadril') return (p.firmeza <= 3) ? 1 : 0;
  return 1;
}
function bonusEstoque(p, estoque, cidade) {
  const hasLocal = estoque.some(e => e.sku === p.sku && e.qtd > 0 && /cabo frio/i.test(e.local || ''));
  return hasLocal ? 1 : 0;
}
function penalidadeFirmeza(p, alvo) {
  return Math.abs(p.firmeza - alvo) > 1 ? 15 : 0;
}
export function rankear(produtos, respostas, precos, estoque) {
  const lista = [];
  for (const p of produtos) {
    let score = 0;
    score += compatPeso(p, respostas.peso_kg) * 60;
    score += ajustePosicao(p, respostas.posicao) * 10;
    score += ajusteTermico(p, respostas.termico) * 10;
    score += ajusteDor(p, respostas.dor) * 10;
    score += bonusEstoque(p, estoque, respostas.cidade) * 10;
    score -= penalidadeFirmeza(p, respostas.firmeza_desejada);
    const pm = precos.find(pr => pr.sku === p.sku);
    const justificativa = `Firmeza ${p.firmeza}, suporte ${p.suporte_peso_kg[0]}–${p.suporte_peso_kg[1]}kg, ${(p.tecnologias||[]).join(', ') || 'sem tech listada'}.`;
    lista.push({
      sku: p.sku,
      slug: p.slug,
      nome: p.nome,
      score,
      firmeza: p.firmeza,
      tecnologias: p.tecnologias,
      justificativa,
      preco: pm?.preco
    });
  }
  return lista.sort((a,b) => b.score - a.score);
}
export function waCta(slug, medida, nomeCliente) {
  const msg = `Quero o ${slug} na medida ${medida} — cliente: ${nomeCliente}`;
  return `https://wa.me/5522992410112?text=${encodeURIComponent(msg)}`;
}
