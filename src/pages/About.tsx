import { useState, type FormEvent } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './About.css'

export default function About() {
  useDocumentTitle('ABOUT')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
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
        <h2 className="about__h2">LET'S PLAY!</h2>
        <p className="about__contact-tagline">
          FEEL FREE TO CONTACT ME FOR FUTURE WORK AND PARTNERSHIPS
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="firstName" className="contact-form__label">First Name</label>
              <input id="firstName" name="firstName" type="text" className="contact-form__input" />
            </div>
            <div className="contact-form__field">
              <label htmlFor="lastName" className="contact-form__label">Last Name</label>
              <input id="lastName" name="lastName" type="text" className="contact-form__input" />
            </div>
          </div>
          <div className="contact-form__row">
            <div className="contact-form__field contact-form__field--full">
              <label htmlFor="email" className="contact-form__label">Email *</label>
              <input id="email" name="email" type="email" required className="contact-form__input" />
            </div>
          </div>
          <div className="contact-form__row">
            <div className="contact-form__field contact-form__field--full">
              <label htmlFor="subject" className="contact-form__label">Subject</label>
              <input id="subject" name="subject" type="text" className="contact-form__input" />
            </div>
          </div>
          <div className="contact-form__row">
            <div className="contact-form__field contact-form__field--full">
              <label htmlFor="message" className="contact-form__label">Leave me a message...</label>
              <textarea id="message" name="message" rows={5} className="contact-form__input contact-form__textarea" />
            </div>
          </div>
          <div className="contact-form__row">
            <button type="submit" className="contact-form__submit">Submit</button>
          </div>
          {submitted && <p className="contact-form__ok" role="status">Thanks! I'll be in touch.</p>}
        </form>
      </section>
    </div>
  )
}
