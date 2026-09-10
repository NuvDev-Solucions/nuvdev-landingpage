import React from 'react';
import { routeService } from '../services/routeService';
import { ASSETS } from '../data/mockData';
import { 
  ArrowLeft, 
  Home, 
  ShieldCheck, 
  FileText,
  Search, 
  Cpu, 
  AlertTriangle,
  Code2
} from 'lucide-react';

interface NotFoundPageProps {
  pathname?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ pathname }) => {
  const currentPath = pathname || (typeof window !== 'undefined' ? window.location.pathname : '');

  return (
    <div className="min-h-screen bg-[#05070E] text-[#dee2f6] flex flex-col justify-between selection:bg-[#0CBFFD]/20 selection:text-[#0CBFFD] relative overflow-hidden">
      {/* Background Neon Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0CBFFD]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#066eff]/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Simple Header */}
      <header className="w-full border-b border-[#14BDFE]/15 bg-[#090e1c]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <button
            onClick={() => routeService.navigate('/')}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
            aria-label="Ir para a página inicial"
          >
            <img src={ASSETS.logo} alt="NuvDev Logo" className="h-9 w-auto object-contain" />
          </button>

          <button
            onClick={() => routeService.navigate('/')}
            className="px-4 py-2 rounded-xl bg-[#161b2a] border border-[#14BDFE]/20 text-[#dee2f6] hover:text-white hover:border-[#0CBFFD]/40 text-xs font-mono font-medium transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Início</span>
          </button>
        </div>
      </header>

      {/* Main 404 Error Section */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8 z-10">
        <div className="max-w-2xl w-full flex flex-col items-center text-center gap-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>ERR_ENDPOINT_404 • ROTA NÃO ENCONTRADA</span>
          </div>

          {/* 404 Large Display */}
          <div className="relative">
            <h1 className="font-mono text-7xl sm:text-9xl font-extrabold tracking-tight bg-gradient-to-b from-white via-[#dee2f6] to-[#0CBFFD]/40 bg-clip-text text-transparent select-none drop-shadow-[0_0_35px_rgba(12,191,253,0.3)]">
              404
            </h1>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-xs text-[#0CBFFD] tracking-widest uppercase bg-[#090e1c] px-3 py-1 rounded-md border border-[#0CBFFD]/30 whitespace-nowrap">
              SISTEMA FORA DE ROTA
            </div>
          </div>

          {/* Title & Description */}
          <div className="flex flex-col gap-2 max-w-lg mt-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Página não localizada
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              O recurso solicitado na rota{' '}
              <code className="px-2 py-0.5 rounded bg-[#161b2a] border border-[#0CBFFD]/30 font-mono text-xs text-[#0CBFFD]">
                {currentPath || '/rota-desconhecida'}
              </code>{' '}
              não foi mapeado em nossos microsserviços ou foi realocado.
            </p>
          </div>

          {/* Navigation CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => routeService.navigate('/')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#066eff] to-[#0CBFFD] text-white font-mono text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(12,191,253,0.35)] hover:shadow-[0_0_35px_rgba(12,191,253,0.5)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Retornar à Página Principal</span>
            </button>

            <button
              onClick={() => routeService.navigate('/privacidade')}
              className="px-5 py-3 rounded-xl bg-[#161b2a] border border-[#14BDFE]/25 text-[#dee2f6] hover:text-white hover:border-[#0CBFFD]/50 font-mono text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#0CBFFD]" />
              <span>Política de Privacidade</span>
            </button>

            <button
              onClick={() => routeService.navigate('/termos')}
              className="px-5 py-3 rounded-xl bg-[#161b2a] border border-[#14BDFE]/25 text-[#dee2f6] hover:text-white hover:border-[#0CBFFD]/50 font-mono text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#0CBFFD]" />
              <span>Termos de Serviço</span>
            </button>
          </div>

          {/* Helpful Destination Suggestions */}
          <div className="w-full mt-6 p-5 rounded-2xl bg-[#0F172A]/80 border border-white/5 backdrop-blur-sm text-left">
            <h3 className="text-xs font-mono uppercase text-[#0CBFFD] tracking-wider mb-3 flex items-center gap-1.5 font-semibold">
              <Code2 className="w-3.5 h-3.5" />
              Rotas &amp; Seções Disponíveis
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#dee2f6]">
              <button
                onClick={() => routeService.navigate('/#solucoes')}
                className="p-2.5 rounded-lg bg-[#161b2a] hover:bg-[#252a39] border border-white/5 hover:border-[#0CBFFD]/30 transition-all text-left flex items-center justify-between cursor-pointer"
              >
                <span>Soluções &amp; Plataformas</span>
                <span className="text-[#0CBFFD] font-mono">→</span>
              </button>
              <button
                onClick={() => routeService.navigate('/#metodologia')}
                className="p-2.5 rounded-lg bg-[#161b2a] hover:bg-[#252a39] border border-white/5 hover:border-[#0CBFFD]/30 transition-all text-left flex items-center justify-between cursor-pointer"
              >
                <span>Metodologia Ágil</span>
                <span className="text-[#0CBFFD] font-mono">→</span>
              </button>
              <button
                onClick={() => routeService.navigate('/#cases')}
                className="p-2.5 rounded-lg bg-[#161b2a] hover:bg-[#252a39] border border-white/5 hover:border-[#0CBFFD]/30 transition-all text-left flex items-center justify-between cursor-pointer"
              >
                <span>Cases de Sucesso</span>
                <span className="text-[#0CBFFD] font-mono">→</span>
              </button>
              <button
                onClick={() => routeService.navigate('/#diagnostico')}
                className="p-2.5 rounded-lg bg-[#161b2a] hover:bg-[#252a39] border border-white/5 hover:border-[#0CBFFD]/30 transition-all text-left flex items-center justify-between cursor-pointer"
              >
                <span>Diagnóstico Técnico</span>
                <span className="text-[#0CBFFD] font-mono">→</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-6 text-center text-xs text-[#94A3B8] bg-[#090e1c]">
        <p>&copy; 2025 NuvDev Tecnologia da Informação. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

