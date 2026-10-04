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
      <div className="pointer-events-auto flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#A9C4CA]/80">
        <button
          onClick={onScrollNext}
          className="flex items-center gap-2 hover:text-[#7DEAF0] transition-colors cursor-pointer group"
        >
          <span>SCROLL TO DISCOVER</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#20BFD3] group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Center: Thin Progress Bar with Glowing Dot */}
      <div className="pointer-events-auto w-36 sm:w-64 relative flex items-center h-4">
        {/* Track */}
        <div className="w-full h-[1px] bg-white/10 relative overflow-visible">
          {/* Fill */}
          <div
            className="h-full bg-gradient-to-r from-[#083E50] via-[#20BFD3] to-[#7DEAF0]"
            style={{ width: `${percentage}%` }}
          />
          {/* Glowing dot */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#7DEAF0] shadow-[0_0_8px_#20BFD3] transition-all duration-75"
            style={{ left: `calc(${percentage}% - 4px)` }}
          />
        </div>
      </div>

      {/* Right: Percent indicator */}
      <div className="font-mono text-[11px] text-[#A9C4CA]/60 tabular-nums">
        {String(percentage).padStart(2, '0')}%
      </div>
    </footer>
  );
}
