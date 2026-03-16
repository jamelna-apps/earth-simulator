'use client'

import { useState, useCallback } from 'react'
import type { ControlVariable, ConsequenceMessage } from '@/data/types'
import Padlock from '@/components/ui/Padlock'
import WarningMessage from '@/components/ui/WarningMessage'

interface ControlWrapperProps {
  variable: ControlVariable
  children: (props: {
    currentValue: number | string | boolean
    onChange: (value: number | string | boolean) => void
    locked: boolean
  }) => React.ReactNode
}

function findConsequence(
  consequences: ConsequenceMessage[],
  value: number | string | boolean,
  originalValue: number | string | boolean
): ConsequenceMessage | null {
  if (value === originalValue) return null

  for (const c of consequences) {
    if (c.direction === 'equal' && value === c.threshold) return c
    if (typeof value === 'number' && typeof c.threshold === 'number') {
      if (c.direction === 'above' && value > c.threshold) return c
      if (c.direction === 'below' && value < c.threshold) return c
    }
    if (typeof value === 'boolean' && value === c.threshold) return c
    if (typeof value === 'string' && value === c.threshold) return c
  }
  return null
}

const classificationColors: Record<string, string> = {
  'UNCLASSIFIED': 'text-text-dim border-text-dim',
  'CONFIDENTIAL': 'text-blue-400 border-blue-400',
  'SECRET': 'text-amber border-amber',
  'TOP SECRET': 'text-classified border-classified',
}

export default function ControlWrapper({ variable, children }: ControlWrapperProps) {
  const [locked, setLocked] = useState(true)
  const [currentValue, setCurrentValue] = useState(variable.value)
  const [consequence, setConsequence] = useState<ConsequenceMessage | null>(null)
  const [showDescription, setShowDescription] = useState(false)

  const handleChange = useCallback((newValue: number | string | boolean) => {
    setCurrentValue(newValue)
    const found = findConsequence(variable.consequences, newValue, variable.value)
    setConsequence(found)
  }, [variable.consequences, variable.value])

  const classification = variable.classification || 'UNCLASSIFIED'
  const colorClass = classificationColors[classification] || 'text-text-dim border-text-dim'

  return (
    <div className="border border-border bg-bg-control p-4 mb-3">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs border px-1 py-0.5 uppercase tracking-wider ${colorClass}`}>
              {classification}
            </span>
            <span className="text-sm text-text-dim font-mono">{variable.id}</span>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-base text-text font-mono font-medium">
              {variable.label}
            </label>
            {variable.description && (
              <button
                onClick={() => setShowDescription(!showDescription)}
                className="text-text-dim hover:text-terminal transition-colors text-sm cursor-pointer shrink-0"
                title={showDescription ? 'Hide description' : 'Show description'}
                aria-label={showDescription ? 'Hide description' : 'Show description'}
              >
                {showDescription ? '[−]' : '[?]'}
              </button>
            )}
          </div>
        </div>
        <Padlock locked={locked} onToggle={() => setLocked(!locked)} />
      </div>

      {showDescription && variable.description && (
        <div className="mb-3 px-3 py-2 border-l-2 border-terminal/30 bg-bg/50 text-sm text-text-dim leading-relaxed">
          <span className="text-terminal/60 mr-1">ℹ</span> {variable.description}
        </div>
      )}

      <div className={`transition-opacity ${locked ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
        {children({ currentValue, onChange: handleChange, locked })}
      </div>

      {variable.footnote && (
        <div className="mt-2 text-xs text-text-dim italic">
          † {variable.footnote}
        </div>
      )}

      {consequence && <WarningMessage message={consequence.message} severity={consequence.severity} />}
    </div>
  )
}
