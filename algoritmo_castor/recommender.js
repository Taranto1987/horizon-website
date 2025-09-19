import { FIRMEZA_ESCALA } from './constants.js';

// Algoritmo v3 HARD - 12 critérios completos
// Cálculo IMC obrigatório para altura e peso

function calcularIMC(peso, altura) {
  if (!peso || !altura || altura <= 0 || peso <= 0) return null;
  const alturaMetros = altura / 100;
  return peso / (alturaMetros * alturaMetros);
}

function criterio1_posicao(p, posicao) {
  if (!posicao) return 0;
  if (posicao === 'lado') return (p.firmeza === 2 || p.firmeza === 3) ? 100 : 0;
  if (posicao === 'costas') return (p.firmeza === 3 || p.firmeza === 4) ? 100 : 0;
  if (posicao === 'bruços') return (p.firmeza === 4 || p.firmeza === 5) ? 100 : 0;
  return (p.firmeza >= 2 && p.firmeza <= 4) ? 60 : 0;
}

function criterio2_dormencia(p, dormencia) {
  if (!dormencia) return 50;
  if (dormencia === 'sim') return (p.firmeza >= 3) ? 100 : 20;
  return (p.firmeza <= 3) ? 100 : 60;
}

function criterio3_calor(p, termico) {
  if (!termico) return 50;
  if (termico === 'sente_calor') return (p.tecnologias || []).some(t => /gel|cool|ventila|fresh/i.test(t)) ? 100 : 20;
  if (termico === 'sente_frio') return 80;
  return 70;
}

function criterio4_casal(p, casal, medida) {
  if (!casal || casal === 'nao') return 80;
  const medidaCasal = ['casal', 'queen', 'king'].includes(medida?.toLowerCase());
  if (!medidaCasal) return 30;
  return (p.tecnologias || []).some(t => /pocket|individual/i.test(t)) ? 100 : 70;
}

function criterio5_firmeza(p, firmezaDesejada) {
  if (!firmezaDesejada) return 50;
  const diff = Math.abs(p.firmeza - firmezaDesejada);
  if (diff === 0) return 100;
  if (diff === 1) return 80;
  if (diff === 2) return 60;
  return 30;
}

function criterio6_peso(p, peso) {
  if (!peso || !p.suporte_peso_kg) return 0;
  const [minP, maxP] = p.suporte_peso_kg;
  if (peso >= minP && peso <= maxP) return 100;
  if (peso < minP && peso >= minP * 0.9) return 70;
  if (peso > maxP && peso <= maxP * 1.1) return 70;
  return 10;
}

function criterio7_altura(p, altura, peso) {
  if (!altura || !peso) return 0;
  const imc = calcularIMC(peso, altura);
  if (!imc) return 0;
  
  if (imc < 18.5) return (p.firmeza <= 3) ? 100 : 60; // Abaixo do peso
  if (imc >= 18.5 && imc < 25) return (p.firmeza >= 2 && p.firmeza <= 4) ? 100 : 70; // Normal
  if (imc >= 25 && imc < 30) return (p.firmeza >= 3) ? 100 : 50; // Sobrepeso
  return (p.firmeza >= 4) ? 100 : 30; // Obesidade
}

function criterio8_idade(p, idade) {
  if (!idade) return 50;
  if (idade < 30) return (p.firmeza >= 2 && p.firmeza <= 4) ? 100 : 70;
  if (idade >= 30 && idade < 50) return (p.firmeza >= 3) ? 100 : 60;
  if (idade >= 50 && idade < 65) return (p.firmeza >= 3 && p.firmeza <= 4) ? 100 : 50;
  return (p.firmeza >= 2 && p.firmeza <= 3) ? 100 : 40; // 65+
}

function criterio9_alergia(p, alergia) {
  if (!alergia || alergia === 'nao') return 80;
  return (p.tecnologias || []).some(t => /antiacaros|antibacteriano|hipoalergenico/i.test(t)) ? 100 : 30;
}

function criterio10_orcamento(p, orcamento, preco) {
  if (!orcamento || !preco) return 50;
  if (preco <= orcamento) return 100;
  if (preco <= orcamento * 1.2) return 80;
  if (preco <= orcamento * 1.5) return 60;
  return 20;
}

function criterio11_movimento(p, movimento) {
  if (!movimento) return 50;
  if (movimento === 'muito') return (p.tecnologias || []).some(t => /pocket|independente/i.test(t)) ? 100 : 30;
  if (movimento === 'pouco') return (p.tecnologias || []).some(t => /pocket/i.test(t)) ? 80 : 100;
  return 70;
}

