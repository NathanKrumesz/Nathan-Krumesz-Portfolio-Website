import React, { useState, useMemo } from 'react';
import { BRAND_PARTNERS, BrandPartner } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';
import { ScrollReveal } from './ScrollReveal';
import { LayoutGrid, List, ArrowUpRight, Search, X, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface BrandsSectionProps {
  onSelectCaseStudy?: (id: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onSelectCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'ledger'>('cards');

  // Case study mapping from brand id to case study id
  const caseStudyMapping: Record<string, string> = {
    mighti: 'mighti-mushrooms',
    kalaia: 'kalaia-skincare',
    petsmont: 'petsmont-funnels',
    thummy: 'thummy-saas',
  };

  // Compute category counts dynamically
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: BRAND_PARTNERS.length };
    BRAND_PARTNERS.forEach((b) => {
      counts[b.industry] = (counts[b.industry] || 0) + 1;
    });
    return counts;
  }, []);

  const categories = [
    { id: 'all', label: 'All Sectors' },
    { id: 'DTC E-Commerce', label: 'DTC E-Commerce' },
    { id: 'Tech & SaaS', label: 'Tech & SaaS' },
    { id: 'Health & Wellness', label: 'Health & Wellness' },
    { id: 'Enterprise & B2B', label: 'Enterprise & B2B' },
  ];

  const filteredBrands = useMemo(() => {
    return BRAND_PARTNERS.filter((b) => {
      const matchesCategory = activeCategory === 'all' || b.industry === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.tagline.toLowerCase().includes(q) ||
        b.outcome.toLowerCase().includes(q) ||
        b.industry.toLowerCase().includes(q) ||
        b.role.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Split brands for the dual infinite marquee ribbons
  const row1Brands = BRAND_PARTNERS.slice(0, 6);
  const row2Brands = BRAND_PARTNERS.slice(6, 12);

  const handleLaunchCaseStudy = (brandId: string) => {
    const targetId = caseStudyMapping[brandId] || brandId;
    if (onSelectCaseStudy) {
      onSelectCaseStudy(targetId);
    }
  };

  return (
    <section id="brands" className="py-20 sm:py-28 bg-[#F7F7F6] section--grid border-b border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-black/50 block">
            [ CLIENTS & COLLABORATIONS ]
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-[#0A0A0A] leading-tight">
            Some of the brands <span className="font-serif italic font-normal text-black">I've grown.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-black/60 font-light max-w-xl mx-auto leading-relaxed">
            Performance marketing campaigns, high-converting direct-response funnels, and creative strategy deployed across scaling DTC brands, venture platforms, and enterprise financial leaders.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-black/60">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-black/80 font-medium">12 Brand Partnerships</span>
            </span>
            <span>·</span>
            <span>$45M+ Aggregate Spend Managed</span>
            <span>·</span>
            <span>100% Attribution Precision</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite Logo Marquee Ribbon (Dual Opposing Tracks) */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F7F7F6] via-[#F7F7F6]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F7F7F6] via-[#F7F7F6]/80 to-transparent z-10 pointer-events-none" />

        {/* Track 1: Moving Left */}
        <div className="flex animate-marquee-left gap-4 sm:gap-6 mb-4">
          {[...row1Brands, ...row1Brands, ...row1Brands].map((brand, i) => (
            <div
              key={`row1-${i}`}
              className="bg-white rounded-2xl px-6 py-4 border border-black/8 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-6 shrink-0 group"
            >
              <div className="h-8 flex items-center text-[#0A0A0A] group-hover:scale-105 transition-transform duration-300">
                <BrandLogo
                  logoType={brand.logoType}
                  name={brand.name}
                  className="h-7 w-auto"
                />
              </div>
              <div className="h-6 w-px bg-black/10" />
              <div className="text-left">
                <span className="text-[11px] font-mono font-medium tracking-wide text-emerald-900 block whitespace-nowrap">
                  {brand.outcome}
                </span>
                <span className="text-[10px] text-black/45 block mt-0.5 whitespace-nowrap">
                  {brand.industry} · {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Track 2: Moving Right */}
        <div className="flex animate-marquee-right gap-4 sm:gap-6">
          {[...row2Brands, ...row2Brands, ...row2Brands].map((brand, i) => (
            <div
              key={`row2-${i}`}
              className="bg-white rounded-2xl px-6 py-4 border border-black/8 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-6 shrink-0 group"
            >
              <div className="h-8 flex items-center text-[#0A0A0A] group-hover:scale-105 transition-transform duration-300">
                <BrandLogo
                  logoType={brand.logoType}
                  name={brand.name}
                  className="h-7 w-auto"
                />
              </div>
              <div className="h-6 w-px bg-black/10" />
              <div className="text-left">
                <span className="text-[11px] font-mono font-medium tracking-wide text-black/80 block whitespace-nowrap">
                  {brand.outcome}
                </span>
                <span className="text-[10px] text-black/45 block mt-0.5 whitespace-nowrap">
                  {brand.industry} · {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bespoke Curated Portfolio Index & Sector Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
        {/* Editorial Section Header */}
        <ScrollReveal className="mb-10 sm:mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-black/45 block mb-2">
                [ ARCHIVE & COMMERCIAL ROSTER ]
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[-0.03em] text-[#0A0A0A] leading-tight">
                The Portfolio Index & <span className="font-serif italic font-normal text-black">Sector Directory.</span>
              </h3>
              <p className="mt-2 text-sm text-black/60 font-light max-w-2xl leading-relaxed">
                An authenticated record of 12 commercial brand partnerships spanning direct-to-consumer e-commerce, proprietary SaaS engines, and enterprise wealth advisory.
              </p>
            </div>

            {/* Quick Aggregate Proof Metrics */}
            <div className="flex items-center gap-5 text-xs font-mono text-black/55 shrink-0">
              <div className="text-left sm:text-right">
                <span className="block text-base sm:text-lg font-semibold text-black tracking-tight">4 Sectors</span>
                <span className="text-[11px] text-black/40">12 Verified Partners</span>
              </div>
              <div className="h-8 w-px bg-black/10" />
              <div className="text-left sm:text-right">
                <span className="block text-base sm:text-lg font-semibold text-emerald-700 tracking-tight">100%</span>
                <span className="text-[11px] text-black/40">Direct Attribution</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Controls Bar: Segmented Filters + Search + View Switcher */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Sector Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-black/8 shadow-2xs">
            {categories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0A0A0A] text-white shadow-xs'
                      : 'text-black/60 hover:text-black hover:bg-black/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono ${
                      isActive ? 'text-white/60' : 'text-black/40'
                    }`}
                  >
                    [{count}]
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Controls: Search Input + View Mode Toggle */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-black/40 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search brand, outcome, role..."
                className="w-full pl-8 pr-7 py-1.5 bg-white text-xs text-black placeholder:text-black/40 rounded-xl border border-black/8 focus:border-black/30 focus:outline-none focus:ring-1 focus:ring-black/10 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-black/40 hover:text-black p-0.5 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* View Mode Toggle (Cards vs. Ledger) */}
            <div className="flex items-center p-1 bg-white rounded-xl border border-black/8 shadow-2xs shrink-0">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium ${
                  viewMode === 'cards'
                    ? 'bg-[#0A0A0A] text-white shadow-xs'
                    : 'text-black/50 hover:text-black hover:bg-black/5'
                }`}
                title="Curated Cards View"
                aria-label="Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Cards</span>
              </button>
              <button
                onClick={() => setViewMode('ledger')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium ${
                  viewMode === 'ledger'
                    ? 'bg-[#0A0A0A] text-white shadow-xs'
                    : 'text-black/50 hover:text-black hover:bg-black/5'
                }`}
                title="Archival Ledger View"
                aria-label="Ledger View"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Ledger</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results summary bar if active filter or search */}
        {(activeCategory !== 'all' || searchQuery.trim()) && (
          <div className="mb-6 flex items-center justify-between text-xs font-mono text-black/60 bg-black/[0.03] px-4 py-2.5 rounded-xl border border-black/5">
            <div className="flex flex-wrap items-center gap-2">
              <span>
                Displaying <strong>{filteredBrands.length}</strong> of 12 partner records
              </span>
              {activeCategory !== 'all' && (
                <>
                  <span>·</span>
                  <span>Sector: {activeCategory}</span>
                </>
              )}
              {searchQuery.trim() && (
                <>
                  <span>·</span>
                  <span>Matching: "{searchQuery}"</span>
                </>
              )}
            </div>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-black font-medium hover:underline cursor-pointer shrink-0 ml-3"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredBrands.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-black/8 shadow-2xs max-w-lg mx-auto my-12">
            <p className="text-sm text-black/60 mb-4">
              No brand records found matching "{searchQuery}" in {activeCategory === 'all' ? 'any sector' : activeCategory}.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#0A0A0A] text-white rounded-xl text-xs font-medium hover:bg-black/80 transition-colors cursor-pointer"
            >
              Clear Search & Show All Brands
            </button>
          </div>
        )}

        {/* VIEW MODE 1: Curated Editorial Cards */}
        {viewMode === 'cards' && filteredBrands.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredBrands.map((brand, idx) => {
              const hasCaseStudy = Boolean(caseStudyMapping[brand.id]);

              return (
                <ScrollReveal
                  key={brand.id}
                  delay={(idx % 4) * 50}
                  className="bg-white rounded-2xl p-6 border border-black/8 hover:border-black/25 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
                >
                  <div>
                    {/* Top Index & Sector Line */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/8 text-[11px] font-mono text-black/45">
                      <span className="font-semibold text-black/60">
                        № {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="truncate max-w-[170px] text-right">
                        {brand.industry}
                      </span>
                    </div>

                    {/* Brand Logo Presentation */}
                    <div className="h-12 flex items-center justify-start mb-4 text-[#0A0A0A] group-hover:scale-[1.02] transition-transform duration-200">
                      <BrandLogo
                        logoType={brand.logoType}
                        name={brand.name}
                        className="h-7 w-auto"
                      />
                    </div>

                    {/* Brand Header */}
                    <h4 className="text-[15px] font-semibold text-black tracking-tight leading-snug">
                      {brand.name}
                    </h4>
                    <p className="text-xs text-black/55 font-light mt-1 line-clamp-2 leading-relaxed">
                      {brand.tagline}
                    </p>

                    {/* Verified Growth Metric (Editorial High-Contrast Treatment) */}
                    <div className="my-5 pt-3.5 pb-3 border-y border-black/8 bg-gradient-to-r from-[#F7F7F6]/80 via-[#F7F7F6]/40 to-transparent -mx-6 px-6">
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-black/45 block mb-1">
                        [ GROWTH OUTCOME ]
                      </span>
                      <div className="text-[14px] font-medium tracking-tight text-[#0A0A0A] leading-snug">
                        {brand.outcome}
                      </div>
                    </div>

                    {/* Mandate & Discipline */}
                    <div className="text-xs space-y-1">
                      <div className="flex items-center gap-1.5 text-black/70 font-mono text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                        <span>Role: {brand.role}</span>
                      </div>
                      <div className="text-[11px] text-black/45 font-mono">
                        Domain: {brand.category}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-5 mt-4 border-t border-black/8">
                    {hasCaseStudy ? (
                      <button
                        onClick={() => handleLaunchCaseStudy(brand.id)}
                        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] text-white hover:bg-black/85 text-xs font-medium transition-all group/btn cursor-pointer shadow-xs hover:shadow-sm"
                      >
                        <span>Explore Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    ) : (
                      <div className="flex items-center justify-between text-[11px] font-mono text-black/55 py-1">
                        <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Direct Client Mandate</span>
                        </span>
                        <span className="text-black/35 text-[10px]">Active Record</span>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 2: Archival Swiss Ledger View */}
        {viewMode === 'ledger' && filteredBrands.length > 0 && (
          <ScrollReveal className="bg-white rounded-2xl border border-black/8 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/10 bg-[#FAFAF9] text-[11px] font-mono text-black/50 uppercase tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6 w-12 font-medium">№</th>
                    <th className="py-3.5 px-4 font-medium">Brand & Organization</th>
                    <th className="py-3.5 px-4 font-medium hidden md:table-cell">Sector & Domain</th>
                    <th className="py-3.5 px-4 font-medium hidden sm:table-cell">Mandate / Role</th>
                    <th className="py-3.5 px-4 font-medium">Growth Outcome</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right font-medium">Documentation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-xs text-black/80 font-sans">
                  {filteredBrands.map((brand, idx) => {
                    const hasCaseStudy = Boolean(caseStudyMapping[brand.id]);

                    return (
                      <tr
                        key={brand.id}
                        onClick={() => hasCaseStudy && handleLaunchCaseStudy(brand.id)}
                        className={`transition-colors ${
                          hasCaseStudy ? 'cursor-pointer hover:bg-black/[0.02]' : 'hover:bg-black/[0.01]'
                        }`}
                      >
                        {/* Index */}
                        <td className="py-4 px-4 sm:px-6 font-mono text-black/40 text-[11px]">
                          {String(idx + 1).padStart(2, '0')}
                        </td>

                        {/* Brand Info & Logo */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-20 sm:w-24 shrink-0 text-[#0A0A0A]">
                              <BrandLogo
                                logoType={brand.logoType}
                                name={brand.name}
                                className="h-6 w-auto"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-black tracking-tight text-sm">
                                {brand.name}
                              </div>
                              <div className="text-[11px] text-black/50 font-light truncate max-w-[200px]">
                                {brand.tagline}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Sector */}
                        <td className="py-4 px-4 hidden md:table-cell font-mono text-[11px] text-black/60">
                          <div>{brand.industry}</div>
                          <div className="text-black/40 text-[10px]">{brand.category}</div>
                        </td>

                        {/* Role */}
                        <td className="py-4 px-4 hidden sm:table-cell text-black/70">
                          {brand.role}
                        </td>

                        {/* Outcome */}
                        <td className="py-4 px-4">
                          <span className="font-medium text-black text-xs block">
                            {brand.outcome}
                          </span>
                        </td>

                        {/* Action / Documentation */}
                        <td className="py-4 px-4 sm:px-6 text-right">
                          {hasCaseStudy ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLaunchCaseStudy(brand.id);
                              }}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0A0A0A] text-white hover:bg-black/80 text-[11px] font-medium transition-colors cursor-pointer"
                            >
                              <span>View Case Study</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </button>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span className="hidden lg:inline">Verified Client</span>
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        )}

        {/* Sector Versatility Architecture Strip */}
        <ScrollReveal className="mt-14 pt-10 border-t border-black/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 rounded-2xl p-5 border border-black/8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 block mb-1">
                SECTOR DISCIPLINE 01
              </span>
              <h5 className="text-sm font-semibold text-black tracking-tight mb-1.5">
                DTC E-Commerce Scale
              </h5>
              <p className="text-xs text-black/60 font-light leading-relaxed">
                Iterative paid social ads, multi-product bundle architecture, and CRO-engineered checkout flows scaling unit economics.
              </p>
            </div>

            <div className="bg-white/80 rounded-2xl p-5 border border-black/8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 block mb-1">
                SECTOR DISCIPLINE 02
              </span>
              <h5 className="text-sm font-semibold text-black tracking-tight mb-1.5">
                Tech & SaaS Platforms
              </h5>
              <p className="text-xs text-black/60 font-light leading-relaxed">
                Product-led growth engines, predictive CTR testing algorithms, and high-converting acquisition funnels for creators.
              </p>
            </div>

            <div className="bg-white/80 rounded-2xl p-5 border border-black/8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 block mb-1">
                SECTOR DISCIPLINE 03
              </span>
              <h5 className="text-sm font-semibold text-black tracking-tight mb-1.5">
                Health & Bio-Wellness
              </h5>
              <p className="text-xs text-black/60 font-light leading-relaxed">
                Trigger-specific problem/solution angles, botanical ingredient storytelling, and compliant nutraceutical acquisition.
              </p>
            </div>

            <div className="bg-white/80 rounded-2xl p-5 border border-black/8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-black/40 block mb-1">
                SECTOR DISCIPLINE 04
              </span>
              <h5 className="text-sm font-semibold text-black tracking-tight mb-1.5">
                Enterprise & Wealth Advisory
              </h5>
              <p className="text-xs text-black/60 font-light leading-relaxed">
                High-net-worth CRM pipeline data hygiene, advisor enablement workflows, and institutional brand transformation.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
