import type { DossierSection as SectionType } from '@/data/reports/types'
import type { PexelsPhoto } from '@/lib/pexels'
import RedactedBlock from '@/components/decorative/RedactedBlock'
import EvidencePhoto from './EvidencePhoto'

interface DossierSectionProps {
  section: SectionType
  photo?: PexelsPhoto | null
  figureNumber: number
}

export default function DossierSectionComponent({ section, photo, figureNumber }: DossierSectionProps) {
  const classificationBadge = section.classification ? (
    <span className={`text-xs font-mono ${section.classification === 'TOP SECRET' ? 'text-classified/60' : 'text-text-dim/40'}`}>
      [{section.classification}]
    </span>
  ) : null

  switch (section.type) {
    case 'narrative':
      return (
        <div className="my-6 border-l-2 border-border pl-4">
          {section.heading && (
            <h2 className="font-heading text-sm text-text-dim tracking-wider mb-2">
              {section.heading} {classificationBadge}
            </h2>
          )}
          <p className="text-sm font-mono text-text leading-relaxed whitespace-pre-line">{section.content}</p>
        </div>
      )

    case 'evidence':
      return (
        <div className="my-6">
          {section.heading && (
            <h2 className="font-heading text-sm text-text-dim tracking-wider mb-2">{section.heading}</h2>
          )}
          {photo && section.image && (
            <EvidencePhoto
              photo={photo}
              alt={section.image.alt}
              caption={section.image.caption}
              figureNumber={figureNumber}
            />
          )}
          {section.content && (
            <p className="text-sm font-mono text-text-dim leading-relaxed mt-2">{section.content}</p>
          )}
        </div>
      )

    case 'redacted':
      return (
        <div className="my-6 border border-classified/30 bg-classified/5 p-4">
          <div className="text-classified text-xs font-mono tracking-wider mb-2">
            ████ CLASSIFIED ████ {classificationBadge}
          </div>
          {section.heading && (
            <h2 className="font-heading text-sm text-text-dim tracking-wider mb-2">{section.heading}</h2>
          )}
          <p className="text-sm font-mono text-text leading-relaxed">
            <RedactedBlock text={section.content} />
          </p>
        </div>
      )

    case 'testimony':
      return (
        <div className="my-6 border-l-2 border-amber/40 pl-4 bg-bg-panel p-4">
          <div className="text-xs font-mono text-amber/60 mb-1">
            {section.operator && <span>{section.operator}</span>}
            {section.timestamp && <span> — {section.timestamp}</span>}
            {' '}{classificationBadge}
          </div>
          {section.heading && (
            <h2 className="font-heading text-sm text-text-dim tracking-wider mb-2">{section.heading}</h2>
          )}
          <blockquote className="text-sm font-mono text-text leading-relaxed italic">
            &ldquo;{section.content}&rdquo;
          </blockquote>
        </div>
      )

    case 'findings':
      return (
        <div className="my-6 border border-border bg-bg-panel p-4">
          <h2 className="font-heading text-sm text-terminal tracking-wider mb-3">
            {section.heading || 'FINDINGS'} {classificationBadge}
          </h2>
          <div className="text-sm font-mono text-text leading-relaxed whitespace-pre-line">{section.content}</div>
        </div>
      )

    case 'addendum':
      return (
        <div className="my-6 border-t border-border pt-4 mt-8">
          <div className="text-xs font-mono text-text-dim/40 tracking-wider mb-2">ADDENDUM — PERSONAL NOTE (UNAUTHORIZED)</div>
          <p className="text-sm font-mono text-text-dim leading-relaxed italic">{section.content}</p>
        </div>
      )

    default:
      return null
  }
}
