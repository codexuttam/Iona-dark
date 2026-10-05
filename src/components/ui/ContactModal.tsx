import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Droplets, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export default function ContactModal({ isOpen, onClose, initialSubject = '' }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject || 'Case Allocation Reservation',
    quantity: '1 Case (12 Bottles)',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initialSubject when opened
  React.useEffect(() => {
    if (isOpen && initialSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: initialSubject,
        message: initialSubject.includes('Reserve')
          ? `I would like to reserve a case of IONA (${initialSubject.replace('Reserve Case Allocation - ', '')}). Please confirm cellar batch availability and dispatch scheduling.`
          : prev.message,
      }));
    }
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen, initialSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#02080D]/85 backdrop-blur-xl animate-in fade-in duration-300 pointer-events-auto"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#04141D] border border-[#20BFD3]/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(32,191,211,0.15)] text-white overflow-hidden">
        {/* Glowing Ambient Gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#20BFD3]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-white/40 text-[#A9C4CA] hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#20BFD3]/20 border border-[#20BFD3] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(32,191,211,0.4)]">
              <CheckCircle2 className="w-8 h-8 text-[#7DEAF0]" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#20BFD3] font-bold">
              INQUIRY RECORDED
            </span>
            <h3 className="font-display text-3xl font-bold italic uppercase mt-2 text-white">
              RESERVATION RECEIVED
            </h3>
            <p className="mt-4 text-xs text-[#A9C4CA] leading-relaxed max-w-sm">
              Thank you, <span className="text-white font-medium">{formData.name || 'valued patron'}</span>. Our private concierge cellar team has received your allocation request and will reach out via <span className="text-[#7DEAF0]">{formData.email}</span> within 4 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-8 px-7 py-3 rounded-full bg-[#20BFD3] text-[#02080D] font-bold text-xs uppercase tracking-widest hover:bg-[#7DEAF0] transition-colors cursor-pointer"
            >
              RETURN TO SITE
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#7DEAF0]">
                <Droplets className="w-3.5 h-3.5 text-[#20BFD3]" />
                PRIVATE CONCIERGE & ALLOCATIONS
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold italic uppercase mt-1 tracking-tight text-white">
                GET IN TOUCH
              </h3>
              <p className="text-xs text-[#A9C4CA] mt-1.5 leading-relaxed">
                Direct batch inquiries, residential cellar reserves, and corporate allocations.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-[#A9C4CA] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Lord / Lady / M."
                    className="px-3.5 py-2.5 rounded-lg bg-[#06232D]/80 border border-white/10 focus:border-[#20BFD3] focus:outline-none text-white font-sans text-xs transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] text-[#A9C4CA] uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@residence.com"
                    className="px-3.5 py-2.5 rounded-lg bg-[#06232D]/80 border border-white/10 focus:border-[#20BFD3] focus:outline-none text-white font-sans text-xs transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#A9C4CA] uppercase tracking-wider">
                  Subject / Allocation Request
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Case Allocation"
                  className="px-3.5 py-2.5 rounded-lg bg-[#06232D]/80 border border-white/10 focus:border-[#20BFD3] focus:outline-none text-white font-sans text-xs transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] text-[#A9C4CA] uppercase tracking-wider">
                  Special Instructions or Delivery Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify destination, desired batch vintage, or temperature requirements..."
                  className="px-3.5 py-2.5 rounded-lg bg-[#06232D]/80 border border-white/10 focus:border-[#20BFD3] focus:outline-none text-white font-sans text-xs resize-none transition-colors"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#A9C4CA]/70">
                  <Shield className="w-3.5 h-3.5 text-[#20BFD3]" />
                  <span>256-Bit Encrypted Concierge Line</span>
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#20BFD3] text-[#02080D] font-bold text-xs uppercase tracking-wider hover:bg-[#7DEAF0] hover:shadow-[0_0_20px_rgba(32,191,211,0.4)] transition-all cursor-pointer"
                >
                  <span>SUBMIT INQUIRY</span>
                  <Send className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
