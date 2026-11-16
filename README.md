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
src/artboard/templateMobile.jsx responsive fixed screens, shared desktop content, menu and gallery
src/artboard/MobileGlance.jsx   mobile glance card artwork with shared live counters
src/artboard/ArtboardLogic.js navigation state machine, camera, story timelines,
                              hover effects, layout measuring; content data
                              (stories, galleries, tabs) is at the top of the file
src/styles/artboard.css     all artboard styles and animations
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
- Responsive layouts: mobile below 970px, desktop at 970px and above. Width alone selects the layout, including tablets and narrow desktop windows.
- Desktop keeps its 1440×900 artboard. Mobile uses the actual viewport and fits each screen into a fixed frame; long fixed screens scale proportionally to remain fully visible, including landscape/short viewports.
- Initiatives and Clubs & Facilities scroll as whole screens. Initiatives keeps the Figma typography and 80×80px image slots without scaling to fit the viewport. Top Picks has its own scrollable accordion container; its surrounding Rewarding privileges screen stays fixed. Reaching a scroll boundary requires a new gesture before navigating away.
- Both layouts share story content, counters, animation timing, galleries and videos. All fourteen stories (4 defence, 4 NSmen, 6 bonds) support direct links. Resizing across the breakpoint restores the current URL, story and open gallery.
- Mobile has no Previous / story count / Next controls, Next-topic labels or Continue buttons. Swipes and wheel gestures advance the screens; arrow/Page keys work when the mobile screen has focus. Back buttons and the section menu remain available.
- Mobile follows the “Mobile - 13 Nov 2026” Figma handover, adapted to the fixed-frame and Top Picks requirements. Its Figma photos are stored locally as optimized JPEGs; desktop photos and icon artwork are reused where appropriate.
- Verify with `node --test tests/*.test.js`, `npm run build`, `npm run build:u`, and `npm run build:p`.

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
