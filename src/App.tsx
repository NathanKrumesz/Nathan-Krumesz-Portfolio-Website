import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofStrip } from './components/ProofStrip';
import { BrandsSection } from './components/BrandsSection';
import { ServicesSection } from './components/ServicesSection';
import { PhilosophySection } from './components/PhilosophySection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PortfolioExplorer } from './components/PortfolioExplorer';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { CASE_STUDIES, CaseStudy } from './data/portfolioData';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCaseStudyById = (id: string) => {
    const study = CASE_STUDIES.find(
      c => c.id === id || c.id.startsWith(id) || id.startsWith(c.id.split('-')[0])
    );
    if (study) {
      setSelectedCaseStudy(study);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Hero Section (Moss-Inspired Grainy Gradient Container & DOE Carousel) */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
          onSelectCaseStudy={handleSelectCaseStudyById}
        />

        {/* Proof Strip (DOE-Inspired Stats & Platform Badges) */}
        <ProofStrip />

        {/* Some of the brands I've grown (DOE / LearnMoss Marquee & Curated Grid) */}
        <BrandsSection onSelectCaseStudy={handleSelectCaseStudyById} />

        {/* Services Section (DOE Typography & Italic Accent) */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Case Studies Deep Dives (Dark Full-Width Chapters) */}
        <CaseStudiesSection onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} />

        {/* Portfolio Vault (Campaign Creatives & Work) */}
        <PortfolioExplorer />

        {/* The Core Philosophy / Approach (Editorial Narrow Column) */}
        <PhilosophySection />

        {/* Partner Reviews & Testimonials */}
        <TestimonialsSection />

        {/* About Nathan, Career Timeline & Credentials */}
        <AboutSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* Dark Closing CTA Band with Interactive Inquiry Card */}
        <ClosingCta onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Case Study Deep-Dive Lightbox */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenContact={handleOpenContact}
      />

      {/* Full 2-Page Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
