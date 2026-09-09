import React from 'react';
import { TelemetryMockup } from './TelemetryMockup';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreSolutions
}) => {
  return (
    <section id="inicio" className="relative max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 md:pb-24 scroll-mt-24">
      {/* Ambient Lighting Background Halos */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#066eff]/20 rounded-full blur-[128px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] bg-[#6629FF]/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-2/3 left-10 w-80 h-80 bg-[#0CBFFD]/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Tagline Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#252a39] border border-[#0CBFFD]/25 w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0CBFFD] animate-pulse"></span>
            <span className="font-mono text-xs text-[#0CBFFD] uppercase tracking-wide">
              Tecnologia sob medida para acelerar o futuro da sua empresa
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-[54px] text-[#FEFEFE] tracking-tight leading-[1.12]">
            Desenvolvemos <br />
            <span className="bg-gradient-to-r from-[#0775FF] via-[#0CBFFD] to-[#89d5ff] text-transparent bg-clip-text">
              Sistemas Personalizados,
            </span>
            <br />
            Aplicativos e Plataformas Inteligentes.
          </h1>

          {/* Detailed Subtitle */}
          <p className="text-base sm:text-lg text-[#c2c6d8] max-w-2xl leading-relaxed font-normal">
            Engenharia de software de ponta a ponta para líderes em expansão: criamos arquiteturas corporativas robustas, ecossistemas de autoatendimento com IA, portais educacionais complexos e apps mobile nativos de ultra performance.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onStartProject}
              id="hero-cta-start"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#066eff] via-[#0775FF] to-[#0CBFFD] text-[#FEFEFE] font-bold text-base shadow-[0_0_24px_rgba(12,191,253,0.35)] hover:shadow-[0_0_36px_rgba(12,191,253,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Iniciar um Projeto</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onExploreSolutions}
              id="hero-cta-solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#252a39] border border-[#14BDFE]/20 text-[#dee2f6] hover:text-[#FEFEFE] hover:bg-[#303444] hover:border-[#0CBFFD]/40 transition-all shadow-md"
            >
              <Layers className="w-5 h-5 text-[#0CBFFD]" />
              <span>Conhecer Nossas Soluções</span>
            </button>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-2 border-t border-white/5">
            <div className="flex flex-col">
              <span className="font-sans font-bold text-3xl text-[#FEFEFE] tracking-tight">+120</span>
              <span className="font-sans text-xs text-[#94A3B8] uppercase tracking-wider mt-0.5">Projetos Entregues</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-3xl text-[#0CBFFD] tracking-tight">99.9%</span>
              <span className="font-sans text-xs text-[#94A3B8] uppercase tracking-wider mt-0.5">Uptime Cloud SLA</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-3xl text-[#FEFEFE] tracking-tight">4x</span>
              <span className="font-sans text-xs text-[#94A3B8] uppercase tracking-wider mt-0.5">Mais Agilidade</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-3xl text-[#14BDFE] tracking-tight">24/7</span>
              <span className="font-sans text-xs text-[#94A3B8] uppercase tracking-wider mt-0.5">Suporte Especializado</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Tech Architecture & Dashboard Mockup */}
        <div className="lg:col-span-5 relative">
          <TelemetryMockup />
        </div>
      </div>
    </section>
  );
};
