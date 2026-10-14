import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, Mail, Phone, GraduationCap, Award, FileText, CheckCircle2, ArrowUpRight, Linkedin, Headphones } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Quick Bio Card */}
          <div className="lg:col-span-5">
            <ScrollReveal className="sticky top-28">
              <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-lg bg-black aspect-square max-w-md mx-auto lg:max-w-none">
                <img
                  src="/src/assets/images/nathan-black-hoodie.png"
                  alt="Nathan Krumesz"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Subtle Gradient Overly */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="mb-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300">
                      Open for Roles · Toronto & Remote
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Nathan Krumesz</h3>
                  <p className="text-xs text-white/80 font-mono mt-0.5">
                    Toronto, Ontario • Remote / Relocation Open
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                    <button
                      onClick={onOpenContact}
                      className="text-xs font-medium text-white hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Get in touch</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={onOpenResume}
                      className="px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 cursor-pointer"
                    >
                      View Resume
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="mt-6 bg-[#F7F7F6] rounded-2xl p-5 border border-black/5 space-y-2.5 text-xs">
                <div className="flex items-center gap-2.5 text-black/75">
                  <MapPin className="w-4 h-4 text-black/50" />
                  <span>Toronto, Ontario, Canada</span>
                </div>
                <div className="flex items-center gap-2.5 text-black/75">
                  <Mail className="w-4 h-4 text-black/50" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline font-mono">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-black/75">
                  <Phone className="w-4 h-4 text-black/50" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline font-mono">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-black/75">
                  <Linkedin className="w-4 h-4 text-black/50" />
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-mono"
                  >
                    {PERSONAL_INFO.linkedinHandle}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-black/75">
                  <Headphones className="w-4 h-4 text-emerald-600" />
                  <a
                    href={PERSONAL_INFO.spotifyPodcast.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-mono"
                  >
                    Spotify: SaaS Growth Secrets
                  </a>
                </div>
              </div>

              {/* Spotify Podcast Feature Card */}
              <div className="mt-5 rounded-2xl p-5 bg-gradient-to-br from-[#0c1a12] via-[#08120c] to-[#040806] border border-emerald-500/25 text-white shadow-lg relative overflow-hidden group">
                {/* Emerald ambient blur */}
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-emerald-500/20 blur-xl pointer-events-none group-hover:bg-emerald-500/30 transition-all duration-500" />
                
                <div className="relative z-10">
                  {/* Eyebrow */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />
                      Spotify Podcast
                    </span>
                    <span className="text-[10px] font-mono text-emerald-300/80">
                      70 Episodes
                    </span>
                  </div>

                  {/* Artwork & Show Details */}
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-md border border-white/15 bg-black">
                      <img
                        src="/portfolio/podcast-cover.jpg"
                        alt="SaaS Growth Secrets Podcast Cover"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white tracking-tight leading-snug group-hover:text-emerald-300 transition-colors truncate">
                        SaaS Growth Secrets
                      </h4>
                      <p className="text-[11px] text-white/60 mt-0.5 font-light truncate">
                        Hosted by Nathan Krumesz
                      </p>
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-400/90 font-mono">
                        <span className="text-amber-400">★★★★★</span>
                        <span className="text-white/40">•</span>
                        <span>Funnel Hacking & CRO</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] text-white/70 font-light leading-relaxed line-clamp-2">
                    Actionable marketing nuggets, 5-minute webinar scripts, and direct response strategies for scaling high-growth businesses.
                  </p>

                  {/* Listen on Spotify Button */}
                  <a
                    href="https://open.spotify.com/show/0uvYSFwog366kyHsrmFZ3D?si=cd69d48bf2d74df9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3.5 w-full py-2 px-3.5 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold text-xs flex items-center justify-between transition-all shadow-sm hover:scale-[1.01] cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.215.352-.676.463-1.028.248-2.812-1.718-6.353-2.107-10.523-1.154-.403.092-.806-.157-.898-.56-.092-.403.157-.806.56-.898 4.567-1.043 8.487-.604 11.64 1.336.353.216.464.676.249 1.028zm1.469-3.267c-.27.44-.848.58-1.288.31-3.218-1.977-8.125-2.55-11.932-1.393-.497.151-1.024-.134-1.175-.63-.151-.497.134-1.024.63-1.176 4.354-1.321 9.774-.683 13.454 1.58.44.27.581.848.311 1.289zm.126-3.41c-3.859-2.29-10.224-2.502-13.896-1.387-.593.18-1.22-.162-1.4-.755-.18-.593.162-1.22.755-1.4 4.218-1.28 11.25-1.037 15.69 1.6c.532.316.707 1.007.391 1.54-.316.533-1.008.707-1.54.391z"/>
                      </svg>
                      <span>Listen on Spotify</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-black/70" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative, Career Path & Education */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-black/50 block mb-3">
                [ ABOUT NATHAN ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#0A0A0A] leading-[1.1]">
                Performance Marketing with <span className="font-serif italic font-normal text-black">Technical Rigor.</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#3A3A3A] font-light leading-relaxed">
                I am a digital marketing specialist with over 5 years of full-cycle experience scaling DTC and B2B brands. My career is defined by driving measurable outcomes: scaling audiences to 60,000+ organic followers, delivering $1M+ in revenue growth for scaling brands, and developing paid social campaigns that have reached millions of consumers.
              </p>

              <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed">
                Unlike marketers who rely solely on third-party agencies or intuition, I bridge media buying (Meta Ads Manager, TikTok Ads), direct response creative development (VSLs, UGC scripts, Canva/CapCut), and high-converting funnel optimization (ClickFunnels, Shopify CRO, A/B testing).
              </p>
            </ScrollReveal>

            {/* Experience Timeline */}
            <ScrollReveal delay={100} className="mt-12">
              <h3 className="text-sm font-mono uppercase tracking-wider text-black/60 mb-6 pb-2 border-b border-black/10">
                [ CAREER TIMELINE ]
              </h3>

              <div className="space-y-6">
                <ScrollReveal delay={120} className="border-l-2 border-black/15 pl-5 relative">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-black" />
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-base font-semibold text-black">
                      Administrative Assistant
                    </h4>
                    <span className="text-xs font-mono text-black/50 whitespace-nowrap">
                      Feb 2024 – Apr 2025
                    </span>
                  </div>
                  <p className="text-xs font-medium text-black/70 mb-1">
                    RBC Wealth Management • Toronto, Canada
                  </p>
                  <p className="text-xs text-black/60 font-light leading-relaxed">
                    Centralized client records into a CRM system as part of a digital transformation initiative. Maintained PIPEDA compliance, improved reporting accuracy, and coordinated advisor operations.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={180} className="border-l-2 border-black/15 pl-5 relative">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-emerald-600" />
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-base font-semibold text-black">
                      Digital Marketing Specialist
                    </h4>
                    <span className="text-xs font-mono text-black/50 whitespace-nowrap">
                      Feb 2023 – Jul 2024
                    </span>
                  </div>
                  <p className="text-xs font-medium text-black/70 mb-1">
                    Mighti (Functional Mushroom Supplements) • Remote
                  </p>
                  <p className="text-xs text-black/60 font-light leading-relaxed">
                    Built end-to-end DTC marketing funnels. Managed full-cycle Meta paid ad campaigns from creative development and ad copywriting through media buying and 4.2x ROAS scaling.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={240} className="border-l-2 border-black/15 pl-5 relative">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-purple-600" />
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-base font-semibold text-black">
                      Paid Social & Performance Marketing Specialist
                    </h4>
                    <span className="text-xs font-mono text-black/50 whitespace-nowrap">
                      Oct 2023 – Jan 2024
                    </span>
                  </div>
                  <p className="text-xs font-medium text-black/70 mb-1">
                    Kalaia Skincare • Remote
                  </p>
                  <p className="text-xs text-black/60 font-light leading-relaxed">
                    Led Meta & TikTok campaigns, generated 7.4x peak ROAS, wrote high-converting video sales scripts, and launched a multi-product bundle offer boosting AOV by 32%.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={300} className="border-l-2 border-black/15 pl-5 relative">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-amber-600" />
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-base font-semibold text-black">
                      Creative Strategist
                    </h4>
                    <span className="text-xs font-mono text-black/50 whitespace-nowrap">
                      Sep 2022 – Dec 2022
                    </span>
                  </div>
                  <p className="text-xs font-medium text-black/70 mb-1">
                    Petsmont (Pet Wellness E-Commerce) • Remote
                  </p>
                  <p className="text-xs text-black/60 font-light leading-relaxed">
                    Built full multi-step ClickFunnels sales funnels, designed 11%+ converting one-time-offers (OTOs), improved opt-in conversion rates by 40%+ relative, and wrote AI-assisted sales video scripts.
                  </p>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            {/* Education & Certifications */}
            <ScrollReveal delay={150} className="mt-12 pt-8 border-t border-black/10">
              <h3 className="text-sm font-mono uppercase tracking-wider text-black/60 mb-6">
                [ EDUCATION & CREDENTIALS ]
              </h3>

              <div className="space-y-4">
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <ScrollReveal
                    key={idx}
                    delay={idx * 80}
                    className="p-4 rounded-2xl bg-[#F7F7F6] border border-black/5 flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-xl bg-white text-black shadow-xs mt-0.5">
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-semibold text-black">
                          {edu.institution}
                        </h4>
                        <span className="text-[11px] font-mono text-black/50">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-black/80 mt-0.5">
                        {edu.degree}
                      </p>
                      <p className="text-[11px] text-black/60 mt-1 font-light leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A0A0A] text-white text-xs font-medium hover:bg-black/85 transition-all shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Printable 2-Page Resume</span>
                </button>

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/15 text-black text-xs font-medium hover:bg-black/5 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
