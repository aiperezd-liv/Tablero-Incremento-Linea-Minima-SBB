import React, { useState } from 'react';
import { X, Copy, Check, Code, ExternalLink, HelpCircle, Layers, FileCode2, AlertTriangle } from 'lucide-react';

interface GoogleAppsScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleAppsScriptModal: React.FC<GoogleAppsScriptModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedCodeGs, setCopiedCodeGs] = useState(false);
  const [copiedIndexHtml, setCopiedIndexHtml] = useState(false);
  const [activeTab, setActiveTab] = useState<'codegs' | 'indexhtml' | 'guide'>('codegs');

  if (!isOpen) return null;

  const codeGsContent = `/**
 * Google Apps Script - Web App Deployment for SBB Canvas
 * Test Incremento Línea Mínima (Liverpool / Suburbia)
 */

function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Canvas de Presentación: Test Línea Mínima SBB')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Endpoint para registrar notas o feedbacks en Google Sheets
 */
function guardarNotaEnSheet(nota) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Notas_Stakeholders') || ss.insertSheet('Notas_Stakeholders');
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Autor', 'Categoría', 'Título', 'Contenido']);
    }
    
    sheet.appendRow([
      new Date(),
      nota.author || 'Stakeholder',
      nota.category || 'General',
      nota.title || '',
      nota.content || ''
    ]);
    return { success: true, message: 'Nota guardada exitosamente en Google Sheets' };
  } catch (err) {
    return { success: false, error: err.toString() };
  }
}`;

  const indexHtmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Canvas de Presentación: Test Línea Mínima SBB</title>
  <style>
    body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #0f172a; }
    iframe { width: 100%; height: 100%; border: none; }
  </style>
</head>
<body>
  <!-- URL compartida de producción/despliegue en Cloud Run -->
  <iframe 
    src="https://ais-pre-6y55tj3jzokshwotdqt3v5-842292103763.us-east1.run.app" 
    allow="clipboard-write; camera; microphone"
    sandbox="allow-scripts allow-same-origin opacity allow-popups allow-forms allow-modals">
  </iframe>
</body>
</html>`;

  const copyToClipboard = (text: string, type: 'codegs' | 'indexhtml') => {
    navigator.clipboard.writeText(text);
    if (type === 'codegs') {
      setCopiedCodeGs(true);
      setTimeout(() => setCopiedCodeGs(false), 2000);
    } else {
      setCopiedIndexHtml(true);
      setTimeout(() => setCopiedIndexHtml(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl text-slate-100 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Despliegue en Google Apps Script
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                  Google Workspace Ready
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Integra este canvas interactivo directamente en Google Apps Script para tu equipo.
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

        {/* Modal Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-900 px-6 pt-2">
          <button
            onClick={() => setActiveTab('codegs')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'codegs'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode2 className="w-4 h-4" />
            <span>Code.gs</span>
          </button>

          <button
            onClick={() => setActiveTab('indexhtml')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'indexhtml'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Index.html</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'guide'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Guía Paso a Paso</span>
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          
          {activeTab === 'codegs' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-300">
                  Copia este código en tu archivo <strong className="text-emerald-400">Code.gs</strong> en tu proyecto de Google Apps Script:
                </p>
                <button
                  onClick={() => copyToClipboard(codeGsContent, 'codegs')}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-all shadow"
                >
                  {copiedCodeGs ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedCodeGs ? '¡Copiado!' : 'Copiar Code.gs'}</span>
                </button>
              </div>

              <pre className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-emerald-300 overflow-x-auto max-h-80 leading-relaxed">
                {codeGsContent}
              </pre>
            </div>
          )}

          {activeTab === 'indexhtml' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-300">
                  Crea un archivo llamado <strong className="text-emerald-400">Index.html</strong> en Google Apps Script y pega esto:
                </p>
                <button
                  onClick={() => copyToClipboard(indexHtmlContent, 'indexhtml')}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-all shadow"
                >
                  {copiedIndexHtml ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedIndexHtml ? '¡Copiado!' : 'Copiar Index.html'}</span>
                </button>
              </div>

              <pre className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-amber-300 overflow-x-auto max-h-80 leading-relaxed">
                {indexHtmlContent}
              </pre>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-4 text-xs text-slate-300">
              
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                <h4 className="font-bold text-amber-300 text-xs flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  ¿Por qué aparece "Error: Page not found"?
                </h4>
                <p className="text-[11px] text-amber-200/90 leading-relaxed">
                  Este error ocurre cuando se accede a la URL de prueba de Apps Script o cuando no se ha publicado la versión final.
                </p>
                <ol className="list-disc pl-5 text-[11px] text-amber-200/90 space-y-1">
                  <li>Haz clic en <strong>Implementar → Nueva implementación</strong>.</li>
                  <li>Asegúrate de que en "Quién tiene acceso" esté seleccionado: <strong>Cualquier persona</strong>.</li>
                  <li>Copia la URL publicada que termina en <code>/exec</code> (nunca uses la que termina en <code>/dev</code>).</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-bold text-xs">1</span>
                  Crear el proyecto en Google Apps Script
                </h3>
                <p className="pl-7 text-slate-400">
                  Ve a <a href="https://script.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline inline-flex items-center gap-1">script.google.com <ExternalLink className="w-3 h-3" /></a> y haz clic en <strong>"Nuevo Proyecto"</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-bold text-xs">2</span>
                  Pegar archivos de código
                </h3>
                <p className="pl-7 text-slate-400">
                  Copia el código de la pestaña <strong className="text-slate-200">Code.gs</strong> en el archivo por defecto. Luego presiona el botón <strong>+</strong> y crea un archivo HTML llamado <strong className="text-slate-200">Index.html</strong> con el contenido de la segunda pestaña.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-bold text-xs">3</span>
                  Implementar como Aplicación Web (Deploy)
                </h3>
                <p className="pl-7 text-slate-400">
                  Haz clic en el botón superior <strong>"Implementar" → "Nueva implementación"</strong>. Selecciona tipo: <strong>"Aplicación Web"</strong>, Ejecutar como: <strong>"Yo"</strong> y Quién tiene acceso: <strong>"Cualquier persona dentro de Liverpool/Suburbia"</strong> o "Cualquiera".
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between">
          <p className="text-[11px] text-slate-400">
            Compatible con Google Drive, Sheets y Slides en la infraestructura de Liverpool.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-all"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
