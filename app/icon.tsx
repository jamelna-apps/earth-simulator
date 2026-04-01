import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: '#0a0b0d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Earth circle */}
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            border: '2px solid #33ff33',
            position: 'absolute',
            display: 'flex',
          }}
        />
        {/* Crosshair horizontal */}
        <div
          style={{
            width: 22,
            height: 1,
            background: '#33ff33',
            opacity: 0.5,
            position: 'absolute',
            display: 'flex',
          }}
        />
        {/* Crosshair vertical */}
        <div
          style={{
            width: 1,
            height: 22,
            background: '#33ff33',
            opacity: 0.5,
            position: 'absolute',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
