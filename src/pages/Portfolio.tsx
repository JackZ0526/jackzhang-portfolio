import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './Portfolio.css'

export default function Portfolio() {
  useDocumentTitle('PORTFOLIO')
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">PORTFOLIO</h1>
      <hr className="portfolio__divider" />

      <div className="portfolio__grid">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={'/' + p.slug}
            className="portfolio__item"
            aria-label={p.title}
          >
            <div className="portfolio__img-wrap">
              <img src={p.cover} alt={p.altCover} className="portfolio__img" />
            </div>
            <div className="portfolio__meta">
              <h2 className="portfolio__item-title">
                {p.titleLines ? p.titleLines.join(' ') : p.title}
              </h2>
              <p className="portfolio__item-role">{p.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
