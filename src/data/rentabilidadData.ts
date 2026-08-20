export interface RentabilidadRow {
  periodo: string; // e.g. "2022-01"
  hitDes: 'HIT' | 'NOHIT';
  riskLevel: '1. MUY BAJO' | '2. BAJO' | '3. MEDIO' | '4. ALTO' | '5. MUY ALTO';
  totalCuentas: number;
  lineaPromedio: number;
  colocado6m: number | null;
  utFinanciera6m: number | null;
  porcLroi6m: number | null; // e.g. 0.05225 => 5.23%
  colocado9m: number | null;
  utFinanciera9m: number | null;
  porcLroi9m: number | null;
  colocado12m: number | null;
  utFinanciera12m: number | null;
  porcLroi12m: number | null;
}

// Segmento lim cred >= 4000 and < 6000 (Cartera General)
export const CARTERA_RENTABILIDAD_DATA: RentabilidadRow[] = [
  { periodo: '2022-01', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 132, lineaPromedio: 4000, colocado6m: 297336.57, utFinanciera6m: 15536.73861, porcLroi6m: 0.052253036, colocado9m: 359833.06, utFinanciera9m: 18616.87693, porcLroi9m: 0.051737539, colocado12m: 446348.79, utFinanciera12m: 24685.80737, porcLroi12m: 0.055306092 },
  { periodo: '2022-01', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 208, lineaPromedio: 3004.81, colocado6m: 404365.92, utFinanciera6m: 27144.14707, porcLroi6m: 0.067127682, colocado9m: 486629.43, utFinanciera9m: 35584.14061, porcLroi9m: 0.073123692, colocado12m: 601370.62, utFinanciera12m: 42659.5856, porcLroi12m: 0.070937263 },
  { periodo: '2022-01', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 576, lineaPromedio: 3142.36, colocado6m: 1296818.87, utFinanciera6m: 91863.01541, porcLroi6m: 0.070837198, colocado9m: 1593750.65, utFinanciera9m: 122626.3539, porcLroi9m: 0.076941995, colocado12m: 1959764.34, utFinanciera12m: 146048.6296, porcLroi12m: 0.074523567 },
  { periodo: '2022-01', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 851, lineaPromedio: 2474.74, colocado6m: 1742306.26, utFinanciera6m: 162661.189, porcLroi6m: 0.0933597, colocado9m: 2150717.22, utFinanciera9m: 248870.6724, porcLroi9m: 0.1157152, colocado12m: 2674605.91, utFinanciera12m: 318234.9229, porcLroi12m: 0.118983855 },
  { periodo: '2022-01', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 2127, lineaPromedio: 2369.77, colocado6m: 4750227.13, utFinanciera6m: 486388.5356, porcLroi6m: 0.10239269, colocado9m: 5817336.08, utFinanciera9m: 851503.6293, porcLroi9m: 0.146373463, colocado12m: 7054852.49, utFinanciera12m: 1057805.278, porcLroi12m: 0.149940099 },
  { periodo: '2022-01', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 9, lineaPromedio: 3833.33, colocado6m: 24672.24, utFinanciera6m: 3234.97544, porcLroi6m: 0.131118027, colocado9m: 25672.24, utFinanciera9m: 6346.791086, porcLroi9m: 0.247223892, colocado12m: 31614.9, utFinanciera12m: 8271.052932, porcLroi12m: 0.261618823 },
  { periodo: '2022-01', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 788, lineaPromedio: 3998.73, colocado6m: 2101540.47, utFinanciera6m: 167574.8014, porcLroi6m: 0.079739031, colocado9m: 2538264.74, utFinanciera9m: 242418.6173, porcLroi9m: 0.095505647, colocado12m: 3113802.09, utFinanciera12m: 275290.4355, porcLroi12m: 0.088409741 },
  { periodo: '2022-01', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1383, lineaPromedio: 2998.55, colocado6m: 3146352.64, utFinanciera6m: 268476.1201, porcLroi6m: 0.085329316, colocado9m: 3883558.86, utFinanciera9m: 422693.3961, porcLroi9m: 0.108841764, colocado12m: 4792955.71, utFinanciera12m: 472344.1507, porcLroi12m: 0.098549659 },
  { periodo: '2022-01', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1285, lineaPromedio: 2000, colocado6m: 2225465.7, utFinanciera6m: 217773.0702, porcLroi6m: 0.097855056, colocado9m: 2694696.01, utFinanciera9m: 371646.61, porcLroi9m: 0.137917824, colocado12m: 3333929.42, utFinanciera12m: 450617.6407, porcLroi12m: 0.135161122 },
  { periodo: '2022-01', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 413, lineaPromedio: 2000, colocado6m: 754541.14, utFinanciera6m: 77584.17994, porcLroi6m: 0.102822995, colocado9m: 944443.22, utFinanciera9m: 132498.0028, porcLroi9m: 0.140292185, colocado12m: 1183641.97, utFinanciera12m: 139258.1123, porcLroi12m: 0.117652226 },

  { periodo: '2022-02', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 104, lineaPromedio: 4000, colocado6m: 231952.98, utFinanciera6m: 15341.82989, porcLroi6m: 0.066141982, colocado9m: 265349.02, utFinanciera9m: 21998.40654, porcLroi9m: 0.082903666, colocado12m: 328981.98, utFinanciera12m: 18421.97819, porcLroi12m: 0.055996922 },
  { periodo: '2022-02', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 180, lineaPromedio: 3000, colocado6m: 342149.31, utFinanciera6m: 22741.54186, porcLroi6m: 0.066466718, colocado9m: 418608.94, utFinanciera9m: 32763.06447, porcLroi9m: 0.078266519, colocado12m: 493495.27, utFinanciera12m: 40964.66444, porcLroi12m: 0.083009234 },
  { periodo: '2022-02', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 507, lineaPromedio: 3140.04, colocado6m: 1115622.61, utFinanciera6m: 89106.27513, porcLroi6m: 0.079871342, colocado9m: 1352114.2, utFinanciera9m: 129057.4308, porcLroi9m: 0.095448617, colocado12m: 1620420.76, utFinanciera12m: 179497.3702, porcLroi12m: 0.110772075 },
  { periodo: '2022-02', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 811, lineaPromedio: 2520.35, colocado6m: 1705694.02, utFinanciera6m: 158659.7239, porcLroi6m: 0.093017694, colocado9m: 2164967.69, utFinanciera9m: 251276.8759, porcLroi9m: 0.116064954, colocado12m: 2552994.84, utFinanciera12m: 306083.4087, porcLroi12m: 0.119891903 },
  { periodo: '2022-02', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 2018, lineaPromedio: 2388.26, colocado6m: 4499437.06, utFinanciera6m: 532417.2535, porcLroi6m: 0.118329748, colocado9m: 5659566.6, utFinanciera9m: 949059.6374, porcLroi9m: 0.167691222, colocado12m: 6688207.65, utFinanciera12m: 1159085.408, porcLroi12m: 0.173302844 },
  { periodo: '2022-02', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 778, lineaPromedio: 3998.71, colocado6m: 2050137.66, utFinanciera6m: 177340.3453, porcLroi6m: 0.086501677, colocado9m: 2550406.32, utFinanciera9m: 267783.9223, porcLroi9m: 0.104996573, colocado12m: 3034995.74, utFinanciera12m: 299597.5974, porcLroi12m: 0.098714339 },
  { periodo: '2022-02', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1288, lineaPromedio: 2998.45, colocado6m: 2895777.56, utFinanciera6m: 275549.0228, porcLroi6m: 0.095155452, colocado9m: 3635614.32, utFinanciera9m: 462160.051, porcLroi9m: 0.127120209, colocado12m: 4249354.86, utFinanciera12m: 545880.2437, porcLroi12m: 0.128461911 },
  { periodo: '2022-02', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1231, lineaPromedio: 2000, colocado6m: 2117384.24, utFinanciera6m: 255649.5447, porcLroi6m: 0.120738381, colocado9m: 2657035.57, utFinanciera9m: 399235.7104, porcLroi9m: 0.150256065, colocado12m: 3166567.29, utFinanciera12m: 431514.6374, porcLroi12m: 0.136272057 },
  { periodo: '2022-02', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 391, lineaPromedio: 2000, colocado6m: 707027.36, utFinanciera6m: 73516.51527, porcLroi6m: 0.103979732, colocado9m: 865576.92, utFinanciera9m: 133606.0903, porcLroi9m: 0.154354959, colocado12m: 1022740.65, utFinanciera12m: 165175.0108, porcLroi12m: 0.161502343 },

  { periodo: '2022-03', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 134, lineaPromedio: 4000, colocado6m: 316362.11, utFinanciera6m: 22437.99019, porcLroi6m: 0.070925024, colocado9m: 414427.05, utFinanciera9m: 35250.25122, porcLroi9m: 0.085057795, colocado12m: 450098.05, utFinanciera12m: 31438.13023, porcLroi12m: 0.069847293 },
  { periodo: '2022-03', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 218, lineaPromedio: 3000, colocado6m: 396126.2, utFinanciera6m: 32085.32521, porcLroi6m: 0.080997736, colocado9m: 515536.9, utFinanciera9m: 41934.0316, porcLroi9m: 0.081340505, colocado12m: 592208.64, utFinanciera12m: 45774.26193, porcLroi12m: 0.077294147 },
  { periodo: '2022-03', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 624, lineaPromedio: 3125, colocado6m: 1259069.34, utFinanciera6m: 110137.8223, porcLroi6m: 0.087475581, colocado9m: 1653393.9, utFinanciera9m: 161854.9689, porcLroi9m: 0.097892564, colocado12m: 1864866.24, utFinanciera12m: 199100.45, porcLroi12m: 0.106763931 },
  { periodo: '2022-03', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 942, lineaPromedio: 2510.62, colocado6m: 1936339.96, utFinanciera6m: 205464.3974, porcLroi6m: 0.106109672, colocado9m: 2594838.94, utFinanciera9m: 332699.0895, porcLroi9m: 0.128215699, colocado12m: 2951453.78, utFinanciera12m: 389532.7026, porcLroi12m: 0.131979943 },
  { periodo: '2022-03', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 2489, lineaPromedio: 2413.42, colocado6m: 5415818.41, utFinanciera6m: 788329.2084, porcLroi6m: 0.145560495, colocado9m: 7126158.98, utFinanciera9m: 1416651.535, porcLroi9m: 0.198795949, colocado12m: 7811099.63, utFinanciera12m: 1598130.4, porcLroi12m: 0.204597365 },
  { periodo: '2022-03', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 6, lineaPromedio: 3833.33, colocado6m: 18871.46, utFinanciera6m: 2524.586627, porcLroi6m: 0.133778024, colocado9m: 25163.46, utFinanciera9m: 7249.373183, porcLroi9m: 0.288091271, colocado12m: 24865.2, utFinanciera12m: 1492.689923, porcLroi12m: 0.060031286 },
  { periodo: '2022-03', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 922, lineaPromedio: 3996.75, colocado6m: 2374259.08, utFinanciera6m: 226882.4796, porcLroi6m: 0.095559276, colocado9m: 3116066.33, utFinanciera9m: 382795.9338, porcLroi9m: 0.122845888, colocado12m: 3503219.47, utFinanciera12m: 427318.2227, porcLroi12m: 0.121978719 },
  { periodo: '2022-03', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1580, lineaPromedio: 2999.05, colocado6m: 3438892.75, utFinanciera6m: 368535.0075, porcLroi6m: 0.107166764, colocado9m: 4524771.96, utFinanciera9m: 598585.1167, porcLroi9m: 0.132290671, colocado12m: 5052359.27, utFinanciera12m: 654544.1366, porcLroi12m: 0.129552176 },
  { periodo: '2022-03', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1493, lineaPromedio: 2000, colocado6m: 2496503.12, utFinanciera6m: 331852.7207, porcLroi6m: 0.13292702, colocado9m: 3253977.31, utFinanciera9m: 598122.3525, porcLroi9m: 0.183812699, colocado12m: 3618995.97, utFinanciera12m: 658264.3781, porcLroi12m: 0.181891437 },
  { periodo: '2022-03', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 1168, lineaPromedio: 2000, colocado6m: 1966205.07, utFinanciera6m: 301951.7192, porcLroi6m: 0.153570817, colocado9m: 2594786.94, utFinanciera9m: 529208.4781, porcLroi9m: 0.203950648, colocado12m: 2810146.78, utFinanciera12m: 539771.2875, porcLroi12m: 0.192079393 },

  { periodo: '2023-01', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 126, lineaPromedio: 4000, colocado6m: 327932.41, utFinanciera6m: 20035.88817, porcLroi6m: 0.061097615, colocado9m: 383473.98, utFinanciera9m: 32316.58233, porcLroi9m: 0.084273208, colocado12m: 487003.8, utFinanciera12m: 43693.11372, porcLroi12m: 0.089718219 },
  { periodo: '2023-01', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 191, lineaPromedio: 3026.18, colocado6m: 378417.58, utFinanciera6m: 28642.26299, porcLroi6m: 0.075689568, colocado9m: 442121.1, utFinanciera9m: 40394.92707, porcLroi9m: 0.091366205, colocado12m: 530401.22, utFinanciera12m: 45376.55243, porcLroi12m: 0.085551373 },
  { periodo: '2023-01', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 603, lineaPromedio: 3143.45, colocado6m: 1305859.01, utFinanciera6m: 93967.73075, porcLroi6m: 0.071958558, colocado9m: 1599910.12, utFinanciera9m: 148035.4373, porcLroi9m: 0.092527346, colocado12m: 1992924.7, utFinanciera12m: 184377.1933, porcLroi12m: 0.092515885 },
  { periodo: '2023-01', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1073, lineaPromedio: 3307.55, colocado6m: 2723506.26, utFinanciera6m: 270225.1089, porcLroi6m: 0.099219566, colocado9m: 3279686.32, utFinanciera9m: 447331.7047, porcLroi9m: 0.136394661, colocado12m: 4028980.67, utFinanciera12m: 534790.8295, porcLroi12m: 0.132736013 },
  { periodo: '2023-01', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 3378, lineaPromedio: 3232.39, colocado6m: 9578657.71, utFinanciera6m: 1281342.893, porcLroi6m: 0.133770611, colocado9m: 11497840.45, utFinanciera9m: 2198011.815, porcLroi9m: 0.191167361, colocado12m: 13913669.1, utFinanciera12m: 2521192.978, porcLroi12m: 0.181202597 },
  { periodo: '2023-01', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 1243, lineaPromedio: 3500, colocado6m: 2769188.74, utFinanciera6m: 233963.3622, porcLroi6m: 0.084488052, colocado9m: 3276513.97, utFinanciera9m: 358637.5093, porcLroi9m: 0.109457037, colocado12m: 3996938.23, utFinanciera12m: 358013.0259, porcLroi12m: 0.089571819 },
  { periodo: '2023-01', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 968, lineaPromedio: 3000, colocado6m: 2145785.22, utFinanciera6m: 205717.1504, porcLroi6m: 0.095870336, colocado9m: 2557009.45, utFinanciera9m: 327661.1867, porcLroi9m: 0.128142345, colocado12m: 3068853.61, utFinanciera12m: 382912.5129, porcLroi12m: 0.124773796 },
  { periodo: '2023-01', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1507, lineaPromedio: 2500, colocado6m: 2976338.32, utFinanciera6m: 321070.6549, porcLroi6m: 0.107874381, colocado9m: 3512030.66, utFinanciera9m: 518737.0904, porcLroi9m: 0.147702893, colocado12m: 4212320.15, utFinanciera12m: 556767.1542, porcLroi12m: 0.132175887 },
  { periodo: '2023-01', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1475, lineaPromedio: 2000, colocado6m: 2585352.05, utFinanciera6m: 304719.4745, porcLroi6m: 0.117863822, colocado9m: 3046797.25, utFinanciera9m: 512870.3659, porcLroi9m: 0.16833098, colocado12m: 3605973.32, utFinanciera12m: 541599.0328, porcLroi12m: 0.150194964 },
  { periodo: '2023-01', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 1440, lineaPromedio: 2000, colocado6m: 2648993.81, utFinanciera6m: 391786.4338, porcLroi6m: 0.147900094, colocado9m: 3132575.92, utFinanciera9m: 646170.6499, porcLroi9m: 0.206274538, colocado12m: 3679217.77, utFinanciera12m: 662036.0128, porcLroi12m: 0.179939339 },

  { periodo: '2024-01', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 313, lineaPromedio: 3996.81, colocado6m: 703949.6, utFinanciera6m: 49044.05278, porcLroi6m: 0.069669835, colocado9m: 874631.05, utFinanciera9m: 76534.68762, porcLroi9m: 0.087505112, colocado12m: 1077770.65, utFinanciera12m: 85702.13432, porcLroi12m: 0.07951797 },
  { periodo: '2024-01', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 519, lineaPromedio: 3004.82, colocado6m: 1187641.27, utFinanciera6m: 82087.53911, porcLroi6m: 0.069118126, colocado9m: 1418283.83, utFinanciera9m: 121752.8759, porcLroi9m: 0.085845212, colocado12m: 1762781.86, utFinanciera12m: 141719.7367, porcLroi12m: 0.080395504 },
  { periodo: '2024-01', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 1036, lineaPromedio: 3152.99, colocado6m: 2533747.93, utFinanciera6m: 235476.2494, porcLroi6m: 0.092935942, colocado9m: 3053615.16, utFinanciera9m: 393965.7669, porcLroi9m: 0.129016181, colocado12m: 3666547.6, utFinanciera12m: 468316.0315, porcLroi12m: 0.127726702 },
  { periodo: '2024-01', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 783, lineaPromedio: 3414.43, colocado6m: 2269807.32, utFinanciera6m: 256196.0404, porcLroi6m: 0.112871272, colocado9m: 2788421.65, utFinanciera9m: 417901.0751, porcLroi9m: 0.149870116, colocado12m: 3403335.74, utFinanciera12m: 522749.0147, porcLroi12m: 0.153599014 },
  { periodo: '2024-01', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1237, lineaPromedio: 3230.4, colocado6m: 3553296.52, utFinanciera6m: 476123.2818, porcLroi6m: 0.133994807, colocado9m: 4335657.4, utFinanciera9m: 827218.9441, porcLroi9m: 0.190794352, colocado12m: 5152470.92, utFinanciera12m: 963949.1594, porcLroi12m: 0.187084833 },
  { periodo: '2024-01', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 1375, lineaPromedio: 3498.55, colocado6m: 3007516.14, utFinanciera6m: 235707.5434, porcLroi6m: 0.078372827, colocado9m: 3651505.7, utFinanciera9m: 351916.7926, porcLroi9m: 0.096375803, colocado12m: 4346982.22, utFinanciera12m: 368011.4237, porcLroi12m: 0.084659059 },
  { periodo: '2024-01', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 1054, lineaPromedio: 2997.63, colocado6m: 2315515.78, utFinanciera6m: 186969.9423, porcLroi6m: 0.080746564, colocado9m: 2811283.98, utFinanciera9m: 275196.6483, porcLroi9m: 0.097890021, colocado12m: 3395699.45, utFinanciera12m: 309881.1912, porcLroi12m: 0.091256955 },
  { periodo: '2024-01', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1589, lineaPromedio: 2498.74, colocado6m: 3131336.56, utFinanciera6m: 312536.7975, porcLroi6m: 0.099809392, colocado9m: 3729907.88, utFinanciera9m: 506435.0081, porcLroi9m: 0.135776814, colocado12m: 4410547.48, utFinanciera12m: 523179.2553, porcLroi12m: 0.118620026 },
  { periodo: '2024-01', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1347, lineaPromedio: 2000, colocado6m: 2288267.42, utFinanciera6m: 286103.4477, porcLroi6m: 0.1250306, colocado9m: 2706332.96, utFinanciera9m: 443916.8588, porcLroi9m: 0.164028915, colocado12m: 3199052.13, utFinanciera12m: 458296.4054, porcLroi12m: 0.143260062 },
  { periodo: '2024-01', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 545, lineaPromedio: 2000.92, colocado6m: 943457.63, utFinanciera6m: 131714.0838, porcLroi6m: 0.139607842, colocado9m: 1134614.13, utFinanciera9m: 222975.1469, porcLroi9m: 0.196520686, colocado12m: 1305118.33, utFinanciera12m: 228724.0071, porcLroi12m: 0.175251548 },

  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 23, lineaPromedio: 3913.04, colocado6m: 47917.13, utFinanciera6m: 3215.542063, porcLroi6m: 0.067106316, colocado9m: 57596.33, utFinanciera9m: 3902.894107, porcLroi9m: 0.067762896, colocado12m: 84498.38, utFinanciera12m: 3531.22763, porcLroi12m: 0.041790477 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 4, lineaPromedio: 3375, colocado6m: 6019.11, utFinanciera6m: 362.8545797, porcLroi6m: 0.06028376, colocado9m: 7597.11, utFinanciera9m: 290.2711848, porcLroi9m: 0.038208106, colocado12m: 14133.31, utFinanciera12m: 352.6060623, porcLroi12m: 0.024948583 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 258, lineaPromedio: 3992.25, colocado6m: 738021.28, utFinanciera6m: 62270.72474, porcLroi6m: 0.084375243, colocado9m: 880987.18, utFinanciera9m: 102856.3678, porcLroi9m: 0.116751265, colocado12m: 1079297.59, utFinanciera12m: 127638.6071, porcLroi12m: 0.11826081 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1079, lineaPromedio: 3000, colocado6m: 2736457.39, utFinanciera6m: 317741.5955, porcLroi6m: 0.116114213, colocado9m: 3305010.27, utFinanciera9m: 526409.1886, porcLroi9m: 0.159276113, colocado12m: 4067416.18, utFinanciera12m: 586996.4146, porcLroi12m: 0.144316782 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1400, lineaPromedio: 2110, colocado6m: 2824316.5, utFinanciera6m: 385181.1712, porcLroi6m: 0.136380314, colocado9m: 3381915.59, utFinanciera9m: 680889.8816, porcLroi9m: 0.201332607, colocado12m: 3982219.57, utFinanciera12m: 762569.4528, porcLroi12m: 0.191493573 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 10, lineaPromedio: 3300, colocado6m: 12019.62, utFinanciera6m: 2035.338349, porcLroi6m: 0.169334667, colocado9m: 12019.62, utFinanciera9m: 3141.436985, porcLroi9m: 0.261359093, colocado12m: 15462.12, utFinanciera12m: 3104.503002, porcLroi12m: 0.2007812 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 829, lineaPromedio: 3801.57, colocado6m: 2099302.52, utFinanciera6m: 180718.7717, porcLroi6m: 0.08608515, colocado9m: 2472042.84, utFinanciera9m: 262172.9556, porcLroi9m: 0.106055183, colocado12m: 3039366.15, utFinanciera12m: 274008.689, porcLroi12m: 0.090153234 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1391, lineaPromedio: 2821.35, colocado6m: 2976060.78, utFinanciera6m: 307635.9104, porcLroi6m: 0.103370171, colocado9m: 3526248.64, utFinanciera9m: 479301.2083, porcLroi9m: 0.135923826, colocado12m: 4230298.33, utFinanciera12m: 489895.3748, porcLroi12m: 0.115806342 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 941, lineaPromedio: 2098.83, colocado6m: 1630090.64, utFinanciera6m: 197228.8102, porcLroi6m: 0.120992542, colocado9m: 1936598.02, utFinanciera9m: 318877.0035, porcLroi9m: 0.164658334, colocado12m: 2260352.54, utFinanciera12m: 314759.7851, porcLroi12m: 0.139252519 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 378, lineaPromedio: 2000, colocado6m: 597056.41, utFinanciera6m: 77141.29418, porcLroi6m: 0.12920269, colocado9m: 727273.98, utFinanciera9m: 127313.5291, porcLroi9m: 0.175055801, colocado12m: 840658.02, utFinanciera12m: 126747.2105, porcLroi12m: 0.150771428 },

  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 63, lineaPromedio: 2460.32, colocado6m: 142606.91, utFinanciera6m: 12164.98735, porcLroi6m: 0.085304333, colocado9m: 157720.46, utFinanciera9m: 15665.46149, porcLroi9m: 0.099324219, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 53, lineaPromedio: 2066.04, colocado6m: 89792.02, utFinanciera6m: 9248.369946, porcLroi6m: 0.102997682, colocado9m: 111096.02, utFinanciera9m: 10900.46995, porcLroi9m: 0.098117556, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 316, lineaPromedio: 3329.11, colocado6m: 812717.59, utFinanciera6m: 76259.29472, porcLroi6m: 0.093832465, colocado9m: 980637.3, utFinanciera9m: 103928.6631, porcLroi9m: 0.105980736, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1029, lineaPromedio: 2955.3, colocado6m: 2819042.09, utFinanciera6m: 301747.4151, porcLroi6m: 0.107038989, colocado9m: 3440821.62, utFinanciera9m: 404224.475, porcLroi9m: 0.117479056, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1498, lineaPromedio: 2129.51, colocado6m: 3407625.29, utFinanciera6m: 469671.2998, porcLroi6m: 0.137829503, colocado9m: 4099221.06, utFinanciera9m: 646448.8515, porcLroi9m: 0.157700412, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 9, lineaPromedio: 3166.67, colocado6m: 20365.69, utFinanciera6m: 1038.991867, porcLroi6m: 0.051016777, colocado9m: 23793.44, utFinanciera9m: 1371.661867, porcLroi9m: 0.057648741, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 770, lineaPromedio: 3774.03, colocado6m: 2134507.43, utFinanciera6m: 194533.6316, porcLroi6m: 0.091137482, colocado9m: 2541837.19, utFinanciera9m: 255674.2565, porcLroi9m: 0.100586402, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1422, lineaPromedio: 2817.86, colocado6m: 3289581.98, utFinanciera6m: 308889.18, porcLroi6m: 0.093899219, colocado9m: 3905742.7, utFinanciera9m: 397208.3949, porcLroi9m: 0.101698557, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1162, lineaPromedio: 2111.02, colocado6m: 2070411.45, utFinanciera6m: 227246.1753, porcLroi6m: 0.109758944, colocado9m: 2461685.17, utFinanciera9m: 307070.1801, porcLroi9m: 0.124739826, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 468, lineaPromedio: 2000, colocado6m: 817771.84, utFinanciera6m: 87879.75613, porcLroi6m: 0.107462439, colocado9m: 959072.74, utFinanciera9m: 119535.2168, porcLroi9m: 0.124636236, colocado12m: null, utFinanciera12m: null, porcLroi12m: null }
];

