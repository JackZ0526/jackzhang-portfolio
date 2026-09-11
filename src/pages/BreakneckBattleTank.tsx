import ProjectLayout from '../components/ProjectLayout'
import ProjectCarousel from '../components/ProjectCarousel'
import { ProjectContent, ProjectSection, Caption, P, Img, Gif, List } from '../components/ProjectContent'
import Sidenav from '../components/Sidenav'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import './BreakneckBattleTank.css'

// Top pro-gallery slides, in the exact order the live site renders them
// (10 slides, 1317x741, first slide anchored at x=65).
const HERO_SLIDES = [
  { src: '/assets/media/094222_f6465ff83bda4edca2c7010b06f595af~mv2.png', alt: 'Breakneck Battle Tank 1' },
  { src: '/assets/media/094222_4c145cd4c9b94c32891a376dedb43e99~mv2.png', alt: 'Breakneck Battle Tank 2' },
  { src: '/assets/media/094222_14275ca54126427eaaf6edc160ea85f5~mv2.png', alt: 'Breakneck Battle Tank 3' },
  { src: '/assets/media/094222_0044994e54f14dac89510b82f3c81f49~mv2.png', alt: 'Breakneck Battle Tank 4' },
  { src: '/assets/media/094222_1e2cc9b240d0466f93ebfc1d61326a2b~mv2.png', alt: 'Breakneck Battle Tank 5' },
  { src: '/assets/media/094222_5c8f168dbbe049fc84721c5380d92796~mv2.png', alt: 'Breakneck Battle Tank 6' },
  { src: '/assets/media/094222_0a2ef9fab4d742af815e7f8d0b204e70~mv2.png', alt: 'Breakneck Battle Tank 7' },
  { src: '/assets/media/094222_86185fe326974a02853f9c5b46d9c4cd~mv2.png', alt: 'Breakneck Battle Tank 8' },
  { src: '/assets/media/094222_cedd86200fbd46309771d4acd801fd44~mv2.png', alt: 'Breakneck Battle Tank 9' },
  { src: '/assets/media/094222_4e8a5aa584ee4d8c9edb44d006ecb580~mv2.png', alt: 'Breakneck Battle Tank 10' },
]

// Section jump tabs rendered as a fixed right-anchored overlay.
const TABS = [
  { id: 'level-design', label: 'Level Design' },
  { id: 'ui-ux', label: 'UI/UX Design' },
]

