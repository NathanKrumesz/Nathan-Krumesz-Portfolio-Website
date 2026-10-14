import React, { useState, useEffect } from 'react';
import { TESTIMONIALS, Testimonial } from '../data/portfolioData';
import { Star, CheckCircle2, Play, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  const [activeVideoTestimonial, setActiveVideoTestimonial] = useState<Testimonial | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideoTestimonial(null);
      }
    };
    if (activeVideoTestimonial) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideoTestimonial]);

  return (
    <section className="py-24 sm:py-32 bg-[#F7F7F6] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Pattern with ScrollReveal */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-black/50 block">
            [ CLIENT & COLLABORATOR FEEDBACK ]
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#0A0A0A]">
            Client & Partner <span className="font-serif italic text-black font-normal">Reviews.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-black/60 font-light">
            Real client testimonials and performance reviews from founders, realtors, and entrepreneurs across e-commerce, fitness, and direct response.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 75}
              className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                t.videoUrl 
                  ? 'border-emerald-500/30 shadow-md ring-1 ring-emerald-500/20' 
                  : 'border-black/5 hover:border-black/15 shadow-xs hover:shadow-md'
              }`}
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

                {/* Video Preview Card if video exists */}
                {t.videoUrl && (
                  <div 
                    onClick={() => setActiveVideoTestimonial(t)}
                    className="relative aspect-video rounded-2xl overflow-hidden bg-black mb-4 cursor-pointer group/video border border-black/10 shadow-inner"
                  >
                    <img 
                      src={t.videoPoster || '/portfolio/brandon-taft-poster.jpg'} 
                      alt={`${t.name} Video Review`}
                      className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover/video:scale-110 transition-transform pl-0.5">
                        <Play className="w-4 h-4 fill-current text-black" />
                      </div>
                    </div>
                    {t.metric && (
                      <div className="absolute bottom-2 left-2 right-2 bg-emerald-950/90 text-emerald-300 text-[10px] font-mono px-2 py-1 rounded-md border border-emerald-500/30 truncate backdrop-blur-xs font-semibold">
                        {t.metric}
                      </div>
                    )}
                  </div>
                )}

                {/* Metric badge if no video */}
                {!t.videoUrl && t.metric && (
                  <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50/80 border border-emerald-200/70 text-emerald-800 text-[11px] font-mono font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="truncate">{t.metric}</span>
                  </div>
                )}

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-[#3A3A3A] font-light leading-relaxed mb-6">
                  "{t.text}"
                </p>

                {/* Action button if video */}
                {t.videoUrl && (
                  <button
                    onClick={() => setActiveVideoTestimonial(t)}
                    className="w-full mb-4 py-2 px-3 rounded-xl bg-black text-white text-xs font-medium flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current text-emerald-400" />
                    <span>Watch Video Testimonial</span>
                  </button>
                )}
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-black/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-xs shrink-0">
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

      {/* Video Modal Lightbox with Safe Backdrop and Escape handlers */}
      {activeVideoTestimonial && (
        <div 
          onClick={() => setActiveVideoTestimonial(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#050507] text-white rounded-3xl max-w-2xl w-full border border-white/15 shadow-2xl overflow-hidden animate-fade-in flex flex-col cursor-default relative my-auto max-h-[92vh]"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/70 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase bg-emerald-950 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                  Verified Video Review
                </span>
                <span className="text-xs font-mono text-white/70">
                  {activeVideoTestimonial.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoTestimonial(null)}
                className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer border border-white/20"
                aria-label="Close review"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative bg-black flex items-center justify-center shrink-0 max-h-[58vh] overflow-hidden p-2">
              <video
                key={activeVideoTestimonial.videoUrl}
                controls
                autoPlay
                playsInline
                preload="metadata"
                poster={activeVideoTestimonial.videoPoster}
                src={activeVideoTestimonial.videoUrl}
                className="max-h-[55vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Video Details */}
            <div className="p-6 bg-[#0A0A0E] overflow-y-auto">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {activeVideoTestimonial.name} ({activeVideoTestimonial.company})
                </h3>
                {activeVideoTestimonial.metric && (
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/20 font-semibold">
                    {activeVideoTestimonial.metric}
                  </span>
                )}
              </div>
              <p className="text-xs text-white/75 leading-relaxed font-light">
                "{activeVideoTestimonial.text}"
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span>Platform: Meta Ads Manager (Facebook & Instagram)</span>
                <button
                  type="button"
                  onClick={() => setActiveVideoTestimonial(null)}
                  className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 cursor-pointer"
                >
                  Close Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
