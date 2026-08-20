export interface HistoricalMoraRow {
  periodo: string; // e.g., '2023-01'
  segmento: 'Ingresos >= 4000' | 'Ingresos < 4000';
  totalCuentas: number;
  lineaPromedio: number;
  entry2mCta: number;
  entry2mSdo: number;
  mora303mCta: number;
  mora303mSdo: number;
  mora909mCta: number;
  mora909mSdo: number;
}

export interface PeriodChartPoint {
  periodo: string; // '2023-01'
  label: string; // 'Jan 2023'
  // High Income >= 4000
  highTotalCuentas?: number;
  highLineaPromedio?: number;
  highEntry2mCta?: number;
  highEntry2mSdo?: number;
  highMora303mCta?: number;
  highMora303mSdo?: number;
  highMora909mCta?: number;
  highMora909mSdo?: number;
  highEntry2mCuentasMora?: number;
  highMora303mCuentasMora?: number;
  highMora909mCuentasMora?: number;

  // Low Income < 4000
  lowTotalCuentas?: number;
  lowLineaPromedio?: number;
  lowEntry2mCta?: number;
  lowEntry2mSdo?: number;
  lowMora303mCta?: number;
  lowMora303mSdo?: number;
  lowMora909mCta?: number;
  lowMora909mSdo?: number;
  lowEntry2mCuentasMora?: number;
  lowMora303mCuentasMora?: number;
  lowMora909mCuentasMora?: number;

  // Moving averages (3M) for low income
  lowEntry2mSdoMA3?: number;
  lowMora303mSdoMA3?: number;
  lowMora909mSdoMA3?: number;
}

