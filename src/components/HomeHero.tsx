import type { ReactElement } from 'react'
import './HomeHero.css'

/**
 * Shared description renderer — bolds substrings in `boldPhrases` (case-insensitive,
 * preserves original casing of the matched chunk).
 */
export function renderDescription(
  description: string,
  boldPhrases: string[] = []
): ReactElement {
  if (boldPhrases.length === 0) return <>{description}</>
  const remaining: { text: string; bold: boolean }[] = [{ text: description, bold: false }]
  const out: ReactElement[] = []
  let keyCounter = 0
  for (const phrase of boldPhrases) {
    const lower = phrase.toLowerCase()
    const next: { text: string; bold: boolean }[] = []
    for (const chunk of remaining) {
      if (chunk.bold) {
        next.push(chunk)
        continue
      }
      const lc = chunk.text.toLowerCase()
      let i = 0
      while (i < chunk.text.length) {
        const idx = lc.indexOf(lower, i)
        if (idx === -1) {
          next.push({ text: chunk.text.slice(i), bold: false })
          break
        }
        if (idx > i) next.push({ text: chunk.text.slice(i, idx), bold: false })
        next.push({ text: chunk.text.slice(idx, idx + phrase.length), bold: true })
        i = idx + phrase.length
      }
    }
    remaining.length = 0
    remaining.push(...next)
  }
  for (const chunk of remaining) {
    if (chunk.bold) out.push(<strong key={keyCounter++}>{chunk.text}</strong>)
    else out.push(<span key={keyCounter++}>{chunk.text}</span>)
  }
  return <>{out}</>
}

/**
 * Shared hero block — used at the top of the Home page and the Portfolio page.
 * Matches the original Wix font_0 (JACK ZHANG 135px italic) / font_6 (20px) /
 * font_3 (MY PORTFOLIO 50px italic) stack.
 */
export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__inner">
        <p className="home-hero__role">LEVEL DESIGNER / GAME DESIGNER</p>
        <h1 className="home-hero__title">JACK ZHANG</h1>
        <p className="home-hero__intro">
          Passionate Level Designer, Game Designer, and Developer based in
          Vancouver. Proficient in both Unity and Unreal Engine
        </p>
      </div>
      <h2 className="home-section-title">MY PORTFOLIO</h2>
      <hr className="home-section-title-divider" />
    </section>
  )
}
