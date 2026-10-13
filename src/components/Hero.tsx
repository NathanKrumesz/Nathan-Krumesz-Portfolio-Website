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
      <div className="relative rounded-[32px] sm:rounded-[44px] lg:rounded-[48px] overflow-hidden min-h-[88vh] flex flex-col justify-between p-6 sm:p-10 lg:p-14 text-white isolation border border-white/15 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5)]">
        {/* Organic Blurred Gradient Layer */}
        <div className="hero__gradient" aria-hidden="true" />

        {/* Optical Vignette & Rim Shading */}
        <div className="hero__vignette" aria-hidden="true" />

        {/* Tactile Silver-Halide Film Grain Texture Layers */}
        <div className="hero__grain" aria-hidden="true" />
        <div className="hero__grain-stipple" aria-hidden="true" />

        {/* Top Eyebrow Section */}
        <div className="relative z-10 pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider text-white/90">
            <span>[ DIGITAL MARKETING SPECIALIST & CREATIVE STRATEGIST ]</span>
          </div>
        </div>

        {/* Central Dramatic Headline & Lead */}
        <div className="relative z-10 max-w-4xl my-auto py-8">
          <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-normal tracking-[-0.03em] leading-[1.06] text-white">
            Scaling DTC brands with{' '}
            <span className="bg-black text-white px-3 sm:px-4 py-0.5 sm:py-1 font-serif italic inline-block transform -rotate-0.5 shadow-xl border border-white/15 my-1">
              real-world results
            </span>{' '}
            through data & creative.
          </h1>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-light text-white/85 max-w-2xl leading-relaxed">
            5+ years driving measurable growth for DTC and B2B brands. <span className="text-white font-medium">$1M+ revenue scaled</span>, 60,000+ organic audience, and high-converting ad funnels built to perform.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0A0A0A] font-medium text-sm tracking-tight transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] shadow-lg group"
            >
              <span>Explore Case Studies</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black/30 hover:bg-black/45 backdrop-blur-md border border-white/25 text-white font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4 text-white/80" />
              <span>View Full Resume</span>
            </button>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white/90 hover:text-white font-medium text-sm transition-colors"
            >
              <span>Available for Hire</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>

        {/* Lower Teaser & Proof Carousel */}
        <div className="relative z-10 pt-6 border-t border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Glassmorphic Product / Live Campaign Card (Moss Inspired) */}
          <div 
            onClick={() => onSelectCaseStudy('mighti-mushrooms')}
            className="glass-panel rounded-2xl p-4 sm:p-5 max-w-lg cursor-pointer hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/src/assets/images/portrait.jpg"
                  alt="Nathan Krumesz"
                  className="w-11 h-11 rounded-full object-cover border border-white/30"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-white truncate">Nathan Krumesz</span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/40 text-emerald-300 border border-emerald-500/30">
                    Live Case Study
                  </span>
                </div>
                <p className="text-[11px] text-white/70 truncate">
                  Mighti Functional Mushrooms • Meta Ads Strategy
                </p>
              </div>
            </div>
            <p className="mt-2.5 text-xs text-white/90 leading-relaxed">
              "Scaled cold prospect ad sets at <span className="font-semibold text-white underline decoration-emerald-400">4.2x ROAS</span> while dropping CAC by 28% through iterative hook testing."
            </p>
            <div className="mt-2 flex items-center justify-between text-[11px] text-white/60 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1 font-mono text-white/90">
                <Zap className="w-3 h-3 text-amber-300" />
                1,480 Orders / 7 Days
              </span>
              <span className="group-hover:translate-x-1 transition-transform text-white/80 flex items-center gap-1">
                Inspect metrics →
              </span>
            </div>
          </div>

          {/* DOE-Inspired Proof Cards Strip */}
          <div className="w-full lg:w-auto overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-3">
              {HERO_CAROUSEL_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 bg-black/35 hover:bg-black/50 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 min-w-[140px] transition-all hover:scale-[1.03]"
                >
                  <div className="text-[11px] font-mono uppercase text-white/60 tracking-wider">
                    {item.brand}
                  </div>
                  <div className="text-xl font-bold tracking-tight text-white mt-0.5">
                    {item.stat}
                  </div>
                  <div className="text-[10px] text-white/75 truncate mt-0.5">
                    {item.sub}
                  </div>
                  <div className="mt-2 text-[9px] font-semibold uppercase tracking-wider text-emerald-300">
                    {item.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
