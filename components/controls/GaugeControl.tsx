'use client'

import type { ControlVariable } from '@/data/types'
import ControlWrapper from './ControlWrapper'

interface GaugeControlProps {
  variable: ControlVariable
}

export default function GaugeControl({ variable }: GaugeControlProps) {
  return (
    <ControlWrapper variable={variable}>
      {({ currentValue }) => {
        const numValue = typeof currentValue === 'number' ? currentValue : 0
        const min = variable.min ?? 0
        const max = variable.max ?? 1
        const pct = ((numValue - min) / (max - min)) * 100

        let barColor = 'bg-terminal'
        if (pct < 25) barColor = 'bg-red'
        else if (pct < 50) barColor = 'bg-amber'

        return (
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="flex-1 h-4 bg-bg border border-border relative overflow-hidden">
                <div
                  className={`h-full gauge-fill ${barColor}`}
                  style={{ width: `${pct}%` }}
                />
                {/* Tick marks */}
                {[25, 50, 75].map((tick) => (
                  <div
                    key={tick}
                    className="absolute top-0 h-full w-px bg-border"
                    style={{ left: `${tick}%` }}
                  />
                ))}
              </div>
              <span className={`text-base font-mono font-bold min-w-[60px] text-right ${
                pct < 25 ? 'text-red text-glow-red' : pct < 50 ? 'text-amber text-glow-amber' : 'text-terminal text-glow'
              }`}>
                {(numValue).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-xs text-text-dim">
              <span>CRITICAL</span>
              <span>LOW</span>
              <span>NOMINAL</span>
              <span>OPTIMAL</span>
            </div>
          </div>
        )
      }}
    </ControlWrapper>
  )
}
