import { ArrowUpRight } from 'lucide-react'
import { ProjectContent, ProjectSection, P } from '../components/ProjectContent'
import ProjectPager from '../components/ProjectPager'
import Sidenav from '../components/Sidenav'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './ParisTour.css'

const tabs = [
  { id: 'planning', label: 'Planning' },
  { id: 'assistant', label: 'AI Assistant' },
  { id: 'collaboration', label: 'Collaboration' },
  { id: 'craft', label: 'Visual & Motion' },
  { id: 'building', label: 'Development' },
]

function Screenshot({ name, caption, alt }: { name: string; caption: string; alt: string }) {
  return <figure className="paris-figure">
    <figcaption>{caption}</figcaption>
    <a href={`/assets/paris-tour/${name}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${caption}`}>
      <img src={`/assets/paris-tour/${name}.webp`} alt={alt} loading="lazy" decoding="async" />
    </a>
  </figure>
}

export default function ParisTour() {
  useDocumentTitle('Paris Tour')
  return <div className="project-page paris-page">
    <header className="paris-intro shell">
      <p className="eyebrow">WEB APP / PERSONAL PROJECT</p>
      <h1>Paris Tour</h1>
      <p className="paris-intro__lead">One trip. A shared plan.</p>
      <div className="paris-intro__details">
        <div>
          <p>I started Paris Tour to plan my own trip to Paris—and to make planning with travel companions easier. It brings daily itineraries, maps and an AI assistant into a shared workspace, so everyone can work from the same plan.</p>
          <div className="paris-intro__actions">
            <a className="primary-link" href="https://paristour.vercel.app" target="_blank" rel="noopener noreferrer">Open App <ArrowUpRight size={16} /></a>
            <a className="text-link" href="https://github.com/JackZ0526/ParisTour" target="_blank" rel="noopener noreferrer">Source Code <ArrowUpRight size={16} /></a>
          </div>
          <p className="paris-intro__note">Invite-only access · Screenshots from a demonstration account</p>
        </div>
        <dl className="paris-facts">
          <div><dt>ROLE</dt><dd>Product Design & Development</dd></div>
          <div><dt>PLATFORM</dt><dd>Web · Desktop & Mobile</dd></div>
          <div><dt>STACK</dt><dd>React · TypeScript · Supabase</dd></div>
          <div><dt>STATUS</dt><dd>Ongoing · Paris supported</dd></div>
        </dl>
      </div>
    </header>
    <Sidenav tabs={tabs} />
    <ProjectContent>
      <ProjectSection id="planning" title="A plan you can see">
        <P>Planning a group trip means keeping track of dates, flights, accommodation and the places everyone wants to visit. I wanted these decisions to stay connected, rather than scattered across conversations and separate lists.</P>
        <P>The daily timeline sits beside the map. Stops can be rearranged by dragging, added or removed, while the map provides the geographical context for the day. Flight and hotel details remain part of the same trip.</P>
        <Screenshot name="itinerary" caption="Daily itinerary and map — time and place in one view" alt="Paris Tour demonstration itinerary with draggable stops on the left and a mapped Paris route on the right" />
      </ProjectSection>
      <ProjectSection id="assistant" title="AI, in context">
        <P>The assistant works alongside the itinerary. It can help find places, recommend nearby stops and make changes through natural language, with the selected day and place providing context.</P>
        <P>I designed the interaction to keep that context visible: suggested prompts offer a starting point, and the input supports images and screenshots as well as text. Progress steps make longer operations easier to follow.</P>
        <Screenshot name="assistant" caption="Trip Assistant — suggestions connected to the current day" alt="Paris Tour AI assistant open beside the itinerary, with contextual suggestions and a compact message input" />
      </ProjectSection>
      <ProjectSection id="collaboration" title="Plan together">
        <P>Collaboration was one of the original reasons for building the app. A trip can be shared by email with read-only or editing access. Cloud saves and realtime updates let travel companions return to the same itinerary across devices.</P>
        <P>Separating viewing from editing lets someone follow the plan without accidentally changing it, while the people organising the trip can keep refining it together.</P>
        <Screenshot name="sharing" caption="Trip sharing — choose who can view or edit" alt="Paris Tour sharing dialog with an email field and access controls for a shared itinerary" />
      </ProjectSection>
      <ProjectSection id="craft" title="The feel of the app">
        <P>I spent a substantial part of development refining the visual style and motion. Warm paper tones, serif headings, copper accents and translucent surfaces give the interface a quieter character, while compact controls keep the itinerary in focus.</P>
        <P>Day transitions, sliding panels and the assistant’s expanding input are designed to preserve a sense of continuity. Light and dark themes, responsive layouts and mobile sheets carry that approach across different screens.</P>
        <div className="paris-mobile-pair">
          <Screenshot name="mobile" caption="Daylight — the itinerary within reach" alt="Paris Tour in English on a mobile screen, showing the daily itinerary in its light theme" />
          <Screenshot name="mobile-assistant" caption="Midnight — an assistant that opens in place" alt="Paris Tour English mobile assistant panel with contextual suggestions in the dark theme" />
        </div>
      </ProjectSection>
      <ProjectSection id="building" title="Built to keep growing">
        <P>The interface uses React and TypeScript, with Supabase handling accounts, stored trips and realtime collaboration. Server-side API routes connect the planning experience to language models and travel services.</P>
        <dl className="paris-stack">
          <div><dt>Interface</dt><dd>React · TypeScript · Tailwind CSS · Framer Motion</dd></div>
          <div><dt>Data & collaboration</dt><dd>Supabase Auth · Postgres · Realtime</dd></div>
          <div><dt>Maps & services</dt><dd>MapLibre · OpenStreetMap · Vercel API routes</dd></div>
        </dl>
        <P><strong>Paris is the currently supported destination.</strong> The groundwork for additional destinations is already in place, but those options are not yet enabled. Expanding beyond Paris is the next direction for the project.</P>
      </ProjectSection>
    </ProjectContent>
    <ProjectPager prevHref="/phase-swap-demo" nextHref="/harvest-onslaught" />
  </div>
}
