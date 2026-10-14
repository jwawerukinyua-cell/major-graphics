import React, { useState } from 'react';
import { MessageSquare, X, ChevronUp, Sparkles, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    '⚡ I need a custom logo & vector suite in 48h',
    '👕 I need apparel / streetwear merch graphics',
    '🚀 Can I get an instant quote for my brand?',
    '🎥 I need a viral TikTok promotional graphic kit',
  ];

  const handleLaunchChat = (prompt?: string) => {
    const text = prompt 
      ? `Hello Major Graphics! ${prompt}`
      : `Hello Major Graphics! I saw your website and would like to discuss a graphic design project.`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-2xl bg-[#12141C] border border-[#262B3B] p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-200 text-left">
          <div className="flex items-center justify-between pb-3 border-b border-[#262B3B]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-white">Major Graphics Studio</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
            Need design work fast? Chat directly with the lead designer on WhatsApp.
          </p>

          <div className="mt-3 space-y-1.5">
            <span className="text-[10px] font-mono uppercase text-slate-400">Quick Messages:</span>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleLaunchChat(prompt)}
                className="w-full text-left p-2 rounded-lg bg-[#181B26] hover:bg-[#1E2230] border border-[#262B3B] text-[11px] text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
              >
                <span className="truncate pr-2">{prompt}</span>
                <Send className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 shrink-0" />
              </button>
            ))}
          </div>

          <button
            onClick={() => handleLaunchChat()}
            className="w-full mt-3 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Open WhatsApp Chat</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95 group font-bold text-xs uppercase tracking-wider"
        aria-label="Contact on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline font-semibold">Direct WhatsApp</span>
      </button>
    </div>
  );
};
