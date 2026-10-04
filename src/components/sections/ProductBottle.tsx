import { RotateCw, Shield, Sparkles, RefreshCcw } from 'lucide-react';

interface ProductBottleProps {
  onRotateBottle?: () => void;
}

export default function ProductBottle({ onRotateBottle: _onRotateBottle }: ProductBottleProps) {
  return (
    <section
      id="bottle"
      className="relative min-h-screen w-full flex items-center justify-between px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 py-24"
    >
      {/* Left Column Content */}
      <div className="max-w-md pointer-events-auto">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#20BFD3] tracking-widest font-bold">06</span>
          <span className="w-8 h-[1px] bg-[#20BFD3]/40" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#7DEAF0] uppercase">
            OUR BOTTLE
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black italic tracking-tighter uppercase leading-[0.88] text-white">
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            DESIGNED
          </span>
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            FOR A
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDFEFF] to-[#7DEAF0]">
            BRIGHTER TODAY.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-base text-[#A9C4CA] font-normal tracking-wide leading-relaxed">
          A premium bottle for a premium experience. Sleek, sustainable and crafted for everyday hydration. Engineered from ultra-durable medical-grade resin that delivers crystal-glass clarity with lightweight portability.
        </p>

        {/* Interactive 3D drag hint */}
        <div className="mt-8 flex items-center gap-3 p-3.5 rounded-full border border-[#20BFD3]/30 bg-[#04141D]/60 w-fit">
          <RotateCw className="w-4 h-4 text-[#7DEAF0] animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#A9C4CA]">
            CLICK & DRAG TO ROTATE 360°
          </span>
        </div>
      </div>

      {/* Right Column: Technical Leader Line Annotations (Matching Storyboard 06) */}
      <div className="hidden lg:flex flex-col justify-between h-[420px] pointer-events-auto pl-12">
        {/* Top Annotation: 750 ML */}
        <div className="flex items-center gap-4 group">
          <div className="flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#20BFD3] shadow-[0_0_10px_#20BFD3]" />
            <span className="w-16 h-[1px] bg-gradient-to-r from-[#20BFD3] to-transparent" />
          </div>
          <div className="p-3.5 rounded-md border border-white/10 bg-[#06232D]/70 backdrop-blur-md group-hover:border-[#20BFD3] transition-colors">
            <div className="text-xs font-mono font-bold text-[#7DEAF0] tracking-wider uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              750 ML
            </div>
            <div className="text-xs text-white font-medium mt-0.5">Everyday Signature Size</div>
            <div className="text-[11px] text-[#A9C4CA] mt-0.5">Ergonomic fluted aluminum seal</div>
          </div>
        </div>

        {/* Middle Annotation: FOOD-GRADE PET */}
        <div className="flex items-center gap-4 group">
          <div className="flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#20BFD3] shadow-[0_0_10px_#20BFD3]" />
            <span className="w-24 h-[1px] bg-gradient-to-r from-[#20BFD3] to-transparent" />
          </div>
          <div className="p-3.5 rounded-md border border-white/10 bg-[#06232D]/70 backdrop-blur-md group-hover:border-[#20BFD3] transition-colors">
            <div className="text-xs font-mono font-bold text-[#7DEAF0] tracking-wider uppercase flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" />
              PREMIUM RESIN
            </div>
            <div className="text-xs text-white font-medium mt-0.5">Food-Grade BPA/BPS-Free</div>
            <div className="text-[11px] text-[#A9C4CA] mt-0.5">Safe, inert, and impact-resistant</div>
          </div>
        </div>

        {/* Bottom Annotation: RECYCLABLE */}
        <div className="flex items-center gap-4 group">
          <div className="flex items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#20BFD3] shadow-[0_0_10px_#20BFD3]" />
            <span className="w-20 h-[1px] bg-gradient-to-r from-[#20BFD3] to-transparent" />
          </div>
          <div className="p-3.5 rounded-md border border-white/10 bg-[#06232D]/70 backdrop-blur-md group-hover:border-[#20BFD3] transition-colors">
            <div className="text-xs font-mono font-bold text-[#7DEAF0] tracking-wider uppercase flex items-center gap-2">
              <RefreshCcw className="w-3.5 h-3.5" />
              100% RECYCLABLE
            </div>
            <div className="text-xs text-white font-medium mt-0.5">A Step Towards A Cleaner Planet</div>
            <div className="text-[11px] text-[#A9C4CA] mt-0.5">Closed-loop cradle-to-cradle lifecycle</div>
          </div>
        </div>
      </div>
    </section>
  );
}
