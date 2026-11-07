import React from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle2, ChevronRight, Sparkles, FileText, Zap } from 'lucide-react';
import { HERO_CAROUSEL_ITEMS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onSelectCaseStudy: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact, onSelectCaseStudy }) => {
  return (
    <section className="pt-24 pb-8 px-3 sm:px-6 lg:px-8">
      {/* Hero Rounded Container (LearnMoss Floating Island Architecture) */}
      <div className="relative rounded-[32px] sm:rounded-[44px] lg:rounded-[48px] overflow-hidden min-h-[88vh] flex flex-col justify-between p-5 sm:p-10 lg:p-14 text-white isolation border border-white/15 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5)]">
        {/* Background Image Layer */}
        <div className="hero__gradient" aria-hidden="true" />

        {/* Soft Vignette for Text Contrast */}
        <div className="hero__vignette" aria-hidden="true" />

        {/* Top Eyebrow Section */}
        <div className="relative z-10 pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider text-white/90">
            <span>[ PERFORMANCE MARKETER & CREATIVE STRATEGIST ]</span>
          </div>
        </div>

        {/* Central Dramatic Headline & Lead */}
        <div className="relative z-10 max-w-4xl my-auto py-6 sm:py-8">
          <h1 className="text-3xl sm:text-5xl lg:text-[70px] font-semibold tracking-[-0.03em] leading-[1.08] text-white">
            Scaling DTC brands with{' '}
            <span className="bg-black text-white px-2.5 sm:px-4 py-0.5 sm:py-1 font-serif italic font-light inline-block transform -rotate-0.5 shadow-xl border border-white/15 my-1">
              real-world results
            </span>{' '}
            through data & creative.
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-xl lg:text-2xl font-light text-white/85 max-w-2xl leading-relaxed">
            5+ years driving measurable growth for DTC and B2B brands. <span className="text-white font-medium">$1M+ revenue scaled</span>, 60,000+ organic audience, and high-converting ad funnels built to perform.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0A0A0A] font-medium text-sm tracking-tight transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] shadow-lg group text-center"
            >
              <span>Explore Case Studies</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black/30 hover:bg-black/45 backdrop-blur-md border border-white/25 text-white font-medium text-sm transition-all duration-200 hover:scale-[1.02] text-center cursor-pointer"
            >
              <FileText className="w-4 h-4 text-white/80" />
              <span>View Full Resume</span>
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white/90 hover:text-white font-medium text-sm transition-colors text-center cursor-pointer"
            >
              <span>Available for Hire</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>

        {/* Lower Teaser & Proof Carousel */}
        <div className="relative z-10 pt-6 mt-6 border-t border-white/15 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 sm:gap-6">
          {/* Glassmorphic Product / Live Campaign Card (Moss Inspired) */}
          <div 
            onClick={() => onSelectCaseStudy('mighti-mushrooms')}
            className="w-full lg:max-w-md glass-panel rounded-2xl p-4 sm:p-5 cursor-pointer hover:bg-white/20 transition-all duration-300 group shadow-lg border border-white/15"
          >
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <img
                  src="/portfolio/henri-liiv.jpg"
                  alt="Henri Liiv"
                  className="w-11 h-11 rounded-full object-cover border border-white/30"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-white">Henri Liiv</span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/40 text-emerald-300 border border-emerald-500/30 shrink-0">
                    Founder, Mighti
                  </span>
                </div>
                <p className="text-[11px] text-white/75 mt-0.5 leading-snug">
                  Mighti Functional Mushrooms • Meta Ads Strategy
                </p>
              </div>
            </div>
            <p className="mt-2.5 text-xs text-white/90 leading-relaxed font-light">
              "Doubled Average Order Value from <span className="font-semibold text-white underline decoration-emerald-400">$90 to $180</span> with creative ad variants that beat dedicated agency teams."
            </p>
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-white/60 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1 font-mono text-white/90">
                <Zap className="w-3 h-3 text-amber-300 shrink-0" />
                2x AOV Expansion
              </span>
              <span className="group-hover:translate-x-1 transition-transform text-white/80 flex items-center gap-1 font-medium">
                Inspect metrics →
              </span>
            </div>
          </div>

          {/* DOE-Inspired Proof Cards Strip */}
          <div className="w-full lg:w-auto mt-1 lg:mt-0">
            {/* Mobile Swipe Header */}
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-white/55 mb-2 px-0.5 lg:hidden">
              <span className="flex items-center gap-1.5 text-white/75">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Verified Results
              </span>
              <span className="text-white/40 flex items-center gap-1">
                Swipe to explore <ChevronRight className="w-3 h-3" />
              </span>
            </div>

            <div className="-mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto no-scrollbar py-1 scroll-smooth snap-x snap-mandatory">
              <div className="flex items-stretch gap-3 pr-5 sm:pr-0">
                {HERO_CAROUSEL_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      const id = item.brand.toLowerCase().includes('mighti')
                        ? 'mighti-mushrooms'
                        : item.brand.toLowerCase().includes('kalaia')
                        ? 'kalaia-skincare'
                        : 'petsmont';
                      onSelectCaseStudy(id);
                    }}
                    className="w-[170px] sm:w-[185px] shrink-0 snap-start bg-black/45 hover:bg-black/60 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 flex flex-col justify-between transition-all hover:scale-[1.02] cursor-pointer group/card"
                  >
                    <div>
                      <div className="text-[11px] font-mono uppercase text-white/70 tracking-wider">
                        {item.brand}
                      </div>
                      <div className="text-xl font-bold tracking-tight text-white mt-1 group-hover/card:text-emerald-300 transition-colors">
                        {item.stat}
                      </div>
                      <div className="text-[11px] text-white/80 mt-1 leading-snug">
                        {item.sub}
                      </div>
                    </div>
                    <div className="mt-2.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-300 leading-tight">
                      {item.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
