import React, { useState, useMemo } from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ReferenceLine,
  ReferenceArea
} from 'recharts';
import { 
  Info, 
  BarChart3, 
  ShieldAlert,
  Filter,
  Activity
} from 'lucide-react';
import { 
  getRiskMoraChartData, 
  RiskLevel, 
  ChartPointRisk,
  RiskStats,
  RISK_LEVELS 
} from '../../data/historicalMoraRiskData';

type MetricWindow = 'entry2m' | 'mora30' | 'mora90';
type SegmentFilter = 'HIT' | 'NOHIT';

interface MetricMeta {
  id: MetricWindow;
  title: string;
  subtitle: string;
  dataKeySdo: 'entry2mSdo' | 'mora303mSdo' | 'mora909mSdo';
  dataKeyCta: 'entry2mCta' | 'mora303mCta' | 'mora909mCta';
  statsKey: 'statsEntry2m' | 'statsMora30' | 'statsMora90';
  maxDomain: number;
}

const METRIC_CONFIGS: Record<MetricWindow, MetricMeta> = {
  entry2m: {
    id: 'entry2m',
    title: 'Entry @ 2MOB (Nivel Saldo)',
    subtitle: 'Mora temprana a 2 meses de madurez',
    dataKeySdo: 'entry2mSdo',
    dataKeyCta: 'entry2mCta',
    statsKey: 'statsEntry2m',
    maxDomain: 18,
  },
  mora30: {
    id: 'mora30',
    title: 'Mora 30+ @ 3MOB (Nivel Saldo)',
    subtitle: 'Mora de 30+ días a 3 meses de madurez',
    dataKeySdo: 'mora303mSdo',
    dataKeyCta: 'mora303mCta',
    statsKey: 'statsMora30',
    maxDomain: 25,
  },
  mora90: {
    id: 'mora90',
    title: 'Mora 90+ @ 9MOB (Nivel Saldo)',
    subtitle: 'Mora grave de 90+ días a 9 meses de madurez',
    dataKeySdo: 'mora909mSdo',
    dataKeyCta: 'mora909mCta',
    statsKey: 'statsMora90',
    maxDomain: 45,
  },
};

const SEGMENTS: { key: SegmentFilter; label: string }[] = [
  { key: 'HIT', label: 'Hit' },
  { key: 'NOHIT', label: 'No Hit' },
];

