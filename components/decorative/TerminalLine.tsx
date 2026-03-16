'use client'

import { useEffect, useState } from 'react'

interface TerminalLineProps {
  text: string
  delay?: number
  prompt?: string
}

export default function TerminalLine({ text, delay = 0, prompt = '>' }: TerminalLineProps) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [started, text])

  if (!started) return <div className="h-5" />

  return (
    <div className="text-terminal text-glow text-sm font-mono">
      <span className="text-text-dim">{prompt} </span>
      <span>{displayed}</span>
      {displayed.length < text.length && <span className="animate-pulse">█</span>}
    </div>
  )
}
