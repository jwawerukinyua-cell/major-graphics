import React, { useState } from 'react';
import { ADVATECH_STYLE_SERVICES, PRINT_FINISHES, ServiceOffering } from '../data/servicesData';
import { 
  PenTool, 
  FileText, 
  Maximize2, 
  Package, 
  Shirt, 
  Video, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Layers, 
  SlidersHorizontal,
  Printer
} from 'lucide-react';

interface AdvatechServicesGridProps {
  onSelectService: (service: ServiceOffering) => void;
  onOpenBriefModal: (serviceName?: string) => void;
}

export const AdvatechServicesGrid: React.FC<AdvatechServicesGridProps> = ({
  onSelectService,
  onOpenBriefModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'print' | 'merch'>('all');

  const iconMap: Record<string, React.ElementType> = {
    PenTool,
    FileText,
    Maximize2,
    Package,
    Shirt,
    Video,
  };

  const filteredServices = ADVATECH_STYLE_SERVICES.filter((svc) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'design') return svc.category === 'identity' || svc.category === 'digital';
    if (activeTab === 'print') return svc.category === 'collateral' || svc.category === 'large-format' || svc.category === 'packaging';
    if (activeTab === 'merch') return svc.category === 'merchandise';
    return true;
  });

  return (
    <section id="services" className="py-24 bg-[#090A0F] relative border-t border-[#1E2230]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FF5416]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-600/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Sub-heading & Header — Faithful to Advatech's "Our Studio / Design that speaks before you do." */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.35em] text-[#FF5416] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5416]" />
            <span>Our Studio · What We Offer</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-[1.05]">
            Creative &amp; Print <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5416] via-[#FF7A3D] to-[#FFA07A]">
              Services.
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            From raw concept sketches to high-capacity commercial print runs. We engineer visual identities, marketing collateral, large-format outdoor signage, custom packaging, and merchandise that command attention.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-8 flex-wrap">
            {[
              { id: 'all', label: 'All Services (6)' },
              { id: 'design', label: 'Graphic Design & Identity' },
              { id: 'print', label: 'Commercial & Large-Format Print' },
              { id: 'merch', label: 'Branded Merch & Apparel' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#FF5416] text-white shadow-lg shadow-[#FF5416]/25'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.08] hover:bg-white/[0.08]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Advatech-style rounded-[2.5rem] cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || PenTool;
            return (
              <div
                key={service.id}
                className="group relative rounded-[2.2rem] bg-white/[0.03] border border-white/[0.08] hover:border-[#FF5416]/50 p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF5416]/10 backdrop-blur-sm"
              >
                <div>
                  {/* Top Header: Icon & Big 01 Watermark Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-13 h-13 rounded-2xl bg-[#FF5416]/15 border border-[#FF5416]/30 flex items-center justify-center text-[#FF5416] group-hover:bg-[#FF5416] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-4xl sm:text-5xl font-black font-display text-white/10 group-hover:text-white/25 transition-colors select-none">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-[#FF5416] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono text-[#FF5416]/80 mt-1 uppercase tracking-wider">
                    {service.tagline}
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mt-3 mb-6">
                    {service.description}
                  </p>

                  {/* Advatech item list with orange dots */}
                  <ul className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5416] shrink-0 mt-2" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specs & Action Footer */}
                <div className="pt-6 mt-8 border-t border-white/[0.06] space-y-4">
                  {/* Technical Spec pills */}
                  <div className="bg-[#090A0F]/60 rounded-xl p-3 border border-white/[0.05] text-[11px] space-y-1 text-slate-400 font-mono">
                    <div className="flex justify-between">
                      <span>Turnaround:</span>
                      <span className="text-white font-medium">{service.specs.turnaround}</span>
                    </div>
                    <div className="flex justify-between truncate">
                      <span>Delivery:</span>
                      <span className="text-slate-300 truncate max-w-[160px]">{service.specs.materials}</span>
                    </div>
                  </div>

                  {/* Direct Action Button */}
                  <button
                    onClick={() => {
                      onSelectService(service);
                      onOpenBriefModal(service.title);
                    }}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/[0.05] hover:bg-[#FF5416] border border-white/[0.1] hover:border-[#FF5416] transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#FF5416]/20"
                  >
                    <span>Request {service.title.split(' ')[0]} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Print Finishes Showcase (Advatech-inspired extension) */}
        <div className="mt-20 rounded-[2.5rem] bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03] border border-white/[0.08] p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5416] mb-2">
                <Printer className="w-4 h-4" />
                <span>Commercial Print Standards</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                Premium Paper Stocks &amp; Tactile Finishes
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                We don&apos;t just design on screens — we oversee prepress color calibration, paper weight selection, and precision finishes for real-world impact.
              </p>
            </div>

            <button
              onClick={() => onOpenBriefModal('Commercial Print & Finishes Inquiry')}
              className="shrink-0 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#FF5416] hover:bg-[#FF6E38] shadow-lg shadow-[#FF5416]/25 transition-all"
            >
              Order Sample Pack / Swatch Book
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINT_FINISHES.map((finish) => (
              <div
                key={finish.name}
                className="p-5 rounded-2xl bg-[#090A0F] border border-white/[0.06] hover:border-[#FF5416]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF5416] bg-[#FF5416]/10 px-2 py-0.5 rounded">
                      {finish.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    {finish.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {finish.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-white/[0.06] text-[11px] text-slate-500 font-mono">
                  Best: <span className="text-slate-300">{finish.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
