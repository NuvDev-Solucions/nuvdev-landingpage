import React, { useEffect } from 'react';
import { routeService } from '../services/routeService';
import { ASSETS } from '../data/mockData';
import { 
  ArrowLeft, 
  Printer, 
  ShieldCheck, 
  Lock, 
  Database, 
  UserCheck, 
  Scale, 
  Mail, 
  FileText, 
  ExternalLink, 
  ChevronRight,
  ArrowUp
} from 'lucide-react';

export const PrivacyPage: React.FC = () => {
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
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>CONFORMIDADE LEGAL • LEI FEDERAL Nº 13.709/2018 (LGPD)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Política de Privacidade &amp; Proteção de Dados
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
            A NuvDev Soluções em Tecnologia atua sob os mais altos padrões de segurança da informação e governança corporativa. Este documento reúne todos os artigos aplicáveis ao tratamento de dados pessoais em nossos sistemas e canais digitais.
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
            <span className="font-semibold text-xs sm:text-sm text-white">v2.4 (Anual)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-white/5">
            <span className="block font-mono text-[10px] text-[#94A3B8] uppercase">Status</span>
            <span className="font-semibold text-xs sm:text-sm text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Em Vigor
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-white/5">
            <span className="block font-mono text-[10px] text-[#94A3B8] uppercase">Encarregado (DPO)</span>
            <span className="font-semibold text-xs sm:text-sm text-[#0CBFFD] truncate block">contato@nuvdev.com</span>
          </div>
        </div>

        {/* Quick Index / Table of Contents */}
        <section className="mb-12 p-6 rounded-3xl bg-[#0F172A] border border-[#0CBFFD]/30 shadow-[0_0_30px_rgba(12,191,253,0.1)]">
          <h2 className="text-sm font-mono uppercase text-white font-bold tracking-wider mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#0CBFFD]" />
            Sumário Interativo dos Artigos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {[
              { id: 'artigo-1', label: '01. Objeto e Âmbito de Aplicação' },
              { id: 'artigo-2', label: '02. Glossário e Conceitos Jurídicos' },
              { id: 'artigo-3', label: '03. Princípios do Tratamento de Dados' },
              { id: 'artigo-4', label: '04. Categorias de Dados Coletados' },
              { id: 'artigo-5', label: '05. Bases Legais e Finalidades' },
              { id: 'artigo-6', label: '06. Segurança, Criptografia & Nuvem' },
              { id: 'artigo-7', label: '07. Compartilhamento e Operadores' },
              { id: 'artigo-8', label: '08. Direitos do Titular (Art. 18)' },
              { id: 'artigo-9', label: '09. Ciclo de Vida e Retenção' },
              { id: 'artigo-10', label: '10. Cookies e Telemetria de Uso' },
              { id: 'artigo-11', label: '11. Transferência Internacional' },
              { id: 'artigo-12', label: '12. Canal do Encarregado (DPO)' },
              { id: 'artigo-13', label: '13. Foro e Disposições Finais' },
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
              Esta Política de Privacidade regulamenta as operações de tratamento de dados pessoais realizadas pela <strong className="text-white">NuvDev Tecnologia da Informação</strong> em seu portal web, canais de atendimento, formulários de diagnóstico técnico e na prestação de serviços de engenharia e consultoria de software.
            </p>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              As diretrizes aqui dispostas cumprem com exatidão a <strong>Lei Federal nº 13.709/2018 (LGPD)</strong>, o <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong> e os normativos complementares da Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
          </article>

          {/* Art. 2 */}
          <article id="artigo-2" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 2º
              </span>
              <h2 className="text-xl font-bold text-white">Glossário e Conceitos Jurídicos</h2>
            </div>
            <ul className="flex flex-col gap-2.5 text-sm text-[#c2c6d8] mt-1">
              <li><strong className="text-white">Titular:</strong> Pessoa natural a quem se referem os dados pessoais que são objeto de tratamento.</li>
              <li><strong className="text-white">Dado Pessoal:</strong> Informação relacionada a pessoa natural identificada ou identificável (nome, e-mail, telefone corporativo, etc.).</li>
              <li><strong className="text-white">Tratamento:</strong> Qualquer operação realizada com dados pessoais (coleta, produção, recepção, classificação, utilização, arquivamento ou descarte).</li>
              <li><strong className="text-white">Controlador:</strong> Pessoa física ou jurídica a quem competem as decisões sobre o tratamento de dados pessoais.</li>
              <li><strong className="text-white">Encarregado (DPO):</strong> Profissional indicado para atuar como canal oficial de comunicação entre o controlador, os titulares e a ANPD.</li>
              <li><strong className="text-white">Privacy by Design:</strong> Abordagem que integra salvaguardas de privacidade e confidencialidade desde as fases iniciais de arquitetura de software.</li>
            </ul>
          </article>

          {/* Art. 3 */}
          <article id="artigo-3" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 3º
              </span>
              <h2 className="text-xl font-bold text-white">Princípios Orientadores do Tratamento</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Todo o ciclo de vida dos dados gerenciados pela NuvDev é estritamente pautado pelos princípios do Art. 6º da LGPD:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1 text-xs">
              <div className="p-3 rounded-xl bg-[#161b2a] border border-white/5">
                <span className="font-semibold text-white block mb-1">Finalidade &amp; Adequação</span>
                <span className="text-[#94A3B8]">Tratamento exclusivo para propósitos legítimos e comunicados previamente ao titular.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#161b2a] border border-white/5">
                <span className="font-semibold text-white block mb-1">Necessidade (Minimização)</span>
                <span className="text-[#94A3B8]">Limitação estrita ao volume essencial de dados para cumprir o objetivo solicitado.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#161b2a] border border-white/5">
                <span className="font-semibold text-white block mb-1">Livre Acesso &amp; Transparência</span>
                <span className="text-[#94A3B8]">Informações claras e acesso fácil e gratuito sobre os tratamentos realizados.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#161b2a] border border-white/5">
                <span className="font-semibold text-white block mb-1">Segurança &amp; Prevenção</span>
                <span className="text-[#94A3B8]">Mecanismos técnicos avançados para evitar incidentes ou vazamentos ilícitos.</span>
              </div>
            </div>
          </article>

          {/* Art. 4 */}
          <article id="artigo-4" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 4º
              </span>
              <h2 className="text-xl font-bold text-white">Categorias de Dados Coletados</h2>
            </div>
            <div className="flex flex-col gap-3 text-sm text-[#c2c6d8]">
              <div className="p-4 rounded-2xl bg-[#161b2a] border-l-2 border-[#0CBFFD]">
                <strong className="text-white block mb-1">1. Dados de Contato e Diagnóstico Técnico:</strong>
                Nome completo, e-mail corporativo, número de telefone/WhatsApp, porte da organização e descrição das necessidades do projeto fornecidos voluntariamente via formulário.
              </div>
              <div className="p-4 rounded-2xl bg-[#161b2a] border-l-2 border-[#0CBFFD]">
                <strong className="text-white block mb-1">2. Dados de Sessão Técnica:</strong>
                Endereço IP (com armazenamento anonimizado), carimbos de data e hora de conexão, parâmetros técnicos de requisições de API para prevenção de ataques DDoS.
              </div>
              <div className="p-4 rounded-2xl bg-[#161b2a] border-l-2 border-[#0CBFFD]">
                <strong className="text-white block mb-1">3. Dados de Ambientes sob Medida:</strong>
                Qualquer dado compartilhado para prova de conceito (PoC) é regido por Acordos de Confidencialidade (NDA) bilaterais com dados ofuscados/mockados.
              </div>
            </div>
          </article>

          {/* Art. 5 */}
          <article id="artigo-5" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 5º
              </span>
              <h2 className="text-xl font-bold text-white">Bases Legais e Finalidades de Tratamento</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              O tratamento fundamenta-se nas seguintes bases legais estabelecidas pelo Art. 7º da LGPD:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[#c2c6d8]">
              <li><strong className="text-white">Execução de Contrato (Art. 7º, V):</strong> Necessário para emitir diagnósticos técnicos preliminares, estruturar arquiteturas de software e operacionalizar a entrega dos sistemas contratados.</li>
              <li><strong className="text-white">Cumprimento de Obrigação Legal (Art. 7º, II):</strong> Guarda obrigatória de registros de conexão conforme estabelece o Art. 15 da Lei nº 12.965/2014.</li>
              <li><strong className="text-white">Legítimo Interesse (Art. 7º, IX):</strong> Salvaguarda da segurança computacional dos sistemas e prevenção contra fraudes cibernéticas.</li>
            </ul>
          </article>

          {/* Art. 6 */}
          <article id="artigo-6" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 6º
              </span>
              <h2 className="text-xl font-bold text-white">Segurança da Informação, Criptografia &amp; Nuvem</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              A infraestrutura da NuvDev opera com controles técnicos alinhados às diretrizes da norma <strong className="text-white">ISO/IEC 27001</strong>:
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[#c2c6d8]">
              <li><strong className="text-white">Criptografia em Trânsito:</strong> Tráfego protegido via TLS 1.3 ponta a ponta com certificados de chave forte.</li>
              <li><strong className="text-white">Criptografia em Repouso:</strong> Volumes de dados criptografados utilizando o algoritmo AES-256 bits.</li>
              <li><strong className="text-white">Infraestrutura em Nuvem:</strong> Servidores em datacenters certificados internacionalmente (AWS - Amazon Web Services).</li>
              <li><strong className="text-white">Princípio do Menor Privilégio:</strong> Acesso restrito a colaboradores autorizados mediante autenticação de múltiplos fatores (MFA).</li>
            </ul>
          </article>

          {/* Art. 7 */}
          <article id="artigo-7" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 7º
              </span>
              <h2 className="text-xl font-bold text-white">Compartilhamento de Dados com Terceiros</h2>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-300 font-medium">
              A NuvDev NÃO comercializa, NÃO aluga e NÃO cede dados pessoais sob nenhuma hipótese a empresas parceiras de publicidade ou corretores de dados.
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              O compartilhamento ocorre estritamente com fornecedores operacionais de infraestrutura de nuvem indispensáveis à execução tecnológica dos serviços, sujeitos a acordos rígidos de confidencialidade.
            </p>
          </article>

          {/* Art. 8 */}
          <article id="artigo-8" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 8º
              </span>
              <h2 className="text-xl font-bold text-white">Direitos dos Titulares de Dados (Art. 18 LGPD)</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              O titular dos dados pessoais tem total garantia do exercício gratuito dos seguintes direitos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#dee2f6]">
              <div className="p-2.5 rounded-xl bg-[#161b2a]">✓ Confirmação da existência de tratamento</div>
              <div className="p-2.5 rounded-xl bg-[#161b2a]">✓ Acesso e cópia dos dados tratados</div>
              <div className="p-2.5 rounded-xl bg-[#161b2a]">✓ Retificação e atualização cadastral</div>
              <div className="p-2.5 rounded-xl bg-[#161b2a]">✓ Anonimização ou bloqueio de dados excessivos</div>
              <div className="p-2.5 rounded-xl bg-[#161b2a]">✓ Eliminação definitiva dos dados</div>
              <div className="p-2.5 rounded-xl bg-[#161b2a]">✓ Portabilidade de dados conforme normativo ANPD</div>
            </div>
            <p className="text-xs text-[#94A3B8] mt-2">
              Para exercer qualquer dos direitos acima, formalize sua requisição para o e-mail: <strong className="text-[#0CBFFD]">contato@nuvdev.com</strong>.
            </p>
          </article>

          {/* Art. 9 */}
          <article id="artigo-9" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 9º
              </span>
              <h2 className="text-xl font-bold text-white">Ciclo de Vida e Retenção dos Dados</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Os dados coletados são mantidos apenas pelo período necessário para atender à finalidade originária. Diagnósticos comerciais não consolidados são descartados em até 12 meses. Registros contábeis e fiscais decorrentes de contratos executados são conservados pelo prazo legal de 5 anos.
            </p>
          </article>

          {/* Art. 10 */}
          <article id="artigo-10" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 10º
              </span>
              <h2 className="text-xl font-bold text-white">Cookies e Telemetria de Uso</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Nosso website opera com cookies estritamente técnicos essenciais para balanceamento de requisições e integridade de formulários. Não executamos rastreamento invasivo entre websites para fins publicitários de terceiros.
            </p>
          </article>

          {/* Art. 11 */}
          <article id="artigo-11" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 11º
              </span>
              <h2 className="text-xl font-bold text-white">Transferência Internacional de Dados</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Eventuais transferências internacionais decorrentes do uso de infraestrutura em nuvem (AWS) atendem integralmente ao Art. 33 da LGPD, mediante a adoção de cláusulas-padrão contratuais e garantias de segurança equivalentes aos padrões brasileiros.
            </p>
          </article>

          {/* Art. 12 */}
          <article id="artigo-12" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 12º
              </span>
              <h2 className="text-xl font-bold text-white">Canal Oficial do Encarregado (DPO)</h2>
            </div>
            <div className="p-4 rounded-2xl bg-[#161b2a] border border-[#0CBFFD]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#94A3B8]">Encarregado de Proteção de Dados (DPO)</span>
                <span className="text-base font-bold text-white">contato@nuvdev.com</span>
                <span className="text-xs text-[#94A3B8]">Prazo de resposta preliminar: até 48 horas úteis</span>
              </div>
              <a
                href="mailto:contato@nuvdev.com"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#066eff] to-[#0CBFFD] text-white font-mono text-xs font-bold transition-all text-center"
              >
                Enviar Solicitação
              </a>
            </div>
          </article>

          {/* Art. 13 */}
          <article id="artigo-13" className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#0CBFFD] bg-[#161b2a] px-3 py-1 rounded-lg border border-[#0CBFFD]/20">
                Art. 13º
              </span>
              <h2 className="text-xl font-bold text-white">Foro e Disposições Finais</h2>
            </div>
            <p className="text-sm text-[#c2c6d8] leading-relaxed">
              Esta Política é interpretada conforme o ordenamento jurídico brasileiro. Fica eleito o Foro da Comarca de Belo Horizonte, Estado de Minas Gerais, com exclusão de qualquer outro, para solucionar quaisquer dúvidas oriundas deste documento.
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
            <span>Voltar ao Topo da Política</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-8 text-center text-xs text-[#94A3B8] bg-[#090e1c]">
        <p>&copy; 2025 NuvDev Tecnologia da Informação. Todos os direitos reservados.</p>
        <p className="mt-1 text-[11px] text-[#64748B]">
          Conformidade integral com a Lei Federal nº 13.709/2018 • Belo Horizonte - MG | Hub Remoto
        </p>
      </footer>
    </div>
  );
};

