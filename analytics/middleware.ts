import { NextRequest, NextResponse } from 'next/server'

const PROBE_PATHS = /^\/(wp-admin|wp-login|wp-content|wp-includes|xmlrpc\.php|\.env|\.git|\.svn|\.htaccess|phpmyadmin|pma|adminer|cgi-bin|shell|backup|config\.php|administrator|admin\.php|setup\.php|install\.php|vendor\/phpunit|eval-stdin\.php|debug|\.aws|\.ssh|\.DS_Store|\.vscode|\.idea|node_modules|composer\.(json|lock)|package\.json|Dockerfile)/i

const ATTACK_PATTERNS = /(\.\.\/)|(<%)|(<script)|(%00)|(\$\{)/i

export function blockProbes(req: NextRequest): NextResponse | null {
  const path = req.nextUrl.pathname

  if (PROBE_PATHS.test(path) || ATTACK_PATTERNS.test(path)) {
    return new NextResponse(null, { status: 404 })
  }

  return null
}
