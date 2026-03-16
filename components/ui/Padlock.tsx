'use client'

import { useState } from 'react'

interface PadlockProps {
  locked: boolean
  onToggle: () => void
}

export default function Padlock({ locked, onToggle }: PadlockProps) {
  const [animating, setAnimating] = useState(false)

  const handleClick = () => {
    setAnimating(true)
    onToggle()
    setTimeout(() => setAnimating(false), 300)
  }

  return (
    <button
      onClick={handleClick}
      className={`text-lg transition-colors cursor-pointer ${
        animating ? 'unlock-animate' : ''
      } ${locked ? 'text-amber' : 'text-terminal text-glow'}`}
      title={locked ? 'Click to unlock' : 'Click to lock'}
      aria-label={locked ? 'Unlock control' : 'Lock control'}
    >
      {locked ? '🔒' : '🔓'}
    </button>
  )
}