export const SituacionActualBlock: React.FC = () => {
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<RiskLevel>('1. MUY BAJO');
  const [selectedSegment, setSelectedSegment] = useState<SegmentFilter>('HIT');
  const [activeTab, setActiveTab] = useState<MetricWindow>('entry2m');
  const [showAllCharts, setShowAllCharts] = useState<boolean>(false);

  const riskData = useMemo(() => {
    return getRiskMoraChartData(selectedRiskLevel, selectedSegment);
  }, [selectedRiskLevel, selectedSegment]);

  const meta = METRIC_CONFIGS[activeTab];

  const renderTooltip = (props: any, currentMeta: MetricMeta) => {
    const { active, payload } = props;
    if (!active || !payload || !payload.length) return null;

    const point: ChartPointRisk = payload[0].payload;
    if (!point) return null;

    const moraSdoVal = point[currentMeta.dataKeySdo];
    const moraCtaVal = point[currentMeta.dataKeyCta];
    const stats: RiskStats = riskData[currentMeta.statsKey];

    return (
      <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-4 text-white shadow-2xl backdrop-blur-md max-w-xs text-xs">
        <div className="font-extrabold text-sm text-purple-300 border-b border-slate-700 pb-2 mb-2.5 flex items-center justify-between">
          <span>Periodo: {point.label}</span>
          <span className="text-[10px] font-mono text-slate-400">({point.periodo})</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded-xl border border-purple-500/30">
            <span className="text-slate-300 font-semibold">Mora en Saldo:</span>
            <span className="font-bold text-rose-400 font-mono text-sm">
              {moraSdoVal !== undefined ? `${moraSdoVal.toFixed(2)}%` : 'N/D'}
            </span>
          </div>

          <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded-xl border border-blue-500/30">
            <span className="text-slate-300 font-semibold">Mora en Cuentas:</span>
            <span className="font-bold text-blue-300 font-mono text-sm">
              {moraCtaVal !== undefined ? `${moraCtaVal.toFixed(2)}%` : 'N/D'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-800/50 p-2 rounded-xl">
            <div>
              <span className="text-slate-400 block">Aperturas:</span>
              <span className="font-bold text-white font-mono">{point.totalCuentas.toLocaleString()} ctas</span>
            </div>
            <div>
              <span className="text-slate-400 block">Línea Promedio:</span>
              <span className="font-bold text-purple-300 font-mono">${Math.round(point.lineaPromedio).toLocaleString()} MXN</span>
            </div>
          </div>

          <div className="border-t border-slate-700/80 pt-2 text-[10px] text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Mora Promedio (Media):</span>
              <span className="font-mono font-bold text-purple-300">{stats.meanSdo.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between">
              <span>Rango Tolerancia (±1 DE):</span>
              <span className="font-mono text-slate-300">{stats.lowerBandSdo.toFixed(2)}% - {stats.upperBandSdo.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSingleChart = (currentMeta: MetricMeta) => {
    const stats: RiskStats = riskData[currentMeta.statsKey];
    let validPoints = riskData.points.filter(p => p[currentMeta.dataKeySdo] >= 0);

    if (currentMeta.id === 'entry2m') {
      validPoints = validPoints.filter(p => p.periodo <= '2026-05');
    } else if (currentMeta.id === 'mora30') {
      validPoints = validPoints.filter(p => p.periodo <= '2026-04');
    } else if (currentMeta.id === 'mora90') {
      validPoints = validPoints.filter(p => p.periodo <= '2025-11');
    }

    const maxVal = Math.max(...validPoints.map(p => p[currentMeta.dataKeySdo] || 0), stats.upperBandSdo);
    const yDomainUpper = Math.ceil(maxVal * 1.25) || currentMeta.maxDomain;

    return (
      <div className="space-y-4">
        {/* Metric Header & Scorecards */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <div>
            <h3 className="text-base font-extrabold text-[#51186B] flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#E3007B]" />
              {currentMeta.title} - Nivel {selectedRiskLevel}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Segmento: <span className="font-bold text-[#51186B]">{selectedSegment === 'HIT' ? 'Hit' : 'No Hit'}</span> | Referencia: Media ({stats.meanSdo.toFixed(2)}%) ± DE ({stats.stdDevSdo.toFixed(2)} pp)
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-purple-50 border border-purple-100 px-3.5 py-1.5 rounded-2xl text-center">
              <span className="text-[10px] text-purple-600 font-bold uppercase tracking-wider block">Mora Promedio (Media)</span>
              <span className="text-sm font-extrabold text-[#51186B] font-mono">{stats.meanSdo.toFixed(2)}%</span>
            </div>
            <div className="bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-2xl text-center">
              <span className="text-[10px] text-rose-600 font-bold uppercase tracking-wider block">Desv. Estándar (DE)</span>
              <span className="text-sm font-extrabold text-[#E3007B] font-mono">±{stats.stdDevSdo.toFixed(2)} pp</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="w-full h-[380px] my-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={validPoints} margin={{ top: 20, right: 35, left: -10, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={true} />
              
              <XAxis 
                dataKey="label" 
                tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }}
                interval={0}
                angle={-35}
                textAnchor="end"
                height={50}
                dy={6}
              />
              
              <YAxis 
                domain={[0, yDomainUpper]}
                tickFormatter={(val) => `${val.toFixed(1)}%`}
                tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }}
              />

              <Tooltip content={(props) => renderTooltip(props, currentMeta)} />
              
              <Legend 
                verticalAlign="top" 
                align="left" 
                wrapperStyle={{ paddingBottom: '15px', fontSize: '11px', fontWeight: 600 }}
              />

              {/* Band area using ReferenceArea */}
              <ReferenceArea 
                {...({ 
                  y1: stats.lowerBandSdo, 
                  y2: stats.upperBandSdo, 
                  fill: '#fbcfe8', 
                  fillOpacity: 0.25 
                } as any)}
              />

              {/* Reference Line: Mean + Stdv */}
              <ReferenceLine 
                y={stats.upperBandSdo} 
                stroke="#e11d48" 
                strokeDasharray="4 4" 
                strokeWidth={1.5}
              />

              {/* Reference Line: Mean */}
              <ReferenceLine 
                y={stats.meanSdo} 
                stroke="#51186B" 
                strokeWidth={2}
              />

              {/* Reference Line: Mean - Stdv */}
              <ReferenceLine 
                y={stats.lowerBandSdo} 
                stroke="#059669" 
                strokeDasharray="4 4" 
                strokeWidth={1.5}
              />

              {/* Mora Saldo % Line */}
              <Line 
                type="monotone" 
                dataKey={currentMeta.dataKeySdo} 
                name={`Mora en Saldo % (${selectedRiskLevel} - ${selectedSegment === 'HIT' ? 'Hit' : 'No Hit'})`} 
                stroke="#E3007B" 
                strokeWidth={3}
                dot={{ r: 4, fill: '#E3007B', strokeWidth: 1.5, stroke: '#ffffff' }}
                activeDot={{ r: 7, stroke: '#51186B', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Footer info note */}
        <div className="p-3 bg-purple-50/70 border border-purple-200/80 rounded-2xl flex items-center justify-between text-xs text-purple-900">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#E3007B] flex-shrink-0" />
            <p className="text-[11px] leading-relaxed">
              <strong>Lectura del Gráfico:</strong> La línea rosa continua representa la mora histórica mensual. El área sombreada rosada enmarca la banda de volatilidad esperable (Media ± 1 Desviación Estándar).
            </p>
          </div>
          <span className="text-[11px] font-mono font-bold text-[#51186B] whitespace-nowrap hidden md:inline-block">
            Nivel: {selectedRiskLevel}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl border border-purple-100 shadow-sm p-5 sm:p-7 space-y-5">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-[#51186B] text-[10px] font-extrabold uppercase tracking-wider">
              Segmento Target
            </span>
            <span className="text-xs text-slate-400 font-mono">Moras Históricas por Nivel de Riesgo</span>
          </div>
          <h2 className="text-xl font-extrabold text-[#51186B] mt-1">
            Segmento Target: Moras Históricas por Nivel de Riesgo
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Análisis de comportamiento por nivel de riesgo scorecard (1. MUY BAJO a 5. MUY ALTO) con bandas de tolerancia estadística.
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

      {/* Integrated Filter Bar */}
      <div className="bg-slate-50/80 border border-slate-100 p-2.5 rounded-2xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#51186B] uppercase tracking-wider flex items-center gap-1.5 mr-1">
            <ShieldAlert className="w-4 h-4 text-[#E3007B]" />
            Nivel de Riesgo:
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {RISK_LEVELS.map((level) => {
              const isSelected = selectedRiskLevel === level;
              return (
                <button
                  key={level}
                  onClick={() => setSelectedRiskLevel(level)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all border ${
                    isSelected
                      ? 'bg-[#51186B] text-white border-[#51186B] shadow-xs scale-[1.02]'
                      : 'bg-white text-slate-700 border-purple-200/80 hover:bg-purple-100/60 hover:text-[#51186B]'
                  }`}
                >
                  {level}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 self-end lg:self-auto">
          <span className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#E3007B]" />
            Filtro:
          </span>
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200/80 text-xs">
            {SEGMENTS.map((seg) => (
              <button
                key={seg.key}
                onClick={() => setSelectedSegment(seg.key)}
                className={`px-3 py-1 rounded-lg font-extrabold transition-all ${
                  selectedSegment === seg.key
                    ? 'bg-[#E3007B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {seg.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart View */}
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
