'use client'

import { useState } from 'react'

interface RedactedBlockProps {
  text: string
  revealText?: string
}

export default function RedactedBlock({ text, revealText }: RedactedBlockProps) {
  const [revealed, setRevealed] = useState(false)

  return (
    <span
      className={`${revealed ? 'bg-transparent text-terminal text-glow' : 'redacted'} cursor-pointer transition-all duration-300`}
      onClick={() => setRevealed(!revealed)}
      title={revealed ? 'Click to re-redact' : 'Click to reveal'}
    >
      {revealed ? (revealText || text) : text}
    </span>
  )
}
