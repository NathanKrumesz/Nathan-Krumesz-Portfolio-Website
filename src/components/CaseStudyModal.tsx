import React from 'react';
import { X, ArrowUpRight, CheckCircle2, ChevronRight, Layers, Target, BarChart2 } from 'lucide-react';
import { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onOpenContact }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#050507] text-white rounded-3xl max-w-4xl w-full border border-white/15 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase bg-emerald-950 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full">
              {caseStudy.client}
            </span>
            <span className="text-xs text-white/60 font-mono hidden sm:inline">
              {caseStudy.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          {/* Main Visual */}
          <div className="rounded-2xl overflow-hidden border border-white/15 bg-black aspect-[16/9] max-h-[360px]">
            <img
              src={caseStudy.image}
              alt={caseStudy.client}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Timeline */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/50 mb-2">
              <span>ROLE: {caseStudy.role}</span>
              <span>TIMELINE: {caseStudy.timeline}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              {caseStudy.tagline}
            </h2>
            <p className="mt-3 text-base text-white/80 font-light leading-relaxed">
              {caseStudy.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {caseStudy.stats.map((s, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <span className="text-2xl sm:text-3xl font-bold text-white block">
                  {s.value}
                </span>
                <span className="text-[11px] font-mono text-white/60 uppercase tracking-wider mt-1 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Strategic Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase mb-3">
                <Target className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                {caseStudy.problem}
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase mb-3">
                <BarChart2 className="w-4 h-4" />
                <span>The Strategic Playbook</span>
              </div>
              <div className="text-xs sm:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
                {caseStudy.solution}
              </div>
            </div>
          </div>

          {/* Key Results */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h4 className="text-xs font-mono uppercase text-white/60 tracking-wider mb-4">
              [ MEASURED OUTCOMES & REVENUE IMPACT ]
            </h4>
            <div className="space-y-3">
              {caseStudy.results.map((r, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/90 font-light">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-mono uppercase text-white/60 tracking-wider mb-3">
              [ KEY DELIVERABLES PRODUCED ]
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.deliverables.map((d, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 font-mono">
                  • {d}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-black/50 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition-colors"
          >
            Close
          </button>
          
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-all"
          >
            <span>Inquire About Similar Campaign</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
