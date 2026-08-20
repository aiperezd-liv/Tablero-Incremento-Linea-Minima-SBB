import React, { useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Layers,
  FileText
} from 'lucide-react';
import { ExecutiveSummaryBlock } from './blocks/ExecutiveSummaryBlock';
import { CreditLineMetricsBlock } from './blocks/CreditLineMetricsBlock';
import { BadRatesChartBlock } from './blocks/BadRatesChartBlock';
import { RentabilidadBlock } from './blocks/RentabilidadBlock';
import { PilotingStrategyBlock } from './blocks/PilotingStrategyBlock';
import { AnexoBlock } from './blocks/AnexoBlock';
import { DollarSign } from 'lucide-react';

interface StakeholderFlowProps {
  currentStep: number;
  totalSteps: number;
  onNavigate: (step: number) => void;
}

export const StakeholderFlow: React.FC<StakeholderFlowProps> = ({
  currentStep,
  totalSteps,
  onNavigate
}) => {
  // Keyboard arrow listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentStep < totalSteps) onNavigate(currentStep + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentStep > 1) onNavigate(currentStep - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, totalSteps, onNavigate]);

  const slideTitles = [
    { num: 1, title: 'Resumen', icon: Target },
    { num: 2, title: 'Estrategia', icon: Layers },
    { num: 3, title: 'Impacto Financiero', icon: TrendingUp },
    { num: 4, title: 'Bad Rates', icon: ShieldCheck },
    { num: 5, title: 'Rentabilidad', icon: DollarSign },
    { num: 6, title: 'Anexo', icon: FileText },
  ];

  return (
    <div className="flex flex-col h-full gap-4">
      
      {/* Top Slide Navigation Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-3 shadow-sm flex flex-wrap items-center justify-between gap-3">
        
        {/* Slide Selector Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full no-scrollbar">
          {slideTitles.map((slide) => {
            const Icon = slide.icon;
            const isActive = slide.num === currentStep;
            return (
              <button
                key={slide.num}
                onClick={() => onNavigate(slide.num)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#51186B] text-white shadow-sm'
                    : 'bg-purple-50/60 text-purple-950 hover:bg-purple-100/80 border border-purple-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{slide.num}. {slide.title}</span>
              </button>
            );
          })}
        </div>

        {/* Prev / Next controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate(currentStep - 1)}
            disabled={currentStep <= 1}
            className="p-2 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-950 border border-purple-200/80 disabled:opacity-40 disabled:hover:bg-purple-50 transition-all text-xs flex items-center gap-1 font-bold"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          <span className="text-xs font-mono font-bold text-slate-600 px-2">
            {currentStep} / {totalSteps}
          </span>

          <button
            onClick={() => onNavigate(currentStep + 1)}
            disabled={currentStep >= totalSteps}
            className="p-2 px-3 rounded-xl bg-[#51186B] hover:bg-[#3d1151] text-white disabled:opacity-40 disabled:hover:bg-[#51186B] transition-all text-xs flex items-center gap-1 font-bold shadow-sm"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Main Slide Content Area */}
      <div className="w-full flex-1 min-h-[500px] flex flex-col justify-stretch">
        {currentStep === 1 && <ExecutiveSummaryBlock />}
        {currentStep === 2 && <PilotingStrategyBlock />}
        {currentStep === 3 && <CreditLineMetricsBlock />}
        {currentStep === 4 && <BadRatesChartBlock />}
        {currentStep === 5 && <RentabilidadBlock />}
        {currentStep === 6 && <AnexoBlock />}
      </div>

      {/* Slide Navigation Progress Footer */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between text-xs text-slate-600">
        <span className="flex items-center gap-2 font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          SBB Departamental • Presentación Activa
        </span>

        <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
          Usa las flechas ← → del teclado para cambiar de lámina
        </span>
      </div>

    </div>
  );
};
