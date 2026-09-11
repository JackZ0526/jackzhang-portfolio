import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import HomeHero from '../components/HomeHero'
import ProjectShowcase from '../components/ProjectShowcase'

export default function Home() {
  useDocumentTitle('HOME')
  const featured = projects.filter(p => p.featured).slice(0, 3)
  return (
    <div className="home">
      <HomeHero />
      <section id="work" className="selected-work shell">
        <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>MY PORTFOLIO</h2></div><Link className="text-link" to="/portfolio">All projects <ArrowUpRight size={18} /></Link></div>
        <ProjectShowcase projects={featured} />
      </section>
    </div>
  )
}
