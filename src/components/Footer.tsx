import React from 'react';
import { ASSETS } from '../data/mockData';
import { Mail, Phone, MapPin, ShieldCheck, Award } from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToSection,
  onOpenPrivacy,
  onOpenTerms
}) => {
  return (
    <footer className="w-full bg-[#090e1c] border-t border-[#14BDFE]/15">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand & Certifications Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center">
              <img
                src={ASSETS.logo}
                alt="Logo NuvDev"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#c2c6d8] max-w-sm leading-relaxed">
              Arquitetura de software sob medida, transformação digital corporativa, sistemas em nuvem de alta disponibilidade e soluções avançadas com inteligência artificial.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#252a39] border border-[#0CBFFD]/30 text-[#0CBFFD] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ISO 27001 Ready</span>
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#252a39] border border-[#14BDFE]/30 text-[#14BDFE] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>AWS Cloud Certified</span>
              </span>
            </div>
          </div>

          {/* Column 2: Soluções & Serviços */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-sans font-bold text-base text-[#FEFEFE]">
              Soluções &amp; Serviços
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#c2c6d8]">
              <li
                onClick={() => onNavigateToSection('solucoes')}
                className="hover:text-[#0CBFFD] transition-colors cursor-pointer"
              >
                Plataformas Web &amp; Mobile
              </li>
              <li
                onClick={() => onNavigateToSection('solucoes')}
                className="hover:text-[#0CBFFD] transition-colors cursor-pointer"
              >
                Totens &amp; Autoatendimento Inteligente
              </li>
              <li
                onClick={() => onNavigateToSection('solucoes')}
                className="hover:text-[#0CBFFD] transition-colors cursor-pointer"
              >
                Portais Educacionais &amp; LMS
              </li>
              <li
                onClick={() => onNavigateToSection('solucoes')}
                className="hover:text-[#0CBFFD] transition-colors cursor-pointer"
              >
                ERPs &amp; Softwares Customizados
              </li>
              <li
                onClick={() => onNavigateToSection('solucoes')}
                className="hover:text-[#0CBFFD] transition-colors cursor-pointer"
              >
                Integrações de IA &amp; Chatbots
              </li>
            </ul>
          </div>

          {/* Column 3: Empresa */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-sans font-bold text-base text-[#FEFEFE]">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#c2c6d8]">
              <li
                onClick={() => onNavigateToSection('metodologia')}
                className="hover:text-[#0CBFFD] transition-colors cursor-pointer"
              >
                Metodologia Ágil
              </li>
              <li
                onClick={() => onNavigateToSection('cases')}
                className="hover:text-[#0CBFFD] transition-colors cursor-pointer"
              >
                Cases de Sucesso
              </li>
            </ul>
          </div>

          {/* Column 4: Contato Comercial */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-sans font-bold text-base text-[#FEFEFE]">
              Contato Comercial
            </h4>
            <p className="text-sm text-[#c2c6d8]">
              Pronto para desenhar ou modernizar a arquitetura digital do seu negócio?
            </p>

            <div className="flex flex-col gap-2.5 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-[#dee2f6]">
                <Mail className="w-4 h-4 text-[#0CBFFD] shrink-0" />
                <a href="mailto:contato@nuvdev.com" className="hover:text-[#0CBFFD] transition-colors">
                  contato@nuvdev.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-[#dee2f6]">
                <Phone className="w-4 h-4 text-[#0CBFFD] shrink-0" />
                <span>+55 (31) 97574-7515</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-[#dee2f6]">
                <MapPin className="w-4 h-4 text-[#0CBFFD] shrink-0" />
                <span>Belo Horizonte - MG | Hub Remoto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8]">
            &copy; 2025 NuvDev Tecnologia da Informação. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#94A3B8]">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#FEFEFE] cursor-pointer transition-colors text-left"
            >
              Privacidade &amp; LGPD
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-[#FEFEFE] cursor-pointer transition-colors text-left"
            >
              Termos de Serviço
            </button>
            <span className="hover:text-[#FEFEFE] cursor-pointer transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Status dos Serviços (100% Online)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
