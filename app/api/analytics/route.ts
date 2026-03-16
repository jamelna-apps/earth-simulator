import { NextRequest } from 'next/server'
import { handleAnalytics } from '@/analytics/api-route'

export async function POST(req: NextRequest) {
  return handleAnalytics(req)
}
