interface SectionDividerProps {
  sectionNumber: string
  classification: string
}

const classificationColors: Record<string, string> = {
  'UNCLASSIFIED': 'text-text-dim border-text-dim',
  'CONFIDENTIAL': 'text-blue-400 border-blue-400',
  'SECRET': 'text-amber border-amber',
  'TOP SECRET': 'text-classified border-classified',
}

export default function SectionDivider({ sectionNumber, classification }: SectionDividerProps) {
  const colorClass = classificationColors[classification] || 'text-text-dim border-text-dim'

  return (
    <div className="flex items-center gap-3 py-2 my-6 select-none" aria-hidden="true">
      <div className="h-px flex-1 bg-border" />
      <span className="text-text-dim text-xs font-mono tracking-wider">{sectionNumber}</span>
      <span className={`text-xs font-mono tracking-wider border px-2 py-0.5 ${colorClass}`}>
        {classification}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
