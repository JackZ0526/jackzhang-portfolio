import { useEffect, useRef, useState } from 'react'
import './Sidenav.css'

export type SidenavTab = { id: string; label: string }

export type SidenavProps = {
  tabs: SidenavTab[]
  /** When false, suppress the IntersectionObserver (e.g. no anchorable sections). */
  trackActive?: boolean
}

/**
 * Right-anchored fixed section nav — matches the original Wix harvest-onslaught
 * sidenav. Each tab is a label followed by a small circle indicator. The active
 * tab is detected via IntersectionObserver, falling back to the first tab.
 */
export default function Sidenav({ tabs, trackActive = true }: SidenavProps) {
  const [activeId, setActiveId] = useState<string>(tabs[0]?.id ?? '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!trackActive) {
      return
    }
    const ids = tabs.map((t) => t.id)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    if (sections.length === 0) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    observerRef.current = observer
    return () => observer.disconnect()
  }, [tabs, trackActive])

  if (tabs.length === 0) return null

  return (
    <nav className="sidenav" aria-label="Page sections">
      <ul>
        {tabs.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              aria-current={activeId === t.id ? 'location' : undefined}
              className={`sidenav__tab ${activeId === t.id ? 'is-active' : ''}`}
            >
              <span className="sidenav__tab-text">{t.label}</span>
              <span className="sidenav__tab-dot" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
