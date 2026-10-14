import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'lockup' | 'badge' | 'minimal';
}

export const MajorGraphicsLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'lockup',
}) => {
  // Dimension mappings
  const dimensions = {
    sm: { iconSize: 34, fontSize: 'text-base', subSize: 'text-[9px]' },
    md: { iconSize: 42, fontSize: 'text-lg sm:text-xl', subSize: 'text-[10px]' },
    lg: { iconSize: 52, fontSize: 'text-xl sm:text-2xl', subSize: 'text-xs' },
    xl: { iconSize: 68, fontSize: 'text-2xl sm:text-3xl', subSize: 'text-xs' },
  };

  const { iconSize, fontSize, subSize } = dimensions[size];

  // If pure badge requested
  if (variant === 'badge') {
    return (
      <div 
        className={`relative shrink-0 rounded-2xl overflow-hidden bg-white p-1 border-2 border-white/20 shadow-xl shadow-black/60 group hover:border-[#FF5416]/50 transition-all ${className}`}
        style={{ width: iconSize * 1.5, height: iconSize * 1.5 }}
      >
        <img
          src="/logo.jpg"
          alt="Major Graphics"
          className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Exact official logo badge image */}
      <div 
        className="relative shrink-0 rounded-xl overflow-hidden bg-white p-0.5 border border-white/20 shadow-lg shadow-black/40 group-hover:border-[#FF5416]/60 group-hover:shadow-[#FF5416]/25 transition-all duration-300"
        style={{ width: iconSize, height: iconSize }}
      >
        <img
          src="/logo.jpg"
          alt="Major Graphics Emblem"
          className="w-full h-full object-contain rounded-[9px] group-hover:scale-105 transition-transform duration-300"
          loading="eager"
        />
      </div>

      {/* Brand Typography */}
      {variant !== 'minimal' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-display font-black tracking-tight text-white uppercase ${fontSize}`}>
              MAJOR
            </span>
            <span className={`font-display font-black tracking-tight text-[#FF5416] uppercase ${fontSize}`}>
              GRAPHICS
            </span>
          </div>
          {showSubtitle && (
            <span className={`tracking-widest uppercase font-mono font-medium text-slate-400 mt-1 ${subSize}`}>
              Design &amp; Print Studio
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export const MajorGraphicsFullBadge: React.FC<{ size?: number; className?: string }> = ({
  size = 140,
  className = '',
}) => {
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden bg-white p-2 shadow-2xl shadow-black/80 border border-white/30 group hover:border-[#FF5416]/60 transition-all duration-300 inline-flex flex-col items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/logo.jpg"
        alt="Major Graphics Official Logo"
        className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
        loading="eager"
      />
    </div>
  );
};
