import React from 'react';
import { CaseStudy } from '../types';
import { X, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';

interface CaseModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onRequestSimilar: (title: string) => void;
}

export const CaseModal: React.FC<CaseModalProps> = ({
  caseStudy,
  onClose,
  onRequestSimilar
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0F172A] border border-[#0CBFFD]/40 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] overflow-y-auto">
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#161b2a] shrink-0">
          <img
            src={caseStudy.imageUrl}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-[#0F172A]/80 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tag & Title on Bottom */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col gap-1">
            <span
              className="px-3 py-1 rounded-full bg-[#0F172A]/90 backdrop-blur-md font-mono text-xs font-semibold w-fit border border-white/10"
              style={{ color: caseStudy.tagColor }}
            >
              {caseStudy.tag}
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white">
              {caseStudy.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#161b2a] border border-white/10">
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold block" style={{ color: caseStudy.metric1.color }}>
                {caseStudy.metric1.value}
              </span>
              <p className="text-xs text-[#94A3B8]">{caseStudy.metric1.label}</p>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold block" style={{ color: caseStudy.metric2.color }}>
                {caseStudy.metric2.value}
              </span>
              <p className="text-xs text-[#94A3B8]">{caseStudy.metric2.label}</p>
            </div>
            <div>
              <span className="text-xs font-mono text-[#94A3B8] block">Segmento</span>
              <p className="text-sm font-semibold text-white">{caseStudy.clientIndustry}</p>
            </div>
            <div>
              <span className="text-xs font-mono text-[#94A3B8] block">Prazo de Execução</span>
              <p className="text-sm font-semibold text-[#0CBFFD]">{caseStudy.duration}</p>
            </div>
          </div>

          {/* Context & Challenge */}
          <div className="flex flex-col gap-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#0CBFFD] font-bold">
              Desafio &amp; Solução Implementada
            </h4>
            <p className="text-sm sm:text-base text-[#c2c6d8] leading-relaxed">
              {caseStudy.fullDescription}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="flex flex-col gap-2.5 bg-[#161b2a] p-5 rounded-2xl border border-white/5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0CBFFD]" />
              Destaques da Arquitetura de Software
            </h4>
            <ul className="flex flex-col gap-2">
              {caseStudy.architectureHighlights.map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-[#dee2f6] flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0CBFFD] mt-1.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial Quote */}
          {caseStudy.testimonial && (
            <div className="p-5 rounded-2xl bg-[#090e1c] border-l-4 border-[#0CBFFD] flex flex-col gap-3">
              <p className="text-sm italic text-white/90 leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </p>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">{caseStudy.testimonial.author}</span>
                <span className="text-[11px] text-[#94A3B8]">{caseStudy.testimonial.role}</span>
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-[#1a1f2e] text-[#dee2f6] text-xs font-mono hover:bg-[#252a39] transition-colors"
            >
              Fechar
            </button>
            <button
              onClick={() => {
                onRequestSimilar(caseStudy.title);
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#066eff] to-[#0CBFFD] text-white text-xs font-mono font-bold hover:shadow-[0_0_20px_rgba(12,191,253,0.4)] transition-all flex items-center gap-1.5"
            >
              <span>Solicitar Projeto Similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
