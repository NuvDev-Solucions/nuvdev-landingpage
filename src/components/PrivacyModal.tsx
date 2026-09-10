import React, { useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  ExternalLink, 
  Database, 
  UserCheck, 
  Mail,
  Scale
} from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
      aria-labelledby="privacy-modal-title"
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
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] sm:text-xs text-[#0CBFFD] uppercase tracking-wider font-semibold">
                LGPD • Lei Federal nº 13.709/2018
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
                Conforme
              </span>
            </div>
            <h3 id="privacy-modal-title" className="font-sans font-bold text-xl sm:text-2xl text-white">
              Privacidade &amp; Proteção de Dados
            </h3>
          </div>
        </div>

        {/* Executive Introduction Note */}
        <div className="p-4 rounded-2xl bg-[#161b2a]/90 border border-[#0CBFFD]/15 text-sm text-[#c2c6d8] leading-relaxed">
          <p>
            Na <strong className="text-white">NuvDev</strong>, tratamos a segurança e a confidencialidade dos seus dados e dos projetos desenvolvidos como diretrizes prioritárias de engenharia (<span className="text-[#0CBFFD] font-mono text-xs">Privacy by Design</span>). Confira abaixo o resumo das nossas práticas essenciais.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Item 1 */}
          <div className="p-4 rounded-2xl bg-[#161b2a] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#0CBFFD]">
              <Database className="w-4 h-4 shrink-0" />
              <h4 className="font-sans font-semibold text-sm text-white">
                Coleta Mínima &amp; Específica
              </h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Coletamos estritamente os dados essenciais (nome, e-mail corporativo, telefone e escopo técnico) apenas para elaboração de diagnóstico e atendimento personalizado.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-4 rounded-2xl bg-[#161b2a] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#0CBFFD]">
              <Lock className="w-4 h-4 shrink-0" />
              <h4 className="font-sans font-semibold text-sm text-white">
                Segurança Criptografada
              </h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Tráfego com criptografia TLS 1.3 ponta a ponta, armazenamento em nuvem segura com controle estrito de acessos (<span className="font-mono text-[11px] text-[#0CBFFD]">ISO 27001 Ready</span>).
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-4 rounded-2xl bg-[#161b2a] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#0CBFFD]">
              <UserCheck className="w-4 h-4 shrink-0" />
              <h4 className="font-sans font-semibold text-sm text-white">
                Seus Direitos (Art. 18 LGPD)
              </h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Você pode confirmar o tratamento, solicitar acesso, correção, anonimização, bloqueio ou eliminação dos seus dados a qualquer momento de forma simplificada.
            </p>
          </div>

          {/* Item 4 */}
          <div className="p-4 rounded-2xl bg-[#161b2a] border border-white/5 hover:border-[#0CBFFD]/30 transition-all flex flex-col gap-2">
            <div className="flex items-center gap-2.5 text-[#0CBFFD]">
              <Scale className="w-4 h-4 shrink-0" />
              <h4 className="font-sans font-semibold text-sm text-white">
                Não Comercialização
              </h4>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              A NuvDev nunca comercializa, aluga ou compartilha seus dados pessoais com terceiros para fins de marketing ou exploração publicitária.
            </p>
          </div>
        </div>

        {/* DPO Channel Card */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#1a1f2e]/60 border border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#252a39] flex items-center justify-center text-[#0CBFFD] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#94A3B8]">
                Encarregado de Proteção de Dados (DPO)
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
            Atendimento em até 48h úteis
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
            href="/privacidade"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#066eff] to-[#0CBFFD] text-white text-xs font-mono font-bold hover:shadow-[0_0_24px_rgba(12,191,253,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Abrir Artigos Completos da LGPD</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

