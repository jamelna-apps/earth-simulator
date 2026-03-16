'use client'

import { useEffect, useState } from 'react'

interface Ticker {
  label: string
  baseValue: number
  ratePerSecond: number
  unit: string
  format: (v: number) => string
  color: string
  glowClass: string
  direction: 'up' | 'down'
}

const tickers: Ticker[] = [
  {
    label: 'WORLD POPULATION',
    baseValue: 8_100_000_000,
    ratePerSecond: 2.5,
    unit: '',
    format: (v) => v.toLocaleString('en-US', { maximumFractionDigits: 0 }),
    color: 'text-terminal',
    glowClass: 'text-glow',
    direction: 'up',
  },
  {
    label: 'ATMOSPHERIC CO₂',
    baseValue: 425.3,
    ratePerSecond: 0.0000000158,
    unit: 'ppm',
    format: (v) => v.toFixed(4),
    color: 'text-amber',
    glowClass: 'text-glow-amber',
    direction: 'up',
  },
  {
    label: 'KNOWN SPECIES',
    baseValue: 8_700_000,
    ratePerSecond: -0.000076,
    unit: '',
    format: (v) => v.toLocaleString('en-US', { maximumFractionDigits: 0 }),
    color: 'text-amber',
    glowClass: 'text-glow-amber',
    direction: 'down',
  },
  {
    label: 'POLAR ICE MASS',
    baseValue: 26_500_000,
    ratePerSecond: -0.0105,
    unit: 'Gt',
    format: (v) => v.toLocaleString('en-US', { maximumFractionDigits: 0 }),
    color: 'text-amber',
    glowClass: 'text-glow-amber',
    direction: 'down',
  },
  {
    label: 'FOREST COVERAGE',
    baseValue: 4_060_000_000,
    ratePerSecond: -0.317,
    unit: 'ha',
    format: (v) => v.toLocaleString('en-US', { maximumFractionDigits: 0 }),
    color: 'text-terminal',
    glowClass: 'text-glow',
    direction: 'down',
  },
]

export default function LiveTickers() {
  const [values, setValues] = useState(tickers.map((t) => t.baseValue))

  useEffect(() => {
    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000
      setValues(tickers.map((t) => t.baseValue + t.ratePerSecond * elapsed))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border border-border bg-bg-panel p-4 md:p-6">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="font-heading text-sm text-text-dim tracking-wider">
          LIVE TELEMETRY FEED
        </h3>
        <span className="inline-block w-2 h-2 bg-terminal rounded-full radar-blink" />
      </div>

      <div className="space-y-3">
        {tickers.map((ticker, i) => (
          <div key={ticker.label} className="flex items-baseline justify-between gap-2">
            <div className="flex items-center gap-2 shrink-0">
              <span className={`text-xs ${ticker.direction === 'up' ? 'text-terminal' : 'text-red'}`}>
                {ticker.direction === 'up' ? '▲' : '▼'}
              </span>
              <span className="text-text-dim text-xs tracking-wider uppercase">
                {ticker.label}
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={`text-base md:text-lg font-bold font-mono tabular-nums ${ticker.color} ${ticker.glowClass}`}>
                {ticker.format(values[i])}
              </span>
              {ticker.unit && (
                <span className="text-text-dim text-xs">{ticker.unit}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
