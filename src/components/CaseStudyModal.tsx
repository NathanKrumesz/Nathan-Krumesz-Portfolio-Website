import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, ChevronRight, Layers, Target, BarChart2, Play, Image as ImageIcon, Eye, ChevronLeft, Sparkles, TrendingUp } from 'lucide-react';
import { CaseStudy, CaseStudyVisualAsset, PortfolioPiece } from '../data/portfolioData';
import { InteractiveMediaViewer } from './InteractiveMediaViewer';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onOpenContact }) => {
  const [activePreviewPiece, setActivePreviewPiece] = useState<PortfolioPiece | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [selectedVisualAsset, setSelectedVisualAsset] = useState<CaseStudyVisualAsset | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedVisualAsset) {
          setSelectedVisualAsset(null);
        } else if (activePreviewPiece) {
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
  }, [caseStudy, activePreviewPiece, selectedVisualAsset, onClose]);

  if (!caseStudy) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#050507] text-white rounded-3xl max-w-5xl w-full border border-white/15 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col cursor-default"
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
              <div className="rounded-2xl overflow-hidden border border-white/20 bg-black/90 p-2 sm:p-3 shadow-2xl flex items-center justify-center min-h-[260px] max-h-[520px]">
                <video
                  key={caseStudy.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  poster={caseStudy.videoPoster}
                  src={caseStudy.videoUrl}
                  className="max-h-[480px] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (caseStudy.videoRemote && target.src !== caseStudy.videoRemote) {
                      target.src = caseStudy.videoRemote;
                      target.load();
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/90 p-2 flex items-center justify-center max-h-[420px]">
              <img
                src={caseStudy.image}
                alt={caseStudy.client}
                className="w-full h-auto max-h-[400px] object-contain rounded-xl"
              />
            </div>
          )}

          {/* Secondary Demonstration Video (e.g., Kalaia 9:16 How-To Ritual Ad or Mighti Person Ad) */}
          {caseStudy.secondaryVideoUrl && (
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-purple-400 flex items-center gap-1.5 font-semibold">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {caseStudy.secondaryVideoTitle || 'Secondary Product Demonstration Video Ad (9:16)'}
                </span>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  9:16 Social Feed Format
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/20 bg-black/90 p-3 sm:p-4 shadow-2xl flex items-center justify-center max-h-[460px]">
                <video
                  key={caseStudy.secondaryVideoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  poster={caseStudy.secondaryVideoPoster}
                  src={caseStudy.secondaryVideoUrl}
                  className="max-h-[420px] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />
              </div>
            </div>
          )}

          {/* Title & Tagline */}
          <div>
            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
              {caseStudy.timeline} • {caseStudy.role}
            </span>
            <h3 className="mt-2 text-2xl sm:text-4xl font-normal tracking-tight text-white leading-tight">
              {caseStudy.tagline}
            </h3>
            <p className="mt-4 text-sm sm:text-base text-white/80 font-light leading-relaxed">
              {caseStudy.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
            {caseStudy.stats.map((s, idx) => {
              const val = s.value || '';
              const fontClass = val.length > 9
                ? 'text-xs sm:text-sm font-bold'
                : val.length > 6
                ? 'text-sm sm:text-lg lg:text-xl font-bold'
                : 'text-lg sm:text-2xl lg:text-3xl font-bold';
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center flex flex-col justify-between items-center min-w-0 overflow-hidden"
                >
                  <span className={`${fontClass} text-white block leading-tight break-words max-w-full my-auto`}>
                    {s.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-white/60 uppercase tracking-wider mt-1.5 block truncate w-full">
                    {s.label}
                  </span>
                </div>
              );
            })}
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

          {/* DEDICATED FUNNEL ANALYTICS & DASHBOARD PROOF SECTION (PETSMONT) */}
          {caseStudy.dashboardScreenshots && caseStudy.dashboardScreenshots.length > 0 && (
            <div className="pt-8 border-t border-white/10 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 block font-semibold">
                    {caseStudy.id === 'kalaia-skincare' ? '[ INTERACTIVE FULL-PAGE SALES ARCHITECTURE ]' : '[ AUTHENTIC FUNNEL ANALYTICS & DASHBOARDS OUT FRONT ]'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {caseStudy.id === 'kalaia-skincare' ? 'ClickFunnels Long-Form Sales Funnel & Page Architecture' : 'ClickFunnels Split-Test Reports & Conversion Dashboards'}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 max-w-2xl font-light">
                    {caseStudy.id === 'kalaia-skincare' ? 'Complete high-converting direct response acquisition page and upsell flow engineered for Kalaia Detox & Balance Cleansing Bar. Click to scroll and zoom through the entire funnel.' : 'Real campaign analytics verifying the +40% relative opt-in conversion lift and 11%+ one-time offer checkout upsells.'}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
                  Click screenshot to zoom & scroll
                </span>
              </div>

              {/* Featured Primary Dashboard / Sales Page (High Res) */}
              <div 
                className="bg-black/50 rounded-2xl p-4 border border-amber-400/30 overflow-hidden group transition-all shadow-xl"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs font-mono">
                  <span className="text-amber-400 font-semibold">{caseStudy.dashboardScreenshots[0].title}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedVisualAsset(caseStudy.dashboardScreenshots![0])}
                    className="text-white/80 hover:text-white text-[11px] flex items-center gap-1 cursor-pointer bg-white/10 px-2.5 py-1 rounded-md border border-white/10 hover:bg-white/20 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" /> Full-Screen Expand
                  </button>
                </div>
                {caseStudy.dashboardScreenshots[0].image.includes('detox-bar') || caseStudy.dashboardScreenshots[0].image.includes('sales-page') ? (
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <InteractiveMediaViewer
                      src={caseStudy.dashboardScreenshots[0].image}
                      alt={caseStudy.dashboardScreenshots[0].title}
                    />
                  </div>
                ) : (
                  <div 
                    onClick={() => setSelectedVisualAsset(caseStudy.dashboardScreenshots![0])}
                    className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[360px] rounded-xl overflow-hidden bg-black flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={caseStudy.dashboardScreenshots[0].image}
                      alt={caseStudy.dashboardScreenshots[0].title}
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-emerald-400 font-semibold text-sm">
                    {caseStudy.dashboardScreenshots[0].metric}
                  </span>
                  <span className="text-white/70 font-light text-xs">
                    {caseStudy.dashboardScreenshots[0].description}
                  </span>
                </div>
              </div>

              {/* Grid of Remaining Dashboard Screenshots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.dashboardScreenshots.slice(1).map((dash, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedVisualAsset(dash)}
                    className="bg-black/40 hover:bg-black/60 border border-white/10 hover:border-amber-400/50 rounded-2xl p-3.5 cursor-pointer transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mb-2">
                        <span className="text-amber-300 font-medium truncate max-w-[220px]">{dash.subtitle}</span>
                        <span className="text-white/40 flex items-center gap-1 group-hover:text-white">
                          <Eye className="w-3 h-3 text-emerald-400" /> Zoom
                        </span>
                      </div>
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black/70 flex items-center justify-center border border-white/10">
                        <img
                          src={dash.image}
                          alt={dash.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <h5 className="text-xs font-semibold text-white mt-2.5 group-hover:text-amber-300 transition-colors">
                        {dash.title}
                      </h5>
                    </div>
                    <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                      <span>{dash.metric}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DEDICATED AD CREATIVE TESTING SUITE OUT FRONT (ALL ADS VISIBLE DIRECTLY) */}
          {caseStudy.featuredCreatives && caseStudy.featuredCreatives.length > 0 && (
            <div className="pt-8 border-t border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 block font-semibold">
                    [ AD CREATIVE TESTING SUITE ({caseStudy.featuredCreatives.length} CREATIVES OUT FRONT) ]
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {caseStudy.id === 'kalaia-skincare'
                      ? 'Complete 9-Creative Paid Social Testing Matrix'
                      : caseStudy.id === 'petsmont-funnels'
                      ? 'Canine Direct-Response Ad Creatives Deployed'
                      : 'Top Performing Ad Creatives & Funnel Mocks'}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 max-w-2xl font-light">
                    {caseStudy.id === 'kalaia-skincare'
                      ? 'All 9 direct-response ad variants displayed out front: promotional bundle offers with bamboo trays, Papain enzyme mechanism, comparative blemish ads, clean beauty trust badges, and interactive skin quizzes.'
                      : 'Creative angles and high-converting visual layouts deployed to capture attention and scale customer acquisition.'}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
                  Click any creative to inspect
                </span>
              </div>

              {/* 3-Column Responsive Grid Out Front */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudy.featuredCreatives.map((creative, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedVisualAsset(creative)}
                    className="bg-black/35 hover:bg-black/60 border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div className="relative aspect-square sm:aspect-[4/3] bg-black/70 overflow-hidden flex items-center justify-center p-2">
                      <img
                        src={creative.image}
                        alt={creative.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        <Eye className="w-3 h-3 text-emerald-400" /> Zoom
                      </div>
                      {creative.subtitle && (
                        <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-xs text-[10px] font-mono text-white/90 px-2.5 py-1 rounded-md border border-white/10 truncate">
                          {creative.subtitle}
                        </div>
                      )}
                    </div>
                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        {creative.metric && (
                          <span className="text-[10px] font-mono text-emerald-400 block mb-1">
                            {creative.metric}
                          </span>
                        )}
                        <h5 className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                          {creative.title}
                        </h5>
                      </div>
                      {creative.description && (
                        <p className="text-[11px] text-white/60 font-light mt-1.5 line-clamp-2">
                          {creative.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white/60 tracking-wider mb-3">
              [ KEY DELIVERABLES PRODUCED ]
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-white/80 bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/60 font-mono text-center sm:text-left">
            Looking to scale similar performance for your brand?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors cursor-pointer"
            >
              Close Case Study
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 transition-all cursor-pointer shadow-md"
            >
              <span>Schedule Interview / Consult</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* FULL RESOLUTION LIGHTBOX FOR DASHBOARDS & FEATURED CREATIVES */}
      {selectedVisualAsset && (
        <div 
          onClick={(e) => {
            e.stopPropagation();
            setSelectedVisualAsset(null);
          }}
          className="fixed inset-0 z-60 bg-black/92 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0A0A0E] text-white rounded-3xl max-w-5xl w-full border border-white/20 shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col cursor-default"
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/70">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase bg-emerald-950 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                  {caseStudy.client}
                </span>
                <span className="text-xs font-mono text-white/70">
                  {selectedVisualAsset.subtitle || selectedVisualAsset.metric || 'Verified Asset'}
                </span>
              </div>
              <button
                onClick={() => setSelectedVisualAsset(null)}
                className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer border border-white/10"
                aria-label="Close image"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <InteractiveMediaViewer
              src={selectedVisualAsset.image}
              alt={selectedVisualAsset.title}
            />

            <div className="p-5 sm:p-6 bg-[#0E0E14] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-white">
                  {selectedVisualAsset.title}
                </h4>
                {selectedVisualAsset.description && (
                  <p className="text-xs text-white/70 mt-1 font-light max-w-2xl">
                    {selectedVisualAsset.description}
                  </p>
                )}
              </div>
              {selectedVisualAsset.metric && (
                <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/20 whitespace-nowrap self-start sm:self-auto font-medium">
                  {selectedVisualAsset.metric}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

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
