import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Header.css'

export default function Header() {
  const location = useLocation()
  const isActive = (p: string) => location.pathname === p
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${stuck ? ' is-stuck' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo" aria-label="Home">
          J.Z.
        </Link>
        <nav className="site-header__nav" aria-label="Site">
          <ul className="site-header__list">
            <li>
              <Link to="/portfolio" className={isActive('/portfolio') ? 'is-active' : ''}>
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'is-active' : ''}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/about" className="">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
