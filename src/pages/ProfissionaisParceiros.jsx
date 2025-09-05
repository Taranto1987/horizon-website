import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Stethoscope, MapPin, Phone, Mail, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ProfissionaisParceiros = () => {
  const pageTitle = "Profissionais Parceiros da Saúde do Sono";
  const pageDescription = "Conecte-se com especialistas em Cabo Frio e região que confiam e recomendam os colchões Castor para o bem-estar de seus pacientes.";

  const parceiros = [
    {
      nome: "Dr. Sono Bom",
      especialidade: "Ortopedista Especialista em Coluna",
      foto: "Retrato profissional do Dr. Sono Bom sorrindo",
      descricao: "Com mais de 15 anos de experiência, Dr. Sono Bom é referência no tratamento de dores na coluna e recomenda colchões Castor para um suporte adequado.",
      contato: { tel: "(22) 98888-1111", email: "drsonobom@email.com", local: "Clínica Coluna Saudável, Centro" },
      parceria: "Indica modelos ortopédicos Castor para pacientes com necessidades específicas."
    },
    {
      nome: "Fisio Relax",
      especialidade: "Clínica de Fisioterapia e Reabilitação",
      foto: "Equipe da clínica Fisio Relax em frente à fachada",
      descricao: "A Fisio Relax utiliza colchões Castor em suas salas de repouso e recomenda para pacientes em recuperação e prevenção de lesões.",
      contato: { tel: "(22) 97777-2222", email: "contato@fisiorelax.com", local: "Rua do Alívio, 45 - Braga" },
      parceria: "Colabora na orientação postural e escolha do colchão ideal para cada caso."
    },
    {
      nome: "Quiro Ajuste Certo",
      especialidade: "Quiropraxista",
      foto: "Quiropraxista realizando ajuste em paciente",
      descricao: "Especialista em alinhamento vertebral, recomenda colchões Castor que promovem a manutenção dos ajustes quiropráticos durante o sono.",
      contato: { tel: "(22) 96666-3333", email: "quiro@ajustecerto.com", local: "Av. da Postura, 789 - Palmeiras" },
      parceria: "Orienta sobre a importância do colchão na saúde da coluna integrada à quiropraxia."
    },
    {
      nome: "Clínica Sonho Leve",
      especialidade: "Especialistas em Medicina do Sono",
      foto: "Fachada moderna da Clínica Sonho Leve",
      descricao: "A Clínica Sonho Leve é parceira na pesquisa e desenvolvimento de soluções para um sono reparador, indicando Castor pela qualidade e tecnologia.",
      contato: { tel: "(22) 95555-4444", email: "atendimento@sonholeve.med.br", local: "Alameda dos Sonhos, 10 - Passagem" },
      parceria: "Testa e valida a eficácia dos colchões Castor para diferentes distúrbios do sono."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12 md:py-16"
    >
      <header className="text-center mb-12 md:mb-16">
        <motion.h1 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold gradient-text mb-4"
        >
          {pageTitle}
        </motion.h1>
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          {pageDescription}
        </motion.p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {parceiros.map((parceiro, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="glass-effect-castor rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-primary/20 transition-shadow duration-300 flex flex-col"
          >
            <div className="flex flex-col sm:flex-row items-center gap-5 mb-5">
              <img  
                alt={`Foto de ${parceiro.nome}`} 
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/30 shadow-lg flex-shrink-0"
               src="https://images.unsplash.com/photo-1675806998504-e037bb684870" />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-foreground">{parceiro.nome}</h2>
                <p className="text-primary font-medium text-sm">{parceiro.especialidade}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{parceiro.descricao}</p>
            
            <div className="bg-secondary/50 p-4 rounded-lg mb-5">
              <div className="flex items-center gap-2 text-primary mb-1.5">
                <Award className="w-5 h-5" />
                <h4 className="font-semibold text-sm">Parceria com Castor Cabo Frio:</h4>
              </div>
              <p className="text-muted-foreground/80 text-xs">{parceiro.parceria}</p>
            </div>

            <div className="mt-auto space-y-2 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {parceiro.contato.local}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-3.5 h-3.5 text-primary" /> {parceiro.contato.tel}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-3.5 h-3.5 text-primary" /> {parceiro.contato.email}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity:0, y:30 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.6, delay:0.5 }}
        className="text-center mt-16 glass-effect-castor p-8 rounded-2xl"
      >
        <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-foreground mb-3">Seja um Profissional Parceiro!</h3>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Se você é um profissional da saúde (fisioterapeuta, ortopedista, quiropraxista, etc.) em Cabo Frio e região, e se preocupa com a qualidade do sono e saúde da coluna dos seus pacientes, entre em contato conosco para explorar oportunidades de parceria.
        </p>
        <Button 
          onClick={() => toast({ title: "🚧 Funcionalidade em Desenvolvimento", description: "O formulário de parceria será implementado em breve! 🚀"})}
          className="button-castor-primary px-8 py-3 text-base"
        >
          Quero ser Parceiro
        </Button>
      </motion.div>

    </motion.div>
  );
};

export default ProfissionaisParceiros;