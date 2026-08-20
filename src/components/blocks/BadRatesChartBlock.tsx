import React, { useState } from 'react';
import { 
  RISK_LEVEL_BAD_RATES, 
  TOTAL_SEGMENT_BAD_RATES, 
  RISK_LEVEL_BAD_RATES_TARGET, 
  TOTAL_SEGMENT_BAD_RATES_TARGET 
} from '../../data/testData';
import { RiskLevelBadRate } from '../../types';
import { 
  ComposedChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Legend, 
  CartesianGrid 
} from 'recharts';
import { ShieldCheck, CheckCircle2, Sliders } from 'lucide-react';

const RISK_NAMES: Record<number, string> = {
  1: 'Muy Bajo',
  2: 'Bajo',
  3: 'Medio',
  4: 'Alto',
  5: 'Muy Alto',
};

const SAMPLE_BY_RISK_TARGET: Record<number, { hit: number; noHit: number }> = {
  1: { hit: 14, noHit: 3 },
  2: { hit: 16, noHit: 77 },
  3: { hit: 25, noHit: 448 },
  4: { hit: 444, noHit: 680 },
  5: { hit: 578, noHit: 233 },
};

function getRowMetrics(
  r: RiskLevelBadRate, 
  segment: 'hit' | 'noHit' | 'total', 
  period: 'entry' | 'mob30' | 'mob90', 
  scope: 'cartera' | 'target'
) {
  let hitActual = 0, hitExpected = 0, hitTarget = 0, hitTargetMax = 0;
  let noHitActual = 0, noHitExpected = 0, noHitTarget = 0, noHitTargetMax = 0;

  if (period === 'entry') {
    hitActual = r.hitEntryActual; hitExpected = r.hitEntryExpected; hitTarget = r.hitEntryTarget; hitTargetMax = r.hitEntryTargetMax;
    noHitActual = r.noHitEntryActual; noHitExpected = r.noHitEntryExpected; noHitTarget = r.noHitEntryTarget; noHitTargetMax = r.noHitEntryTargetMax;
  } else if (period === 'mob30') {
    hitActual = r.hit30MoBActual; hitExpected = r.hit30MoBExpected; hitTarget = r.hit30MoBTarget; hitTargetMax = r.hit30MoBTargetMax;
    noHitActual = r.noHit30MoBActual; noHitExpected = r.noHit30MoBExpected; noHitTarget = r.noHit30MoBTarget; noHitTargetMax = r.noHit30MoBTargetMax;
  } else {
    hitActual = r.hit90MoBActual; hitExpected = r.hit90MoBExpected; hitTarget = r.hit90MoBTarget; hitTargetMax = r.hit90MoBTargetMax;
    noHitActual = r.noHit90MoBActual; noHitExpected = r.noHit90MoBExpected; noHitTarget = r.noHit90MoBTarget; noHitTargetMax = r.noHit90MoBTargetMax;
  }

  if (segment === 'hit') {
    return { actual: hitActual, expected: hitExpected, target: hitTarget, targetMax: hitTargetMax };
  }
  if (segment === 'noHit') {
    return { actual: noHitActual, expected: noHitExpected, target: noHitTarget, targetMax: noHitTargetMax };
  }

  if (segment === 'total') {
    let hitWeight = 0.5;
    let noHitWeight = 0.5;

    if (scope === 'target') {
      const s = SAMPLE_BY_RISK_TARGET[r.riskLevel] || { hit: 50, noHit: 50 };
      const tot = s.hit + s.noHit;
      if (tot > 0) {
        hitWeight = s.hit / tot;
        noHitWeight = s.noHit / tot;
      }
    } else {
      const wHit = (r.hitMixPct || 0) * 0.79;
      const wNoHit = (r.noHitMixPct || 0) * 0.21;
      const totW = wHit + wNoHit;
      if (totW > 0) {
        hitWeight = wHit / totW;
        noHitWeight = wNoHit / totW;
      }
    }

    const calculatedTarget = Number((hitTarget * hitWeight + noHitTarget * noHitWeight).toFixed(2));
    const calculatedTargetMax = Number((hitTargetMax * hitWeight + noHitTargetMax * noHitWeight).toFixed(2));

    if (period === 'entry' && r.totalEntryActual !== undefined && r.totalEntryExpected !== undefined) {
      return { actual: r.totalEntryActual, expected: r.totalEntryExpected, target: calculatedTarget, targetMax: calculatedTargetMax };
    }
    if (period === 'mob30' && r.total30MoBActual !== undefined && r.total30MoBExpected !== undefined) {
      return { actual: r.total30MoBActual, expected: r.total30MoBExpected, target: calculatedTarget, targetMax: calculatedTargetMax };
    }
    if (period === 'mob90' && r.total90MoBActual !== undefined && r.total90MoBExpected !== undefined) {
      return { actual: r.total90MoBActual, expected: r.total90MoBExpected, target: calculatedTarget, targetMax: calculatedTargetMax };
    }

    return {
      actual: Number((hitActual * hitWeight + noHitActual * noHitWeight).toFixed(2)),
      expected: Number((hitExpected * hitWeight + noHitExpected * noHitWeight).toFixed(2)),
      target: calculatedTarget,
      targetMax: calculatedTargetMax,
    };
  }
}