// Segmento target
export const TARGET_RENTABILIDAD_DATA: RentabilidadRow[] = [
  { periodo: '2022-01', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 207, lineaPromedio: 3000, colocado6m: 403024.7, utFinanciera6m: 27039.55353, porcLroi6m: 0.067091554, colocado9m: 479913.96, utFinanciera9m: 35392.40114, porcLroi9m: 0.073747388, colocado12m: 593098.15, utFinanciera12m: 42165.41538, porcLroi12m: 0.071093487 },
  { periodo: '2022-01', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 494, lineaPromedio: 3000, colocado6m: 1084043.54, utFinanciera6m: 76321.68453, porcLroi6m: 0.07040463, colocado9m: 1324901.49, utFinanciera9m: 101862.1178, porcLroi9m: 0.076882786, colocado12m: 1639735.37, utFinanciera12m: 120955.1546, porcLroi12m: 0.073765046 },
  { periodo: '2022-01', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 708, lineaPromedio: 2166.67, colocado6m: 1330441.72, utFinanciera6m: 116284.1894, porcLroi6m: 0.087402693, colocado9m: 1641308.97, utFinanciera9m: 180245.4734, porcLroi9m: 0.109818125, colocado12m: 2040269.71, utFinanciera12m: 229980.4798, porcLroi12m: 0.112720626 },
  { periodo: '2022-01', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1761, lineaPromedio: 2030.95, colocado6m: 3464689.04, utFinanciera6m: 365417.05, porcLroi6m: 0.105468931, colocado9m: 4232348.44, utFinanciera9m: 638404.3954, porcLroi9m: 0.150839281, colocado12m: 5133000.49, utFinanciera12m: 804603.6788, porcLroi12m: 0.15675114 },
  { periodo: '2022-01', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 3, lineaPromedio: 3500, colocado6m: 8713.94, utFinanciera6m: 410.06062, porcLroi6m: 0.047058004, colocado9m: 9713.94, utFinanciera9m: 434.4096445, porcLroi9m: 0.044720231, colocado12m: 14224.79, utFinanciera12m: 863.5395511, porcLroi12m: 0.060706664 },
  { periodo: '2022-01', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1383, lineaPromedio: 2998.55, colocado6m: 3146352.64, utFinanciera6m: 268476.1201, porcLroi6m: 0.085329316, colocado9m: 3883558.86, utFinanciera9m: 422693.3961, porcLroi9m: 0.108841764, colocado12m: 4792955.71, utFinanciera12m: 472344.1507, porcLroi12m: 0.098549659 },
  { periodo: '2022-01', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1285, lineaPromedio: 2000, colocado6m: 2225465.7, utFinanciera6m: 217773.0702, porcLroi6m: 0.097855056, colocado9m: 2694696.01, utFinanciera9m: 371646.61, porcLroi9m: 0.137917824, colocado12m: 3333929.42, utFinanciera12m: 450617.6407, porcLroi12m: 0.135161122 },
  { periodo: '2022-01', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 413, lineaPromedio: 2000, colocado6m: 754541.14, utFinanciera6m: 77584.17994, porcLroi6m: 0.102822995, colocado9m: 944443.22, utFinanciera9m: 132498.0028, porcLroi9m: 0.140292185, colocado12m: 1183641.97, utFinanciera12m: 139258.1123, porcLroi12m: 0.117652226 },

  { periodo: '2022-02', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 180, lineaPromedio: 3000, colocado6m: 342149.31, utFinanciera6m: 22741.54186, porcLroi6m: 0.066466718, colocado9m: 418608.94, utFinanciera9m: 32763.06447, porcLroi9m: 0.078266519, colocado12m: 493495.27, utFinanciera12m: 40964.66444, porcLroi12m: 0.083009234 },
  { periodo: '2022-02', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 436, lineaPromedio: 3000, colocado6m: 937917.22, utFinanciera6m: 76415.61094, porcLroi6m: 0.081473726, colocado9m: 1128087.86, utFinanciera9m: 113967.7143, porcLroi9m: 0.101027339, colocado12m: 1356652.51, utFinanciera12m: 159421.3175, porcLroi12m: 0.117510797 },
  { periodo: '2022-02', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 671, lineaPromedio: 2211.62, colocado6m: 1268731.37, utFinanciera6m: 118017.105, porcLroi6m: 0.093019774, colocado9m: 1604480.35, utFinanciera9m: 189244.8349, porcLroi9m: 0.117947742, colocado12m: 1891186.27, utFinanciera12m: 217285.7037, porcLroi12m: 0.114893867 },
  { periodo: '2022-02', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1651, lineaPromedio: 2029.98, colocado6m: 3199876.91, utFinanciera6m: 371955.0472, porcLroi6m: 0.116240424, colocado9m: 4018605.06, utFinanciera9m: 661107.403, porcLroi9m: 0.164511663, colocado12m: 4728985.95, utFinanciera12m: 792315.6824, porcLroi12m: 0.16754452 },
  { periodo: '2022-02', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1288, lineaPromedio: 2998.45, colocado6m: 2895777.56, utFinanciera6m: 275549.0228, porcLroi6m: 0.095155452, colocado9m: 3635614.32, utFinanciera9m: 462160.051, porcLroi9m: 0.127120209, colocado12m: 4249354.86, utFinanciera12m: 545880.2437, porcLroi12m: 0.128461911 },
  { periodo: '2022-02', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1231, lineaPromedio: 2000, colocado6m: 2117384.24, utFinanciera6m: 255649.5447, porcLroi6m: 0.120738381, colocado9m: 2657035.57, utFinanciera9m: 399235.7104, porcLroi9m: 0.150256065, colocado12m: 3166567.29, utFinanciera12m: 431514.6374, porcLroi12m: 0.136272057 },
  { periodo: '2022-02', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 391, lineaPromedio: 2000, colocado6m: 707027.36, utFinanciera6m: 73516.51527, porcLroi6m: 0.103979732, colocado9m: 865576.92, utFinanciera9m: 133606.0903, porcLroi9m: 0.154354959, colocado12m: 1022740.65, utFinanciera12m: 165175.0108, porcLroi12m: 0.161502343 },

  { periodo: '2023-01', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 186, lineaPromedio: 3000, colocado6m: 361700.75, utFinanciera6m: 27944.63577, porcLroi6m: 0.077258993, colocado9m: 422375.1, utFinanciera9m: 39287.37257, porcLroi9m: 0.093015361, colocado12m: 510879.37, utFinanciera12m: 44194.43977, porcLroi12m: 0.086506605 },
  { periodo: '2023-01', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 517, lineaPromedio: 3000.97, colocado6m: 1098656.09, utFinanciera6m: 77459.3149, porcLroi6m: 0.070503696, colocado9m: 1347343.83, utFinanciera9m: 121631.3832, porcLroi9m: 0.09027494, colocado12m: 1672316.3, utFinanciera12m: 148979.1675, porcLroi12m: 0.08908552 },
  { periodo: '2023-01', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 840, lineaPromedio: 3115.48, colocado6m: 1976491.74, utFinanciera6m: 187803.5371, porcLroi6m: 0.09501863, colocado9m: 2365685.31, utFinanciera9m: 299462.449, porcLroi9m: 0.126585919, colocado12m: 2903265.72, utFinanciera12m: 329863.8995, porcLroi12m: 0.113618226 },
  { periodo: '2023-01', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 2712, lineaPromedio: 3043.88, colocado6m: 7273073.59, utFinanciera6m: 966619.7728, porcLroi6m: 0.13290389, colocado9m: 8765267.73, utFinanciera9m: 1647682.658, porcLroi9m: 0.187978589, colocado12m: 10552488.93, utFinanciera12m: 1866365.291, porcLroi12m: 0.176864937 },
  { periodo: '2023-01', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 1243, lineaPromedio: 3500, colocado6m: 2769188.74, utFinanciera6m: 233963.3622, porcLroi6m: 0.084488052, colocado9m: 3276513.97, utFinanciera9m: 358637.5093, porcLroi9m: 0.109457037, colocado12m: 3996938.23, utFinanciera12m: 358013.0259, porcLroi12m: 0.089571819 },
  { periodo: '2023-01', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 968, lineaPromedio: 3000, colocado6m: 2145785.22, utFinanciera6m: 205717.1504, porcLroi6m: 0.095870336, colocado9m: 2557009.45, utFinanciera9m: 327661.1867, porcLroi9m: 0.128142345, colocado12m: 3068853.61, utFinanciera12m: 382912.5129, porcLroi12m: 0.124773796 },
  { periodo: '2023-01', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1507, lineaPromedio: 2500, colocado6m: 2976338.32, utFinanciera6m: 321070.6549, porcLroi6m: 0.107874381, colocado9m: 3512030.66, utFinanciera9m: 518737.0904, porcLroi9m: 0.147702893, colocado12m: 4212320.15, utFinanciera12m: 556767.1542, porcLroi12m: 0.132175887 },
  { periodo: '2023-01', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1475, lineaPromedio: 2000, colocado6m: 2585352.05, utFinanciera6m: 304719.4745, porcLroi6m: 0.117863822, colocado9m: 3046797.25, utFinanciera9m: 512870.3659, porcLroi9m: 0.16833098, colocado12m: 3605973.32, utFinanciera12m: 541599.0328, porcLroi12m: 0.150194964 },
  { periodo: '2023-01', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 1440, lineaPromedio: 2000, colocado6m: 2648993.81, utFinanciera6m: 391786.4338, porcLroi6m: 0.147900094, colocado9m: 3132575.92, utFinanciera9m: 646170.6499, porcLroi9m: 0.206274538, colocado12m: 3679217.77, utFinanciera12m: 662036.0128, porcLroi12m: 0.179939339 },

  { periodo: '2024-01', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 517, lineaPromedio: 3000.97, colocado6m: 1185226.12, utFinanciera6m: 81769.79835, porcLroi6m: 0.068990885, colocado9m: 1415868.68, utFinanciera9m: 121438.1625, porcLroi9m: 0.085769368, colocado12m: 1760366.71, utFinanciera12m: 141404.9967, porcLroi12m: 0.080327011 },
  { periodo: '2024-01', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 878, lineaPromedio: 3000.57, colocado6m: 2058442.3, utFinanciera6m: 202045.3302, porcLroi6m: 0.098154478, colocado9m: 2480287.83, utFinanciera9m: 338126.2062, porcLroi9m: 0.13632539, colocado12m: 2954401.45, utFinanciera12m: 390933.869, porcLroi12m: 0.132322528 },
  { periodo: '2024-01', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 501, lineaPromedio: 3084.83, colocado6m: 1271106.7, utFinanciera6m: 156387.9164, porcLroi6m: 0.123032879, colocado9m: 1552336.55, utFinanciera9m: 250576.145, porcLroi9m: 0.161418698, colocado12m: 1880430.11, utFinanciera12m: 301252.1091, porcLroi12m: 0.160203832 },
  { periodo: '2024-01', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 977, lineaPromedio: 3025.59, colocado6m: 2616661.12, utFinanciera6m: 359773.1265, porcLroi6m: 0.137493206, colocado9m: 3164178.77, utFinanciera9m: 617174.9346, porcLroi9m: 0.19505059, colocado12m: 3710620.46, utFinanciera12m: 676903.2071, porcLroi12m: 0.182423186 },
  { periodo: '2024-01', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 1375, lineaPromedio: 3498.55, colocado6m: 3007516.14, utFinanciera6m: 235707.5434, porcLroi6m: 0.078372827, colocado9m: 3651505.7, utFinanciera9m: 351916.7926, porcLroi9m: 0.096375803, colocado12m: 4346982.22, utFinanciera12m: 368011.4237, porcLroi12m: 0.084659059 },
  { periodo: '2024-01', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 1054, lineaPromedio: 2997.63, colocado6m: 2315515.78, utFinanciera6m: 186969.9423, porcLroi6m: 0.080746564, colocado9m: 2811283.98, utFinanciera9m: 275196.6483, porcLroi9m: 0.097890021, colocado12m: 3395699.45, utFinanciera12m: 309881.1912, porcLroi12m: 0.091256955 },
  { periodo: '2024-01', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1589, lineaPromedio: 2498.74, colocado6m: 3131336.56, utFinanciera6m: 312536.7975, porcLroi6m: 0.099809392, colocado9m: 3729907.88, utFinanciera9m: 506435.0081, porcLroi9m: 0.135776814, colocado12m: 4410547.48, utFinanciera12m: 523179.2553, porcLroi12m: 0.118620026 },
  { periodo: '2024-01', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1347, lineaPromedio: 2000, colocado6m: 2288267.42, utFinanciera6m: 286103.4477, porcLroi6m: 0.1250306, colocado9m: 2706332.96, utFinanciera9m: 443916.8588, porcLroi9m: 0.164028915, colocado12m: 3199052.13, utFinanciera12m: 458296.4054, porcLroi12m: 0.143260062 },
  { periodo: '2024-01', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 545, lineaPromedio: 2000.92, colocado6m: 943457.63, utFinanciera6m: 131714.0838, porcLroi6m: 0.139607842, colocado9m: 1134614.13, utFinanciera9m: 222975.1469, porcLroi9m: 0.196520686, colocado12m: 1305118.33, utFinanciera12m: 228724.0071, porcLroi12m: 0.175251548 },

  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 4, lineaPromedio: 3500, colocado6m: 6429.72, utFinanciera6m: 1078.161933, porcLroi6m: 0.167684119, colocado9m: 10337.82, utFinanciera9m: 1523.054112, porcLroi9m: 0.147328364, colocado12m: 16393.47, utFinanciera12m: 846.7508469, porcLroi12m: 0.051651715 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 4, lineaPromedio: 3375, colocado6m: 6019.11, utFinanciera6m: 362.8545797, porcLroi6m: 0.06028376, colocado9m: 7597.11, utFinanciera9m: 290.2711848, porcLroi9m: 0.038208106, colocado12m: 14133.31, utFinanciera12m: 352.6060623, porcLroi12m: 0.024948583 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 3, lineaPromedio: 3333.33, colocado6m: 6170.49, utFinanciera6m: 1062.441785, porcLroi6m: 0.172181105, colocado9m: 13234.79, utFinanciera9m: 1240.125427, porcLroi9m: 0.093701935, colocado12m: 13234.79, utFinanciera12m: 2341.360058, porcLroi12m: 0.176909498 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1079, lineaPromedio: 3000, colocado6m: 2736457.39, utFinanciera6m: 317741.5955, porcLroi6m: 0.116114213, colocado9m: 3305010.27, utFinanciera9m: 526409.1886, porcLroi9m: 0.159276113, colocado12m: 4067416.18, utFinanciera12m: 586996.4146, porcLroi12m: 0.144316782 },
  { periodo: '2025-01', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1400, lineaPromedio: 2110, colocado6m: 2824316.5, utFinanciera6m: 385181.1712, porcLroi6m: 0.136380314, colocado9m: 3381915.59, utFinanciera9m: 680889.8816, porcLroi9m: 0.201332607, colocado12m: 3982219.57, utFinanciera12m: 762569.4528, porcLroi12m: 0.191493573 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 10, lineaPromedio: 3300, colocado6m: 12019.62, utFinanciera6m: 2035.338349, porcLroi6m: 0.169334667, colocado9m: 12019.62, utFinanciera9m: 3141.436985, porcLroi9m: 0.261359093, colocado12m: 15462.12, utFinanciera12m: 3104.503002, porcLroi12m: 0.2007812 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 165, lineaPromedio: 3003.03, colocado6m: 349385.04, utFinanciera6m: 38128.80111, porcLroi6m: 0.109131178, colocado9m: 424808.1, utFinanciera9m: 56936.5348, porcLroi9m: 0.134028835, colocado12m: 519706.32, utFinanciera12m: 55979.80611, porcLroi12m: 0.107714307 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1125, lineaPromedio: 2542.67, colocado6m: 2222167.46, utFinanciera6m: 236595.7434, porcLroi6m: 0.106470708, colocado9m: 2622487.63, utFinanciera9m: 364023.1506, porcLroi9m: 0.138808338, colocado12m: 3124324.17, utFinanciera12m: 352628.9694, porcLroi12m: 0.112865679 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 941, lineaPromedio: 2098.83, colocado6m: 1630090.64, utFinanciera6m: 197228.8102, porcLroi6m: 0.120992542, colocado9m: 1936598.02, utFinanciera9m: 318877.0035, porcLroi9m: 0.164658334, colocado12m: 2260352.54, utFinanciera12m: 314759.7851, porcLroi12m: 0.139252519 },
  { periodo: '2025-01', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 378, lineaPromedio: 2000, colocado6m: 597056.41, utFinanciera6m: 77141.29418, porcLroi6m: 0.12920269, colocado9m: 727273.98, utFinanciera9m: 127313.5291, porcLroi9m: 0.175055801, colocado12m: 840658.02, utFinanciera12m: 126747.2105, porcLroi12m: 0.150771428 },

  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '1. MUY BAJO', totalCuentas: 51, lineaPromedio: 2137.25, colocado6m: 107469.01, utFinanciera6m: 8954.80321, porcLroi6m: 0.083324516, colocado9m: 115759.31, utFinanciera9m: 11330.81735, porcLroi9m: 0.097882558, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '2. BAJO', totalCuentas: 53, lineaPromedio: 2066.04, colocado6m: 89792.02, utFinanciera6m: 9248.369946, porcLroi6m: 0.102997682, colocado9m: 111096.02, utFinanciera9m: 10900.46995, porcLroi9m: 0.098117556, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '3. MEDIO', totalCuentas: 106, lineaPromedio: 2000, colocado6m: 172726.48, utFinanciera6m: 22554.34256, porcLroi6m: 0.130578372, colocado9m: 195313.03, utFinanciera9m: 28343.40157, porcLroi9m: 0.145117822, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '4. ALTO', totalCuentas: 1010, lineaPromedio: 2953.47, colocado6m: 2734672.12, utFinanciera6m: 298872.1165, porcLroi6m: 0.109289927, colocado9m: 3337355.24, utFinanciera9m: 397560.0364, porcLroi9m: 0.119124279, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'HIT', riskLevel: '5. MUY ALTO', totalCuentas: 1454, lineaPromedio: 2113.14, colocado6m: 3301105.14, utFinanciera6m: 457129.595, porcLroi6m: 0.138477745, colocado9m: 3965202.33, utFinanciera9m: 629401.2267, porcLroi9m: 0.158731175, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '1. MUY BAJO', totalCuentas: 7, lineaPromedio: 2928.57, colocado6m: 10584.84, utFinanciera6m: 647.7614447, porcLroi6m: 0.061197094, colocado9m: 11531.84, utFinanciera9m: 980.4314447, porcLroi9m: 0.085019515, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '2. BAJO', totalCuentas: 164, lineaPromedio: 2972.56, colocado6m: 333247.22, utFinanciera6m: 31722.79907, porcLroi6m: 0.095192989, colocado9m: 403701.81, utFinanciera9m: 43540.46907, porcLroi9m: 0.107853044, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '3. MEDIO', totalCuentas: 1089, lineaPromedio: 2501.38, colocado6m: 2303824.98, utFinanciera6m: 224880.7073, porcLroi6m: 0.097611889, colocado9m: 2756327.29, utFinanciera9m: 283806.3313, porcLroi9m: 0.102965396, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '4. ALTO', totalCuentas: 1141, lineaPromedio: 2113.06, colocado6m: 2037900.3, utFinanciera6m: 222828.2514, porcLroi6m: 0.109342077, colocado9m: 2420894.77, utFinanciera9m: 301733.6562, porcLroi9m: 0.124739826, colocado12m: null, utFinanciera12m: null, porcLroi12m: null },
  { periodo: '2025-09', hitDes: 'NOHIT', riskLevel: '5. MUY ALTO', totalCuentas: 453, lineaPromedio: 2000, colocado6m: 800395.04, utFinanciera6m: 85646.28443, porcLroi6m: 0.107005016, colocado9m: 937443.67, utFinanciera9m: 119535.2168, porcLroi9m: 0.124311005, colocado12m: null, utFinanciera12m: null, porcLroi12m: null }
];

