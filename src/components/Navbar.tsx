import React, { useState, useEffect } from 'react';
import { MajorGraphicsLogo } from './Logo';
import { 
  MessageSquare, 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight, 
  PhoneCall,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  onOpenBriefModal: () => void;
  onScrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBriefModal,
  onScrollToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Instant Pricing', id: 'calculator' },
    { label: 'TikTok Reels', id: 'tiktok' },
    { label: 'Brand Audit', id: 'brand-audit' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090A0F]/90 backdrop-blur-md border-b border-[#262B3B]/60 py-3 shadow-xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center focus:outline-none"
            >
              <MajorGraphicsLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5416] transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Header Action Controls */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Direct WhatsApp Action */}
              <a
                href="https://wa.me/?text=Hello%20Major%20Graphics!%20I'm%20interested%20in%20a%20graphic%20design%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-[#262B3B] hover:border-[#FF5416]/50 bg-[#12141C]/80 hover:bg-[#181B26] rounded-lg transition-all"
                title="Chat with Major Graphics on WhatsApp"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>WhatsApp</span>
              </a>

              {/* Get Started / Onboarding Modal Trigger */}
              <button
                onClick={onOpenBriefModal}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#FF5416] hover:bg-[#FF6E38] rounded-lg shadow-lg shadow-[#FF5416]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start Project</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenBriefModal}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#FF5416] rounded-md shadow"
              >
                Start
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg bg-[#12141C] border border-[#262B3B]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090A0F]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 sm:hidden animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new projects this week</span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left py-3 text-lg font-semibold text-slate-200 border-b border-[#262B3B]/60 hover:text-[#FF5416]"
              >
                {link.label}
              </button>
            ))}

            <a
              href="https://www.tiktok.com/@major.graphics.lt?_r=1&_t=ZS-9AYFxBCfbPR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 text-base font-medium text-slate-300 border-b border-[#262B3B]/60"
            >
              <span>TikTok @major.graphics.lt</span>
              <ExternalLink className="w-4 h-4 text-[#FF5416]" />
            </a>
          </div>

          <div className="space-y-3 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBriefModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold uppercase tracking-wider text-white bg-[#FF5416] rounded-lg shadow-lg shadow-[#FF5416]/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Project Brief</span>
            </button>
            <a
              href="https://wa.me/?text=Hello%20Major%20Graphics!%20I'm%20interested%20in%20a%20graphic%20design%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-slate-200 border border-[#262B3B] bg-[#12141C] rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat Direct on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
