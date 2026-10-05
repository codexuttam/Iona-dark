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

        {/* Heading */}
        <h2 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.0] text-luminous-heading">
          <span className="block font-light text-white">
            Curated vessels
          </span>
          <span className="block italic text-[#E8F8FA] font-normal">
            for every
          </span>
          <span className="block font-light text-white/95">
            setting.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-sm sm:text-base text-[#E2E8F0] font-light tracking-wide leading-relaxed text-editorial-body">
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
              className={`p-6 rounded-lg transition-all duration-300 cursor-pointer flex flex-col justify-between card-luxury-glass ${
                isSelected
                  ? 'border-white/40 shadow-[0_12px_36px_rgba(0,0,0,0.85)] translate-y-[-4px] ring-1 ring-white/20'
                  : 'hover:border-white/30'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-serif-luxury text-3xl sm:text-4xl font-light text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {prod.size}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#CBD5E1] font-medium">
                    {prod.tag}
                  </span>
                </div>

                <div className="text-xs font-serif-luxury tracking-widest text-white mt-2 uppercase font-medium">
                  {prod.name}
                </div>

                <p className="text-xs text-[#E2E8F0] font-light mt-2.5 leading-relaxed">
                  {prod.description}
                </p>

                {/* Specs */}
                <div className="mt-5 pt-4 border-t border-white/15 space-y-1.5 text-[11px] font-mono text-[#CBD5E1]">
                  <div className="flex justify-between">
                    <span>Height:</span>
                    <span className="text-white font-medium">{prod.specs.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Filled Weight:</span>
                    <span className="text-white font-medium">{prod.specs.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Closure:</span>
                    <span className="text-white font-medium">{prod.specs.cap}</span>
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
                    ? 'border border-white/40 bg-white/[0.12] text-white hover:bg-white hover:text-[#030709]'
                    : 'border border-white/25 text-[#CBD5E1] hover:border-white/40 hover:text-white'
                }`}
              >
                {isJustReserved ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>ORDER REQUESTED</span>
                  </>
                ) : (
                  <>
                    <Box className="w-3.5 h-3.5" />
                    <span>ORDER CASE</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Case Allocation Notice */}
      {reservedSize && (
        <div className="fixed bottom-16 right-8 z-50 p-4 rounded-lg card-luxury-glass text-white shadow-2xl animate-in slide-in-from-bottom duration-300 pointer-events-auto">
          <div className="flex items-center gap-2 text-xs font-serif-luxury text-white font-medium">
            <Check className="w-4 h-4 text-white" />
            <span>Order requested for {reservedSize} Case.</span>
          </div>
          <p className="text-xs text-[#CBD5E1] font-light mt-1">
            Our team will reach out with your order and delivery details.
          </p>
        </div>
      )}
    </section>
  );
}
