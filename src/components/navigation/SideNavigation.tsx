import { SECTIONS } from '../../lib/constants';

interface SideNavigationProps {
  activeSectionIndex: number;
  onNavigate: (sectionId: string) => void;
}

export default function SideNavigation({
  activeSectionIndex,
  onNavigate,
}: SideNavigationProps) {
  return (
    <aside
      aria-label="Section Navigation"
      className="fixed left-6 sm:left-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 select-none"
    >
      <div className="flex flex-col gap-3">
        {SECTIONS.map((sec, idx) => {
          const isActive = idx === activeSectionIndex;
          return (
            <button
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#20BFD3] cursor-pointer"
            >
              {/* Number and ring */}
              <div className="relative flex items-center justify-center w-6 h-6">
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2 h-2 bg-[#20BFD3] shadow-[0_0_8px_#20BFD3]'
                      : 'bg-white/20 group-hover:bg-white/50'
                  }`}
                />
                {isActive && (
                  <span className="absolute inset-0 rounded-full border border-[#20BFD3] scale-125 animate-pulse" />
                )}
              </div>

              {/* Label */}
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-mono tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-[#7DEAF0] font-semibold' : 'text-[#A9C4CA]/40 group-hover:text-[#A9C4CA]'
                  }`}
                >
                  {sec.num}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-200 ${
                    isActive
                      ? 'text-white opacity-100 translate-x-0'
                      : 'text-[#A9C4CA] opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0'
                  }`}
                >
                  {sec.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
