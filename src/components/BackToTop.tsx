import { useSyncExternalStore } from 'react'
import { ArrowUp } from 'lucide-react'

function subscribe(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true })
  return () => window.removeEventListener('scroll', onChange)
}

export default function BackToTop() {
  const visible = useSyncExternalStore(subscribe, () => window.scrollY > 160, () => false)
  return (
    <a href="#top" className="back-to-top" data-visible={visible}
      tabIndex={visible ? 0 : -1} aria-hidden={!visible} aria-label="Back to top">
      <ArrowUp size={18} aria-hidden="true" />
      <span className="back-to-top__tooltip" aria-hidden="true">Back to top</span>
    </a>
  )
}
