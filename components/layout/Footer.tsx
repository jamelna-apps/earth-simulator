'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [uptime, setUptime] = useState('4,540,000,000')

  useEffect(() => {
    const base = 4540000000
    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000
      // 1 real second = ~144 simulated years (just for visual effect)
      const current = base + Math.floor(elapsed * 144)
      setUptime(current.toLocaleString())
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="border-t border-border bg-bg-panel mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-mono">
          <div>
            <div className="text-text-dim mb-2">SIMULATION UPTIME</div>
            <div className="text-terminal text-glow">{uptime} years</div>
          </div>
          <div>
            <div className="text-text-dim mb-2">BUILD INFO</div>
            <div className="text-text">v2026.03.13 (patch 7.2×10⁹)</div>
            <div className="text-text-dim mt-1">Last reset: 65M years ago (asteroid-patch)</div>
          </div>
          <div>
            <div className="text-text-dim mb-2">OPERATOR NOTES</div>
            <div className="text-text-dim italic">
              &quot;Subjects developing simulation hypothesis. Monitor closely.
              Do NOT adjust consciousness parameter without committee approval.&quot;
            </div>
            <Link
              href="/logs"
              className="mt-3 inline-block text-sm text-terminal border border-terminal/30 px-3 py-1.5 hover:bg-terminal/10 hover:border-terminal/60 transition-all font-mono tracking-wide text-glow"
            >
              ◈ FULL OPERATOR LOG ARCHIVE →
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center">
          <div className="text-text-dim text-xs tracking-wider">
            EARTH SIMULATION CONTROL PANEL — UNAUTHORIZED ACCESS WILL BE REPORTED TO [REDACTED]
          </div>
          <div className="text-text-dim text-xs mt-1">
            Document classification: TOP SECRET // COSMIC // NOFORN
          </div>
        </div>
      </div>
    </footer>
  )
}
