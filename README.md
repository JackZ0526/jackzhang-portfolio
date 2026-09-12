# Jack Zhang — Portfolio

A personal portfolio spanning game and level design, web apps, and AI experiments.
Originally built in Wix, the site has been rebuilt as a standalone React application
with a lightweight visual style, responsive layouts and dark/light themes.

The homepage presents three curated projects. The project library holds the full
collection, with case studies describing the work, decisions and individual
contributions behind each project.

## What's inside

- Game design case studies: Harvest Onslaught, Breakneck Battle Tank,
  Tale of Nexus: The True Guardian, and Phase Swap Demo.
- Paris Tour: collaborative travel planning, AI itinerary editing, visual design
  and motion, with real application screenshots.
- Board Game AI: GomokuAI and XiangqiAI, presented as one series with development
  decisions, real browser captures and recorded training charts.
- A searchable library with Games, Web Apps, and AI & Experiments filters.
- System, dark and light appearance settings, with a saved preference.
- A 3D-style featured project, sticky case-study navigation and section headings,
  and a back-to-top control. Motion respects reduced-motion preferences.
- About and contact information, including a copyable email address.

## Run locally

Use Node.js 24 and pnpm. Run commands from the repository root—the directory
containing `package.json` and `pnpm-lock.yaml`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Vite normally serves the site at `http://127.0.0.1:5173`. If that port is occupied,
check the terminal for the selected port.

```sh
pnpm build     # Type-check and create the production build in dist/
pnpm preview   # Serve the production build locally, normally on port 4173
pnpm lint      # Run Oxlint
```

The portfolio itself requires no API keys or backend service. The contact section
copies an email address; it does not submit a form or send messages. The featured
web and AI applications are separate projects, and their servers and model weights
are not required to run this site.

## Structure

```text
src/
  main.tsx                 Routes and application entry point
  data/projects.ts         Project metadata, ordering and homepage selections
  pages/                   Homepage, library, About and case studies
  components/              Shared navigation, cards, layouts and controls
  styles/                  Shared styles, fonts and visual overrides
public/
  assets/                  Project media, covers and training-chart snapshots
  fonts/                   Local font assets
docs/                      Case-study sources and image-generation records
scripts/
  render-board-ai-charts.py  Regenerate Board Game AI charts from saved CSVs
```

Built with React, TypeScript, Vite, React Router and Lucide icons. Shared visual
overrides live in `src/styles/redesign.css`, loaded after the page styles.

## Maintain and expand the portfolio

### Add a project

1. Add a record to `src/data/projects.ts`, including a stable slug, category
   (`kind`), title, role, description, search tags, cover and meaningful alt text.
2. Put project assets under a dedicated folder in `public/assets/`. Reference them
   from the site as `/assets/...`.
3. Create a case-study page in `src/pages/` and register its route in `src/main.tsx`.
4. Use the shared case-study components where appropriate. Each `ProjectSection`
   keeps its heading and related content together; section IDs must match its
   `Sidenav` links.
5. Update the affected previous/next links. Current case-study pages pass explicit
   destinations to `ProjectPager`; changing project metadata alone does not update
   those links.
6. Check desktop and mobile layouts, both themes, navigation and image loading,
   then run `pnpm build`.

The library lists project records automatically. Homepage selections are maintained
separately in the `featuredProjects` slug list in `src/data/projects.ts`; keep that
selection to three representative projects. To introduce a new category, update
both the `Project.kind` type and the category list in `src/pages/Portfolio.tsx`.

The homepage hero currently features Harvest Onslaught explicitly in
`src/components/HomeHero.tsx`. It is independent of the selected-work tabs.
Board Game AI uses `src/components/BoardAICover.tsx` to compose two real interface
captures for its cover; other project cards use their configured cover image.

### Update introductions and media

- Homepage introduction: `src/components/HomeHero.tsx`.
- About introduction and contact information: `src/pages/About.tsx`.
- Card descriptions and contribution labels: `src/data/projects.ts`.
- Detailed project narratives: the corresponding files in `src/pages/`.

Keep each image paired with the paragraph or caption it explains. In the original
game articles, text and images have a deliberate sequence; do not regroup media
independently of the associated text. Preserve existing slugs when revising content
so incoming links continue to work.

### Regenerate training charts

The Board Game AI charts use committed CSV snapshots, not live training sessions.
With Python, matplotlib and Pillow available:

```sh
python scripts/render-board-ai-charts.py
```

This regenerates desktop/mobile and dark/light chart assets. It does not train a
model or require either AI project's repository. Training loss and internal model
comparisons should not be presented as public ratings or calibrated win probabilities.

## Contribution and asset context

My work spans game design, project direction, experiment design and UX iteration.
Contribution descriptions are specific to each case study. For the Board Game AI
series, all implementation code was produced by coding agents; my work focused on
defining goals, guiding experiments, reviewing results and improving the experience
through playtesting. The portfolio website is also developed with coding-agent
assistance.

Application screenshots document the actual interfaces. Some project covers use
generated artwork; generation records and case-study source notes are kept in
`docs/`. The Board Game AI cover uses real screenshots. Earlier cover iterations
may remain in the asset directory without being displayed.

See the [Paris Tour notes](docs/paris-tour-case-study.md) and
[Board Game AI notes](docs/board-game-ai-case-study.md) for capture provenance and
the scope of the reported results. [VISUAL-REFRESH.md](VISUAL-REFRESH.md) records
earlier design iterations; this README describes the current maintenance workflow.

## Deployment

Publish the contents of `dist/` after running `pnpm build`. The repository includes
`vercel.json` with a single-page-app rewrite so direct visits to case-study routes
resolve through the application entry point. On another static host, configure an
equivalent fallback to `index.html` while continuing to serve static assets normally.

`pnpm preview` is for checking the build locally. Local Vercel linkage in `.vercel/`
is ignored by Git and is not needed to develop the site.
