import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, ArrowUp, ArrowDown, ExternalLink, Maximize2, Minimize2, MousePointer } from 'lucide-react';

interface InteractiveMediaViewerProps {
  src: string;
  alt: string;
  isVideo?: boolean;
  poster?: string;
}

export const InteractiveMediaViewer: React.FC<InteractiveMediaViewerProps> = ({
  src,
  alt,
  isVideo = false,
  poster,
}) => {
  const [isTallImage, setIsTallImage] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1); // 1 = standard readable width (820px)
  const [isFitMode, setIsFitMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Strictly restrict scroll effect to full page website screenshots only
  const isFullPageWebsite =
    src.toLowerCase().includes('sales-page') ||
    src.toLowerCase().includes('full-sales');

  useEffect(() => {
    setScrollProgress(0);
    setZoomLevel(1);
    setIsFitMode(false);
    setIsTallImage(isFullPageWebsite);
  }, [src, isFullPageWebsite]);

  const handleImageLoad = () => {
    // Intentionally do NOT activate scroll mode based on aspect ratio alone
    // to keep Facebook, Instagram, and regular creatives in standard view
    if (isFullPageWebsite) {
      setIsTallImage(true);
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(1, Math.max(0, scrollTop / maxScroll)));
    }
  };

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  const scrollDownChunk = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 480, behavior: 'smooth' });
    }
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(1.6, prev + 0.15));
  const zoomOut = () => setZoomLevel((prev) => Math.max(0.65, prev - 0.15));
  const resetZoom = () => {
    setZoomLevel(1);
    setIsFitMode(false);
  };

  // If this is a video asset
  if (isVideo) {
    return (
      <div className="relative bg-black flex items-center justify-center shrink-0 w-full min-h-[320px] max-h-[62vh] sm:max-h-[68vh] p-3 overflow-hidden">
        <video
          key={src}
          controls
          autoPlay
          playsInline
          preload="metadata"
          poster={poster}
          src={src}
          className="max-h-[58vh] sm:max-h-[64vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-2xl"
        />
      </div>
    );
  }

  // If this is an interactive long sales page screenshot
  if (isTallImage) {
    // Width calculation for readable view
    const baseWidth = 840;
    const targetWidth = Math.round(baseWidth * zoomLevel);

    return (
      <div className="relative bg-[#09090C] w-full flex flex-col shrink-0 min-h-[380px] h-[64vh] sm:h-[70vh] border-y border-white/10 select-none overflow-hidden">
        {/* Top Floating Glassmorphic Control Bar */}
        <div className="relative z-10 bg-black/80 backdrop-blur-md px-4 py-2.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[11px] border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Interactive Full-Length Funnel
            </span>
            <span className="hidden sm:inline text-white/50 text-[11px] font-mono">
              Scroll up / down to inspect copy
            </span>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Scroll Position Indicator */}
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-white/70">
              <span>Depth:</span>
              <span className="text-emerald-400 font-bold">{Math.round(scrollProgress * 100)}%</span>
            </div>

            {/* Scroll Top / Bottom Buttons */}
            <button
              type="button"
              onClick={scrollToTop}
              title="Jump to Top"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10 flex items-center gap-1 text-[11px]"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
            <button
              type="button"
              onClick={scrollToBottom}
              title="Jump to Bottom / Offer"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10 flex items-center gap-1 text-[11px]"
            >
              <ArrowDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Offer</span>
            </button>

            <div className="h-4 w-px bg-white/20 mx-1 hidden sm:block" />

            {/* Zoom Controls */}
            <button
              type="button"
              onClick={zoomOut}
              title="Zoom Out"
              disabled={isFitMode || zoomLevel <= 0.65}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer border border-white/10"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={resetZoom}
              title="Reset Zoom (100% Readable Width)"
              className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10 text-[11px] font-mono"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              type="button"
              onClick={zoomIn}
              title="Zoom In"
              disabled={isFitMode || zoomLevel >= 1.6}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer border border-white/10"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>

            {/* Fit vs Readable Width Toggle */}
            <button
              type="button"
              onClick={() => setIsFitMode((prev) => !prev)}
              title={isFitMode ? 'Switch to Readable Width' : 'Fit Entire Height into Viewport'}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
            >
              {isFitMode ? <Minimize2 className="w-3.5 h-3.5 text-emerald-400" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>

            {/* Open Full HD in New Tab */}
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Original Full-Res Image in New Tab"
              className="p-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 transition-colors border border-emerald-500/40 cursor-pointer flex items-center gap-1 text-[11px]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">HD</span>
            </a>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="w-full bg-white/5 h-1 relative shrink-0">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-150"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>

        {/* Scrollable Viewport Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={`w-full h-full overflow-y-auto overflow-x-auto flex justify-center p-3 sm:p-6 overscroll-contain relative custom-scrollbar ${
            isFitMode ? 'items-center overflow-hidden' : ''
          }`}
          style={{
            scrollBehavior: 'smooth',
          }}
        >
          {isFitMode ? (
            <img
              src={src}
              alt={alt}
              onLoad={handleImageLoad}
              className="max-h-[58vh] sm:max-h-[62vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-2xl transition-all duration-300"
            />
          ) : (
            <div
              className="transition-all duration-200 mx-auto"
              style={{
                width: `${targetWidth}px`,
                maxWidth: 'none',
              }}
            >
              <img
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                className="w-full h-auto block rounded-lg shadow-2xl border border-white/10"
                loading="eager"
              />
            </div>
          )}

          {/* Floating First-Time Scroll Hint */}
          {!isFitMode && scrollProgress < 0.04 && (
            <div
              onClick={scrollDownChunk}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/85 text-white/90 text-xs font-mono px-4 py-2 rounded-full border border-white/20 shadow-xl backdrop-blur-md flex items-center gap-2 cursor-pointer hover:bg-black hover:scale-105 transition-all animate-bounce"
            >
              <MousePointer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Scroll down to read funnel ↓</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Standard Image (Square, 16:9, or standard vertical ad)
  return (
    <div className="relative bg-black flex items-center justify-center shrink-0 w-full min-h-[320px] max-h-[62vh] sm:max-h-[68vh] p-3 overflow-hidden">
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className="max-h-[58vh] sm:max-h-[64vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-2xl"
      />
    </div>
  );
};
