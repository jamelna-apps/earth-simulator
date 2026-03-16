export type ControlType = 'slider' | 'toggle' | 'dropdown' | 'numeric' | 'gauge' | 'radio'

export type Classification = 'UNCLASSIFIED' | 'CONFIDENTIAL' | 'SECRET' | 'TOP SECRET'

export type Severity = 'info' | 'warning' | 'critical' | 'paradox'

export interface ConsequenceMessage {
  threshold: number | string | boolean
  direction?: 'above' | 'below' | 'equal'
  severity: Severity
  message: string
}

export interface ControlVariable {
  id: string
  label: string
  type: ControlType
  value: number | string | boolean
  unit?: string
  min?: number
  max?: number
  step?: number
  options?: string[]
  precision?: number
  classification?: Classification
  description?: string
  redacted?: boolean
  footnote?: string
  consequences: ConsequenceMessage[]
}

export type SectionStatus = 'NOMINAL' | 'SUBOPTIMAL' | 'CONCERNING' | 'CRITICAL' | 'SELF-TERMINATING' | 'ANOMALOUS' | 'CLASSIFIED'

export interface ControlSection {
  id: string
  title: string
  subtitle?: string
  classification: Classification
  sectionNumber: string
  status: SectionStatus
  statusNote?: string
  variables: ControlVariable[]
}

export interface OperatorLogEntry {
  operator: string
  timestamp: string
  message: string
  classification?: Classification
}
