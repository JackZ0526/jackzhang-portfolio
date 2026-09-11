import { ArrowRight, ArrowUp, ArrowLeft } from 'lucide-react'
import type { CSSProperties } from 'react'

// "View Game" / "View project" button: simple arrow
export function ArrowRightIcon({ size = 16, color = '#281A39', style }: { size?: number; color?: string; style?: CSSProperties }) {
  return <ArrowRight size={size} color={color} style={style} />
}

// Title-row arrow: a circled right-pointing arrow (matches Wix)
export function ArrowCircleRightIcon({ size = 32, color = '#281A39' }: { size?: number; color?: string }) {
  // Pure SVG to match Wix's circular outlined arrow icon (no Lucide equivalent)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="12.335 29.5 172.265 141"
      width={size}
      height={size * (141 / 172.265)}
      role="presentation"
      aria-hidden="true"
    >
      <g>
        <circle
          cx="98.4675"
          cy="100"
          r="68.3"
          fill="none"
          stroke={color}
          strokeWidth="6"
        />
        <path
          d="M146.1 97.9l-35-35c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l27.4 27.4c.9.9.3 2.5-1 2.5H15.5c-1.5 0-2.8 1-3.1 2.4-.4 1.9 1.1 3.6 2.9 3.6h117.9c1.3 0 1.9 1.6 1 2.5l-27.4 27.4c-1.2 1.2-1.2 3.1 0 4.2.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9l35-35c1.3-1.1 1.3-3 .1-4.2z"
          fill={color}
        />
      </g>
    </svg>
  )
}

// Back to top arrow
export function ArrowUpIcon({ size = 18, color = '#281A39', style }: { size?: number; color?: string; style?: CSSProperties }) {
  return <ArrowUp size={size} color={color} style={style} />
}

// Prev project (left arrow)
export function ArrowLeftIcon({ size = 20, color = '#281A39', style }: { size?: number; color?: string; style?: CSSProperties }) {
  return <ArrowLeft size={size} color={color} style={style} />
}

// LinkedIn uses the original Wix PNG (lucide-react doesn't include brand logos)
export function LinkedInIcon({ size = 22 }: { size?: number }) {
  return (
    <img
      src="/assets/media/48a2a42b19814efaa824450f23e8a253.png"
      alt="LinkedIn"
      width={size}
      height={size}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    />
  )
}
