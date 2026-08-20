import React from 'react';
import { SituacionActualBlock } from './SituacionActualBlock';
import { SegmentoTargetBlock } from './SegmentoTargetBlock';
import { FileText } from 'lucide-react';

export const AnexoBlock: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Anexo Master Header */}
      <div className="bg-white rounded-3xl p-5 border border-purple-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-[#51186B] text-[10px] font-extrabold uppercase tracking-wider">
              Anexo Técnico
            </span>
            <span className="text-xs text-slate-400 font-mono">Información Complementaria</span>
          </div>
          <h2 className="text-xl font-extrabold text-[#51186B] mt-1 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#E3007B]" />
            Anexo: Análisis Detallado de Morosidades Históricas
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Comportamiento histórico por nivel de riesgo scorecard y comparativa por bandas de ingresos.
          </p>
        </div>
      </div>

      {/* Always display both charts */}
      <SituacionActualBlock />
      <SegmentoTargetBlock />
    </div>
  );
};

