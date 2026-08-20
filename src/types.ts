export type BlockType = 
  | 'summary' 
  | 'situacion_actual'
  | 'segmento_target'
  | 'credit_line' 
  | 'activation' 
  | 'bad_rates' 
  | 'bad_rates_target'
  | 'rentabilidad'
  | 'piloting' 
  | 'simulator'
  | 'custom_note';

export interface CanvasBlock {
  id: string;
  type: BlockType;
  title: string;
  subtitle: string;
  colSpan: 1 | 2 | 3 | 4;
  order: number;
  visible: boolean;
}

export interface QuickNote {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: string;
  category: 'General' | 'Dudas' | 'Acuerdos' | 'Acción' | 'Feedback';
  color: 'amber' | 'blue' | 'emerald' | 'purple' | 'rose';
  pinned?: boolean;
}

export interface TestOverview {
  productName: string;
  testTitle: string;
  author: string;
  version: string;
  date: string;
  sampleSize: number;
  controlSize: number;
  treatmentSize: number;
  placementPeriod: string;
  behaviorPeriod: string;
  reevalDate: string;
  targetPopulationDesc: string;
  currentMinLine: number;
  proposedMinLine: number;
  incomeThreshold: number;
  methodology?: string;
  monthlyAccounts?: number | string;
  reviews?: string;
  objectives?: string[];
}

export interface CreditLineMetric {
  segment: 'HIT' | 'NO HIT' | 'TOTAL';
  mixPct: number;
  actualProm: number;
  expectedProm: number;
  deltaPct: number;
  minLineAccounts: number;
  minLineMixPct: number;
}

export interface CreditRangeActivation {
  rangeCode: string;
  rangeLabel: string;
  hitActivation: number;
  noHitActivation: number;
  totalActivation: number;
  hitDistPct: number;
  noHitDistPct: number;
  totalDistPct: number;
}

export interface RiskLevelBadRate {
  riskLevel: number;
  riskName: string;
  hitMixPct: number;
  noHitMixPct: number;
  
  // Entry@MoB
  hitEntryActual: number;
  hitEntryExpected: number;
  hitEntryTarget: number;
  hitEntryTargetMax: number;
  
  noHitEntryActual: number;
  noHitEntryExpected: number;
  noHitEntryTarget: number;
  noHitEntryTargetMax: number;

  // 30+3MoB
  hit30MoBActual: number;
  hit30MoBExpected: number;
  hit30MoBTarget: number;
  hit30MoBTargetMax: number;

  noHit30MoBActual: number;
  noHit30MoBExpected: number;
  noHit30MoBTarget: number;
  noHit30MoBTargetMax: number;

  // 90+9MoB
  hit90MoBActual: number;
  hit90MoBExpected: number;
  hit90MoBTarget: number;
  hit90MoBTargetMax: number;

  noHit90MoBActual: number;
  noHit90MoBExpected: number;
  noHit90MoBTarget: number;
  noHit90MoBTargetMax: number;

  // Total (Sin distinción HIT / NO HIT)
  totalEntryActual?: number;
  totalEntryExpected?: number;
  total30MoBActual?: number;
  total30MoBExpected?: number;
  total90MoBActual?: number;
  total90MoBExpected?: number;
}

export interface RiskDistributionByRange {
  rangeLabel: string;
  r0: number;
  r1: number;
  r2: number;
  r3: number;
  r4: number;
  r5: number;
}

export interface PilotingSample {
  riskName: string;
  noHitAccounts: number;
  noHitPct: number;
  hitAccounts: number;
  hitPct: number;
}

export interface ScenarioParams {
  proposedMinLine: number;
  stressFactor: number; // e.g. 1.0 (0%), 1.3 (+30% stress)
  expectedActivationBoost: number; // e.g. +0.7%
  selectedRiskCutoff: number; // 1 to 5 (cut off highest risk if needed)
}
