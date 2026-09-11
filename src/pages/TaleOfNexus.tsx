import ProjectLayout from '../components/ProjectLayout'
import ProjectCarousel from '../components/ProjectCarousel'
import { ProjectContent, ProjectSection, Caption, P, Img } from '../components/ProjectContent'
import Sidenav from '../components/Sidenav'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './TaleOfNexus.css'

// Top pro-gallery slides, in the exact order the live site renders them
// (9 slides, 1317x741, first slide anchored at x=65).
const HERO_SLIDES = [
  { src: '/assets/media/094222_8dc317ca95354ff3810816ba1aa41db2~mv2.png', alt: 'Tale of Nexus 1' },
  { src: '/assets/media/094222_a0b419dce6544da0bf56537c18d2e2da~mv2.png', alt: 'Tale of Nexus 2' },
  { src: '/assets/media/094222_3220fea382cb444da10f087fc66ccc6d~mv2.png', alt: 'Tale of Nexus 3' },
  { src: '/assets/media/094222_3105ca0bf8b24b518c334b9edfd52082~mv2.png', alt: 'Tale of Nexus 4' },
  { src: '/assets/media/094222_c6ecf4191957447697260b38c4bc8bdb~mv2.png', alt: 'Tale of Nexus 5' },
  { src: '/assets/media/094222_a94b63d37c724603b4d46beeb33d1f6f~mv2.png', alt: 'Tale of Nexus 6' },
  { src: '/assets/media/094222_840226b244a142c1a644ecdf72e43e3e~mv2.png', alt: 'Tale of Nexus 7' },
  { src: '/assets/media/094222_71436a45d8ff4565a6285e852b5ab9b8~mv2.png', alt: 'Tale of Nexus 8' },
  { src: '/assets/media/094222_4ddfacf3b0484f8b821931e614059c06~mv2.png', alt: 'Tale of Nexus 9' },
]

// Section jump tabs rendered as a fixed right-anchored overlay.
const TABS = [
  { id: 'level-design', label: 'Level Design' },
  { id: 'blueprint', label: 'Blueprint Scripting' },
]

