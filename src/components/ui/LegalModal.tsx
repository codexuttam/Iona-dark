import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
  onSwitchType: (type: 'terms' | 'privacy') => void;
}

export default function LegalModal({ isOpen, type, onClose, onSwitchType }: LegalModalProps) {
  if (!isOpen || !type) return null;

  const isTerms = type === 'terms';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#02080D]/90 backdrop-blur-xl animate-in fade-in duration-300 pointer-events-auto"
    >
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl bg-[#04141D] border border-[#20BFD3]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(32,191,211,0.15)] text-white flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSwitchType('terms')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                isTerms
                  ? 'bg-[#20BFD3] text-[#02080D] font-bold'
                  : 'text-[#A9C4CA] hover:text-white bg-white/5'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>TERMS & CONDITIONS</span>
            </button>
            <button
              onClick={() => onSwitchType('privacy')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                !isTerms
                  ? 'bg-[#20BFD3] text-[#02080D] font-bold'
                  : 'text-[#A9C4CA] hover:text-white bg-white/5'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PRIVACY POLICY</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 hover:border-white/40 text-[#A9C4CA] hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 mt-6 space-y-6 text-xs text-[#A9C4CA] leading-relaxed font-sans scrollbar-thin scrollbar-thumb-[#20BFD3]/30">
          {isTerms ? (
            <>
              <div>
                <span className="text-[10px] font-mono text-[#7DEAF0] uppercase tracking-widest block mb-1">
                  EFFECTIVE DATE: OCTOBER 2026
                </span>
                <h3 className="font-display text-2xl font-bold uppercase italic text-white">
                  TERMS OF SERVICE & PRIVATE ALLOCATIONS
                </h3>
                <p className="mt-2">
                  Welcome to IONA. By accessing this platform, reserving case allocations, or interacting with our digital flagship, you agree to comply with and be bound by the following Terms & Conditions.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#7DEAF0]">
                  1. CELLAR ALLOCATIONS & PRIVATE RESERVATIONS
                </h4>
                <p>
                  All case allocations reserved via IONA's concierge are processed subject to batch vintage availability and micro-filtration release clearance. Receipt of a reservation confirmation does not constitute a guaranteed dispatch until quality verification is confirmed.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#7DEAF0]">
                  2. HERMETIC PURITY & BATCH TESTING
                </h4>
                <p>
                  Each batch of IONA undergoes third-party laser spectroscopy and micro-batch certification guaranteeing minimum 8.5+ electrolytic pH balance and 0.001 micron filtration. Reports are archived and accessible to allocation holders upon delivery.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#7DEAF0]">
                  3. INTELLECTUAL PROPERTY & 3D ASSETS
                </h4>
                <p>
                  All visuals, 3D WebGL assets, typography, custom shaders, and branding present on this application are the exclusive intellectual property of IONA Beverages Inc. Unauthorized replication or extraction of 3D geometry is strictly prohibited.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#7DEAF0]">
                  4. TEMPERATURE SENSITIVE DISPATCH
                </h4>
                <p>
                  IONA bottles are transported via climate-regulated white-glove courier to maintain crystalline molecular structure and mineral equilibrium. Delivery timelines will be coordinated directly through private client concierge.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <span className="text-[10px] font-mono text-[#7DEAF0] uppercase tracking-widest block mb-1">
                  EFFECTIVE DATE: OCTOBER 2026
                </span>
                <h3 className="font-display text-2xl font-bold uppercase italic text-white">
                  PRIVACY & DATA GOVERNANCE POLICY
                </h3>
                <p className="mt-2">
                  IONA is dedicated to safeguarding the privacy and digital sovereignty of our patrons. This document outlines how client inquiries and allocation data are managed with the highest encryption standards.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#7DEAF0]">
                  1. INFORMATION WE COLLECT
                </h4>
                <p>
                  We collect strictly necessary concierge information provided voluntarily when you request case allocations, including patron name, delivery jurisdiction, contact email, and special batch handling notes.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#7DEAF0]">
                  2. ZERO THIRD-PARTY AD TRACKING
                </h4>
                <p>
                  IONA operates zero third-party advertisement networks, behavioral ad trackers, or data broker integrations. Your digital interactions remain isolated to our luxury experience.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#7DEAF0]">
                  3. ENCRYPTION & RETENTION
                </h4>
                <p>
                  All allocation transmission records utilize end-to-end 256-bit TLS encryption. Records of dispatched batches are retained strictly for warranty authentication and recurring cellar replenishment schedules.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#7DEAF0]">
                  4. CLIENT RIGHTS & DATA PURGING
                </h4>
                <p>
                  Patrons maintain full discretion to request complete erasure of their inquiry history and contact details at any moment by contacting our privacy compliance desk.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A9C4CA] shrink-0">
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#20BFD3]" />
            <span>GDPR & CCPA Compliant Governance</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#20BFD3] text-[#02080D] font-bold text-xs uppercase tracking-wider hover:bg-[#7DEAF0] transition-colors cursor-pointer"
          >
            CONFIRM & CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
