import type { ReactElement } from 'react'

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


