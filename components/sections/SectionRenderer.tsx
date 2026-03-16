'use client'

import { useState } from 'react'
import type { ControlSection, ControlVariable, SectionStatus } from '@/data/types'
import { SliderControl, ToggleControl, DropdownControl, NumericControl, GaugeControl, RadioControl } from '@/components/controls'
import SectionDivider from '@/components/layout/SectionDivider'
import { useScrollReveal } from '@/hooks/useScrollReveal'

function renderControl(variable: ControlVariable) {
  switch (variable.type) {
    case 'slider':
      return <SliderControl key={variable.id} variable={variable} />
    case 'toggle':
      return <ToggleControl key={variable.id} variable={variable} />
    case 'dropdown':
      return <DropdownControl key={variable.id} variable={variable} />
    case 'numeric':
      return <NumericControl key={variable.id} variable={variable} />
    case 'gauge':
      return <GaugeControl key={variable.id} variable={variable} />
    case 'radio':
      return <RadioControl key={variable.id} variable={variable} />
    default:
      return null
  }
}

const statusStyles: Record<SectionStatus, { color: string; glow: string }> = {
  'NOMINAL': { color: 'text-terminal', glow: 'text-glow' },
  'SUBOPTIMAL': { color: 'text-amber', glow: 'text-glow-amber' },
  'CONCERNING': { color: 'text-amber', glow: 'text-glow-amber' },
  'CRITICAL': { color: 'text-red', glow: 'text-glow-red' },
  'SELF-TERMINATING': { color: 'text-red', glow: 'text-glow-red' },
  'ANOMALOUS': { color: 'text-classified', glow: 'text-glow-red' },
  'CLASSIFIED': { color: 'text-text-dim', glow: '' },
}

interface SectionRendererProps {
  section: ControlSection
  defaultExpanded?: boolean
}

export default function SectionRenderer({ section, defaultExpanded = false }: SectionRendererProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const { ref, isVisible } = useScrollReveal()
  const statusStyle = statusStyles[section.status] || statusStyles['NOMINAL']

  return (
    <div ref={ref} id={section.id}>
      <SectionDivider sectionNumber={section.sectionNumber} classification={section.classification} />
      <section
        className={`bg-bg-panel border border-border transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {/* Clickable header — always visible */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full p-4 md:p-6 cursor-pointer text-left flex items-start justify-between gap-4 group"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="font-heading text-lg md:text-xl text-terminal text-glow tracking-tight">
                {section.title}
              </h2>
              <span className={`text-xs font-mono font-bold tracking-wider ${statusStyle.color} ${statusStyle.glow}`}>
                [{section.status}]
              </span>
            </div>
            {section.subtitle && (
              <p className="text-text-dim text-sm font-mono mt-1">{section.subtitle}</p>
            )}
            {!expanded && section.statusNote && (
              <p className={`text-sm font-mono mt-2 ${statusStyle.color} opacity-60`}>
                {section.statusNote}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0 pt-1">
            <span className="text-text-dim text-xs font-mono">
              {section.variables.length} params
            </span>
            <span className="text-text-dim text-sm group-hover:text-terminal transition-colors">
              {expanded ? '▼' : '▶'}
            </span>
          </div>
        </button>

        {/* Expandable content */}
        {expanded && (
          <div className="px-4 pb-4 md:px-6 md:pb-6 border-t border-border/50">
            {section.statusNote && (
              <div className={`mt-4 mb-4 px-3 py-2 border-l-2 text-sm font-mono ${statusStyle.color} opacity-80`}
                   style={{ borderColor: 'currentColor' }}>
                STATUS: {section.statusNote}
              </div>
            )}
            <div className="space-y-0">
              {section.variables.map((variable) => renderControl(variable))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
