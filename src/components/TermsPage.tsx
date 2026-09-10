import React, { useEffect } from 'react';
import { routeService } from '../services/routeService';
import { ASSETS } from '../data/mockData';
import { 
  ArrowLeft, 
  Printer, 
  FileText, 
  Cpu, 
  ShieldCheck, 
  Code2, 
  Clock, 
  Scale, 
  ChevronRight, 
  ArrowUp,
  CheckCircle2
} from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070E] text-[#dee2f6] selection:bg-[#0CBFFD]/20 selection:text-[#0CBFFD] flex flex-col justify-between">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[#14BDFE]/15 bg-[#090e1c]/90 backdrop-blur-md">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
          <button
            onClick={() => routeService.navigate('/')}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
            aria-label="Ir para a página inicial"
          >
            <img src={ASSETS.logo} alt="NuvDev Logo" className="h-9 w-auto object-contain" />
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-xl bg-[#161b2a] border border-[#14BDFE]/20 text-[#dee2f6] hover:text-white hover:border-[#0CBFFD]/40 text-xs font-mono font-medium transition-all flex items-center gap-2 cursor-pointer"
              title="Imprimir ou Salvar em PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>

            <button
              onClick={() => routeService.navigate('/')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#066eff] to-[#0CBFFD] text-white text-xs font-mono font-bold shadow-[0_0_20px_rgba(12,191,253,0.3)] hover:shadow-[0_0_30px_rgba(12,191,253,0.5)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Voltar ao Início</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 w-full flex-1">
        {/* Hero Section */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0CBFFD]/10 border border-[#0CBFFD]/30 text-[#0CBFFD] font-mono text-xs font-semibold mb-4">
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span>DIRETRIZES CONTRATUAIS • ENGENHARIA DE SOFTWARE &amp; CLOUD</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Termos de Serviço &amp; Condições de Contratação
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
            Estes termos e artigos regulamentam as condições gerais para prestação de serviços de arquitetura técnica, desenvolvimento de plataformas sob medida, implantação de inteligência artificial e consultoria em nuvem pela NuvDev Tecnologia da Informação.
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-white/5">
            <span className="block font-mono text-[10px] text-[#94A3B8] uppercase">Última Revisão</span>
            <span className="font-semibold text-xs sm:text-sm text-white">Março de 2025</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-white/5">
            <span className="block font-mono text-[10px] text-[#94A3B8] uppercase">Versão</span>
            <span className="font-semibold text-xs sm:text-sm text-white">v2.4 (Corporativa)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-white/5">
            <span className="block font-mono text-[10px] text-[#94A3B8] uppercase">Jurisdição</span>
            <span className="font-semibold text-xs sm:text-sm text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Brasil
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-white/5">
            <span className="block font-mono text-[10px] text-[#94A3B8] uppercase">Canal Jurídico</span>
            <span className="font-semibold text-xs sm:text-sm text-[#0CBFFD] truncate block">contato@nuvdev.com</span>
          </div>
        </div>

        {/* Quick Index / Table of Contents */}
        <section className="mb-12 p-6 rounded-3xl bg-[#0F172A] border border-[#0CBFFD]/30 shadow-[0_0_30px_rgba(12,191,253,0.1)]">
          <h2 className="text-sm font-mono uppercase text-white font-bold tracking-wider mb-4 flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#0CBFFD]" />
            Sumário dos Artigos Contratuais
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              { id: 'artigo-1', label: '01. Objeto e Âmbito de Aplicação' },
              { id: 'artigo-2', label: '02. Propostas Técnicas e Diagnósticos' },
              { id: 'artigo-3', label: '03. Metodologia Ágil e Gestão de Escopo' },
              { id: 'artigo-4', label: '04. Obrigações da NuvDev' },
              { id: 'artigo-5', label: '05. Obrigações da Empresa Contratante' },
              { id: 'artigo-6', label: '06. Propriedade Intelectual e Código-Fonte' },
              { id: 'artigo-7', label: '07. Homologação, Testes e Garantia' },
              { id: 'artigo-8', label: '08. Acordos de Nível de Serviço (SLA) & Nuvem' },
              { id: 'artigo-9', label: '09. Confidencialidade e Sigilo Comercial (NDA)' },
              { id: 'artigo-10', label: '10. Limitação de Responsabilidade' },
              { id: 'artigo-11', label: '11. Rescisão e Transição de Repositórios' },
              { id: 'artigo-12', label: '12. Legislação Aplicável e Foro' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToAnchor(item.id)}
                className="p-2 rounded-xl bg-[#161b2a] hover:bg-[#252a39] text-[#c2c6d8] hover:text-[#0CBFFD] text-left transition-all flex items-center justify-between cursor-pointer border border-transparent hover:border-[#0CBFFD]/25"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </button>
            ))}
          </div>
        </section>

        {/* Articles List */}
        <div className="flex flex-col gap-6">
          {/* Art. 1 */}
          <article id="artigo-1" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 1º
              </span>
              <h2 className="text-xl font-bold text-white">Objeto e Âmbito de Aplicação</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Estes Termos de Serviço estabelecem os princípios regulatórios para a prestação de serviços de desenvolvimento de software customizado, sistemas web/mobile, totens interativos, soluções de inteligência artificial e arquitetura em nuvem executados pela <strong className="text-white">NuvDev Tecnologia da Informação</strong> em favor de pessoas físicas ou jurídicas contratantes.
            </p>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              A formalização contratual ocorre mediante aprovação expressa de Proposta Técnica Comercial vinculante ou assinatura de Contrato de Prestação de Serviços de Desenvolvimento de Software (CPSDS).
            </p>
          </article>

          {/* Art. 2 */}
          <article id="artigo-2" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 2º
              </span>
              <h2 className="text-xl font-bold text-white">Propostas Técnicas e Diagnósticos Prévios</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Os orçamentos e diagnósticos técnicos preliminares gerados via portal ou formulário possuem validade de 15 (quinze) dias corridos, salvo estipulação em contrário. O escopo definitivo de engenharia, cronograma de sprints e valores pactuados são consolidados na Proposta Técnica formal, que passa a integrar o contrato como anexo inseparável.
            </p>
          </article>

          {/* Art. 3 */}
          <article id="artigo-3" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 3º
              </span>
              <h2 className="text-xl font-bold text-white">Metodologia Ágil e Gestão de Escopo</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              A NuvDev adota engenharia orientada a metodologias ágeis (Scrum / Kanban), com entregas incrementais divididas em ciclos (Sprints):
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[#c2c6d8]">
              <li><strong className="text-white">Alinhamentos Periódicos:</strong> Reuniões de demonstração (Sprint Reviews) para validação do software em ambiente de homologação.</li>
              <li><strong className="text-white">Gestão de Mudanças (Change Requests):</strong> Quaisquer alterações que extrapolem os requisitos descritos na Proposta Técnica inicial serão objeto de aditivo técnico e comercial acordado entre as partes antes de sua execução.</li>
            </ul>
          </article>

          {/* Art. 4 */}
          <article id="artigo-4" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 4º
              </span>
              <h2 className="text-xl font-bold text-white">Obrigações da NuvDev</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#161b2a] border border-white/5">
                <span className="font-semibold text-white block mb-1">Qualidade de Engenharia</span>
                <span className="text-[#94A3B8]">Desenvolver o software seguindo padrões modernos de clean code, arquitetura modular e boas práticas de segurança.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#161b2a] border border-white/5">
                <span className="font-semibold text-white block mb-1">Prazos e Transparência</span>
                <span className="text-[#94A3B8]">Cumprir o cronograma estipulado e reportar com antecedência eventuais impedimentos técnicos de terceiros.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#161b2a] border border-white/5">
                <span className="font-semibold text-white block mb-1">Testes e Homologação</span>
                <span className="text-[#94A3B8]">Disponibilizar versão funcional em ambiente de staging antes do lançamento oficial em produção.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#161b2a] border border-white/5">
                <span className="font-semibold text-white block mb-1">Documentação e Repositório</span>
                <span className="text-[#94A3B8]">Fornecer orientações de deploy, documentação de APIs e entrega dos repositórios contratados.</span>
              </div>
            </div>
          </article>

          {/* Art. 5 */}
          <article id="artigo-5" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 5º
              </span>
              <h2 className="text-xl font-bold text-white">Obrigações da Empresa Contratante</h2>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-[#c2c6d8]">
              <li><strong className="text-white">Fornecimento de Insumos:</strong> Disponibilizar regras de negócio, acessos a APIs de terceiros, identidades visuais e chaves de integração necessárias ao desenvolvimento.</li>
              <li><strong className="text-white">Validações Tempestivas:</strong> Realizar testes de aceite e homologação dentro do prazo previsto (até 10 dias úteis após cada liberação de sprint).</li>
              <li><strong className="text-white">Pagamentos Pactuados:</strong> Honrar as parcelas e marcos de faturamento acordados na Proposta Técnica.</li>
            </ul>
          </article>

          {/* Art. 6 */}
          <article id="artigo-6" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 6º
              </span>
              <h2 className="text-xl font-bold text-white">Propriedade Intelectual e Titularidade do Código</h2>
            </div>
            <div className="p-4 rounded-2xl bg-[#161b2a] border-l-2 border-[#0CBFFD] text-sm text-[#c2c6d8] leading-relaxed">
              Mediante a quitação integral dos valores estipulados no contrato, <strong className="text-white">todos os direitos patrimoniais do código-fonte, esquemas de banco de dados e ativos gráficos customizados desenvolvidos para o projeto serão transferidos à Contratante</strong>, que passará a deter a posse plena e livre exploração dos sistemas.
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Permanecem resguardadas como propriedade da NuvDev bibliotecas reutilizáveis de arquitetura genérica de mercado, frameworks open-source sob suas respectivas licenças (MIT, Apache, etc.) e componentes pré-existentes de infraestrutura.
            </p>
          </article>

          {/* Art. 7 */}
          <article id="artigo-7" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 7º
              </span>
              <h2 className="text-xl font-bold text-white">Homologação, Testes e Período de Garantia</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              A NuvDev concede um período de garantia técnica de <strong className="text-white">30 (trinta) a 90 (noventa) dias corridos</strong> após o aceite final do software. Durante essa garantia, quaisquer inconformidades (bugs) em relação aos requisitos aprovados serão corrigidas sem custo adicional.
            </p>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              A garantia não cobre alterações solicitadas em regras de negócio já aprovadas, falhas oriundas de modificações no código feitas por terceiros sem anuência da NuvDev ou instabilidades em APIs externas não controladas.
            </p>
          </article>

          {/* Art. 8 */}
          <article id="artigo-8" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 8º
              </span>
              <h2 className="text-xl font-bold text-white">Acordos de Nível de Serviço (SLA) &amp; Sustentação Cloud</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Após o encerramento da garantia de entrega, a Contratante poderá optar pela contratação de planos contínuos de sustentação, suporte técnico e monitoramento de infraestrutura em nuvem, com Acordos de Nível de Serviço (SLA) formalizados para tempo de resposta e restabelecimento de serviços (até 99.9% de uptime em ambientes AWS/GCP).
            </p>
          </article>

          {/* Art. 9 */}
          <article id="artigo-9" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 9º
              </span>
              <h2 className="text-xl font-bold text-white">Confidencialidade e Sigilo Comercial (NDA)</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Ambas as partes obrigam-se a manter sob o mais rigoroso sigilo todas as informações comerciais, segredos industriais, dados cadastrais, regras de precificação e arquiteturas tecnológicas trocadas durante as tratativas e execução do projeto, vigendo a obrigação de confidencialidade por prazo não inferior a 5 (cinco) anos após o término da relação contratual.
            </p>
          </article>

          {/* Art. 10 */}
          <article id="artigo-10" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 10º
              </span>
              <h2 className="text-xl font-bold text-white">Limitação de Responsabilidade</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              A responsabilidade financeira indenizatória total da NuvDev por quaisquer perdas decorrentes de falhas técnicas comprovadamente imputáveis à sua equipe será limitada ao valor global efetivamente pago pela Contratante no projeto correspondente, excluindo-se lucros cessantes, perdas indiretas de receita ou danos provocados por provedores de telecomunicações e datacenters de terceiros.
            </p>
          </article>

          {/* Art. 11 */}
          <article id="artigo-11" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 11º
              </span>
              <h2 className="text-xl font-bold text-white">Rescisão e Transição de Repositórios</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              O contrato poderá ser rescindido por mútuo acordo ou por infração não sanada em até 15 (quinze) dias após notificação formal. Em caso de rescisão, a NuvDev realizará a transição ordenada dos repositórios de código e documentação técnica desenvolvidos até a data, mediante a quitação das horas e sprints executadas até o momento.
            </p>
          </article>

          {/* Art. 12 */}
          <article id="artigo-12" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 12º
              </span>
              <h2 className="text-xl font-bold text-white">Legislação Aplicável e Foro</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Os presentes Termos são regidos e interpretados em consonância com o ordenamento jurídico da República Federativa do Brasil. As partes elegem expressamente o Foro da Comarca de Belo Horizonte, Estado de Minas Gerais, com renúncia a qualquer outro, por mais privilegiado que seja, para dirimir eventuais disputas.
            </p>
          </article>
        </div>

        {/* Floating Back to Top Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#161b2a] border border-[#14BDFE]/20 text-[#dee2f6] hover:text-[#0CBFFD] hover:border-[#0CBFFD]/40 font-mono text-xs transition-all cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Voltar ao Topo dos Termos</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-8 text-center text-xs text-[#94A3B8] bg-[#090e1c]">
        <p>&copy; 2025 NuvDev Tecnologia da Informação. Todos os direitos reservados.</p>
        <p className="mt-1 text-[11px] text-[#64748B]">
          Condições Gerais de Contratação &amp; Engenharia • Belo Horizonte - MG | Hub Remoto
        </p>
      </footer>

      {/* Floating WhatsApp Quick Contact Button */}
      <WhatsAppButton />
    </div>
  );
};

