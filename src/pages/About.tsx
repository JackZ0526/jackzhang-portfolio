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
        <p className="about__role">GAME DESIGN / PRODUCT EXPLORATION</p>
      </div>

      <section className="about__summary">
        <h2 className="about__h2">SHORT SUMMARY</h2>
        <p>
          I&rsquo;m a designer based in Vancouver with a background in game and
          level design, including a year in the VFS Game Design Program. My
          work ranges from levels for a third-person mech shooter to mechanics
          for an isometric tank combat game. Working with artists, programmers
          and narrative designers taught me to communicate ideas clearly and
          refine an experience through collaboration and playtesting.
        </p>
        <p>
          That practice now extends to web apps and AI experiments. Paris Tour
          grew out of my own need to plan trips with other people, with a focus
          on collaboration, visual style and motion. GomokuAI and XiangqiAI
          became a way to explore how training decisions and real playtesting
          shape the behaviour of a learning agent.
        </p>
        <p>
          Across these projects, I focus on defining the problem, shaping the
          experience and deciding what to improve next. I also work with coding
          agents to turn ideas into working projects. In the Board Game AI
          series, all implementation code was produced by coding agents; my
          contribution was project direction, experiment design and UX
          iteration, guided by training reviews and feedback from players.
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
