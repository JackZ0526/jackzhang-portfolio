# Portfolio visual refresh

Work is on `design/visual-refresh`. Existing game page JSX, text, media URLs, and their order are retained. `src/styles/redesign.css` is the shared visual layer, loaded after legacy page styles.

## Add a project

1. Add a record to `src/data/projects.ts`. Preserve the slug when updating an existing project so incoming links continue to work.
2. Set `kind` to `Games`, `Web Apps`, or `AI & Experiments`; use `tags` for searchable technologies and disciplines. Set `featured: true` to include it among the first three featured homepage entries. The index lists every record automatically.
3. Supply the original cover asset and alt text, title, role, description, and relevant metadata. Do not add placeholders for projects that do not yet have content.
4. Create the detail page and register its route in `src/main.tsx`. The shared `ProjectLayout` handles the case-study frame. `ProjectSection`, `P`, `Img`, `Gif`, and `Caption` can be composed in the sequence appropriate to that project; existing game pages keep their current sequence. Web and AI projects may use their own body modules rather than game-specific headings.

The category filter and search are URL-backed, so filtered views can be bookmarked. To add a new top-level category, extend the `Project.kind` union and the `categories` list in `Portfolio.tsx`.

## Appearance

The header provides System, Dark, and Light. The preference is saved under `portfolio-theme`. System mode subscribes to live OS theme changes. A small pre-render script in `index.html` sets the theme before the app renders to avoid a wrong-theme flash.

Motion uses native CSS transitions and scroll-driven reveal where supported. Reduced-motion preferences disable transitions, reveals, and smooth scrolling. Galleries support buttons, pagination, arrow keys while focused, and touch swipes, with responsive percentage-based slides.

## Local workflow

Use the existing package scripts from `app`: `npm run dev`, `npm run build`, and `npm run lint`. No additional dependencies or deployment changes are required.

## Second design pass

The original 3D hero treatment is retained. The homepage now uses an accessible project showcase: tabs select the image and its complete original description together. Panels share a grid cell so switching projects keeps the section height stable; inactive panels are inert and hidden from assistive technology.

The project archive has a discipline sidebar, search, and framed project cards. Case-study chapters now use a sticky heading rail plus a separate body column; `ProjectSection` wraps its original children without sorting, splitting, or regrouping them. About uses a profile rail and a split contact section. The navigation dock and typographic footer are shared across routes.

`ThemeMenu.tsx` replaces the native select with a custom menu. It supports System/Light/Dark preferences, arrow keys, Home/End, Escape, Tab, outside dismissal, focus restoration after selection, and live system preference changes. Styling for both appearances uses shared tokens in `redesign.css`.

## Current direction: lightness and simplicity

This supersedes the second pass's floating dock, profile rail, and typographic footer. The shared header now stays in normal document flow with no surrounding capsule, border, backdrop, or shadow. The oversized footer signature has been removed. About uses one readable column with a static profile. Contact pairs its invitation and email panel on desktop and stacks them on mobile.

Project cards and the homepage showcase have no outer panel backgrounds or frames. Images keep a small corner radius, metadata sits with the text, and hover effects are restrained. Action buttons share the Download button's subtle fill, border, and high-contrast hover treatment. The approved 3D hero treatment is retained.

Case-study quick navigation stays at the top while scrolling. Desktop chapter headings stick within their own sections below this navigation; mobile headings remain in normal flow. Image captions are centered above their original associated images or image groups, with their sequence preserved.

The nonfunctional contact form has been replaced with a compact terminal-style email panel showing `jackzhang0526@gmail.com`. The copy control writes only the email address, briefly confirms success with a check mark, and provides a manual-copy message on failure. LinkedIn remains in the footer. All other original content and media, project filtering, showcase switching, and the custom appearance menu remain available.

## Developer-lab visual pass

Navigation uses monospace labels and subtle path markers. The homepage showcase has a vertical numbered project directory, image-led detail panel, and structured type/engine/duration metadata. Its tabs support Up/Down, Left/Right, Home, and End. The project archive uses numbered horizontal entries that stack on phones. Case-study chapter titles and navigation use monospace typography with restrained numbering, while body text stays in the reading font. About uses label and content columns that stack on phones. Buttons and media share smaller corner radii; theme colors, sticky navigation, original media ordering, and the 3D hero remain intact.

## Final navigation and cover updates

The repeated galleries at the top of all four case studies have been removed. Their original media files remain available, and all article sections retain their original text/image sequence. The shared project pager displays destination titles and cycles through the four projects in index order. A small fixed back-to-top link appears after scrolling, hides at the top, and respects reduced-motion preferences.

All four project covers now use imagegen artwork based on the original project screenshots and descriptions, delivered as 1600 x 900 WebP files in `public/assets/covers`. Generation records are in `docs/cover-generation.json` and `docs/harvest-cover-generation.json`. Phase Swap retains the first generated architectural cover; subsequent character/story variants were previews only and were not applied. The approved Harvest artwork also appears in the existing 3D hero. Original screenshot assets are retained.
