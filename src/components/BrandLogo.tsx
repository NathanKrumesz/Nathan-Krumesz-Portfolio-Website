import React from 'react';

interface BrandLogoProps {
  logoType: string;
  name: string;
  customUrl?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  logoType,
  name,
  customUrl,
  className = 'h-8 sm:h-9 w-auto',
}) => {
  // If a custom image URL is provided in data
  if (customUrl) {
    return (
      <img
        src={customUrl}
        alt={name}
        className={`${className} object-contain max-h-10 filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300`}
        loading="lazy"
      />
    );
  }

  // Placeholder SVG vector wordmarks with high-contrast, editorial agency finish
  switch (logoType) {
    case 'mighti':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <svg className="w-6 h-6 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a7 7 0 0 0-7 7c0 4.5 4 8 7 13 3-5 7-8.5 7-13a7 7 0 0 0-7-7z" fill="currentColor" fillOpacity="0.15" />
            <circle cx="12" cy="9" r="2.5" fill="currentColor" />
          </svg>
          <span className="font-sans font-bold tracking-[0.2em] text-sm uppercase">MIGHTI</span>
        </div>
      );

    case 'kalaia':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <svg className="w-6 h-6 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" strokeOpacity="0.4" />
            <path d="M12 6c-2.5 3-4 6-4 8a4 4 0 0 0 8 0c0-2-1.5-5-4-8z" fill="currentColor" fillOpacity="0.2" />
          </svg>
          <span className="font-serif italic font-medium tracking-[0.18em] text-base uppercase">Kalaia</span>
        </div>
      );

    case 'petsmont':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <svg className="w-6 h-6 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 4c-3 0-5 2-5 5 0 4 5 11 5 11s5-7 5-11c0-3-2-5-5-5z" fill="currentColor" fillOpacity="0.12" />
            <circle cx="9" cy="9" r="1.5" fill="currentColor" />
            <circle cx="15" cy="9" r="1.5" fill="currentColor" />
          </svg>
          <span className="font-sans font-extrabold tracking-wider text-sm uppercase">PETSMONT</span>
        </div>
      );

    case 'thummy':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <div className="w-6 h-6 rounded-lg bg-current/10 border border-current/25 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-current ml-0.5" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </div>
          <span className="font-mono font-semibold tracking-tight text-sm lowercase">thummy<span className="text-emerald-500">.</span></span>
        </div>
      );

    case 'rbc':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <div className="w-6 h-6 rounded bg-current/15 border border-current/30 flex items-center justify-center font-serif font-black text-xs text-current flex-shrink-0">
            R
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="font-sans font-bold tracking-widest text-xs uppercase">RBC</span>
            <span className="font-sans text-[8px] tracking-wider text-current/60 uppercase mt-0.5">Wealth Management</span>
          </div>
        </div>
      );

    case 'halalmeals':
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          <svg className="w-6 h-6 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12h8M12 8v8" strokeLinecap="round" />
          </svg>
          <span className="font-sans font-semibold tracking-tight text-sm">Halal<span className="font-light">Meals</span></span>
        </div>
      );

    case 'passlock':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <svg className="w-5 h-5 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor" fillOpacity="0.15" />
            <circle cx="12" cy="16" r="1.5" fill="currentColor" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <span className="font-mono font-bold tracking-widest text-xs uppercase">PASS·LOCK</span>
        </div>
      );

    case 'zenith':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <svg className="w-5 h-5 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4 16 12 6 20 16" />
            <polyline points="7 19 12 13 17 19" strokeOpacity="0.4" />
          </svg>
          <span className="font-sans font-light tracking-[0.25em] text-xs uppercase">ZENITH</span>
        </div>
      );

    case 'aura':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-current/40" />
          </div>
          <span className="font-serif tracking-[0.3em] text-xs uppercase font-medium">A U R A</span>
        </div>
      );

    case 'summit':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <svg className="w-5 h-5 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <polygon points="3 20 10 7 15 15 17 12 21 20 3 20" fill="currentColor" fillOpacity="0.15" />
          </svg>
          <span className="font-sans font-black tracking-wider text-xs uppercase">SUMMIT</span>
        </div>
      );

    case 'nova':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <svg className="w-5 h-5 text-current flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" fill="currentColor" fillOpacity="0.2" />
          </svg>
          <span className="font-mono font-medium tracking-widest text-xs uppercase">NOVA·LAB</span>
        </div>
      );

    case 'luxe':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <span className="font-serif italic font-bold text-base tracking-widest">LX</span>
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-medium border-l border-current/30 pl-2">
            Luxe Organics
          </span>
        </div>
      );

    default:
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <div className="w-6 h-6 rounded bg-current/10 flex items-center justify-center text-xs font-bold font-mono">
            {name.charAt(0)}
          </div>
          <span className="font-sans font-bold tracking-wider text-xs uppercase">{name}</span>
        </div>
      );
  }
};