export const RAW_HISTORICAL_MORA: HistoricalMoraRow[] = [
  { periodo: '2023-01', segmento: 'Ingresos < 4000', totalCuentas: 124, lineaPromedio: 2645.16, entry2mCta: 0.048387, entry2mSdo: 0.119051, mora303mCta: 0.032258, mora303mSdo: 0.119174, mora909mCta: 0.057377, mora909mSdo: 0.292771 },
  { periodo: '2023-01', segmento: 'Ingresos >= 4000', totalCuentas: 11206, lineaPromedio: 2721.49, entry2mCta: 0.023648, entry2mSdo: 0.060642, mora303mCta: 0.016487, mora303mSdo: 0.055673, mora909mCta: 0.056723, mora909mSdo: 0.218634 },
  { periodo: '2023-02', segmento: 'Ingresos < 4000', totalCuentas: 135, lineaPromedio: 2566.67, entry2mCta: 0.044444, entry2mSdo: 0.161972, mora303mCta: 0.037594, mora303mSdo: 0.149246, mora909mCta: 0.048000, mora909mSdo: 0.186131 },
  { periodo: '2023-02', segmento: 'Ingresos >= 4000', totalCuentas: 9426, lineaPromedio: 2709.90, entry2mCta: 0.038298, entry2mSdo: 0.100572, mora303mCta: 0.025668, mora303mSdo: 0.081737, mora909mCta: 0.063821, mora909mSdo: 0.222395 },
  { periodo: '2023-03', segmento: 'Ingresos < 4000', totalCuentas: 187, lineaPromedio: 2516.04, entry2mCta: 0.037433, entry2mSdo: 0.102165, mora303mCta: 0.016393, mora303mSdo: 0.050301, mora909mCta: 0.055556, mora909mSdo: 0.202906 },
  { periodo: '2023-03', segmento: 'Ingresos >= 4000', totalCuentas: 11792, lineaPromedio: 2724.26, entry2mCta: 0.024084, entry2mSdo: 0.055202, mora303mCta: 0.016637, mora303mSdo: 0.049206, mora909mCta: 0.057909, mora909mSdo: 0.190449 },
  { periodo: '2023-04', segmento: 'Ingresos < 4000', totalCuentas: 158, lineaPromedio: 2550.63, entry2mCta: 0.018987, entry2mSdo: 0.054380, mora303mCta: 0.012739, mora303mSdo: 0.046748, mora909mCta: 0.039474, mora909mSdo: 0.206859 },
  { periodo: '2023-04', segmento: 'Ingresos >= 4000', totalCuentas: 12053, lineaPromedio: 2721.26, entry2mCta: 0.028292, entry2mSdo: 0.064320, mora303mCta: 0.017917, mora303mSdo: 0.052488, mora909mCta: 0.057805, mora909mSdo: 0.195531 },
  { periodo: '2023-05', segmento: 'Ingresos < 4000', totalCuentas: 161, lineaPromedio: 2540.37, entry2mCta: 0.006211, entry2mSdo: 0.013858, mora303mCta: 0.000000, mora303mSdo: 0.000000, mora909mCta: 0.026667, mora909mSdo: 0.154305 },
  { periodo: '2023-05', segmento: 'Ingresos >= 4000', totalCuentas: 12286, lineaPromedio: 2776.05, entry2mCta: 0.024092, entry2mSdo: 0.053587, mora303mCta: 0.015189, mora303mSdo: 0.044776, mora909mCta: 0.057231, mora909mSdo: 0.212727 },
  { periodo: '2023-06', segmento: 'Ingresos < 4000', totalCuentas: 166, lineaPromedio: 2644.58, entry2mCta: 0.030120, entry2mSdo: 0.077877, mora303mCta: 0.024390, mora303mSdo: 0.083952, mora909mCta: 0.070968, mora909mSdo: 0.327394 },
  { periodo: '2023-06', segmento: 'Ingresos >= 4000', totalCuentas: 11663, lineaPromedio: 2784.06, entry2mCta: 0.024265, entry2mSdo: 0.056530, mora303mCta: 0.014463, mora303mSdo: 0.045294, mora909mCta: 0.053914, mora909mSdo: 0.211958 },
  { periodo: '2023-07', segmento: 'Ingresos < 4000', totalCuentas: 146, lineaPromedio: 2609.59, entry2mCta: 0.006849, entry2mSdo: 0.021845, mora303mCta: 0.006849, mora303mSdo: 0.028062, mora909mCta: 0.014085, mora909mSdo: 0.110558 },
  { periodo: '2023-07', segmento: 'Ingresos >= 4000', totalCuentas: 12367, lineaPromedio: 2786.77, entry2mCta: 0.023773, entry2mSdo: 0.058692, mora303mCta: 0.015014, mora303mSdo: 0.053142, mora909mCta: 0.054536, mora909mSdo: 0.220762 },
  { periodo: '2023-08', segmento: 'Ingresos < 4000', totalCuentas: 101, lineaPromedio: 2544.55, entry2mCta: 0.009901, entry2mSdo: 0.015457, mora303mCta: 0.000000, mora303mSdo: 0.000000, mora909mCta: 0.051020, mora909mSdo: 0.289855 },
  { periodo: '2023-08', segmento: 'Ingresos >= 4000', totalCuentas: 9497, lineaPromedio: 2749.85, entry2mCta: 0.030641, entry2mSdo: 0.069250, mora303mCta: 0.019436, mora303mSdo: 0.053811, mora909mCta: 0.056567, mora909mSdo: 0.220086 },
  { periodo: '2023-09', segmento: 'Ingresos < 4000', totalCuentas: 114, lineaPromedio: 2622.81, entry2mCta: 0.000000, entry2mSdo: 0.000000, mora303mCta: 0.000000, mora303mSdo: 0.000000, mora909mCta: 0.045455, mora909mSdo: 0.277403 },
  { periodo: '2023-09', segmento: 'Ingresos >= 4000', totalCuentas: 9013, lineaPromedio: 2753.66, entry2mCta: 0.022634, entry2mSdo: 0.052618, mora303mCta: 0.013241, mora303mSdo: 0.038219, mora909mCta: 0.058245, mora909mSdo: 0.216788 },
  { periodo: '2023-10', segmento: 'Ingresos < 4000', totalCuentas: 135, lineaPromedio: 2611.11, entry2mCta: 0.007407, entry2mSdo: 0.018522, mora303mCta: 0.007407, mora303mSdo: 0.025980, mora909mCta: 0.023077, mora909mSdo: 0.103274 },
  { periodo: '2023-10', segmento: 'Ingresos >= 4000', totalCuentas: 10567, lineaPromedio: 2748.11, entry2mCta: 0.021484, entry2mSdo: 0.045441, mora303mCta: 0.011409, mora303mSdo: 0.034565, mora909mCta: 0.055701, mora909mSdo: 0.213280 },
  { periodo: '2023-11', segmento: 'Ingresos < 4000', totalCuentas: 187, lineaPromedio: 2577.54, entry2mCta: 0.032086, entry2mSdo: 0.084128, mora303mCta: 0.010695, mora303mSdo: 0.037771, mora909mCta: 0.048913, mora909mSdo: 0.221973 },
  { periodo: '2023-11', segmento: 'Ingresos >= 4000', totalCuentas: 15155, lineaPromedio: 2768.92, entry2mCta: 0.021188, entry2mSdo: 0.048869, mora303mCta: 0.013976, mora303mSdo: 0.043874, mora909mCta: 0.047239, mora909mSdo: 0.185015 },
  { periodo: '2023-12', segmento: 'Ingresos < 4000', totalCuentas: 126, lineaPromedio: 2611.11, entry2mCta: 0.023810, entry2mSdo: 0.059530, mora303mCta: 0.016000, mora303mSdo: 0.046150, mora909mCta: 0.040984, mora909mSdo: 0.205764 },
  { periodo: '2023-12', segmento: 'Ingresos >= 4000', totalCuentas: 14130, lineaPromedio: 2746.46, entry2mCta: 0.035103, entry2mSdo: 0.082769, mora303mCta: 0.020790, mora303mSdo: 0.065011, mora909mCta: 0.059707, mora909mSdo: 0.221437 },
  { periodo: '2024-01', segmento: 'Ingresos < 4000', totalCuentas: 108, lineaPromedio: 2643.52, entry2mCta: 0.027778, entry2mSdo: 0.075132, mora303mCta: 0.018519, mora303mSdo: 0.080561, mora909mCta: 0.039604, mora909mSdo: 0.245783 },
  { periodo: '2024-01', segmento: 'Ingresos >= 4000', totalCuentas: 8996, lineaPromedio: 2753.72, entry2mCta: 0.025459, entry2mSdo: 0.070998, mora303mCta: 0.018403, mora303mSdo: 0.065226, mora909mCta: 0.048858, mora909mSdo: 0.202494 },
  { periodo: '2024-02', segmento: 'Ingresos < 4000', totalCuentas: 106, lineaPromedio: 2566.04, entry2mCta: 0.037736, entry2mSdo: 0.068226, mora303mCta: 0.009434, mora303mSdo: 0.043493, mora909mCta: 0.038095, mora909mSdo: 0.189907 },
  { periodo: '2024-02', segmento: 'Ingresos >= 4000', totalCuentas: 8100, lineaPromedio: 2743.89, entry2mCta: 0.033580, entry2mSdo: 0.087253, mora303mCta: 0.020681, mora303mSdo: 0.066548, mora909mCta: 0.055534, mora909mSdo: 0.211448 },
  { periodo: '2024-03', segmento: 'Ingresos < 4000', totalCuentas: 106, lineaPromedio: 2599.06, entry2mCta: 0.009434, entry2mSdo: 0.035733, mora303mCta: 0.009524, mora303mSdo: 0.033131, mora909mCta: 0.040000, mora909mSdo: 0.134489 },
  { periodo: '2024-03', segmento: 'Ingresos >= 4000', totalCuentas: 10193, lineaPromedio: 2733.10, entry2mCta: 0.029432, entry2mSdo: 0.082779, mora303mCta: 0.019614, mora303mSdo: 0.068698, mora909mCta: 0.049924, mora909mSdo: 0.186358 },
  { periodo: '2024-04', segmento: 'Ingresos < 4000', totalCuentas: 84, lineaPromedio: 2654.76, entry2mCta: 0.035714, entry2mSdo: 0.065292, mora303mCta: 0.011905, mora303mSdo: 0.034054, mora909mCta: 0.025000, mora909mSdo: 0.098466 },
  { periodo: '2024-04', segmento: 'Ingresos >= 4000', totalCuentas: 9240, lineaPromedio: 2734.47, entry2mCta: 0.025649, entry2mSdo: 0.065848, mora303mCta: 0.017391, mora303mSdo: 0.058464, mora909mCta: 0.053357, mora909mSdo: 0.199837 },
  { periodo: '2024-05', segmento: 'Ingresos < 4000', totalCuentas: 111, lineaPromedio: 2639.64, entry2mCta: 0.054054, entry2mSdo: 0.126038, mora303mCta: 0.045455, mora303mSdo: 0.149744, mora909mCta: 0.064220, mora909mSdo: 0.236647 },
  { periodo: '2024-05', segmento: 'Ingresos >= 4000', totalCuentas: 11550, lineaPromedio: 2728.71, entry2mCta: 0.021818, entry2mSdo: 0.052808, mora303mCta: 0.014434, mora303mSdo: 0.046245, mora909mCta: 0.051493, mora909mSdo: 0.197228 },
  { periodo: '2024-06', segmento: 'Ingresos < 4000', totalCuentas: 104, lineaPromedio: 2591.35, entry2mCta: 0.019231, entry2mSdo: 0.036872, mora303mCta: 0.000000, mora303mSdo: 0.000000, mora909mCta: 0.019802, mora909mSdo: 0.065143 },
  { periodo: '2024-06', segmento: 'Ingresos >= 4000', totalCuentas: 11384, lineaPromedio: 2690.98, entry2mCta: 0.027846, entry2mSdo: 0.065934, mora303mCta: 0.017993, mora303mSdo: 0.056309, mora909mCta: 0.051407, mora909mSdo: 0.200327 },
  { periodo: '2024-07', segmento: 'Ingresos < 4000', totalCuentas: 116, lineaPromedio: 2426.72, entry2mCta: 0.034483, entry2mSdo: 0.066141, mora303mCta: 0.025862, mora303mSdo: 0.063606, mora909mCta: 0.052174, mora909mSdo: 0.252512 },
  { periodo: '2024-07', segmento: 'Ingresos >= 4000', totalCuentas: 9613, lineaPromedio: 2480.65, entry2mCta: 0.030896, entry2mSdo: 0.072002, mora303mCta: 0.021025, mora303mSdo: 0.065350, mora909mCta: 0.064963, mora909mSdo: 0.245311 },
  { periodo: '2024-08', segmento: 'Ingresos < 4000', totalCuentas: 104, lineaPromedio: 2408.65, entry2mCta: 0.009615, entry2mSdo: 0.031845, mora303mCta: 0.009615, mora303mSdo: 0.036199, mora909mCta: 0.050000, mora909mSdo: 0.234450 },
  { periodo: '2024-08', segmento: 'Ingresos >= 4000', totalCuentas: 7557, lineaPromedio: 2368.24, entry2mCta: 0.031626, entry2mSdo: 0.076300, mora303mCta: 0.021011, mora303mSdo: 0.062943, mora909mCta: 0.060160, mora909mSdo: 0.235521 },
  { periodo: '2024-09', segmento: 'Ingresos < 4000', totalCuentas: 101, lineaPromedio: 2405.94, entry2mCta: 0.039604, entry2mSdo: 0.139236, mora303mCta: 0.010000, mora303mSdo: 0.030140, mora909mCta: 0.080000, mora909mSdo: 0.397496 },
  { periodo: '2024-09', segmento: 'Ingresos >= 4000', totalCuentas: 6628, lineaPromedio: 2376.51, entry2mCta: 0.030024, entry2mSdo: 0.052618, mora303mCta: 0.020458, mora303mSdo: 0.038219, mora909mCta: 0.064775, mora909mSdo: 0.242425 },
  { periodo: '2024-10', segmento: 'Ingresos < 4000', totalCuentas: 115, lineaPromedio: 2578.26, entry2mCta: 0.017391, entry2mSdo: 0.038170, mora303mCta: 0.017391, mora303mSdo: 0.025980, mora909mCta: 0.054545, mora909mSdo: 0.286641 },
  { periodo: '2024-10', segmento: 'Ingresos >= 4000', totalCuentas: 7145, lineaPromedio: 2395.52, entry2mCta: 0.030791, entry2mSdo: 0.045441, mora303mCta: 0.020345, mora303mSdo: 0.034565, mora909mCta: 0.065149, mora909mSdo: 0.237115 },
  { periodo: '2024-11', segmento: 'Ingresos < 4000', totalCuentas: 151, lineaPromedio: 2450.33, entry2mCta: 0.000000, entry2mSdo: 0.000000, mora303mCta: 0.000000, mora303mSdo: 0.000000, mora909mCta: 0.013793, mora909mSdo: 0.080384 },
  { periodo: '2024-11', segmento: 'Ingresos >= 4000', totalCuentas: 11027, lineaPromedio: 2388.28, entry2mCta: 0.029745, entry2mSdo: 0.067166, mora303mCta: 0.021182, mora303mSdo: 0.062413, mora909mCta: 0.056202, mora909mSdo: 0.217655 },
  { periodo: '2024-12', segmento: 'Ingresos < 4000', totalCuentas: 126, lineaPromedio: 2611.11, entry2mCta: 0.057851, entry2mSdo: 0.149336, mora303mCta: 0.033058, mora303mSdo: 0.123370, mora909mCta: 0.060345, mora909mSdo: 0.259452 },
  { periodo: '2024-12', segmento: 'Ingresos >= 4000', totalCuentas: 10575, lineaPromedio: 2381.28, entry2mCta: 0.041797, entry2mSdo: 0.094936, mora303mCta: 0.024194, mora303mSdo: 0.073467, mora909mCta: 0.065171, mora909mSdo: 0.240123 },
  { periodo: '2025-01', segmento: 'Ingresos < 4000', totalCuentas: 93, lineaPromedio: 2543.01, entry2mCta: 0.032258, entry2mSdo: 0.087338, mora303mCta: 0.021739, mora303mSdo: 0.091932, mora909mCta: 0.043478, mora909mSdo: 0.220646 },
  { periodo: '2025-01', segmento: 'Ingresos >= 4000', totalCuentas: 5754, lineaPromedio: 2382.35, entry2mCta: 0.022419, entry2mSdo: 0.053903, mora303mCta: 0.015067, mora303mSdo: 0.046742, mora909mCta: 0.051305, mora909mSdo: 0.201718 },
  { periodo: '2025-02', segmento: 'Ingresos < 4000', totalCuentas: 63, lineaPromedio: 2452.38, entry2mCta: 0.015873, entry2mSdo: 0.018996, mora303mCta: 0.015873, mora303mSdo: 0.030501, mora909mCta: 0.031746, mora909mSdo: 0.177460 },
  { periodo: '2025-02', segmento: 'Ingresos >= 4000', totalCuentas: 4605, lineaPromedio: 2400.68, entry2mCta: 0.028013, entry2mSdo: 0.065731, mora303mCta: 0.017837, mora303mSdo: 0.051473, mora909mCta: 0.063184, mora909mSdo: 0.234836 },
  { periodo: '2025-03', segmento: 'Ingresos < 4000', totalCuentas: 71, lineaPromedio: 2471.83, entry2mCta: 0.014085, entry2mSdo: 0.041990, mora303mCta: 0.000000, mora303mSdo: 0.000000, mora909mCta: 0.000000, mora909mSdo: 0.000000 },
  { periodo: '2025-03', segmento: 'Ingresos >= 4000', totalCuentas: 5713, lineaPromedio: 2392.96, entry2mCta: 0.023630, entry2mSdo: 0.056437, mora303mCta: 0.016472, mora303mSdo: 0.050329, mora909mCta: 0.054943, mora909mSdo: 0.196317 },
  { periodo: '2025-04', segmento: 'Ingresos < 4000', totalCuentas: 53, lineaPromedio: 2462.26, entry2mCta: 0.000000, entry2mSdo: 0.000000, mora303mCta: 0.000000, mora303mSdo: 0.000000, mora909mCta: 0.000000, mora909mSdo: 0.000000 },
  { periodo: '2025-04', segmento: 'Ingresos >= 4000', totalCuentas: 4621, lineaPromedio: 2374.27, entry2mCta: 0.032677, entry2mSdo: 0.072667, mora303mCta: 0.019210, mora303mSdo: 0.054728, mora909mCta: 0.056335, mora909mSdo: 0.218833 },
  { periodo: '2025-05', segmento: 'Ingresos < 4000', totalCuentas: 98, lineaPromedio: 2392.86, entry2mCta: 0.051020, entry2mSdo: 0.121351, mora303mCta: 0.031915, mora303mSdo: 0.118439, mora909mCta: 0.032967, mora909mSdo: 0.164291 },
  { periodo: '2025-05', segmento: 'Ingresos >= 4000', totalCuentas: 7192, lineaPromedio: 2373.26, entry2mCta: 0.028643, entry2mSdo: 0.066795, mora303mCta: 0.019910, mora303mSdo: 0.060208, mora909mCta: 0.058950, mora909mSdo: 0.232722 },
  { periodo: '2025-06', segmento: 'Ingresos < 4000', totalCuentas: 130, lineaPromedio: 2376.92, entry2mCta: 0.015385, entry2mSdo: 0.034282, mora303mCta: 0.016000, mora303mSdo: 0.043803, mora909mCta: 0.050847, mora909mSdo: 0.169540 },
  { periodo: '2025-06', segmento: 'Ingresos >= 4000', totalCuentas: 8226, lineaPromedio: 2337.47, entry2mCta: 0.037564, entry2mSdo: 0.083923, mora303mCta: 0.024219, mora303mSdo: 0.072021, mora909mCta: 0.065163, mora909mSdo: 0.253562 },
  { periodo: '2025-07', segmento: 'Ingresos < 4000', totalCuentas: 129, lineaPromedio: 2441.86, entry2mCta: 0.023256, entry2mSdo: 0.095495, mora303mCta: 0.023810, mora303mSdo: 0.129927, mora909mCta: 0.024390, mora909mSdo: 0.177390 },
  { periodo: '2025-07', segmento: 'Ingresos >= 4000', totalCuentas: 7583, lineaPromedio: 2342.87, entry2mCta: 0.041540, entry2mSdo: 0.099134, mora303mCta: 0.029196, mora303mSdo: 0.091547, mora909mCta: 0.067347, mora909mSdo: 0.268943 },
  { periodo: '2025-08', segmento: 'Ingresos < 4000', totalCuentas: 117, lineaPromedio: 2427.35, entry2mCta: 0.059829, entry2mSdo: 0.173937, mora303mCta: 0.035088, mora303mSdo: 0.114627, mora909mCta: 0.045045, mora909mSdo: 0.224913 },
  { periodo: '2025-08', segmento: 'Ingresos >= 4000', totalCuentas: 7834, lineaPromedio: 2345.89, entry2mCta: 0.041996, entry2mSdo: 0.102545, mora303mCta: 0.024639, mora303mSdo: 0.076323, mora909mCta: 0.066386, mora909mSdo: 0.266422 },
  { periodo: '2025-09', segmento: 'Ingresos < 4000', totalCuentas: 104, lineaPromedio: 2326.92, entry2mCta: 0.019231, entry2mSdo: 0.110861, mora303mCta: 0.010204, mora303mSdo: 0.059375, mora909mCta: 0.084211, mora909mSdo: 0.497059 },
  { periodo: '2025-09', segmento: 'Ingresos >= 4000', totalCuentas: 6519, lineaPromedio: 2349.82, entry2mCta: 0.039116, entry2mSdo: 0.092718, mora303mCta: 0.023176, mora303mSdo: 0.068206, mora909mCta: 0.063610, mora909mSdo: 0.250146 },
  { periodo: '2025-10', segmento: 'Ingresos < 4000', totalCuentas: 101, lineaPromedio: 2415.84, entry2mCta: 0.029703, entry2mSdo: 0.053404, mora303mCta: 0.010000, mora303mSdo: 0.030829, mora909mCta: 0.030303, mora909mSdo: 0.186130 },
  { periodo: '2025-10', segmento: 'Ingresos >= 4000', totalCuentas: 6740, lineaPromedio: 2357.27, entry2mCta: 0.036499, entry2mSdo: 0.083302, mora303mCta: 0.022036, mora303mSdo: 0.068628, mora909mCta: 0.071830, mora909mSdo: 0.275124 },
  { periodo: '2025-11', segmento: 'Ingresos < 4000', totalCuentas: 157, lineaPromedio: 2503.18, entry2mCta: 0.012739, entry2mSdo: 0.061686, mora303mCta: 0.000000, mora303mSdo: 0.000000, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-11', segmento: 'Ingresos >= 4000', totalCuentas: 9865, lineaPromedio: 2368.12, entry2mCta: 0.034161, entry2mSdo: 0.084749, mora303mCta: 0.020222, mora303mSdo: 0.067270, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', segmento: 'Ingresos < 4000', totalCuentas: 124, lineaPromedio: 2435.48, entry2mCta: 0.016129, entry2mSdo: 0.056337, mora303mCta: 0.016393, mora303mSdo: 0.076719, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', segmento: 'Ingresos >= 4000', totalCuentas: 9324, lineaPromedio: 2370.98, entry2mCta: 0.056414, entry2mSdo: 0.135431, mora303mCta: 0.030912, mora303mSdo: 0.103004, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', segmento: 'Ingresos < 4000', totalCuentas: 82, lineaPromedio: 2487.80, entry2mCta: 0.000000, entry2mSdo: 0.000000, mora303mCta: 0.000000, mora303mSdo: 0.000000, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', segmento: 'Ingresos >= 4000', totalCuentas: 5120, lineaPromedio: 2396.00, entry2mCta: 0.039453, entry2mSdo: 0.105023, mora303mCta: 0.024824, mora303mSdo: 0.093386, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', segmento: 'Ingresos < 4000', totalCuentas: 65, lineaPromedio: 2384.62, entry2mCta: 0.000000, entry2mSdo: 0.000000, mora303mCta: 0.000000, mora303mSdo: 0.000000, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', segmento: 'Ingresos >= 4000', totalCuentas: 4225, lineaPromedio: 2387.10, entry2mCta: 0.038343, entry2mSdo: 0.096770, mora303mCta: 0.021080, mora303mSdo: 0.069724, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', segmento: 'Ingresos < 4000', totalCuentas: 81, lineaPromedio: 2506.17, entry2mCta: 0.037037, entry2mSdo: 0.108411, mora303mCta: 0.012346, mora303mSdo: 0.019676, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', segmento: 'Ingresos >= 4000', totalCuentas: 4829, lineaPromedio: 2364.26, entry2mCta: 0.036032, entry2mSdo: 0.087329, mora303mCta: 0.023627, mora303mSdo: 0.074321, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', segmento: 'Ingresos < 4000', totalCuentas: 68, lineaPromedio: 2536.76, entry2mCta: 0.014706, entry2mSdo: 0.078267, mora303mCta: 0.014706, mora303mSdo: 0.097331, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', segmento: 'Ingresos >= 4000', totalCuentas: 5287, lineaPromedio: 2370.76, entry2mCta: 0.045205, entry2mSdo: 0.104553, mora303mCta: 0.027047, mora303mSdo: 0.085951, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', segmento: 'Ingresos < 4000', totalCuentas: 99, lineaPromedio: 2500.00, entry2mCta: 0.030303, entry2mSdo: 0.136767, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', segmento: 'Ingresos >= 4000', totalCuentas: 7411, lineaPromedio: 2383.21, entry2mCta: 0.041695, entry2mSdo: 0.099227, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', segmento: 'Ingresos < 4000', totalCuentas: 99, lineaPromedio: 2297.98, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', segmento: 'Ingresos >= 4000', totalCuentas: 7901, lineaPromedio: 2244.65, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-07', segmento: 'Ingresos < 4000', totalCuentas: 53, lineaPromedio: 2367.92, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-07', segmento: 'Ingresos >= 4000', totalCuentas: 7381, lineaPromedio: 2158.52, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 }
];

const MONTH_NAMES: Record<string, string> = {
  '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr',
  '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug',
  '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec'
};

function formatPeriodLabel(per: string): string {
  const [yyyy, mm] = per.split('-');
  return `${MONTH_NAMES[mm] || mm} ${yyyy}`;
}

// Process RAW into chart-ready points aggregated by period
export function getHistoricalMoraChartData(): PeriodChartPoint[] {
  const mapByPeriod = new Map<string, PeriodChartPoint>();

  // 1. Group by period
  RAW_HISTORICAL_MORA.forEach(row => {
    if (!mapByPeriod.has(row.periodo)) {
      mapByPeriod.set(row.periodo, {
        periodo: row.periodo,
        label: formatPeriodLabel(row.periodo),
      });
    }
    const pt = mapByPeriod.get(row.periodo)!;

    if (row.segmento === 'Ingresos >= 4000') {
      pt.highTotalCuentas = row.totalCuentas;
      pt.highLineaPromedio = row.lineaPromedio;
      pt.highEntry2mCta = row.entry2mCta;
      pt.highEntry2mSdo = row.entry2mSdo * 100; // convert to % for chart
      pt.highMora303mCta = row.mora303mCta;
      pt.highMora303mSdo = row.mora303mSdo * 100;
      pt.highMora909mCta = row.mora909mCta;
      pt.highMora909mSdo = row.mora909mSdo * 100;
      pt.highEntry2mCuentasMora = Math.round(row.totalCuentas * row.entry2mCta);
      pt.highMora303mCuentasMora = Math.round(row.totalCuentas * row.mora303mCta);
      pt.highMora909mCuentasMora = Math.round(row.totalCuentas * row.mora909mCta);
    } else {
      pt.lowTotalCuentas = row.totalCuentas;
      pt.lowLineaPromedio = row.lineaPromedio;
      pt.lowEntry2mCta = row.entry2mCta;
      pt.lowEntry2mSdo = row.entry2mSdo * 100;
      pt.lowMora303mCta = row.mora303mCta;
      pt.lowMora303mSdo = row.mora303mSdo * 100;
      pt.lowMora909mCta = row.mora909mCta;
      pt.lowMora909mSdo = row.mora909mSdo * 100;
      pt.lowEntry2mCuentasMora = Math.round(row.totalCuentas * row.entry2mCta);
      pt.lowMora303mCuentasMora = Math.round(row.totalCuentas * row.mora303mCta);
      pt.lowMora909mCuentasMora = Math.round(row.totalCuentas * row.mora909mCta);
    }
  });

  const points = Array.from(mapByPeriod.values()).sort((a, b) => a.periodo.localeCompare(b.periodo));

  // 2. Compute 3-month Moving Averages for low income series (to mirror chart smoothing in image)
  for (let i = 0; i < points.length; i++) {
    const cur = points[i];
    
    // Helper to calculate 3M MA around index i or using trailing/centered window
    const calcMA = (key: 'lowEntry2mSdo' | 'lowMora303mSdo' | 'lowMora909mSdo'): number | undefined => {
      const window: number[] = [];
      for (let offset = -1; offset <= 1; offset++) {
        const idx = i + offset;
        if (idx >= 0 && idx < points.length) {
          const val = points[idx][key];
          if (val !== undefined && val > 0) {
            window.push(val);
          }
        }
      }
      if (window.length === 0) return cur[key];
      const sum = window.reduce((acc, v) => acc + v, 0);
      return Number((sum / window.length).toFixed(2));
    };

    cur.lowEntry2mSdoMA3 = calcMA('lowEntry2mSdo');
    cur.lowMora303mSdoMA3 = calcMA('lowMora303mSdo');
    cur.lowMora909mSdoMA3 = calcMA('lowMora909mSdo');
  }

  return points;
}
