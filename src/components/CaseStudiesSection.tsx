import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { DoeMediaCaseStudyCard } from './DoeMediaCaseStudyCard';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const displayedStudies = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(s => s.id === activeFilter);

  const handleScrollToChapter = (id: string) => {
    setActiveFilter('all');
    setTimeout(() => {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  };

  return (
    <section id="case-studies" className="bg-[#050507] text-white py-24 sm:py-36 relative overflow-hidden">
      {/* Subtle Grain Overlay on Dark Section */}
      <div className="grain-subtle" aria-hidden="true" />
      <div className="section--grid-dark absolute inset-0 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* DOE Header with Scroll-Triggered Reveal */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/50 block">
            [ CASE STUDIES ]
          </span>
          <h2 className="mt-3 text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.035em] text-white">
            Built for <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-white">real results.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/70 font-light max-w-xl mx-auto leading-relaxed">
            Data-driven campaign architectures, customer acquisition funnels, and creative split testing executed for high-growth DTC brands and platforms.
          </p>

          {/* Chapter Quick Jump Buttons (DOE Media Chapter Nav) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              All 4 Studies
            </button>
            {CASE_STUDIES.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => handleScrollToChapter(study.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === study.id
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                0{idx + 1} {study.client}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Case Study Chapters with Doe Media Scroll Animation */}
        <div className="space-y-12 sm:space-y-20">
          {displayedStudies.map((study, idx) => (
            <DoeMediaCaseStudyCard
              key={study.id}
              study={study}
              index={idx}
              onSelectCaseStudy={onSelectCaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
