import React from 'react';
import { ArrowUp, Mail, Phone, FileText, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LogoLockup } from './Logo';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-white border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <LogoLockup theme="dark" size="md" />
          <span className="text-xs text-white/50 font-mono tracking-wide">
            Digital Marketing Specialist • Toronto, ON
          </span>
        </div>

        {/* Center Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs text-white/70">
          <a href="#case-studies" className="hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#portfolio-vault" className="hover:text-white transition-colors">
            Portfolio Vault
          </a>
          <button onClick={onOpenResume} className="hover:text-white transition-colors cursor-pointer">
            Resume
          </button>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <button onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        {/* Right Scroll to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-mono text-white/40">
            © 2026 Nathan Krumesz
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
