import React from 'react';
import { PILOTING_SAMPLE } from '../../data/testData';
import { ShieldAlert, RefreshCw, CheckCircle2, AlertTriangle, Layers, Clock } from 'lucide-react';

export const PilotingStrategyBlock: React.FC = () => {
  const totalNoHit = PILOTING_SAMPLE.reduce((sum, r) => sum + r.noHitAccounts, 0);
  const totalHit = PILOTING_SAMPLE.reduce((sum, r) => sum + r.hitAccounts, 0);
  const totalPiloto = totalNoHit + totalHit;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-slate-900 shadow-sm flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-purple-100">
        <div>
          <h3 className="text-base font-bold text-[#51186B] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#E3007B]" />
            Estrategia Operativa & Muestra Piloto
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Distribución de cuentas por perfil de riesgo para monitoreo activo
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-purple-50 text-[#51186B] border border-purple-200/80 font-mono text-xs font-bold">
          {totalPiloto.toLocaleString()} Cuentas Piloto
        </span>
      </div>

      {/* Table Breakdown */}
      <div className="overflow-x-auto mb-5 bg-purple-50/30 rounded-2xl border border-purple-100 p-3">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="text-[10px] uppercase text-purple-900 border-b border-purple-100 bg-purple-50/80">
              <th className="py-2.5 px-3 font-bold">Perfil de Riesgo</th>
              <th className="py-2.5 px-3 text-right font-bold text-[#E3007B]">NoHit</th>
              <th className="py-2.5 px-3 text-right font-bold text-slate-600">% Mix</th>
              <th className="py-2.5 px-3 text-right font-bold text-[#51186B]">Hit</th>
              <th className="py-2.5 px-3 text-right font-bold text-slate-600">% Mix</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-100/80 font-mono">
            {PILOTING_SAMPLE.map((row, idx) => (
              <tr key={idx} className="hover:bg-purple-50/60 transition-colors">
                <td className="py-2.5 px-3 font-medium text-slate-800">{row.riskName.replace(/\s*\([^)]*\)/g, '')}</td>
                <td className="py-2.5 px-3 text-right font-bold text-[#E3007B]">{row.noHitAccounts.toLocaleString()}</td>
                <td className="py-2.5 px-3 text-right text-slate-500">{row.noHitPct.toFixed(1)}%</td>
                <td className="py-2.5 px-3 text-right font-bold text-[#51186B]">{row.hitAccounts.toLocaleString()}</td>
                <td className="py-2.5 px-3 text-right text-slate-500">{row.hitPct.toFixed(1)}%</td>
              </tr>
            ))}
            <tr className="bg-purple-50 font-bold border-t border-purple-200 text-purple-950">
              <td className="py-3 px-3 uppercase text-[11px]">Total Piloto</td>
              <td className="py-3 px-3 text-right text-[#E3007B] font-extrabold">{totalNoHit.toLocaleString()}</td>
              <td className="py-3 px-3 text-right text-slate-600">100%</td>
              <td className="py-3 px-3 text-right text-[#51186B] font-extrabold">{totalHit.toLocaleString()}</td>
              <td className="py-3 px-3 text-right text-slate-600">100%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Control Checkpoints & Mitigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 flex-shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Cortes de Control (3m y 6m)</h4>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              Revisiones intermedias obligatorias para detectar desviaciones tempranas antes del cierre del periodo de maduración.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200/80 flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-rose-100 text-rose-700 flex-shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-rose-900">Regla de Apagado (Kill-Switch)</h4>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              Si en el corte de 3m o 6m un segmento supera el Target Máximo de morosidad, la política se apaga inmediatamente para esa banda.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
