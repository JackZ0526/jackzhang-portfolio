import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__inner shell">
        <div className="hero-topline"><span>PERSONAL PORTFOLIO</span><span>VANCOUVER, CANADA</span></div>
        <div className="hero-composition">
        <div className="hero-copy">
        <p className="home-hero__role">LEVEL DESIGNER / GAME DESIGNER</p>
        <h1 className="home-hero__title">JACK ZHANG</h1>
        <p className="home-hero__intro">
          Passionate Level Designer, Game Designer, and Developer based in
          Vancouver. Proficient in both Unity and Unreal Engine
        </p>
        <a className="primary-link" href="#work">Explore my work <ArrowDownRight size={18} /></a>
        </div>
        <Link className="hero-feature" to="/harvest-onslaught" aria-label="View Harvest Onslaught">
          <img src={projects[0].cover} alt={projects[0].altCover} fetchPriority="high" />
          <div className="hero-feature__frame" aria-hidden="true" />
          <div className="hero-feature__caption"><div><span>FEATURED PROJECT / 01</span><p>Harvest Onslaught</p></div><ArrowUpRight size={24} /></div>
        </Link>
        </div>
        <div className="hero-bottom"><span>GAMES / WEB APPS / AI & EXPERIMENTS</span><span>SCROLL TO EXPLORE <ArrowDownRight size={15} /></span></div>
      </div>
    </section>
  )
}
