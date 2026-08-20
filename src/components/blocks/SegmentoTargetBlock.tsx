import React, { useState, useMemo } from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { 
  Info, 
  BarChart3, 
  AlertTriangle 
} from 'lucide-react';
import { getHistoricalMoraChartData, PeriodChartPoint } from '../../data/historicalMoraData';

type MetricWindow = 'entry2m' | 'mora30' | 'mora90';

interface MetricMeta {
  id: MetricWindow;
  title: string;
  subtitle: string;
  highKeySdo: keyof PeriodChartPoint;
  lowKeySdo: keyof PeriodChartPoint;
  lowKeySdoMA: keyof PeriodChartPoint;
  highKeyCta: keyof PeriodChartPoint;
  lowKeyCta: keyof PeriodChartPoint;
  highKeyMoraCount: keyof PeriodChartPoint;
  lowKeyMoraCount: keyof PeriodChartPoint;
  maxDomain: number;
}

const METRIC_CONFIGS: Record<MetricWindow, MetricMeta> = {
  entry2m: {
    id: 'entry2m',
    title: 'Entry @ 2MOB (Nivel Saldo)',
    subtitle: 'Mora temprana a 2 meses de madurez',
    highKeySdo: 'highEntry2mSdo',
    lowKeySdo: 'lowEntry2mSdo',
    lowKeySdoMA: 'lowEntry2mSdoMA3',
    highKeyCta: 'highEntry2mCta',
    lowKeyCta: 'lowEntry2mCta',
    highKeyMoraCount: 'highEntry2mCuentasMora',
    lowKeyMoraCount: 'lowEntry2mCuentasMora',
    maxDomain: 15,
  },
  mora30: {
    id: 'mora30',
    title: 'Mora 30+ @ 3MOB (Nivel Saldo)',
    subtitle: 'Mora de 30+ días a 3 meses de madurez',
    highKeySdo: 'highMora303mSdo',
    lowKeySdo: 'lowMora303mSdo',
    lowKeySdoMA: 'lowMora303mSdoMA3',
    highKeyCta: 'highMora303mCta',
    lowKeyCta: 'lowMora303mCta',
    highKeyMoraCount: 'highMora303mCuentasMora',
    lowKeyMoraCount: 'lowMora303mCuentasMora',
    maxDomain: 15,
  },
  mora90: {
    id: 'mora90',
    title: 'Mora 90+ @ 9MOB (Nivel Saldo)',
    subtitle: 'Mora grave de 90+ días a 9 meses de madurez',
    highKeySdo: 'highMora909mSdo',
    lowKeySdo: 'lowMora909mSdo',
    lowKeySdoMA: 'lowMora909mSdoMA3',
    highKeyCta: 'highMora909mCta',
    lowKeyCta: 'lowMora909mCta',
    highKeyMoraCount: 'highMora909mCuentasMora',
    lowKeyMoraCount: 'lowMora909mCuentasMora',
    maxDomain: 36,
  },
};

