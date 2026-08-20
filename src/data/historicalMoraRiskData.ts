export interface RiskMoraRow {
  periodo: string; // e.g. '2024-12'
  hitDes: 'HIT' | 'NOHIT';
  riskLevel: string; // '1. MUY BAJO' | '2. BAJO' | '3. MEDIO' | '4. ALTO' | '5. MUY ALTO'
  totalCuentas: number;
  lineaPromedio: number;
  entry2mCta: number;
  entry2mSdo: number;
  mora303mCta: number;
  mora303mSdo: number;
  mora909mCta: number;
  mora909mSdo: number;
}

export const RISK_LEVELS = [
  '1. MUY BAJO',
  '2. BAJO',
  '3. MEDIO',
  '4. ALTO',
  '5. MUY ALTO'
] as const;

export type RiskLevel = typeof RISK_LEVELS[number];

export const RAW_MORA_POR_RIESGO: RiskMoraRow[] = [
  // 2024-12
  { periodo: '2024-12', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 5, lineaPromedio: 3500, entry2mCta: 0.2, entry2mSdo: 0.252141, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2024-12', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 4, lineaPromedio: 3500, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2024-12', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 7, lineaPromedio: 2928.57, entry2mCta: 0.142857, entry2mSdo: 0.385010, mora303mCta: 0.142857, mora303mSdo: 0.416702, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2024-12', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1961, lineaPromedio: 3000.25, entry2mCta: 0.036206, entry2mSdo: 0.070960, mora303mCta: 0.014819, mora303mSdo: 0.037422, mora909mCta: 0.054724, mora909mSdo: 0.177492 },
  { periodo: '2024-12', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 2755, lineaPromedio: 2104.9, entry2mCta: 0.052632, entry2mSdo: 0.112147, mora303mCta: 0.029112, mora303mSdo: 0.084499, mora909mCta: 0.081211, mora909mSdo: 0.276260 },
  { periodo: '2024-12', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 14, lineaPromedio: 2928.57, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2024-12', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 309, lineaPromedio: 2996.76, entry2mCta: 0.019417, entry2mSdo: 0.072818, mora303mCta: 0.009772, mora303mSdo: 0.046611, mora909mCta: 0.026578, mora909mSdo: 0.132713 },
  { periodo: '2024-12', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 2036, lineaPromedio: 2534.87, entry2mCta: 0.040275, entry2mSdo: 0.110936, mora303mCta: 0.026680, mora303mSdo: 0.099271, mora909mCta: 0.058824, mora909mSdo: 0.261652 },
  { periodo: '2024-12', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1640, lineaPromedio: 2113.41, entry2mCta: 0.037195, entry2mSdo: 0.089955, mora303mCta: 0.023868, mora303mSdo: 0.079846, mora909mCta: 0.062344, mora909mSdo: 0.257773 },
  { periodo: '2024-12', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 666, lineaPromedio: 2000, entry2mCta: 0.049550, entry2mSdo: 0.124899, mora303mCta: 0.033133, mora303mSdo: 0.113637, mora909mCta: 0.088550, mora909mSdo: 0.345852 },

  // 2025-01
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 4, lineaPromedio: 3500, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0.25, mora909mSdo: 0.391711 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 4, lineaPromedio: 3375, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 3, lineaPromedio: 3333.33, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1079, lineaPromedio: 3000, entry2mCta: 0.025023, entry2mSdo: 0.050350, mora303mCta: 0.015814, mora303mSdo: 0.042932, mora909mCta: 0.045155, mora909mSdo: 0.151618 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1400, lineaPromedio: 2110, entry2mCta: 0.025714, entry2mSdo: 0.056136, mora303mCta: 0.014368, mora303mSdo: 0.040056, mora909mCta: 0.067343, mora909mSdo: 0.222142 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 10, lineaPromedio: 3300, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 164, lineaPromedio: 3003.05, entry2mCta: 0.018293, entry2mSdo: 0.043745, mora303mCta: 0.006135, mora303mSdo: 0.018008, mora909mCta: 0.024691, mora909mSdo: 0.140164 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1123, lineaPromedio: 2542.74, entry2mCta: 0.024043, entry2mSdo: 0.068534, mora303mCta: 0.017148, mora303mSdo: 0.061388, mora909mCta: 0.036731, mora909mSdo: 0.202921 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 941, lineaPromedio: 2098.83, entry2mCta: 0.021254, entry2mSdo: 0.054937, mora303mCta: 0.017223, mora303mSdo: 0.059408, mora909mCta: 0.055860, mora909mSdo: 0.242933 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 378, lineaPromedio: 2000, entry2mCta: 0.018519, entry2mSdo: 0.064210, mora303mCta: 0.015915, mora303mSdo: 0.068322, mora909mCta: 0.043011, mora909mSdo: 0.212453 },

  // 2025-02
  { periodo: '2025-02', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 4, lineaPromedio: 3375, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-02', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 1, lineaPromedio: 3000, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-02', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 852, lineaPromedio: 2998.83, entry2mCta: 0.023474, entry2mSdo: 0.044028, mora303mCta: 0.011834, mora303mSdo: 0.026183, mora909mCta: 0.040476, mora909mSdo: 0.136063 },
  { periodo: '2025-02', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1140, lineaPromedio: 2106.14, entry2mCta: 0.034211, entry2mSdo: 0.073435, mora303mCta: 0.019435, mora303mSdo: 0.052119, mora909mCta: 0.083935, mora909mSdo: 0.272561 },
  { periodo: '2025-02', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 7, lineaPromedio: 3357.14, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-02', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 126, lineaPromedio: 2976.19, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0.024390, mora909mSdo: 0.074972 },
  { periodo: '2025-02', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 852, lineaPromedio: 2575.7, entry2mCta: 0.024648, entry2mSdo: 0.076558, mora303mCta: 0.012136, mora303mSdo: 0.050026, mora909mCta: 0.040741, mora909mSdo: 0.211345 },
  { periodo: '2025-02', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 829, lineaPromedio: 2115.8, entry2mCta: 0.030157, entry2mSdo: 0.082361, mora303mCta: 0.022005, mora303mSdo: 0.072443, mora909mCta: 0.080402, mora909mSdo: 0.328753 },
  { periodo: '2025-02', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 147, lineaPromedio: 2000, entry2mCta: 0.027211, entry2mSdo: 0.085453, mora303mCta: 0.027397, mora303mSdo: 0.109669, mora909mCta: 0.054795, mora909mSdo: 0.257107 },

  // 2025-03
  { periodo: '2025-03', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 4, lineaPromedio: 3500, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-03', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 2, lineaPromedio: 3500, entry2mCta: 0.5, entry2mSdo: 0.390783, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-03', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 1, lineaPromedio: 2000, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-03', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1070, lineaPromedio: 3000, entry2mCta: 0.022430, entry2mSdo: 0.052406, mora303mCta: 0.010348, mora303mSdo: 0.028945, mora909mCta: 0.048711, mora909mSdo: 0.156188 },
  { periodo: '2025-03', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1359, lineaPromedio: 2108.9, entry2mCta: 0.035320, entry2mSdo: 0.079006, mora303mCta: 0.026746, mora303mSdo: 0.079745, mora909mCta: 0.074242, mora909mSdo: 0.240731 },
  { periodo: '2025-03', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 11, lineaPromedio: 2772.73, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-03', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 155, lineaPromedio: 2974.19, entry2mCta: 0.006452, entry2mSdo: 0.018004, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0.026490, mora909mSdo: 0.119075 },
  { periodo: '2025-03', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 990, lineaPromedio: 2552.53, entry2mCta: 0.014141, entry2mSdo: 0.027935, mora303mCta: 0.009307, mora303mSdo: 0.025254, mora909mCta: 0.036920, mora909mSdo: 0.155084 },
  { periodo: '2025-03', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1009, lineaPromedio: 2109.02, entry2mCta: 0.020813, entry2mSdo: 0.059437, mora303mCta: 0.017017, mora303mSdo: 0.062440, mora909mCta: 0.057260, mora909mSdo: 0.230998 },
  { periodo: '2025-03', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 364, lineaPromedio: 2000, entry2mCta: 0.021978, entry2mSdo: 0.057844, mora303mCta: 0.013889, mora303mSdo: 0.051998, mora909mCta: 0.039548, mora909mSdo: 0.191811 },

  // 2025-04
  { periodo: '2025-04', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 3, lineaPromedio: 3500, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-04', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 3, lineaPromedio: 3333.33, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-04', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 804, lineaPromedio: 2998.76, entry2mCta: 0.033582, entry2mSdo: 0.059688, mora303mCta: 0.017478, mora303mSdo: 0.038864, mora909mCta: 0.054088, mora909mSdo: 0.188735 },
  { periodo: '2025-04', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 900, lineaPromedio: 2102.22, entry2mCta: 0.044444, entry2mSdo: 0.091709, mora303mCta: 0.026846, mora303mSdo: 0.069166, mora909mCta: 0.080682, mora909mSdo: 0.270159 },
  { periodo: '2025-04', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 5, lineaPromedio: 3000, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-04', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 146, lineaPromedio: 3000, entry2mCta: 0.006849, entry2mSdo: 0.018037, mora303mCta: 0.006944, mora303mSdo: 0.022906, mora909mCta: 0.035211, mora909mSdo: 0.112510 },
  { periodo: '2025-04', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 892, lineaPromedio: 2549.33, entry2mCta: 0.023543, entry2mSdo: 0.054672, mora303mCta: 0.012486, mora303mSdo: 0.037388, mora909mCta: 0.039443, mora909mSdo: 0.184903 },
  { periodo: '2025-04', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 906, lineaPromedio: 2111.48, entry2mCta: 0.032009, entry2mSdo: 0.089293, mora303mCta: 0.022297, mora303mSdo: 0.081220, mora909mCta: 0.056948, mora909mSdo: 0.244066 },
  { periodo: '2025-04', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 372, lineaPromedio: 2000, entry2mCta: 0.032258, entry2mSdo: 0.086005, mora303mCta: 0.019126, mora303mSdo: 0.067715, mora909mCta: 0.041899, mora909mSdo: 0.208724 },

  // 2025-05
  { periodo: '2025-05', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 4, lineaPromedio: 3500, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-05', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 1, lineaPromedio: 3000, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-05', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 2, lineaPromedio: 2500, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-05', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1256, lineaPromedio: 2998.81, entry2mCta: 0.031847, entry2mSdo: 0.061846, mora303mCta: 0.018371, mora303mSdo: 0.043903, mora909mCta: 0.064935, mora909mSdo: 0.216969 },
  { periodo: '2025-05', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1482, lineaPromedio: 2103.91, entry2mCta: 0.039811, entry2mSdo: 0.082815, mora303mCta: 0.027267, mora303mSdo: 0.073393, mora909mCta: 0.079585, mora909mSdo: 0.269268 },
  { periodo: '2025-05', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 8, lineaPromedio: 2750, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-05', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 238, lineaPromedio: 3004.2, entry2mCta: 0.025210, entry2mSdo: 0.077827, mora303mCta: 0.012821, mora303mSdo: 0.049118, mora909mCta: 0.035088, mora909mSdo: 0.134577 },
  { periodo: '2025-05', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1371, lineaPromedio: 2519.33, entry2mCta: 0.023341, entry2mSdo: 0.057602, mora303mCta: 0.018409, mora303mSdo: 0.059662, mora909mCta: 0.041667, mora909mSdo: 0.193153 },
  { periodo: '2025-05', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1400, lineaPromedio: 2111.43, entry2mCta: 0.025714, entry2mSdo: 0.068059, mora303mCta: 0.018773, mora303mSdo: 0.067071, mora909mCta: 0.052554, mora909mSdo: 0.259459 },
  { periodo: '2025-05', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 513, lineaPromedio: 2000, entry2mCta: 0.023392, entry2mSdo: 0.067962, mora303mCta: 0.017682, mora303mSdo: 0.069771, mora909mCta: 0.066532, mora909mSdo: 0.282069 },

  // 2025-06
  { periodo: '2025-06', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 68, lineaPromedio: 2110.29, entry2mCta: 0.014706, entry2mSdo: 0.018316, mora303mCta: 0.014706, mora303mSdo: 0.027343, mora909mCta: 0.075758, mora909mSdo: 0.336976 },
  { periodo: '2025-06', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 75, lineaPromedio: 2053.33, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0.013514, mora909mSdo: 0.090542 },
  { periodo: '2025-06', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 124, lineaPromedio: 2056.45, entry2mCta: 0.048387, entry2mSdo: 0.099087, mora303mCta: 0.040323, mora303mSdo: 0.114097, mora909mCta: 0.049587, mora909mSdo: 0.181697 },
  { periodo: '2025-06', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1369, lineaPromedio: 2932.8, entry2mCta: 0.033601, entry2mSdo: 0.069352, mora303mCta: 0.021355, mora303mSdo: 0.056616, mora909mCta: 0.067014, mora909mSdo: 0.228781 },
  { periodo: '2025-06', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1916, lineaPromedio: 2085.07, entry2mCta: 0.052714, entry2mSdo: 0.102849, mora303mCta: 0.033036, mora303mSdo: 0.086048, mora909mCta: 0.090329, mora909mSdo: 0.291047 },
  { periodo: '2025-06', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 11, lineaPromedio: 3136.36, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-06', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 261, lineaPromedio: 2961.69, entry2mCta: 0.011494, entry2mSdo: 0.025487, mora303mCta: 0.004032, mora303mSdo: 0.009083, mora909mCta: 0.024793, mora909mSdo: 0.089668 },
  { periodo: '2025-06', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1370, lineaPromedio: 2495.62, entry2mCta: 0.024818, entry2mSdo: 0.062778, mora303mCta: 0.016333, mora303mSdo: 0.050648, mora909mCta: 0.031442, mora909mSdo: 0.165859 },
  { periodo: '2025-06', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1426, lineaPromedio: 2111.5, entry2mCta: 0.036466, entry2mSdo: 0.100004, mora303mCta: 0.024182, mora303mSdo: 0.092134, mora909mCta: 0.070124, mora909mSdo: 0.325236 },
  { periodo: '2025-06', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 597, lineaPromedio: 2000, entry2mCta: 0.038526, entry2mSdo: 0.106804, mora303mCta: 0.027211, mora303mSdo: 0.096633, mora909mCta: 0.077990, mora909mSdo: 0.351111 },

  // 2025-07
  { periodo: '2025-07', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 67, lineaPromedio: 2223.88, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0.015625, mora909mSdo: 0.088410 },
  { periodo: '2025-07', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 80, lineaPromedio: 2081.25, entry2mCta: 0.025, entry2mSdo: 0.056223, mora303mCta: 0.025, mora303mSdo: 0.074901, mora909mCta: 0.0875, mora909mSdo: 0.333616 },
  { periodo: '2025-07', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 127, lineaPromedio: 2062.99, entry2mCta: 0.023622, entry2mSdo: 0.062471, mora303mCta: 0.015748, mora303mSdo: 0.057317, mora909mCta: 0.016, mora909mSdo: 0.082260 },
  { periodo: '2025-07', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1256, lineaPromedio: 2932.32, entry2mCta: 0.038217, entry2mSdo: 0.081765, mora303mCta: 0.022418, mora303mSdo: 0.061013, mora909mCta: 0.053398, mora909mSdo: 0.180196 },
  { periodo: '2025-07', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1752, lineaPromedio: 2089.61, entry2mCta: 0.050799, entry2mSdo: 0.107402, mora303mCta: 0.036186, mora303mSdo: 0.099830, mora909mCta: 0.094767, mora909mSdo: 0.319678 },
  { periodo: '2025-07', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 9, lineaPromedio: 2944.44, entry2mCta: 0.111111, entry2mSdo: 0.435353, mora303mCta: 0.111111, mora303mSdo: 0.533902, mora909mCta: 0.111111, mora909mSdo: 0.621432 },
  { periodo: '2025-07', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 206, lineaPromedio: 2978.16, entry2mCta: 0.038835, entry2mSdo: 0.115498, mora303mCta: 0.035714, mora303mSdo: 0.131255, mora909mCta: 0.032258, mora909mSdo: 0.166839 },
  { periodo: '2025-07', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1244, lineaPromedio: 2523.71, entry2mCta: 0.037781, entry2mSdo: 0.106719, mora303mCta: 0.025535, mora303mSdo: 0.099625, mora909mCta: 0.048346, mora909mSdo: 0.254757 },
  { periodo: '2025-07', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1316, lineaPromedio: 2113.98, entry2mCta: 0.036474, entry2mSdo: 0.098505, mora303mCta: 0.026985, mora303mSdo: 0.098444, mora909mCta: 0.063694, mora909mSdo: 0.305822 },
  { periodo: '2025-07', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 564, lineaPromedio: 2000, entry2mCta: 0.051418, entry2mSdo: 0.141581, mora303mCta: 0.035651, mora303mSdo: 0.127115, mora909mCta: 0.065934, mora909mSdo: 0.317325 },

  // 2025-08
  { periodo: '2025-08', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 72, lineaPromedio: 2083.33, entry2mCta: 0.027778, entry2mSdo: 0.090657, mora303mCta: 0.013889, mora303mSdo: 0.060662, mora909mCta: 0.070423, mora909mSdo: 0.389882 },
  { periodo: '2025-08', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 102, lineaPromedio: 2063.73, entry2mCta: 0.078431, entry2mSdo: 0.167579, mora303mCta: 0.059406, mora303mSdo: 0.151656, mora909mCta: 0.070707, mora909mSdo: 0.255303 },
  { periodo: '2025-08', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 140, lineaPromedio: 2035.71, entry2mCta: 0.057143, entry2mSdo: 0.144909, mora303mCta: 0.050360, mora303mSdo: 0.149656, mora909mCta: 0.057971, mora909mSdo: 0.277497 },
  { periodo: '2025-08', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1344, lineaPromedio: 2922.25, entry2mCta: 0.039435, entry2mSdo: 0.082804, mora303mCta: 0.018699, mora303mSdo: 0.049818, mora909mCta: 0.059542, mora909mSdo: 0.202866 },
  { periodo: '2025-08', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1835, lineaPromedio: 2082.02, entry2mCta: 0.050681, entry2mSdo: 0.113551, mora303mCta: 0.030803, mora303mSdo: 0.088636, mora909mCta: 0.086226, mora909mSdo: 0.309698 },
  { periodo: '2025-08', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 7, lineaPromedio: 2785.71, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-08', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 225, lineaPromedio: 2988.89, entry2mCta: 0.031111, entry2mSdo: 0.103278, mora303mCta: 0.023364, mora303mSdo: 0.098436, mora909mCta: 0.046875, mora909mSdo: 0.185699 },
  { periodo: '2025-08', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1300, lineaPromedio: 2527.31, entry2mCta: 0.034615, entry2mSdo: 0.095651, mora303mCta: 0.019531, mora303mSdo: 0.075155, mora909mCta: 0.047658, mora909mSdo: 0.247170 },
  { periodo: '2025-08', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1345, lineaPromedio: 2112.27, entry2mCta: 0.046840, entry2mSdo: 0.136092, mora303mCta: 0.027840, mora303mSdo: 0.103563, mora909mCta: 0.065385, mora909mSdo: 0.311084 },
  { periodo: '2025-08', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 527, lineaPromedio: 2000, entry2mCta: 0.041746, entry2mSdo: 0.117116, mora303mCta: 0.028902, mora303mSdo: 0.100654, mora909mCta: 0.076471, mora909mSdo: 0.327320 },

  // 2025-09
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 52, lineaPromedio: 2134.62, entry2mCta: 0.057692, entry2mSdo: 0.149134, mora303mCta: 0.019231, mora303mSdo: 0.079706, mora909mCta: 0.020833, mora909mSdo: 0.123135 },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 53, lineaPromedio: 2066.04, entry2mCta: 0.056604, entry2mSdo: 0.114164, mora303mCta: 0.038462, mora303mSdo: 0.073031, mora909mCta: 0.019231, mora909mSdo: 0.093022 },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 106, lineaPromedio: 2000, entry2mCta: 0.037736, entry2mSdo: 0.096456, mora303mCta: 0.028302, mora303mSdo: 0.086872, mora909mCta: 0.068627, mora909mSdo: 0.317448 },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1028, lineaPromedio: 2954.28, entry2mCta: 0.048638, entry2mSdo: 0.101341, mora303mCta: 0.021590, mora303mSdo: 0.058865, mora909mCta: 0.051205, mora909mSdo: 0.185394 },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1485, lineaPromedio: 2113.13, entry2mCta: 0.049832, entry2mSdo: 0.104741, mora303mCta: 0.030467, mora303mSdo: 0.078959, mora909mCta: 0.095238, mora909mSdo: 0.298197 },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 7, lineaPromedio: 2928.57, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 170, lineaPromedio: 2976.47, entry2mCta: 0.035294, entry2mSdo: 0.076698, mora303mCta: 0.012121, mora303mSdo: 0.043671, mora909mCta: 0.027778, mora909mSdo: 0.109376 },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1121, lineaPromedio: 2500.45, entry2mCta: 0.031222, entry2mSdo: 0.079082, mora303mCta: 0.020966, mora303mSdo: 0.063213, mora909mCta: 0.051258, mora909mSdo: 0.243275 },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1162, lineaPromedio: 2111.02, entry2mCta: 0.032702, entry2mSdo: 0.091473, mora303mCta: 0.022007, mora303mSdo: 0.076846, mora909mCta: 0.059783, mora909mSdo: 0.279889 },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 468, lineaPromedio: 2000, entry2mCta: 0.025641, entry2mSdo: 0.074816, mora303mCta: 0.021882, mora303mSdo: 0.081021, mora909mCta: 0.062640, mora909mSdo: 0.301984 },

  // 2025-10
  { periodo: '2025-10', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 49, lineaPromedio: 2214.29, entry2mCta: 0.081633, entry2mSdo: 0.203435, mora303mCta: 0.081633, mora303mSdo: 0.281522, mora909mCta: 0.111111, mora909mSdo: 0.564682 },
  { periodo: '2025-10', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 58, lineaPromedio: 2103.45, entry2mCta: 0.068966, entry2mSdo: 0.189669, mora303mCta: 0.051724, mora303mSdo: 0.200665, mora909mCta: 0.052632, mora909mSdo: 0.285562 },
  { periodo: '2025-10', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 126, lineaPromedio: 2019.84, entry2mCta: 0.007937, entry2mSdo: 0.022925, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0.024390, mora909mSdo: 0.166144 },
  { periodo: '2025-10', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1188, lineaPromedio: 2945.29, entry2mCta: 0.036195, entry2mSdo: 0.077349, mora303mCta: 0.018787, mora303mSdo: 0.051111, mora909mCta: 0.080450, mora909mSdo: 0.254769 },
  { periodo: '2025-10', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1415, lineaPromedio: 2124.38, entry2mCta: 0.051590, entry2mSdo: 0.100391, mora303mCta: 0.034091, mora303mSdo: 0.093846, mora909mCta: 0.085921, mora909mSdo: 0.280741 },
  { periodo: '2025-10', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 7, lineaPromedio: 3071.43, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-10', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 190, lineaPromedio: 2992.11, entry2mCta: 0.021053, entry2mSdo: 0.048378, mora303mCta: 0.010811, mora303mSdo: 0.041399, mora909mCta: 0.040000, mora909mSdo: 0.217873 },
  { periodo: '2025-10', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1205, lineaPromedio: 2492.12, entry2mCta: 0.033195, entry2mSdo: 0.087473, mora303mCta: 0.018472, mora303mSdo: 0.068451, mora909mCta: 0.047537, mora909mSdo: 0.230992 },
  { periodo: '2025-10', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1081, lineaPromedio: 2109.16, entry2mCta: 0.024052, entry2mSdo: 0.062818, mora303mCta: 0.014071, mora303mSdo: 0.052765, mora909mCta: 0.063158, mora909mSdo: 0.292510 },
  { periodo: '2025-10', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 426, lineaPromedio: 2000, entry2mCta: 0.044601, entry2mSdo: 0.113766, mora303mCta: 0.033333, mora303mSdo: 0.120137, mora909mCta: 0.080488, mora909mSdo: 0.315837 },

  // 2025-11
  { periodo: '2025-11', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 83, lineaPromedio: 2126.51, entry2mCta: 0.012048, entry2mSdo: 0.046055, mora303mCta: 0.012048, mora303mSdo: 0.059921, mora909mCta: 0.050633, mora909mSdo: 0.399885 },
  { periodo: '2025-11', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 149, lineaPromedio: 2073.83, entry2mCta: 0.046980, entry2mSdo: 0.112674, mora303mCta: 0.040541, mora303mSdo: 0.124956, mora909mCta: 0.069930, mora909mSdo: 0.291948 },
  { periodo: '2025-11', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 172, lineaPromedio: 2055.23, entry2mCta: 0.040698, entry2mSdo: 0.102214, mora303mCta: 0.005848, mora303mSdo: 0.011727, mora909mCta: 0.077844, mora909mSdo: 0.300373 },
  { periodo: '2025-11', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1938, lineaPromedio: 2929.05, entry2mCta: 0.036120, entry2mSdo: 0.073905, mora303mCta: 0.019261, mora303mSdo: 0.052074, mora909mCta: 0.051996, mora909mSdo: 0.177382 },
  { periodo: '2025-11', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1958, lineaPromedio: 2139.94, entry2mCta: 0.046987, entry2mSdo: 0.107697, mora303mCta: 0.031492, mora303mSdo: 0.093508, mora909mCta: 0.069379, mora909mSdo: 0.253922 },
  { periodo: '2025-11', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 10, lineaPromedio: 2900, entry2mCta: 0.1, entry2mSdo: 0.526537, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-11', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 309, lineaPromedio: 3014.56, entry2mCta: 0.029126, entry2mSdo: 0.095690, mora303mCta: 0.013468, mora303mSdo: 0.055134, mora909mCta: 0.027668, mora909mSdo: 0.112360 },
  { periodo: '2025-11', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1786, lineaPromedio: 2562.43, entry2mCta: 0.025196, entry2mSdo: 0.065995, mora303mCta: 0.013652, mora303mSdo: 0.051216, mora909mCta: 0.035219, mora909mSdo: 0.184783 },
  { periodo: '2025-11', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1544, lineaPromedio: 2123.06, entry2mCta: 0.032383, entry2mSdo: 0.090479, mora303mCta: 0.021150, mora303mSdo: 0.082971, mora909mCta: 0.057316, mora909mSdo: 0.275699 },
  { periodo: '2025-11', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 567, lineaPromedio: 2000, entry2mCta: 0.029982, entry2mSdo: 0.092384, mora303mCta: 0.014286, mora303mSdo: 0.060302, mora909mCta: 0.055957, mora909mSdo: 0.271644 },

  // 2025-12
  { periodo: '2025-12', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 59, lineaPromedio: 2076.27, entry2mCta: 0.016949, entry2mSdo: 0.057077, mora303mCta: 0.017241, mora303mSdo: 0.077418, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 119, lineaPromedio: 2037.82, entry2mCta: 0.058824, entry2mSdo: 0.196252, mora303mCta: 0.033613, mora303mSdo: 0.150641, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 193, lineaPromedio: 2041.45, entry2mCta: 0.082902, entry2mSdo: 0.192337, mora303mCta: 0.041451, mora303mSdo: 0.137487, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 2053, lineaPromedio: 2926.21, entry2mCta: 0.057477, entry2mSdo: 0.113839, mora303mCta: 0.027532, mora303mSdo: 0.075279, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 2027, lineaPromedio: 2144.3, entry2mCta: 0.067094, entry2mSdo: 0.141580, mora303mCta: 0.038138, mora303mSdo: 0.113680, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 10, lineaPromedio: 2900, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 254, lineaPromedio: 3005.91, entry2mCta: 0.019685, entry2mSdo: 0.066371, mora303mCta: 0.012048, mora303mSdo: 0.063901, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1533, lineaPromedio: 2519.24, entry2mCta: 0.047619, entry2mSdo: 0.131369, mora303mCta: 0.027541, mora303mSdo: 0.103863, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1408, lineaPromedio: 2153.41, entry2mCta: 0.057528, entry2mSdo: 0.153365, mora303mCta: 0.032421, mora303mSdo: 0.121036, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2025-12', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 494, lineaPromedio: 2000, entry2mCta: 0.048583, entry2mSdo: 0.155949, mora303mCta: 0.030675, mora303mSdo: 0.131645, mora909mCta: 0, mora909mSdo: 0 },

  // 2026-01
  { periodo: '2026-01', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 43, lineaPromedio: 2069.77, entry2mCta: 0.093023, entry2mSdo: 0.208520, mora303mCta: 0.069767, mora303mSdo: 0.252099, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 64, lineaPromedio: 2117.19, entry2mCta: 0.015625, entry2mSdo: 0.041046, mora303mCta: 0.015625, mora303mSdo: 0.053080, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 107, lineaPromedio: 2000, entry2mCta: 0.065421, entry2mSdo: 0.190955, mora303mCta: 0.037383, mora303mSdo: 0.144660, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1183, lineaPromedio: 2914.62, entry2mCta: 0.042265, entry2mSdo: 0.090787, mora303mCta: 0.029586, mora303mSdo: 0.086485, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 982, lineaPromedio: 2149.19, entry2mCta: 0.049898, entry2mSdo: 0.121455, mora303mCta: 0.029532, mora303mSdo: 0.098073, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 8, lineaPromedio: 3187.5, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 146, lineaPromedio: 2996.58, entry2mCta: 0.034247, entry2mSdo: 0.107089, mora303mCta: 0.020548, mora303mSdo: 0.094324, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 947, lineaPromedio: 2590.81, entry2mCta: 0.027455, entry2mSdo: 0.087927, mora303mCta: 0.015856, mora303mSdo: 0.077860, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 778, lineaPromedio: 2132.39, entry2mCta: 0.038560, entry2mSdo: 0.114828, mora303mCta: 0.027027, mora303mSdo: 0.113591, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-01', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 251, lineaPromedio: 2000, entry2mCta: 0.035857, entry2mSdo: 0.124148, mora303mCta: 0.024, mora303mSdo: 0.112205, mora909mCta: 0, mora909mSdo: 0 },

  // 2026-02
  { periodo: '2026-02', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 36, lineaPromedio: 2083.33, entry2mCta: 0.027778, entry2mSdo: 0.032621, mora303mCta: 0.027778, mora303mSdo: 0.048417, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 42, lineaPromedio: 2035.71, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 91, lineaPromedio: 2027.47, entry2mCta: 0.021978, entry2mSdo: 0.028523, mora303mCta: 0.021978, mora303mSdo: 0.049269, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1042, lineaPromedio: 2881.48, entry2mCta: 0.048944, entry2mSdo: 0.105804, mora303mCta: 0.023033, mora303mSdo: 0.062414, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 718, lineaPromedio: 2135.1, entry2mCta: 0.050139, entry2mSdo: 0.112440, mora303mCta: 0.026499, mora303mSdo: 0.084427, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 5, lineaPromedio: 2900, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 111, lineaPromedio: 2963.96, entry2mCta: 0.018018, entry2mSdo: 0.054710, mora303mCta: 0.009009, mora303mSdo: 0.047653, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 750, lineaPromedio: 2567.33, entry2mCta: 0.022667, entry2mSdo: 0.063211, mora303mCta: 0.013369, mora303mSdo: 0.048194, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 622, lineaPromedio: 2159.16, entry2mCta: 0.033762, entry2mSdo: 0.089934, mora303mCta: 0.020900, mora303mSdo: 0.078084, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-02', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 300, lineaPromedio: 2000, entry2mCta: 0.05, entry2mSdo: 0.152406, mora303mCta: 0.033333, mora303mSdo: 0.134092, mora909mCta: 0, mora909mSdo: 0 },

  // 2026-03
  { periodo: '2026-03', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 47, lineaPromedio: 2095.74, entry2mCta: 0.042553, entry2mSdo: 0.098837, mora303mCta: 0.021277, mora303mSdo: 0.046201, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 57, lineaPromedio: 2122.81, entry2mCta: 0.017544, entry2mSdo: 0.023780, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 109, lineaPromedio: 2023.49, entry2mCta: 0.027523, entry2mSdo: 0.080556, mora303mCta: 0.009174, mora303mSdo: 0.035985, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1114, lineaPromedio: 2883.75, entry2mCta: 0.045781, entry2mSdo: 0.092268, mora303mCta: 0.026930, mora303mSdo: 0.069387, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 864, lineaPromedio: 2119.21, entry2mCta: 0.046296, entry2mSdo: 0.103896, mora303mCta: 0.031286, mora303mSdo: 0.092966, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 9, lineaPromedio: 2944.44, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 129, lineaPromedio: 2980.62, entry2mCta: 0.023256, entry2mSdo: 0.055040, mora303mCta: 0.023438, mora303mSdo: 0.072369, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 812, lineaPromedio: 2554.8, entry2mCta: 0.025862, entry2mSdo: 0.060292, mora303mCta: 0.019729, mora303mSdo: 0.058352, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 730, lineaPromedio: 2134.25, entry2mCta: 0.032877, entry2mSdo: 0.094701, mora303mCta: 0.020576, mora303mSdo: 0.086515, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-03', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 390, lineaPromedio: 2000, entry2mCta: 0.038462, entry2mSdo: 0.115913, mora303mCta: 0.028205, mora303mSdo: 0.100321, mora909mCta: 0, mora909mSdo: 0 },

  // 2026-04
  { periodo: '2026-04', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 37, lineaPromedio: 2040.54, entry2mCta: 0.054054, entry2mSdo: 0.171213, mora303mCta: 0.027027, mora303mSdo: 0.105230, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 73, lineaPromedio: 2082.19, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 118, lineaPromedio: 2000, entry2mCta: 0.059322, entry2mSdo: 0.118674, mora303mCta: 0.033898, mora303mSdo: 0.104867, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1186, lineaPromedio: 2876.48, entry2mCta: 0.050590, entry2mSdo: 0.096535, mora303mCta: 0.029511, mora303mSdo: 0.076963, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1370, lineaPromedio: 2210.95, entry2mCta: 0.063504, entry2mSdo: 0.124994, mora303mCta: 0.035113, mora303mSdo: 0.096483, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 6, lineaPromedio: 2750, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 127, lineaPromedio: 2976.38, entry2mCta: 0.023622, entry2mSdo: 0.071701, mora303mCta: 0.024, mora303mSdo: 0.088053, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 786, lineaPromedio: 2532.44, entry2mCta: 0.027990, entry2mSdo: 0.083531, mora303mCta: 0.019231, mora303mSdo: 0.080061, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 702, lineaPromedio: 2150.28, entry2mCta: 0.037037, entry2mSdo: 0.103079, mora303mCta: 0.028571, mora303mSdo: 0.108181, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-04', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 341, lineaPromedio: 2020.53, entry2mCta: 0.049853, entry2mSdo: 0.143202, mora303mCta: 0.041176, mora303mSdo: 0.139763, mora909mCta: 0, mora909mSdo: 0 },

  // 2026-05
  { periodo: '2026-05', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 61, lineaPromedio: 2147.54, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 133, lineaPromedio: 2052.63, entry2mCta: 0.037594, entry2mSdo: 0.085669, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 173, lineaPromedio: 2040.46, entry2mCta: 0.034682, entry2mSdo: 0.091554, mora303mCta: 0.005780, mora303mSdo: 0.019409, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1687, lineaPromedio: 2882.63, entry2mCta: 0.046236, entry2mSdo: 0.095114, mora303mCta: 0.009484, mora303mSdo: 0.023441, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1985, lineaPromedio: 2199.5, entry2mCta: 0.046348, entry2mSdo: 0.094904, mora303mCta: 0.012091, mora303mSdo: 0.025779, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 12, lineaPromedio: 2875, entry2mCta: 0.083333, entry2mSdo: 0.652202, mora303mCta: 0.083333, mora303mSdo: 0.652202, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 175, lineaPromedio: 2994.29, entry2mCta: 0.022857, entry2mSdo: 0.087648, mora303mCta: 0.005714, mora303mSdo: 0.016069, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1038, lineaPromedio: 2575.14, entry2mCta: 0.026012, entry2mSdo: 0.079525, mora303mCta: 0.001927, mora303mSdo: 0.006153, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 966, lineaPromedio: 2173.91, entry2mCta: 0.037267, entry2mSdo: 0.102393, mora303mCta: 0.005176, mora303mSdo: 0.018542, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-05', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 496, lineaPromedio: 2040.32, entry2mCta: 0.034274, entry2mSdo: 0.117050, mora303mCta: 0.006048, mora303mSdo: 0.023667, mora909mCta: 0, mora909mSdo: 0 },

  // 2026-06
  { periodo: '2026-06', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 54, lineaPromedio: 2055.56, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 98, lineaPromedio: 2030.61, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 159, lineaPromedio: 2012.58, entry2mCta: 0.012579, entry2mSdo: 0.026938, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1893, lineaPromedio: 2490.23, entry2mCta: 0.011094, entry2mSdo: 0.022482, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 2619, lineaPromedio: 2074.84, entry2mCta: 0.009546, entry2mSdo: 0.017494, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 6, lineaPromedio: 3083.33, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 115, lineaPromedio: 2978.26, entry2mCta: 0, entry2mSdo: 0, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 909, lineaPromedio: 2581.41, entry2mCta: 0.004400, entry2mSdo: 0.010424, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 816, lineaPromedio: 2155.64, entry2mCta: 0.008578, entry2mSdo: 0.023310, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 },
  { periodo: '2026-06', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 595, lineaPromedio: 2094.12, entry2mCta: 0.010084, entry2mSdo: 0.026830, mora303mCta: 0, mora303mSdo: 0, mora909mCta: 0, mora909mSdo: 0 }
];

const MONTH_NAMES: Record<string, string> = {
  '01': 'Ene', '02': 'Feb', '03': 'Mar', '04': 'Abr',
  '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Ago',
  '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dic'
};

export function formatRiskPeriodLabel(per: string): string {
  const [yyyy, mm] = per.split('-');
  return `${MONTH_NAMES[mm] || mm} ${yyyy.slice(2)}`;
}

export interface ChartPointRisk {
  periodo: string;
  label: string;
  totalCuentas: number;
  lineaPromedio: number;
  entry2mSdo: number; // in % (0 - 100)
  entry2mCta: number; // in % (0 - 100)
  mora303mSdo: number; // in % (0 - 100)
  mora303mCta: number; // in % (0 - 100)
  mora909mSdo: number; // in % (0 - 100)
  mora909mCta: number; // in % (0 - 100)
}

export interface RiskStats {
  meanSdo: number;
  stdDevSdo: number;
  upperBandSdo: number;
  lowerBandSdo: number;
  meanCta: number;
  stdDevCta: number;
  upperBandCta: number;
  lowerBandCta: number;
  totalCuentas: number;
  lineaPromedio: number;
}

export interface PrecalculatedStat {
  meanSdo: number;
  stdDevSdo: number;
}

export const PRECALCULATED_MORA_STATS: Record<string, PrecalculatedStat> = {
  // === Entry @ 2MOB (Por Saldo) ===
  'entry2m_HIT_1. MUY BAJO': { meanSdo: 7.38, stdDevSdo: 8.64 },
  'entry2m_HIT_2. BAJO':     { meanSdo: 7.65, stdDevSdo: 10.52 },
  'entry2m_HIT_3. MEDIO':    { meanSdo: 8.65, stdDevSdo: 9.58 },
  'entry2m_HIT_4. ALTO':     { meanSdo: 7.59, stdDevSdo: 2.35 },
  'entry2m_HIT_5. MUY ALTO': { meanSdo: 9.73, stdDevSdo: 2.75 },

  'entry2m_NOHIT_1. MUY BAJO': { meanSdo: 8.50, stdDevSdo: 20.48 },
  'entry2m_NOHIT_2. BAJO':     { meanSdo: 5.99, stdDevSdo: 3.54 },
  'entry2m_NOHIT_3. MEDIO':    { meanSdo: 7.42, stdDevSdo: 2.79 },
  'entry2m_NOHIT_4. ALTO':     { meanSdo: 8.97, stdDevSdo: 2.90 },
  'entry2m_NOHIT_5. MUY ALTO': { meanSdo: 10.36, stdDevSdo: 3.50 },

  // === 30+ @ 3MOB (Por Saldo) ===
  'mora30_HIT_1. MUY BAJO': { meanSdo: 6.11, stdDevSdo: 8.49 },
  'mora30_HIT_2. BAJO':     { meanSdo: 4.88, stdDevSdo: 6.84 },
  'mora30_HIT_3. MEDIO':    { meanSdo: 7.38, stdDevSdo: 10.20 },
  'mora30_HIT_4. ALTO':     { meanSdo: 5.23, stdDevSdo: 1.79 },
  'mora30_HIT_5. MUY ALTO': { meanSdo: 8.06, stdDevSdo: 2.21 },

  'mora30_NOHIT_1. MUY BAJO': { meanSdo: 6.59, stdDevSdo: 19.29 },
  'mora30_NOHIT_2. BAJO':     { meanSdo: 4.99, stdDevSdo: 3.66 },
  'mora30_NOHIT_3. MEDIO':    { meanSdo: 6.20, stdDevSdo: 2.55 },
  'mora30_NOHIT_4. ALTO':     { meanSdo: 8.08, stdDevSdo: 2.45 },
  'mora30_NOHIT_5. MUY ALTO': { meanSdo: 9.49, stdDevSdo: 3.24 },

  // === 90+ @ 9MOB (Por Saldo) ===
  'mora90_HIT_1. MUY BAJO': { meanSdo: 20.86, stdDevSdo: 21.03 },
  'mora90_HIT_2. BAJO':     { meanSdo: 13.50, stdDevSdo: 14.06 },
  'mora90_HIT_3. MEDIO':    { meanSdo: 11.05, stdDevSdo: 13.11 },
  'mora90_HIT_4. ALTO':     { meanSdo: 18.80, stdDevSdo: 3.37 },
  'mora90_HIT_5. MUY ALTO': { meanSdo: 27.54, stdDevSdo: 2.78 },

  'mora90_NOHIT_1. MUY BAJO': { meanSdo: 5.18, stdDevSdo: 17.94 },
  'mora90_NOHIT_2. BAJO':     { meanSdo: 13.30, stdDevSdo: 4.05 },
  'mora90_NOHIT_3. MEDIO':    { meanSdo: 21.13, stdDevSdo: 3.59 },
  'mora90_NOHIT_4. ALTO':     { meanSdo: 27.95, stdDevSdo: 3.33 },
  'mora90_NOHIT_5. MUY ALTO': { meanSdo: 28.19, stdDevSdo: 5.46 },
};

// Function to query data filtered by Risk Level and Segment (HIT / NOHIT)
export function getRiskMoraChartData(
  selectedRisk: RiskLevel,
  segmentFilter: 'HIT' | 'NOHIT' = 'HIT'
): { points: ChartPointRisk[]; statsEntry2m: RiskStats; statsMora30: RiskStats; statsMora90: RiskStats } {
  
  const rows = RAW_MORA_POR_RIESGO.filter(r => r.riskLevel === selectedRisk && r.hitDes === segmentFilter);
  
  // Sort rows chronologically by periodo
  rows.sort((a, b) => a.periodo.localeCompare(b.periodo));

  const points: ChartPointRisk[] = rows.map(r => ({
    periodo: r.periodo,
    label: formatRiskPeriodLabel(r.periodo),
    totalCuentas: r.totalCuentas,
    lineaPromedio: r.lineaPromedio,
    entry2mSdo: r.entry2mSdo * 100,
    entry2mCta: r.entry2mCta * 100,
    mora303mSdo: r.mora303mSdo * 100,
    mora303mCta: r.mora303mCta * 100,
    mora909mSdo: r.mora909mSdo * 100,
    mora909mCta: r.mora909mCta * 100,
  }));

  const buildStat = (windowKey: 'entry2m' | 'mora30' | 'mora90'): RiskStats => {
    const key = `${windowKey}_${segmentFilter}_${selectedRisk}`;
    const stat = PRECALCULATED_MORA_STATS[key] || { meanSdo: 0, stdDevSdo: 0 };
    const mean = stat.meanSdo;
    const stdDev = stat.stdDevSdo;
    
    const totalCtas = points.reduce((acc, p) => acc + p.totalCuentas, 0);
    const avgLinea = points.length > 0 ? points.reduce((acc, p) => acc + p.lineaPromedio * p.totalCuentas, 0) / (totalCtas || 1) : 0;

    return {
      meanSdo: mean,
      stdDevSdo: stdDev,
      upperBandSdo: mean + stdDev,
      lowerBandSdo: Math.max(0, mean - stdDev),
      meanCta: mean,
      stdDevCta: stdDev,
      upperBandCta: mean + stdDev,
      lowerBandCta: Math.max(0, mean - stdDev),
      totalCuentas: totalCtas,
      lineaPromedio: avgLinea
    };
  };

  return {
    points,
    statsEntry2m: buildStat('entry2m'),
    statsMora30: buildStat('mora30'),
    statsMora90: buildStat('mora90'),
  };
}
