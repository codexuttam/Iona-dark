import { ArrowRight, Droplets, Sparkles } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-between px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10"
    >
      {/* Left Column Content */}
      <div className="max-w-2xl pointer-events-auto pt-20 sm:pt-0">


        {/* Large Bold Condensed Italic Heading */}
        <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold italic tracking-tight uppercase leading-none text-white">
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            PURE
          </span>
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            WATER.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDFEFF] to-[#7DEAF0]">
            REFINED.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-8 text-base sm:text-lg text-[#A9C4CA] font-normal tracking-wide max-w-md leading-relaxed">
          Alkaline. Ionised. For a clearer you. Crafted from pristine subterranean glacial aquifers, molecularly aligned for optimal cellular hydration.
        </p>

        {/* CTA & Indicators */}
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <MagneticButton
            onClick={onExplore}
            className="group flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#20BFD3] text-[#02080D] font-bold text-xs uppercase tracking-[0.16em] hover:bg-[#7DEAF0] hover:shadow-[0_0_30px_rgba(32,191,211,0.4)] transition-all duration-300"
          >
            <div className="w-5 h-5 rounded-full bg-[#02080D]/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="w-3 h-3 text-[#02080D]" />
            </div>
            <span>EXPLORE IONA</span>
          </MagneticButton>

          <div className="flex items-center gap-5 text-xs text-[#A9C4CA]/70 border-l border-white/10 pl-6">
            <div className="flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-[#20BFD3]" />
              <span className="font-mono text-[11px]">8.5 pH</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#7DEAF0]" />
              <span className="font-mono text-[11px]">ELECTROLYTES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column has the 3D bottle in WebGL space */}
      <div className="hidden lg:block w-1/3" />
    </section>
  );
}
