import React from 'react';
import { READY_PACKAGES, PackageTier } from '../data/pricingData';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageTier) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
}) => {
  return (
    <section id="packages" className="py-24 bg-[#090A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5416] mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Turnkey Creative Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            STANDARDIZED PACKAGES. PREMIUM EXECUTION.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Choose a proven package crafted to deliver maximum market impact without endless hourly billing.
          </p>
        </div>

        {/* 3 Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {READY_PACKAGES.map((pkg) => {
            const isFeatured = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-[#12141C] border-2 border-[#FF5416] shadow-2xl shadow-[#FF5416]/15 lg:-translate-y-2'
                    : 'bg-[#12141C]/80 border border-[#262B3B] hover:border-slate-500'
                }`}
              >
                {/* Popular Ribbon */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#FF5416] text-white shadow-lg shadow-[#FF5416]/40">
                      Most Popular · Best ROI
                    </span>
                  </div>
                )}

                <div>
                  {/* Top info */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-display text-white">
                      {pkg.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{pkg.timeline}</span>
                  </div>

                  <p className="text-xs text-slate-400 mt-2 min-h-[36px]">
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 p-4 rounded-xl bg-[#090A0F] border border-[#262B3B]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black font-display text-white">
                        ${pkg.price}
                      </span>
                      {pkg.id === 'monthly-retainer' && (
                        <span className="text-xs text-slate-400 font-mono">/month</span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Best for: <span className="text-slate-200 font-medium">{pkg.bestFor}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      What&apos;s Included:
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#FF5416] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8 mt-8 border-t border-[#262B3B]">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? 'bg-[#FF5416] hover:bg-[#FF6E38] text-white shadow-lg shadow-[#FF5416]/25'
                        : 'bg-[#181B26] hover:bg-[#1E2230] text-slate-200 hover:text-white border border-[#262B3B]'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Select {pkg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Retainer & Custom Work Guarantee */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Money-Back Quality Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Full Copyright Ownership Transferred</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Pre-Press Print Certification</span>
          </div>
        </div>

      </div>
    </section>
  );
};
