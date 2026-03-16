'use client'

import { useEffect, useState } from 'react'
import type { Severity } from '@/data/types'

interface WarningMessageProps {
  message: string
  severity: Severity
}

const severityStyles: Record<Severity, string> = {
  info: 'text-terminal text-glow',
  warning: 'text-amber text-glow-amber',
  critical: 'text-red text-glow-red',
  paradox: 'text-classified text-glow-red',
}

const severityPrefixes: Record<Severity, string> = {
  info: '> ',
  warning: '⚠ WARNING: ',
  critical: '⚠ CRITICAL: ',
  paradox: '◈ PARADOX: ',
}

export default function WarningMessage({ message, severity }: WarningMessageProps) {
  const [displayed, setDisplayed] = useState('')
  const fullText = severityPrefixes[severity] + message

  useEffect(() => {
    setDisplayed('')
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(fullText.slice(0, i))
      if (i >= fullText.length) clearInterval(interval)
    }, 20)
    return () => clearInterval(interval)
  }, [fullText])

  return (
    <div className={`mt-2 text-sm font-mono ${severityStyles[severity]}`}>
      <span>{displayed}</span>
      {displayed.length < fullText.length && (
        <span className="animate-pulse">█</span>
      )}
    </div>
  )
}
