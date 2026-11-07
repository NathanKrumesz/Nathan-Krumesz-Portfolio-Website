import React, { useEffect, useState, useRef } from 'react';
import { Copy, Check, Mail, MapPin, Sparkles, Linkedin, Headphones, Calendar, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
    };
  }
}

interface ClosingCtaProps {
  onOpenResume: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const calendlyUrl = "https://calendly.com/nathan-krumesz/marketing-job-interview";

  useEffect(() => {
    let isMounted = true;

    const initWidget = () => {
      const Calendly = window.Calendly;
      if (Calendly && typeof Calendly.initInlineWidget === 'function' && containerRef.current) {
        // Prevent duplicate iframes on rerender
        containerRef.current.innerHTML = '';
        Calendly.initInlineWidget({
          url: `${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=10b981`,
          parentElement: containerRef.current,
        });
        if (isMounted) setWidgetLoaded(true);
        return true;
      }
      return false;
    };

    // Try immediately if script is already cached
    if (initWidget()) return;

    // Ensure external widget script is attached
    let script = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Poll until window.Calendly is ready
    let attempts = 0;
    const interval = setInterval(() => {
      if (!isMounted) {
        clearInterval(interval);
        return;
      }
      attempts++;
      if (initWidget() || attempts > 35) {
        clearInterval(interval);
        if (isMounted && attempts > 35) {
          setWidgetLoaded(true);
        }
      }
    }, 150);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white">
      {/* Closing CTA Rounded Container (LearnMoss Floating Island Architecture) */}
      <div className="relative rounded-[32px] sm:rounded-[44px] lg:rounded-[48px] overflow-hidden max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-8 lg:px-12 text-white isolation border border-white/15 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5)]">
        {/* Background Image Layer */}
        <div className="cta__gradient" aria-hidden="true" />

        {/* Soft Vignette for Text Contrast */}
        <div className="cta__vignette" aria-hidden="true" />

        {/* Subtle Inner Grid Overlay */}
        <div className="section--grid-dark absolute inset-0 opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Eyebrow & Title with ScrollReveal */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider text-white/90 mb-6">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>[ SCHEDULE AN INTERVIEW · DIRECT CALENDAR ]</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-semibold tracking-[-0.035em] text-white leading-[1.08]">
              Ready to scale your next{' '}
              <span className="bg-black/60 text-white px-3 sm:px-4 py-0.5 sm:py-1 font-serif italic font-light inline-block transform -rotate-0.5 shadow-xl border border-white/15 my-1">
                growth engine?
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Book a marketing job interview or growth strategy session directly on my calendar below, or reach out directly via email.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-xs text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">{PERSONAL_INFO.email}</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-xs text-white transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-mono">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-white/70" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Central Glassmorphic Calendar Card with ScrollReveal */}
          <ScrollReveal delay={120} className="mt-10 max-w-3xl mx-auto glass-panel rounded-3xl p-3 sm:p-6 border border-white/25 shadow-2xl text-left backdrop-blur-xl">
            {/* Direct Booking Utility Header */}
            <div className="flex items-center justify-between pb-3 px-1 text-xs text-white/80 border-b border-white/10 mb-3">
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Availability · Toronto & Worldwide
              </span>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-white/70 hover:text-white transition-colors hover:underline"
              >
                <span>Direct Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Calendly inline widget container */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-black/10 relative min-h-[700px]">
              {!widgetLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white z-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-3">
                    <Calendar className="w-6 h-6 text-emerald-600 animate-pulse" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900">Loading Nathan's Direct Calendar...</h4>
                  <p className="text-xs text-gray-500 mt-1 max-w-xs">Connecting to live calendar slots for marketing interviews and strategy consultations.</p>
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0A0A0A] text-white text-xs font-medium hover:bg-black/80 transition-colors shadow-sm"
                  >
                    <span>Click Here to Open Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
              <div
                ref={containerRef}
                style={{ minWidth: '100%', height: '700px', width: '100%' }}
              />
            </div>

            {/* Quick Contact Footer Bar */}
            <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-white/75 font-mono">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.linkedinHandle}</span>
              </a>
              <a
                href={PERSONAL_INFO.spotifyPodcast.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/85 hover:text-[#1DB954] transition-colors"
              >
                <Headphones className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>Spotify Podcast</span>
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Toronto, ON (Remote Worldwide)
              </span>
              <button
                onClick={onOpenResume}
                className="text-white hover:underline flex items-center gap-1 cursor-pointer"
              >
                Resume PDF →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
