import { Link } from 'react-router-dom'
import { LinkedInIcon } from './icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Link to="/portfolio" className="site-footer__link">PORTFOLIO</Link>
        <Link to="/about" className="site-footer__link">ABOUT &amp; CONTACT</Link>
        <a
          href="https://www.linkedin.com/in/jack-zhang-032965138/"
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer__link site-footer__link--social"
        >
          <LinkedInIcon size={18} />
          LINKEDIN
        </a>
      </div>
      <div className="site-footer__bottom">
        <p className="site-footer__copy">© 2024 BY JACK ZHANG.</p>
        <a href="#top" className="site-footer__back">
          <span>BACK TO TOP</span>
        </a>
      </div>
    </footer>
  )
}
