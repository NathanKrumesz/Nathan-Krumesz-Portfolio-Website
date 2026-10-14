import React, { useState, useEffect } from 'react';
import { PORTFOLIO_PIECES, PortfolioPiece } from '../data/portfolioData';
import { Eye, X, Play, ChevronLeft, ChevronRight, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { InteractiveMediaViewer } from './InteractiveMediaViewer';

export const PortfolioExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPiece, setSelectedPiece] = useState<PortfolioPiece | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  const allCategories = [
    { id: 'all', label: 'All Pieces' },
    { id: 'video-ads', label: '🎬 Video Ads & VSLs' },
    { id: 'paid-social', label: 'Paid Social Creatives' },
    { id: 'funnel-cro', label: 'Funnels & CRO' },
    { id: 'lead-gen', label: 'High-ROI Lead Gen' },
    { id: 'organic-viral', label: 'Organic & Viral' },
  ];

  const categories = allCategories.filter(
    cat => cat.id === 'all' || PORTFOLIO_PIECES.some(p => p.category === cat.id)
  );

  const filteredPieces = activeCategory === 'all'
    ? PORTFOLIO_PIECES
    : PORTFOLIO_PIECES.filter(p => p.category === activeCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPiece(null);
      }
    };
    if (selectedPiece) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPiece]);

  const handleOpenPiece = (piece: PortfolioPiece) => {
    setSelectedPiece(piece);
    setActiveGalleryIndex(0);
  };

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
              High-converting direct response video ads, VSL sales scripts, graphic split-tests, landing page funnels, and viral organic growth engines.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-black/50 bg-[#F7F7F6] px-4 py-2 rounded-full border border-black/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{PORTFOLIO_PIECES.length} Verified Campaign Pieces</span>
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
              <div 
                onClick={() => handleOpenPiece(piece)}
                className="relative aspect-[16/10] overflow-hidden bg-black/10 cursor-pointer"
              >
                <img
                  src={piece.imagePlaceholder}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 opacity-90 group-hover:opacity-80 transition-opacity" />

                {/* Video Play Indicator */}
                {piece.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-black shadow-lg flex items-center justify-center pl-0.5 group-hover:scale-110 group-hover:bg-white transition-all">
                      <Play className="w-5 h-5 fill-current text-black" />
                    </div>
                  </div>
                )}

                {/* Multi-image Badge */}
                {piece.galleryImages && piece.galleryImages.length > 1 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20">
                    <ImageIcon className="w-3 h-3 text-emerald-400" />
                    <span>{piece.galleryImages.length} Proof Screenshots</span>
                  </div>
                )}

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase bg-black/60 text-white backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {piece.platform}
                  </span>
                  {piece.videoUrl ? (
                    <span className="text-[10px] font-mono uppercase bg-rose-950/80 text-rose-300 px-2.5 py-1 rounded-full border border-rose-500/30 flex items-center gap-1">
                      <Play className="w-2.5 h-2.5 fill-current" /> Video
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono uppercase bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      {piece.metricHighlight}
                    </span>
                  )}
                </div>

                {/* Bottom Overlay Info (if not gallery badge) */}
                {!piece.galleryImages && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-white drop-shadow-sm flex items-center gap-1.5">
                      {piece.brand}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenPiece(piece);
                      }}
                      className="p-1.5 rounded-full bg-white/90 text-black hover:bg-white transition-colors cursor-pointer"
                      title={piece.videoUrl ? "Play video" : "Inspect details"}
                    >
                      {piece.videoUrl ? <Play className="w-3.5 h-3.5 fill-current" /> : <Eye className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-black/40">
                      {piece.type}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 font-medium">
                      {piece.metricHighlight}
                    </span>
                  </div>
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
                    onClick={() => handleOpenPiece(piece)}
                    className="text-xs font-medium text-[#0A0A0A] hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    {piece.videoUrl ? (
                      <>
                        <Play className="w-3 h-3 fill-current text-rose-600" />
                        <span>Watch video ({piece.brand}) →</span>
                      </>
                    ) : (
                      <span>Inspect piece & proof →</span>
                    )}
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
        <div 
          onClick={() => setSelectedPiece(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-black/10 animate-fade-in my-auto max-h-[94vh] flex flex-col cursor-default relative"
          >
            {/* Modal Header Bar */}
            <div className="px-6 py-4 border-b border-black/10 flex items-center justify-between bg-neutral-900 text-white shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase bg-emerald-950 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                  {selectedPiece.brand}
                </span>
                <span className="text-xs font-mono text-white/60">
                  {selectedPiece.platform}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPiece(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Media Box - Interactive for Long-Form Funnels, Clean for Videos & Standard Creatives */}
            <InteractiveMediaViewer
              src={
                selectedPiece.videoUrl ||
                (selectedPiece.galleryImages
                  ? selectedPiece.galleryImages[activeGalleryIndex]
                  : selectedPiece.imagePlaceholder)
              }
              alt={selectedPiece.title}
              isVideo={Boolean(selectedPiece.videoUrl)}
              poster={selectedPiece.imagePlaceholder}
            />

            {/* Gallery Thumbnails Strip (if multiple screenshots exist) */}
            {selectedPiece.galleryImages && selectedPiece.galleryImages.length > 1 && (
              <div className="bg-[#121214] px-4 py-3 flex items-center gap-2.5 overflow-x-auto border-t border-white/10 shrink-0">
                <span className="text-[10px] font-mono uppercase text-white/50 shrink-0 flex items-center gap-1">
                  <ImageIcon className="w-3 h-3 text-emerald-400" />
                  Proof Screenshots ({activeGalleryIndex + 1}/{selectedPiece.galleryImages.length}):
                </span>
                {selectedPiece.galleryImages.map((img, gIdx) => (
                  <button
                    key={gIdx}
                    onClick={() => setActiveGalleryIndex(gIdx)}
                    className={`relative h-12 w-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer bg-black ${
                      activeGalleryIndex === gIdx 
                        ? 'border-emerald-400 scale-105 shadow-md' 
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Proof ${gIdx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Modal Body Details */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono uppercase text-emerald-600 font-semibold flex items-center gap-1.5">
                  {selectedPiece.brand} • {selectedPiece.type}
                  {selectedPiece.videoUrl && (
                    <span className="ml-1 text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-mono">
                      PLAYABLE ASSET
                    </span>
                  )}
                </span>
                <span className="text-xs font-mono bg-[#F7F7F6] px-3 py-1 rounded-full text-black/80 border border-black/10 font-bold">
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
                  <span className="font-semibold text-black">Direct Response & Verified Revenue Growth</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/50">Creative Strategy:</span>
                  <span className="font-semibold text-black">High-Retention Hooks, Clear Offer Psychology & CRO</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black/50">Asset Format:</span>
                  <span className="font-semibold text-black">{selectedPiece.type}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                {selectedPiece.externalUrl && (
                  <a
                    href={selectedPiece.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-black text-xs font-semibold transition-all shadow-md cursor-pointer hover:scale-[1.02]"
                  >
                    <span>{selectedPiece.externalUrlLabel || 'Open Link'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedPiece(null)}
                  className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-medium hover:bg-black/85 cursor-pointer"
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
