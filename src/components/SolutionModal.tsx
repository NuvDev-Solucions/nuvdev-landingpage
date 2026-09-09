import React from 'react';
import { SolutionItem } from '../types';
import { X, CheckCircle2, ArrowRight, Layers, Cpu } from 'lucide-react';

interface SolutionModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onSelectForQuote: (solutionId: string) => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  solution,
  onClose,
  onSelectForQuote
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0F172A] border border-[#0CBFFD]/40 p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1a1f2e] text-[#94A3B8] hover:text-white hover:bg-[#252a39] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#252a39] border border-[#0CBFFD]/30 flex items-center justify-center text-[#0CBFFD] shrink-0">
            <span className="material-symbols-outlined text-[32px]">{solution.icon}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-[#0CBFFD] uppercase tracking-wider">
              {solution.category}
            </span>
            <h3 className="font-sans font-bold text-2xl text-white">
              {solution.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#c2c6d8] leading-relaxed">
          {solution.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="flex flex-col gap-3 bg-[#161b2a] p-5 rounded-2xl border border-white/5">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#0CBFFD] font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Entregáveis Técnicos da Arquitetura
          </h4>
          <ul className="flex flex-col gap-2.5">
            {solution.deliverables.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-[#dee2f6] flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0CBFFD] mt-1.5 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-xs text-[#94A3B8] uppercase">
            Stack Tecnológica Recomendada:
          </span>
          <div className="flex flex-wrap gap-2">
            {solution.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[#252a39] border border-[#14BDFE]/25 text-[#0CBFFD] font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-[#1a1f2e] text-[#dee2f6] text-xs font-mono hover:bg-[#252a39] transition-colors"
          >
            Fechar
          </button>
          <button
            onClick={() => {
              onSelectForQuote(solution.title);
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#066eff] to-[#0CBFFD] text-white text-xs font-mono font-bold hover:shadow-[0_0_20px_rgba(12,191,253,0.4)] transition-all flex items-center gap-1.5"
          >
            <span>Incluir no Diagnóstico</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
