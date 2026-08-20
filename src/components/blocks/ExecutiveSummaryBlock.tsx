import React from 'react';
import { TEST_OVERVIEW } from '../../data/testData';
import { 
  CheckCircle2, 
  Target, 
  FileText
} from 'lucide-react';

export const ExecutiveSummaryBlock: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 text-slate-900 shadow-sm relative overflow-hidden space-y-8">
      
      {/* Subtle Slide Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-50/40 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Header */}
      <div className="border-b border-purple-100 pb-5">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-purple-50 text-[#51186B] text-xs font-bold border border-purple-200/80 uppercase tracking-wider">
            SBB Departamental • Suburbia / Liverpool
          </span>
          <span className="px-3 py-1 rounded-full bg-fuchsia-50 text-[#E3007B] text-xs font-mono font-bold border border-fuchsia-200">
            v{TEST_OVERVIEW.version} • {TEST_OVERVIEW.date}
          </span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#51186B] tracking-tight">
          {TEST_OVERVIEW.testTitle}
        </h2>
        
        <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
          {TEST_OVERVIEW.targetPopulationDesc}
        </p>
      </div>

      {/* Executive Slide Main Content - Clean Bullet Points Format */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Parámetros Generales del Test (7 cols) */}
        <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-5">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
            <div className="w-8 h-8 rounded-lg bg-[#51186B] text-white flex items-center justify-center font-bold text-sm">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-[#51186B] uppercase tracking-wider">
              Parámetros y Estructura del Test
            </h3>
          </div>

          <ul className="space-y-3.5 text-sm sm:text-base text-slate-700 font-medium">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E3007B] mt-2.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 font-bold">Propuesta: </strong>
                <span className="font-semibold text-slate-900">Incremento linea minima SBB Departamental</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E3007B] mt-2.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 font-bold">Periodo de Análisis de Muestra: </strong>
                <span className="font-mono font-bold text-slate-800">2024-11-01 a 2025-10-31</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E3007B] mt-2.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 font-bold">Metodologia : </strong>
                <span className="font-semibold text-slate-800">{TEST_OVERVIEW.methodology || 'RCE'}</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E3007B] mt-2.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 font-bold">Periodo de colocacion: </strong>
                <span className="font-mono font-bold text-slate-800">{TEST_OVERVIEW.placementPeriod}</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E3007B] mt-2.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 font-bold">Periodo de evaluación: </strong>
                <span className="font-mono font-bold text-slate-800">{TEST_OVERVIEW.behaviorPeriod}</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E3007B] mt-2.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 font-bold">Cuentas mensuales: </strong>
                <span className="font-mono font-bold text-slate-800">{TEST_OVERVIEW.monthlyAccounts || '~4,333'}</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E3007B] mt-2.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 font-bold">Total de cuentas: </strong>
                <span className="font-mono font-bold text-slate-800">{TEST_OVERVIEW.sampleSize.toLocaleString()} cuentas</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E3007B] mt-2.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-900 font-bold">Revisiones: </strong>
                <span className="font-semibold text-slate-800">{TEST_OVERVIEW.reviews || '3m, 6m y Cierre'}</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column: Objetivos del Test (5 cols) */}
        <div className="lg:col-span-5 bg-purple-50/40 border border-purple-100 rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 pb-3 border-b border-purple-200/80 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#E3007B] text-white flex items-center justify-center font-bold text-sm">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#51186B] uppercase tracking-wider">
                Objetivos
              </h3>
            </div>

            <ol className="space-y-4 text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#51186B] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span>
                    Entender como afecta la linea de credito en las moras, utilizacion y rentabilidad para un mismo perfil de riesgo
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#E3007B] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span>
                    Evaluar la viabilidad de homologacion la linea minima con liverpool
                  </span>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-4 pt-4 border-t border-purple-200/60 bg-white/80 p-3.5 rounded-xl border border-purple-100 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-xs font-bold text-slate-700">
              Prueba controlada con monitoreo continuo de moras y colocación.
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
