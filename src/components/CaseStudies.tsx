import React from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';

interface CaseStudiesProps {
  onSelectCase: (caseStudy: CaseStudy) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({
  onSelectCase
}) => {
  return (
    <section className="relative max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8 py-20 scroll-mt-24" id="cases">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase text-[#0CBFFD] tracking-widest font-semibold">
            Resultados Mensuráveis
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#FEFEFE] tracking-tight">
            Cases de Sucesso em Produção
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#c2c6d8] max-w-md leading-relaxed">
          Engenharia aplicada gerando escalabilidade, redução de custos e impacto direto no faturamento de empresas parceiras.
        </p>
      </div>

      {/* 3 Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {CASE_STUDIES.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectCase(item)}
            className="rounded-2xl bg-[#0F172A] border border-[#14BDFE]/15 overflow-hidden flex flex-col shadow-lg hover:shadow-[0_0_32px_rgba(6,110,255,0.25)] hover:border-[#0CBFFD]/40 transition-all group cursor-pointer"
          >
            {/* Case Image */}
            <div className="relative h-52 w-full overflow-hidden bg-[#161b2a]">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent pointer-events-none"></div>

              {/* Tag Pill */}
              <span
                className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0F172A]/85 backdrop-blur-md font-mono text-xs font-semibold border border-white/10"
                style={{ color: item.tagColor }}
              >
                {item.tag}
              </span>
            </div>

            {/* Case Content */}
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-bold text-xl text-[#FEFEFE] group-hover:text-[#0CBFFD] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#c2c6d8] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Metrics Row */}
              <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                <div>
                  <span
                    className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight block"
                    style={{ color: item.metric1.color }}
                  >
                    {item.metric1.value}
                  </span>
                  <p className="font-sans text-xs text-[#94A3B8]">{item.metric1.label}</p>
                </div>
                <div>
                  <span
                    className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight block"
                    style={{ color: item.metric2.color }}
                  >
                    {item.metric2.value}
                  </span>
                  <p className="font-sans text-xs text-[#94A3B8]">{item.metric2.label}</p>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onSelectCase(item)}
                className="w-full mt-2 py-2.5 rounded-xl bg-[#1a1f2e] hover:bg-[#252a39] border border-[#14BDFE]/20 text-xs font-mono text-[#0CBFFD] hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>Ver Arquitetura e Detalhes</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