interface BadRatesChartBlockProps {
  initialScope?: 'cartera' | 'target';
  title?: string;
  subtitle?: string;
  badgeText?: string;
  data?: RiskLevelBadRate[];
  totalsData?: typeof TOTAL_SEGMENT_BAD_RATES;
}

export const BadRatesChartBlock: React.FC<BadRatesChartBlockProps> = ({
  initialScope = 'cartera',
}) => {
  const [scope, setScope] = useState<'cartera' | 'target'>(initialScope);
  const [period, setPeriod] = useState<'entry' | 'mob30' | 'mob90'>('entry');
  const [segment, setSegment] = useState<'hit' | 'noHit' | 'total'>('hit');

  const activeData = scope === 'cartera' ? RISK_LEVEL_BAD_RATES : RISK_LEVEL_BAD_RATES_TARGET;
  const activeTotals = scope === 'cartera' ? TOTAL_SEGMENT_BAD_RATES : TOTAL_SEGMENT_BAD_RATES_TARGET;
  const badgeText = scope === 'cartera' ? 'CARTERA GENERAL' : 'SEGMENTO TARGET';
  const subtitleText = scope === 'cartera' 
    ? 'Evaluación MoB vs Target y Target Máximo en Cartera General' 
    : 'Evaluación MoB vs Target y Target Máximo en Segmento Target';

  const chartData = activeData.map(r => {
    const { actual, expected, target, targetMax } = getRowMetrics(r, segment, period, scope);

    return {
      level: RISK_NAMES[r.riskLevel] || `Nivel ${r.riskLevel}`,
      Actual: actual,
      Esperado: expected,
      Target: target,
      'Target Máx': targetMax,
    };
  });

  const totals = segment === 'hit' 
    ? activeTotals.hit[period] 
    : segment === 'noHit'
    ? activeTotals.noHit[period]
    : activeTotals.overall[period];

  const isSafe = totals.expected <= totals.targetMax;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 text-slate-900 shadow-sm flex flex-col justify-between h-full">
      
      {/* Block Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5 pb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-purple-100 text-[#51186B] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {badgeText}
            </span>
          </div>
          <h3 className="text-base font-bold text-[#51186B] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#E3007B]" />
            Bad Rates
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {subtitleText}
          </p>
        </div>

        {/* Filters Group */}
        <div className="flex flex-col items-start lg:items-end gap-2.5">
          
          {/* Top Scope Selector Button */}
          <div className="flex items-center bg-purple-100/80 p-1 rounded-xl border border-purple-200 text-xs shadow-2xs">
            <span className="text-[10px] font-extrabold text-purple-900 uppercase tracking-wider px-2 flex items-center gap-1">
              <Sliders className="w-3 h-3 text-[#E3007B]" />
              Vista:
            </span>
            <button
              onClick={() => setScope('cartera')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                scope === 'cartera'
                  ? 'bg-[#51186B] text-white shadow-sm'
                  : 'text-purple-900 hover:text-purple-950 hover:bg-purple-200/50'
              }`}
            >
              Cartera General
            </button>
            <button
              onClick={() => setScope('target')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                scope === 'target'
                  ? 'bg-[#51186B] text-white shadow-sm'
                  : 'text-purple-900 hover:text-purple-950 hover:bg-purple-200/50'
              }`}
            >
              Segmento Target
            </button>
          </div>

          {/* Sub-Filters: Segment (HIT/NO HIT/TOTAL) & MoB Period */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Segment selector */}
            <div className="flex items-center bg-purple-50 p-1 rounded-xl border border-purple-100 text-xs">
              <button
                onClick={() => setSegment('hit')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  segment === 'hit'
                    ? 'bg-[#51186B] text-white shadow-sm'
                    : 'text-purple-900 hover:text-purple-950'
                }`}
              >
                HIT
              </button>
              <button
                onClick={() => setSegment('noHit')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  segment === 'noHit'
                    ? 'bg-[#E3007B] text-white shadow-sm'
                    : 'text-purple-900 hover:text-purple-950'
                }`}
              >
                NO HIT
              </button>
              <button
                onClick={() => setSegment('total')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  segment === 'total'
                    ? 'bg-[#51186B] text-white shadow-sm'
                    : 'text-purple-900 hover:text-purple-950'
                }`}
              >
                TOTAL
              </button>
            </div>

            {/* MoB Period selector */}
            <div className="flex items-center bg-purple-50 p-1 rounded-xl border border-purple-100 text-xs">
              <button
                onClick={() => setPeriod('entry')}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition-all ${
                  period === 'entry'
                    ? 'bg-[#51186B] text-white shadow-sm'
                    : 'text-purple-900 hover:text-purple-950'
                }`}
              >
                Entry@MoB
              </button>
              <button
                onClick={() => setPeriod('mob30')}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition-all ${
                  period === 'mob30'
                    ? 'bg-[#51186B] text-white shadow-sm'
                    : 'text-purple-900 hover:text-purple-950'
                }`}
              >
                30+3MoB
              </button>
              <button
                onClick={() => setPeriod('mob90')}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition-all ${
                  period === 'mob90'
                    ? 'bg-[#51186B] text-white shadow-sm'
                    : 'text-purple-900 hover:text-purple-950'
                }`}
              >
                90+9MoB
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Total Metric Summary Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100">
          <span className="text-[10px] text-[#51186B] uppercase font-bold block">Actual Total</span>
          <span className="text-base font-extrabold text-[#51186B] font-mono mt-0.5 block">{totals.actual}%</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100">
          <span className="text-[10px] text-[#51186B] uppercase font-bold block">Esperado</span>
          <span className="text-base font-extrabold text-[#51186B] font-mono mt-0.5 block">{totals.expected}%</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100">
          <span className="text-[10px] text-[#51186B] uppercase font-bold block">Target</span>
          <span className="text-base font-extrabold text-[#51186B] font-mono mt-0.5 block">{totals.target}%</span>
        </div>
        <div className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100">
          <span className="text-[10px] text-[#51186B] uppercase font-bold block">Target Máximo</span>
          <span className="text-base font-extrabold text-[#51186B] font-mono mt-0.5 block">{totals.targetMax}%</span>
        </div>
      </div>

      {/* Warning callout for low sample size (strictly Segmento Target) */}
      {scope === 'target' && segment === 'hit' && (
        <div className="mb-4 p-3 rounded-xl bg-amber-50/90 border border-amber-200/90 text-amber-900 text-xs flex items-start gap-2.5 shadow-2xs">
          <div className="p-1 rounded-lg bg-amber-100 text-amber-800 font-bold flex-shrink-0 mt-0.5">
            ⚠️
          </div>
          <div className="leading-relaxed">
            <strong className="font-bold text-amber-950 block mb-0.5">Nota metodológica de muestra (HIT - Riesgo 1, 2 y 3):</strong>
            El nivel de muestra en los Niveles de Riesgo 1 (Muy Bajo), 2 (Bajo) y 3 (Medio) para el segmento HIT es muy bajo, por lo que hay que tomar con cautela los valores de media y desviaciones estándar.
          </div>
        </div>
      )}

      {scope === 'target' && segment === 'noHit' && (
        <div className="mb-4 p-3 rounded-xl bg-amber-50/90 border border-amber-200/90 text-amber-900 text-xs flex items-start gap-2.5 shadow-2xs">
          <div className="p-1 rounded-lg bg-amber-100 text-amber-800 font-bold flex-shrink-0 mt-0.5">
            ⚠️
          </div>
          <div className="leading-relaxed">
            <strong className="font-bold text-amber-950 block mb-0.5">Nota metodológica de muestra (NO HIT - Riesgo 1 y 2):</strong>
            El nivel de muestra en los Niveles de Riesgo 1 (Muy Bajo) y 2 (Bajo) para el segmento NO HIT es muy bajo, por lo que hay que tomar con cautela los valores de media y desviaciones estándar.
          </div>
        </div>
      )}

      {/* Chart Container */}
      <div className="bg-purple-50/30 p-4 rounded-2xl border border-purple-100 h-72 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-slate-600">
            Morosidad por Nivel de Riesgo ({badgeText} • {segment.toUpperCase()} • {period.toUpperCase()})
          </span>
          <span className={`text-[11px] font-bold flex items-center gap-1 ${isSafe ? 'text-emerald-700' : 'text-rose-700'}`}>
            <CheckCircle2 className="w-3.5 h-3.5" />
            {isSafe ? 'Dentro de Tolerancia de Riesgo' : 'Excede Tolerancia'}
          </span>
        </div>

        <ResponsiveContainer width="100%" height="88%">
          <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="level" stroke="#64748b" fontSize={11} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={10} tickFormatter={(v) => `${v}%`} tickLine={false} />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const actual = Number(payload.find(p => p.dataKey === 'Actual')?.value || 0);
                  const esperado = Number(payload.find(p => p.dataKey === 'Esperado')?.value || 0);
                  const target = Number(payload.find(p => p.dataKey === 'Target')?.value || 0);
                  const targetMax = Number(payload.find(p => p.dataKey === 'Target Máx')?.value || 0);
                  const diff = Number((esperado - actual).toFixed(2));
                  const isDiffPositive = diff >= 0;

                  return (
                    <div className="bg-white border border-purple-100 p-3 rounded-xl shadow-lg text-xs space-y-1.5 min-w-[190px]">
                      <p className="font-bold text-[#51186B] border-b border-purple-100 pb-1 uppercase tracking-wider text-[11px]">
                        {label} ({badgeText} • {segment.toUpperCase()} • {period.toUpperCase()})
                      </p>
                      <div className="flex justify-between gap-4 text-slate-600">
                        <span>Actual Base:</span>
                        <strong className="font-mono text-slate-900">{actual}%</strong>
                      </div>
                      <div className="flex justify-between gap-4 text-[#51186B]">
                        <span>Esperado:</span>
                        <strong className="font-mono text-[#51186B] font-bold">{esperado}%</strong>
                      </div>
                      <div className="flex justify-between gap-4 text-amber-700 font-bold border-t border-purple-100 pt-1">
                        <span>Variación:</span>
                        <span className="font-mono">{isDiffPositive ? `+${diff}%` : `${diff}%`}</span>
                      </div>
                      <div className="flex justify-between gap-4 text-slate-500 pt-0.5 text-[11px] border-t border-slate-100">
                        <span>Target / Target Máx:</span>
                        <span className="font-mono font-medium text-slate-700">{target}% / <span className="text-[#E3007B] font-bold">{targetMax}%</span></span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '6px' }} />
            <Bar dataKey="Actual" fill="#cbd5e1" barSize={16} radius={[4, 4, 0, 0]} />
            <Bar dataKey="Esperado" fill="#51186B" barSize={16} radius={[4, 4, 0, 0]} />
            <Line type="monotone" dataKey="Target" stroke="#51186B" strokeWidth={2.5} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="Target Máx" stroke="#E3007B" strokeWidth={2.5} strokeDasharray="4 4" dot={{ r: 4 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Data Table */}
      <div className="overflow-x-auto bg-purple-50/20 rounded-2xl border border-purple-100 p-3">
        <table className="w-full text-xs text-left">
          <thead>
            <tr className="text-[10px] uppercase text-purple-900 border-b border-purple-100 bg-purple-50/80">
              <th className="py-2.5 px-3 font-bold">Nivel de Riesgo</th>
              <th className="py-2.5 px-3 text-right font-bold text-slate-600">% Mix</th>
              <th className="py-2.5 px-3 text-right font-bold text-slate-700">Actual</th>
              <th className="py-2.5 px-3 text-right font-bold text-[#51186B]">Esperado</th>
              <th className="py-2.5 px-3 text-right font-bold text-[#51186B]">Target</th>
              <th className="py-2.5 px-3 text-right font-bold text-[#E3007B]">Target Máx</th>
              <th className="py-2.5 px-3 text-center font-bold text-slate-600">Estatus</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-100/80 font-mono">
            {activeData.map((r) => {
              const { actual, expected, target, targetMax } = getRowMetrics(r, segment, period, scope);

              let mix = 0;
              if (segment === 'hit') {
                mix = r.hitMixPct;
              } else if (segment === 'noHit') {
                mix = r.noHitMixPct;
              } else {
                if (scope === 'target') {
                  const s = SAMPLE_BY_RISK_TARGET[r.riskLevel];
                  mix = Number(((s.hit + s.noHit) / 25.15).toFixed(2));
                } else {
                  mix = Number((r.hitMixPct * 0.79 + r.noHitMixPct * 0.21).toFixed(2));
                }
              }

              const rowSafe = expected <= targetMax;

              const isLowSample = scope === 'target' && (
                (segment === 'hit' && [1, 2, 3].includes(r.riskLevel)) || 
                (segment === 'noHit' && [1, 2].includes(r.riskLevel))
              );

              return (
                <tr key={r.riskLevel} className="hover:bg-purple-50/60 transition-colors">
                  <td className="py-2.5 px-3 font-medium text-slate-900 font-sans flex items-center gap-1.5 flex-wrap">
                    <span>{r.riskName}</span>
                    {isLowSample && (
                      <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold border border-amber-200">
                        * Muestra baja
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-right text-slate-600">{mix}%</td>
                  <td className="py-2.5 px-3 text-right text-slate-700">{actual.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#51186B]">{expected.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right text-slate-700">{target.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-right font-bold text-[#E3007B]">{targetMax.toFixed(2)}%</td>
                  <td className="py-2.5 px-3 text-center font-sans">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                      rowSafe ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}>
                      {rowSafe ? 'OK' : 'EXCEDE'}
                    </span>
                  </td>
                </tr>
              );
            })}
            <tr className="bg-purple-50 font-bold border-t border-purple-200 text-purple-950 font-sans">
              <td className="py-3 px-3 uppercase text-[11px]">
                {segment === 'total' ? 'Promedio Total' : `Promedio ${segment.toUpperCase()}`}
              </td>
              <td className="py-3 px-3 text-right text-slate-600 font-mono">100%</td>
              <td className="py-3 px-3 text-right text-slate-700 font-mono">{totals.actual.toFixed(2)}%</td>
              <td className="py-3 px-3 text-right text-[#51186B] font-mono font-extrabold">{totals.expected.toFixed(2)}%</td>
              <td className="py-3 px-3 text-right text-slate-700 font-mono">{totals.target.toFixed(2)}%</td>
              <td className="py-3 px-3 text-right text-[#E3007B] font-mono font-extrabold">{totals.targetMax.toFixed(2)}%</td>
              <td className="py-3 px-3 text-center">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                  isSafe ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}>
                  {isSafe ? 'OK' : 'EXCEDE'}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};
