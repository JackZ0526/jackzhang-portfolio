import { useState, type CSSProperties } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './ProjectCarousel.css'

export type Slide = { src: string; alt: string }

/**
 * Top-of-page project gallery.
 *
 * Measured on the live Wix site at 1280x800: the pro-gallery keeps every slide in
 * the DOM as a horizontal track — each slide is 1317x741 with a 40px gap, and the
 * first slide is anchored at x=65 (Harvest Onslaught: x=244). The track is clipped
 * by the viewport, so at rest only the first slide is visible.
 */
export default function ProjectCarousel({
  slides,
  offset = 65,
  ariaLabel = 'Project gallery',
}: {
  slides: Slide[]
  offset?: number
  ariaLabel?: string
}) {
  const [index, setIndex] = useState(0)
  if (slides.length === 0) return null
  const go = (delta: number) => setIndex((i) => (i + delta + slides.length) % slides.length)

  return (
    <div
      className="project-carousel"
      style={{ '--carousel-offset': offset + 'px' } as CSSProperties}
      role="group"
      aria-label={ariaLabel}
    >
      <div
        className="project-carousel__track"
        style={{ transform: 'translateX(' + -index * 1357 + 'px)' }}
      >
        {slides.map((s) => (
          <img key={s.src} className="project-carousel__img" src={s.src} alt={s.alt} />
        ))}
      </div>
      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="project-carousel__btn project-carousel__btn--prev"
            aria-label="Previous Item"
            onClick={() => go(-1)}
          >
            <ArrowLeft size={28} color="#fff" />
          </button>
          <button
            type="button"
            className="project-carousel__btn project-carousel__btn--next"
            aria-label="Next Item"
            onClick={() => go(1)}
          >
            <ArrowRight size={28} color="#fff" />
          </button>
        </>
      )}
    </div>
  )
}
