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
  TrendingUp, 
  BarChart3, 
  ShieldAlert, 
  Activity,
  Wallet
} from 'lucide-react';
import { 
  getRentabilidadByRiskLevel, 
  RentabilidadPoint,
  RentabilidadStats
} from '../../data/rentabilidadData';

type RiskLevel = '1. MUY BAJO' | '2. BAJO' | '3. MEDIO' | '4. ALTO' | '5. MUY ALTO';
type HorizonKey = '6m' | '9m' | '12m';
type SegmentFilter = 'HIT' | 'NOHIT';

const RISK_LEVELS: RiskLevel[] = [
  '1. MUY BAJO',
  '2. BAJO',
  '3. MEDIO',
  '4. ALTO',
  '5. MUY ALTO',
];

export const RentabilidadBlock: React.FC = () => {
  // --- Chart State: Segmento Target strictly ---
  const [selectedSegment, setSelectedSegment] = useState<SegmentFilter>('HIT');
  const [selectedRisk, setSelectedRisk] = useState<RiskLevel>('3. MEDIO');
  const [selectedHorizon, setSelectedHorizon] = useState<HorizonKey>('6m');

  // Data from Segmento Target
  const { points, stats } = useMemo(() => {
    return getRentabilidadByRiskLevel('target', selectedRisk, selectedSegment);
  }, [selectedRisk, selectedSegment]);

  // Metric key getters
  const getChartDataKey = (h: HorizonKey) => {
    if (h === '6m') return 'lroi6mPct';
    if (h === '9m') return 'lroi9mPct';
    return 'lroi12mPct';
  };

  const getChartColocadoKey = (h: HorizonKey) => {
    if (h === '6m') return 'colocado6m';
    if (h === '9m') return 'colocado9m';
    return 'colocado12m';
  };

  const getChartUtKey = (h: HorizonKey) => {
    if (h === '6m') return 'utFinanciera6m';
    if (h === '9m') return 'utFinanciera9m';
    return 'utFinanciera12m';
  };

  const getChartMean = (statsObj: RentabilidadStats, h: HorizonKey) => {
    if (h === '6m') return statsObj.mean6m;
    if (h === '9m') return statsObj.mean9m;
    return statsObj.mean12m;
  };

  const getChartStdDev = (statsObj: RentabilidadStats, h: HorizonKey) => {
    if (h === '6m') return statsObj.stdDev6m;
    if (h === '9m') return statsObj.stdDev9m;
    return statsObj.stdDev12m;
  };

  const getChartUpper = (statsObj: RentabilidadStats, h: HorizonKey) => {
    if (h === '6m') return statsObj.upperBand6m;
    if (h === '9m') return statsObj.upperBand9m;
    return statsObj.upperBand12m;
  };

  const getChartLower = (statsObj: RentabilidadStats, h: HorizonKey) => {
    if (h === '6m') return statsObj.lowerBand6m;
    if (h === '9m') return statsObj.lowerBand9m;
    return statsObj.lowerBand12m;
  };

  // Filter valid non-null points
  const validPoints = useMemo(() => {
    const dataKey = getChartDataKey(selectedHorizon);
    return points.filter(p => p[dataKey] !== null && p[dataKey] !== undefined);
  }, [points, selectedHorizon]);

  const meanVal = getChartMean(stats, selectedHorizon);
  const stdDevVal = getChartStdDev(stats, selectedHorizon);
  const upperVal = getChartUpper(stats, selectedHorizon);
  const lowerVal = getChartLower(stats, selectedHorizon);

  // Y-axis max domain calculation
  const yMax = useMemo(() => {
    const dataKey = getChartDataKey(selectedHorizon);
    const maxData = Math.max(...validPoints.map(p => (p[dataKey] as number) || 0), upperVal);
    return Math.ceil(maxData * 1.25) || 25;
  }, [validPoints, selectedHorizon, upperVal]);

  // Tooltip
  const renderTooltip = (props: any) => {
    const { active, payload } = props;
    if (!active || !payload || !payload.length) return null;
    const point: RentabilidadPoint = payload[0].payload;
    const dataKey = getChartDataKey(selectedHorizon);
    const colKey = getChartColocadoKey(selectedHorizon);
    const utKey = getChartUtKey(selectedHorizon);

    const lroiVal = point[dataKey];
    const colVal = point[colKey];
    const utVal = point[utKey];

    return (
      <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-4 text-white shadow-2xl backdrop-blur-md max-w-xs text-xs">
        <div className="font-extrabold text-sm text-purple-300 border-b border-slate-700 pb-2 mb-2.5 flex items-center justify-between">
          <span>Periodo: {point.label}</span>
          <span className="text-[10px] font-mono text-slate-400">({point.periodo})</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between bg-purple-950/80 p-2 rounded-xl border border-purple-500/40">
            <span className="text-purple-200 font-semibold">Rentabilidad LROI:</span>
            <span className="font-bold text-emerald-400 font-mono text-sm">
              {lroiVal !== null ? `${lroiVal.toFixed(2)}%` : 'N/D'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-800/60 p-2 rounded-xl">
            <div>
              <span className="text-slate-400 block">Colocado ({selectedHorizon.toUpperCase()}):</span>
              <span className="font-bold text-white font-mono">
                ${colVal !== null ? Math.round(colVal).toLocaleString() : 'N/D'}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Utilidad Fin.:</span>
              <span className="font-bold text-purple-300 font-mono">
                ${utVal !== null ? Math.round(utVal).toLocaleString() : 'N/D'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-800/40 p-2 rounded-xl">
            <div>
              <span className="text-slate-400 block">Aperturas:</span>
              <span className="font-bold text-slate-200 font-mono">{point.totalCuentas.toLocaleString()} ctas</span>
            </div>
            <div>
              <span className="text-slate-400 block">Línea Promedio:</span>
              <span className="font-bold text-slate-200 font-mono">${Math.round(point.lineaPromedio).toLocaleString()}</span>
            </div>
          </div>

          <div className="border-t border-slate-700/80 pt-2 text-[10px] text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>LROI Promedio (Media):</span>
              <span className="font-mono font-bold text-purple-300">{meanVal.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between">
              <span>Rango Tolerancia (±1 DE):</span>
              <span className="font-mono text-slate-300">{lowerVal.toFixed(2)}% - {upperVal.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-3xl border border-purple-100 shadow-sm p-5 sm:p-7 space-y-5">

      {/* 1. Main Master Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider">
              Segmento Target
            </span>
            <span className="text-xs text-slate-400 font-mono">Indicador LROI % (Return on Investment)</span>
          </div>
          <h2 className="text-xl font-extrabold text-[#51186B] mt-1 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#E3007B]" />
            Rentabilidad Histórica - Segmento Target
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Análisis longitudinal de retorno de inversión por nivel de riesgo scorecard exclusivamente para el Segmento Target (Ingresos ≥ $4,000).
          </p>
        </div>

        {/* Global info pill / Formula */}
        <div className="flex items-center gap-3 bg-purple-50/70 border border-purple-100 px-4 py-2.5 rounded-2xl flex-shrink-0">
          <Wallet className="w-5 h-5 text-[#51186B]" />
          <div>
            <span className="text-[10px] text-purple-700 font-bold uppercase block">Fórmula de Retorno</span>
            <span className="text-xs font-bold text-[#51186B] font-mono">LROI % = Utilidad Financiera / Total Colocado</span>
          </div>
        </div>
      </div>

      {/* 2. Sub-header & Scorecards for Selected Risk Level */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        <div>
          <h3 className="text-base font-extrabold text-[#51186B] flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#E3007B]" />
            Rentabilidad LROI % - Segmento Target (Nivel {selectedRisk})
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Segmento Target: <span className="font-bold text-[#51186B]">{selectedSegment === 'HIT' ? 'Hit' : 'No Hit'}</span> | Referencia: Media {meanVal.toFixed(2)}% ± DE {stdDevVal.toFixed(2)} pp
          </p>
        </div>

        {/* TWO SCORE CARDS: MEDIA & STD DEV */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="bg-purple-50 border border-purple-100 px-3.5 py-1.5 rounded-2xl text-center">
            <span className="text-[10px] text-purple-600 font-bold uppercase tracking-wider block">Rentabilidad Promedio (Media)</span>
            <span className="text-sm font-extrabold text-[#51186B] font-mono">{meanVal.toFixed(2)}%</span>
          </div>
          <div className="bg-rose-50 border border-rose-100 px-3.5 py-1.5 rounded-2xl text-center">
            <span className="text-[10px] text-rose-600 font-bold uppercase tracking-wider block">Desv. Estándar (DE)</span>
            <span className="text-sm font-extrabold text-[#E3007B] font-mono">±{stdDevVal.toFixed(2)} pp</span>
          </div>
        </div>
      </div>

      {/* 3. Filter Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs bg-slate-50/80 p-2.5 rounded-2xl border border-slate-100">
        
        {/* Risk Level Selector Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1.5">Nivel:</span>
          {RISK_LEVELS.map(level => {
            const isSelected = selectedRisk === level;
            const isLowSample = (selectedSegment === 'HIT' && ['1. MUY BAJO', '2. BAJO', '3. MEDIO'].includes(level)) ||
                                (selectedSegment === 'NOHIT' && ['1. MUY BAJO', '2. BAJO'].includes(level));
            return (
              <button
                key={level}
                onClick={() => setSelectedRisk(level)}
                className={`px-3 py-1.5 rounded-xl font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#51186B] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-purple-100/60 border border-slate-200/80'
                }`}
              >
                <ShieldAlert className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E3007B]' : 'text-purple-600'}`} />
                <span>{level}</span>
                {isLowSample && (
                  <span className="text-[9px] px-1 bg-amber-100 text-amber-900 rounded font-bold ml-0.5">
                    *
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Segment and Horizon Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Segment Selector (HIT vs NOHIT) */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200/80">
            <button
              onClick={() => setSelectedSegment('HIT')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                selectedSegment === 'HIT'
                  ? 'bg-[#E3007B] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hit
            </button>
            <button
              onClick={() => setSelectedSegment('NOHIT')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                selectedSegment === 'NOHIT'
                  ? 'bg-[#E3007B] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              No Hit
            </button>
          </div>

          {/* Horizon Selector (6MOB, 9MOB, 12MOB) */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200/80 font-mono">
            {(['6m', '9m', '12m'] as HorizonKey[]).map(h => (
              <button
                key={h}
                onClick={() => setSelectedHorizon(h)}
                className={`px-2 py-1 rounded-lg font-bold transition-all ${
                  selectedHorizon === h
                    ? 'bg-purple-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {h.toUpperCase()}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* 4. Warning callout for low sample size */}
      {selectedSegment === 'HIT' && ['1. MUY BAJO', '2. BAJO', '3. MEDIO'].includes(selectedRisk) && (
        <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200/90 text-amber-900 text-xs flex items-start gap-2.5 shadow-2xs">
          <div className="p-1 rounded-lg bg-amber-100 text-amber-800 font-bold flex-shrink-0 mt-0.5">
            ⚠️
          </div>
          <div className="leading-relaxed">
            <strong className="font-bold text-amber-950 block mb-0.5">Nota metodológica de muestra (HIT - {selectedRisk}):</strong>
            El nivel de muestra en los Niveles de Riesgo 1, 2 y 3 para el segmento HIT es muy bajo, por lo que hay que tomar con pinzas los valores de media y desviaciones estándar.
          </div>
        </div>
      )}

      {selectedSegment === 'NOHIT' && ['1. MUY BAJO', '2. BAJO'].includes(selectedRisk) && (
        <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200/90 text-amber-900 text-xs flex items-start gap-2.5 shadow-2xs">
          <div className="p-1 rounded-lg bg-amber-100 text-amber-800 font-bold flex-shrink-0 mt-0.5">
            ⚠️
          </div>
          <div className="leading-relaxed">
            <strong className="font-bold text-amber-950 block mb-0.5">Nota metodológica de muestra (NO HIT - {selectedRisk}):</strong>
            El nivel de muestra en los Niveles de Riesgo 1 y 2 para el segmento NO HIT es muy bajo, por lo que hay que tomar con pinzas los valores de media y desviaciones estándar.
          </div>
        </div>
      )}

      {/* 5. Recharts Chart */}
      <div className="w-full h-[380px] my-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={validPoints} margin={{ top: 20, right: 35, left: -10, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={true} />
            
            <XAxis 
              dataKey="label" 
              interval={0}
              tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }}
              angle={-35}
              textAnchor="end"
              height={55}
              dy={6}
            />
            
            <YAxis 
              domain={[0, yMax]}
              tickFormatter={(val) => `${val.toFixed(1)}%`}
              tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }}
            />

            <Tooltip content={renderTooltip} />
            
            <Legend 
              verticalAlign="top" 
              align="left" 
              wrapperStyle={{ paddingBottom: '15px', fontSize: '11px', fontWeight: 600 }}
            />

            {/* Band area using ReferenceArea */}
            <ReferenceArea 
              {...({ 
                y1: lowerVal, 
                y2: upperVal, 
                fill: '#fbcfe8', 
                fillOpacity: 0.25 
              } as any)}
            />

            {/* Reference Line: Upper Band (+1 DE) */}
            <ReferenceLine 
              y={upperVal} 
              stroke="#e11d48" 
              strokeDasharray="4 4" 
              strokeWidth={1.5}
            />

            {/* Reference Line: Mean */}
            <ReferenceLine 
              y={meanVal} 
              stroke="#51186B" 
              strokeWidth={2}
            />

            {/* Reference Line: Lower Band (-1 DE) */}
            <ReferenceLine 
              y={lowerVal} 
              stroke="#059669" 
              strokeDasharray="4 4" 
              strokeWidth={1.5}
            />

            {/* Rentabilidad LROI % Line */}
            <Line
              type="monotone"
              dataKey={getChartDataKey(selectedHorizon)}
              name="LROI Cohorte"
              stroke="#E3007B"
              strokeWidth={3}
              dot={{ r: 4, fill: '#E3007B', strokeWidth: 1.5, stroke: '#ffffff' }}
              activeDot={{ r: 7, stroke: '#51186B', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 6. Footer info banner */}
      <div className="mt-3 p-3 bg-purple-50/70 border border-purple-200/80 rounded-2xl flex items-center justify-between text-xs text-purple-900">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#E3007B] flex-shrink-0" />
          <p className="text-[11px] leading-relaxed">
            <strong>Lectura del Gráfico:</strong> La línea rosa continua representa la rentabilidad LROI % mensual del Segmento Target. El área sombreada verde enmarca la banda de comportamiento esperado (Media ± 1 Desviación Estándar).
          </p>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#51186B] whitespace-nowrap hidden md:inline-block">
          Nivel: {selectedRisk}
        </span>
      </div>

    </div>
  );
};

