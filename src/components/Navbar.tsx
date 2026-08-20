import React from 'react';
import { 
  Presentation, 
  LayoutGrid, 
  StickyNote, 
  Bot, 
  Code2, 
  Download, 
  Sparkles,
  Sliders,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface NavbarProps {
  onOpenAppsScript: () => void;
  onExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAppsScript,
  onExport,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-purple-100 text-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Branding & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 bg-[#51186B] rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 border border-purple-900 overflow-hidden p-0.5">
            <svg viewBox="0 0 100 100" className="w-full h-full select-none" aria-label="Logo Suburbia">
              {/* Magenta vertical oval pill */}
              <rect x="18" y="8" width="64" height="84" rx="32" fill="#E3007B" />
              {/* Suburbia White S ribbon emblem */}
              <path 
                d="M 59 26 C 48 28.5, 38 36, 38 45 C 38 53, 62 52.5, 62 61.5 C 62 69, 50 74, 38 73 C 48 71, 63 64.5, 63 54.5 C 63 45, 38 46.5, 38 37 C 38 30.5, 49 25.5, 59 26 Z" 
                fill="#FFFFFF" 
              />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-[#51186B] truncate">
                Test Línea Mínima (SBB)
              </h1>
              <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-fuchsia-50 text-[#E3007B] border border-fuchsia-200">
                Liverpool / Suburbia
              </span>
            </div>
            <p className="text-xs text-slate-500 truncate hidden sm:block">
              Tablero Interactivo • Propuesta $2,000 → $4,000 MXN
            </p>
          </div>
        </div>

        {/* Center Badge: Tablero Canvas */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 text-[#51186B] border border-purple-100 text-xs font-bold">
          <LayoutGrid className="w-4 h-4 text-[#E3007B]" />
          <span>Tablero de Control</span>
        </div>

        {/* Right: Actions (AppsScript, Export) */}
        <div className="flex items-center gap-2">
          
          {/* Google AppsScript Deploy Button */}
          <button
            onClick={onOpenAppsScript}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/80 transition-all shadow-xs"
            title="Google AppsScript & Exportar"
          >
            <Code2 className="w-4 h-4 text-emerald-600" />
            <span className="hidden xl:inline">AppsScript</span>
          </button>

          {/* Export / Print Button */}
          <button
            onClick={onExport}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-50 text-purple-900 hover:bg-purple-100 border border-purple-200/80 transition-all flex items-center gap-1.5"
            title="Exportar Resumen"
          >
            <Download className="w-4 h-4 text-purple-800" />
            <span className="hidden md:inline">Exportar</span>
          </button>

        </div>

      </div>
    </header>
  );
};
