import { X, ArrowRight, ShieldCheck, Droplets, Sparkles, Compass } from 'lucide-react';
import { SECTIONS } from '../../lib/constants';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function MenuModal({ isOpen, onClose, onNavigate }: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#02080D]/95 backdrop-blur-2xl text-white p-8 sm:p-16 animate-in fade-in duration-300"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="font-display text-2xl font-black italic tracking-wider text-white">
          IONA ARCHIVES
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A9C4CA] hover:text-[#7DEAF0] transition-colors p-2 rounded-full border border-white/10 hover:border-[#20BFD3] cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
          <span className="hidden sm:inline">CLOSE</span>
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto py-8">
        {/* Navigation Column */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#20BFD3] font-mono mb-2">
            EXPERIENCE DIRECTORY
          </span>
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                onNavigate(sec.id);
                onClose();
              }}
              className="group flex items-center justify-between py-2 text-left border-b border-white/[0.06] hover:border-[#20BFD3]/50 transition-colors cursor-pointer"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#A9C4CA]/50 group-hover:text-[#7DEAF0]">
                  {sec.num}
                </span>
                <span className="font-display text-2xl sm:text-4xl font-extrabold italic uppercase tracking-tight text-white group-hover:text-[#7DEAF0] group-hover:translate-x-2 transition-all">
                  {sec.title}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#20BFD3] group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>

        {/* Specifications & Ethos */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8 border-l border-white/[0.08] lg:pl-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#20BFD3] font-mono">
              SPECIFICATION ARCHITECTURE
            </span>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-sm border border-white/10 bg-[#04141D]/40">
                <Droplets className="w-5 h-5 text-[#7DEAF0] mb-2" />
                <div className="text-lg font-bold font-mono text-white">8.5 - 8.8</div>
                <div className="text-xs text-[#A9C4CA] uppercase tracking-wider">Calibrated pH</div>
              </div>
              <div className="p-4 rounded-sm border border-white/10 bg-[#04141D]/40">
                <Sparkles className="w-5 h-5 text-[#20BFD3] mb-2" />
                <div className="text-lg font-bold font-mono text-white">-150 mV</div>
                <div className="text-xs text-[#A9C4CA] uppercase tracking-wider">Redox ORP</div>
              </div>
              <div className="p-4 rounded-sm border border-white/10 bg-[#04141D]/40">
                <ShieldCheck className="w-5 h-5 text-[#7DEAF0] mb-2" />
                <div className="text-lg font-bold font-mono text-white">100%</div>
                <div className="text-xs text-[#A9C4CA] uppercase tracking-wider">Recyclable PET</div>
              </div>
              <div className="p-4 rounded-sm border border-white/10 bg-[#04141D]/40">
                <Compass className="w-5 h-5 text-[#20BFD3] mb-2" />
                <div className="text-lg font-bold font-mono text-white">380m</div>
                <div className="text-xs text-[#A9C4CA] uppercase tracking-wider">Artesian Depth</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-sm border border-white/10 bg-[#06232D]/30">
            <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
              Private Concierge & Stockists
            </h4>
            <p className="mt-2 text-xs text-[#A9C4CA] leading-relaxed">
              Available at select luxury hospitality partners, wellness sanctuaries, and via direct seasonal allocation.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-[#7DEAF0]">
              <span>reserve@ionawater.com</span>
              <span>·</span>
              <span>+1 (800) 466-2928</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/10 text-xs text-[#A9C4CA]/60">
        <div>© 2026 IONA WATER CO. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-6 mt-2 sm:mt-0 font-mono">
          <span>LAT 46.2044° N</span>
          <span>·</span>
          <span>SUBTERRANEAN AQUIFER RESERVE</span>
        </div>
      </div>
    </div>
  );
}
