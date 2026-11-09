import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle2, ChevronRight, Sparkles, FileText, Zap, Eye, Play } from 'lucide-react';
import { HERO_CAROUSEL_ITEMS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onSelectCaseStudy: (id: string) => void;
}

// Resilient Autoloop Video for Desktop Hero Showcase
const HeroAutoVideo: React.FC<{
  src: string;
  fallbackSrc?: string;
  poster: string;
  alt: string;
}> = ({ src, fallbackSrc, poster, alt }) => {
  const [videoSrc, setVideoSrc] = useState(src);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Handled silently for strict browser autoplay permissions
      });
    }
  }, [videoSrc]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
      aria-label={alt}
      onError={() => {
        if (fallbackSrc && videoSrc !== fallbackSrc) {
          setVideoSrc(fallbackSrc);
        }
      }}
    >
      <source src={videoSrc} type="video/mp4" />
      {fallbackSrc && fallbackSrc !== videoSrc && (
        <source src={fallbackSrc} type="video/mp4" />
      )}
    </video>
  );
};

// 3 Core Verified Case Studies for Desktop Hero Showcase
const HERO_SHOWCASE_VIDEOS = [
  {
    id: 'mighti-mushrooms',
    brand: 'Mighti Fungi',
    tagline: 'Level Up Nootropic DTC',
    metric: '2x AOV',
    submetric: 'Doubled from $90 to $180',
    statBadge: '#1 Ad Creative Set',
    category: 'Meta Ads & Upsell Funnel',
    src: '/videos/mighti-submagic-card.mp4',
    fallbackSrc: 'https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/x0ygzRZemEeBrEd2LHf69/pw-sales-video-1mov-download-1793033245846.mp4',
    poster: '/portfolio/video-thumbs/mighti-submagic-poster.jpg',
    accentColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    borderGlow: 'border-emerald-500/40',
    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
    animationClass: 'animate-hero-float-left',
    defaultZ: 'z-10',
  },
  {
    id: 'kalaia-skincare',
    brand: 'Kalaia Skincare',
    tagline: 'Clean Beauty DTC',
    metric: '7.4x ROAS',
    submetric: 'Peak Return on Ad Spend',
    statBadge: '9:16 Demonstration Reel',
    category: 'Paid Social & ClickFunnels',
    src: '/videos/kalaia-reel-card.mp4',
    fallbackSrc: 'https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/Vtl12sLoFd81r6f6k547O/kalaia-reelmp4-download-1792178164555.mp4',
    poster: '/portfolio/video-thumbs/kalaia-reel-poster.jpg',
    accentColor: '#A855F7',
    glowColor: 'rgba(168, 85, 247, 0.50)',
    borderGlow: 'border-purple-500/40',
    badgeClass: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
    animationClass: 'animate-hero-float-center',
    defaultZ: 'z-20',
  },
  {
    id: 'petsmont',
    brand: 'Petsmont',
    tagline: 'Touch & Heal Paw Balm',
    metric: '+40% Lift',
    submetric: 'Relative Funnel Opt-In',
    statBadge: '11%+ Upsell Opt-In',
    category: 'Sales VSL & OTO Flow',
    src: '/videos/petsmont-left-loop.mp4',
    fallbackSrc: '/videos/petsmont-sales-vsl.mp4',
    poster: '/portfolio/video-thumbs/petsmont-sales-vsl-frame.jpg',
    accentColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.45)',
    borderGlow: 'border-amber-500/40',
    badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
    animationClass: 'animate-hero-float-right',
    defaultZ: 'z-10',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact, onSelectCaseStudy }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

        {/* Central Dramatic Headline & Lead + Desktop Case Studies Video Showcase */}
        <div className="relative z-10 my-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Headline, Bio & Primary Actions */}
          <div className="lg:col-span-7 xl:col-span-7 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-[48px] xl:text-[62px] font-semibold tracking-[-0.03em] leading-[1.08] text-white">
              Scaling DTC brands with{' '}
              <span className="bg-black text-white px-2.5 sm:px-4 py-0.5 sm:py-1 font-serif italic font-light inline-block transform -rotate-0.5 shadow-xl border border-white/15 my-1">
                real-world results
              </span>{' '}
              through data & creative.
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg xl:text-xl font-light text-white/85 max-w-2xl leading-relaxed">
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

          {/* Right Column: Desktop-Only 3 Case Studies Video Showcase */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 flex-col items-center justify-center relative select-none">
            {/* Ambient Title Pill without 'Autoplaying' text */}
            <div className="flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-xs font-mono text-white/90 shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="tracking-wider uppercase text-[10px]">3 Live Case Study Video Ads</span>
            </div>

            {/* Stable Fanned Video Stage: zero horizontal jumps on hover */}
            <div className="relative w-full max-w-[440px] xl:max-w-[480px] flex items-center justify-center -space-x-6 xl:-space-x-5 py-6 px-2">
              {HERO_SHOWCASE_VIDEOS.map((item, idx) => {
                const isHovered = hoveredIndex === idx;
                const isDimmed = hoveredIndex !== null && !isHovered;

                // Resting rotational tilt and z-index per slot
                const baseRotation = idx === 0 ? '-rotate-6' : idx === 2 ? 'rotate-6' : 'rotate-0';
                const defaultZ = idx === 1 ? 'z-20' : 'z-10';
                const floatAnimation = hoveredIndex === null ? item.animationClass : '';

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => onSelectCaseStudy(item.id)}
                    style={{
                      boxShadow: isHovered
                        ? `0 25px 65px -10px ${item.glowColor}, 0 0 35px ${item.glowColor}`
                        : '0 20px 45px -15px rgba(0,0,0,0.7)',
                    }}
                    className={`relative cursor-pointer transition-all duration-300 ease-out rounded-2xl overflow-hidden border border-white/20 bg-black w-[145px] xl:w-[165px] h-[260px] xl:h-[295px] shrink-0 ${
                      isHovered
                        ? 'z-40 scale-110 -translate-y-5 rotate-0 opacity-100 ring-2 ring-white/80 shadow-2xl'
                        : isDimmed
                        ? 'opacity-45 scale-95 z-0 blur-[0.5px]'
                        : `${defaultZ} ${baseRotation} ${floatAnimation}`
                    }`}
                  >
                    {/* Glowing Aura Behind Card */}
                    <div
                      className="absolute -inset-1 rounded-2xl blur-lg transition-opacity duration-300 pointer-events-none"
                      style={{
                        backgroundColor: item.accentColor,
                        opacity: isHovered ? 0.45 : 0.15,
                      }}
                    />

                    {/* Video Player */}
                    <div className="relative w-full h-full overflow-hidden bg-black">
                      <HeroAutoVideo
                        src={item.src}
                        fallbackSrc={item.fallbackSrc}
                        poster={item.poster}
                        alt={`${item.brand} ad video`}
                      />

                      {/* Vignette gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none" />

                      {/* Top Live Pill */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
                        <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border backdrop-blur-md font-semibold flex items-center gap-1 ${item.badgeClass}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          {item.brand.split(' ')[0]}
                        </span>
                        <span className="text-[9px] font-mono bg-black/60 text-white/80 px-1.5 py-0.5 rounded backdrop-blur-md border border-white/10 flex items-center gap-0.5">
                          <Eye className="w-2.5 h-2.5" />
                        </span>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 text-left pointer-events-none">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                          {item.metric}
                        </div>
                        <div className="text-xs font-semibold text-white tracking-tight leading-tight mt-0.5 truncate">
                          {item.submetric}
                        </div>
                        <div className="text-[9px] font-mono text-emerald-300 mt-1 truncate">
                          {item.statBadge}
                        </div>

                        {/* Hover Prompt */}
                        <div className={`mt-1.5 pt-1.5 border-t border-white/15 flex items-center justify-between text-[9px] font-mono transition-opacity duration-300 ${
                          isHovered ? 'opacity-100 text-white' : 'opacity-0'
                        }`}>
                          <span>Open Case Study</span>
                          <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
