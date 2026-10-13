import React from 'react';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light' | 'auto';
  scrolled?: boolean;
  className?: string;
  asLink?: boolean;
}

export interface LogoMarkProps {
  size?: 'xs' | 'sm' | 'md';
  theme?: 'dark' | 'light' | 'auto';
  scrolled?: boolean;
  className?: string;
}

/**
 * Editorial Typographic Wordmark for Nathan Krumesz.
 * All lowercase typographic hybrid lockup pairing:
 * - "nathan" in bold modern sans-serif (Inter, font-semibold/bold, matching headline style "Some of the brands")
 * - "krumesz" in editorial cursive italic serif (Instrument Serif italic, matching "I've grown")
 * Pure typography without extraneous graphics or badges.
 */
export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  theme = 'auto',
  scrolled = false,
  className = '',
  asLink = true,
}) => {
  const isLight = theme === 'light' || (theme === 'auto' && scrolled);

  const sizeClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  }[size];

  const content = (
    <span
      className={`inline-flex items-baseline select-none group transition-colors duration-200 ${sizeClasses} ${className}`}
    >
      {/* First Name: Bold Sans-Serif (Headline style: 'Some of the brands') */}
      <span
        className={`font-semibold tracking-[-0.035em] lowercase transition-colors duration-200 ${
          isLight
            ? 'text-[#0A0A0A] group-hover:text-black/70'
            : 'text-white group-hover:text-white/80'
        }`}
      >
        nathan
      </span>

      {/* Optical Typographic Spacing */}
      <span className="w-1.5 inline-block" />

      {/* Last Name: Editorial Cursive Serif Italic (Headline style: "I've grown") */}
      <span
        className={`font-serif italic font-normal lowercase tracking-[-0.01em] text-[1.12em] transition-colors duration-200 ${
          isLight
            ? 'text-[#0A0A0A] group-hover:text-black/85'
            : 'text-white group-hover:text-white/95'
        }`}
      >
        krumesz
      </span>
    </span>
  );

  if (asLink) {
    return (
      <a
        href="#"
        className="inline-flex items-center focus:outline-hidden focus-visible:ring-2 focus-visible:ring-black/20 rounded-sm py-1 px-0.5 transition-opacity"
        title="nathan krumesz — Growth & Creative Strategist"
      >
        {content}
      </a>
    );
  }

  return content;
};

/**
 * Compact typographic wordmark for micro spaces (modals, tags, status bars).
 */
export const LogoMark: React.FC<LogoMarkProps> = ({
  size = 'xs',
  theme = 'auto',
  scrolled = false,
  className = '',
}) => {
  const isLight = theme === 'light' || (theme === 'auto' && scrolled);

  const textClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
  }[size];

  return (
    <span
      className={`inline-flex items-baseline gap-1 select-none ${textClasses} ${className}`}
    >
      <span
        className={`font-semibold tracking-tight lowercase ${
          isLight ? 'text-[#0A0A0A]' : 'text-white'
        }`}
      >
        nathan
      </span>
      <span
        className={`font-serif italic font-normal lowercase text-[1.12em] ${
          isLight ? 'text-[#0A0A0A]' : 'text-white'
        }`}
      >
        krumesz
      </span>
    </span>
  );
};

// Backwards-compatible export alias for any components referencing LogoLockup
export const LogoLockup = Logo;
export default Logo;
