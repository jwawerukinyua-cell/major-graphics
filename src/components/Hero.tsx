import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  TrendingUp,
  MessageCircle,
  Printer,
  Layers,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  onOpenBriefModal: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBriefModal,
  onScrollToSection,
}) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);

  const previewShowcase = [
    {
      title: 'Commercial Print & Large-Format Signage',
      tag: 'Print & Signage',
      stat: 'Vibrant 1440 DPI',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      badge: 'Weatherproof UV Flex Banner',
    },
    {
      title: 'Full Corporate Brand Identity & Guidelines',
      tag: 'Brand Identity',
      stat: 'Vector Master Suite',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
      badge: 'CMYK + Pantone Certified',
    },
    {
      title: 'Custom Product Packaging & Dielines',
      tag: 'Packaging & Labels',
      stat: '45 Retail Outlets',
      image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=800&q=80',
      badge: 'Spot UV & Matte Finish',
    },
    {
      title: 'Branded Apparel & Streetwear Merch',
      tag: 'Merchandise',
      stat: 'Sold out in 48h',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      badge: 'Screenprint & Embroidery Tech Packs',
    },
  ];

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#090A0F]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF5416]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-orange-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-950/20 blur-[140px] pointer-events-none rounded-full" />
      
      {/* Studio grid backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Advatech-inspired Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Advatech Kicker: Design & Print Studio */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-sm">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-[#FF5416]">
                Design &amp; Print Studio
              </span>
              <span className="text-white/20">|</span>
              <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active for New Print &amp; Design Commissions
              </span>
            </div>

            {/* Advatech's exact headline: Your Brand. Amplified. */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black font-display tracking-tight text-white leading-[1.02]">
              Your Brand. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5416] via-[#FF7A3D] to-[#FFA07A]">
                Amplified.
              </span>
            </h1>

            {/* Advatech's exact copy: From logo to large-format. From digital to physical. */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              From logo to large-format. From digital to physical. <strong className="text-white">Major Graphics</strong> brings brands to life with design and commercial print services that command attention across Kenya, East Africa, and worldwide.
            </p>

            {/* Service Capabilities Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                ✓ Brand Identity &amp; Logos
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                ✓ Marketing Collateral
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                ✓ Large-Format Banners
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                ✓ Custom Packaging
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                ✓ Branded Apparel &amp; Merch
              </span>
            </div>

            {/* Conversion CTA Group: Start a Project & View Services */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onOpenBriefModal}
                className="flex items-center justify-center gap-3 px-8 py-4 text-xs font-black uppercase tracking-widest text-white bg-[#FF5416] hover:bg-[#FF6E38] rounded-full shadow-xl shadow-[#FF5416]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollToSection('services')}
                className="flex items-center justify-center gap-2 px-7 py-4 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-full transition-all"
              >
                <span>View Services</span>
              </button>

              <button
                onClick={() => onScrollToSection('calculator')}
                className="flex items-center justify-center gap-2 px-5 py-4 text-xs font-bold text-slate-300 hover:text-[#FF5416] transition-colors"
              >
                <span>Instant Pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Advatech's Sub-strip: Our Studio · Design that speaks before you do. */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-slate-400 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <span className="text-[#FF5416] font-black uppercase tracking-wider text-[11px]">Our Studio:</span>
                <span className="italic">&ldquo;Design that speaks before you do.&rdquo;</span>
              </div>

              <div className="h-4 w-px bg-white/10 hidden sm:block" />

              <a
                href="https://www.tiktok.com/@major.graphics.lt?_r=1&_t=ZS-9AYFxBCfbPR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#FF5416] transition-colors text-slate-300"
              >
                <span className="font-semibold text-white">@major.graphics.lt</span>
                <span>on TikTok</span>
                <ExternalLink className="w-3 h-3 text-[#FF5416]" />
              </a>

              <div className="h-4 w-px bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#FF5416]" />
                <span>Nairobi &amp; Global Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Deck with Advatech's 5 core pillars */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-[2.5rem] p-1 bg-gradient-to-b from-white/[0.15] via-[#FF5416]/30 to-white/[0.05] shadow-2xl shadow-black/80">
                <div className="rounded-[2.4rem] bg-[#12141C] p-5 sm:p-6 overflow-hidden border border-white/5">
                  
                  {/* Top Header of Card */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5416]" />
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                        {previewShowcase[activePreviewIndex].tag}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                      {previewShowcase[activePreviewIndex].stat}
                    </span>
                  </div>

                  {/* Main Showcase Image Display */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black group">
                    <img
                      src={previewShowcase[activePreviewIndex].image}
                      alt={previewShowcase[activePreviewIndex].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {previewShowcase[activePreviewIndex].badge}
                      </span>
                      <button
                        onClick={() => onScrollToSection('services')}
                        className="text-xs font-medium text-[#FF5416] hover:text-white flex items-center gap-1 bg-[#12141C]/80 px-2.5 py-1 rounded-full"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Interactive Tabs */}
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-white font-display">
                      {previewShowcase[activePreviewIndex].title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Commercial print dielines, high-density pigment ink, &amp; vector art.
                    </p>

                    <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/[0.08]">
                      {previewShowcase.map((item, idx) => (
                        <button
                          key={item.title}
                          onClick={() => setActivePreviewIndex(idx)}
                          className={`text-left p-2.5 rounded-xl text-xs transition-all ${
                            activePreviewIndex === idx
                              ? 'bg-[#FF5416]/15 border border-[#FF5416]/60 text-white font-semibold'
                              : 'bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <div className="truncate text-[11px] font-bold">{item.tag}</div>
                          <div className="text-[10px] text-slate-500 truncate">{item.stat}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Official Studio Seal badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#181B26]/95 border border-white/[0.1] backdrop-blur-md p-3 rounded-2xl shadow-2xl flex items-center gap-3.5 max-w-[290px]">
                <div className="w-12 h-12 rounded-xl bg-white p-1 border border-white/20 shadow-md shrink-0 overflow-hidden">
                  <img
                    src="/logo.jpg"
                    alt="Major Graphics Official Seal"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Major Graphics Studio</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-[11px] text-slate-400">Commercial Design &amp; Print</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
