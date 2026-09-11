import ProjectLayout from '../components/ProjectLayout'
import ProjectCarousel from '../components/ProjectCarousel'
import { ProjectContent, ProjectSection, H3, P, Img, List } from '../components/ProjectContent'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

// Top pro-gallery slides, in the exact order the live site renders them
// (4 slides, 1317x741, first slide anchored at x=65).
const HERO_SLIDES = [
  { src: '/assets/media/094222_645a95308e2e416ca21d1aeb592e130e~mv2.png', alt: 'Phase Swap Demo 1' },
  { src: '/assets/media/094222_7157760348f84ad7bd2a5d4a76a077cc~mv2.png', alt: 'Phase Swap Demo 2' },
  { src: '/assets/media/094222_db77e146d0e247dc99468c8c5a58f3dd~mv2.png', alt: 'Phase Swap Demo 3' },
  { src: '/assets/media/094222_3c347b3dd9a84482812cc6114dd066d5~mv2.png', alt: 'Phase Swap Demo 4' },
]

export default function PhaseSwapDemo() {
  useDocumentTitle('Phase Swap Demo')
  return (
    <ProjectLayout
      meta={{
        title: 'Phase Swap Demo',
        role: 'Solo Demo',
        concept: (
          <>
            <strong>Phase Swap</strong> is a <strong>third-person puzzle adventure</strong> set in
            a quantum laboratory after a massive explosion destabilizes reality. Certain objects
            now exist in an <strong>unstable state</strong>, shifting between{' '}
            <strong>ghost-like intangibility and solid physical form</strong>. As a survivor
            altered by the blast, the player gains the ability to <strong>swap phases</strong>{' '}
            with these objects, using this power to <strong>solve spatial puzzles and navigate
            the facility</strong>. Walls and stable structures remain unchanged, forcing players
            to think strategically about what can and cannot be manipulated. Along the way, the
            protagonist encounters former colleagues driven insane by the accident, and must{' '}
            <strong>rely on phase control</strong> rather than <strong>violence</strong> to
            restrain enemies and escape the lab.
          </>
        ),
        description: '',
        devTime: '14 Days Quick Demo Whiteboxing',
        genre: 'Third-person Puzzle Adventure',
        engine: 'Unreal Engine 5.7',
        downloadHref: 'https://www.jackzhang.ca/_files/archives/094222_78db0c7f631b4cfdaf54952d826a1117.zip?dn=PhaseSwapDemo.zip',
        downloadLabel: 'DOWNLOAD',
        heroImage: undefined,
        heroLabel: 'Phase Swap Demo',
        heroLayout: 'center',
        italicTitle: true,
        pageClass: 'ps-page',
      }}
      nav={{ prevHref: '/', nextHref: '/harvest-onslaught' }}
    >
      <ProjectCarousel slides={HERO_SLIDES} offset={65} ariaLabel="Phase Swap Demo gallery" />

      <ProjectContent>
        <ProjectSection title="Design Approach">
          <P lh="normal">
            As a demo designed for an approximately 10-minute gameplay
            experience, this project intentionally avoids introducing too
            many complex mechanics. Instead, it focuses entirely on a single
            core gameplay concept: Phase Swapping between Ghost and Solid
            states.
          </P>
          <P>
            Through the rule that ghost and solid states cannot collide with
            each other, players rely solely on this ability to solve puzzles
            built around spatial reasoning and collision relationships, and
            later apply the exact same logic to handle enemies.
          </P>
          <P>The key advantages of this design approach are:</P>
          <List
            items={[
              <>
                Highly focused mechanics &mdash; players do not need to learn
                multiple systems at once, keeping the learning curve
                accessible.
              </>,
              <>
                Repeated reinforcement of the core logic &mdash; phase swapping
                is consistently used across puzzles, combat scenarios, and risk
                management, allowing players to quickly form a stable mental
                model.
              </>,
              <>
                Distinctive gameplay experience &mdash; the dynamic collision
                rules challenge traditional spatial intuition, offering a fresh
                and engaging form of puzzle interaction.
              </>,
            ]}
          />
        </ProjectSection>

        <ProjectSection title="Level Structure">
          <P>The demo consists of six rooms, clearly divided into three stages.</P>
          <H3>Stage 1 (Rooms 1&ndash;3): Teaching and Mastery</H3>
          <P>The first stage is designed to introduce the mechanic and build player familiarity:</P>
          <List
            items={[
              <>
                Room 1 introduces the phase swap ability and helps players
                understand the fundamental rule.
              </>,
              <>
                Room 2 reinforces the ghost/solid collision relationship in a
                safe environment.
              </>,
              <>
                Room 3 serves as the first major test, requiring multiple
                planned swaps to ensure the player can confidently apply the
                mechanic to solve problems.
              </>,
            ]}
          />
          <Img src="/assets/media/094222_192996f7ed5147f496f70fd0e5076012~mv2.png" alt="ScreenShot00004.png" />

          <H3>Stage 2 (Rooms 4&ndash;5): Introducing Enemies into the Same Rule System</H3>
          <P>The second stage formally introduces enemies and integrates them into the same phase framework:</P>
          <List
            items={[
              <>
                Room 4 teaches players that enemies also obey the ghost/solid
                rules &mdash; interaction is only possible when both are in the
                same state. Players can temporarily restrain enemies using
                phase control, but must release them in order to progress,
                fully understanding enemy behavior and risk.
              </>,
              <>
                Room 5 presents a puzzle that requires patience and sustained
                positioning, forcing players to solve under the pressure of an
                approaching enemy. This encourages the strategy of controlling
                enemies first, then solving the puzzle, as a safer and more
                efficient approach.
              </>,
            ]}
          />
          <Img src="/assets/media/094222_6bb4e4104d2e4fdc822a363889405c04~mv2.png" alt="ScreenShot00002.png" />

          <H3>Stage 3 (Room 6): Final Integration Challenge</H3>
          <P>The final room acts as a complete culmination of the demo:</P>
          <List
            items={[
              <>
                It introduces more enemies, a more complex spatial layout, and
                constant pursuit pressure.
              </>,
              <>
                Players must combine all previously learned knowledge and
                skills.
              </>,
              <>
                Although the difficulty increases significantly, the gradual
                buildup ensures that players can systematically break down the
                challenge and ultimately escape the laboratory.
              </>,
            ]}
          />
          <Img src="/assets/media/094222_fe4daa2881bf49259b2531bab4eb2be5~mv2.png" alt="ScreenShot00005.png" />
        </ProjectSection>

        <ProjectSection title="Summary" headingTag="h6">
          <P>
            Overall, the design follows the principle of &ldquo;one core
            mechanic, reused across multiple scenarios and systems.&rdquo;
            Through a clear learning curve and progressively layered challenges,
            the demo delivers meaningful gameplay depth within a short
            experience.
          </P>
          <P>
            This approach not only keeps the development scope manageable, but
            also ensures the demo presents a complete, convincing, and polished
            expression of the game&rsquo;s central idea.
          </P>
        </ProjectSection>

        <ProjectSection title="Technical Work">
          <P lh="normal">
            The entire project was developed using Unreal&rsquo;s Blueprint
            system without any C++ code. Enemy animations were downloaded from
            Mixamo&mdash;the Not So Scary Zombie Pack.
          </P>
          <P lh="normal">My primary technical contributions to this project included the following:</P>
          <H3>Phase Swap System</H3>
          <Img src="/assets/media/094222_b951fba110574e028cd337e99c03feca~mv2.png" alt="image.png" />
          <H3>An Outline Post Process Material for Selection</H3>
          <Img src="/assets/media/094222_76c3fbc9bc1948a783155676dd4d8585~mv2.png" alt="image.png" />
          <H3>Enemy using Behaviour Tree with Animation</H3>
          <Img src="/assets/media/094222_4e235fbe9ceb446f91257de66a16de51~mv2.png" alt="image.png" />
          <H3>A Ghost Material</H3>
          <Img src="/assets/media/094222_86cbd2bdd9344861bb7417ca37e67cd7~mv2.png" alt="image.png" />
          <H3>Modified ThirdPersonCharacter to Realize Required Functionalities</H3>
          <Img src="/assets/media/094222_e2db475672014c4bb65f5435e9e2576f~mv2.png" alt="image.png" />
        </ProjectSection>
      </ProjectContent>
    </ProjectLayout>
  )
}
