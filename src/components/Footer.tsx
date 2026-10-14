import React from 'react';
import { MajorGraphicsLogo } from './Logo';
import { ExternalLink, Heart, ShieldCheck, Mail, MessageSquare } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenBriefModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToSection,
  onOpenBriefModal,
}) => {
  return (
    <footer className="bg-[#06070A] border-t border-[#262B3B] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E2230]">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <MajorGraphicsLogo size="lg" />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Major Graphics is an independent graphic design and branding studio engineering high-impact visual identities, streetwear merch, product packaging, and viral social content that turns eyeballs into paying customers.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.tiktok.com/@major.graphics.lt?_r=1&_t=ZS-9AYFxBCfbPR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12141C] border border-[#262B3B] text-slate-200 hover:text-[#FF5416] transition-colors"
              >
                <span className="font-bold">TikTok: @major.graphics.lt</span>
                <ExternalLink className="w-3 h-3 text-[#FF5416]" />
              </a>

              <a
                href="https://wa.me/?text=Hello%20Major%20Graphics!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12141C] border border-[#262B3B] text-slate-200 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-white text-xs font-mono">
              Creative &amp; Print
            </div>
            <ul className="space-y-2">
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-white transition-colors">Brand Identity &amp; Logos</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-white transition-colors">Marketing Collateral &amp; Brochures</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-white transition-colors">Large-Format Banners &amp; Signage</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-white transition-colors">Custom Packaging &amp; Labels</button></li>
              <li><button onClick={() => onScrollToSection('services')} className="hover:text-white transition-colors">Branded Merch &amp; Apparel</button></li>
              <li><button onClick={() => onScrollToSection('process')} className="hover:text-white transition-colors">The Creative Process</button></li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-white text-xs font-mono">
              Quick Tools
            </div>
            <ul className="space-y-2">
              <li><button onClick={() => onScrollToSection('calculator')} className="hover:text-white transition-colors">Instant Cost Estimator</button></li>
              <li><button onClick={() => onScrollToSection('brand-audit')} className="hover:text-white transition-colors">Free Brand Audit Quiz</button></li>
              <li><button onClick={() => onScrollToSection('packages')} className="hover:text-white transition-colors">Pricing Packages</button></li>
              <li><button onClick={() => onScrollToSection('tiktok')} className="hover:text-white transition-colors">TikTok Speedarts</button></li>
              <li><button onClick={() => onScrollToSection('reviews')} className="hover:text-white transition-colors">Client Case Studies</button></li>
              <li><button onClick={onOpenBriefModal} className="text-[#FF5416] hover:underline font-semibold">Start Project Brief →</button></li>
            </ul>
          </div>

          {/* Col 5: Studio Commitments */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-white text-xs font-mono">
              Our Standard
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>100% Vector Master files in AI, EPS, SVG, and 8K PNG</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Direct communication with your lead designer</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Commercial copyright transfer guaranteed</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Major Graphics Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Official TikTok: @major.graphics.lt</span>
            <span>·</span>
            <span>Worldwide Client Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
