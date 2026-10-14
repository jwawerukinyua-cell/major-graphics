import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, MessageSquare, ShieldAlert } from 'lucide-react';

interface BrandAuditQuizProps {
  onOpenBriefModal: () => void;
}

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: {
    label: string;
    score: number;
    feedback: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'What format do you currently have for your primary brand logo?',
    subtitle: 'Vector formats are mandatory for billboards, embroidery, packaging, and clean screens.',
    options: [
      {
        label: 'Original Vector Master Files (.AI, .EPS, .SVG) + Color Variants',
        score: 25,
        feedback: 'Excellent foundation for scaling across any physical and digital medium.',
      },
      {
        label: 'Only a JPEG or PNG thumbnail from Canva or phone gallery',
        score: 5,
        feedback: 'Critical risk: Your files will pixelate heavily on print, merch, and signage.',
      },
      {
        label: 'We are starting fresh with zero existing branding or logo',
        score: 15,
        feedback: 'Great opportunity: You can build it right from day one without legacy baggage.',
      },
      {
        label: 'Outdated design made over 5 years ago that feels stale',
        score: 10,
        feedback: 'Design trends and customer expectations have shifted; you are losing modern buyers.',
      },
    ],
  },
  {
    id: 2,
    title: 'How consistent are your social media posts, flyers, and advertisements?',
    subtitle: 'Brand recognition requires repeated exposure to uniform colors, typography, and layout rules.',
    options: [
      {
        label: '100% unified with strict font rules, brand colors, and guidelines',
        score: 25,
        feedback: 'Top-tier consistency creates instant brand trust.',
      },
      {
        label: 'Different colors and random fonts every time we post or print',
        score: 5,
        feedback: 'High confusion: Customers cannot easily remember or differentiate your business.',
      },
      {
        label: 'We try to stay consistent but lack professional editable templates',
        score: 15,
        feedback: 'A standardized social kit will save you 10+ hours a month and look 5x more professional.',
      },
      {
        label: 'We do not currently post graphics or use promotional flyers',
        score: 10,
        feedback: 'Massive untapped revenue channel: Visual storytelling drives the modern buyer journey.',
      },
    ],
  },
  {
    id: 3,
    title: 'When potential clients see your branding, what is their immediate reaction?',
    subtitle: 'Perceived visual value directly dictates your pricing power and close rates.',
    options: [
      {
        label: 'They immediately perceive us as a market-leading premium brand',
        score: 25,
        feedback: 'Your visual presentation commands premium pricing.',
      },
      {
        label: 'They haggle aggressively or compare us to cheap budget alternatives',
        score: 5,
        feedback: 'Red flag: Weak visual branding forces you to compete strictly on low prices.',
      },
      {
        label: 'It looks average, like a friendly mom-and-pop local shop',
        score: 15,
        feedback: 'You are leaving money on the table against sleeker, venture-backed competitors.',
      },
      {
        label: 'Not sure / We have never asked for honest customer feedback',
        score: 10,
        feedback: 'First impressions happen in 0.05 seconds online. Polish matters immensely.',
      },
    ],
  },
  {
    id: 4,
    title: 'Are your marketing assets optimized for short-form video & mobile screens (9:16)?',
    subtitle: 'Over 80% of digital consumer discovery now occurs on mobile video feeds like TikTok & Reels.',
    options: [
      {
        label: 'Yes, we use dynamic 9:16 vertical hook layouts and motion intro cards',
        score: 25,
        feedback: 'Primed for algorithmic growth and high engagement.',
      },
      {
        label: 'No, we still use square or landscape graphics cropped awkwardly',
        score: 5,
        feedback: 'Algorithms penalize bad aspect ratios and users scroll past in 1 second.',
      },
      {
        label: 'We want to launch on TikTok/Reels but need the graphics package',
        score: 15,
        feedback: 'Major Graphics specializes in TikTok viral hook kits to kickstart your page.',
      },
      {
        label: 'We rely primarily on word of mouth and offline referrals',
        score: 10,
        feedback: 'Adding digital firepower amplifies your word of mouth by 10x.',
      },
    ],
  },
];

