import { NextRequest } from 'next/server'
import { handleCspReport } from '@/analytics/csp-route'

export async function POST(req: NextRequest) {
  return handleCspReport(req)
}
