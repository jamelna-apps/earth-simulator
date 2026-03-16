'use client'

import { useEffect, useState } from 'react'

interface SectionNavItem {
  id: string
  sectionNumber: string
  title: string
  status: string
}

interface SectionNavProps {
  sections: SectionNavItem[]
}

const statusDotColor: Record<string, string> = {
  'NOMINAL': 'bg-terminal',
  'SUBOPTIMAL': 'bg-amber',
  'CONCERNING': 'bg-amber',
  'CRITICAL': 'bg-red',
  'SELF-TERMINATING': 'bg-red',
  'ANOMALOUS': 'bg-classified',
  'CLASSIFIED': 'bg-text-dim',
}

export default function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    for (const section of sections) {
      const el = document.getElementById(section.id)
      if (!el) continue

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id)
          }
        },
        { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    }

    return () => observers.forEach(o => o.disconnect())
  }, [sections])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const activeItem = sections.find(s => s.id === activeSection)

  return (
    <nav className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4">
        {/* Current section indicator */}
        <div className="flex items-center justify-between py-1.5 border-b border-border/50 text-xs font-mono">
          <span className="text-text-dim">
            TERRA-01 {'>'} {activeItem?.sectionNumber || '---'} {'>'}{' '}
            <span className="text-text">{activeItem?.title || '---'}</span>
          </span>
          {activeItem && (
            <span className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${statusDotColor[activeItem.status] || 'bg-text-dim'}`} />
              <span className="text-text-dim">{activeItem.status}</span>
            </span>
          )}
        </div>

        {/* Section tabs */}
        <div className="flex items-center gap-0.5 py-1.5 overflow-x-auto scrollbar-none">
          {sections.map((section) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'text-terminal text-glow bg-terminal/5 border border-terminal/20'
                    : 'text-text-dim hover:text-text border border-transparent'
                }`}
                title={section.title}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${statusDotColor[section.status] || 'bg-text-dim'}`} />
                {section.sectionNumber}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
