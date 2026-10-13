import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText, Mail, Sparkles, Linkedin } from 'lucide-react';
import { LogoLockup } from './Logo';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Brands', href: '#brands' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Vault', href: '#portfolio-vault' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 pt-4 pb-2">
      <div
        className={`max-w-7xl mx-auto rounded-full px-5 py-3 transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border border-black/5 text-[#0A0A0A]'
            : 'bg-black/20 backdrop-blur-md border border-white/15 text-white'
        }`}
      >
        {/* Brand Logo */}
        <LogoLockup scrolled={scrolled} />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors hover:opacity-100 ${
                scrolled ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://linkedin.com/in/nathankrumesz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nathan's LinkedIn Profile"
            className={`p-2 rounded-full border transition-all ${
              scrolled
                ? 'border-black/15 text-[#0A0A0A] hover:bg-black/5'
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
            title="LinkedIn: /in/nathankrumesz"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenResume}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
              scrolled
                ? 'border-black/15 text-[#0A0A0A] hover:bg-black/5'
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            className={`flex items-center gap-1 px-4 py-2 rounded-full text-xs font-medium transition-all group cursor-pointer ${
              scrolled
                ? 'bg-[#0A0A0A] text-white hover:bg-black/85 hover:scale-[1.02]'
                : 'bg-white text-[#0A0A0A] hover:bg-white/90 hover:scale-[1.02]'
            }`}
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-1.5 rounded-full ${
            scrolled ? 'text-black hover:bg-black/5' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl bg-white/95 backdrop-blur-xl border border-black/10 rounded-3xl p-6 shadow-xl text-[#0A0A0A]">
          <nav className="flex flex-col gap-4 text-base font-medium pb-5 border-b border-black/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-black/80 hover:text-black py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="https://linkedin.com/in/nathankrumesz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-black/15 text-sm font-medium hover:bg-black/5"
            >
              <Linkedin className="w-4 h-4 text-[#0077B5]" />
              <span>Connect on LinkedIn</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-black/15 text-sm font-medium"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#0A0A0A] text-white text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Nathan</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
