'use client'

import type { ControlVariable } from '@/data/types'
import ControlWrapper from './ControlWrapper'

interface NumericControlProps {
  variable: ControlVariable
}

function formatValue(value: number, precision?: number): string {
  if (Math.abs(value) >= 1e9 || (Math.abs(value) < 0.001 && value !== 0)) {
    return value.toExponential(precision ?? 3)
  }
  return value.toLocaleString()
}

export default function NumericControl({ variable }: NumericControlProps) {
  return (
    <ControlWrapper variable={variable}>
      {({ currentValue, onChange, locked }) => {
        const numValue = typeof currentValue === 'number' ? currentValue : 0
        return (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={formatValue(numValue, variable.precision)}
              onChange={(e) => {
                const parsed = parseFloat(e.target.value.replace(/,/g, ''))
                if (!isNaN(parsed)) onChange(parsed)
              }}
              disabled={locked}
              className="flex-1 bg-bg border border-border text-terminal text-glow text-base font-mono p-2 disabled:cursor-not-allowed disabled:text-text-dim"
            />
            {variable.unit && (
              <span className="text-text-dim text-sm font-mono">{variable.unit}</span>
            )}
          </div>
        )
      }}
    </ControlWrapper>
  )
}