export default function BreakneckBattleTank() {
  useDocumentTitle('Breakneck Battle Tank')

  return (
    <ProjectLayout
      meta={{
        title: 'Breakneck Battle Tank',
        role: 'Level Designer / Game Designer / UI UX Designer',
        description: (
          <>
            <strong>Breakneck Battle Tank (BBT)</strong> is a single-player, toy-themed,{' '}
            <strong>3D top-down arcade shooter</strong>. Players control the last surviving toy
            tank from their squad, battling waves of enemy tanks across multiple stages to{' '}
            <strong>defeat the enemy boss</strong>. Adding urgency, the tank's core engine is
            unstable due to prior battle damage, creating <strong>a race against time</strong>.
            Players must destroy enemies to collect repair packs that extend survival while
            utilizing power-ups like movement boosts and shields to enhance their chances.
            Strategic gameplay is key&mdash;balancing offense, survival, and time management. If
            the engine becomes unstable, the mission ends in failure.
          </>
        ),
        devTime: '2 months',
        genre: '3D top-down arcade shooter',
        engine: 'Unity',
        heroImage: undefined,
        heroLabel: undefined,
        heroLayout: 'center',
        italicTitle: true,
        pageClass: 'bbt-page',
      }}
      nav={{ prevHref: '/harvest-onslaught', nextHref: '/' }}
    >
      {/* Top pro gallery — sits between the meta block and the Level Design section */}
      <ProjectCarousel slides={HERO_SLIDES} offset={65} ariaLabel="Breakneck Battle Tank gallery" />

      <ProjectContent>
        <Sidenav tabs={TABS} />
        <ProjectSection id="level-design" title="Level Design">
          <P>
            As a <strong>level designer</strong> for BBT, I designed a total of three levels, each
            introducing and refining gameplay mechanics to enhance player engagement.
          </P>
          <P>
            The <strong>first level</strong> is divided into three parts. The first part is the
            introduction area, where the player encounters three types of enemies in succession:
            normal tanks, turrets, and heavy tanks. These represent the basic enemy types in BBT.
            The heavy tank requires two hits to defeat, compared to one hit for the others, and
            it drops upgrade items when destroyed. This area also introduces two obstacle types:
            destructible obstacles, which can be broken, and non-destructible obstacles, which must
            be navigated around.
          </P>
          <Img src="/assets/media/094222_a96627fd25804bbdaa9b23913e464415~mv2.png" alt="image.png" />
          <P lh="normal">
            The second part, called the <strong>trap area</strong>, uses a{' '}
            <strong>shield pickup</strong> to lure the player into a confined space. Once inside,
            the area is <strong>blocked</strong>, forcing the player to{' '}
            <strong>defeat enemies</strong> to escape. Here, the player encounters a{' '}
            <strong>third obstacle type</strong>: the <strong>Czech hedgehog</strong>, an
            impassable barrier that <strong>can be shot through</strong>, adding a strategic
            element to combat.
          </P>
          <Gif src="/assets/media/094222_8587504397ed474b8ff3ff74a13a8c3a~mv2.gif" alt="2024-12-03 23-54-30.gif" />
          <P lh="normal">
            The <strong>third part</strong> is the <strong>final area</strong>, combining all
            previously introduced mechanics, obstacles, and enemy types. This section challenges
            the player with <strong>a large number of enemies</strong>, reinforcing their
            understanding of the game&rsquo;s <strong>core mechanics</strong> and{' '}
            <strong>obstacle interactions</strong>.
          </P>
          <Img src="/assets/media/094222_829af0814e5d4cbe9b17a2052db0563d~mv2.png" alt="image.png" />
          <P lh="normal">
            The <strong>second level</strong> consists of two parts, designed to reflect the
            game&rsquo;s fantasy and toy theme. I incorporated real-life props to emphasize the
            idea that the game is a child&rsquo;s imaginative fantasy set in their bedroom. The
            unique feature of the first part is a raised book, introducing the concept of
            verticality for the first time. Hidden enemies in a tunnel beneath the book add
            surprise encounters, enhancing player engagement.
          </P>
          <Gif src="/assets/media/094222_8287e0ed792c444eb47eee95cec41b5c~mv2.gif" alt="2024-12-03 23-54-30_1.gif" />
          <P>
            The second part features a <strong>more irregular layout</strong>, increasing
            difficulty with a combination of <strong>heavy tanks</strong> and{' '}
            <strong>turrets</strong>. Players must choose between two routes:
          </P>
          <List
            items={[
              <>
                The <strong>upper route</strong> with <strong>fewer turrets</strong> but a{' '}
                <strong>longer path</strong>.
              </>,
              <>
                The <strong>shorter route</strong> with <strong>more turrets</strong>, providing
                a <strong>risk-reward choice</strong> as they advance toward the evacuation
                point.
              </>,
            ]}
          />
          <Img src="/assets/media/094222_dcc0aa5c17e14fd0b7fb2b9fcdf06581~mv2.png" alt="image.png" />
          <P>
            The third level is the final boss level, designed to test the player&rsquo;s mastery
            of all mechanics. The boss encounter is divided into four stages.
          </P>
          <List
            items={[
              <>
                <strong>In the first stage</strong>, players must destroy the boss&rsquo;s
                turrets before dealing direct damage.
              </>,
              <>
                <strong>Four types of pickups</strong> are placed at the level&rsquo;s corners,
                each guarded by two enemies, encouraging strategic planning.
              </>,
              <>
                <strong>When the boss receives a certain amount of damage</strong>, it generates a
                shield and summons a large wave of enemies. Players must defeat these enemies to
                remove the shield and continue attacking the boss.
              </>,
              <>
                <strong>This cycle repeats two more times</strong>, before the boss is defeated,
                delivering a climactic and satisfying challenge.
              </>,
            ]}
          />
          <Img src="/assets/media/094222_a6dcc1632af54f6ca1bf37cfdf52acaf~mv2.png" alt="Pasted Graphic 12.png" />
        </ProjectSection>

        <ProjectSection id="ui-ux" title="UI/UX Design & Implementation">
          <P>
            In this project, I utilized Unity&rsquo;s UI tools and C# scripting to implement a
            range of UI functions. Additionally, I employed the Animator to create and integrate
            UI animations, enhancing the overall user experience and visual appeal.
          </P>
          <Caption>Main Menu</Caption>
          <Gif src="/assets/media/094222_0c42e88117cc4647ae338fc6a40a1863~mv2.gif" alt="MainMenu.gif" />
          <Caption>Option Menu</Caption>
          <Gif src="/assets/media/094222_e50a00478b904129bc7fbb0c97fb5c85~mv2.gif" alt="2024-12-03 23-54-30_3.gif" />
          <Caption>Credit Screen</Caption>
          <Gif src="/assets/media/094222_3abfda15df9d420c99fc1b8943613019~mv2.gif" alt="2024-12-03 23-54-30_2.gif" />
          <Caption>Level Indicator</Caption>
          <Gif src="/assets/media/094222_63ea6563814b458ab520df57fc5f0039~mv2.gif" alt="2024-12-03 23-54-30_4.gif" />
          <Caption>Pause Menu</Caption>
          <Gif src="/assets/media/094222_ddcf34acf9eb4a3aa2c8799783c802f4~mv2.gif" alt="PauseMenu-ezgif.com-video-to-gif-converter.gif" />
        </ProjectSection>
      </ProjectContent>
    </ProjectLayout>
  )
}
