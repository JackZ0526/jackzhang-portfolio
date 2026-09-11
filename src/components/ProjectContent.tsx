import type { ReactNode } from 'react'
import './ProjectLayout.css'

export function ProjectContent({ children }: { children: ReactNode }) {
  return <div className="project-content">{children}</div>
}

export function ProjectSection({ id, title, children, headingTag = 'h2' }: { id?: string; title?: string; children: ReactNode; headingTag?: 'h2' | 'h6' }) {
  return (
    <section id={id} className="project-section">
      <div className="project-section__heading">
        {title && headingTag === 'h2' && <h2 className="project-section__h2">{title}</h2>}
        {title && headingTag === 'h6' && <h6 className="project-section__h6">{title}</h6>}
      </div>
      <div className="project-section__body">{children}</div>
    </section>
  )
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="project-section__h3">{children}</h3>
}

/** Body paragraph. The live site mixes `line-height: normal` (~19px) and 22.4px
 * per rich-text block, so paragraphs that measure `normal` opt in explicitly. */
export function P({ children, lh }: { children: ReactNode; lh?: 'normal' }) {
  return (
    <p className="project-section__p" style={lh ? { lineHeight: lh } : undefined}>
      {children}
    </p>
  )
}

/** Small caption paragraph used above/below images (e.g. UI/UX sub-labels). */
export function Caption({ children }: { children: ReactNode }) {
  return <p className="project-section__caption">{children}</p>
}

export function Img({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="project-section__img" loading="lazy" decoding="async" />
}

export function Gif({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="project-section__gif" loading="lazy" decoding="async" />
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="project-section__list">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  )
}
