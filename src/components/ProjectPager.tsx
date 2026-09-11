import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getProject } from '../data/projects'

export type ProjectNav = { prevHref: string; nextHref: string; prevLabel?: string; nextLabel?: string }

export default function ProjectPager({ prevHref, nextHref, prevLabel = 'PREVIOUS PROJECT', nextLabel = 'NEXT PROJECT' }: ProjectNav) {
  const title = (href: string) => {
    const project = getProject(href.replace(/^\//, ''))
    return project?.titleLines?.join(' ') ?? project?.title ?? 'Home'
  }
  return (
    <nav className="project-pager" aria-label="Previous / Next">
      <Link to={prevHref} className="project-pager__btn" rel="prev">
        <span className="project-pager__label">{prevLabel}</span>
        <span className="project-pager__destination"><ArrowLeft size={18} aria-hidden="true" /><span>{title(prevHref)}</span></span>
      </Link>
      <Link to={nextHref} className="project-pager__btn project-pager__btn--right" rel="next">
        <span className="project-pager__label">{nextLabel}</span>
        <span className="project-pager__destination"><span>{title(nextHref)}</span><ArrowRight size={18} aria-hidden="true" /></span>
      </Link>
    </nav>
  )
}
