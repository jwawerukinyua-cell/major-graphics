import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem, ProjectCategory } from '../types';
import { 
  Sparkles, 
  Clock, 
  Check, 
  ExternalLink, 
  X, 
  Copy, 
  CheckCheck,
  Layers,
  ArrowRight,
  Eye
} from 'lucide-react';

interface PortfolioShowcaseProps {
  onOpenBriefModal: (preselectedStyle?: string) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onOpenBriefModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'brand-identity', label: 'Brand Identity & Logos' },
    { id: 'packaging-merch', label: 'Merch & Packaging' },
    { id: 'print-flyers', label: 'Print & Event Posters' },
    { id: 'social-media', label: 'Social & TikTok Kits' },
    { id: 'vector-restoration', label: 'Vector Redraw' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#090A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5416] mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
              PROVEN RESULTS. ZERO COOKIE-CUTTER TEMPLATES.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Every design is custom-built from vector scratch, precision-tested for high conversion, readability on mobile, and print execution.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenBriefModal()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF5416] hover:bg-[#FF6E38] shadow-lg shadow-[#FF5416]/25 transition-all"
            >
              <span>Commission A Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters (Clean Segmented Control) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#12141C] border border-[#262B3B] rounded-xl overflow-x-auto mb-10 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#FF5416] text-white shadow-md shadow-[#FF5416]/30'
                  : 'text-slate-400 hover:text-white hover:bg-[#181B26]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group cursor-pointer rounded-2xl bg-[#12141C] border border-[#262B3B] hover:border-[#FF5416]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF5416]/10 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141C] via-transparent to-transparent opacity-80" />

                {/* Quick overlay pill */}
                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-bold text-white bg-[#090A0F]/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md">
                    {item.turnaround}
                  </span>
                </div>

                {/* Impact Stat Badge if available */}
                {item.impactStat && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block text-[11px] font-medium text-emerald-400 bg-emerald-950/80 backdrop-blur-md border border-emerald-700/40 px-2.5 py-1 rounded-md">
                      ⚡ {item.impactStat}
                    </span>
                  </div>
                )}
              </div>

              {/* Content info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-mono text-[#FF5416] uppercase">{item.categoryLabel}</span>
                    <span>{item.client}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF5416] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#262B3B]/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{item.deliverables.length} Deliverables</span>
                  <div className="flex items-center gap-1 text-[#FF5416] font-semibold group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#12141C] border border-[#262B3B] p-6 sm:p-8 shadow-2xl text-left space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#181B26] border border-[#262B3B] text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF5416] uppercase tracking-wider mb-2">
                <span>{selectedProject.categoryLabel}</span>
                <span>·</span>
                <span>Client: {selectedProject.client}</span>
                <span>·</span>
                <span>Delivered in {selectedProject.turnaround}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white pr-10">
                {selectedProject.title}
              </h2>
            </div>

            {/* Hero Mockup in Modal */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] bg-black border border-[#262B3B] relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              {selectedProject.impactStat && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-[#090A0F]/90 backdrop-blur-md border border-emerald-500/40 p-3 rounded-lg text-xs text-emerald-300 font-semibold inline-flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Outcome: {selectedProject.impactStat}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Description & Typography */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Creative Brief & Execution
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Typography & Visual Tone
                  </h4>
                  <div className="p-3 rounded-lg bg-[#181B26] border border-[#262B3B] text-xs text-white font-mono">
                    {selectedProject.fontVibe}
                  </div>
                </div>
              </div>

              {/* Deliverables & Color Palette */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Included Master Assets
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#FF5416] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Curated Color Palette (Click to Copy HEX)
                  </h4>
                  <div className="flex items-center gap-2 flex-wrap">
                    {selectedProject.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleCopyColor(color)}
                        className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#181B26] border border-[#262B3B] hover:border-white/30 text-xs text-slate-200 transition-all"
                        title="Click to copy HEX code"
                      >
                        <span 
                          className="w-4 h-4 rounded-full border border-white/20 shadow-inner" 
                          style={{ backgroundColor: color }} 
                        />
                        <span className="font-mono text-[11px]">{color}</span>
                        {copiedColor === color ? (
                          <CheckCheck className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-[#262B3B] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Love this aesthetic? We can tailor this style specifically for your brand.
              </div>
              <button
                onClick={() => {
                  const styleName = selectedProject.title;
                  setSelectedProject(null);
                  onOpenBriefModal(styleName);
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF5416] hover:bg-[#FF6E38] shadow-lg shadow-[#FF5416]/25 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get a Similar Design</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
