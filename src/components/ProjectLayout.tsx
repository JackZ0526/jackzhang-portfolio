import type { ReactNode } from 'react'
import ProjectPager, { type ProjectNav } from './ProjectPager'
import './ProjectLayout.css'

export type { ProjectNav } from './ProjectPager'

export type ProjectMeta = {
  title: string
  role: ReactNode
  description: ReactNode
  devTime: string
  genre: string
  engine: string
  downloadHref?: string
  downloadLabel?: string
  conceptLabel?: string
  concept?: ReactNode
  heroImage?: string
  heroLabel?: string
  heroLayout?: 'split' | 'center'
  italicTitle?: boolean
  /** Extra class on the page root, used for per-page geometry tweaks. */
  pageClass?: string
}

export default function ProjectLayout({ meta, nav, tabs, children }: {
  meta: ProjectMeta
  nav: ProjectNav
  tabs?: { id: string; label: string }[]
  children?: React.ReactNode
}) {
  const heroLayout = meta.heroLayout || 'center'
  const italic = meta.italicTitle || false

  return (
    <div className={`project-page${meta.pageClass ? ' ' + meta.pageClass : ''}`}>
      <header className={`project-hero project-hero--${heroLayout}`}>
        <div className={`project-hero__inner project-hero__inner--${heroLayout}`}>
          <h1 className={`project-hero__title ${italic ? 'project-hero__title--italic' : ''}`}>
            {meta.title.split('\n').map((line, i) => (
              <span key={i} className="project-hero__title-line">
                {line}
                {i < meta.title.split('\n').length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          {meta.heroImage && (
            <div className="project-hero__media">
              <img src={meta.heroImage} alt={meta.heroLabel || meta.title} />
              {meta.heroLabel && <p className="project-hero__media-label">{meta.heroLabel}</p>}
            </div>
          )}
        </div>
      </header>

      {tabs && tabs.length > 0 && (
        <nav className="project-tabs" aria-label="Page">
          <ul className="project-tabs__list">
            {tabs.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="project-tabs__tab">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <section className="project-meta">
        <div className="project-meta__col project-meta__col--left">
          {/* Original Wix order: ROLE first, then DESCRIPTION / Concept. */}
          <p className="project-meta__label">ROLE</p>
          <p className="project-meta__value">{meta.role}</p>
          {meta.description && <>
            <p className="project-meta__label">DESCRIPTION</p>
            <p className="project-meta__value">{meta.description}</p>
          </>}
          {meta.conceptLabel && <p className="project-meta__label">{meta.conceptLabel}</p>}
          {meta.concept && <p className="project-meta__value">{meta.concept}</p>}
        </div>
        <aside className="project-meta__col project-meta__col--right">
          <p className="project-meta__label project-meta__label--plain">Development Time</p>
          <p className="project-meta__value project-meta__value--right">{meta.devTime}</p>
          <p className="project-meta__label project-meta__label--plain">GENRE</p>
          <p className="project-meta__value">{meta.genre}</p>
          <p className="project-meta__label project-meta__label--plain">Engine</p>
          <p className="project-meta__value">{meta.engine}</p>
          {meta.downloadHref && (
            <a
              href={meta.downloadHref}
              target="_blank"
              rel="noopener noreferrer"
              className="project-meta__download"
            >
              {meta.downloadLabel || 'DOWNLOAD'}
            </a>
          )}
        </aside>
      </section>

      {children}

      <ProjectPager {...nav} />
    </div>
  )
}
