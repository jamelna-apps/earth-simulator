'use client'
import { geopoliticalConfig } from '@/data/geopolitical-config'
import SectionRenderer from './SectionRenderer'

export default function GeopoliticalConfig() {
  return <SectionRenderer section={geopoliticalConfig} />
}
