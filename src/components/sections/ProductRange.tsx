import { useState } from 'react';
import { ArrowRight, Check, Box } from 'lucide-react';
import { PRODUCT_SIZES } from '../../lib/constants';

interface ProductRangeProps {
  selectedSizeIndex: number;
  onSelectSize: (index: number) => void;
  onReserveCase?: (size: string) => void;
}

export default function ProductRange({
  selectedSizeIndex,
  onSelectSize,
  onReserveCase,
}: ProductRangeProps) {
  const [reservedSize, setReservedSize] = useState<string | null>(null);

  const handleReserve = (size: string) => {
    setReservedSize(size);
    if (onReserveCase) {
      onReserveCase(size);
    }
    setTimeout(() => setReservedSize(null), 3500);
  };

  return (
    <section
      id="range"
      className="relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 py-24"
    >
      {/* Top Header */}
      <div className="max-w-xl pointer-events-auto">
        {/* Subtle Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-white/20" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8D9FA7]">
            CHAPTER VII · THE EDITIONS
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.0]">
          <span className="block font-light text-white/90">
            Curated vessels
          </span>
          <span className="block italic text-[#E5F3F5] font-normal">
            for every
          </span>
          <span className="block font-light text-white/70">
            setting.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-sm sm:text-base text-[#8D9FA7] font-light tracking-wide leading-relaxed">
          Four calibrated silhouettes sharing the same architectural purity. Allocated in limited quarterly releases for private residences and curated hospitality.
        </p>
      </div>

      {/* Product Size Selector Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pointer-events-auto max-w-6xl">
        {PRODUCT_SIZES.map((prod, idx) => {
          const isSelected = selectedSizeIndex === idx;
          const isJustReserved = reservedSize === prod.size;

          return (
            <div
              key={prod.size}
              onClick={() => onSelectSize(idx)}
              className={`p-6 rounded-lg border transition-all duration-300 cursor-pointer flex flex-col justify-between backdrop-blur-md ${
                isSelected
                  ? 'border-white/40 bg-white/[0.05] shadow-[0_8px_30px_rgba(0,0,0,0.5)] translate-y-[-4px]'
                  : 'border-white/10 bg-white/[0.015] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-serif-luxury text-3xl sm:text-4xl font-light text-white tracking-tight">
                    {prod.size}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8D9FA7]">
                    {prod.tag}
                  </span>
                </div>

                <div className="text-xs font-serif-luxury tracking-widest text-white/90 mt-2 uppercase">
                  {prod.name}
                </div>

                <p className="text-xs text-[#8D9FA7] font-light mt-2.5 leading-relaxed">
                  {prod.description}
                </p>

                {/* Specs */}
                <div className="mt-5 pt-4 border-t border-white/10 space-y-1.5 text-[11px] font-mono text-[#8D9FA7]">
                  <div className="flex justify-between">
                    <span>Height:</span>
                    <span className="text-white/80">{prod.specs.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Filled Weight:</span>
                    <span className="text-white/80">{prod.specs.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Closure:</span>
                    <span className="text-white/80">{prod.specs.cap}</span>
                  </div>
                </div>
              </div>

              {/* Reserve Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleReserve(prod.size);
                }}
                className={`mt-6 w-full py-2.5 px-4 rounded-full text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  isJustReserved
                    ? 'bg-white text-[#030709] font-medium'
                    : isSelected
                    ? 'border border-white/40 bg-white/[0.08] text-white hover:bg-white hover:text-[#030709]'
                    : 'border border-white/15 text-[#8D9FA7] hover:border-white/30 hover:text-white'
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
                    <span>REQUEST CASE</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Case Allocation Notice */}
      {reservedSize && (
        <div className="fixed bottom-16 right-8 z-50 p-4 rounded-lg bg-[#081216] border border-white/20 text-white shadow-2xl animate-in slide-in-from-bottom duration-300 pointer-events-auto backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-serif-luxury text-white">
            <Check className="w-4 h-4 text-white/80" />
            <span>Allocation reserved for {reservedSize} Case.</span>
          </div>
          <p className="text-[11px] text-[#8D9FA7] font-light mt-1">
            Our private concierge team will reach out with your batch delivery details.
          </p>
        </div>
      )}
    </section>
  );
}
