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
        <h2 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.0] text-luminous-heading">
          <span className="block font-light text-white">
            Frequently
          </span>
          <span className="block italic text-[#E8F8FA] font-normal">
            pondered.
          </span>
        </h2>

        {/* FAQ Accordion List */}
        <div className="mt-12 border-t border-white/15 divide-y divide-white/15">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="py-6 group">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-lg sm:text-xl text-white group-hover:text-[#E8F8FA] transition-colors pr-6 font-light">
                    {item.q}
                  </span>
                  <div className="p-1 rounded-full border border-white/20 group-hover:border-white/40 text-white transition-colors shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 text-xs sm:text-sm text-[#E2E8F0] font-light leading-relaxed pr-8 animate-in fade-in duration-300">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FINAL SECTION: Sanctuary Invitation */}
      <div id="ultimate-hydration" className="mt-32 max-w-4xl w-full pointer-events-auto mx-auto text-center flex flex-col items-center py-20 border-t border-white/15">
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#CBD5E1] mb-5 font-medium">
          AN ELEVATED BASELINE
        </span>

        <h3 className="font-serif-luxury text-5xl sm:text-7xl font-light tracking-tight text-white leading-[1.05] text-luminous-heading">
          Stillness in an <br />
          <span className="italic text-[#E8F8FA] font-normal">
            accelerated world.
          </span>
        </h3>

        <p className="mt-6 text-sm sm:text-base text-[#E2E8F0] font-light max-w-md leading-relaxed text-editorial-body">
          Welcome to a circle of individuals who regard purity, aesthetics, and mental clarity as essential foundations.
        </p>

        <div className="mt-10">
          <button
            onClick={() => onOpenContact ? onOpenContact() : onExperience()}
            className="flex items-center gap-3 px-9 py-4 rounded-full border border-white/30 bg-white/[0.08] text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#030709] transition-all duration-500 cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          >
            <span>GET IN TOUCH / ORDER</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white transition-colors" />
          </button>
        </div>
      </div>

      {/* CINEMATIC FOOTER */}
      <footer className="mt-20 pt-8 border-t border-white/15 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#CBD5E1]">
        {/* Left: Brand */}
        <div className="flex items-center gap-5">
          <span className="font-serif-luxury text-2xl tracking-[0.15em] text-white">
            IONA
          </span>
          <span className="text-white/30">|</span>
          <span className="text-[11px] font-mono text-[#CBD5E1] tracking-wider">
            NATURAL ALKALINE & IONISED WATER
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] tracking-widest uppercase text-[#CBD5E1]">
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
          <button onClick={() => (onOpenContact ? onOpenContact() : onNavigate('questions'))} className="hover:text-white transition-colors cursor-pointer font-medium text-white">
            CONTACT
          </button>
          <span className="text-white/30 hidden md:inline">|</span>
          <button onClick={onOpenTerms} className="hover:text-white text-[#CBD5E1] transition-colors cursor-pointer">
            TERMS
          </button>
          <button onClick={onOpenPrivacy} className="hover:text-white text-[#CBD5E1] transition-colors cursor-pointer">
            PRIVACY
          </button>
        </div>

        {/* Right: Socials & Copyright */}
        <div className="flex items-center gap-5 text-[#CBD5E1]">
          <span className="text-[11px] font-mono text-[#CBD5E1]">© 2026 IONA SANCTUARY.</span>
        </div>
      </footer>
    </section>
  );
}
