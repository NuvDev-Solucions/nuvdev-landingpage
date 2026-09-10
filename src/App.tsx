/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Methodology } from './components/Methodology';
import { CaseStudies } from './components/CaseStudies';
import { DiagnosticForm } from './components/DiagnosticForm';
import { Footer } from './components/Footer';
import { SolutionModal } from './components/SolutionModal';
import { CaseModal } from './components/CaseModal';
import { PrivacyModal } from './components/PrivacyModal';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsModal } from './components/TermsModal';
import { TermsPage } from './components/TermsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { WhatsAppButton } from './components/WhatsAppButton';
import { useRoute, routeService } from './services/routeService';
import { SolutionItem, CaseStudy } from './types';

export default function App() {
  const currentRoute = useRoute();

  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState<boolean>(false);
  const [initialSolutionForForm, setInitialSolutionForForm] = useState<string>('Sistemas Corporativos');

  // Handle hash scrolling on mount or when route changes to home
  useEffect(() => {
    if (currentRoute.route === 'home' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        scrollToSection(hashId);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentRoute.route]);

  const scrollToSection = (id: string) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStartProject = () => {
    scrollToSection('diagnostico');
  };

  const handleExploreSolutions = () => {
    scrollToSection('solucoes');
  };

  const handleQuoteWithSolution = (solutionName: string) => {
    setInitialSolutionForForm(solutionName);
    scrollToSection('diagnostico');
  };

  // Route 1: Dedicated Privacy & LGPD Page
  if (currentRoute.route === 'privacy') {
    return <PrivacyPage />;
  }

  // Route 2: Dedicated Terms of Service Page
  if (currentRoute.route === 'terms') {
    return <TermsPage />;
  }

  // Route 3: 404 Not Found Page
  if (currentRoute.route === 'notfound') {
    return <NotFoundPage pathname={currentRoute.pathname} />;
  }

  // Route 4: Home / Landing Page
  return (
    <div className="bg-[#05070E] min-h-screen text-[#dee2f6] font-sans antialiased selection:bg-[#0CBFFD]/20 selection:text-[#0CBFFD] flex flex-col w-full max-w-full overflow-x-hidden">
      {/* Fixed Navigation Header */}
      <Header onOpenDiagnosis={handleStartProject} />

      {/* Main Content Sections */}
      <main className="w-full max-w-full pt-20 flex-1 flex flex-col overflow-x-hidden">
        {/* 1. Hero Section with Live Telemetry Dashboard */}
        <Hero
          onStartProject={handleStartProject}
          onExploreSolutions={handleExploreSolutions}
        />

        {/* 2. Bento Grid: Soluções & Especialidades */}
        <BentoGrid
          onSelectSolution={(sol) => setSelectedSolution(sol)}
          onRequestQuoteWithSolution={handleQuoteWithSolution}
        />

        {/* 3. Metodologia Ágil (5 Etapas) */}
        <Methodology />

        {/* 4. Cases de Sucesso em Produção */}
        <CaseStudies onSelectCase={(cs) => setSelectedCase(cs)} />

        {/* 5. Diagnóstico Técnico & Orçamento Rápido */}
        <DiagnosticForm initialSolution={initialSolutionForForm} />
      </main>

      {/* Footer */}
      <Footer 
        onNavigateToSection={scrollToSection} 
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <WhatsAppButton />

      {/* Solution Detail Modal */}
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onSelectForQuote={handleQuoteWithSolution}
      />

      {/* Case Study Detail Modal */}
      <CaseModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onRequestSimilar={(title) => handleQuoteWithSolution(`Projeto Similar a: ${title}`)}
      />

      {/* Privacy & LGPD Summary Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Terms of Service Summary Modal */}
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </div>
  );
}
