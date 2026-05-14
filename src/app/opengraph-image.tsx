import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#040807',
          backgroundImage:
            'linear-gradient(rgba(0, 255, 170, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 170, 0.07) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          color: '#c5f3d8',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#00e68a',
            textShadow: '0 0 40px rgba(0, 255, 170, 0.45)',
            marginBottom: 28,
          }}
        >
          CITADEL_DB
        </div>
        <div
          style={{
            fontSize: 30,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            opacity: 0.92,
          }}
        >
          Rick & Morty — Character index
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 20,
            letterSpacing: '0.35em',
            color: '#5c9072',
            textTransform: 'uppercase',
          }}
        >
          Next.js · TypeScript · App Router
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
