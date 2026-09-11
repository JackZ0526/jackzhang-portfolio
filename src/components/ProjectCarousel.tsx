import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './ProjectCarousel.css'

export type Slide = { src: string; alt: string }

/** Responsive gallery; offset remains accepted for compatibility with existing pages. */
export default function ProjectCarousel({ slides, ariaLabel = 'Project gallery' }: {
  slides: Slide[]; offset?: number; ariaLabel?: string
}) {
  const [index, setIndex] = useState(0)
  const touchStart = useRef<number | null>(null)
  if (!slides.length) return null
  const go = (delta: number) => setIndex(i => (i + delta + slides.length) % slides.length)
  return (
    <div className="project-carousel" role="region" aria-roledescription="carousel" aria-label={ariaLabel}
      onKeyDown={e => { if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) } if (e.key === 'ArrowRight') { e.preventDefault(); go(1) } }}
      onTouchStart={e => { touchStart.current = e.touches[0].clientX }}
      onTouchEnd={e => { if (touchStart.current !== null) { const delta = e.changedTouches[0].clientX - touchStart.current; if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1) } touchStart.current = null }}>
      <div className="project-carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => <img key={s.src} className="project-carousel__img" src={s.src} alt={s.alt} aria-hidden={i !== index} loading={i === 0 ? 'eager' : 'lazy'} />)}
      </div>
      {slides.length > 1 && <>
        <button type="button" className="project-carousel__btn project-carousel__btn--prev" aria-label="Previous Item" onClick={() => go(-1)}><ArrowLeft size={22} /></button>
        <button type="button" className="project-carousel__btn project-carousel__btn--next" aria-label="Next Item" onClick={() => go(1)}><ArrowRight size={22} /></button>
        <div className="project-carousel__pagination"><span aria-live="polite" aria-atomic="true">{String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span><div>{slides.map((s, i) => <button key={s.src} aria-label={`Show image ${i + 1}`} aria-pressed={index === i} onClick={() => setIndex(i)} />)}</div></div>
      </>}
    </div>
  )
}