export const SegmentoTargetBlock: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MetricWindow>('entry2m');
  const [showAllCharts, setShowAllCharts] = useState<boolean>(false);
  const chartData = useMemo(() => getHistoricalMoraChartData(), []);

  const meta = METRIC_CONFIGS[activeTab];

  const renderTooltip = (props: any, currentMeta: MetricMeta) => {
    const { active, payload } = props;
    if (!active || !payload || !payload.length) return null;

    const point: PeriodChartPoint = payload[0].payload;
    if (!point) return null;

    const highTotal = point.highTotalCuentas || 0;
    const highSdo = (point[currentMeta.highKeySdo] as number) || 0;
    const highCtaPct = ((point[currentMeta.highKeyCta] as number) || 0) * 100;
    const highMoraCount = (point[currentMeta.highKeyMoraCount] as number) || 0;

    const lowTotal = point.lowTotalCuentas || 0;
    const lowSdoMA = (point[currentMeta.lowKeySdoMA] as number) || 0;
    const lowSdoRaw = (point[currentMeta.lowKeySdo] as number) || 0;
    const lowCtaPct = ((point[currentMeta.lowKeyCta] as number) || 0) * 100;
    const lowMoraCount = (point[currentMeta.lowKeyMoraCount] as number) || 0;

    return (
      <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-4 text-white shadow-2xl backdrop-blur-md max-w-xs text-xs">
        <div className="font-extrabold text-sm text-purple-300 border-b border-slate-700 pb-2 mb-3 flex items-center justify-between">
          <span>Periodo: {point.label}</span>
          <span className="text-[10px] font-mono text-slate-400">({point.periodo})</span>
        </div>

        {/* High Income Segment */}
        <div className="mb-3.5 bg-slate-800/80 p-2.5 rounded-xl border border-blue-500/30">
          <div className="flex items-center gap-1.5 font-bold text-blue-400 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
            <span>Ingresos ≥ $4,000</span>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px]">
            <span className="text-slate-400">Mora en Saldo:</span>
            <span className="font-bold text-white font-mono text-right">{highSdo.toFixed(2)}%</span>

            <span className="text-slate-400">Cuentas periodo:</span>
            <span className="font-bold text-slate-200 font-mono text-right">{highTotal.toLocaleString()}</span>

            <span className="text-slate-400">% Cuentas en mora:</span>
            <span className="font-bold text-blue-300 font-mono text-right">{highCtaPct.toFixed(2)}%</span>

            <span className="text-slate-400">Cuentas con mora:</span>
            <span className="font-bold text-amber-300 font-mono text-right">{highMoraCount.toLocaleString()} ctas</span>
          </div>
        </div>

        {/* Low Income Segment */}
        <div className="bg-slate-800/80 p-2.5 rounded-xl border border-rose-500/30">
          <div className="flex items-center gap-1.5 font-bold text-rose-400 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-rose-500 inline-block"></span>
            <span>Ingresos &lt; $4,000</span>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px]">
            <span className="text-slate-400">Mora Saldo (3M MA):</span>
            <span className="font-bold text-white font-mono text-right">{lowSdoMA.toFixed(2)}%</span>

            <span className="text-slate-400">Mora Saldo (Puntual):</span>
            <span className="font-semibold text-slate-300 font-mono text-right">{lowSdoRaw.toFixed(2)}%</span>

            <span className="text-slate-400">Cuentas periodo:</span>
            <span className="font-bold text-slate-200 font-mono text-right">{lowTotal.toLocaleString()}</span>

            <span className="text-slate-400">% Cuentas en mora:</span>
            <span className="font-bold text-rose-300 font-mono text-right">{lowCtaPct.toFixed(2)}%</span>

            <span className="text-slate-400">Cuentas con mora:</span>
            <span className="font-bold text-amber-300 font-mono text-right">{lowMoraCount.toLocaleString()} ctas</span>
          </div>
        </div>
      </div>
    );
  };

  const renderSingleChart = (currentMeta: MetricMeta) => {
    let validData = chartData.filter(d => {
      const val = d[currentMeta.highKeySdo] as number;
      return val !== undefined && val > 0;
    });

    if (currentMeta.id === 'entry2m') {
      validData = validData.filter(p => p.periodo <= '2026-05');
    } else if (currentMeta.id === 'mora30') {
      validData = validData.filter(p => p.periodo <= '2026-04');
    } else if (currentMeta.id === 'mora90') {
      validData = validData.filter(p => p.periodo <= '2025-11');
    }

    return (
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
          <div>
            <h3 className="text-base font-extrabold text-[#51186B] flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#E3007B]" />
              Evolución de {currentMeta.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Comparativa por nivel de ingreso (Ingresos ≥ $4,000 vs &lt; $4,000)
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-semibold bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200/60 text-[#51186B] flex-shrink-0">
            <Info className="w-3.5 h-3.5 text-[#E3007B]" />
            <span>Curva graficando Mora en Saldo (% SDO)</span>
          </div>
        </div>

        <div className="w-full h-[380px] my-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={validData} margin={{ top: 15, right: 20, left: -15, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={true} />
              <XAxis 
                dataKey="label" 
                tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }}
                interval={3}
                angle={-25}
                textAnchor="end"
                dy={8}
              />
              <YAxis 
                domain={[0, currentMeta.maxDomain]}
                tickFormatter={(val) => `${val.toFixed(1)}%`}
                tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }}
              />
              <Tooltip content={(props) => renderTooltip(props, currentMeta)} />
              <Legend 
                verticalAlign="top" 
                align="left" 
                wrapperStyle={{ paddingBottom: '15px', fontSize: '11px', fontWeight: 600 }}
              />

              <Line 
                type="monotone" 
                dataKey={currentMeta.highKeySdo as string} 
                name="Ingresos ≥ $4,000 (N ≈ 8,774 ctas/mes)" 
                stroke="#3B82F6" 
                strokeWidth={2.5}
                dot={{ r: 4, fill: '#3B82F6' }}
                activeDot={{ r: 7, stroke: '#1D4ED8', strokeWidth: 2 }}
              />

              <Line 
                type="monotone" 
                dataKey={currentMeta.lowKeySdoMA as string} 
                name="Ingresos < $4,000 (N ≈ 112 ctas/mes) [Media Móvil 3M]" 
                stroke="#F43F5E" 
                strokeWidth={2.5}
                strokeDasharray="5 5"
                dot={{ r: 4, fill: '#F43F5E' }}
                activeDot={{ r: 7, stroke: '#BE123C', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex items-start gap-2 text-xs text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed">
            <strong>Nota metodológica:</strong> El segmento <em>&lt; $4,000</em> exhibe mayor volatilidad intrínseca debido al bajo tamaño muestral (N &lt; 100 ctas/mes). Se recomienda interpretar la tendencia general basada en la media móvil a 3 meses más que los puntos individuales.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl border border-purple-100 shadow-sm p-5 sm:p-7 space-y-5">
      {/* Unified Main Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-[#51186B] text-[10px] font-extrabold uppercase tracking-wider">
              Análisis de Ingresos
            </span>
            <span className="text-xs text-slate-400 font-mono">2023 - 2026</span>
          </div>
          <h2 className="text-xl font-extrabold text-[#51186B] mt-1">
            Segmento Target Ingresos &ge; $4,000 vs Ingresos &lt; $4,000
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Evolución de morosidad comparativa para cuentas con Línea de Crédito &lt; $4,000 MXN.
          </p>
        </div>

        <div className="flex items-center gap-2 self-stretch md:self-auto justify-end flex-shrink-0">
          <div className="flex items-center bg-purple-50 p-1 rounded-xl border border-purple-100 text-xs">
            <button
              onClick={() => {
                setActiveTab('entry2m');
                setShowAllCharts(false);
              }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'entry2m' && !showAllCharts
                  ? 'bg-[#51186B] text-white shadow-xs'
                  : 'text-purple-900 hover:text-purple-950 hover:bg-purple-100/50'
              }`}
            >
              Entry@MoB
            </button>
            <button
              onClick={() => {
                setActiveTab('mora30');
                setShowAllCharts(false);
              }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'mora30' && !showAllCharts
                  ? 'bg-[#51186B] text-white shadow-xs'
                  : 'text-purple-900 hover:text-purple-950 hover:bg-purple-100/50'
              }`}
            >
              30+3MoB
            </button>
            <button
              onClick={() => {
                setActiveTab('mora90');
                setShowAllCharts(false);
              }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'mora90' && !showAllCharts
                  ? 'bg-[#51186B] text-white shadow-xs'
                  : 'text-purple-900 hover:text-purple-950 hover:bg-purple-100/50'
              }`}
            >
              90+9MoB
            </button>
            <button
              onClick={() => setShowAllCharts(!showAllCharts)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                showAllCharts
                  ? 'bg-[#E3007B] text-white shadow-xs'
                  : 'text-purple-900 hover:text-purple-950 hover:bg-purple-100/50'
              }`}
            >
              Ver las 3
            </button>
          </div>
        </div>
      </div>

      {showAllCharts ? (
        <div className="space-y-6 pt-2">
          {renderSingleChart(METRIC_CONFIGS.entry2m)}
          {renderSingleChart(METRIC_CONFIGS.mora30)}
          {renderSingleChart(METRIC_CONFIGS.mora90)}
        </div>
      ) : (
        renderSingleChart(meta)
      )}
    </div>
  );
};
