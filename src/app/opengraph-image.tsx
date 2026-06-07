import { ImageResponse } from 'next/og'

export const alt = 'aitryhard — desktop apps · backend · ai'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#050505',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/182519272?v=5"
            width={80}
            height={80}
            style={{ borderRadius: '50%', border: '1px solid #1a1a2e' }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: '#ededed',
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: '#3b82f6' }}>&gt;</span> aitryhard
            </span>
            <span
              style={{
                fontSize: 22,
                color: '#a1a1aa',
              }}
            >
              desktop apps · backend · ai
            </span>
          </div>
        </div>
        <div
          style={{
            fontSize: 16,
            color: '#52525b',
            marginTop: 24,
          }}
        >
          actively learning, building, practicing
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
