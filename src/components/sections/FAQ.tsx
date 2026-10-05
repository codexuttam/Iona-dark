import { useState } from 'react';
import { Plus, Minus, ArrowRight, Instagram, Youtube, Linkedin, Globe } from 'lucide-react';
import { FAQS } from '../../lib/constants';
import MagneticButton from '../ui/MagneticButton';

interface FAQProps {
  onExperience: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
  onOpenContact?: () => void;
}

export default function FAQ({ onExperience, onNavigate, onOpenTerms, onOpenPrivacy, onOpenContact }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="questions"
      className="relative min-h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 pt-28 pb-12"
    >
      <div className="max-w-4xl w-full pointer-events-auto mx-auto lg:mx-0">

        {/* Heading */}
        <h2 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.0]">
          <span className="block font-light text-white/90">
            Frequently
          </span>
          <span className="block italic text-[#E5F3F5] font-normal">
            pondered.
          </span>
        </h2>

        {/* FAQ Accordion List */}
        <div className="mt-12 border-t border-white/10 divide-y divide-white/10">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="py-6 group">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-lg sm:text-xl text-white/90 group-hover:text-white transition-colors pr-6 font-light">
                    {item.q}
                  </span>
                  <div className="p-1 rounded-full border border-white/10 group-hover:border-white/30 text-white/70 transition-colors shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 text-xs sm:text-sm text-[#8D9FA7] font-light leading-relaxed pr-8 animate-in fade-in duration-300">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FINAL SECTION: Sanctuary Invitation */}
      <div id="ultimate-hydration" className="mt-32 max-w-4xl w-full pointer-events-auto mx-auto text-center flex flex-col items-center py-20 border-t border-white/10">
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8D9FA7] mb-5">
          AN ELEVATED BASELINE
        </span>

        <h3 className="font-serif-luxury text-5xl sm:text-7xl font-light tracking-tight text-white leading-[1.05]">
          Stillness in an <br />
          <span className="italic text-[#E5F3F5] font-normal">
            accelerated world.
          </span>
        </h3>

        <p className="mt-6 text-sm text-[#8D9FA7] font-light max-w-md leading-relaxed">
          Welcome to a circle of individuals who regard purity, aesthetics, and mental clarity as essential foundations.
        </p>

        <div className="mt-10">
          <button
            onClick={onExperience}
            className="flex items-center gap-3 px-9 py-4 rounded-full border border-white/30 bg-white/[0.04] text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#030709] transition-all duration-500 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            <span>REQUEST AN ALLOCATION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white transition-colors" />
          </button>
        </div>
      </div>

      {/* CINEMATIC FOOTER */}
      <footer className="mt-20 pt-8 border-t border-white/10 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8D9FA7]">
        {/* Left: Brand */}
        <div className="flex items-center gap-5">
          <span className="font-serif-luxury text-2xl tracking-[0.15em] text-white">
            IONA
          </span>
          <span className="text-white/20">|</span>
          <span className="text-[11px] font-mono text-[#8D9FA7]/70">
            NATURAL ALKALINE & IONISED WATER
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-[10px] tracking-widest uppercase">
          <button onClick={() => onNavigate('philosophy')} className="hover:text-white transition-colors cursor-pointer">
            PHILOSOPHY
          </button>
          <button onClick={() => onNavigate('alkaline')} className="hover:text-white transition-colors cursor-pointer">
            ORIGIN
          </button>
          <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors cursor-pointer">
            PROVENANCE
          </button>
          <button onClick={() => onNavigate('range')} className="hover:text-white transition-colors cursor-pointer">
            EDITIONS
          </button>
          <button onClick={() => (onOpenContact ? onOpenContact() : onNavigate('questions'))} className="hover:text-white transition-colors cursor-pointer">
            CONCIERGE
          </button>
          <span className="text-white/20 hidden md:inline">|</span>
          <button onClick={onOpenTerms} className="hover:text-white text-[#8D9FA7] transition-colors cursor-pointer">
            TERMS
          </button>
          <button onClick={onOpenPrivacy} className="hover:text-white text-[#8D9FA7] transition-colors cursor-pointer">
            PRIVACY
          </button>
        </div>

        {/* Right: Socials & Copyright */}
        <div className="flex items-center gap-5 text-white/60">
          <span className="text-[10px] font-mono text-[#8D9FA7]">© 2026 IONA SANCTUARY.</span>
        </div>
      </footer>
    </section>
  );
}
