import { NextRequest } from 'next/server'
import { blockProbes } from '@/analytics/middleware'

export function middleware(req: NextRequest) {
  const blocked = blockProbes(req)
  if (blocked) return blocked
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
