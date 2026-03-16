'use client'

import type { ControlVariable } from '@/data/types'
import ControlWrapper from './ControlWrapper'

interface RadioControlProps {
  variable: ControlVariable
}

export default function RadioControl({ variable }: RadioControlProps) {
  return (
    <ControlWrapper variable={variable}>
      {({ currentValue, onChange, locked }) => (
        <div className="flex flex-wrap gap-2">
          {variable.options?.map((opt) => {
            const selected = currentValue === opt
            return (
              <button
                key={opt}
                onClick={() => onChange(opt)}
                disabled={locked}
                className={`px-3 py-1.5 text-sm font-mono border transition-colors cursor-pointer disabled:cursor-not-allowed ${
                  selected
                    ? 'border-terminal bg-terminal/10 text-terminal text-glow'
                    : 'border-border bg-bg text-text-dim hover:border-text-dim'
                }`}
              >
                {selected && '▸ '}{variable.redacted && opt === '[REDACTED]' ? (
                  <span className="redacted">[REDACTED]</span>
                ) : opt}
              </button>
            )
          })}
        </div>
      )}
    </ControlWrapper>
  )
}
