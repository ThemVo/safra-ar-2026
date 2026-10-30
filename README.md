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
src/App.jsx                   scales the fixed 1440×900 artboard to the window
src/index.css                 page/stage styles
src/artboard/Artboard.jsx     the artboard markup (JSX); binds to renderVals()
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

- Content for Membership tabs other than Food & Groceries, and for What's Next tabs
  "Creating better spaces" / "Making visits seamless" (placeholders shown).
- Link for the "Download full 2025/26 annual report" button (`.dlb` in Artboard.jsx).
- Higher-resolution originals for some photos.

## Notes

- No `<React.StrictMode>`: its dev-only double mount would start the timers twice.
- Desktop-first fixed artboard (1440×900), scaled to fit; there's no separate mobile layout.
