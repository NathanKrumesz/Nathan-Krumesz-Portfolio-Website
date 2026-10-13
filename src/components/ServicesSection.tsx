import React from 'react';
import { Target, Split, Film, Gift, Share2, BarChart3, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ServicesSectionProps {
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const services = [
    {
      icon: Target,
      tag: "PAID MEDIA",
      title: "Paid Social Advertising",
      description: "Full-cycle Meta (FB/IG) and TikTok campaign management. From creative development and ad copywriting through high-intent audience targeting, media buying, and bid optimization.",
      highlights: [
        "Meta Ads Manager & TikTok Ads auctions",
        "Cold prospecting & retention remarketing",
        "Direct-response ad copywriting",
        "ROAS optimization & budget scaling"
      ],
      certified: "Meta & TikTok Ads"
    },
    {
      icon: Split,
      tag: "GROWTH & FUNNELS",
      title: "Conversion Rate Optimization (CRO)",
      description: "Replacing low-converting static product pages with high-converting direct response funnels. Structured A/B split tests on headers, value propositions, and checkout flows.",
      highlights: [
        "Multi-step ClickFunnels & Shopify architectures",
        "Systematic A/B split testing methodology",
        "Landing page wireframing & optimization",
        "Drop-off analysis & frictionless checkout"
      ],
      certified: "ClickFunnels & Shopify"
    },
    {
      icon: Film,
      tag: "CREATIVE & VIDEO",
      title: "Creative Strategy & Direct Video",
      description: "Direction for static ads, motion graphics, and short-form video sales scripts. Engineering 3-second scroll-stopping hooks and iterative testing loops with graphic designers.",
      highlights: [
        "Direct response video sales scripts (VSLs)",
        "Short-form UGC and Reels/TikTok frameworks",
        "Iterative ad creative design in Canva & CapCut",
        "Hook-to-hold rate analysis & creative refreshes"
      ],
      certified: "Canva & CapCut Pro"
    },
    {
      icon: Gift,
      tag: "OFFER ARCHITECTURE",
      title: "Offer Strategy & AOV Maximization",
      description: "Crafting 'irresistible offer' structures and One-Time-Offers (OTOs) that immediately increase initial cart sizes, giving brands the margin needed to outbid competitors.",
      highlights: [
        "One-Time-Offer (OTO) upsell sequences (11%+ conversion)",
        "Multi-product bundles & tiered volume pricing",
        "Customer lifetime value (LTV) expansion",
        "Risk-reversal guarantees & persuasive pricing"
      ],
      certified: "Funnel Monetization"
    },
    {
      icon: Share2,
      tag: "ORGANIC DISTRIBUTION",
      title: "Organic Social & Community Growth",
      description: "Proven record scaling organic communities to 60,000+ followers and producing viral videos with 100,000+ views, amplifying brand equity without ongoing ad costs.",
      highlights: [
        "Audience growth to 60,000+ organic followers",
        "Viral video concepts generating 2,500% reach surge",
        "Community building & engagement strategies",
        "Omni-channel social media distribution"
      ],
      certified: "Organic Strategy"
    },
    {
      icon: BarChart3,
      tag: "SYSTEMS & CODE",
      title: "Analytics, Attribution & Tech",
      description: "Data-first mindset grounded in computer science (Harvard CS50x) and enterprise systems (RBC Wealth Management). Centralizing CRM data, GA4 tracking, and reporting.",
      highlights: [
        "Google Analytics 4 & KPI dashboarding",
        "Salesforce CRM integration & data hygiene",
        "Technical fundamentals: SQL, Python & HTML/CSS",
        "PIPEDA privacy compliance & accurate attribution"
      ],
      certified: "GA4, Salesforce & SQL"
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F7F7F6] section--grid border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* DOE Header Pattern */}
        <ScrollReveal className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-black/50 block">
            [ CORE CAPABILITIES ]
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-[#0A0A0A] leading-[1.05]">
            WHAT I DO <span className="font-serif italic font-normal text-black">Relentlessly.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-light max-w-2xl leading-relaxed">
            I help ambitious DTC brands and forward-thinking businesses scale past acquisition plateaus with data-proven performance marketing strategies that actually generate profit.
          </p>
        </ScrollReveal>

        {/* 6 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={index}
                delay={index * 60}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-black/5 hover:border-black/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F7F7F6] flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-black/45 bg-[#F7F7F6] px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0A0A0A] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#4A4A4A] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-black/5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-black/75">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-black/50 font-mono">
                  <span>Stack: {item.certified}</span>
                  <button 
                    onClick={onOpenContact}
                    className="font-medium text-black hover:underline"
                  >
                    Inquire →
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
