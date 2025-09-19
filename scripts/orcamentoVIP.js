// Orçamentos VIP - Geração automática de orçamento (JSON + HTML)
// Copywriting legal + CTA WhatsApp

class OrcamentoVIP {
  constructor() {
    this.whatsappNumero = '5522992410112';
    this.vendedor = 'Thalles Taranto';
    this.loja = 'Castor Cabo Frio';
    this.endereco = 'Região dos Lagos, RJ';
  }

  gerarOrcamentoJSON(dadosCliente, produtoRecomendado, alternativas = []) {
    const agora = new Date();
    const validoAte = new Date(agora.getTime() + (24 * 60 * 60 * 1000));
    
    return {
      metadata: {
        id: `ORC-${agora.getTime()}`,
        data_criacao: agora.toISOString(),
        valido_ate: validoAte.toISOString(),
        versao: '1.0',
        tipo: 'VIP',
        vendedor: this.vendedor,
        loja: this.loja
      },
      cliente: {
        nome: dadosCliente.nome || 'Cliente',
        telefone: dadosCliente.telefone || '',
        email: dadosCliente.email || '',
        perfil_sono: dadosCliente.perfilSono || {},
        necessidades: dadosCliente.necessidades || []
      },
      recomendacao_principal: {
        produto: produtoRecomendado.nome,
        sku: produtoRecomendado.sku,
        medida: dadosCliente.medida || 'Queen Size',
        preco_original: produtoRecomendado.preco,
        desconto_vip: this.calcularDescontoVIP(produtoRecomendado.preco),
        preco_final: this.calcularPrecoFinal(produtoRecomendado.preco),
        justificativa: produtoRecomendado.justificativa,
        grau_confianca: produtoRecomendado.confianca || 85,
        beneficios_principais: this.extrairBeneficios(produtoRecomendado),
        garantias: this.obterGarantias()
      },
      condicoes_especiais: {
        desconto_percentual: this.calcularPercentualDesconto(produtoRecomendado.preco),
        forma_pagamento: 'À vista ou parcelado em até 12x sem juros',
        frete: 'GRÁTIS para Cabo Frio e região',
        troca_garantida: '100 noites de teste em casa',
        prazo_entrega: '3 a 7 dias úteis',
        validade_oferta: '24 horas'
      },
      cta_whatsapp: this.gerarCTAWhatsApp(dadosCliente.nome, produtoRecomendado.nome, dadosCliente.medida),
      copywriting_legal: this.gerarCopywritingLegal(produtoRecomendado)
    };
  }

  calcularDescontoVIP(precoOriginal) {
    if (precoOriginal >= 3000) return precoOriginal * 0.25;
    if (precoOriginal >= 2000) return precoOriginal * 0.20;
    return precoOriginal * 0.15;
  }

  calcularPrecoFinal(precoOriginal, descontoCustom = null) {
    const desconto = descontoCustom || this.calcularDescontoVIP(precoOriginal);
    return precoOriginal - desconto;
  }

  calcularPercentualDesconto(precoOriginal) {
    const desconto = this.calcularDescontoVIP(precoOriginal);
    return Math.round((desconto / precoOriginal) * 100);
  }

  extrairBeneficios(produto) {
    return [
      `Firmeza ${produto.firmeza}/5 - Ideal para seu perfil de sono`,
      `Tecnologia Castor com ${produto.tecnologias?.join(", ") || "materiais premium"}`,
      'Adaptação natural da coluna vertebral',
      'Redução de pontos de pressão',
      'Durabilidade comprovada'
    ];
  }

  obterGarantias() {
    return [
      '10 anos de garantia Castor contra defeitos',
      '100 noites para testar em casa',
      'Troca gratuita se não se adaptar',
      'Frete grátis para Cabo Frio e região',
      'Assistência técnica especializada'
    ];
  }

  gerarCTAWhatsApp(nomeCliente, nomeProduto, medida) {
    const mensagem = `Olá! Sou ${nomeCliente || 'um cliente'} e quero garantir minha oferta VIP do ${nomeProduto} na medida ${medida || 'Queen'}. Vi meu orçamento personalizado!`;
    return `https://wa.me/${this.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
  }

  gerarCopywritingLegal(produto) {
    return `Este orçamento foi elaborado com base em análise personalizada do seu perfil de sono. Os colchões Castor são produzidos com tecnologia de ponta e garantia de qualidade. Resultados podem variar conforme adaptação individual. Ofertas sujeitas à disponibilidade de estoque. Garantia Castor de 10 anos contra defeitos de fabricação. Direito de arrependimento de 7 dias conforme CDC. Teste de 100 noites permite avaliação real do produto em seu ambiente domiciliar.`;
  }

  criarOrcamentoCompleto(dadosCliente, produtoRecomendado, alternativas = []) {
    const orcamentoJSON = this.gerarOrcamentoJSON(dadosCliente, produtoRecomendado, alternativas);
    
    return {
      json: orcamentoJSON,
      id: orcamentoJSON.metadata.id,
      valido_ate: orcamentoJSON.metadata.valido_ate,
      cta_whatsapp: orcamentoJSON.cta_whatsapp
    };
  }
}

export default OrcamentoVIP;

if (typeof window !== 'undefined') {
  window.OrcamentoVIP = OrcamentoVIP;
}
