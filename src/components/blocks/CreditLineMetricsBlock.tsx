import React from 'react';
import { CREDIT_LINE_METRICS } from '../../data/testData';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell, 
  Legend 
} from 'recharts';
import { DollarSign, ArrowUpRight, Percent, Users } from 'lucide-react';

export const CreditLineMetricsBlock: React.FC = () => {
  const hitMetric = CREDIT_LINE_METRICS.find(m => m.segment === 'HIT') || CREDIT_LINE_METRICS[0];
  const noHitMetric = CREDIT_LINE_METRICS.find(m => m.segment === 'NO HIT') || CREDIT_LINE_METRICS[1];
  const totalMetric = CREDIT_LINE_METRICS.find(m => m.segment === 'TOTAL') || CREDIT_LINE_METRICS[2];

  const chartData = CREDIT_LINE_METRICS.map(m => ({
    segment: m.segment,
    Actual: m.actualProm,
    Esperado: m.expectedProm,
    delta: m.deltaPct,
  }));

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-slate-900 shadow-sm flex flex-col justify-between h-full">
      
      {/* Block Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-purple-100">
        <div>
          <h3 className="text-base font-bold text-[#51186B] flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-[#E3007B]" />
            Línea de Crédito Promedio
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Aumento proyectado al elevar la línea base de $2,000 a $4,000
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-fuchsia-50 text-[#E3007B] border border-fuchsia-200 font-mono text-xs font-bold">
          +{totalMetric.deltaPct.toFixed(2)}% Total Portfolio
        </span>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        
        {/* HIT */}
        <div className="p-4.5 rounded-2xl bg-gradient-to-b from-purple-50/40 to-white border border-purple-100 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#51186B] uppercase tracking-wider">HIT ({hitMetric.mixPct}% Mix)</span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80 flex items-center gap-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" /> +{hitMetric.deltaPct.toFixed(2)}%
            </span>
          </div>
          
          <div className="my-3 space-y-1">
            <span className="text-slate-500 text-[10px] uppercase font-bold block">Línea Promedio</span>
            <div className="flex items-center gap-2 font-mono">
              <span className="text-base text-slate-500 font-semibold">${hitMetric.actualProm.toLocaleString()}</span>
              <span className="text-purple-400 font-bold">➔</span>
              <span className="text-2xl font-extrabold text-[#51186B] tracking-tight">${hitMetric.expectedProm.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* NO HIT */}
        <div className="p-4.5 rounded-2xl bg-gradient-to-b from-purple-50/40 to-white border border-purple-100 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#51186B] uppercase tracking-wider">NO HIT ({noHitMetric.mixPct}% Mix)</span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80 flex items-center gap-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" /> +{noHitMetric.deltaPct.toFixed(2)}%
            </span>
          </div>

          <div className="my-3 space-y-1">
            <span className="text-slate-500 text-[10px] uppercase font-bold block">Línea Promedio</span>
            <div className="flex items-center gap-2 font-mono">
              <span className="text-base text-slate-500 font-semibold">${noHitMetric.actualProm.toLocaleString()}</span>
              <span className="text-purple-400 font-bold">➔</span>
              <span className="text-2xl font-extrabold text-[#51186B] tracking-tight">${noHitMetric.expectedProm.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* TOTAL */}
        <div className="p-4.5 rounded-2xl bg-gradient-to-b from-purple-50/40 to-white border border-purple-100 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#51186B] uppercase tracking-wider">TOTAL PRODUCTO</span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/80 flex items-center gap-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" /> +{totalMetric.deltaPct.toFixed(2)}%
            </span>
          </div>

          <div className="my-3 space-y-1">
            <span className="text-slate-500 text-[10px] uppercase font-bold block">Línea Promedio General</span>
            <div className="flex items-center gap-2 font-mono">
              <span className="text-base text-slate-500 font-semibold">${totalMetric.actualProm.toLocaleString()}</span>
              <span className="text-purple-400 font-bold">➔</span>
              <span className="text-2xl font-extrabold text-[#51186B] tracking-tight">${totalMetric.expectedProm.toLocaleString()}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Chart */}
      <div className="bg-purple-50/30 p-4 rounded-2xl border border-purple-100 h-64">
        <span className="text-[11px] font-bold text-slate-600 block mb-2">
          Comparativa de Línea Promedio por Segmento ($ MXN)
        </span>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }} barGap={6}>
            <XAxis dataKey="segment" stroke="#64748b" fontSize={11} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={10} tickFormatter={(val) => `$${val/1000}k`} tickLine={false} />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const actual = Number(payload.find(p => p.dataKey === 'Actual')?.value || 0);
                  const esperado = Number(payload.find(p => p.dataKey === 'Esperado')?.value || 0);
                  const diff = esperado - actual;
                  const deltaPct = payload[0]?.payload?.delta;
                  return (
                    <div className="bg-white border border-purple-100 p-3 rounded-xl shadow-lg text-xs space-y-1.5">
                      <p className="font-bold text-[#51186B] border-b border-purple-100 pb-1 uppercase tracking-wider text-[11px]">
                        Segmento {label}
                      </p>
                      <div className="flex justify-between gap-4 text-slate-600">
                        <span>Actual Base:</span>
                        <strong className="font-mono text-slate-900">${actual.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between gap-4 text-[#51186B]">
                        <span>Esperado con Test:</span>
                        <strong className="font-mono text-[#51186B] font-bold">${esperado.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between gap-4 text-emerald-600 font-bold border-t border-purple-100 pt-1">
                        <span>Variación:</span>
                        <span className="font-mono">+${diff.toLocaleString()} (+{deltaPct}%)</span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
            <Bar dataKey="Actual" fill="#cbd5e1" barSize={18} radius={[4, 4, 0, 0]} name="Actual Base" />
            <Bar dataKey="Esperado" fill="#51186B" barSize={18} radius={[4, 4, 0, 0]} name="Esperado con Test" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};
