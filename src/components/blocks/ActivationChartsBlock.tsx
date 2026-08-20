import React, { useState } from 'react';
import { ACTIVATION_BY_RANGE } from '../../data/testData';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Legend, 
  Cell 
} from 'recharts';
import { Zap, TrendingUp, CheckCircle } from 'lucide-react';

export const ActivationChartsBlock: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'activation' | 'distribution'>('activation');

  const chartData = ACTIVATION_BY_RANGE.map(r => ({
    range: r.rangeLabel.split(' ')[0] + ' ' + (r.rangeLabel.split(' ')[1] || ''),
    fullLabel: r.rangeLabel,
    Hit: selectedMetric === 'activation' ? r.hitActivation : r.hitDistPct,
    NoHit: selectedMetric === 'activation' ? r.noHitActivation : r.noHitDistPct,
    Total: selectedMetric === 'activation' ? r.totalActivation : r.totalDistPct,
  }));

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-slate-900 shadow-sm flex flex-col justify-between h-full">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-purple-100">
        <div>
          <h3 className="text-base font-bold text-[#51186B] flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#E3007B]" />
            Tasas de Activación por Rango de Línea
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Comportamiento de uso del plástico por segmento y capacidad crediticia
          </p>
        </div>

        {/* Toggle between Activation Rate & Population Distribution */}
        <div className="flex items-center bg-purple-50 p-1 rounded-xl border border-purple-100 text-xs">
          <button
            onClick={() => setSelectedMetric('activation')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              selectedMetric === 'activation'
                ? 'bg-[#51186B] text-white shadow-sm'
                : 'text-purple-900 hover:text-purple-950'
            }`}
          >
            % Activación
          </button>
          <button
            onClick={() => setSelectedMetric('distribution')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              selectedMetric === 'distribution'
                ? 'bg-[#51186B] text-white shadow-sm'
                : 'text-purple-900 hover:text-purple-950'
            }`}
          >
            % Distribución Mix
          </button>
        </div>
      </div>

      {/* Target Segment Callout Box */}
      <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 flex-shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Impacto en Segmento Target (Ing&gt;=4k | LC&lt;4k)</h4>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Se prevé una mejora directa en activación del <strong className="text-amber-900 font-bold">66.5% al 67.2%</strong> al duplicar la línea mínima.
            </p>
          </div>
        </div>
        <div className="text-right hidden sm:block flex-shrink-0">
          <span className="text-[10px] text-slate-500 block uppercase font-bold">Activación Total Producto</span>
          <span className="text-base font-extrabold text-amber-900 font-mono">67.4%</span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="bg-slate-50/90 p-4 rounded-2xl border border-slate-200/80 h-64">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-slate-500">
            {selectedMetric === 'activation' ? 'Tasa de Activación (%) por Rango' : 'Distribución de Cuentas (%) por Rango'}
          </span>
        </div>

        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={chartData} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <XAxis dataKey="range" stroke="#64748b" fontSize={10} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={10} tickFormatter={(v) => `${v}%`} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', borderRadius: '12px', color: '#0f172a', fontSize: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              formatter={(val: any) => [`${val}%`, '']}
            />
            <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '6px' }} />
            <Bar dataKey="Hit" fill="#51186B" radius={[6, 6, 0, 0]} name="HIT" />
            <Bar dataKey="NoHit" fill="#E3007B" radius={[6, 6, 0, 0]} name="NO HIT" />
            <Bar dataKey="Total" fill="#d97706" radius={[6, 6, 0, 0]} name="TOTAL" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};
