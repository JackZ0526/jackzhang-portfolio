// Project metadata, kept identical to jackzhang.ca wording.

export type Project = {
  slug: string
  number: string // '01' | '02' | '03'
  category: string // horizontal label (e.g. THIRD PERSON SHOOTER)
  title: string
  titleLines?: string[] // optional explicit line breaks in title
  role: string
  description: string
  cover: string
  href: string
  genre: string
  engine: string
  devTime: string
  downloadHref?: string
  downloadLabel?: string
  altCover: string
  boldPhrases?: string[]
}

export const projects: Project[] = [
  {
    slug: 'harvest-onslaught',
    number: '01',
    category: 'THIRD PERSON SHOOTER',
    title: 'Harvest Onslaught',
    role: 'Level Designer / Game Designer',
    description:
      'Harvest Onslaught is a third-person mech horde shooter where you play as a former engineer-turned-farmer on Planet B-610. Armed with your self-built combat mech, ISO, you must defend your farm and family from relentless alien insect swarms (the Xylothraks). Fight, repair, and survive as you battle enemies while scavenging parts to fix your generator and restore the protective energy barrier that keeps the aliens out.',
    cover: '/assets/media/094222_856f532c1ef74124a143c5fa34fb6e55~mv2.jpg',
    href: 'https://vfs-gdpg.itch.io/harvest-onslaught',
    genre: 'Third-person shooter',
    engine: 'Unreal Engine 5.4',
    devTime: '6 months',
    downloadHref: 'https://vfs-gdpg.itch.io/harvest-onslaught',
    downloadLabel: 'DOWNLOAD',
    altCover: 'HarvestOnslaught_CoverImage.jpg',
    boldPhrases: ['third-person mech horde shooter', 'restore the protective energy barrier'],
  },
  {
    slug: 'breakneck-battle-tank',
    number: '02',
    category: 'QUEST',
    title: 'Breakneck Battle Tank',
    role: 'Level Designer / Game Designer',
    description:
      'Breakneck Battle Tank (BBT) is a single-player, toy-themed, 3D top-down arcade shooter. Players control the last surviving toy tank from their squad, battling waves of enemy tanks across multiple stages to defeat the enemy boss. Adding urgency, the tank\u0027s core engine is unstable due to prior battle damage, creating a race against time. Players must destroy enemies to collect repair packs that extend survival while utilizing power-ups like movement boosts and shields to enhance their chances. Strategic gameplay is key\u2014balancing offense, survival, and time management. If the engine becomes unstable, the mission ends in failure.',
    cover: '/assets/media/094222_f6465ff83bda4edca2c7010b06f595af~mv2.png',
    href: '/breakneck-battle-tank',
    genre: '3D top-down arcade shooter',
    engine: 'Unity',
    devTime: '2 months',
    altCover: 'BREAKNECK.png',
    boldPhrases: ['3D top-down arcade shooter', 'defeat the enemy boss', 'race against time'],
  },
  {
    slug: 'taleofnexus-thetrueguardian',
    number: '03',
    category: 'CASUAL GAME',
    title: 'Tale of Nexus:',
    titleLines: ['Tale of Nexus:', 'The True Guardian'],
    role: 'Level Designer',
    description:
      'Tale of Nexus: The True Guardian is an 3rd person action-adventure fantasy game where players embody Jupiter, a warrior tasked with restoring balance to Nexus, an interdimensional hub linking the Ground and Sky realms. To save Nexus from collapse, players must recover two mythological artifacts: the Gram sword and Apollo\u2019s Golden Bow, each hidden in unique, treacherous environments. Starting unarmed, players will navigate challenges such as stealth and platforming while battling realm-specific enemies. Once both artifacts are returned to Nexus, their combined power will restore harmony to the realms and secure Nexus\u2019s future.',
    cover: '/assets/media/094222_8dc317ca95354ff3810816ba1aa41db2~mv2.png',
    href: '/taleofnexus-thetrueguardian',
    genre: 'Third-person Fantasy Action-Adventure',
    engine: 'Unreal Engine 5',
    devTime: '2 months',
    altCover: 'HighresScreenshot00002.png',
    boldPhrases: ['3rd person action-adventure fantasy', 'recover two mythological artifacts', 'restore harmony to the realms'],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

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
