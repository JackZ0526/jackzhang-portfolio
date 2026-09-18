# Portfolio maintenance

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

