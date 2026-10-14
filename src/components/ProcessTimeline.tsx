import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export const ProcessTimeline: React.FC<{ onOpenBriefModal?: () => void }> = ({ onOpenBriefModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Brief',
      subtitle: 'Discovery & Vision',
      description: 'Share your vision, brand assets, and target audience. The more context, the better the output. We review brand guidelines, print specs, and project goals.',
      meta: 'Within 4 Hours of Submission',
    },
    {
      num: '02',
      title: 'Concept',
      subtitle: 'Vector Explorations',
      description: 'Our creative team develops initial concepts and presents design directions within 48–72 hours. Built from vector scratch with real geometric precision.',
      meta: '48–72 Hour Turnaround',
    },
    {
      num: '03',
      title: 'Refine',
      subtitle: 'Proofing & Calibration',
      description: 'Revisions to perfect every detail — typography, colour calibration, bleed margins, spot UV masks, layout balance, and messaging.',
      meta: 'Unlimited Review Polish',
    },
    {
      num: '04',
      title: 'Deliver',
      subtitle: 'Master Files & Print Handover',
      description: 'Print-ready files (CMYK + 3mm bleeds) or high-res digital assets delivered with full source files (.AI, .EPS, .SVG, .PSD) and brand kit ready for presses.',
      meta: '100% Vector & Commercial Sign-off',
    },
  ];

  return (
    <section className="py-24 bg-[#090A0F] relative border-t border-[#1E2230]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Advatech: The Creative Process. */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.35em] text-[#FF5416] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5416]" />
              <span>How We Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-none">
              The Creative <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5416] via-[#FF7A3D] to-[#FFA07A]">
                Process.
              </span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            A seamless bridge from brief to production. We remove guesswork with structured milestones and transparent proofing at every stage.
          </p>
        </div>

        {/* 4 Advatech-style rounded-[2.5rem] cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white/[0.03] border border-white/[0.08] hover:border-[#FF5416]/50 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 group shadow-xl"
            >
              <div>
                {/* 60px watermark number from Advatech */}
                <span className="text-6xl sm:text-7xl font-black font-display text-white/10 group-hover:text-[#FF5416]/40 transition-colors block mb-6 -mt-2 select-none">
                  {step.num}
                </span>

                <div className="text-xs font-mono uppercase tracking-wider text-[#FF5416] mb-1">
                  {step.subtitle}
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{step.meta}</span>
                <CheckCircle className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Advatech-inspired CTA Bar: Ready to Make Your Brand Unforgettable? */}
        <div className="mt-16 rounded-[2.5rem] bg-gradient-to-r from-[#181B26] via-[#12141C] to-[#181B26] border border-white/[0.08] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5416]/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="text-[11px] font-black uppercase tracking-[0.35em] text-[#FF5416]">
              Ready to Make
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
              Your Brand <span className="text-slate-400">Unforgettable?</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Fast turnarounds. Premium commercial print quality. Competitive pricing across Kenya and globally. Let&apos;s create something remarkable together.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBriefModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF5416] hover:bg-[#FF6E38] text-white font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-[#FF5416]/30 transition-all transform hover:-translate-y-0.5"
              >
                Start a Project
              </button>
              <a
                href="https://wa.me/?text=Hello%20Major%20Graphics!%20I'm%20ready%20to%20discuss%20a%20graphic%20design%20and%20printing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] font-semibold text-xs tracking-wider transition-all"
              >
                Chat on WhatsApp Direct
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