export interface RentabilidadPoint {
  periodo: string;
  label: string; // "Ene 22", "Feb 22", etc.
  totalCuentas: number;
  lineaPromedio: number;
  colocado6m: number | null;
  utFinanciera6m: number | null;
  lroi6mPct: number | null; // e.g. 5.23 (%)
  colocado9m: number | null;
  utFinanciera9m: number | null;
  lroi9mPct: number | null;
  colocado12m: number | null;
  utFinanciera12m: number | null;
  lroi12mPct: number | null;
}

export interface RentabilidadStats {
  mean6m: number;
  stdDev6m: number;
  upperBand6m: number;
  lowerBand6m: number;
  mean9m: number;
  stdDev9m: number;
  upperBand9m: number;
  lowerBand9m: number;
  mean12m: number;
  stdDev12m: number;
  upperBand12m: number;
  lowerBand12m: number;
  totalColocado6m: number;
  totalUtFinanciera6m: number;
}

export interface LroiStatReference {
  min: number;
  max: number;
  mean: number;
  stdDev: number;
}

// Official historical reference stats for LROI (Image 1)
export const REFERENCE_LROI_STATS: Record<string, LroiStatReference> = {
  // --- 6MOB ---
  '6m_HIT_1. MUY BAJO': { min: 1.10, max: 16.77, mean: 7.31, stdDev: 4.98 },
  '6m_HIT_2. BAJO': { min: 2.77, max: 17.46, mean: 7.72, stdDev: 2.67 },
  '6m_HIT_3. MEDIO': { min: 6.33, max: 31.12, mean: 10.75, stdDev: 5.08 },
  '6m_HIT_4. ALTO': { min: 8.35, max: 14.36, mean: 10.94, stdDev: 1.33 },
  '6m_HIT_5. MUY ALTO': { min: 10.55, max: 17.44, mean: 14.17, stdDev: 1.31 },

  '6m_NOHIT_1. MUY BAJO': { min: 0.28, max: 31.76, mean: 8.57, stdDev: 5.76 },
  '6m_NOHIT_2. BAJO': { min: 0.00, max: 10.91, mean: 8.10, stdDev: 2.07 },
  '6m_NOHIT_3. MEDIO': { min: 8.53, max: 13.62, mean: 10.56, stdDev: 0.91 },
  '6m_NOHIT_4. ALTO': { min: 9.79, max: 15.50, mean: 12.58, stdDev: 1.15 },
  '6m_NOHIT_5. MUY ALTO': { min: 10.28, max: 17.52, mean: 13.91, stdDev: 1.79 },

  // --- 9MOB ---
  '9m_HIT_1. MUY BAJO': { min: 0.20, max: 17.35, mean: 7.44, stdDev: 5.86 },
  '9m_HIT_2. BAJO': { min: 0.86, max: 21.14, mean: 8.89, stdDev: 3.68 },
  '9m_HIT_3. MEDIO': { min: 2.33, max: 57.67, mean: 13.61, stdDev: 9.71 },
  '9m_HIT_4. ALTO': { min: 9.77, max: 17.94, mean: 14.02, stdDev: 1.85 },
  '9m_HIT_5. MUY ALTO': { min: 15.08, max: 23.72, mean: 19.30, stdDev: 1.93 },

  '9m_NOHIT_1. MUY BAJO': { min: 0.29, max: 39.30, mean: 10.49, stdDev: 7.36 },
  '9m_NOHIT_2. BAJO': { min: 0.00, max: 17.47, mean: 10.08, stdDev: 2.81 },
  '9m_NOHIT_3. MEDIO': { min: 10.30, max: 17.49, mean: 13.61, stdDev: 1.54 },
  '9m_NOHIT_4. ALTO': { min: 12.46, max: 20.95, mean: 16.86, stdDev: 1.91 },
  '9m_NOHIT_5. MUY ALTO': { min: 12.43, max: 24.65, mean: 19.11, stdDev: 3.19 },

  // --- 12MOB ---
  '12m_HIT_1. MUY BAJO': { min: 0.07, max: 17.15, mean: 6.28, stdDev: 5.34 },
  '12m_HIT_2. BAJO': { min: 1.28, max: 22.13, mean: 9.05, stdDev: 4.01 },
  '12m_HIT_3. MEDIO': { min: 1.51, max: 76.32, mean: 13.47, stdDev: 10.60 },
  '12m_HIT_4. ALTO': { min: 10.81, max: 17.77, mean: 13.84, stdDev: 1.75 },
  '12m_HIT_5. MUY ALTO': { min: 14.75, max: 23.02, mean: 18.75, stdDev: 1.91 },

  '12m_NOHIT_1. MUY BAJO': { min: 0.02, max: 38.59, mean: 10.02, stdDev: 6.67 },
  '12m_NOHIT_2. BAJO': { min: 0.00, max: 38.40, mean: 10.31, stdDev: 5.00 },
  '12m_NOHIT_3. MEDIO': { min: 9.85, max: 15.80, mean: 12.66, stdDev: 1.38 },
  '12m_NOHIT_4. ALTO': { min: 11.11, max: 18.19, mean: 15.11, stdDev: 1.79 },
  '12m_NOHIT_5. MUY ALTO': { min: 11.77, max: 21.90, mean: 17.17, stdDev: 2.46 },
};

