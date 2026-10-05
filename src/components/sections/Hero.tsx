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
      <div className="max-w-2xl pointer-events-auto pt-24 sm:pt-0">

        {/* Timeless Editorial Luxury Heading */}
        <h1 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[0.98]">
          <span className="block font-light text-white/90">
            Water in its
          </span>
          <span className="block italic text-[#E5F3F5] font-normal">
            purest elemental
          </span>
          <span className="block font-light text-white/70">
            stillness.
          </span>
        </h1>

        {/* Supporting Editorial Story Copy */}
        <p className="mt-8 text-sm sm:text-base text-[#8D9FA7] font-light tracking-wide max-w-md leading-relaxed">
          Born from prehistoric glacial snowpack, filtered through granite strata 380 meters beneath the surface. Sourced for a discerning audience who view hydration not as a utility, but as an intentional ritual.
        </p>

        {/* Minimalist Tactile CTA & Elemental Specs */}
        <div className="mt-12 flex flex-wrap items-center gap-8">
          <button
            onClick={onExplore}
            className="group flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-md text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#030709] hover:border-white transition-all duration-500 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          >
            <span>DISCOVER THE STORY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#030709] transition-colors" />
          </button>

          <div className="flex items-center gap-6 text-[11px] text-[#8D9FA7]/70 font-mono tracking-wider border-l border-white/10 pl-6">
            <div>
              <span className="block text-white text-xs font-serif-luxury text-[14px]">380m</span>
              <span className="text-[9px] text-[#8D9FA7] uppercase tracking-widest">Aquifer Depth</span>
            </div>
            <div className="w-[1px] h-6 bg-white/10" />
            <div>
              <span className="block text-white text-xs font-serif-luxury text-[14px]">pH 8.5</span>
              <span className="text-[9px] text-[#8D9FA7] uppercase tracking-widest">Naturally Balanced</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column has the 3D bottle in WebGL space */}
      <div className="hidden lg:block w-1/3" />
    </section>
  );
}
