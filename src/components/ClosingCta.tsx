import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Phone, MapPin, Sparkles, Send, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface ClosingCtaProps {
  onOpenResume: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', role: '' });
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white">
      {/* Closing CTA Rounded Container (LearnMoss Floating Island Architecture) */}
      <div className="relative rounded-[32px] sm:rounded-[44px] lg:rounded-[48px] overflow-hidden max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-8 lg:px-12 text-white isolation border border-white/15 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5)]">
        {/* Organic Blurred Gradient Layer (Matching Hero) */}
        <div className="cta__gradient" aria-hidden="true" />

        {/* Optical Vignette & Rim Shading */}
        <div className="cta__vignette" aria-hidden="true" />

        {/* Tactile Silver-Halide Film Grain Texture Layers */}
        <div className="hero__grain" aria-hidden="true" />
        <div className="hero__grain-stipple" aria-hidden="true" />

        {/* Subtle Inner Grid Overlay */}
        <div className="section--grid-dark absolute inset-0 opacity-20 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Eyebrow & Title with ScrollReveal */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider text-white/90 mb-6">
              <span>[ GET IN TOUCH · LET'S COLLABORATE ]</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-[-0.035em] text-white leading-[1.08]">
              Ready to scale your next{' '}
              <span className="bg-black/60 text-white px-3 sm:px-4 py-0.5 sm:py-1 font-serif italic inline-block transform -rotate-0.5 shadow-xl border border-white/15 my-1">
                growth engine?
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Currently interviewing for performance marketing and growth roles. Also available for select advisory and funnel consultations.
            </p>
          </ScrollReveal>

          {/* Central Glassmorphic Contact Card with ScrollReveal */}
          <ScrollReveal delay={120} className="mt-12 max-w-2xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/25 shadow-2xl text-left backdrop-blur-xl">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Prepared!</h3>
                <p className="text-sm text-white/80 max-w-md mx-auto mb-6">
                  Thanks for reaching out! You can also email Nathan directly at{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white underline font-mono">
                    {PERSONAL_INFO.email}
                  </a>.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-medium cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/25 border border-white/20 focus:border-white focus:bg-black/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/25 border border-white/20 focus:border-white focus:bg-black/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                    Opportunity / Project Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Full-Time Role, Paid Social Campaign, Funnel Audit, Advisory..."
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-black/25 border border-white/20 focus:border-white focus:bg-black/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/80 mb-1.5">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell Nathan about the role, current ad spend, or campaign goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/25 border border-white/20 focus:border-white focus:bg-black/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 hover:scale-[1.02] transition-all shadow-lg cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Growth%20Opportunity%20-%20${encodeURIComponent(formData.role)}&body=${encodeURIComponent(formData.message)}`}
                      className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      title="Send via default mail app"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-xs text-white transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300 font-mono">Copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-white/70" />
                        <span className="font-mono">{PERSONAL_INFO.email}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Quick Contact Footer Bar */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-white/75 font-mono">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white">
                  {PERSONAL_INFO.phone}
                </a>
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/85 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.linkedinHandle}</span>
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
