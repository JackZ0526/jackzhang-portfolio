import { Link, useLocation } from 'react-router-dom'
import ThemeMenu from './ThemeMenu'

export default function Header() {
  const location = useLocation()
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo" aria-label="Home">J.Z.</Link>
        <nav className="site-header__nav" aria-label="Site">
          <Link to="/portfolio" aria-current={location.pathname === '/portfolio' ? 'page' : undefined}>PORTFOLIO</Link>
          <Link to="/about" aria-current={location.pathname === '/about' && !location.hash ? 'page' : undefined}>ABOUT</Link>
          <Link to="/about#contact" className="site-header__contact" aria-current={location.pathname === '/about' && location.hash === '#contact' ? 'page' : undefined}>CONTACT</Link>
        </nav>
        <ThemeMenu />
      </div>
    </header>
  )
}
