'use client'

import { useEffect, useState } from 'react'

interface Resource {
  label: string
  remainingPercent: number
  depletedYear: string
  drainRate: string
  color: string
  glowClass: string
}

const resources: Resource[] = [
  {
    label: 'CRUDE OIL',
    remainingPercent: 40,
    depletedYear: '~2073',
    drainRate: '84M bbl/day',
    color: 'bg-red',
    glowClass: '',
  },
  {
    label: 'NATURAL GAS',
    remainingPercent: 45,
    depletedYear: '~2075',
    drainRate: '4T m³/year',
    color: 'bg-amber',
    glowClass: '',
  },
  {
    label: 'FRESH WATER',
    remainingPercent: 0.5,
    depletedYear: 'RENEWABLE — STRESSED',
    drainRate: '4.6T m³/year withdrawn',
    color: 'bg-terminal',
    glowClass: '',
  },
  {
    label: 'ARABLE LAND',
    remainingPercent: 77,
    depletedYear: 'DECLINING',
    drainRate: '12M ha/year lost',
    color: 'bg-amber',
    glowClass: '',
  },
  {
    label: 'RARE EARTH MINERALS',
    remainingPercent: 85,
    depletedYear: '~2080+',
    drainRate: '300K tonnes/year',
    color: 'bg-terminal',
    glowClass: '',
  },
  {
    label: 'FISHERIES',
    remainingPercent: 66,
    depletedYear: 'CRITICAL OVERFISHING',
    drainRate: '34% fully exploited',
    color: 'bg-amber',
    glowClass: '',
  },
]

function getBarColor(percent: number): string {
  if (percent <= 10) return 'bg-red'
  if (percent <= 40) return 'bg-amber'
  return 'bg-terminal'
}

export default function ResourceDepletionGauges() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="border border-border bg-bg-panel p-4 md:p-6">
      <h3 className="font-heading text-sm text-text-dim tracking-wider mb-4">
        RESOURCE RESERVES — DEPLETION TRACKER
      </h3>

      <div className="space-y-4">
        {resources.map((resource) => {
          const barColor = getBarColor(resource.remainingPercent)
          return (
            <div key={resource.label}>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs font-mono text-text tracking-wider">
                  {resource.label}
                </span>
                <span className={`text-sm font-mono font-bold ${
                  resource.remainingPercent <= 10 ? 'text-red text-glow-red' :
                  resource.remainingPercent <= 40 ? 'text-amber text-glow-amber' :
                  'text-terminal text-glow'
                }`}>
                  {resource.remainingPercent}%
                </span>
              </div>

              {/* Bar */}
              <div className="relative h-4 bg-bg border border-border">
                {/* Tick marks */}
                <div className="absolute inset-0 flex">
                  {[25, 50, 75].map((tick) => (
                    <div
                      key={tick}
                      className="absolute top-0 bottom-0 w-px bg-border"
                      style={{ left: `${tick}%` }}
                    />
                  ))}
                </div>
                {/* Fill */}
                <div
                  className={`absolute top-0 left-0 h-full ${barColor} opacity-80 gauge-fill`}
                  style={{ width: visible ? `${resource.remainingPercent}%` : '0%' }}
                />
              </div>

              <div className="flex items-baseline justify-between mt-1">
                <span className="text-xs font-mono text-text-dim">
                  DEPLETION: {resource.depletedYear}
                </span>
                <span className="text-xs font-mono text-text-dim">
                  {resource.drainRate}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
