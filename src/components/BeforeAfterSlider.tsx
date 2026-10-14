import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, ArrowLeftRight, Check, X } from 'lucide-react';

interface BeforeAfterSliderProps {
  onOpenBriefModal: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  onOpenBriefModal,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 bg-[#0C0E14] relative border-y border-[#262B3B]/60 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF5416]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5416] mb-3">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Real Visual Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            SEE THE DIFFERENCE PROFESSIONAL BRANDING MAKES
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Drag the interactive slider to compare an amateur, low-res business mark with a custom Major Graphics vector identity system.
          </p>
        </div>

        {/* Interactive Comparison Widget */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden select-none cursor-ew-resize border-2 border-[#262B3B] shadow-2xl shadow-black/80 bg-[#12141C]"
          >
            {/* "AFTER" (Major Graphics Redesign) - Full width layer behind */}
            <div className="absolute inset-0 bg-[#0F111A] flex flex-col justify-between p-6 sm:p-10">
              
              {/* After Branding Canvas simulation */}
              <div className="relative flex-1 flex flex-col items-center justify-center text-center">
                
                {/* 3D badge mockup visual */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-[#161822] via-[#242938] to-[#12141C] p-1 shadow-2xl border border-white/10 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-[22px] bg-[#090A0F] flex flex-col items-center justify-center p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF5416]/20 via-transparent to-transparent pointer-events-none" />
                    <svg viewBox="0 0 100 100" className="w-20 h-20 text-[#FF5416]" fill="currentColor">
                      <path d="M50 8L88 28V72L50 92L12 72V28L50 8Z" fill="#FF5416" fillOpacity="0.15" stroke="#FF5416" strokeWidth="3" />
                      <path d="M50 24L72 36V64L50 76L28 64V36L50 24Z" fill="#FF5416" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
                    </svg>
                    <span className="font-display font-extrabold text-white text-xs tracking-wider uppercase mt-2">
                      KINETIX ATELIER
                    </span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">
                      MASTER VECTOR · 2026
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                    KINETIX ATHLETIC LABS
                  </div>
                  <div className="text-xs text-emerald-400 font-medium mt-1 flex items-center justify-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Razor-sharp vectors · Infinite scaling · CMYK + RGB verified</span>
                  </div>
                </div>

              </div>

              {/* Tag indicator for AFTER */}
              <div className="flex items-center justify-end">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ✓ After Major Graphics
                </span>
              </div>
            </div>

            {/* "BEFORE" (Outdated / Amateur) - Clipped by width percentage */}
            <div
              className="absolute inset-0 bg-[#1e212d] flex flex-col justify-between p-6 sm:p-10 border-r-2 border-white/40 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Before Mockup simulation (Blurry, pixelated, generic clip-art) */}
              <div className="relative flex-1 flex flex-col items-center justify-center text-center">
                
                {/* Blurry, un-vectorized clip art look */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl bg-slate-200 p-4 shadow flex flex-col items-center justify-center filter blur-[1px] opacity-75">
                  <div className="w-16 h-16 rounded-full border-4 border-dashed border-red-500 flex items-center justify-center text-red-500 text-2xl font-bold font-serif">
                    K
                  </div>
                  <span className="font-serif text-slate-800 text-xs font-bold mt-2">
                    Kinetix Gym
                  </span>
                  <span className="text-[8px] text-slate-500">
                    low_res_final_v2.jpg (72 DPI)
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-lg sm:text-xl font-bold text-slate-300 font-sans tracking-tight">
                    Outdated Pixelated Icon
                  </div>
                  <div className="text-xs text-red-400 font-medium mt-1 flex items-center justify-center gap-1">
                    <X className="w-3 h-3" />
                    <span>Pixelated edges · Missing font files · Unusable on merch</span>
                  </div>
                </div>

              </div>

              {/* Tag indicator for BEFORE */}
              <div className="flex items-center justify-start">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-red-500/20 text-red-300 border border-red-500/30">
                  ✕ Before: Generic Clip-Art
                </span>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-[#FF5416]">
                <MoveHorizontal className="w-5 h-5 text-[#FF5416]" />
              </div>
            </div>

          </div>

          {/* Quick Comparison Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-[#12141C] border border-red-900/30 text-xs text-slate-400 space-y-2">
              <div className="font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <X className="w-4 h-4" />
                <span>The Cost of Weak Branding</span>
              </div>
              <p>
                Potential clients judge your reliability within 50 milliseconds. Amateur typography and blurry social graphics force you into price wars and lost contracts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#12141C] border border-emerald-900/30 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>The Major Graphics Advantage</span>
              </div>
              <p>
                Engineered geometry, high-contrast typography, and authentic vector mastery. Your brand instantly commands higher prices and stands tall against the biggest players.
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="text-center mt-8">
            <button
              onClick={onOpenBriefModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF5416] hover:bg-[#FF6E38] shadow-lg shadow-[#FF5416]/25 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Upgrade My Brand Identity Now</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
