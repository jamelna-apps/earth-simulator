'use client'

import type { ControlVariable } from '@/data/types'
import ControlWrapper from './ControlWrapper'

interface DropdownControlProps {
  variable: ControlVariable
}

export default function DropdownControl({ variable }: DropdownControlProps) {
  return (
    <ControlWrapper variable={variable}>
      {({ currentValue, onChange, locked }) => (
        <select
          value={String(currentValue)}
          onChange={(e) => onChange(e.target.value)}
          disabled={locked}
          className="w-full bg-bg border border-border text-terminal text-base font-mono p-2 cursor-pointer disabled:cursor-not-allowed disabled:text-text-dim appearance-none"
          style={{ backgroundImage: 'none' }}
        >
          {variable.options?.map((opt) => (
            <option key={opt} value={opt} className="bg-bg text-terminal">
              {opt}
            </option>
          ))}
        </select>
      )}
    </ControlWrapper>
  )
}
