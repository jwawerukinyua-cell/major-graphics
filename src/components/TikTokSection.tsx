import React, { useState } from 'react';
import { TIKTOK_VIDEOS, TikTokVideoCard } from '../data/testimonialsData';
import { 
  Play, 
  ExternalLink, 
  Eye, 
  Heart, 
  Clock, 
  Sparkles, 
  X, 
  CheckCircle2,
  Video
} from 'lucide-react';

interface TikTokSectionProps {
  onOpenBriefModal: () => void;
}

export const TikTokSection: React.FC<TikTokSectionProps> = ({
  onOpenBriefModal,
}) => {
  const [activeVideo, setActiveVideo] = useState<TikTokVideoCard | null>(null);

  return (
    <section id="tiktok" className="py-24 bg-[#0C0E14] relative border-t border-[#262B3B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with TikTok Profile Card */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-14 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5416] mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>Behind the Canvas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
              SEE THE CRAFT LIVE ON TIKTOK
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              We document real client brand transformations from raw pencil sketches to 8K vector masterpieces. Watch our process and see how we build logos that dominate feeds.
            </p>
          </div>

          {/* Official TikTok Profile Pill Card */}
          <div className="p-4 rounded-2xl bg-[#12141C] border border-[#262B3B] flex items-center gap-4 shrink-0 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-white p-1 border border-white/20 shadow-lg shrink-0 overflow-hidden">
              <img
                src="/logo.jpg"
                alt="Major Graphics TikTok Profile"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm">@major.graphics.lt</span>
                <span className="text-cyan-400 text-xs" title="Verified Designer">✓</span>
              </div>
              <div className="text-xs text-slate-400">
                Official Studio Account
              </div>
              <a
                href="https://www.tiktok.com/@major.graphics.lt?_r=1&_t=ZS-9AYFxBCfbPR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FF5416] hover:text-white mt-1 transition-colors"
              >
                <span>Follow on TikTok</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Video Cards Grid (Vertical 9:16 aesthetic simulated) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIKTOK_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group cursor-pointer rounded-2xl bg-[#12141C] border border-[#262B3B] hover:border-[#FF5416]/60 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF5416]/10 flex flex-col"
            >
              {/* 9:16 Vertical Thumbnail Aspect */}
              <div className="relative aspect-[9/14] bg-black overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                />
                
                {/* Dark gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

                {/* Top stats */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 font-mono">
                    {video.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{video.duration}</span>
                  </span>
                </div>

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF5416]/90 group-hover:bg-[#FF5416] text-white flex items-center justify-center shadow-lg shadow-[#FF5416]/30 transform group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom title & views */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-2">
                  <h4 className="text-xs font-bold line-clamp-2 leading-snug">
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1 border-t border-white/10">
                    <span className="flex items-center gap-1 font-mono">
                      <Eye className="w-3 h-3 text-[#FF5416]" />
                      <span>{video.views}</span>
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Heart className="w-3 h-3 text-rose-500" />
                      <span>{video.likes}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom brief info */}
              <div className="p-3 bg-[#12141C] text-xs text-slate-400">
                <span className="line-clamp-1">{video.description}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#181B26] via-[#12141C] to-[#181B26] border border-[#262B3B] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">Want your project featured in our next speedart breakdown?</div>
            <div className="text-xs text-slate-400 mt-0.5">We record exclusive behind-the-scenes creation videos for all client brand identities.</div>
          </div>
          <button
            onClick={onOpenBriefModal}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF5416] hover:bg-[#FF6E38] shadow-lg shadow-[#FF5416]/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commission a Project</span>
          </button>
        </div>

      </div>

      {/* Video Preview Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#12141C] border border-[#262B3B] overflow-hidden p-6 text-left space-y-4">
            
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#181B26] text-slate-400 hover:text-white border border-[#262B3B]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-8">
              <span className="text-xs font-mono text-[#FF5416] uppercase">{activeVideo.category}</span>
              <h3 className="text-lg font-bold text-white font-display mt-1">
                {activeVideo.title}
              </h3>
            </div>

            {/* Video preview frame */}
            <div className="relative aspect-[9/12] max-h-[50vh] mx-auto rounded-xl overflow-hidden bg-black border border-[#262B3B]">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF5416] flex items-center justify-center text-white shadow-2xl mb-4 animate-pulse">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
                <div className="text-sm font-bold text-white">Full Process Video Available on TikTok</div>
                <div className="text-xs text-slate-300 mt-1 max-w-xs">{activeVideo.description}</div>
                <a
                  href="https://www.tiktok.com/@major.graphics.lt?_r=1&_t=ZS-9AYFxBCfbPR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
                >
                  <span>Watch on TikTok @major.graphics.lt</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#262B3B] text-xs text-slate-400">
              <span>{activeVideo.views} Views · {activeVideo.likes} Likes</span>
              <button
                onClick={() => {
                  setActiveVideo(null);
                  onOpenBriefModal();
                }}
                className="text-[#FF5416] hover:underline font-bold"
              >
                Request similar design →
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
