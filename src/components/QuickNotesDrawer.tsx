import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  Pin, 
  Trash2, 
  StickyNote as StickyNoteIcon, 
  Check, 
  Tag, 
  MessageSquare,
  HelpCircle,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { QuickNote } from '../types';

interface QuickNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notes: QuickNote[];
  onAddNote: (note: Omit<QuickNote, 'id' | 'timestamp'>) => void;
  onDeleteNote: (id: string) => void;
  onTogglePin: (id: string) => void;
}

export const QuickNotesDrawer: React.FC<QuickNotesDrawerProps> = ({
  isOpen,
  onClose,
  notes,
  onAddNote,
  onDeleteNote,
  onTogglePin,
}) => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [category, setCategory] = useState<QuickNote['category']>('General');
  const [color, setColor] = useState<QuickNote['color']>('blue');
  const [author, setAuthor] = useState('Stakeholder');
  const [filterCategory, setFilterCategory] = useState<string>('All');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    onAddNote({
      title: newTitle.trim(),
      content: newContent.trim(),
      category,
      color,
      author: author.trim() || 'Presentador',
      pinned: false,
    });

    setNewTitle('');
    setNewContent('');
  };

  const filteredNotes = notes.filter(n => filterCategory === 'All' || n.category === filterCategory);
  const sortedNotes = [...filteredNotes].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  const getColorClasses = (c: QuickNote['color']) => {
    switch (c) {
      case 'amber': return 'bg-amber-500/10 border-amber-500/30 text-amber-200';
      case 'emerald': return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200';
      case 'rose': return 'bg-rose-500/10 border-rose-500/30 text-rose-200';
      case 'purple': return 'bg-purple-500/10 border-purple-500/30 text-purple-200';
      default: return 'bg-blue-500/10 border-blue-500/30 text-blue-200';
    }
  };

  const getCategoryBadge = (cat: QuickNote['category']) => {
    switch (cat) {
      case 'Dudas':
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30"><HelpCircle className="w-3 h-3" /> Dudas</span>;
      case 'Acuerdos':
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"><Check className="w-3 h-3" /> Acuerdos</span>;
      case 'Acción':
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-rose-500/20 text-rose-300 border border-rose-500/30"><AlertTriangle className="w-3 h-3" /> Acción</span>;
      case 'Feedback':
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30"><Lightbulb className="w-3 h-3" /> Feedback</span>;
      default:
        return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30"><MessageSquare className="w-3 h-3" /> General</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 text-slate-100 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <StickyNoteIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Notas Rápidas de Presentación</h2>
              <p className="text-xs text-slate-400">Acuerdos, dudas y hallazgos con Stakeholders</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Note Creator */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/40">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                placeholder="Título de la nota o acuerdo..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-xs font-medium text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div>
              <textarea
                rows={2}
                placeholder="Detalles, decisiones o preguntas clave..."
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="block text-[10px] text-slate-400 mb-1">Categoría</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as QuickNote['category'])}
                  className="w-full px-2 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-xs text-slate-200 focus:outline-none"
                >
                  <option value="General">General</option>
                  <option value="Dudas">Dudas</option>
                  <option value="Acuerdos">Acuerdos</option>
                  <option value="Acción">Acción</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 mb-1">Autor/Stakeholder</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-2 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-xs text-slate-200 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              {/* Color selector */}
              <div className="flex items-center gap-1">
                {(['blue', 'emerald', 'amber', 'purple', 'rose'] as QuickNote['color'][]).map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={`w-5 h-5 rounded-full border ${
                      color === c ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'
                    } ${
                      c === 'blue' ? 'bg-blue-500' :
                      c === 'emerald' ? 'bg-emerald-500' :
                      c === 'amber' ? 'bg-amber-500' :
                      c === 'purple' ? 'bg-purple-500' : 'bg-rose-500'
                    }`}
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={!newTitle.trim() || !newContent.trim()}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white rounded-lg text-xs font-semibold shadow transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Agregar Nota</span>
              </button>
            </div>
          </form>
        </div>

        {/* Filter bar */}
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400">Filtrar:</span>
          <div className="flex gap-1 overflow-x-auto py-1 no-scrollbar">
            {['All', 'General', 'Dudas', 'Acuerdos', 'Acción', 'Feedback'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-2 py-0.5 rounded-full text-[10px] font-medium transition-all ${
                  filterCategory === cat
                    ? 'bg-rose-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat === 'All' ? 'Todas' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notes List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {sortedNotes.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <StickyNoteIcon className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p className="text-xs">No hay notas registradas en esta categoría.</p>
            </div>
          ) : (
            sortedNotes.map(note => (
              <div 
                key={note.id} 
                className={`p-3 rounded-xl border relative transition-all ${getColorClasses(note.color)} ${
                  note.pinned ? 'ring-1 ring-amber-400/50 shadow-md' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    {getCategoryBadge(note.category)}
                    {note.pinned && (
                      <span className="text-[10px] text-amber-400 flex items-center gap-0.5">
                        <Pin className="w-3 h-3 fill-amber-400" /> Fijada
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onTogglePin(note.id)}
                      className={`p-1 rounded hover:bg-white/10 transition-all ${note.pinned ? 'text-amber-400' : 'text-slate-400'}`}
                      title={note.pinned ? 'Desfijar' : 'Fijar al inicio'}
                    >
                      <Pin className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onDeleteNote(note.id)}
                      className="p-1 rounded hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-all"
                      title="Eliminar"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xs font-bold text-white mb-1">{note.title}</h3>
                <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed mb-2">{note.content}</p>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
                  <span>Por: <strong className="text-slate-300">{note.author}</strong></span>
                  <span>{note.timestamp}</span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
