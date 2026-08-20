import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PresentationCanvas } from './components/PresentationCanvas';
import { GoogleAppsScriptModal } from './components/GoogleAppsScriptModal';
import { INITIAL_BLOCKS } from './data/testData';
import { CanvasBlock } from './types';

export default function App() {
  // Blocks state for free canvas
  const [blocks, setBlocks] = useState<CanvasBlock[]>(INITIAL_BLOCKS);

  // Modals state
  const [isAppsScriptOpen, setIsAppsScriptOpen] = useState(false);

  // Canvas block visibility and ordering actions
  const handleToggleBlockVisibility = (id: string) => {
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, visible: !b.visible } : b));
  };

  const handleMoveBlock = (id: string, direction: 'up' | 'down') => {
    setBlocks(prev => {
      const idx = prev.findIndex(b => b.id === id);
      if (idx === -1) return prev;
      if (direction === 'up' && idx === 0) return prev;
      if (direction === 'down' && idx === prev.length - 1) return prev;

      const newArr = [...prev];
      const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
      const tempOrder = newArr[idx].order;
      newArr[idx].order = newArr[targetIdx].order;
      newArr[targetIdx].order = tempOrder;

      return newArr;
    });
  };

  // Export / Print handler
  const handleExport = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-purple-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        onOpenAppsScript={() => setIsAppsScriptOpen(true)}
        onExport={handleExport}
      />

      {/* Main Body: Single Free Canvas / Tablero */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <PresentationCanvas
          blocks={blocks}
          onToggleBlockVisibility={handleToggleBlockVisibility}
          onMoveBlock={handleMoveBlock}
        />
      </main>

      {/* Drawers & Modals */}
      <GoogleAppsScriptModal
        isOpen={isAppsScriptOpen}
        onClose={() => setIsAppsScriptOpen(false)}
      />

    </div>
  );
}
