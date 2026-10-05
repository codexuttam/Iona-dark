import { ChevronDown } from 'lucide-react';

interface ProgressBarProps {
  scrollProgress: number;
  onScrollNext: () => void;
}

export default function ProgressBar({ scrollProgress, onScrollNext }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, Math.round(scrollProgress * 100)));

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 px-6 sm:px-12 py-4 flex items-center justify-between text-xs text-[#A9C4CA] pointer-events-none select-none">
      {/* Left: Scroll Prompt */}
      <div className="pointer-events-auto flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#8D9FA7]">
        <button
          onClick={onScrollNext}
          className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
        >
          <span>SCROLL TO ADVANCE</span>
          <ChevronDown className="w-3.5 h-3.5 text-white/60 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Center: Thin Progress Bar with Subtle Dot */}
      <div className="pointer-events-auto w-36 sm:w-64 relative flex items-center h-4">
        {/* Track */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-visible">
          {/* Fill */}
          <div
            className="h-full bg-white transition-all duration-100"
            style={{ width: `${percentage}%` }}
          />
          {/* Subtle dot */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white transition-all duration-75"
            style={{ left: `calc(${percentage}% - 3px)` }}
          />
        </div>
      </div>

      {/* Right: Percent indicator */}
      <div className="font-mono text-[10px] text-[#8D9FA7] tracking-wider tabular-nums">
        {String(percentage).padStart(2, '0')}%
      </div>
    </footer>
  );
}
