// Original game copy is preserved; new projects are added here as the portfolio grows.

export type Project = {
  kind?: 'Games' | 'Web Apps' | 'AI & Experiments'
  tags?: string[]
  slug: string
  number: string // '01' | '02' | '03'
  category: string // horizontal label (e.g. THIRD PERSON SHOOTER)
  title: string
  titleLines?: string[] // optional explicit line breaks in title
  role: string
  description: string
  cover: string
  coverFit?: 'cover' | 'contain'
  href: string
  genre: string
  engine: string
  devTime: string
  downloadHref?: string
  downloadLabel?: string
  altCover: string
  boldPhrases?: string[]
  status?: string
}

export const projects: Project[] = [
  {
    slug: 'harvest-onslaught',
    kind: 'Games',
    tags: ['Level Design', 'Blueprint'],
    number: '01',
    category: 'THIRD PERSON SHOOTER',
    title: 'Harvest Onslaught',
    role: 'Level Designer / Game Designer',
    description:
      'Harvest Onslaught is a third-person mech horde shooter where you play as a former engineer-turned-farmer on Planet B-610. Armed with your self-built combat mech, ISO, you must defend your farm and family from relentless alien insect swarms (the Xylothraks). Fight, repair, and survive as you battle enemies while scavenging parts to fix your generator and restore the protective energy barrier that keeps the aliens out.',
    cover: '/assets/covers/harvest-onslaught.webp',
    href: 'https://vfs-gdpg.itch.io/harvest-onslaught',
    genre: 'Third-person shooter',
    engine: 'Unreal Engine 5.4',
    devTime: '6 months',
    downloadHref: 'https://vfs-gdpg.itch.io/harvest-onslaught',
    downloadLabel: 'DOWNLOAD',
    altCover: 'Harvest Onslaught cover: yellow combat mech defending a farm against an alien insect swarm',
    boldPhrases: ['third-person mech horde shooter', 'restore the protective energy barrier'],
  },
  {
    slug: 'breakneck-battle-tank',
    kind: 'Games',
    tags: ['Level Design', 'C#'],
    number: '02',
    category: 'QUEST',
    title: 'Breakneck Battle Tank',
    role: 'Level Designer / Game Designer',
    description:
      'Breakneck Battle Tank (BBT) is a single-player, toy-themed, 3D top-down arcade shooter. Players control the last surviving toy tank from their squad, battling waves of enemy tanks across multiple stages to defeat the enemy boss. Adding urgency, the tank\u0027s core engine is unstable due to prior battle damage, creating a race against time. Players must destroy enemies to collect repair packs that extend survival while utilizing power-ups like movement boosts and shields to enhance their chances. Strategic gameplay is key\u2014balancing offense, survival, and time management. If the engine becomes unstable, the mission ends in failure.',
    cover: '/assets/covers/breakneck-battle-tank.webp',
    href: '/breakneck-battle-tank',
    genre: '3D top-down arcade shooter',
    engine: 'Unity',
    devTime: '2 months',
    altCover: 'Breakneck Battle Tank cover: green toy tank battling across a tabletop arena',
    boldPhrases: ['3D top-down arcade shooter', 'defeat the enemy boss', 'race against time'],
  },
  {
    slug: 'taleofnexus-thetrueguardian',
    kind: 'Games',
    tags: ['Level Design', 'Blueprint'],
    number: '03',
    category: 'CASUAL GAME',
    title: 'Tale of Nexus:',
    titleLines: ['Tale of Nexus:', 'The True Guardian'],
    role: 'Level Designer',
    description:
      'Tale of Nexus: The True Guardian is an 3rd person action-adventure fantasy game where players embody Jupiter, a warrior tasked with restoring balance to Nexus, an interdimensional hub linking the Ground and Sky realms. To save Nexus from collapse, players must recover two mythological artifacts: the Gram sword and Apollo\u2019s Golden Bow, each hidden in unique, treacherous environments. Starting unarmed, players will navigate challenges such as stealth and platforming while battling realm-specific enemies. Once both artifacts are returned to Nexus, their combined power will restore harmony to the realms and secure Nexus\u2019s future.',
    cover: '/assets/covers/tale-of-nexus.webp',
    href: '/taleofnexus-thetrueguardian',
    genre: 'Third-person Fantasy Action-Adventure',
    engine: 'Unreal Engine 5',
    devTime: '2 months',
    altCover: 'Tale of Nexus: The True Guardian cover featuring a snowy stone portal and stairs into the sky',
    boldPhrases: ['3rd person action-adventure fantasy', 'recover two mythological artifacts', 'restore harmony to the realms'],
  },
  {
    slug: 'phase-swap-demo',
    number: '04',
    kind: 'Games',
    tags: ['Level Design', 'Whiteboxing'],
    category: 'Third-person Puzzle Adventure',
    title: 'Phase Swap Demo',
    role: 'Solo Demo',
    description: 'Phase Swap is a third-person puzzle adventure set in a quantum laboratory after a massive explosion destabilizes reality. Certain objects now exist in an unstable state, shifting between ghost-like intangibility and solid physical form. As a survivor altered by the blast, the player gains the ability to swap phases with these objects, using this power to solve spatial puzzles and navigate the facility. Walls and stable structures remain unchanged, forcing players to think strategically about what can and cannot be manipulated. Along the way, the protagonist encounters former colleagues driven insane by the accident, and must rely on phase control rather than violence to restrain enemies and escape the lab.',
    cover: '/assets/covers/phase-swap-demo.webp',
    href: '/phase-swap-demo',
    genre: 'Third-person Puzzle Adventure',
    engine: 'Unreal Engine 5.7',
    devTime: '14 Days Quick Demo Whiteboxing',
    altCover: 'Phase Swap Demo cover: translucent cyan and solid magenta platforms in a graybox laboratory',
  },
  {
    slug: 'paris-tour',
    number: '05',
    kind: 'Web Apps',
    tags: ['React', 'TypeScript', 'AI', 'Supabase', 'UI / UX', 'Collaboration'],
    category: 'AI TRAVEL PLANNER',
    title: 'Paris Tour',
    role: 'Product Design / Development',
    description: 'Built from my own travel-planning needs, Paris Tour brings a shared itinerary, interactive map and AI assistant into one workspace. Travel companions can plan together, rearrange daily stops and keep their changes in sync. Currently focused on Paris, with more destinations planned.',
    cover: '/assets/paris-tour/cover-designed.webp',
    coverFit: 'contain',
    href: 'https://paristour.vercel.app',
    genre: 'Collaborative travel planning',
    engine: 'React / TypeScript',
    devTime: 'Personal project',
    status: 'Ongoing',
    altCover: 'Paris Tour designed cover featuring the trip-planning interface against a softly lit Paris backdrop',
  },
  {
    slug: 'board-game-ai',
    number: '06',
    kind: 'AI & Experiments',
    tags: ['GomokuAI', 'XiangqiAI', 'Python', 'PyTorch', 'C++', 'MCTS', 'Reinforcement Learning'],
    category: 'SELF-PLAY & REINFORCEMENT LEARNING',
    title: 'Board Game AI',
    role: 'Project Direction · Experiment Design · UX Iteration',
    description: 'A personal GomokuAI and XiangqiAI series led through coding agents. I defined goals, guided experiments and shaped the playable experience through training reviews and playtesting. All implementation code was produced by coding agents.',
    cover: '/assets/board-game-ai/gomoku-web.webp',
    coverFit: 'contain',
    href: '/board-game-ai',
    genre: 'Board game AI research',
    engine: 'Python / PyTorch / C++',
    devTime: 'Personal series',
    status: 'Ongoing experiments',
    altCover: 'Actual GomokuAI browser interface with the board, trained neural model and search controls',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

// Curated independently from the library. Replace a selection as new work is
// added; keep the homepage limited to three representative projects.
export const featuredProjects = [
  'harvest-onslaught',
  'paris-tour',
  'board-game-ai',
].slice(0, 3).map(getProject).filter((project): project is Project => Boolean(project))

export function getNextProject(slug: string): Project | undefined {
  const idx = projects.findIndex((p) => p.slug === slug)
  if (idx < 0) return undefined
  return projects[(idx + 1) % projects.length]
}

export function getPrevProject(slug: string): Project | undefined {
  const idx = projects.findIndex((p) => p.slug === slug)
  if (idx < 0) return undefined
  return projects[(idx - 1 + projects.length) % projects.length]
}
