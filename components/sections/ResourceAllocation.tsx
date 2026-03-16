'use client'
import { resourceAllocation } from '@/data/resource-allocation'
import SectionRenderer from './SectionRenderer'

export default function ResourceAllocation() {
  return <SectionRenderer section={resourceAllocation} />
}
