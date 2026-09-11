import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

// Routes that hide the site chrome (header / footer).
// NOTE: measured against the live site (2026-09-08, 1280x800) the original
// /under-development-page DOES render the shared header (J.Z. @ x=53,y=32,
// visibility: visible) and the footer LinkedIn link, so it must NOT be hidden.
// Keep the set empty unless the original actually drops the master page.
const CHROME_HIDDEN_ROUTES = new Set<string>([])

export default function SiteLayout() {
  const location = useLocation()
  const hideChrome = CHROME_HIDDEN_ROUTES.has(location.pathname)

  // Scroll to top on route change (matches Wix behavior)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="page" id="top">
      <a href="#main" className="skip-link">Skip to Main Content</a>
      {!hideChrome && <Header />}
      <main key={location.pathname} id="main">
        <Outlet />
      </main>
      {!hideChrome && <Footer />}
    </div>
  )
}
