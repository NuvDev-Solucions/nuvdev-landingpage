import React from 'react';
import { SOLUTIONS } from '../data/mockData';
import { SolutionItem } from '../types';
import { ArrowRight, Sparkles, CheckCircle2, Touchpad, Zap, Smartphone, GraduationCap, Cloud } from 'lucide-react';

interface BentoGridProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onRequestQuoteWithSolution: (solutionId: string) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  onSelectSolution,
  onRequestQuoteWithSolution
}) => {
  return (
    <section className="relative max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8 py-20 scroll-mt-24" id="solucoes">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-14">
        <span className="font-mono text-xs uppercase text-[#0CBFFD] tracking-widest font-semibold">
          Capacidades de Engenharia
        </span>
        <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#FEFEFE] tracking-tight">
          Soluções e Especialidades da{' '}
          <span className="bg-gradient-to-r from-[#0CBFFD] via-[#0775FF] to-[#454BFF] text-transparent bg-clip-text">
            NuvDev
          </span>
        </h2>
        <p className="text-base sm:text-lg text-[#c2c6d8] max-w-xl leading-relaxed">
          Construímos ativos digitais resilientes, desenhados para resolver dores operacionais e viabilizar novos modelos de negócio.
        </p>
      </div>

      {/* Bento Grid 6 Units */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Card 1: Sistemas Personalizados (Span 7) */}
        <div
          onClick={() => onSelectSolution(SOLUTIONS[0])}
          className="lg:col-span-7 rounded-2xl bg-[#0F172A] border border-[#14BDFE]/15 p-6 sm:p-8 flex flex-col justify-between group shadow-lg hover:border-[#0CBFFD]/40 hover:shadow-[0_0_28px_rgba(6,110,255,0.22)] transition-all cursor-pointer relative overflow-hidden"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#252a39] border border-[#0CBFFD]/20 flex items-center justify-center text-[#0CBFFD] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">domain_verification</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#1a1f2e] border border-[#14BDFE]/20 text-[#14BDFE]">
                Corporativo
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#FEFEFE] group-hover:text-[#0CBFFD] transition-colors">
                {SOLUTIONS[0].title}
              </h3>
              <p className="text-sm sm:text-base text-[#c2c6d8] leading-relaxed">
                {SOLUTIONS[0].description}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[#0CBFFD] text-sm font-semibold">
              <span>{SOLUTIONS[0].badge}</span>
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
            </div>
            <span className="text-xs font-mono text-[#94A3B8] group-hover:text-white flex items-center gap-1 transition-colors">
              Explorar arquitetura <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Card 2: Autoatendimento & Chatbots IA (Span 5) */}
        <div
          onClick={() => onSelectSolution(SOLUTIONS[1])}
          className="lg:col-span-5 rounded-2xl bg-[#0F172A] border border-[#14BDFE]/15 p-6 sm:p-8 flex flex-col justify-between group shadow-lg hover:border-[#0CBFFD]/40 hover:shadow-[0_0_28px_rgba(12,191,253,0.22)] transition-all cursor-pointer relative overflow-hidden"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#252a39] border border-[#14BDFE]/20 flex items-center justify-center text-[#14BDFE] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">smart_toy</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#1a1f2e] border border-[#0CBFFD]/20 text-[#0CBFFD]">
                IA &amp; Totens
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#FEFEFE] group-hover:text-[#0CBFFD] transition-colors">
                {SOLUTIONS[1].title}
              </h3>
              <p className="text-sm sm:text-base text-[#c2c6d8] leading-relaxed">
                {SOLUTIONS[1].description}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="font-mono text-xs text-[#94A3B8]">
              {SOLUTIONS[1].badge}
            </span>
            <span className="material-symbols-outlined text-[#14BDFE] group-hover:translate-x-1 transition-transform">
              touch_app
            </span>
          </div>
        </div>

        {/* Card 3: Sites Institucionais & Portais Web (Span 4) */}
        <div
          onClick={() => onSelectSolution(SOLUTIONS[2])}
          className="lg:col-span-4 rounded-2xl bg-[#0F172A] border border-[#14BDFE]/15 p-6 sm:p-7 flex flex-col justify-between group shadow-lg hover:border-[#0CBFFD]/40 hover:shadow-[0_0_28px_rgba(20,189,254,0.18)] transition-all cursor-pointer"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#252a39] border border-[#89d5ff]/20 flex items-center justify-center text-[#89d5ff] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">web</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-bold text-xl text-[#FEFEFE] group-hover:text-[#0CBFFD] transition-colors">
                {SOLUTIONS[2].title}
              </h3>
              <p className="text-sm text-[#c2c6d8] leading-relaxed">
                {SOLUTIONS[2].description}
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[#89d5ff] font-mono text-xs">
            <span>{SOLUTIONS[2].badge}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 4: Apps Mobile (iOS & Android) (Span 4) */}
        <div
          onClick={() => onSelectSolution(SOLUTIONS[3])}
          className="lg:col-span-4 rounded-2xl bg-[#0F172A] border border-[#14BDFE]/15 p-6 sm:p-7 flex flex-col justify-between group shadow-lg hover:border-[#6629FF]/40 hover:shadow-[0_0_28px_rgba(102,41,255,0.22)] transition-all cursor-pointer"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#252a39] border border-[#ccbeff]/20 flex items-center justify-center text-[#ccbeff] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">phone_iphone</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-bold text-xl text-[#FEFEFE] group-hover:text-[#ccbeff] transition-colors">
                {SOLUTIONS[3].title}
              </h3>
              <p className="text-sm text-[#c2c6d8] leading-relaxed">
                {SOLUTIONS[3].description}
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[#ccbeff] font-mono text-xs">
            <span>{SOLUTIONS[3].badge}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 5: Plataformas Educacionais & EAD (Span 4) */}
        <div
          onClick={() => onSelectSolution(SOLUTIONS[4])}
          className="lg:col-span-4 rounded-2xl bg-[#0F172A] border border-[#14BDFE]/15 p-6 sm:p-7 flex flex-col justify-between group shadow-lg hover:border-[#454BFF]/40 hover:shadow-[0_0_28px_rgba(69,75,255,0.22)] transition-all cursor-pointer"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#252a39] border border-[#b1c5ff]/20 flex items-center justify-center text-[#b1c5ff] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">school</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-bold text-xl text-[#FEFEFE] group-hover:text-[#b1c5ff] transition-colors">
                {SOLUTIONS[4].title}
              </h3>
              <p className="text-sm text-[#c2c6d8] leading-relaxed">
                {SOLUTIONS[4].description}
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[#b1c5ff] font-mono text-xs">
            <span>{SOLUTIONS[4].badge}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 6: Cloud & Infraestrutura (Span 12) */}
        <div
          onClick={() => onSelectSolution(SOLUTIONS[5])}
          className="lg:col-span-12 rounded-2xl bg-[#1a1f2e] border border-[#14BDFE]/20 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl hover:border-[#0CBFFD]/50 transition-all cursor-pointer group"
        >
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#0CBFFD]">
              <span className="material-symbols-outlined text-[22px]">cloud_sync</span>
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                DevOps &amp; Cloud Architecture
              </span>
            </div>
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#FEFEFE] group-hover:text-[#0CBFFD] transition-colors">
              {SOLUTIONS[5].title}
            </h3>
            <p className="text-sm sm:text-base text-[#c2c6d8] leading-relaxed">
              {SOLUTIONS[5].description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-[#0F172A] border border-[#14BDFE]/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0CBFFD]">shield</span>
              <span className="font-mono text-xs text-[#FEFEFE]">LGPD &amp; SOC2 Compliant</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-[#0F172A] border border-[#14BDFE]/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#14BDFE]">speed</span>
              <span className="font-mono text-xs text-[#FEFEFE]">Zero Downtime Deploy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
