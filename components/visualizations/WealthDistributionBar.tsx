'use client'

import { useEffect, useState } from 'react'

const segments = [
  {
    label: 'TOP 1%',
    percent: 45.6,
    population: '80M',
    color: 'bg-classified',
    textColor: 'text-white',
  },
  {
    label: 'NEXT 9%',
    percent: 35.0,
    population: '720M',
    color: 'bg-amber',
    textColor: 'text-bg',
  },
  {
    label: 'BOTTOM 90%',
    percent: 19.4,
    population: '7.3B',
    color: 'bg-terminal/60',
    textColor: 'text-bg',
  },
]

export default function WealthDistributionBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="border border-border bg-bg-panel p-4 md:p-6">
      <h3 className="font-heading text-sm text-text-dim tracking-wider mb-2">
        GLOBAL WEALTH DISTRIBUTION — GINI COEFFICIENT: 0.71
      </h3>
      <p className="text-xs font-mono text-text-dim mb-4">
        Percentage of total global wealth owned by population segment
      </p>

      {/* Labels above the bar */}
      <div className="flex mb-1" aria-hidden="true">
        {segments.map((seg) => (
          <div
            key={seg.label}
            className="transition-all duration-1000"
            style={{ width: visible ? `${seg.percent}%` : '33.3%' }}
          >
            <div className="text-xs font-mono text-text-dim truncate pr-1">
              {seg.label}
            </div>
          </div>
        ))}
      </div>

      {/* The bar */}
      <div className="flex h-12 md:h-14 border border-border overflow-hidden">
        {segments.map((seg) => (
          <div
            key={seg.label}
            className={`${seg.color} flex items-center justify-center transition-all duration-1000 relative`}
            style={{ width: visible ? `${seg.percent}%` : '33.3%' }}
            aria-label={`${seg.label}: ${seg.percent}% of wealth, ${seg.population} people`}
          >
            <span className={`text-sm md:text-base font-mono font-bold ${seg.textColor} drop-shadow-md`}>
              {seg.percent}%
            </span>
          </div>
        ))}
      </div>

      {/* Population labels below */}
      <div className="flex mt-1" aria-hidden="true">
        {segments.map((seg) => (
          <div
            key={seg.label}
            className="transition-all duration-1000"
            style={{ width: visible ? `${seg.percent}%` : '33.3%' }}
          >
            <div className="text-xs font-mono text-text-dim truncate pr-1">
              {seg.population} people
            </div>
          </div>
        ))}
      </div>

      {/* Equal distribution comparison */}
      <div className="mt-4 pt-3 border-t border-border/50">
        <div className="text-xs font-mono text-text-dim mb-1">
          IF EQUALLY DISTRIBUTED:
        </div>
        <div className="flex h-6 border border-border/50 overflow-hidden">
          <div className="bg-terminal/30 flex-1 flex items-center justify-center">
            <span className="text-xs font-mono text-terminal/60">
              33.3% each
            </span>
          </div>
        </div>
      </div>

      {/* Stark statement */}
      <div className="mt-4 text-center">
        <p className="text-sm font-mono text-red text-glow-red uppercase tracking-wider">
          1% of the population controls nearly half of all wealth
        </p>
        <p className="text-xs font-mono text-text-dim mt-1">
          Bottom 50% owns approximately 2% of global wealth
        </p>
      </div>
    </div>
  )
}
