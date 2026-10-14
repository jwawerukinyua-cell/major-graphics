import React from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';
import { Star, MessageSquareQuote, CheckCircle, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#090A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5416] mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Real Growth & Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            TRUSTED BY VISIONARY BRANDS WORLDWIDE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Read what happens when founders stop settling for amateur clip-art and partner with Major Graphics.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="rounded-2xl bg-[#12141C] border border-[#262B3B] p-6 sm:p-8 flex flex-col justify-between hover:border-[#FF5416]/40 transition-all hover:shadow-xl"
            >
              <div>
                {/* Top star rating & verified outcome badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-md">
                    {test.result}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-[#262B3B]/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#FF5416]/30"
                  />
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{test.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-xs text-slate-400">
                      {test.role} · <span className="text-slate-300 font-medium">{test.company}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF5416] bg-[#FF5416]/10 px-2 py-0.5 rounded">
                    {test.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
