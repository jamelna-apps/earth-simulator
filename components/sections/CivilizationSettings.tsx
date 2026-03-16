'use client'
import { civilizationSettings } from '@/data/civilization-settings'
import SectionRenderer from './SectionRenderer'

export default function CivilizationSettings() {
  return <SectionRenderer section={civilizationSettings} />
}