export default function TaleOfNexus() {
  useDocumentTitle('Tale of Nexus: The True Guardian')

  return (
    <ProjectLayout
      meta={{
        title: 'Tale of Nexus',
        role: 'Solo with given asset',
        description: (
          <>
            <strong>Tale of Nexus: The True Guardian</strong> is an{' '}
            <strong>3rd person action-adventure fantasy</strong> game where players embody Jupiter,
            a warrior tasked with restoring balance to Nexus, an interdimensional hub linking the
            Ground and Sky realms. To save Nexus from collapse, players must{' '}
            <strong>recover two mythological artifacts</strong>: the Gram sword and Apollo&rsquo;s
            Golden Bow, each hidden in unique, treacherous environments. Starting unarmed, players
            will navigate challenges such as stealth and platforming while battling realm-specific
            enemies. Once both artifacts are returned to Nexus, their combined power will{' '}
            <strong>restore harmony to the realms</strong> and secure Nexus&rsquo;s future.
          </>
        ),
        devTime: '2 months',
        genre: 'Third-person Fantasy Action-Adventure',
        engine: 'Unreal Engine 5',
        heroImage: undefined,
        heroLabel: undefined,
        heroLayout: 'center',
        italicTitle: true,
        pageClass: 'ton-page',
      }}
      nav={{ prevHref: '/breakneck-battle-tank', nextHref: '/' }}
    >
      <ProjectCarousel slides={HERO_SLIDES} offset={65} ariaLabel="Tale of Nexus gallery" />

      <ProjectContent>
        <Sidenav tabs={TABS} />
        <ProjectSection id="level-design" title="Level Design">
          <P lh="normal">
            In this <strong>Fantasy Project</strong>, we were tasked with designing a level that
            included <strong>two interconnected sublevels</strong> within a{' '}
            <strong>limited spatial dimension</strong> and utilizing{' '}
            <strong>existing art assets</strong>. The design process began by developing the
            game&rsquo;s concept, which included writing the <strong>narrative overview</strong>,{' '}
            <strong>gameplay overview</strong>, and <strong>environmental setting</strong>, as well
            as outlining specific <strong>Gameplay Beats</strong> in a{' '}
            <a
              className="project-section__link"
              href="https://docs.google.com/document/d/1PVzGUEmItWK_kis-tI7CkJDVmRuW-QRHv_JHcn32ZaU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Concept Document
            </a>
            . However, due to time constraints and the dimensional limitations, I had to
            streamline the original concept, reducing the envisioned three realms to two
            interconnected ones.
          </P>
          <Img src="/assets/media/094222_f0aa44f94b29400db689bde23c2437cc~mv2.png" alt="image.png" />
          <P>
            The player's <strong>main goal</strong> in this level is to{' '}
            <strong>collect two weapons</strong>, located at the{' '}
            <strong>heart of the maze</strong> in the first sublevel and at the{' '}
            <strong>highest point</strong> of the second sublevel. These two sublevels are
            interconnected by a <strong>portal</strong>, and the weapons themselves serve as{' '}
            <strong>keys to activate the portal</strong>, making it essential for the player to
            obtain them to progress further in the game. Additionally, the NPC at the starting
            point provide the player with story background and guidance through dialogues,
            ensuring a clear understanding of objectives and the narrative context.
          </P>
          <Img src="/assets/media/094222_3ac063f3391b4701b3b17419866a36fc~mv2.png" alt="image.png" />
          <P lh="normal">
            The <strong>primary challenge</strong> in the first area is to{' '}
            <strong>stealthily evade enemy detection</strong> while <strong>unarmed</strong>,
            skillfully navigating through a <strong>labyrinthine maze</strong> to acquire the{' '}
            <strong>initial weapon</strong> and <strong>activate the portal</strong> leading to the
            next area.
          </P>
          <Img src="/assets/media/094222_3220fea382cb444da10f087fc66ccc6d~mv2.png" alt="image.png" />
          <P lh="normal">
            The second part involves <strong>precision platform jumping</strong> and battling{' '}
            <strong>formidable enemies</strong> guarding weapons, while also activating the
            portal to return to the first area and <strong>deliver two weapons</strong>.
          </P>
          <Img src="/assets/media/094222_840226b244a142c1a644ecdf72e43e3e~mv2.png" alt="image.png" />
          <P lh="normal">
            This project provided <strong>valuable insight</strong> into the{' '}
            <strong>entire game development pipeline</strong>, offering me the opportunity to
            balance <strong>creative ideas</strong> with <strong>practical constraints</strong>,
            such as limited dimensions and <strong>pre-existing art assets</strong>. Additionally,
            it allowed me to deepen my understanding of the{' '}
            <strong>functions and practical applications of Unreal Engine 5</strong>, enhancing my{' '}
            <strong>technical proficiency</strong>. Overall, this project served as a{' '}
            <strong>strong foundation</strong> for my journey into the field of game development,
            equipping me with the skills and confidence to tackle more complex challenges in the
            future.
          </P>
        </ProjectSection>

        <ProjectSection id="blueprint" title="Blueprint Scripting">
          <P>
            In this project, I utilized Blueprints to implement key game mechanics, including
            cinematic triggering, dynamic loading and unloading of sub-levels, and portal
            activation. This approach allowed me to efficiently prototype and refine complex
            systems, showcasing my ability to leverage Unreal Engine 5's visual scripting
            capabilities to create a seamless and engaging player experience.
          </P>
          <Caption>Cinematic events, Loading &amp; Unloading Sub-levels</Caption>
          <Img src="/assets/media/094222_e46de295907840759469af9532d07bf2~mv2.png" alt="image.png" />
          <Caption>Portal Activation &amp; Status Save</Caption>
          <Img src="/assets/media/094222_698faacf11bf4b16b45ad669ada519f4~mv2.png" alt="image.png" />
          <Img src="/assets/media/094222_ddfedb3118f148ba8a9bf7c902afe23a~mv2.png" alt="image.png" />
          <Img src="/assets/media/094222_c74f1a809c724298a07ac2f8b503478d~mv2.png" alt="image.png" />
          <Img src="/assets/media/094222_682d9c1032be4b94be20c329858df4e7~mv2.png" alt="image.png" />
          <Img src="/assets/media/094222_a5c5aa9c44674d46aa0e6ba0b6af0347~mv2.png" alt="image.png" />
          <Img src="/assets/media/094222_fc27384e053541ca94e59f401e0275db~mv2.png" alt="image.png" />
          <Img src="/assets/media/094222_198203cc1cac45b5a5108d26171e8bc2~mv2.png" alt="image.png" />
          <Caption>Winning Condition Check</Caption>
          <Img src="/assets/media/094222_e4658efbb0924d3d8493348384e1995c~mv2.png" alt="image.png" />
          <Caption>Check Current Status when Level is Reloaded</Caption>
          <Img src="/assets/media/094222_cd57e2133b5c44e2b6219c8135309b17~mv2.png" alt="image.png" />
          <Caption>Big Enemy Encounter Event</Caption>
          <Img src="/assets/media/094222_c8405448b20b4a69adc9b4936ca0b0db~mv2.png" alt="image.png" />
        </ProjectSection>
      </ProjectContent>
    </ProjectLayout>
  )
}
