import React, { useState } from 'react';
import { PORTFOLIO_PIECES, PortfolioPiece } from '../data/portfolioData';
import { Eye, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PortfolioExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPiece, setSelectedPiece] = useState<PortfolioPiece | null>(null);

  const categories = [
    { id: 'all', label: 'All Pieces' },
    { id: 'paid-social', label: 'Paid Social Ads' },
    { id: 'funnel-cro', label: 'Funnels & CRO' },
    { id: 'creative-copy', label: 'Creative & Copy' },
    { id: 'tech-saas', label: 'Tech & SaaS' },
  ];

  const filteredPieces = activeCategory === 'all'
    ? PORTFOLIO_PIECES
    : PORTFOLIO_PIECES.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio-vault" className="py-24 sm:py-32 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-black/50 block">
              [ PORTFOLIO VAULT ]
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#0A0A0A]">
              Campaign Creatives & <span className="font-serif italic text-black font-normal">Portfolio Pieces.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-black/60 font-light max-w-xl">
              High-converting direct response ads, landing page funnel architecture, video sales scripts, and performance dashboards.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-black/50 bg-[#F7F7F6] px-4 py-2 rounded-full border border-black/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Multi-channel ad sets & landing pages</span>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-black/5">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0A0A0A] text-white shadow-sm'
                  : 'bg-[#F7F7F6] text-black/70 hover:bg-[#EFEFEE] hover:text-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pieces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPieces.map((piece, idx) => (
            <ScrollReveal
              key={piece.id}
              delay={(idx % 3) * 80}
              className="bg-[#F7F7F6] rounded-3xl overflow-hidden border border-black/5 hover:border-black/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                <img
                  src={piece.imagePlaceholder}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase bg-black/60 text-white backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {piece.platform}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {piece.metricHighlight}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-white drop-shadow-sm">
                    {piece.brand}
                  </span>
                  <button
                    onClick={() => setSelectedPiece(piece)}
                    className="p-1.5 rounded-full bg-white/90 text-black hover:bg-white transition-colors cursor-pointer"
                    title="Inspect details"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-black/40 block mb-1">
                    {piece.type}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-[#0A0A0A] leading-snug mb-2 group-hover:text-black">
                    {piece.title}
                  </h3>
                  <p className="text-xs text-[#4A4A4A] font-light leading-relaxed mb-4">
                    {piece.description}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-black/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedPiece(piece)}
                    className="text-xs font-medium text-[#0A0A0A] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Inspect piece →
                  </button>

                  <span className="text-[11px] font-mono text-black/40">
                    {piece.brand}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Piece Lightbox Modal */}
      {selectedPiece && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-black/10 animate-fade-in">
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={selectedPiece.imagePlaceholder}
                alt={selectedPiece.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPiece(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono uppercase text-emerald-600 font-semibold">
                  {selectedPiece.brand} • {selectedPiece.platform}
                </span>
                <span className="text-xs font-mono bg-[#F7F7F6] px-3 py-1 rounded-full text-black/70 border border-black/5">
                  {selectedPiece.metricHighlight}
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#0A0A0A] mb-3">
                {selectedPiece.title}
              </h3>

              <p className="text-sm text-[#4A4A4A] font-light leading-relaxed mb-6">
                {selectedPiece.description}
              </p>

              <div className="bg-[#F7F7F6] rounded-2xl p-4 border border-black/5 mb-6 text-xs text-black/75 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-black/50">Campaign Objective:</span>
                  <span className="font-semibold text-black">Conversion & High ROAS Scaling</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/50">Testing Framework:</span>
                  <span className="font-semibold text-black">A/B Split Test on Hooks & Visuals</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/50">Asset Type:</span>
                  <span className="font-semibold text-black">{selectedPiece.type}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedPiece(null)}
                  className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-medium hover:bg-black/85 cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
