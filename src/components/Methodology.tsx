import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../data/mockData';
import { MethodologyStep } from '../types';
import { Check, ChevronRight, Layers, FileCheck } from 'lucide-react';

export const Methodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState<MethodologyStep | null>(METHODOLOGY_STEPS[0]);

  return (
    <section className="relative max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8 py-20 bg-[#090e1c]/80 border border-[#14BDFE]/15 rounded-3xl my-10 shadow-2xl backdrop-blur-sm scroll-mt-24" id="metodologia">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-14">
        <span className="font-mono text-xs uppercase text-[#14BDFE] tracking-widest font-semibold">
          Processo Consistente &amp; Transparente
        </span>
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#FEFEFE] tracking-tight">
          Nossa Metodologia Ágil de Desenvolvimento
        </h2>
        <p className="text-base sm:text-lg text-[#c2c6d8] max-w-2xl leading-relaxed">
          Como transformamos demandas complexas em software funcional com previsibilidade, entregas contínuas e governança sólida.
        </p>
      </div>

      {/* Timeline Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        {METHODOLOGY_STEPS.map((step) => {
          const isSelected = activeStep?.number === step.number;
          return (
            <div
              key={step.number}
              onClick={() => setActiveStep(isSelected ? null : step)}
              className={`flex flex-col gap-3 p-6 rounded-2xl bg-[#0F172A] border transition-all cursor-pointer relative overflow-hidden shadow-md group ${
                isSelected
                  ? 'border-[#0CBFFD] shadow-[0_0_24px_rgba(12,191,253,0.25)] bg-[#1a1f2e]'
                  : 'border-[#14BDFE]/15 hover:border-[#0CBFFD]/40 hover:bg-[#161b2a]'
              }`}
            >
              {/* Number Badge */}
              <div
                className={`w-11 h-11 rounded-xl bg-[#252a39] border border-[#14BDFE]/20 flex items-center justify-center font-mono text-lg font-bold transition-transform group-hover:scale-110 ${step.colorClass}`}
              >
                {step.number}
              </div>

              {/* Title & Short Description */}
              <h4 className="font-sans font-bold text-lg text-[#FEFEFE] group-hover:text-[#0CBFFD] transition-colors leading-snug">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#c2c6d8] leading-relaxed">
                {step.description}
              </p>

              {/* SLA Tag */}
              <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                <span className={`font-mono text-xs font-semibold ${step.colorClass}`}>
                  {step.sla}
                </span>
                <span className="material-symbols-outlined text-[16px] text-[#94A3B8] group-hover:text-white group-hover:translate-x-0.5 transition-all">
                  chevron_right
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Step Detail Drawer */}
      {activeStep && (
        <div className="mt-8 p-6 md:p-8 rounded-2xl bg-[#161b2a] border border-[#0CBFFD]/30 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className={`font-mono text-2xl font-bold ${activeStep.colorClass}`}>
                Etapa {activeStep.number}
              </span>
              <span className="text-white font-bold text-xl">
                {activeStep.title}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#252a39] text-[#0CBFFD] text-xs font-mono border border-[#0CBFFD]/30">
              {activeStep.sla}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                Detalhamento Operacional
              </span>
              <p className="text-sm sm:text-base text-[#dee2f6] leading-relaxed">
                {activeStep.detail}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-2.5 bg-[#0F172A] p-4 rounded-xl border border-white/5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0CBFFD] flex items-center gap-1.5">
                <FileCheck className="w-4 h-4" />
                <span>Entregáveis Validados</span>
              </span>
              <ul className="flex flex-col gap-2">
                {activeStep.deliverables.map((item, idx) => (
                  <li key={idx} className="text-xs text-[#c2c6d8] flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
