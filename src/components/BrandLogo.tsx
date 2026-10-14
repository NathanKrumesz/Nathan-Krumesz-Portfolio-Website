import React from 'react';
import mightiLogo from '../assets/images/logos/Mighti logo.svg';
import petsmontLogo from '../assets/images/logos/Petsmont-Logo.svg';
import halalMealsLogo from '../assets/images/logos/halal-meals.png';
import kalaiaLogo from '../assets/images/logos/kalaia-logo.webp';
import btaftLogo from '../assets/images/logos/btaft.png';
import yuregenLogo from '../assets/images/logos/yuregen.png';
import ccanLogo from '../assets/images/logos/ccan canadian community alliance network.png';
import lasenbyLogo from '../assets/images/logos/lasenby realty.png';
import torontoDanceLogo from '../assets/images/logos/toronto dance.png';
import yardSaleLogo from '../assets/images/logos/yard sale.png';
import rbcLogo from '../assets/images/logos/rbc.svg';

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

  switch (logoType) {
    case 'mighti':
      return (
        <img
          src={mightiLogo}
          alt="Mighti"
          className={`${className} object-contain max-h-8`}
          loading="lazy"
        />
      );

    case 'kalaia':
      return (
        <div className={`flex items-center gap-2.5 select-none ${className}`}>
          <img
            src={kalaiaLogo}
            alt="Kalaia Skincare"
            className="h-8 w-8 sm:h-9 sm:w-9 object-contain shrink-0"
            loading="lazy"
          />
          <span className="font-serif tracking-[0.22em] text-sm sm:text-[15px] uppercase font-semibold text-black/90">
            KALAIA
          </span>
        </div>
      );

    case 'petsmont':
      return (
        <img
          src={petsmontLogo}
          alt="Petsmont"
          className={`${className} object-contain max-h-8`}
          loading="lazy"
        />
      );

    case 'halalmeals':
      return (
        <img
          src={halalMealsLogo}
          alt="Halal Meals"
          className={`${className} object-contain max-h-8`}
          loading="lazy"
        />
      );

    case 'btaft':
      return (
        <img
          src={btaftLogo}
          alt="Brandon Taft Fitness & Nutrition"
          className={`${className} object-contain max-h-14`}
          loading="lazy"
        />
      );

    case 'yuregen':
      return (
        <img
          src={yuregenLogo}
          alt="Yuregen Natural Joint Supplements"
          className={`${className} object-contain max-h-8`}
          loading="lazy"
        />
      );

    case 'ccan':
      return (
        <img
          src={ccanLogo}
          alt="Canadian Community Alliance Network"
          className={`${className} object-contain max-h-8`}
          loading="lazy"
        />
      );

    case 'lasenby':
      return (
        <img
          src={lasenbyLogo}
          alt="Lasenby Realty"
          className={`${className} object-contain max-h-8`}
          loading="lazy"
        />
      );

    case 'torontodance':
      return (
        <img
          src={torontoDanceLogo}
          alt="Toronto Dance Salsa"
          className={`${className} object-contain max-h-8`}
          loading="lazy"
        />
      );

    case 'yardsale':
      return (
        <img
          src={yardSaleLogo}
          alt="Yard Sale"
          className={`${className} object-contain max-h-14`}
          loading="lazy"
        />
      );

    case 'rumi':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold shadow-xs">
            R
          </div>
          <span className="font-sans font-bold tracking-tight text-sm">Rumi</span>
        </div>
      );

    case 'gloria':
      return (
        <div className={`flex items-center gap-2 select-none ${className}`}>
          <div className="w-6 h-6 rounded-md bg-[#1877F2] flex items-center justify-center text-white font-bold text-xs font-serif shadow-xs">
            f
          </div>
          <span className="font-sans font-bold tracking-tight text-sm">Gloria<span className="font-light"> Quotes</span></span>
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
        <div className={`flex items-center gap-2.5 select-none ${className}`}>
          <img
            src={rbcLogo}
            alt="RBC Wealth Management"
            className="h-7 w-auto object-contain"
            loading="lazy"
          />
          <div className="flex flex-col text-left leading-none">
            <span className="font-sans font-bold tracking-wider text-xs uppercase text-[#005daa]">RBC</span>
            <span className="font-sans text-[8px] tracking-wider text-black/60 uppercase mt-0.5 font-medium">Wealth Management</span>
          </div>
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
