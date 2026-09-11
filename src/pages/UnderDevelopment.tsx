import './UnderDevelopment.css'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

// Inline SVG factory/building separator from original Wix (0da768_...svg)
function FactoryIcon() {
  return (
    <svg
      viewBox="0 0 34 25"
      className="under-dev__separator"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#143D0D"
        d="M0 6.751 11.63.723v5.87L22.955.723V6.75L33.422.723v23.954H0V6.75Z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  )
}

const ITEMS = Array.from({ length: 8 })

export default function UnderDevelopment() {
  useDocumentTitle('Under Development Page')
  return (
    <div className="under-dev">
      <div className="under-dev__track">
        {ITEMS.map((_, i) => (
          <span key={i} className="under-dev__item">
            Work in Progress...Please come back later!
            <FactoryIcon />
          </span>
        ))}
      </div>
    </div>
  )
}
