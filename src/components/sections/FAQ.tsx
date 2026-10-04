import { useState } from 'react';
import { Plus, Minus, ArrowRight, Instagram, Youtube, Linkedin, Globe } from 'lucide-react';
import { FAQS } from '../../lib/constants';
import MagneticButton from '../ui/MagneticButton';

interface FAQProps {
  onExperience: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function FAQ({ onExperience, onNavigate }: FAQProps) {
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
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#20BFD3] tracking-widest font-bold">08</span>
          <span className="w-8 h-[1px] bg-[#20BFD3]/40" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#7DEAF0] uppercase">
            EDITORIAL INQUIRIES
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.88] text-white">
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            QUESTIONS
          </span>
        </h2>

        {/* FAQ Accordion List (Matching Storyboard 08) */}
        <div className="mt-12 border-t border-white/10 divide-y divide-white/10">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="py-5 group">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#7DEAF0] transition-colors pr-6">
                    {item.q}
                  </span>
                  <div className="p-1 rounded-full border border-white/10 group-hover:border-[#20BFD3] text-[#7DEAF0] transition-colors shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 text-xs sm:text-sm text-[#A9C4CA] leading-relaxed pr-8 animate-in fade-in duration-300">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FINAL SECTION: Bring everything back to calm (PDF page 19) */}
      <div className="mt-32 max-w-4xl w-full pointer-events-auto mx-auto text-center flex flex-col items-center py-16 border-t border-white/10">
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#20BFD3] mb-4">
          THE ULTIMATE HYDRATION
        </span>

        <h3 className="font-display text-6xl sm:text-8xl font-black italic tracking-tight uppercase leading-[0.9] text-white">
          PURE WATER.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDFEFF] to-[#7DEAF0]">
            CLEARER TOMORROWS.
          </span>
        </h3>

        <p className="mt-6 text-sm sm:text-base text-[#A9C4CA] max-w-md">
          Step into a state of optimal hydration. Discover why elite athletes and discerning culinary masters choose IONA.
        </p>

        <div className="mt-10">
          <MagneticButton
            onClick={onExperience}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#20BFD3] text-[#02080D] font-bold text-xs uppercase tracking-[0.18em] hover:bg-[#7DEAF0] hover:shadow-[0_0_35px_rgba(32,191,211,0.5)] transition-all duration-300"
          >
            <span>EXPERIENCE IONA</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>

      {/* CINEMATIC FOOTER (Matching PDF Page 19 & Storyboard 08) */}
      <footer className="mt-20 pt-8 border-t border-white/10 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#A9C4CA]">
        {/* Left: Brand */}
        <div className="flex items-center gap-6">
          <span className="font-display text-2xl font-black italic tracking-wider text-white">
            IONA
          </span>
          <span className="text-white/20">|</span>
          <span className="text-[11px] font-mono text-[#A9C4CA]/70">
            PREMIUM ALKALINE & IONISED WATER
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] tracking-wider uppercase">
          <button onClick={() => onNavigate('philosophy')} className="hover:text-white transition-colors cursor-pointer">
            ABOUT
          </button>
          <button onClick={() => onNavigate('alkaline')} className="hover:text-white transition-colors cursor-pointer">
            THE WATER
          </button>
          <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors cursor-pointer">
            PROCESS
          </button>
          <button onClick={() => onNavigate('range')} className="hover:text-white transition-colors cursor-pointer">
            PRODUCT
          </button>
          <button onClick={() => onNavigate('questions')} className="hover:text-white transition-colors cursor-pointer">
            CONTACT
          </button>
        </div>

        {/* Right: Socials & Copyright */}
        <div className="flex items-center gap-5 text-white/60">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-[#7DEAF0] transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="hover:text-[#7DEAF0] transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#7DEAF0] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <span className="text-white/20">·</span>
          <span className="text-[11px] font-mono">© 2026 IONA. All rights reserved.</span>
        </div>
      </footer>
    </section>
  );
}
