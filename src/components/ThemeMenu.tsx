import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { Check, ChevronDown, Monitor, Moon, Sun } from 'lucide-react'

const options = [
  { value: 'system', label: 'System', description: 'Follow your device', Icon: Monitor },
  { value: 'light', label: 'Light', description: 'Always use light mode', Icon: Sun },
  { value: 'dark', label: 'Dark', description: 'Always use dark mode', Icon: Moon },
] as const
type Preference = typeof options[number]['value']

export default function ThemeMenu() {
  const [preference, setPreference] = useState<Preference>(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme')
      return saved === 'dark' || saved === 'light' ? saved : 'system'
    } catch { return 'system' }
  })
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const items = useRef<(HTMLButtonElement | null)[]>([])
  const menuId = useId()
  const current = options.find(option => option.value === preference)!

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    const sync = () => { document.documentElement.dataset.theme = preference === 'system' ? media.matches ? 'dark' : 'light' : preference }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [preference])

  useEffect(() => {
    if (!open) return
    items.current[options.findIndex(option => option.value === preference)]?.focus()
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', dismiss)
    return () => document.removeEventListener('pointerdown', dismiss)
  }, [open, preference])

  function choose(value: Preference) {
    setPreference(value)
    try { localStorage.setItem('portfolio-theme', value) } catch { /* Session-only if storage is blocked. */ }
    setOpen(false)
    trigger.current?.focus()
  }

  function handleKeys(event: KeyboardEvent) {
    if (event.key === 'Tab') { setOpen(false); return }
    const index = items.current.findIndex(item => item === document.activeElement)
    let next = index
    if (event.key === 'ArrowDown') next = (index + 1) % options.length
    else if (event.key === 'ArrowUp') next = (index - 1 + options.length) % options.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = options.length - 1
    else if (event.key === 'Escape') { event.preventDefault(); setOpen(false); trigger.current?.focus(); return }
    else return
    event.preventDefault()
    items.current[next]?.focus()
  }

  return (
    <div className="appearance" ref={root} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
    }}>
      <button ref={trigger} className="appearance__trigger" type="button" aria-label={`Color theme: ${current.label}`}
        aria-haspopup="menu" aria-expanded={open} aria-controls={open ? menuId : undefined}
        onClick={() => setOpen(value => !value)}
        onKeyDown={event => { if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setOpen(true) } }}>
        <current.Icon size={17} /><span>{current.label}</span><ChevronDown size={13} />
      </button>
      {open && <div className="appearance__menu" id={menuId} role="menu" aria-label="Color theme" onKeyDown={handleKeys}>
        <p className="appearance__label" aria-hidden="true">APPEARANCE</p>
        {options.map(({ value, label, description, Icon }, index) => (
          <button key={value} type="button" role="menuitemradio" aria-checked={preference === value} tabIndex={-1}
            ref={element => { items.current[index] = element }} onClick={() => choose(value)}>
            <span className="appearance__icon"><Icon size={18} /></span>
            <span className="appearance__text"><span>{label}</span><small>{description}</small></span>
            {preference === value && <Check size={16} className="appearance__check" />}
          </button>
        ))}
      </div>}
    </div>
  )
}
