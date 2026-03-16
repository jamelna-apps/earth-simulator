'use client'

import type { ControlVariable } from '@/data/types'
import ControlWrapper from './ControlWrapper'

interface ToggleControlProps {
  variable: ControlVariable
}

export default function ToggleControl({ variable }: ToggleControlProps) {
  return (
    <ControlWrapper variable={variable}>
      {({ currentValue, onChange, locked }) => {
        const isOn = Boolean(currentValue)
        return (
          <button
            onClick={() => onChange(!isOn)}
            disabled={locked}
            className={`flex items-center gap-3 cursor-pointer disabled:cursor-not-allowed`}
          >
            <div className={`w-12 h-6 rounded-none border relative transition-colors ${
              isOn ? 'border-terminal bg-terminal/10' : 'border-red bg-red/10'
            }`}>
              <div className={`absolute top-0.5 w-5 h-5 transition-all ${
                isOn ? 'left-6 bg-terminal' : 'left-0.5 bg-red'
              }`} />
            </div>
            <span className={`text-base font-mono font-bold ${
              isOn ? 'text-terminal text-glow' : 'text-red text-glow-red'
            }`}>
              {isOn ? 'ENABLED' : 'DISABLED'}
            </span>
          </button>
        )
      }}
    </ControlWrapper>
  )
}
