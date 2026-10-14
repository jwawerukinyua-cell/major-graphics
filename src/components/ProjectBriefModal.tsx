import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Sparkles, 
  Check, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  FileCheck,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { PricingOption, PricingAddon, LeadSubmission } from '../types';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedStyle?: string;
  preselectedConfig?: {
    service: PricingOption;
    addons: PricingAddon[];
    total: number;
    currencySymbol: string;
    currencyCode: string;
  } | null;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({
  isOpen,
  onClose,
  preselectedStyle,
  preselectedConfig,
}) => {
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Brand Identity & Logo');
  const [budgetRange, setBudgetRange] = useState('$200 - $500');
  const [timeline, setTimeline] = useState('Within 48 Hours');
  const [styleVibes, setStyleVibes] = useState<string[]>(['Bold & High-Contrast']);
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadSubmission | null>(null);

  // Auto-sync if preselected config passed
  useEffect(() => {
    if (preselectedConfig) {
      setProjectType(preselectedConfig.service.name);
      setBudgetRange(`${preselectedConfig.currencySymbol}${preselectedConfig.total}`);
    }
  }, [preselectedConfig]);

  useEffect(() => {
    if (preselectedStyle) {
      setDescription((prev) => 
        prev ? `${prev}\n\n*Reference style requested: ${preselectedStyle}*` : `*Reference style requested: ${preselectedStyle}*`
      );
    }
  }, [preselectedStyle]);

  if (!isOpen) return null;

  const styleOptions = [
    'Bold & High-Contrast',
    'Streetwear & Urban',
    'Clean & Minimalist',
    'Luxury & Editorial',
    'Futuristic / Cyberpunk',
    'Retro / Vintage Americana',
    'Corporate & Modern',
  ];

  const toggleStyle = (style: string) => {
    setStyleVibes((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const fireSuccessConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF5416', '#FFFFFF', '#FF8C00', '#00F0FF'],
      });
    } catch (e) {
      // ignore in environments without canvas support
    }
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newLead: LeadSubmission = {
      id: `MG-${Date.now().toString().slice(-4)}`,
      clientName: clientName || 'Anonymous Client',
      companyName: companyName || 'Independent Brand',
      email: email || 'No email provided',
      phone: phone || 'No phone provided',
      projectType,
      budgetRange,
      timeline,
      stylePreferences: styleVibes,
      description,
      selectedAddons: preselectedConfig ? preselectedConfig.addons.map((a) => a.name) : [],
      estimatedTotal: preselectedConfig ? preselectedConfig.total : 0,
      submittedAt: new Date().toISOString(),
    };

    // Save lead in localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('major_graphics_leads') || '[]');
      localStorage.setItem('major_graphics_leads', JSON.stringify([newLead, ...existing]));
    } catch (err) {
      console.error(err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedLead(newLead);
      fireSuccessConfetti();
    }, 600);
  };

  const handleWhatsAppDispatch = () => {
    const addonsText = preselectedConfig && preselectedConfig.addons.length > 0 
      ? `\n➕ Addons: ${preselectedConfig.addons.map(a => a.name).join(', ')}`
      : '';
    
    const priceText = preselectedConfig ? `\n💰 Estimated Rate: ${preselectedConfig.currencySymbol}${preselectedConfig.total}` : `\n💰 Budget: ${budgetRange}`;

    const text = 
      `🔥 *NEW PROJECT BRIEF — MAJOR GRAPHICS*\n\n` +
      `👤 *Name:* ${clientName || 'Not specified'}\n` +
      `🏢 *Brand/Company:* ${companyName || 'Not specified'}\n` +
      `📧 *Email:* ${email || 'Not specified'}\n` +
      `📱 *WhatsApp:* ${phone || 'Not specified'}\n\n` +
      `🎯 *Project Type:* ${projectType}` +
      addonsText +
      priceText + `\n` +
      `⏱️ *Desired Timeline:* ${timeline}\n` +
      `🎨 *Style Vibe:* ${styleVibes.join(', ')}\n\n` +
      `📝 *Project Overview:*\n${description || 'Standard requirements'}\n\n` +
      `Can we start discussing concept directions?`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#12141C] border border-[#262B3B] p-6 sm:p-8 shadow-2xl text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#181B26] border border-[#262B3B] text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedLead ? (
          <div>
            {/* Header */}
            {/* Header with Exact Logo Badge */}
            <div className="flex items-start gap-4 mb-6 pr-8">
              <div className="w-14 h-14 rounded-2xl bg-white p-1 border border-white/20 shadow-lg shrink-0 overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt="Major Graphics"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF5416] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fast 2-Minute Onboarding</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
                  START YOUR PROJECT BRIEF
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Tell us about your brand. We will review your brief and return tailored concept directions within 24-48 hours.
                </p>
              </div>
            </div>

            {/* If Preselected Config Alert */}
            {preselectedConfig && (
              <div className="p-3.5 mb-6 rounded-xl bg-[#090A0F] border border-[#FF5416]/40 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400">Configured Service: </span>
                  <span className="font-bold text-white">{preselectedConfig.service.name}</span>
                  {preselectedConfig.addons.length > 0 && (
                    <div className="text-[11px] text-slate-500">
                      +{preselectedConfig.addons.length} Add-on(s) selected
                    </div>
                  )}
                </div>
                <div className="text-base font-black text-[#FF5416] font-display">
                  {preselectedConfig.currencySymbol}{preselectedConfig.total}
                </div>
              </div>
            )}

            <form onSubmit={handleOnlineSubmit} className="space-y-5">
              
              {/* Row 1: Client Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B26] border border-[#262B3B] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5416]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Brand or Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Division"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B26] border border-[#262B3B] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5416]"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone/WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@yourbrand.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B26] border border-[#262B3B] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5416]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    WhatsApp Number (Fastest updates)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B26] border border-[#262B3B] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5416]"
                  />
                </div>
              </div>

              {/* Row 3: Project Type & Turnaround */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Primary Service Deliverable
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B26] border border-[#262B3B] text-sm text-white focus:outline-none focus:border-[#FF5416]"
                  >
                    <option>Brand Identity &amp; Master Logo Suite</option>
                    <option>Corporate Brochures &amp; Marketing Collateral</option>
                    <option>Large-Format Roll-Up Banners &amp; Signage</option>
                    <option>Custom Product Packaging &amp; Labels</option>
                    <option>Branded Apparel &amp; Merch Screenprinting</option>
                    <option>Luxury Business Cards &amp; Stationery Set</option>
                    <option>TikTok Viral Hook &amp; Social Media Kit</option>
                    <option>Low-Res to Vector Restoration</option>
                    <option>Monthly Design &amp; Print Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Target Turnaround
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B26] border border-[#262B3B] text-sm text-white focus:outline-none focus:border-[#FF5416]"
                  >
                    <option>Within 24 Hours (Rush)</option>
                    <option>Within 48 Hours</option>
                    <option>3 - 5 Days Standard</option>
                    <option>Flexible / Next 2 Weeks</option>
                  </select>
                </div>
              </div>

              {/* Style Aesthetic Tags */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Desired Aesthetic Vibe (Select all that fit)
                </label>
                <div className="flex flex-wrap gap-2">
                  {styleOptions.map((style) => {
                    const isSelected = styleVibes.includes(style);
                    return (
                      <button
                        type="button"
                        key={style}
                        onClick={() => toggleStyle(style)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-[#FF5416] text-white shadow-sm'
                            : 'bg-[#181B26] text-slate-400 hover:text-white border border-[#262B3B]'
                        }`}
                      >
                        {style}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Project Details / Creative Vision
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us what you sell, who your target audience is, any competitor brands you admire, or specific elements you want included..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#181B26] border border-[#262B3B] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5416]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* WhatsApp Direct Submit */}
                  <button
                    type="button"
                    onClick={handleWhatsAppDispatch}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Brief on WhatsApp</span>
                  </button>

                  {/* Standard Online Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF5416] hover:bg-[#FF6E38] shadow-lg shadow-[#FF5416]/25 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Brief...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Brief Online</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    100% Confidential
                  </span>
                  <span>·</span>
                  <span>Direct reply within 2 hours</span>
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#FF5416]/20 text-[#FF5416] border border-[#FF5416]/30 mb-2">
                Order ID: {submittedLead.id}
              </div>
              <h3 className="text-2xl font-black font-display text-white">
                PROJECT BRIEF RECEIVED!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                Thank you, <span className="text-white font-semibold">{submittedLead.clientName}</span>. Your brief for <span className="text-white font-semibold">{submittedLead.companyName}</span> has been logged into our studio queue.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#090A0F] border border-[#262B3B] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span>Deliverable:</span>
                <span className="text-white font-medium">{submittedLead.projectType}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Timeline:</span>
                <span className="text-white font-medium">{submittedLead.timeline}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Estimated Target:</span>
                <span className="text-[#FF5416] font-bold">{submittedLead.budgetRange}</span>
              </div>
            </div>

            <div className="space-y-3 max-w-md mx-auto pt-2">
              <button
                onClick={handleWhatsAppDispatch}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Notify Major Graphics on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmittedLead(null);
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
