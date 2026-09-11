import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import { ArrowUpLeft } from 'lucide-react'
import { projects } from '../data/projects'

// Routes that hide the site chrome (header / footer).
// NOTE: measured against the live site (2026-09-08, 1280x800) the original
// /under-development-page DOES render the shared header (J.Z. @ x=53,y=32,
// visibility: visible) and the footer LinkedIn link, so it must NOT be hidden.
// Keep the set empty unless the original actually drops the master page.
const CHROME_HIDDEN_ROUTES = new Set<string>([])

export default function SiteLayout() {
  const location = useLocation()
  const hideChrome = CHROME_HIDDEN_ROUTES.has(location.pathname)
  const project = projects.find(item => '/' + item.slug === location.pathname)

  // Scroll to top on route change (matches Wix behavior)
  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="page" id="top">
      <a href="#main" className="skip-link">Skip to Main Content</a>
      {!hideChrome && <Header />}
      <main key={location.pathname} id="main">
        {project && <div className="case-breadcrumb shell"><Link to="/portfolio"><ArrowUpLeft size={16} /> PORTFOLIO</Link><span>{project.number} / {project.engine}</span></div>}
        <Outlet />
      </main>
      {!hideChrome && <Footer />}
      {!hideChrome && <BackToTop />}
    </div>
  )
}
