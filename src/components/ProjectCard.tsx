import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="work-card">
      <Link to={'/' + p.slug} className="work-card__visual" aria-label={`View ${p.title}`}>
        <img src={p.cover} alt={p.altCover} loading="lazy" />
      </Link>
      <div className="work-card__body">
        <div className="work-card__eyebrow"><span className="work-card__number" aria-label={`Project ${p.number}`}>{p.number}</span><span>{p.category}</span><span>{p.engine}</span></div>
        <Link to={'/' + p.slug} className="work-card__title-link"><h3>{p.titleLines?.join(' ') ?? p.title}</h3><ArrowUpRight size={22} /></Link>
        <p className="work-card__role">{p.role}</p>
      </div>
    </article>
  )
}

