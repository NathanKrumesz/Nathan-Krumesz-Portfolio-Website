import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F6] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* DOE Header Pattern with ScrollReveal */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-black/50 block">
            [ CLIENT & COLLABORATOR FEEDBACK ]
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#0A0A0A]">
            Client & Partner <span className="font-serif italic text-black font-normal">Reviews.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-black/60 font-light">
            Feedback from founders, growth directors, and collaborators across e-commerce and financial enterprise.
          </p>
        </ScrollReveal>

        {/* 4 Cards Grid with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 75}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-black/5 hover:border-black/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* 5 Stars and Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {t.date}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-[#3A3A3A] font-light leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-black/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-xs">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold text-[#0A0A0A] truncate">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-black/50 truncate">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
