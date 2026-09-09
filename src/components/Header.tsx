import React, { useState, useEffect } from 'react';
import { ASSETS } from '../data/mockData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenDiagnosis: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDiagnosis }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const sectionIds = ['inicio', 'solucoes', 'metodologia', 'cases', 'diagnostico'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/85 backdrop-blur-xl border-b border-[#14BDFE]/15 shadow-[0_1px_16px_rgba(0,0,0,0.4)]">
      <div className="h-20 max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('inicio');
            }}
            className="flex items-center group focus:outline-none"
            id="nav-logo"
            aria-label="NuvDev Início"
          >
            <div className="relative flex items-center">
              <img
                src={ASSETS.logo}
                alt="NuvDev"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              />
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          <button
            onClick={() => scrollTo('inicio')}
            className={`text-sm font-medium transition-colors hover:text-[#FEFEFE] relative py-1 ${activeSection === 'inicio' ? 'text-[#0CBFFD] font-semibold' : 'text-[#c2c6d8]'
              }`}
          >
            Início
            {activeSection === 'inicio' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0CBFFD] rounded-full shadow-[0_0_8px_#0CBFFD]"></span>
            )}
          </button>
          <button
            onClick={() => scrollTo('solucoes')}
            className={`text-sm font-medium transition-colors hover:text-[#FEFEFE] relative py-1 ${activeSection === 'solucoes' ? 'text-[#0CBFFD] font-semibold' : 'text-[#c2c6d8]'
              }`}
          >
            Soluções
            {activeSection === 'solucoes' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0CBFFD] rounded-full shadow-[0_0_8px_#0CBFFD]"></span>
            )}
          </button>
          <button
            onClick={() => scrollTo('metodologia')}
            className={`text-sm font-medium transition-colors hover:text-[#FEFEFE] relative py-1 ${activeSection === 'metodologia' ? 'text-[#0CBFFD] font-semibold' : 'text-[#c2c6d8]'
              }`}
          >
            Metodologia
            {activeSection === 'metodologia' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0CBFFD] rounded-full shadow-[0_0_8px_#0CBFFD]"></span>
            )}
          </button>
          <button
            onClick={() => scrollTo('cases')}
            className={`text-sm font-medium transition-colors hover:text-[#FEFEFE] relative py-1 ${activeSection === 'cases' ? 'text-[#0CBFFD] font-semibold' : 'text-[#c2c6d8]'
              }`}
          >
            Cases de Sucesso
            {activeSection === 'cases' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0CBFFD] rounded-full shadow-[0_0_8px_#0CBFFD]"></span>
            )}
          </button>
          <button
            onClick={() => scrollTo('diagnostico')}
            className={`text-sm font-medium transition-colors hover:text-[#FEFEFE] relative py-1 ${activeSection === 'diagnostico' ? 'text-[#0CBFFD] font-semibold' : 'text-[#c2c6d8]'
              }`}
          >
            Diagnóstico &amp; Orçamento
            {activeSection === 'diagnostico' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0CBFFD] rounded-full shadow-[0_0_8px_#0CBFFD]"></span>
            )}
          </button>
        </nav>

        {/* Action Controls & Badges */}
        <div className="flex items-center gap-3">
          {/* Availability Status Chip */}

          {/* Primary CTA Button */}
          <button
            onClick={onOpenDiagnosis}
            id="nav-cta-estimate"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#0CBFFD] via-[#0775FF] to-[#066eff] text-[#FEFEFE] font-bold text-xs tracking-wide shadow-[0_0_20px_rgba(12,191,253,0.35)] hover:shadow-[0_0_28px_rgba(12,191,253,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Solicitar Orçamento</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#1a1f2e] text-[#dee2f6] hover:text-white"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0F172A] border-b border-[#14BDFE]/20 px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => scrollTo('inicio')}
            className={`text-left text-base font-medium py-2 border-b border-white/5 transition-colors ${activeSection === 'inicio' ? 'text-[#0CBFFD] font-semibold' : 'text-[#c2c6d8] hover:text-[#0CBFFD]'
              }`}
          >
            Início
          </button>
          <button
            onClick={() => scrollTo('solucoes')}
            className={`text-left text-base font-medium py-2 border-b border-white/5 transition-colors ${activeSection === 'solucoes' ? 'text-[#0CBFFD] font-semibold' : 'text-[#c2c6d8] hover:text-[#0CBFFD]'
              }`}
          >
            Soluções &amp; Especialidades
          </button>
          <button
            onClick={() => scrollTo('metodologia')}
            className={`text-left text-base font-medium py-2 border-b border-white/5 transition-colors ${activeSection === 'metodologia' ? 'text-[#0CBFFD] font-semibold' : 'text-[#c2c6d8] hover:text-[#0CBFFD]'
              }`}
          >
            Metodologia Ágil (5 Etapas)
          </button>
          <button
            onClick={() => scrollTo('cases')}
            className={`text-left text-base font-medium py-2 border-b border-white/5 transition-colors ${activeSection === 'cases' ? 'text-[#0CBFFD] font-semibold' : 'text-[#c2c6d8] hover:text-[#0CBFFD]'
              }`}
          >
            Cases de Sucesso em Produção
          </button>
          <button
            onClick={() => scrollTo('diagnostico')}
            className={`text-left text-base font-medium py-2 border-b border-white/5 transition-colors ${activeSection === 'diagnostico' ? 'text-[#0CBFFD] font-semibold' : 'text-[#c2c6d8] hover:text-[#0CBFFD]'
              }`}
          >
            Diagnóstico Técnico Gratuito
          </button>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnosis();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0CBFFD] to-[#066eff] text-[#FEFEFE] font-bold text-sm text-center shadow-lg"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
