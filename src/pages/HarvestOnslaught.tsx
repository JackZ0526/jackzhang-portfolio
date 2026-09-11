import { ProjectContent, ProjectSection, Caption, P, Img, Gif } from '../components/ProjectContent'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import ProjectPager from '../components/ProjectPager'
import Sidenav from '../components/Sidenav'
import './HarvestOnslaught.css'

// Section jump tabs rendered as a fixed right-anchored overlay (matches the original Wix side nav).
const TABS = [
  { id: 'level-design', label: 'Level Design' },
  { id: 'gaea', label: 'Gaea' },
  { id: 'blueprint', label: 'Blueprint Scripting' },
  { id: 'destructive', label: 'Destructive Environment' },
  { id: 'niagara', label: 'Niagara Effects' },
]

export default function HarvestOnslaught() {
  useDocumentTitle('Harvest Onslaught')

  return (
    <div className="harvest-page">
      <header className="harvest-hero">
        <div className="harvest-hero__inner">
          <h1 className="harvest-hero__title">Harvest Onslaught</h1>
          <hr className="harvest-hero__divider" />
          <div className="harvest-hero__meta">
            <div className="harvest-hero__meta-col harvest-hero__meta-col--left">
              <p className="harvest-hero__label">ROLE</p>
              <p className="harvest-hero__value">Level Designer / Game Designer</p>
              <p className="harvest-hero__label">DESCRIPTION</p>
              <p className="harvest-hero__value">
                <strong>Harvest Onslaught</strong> is a{' '}
                <strong>third-person mech horde shooter</strong> where you play as a former
                engineer-turned-farmer on Planet B-610. Armed with your self-built combat mech,
                ISO, you must defend your farm and family from relentless alien insect swarms
                (the Xylothraks). Fight, repair, and survive as you battle enemies while
                scavenging parts to fix your generator and{' '}
                <strong>restore the protective energy barrier</strong> that keeps the aliens out.
              </p>
            </div>
            <div className="harvest-hero__meta-col harvest-hero__meta-col--mid">
              <p className="harvest-hero__label">Development Time</p>
              <p className="harvest-hero__value">6 months</p>
              <p className="harvest-hero__label">GENRE</p>
              <p className="harvest-hero__value">Third-person shooter</p>
              <p className="harvest-hero__label">Engine</p>
              <p className="harvest-hero__value">Unreal Engine 5.4</p>
              <a
                href="https://vfs-gdpg.itch.io/harvest-onslaught"
                target="_blank"
                rel="noopener noreferrer"
                className="harvest-hero__download"
              >
                DOWNLOAD
              </a>
            </div>
          </div>
        </div>

      </header>

      {/* Floating right-anchored section nav — matches the original Wix side nav. */}
      <Sidenav tabs={TABS} />

      <ProjectContent>
        <ProjectSection id="level-design" title="Level Design">
          <P lh="normal">
            In Harvest Onslaught, I designed a farm-themed, outdoor level with
            an open aesthetic while adhering to time constraints and a linear
            gameplay flow. To balance these needs, I focused on subtle player
            guidance techniques to ensure the experience felt natural and
            engaging.
          </P>
          <Img src="/assets/media/094222_3a6aedcc6557445e958d3e5e41a89139~mv2.png" alt="Frame 7.png" />
          <P lh="normal">
            Inspired by Disneyland's design philosophy, I placed the
            primary objective&mdash;a generator&mdash;at the map's center
            and highest point. This ensured the goal was always visible,
            allowing players to orient themselves intuitively. The gameplay flow
            revolved around this focal point in a circular path, minimizing
            backtracking and creating the illusion of a larger map, which
            reduced player fatigue and enhanced immersion.
          </P>
          <Img src="/assets/media/094222_3b6720add1dd4cb5acfc0f9b4da61050~mv2.png" alt="Frame 8.png" />
          <P lh="normal">
            To further guide the player without making restrictions feel
            forced, I used natural barriers like rivers, forests, and mountains,
            alongside one-way paths such as cliffs and broken bridges. These
            elements shaped the gameplay flow while ensuring players
            experienced all designed sequences. Additionally, I incorporated
            two obstacles tied to Commander encounters, which gated progression
            and provided meaningful challenges.
          </P>
          <Gif src="/assets/media/094222_bd5730ead5dd4561b67fd9f77c22a52d~mv2.gif" alt="BridgeblockerDissolve-ezgif.com-video-to-gif-converter.gif" />
          <P lh="normal">
            One key moment involved a broken bridge visible after the first
            Commander encounter, hinting at future traversal options. While
            players initially had to take an alternate route to reach the
            generator&mdash;encountering a second Commander and an avalanche
            event along the way&mdash;the broken bridge later served as a
            shortcut for backtracking. It also indicated that the cliff ahead
            could similarly be used as a shortcut for returning to earlier
            areas. This dual-purpose design not only reinforced the linear flow
            but also encouraged exploration and rewarded players with a more
            efficient route upon completing their objectives.
          </P>
          <Img src="/assets/media/094222_243b3f8f57b74fee967e8e3e15f4d80b~mv2.png" alt="Frame 9.png" />
          <P lh="normal">
            This level design showcases my ability to combine thoughtful
            guidance, environmental storytelling, and creative problem-solving
            to craft an engaging and seamless player experience.
          </P>
        </ProjectSection>

        <ProjectSection id="gaea" title="Gaea - Unreal">
          <P>
            In Harvest Onslaught, I utilized Unreal Engine's Landscape
            tool to create the foundational structure of the outdoor level.
            While hand-sculpting terrain offers precise control for level design
            needs, it can appear artificial and detract from the immersive
            experience. To address this, I combined the Landscape tool with
            Gaea&rsquo;s procedural generation capabilities to produce realistic
            yet controllable terrain that enhanced visual fidelity while meeting
            gameplay requirements.
          </P>
          <Img src="/assets/media/094222_99e48756eb5b4da1881a2f6098bed727~mv2.png" alt="Screenshot 2024-12-02 175440.png" />
          <P>
            Gaea proved invaluable for crafting natural-looking landscapes
            through its flexible node-based system, allowing me to achieve
            lifelike effects by fine-tuning parameters. However, integrating
            Gaea with Unreal Engine presented several challenges. For instance,
            procedural adjustments in Gaea sometimes altered the level
            design&rsquo;s intent&mdash;such as turning an impassable mountain
            into a navigable hill. To mitigate this, I rigorously tested and
            adjusted parameters in Gaea, followed by fine-tuning the terrain in
            Unreal Engine using the Landscape tool.
          </P>
          <P>
            Another significant issue involved pipeline compatibility between
            Gaea and Unreal. The heightmap exported via Gaea&rsquo;s Unreal
            output node caused Z-axis stretching error when imported into
            Unreal, resulting in distorted materials and improper displacement
            mapping, especially with Nanite assets. Despite a lack of available
            resources or solutions online, I resolved this through persistent
            experimentation. Ultimately, I identified the issue as a problem with
            Gaea&rsquo;s Unreal output node and successfully fixed it by
            switching to a different output node, restoring the terrain to its
            intended scale and material fidelity.
          </P>
          <Img src="/assets/media/Screenshot 2024-12-02 200754_edited.png" alt="Screenshot 2024-12-02 200754_edited.png" />
          <P>
            This experience highlights my problem-solving skills, adaptability,
            and commitment to maintaining both gameplay integrity and visual
            quality in game environments.
          </P>
        </ProjectSection>

        <ProjectSection id="blueprint" title="Blueprint Scripting">
          <P>
            As a level designer, I am responsible for using blueprints to
            implement most of the scripted events and some of the gameplay
            functionalities. Including:
          </P>
          <Caption>Boss Encounters</Caption>
          <Img src="/assets/media/094222_34a4609751ab4fa28ef0c1aa141a0e91~mv2.png" alt="image.png" />
          <Caption>Cinematic events</Caption>
          <Img src="/assets/media/094222_c3dff0b5643f44eeb25d7f068e5e2cf0~mv2.png" alt="image.png" />
          <Caption>Cutscene skipping functionality</Caption>
          <Img src="/assets/media/094222_464077cf97384b47ad9d95aa42767fba~mv2.png" alt="image.png" />
          <Caption>Scripted Events</Caption>
          <Img src="/assets/media/094222_a112c9951517477f8a0391e67dc1e634~mv2.png" alt="image.png" />
          <Caption>Unloading irrelevant sublevels and triggering final encounter</Caption>
          <Img src="/assets/media/094222_99ac055e3cec4b00aec4c0951ecd37c5~mv2.png" alt="image.png" />
          <Caption>Drown Damage</Caption>
          <Img src="/assets/media/094222_c0d9ca191c1e40a4ae1b75ca17954c21~mv2.png" alt="image.png" />
        </ProjectSection>

        <ProjectSection id="destructive" title="Destructible Environment">
          <P>
            To emphasize the mech's heavy, powerful feel and align with
            our "unstoppable" design pillar, I made most in-game
            props destructible. This includes fences, gates, wooden crates,
            buildings, falling rocks, and more. Even certain enemies explode
            and break apart upon death, reinforcing the brutality of the
            mech's impact. The Procedural Content Generation Framework
            was also utilized to increase efficiency in deploying fences.
          </P>
          <Img src="/assets/media/094222_8e5a994dd3594d7a97955d20a5c3a631~mv2.png" alt="image.png" />
          <Img src="/assets/media/image_edited.jpg" alt="image_edited.jpg" />
          <P>
            I utilized Unreal Engine's Chaos Destruction system to
            implement these destructibles. Using the Fracture Tool, I divided
            static meshes into an appropriate number of pieces, then I used an
            anchor field to anchor the Geometry Collection containing the
            fragments. A master field was then configured and spawned to trigger
            breaks dynamically, such as when bullets collide with objects, the
            mech crashes through obstacles, or explosions occur.
          </P>
          <Img src="/assets/media/094222_3d651c5d0ceb433a9922bc764fe77ccb~mv2.png" alt="image.png" />
          <P>
            To have better control over when to break, I added the second-level
            bones and adjusted their trigger parameters within the geometry
            collection. For instance, when rocks fall in-game, the initial
            explosion breaks the rock collection into individual rocks, while
            subsequent player attacks break them further into smaller pieces.
            Additionally, I adjusted the velocity and torque generated by the
            master field to control the pieces&rsquo; initial movement,
            ensuring dynamic and visually impactful destruction.
          </P>
          <Gif src="/assets/media/094222_286c55cd68c346a29c8e5a4bd305f805~mv2.gif" alt="Untitledvideo1-ezgif.com-video-to-gif-converter (1).gif" />
          <P>
            For enemy deaths involving explosions, I retained the original
            static meshes for compatibility with pre-existing code, removing
            them only after generating the master field. To further enhance
            immersion, I integrated dissolution effects during debris removal,
            because players tend to care more about the enemy than the
            environment.
          </P>
          <Img src="/assets/media/094222_cb6a6bcc62a9408691effe4510662073~mv2.png" alt="image.png" />
          <Gif src="/assets/media/094222_fa69f5a134d243e5b002d2f02a25ec37~mv2.gif" alt="Untitledvideo2-ezgif.com-video-to-gif-converter.gif" />
          <P>
            To optimize performance, I disabled debris collisions after objects
            break and implemented aggressive automatic removal timers. For
            props in larger quantities, like fences or falling rocks, I
            employed manual removal or customized removal logic to minimize
            performance impact while maintaining visual fidelity.
          </P>
          <Img src="/assets/media/094222_a12acfaccfec43699deed0ac350c4af6~mv2.png" alt="image.png" />
          <Img src="/assets/media/094222_81ec66d834c74dd18a009dc67bbac036~mv2.png" alt="image.png" />
        </ProjectSection>

        <ProjectSection id="niagara" title="Niagara Effects">
          <P>
            To provide players with better visual feedback, I utilized Unreal
            Engine's Niagara System to create various VFX elements for
            our game, including particle effects and flipbook animations. The
            fire effects in the flipbook were simulated and exported using
            EmberGen, ensuring high-quality and visually immersive results.
          </P>
          <Caption>Beam</Caption>
          <Gif src="/assets/media/094222_fc3b2f4d10d24546a6385e0b22482e37~mv2.gif" alt="Beam.gif" />
          <Caption>Shockwave, Stomp Effects &amp; Material</Caption>
          <Gif src="/assets/media/094222_48d63ba03caa4d98bef1b369a0f90926~mv2.gif" alt="ShockwaveEffect-ezgif.com-video-to-gif-converter.gif" />
          <Gif src="/assets/media/094222_bc866a50a89b40e1832279df76722d08~mv2.gif" alt="Stomp.gif" />
          <Gif src="/assets/media/094222_2bc6036248cd4bcd921cc136d226162a~mv2.gif" alt="ShockwaveMaterial-ezgif.com-video-to-gif-converter.gif" />
          <Caption>Blood Splatter Effects &amp; Material</Caption>
          <Gif src="/assets/media/094222_33699d021042402e8ea974a862ea979a~mv2.gif" alt="BloodSplatter.gif" />
          <Img src="/assets/media/094222_b08e2cb705f44ea99d789d1661ff6d3a~mv2.png" alt="image.png" />
          <Caption>Heal Transfer Effects, Dissolve Material &amp; Blueprint</Caption>
          <Gif src="/assets/media/094222_0fb624e54d44405790fb6e40a34c1cf2~mv2.gif" alt="HealTransfer.gif" />
          <Img src="/assets/media/094222_9ab54d43949e44aaa95c93308e60739a~mv2.png" alt="image.png" />
          <Img src="/assets/media/094222_930263beffd14ca5935013ba985f08ad~mv2.png" alt="image.png" />
          <Img src="/assets/media/094222_62e21f9c7e834a39bca4f628574a8640~mv2.png" alt="image.png" />
          <Caption>Emerge Effect</Caption>
          <Gif src="/assets/media/094222_6cdfb7fa12f9460fb4fc800094dba067~mv2.gif" alt="Emerge.gif" />
          <Caption>Blown Away Effect</Caption>
          <Gif src="/assets/media/094222_0d558ac9495a48358f81941655fab28a~mv2.gif" alt="BlownAway.gif" />
          <Caption>Swarm</Caption>
          <Gif src="/assets/media/094222_bd0d738e836d42db918ad1c3e5e4d445~mv2.gif" alt="Swarm.gif" />
          <Caption>Fire</Caption>
          <Gif src="/assets/media/094222_809047af47924fbc891ca4c393d43f77~mv2.gif" alt="FireInGame.gif" />
          <Caption>Explosion</Caption>
          <Gif src="/assets/media/094222_c3c4953b01ae443d8ac2676ba5ac68df~mv2.gif" alt="Explosion.gif" />
        </ProjectSection>
      </ProjectContent>

      <ProjectPager prevHref="/paris-tour" nextHref="/breakneck-battle-tank" />
    </div>
  )
}