export const BrandAuditQuiz: React.FC<BrandAuditQuizProps> = ({
  onOpenBriefModal,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (score: number) => {
    const updated = [...answers, score];
    setAnswers(updated);

    if (currentStep + 1 < QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  const getScoreVerdict = (score: number) => {
    if (score >= 80) {
      return {
        rating: 'Elite Brand Presence',
        color: 'text-emerald-400',
        badgeColor: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300',
        analysis: 'Your visual identity is strong. To scale further, focus on animated TikTok motion graphics, high-end 3D product renders, and seasonal campaign drops.',
        recommendedPackage: 'Creative Partner Retainer',
      };
    }
    if (score >= 50) {
      return {
        rating: 'Moderate Brand Risk — Leaving Revenue Behind',
        color: 'text-amber-400',
        badgeColor: 'bg-amber-500/20 border-amber-500/30 text-amber-300',
        analysis: 'You have good potential, but inconsistent assets and missing master vector formats are preventing you from closing higher-ticket clients.',
        recommendedPackage: 'Signature Brand Identity Suite',
      };
    }
    return {
      rating: 'Critical Brand Overhaul Required',
      color: 'text-red-400',
      badgeColor: 'bg-red-500/20 border-red-500/30 text-red-300',
      analysis: 'Your current visual identity is actively hurting your sales and credibility. Prospective buyers perceive you as amateur. A focused overhaul will deliver immediate ROI.',
      recommendedPackage: 'Impact Starter or Full Rebrand',
    };
  };

  const verdict = getScoreVerdict(totalScore);

  return (
    <section id="brand-audit" className="py-24 bg-[#090A0F] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5416] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Lead Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
            IS YOUR BRANDING LOSING YOU CUSTOMERS?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Take this 60-second diagnostic test to uncover hidden design flaws and get a custom roadmap for growth.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="rounded-2xl bg-[#12141C] border border-[#262B3B] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {!isCompleted ? (
            <div className="space-y-8">
              
              {/* Progress bar */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
                  <span className="text-[#FF5416] font-bold">
                    {Math.round(((currentStep) / QUESTIONS.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#181B26] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF5416] to-[#FF8C00] transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Body */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {QUESTIONS[currentStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {QUESTIONS[currentStep].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.score)}
                    className="w-full text-left p-4 rounded-xl bg-[#181B26] hover:bg-[#1E2230] border border-[#262B3B] hover:border-[#FF5416]/50 transition-all text-xs sm:text-sm text-slate-200 hover:text-white flex items-center justify-between group"
                  >
                    <span className="pr-4">{option.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#FF5416] group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>

            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
              
              <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-[#181B26] border-2 border-[#262B3B]">
                <span className="text-2xl font-black font-display text-[#FF5416]">
                  {totalScore}
                </span>
                <span className="text-xs text-slate-500 font-mono">/100</span>
              </div>

              <div>
                <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${verdict.badgeColor} mb-2`}>
                  {verdict.rating}
                </span>
                <h3 className="text-2xl font-black font-display text-white">
                  Brand Health Diagnosis
                </h3>
                <p className="text-sm text-slate-300 max-w-xl mx-auto mt-3 leading-relaxed">
                  {verdict.analysis}
                </p>
              </div>

              {/* Recommended Action Card */}
              <div className="p-4 rounded-xl bg-[#090A0F] border border-[#262B3B] text-left max-w-xl mx-auto text-xs space-y-2">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#FF5416]" />
                  <span>Recommended Fix:</span>
                  <span className="text-[#FF5416]">{verdict.recommendedPackage}</span>
                </div>
                <p className="text-slate-400">
                  Major Graphics can rebuild your master vectors, craft full guidelines, and set up your TikTok promotional kit in under 5 days.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={onOpenBriefModal}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF5416] hover:bg-[#FF6E38] shadow-lg shadow-[#FF5416]/25 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Claim Free 15-Min Strategy Review</span>
                </button>

                <a
                  href={`https://wa.me/?text=Hello%20Major%20Graphics!%20I%20just%20took%20your%20Brand%20Audit%20Quiz%20and%20scored%20${totalScore}/100.%20Can%20we%20discuss%20improving%20my%20branding?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-medium text-emerald-400 border border-emerald-800/40 bg-emerald-950/20 hover:bg-emerald-950/40 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss Results on WhatsApp</span>
                </a>

                <button
                  onClick={resetQuiz}
                  className="p-3 text-slate-400 hover:text-white rounded-xl bg-[#181B26] border border-[#262B3B]"
                  title="Retake Quiz"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
