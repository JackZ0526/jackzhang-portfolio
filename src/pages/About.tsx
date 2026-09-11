import { useEffect, useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './About.css'

export default function About() {
  useDocumentTitle('ABOUT')
  const email = 'jackzhang0526@gmail.com'
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle')

  useEffect(() => {
    if (copyStatus !== 'copied') return
    const timer = window.setTimeout(() => setCopyStatus('idle'), 2200)
    return () => window.clearTimeout(timer)
  }, [copyStatus])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('error')
    }
  }

  return (
    <div className="about container--narrow">
      <div className="about__hero">
        <h1 className="about__name">Jack Zhang</h1>
        <p className="about__role">LEVEL DESIGNER / GAME DESIGNER</p>
      </div>

      <section className="about__summary">
        <h2 className="about__h2">SHORT SUMMARY</h2>
        <p>
          I am a passionate Level Designer, Game Designer, and Developer with a
          year of game development experience at VFS Game Design Program. I
          specialize in creating immersive and engaging gameplay experiences
          using Unreal Engine, Blueprint Scripting, Unity, and C#. From
          designing levels for third-person mech shooters to prototyping
          mechanics for isometric tank combat games, I focus on optimizing
          player engagement and delivering polished results.
        </p>
        <p>
          Collaboration is at the heart of my work. I&rsquo;ve worked closely
          with artists, programmers, and narrative designers to implement
          in-game events, cutscenes, and gameplay features, ensuring cohesive
          projects. Using tools like Gaea and Unreal, I&rsquo;ve created
          detailed environments while streamlining production pipelines. My
          experience with Unity and C# includes designing UI and gameplay
          features that enhance player experiences. I also take pride in my
          ability to document and communicate design ideas effectively,
          ensuring smooth teamwork and project success.
        </p>
      </section>

      <section className="about__skills">
        <h2 className="about__h2">SKILLS</h2>
        <p className="about__skills-list">
          Unreal Engine, Blueprint Scripting, Unity, C# Programming, Level
          Design, Adobe Creative Suite
        </p>
      </section>

      <section className="about__contact" id="contact">
        <div className="about__contact-intro">
        <h2 className="about__h2">LET'S PLAY!</h2>
        <p className="about__contact-tagline">
          FEEL FREE TO CONTACT ME FOR FUTURE WORK AND PARTNERSHIPS
        </p>
        </div>
        <div className="about__contact-channel">
        <div className="contact-email">
          <div className="contact-email__command" aria-hidden="true"><span>$</span> contact --email</div>
          <span className="contact-email__address">{email}</span>
          <button type="button" className="contact-email__copy" onClick={copyEmail}
            aria-label="Copy email address" data-copied={copyStatus === 'copied'}>
            {copyStatus === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            <span className="contact-email__tooltip" aria-hidden="true">{copyStatus === 'copied' ? 'Copied!' : 'Copy email'}</span>
          </button>
        </div>
        <p className="contact-email__status" role="status" data-error={copyStatus === 'error'}>
          {copyStatus === 'copied' ? 'Email address copied.' : copyStatus === 'error' ? 'Couldn’t copy automatically. Please select and copy the email address above.' : ''}
        </p>
        </div>
      </section>
    </div>
  )
}
