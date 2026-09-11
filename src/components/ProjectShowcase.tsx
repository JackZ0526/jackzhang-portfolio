import { useRef, useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { renderDescription } from '../utils/renderDescription'

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  if (!projects.length) return null
  function navigate(event: KeyboardEvent, index: number) {
    let next = index
    if (event.key === 'ArrowRight') next = (index + 1) % projects.length
    else if (event.key === 'ArrowLeft') next = (index - 1 + projects.length) % projects.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = projects.length - 1
    else return
    event.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }
  return (
    <div className="showcase">
      <div className="showcase__tabs" role="tablist" aria-label="Selected projects">
        {projects.map((p, index) => <button key={p.slug} type="button" role="tab" id={`tab-${p.slug}`}
          aria-selected={active === index} aria-controls={`panel-${p.slug}`} tabIndex={active === index ? 0 : -1}
          ref={element => { tabs.current[index] = element }} onClick={() => setActive(index)} onKeyDown={event => navigate(event, index)}>
          <span>{p.titleLines?.join(' ') ?? p.title}</span>
        </button>)}
      </div>
      <div className="showcase__panels">
      {projects.map((p, index) => <div key={p.slug} id={`panel-${p.slug}`} role="tabpanel" aria-labelledby={`tab-${p.slug}`}
        aria-hidden={index !== active} inert={index !== active} tabIndex={index === active ? 0 : -1} className={`showcase__panel${index === active ? ' is-active' : ''}`}>
        <Link className="showcase__image" to={'/' + p.slug} aria-label={`View ${p.title}`}>
          <img src={p.cover} alt={p.altCover} loading="lazy" />
        </Link>
        <div className="showcase__story">
          <div className="showcase__meta"><span>{p.category}</span><span>{p.engine}</span><span>{p.devTime}</span></div>
          <h3>{p.titleLines?.join(' ') ?? p.title}</h3>
          <p className="showcase__role">{p.role}</p>
          <p className="showcase__description">{renderDescription(p.description, p.boldPhrases)}</p>
          <Link className="primary-link" to={'/' + p.slug}>View Game <ArrowUpRight size={17} /></Link>
        </div>
      </div>)}
      </div>
    </div>
  )
}
