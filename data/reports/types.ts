import type { Classification } from '../types'

export interface EvidenceImage {
  query: string
  alt: string
  caption: string
}

export interface DossierSection {
  type: 'narrative' | 'evidence' | 'redacted' | 'testimony' | 'findings' | 'addendum'
  heading?: string
  content: string
  classification?: Classification
  image?: EvidenceImage
  operator?: string
  timestamp?: string
}

export interface DossierReport {
  slug: string
  title: string
  classification: Classification
  documentRef: string
  cycle: string
  era: string
  eraId: string
  summary: string
  sections: DossierSection[]
}
