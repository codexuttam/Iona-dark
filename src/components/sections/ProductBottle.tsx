import { Shield, Sparkles, RefreshCcw } from 'lucide-react';

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
        {/* Heading */}
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold italic tracking-tight uppercase leading-none text-white">
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
