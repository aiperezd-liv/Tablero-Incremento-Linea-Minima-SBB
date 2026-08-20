import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Header middleware to allow iframe embedding in Google Apps Script / Workspace
  app.use((req, res, next) => {
    res.removeHeader("X-Frame-Options");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Content-Security-Policy",
      "frame-ancestors 'self' https://*.google.com https://*.googleusercontent.com https://script.google.com https://*.google.com.mx *"
    );
    next();
  });

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Canvas de Presentación: Test Línea Mínima SBB" });
  });

  // AI Copilot for Stakeholder Presentation
  app.post("/api/ai-copilot", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({
          error: "API Key no configurada",
          message: "Para usar el Asistente IA, configura la variable GEMINI_API_KEY en la sección Secrets de AI Studio."
        });
      }

      const { prompt, context } = req.body;

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `Eres un Asistente Ejecutivo de Análisis de Riesgo Crediticio y Estrategia de Negocio para Liverpool/Suburbia (SBB Departamental).
Tu función es ayudar al presentador (Alvaro Perez) a responder preguntas de los Stakeholders durante la presentación del "Test Incremento Línea Mínima".

DATOS CLAVE DEL PROYECTO:
- Producto: Tarjeta Departamental (Liverpool / Suburbia).
- Propuesta: Elevar la línea mínima crediticia de $2,000 a $4,000 para solicitantes con ingresos totales superiores a $4,000/mes.
- Muestra objetivo: 26,000 cuentas en grupo de Tratamiento y 26,000 en grupo de Control (despliegue 50/50).
- Población de Línea Mínima Objetivo: 9,471 cuentas en segmento HIT (7.25% del mix HIT) y 12,967 cuentas en segmento NO HIT (37.71% del mix NO HIT).
- Período del piloto: Colocación 01 Ago 2026 - 01 Ene 2027 (o 01 Ago 2027), Comportamiento hasta 31 Dic 2027.
- Impacto en Línea de Crédito Promedio:
  * HIT: $17,521 -> $17,724 (+1.16%)
  * NO HIT: $3,434 -> $4,341 (+26.4%)
  * TOTAL PRODUCTO: $10,478 -> $11,033 (+5.30%)
- Impacto en Activación: Pasa de 66.5% a 67.2% en el segmento objetivo. Activación total del producto en 67.4%.
- Control de Morosidad (Bad Rates):
  * Entry@MoB: HIT Actual 5.26% vs Target Max 7.32%. NO HIT Actual 7.05% vs Target Max 8.44%. Ambos ampliamente dentro del margen seguro.
  * 30+3MoB: HIT Actual 3.52% vs Target Max 5.11%. NO HIT Actual 5.81% vs Target Max 7.25%.
  * 90+9MoB: HIT Actual 13.53% vs Target Max 17.65%. NO HIT Actual 20.54% vs Target Max 26.25%.
- Mecanismo de Control y Mitigación de Riesgos:
  * Revisiones intermedias obligatorias a los 3 y 6 meses.
  * Botón de Apagado (Kill-Switch) por banda de riesgo en caso de desviaciones sobre el Target Max.
  * Muestra piloto controlada: 1,065 cuentas HIT y 1,153 cuentas NO HIT por niveles de riesgo (Muy Bajo a Muy Alto).

Instrucciones de respuesta:
- Sé sumamente claro, conciso, ejecutivo y respaldado en los números exactos del test.
- Responde siempre en español profesional orientado a directivos de crédito y riesgo.
- Estructura las respuestas con viñetas scannables.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Pregunta o Solicitud del Stakeholder/Presentador: ${prompt}\n\nContexto actual del slide/sección: ${context || 'General'}`,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("AI Copilot Error:", err);
      res.status(500).json({ error: "Error al generar respuesta", details: err?.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
