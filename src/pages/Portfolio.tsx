import { useSearchParams } from 'react-router-dom'
import { Search, X, Layers, Gamepad2, AppWindow, Cpu } from 'lucide-react'
import { projects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import ProjectCard from '../components/ProjectCard'

const categories = [
  { name: 'All', Icon: Layers },
  { name: 'Games', Icon: Gamepad2 },
  { name: 'Web Apps', Icon: AppWindow },
  { name: 'AI & Experiments', Icon: Cpu },
] as const

export default function Portfolio() {
  useDocumentTitle('PORTFOLIO')
  const [params, setParams] = useSearchParams()
  const category = categories.find(c => c.name === params.get('category'))?.name ?? 'All'
  const query = params.get('q') ?? ''
  function update(key: string, value: string) {
    const next = new URLSearchParams(params)
    if (!value || value === 'All') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }
  const filtered = projects.filter(p => (category === 'All' || (p.kind ?? 'Games') === category) &&
    [p.title, p.titleLines?.join(' '), p.role, p.engine, p.description, ...(p.tags ?? [])].join(' ').toLowerCase().includes(query.toLowerCase().trim()))
  return (
    <div className="portfolio shell">
      <header className="library-heading"><p className="eyebrow">PROJECT INDEX / {String(projects.length).padStart(2, '0')}</p><h1>PORTFOLIO<span className="title-period">.</span></h1></header>
      <div className="library-layout">
        <aside className="library-sidebar">
          <p className="eyebrow">EXPLORE BY DISCIPLINE</p>
          <div className="category-filters" role="group" aria-label="Project categories">
            {categories.map(({ name, Icon }) => <button key={name} aria-pressed={category === name} onClick={() => update('category', name)}>
              <Icon size={17} /><span>{name}</span><small>{name === 'All' ? projects.length : projects.filter(p => (p.kind ?? 'Games') === name).length}</small>
            </button>)}
          </div>
        </aside>
        <div className="library-results">
          <div className="library-controls">
            <p className="library-count" role="status">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'}</p>
            <label className="project-search"><Search size={17} /><input aria-label="Search projects" placeholder="Search projects..." value={query} onChange={e => update('q', e.target.value)} />{query && <button onClick={() => update('q', '')} aria-label="Clear search"><X size={16} /></button>}</label>
          </div>
          <div className="work-grid" key={category}>{filtered.map(p => <ProjectCard key={p.slug} project={p} />)}</div>
          {!filtered.length && <div className="library-empty"><span className="eyebrow">NOTHING HERE YET</span><h2>{query ? 'No matching projects.' : 'More to come.'}</h2><button className="primary-link" onClick={() => setParams({})}>View all projects</button></div>}
        </div>
      </div>
    </div>
  )
}
