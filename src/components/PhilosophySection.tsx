import React from 'react';
import { Sparkles, Brain, Code2, Compass } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#EFEFEE] section--grid border-b border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Big Editorial Headline with ScrollReveal */}
        <ScrollReveal className="text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-black/50 block mb-4">
            [ THE CORE PHILOSOPHY ]
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] text-[#0A0A0A] leading-[1.08]">
            Creative that stops the scroll.{' '}
            <span className="font-serif italic font-normal text-black block sm:inline">
              Data that closes the sale.
            </span>
          </h2>
        </ScrollReveal>

        {/* Narrative Copy */}
        <ScrollReveal delay={100} className="mt-12 space-y-6 text-base sm:text-lg text-[#3A3A3A] font-light leading-relaxed max-w-2xl mx-auto">
          <p>
            Most marketing setups suffer from a fundamental disconnect: creative agencies produce glossy assets that look beautiful in design awards but convert poorly on paid auctions, while pure media buyers stare at dashboards without understanding the psychological triggers that make a customer reach for their wallet.
          </p>

          <p>
            I operate at the exact intersection of both disciplines. With a background spanning <span className="font-medium text-black">Digital Enterprise Management at the University of Toronto</span> and computer science foundations from <span className="font-medium text-black">Harvard's CS50x</span>, I treat every campaign as a living scientific test.
          </p>

          <p>
            From engineering 3-second hook-to-hold video scripts to building multi-tiered sales funnels with 11%+ one-time upsells, my focus is singular: <span className="text-black font-semibold">sustainable, unit-economic positive scale</span>.
          </p>
        </ScrollReveal>

        {/* 3 Pillars */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-black/10">
          <ScrollReveal delay={150} className="text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-black mb-3 mx-auto sm:mx-0 shadow-xs">
              <Brain className="w-5 h-5 text-emerald-600" />
            </div>
            <h4 className="text-sm font-semibold text-black tracking-tight mb-1">
              Direct-Response Empathy
            </h4>
            <p className="text-xs text-black/60 font-light leading-relaxed">
              Uncovering authentic audience pain points before a single ad script is drafted.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={250} className="text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-black mb-3 mx-auto sm:mx-0 shadow-xs">
              <Compass className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="text-sm font-semibold text-black tracking-tight mb-1">
              Rigorous A/B Method
            </h4>
            <p className="text-xs text-black/60 font-light leading-relaxed">
              Systematic split testing where only statistically significant variants make the cut.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={350} className="text-center sm:text-left">
            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-black mb-3 mx-auto sm:mx-0 shadow-xs">
              <Code2 className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="text-sm font-semibold text-black tracking-tight mb-1">
              Full-Stack Technicality
            </h4>
            <p className="text-xs text-black/60 font-light leading-relaxed">
              Bridging marketing attribution with CRM schemas, SQL, and conversion-optimized web code.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
