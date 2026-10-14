import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedCounter } from './AnimatedCounter';

export const ProofStrip: React.FC = () => {
  const platforms = [
    { name: "Meta Ads Manager", tag: "Certified Buyer" },
    { name: "TikTok Ads", tag: "Direct Response" },
    { name: "Shopify", tag: "E-Commerce" },
    { name: "ClickFunnels", tag: "Funnel & OTO" },
    { name: "Google Analytics 4", tag: "Attribution" },
    { name: "Salesforce CRM", tag: "Enterprise" },
    { name: "Canva Pro", tag: "Ad Creatives" },
    { name: "CapCut Pro", tag: "Video Editing" },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Header with ScrollReveal */}
        <ScrollReveal className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-black/50">
            [ PERFORMANCE TRACK RECORD ]
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A0A0A]">
            Empirical Growth by the Numbers
          </h2>
        </ScrollReveal>

        {/* 5 Big Stat Blocks Grid (DOE-Media Style) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 50}
              className="bg-[#F7F7F6] hover:bg-[#EFEFEE] transition-all duration-300 rounded-2xl p-5 sm:p-6 border border-black/5 flex flex-col justify-between group hover:-translate-y-1 min-w-0 overflow-hidden"
            >
              <div className="min-w-0">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0A0A0A] block group-hover:text-black truncate">
                  <AnimatedCounter value={stat.value} duration={1200 + idx * 80} />
                </span>
                <span className="mt-2 text-xs sm:text-sm font-semibold text-[#0A0A0A] block leading-snug break-words">
                  {stat.label}
                </span>
              </div>
              <p className="mt-3 text-[11px] sm:text-xs text-black/60 leading-normal break-words">
                {stat.subtext}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech Partner & Platform Badges */}
        <ScrollReveal delay={150} className="mt-14 pt-10 border-t border-black/5">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-black/40">
              [ PLATFORMS & AD ECOSYSTEMS ]
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {platforms.map((p, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 hover:border-black/25 text-xs text-black/80 hover:text-black transition-all shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                <span className="font-medium">{p.name}</span>
                <span className="text-[10px] text-black/40 font-mono">({p.tag})</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