function formatPeriodLabel(periodo: string): string {
  const [year, month] = periodo.split('-');
  const months: Record<string, string> = {
    '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr',
    '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug',
    '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec',
  };
  const yy = year.substring(2);
  return `${months[month] || month} ${yy}`;
}

// Function 1: Get points for a specific scope (target or cartera), risk level, and segment (HIT/NOHIT)
export function getRentabilidadByRiskLevel(
  scope: 'target' | 'cartera',
  riskLevel: '1. MUY BAJO' | '2. BAJO' | '3. MEDIO' | '4. ALTO' | '5. MUY ALTO',
  hitDes: 'HIT' | 'NOHIT'
) {
  const source = scope === 'cartera' ? CARTERA_RENTABILIDAD_DATA : TARGET_RENTABILIDAD_DATA;
  const filtered = source.filter(r => r.riskLevel === riskLevel && r.hitDes === hitDes);

  // Group or map by period
  const rawPoints: RentabilidadPoint[] = filtered.map(r => ({
    periodo: r.periodo,
    label: formatPeriodLabel(r.periodo),
    totalCuentas: r.totalCuentas,
    lineaPromedio: r.lineaPromedio,
    colocado6m: r.colocado6m,
    utFinanciera6m: r.utFinanciera6m,
    lroi6mPct: r.porcLroi6m !== null ? r.porcLroi6m * 100 : null,
    colocado9m: r.colocado9m,
    utFinanciera9m: r.utFinanciera9m,
    lroi9mPct: r.porcLroi9m !== null ? r.porcLroi9m * 100 : null,
    colocado12m: r.colocado12m,
    utFinanciera12m: r.utFinanciera12m,
    lroi12mPct: r.porcLroi12m !== null ? r.porcLroi12m * 100 : null,
  })).sort((a, b) => a.periodo.localeCompare(b.periodo));

  // Ensure quarterly timeline points (Jan, Apr, Jul, Oct for 2022-2025)
  const TARGET_QUARTERLY_PERIODS = [
    '2022-01', '2022-04', '2022-07', '2022-10',
    '2023-01', '2023-04', '2023-07', '2023-10',
    '2024-01', '2024-04', '2024-07', '2024-10',
    '2025-01', '2025-04', '2025-07'
  ];

  const periodToMonthIndex = (p: string) => {
    const [y, m] = p.split('-').map(Number);
    return y * 12 + m;
  };

  const lerp = (a: number | null, b: number | null, t: number): number | null => {
    if (a === null && b === null) return null;
    if (a === null) return b;
    if (b === null) return a;
    return a + t * (b - a);
  };

  const pointsMap = new Map<string, RentabilidadPoint>();
  rawPoints.forEach(p => pointsMap.set(p.periodo, p));

  const points: RentabilidadPoint[] = [];

  if (rawPoints.length > 0) {
    for (const targetPeriod of TARGET_QUARTERLY_PERIODS) {
      if (pointsMap.has(targetPeriod)) {
        points.push(pointsMap.get(targetPeriod)!);
      } else {
        const prev = rawPoints.filter(p => p.periodo < targetPeriod).pop();
        const next = rawPoints.find(p => p.periodo > targetPeriod);

        if (prev && next) {
          const prevIdx = periodToMonthIndex(prev.periodo);
          const nextIdx = periodToMonthIndex(next.periodo);
          const targetIdx = periodToMonthIndex(targetPeriod);
          const t = (targetIdx - prevIdx) / (nextIdx - prevIdx);

          points.push({
            periodo: targetPeriod,
            label: formatPeriodLabel(targetPeriod),
            totalCuentas: Math.round((prev.totalCuentas + t * (next.totalCuentas - prev.totalCuentas)) || prev.totalCuentas),
            lineaPromedio: lerp(prev.lineaPromedio, next.lineaPromedio, t) ?? prev.lineaPromedio,
            colocado6m: lerp(prev.colocado6m, next.colocado6m, t),
            utFinanciera6m: lerp(prev.utFinanciera6m, next.utFinanciera6m, t),
            lroi6mPct: lerp(prev.lroi6mPct, next.lroi6mPct, t),
            colocado9m: lerp(prev.colocado9m, next.colocado9m, t),
            utFinanciera9m: lerp(prev.utFinanciera9m, next.utFinanciera9m, t),
            lroi9mPct: lerp(prev.lroi9mPct, next.lroi9mPct, t),
            colocado12m: lerp(prev.colocado12m, next.colocado12m, t),
            utFinanciera12m: lerp(prev.utFinanciera12m, next.utFinanciera12m, t),
            lroi12mPct: lerp(prev.lroi12mPct, next.lroi12mPct, t),
          });
        } else if (prev) {
          points.push({
            ...prev,
            periodo: targetPeriod,
            label: formatPeriodLabel(targetPeriod),
          });
        } else if (next) {
          points.push({
            ...next,
            periodo: targetPeriod,
            label: formatPeriodLabel(targetPeriod),
          });
        }
      }
    }
  }

  // Look up official reference stats from image reference
  const ref6 = REFERENCE_LROI_STATS[`6m_${hitDes}_${riskLevel}`];
  const ref9 = REFERENCE_LROI_STATS[`9m_${hitDes}_${riskLevel}`];
  const ref12 = REFERENCE_LROI_STATS[`12m_${hitDes}_${riskLevel}`];

  // Calculate fallback stats if lookup fails
  const calcStatsFallback = (vals: number[]) => {
    if (vals.length === 0) return { mean: 0, stdDev: 0, upper: 0, lower: 0 };
    const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
    const variance = vals.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / vals.length;
    const stdDev = Math.sqrt(variance);
    return { mean, stdDev, upper: mean + stdDev, lower: Math.max(0, mean - stdDev) };
  };

  const v6 = points.map(p => p.lroi6mPct).filter((v): v is number => v !== null);
  const v9 = points.map(p => p.lroi9mPct).filter((v): v is number => v !== null);
  const v12 = points.map(p => p.lroi12mPct).filter((v): v is number => v !== null);

  const fb6 = calcStatsFallback(v6);
  const fb9 = calcStatsFallback(v9);
  const fb12 = calcStatsFallback(v12);

  const mean6m = ref6 ? ref6.mean : fb6.mean;
  const stdDev6m = ref6 ? ref6.stdDev : fb6.stdDev;
  const upperBand6m = mean6m + stdDev6m;
  const lowerBand6m = Math.max(0, mean6m - stdDev6m);

  const mean9m = ref9 ? ref9.mean : fb9.mean;
  const stdDev9m = ref9 ? ref9.stdDev : fb9.stdDev;
  const upperBand9m = mean9m + stdDev9m;
  const lowerBand9m = Math.max(0, mean9m - stdDev9m);

  const mean12m = ref12 ? ref12.mean : fb12.mean;
  const stdDev12m = ref12 ? ref12.stdDev : fb12.stdDev;
  const upperBand12m = mean12m + stdDev12m;
  const lowerBand12m = Math.max(0, mean12m - stdDev12m);

  const totalColocado6m = points.reduce((acc, p) => acc + (p.colocado6m || 0), 0);
  const totalUtFinanciera6m = points.reduce((acc, p) => acc + (p.utFinanciera6m || 0), 0);

  const stats: RentabilidadStats = {
    mean6m,
    stdDev6m,
    upperBand6m,
    lowerBand6m,
    mean9m,
    stdDev9m,
    upperBand9m,
    lowerBand9m,
    mean12m,
    stdDev12m,
    upperBand12m,
    lowerBand12m,
    totalColocado6m,
    totalUtFinanciera6m,
  };

  return { points, stats };
}

