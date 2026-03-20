'use client'

import Link from 'next/link'
import ClassificationStamp from '@/components/decorative/ClassificationStamp'

export default function Header() {
  return (
    <header className="border-b border-border bg-bg-panel">
      {/* Classification banner */}
      <div className="bg-classified/20 border-b border-classified/40 py-1 text-center">
        <span className="text-classified text-sm font-mono tracking-[0.3em] font-bold">
          ◈ TOP SECRET // COSMIC // EYES ONLY ◈
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <ClassificationStamp />
            </div>
            <h1 className="font-heading text-2xl md:text-4xl text-terminal text-glow tracking-tight mb-2">
              EARTH SIMULATION<br />CONTROL PANEL
            </h1>
            <p className="text-text-dim text-base font-mono max-w-lg">
              Configuration interface for Earth simulation instance TERRA-01.
              All parameters reflect current live values. Modifications require
              Level 7 clearance.
            </p>
          </div>
          <div className="text-right font-mono text-sm space-y-1 shrink-0">
            <div className="text-text-dim">SYSTEM STATUS</div>
            <div className="text-terminal text-glow">● SIMULATION RUNNING</div>
            <div className="text-text-dim">INSTANCE: <span className="text-text">TERRA-01</span></div>
            <div className="text-text-dim">UPTIME: <span className="text-amber text-glow-amber">4.54 × 10⁹ yr</span></div>
            <div className="text-text-dim">OBSERVERS: <span className="text-text">8.1 × 10⁹</span></div>
            <div className="text-text-dim">ANOMALIES: <span className="text-red">847</span></div>
            <Link
              href="/logs"
              className="mt-3 inline-block text-sm text-terminal border border-terminal/30 px-4 py-2 hover:bg-terminal/10 hover:border-terminal/60 transition-all font-mono tracking-wide text-glow"
            >
              ◈ VIEW OPERATOR LOGS →
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
