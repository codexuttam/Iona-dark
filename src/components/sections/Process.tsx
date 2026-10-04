import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { PROCESS_STAGES } from '../../lib/constants';

export default function Process() {
  const [selectedStage, setSelectedStage] = useState(0);

  const stageImages = [
    '/src/assets/images/artesian_source_aquifer_1791133528234.jpg',
    '/src/assets/images/water_droplet_macro_1791133515454.jpg',
    '/src/assets/images/underwater_ambient_env_1791133503549.jpg',
    '/src/assets/images/water_droplet_macro_1791133515454.jpg',
  ];

  return (
    <section
      id="process"
      className="relative min-h-screen w-full flex items-center justify-between px-6 sm:px-12 lg:px-24 pointer-events-none select-none z-10 py-24"
    >
      {/* Left Column Content */}
      <div className="max-w-xl pointer-events-auto">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#20BFD3] tracking-widest font-bold">05</span>
          <span className="w-8 h-[1px] bg-[#20BFD3]/40" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#7DEAF0] uppercase">
            THE IONA PROCESS
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.88] text-white">
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            FROM
          </span>
          <span className="block hover:text-[#7DEAF0] transition-colors duration-300">
            NATURE
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDFEFF] to-[#7DEAF0]">
            TO YOU.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-8 text-base sm:text-lg text-[#A9C4CA] font-normal tracking-wide leading-relaxed">
          A careful journey to bring you pure, alkaline and ionised water. From deep granite reservoirs through catalytic refinement, each molecule is calibrated for pristine physiological resonance.
        </p>

        {/* Interactive Active Stage Expanded Card */}
        <div className="mt-8 p-5 rounded-lg border border-[#20BFD3]/30 bg-[#04141D]/80 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#20BFD3]/20 text-[#7DEAF0] border border-[#20BFD3]/40">
                ACTIVE STAGE {PROCESS_STAGES[selectedStage].step}
              </span>
              <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                {PROCESS_STAGES[selectedStage].name}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#A9C4CA]">
              {PROCESS_STAGES[selectedStage].depth}
            </span>
          </div>

          <p className="text-xs text-[#A9C4CA] leading-relaxed">
            {PROCESS_STAGES[selectedStage].description}
          </p>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#7DEAF0]">
            <span className="flex items-center gap-1.5 text-[11px] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#20BFD3]" />
              Continuous Quality Calibration
            </span>
            <button
              onClick={() => setSelectedStage((prev) => (prev + 1) % PROCESS_STAGES.length)}
              className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white hover:text-[#7DEAF0] transition-colors cursor-pointer"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: 4 Illuminated Circular Stage Portals (Matching Storyboard 05) */}
      <div className="hidden lg:flex flex-col gap-5 pointer-events-auto max-w-sm">
        {PROCESS_STAGES.map((stage, idx) => {
          const isCurrent = selectedStage === idx;
          return (
            <div
              key={stage.step}
              onClick={() => setSelectedStage(idx)}
              className={`flex items-center gap-4 p-3.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                isCurrent
                  ? 'border-[#20BFD3] bg-[#06232D]/80 shadow-[0_0_20px_rgba(32,191,211,0.2)] translate-x-[-6px]'
                  : 'border-white/10 bg-[#04141D]/40 hover:border-white/20'
              }`}
            >
              {/* Circular Portal Thumbnail */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#20BFD3]/50 shrink-0 group">
                <img
                  src={stageImages[idx]}
                  alt={stage.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#02080D]/30" />
                <div className="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold text-white drop-shadow">
                  {stage.step}
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold font-mono tracking-wider text-white uppercase">
                    {stage.step} {stage.name}
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isCurrent ? 'text-[#7DEAF0] translate-x-1' : 'text-white/20'
                    }`}
                  />
                </div>
                <div className="text-[11px] text-[#A9C4CA] line-clamp-1 mt-0.5">
                  {stage.description}
                </div>
              </div>
            </div>
          );
        })}

        <div className="p-3.5 rounded-sm border border-white/10 bg-[#02080D]/60 flex items-center gap-3 text-xs text-[#A9C4CA]">
          <Layers className="w-4 h-4 text-[#20BFD3] shrink-0" />
          <span>Every bottle undergoes hermetic micro-batch scanning prior to seal release.</span>
        </div>
      </div>
    </section>
  );
}