export interface RentabilidadComparisonPoint {
  periodo: string;
  label: string;
  // Target segment totals & LROI
  targetTotalCuentas: number;
  targetColocado6m: number;
  targetUtFinanciera6m: number;
  targetLroi6mPct: number | null;
  targetColocado9m: number;
  targetUtFinanciera9m: number;
  targetLroi9mPct: number | null;
  targetColocado12m: number;
  targetUtFinanciera12m: number;
  targetLroi12mPct: number | null;

  // Cartera general totals & LROI
  carteraTotalCuentas: number;
  carteraColocado6m: number;
  carteraUtFinanciera6m: number;
  carteraLroi6mPct: number | null;
  carteraColocado9m: number;
  carteraUtFinanciera9m: number;
  carteraLroi9mPct: number | null;
  carteraColocado12m: number;
  carteraUtFinanciera12m: number;
  carteraLroi12mPct: number | null;
}

// Function 2: Aggregate across all risk levels per period to compare Target vs Cartera General
export function getRentabilidadComparisonData(hitDes: 'HIT' | 'NOHIT') {
  const filterByHit = (arr: RentabilidadRow[]) => arr.filter(r => r.hitDes === hitDes);

  const targetFiltered = filterByHit(TARGET_RENTABILIDAD_DATA);
  const carteraFiltered = filterByHit(CARTERA_RENTABILIDAD_DATA);

  // Collect all unique periods
  const periodSet = new Set<string>();
  targetFiltered.forEach(r => periodSet.add(r.periodo));
  carteraFiltered.forEach(r => periodSet.add(r.periodo));

  const sortedPeriods = Array.from(periodSet).sort();

  const comparisonPoints: RentabilidadComparisonPoint[] = sortedPeriods.map(p => {
    const tRows = targetFiltered.filter(r => r.periodo === p);
    const cRows = carteraFiltered.filter(r => r.periodo === p);

    // Target aggregations
    const targetTotalCuentas = tRows.reduce((a, b) => a + b.totalCuentas, 0);
    
    const tCol6 = tRows.reduce((a, b) => a + (b.colocado6m || 0), 0);
    const tUt6 = tRows.reduce((a, b) => a + (b.utFinanciera6m || 0), 0);
    const targetLroi6mPct = tCol6 > 0 ? (tUt6 / tCol6) * 100 : null;

    const tCol9 = tRows.reduce((a, b) => a + (b.colocado9m || 0), 0);
    const tUt9 = tRows.reduce((a, b) => a + (b.utFinanciera9m || 0), 0);
    const targetLroi9mPct = tCol9 > 0 ? (tUt9 / tCol9) * 100 : null;

    const tCol12 = tRows.reduce((a, b) => a + (b.colocado12m || 0), 0);
    const tUt12 = tRows.reduce((a, b) => a + (b.utFinanciera12m || 0), 0);
    const targetLroi12mPct = tCol12 > 0 ? (tUt12 / tCol12) * 100 : null;

    // Cartera aggregations
    const carteraTotalCuentas = cRows.reduce((a, b) => a + b.totalCuentas, 0);

    const cCol6 = cRows.reduce((a, b) => a + (b.colocado6m || 0), 0);
    const cUt6 = cRows.reduce((a, b) => a + (b.utFinanciera6m || 0), 0);
    const carteraLroi6mPct = cCol6 > 0 ? (cUt6 / cCol6) * 100 : null;

    const cCol9 = cRows.reduce((a, b) => a + (b.colocado9m || 0), 0);
    const cUt9 = cRows.reduce((a, b) => a + (b.utFinanciera9m || 0), 0);
    const carteraLroi9mPct = cCol9 > 0 ? (cUt9 / cCol9) * 100 : null;

    const cCol12 = cRows.reduce((a, b) => a + (b.colocado12m || 0), 0);
    const cUt12 = cRows.reduce((a, b) => a + (b.utFinanciera12m || 0), 0);
    const carteraLroi12mPct = cCol12 > 0 ? (cUt12 / cCol12) * 100 : null;

    return {
      periodo: p,
      label: formatPeriodLabel(p),
      targetTotalCuentas,
      targetColocado6m: tCol6,
      targetUtFinanciera6m: tUt6,
      targetLroi6mPct,
      targetColocado9m: tCol9,
      targetUtFinanciera9m: tUt9,
      targetLroi9mPct,
      targetColocado12m: tCol12,
      targetUtFinanciera12m: tUt12,
      targetLroi12mPct,

      carteraTotalCuentas,
      carteraColocado6m: cCol6,
      carteraUtFinanciera6m: cUt6,
      carteraLroi6mPct,
      carteraColocado9m: cCol9,
      carteraUtFinanciera9m: cUt9,
      carteraLroi9mPct,
      carteraColocado12m: cCol12,
      carteraUtFinanciera12m: cUt12,
      carteraLroi12mPct,
    };
  });

  return comparisonPoints;
}
