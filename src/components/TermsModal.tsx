import React, { useEffect } from 'react';
import { 
  X, 
  FileText, 
  ExternalLink, 
  Cpu, 
  ShieldCheck, 
  Code2, 
  Clock, 
  Scale, 
  Mail 
} from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl lg:max-w-3xl rounded-3xl bg-[#0F172A] border border-[#0CBFFD]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(12,191,253,0.15)] flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1a1f2e] text-[#94A3B8] hover:text-white hover:bg-[#252a39] border border-white/5 hover:border-[#0CBFFD]/30 transition-all cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start sm:items-center gap-4 pr-10">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#161b2a] border border-[#0CBFFD]/40 flex items-center justify-center text-[#0CBFFD] shadow-[0_0_20px_rgba(12,191,253,0.2)] shrink-0">
            <FileText className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] sm:text-xs text-[#0CBFFD] uppercase tracking-wider font-semibold">
                DIRETRIZES CONTRATUAIS • ENGENHARIA DE SOFTWARE
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-[#0CBFFD] font-medium">
                Termos v2.4
              </span>
            </div>
            <h3 id="terms-modal-title" className="font-sans font-bold text-xl sm:text-2xl text-white">
              Termos de Serviço &amp; Contratação
            </h3>
          </div>
        </div>

        {/* Executive Summary Note */}
        <div className="p-4 rounded-2xl bg-[#161b2a]/90 border border-[#0CBFFD]/15 text-sm text-[#c2c6d8] leading-relaxed">
          <p>
            Na <strong className="text-white">NuvDev</strong>, todos os projetos são orientados por clareza de escopo, entregas ágeis contínuas e rigorosa segurança jurídica e técnica mútua. Veja os 4 pilares essenciais das nossas condições de prestação de serviços.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Item 1 */}
          <div className="p-4 rounded-2xl bg-[#161b2a] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#0CBFFD]">
              <Cpu className="w-4 h-4 shrink-0" />
              <h4 className="font-sans font-semibold text-sm text-white">
                Escopo Técnico &amp; Sprints
              </h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Cada software ou plataforma possui escopo, arquitetura e marcos de entrega discriminados em Proposta Técnica vinculante com acompanhamento semanal via metodologia ágil.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-4 rounded-2xl bg-[#161b2a] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#0CBFFD]">
              <Code2 className="w-4 h-4 shrink-0" />
              <h4 className="font-sans font-semibold text-sm text-white">
                Propriedade do Código-Fonte
              </h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              O código-fonte e os módulos customizados desenvolvidos especificamente para a sua empresa são transferidos com titularidade patrimonial integral após quitação do projeto.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-4 rounded-2xl bg-[#161b2a] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#0CBFFD]">
              <Clock className="w-4 h-4 shrink-0" />
              <h4 className="font-sans font-semibold text-sm text-white">
                Garantia Técnica &amp; SLA
              </h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Fase de homologação assistida com garantia de 30 a 90 dias para correção de bugs sem custo adicional, além de opções de Acordos de Nível de Serviço (SLA 99.9%) contínuos.
            </p>
          </div>

          {/* Item 4 */}
          <div className="p-4 rounded-2xl bg-[#161b2a] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#0CBFFD]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <h4 className="font-sans font-semibold text-sm text-white">
                Confidencialidade Estrita (NDA)
              </h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Assinatura mútua de Acordo de Confidencialidade resguardando regras de negócio, dados proprietários, infraestrutura e patentes corporativas de forma irrestrita.
            </p>
          </div>
        </div>

        {/* Legal Channel Card */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#1a1f2e]/60 border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#252a39] flex items-center justify-center text-[#0CBFFD] shrink-0">
              <Scale className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#94A3B8]">
                Assessoria Jurídica &amp; Contratos
              </span>
              <a 
                href="mailto:contato@nuvdev.com" 
                className="text-xs sm:text-sm font-medium text-white hover:text-[#0CBFFD] transition-colors"
              >
                contato@nuvdev.com
              </a>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#94A3B8] sm:text-right">
            Modelos de Contrato B2B Prontos
          </span>
        </div>

        {/* Modal Actions Footer */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1a1f2e] text-[#dee2f6] text-xs font-mono font-medium hover:bg-[#252a39] border border-white/5 transition-colors cursor-pointer"
          >
            Fechar Resumo
          </button>

          <a
            href="/termos"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#066eff] to-[#0CBFFD] text-white text-xs font-mono font-bold hover:shadow-[0_0_24px_rgba(12,191,253,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Abrir Artigos Completos dos Termos</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

