import { Shield, Sparkles, RefreshCcw } from 'lucide-react';

interface ProductBottleProps {
  onRotateBottle?: () => void;
}

export default function ProductBottle({ onRotateBottle: _onRotateBottle }: ProductBottleProps) {
  return (
    <section
      id="bottle"
      className="relative min-h-screen w-full flex items-center justify-between px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 py-28"
    >
      {/* Left Column Content */}
      <div className="max-w-md pointer-events-auto">
        {/* Subtle Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-white/20" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8D9FA7]">
            CHAPTER VI · THE VESSEL
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.0]">
          <span className="block font-light text-white/90">
            An architectural
          </span>
          <span className="block italic text-[#E5F3F5] font-normal">
            object of
          </span>
          <span className="block font-light text-white/70">
            desire.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-sm sm:text-base text-[#8D9FA7] font-light tracking-wide leading-relaxed">
          Sculpted for curated desks, bedside marble, and quiet sanctuaries. Delivering the optical refraction of hand-blown crystal glass with modern featherweight durability.
        </p>

        <div className="mt-8 pl-5 border-l border-white/15">
          <p className="text-xs text-[#8D9FA7] font-light">
            Crowned with a precision brushed platinum closure that preserves carbon-neutral micro-pressures.
          </p>
        </div>
      </div>

      {/* Right Column: Architectural Annotations */}
      <div className="hidden lg:flex flex-col justify-between h-[380px] pointer-events-auto pl-12">
        {/* Top Annotation */}
        <div className="flex items-center gap-4 group">
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span className="w-16 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-md">
            <div className="text-xs font-serif-luxury text-white tracking-widest uppercase">
              BRUSHED PLATINUM CROWN
            </div>
            <div className="text-[11px] text-[#8D9FA7] font-light mt-1">Hermetic precision twist seal</div>
          </div>
        </div>

        {/* Middle Annotation */}
        <div className="flex items-center gap-4 group">
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span className="w-20 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-md">
            <div className="text-xs font-serif-luxury text-white tracking-widest uppercase">
              CRYSTAL-GRADE RESIN
            </div>
            <div className="text-[11px] text-[#8D9FA7] font-light mt-1">High-transmission, BPA/BPS-free clarity</div>
          </div>
        </div>

        {/* Bottom Annotation */}
        <div className="flex items-center gap-4 group">
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span className="w-14 h-[1px] bg-gradient-to-r from-white/30 to-transparent" />
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-md">
            <div className="text-xs font-serif-luxury text-white tracking-widest uppercase">
              MONOLITHIC BALANCE
            </div>
            <div className="text-[11px] text-[#8D9FA7] font-light mt-1">Weighted base calibrated for stillness</div>
          </div>
        </div>
      </div>
    </section>
  );
}
