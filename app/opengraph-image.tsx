import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Earth Simulation Control Panel — Classified'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#0a0b0d',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        {/* Classification banner */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            padding: '12px',
            backgroundColor: 'rgba(204, 0, 0, 0.2)',
            borderBottom: '1px solid rgba(204, 0, 0, 0.4)',
          }}
        >
          <span style={{ color: '#cc0000', fontSize: 14, letterSpacing: '0.3em' }}>
            TOP SECRET // COSMIC // EYES ONLY
          </span>
        </div>

        {/* Stamp */}
        <div
          style={{
            position: 'absolute',
            top: 80,
            right: 80,
            display: 'flex',
            transform: 'rotate(-12deg)',
            border: '3px solid #cc0000',
            color: '#cc0000',
            padding: '8px 24px',
            fontSize: 24,
            fontWeight: 'bold',
            letterSpacing: '0.2em',
            opacity: 0.7,
          }}
        >
          TOP SECRET
        </div>

        {/* Main title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              color: '#33ff33',
              fontSize: 52,
              fontWeight: 'bold',
              textShadow: '0 0 20px rgba(51, 255, 51, 0.5)',
              letterSpacing: '-0.02em',
            }}
          >
            EARTH SIMULATION
          </span>
          <span
            style={{
              color: '#33ff33',
              fontSize: 52,
              fontWeight: 'bold',
              textShadow: '0 0 20px rgba(51, 255, 51, 0.5)',
              letterSpacing: '-0.02em',
            }}
          >
            CONTROL PANEL
          </span>
          <span style={{ color: '#5a6070', fontSize: 18, marginTop: 8 }}>
            Instance TERRA-01 | Uptime: 4.54 × 10⁹ years | Status: RUNNING
          </span>
        </div>

        {/* Bottom classification */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            padding: '12px',
            borderTop: '1px solid #1e2230',
          }}
        >
          <span style={{ color: '#5a6070', fontSize: 12, letterSpacing: '0.2em' }}>
            UNAUTHORIZED ACCESS WILL BE REPORTED TO [REDACTED]
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
