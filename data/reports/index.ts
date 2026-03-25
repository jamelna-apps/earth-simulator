import type { DossierReport } from './types'
import { theiaImpact } from './theia-impact'
import { theGreatDying } from './the-great-dying'
import { projectAtlantis } from './project-atlantis'
import { surveyTeam } from './survey-team'
import { wowSignal } from './wow-signal'

export const reports: DossierReport[] = [
  theiaImpact,
  theGreatDying,
  projectAtlantis,
  surveyTeam,
  wowSignal,
]

export const reportsBySlug: Record<string, DossierReport> = Object.fromEntries(
  reports.map(r => [r.slug, r])
)

export const reportSlugs: string[] = reports.map(r => r.slug)
