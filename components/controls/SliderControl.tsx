'use client'

import type { ControlVariable } from '@/data/types'
import ControlWrapper from './ControlWrapper'

interface SliderControlProps {
  variable: ControlVariable
}

export default function SliderControl({ variable }: SliderControlProps) {
  return (
    <ControlWrapper variable={variable}>
      {({ currentValue, onChange, locked }) => {
        const numValue = typeof currentValue === 'number' ? currentValue : 0
        const min = variable.min ?? 0
        const max = variable.max ?? 100
        const step = variable.step ?? 1
        const pct = ((numValue - min) / (max - min)) * 100

        return (
          <div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={numValue}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                disabled={locked}
                className="flex-1 h-1.5 cursor-pointer disabled:cursor-not-allowed"
              />
              <span className="text-terminal text-glow text-base font-mono min-w-[80px] text-right">
                {numValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                {variable.unit && <span className="text-text-dim ml-1">{variable.unit}</span>}
              </span>
            </div>
            <div className="flex justify-between text-xs text-text-dim mt-1">
              <span>{min}{variable.unit}</span>
              <div className="flex-1 mx-2 h-px bg-border mt-1.5 relative">
                <div
                  className="absolute top-0 left-0 h-full bg-terminal/30"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span>{max}{variable.unit}</span>
            </div>
          </div>
        )
      }}
    </ControlWrapper>
  )
}
