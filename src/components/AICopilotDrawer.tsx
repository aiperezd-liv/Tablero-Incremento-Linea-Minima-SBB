import React, { useState } from 'react';
import { X, Send, Bot, Sparkles, User, HelpCircle, Loader2, RefreshCw } from 'lucide-react';

interface AICopilotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSectionTitle?: string;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AICopilotDrawer: React.FC<AICopilotDrawerProps> = ({
  isOpen,
  onClose,
  currentSectionTitle = 'General'
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: '¡Hola! Soy tu Asistente Ejecutivo de IA para la presentación del **Test Incremento Línea Mínima (SBB Departamental)**.\n\nPuedes hacerme preguntas directas de los Stakeholders o pedirme resúmenes de riesgo y viabilidad para la junta.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const quickQuestions = [
    "¿Por qué es seguro incrementar la línea de $2k a $4k para ingresos > $4k?",
    "¿Cuáles son las reglas de apagado (kill-switch) a los 3 y 6 meses?",
    "¿Cómo impacta esto en la línea de crédito promedio del segmento No Hit?",
    "¿Qué margen tenemos respecto al Target Máximo de morosidad en Entry@MoB?"
  ];

  const handleSend = async (customPrompt?: string) => {
    const promptToSend = customPrompt || inputPrompt;
    if (!promptToSend.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: promptToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai-copilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptToSend,
          context: currentSectionTitle
        })
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.message || data.error);
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.text || 'Sin respuesta.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: `⚠️ **Aviso de Configuración:** ${err?.message || 'No se pudo contactar al servicio de IA.'}\n\n*Recuerda que todos los datos y métricas del Test están disponibles en los bloques interactivos.*`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-lg bg-slate-900 border-l border-slate-800 text-slate-100 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-fuchsia-500/20 text-[#E3007B] border border-fuchsia-500/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-1.5">
                Asistente Ejecutivo IA
                <span className="px-2 py-0.2 rounded-full bg-fuchsia-500/20 text-fuchsia-300 text-[10px] font-mono">
                  Suburbia AI
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Soporte en tiempo real para preguntas de Stakeholders
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Question Chips */}
        <div className="p-3 bg-slate-950/40 border-b border-slate-800 text-xs">
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5 flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-indigo-400" /> Preguntas frecuentes de Stakeholders:
          </span>
          <div className="flex flex-col gap-1.5">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={isLoading}
                className="text-left px-2.5 py-1.5 rounded-lg bg-slate-800/60 hover:bg-indigo-500/10 border border-slate-700/80 hover:border-indigo-500/40 text-slate-300 hover:text-indigo-200 text-xs transition-all flex items-center justify-between group"
              >
                <span className="truncate">{q}</span>
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-rose-600 text-white rounded-br-none'
                  : 'bg-slate-800/90 text-slate-200 border border-slate-700/70 rounded-bl-none shadow-sm'
              }`}>
                <div className="whitespace-pre-wrap">{msg.text}</div>
                <span className="block text-[9px] text-slate-400 mt-1.5 text-right opacity-80">
                  {msg.timestamp}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-indigo-300 text-xs py-2 px-3 bg-slate-800/50 rounded-xl w-fit">
              <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
              <span>Analizando datos del test y normativas de riesgo...</span>
            </div>
          )}
        </div>

        {/* Input Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Haz una pregunta sobre el test para la junta..."
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isLoading}
              className="p-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl transition-all shadow"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
