import React, { useState } from 'react';
import { Sliders, RefreshCw, AlertCircle, CheckCircle2, DollarSign, TrendingUp, ShieldAlert } from 'lucide-react';

export const ScenarioSimulatorBlock: React.FC = () => {
  const [proposedLine, setProposedLine] = useState<number>(4000);
  const [stressFactor, setStressFactor] = useState<number>(30); // 30% stress default
  const [includeRiskLevel5, setIncludeRiskLevel5] = useState<boolean>(true);

  // Dynamic calculations based on inputs
  const currentTotalLine = 10478;
  const lineDeltaRatio = (proposedLine - 2000) / 2000; // 1.0 when proposedLine = 4000
  
  // Base projected increase is +5.30% ($11,033) when line = 4000 and Level 5 included
  let projectedIncreasePct = 5.30 * lineDeltaRatio;
  if (!includeRiskLevel5) {
    projectedIncreasePct *= 0.92; // Slightly smaller if Level 5 excluded
  }

  const projectedTotalLine = Math.round(currentTotalLine * (1 + projectedIncreasePct / 100));

  // Bad Rate simulations
  const baseExpectedEntryBadRate = 5.36; // HIT
  const baseExpectedNoHitEntryBadRate = 7.11; // NO HIT

  const simulatedHitBadRate = Number((baseExpectedEntryBadRate * (1 + (stressFactor - 30) / 100)).toFixed(2));
  const simulatedNoHitBadRate = Number((baseExpectedNoHitEntryBadRate * (1 + (stressFactor - 30) / 100)).toFixed(2));

  const hitTargetMax = 7.32;
  const noHitTargetMax = 8.44;

  const isHitSafe = simulatedHitBadRate <= hitTargetMax;
  const isNoHitSafe = simulatedNoHitBadRate <= noHitTargetMax;
  const isOverallSafe = isHitSafe && isNoHitSafe;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-slate-900 shadow-sm flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-purple-100">
        <div>
          <h3 className="text-base font-bold text-[#51186B] flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#E3007B]" />
            Simulador Interactivo de Sensibilidad
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Modelación en tiempo real para evaluar escenarios alternativos con Stakeholders
          </p>
        </div>
        <button
          onClick={() => {
            setProposedLine(4000);
            setStressFactor(30);
            setIncludeRiskLevel5(true);
          }}
          className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#51186B] transition-all text-xs font-bold flex items-center gap-1 border border-purple-200/80"
          title="Restablecer valores base del test"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#E3007B]" /> Reset
        </button>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        
        {/* Slider 1: Line Mínima Propuesta */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <label className="font-bold text-slate-800">Línea Mínima a Probar ($)</label>
            <span className="font-mono font-extrabold text-[#51186B] text-sm">${proposedLine.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={2500}
            max={6000}
            step={250}
            value={proposedLine}
            onChange={(e) => setProposedLine(Number(e.target.value))}
            className="w-full accent-[#51186B] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-medium">
            <span>$2,500</span>
            <span>$4,000 (Propuesta)</span>
            <span>$6,000</span>
          </div>
        </div>

        {/* Slider 2: Factor de Estrés de Morosidad */}
        <div className="p-4 rounded-2xl bg-fuchsia-50/40 border border-fuchsia-100 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <label className="font-bold text-slate-800">Factor de Estrés de Mora (%)</label>
            <span className="font-mono font-extrabold text-[#E3007B] text-sm">+{stressFactor}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={60}
            step={5}
            value={stressFactor}
            onChange={(e) => setStressFactor(Number(e.target.value))}
            className="w-full accent-[#E3007B] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-medium">
            <span>0% (Base)</span>
            <span>30% (Escenario Test)</span>
            <span>60% (Estrés Alto)</span>
          </div>
        </div>

      </div>

      {/* Toggle: Include Risk Level 5 */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5 flex items-center justify-between text-xs">
        <span className="font-bold text-slate-800">¿Incluir Nivel de Riesgo 5 (Muy Alto)?</span>
        <button
          onClick={() => setIncludeRiskLevel5(!includeRiskLevel5)}
          className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
            includeRiskLevel5
              ? 'bg-rose-50 text-rose-800 border border-rose-200/80'
              : 'bg-emerald-50 text-emerald-800 border border-emerald-200/80'
          }`}
        >
          {includeRiskLevel5 ? 'Incluido en Piloto' : 'Excluido (Apagado preventivo)'}
        </button>
      </div>

      {/* Simulated Results Output */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        
        {/* Line Output */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <span className="text-[10px] uppercase text-slate-500 font-bold block">
            Línea Promedio General Proyectada
          </span>
          <span className="text-xl font-extrabold text-slate-900 font-mono block mt-1">${projectedTotalLine.toLocaleString()}</span>
          <span className="text-[11px] text-emerald-600 block font-mono font-bold mt-0.5">
            {projectedIncreasePct >= 0 ? '+' : ''}{projectedIncreasePct.toFixed(2)}% vs $10,478
          </span>
        </div>

        {/* HIT Bad Rate Output */}
        <div className={`p-4 rounded-2xl bg-slate-50 border ${isHitSafe ? 'border-emerald-200/80' : 'border-rose-200/80'}`}>
          <span className="text-[10px] uppercase text-slate-500 font-bold block">
            Mora HIT Simulada
          </span>
          <span className="text-xl font-extrabold text-slate-900 font-mono block mt-1">{simulatedHitBadRate}%</span>
          <span className={`text-[10px] font-bold block mt-0.5 ${isHitSafe ? 'text-emerald-700' : 'text-rose-700'}`}>
            {isHitSafe ? `✓ Safe (< ${hitTargetMax}% Max)` : `⚠️ Alerta (> ${hitTargetMax}% Max)`}
          </span>
        </div>

        {/* NO HIT Bad Rate Output */}
        <div className={`p-4 rounded-2xl bg-slate-50 border ${isNoHitSafe ? 'border-emerald-200/80' : 'border-rose-200/80'}`}>
          <span className="text-[10px] uppercase text-slate-500 font-bold block">
            Mora NO HIT Simulada
          </span>
          <span className="text-xl font-extrabold text-slate-900 font-mono block mt-1">{simulatedNoHitBadRate}%</span>
          <span className={`text-[10px] font-bold block mt-0.5 ${isNoHitSafe ? 'text-emerald-700' : 'text-rose-700'}`}>
            {isNoHitSafe ? `✓ Safe (< ${noHitTargetMax}% Max)` : `⚠️ Alerta (> ${noHitTargetMax}% Max)`}
          </span>
        </div>

      </div>

    </div>
  );
};
