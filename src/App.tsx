import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AdvatechServicesGrid } from './components/AdvatechServicesGrid';
import { ProcessTimeline } from './components/ProcessTimeline';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { PricingCalculator } from './components/PricingCalculator';
import { TikTokSection } from './components/TikTokSection';
import { BrandAuditQuiz } from './components/BrandAuditQuiz';
import { PackagesSection } from './components/PackagesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectBriefModal } from './components/ProjectBriefModal';
import { PricingOption, PricingAddon } from './types';
import { PackageTier } from './data/pricingData';
import { ServiceOffering } from './data/servicesData';

export default function App() {
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [preselectedStyle, setPreselectedStyle] = useState<string | undefined>(undefined);
  const [preselectedConfig, setPreselectedConfig] = useState<{
    service: PricingOption;
    addons: PricingAddon[];
    total: number;
    currencySymbol: string;
    currencyCode: string;
  } | null>(null);

  const handleOpenBriefModal = (styleOrService?: string) => {
    setPreselectedStyle(styleOrService);
    setPreselectedConfig(null);
    setIsBriefModalOpen(true);
  };

  const handleSelectServiceFromGrid = (service: ServiceOffering) => {
    setPreselectedStyle(service.title);
    setIsBriefModalOpen(true);
  };

  const handleOpenBriefModalWithConfig = (config: {
    service: PricingOption;
    addons: PricingAddon[];
    total: number;
    currencySymbol: string;
    currencyCode: string;
  }) => {
    setPreselectedConfig(config);
    setPreselectedStyle(undefined);
    setIsBriefModalOpen(true);
  };

  const handleSelectPackage = (pkg: PackageTier) => {
    setPreselectedConfig({
      service: {
        id: pkg.id,
        name: pkg.name,
        category: 'Tiered Package',
        basePrice: pkg.price,
        deliveryDays: pkg.timeline,
        description: pkg.tagline,
      },
      addons: [],
      total: pkg.price,
      currencySymbol: '$',
      currencyCode: 'USD',
    });
    setPreselectedStyle(undefined);
    setIsBriefModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 selection:bg-[#FF5416] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenBriefModal={() => handleOpenBriefModal()}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section — 'Your Brand. Amplified.' Inspired by Advatech */}
        <Hero
          onOpenBriefModal={() => handleOpenBriefModal()}
          onScrollToSection={handleScrollToSection}
        />

        {/* Advatech-Inspired Creative & Print Services (The 6 Pillars + Print Finishes) */}
        <AdvatechServicesGrid
          onSelectService={handleSelectServiceFromGrid}
          onOpenBriefModal={handleOpenBriefModal}
        />

        {/* 'The Creative Process.' — Advatech's 4-step framework (Brief, Concept, Refine, Deliver) */}
        <section id="process">
          <ProcessTimeline
            onOpenBriefModal={() => handleOpenBriefModal('New Design & Print Commission')}
          />
        </section>

        {/* Instant Project Cost & Print Estimator (Live KES & USD Quote) */}
        <PricingCalculator
          onOpenBriefModalWithConfig={handleOpenBriefModalWithConfig}
        />

        {/* Visual Proof: Before / After Transformation Slider */}
        <BeforeAfterSlider
          onOpenBriefModal={() => handleOpenBriefModal('Corporate Vector Rebranding')}
        />

        {/* Dynamic Portfolio with Case Studies & Color Palette Inspectors */}
        <PortfolioShowcase
          onOpenBriefModal={handleOpenBriefModal}
        />

        {/* TikTok Official Feature: @major.graphics.lt Behind The Scenes & Speedarts */}
        <TikTokSection
          onOpenBriefModal={() => handleOpenBriefModal('TikTok Brand Kit')}
        />

        {/* Lead Diagnostic: Free 60-Second Brand Health & Impact Test */}
        <BrandAuditQuiz
          onOpenBriefModal={() => handleOpenBriefModal('Brand Health Audit Follow-up')}
        />

        {/* Turnkey Standardized Packages */}
        <PackagesSection
          onSelectPackage={handleSelectPackage}
        />

        {/* Client Reviews & Proof */}
        <TestimonialsSection />
      </main>

      {/* Studio Footer */}
      <Footer
        onScrollToSection={handleScrollToSection}
        onOpenBriefModal={() => handleOpenBriefModal()}
      />

      {/* Floating Direct WhatsApp Action with Quick Triggers */}
      <FloatingWhatsApp />

      {/* Client Onboarding & Project Brief Modal */}
      <ProjectBriefModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
        preselectedStyle={preselectedStyle}
        preselectedConfig={preselectedConfig}
      />
    </div>
  );
}
