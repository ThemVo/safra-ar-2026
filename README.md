# SAFRA Annual Report FY2025/26 — Key Highlights (Vite + React)

The scroll-driven key-highlights experience, from the SAFRA logo masthead through to the
"One year. Many connections." closing, as a Vite + React app. All copy is live text and
all icons are inline SVG.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build
```

Deep links: `?view=6` (or any label from `START_VIEWS`, e.g. `?view=13`) opens at a
section; `?final=1` shows every animation in its end state.

## Structure

```
index.html                    Google Sans / Google Sans Flex font links
public/assets/                photos, cursors, logo art (served as /assets/…)
src/main.jsx                  mounts <App />
src/App.jsx                   selects and scales the layout to the viewport
src/styles/app.css            page/stage styles
src/styles/mobile.css         mobile layout, native content scrollers and animation geometry
src/artboard/Artboard.jsx     shared animation host
src/artboard/template.jsx     desktop markup (1440×900)
src/artboard/templateMobile.jsx mobile masthead, shared gallery and menu
src/artboard/MobileSections.jsx glance panels and the five topic cards
src/artboard/MobileStories.jsx responsive collages for all fourteen stories
src/artboard/MobileRewards.jsx membership categories using desktop content and icons
src/artboard/MobileFacilities.jsx clubs and facilities
src/artboard/MobileEnding.jsx transition and closing content
src/artboard/ArtboardLogic.js navigation state machine, camera, story timelines,
                              hover effects, layout measuring; content data
                              (stories, galleries, tabs) is at the top of the file
src/artboard/artboard.css     all artboard styles and animations
```

`Artboard` extends `ArtboardLogic` (a `React.Component`). `renderVals()` turns state into
the class names, positions and handlers the JSX reads from `v`.

## Sections (scroll order)

1. SAFRA logo → masthead
2. AGM 2026 countdown
3. At a glance
4. Statement + three topic cards (hover: section photos, tap: open topic)
5. Bringing defence closer to the community (4 stories) → Appreciating NSmen →
   Strengthening bonds (scrolling runs straight through; skip buttons jump ahead)
6. "& beyond National Service…" statement (follow cursor: Scroll for more)
7. Membership, made more rewarding
8. Our year in summary
9. "The year may be over. Our work continues."
10. What's next for SAFRA
11. One year. Many connections. One shared purpose. (download CTA)

Story photos open a gallery (VIEW ALL cursor).

## Still to supply

- Content for the hidden What's Next tabs "Creating better spaces" / "Making visits seamless".
- Link for the "Download full 2025/26 annual report" button (`.dlb` in Artboard.jsx).
- Higher-resolution originals for some photos.

## Notes

- `index.html` includes an English report summary, semantic headings and SEO/social
  descriptions before the entry script. Keep this summary aligned with published
  page content when copy or figures change. The summary is a `<noscript>` fallback:
  it appears only when JavaScript is disabled and never flashes during normal load.
  It is not a substitute for indexable content in the JavaScript-rendered page;
  Googlebot can execute JavaScript. Metadata remains in the document head.
- The build keeps the module entry at the end of the body, after the report content.
- No `<React.StrictMode>`: its dev-only double mount would start the timers twice.
- Responsive layouts: desktop at 768px and above (1440×900 artboard), mobile below 768px, using the actual viewport width and height without scaling the whole page. Mobile screens reflow when the browser resizes; long content scrolls inside its screen before the next swipe advances.
- Layout selection is automatic; saved preview choices and the former desktop-only flag are no longer used.
- Both layouts share the navigation, animation timing, counters and story engine. Mobile uses shorter text reveals and swipe navigation; desktop supports wheel navigation and hover effects.

## Build asset paths

Set URL prefixes in `.env`, `.env.uat`, or `.env.prod` before running
`npm run build`, `npm run build:u`, or `npm run build:p` respectively:

```dotenv
URL_IMAGE="./"
URL_SVG="./"
URL_CSS="./"
URL_JS="./"
URL_PDF="https://example.com/annual-report.pdf"
```

These prefixes apply to images/videos (including story galleries), SVGs
(including CSS cursors), stylesheets, and JavaScript respectively. `URL_PDF`
sets the full download link. Only the filename is appended to each prefix;
no `assets/` folder is added. For example, `URL_IMAGE="/media/photos"` produces
`/media/photos/mh-tr.jpg`. Any `assets` segment explicitly set in an env value
is preserved.

Build files are written into `dist/`, with `index.html` at the root:

- `npm run build:u`: all images, videos, SVGs, CSS, and JS go into `assets/`.
- `npm run build:p`: SVGs go into `icons/`, images/videos into `imags/`,
  and CSS/JS into `assets/`.
- `npm run build`: files stay at the root for the default local build.

Files from `public/assets/` follow the same rules. URL prefixes in env are the
final hosting directories; output folder names are not appended again.
The default `./` prefixes
support hosting the build in a subdirectory. For remote prefixes, upload each
file to the corresponding configured location. Development continues to serve
the source images at `/assets/…`.

## Mobile handover (12 Nov 2026)

The mobile layout follows the “Mobile - 12 Nov 2026” section of the handover.
The five topic cards open their own pages; their back buttons return to the cards.
The main scroll continues from the cards into the transition and closing content.
All 4 defence, 4 NSmen and 6 Strengthening Bonds stories support deep links,
animated counters, photo galleries and the supplied video clips. Short viewports
scroll inside their screen before another gesture advances the story.

Photos use original gallery files and per-slot Figma crop percentages rather than
reusing desktop portrait crops. Icon artwork and membership category content
are reused from desktop.
