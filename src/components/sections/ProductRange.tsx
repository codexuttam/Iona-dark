import { useState } from 'react';
import { ArrowRight, Check, Box } from 'lucide-react';
import { PRODUCT_SIZES } from '../../lib/constants';

interface ProductRangeProps {
  selectedSizeIndex: number;
  onSelectSize: (index: number) => void;
}

export default function ProductRange({
  selectedSizeIndex,
  onSelectSize,
}: ProductRangeProps) {
  const [reservedSize, setReservedSize] = useState<string | null>(null);

  const handleReserve = (size: string) => {
    setReservedSize(size);
    setTimeout(() => setReservedSize(null), 3500);
  };

  return (
    <section
      id="range"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 py-24"
    >
      {/* Top Header */}
      <div className="max-w-xl pointer-events-auto">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#20BFD3] tracking-widest font-bold">07</span>
          <span className="w-8 h-[1px] bg-[#20BFD3]/40" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#7DEAF0] uppercase">
            PRODUCT RANGE
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.88] text-white">
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            PURE
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDFEFF] to-[#7DEAF0]">
            BY DESIGN.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-base sm:text-lg text-[#A9C4CA] font-normal tracking-wide leading-relaxed">
          Available in multiple sizes for every need. From daily high-tempo commutes to peak endurance performance, every vessel is sculpted to preserve pristine hydro-molecular balance.
        </p>
      </div>

      {/* Product Size Selector Cards (Matching Storyboard 07 with 250ML, 500ML, 1L) */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pointer-events-auto max-w-6xl">
        {PRODUCT_SIZES.map((prod, idx) => {
          const isSelected = selectedSizeIndex === idx;
          const isJustReserved = reservedSize === prod.size;

          return (
            <div
              key={prod.size}
              onClick={() => onSelectSize(idx)}
              className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-[#20BFD3] bg-[#06232D]/90 shadow-[0_0_25px_rgba(32,191,211,0.25)] translate-y-[-4px]'
                  : 'border-white/10 bg-[#04141D]/50 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl sm:text-4xl font-black italic text-white">
                    {prod.size}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#20BFD3] px-2 py-0.5 rounded bg-[#20BFD3]/10 border border-[#20BFD3]/30">
                    {prod.tag}
                  </span>
                </div>

                <div className="text-sm font-semibold text-[#7DEAF0] mt-2">
                  {prod.name}
                </div>

                <p className="text-xs text-[#A9C4CA] mt-2 leading-relaxed">
                  {prod.description}
                </p>

                {/* Specs */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5 text-[11px] font-mono text-[#A9C4CA]/80">
                  <div className="flex justify-between">
                    <span>Height:</span>
                    <span className="text-white">{prod.specs.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Filled Weight:</span>
                    <span className="text-white">{prod.specs.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cap Interface:</span>
                    <span className="text-white">{prod.specs.cap}</span>
                  </div>
                </div>
              </div>

              {/* Reserve Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleReserve(prod.size);
                }}
                className={`mt-6 w-full py-2.5 px-4 rounded-md text-xs font-bold font-mono tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isJustReserved
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : isSelected
                    ? 'bg-[#20BFD3] text-[#02080D] hover:bg-[#7DEAF0]'
                    : 'border border-white/20 text-white hover:border-[#20BFD3] hover:text-[#7DEAF0]'
                }`}
              >
                {isJustReserved ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>ALLOCATION REQUESTED</span>
                  </>
                ) : (
                  <>
                    <Box className="w-3.5 h-3.5" />
                    <span>RESERVE CASE</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Case Allocation Notice */}
      {reservedSize && (
        <div className="fixed bottom-16 right-8 z-50 p-4 rounded-lg bg-[#06232D] border border-[#20BFD3] text-white shadow-2xl animate-in slide-in-from-bottom duration-300 pointer-events-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7DEAF0]">
            <Check className="w-4 h-4 text-[#20BFD3]" />
            <span>Allocation reserved for {reservedSize} Case (12 Bottles).</span>
          </div>
          <p className="text-[11px] text-[#A9C4CA] mt-1">
            Our private cellar logistics team will confirm your batch allocation.
          </p>
        </div>
      )}
    </section>
  );
}
