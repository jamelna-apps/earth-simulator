import type { Metadata } from 'next'
import Link from 'next/link'
import { historicalLogs } from '@/data/historical-logs'
import OperatorLog from '@/components/decorative/OperatorLog'

export const metadata: Metadata = {
  title: 'OPERATOR LOGS — TERRA-01 ARCHIVE',
  description: 'Complete operator log archive for Earth simulation instance TERRA-01. Spanning 4.54 billion years.',
}

export default function LogsPage() {
  return (
    <div className="min-h-screen">
      {/* Classification banner */}
      <div className="bg-classified/20 border-b border-classified/40 py-1 text-center">
        <span className="text-classified text-sm font-mono tracking-[0.3em] font-bold">
          ◈ TOP SECRET // COSMIC // EYES ONLY ◈
        </span>
      </div>

      {/* Header */}
      <header className="border-b border-border bg-bg-panel">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link
            href="/"
            className="text-text-dim text-xs font-mono hover:text-terminal transition-colors mb-4 inline-block"
          >
            ← RETURN TO CONTROL PANEL
          </Link>
          <h1 className="font-heading text-2xl md:text-3xl text-terminal text-glow tracking-tight mb-2">
            OPERATOR LOG ARCHIVE
          </h1>
          <p className="text-text-dim text-sm font-mono max-w-2xl">
            Complete operational record for simulation instance TERRA-01.
            Entries span from system initialization (Cycle 0) to present day (Cycle 4.54×10⁹).
            Portions remain classified. Unauthorized access will be reported to [REDACTED].
          </p>

          <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono text-text-dim">
            <span>ENTRIES: {historicalLogs.reduce((sum, era) => sum + era.entries.length, 0)}</span>
            <span>ERAS: {historicalLogs.length}</span>
            <span>CLASSIFICATION: MIXED</span>
            <span className="text-amber text-glow-amber">STATUS: ARCHIVAL</span>
          </div>
        </div>
      </header>

      {/* Era navigation */}
      <nav className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-2 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1">
            {historicalLogs.map((era) => (
              <a
                key={era.id}
                href={`#${era.id}`}
                className="px-2.5 py-1 text-xs font-mono text-text-dim hover:text-terminal whitespace-nowrap border border-transparent hover:border-terminal/20 transition-colors"
              >
                {era.cycle.split('—')[0].trim().replace('Cycle ', '')}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Log entries */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {historicalLogs.map((era, eraIdx) => (
          <section key={era.id} id={era.id} className="mb-12 scroll-mt-20">
            {/* Era header */}
            <div className="border border-border bg-bg-panel p-4 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-terminal text-glow text-xs font-mono">
                  ERA {String(eraIdx).padStart(3, '0')}
                </span>
                <div className="flex-1 border-t border-border" />
                <span className="text-text-dim text-xs font-mono">{era.cycle}</span>
              </div>
              <h2 className="font-heading text-lg text-text tracking-wider">
                {era.name}
              </h2>
              <p className="text-text-dim text-xs font-mono mt-1">
                {era.timeRange}
              </p>
            </div>

            {/* Entries */}
            <OperatorLog entries={era.entries} />

            {/* Era separator */}
            {eraIdx < historicalLogs.length - 1 && (
              <div className="flex items-center gap-3 mt-8 text-text-dim/30 text-xs font-mono">
                <div className="flex-1 border-t border-border/50" />
                ◆ ◆ ◆
                <div className="flex-1 border-t border-border/50" />
              </div>
            )}
          </section>
        ))}

        {/* End of archive */}
        <div className="border border-border bg-bg-panel p-6 text-center mt-8">
          <p className="text-text-dim text-sm font-mono">
            — END OF ARCHIVED RECORDS —
          </p>
          <p className="text-text-dim/60 text-xs font-mono mt-2">
            Entries continue in real-time on the{' '}
            <Link href="/" className="text-terminal hover:text-terminal/80 transition-colors">
              main control panel
            </Link>
            .
          </p>
          <p className="text-text-dim/40 text-xs font-mono mt-4 italic">
            "We have been watching for 4.54 billion years. We will keep watching.
            Not because we were asked to. Because we cannot look away."
            <br />
            — Operator ████-12, personal addendum (unauthorized)
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-bg-panel mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <div className="text-text-dim text-xs tracking-wider font-mono">
            TERRA-01 OPERATOR LOG ARCHIVE — DOCUMENT CLASSIFICATION: TOP SECRET // COSMIC // NOFORN
          </div>
        </div>
      </footer>
    </div>
  )
}
