import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, ChevronRight, Layers, Target, BarChart2, Play, Image as ImageIcon, Eye, ChevronLeft } from 'lucide-react';
import { CaseStudy, PORTFOLIO_PIECES, PortfolioPiece } from '../data/portfolioData';
import { InteractiveMediaViewer } from './InteractiveMediaViewer';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onOpenContact }) => {
  const [activePreviewPiece, setActivePreviewPiece] = useState<PortfolioPiece | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activePreviewPiece) {
          setActivePreviewPiece(null);
        } else {
          onClose();
        }
      }
    };
    if (caseStudy) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [caseStudy, activePreviewPiece, onClose]);

  if (!caseStudy) return null;

  // Filter all portfolio pieces associated with this specific case study
  const relatedPieces = PORTFOLIO_PIECES.filter(piece => {
    const pBrand = piece.brand.toLowerCase();
    const cClient = caseStudy.client.toLowerCase();
    if (cClient.includes('mighti') && pBrand.includes('mighti')) return true;
    if (cClient.includes('kalaia') && pBrand.includes('kalaia')) return true;
    if (cClient.includes('petsmont') && pBrand.includes('petsmont')) return true;
    return false;
  });

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#050507] text-white rounded-3xl max-w-4xl w-full border border-white/15 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col cursor-default"
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase bg-emerald-950 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full">
              {caseStudy.client}
            </span>
            <span className="text-xs text-white/60 font-mono hidden sm:inline">
              {caseStudy.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Main Visual or Video Player */}
          {caseStudy.videoUrl ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-rose-400 flex items-center gap-1.5 font-semibold">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {caseStudy.videoTitle || 'Featured Video Sales Letter (VSL)'}
                </span>
                <span className="text-[10px] font-mono text-white/60 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  Playable Video Asset
                </span>
              </div>
              {/* Content-aware flexible container (no forced 16:9 so 9:16 and 16:9 both fit cleanly) */}
              <div className="rounded-2xl overflow-hidden border border-white/20 bg-black/90 p-2 sm:p-3 shadow-2xl flex items-center justify-center min-h-[260px] max-h-[520px]">
                <video
                  key={caseStudy.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  poster={caseStudy.videoPoster}
                  src={caseStudy.videoUrl}
                  className="max-h-[480px] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />
              </div>
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/90 p-2 flex items-center justify-center max-h-[420px]">
              <img
                src={caseStudy.image}
                alt={caseStudy.client}
                className="max-h-[400px] w-auto max-w-full rounded-xl object-contain"
              />
            </div>
          )}

          {/* Secondary Video Ad if present (Clean 9:16 Vertical & Landscape Display) */}
          {caseStudy.secondaryVideoUrl && (
            <div className="bg-white/5 rounded-2xl p-5 border border-white/15 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {caseStudy.secondaryVideoTitle || 'Featured Creative Demonstration'}
                </span>
                <span className="text-[10px] font-mono text-white/60 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  Supporting Video Asset
                </span>
              </div>
              {/* Natural aspect container for vertical or landscape without black sidebars */}
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/90 p-2 sm:p-3 flex items-center justify-center min-h-[260px] max-h-[520px]">
                <video
                  key={caseStudy.secondaryVideoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  poster={caseStudy.secondaryVideoPoster}
                  src={caseStudy.secondaryVideoUrl}
                  className="max-h-[480px] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />
              </div>
            </div>
          )}

          {/* Title & Timeline */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/50 mb-2">
              <span>ROLE: {caseStudy.role}</span>
              <span>TIMELINE: {caseStudy.timeline}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              {caseStudy.tagline}
            </h2>
            <p className="mt-3 text-base text-white/80 font-light leading-relaxed">
              {caseStudy.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {caseStudy.stats.map((s, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <span className="text-2xl sm:text-3xl font-bold text-white block">
                  {s.value}
                </span>
                <span className="text-[11px] font-mono text-white/60 uppercase tracking-wider mt-1 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Strategic Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase mb-3">
                <Target className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                {caseStudy.problem}
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase mb-3">
                <BarChart2 className="w-4 h-4" />
                <span>The Strategic Playbook</span>
              </div>
              <div className="text-xs sm:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                {caseStudy.solution}
              </div>
            </div>
          </div>

          {/* Key Results */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h4 className="text-xs font-mono uppercase text-white/60 tracking-wider mb-4">
              [ MEASURED OUTCOMES & REVENUE IMPACT ]
            </h4>
            <div className="space-y-3">
              {caseStudy.results.map((r, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/90 font-light">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ALL Campaign Creative & Funnel Portfolio Pieces */}
          {relatedPieces.length > 0 && (
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 block font-semibold">
                    [ ALL CAMPAIGN PORTFOLIO PIECES ({relatedPieces.length} ASSETS) ]
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">
                    Complete Campaign Creative & Funnel Deliverables
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
                  Click any card to inspect or play
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPieces.map(piece => (
                  <div
                    key={piece.id}
                    onClick={() => {
                      setActivePreviewPiece(piece);
                      setActiveGalleryIndex(0);
                    }}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/10] bg-black/40 overflow-hidden">
                      <img
                        src={piece.imagePlaceholder}
                        alt={piece.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {piece.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                        </div>
                      )}

                      {piece.galleryImages && piece.galleryImages.length > 1 && (
                        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/80 text-white text-[9px] font-mono px-2 py-0.5 rounded-full border border-white/20">
                          <ImageIcon className="w-2.5 h-2.5 text-emerald-400" />
                          <span>{piece.galleryImages.length} Screenshots</span>
                        </div>
                      )}

                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono">
                        <span className="bg-black/70 text-white/90 px-2 py-0.5 rounded-full border border-white/15">
                          {piece.platform}
                        </span>
                        {piece.videoUrl && (
                          <span className="bg-rose-950/80 text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/30 flex items-center gap-1">
                            <Play className="w-2 h-2 fill-current" /> Video
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-emerald-400 mb-1">
                          {piece.metricHighlight}
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-emerald-300 transition-colors">
                          {piece.title}
                        </h4>
                      </div>
                      <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/60">
                        <span>{piece.videoUrl ? 'Watch video' : 'Inspect asset'}</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white/60 tracking-wider mb-3">
              [ KEY DELIVERABLES PRODUCED ]
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((d, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 font-mono">
                  • {d}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-black/50 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer"
          >
            Close
          </button>
          
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-all cursor-pointer"
          >
            <span>Inquire About Similar Campaign</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Embedded Sub-Lightbox to Inspect Any Portfolio Piece Directly */}
      {activePreviewPiece && (
        <div 
          onClick={(e) => {
            e.stopPropagation();
            setActivePreviewPiece(null);
          }}
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0A0A0E] text-white rounded-3xl max-w-4xl w-full border border-white/20 shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col cursor-default"
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/50">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase bg-emerald-950 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                  {activePreviewPiece.brand}
                </span>
                <span className="text-xs font-mono text-white/60">
                  {activePreviewPiece.platform}
                </span>
              </div>
              <button
                onClick={() => setActivePreviewPiece(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Interactive Media Box for Long-Form Funnels & Standard Media */}
            <InteractiveMediaViewer
              src={
                activePreviewPiece.videoUrl ||
                (activePreviewPiece.galleryImages
                  ? activePreviewPiece.galleryImages[activeGalleryIndex]
                  : activePreviewPiece.imagePlaceholder)
              }
              alt={activePreviewPiece.title}
              isVideo={Boolean(activePreviewPiece.videoUrl)}
              poster={activePreviewPiece.imagePlaceholder}
            />

            {activePreviewPiece.galleryImages && activePreviewPiece.galleryImages.length > 1 && (
              <div className="bg-[#121214] px-4 py-3 flex items-center gap-2.5 overflow-x-auto border-t border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/50 shrink-0 flex items-center gap-1">
                  <ImageIcon className="w-3 h-3 text-emerald-400" />
                  Screenshots ({activeGalleryIndex + 1}/{activePreviewPiece.galleryImages.length}):
                </span>
                {activePreviewPiece.galleryImages.map((img, gIdx) => (
                  <button
                    key={gIdx}
                    onClick={() => setActiveGalleryIndex(gIdx)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer ${
                      activeGalleryIndex === gIdx
                        ? 'border-emerald-400 ring-2 ring-emerald-400/40 scale-105'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${gIdx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="p-6 bg-[#0E0E12] border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {activePreviewPiece.title}
                </h3>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  {activePreviewPiece.metricHighlight}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                {activePreviewPiece.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

