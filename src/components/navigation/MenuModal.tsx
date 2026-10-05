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
        <div className="font-serif-luxury text-2xl tracking-[0.2em] text-white">
          IONA SANCTUARY
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8D9FA7] hover:text-white transition-colors p-2 rounded-full border border-white/10 hover:border-white/30 cursor-pointer"
          aria-label="Close menu"
        >
          <X className="w-4 h-4" />
          <span className="hidden sm:inline">CLOSE</span>
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto py-8">
        {/* Navigation Column */}
        <div className="lg:col-span-7 flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D9FA7] font-mono mb-3">
            CHAPTERS DIRECTORY
          </span>
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                onNavigate(sec.id);
                onClose();
              }}
              className="group flex items-center justify-between py-2 text-left border-b border-white/[0.06] hover:border-white/30 transition-colors cursor-pointer"
            >
              <div className="flex items-baseline gap-5">
                <span className="text-xs font-mono text-[#8D9FA7]/60 group-hover:text-white transition-colors">
                  {sec.num}
                </span>
                <span className="font-serif-luxury text-2xl sm:text-3xl font-light text-white group-hover:text-[#E5F3F5] group-hover:translate-x-2 transition-all">
                  {sec.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>

        {/* Specifications & Ethos */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8 border-l border-white/[0.08] lg:pl-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8D9FA7] font-mono">
              ELEMENTAL BASELINE
            </span>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <Droplets className="w-4 h-4 text-white/60 mb-2" />
                <div className="text-base font-serif-luxury text-white">8.5 - 8.8</div>
                <div className="text-[10px] text-[#8D9FA7] uppercase tracking-wider font-mono">Natural pH</div>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <Sparkles className="w-4 h-4 text-white/60 mb-2" />
                <div className="text-base font-serif-luxury text-white">-200 mV</div>
                <div className="text-[10px] text-[#8D9FA7] uppercase tracking-wider font-mono">Redox ORP</div>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <ShieldCheck className="w-4 h-4 text-white/60 mb-2" />
                <div className="text-base font-serif-luxury text-white">Crystal Resin</div>
                <div className="text-[10px] text-[#8D9FA7] uppercase tracking-wider font-mono">BPA-Free Vessel</div>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                <Compass className="w-4 h-4 text-white/60 mb-2" />
                <div className="text-base font-serif-luxury text-white">380m</div>
                <div className="text-[10px] text-[#8D9FA7] uppercase tracking-wider font-mono">Aquifer Depth</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-md">
            <h4 className="text-xs font-serif-luxury tracking-widest text-white uppercase">
              Private Concierge & Cellar Allocations
            </h4>
            <p className="mt-2 text-xs text-[#8D9FA7] font-light leading-relaxed">
              Available at select private residences, culinary sanctuaries, and through scheduled reserve allocation.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-[#8D9FA7]">
              <span>concierge@ionawater.com</span>
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
