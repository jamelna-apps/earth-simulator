import Link from 'next/link'
import ClassificationStamp from '@/components/decorative/ClassificationStamp'
import type { DossierReport } from '@/data/reports/types'

export default function DossierHeader({ report }: { report: DossierReport }) {
  return (
    <>
      <div className="bg-classified/20 border-b border-classified/40 py-1 text-center">
        <span className="text-classified text-sm font-mono tracking-[0.3em] font-bold">
          ◈ {report.classification} // COSMIC // EYES ONLY ◈
        </span>
      </div>

      <header className="border-b border-border bg-bg-panel">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Link
            href="/logs"
            className="text-text-dim text-xs font-mono hover:text-terminal transition-colors mb-4 inline-block"
          >
            ← RETURN TO OPERATOR LOGS
          </Link>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-heading text-xl md:text-2xl text-terminal text-glow tracking-tight mb-2">
                {report.title}
              </h1>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-text-dim">
                <span>REF: {report.documentRef}</span>
                <span>{report.cycle}</span>
                <span>{report.era}</span>
              </div>
            </div>
            <ClassificationStamp level={report.classification} />
          </div>

          <div className="mt-4 border border-amber/30 bg-amber/5 px-4 py-3">
            <div className="text-amber text-xs font-mono tracking-wider mb-1">DECLASSIFIED SUMMARY</div>
            <p className="text-sm font-mono text-text leading-relaxed">{report.summary}</p>
          </div>
        </div>
      </header>
    </>
  )
}
