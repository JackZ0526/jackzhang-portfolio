import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { featuredProjects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import HomeHero from '../components/HomeHero'
import ProjectShowcase from '../components/ProjectShowcase'

export default function Home() {
  useDocumentTitle('HOME')
  return (
    <div className="home">
      <HomeHero />
      <section id="work" className="selected-work shell">
        <div className="section-heading"><div><p className="eyebrow">01 / HIGHLIGHTS</p><h2>Selected Work</h2></div><Link className="text-link" to="/portfolio">All projects <ArrowUpRight size={18} /></Link></div>
        <ProjectShowcase projects={featuredProjects} />
      </section>
    </div>
  )
}
