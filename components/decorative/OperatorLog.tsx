import Link from 'next/link'
import type { OperatorLogEntry } from '@/data/types'

interface OperatorLogProps {
  entries: OperatorLogEntry[]
}

export default function OperatorLog({ entries }: OperatorLogProps) {
  return (
    <div className="my-6 mx-2">
      {entries.map((entry, i) => (
        <div key={i} className="flex gap-3 py-2 border-l-2 border-text-dim/20 pl-3 mb-2">
          <div className="shrink-0 text-xs font-mono text-text-dim whitespace-nowrap">
            <div>{entry.timestamp}</div>
            <div className="text-amber/60">{entry.operator}</div>
          </div>
          <div className="text-sm font-mono text-text-dim leading-relaxed">
            {entry.classification === 'TOP SECRET' ? (
              <span className="text-classified/60">[{entry.classification}] </span>
            ) : entry.classification ? (
              <span className="text-text-dim/40">[{entry.classification}] </span>
            ) : null}
            {entry.message}
            {entry.reportSlug && (
              <Link
                href={`/logs/reports/${entry.reportSlug}`}
                className="inline-block ml-2 text-xs text-terminal border border-terminal/30 px-1.5 py-0.5 hover:bg-terminal/10 transition-colors whitespace-nowrap"
              >
                [DOSSIER AVAILABLE]
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
