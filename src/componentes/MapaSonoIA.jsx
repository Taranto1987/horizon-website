import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, User, Ruler, Weight, Calendar, AlertTriangle, Thermometer, Users, Activity, ShieldCheck, Target, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { rankear } from '../../algoritmo_castor/recommender.js';

const MapaSonoIA = ({ onRecommendation, produtos = [], precos = [], estoque = [] }) => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [erros, setErros] = useState({});
  const [processando, setProcessando] = useState(false);

  const persona = {
    nome: "Guardião do Sono REN",
    avatar: "🛌",
    apresentacao: "Olá! Sou o Guardião do Sono REN, especialista em encontrar o colchão Castor perfeito para sua coluna e bem-estar. Vamos criar seu Mapa do Sono personalizado!"
  };

  const etapas = [
    {
      id: 'apresentacao',
      titulo: 'Bem-vindo ao Mapa do Sono IA',
      icone: Brain,
      campos: []
    },
    {
      id: 'dados_fisicos',
      titulo: 'Dados Físicos (Obrigatórios)',
      icone: User,
      campos: [
        { id: 'altura', label: 'Sua altura (cm)', tipo: 'number', min: 140, max: 220, obrigatorio: true, placeholder: 'Ex: 175' },
        { id: 'peso_kg', label: 'Seu peso (kg)', tipo: 'number', min: 40, max: 200, obrigatorio: true, placeholder: 'Ex: 70' },
        { id: 'idade', label: 'Sua idade', tipo: 'number', min: 18, max: 100, obrigatorio: false, placeholder: 'Ex: 35' }
      ]
    },
    {
      id: 'habitos_sono',
      titulo: 'Seus Hábitos de Sono',
      icone: Activity,
      campos: [
        { 
          id: 'posicao', 
          label: 'Como você prefere dormir?', 
          tipo: 'radio', 
          opcoes: [
            { valor: 'lado', label: 'De lado', desc: 'Durmo principalmente de lado' },
            { valor: 'costas', label: 'De costas', desc: 'Durmo principalmente de costas' },
            { valor: 'bruços', label: 'De bruços', desc: 'Durmo principalmente de bruços' },
            { valor: 'misto', label: 'Vario posições', desc: 'Mudo de posição durante a noite' }
          ]
        },
        { 
          id: 'dormencia', 
          label: 'Sente dormência ou formigamento?', 
          tipo: 'radio', 
          opcoes: [
            { valor: 'nao', label: 'Não', desc: 'Raramente sinto dormência' },
            { valor: 'sim', label: 'Sim', desc: 'Frequentemente acordo com dormência' }
          ]
        }
      ]
    },
    {
      id: 'conforto_termico',
      titulo: 'Conforto Térmico',
      icone: Thermometer,
      campos: [
        { 
          id: 'termico', 
          label: 'Como você se sente durante a noite?', 
          tipo: 'radio', 
          opcoes: [
            { valor: 'sente_calor', label: 'Sinto calor', desc: 'Acordo suado ou com calor' },
            { valor: 'sente_frio', label: 'Sinto frio', desc: 'Acordo com frio' },
            { valor: 'normal', label: 'Temperatura normal', desc: 'Raramente tenho problemas térmicos' }
          ]
        }
      ]
    },
    {
      id: 'preferencias',
      titulo: 'Preferências Pessoais',
      icone: Target,
      campos: [
        { 
          id: 'firmeza_desejada', 
          label: 'Que firmeza você prefere?', 
          tipo: 'radio',
          opcoes: [
            { valor: 1, label: 'Muito macio', desc: 'Colchão bem macio que me abrace' },
            { valor: 2, label: 'Macio', desc: 'Macio mas com algum suporte' },
            { valor: 3, label: 'Intermediário', desc: 'Nem muito macio nem muito firme' },
            { valor: 4, label: 'Firme', desc: 'Firme com bom suporte' },
            { valor: 5, label: 'Muito firme', desc: 'Bem firme e resistente' }
          ]
        },
        { 
          id: 'casal', 
          label: 'Dormirá com outra pessoa?', 
          tipo: 'radio', 
          opcoes: [
            { valor: 'nao', label: 'Sozinho(a)', desc: 'Durmo sozinho(a)' },
            { valor: 'sim', label: 'Em casal', desc: 'Durmo com meu(minha) parceiro(a)' }
          ]
        },
        { 
          id: 'movimento', 
          label: 'Você se move muito durante o sono?', 
          tipo: 'radio', 
          opcoes: [
            { valor: 'pouco', label: 'Pouco', desc: 'Durmo quieto(a) na mesma posição' },
            { valor: 'medio', label: 'Médio', desc: 'Me movimento normalmente' },
            { valor: 'muito', label: 'Muito', desc: 'Me movimento bastante durante a noite' }
          ]
        }
      ]
    },
    {
      id: 'saude_orcamento',
      titulo: 'Saúde e Orçamento',
      icone: ShieldCheck,
      campos: [
        { 
          id: 'alergia', 
          label: 'Possui alergias?', 
          tipo: 'radio', 
          opcoes: [
            { valor: 'nao', label: 'Não tenho alergias', desc: 'Não possuo alergias conhecidas' },
            { valor: 'acaros', label: 'Ácaros', desc: 'Sou alérgico(a) a ácaros' },
            { valor: 'outras', label: 'Outras alergias', desc: 'Tenho outras alergias' }
          ]
        },
        { id: 'orcamento', label: 'Orçamento máximo (R$)', tipo: 'number', min: 500, max: 10000, obrigatorio: false, placeholder: 'Ex: 2500' },
        { 
          id: 'durabilidade', 
          label: 'Prioridade na durabilidade?', 
          tipo: 'radio', 
          opcoes: [
            { valor: 'normal', label: 'Normal', desc: 'Durabilidade padrão está boa' },
            { valor: 'alta', label: 'Alta durabilidade', desc: 'Quero que dure muitos anos' }
          ]
        }
      ]
    }
  ];

  const validarCamposObrigatorios = (etapa) => {
    const novosErros = {};
    
    etapa.campos.forEach(campo => {
      if (campo.obrigatorio) {
        const valor = respostas[campo.id];
        if (!valor || valor === '' || valor === null || valor === undefined) {
          novosErros[campo.id] = `${campo.label} é obrigatório`;
        } else if (campo.tipo === 'number') {
          const num = Number(valor);
          if (isNaN(num) || num < campo.min || num > campo.max) {
            novosErros[campo.id] = `${campo.label} deve estar entre ${campo.min} e ${campo.max}`;
          }
        }
      }
    });

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const proximaEtapa = () => {
    const etapa = etapas[etapaAtual];
    
    if (etapa.campos.length > 0) {
      if (!validarCamposObrigatorios(etapa)) {
        return;
      }
    }

    if (etapaAtual < etapas.length - 1) {
      setEtapaAtual(etapaAtual + 1);
    } else {
      gerarRecomendacao();
    }
  };

  const etapaAnterior = () => {
    if (etapaAtual > 0) {
      setEtapaAtual(etapaAtual - 1);
    }
  };

  const gerarRecomendacao = async () => {
    setProcessando(true);
    
    try {
      // Validação final dos campos obrigatórios
      if (!respostas.altura || !respostas.peso_kg) {
        throw new Error('Altura e peso são obrigatórios para gerar sua recomendação');
      }

      const resultado = rankear(produtos, respostas, precos, estoque);
      
      if (onRecommendation) {
        onRecommendation(resultado, respostas);
      }
    } catch (error) {
      console.error('Erro ao gerar recomendação:', error);
      setErros({ geral: error.message });
    } finally {
      setProcessando(false);
    }
  };

  const atualizarResposta = (campo, valor) => {
    setRespostas(prev => ({ ...prev, [campo]: valor }));
    // Limpar erro do campo quando o usuário digita
    if (erros[campo]) {
      setErros(prev => ({ ...prev, [campo]: undefined }));
    }
  };

  const renderCampo = (campo) => {
    const valor = respostas[campo.id] || '';
    const erro = erros[campo.id];

    switch (campo.tipo) {
      case 'number':
        return (
          <div key={campo.id} className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              {campo.label} {campo.obrigatorio && <span className="text-red-500">*</span>}
            </label>
            <input
              type="number"
              min={campo.min}
              max={campo.max}
              placeholder={campo.placeholder}
              value={valor}
              onChange={(e) => atualizarResposta(campo.id, e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${erro ? 'border-red-500' : 'border-gray-300'}`}
            />
            {erro && <p className="text-red-500 text-sm">{erro}</p>}
          </div>
        );

      case 'radio':
        return (
          <div key={campo.id} className="space-y-3">
            <label className="block text-sm font-medium text-foreground">
              {campo.label} {campo.obrigatorio && <span className="text-red-500">*</span>}
            </label>
            <div className="space-y-2">
              {campo.opcoes.map(opcao => (
                <label key={opcao.valor} className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name={campo.id}
                    value={opcao.valor}
                    checked={valor === opcao.valor}
                    onChange={(e) => atualizarResposta(campo.id, e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-medium text-foreground">{opcao.label}</div>
                    <div className="text-sm text-muted-foreground">{opcao.desc}</div>
                  </div>
                </label>
              ))}
            </div>
            {erro && <p className="text-red-500 text-sm">{erro}</p>}
          </div>
        );

      default:
        return null;
    }
  };

  const etapa = etapas[etapaAtual];
  const Icone = etapa.icone;
  const progresso = ((etapaAtual + 1) / etapas.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-lg"
    >
      {/* Persona do Guardião do Sono */}
      <div className="flex items-center space-x-4 mb-6 p-4 bg-primary/10 rounded-lg">
        <div className="text-4xl">{persona.avatar}</div>
        <div>
          <h3 className="font-bold text-lg text-primary">{persona.nome}</h3>
          {etapaAtual === 0 && (
            <p className="text-muted-foreground text-sm">{persona.apresentacao}</p>
          )}
        </div>
      </div>

      {/* Barra de Progresso */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Etapa {etapaAtual + 1} de {etapas.length}</span>
          <span>{Math.round(progresso)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-primary h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progresso}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Título da Etapa */}
      <div className="flex items-center space-x-3 mb-6">
        <Icone className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-bold text-foreground">{etapa.titulo}</h2>
      </div>

      {/* Campos da Etapa */}
      <div className="space-y-6 mb-8">
        {etapa.campos.map(renderCampo)}
      </div>

      {/* Erro Geral */}
      {erros.geral && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {erros.geral}
        </div>
      )}

      {/* Navegação */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={etapaAnterior}
          disabled={etapaAtual === 0}
        >
          Voltar
        </Button>

        <Button
          onClick={proximaEtapa}
          disabled={processando}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {processando ? (
            'Processando...'
          ) : etapaAtual === etapas.length - 1 ? (
            <>
              <Brain className="w-4 h-4 mr-2" />
              Gerar Mapa do Sono
            </>
          ) : (
            'Próximo'
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default MapaSonoIA;