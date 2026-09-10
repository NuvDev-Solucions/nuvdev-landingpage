import React, { useState } from 'react';
import { ProjectFormData } from '../types';
import { Check, Send, Lock, Code, Clock, CheckCircle2, Calculator, AlertCircle } from 'lucide-react';

interface DiagnosticFormProps {
  initialSolution?: string;
}

export const DiagnosticForm: React.FC<DiagnosticFormProps> = ({ initialSolution }) => {
  const [formData, setFormData] = useState<ProjectFormData>({
    solutions: initialSolution ? [initialSolution] : ['Sistemas Corporativos'],
    fullName: '',
    corporateEmail: '',
    phone: '',
    companySize: 'startup',
    projectDescription: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const solutionOptions = [
    { id: 'Sistemas Corporativos', label: 'Sistemas Corporativos' },
    { id: 'Autoatendimento / IA', label: 'Autoatendimento / IA' },
    { id: 'Aplicativo Mobile', label: 'Aplicativo Mobile' },
    { id: 'Portal / Website', label: 'Portal / Website' },
    { id: 'Plataforma EAD', label: 'Plataforma EAD' },
    { id: 'Outros / Migração', label: 'Outros / Migração' },
  ];

  const handleCheckboxChange = (sol: string) => {
    setFormData((prev) => {
      const exists = prev.solutions.includes(sol);
      return {
        ...prev,
        solutions: exists
          ? prev.solutions.filter((s) => s !== sol)
          : [...prev.solutions, sol]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const sizeLabels: Record<string, string> = {
      startup: 'Startup em crescimento (1-20 colaboradores)',
      media: 'Média empresa (21-100 colaboradores)',
      enterprise: 'Corporação / Enterprise (100+ colaboradores)'
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/4ce4470362e506b40277bcf0945e3873', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nome: formData.fullName,
          Email: formData.corporateEmail,
          Telefone: formData.phone || 'Não informado',
          'Porte da Empresa': sizeLabels[formData.companySize] || formData.companySize,
          'Soluções de Interesse': formData.solutions.join(', ') || 'Nenhuma selecionada',
          'Descrição do Projeto': formData.projectDescription || 'Não informado',
          _subject: `[NuvDev] Novo Diagnóstico Técnico - ${formData.fullName}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || 'Falha na resposta do servidor.');
      }
    } catch (err: unknown) {
      console.error('Erro ao enviar solicitação via FormSubmit:', err);
      setErrorMessage(
        'Não foi possível enviar automaticamente. Por favor, tente novamente ou nos envie diretamente em contato@nuvdev.com'
      );
    } finally {
      setLoading(false);
    }
  };

  // Dynamic estimate calculation based on selections
  const estimatedSprints = Math.max(6, formData.solutions.length * 3);

  return (
    <section className="relative max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8 py-20 scroll-mt-24" id="diagnostico">
      <div className="relative rounded-3xl bg-[#0F172A] border border-[#14BDFE]/20 p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
        {/* Ambient highlight glow inside card */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0775FF]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0CBFFD]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative">
          {/* Left: Value Proposition & Security Guarantees */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1f2e] border border-[#0CBFFD]/30 w-fit">
              <span className="material-symbols-outlined text-[#0CBFFD] text-[18px]">verified</span>
              <span className="font-mono text-xs text-[#0CBFFD] uppercase tracking-wider font-semibold">
                Diagnóstico Sem Custo
              </span>
            </div>

            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#FEFEFE] tracking-tight leading-tight">
              Diga-nos o que sua empresa precisa construir.
            </h2>

            <p className="text-sm sm:text-base text-[#c2c6d8] leading-relaxed">
              Nossa equipe sênior de engenheiros e arquitetos de software analisa suas especificações e elabora uma estimativa de prazo, investimento e arquitetura recomendada em até 24 horas.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col gap-3.5 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#252a39] border border-[#0CBFFD]/20 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-[#0CBFFD]" />
                </div>
                <span className="text-sm text-[#dee2f6]">
                  Acordo de Confidencialidade (NDA) imediato
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#252a39] border border-[#14BDFE]/20 flex items-center justify-center shrink-0">
                  <Code className="w-4 h-4 text-[#14BDFE]" />
                </div>
                <span className="text-sm text-[#dee2f6]">
                  Código 100% proprietário da sua empresa
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#252a39] border border-[#ccbeff]/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#ccbeff]" />
                </div>
                <span className="text-sm text-[#dee2f6]">
                  Retorno técnico detalhado em até 1 dia útil
                </span>
              </div>
            </div>

            {/* Live Estimation Helper Widget */}
            <div className="mt-4 p-4 rounded-xl bg-[#161b2a] border border-white/10 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span className="flex items-center gap-1.5 text-[#0CBFFD]">
                  <Calculator className="w-3.5 h-3.5" />
                  Prévia de Dimensionamento
                </span>
                <span>Sprint 0 + {estimatedSprints} semanas</span>
              </div>
              <p className="text-xs text-[#c2c6d8]">
                {formData.solutions.length} frente(s) selecionada(s). Arquitetura recomendada: microsserviços desacoplados com CI/CD na nuvem.
              </p>
            </div>
          </div>

          {/* Right: Interactive Form Module */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#161b2a] border border-[#0CBFFD]/40 flex flex-col items-center text-center gap-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Solicitação Recebida com Sucesso!</h3>
                <p className="text-sm text-[#c2c6d8] max-w-md leading-relaxed">
                  Obrigado, <strong className="text-white">{formData.fullName || 'Parceiro'}</strong>. Nossos arquitetos técnicos já receberam o escopo para <span className="text-[#0CBFFD]">{formData.solutions.join(', ')}</span> e entrarão em contato pelo e-mail <strong className="text-white">{formData.corporateEmail}</strong> em até 24 horas.
                </p>
                <div className="p-4 rounded-xl bg-[#0F172A] border border-white/5 w-full text-left font-mono text-xs text-[#94A3B8] flex flex-col gap-1">
                  <span>Protocolo: NUV-{Math.floor(100000 + Math.random() * 900000)}</span>
                  <span>SLA de Resposta: Em até 1 dia útil (NDA padrão acionado)</span>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      solutions: ['Sistemas Corporativos'],
                      fullName: '',
                      corporateEmail: '',
                      phone: '',
                      companySize: 'startup',
                      projectDescription: ''
                    });
                  }}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-[#252a39] text-[#0CBFFD] hover:bg-[#303444] text-xs font-mono transition-colors"
                >
                  Enviar Nova Solicitação
                </button>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/4ce4470362e506b40277bcf0945e3873"
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* FormSubmit Configuration Hidden Fields */}
                <input type="hidden" name="_subject" value={`[NuvDev] Novo Diagnóstico Técnico - ${formData.fullName || 'Contato'}`} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="solucoes_selecionadas" value={formData.solutions.join(', ')} />

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs flex items-center gap-2.5 animate-in fade-in duration-200">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Solution Selection Checkboxes */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#FEFEFE]">
                    Tipo de Solução Desejada
                  </label>
                  <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {solutionOptions.map((opt) => {
                      const isChecked = formData.solutions.includes(opt.id);
                      return (
                        <label
                          key={opt.id}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
                            isChecked
                              ? 'bg-[#1e2738] border-[#0CBFFD]/60 text-white shadow-sm'
                              : 'bg-[#1a1f2e] border-white/5 text-[#dee2f6] hover:bg-[#252a39]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            name="solucoes"
                            value={opt.id}
                            checked={isChecked}
                            onChange={() => handleCheckboxChange(opt.id)}
                            className="w-4 h-4 rounded text-[#0CBFFD] bg-[#090e1c] border-[#14BDFE]/30 focus:ring-0 cursor-pointer"
                          />
                          <span className="text-xs font-medium">{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm text-[#dee2f6]">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ex: Roberto Ferreira"
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1f2e] border border-white/10 text-[#FEFEFE] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#0CBFFD] focus:ring-1 focus:ring-[#0CBFFD]/30 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm text-[#dee2f6]">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.corporateEmail}
                      onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                      placeholder="roberto@suaempresa.com.br"
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1f2e] border border-white/10 text-[#FEFEFE] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#0CBFFD] focus:ring-1 focus:ring-[#0CBFFD]/30 transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Company Size Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm text-[#dee2f6]">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+55 (31) 90000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1f2e] border border-white/10 text-[#FEFEFE] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#0CBFFD] focus:ring-1 focus:ring-[#0CBFFD]/30 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm text-[#dee2f6]">
                      Porte da Empresa
                    </label>
                    <select
                      name="porte_empresa"
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1f2e] border border-white/10 text-[#FEFEFE] text-sm focus:outline-none focus:border-[#0CBFFD] focus:ring-1 focus:ring-[#0CBFFD]/30 transition-all cursor-pointer"
                    >
                      <option value="startup" className="bg-[#0F172A] text-white">
                        Startup em crescimento (1-20 colaboradores)
                      </option>
                      <option value="media" className="bg-[#0F172A] text-white">
                        Média empresa (21-100 colaboradores)
                      </option>
                      <option value="enterprise" className="bg-[#0F172A] text-white">
                        Corporação / Enterprise (100+ colaboradores)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Project Description Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm text-[#dee2f6]">
                    Resumo das necessidades do projeto
                  </label>
                  <textarea
                    rows={3}
                    name="descricao_projeto"
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Conte brevemente sobre o escopo, objetivos ou integrações necessárias..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1f2e] border border-white/10 text-[#FEFEFE] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#0CBFFD] focus:ring-1 focus:ring-[#0CBFFD]/30 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  id="submit-diagnostic-btn"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#066eff] via-[#0775FF] to-[#0CBFFD] text-[#FEFEFE] font-bold text-sm sm:text-base shadow-xl hover:shadow-[0_0_28px_rgba(12,191,253,0.5)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      Processando diagnóstico...
                    </span>
                  ) : (
                    <>
                      <span>Solicitar Proposta e Diagnóstico Técnico</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
