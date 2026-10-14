import React, { useState } from 'react';
import { PRICING_SERVICES, PRICING_ADDONS, CURRENCIES } from '../data/pricingData';
import { PricingOption, PricingAddon } from '../types';
import { 
  Calculator, 
  Check, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  Layers, 
  ShieldCheck,
  ChevronRight,
  Zap,
  Info
} from 'lucide-react';

interface PricingCalculatorProps {
  onOpenBriefModalWithConfig: (config: {
    service: PricingOption;
    addons: PricingAddon[];
    total: number;
    currencySymbol: string;
    currencyCode: string;
  }) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  onOpenBriefModalWithConfig,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(PRICING_SERVICES[0].id);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['mockup-renders']);
  const [currencyCode, setCurrencyCode] = useState<string>('USD');

  const currentCurrency = CURRENCIES.find((c) => c.code === currencyCode) || CURRENCIES[0];

  const activeService = PRICING_SERVICES.find((s) => s.id === selectedServiceId) || PRICING_SERVICES[0];

  const activeAddons = PRICING_ADDONS.filter((addon) => selectedAddonIds.includes(addon.id));

  // Calculate pricing
  const rawBasePrice = activeService.basePrice;
  const rawAddonsPrice = activeAddons.reduce((sum, item) => sum + item.price, 0);
  const rawTotalUSD = rawBasePrice + rawAddonsPrice;

  // Convert to selected currency
  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currentCurrency.rate);
    return `${currentCurrency.symbol}${converted.toLocaleString()}`;
  };

  const handleToggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Generate WhatsApp Direct Pre-filled link
  const getWhatsAppLink = () => {
    const addonNames = activeAddons.map((a) => a.name.replace(/[^a-zA-Z0-9 ]/g, '').trim()).join(', ');
    const message = `Hello Major Graphics! I used your instant estimator on your website:%0A%0A` +
      `📌 *Selected Service:* ${encodeURIComponent(activeService.name)} (${formatPrice(activeService.basePrice)})%0A` +
      (activeAddons.length > 0 ? `➕ *Add-ons:* ${encodeURIComponent(addonNames)}%0A` : '') +
      `💰 *Estimated Total:* ${encodeURIComponent(formatPrice(rawTotalUSD))}%0A` +
      `⏱️ *Expected Turnaround:* ${encodeURIComponent(activeService.deliveryDays)}%0A%0A` +
      `I would love to get started! What are the next steps?`;
    
    return `https://wa.me/?text=${message}`;
  };

  const handleLockInQuote = () => {
    onOpenBriefModalWithConfig({
      service: activeService,
      addons: activeAddons,
      total: Math.round(rawTotalUSD * currentCurrency.rate),
      currencySymbol: currentCurrency.symbol,
      currencyCode: currentCurrency.code,
    });
  };

  return (
    <section id="calculator" className="py-24 bg-[#0C0E14] relative border-t border-[#262B3B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5416] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>100% Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            INSTANT PROJECT COST ESTIMATOR
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            No waiting 3 days for an email quote. Select your project deliverables and get an instant, honest quote in seconds.
          </p>

          {/* Currency Switcher */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-xs text-slate-400 font-medium">Display Currency:</span>
            <div className="flex items-center gap-1 p-1 bg-[#12141C] border border-[#262B3B] rounded-lg">
              {CURRENCIES.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setCurrencyCode(curr.code)}
                  className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
                    currencyCode === curr.code
                      ? 'bg-[#FF5416] text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {curr.code}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service & Addon Selection (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Core Service */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FF5416] text-white flex items-center justify-center text-xs">1</span>
                  <span>Select Primary Creative Service</span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">1 Selected</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRICING_SERVICES.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all text-left relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#FF5416]/10 border-[#FF5416] shadow-lg shadow-[#FF5416]/10'
                          : 'bg-[#12141C] border-[#262B3B] hover:border-slate-500 hover:bg-[#181B26]'
                      }`}
                    >
                      {service.popular && (
                        <div className="absolute top-2.5 right-2.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5416] bg-[#FF5416]/15 border border-[#FF5416]/30 px-2 py-0.5 rounded">
                            Popular
                          </span>
                        </div>
                      )}

                      <div>
                        <div className="text-xs font-mono text-slate-400 uppercase">{service.category}</div>
                        <h4 className="text-sm font-bold text-white mt-1 pr-14 leading-tight">{service.name}</h4>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2">{service.description}</p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-[#262B3B]/60 flex items-center justify-between">
                        <div className="text-sm font-black text-[#FF5416]">
                          {formatPrice(service.basePrice)}
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          <span>{service.deliveryDays}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: High-Value Addons */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#FF5416] text-white flex items-center justify-center text-xs">2</span>
                  <span>Optional Production Add-Ons</span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">{selectedAddonIds.length} Added</span>
              </div>

              <div className="space-y-2.5">
                {PRICING_ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => handleToggleAddon(addon.id)}
                      className={`cursor-pointer p-3.5 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'bg-[#181B26] border-[#FF5416]/60 shadow-sm'
                          : 'bg-[#12141C] border-[#262B3B] hover:border-slate-500'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                            isChecked
                              ? 'bg-[#FF5416] text-white'
                              : 'border border-[#262B3B] bg-[#090A0F]'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-white">{addon.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{addon.description}</div>
                        </div>
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-white shrink-0 font-mono">
                        +{formatPrice(addon.price)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Quote Breakdown & Sticky CTAs (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl bg-[#12141C] border-2 border-[#262B3B] p-6 shadow-2xl space-y-6">
              
              <div className="border-b border-[#262B3B] pb-4">
                <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-mono">
                  <span>Custom Project Quote</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Instant Estimate
                  </span>
                </div>
                <h3 className="text-xl font-black font-display text-white mt-1">
                  {activeService.name}
                </h3>
              </div>

              {/* Itemized breakdown */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Base Service:</span>
                  <span className="font-semibold font-mono text-white">{formatPrice(activeService.basePrice)}</span>
                </div>

                {activeAddons.map((addon) => (
                  <div key={addon.id} className="flex items-center justify-between text-slate-400">
                    <span className="truncate pr-2">{addon.name}</span>
                    <span className="font-mono text-white shrink-0">+{formatPrice(addon.price)}</span>
                  </div>
                ))}

                <div className="flex items-center justify-between text-slate-400 pt-2 border-t border-[#262B3B]/60">
                  <span>Commercial Usage Rights:</span>
                  <span className="text-emerald-400 font-semibold">FREE Included</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span>Est. Turnaround Time:</span>
                  <span className="text-white font-medium">{activeService.deliveryDays}</span>
                </div>
              </div>

              {/* Grand Total Box */}
              <div className="p-4 rounded-xl bg-[#090A0F] border border-[#262B3B] flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                    Estimated Investment
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    No hidden fees · Fixed quote guarantee
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#FF5416] font-display">
                  {formatPrice(rawTotalUSD)}
                </div>
              </div>

              {/* Guarantees checklist */}
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Includes vector master formats (.AI, .EPS, .SVG, .PNG)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Unlimited concept revisions until sign-off</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct contact with lead designer via WhatsApp</span>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="space-y-3 pt-2">
                
                {/* 1. Direct WhatsApp Dispatch */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book This Rate via WhatsApp</span>
                </a>

                {/* 2. Lock-in & Fill Project Brief */}
                <button
                  onClick={handleLockInQuote}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF5416] hover:bg-[#FF6E38] shadow-lg shadow-[#FF5416]/25 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Lock In Quote & Fill Brief</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