function criterio12_durabilidade(p, durabilidade, estoque, cidade) {
  if (!durabilidade) return 50;
  let score = 70;
  
  // Bonus por garantia estendida
  if ((p.tecnologias || []).some(t => /premium|garantia/i.test(t))) score += 20;
  
  // Bonus por estoque local
  const hasLocal = estoque.some(e => e.sku === p.sku && e.qtd > 0 && /cabo frio/i.test(e.local || ''));
  if (hasLocal) score += 10;
  
  // Ajuste por durabilidade desejada
  if (durabilidade === 'alta') {
    score += (p.firmeza >= 3) ? 20 : 0;
  }
  
  return Math.min(score, 100);
}

export function rankear(produtos, respostas, precos, estoque) {
  // Validação obrigatória para altura e peso
  if (!respostas.altura || !respostas.peso_kg) {
    throw new Error('Altura e peso são obrigatórios para o Algoritmo v3 HARD');
  }

  const imc = calcularIMC(respostas.peso_kg, respostas.altura);
  const lista = [];
  
  for (const p of produtos) {
    const pm = precos.find(pr => pr.sku === p.sku);
    
    // Aplicar os 12 critérios
    let score = 0;
    const criterios = {
      posicao: criterio1_posicao(p, respostas.posicao),
      dormencia: criterio2_dormencia(p, respostas.dormencia),
      calor: criterio3_calor(p, respostas.termico),
      casal: criterio4_casal(p, respostas.casal, respostas.medida),
      firmeza: criterio5_firmeza(p, respostas.firmeza_desejada),
      peso: criterio6_peso(p, respostas.peso_kg),
      altura: criterio7_altura(p, respostas.altura, respostas.peso_kg),
      idade: criterio8_idade(p, respostas.idade),
      alergia: criterio9_alergia(p, respostas.alergia),
      orcamento: criterio10_orcamento(p, respostas.orcamento, pm?.preco),
      movimento: criterio11_movimento(p, respostas.movimento),
      durabilidade: criterio12_durabilidade(p, respostas.durabilidade, estoque, respostas.cidade)
    };

    // Score ponderado (altura e peso têm peso maior por serem obrigatórios)
    const pesos = {
      posicao: 0.15,
      dormencia: 0.08,
      calor: 0.08,
      casal: 0.06,
      firmeza: 0.12,
      peso: 0.20, // obrigatório
      altura: 0.15, // obrigatório 
      idade: 0.05,
      alergia: 0.04,
      orcamento: 0.03,
      movimento: 0.02,
      durabilidade: 0.02
    };

    score = Object.keys(criterios).reduce((acc, key) => {
      return acc + (criterios[key] * pesos[key]);
    }, 0);

    // Cálculo de confiança baseado na completude dos dados
    const camposPreenchidos = Object.keys(respostas).filter(key => 
      respostas[key] !== null && respostas[key] !== undefined && respostas[key] !== ''
    ).length;
    const confianca = Math.min(100, (camposPreenchidos / 12) * 100);

    const justificativa = `IMC: ${imc?.toFixed(1) || 'N/A'} | Firmeza ${p.firmeza}/5 | Suporte ${p.suporte_peso_kg[0]}–${p.suporte_peso_kg[1]}kg | Tecnologias: ${(p.tecnologias||[]).join(', ') || 'Padrão'} | Adequação: ${score.toFixed(0)}%`;

    lista.push({
      sku: p.sku,
      slug: p.slug,
      nome: p.nome,
      score: Math.round(score),
      firmeza: p.firmeza,
      tecnologias: p.tecnologias,
      justificativa,
      confianca: Math.round(confianca),
      criterios_detalhados: criterios,
      imc,
      preco: pm?.preco
    });
  }

  const ranking = lista.sort((a,b) => b.score - a.score);
  
  return {
    recomendacao_principal: ranking[0] || null,
    alternativas: ranking.slice(1, 4),
    todas_opcoes: ranking,
    metadados: {
      imc_calculado: imc,
      criterios_aplicados: 12,
      confianca_media: Math.round(ranking.reduce((acc, item) => acc + item.confianca, 0) / ranking.length) || 0
    }
  };
}

export function waCta(slug, medida, nomeCliente) {
  const msg = `Quero o ${slug} na medida ${medida} — cliente: ${nomeCliente}`;
  return `https://wa.me/5522992410112?text=${encodeURIComponent(msg)}`;
}
