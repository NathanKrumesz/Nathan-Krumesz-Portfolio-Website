import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronRight, Eye, Sparkles, TrendingUp, Layers } from 'lucide-react';
import { CaseStudy } from '../data/portfolioData';
import { AnimatedCounter } from './AnimatedCounter';

interface DoeMediaCaseStudyCardProps {
  study: CaseStudy;
  index: number;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const DoeMediaCaseStudyCard: React.FC<DoeMediaCaseStudyCardProps> = ({
  study,
  index,
  onSelectCaseStudy,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [activeEase, setActiveEase] = useState(0);

  // Intersection Observer for initial reveal & triggering counter animations
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Doe Media Scroll Animation Loop
  useEffect(() => {
    // If reduced motion is requested, do not animate transforms
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (leftImageRef.current) leftImageRef.current.style.transform = 'none';
      if (rightImageRef.current) rightImageRef.current.style.transform = 'none';
      return;
    }

    let rafId: number;
    let isTicking = false;

    const handleScroll = () => {
      if (!isTicking) {
        rafId = requestAnimationFrame(() => {
          updateParallax();
          isTicking = false;
        });
        isTicking = true;
      }
    };

    const updateParallax = () => {
      const node = containerRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = node.offsetHeight || 600;

      // scrollValue: distance scrolled past the moment the top enters the bottom of viewport
      const scrollValue = windowHeight - rect.top;
      const bottomPassValue = -rect.top - sectionHeight;

      const windowWidth = window.innerWidth;
      const isDesktop = windowWidth > 767;

      if (isDesktop) {
        if (scrollValue < 0 || bottomPassValue > 0) return;

        // Doe Media exponential ease formula:
        // easeValue = 1 - 1 / Math.pow(2, scrollValue * easeSpeed / sectionHeight)
        const easeSpeed = 2.4;
        const normalized = Math.max(0, Math.min(scrollValue / sectionHeight, 1.4));
        const easeValue = Math.max(0, Math.min(1 - 1 / Math.pow(2, normalized * easeSpeed), 1));

        setActiveEase(easeValue);

        const maxMove = windowWidth >= 1280 ? 95 : 65;
        const maxRotate = windowWidth >= 1280 ? 5.5 : 4;

        if (leftImageRef.current) {
          leftImageRef.current.style.transform = `translateX(${-1 * easeValue * maxMove}px) rotate(${-1 * easeValue * maxRotate}deg)`;
        }
        if (rightImageRef.current) {
          rightImageRef.current.style.transform = `translateX(${1 * easeValue * maxMove}px) rotate(${1 * easeValue * maxRotate}deg)`;
        }
      } else {
        // Mobile / Small screen behavior:
        // Set passed state when scrolled half-way
        if (scrollValue - windowHeight * 0.4 > 0) {
          setIsPassed(true);
        } else {
          setIsPassed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    // Initial call
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const chapterNum = `0${index + 1}`;
  const clientNameSpaced = study.clientSpaced || study.client.split('').join(' ');

  // Brand-specific accent color mappings for the Doe Media gradient bar
  const gradientStyles: Record<string, string> = {
    emerald: 'from-emerald-500 via-teal-400 to-emerald-500',
    purple: 'from-purple-500 via-pink-400 to-purple-500',
    amber: 'from-amber-400 via-orange-400 to-amber-500',
    cyan: 'from-cyan-400 via-blue-400 to-cyan-500',
  };

  const accentGradient = gradientStyles[study.accent || 'emerald'] || 'from-emerald-400 via-teal-300 to-emerald-500';

  return (
    <div
      ref={containerRef}
      id={study.id}
      className={`doe-portfolio-chapter relative my-20 sm:my-32 transition-opacity duration-1000 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isPassed ? 'passed' : ''}`}
    >
      {/* Chapter Marker Header */}
      <div className="flex items-center justify-between mb-6 px-2 text-white/50 text-xs font-mono uppercase tracking-[0.2em]">
        <div className="flex items-center gap-3">
          <span className="text-white/80 font-bold">{chapterNum}</span>
          <span className="text-white/30">/</span>
          <span>CHAPTER {chapterNum}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-white/40">
          <span>{study.category}</span>
          <span>·</span>
          <span>{study.timeline}</span>
        </div>
      </div>

      {/* Main Doe Media Stage Container */}
      <div className="relative rounded-3xl sm:rounded-[36px] bg-[#0A0A0E] border border-white/10 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl group hover:border-white/20 transition-all duration-300">
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-25 transition-opacity"
          style={{ background: study.glowColor || 'rgba(16, 185, 129, 0.22)' }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20 transition-opacity"
          style={{ background: study.glowColor || 'rgba(16, 185, 129, 0.22)' }}
          aria-hidden="true"
        />

        {/* 3-Column Doe Media Layout with Center Content & Flanking Floating Mockups */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Floating Visual: Mobile Ad Creative Mockup (DOE Media left element) */}
          <div className="hidden lg:block lg:col-span-3">
            <div
              ref={leftImageRef}
              onClick={() => onSelectCaseStudy(study)}
              className="doe-card-portfolio-image-left relative rounded-2xl overflow-hidden cursor-pointer group/left shadow-2xl border border-white/15 bg-black transition-shadow duration-300 hover:shadow-emerald-500/10 hover:border-white/30"
              style={{
                willChange: 'transform',
                transformOrigin: 'bottom right',
              }}
              title="Click to inspect creative"
            >
              <img
                src={study.leftImage || study.image}
                alt={`${study.client} ad creative variation`}
                className="w-full h-[360px] xl:h-[410px] object-cover group-hover/left:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono uppercase tracking-wider bg-black/70 text-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                  Creative Hook
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/80">
                <span className="font-medium truncate">Top Converting Ad</span>
                <span className="text-white/60 group-hover/left:text-white flex items-center gap-0.5">
                  <Eye className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Center Stage: Partner Monogram, Headline, Doe Gradient, Metrics Grid, and Action */}
          <div className="lg:col-span-6 text-center max-w-xl mx-auto flex flex-col items-center">
            {/* Spaced Monogram Wordmark (Doe Media Style) */}
            <div className="inline-block mb-3">
              <span className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-white/70 block font-semibold">
                {clientNameSpaced}
              </span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-[1.15]">
              {study.tagline}
            </h3>

            {/* Doe Media Signature Gradient Divider Line */}
            <div className="my-5 w-28 h-[3px] rounded-full bg-gradient-to-r shadow-sm opacity-90 transition-all group-hover:w-36 duration-500"
              style={{
                backgroundImage: study.accent === 'purple'
                  ? 'linear-gradient(90deg, #A855F7, #EC4899, #A855F7)'
                  : study.accent === 'amber'
                  ? 'linear-gradient(90deg, #F59E0B, #EA580C, #F59E0B)'
                  : study.accent === 'cyan'
                  ? 'linear-gradient(90deg, #06B6D4, #3B82F6, #06B6D4)'
                  : 'linear-gradient(90deg, #10B981, #14B8A6, #10B981)'
              }}
            />

            {/* Narrative Story Description */}
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-lg mb-8">
              {study.description}
            </p>

            {/* Ohio-Style Counter Metric Grid (Doe Media Animated Stats) */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
              {study.stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-3.5 text-center transition-all duration-200 hover:bg-white/10 hover:border-white/20"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                    <AnimatedCounter
                      value={stat.value}
                      trigger={isInView}
                      duration={1200 + sIdx * 100}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-white/55 font-mono uppercase tracking-wider mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Tags Row */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
              {study.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[11px] font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA Action: Outlined Pill Button (Doe Media Ohio Button Pattern) */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onSelectCaseStudy(study)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-[#0A0A0A] text-xs font-semibold tracking-tight hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md group/btn cursor-pointer"
              >
                <span>Full Case Study</span>
                <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-white transition-colors">
                  <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </span>
              </button>

              <span className="text-[11px] font-mono text-white/40">
                Role: {study.role}
              </span>
            </div>
          </div>

          {/* Right Floating Visual: Performance Analytics Mockup (DOE Media right element) */}
          <div className="hidden lg:block lg:col-span-3">
            <div
              ref={rightImageRef}
              onClick={() => onSelectCaseStudy(study)}
              className="doe-card-portfolio-image-right relative rounded-2xl overflow-hidden cursor-pointer group/right shadow-2xl border border-white/15 bg-black transition-shadow duration-300 hover:shadow-cyan-500/10 hover:border-white/30"
              style={{
                willChange: 'transform',
                transformOrigin: 'bottom left',
              }}
              title="Click to inspect analytics"
            >
              <img
                src={study.rightImage || study.image}
                alt={`${study.client} campaign analytics dashboard`}
                className="w-full h-[360px] xl:h-[410px] object-cover group-hover/right:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-mono uppercase tracking-wider bg-black/70 text-emerald-300 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Verified Data
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/80">
                <span className="font-medium truncate">Campaign Analytics</span>
                <span className="text-white/60 group-hover/right:text-white flex items-center gap-0.5">
                  <Eye className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Visual Cards Grid (Shown below lg) */}
        <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => onSelectCaseStudy(study)}
            className="relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 aspect-[16/10] bg-black group/m1"
          >
            <img
              src={study.leftImage || study.image}
              alt={`${study.client} ad creative`}
              className="w-full h-full object-cover group-hover/m1:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
              <span className="text-[11px] font-mono text-emerald-300">Ad Creative Asset</span>
              <span className="text-[11px] text-white/60 flex items-center gap-1">
                Inspect <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          <div
            onClick={() => onSelectCaseStudy(study)}
            className="relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 aspect-[16/10] bg-black group/m2"
          >
            <img
              src={study.rightImage || study.image}
              alt={`${study.client} analytics`}
              className="w-full h-full object-cover group-hover/m2:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
              <span className="text-[11px] font-mono text-cyan-300">Campaign Metrics</span>
              <span className="text-[11px] text-white/60 flex items-center gap-1">
                Inspect <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Floating Bottom Bar: Quick Chapter Jump & Scroll Indicator */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Interactive Chapter {chapterNum}</span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span>Scroll reveals side assets</span>
            <span className="text-white/20">|</span>
            <button
              onClick={() => onSelectCaseStudy(study)}
              className="text-white hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View full strategy breakdown</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
