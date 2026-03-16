import { NextRequest } from 'next/server'
import { handleSecurityEvent } from '@/analytics/security-events-route'

export async function POST(req: NextRequest) {
  return handleSecurityEvent(req)
}
