import React from 'react';
import { CanvasBlock } from '../types';
import { ExecutiveSummaryBlock } from './blocks/ExecutiveSummaryBlock';
import { SituacionActualBlock } from './blocks/SituacionActualBlock';
import { SegmentoTargetBlock } from './blocks/SegmentoTargetBlock';
import { CreditLineMetricsBlock } from './blocks/CreditLineMetricsBlock';
import { ActivationChartsBlock } from './blocks/ActivationChartsBlock';
import { BadRatesChartBlock } from './blocks/BadRatesChartBlock';
import { PilotingStrategyBlock } from './blocks/PilotingStrategyBlock';
import { ScenarioSimulatorBlock } from './blocks/ScenarioSimulatorBlock';
import { RentabilidadBlock } from './blocks/RentabilidadBlock';
import { AnexoBlock } from './blocks/AnexoBlock';
import { RISK_LEVEL_BAD_RATES_TARGET, TOTAL_SEGMENT_BAD_RATES_TARGET } from '../data/testData';
import { Eye, EyeOff, LayoutGrid, MoveUp, MoveDown } from 'lucide-react';

interface PresentationCanvasProps {
  blocks: CanvasBlock[];
  onToggleBlockVisibility: (id: string) => void;
  onMoveBlock: (id: string, direction: 'up' | 'down') => void;
}

export const PresentationCanvas: React.FC<PresentationCanvasProps> = ({
  blocks,
  onToggleBlockVisibility,
  onMoveBlock,
}) => {
  const visibleBlocks = blocks.filter(b => b.visible).sort((a, b) => a.order - b.order);

  const renderBlockComponent = (type: CanvasBlock['type']) => {
    switch (type) {
      case 'summary':
        return <ExecutiveSummaryBlock />;
      case 'situacion_actual':
        return <SituacionActualBlock />;
      case 'segmento_target':
        return <AnexoBlock />;
      case 'credit_line':
        return <CreditLineMetricsBlock />;
      case 'activation':
        return <ActivationChartsBlock />;
      case 'bad_rates':
      case 'bad_rates_target':
        return <BadRatesChartBlock />;
      case 'piloting':
        return <PilotingStrategyBlock />;
      case 'simulator':
        return <ScenarioSimulatorBlock />;
      case 'rentabilidad':
        return <RentabilidadBlock />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Canvas Controls Toolbar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-purple-50 text-[#51186B] border border-purple-200/80">
            <LayoutGrid className="w-5 h-5 text-[#E3007B]" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-[#51186B]">Canvas Libre de Trabajo</h2>
            <p className="text-xs text-slate-500">Organiza los bloques interactivos de acuerdo a la dinámica de tu reunión</p>
          </div>
        </div>

        {/* Block Toggles */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">Bloques Visibles:</span>
          {blocks.map(block => (
            <button
              key={block.id}
              onClick={() => onToggleBlockVisibility(block.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                block.visible
                  ? 'bg-purple-50 text-[#51186B] border border-purple-200 hover:bg-purple-100'
                  : 'bg-slate-100 text-slate-400 border border-slate-200/80 line-through'
              }`}
            >
              {block.visible ? <Eye className="w-3.5 h-3.5 text-[#E3007B]" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{block.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Active Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleBlocks.map((block) => (
          <div
            key={block.id}
            className={`${
              block.colSpan === 4
                ? 'col-span-1 md:col-span-2 lg:col-span-4'
                : block.colSpan === 3
                ? 'col-span-1 md:col-span-2 lg:col-span-3'
                : block.colSpan === 2
                ? 'col-span-1 md:col-span-2 lg:col-span-2'
                : 'col-span-1'
            } transition-all duration-200 relative group`}
          >
            {/* Block Reorder Bar on hover */}
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-white/95 backdrop-blur-sm p-1 rounded-xl border border-slate-200 shadow-md">
              <button
                onClick={() => onMoveBlock(block.id, 'up')}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                title="Mover arriba"
              >
                <MoveUp className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onMoveBlock(block.id, 'down')}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                title="Mover abajo"
              >
                <MoveDown className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onToggleBlockVisibility(block.id)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50"
                title="Ocultar bloque"
              >
                <EyeOff className="w-3.5 h-3.5" />
              </button>
            </div>

            {renderBlockComponent(block.type)}
          </div>
        ))}
      </div>

    </div>
  );
};
