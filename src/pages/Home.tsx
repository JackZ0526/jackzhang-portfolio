import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowRightIcon, ArrowCircleRightIcon } from '../components/icons'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import HomeHero, { renderDescription } from '../components/HomeHero'
import './Home.css'

export default function Home() {
  useDocumentTitle('HOME')
  return (
    <div className="home">
      <HomeHero />

      {projects.map((p, idx) => (
        <section key={p.slug} className={`home-project${idx === 0 ? ' home-project--first' : ''}${idx > 0 ? ' home-project--follow' : ''}`}>
          <div className="home-project__inner">
            <div className="home-project__left">
              <p className="home-project__num">{p.number}</p>
              <p className="home-project__category">{p.category}</p>
            </div>
            <div className="home-project__right">
              <Link
                to={p.href.startsWith('/') ? p.href : p.slug}
                className="home-project__cover-wrap"
                aria-label={`View ${p.title}`}
              >
                <img
                  src={p.cover}
                  alt={p.altCover}
                  className="home-project__cover"
                />
              </Link>
              <div className="home-project__text">
                <div className="home-project__title-row">
                  <div className="home-project__title-stack">
                    {p.titleLines ? (
                      p.titleLines.map((line, i) => (
                        <h3 key={i} className="home-project__title">{line}</h3>
                      ))
                    ) : (
                      <h3 className="home-project__title">{p.title}</h3>
                    )}
                  </div>
                  <Link
                    to={p.href.startsWith('/') ? p.href : p.slug}
                    className="home-project__arrow"
                    aria-label={`View ${p.title}`}
                  >
                    <ArrowCircleRightIcon size={32} />
                  </Link>
                </div>
                <p className="home-project__role">{p.role}</p>
                <p className="home-project__desc">{renderDescription(p.description, p.boldPhrases)}</p>
                <Link
                  to={p.href.startsWith('/') ? p.href : p.slug}
                  className="home-project__view"
                >
                  <ArrowRightIcon size={14} />
                  <span>View Game</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
