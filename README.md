# Portfolio — ziad-sheh.github.io/portfolio

Hand-built static site. No build step: edit, commit, push — Pages redeploys.

## Editing content
- Work entries: `index.html` → `<article class="entry">` blocks (id, heading, media box).
- Rail index: `index.html` → `<nav class="index">` (keep in sync with entries).
- Case-study content: `work-data.js` → one object per campaign.
- Case-study layout: `work.html` + `work.css`; optional blocks are rendered by `work.js`.

## Campaign case studies
Every populated homepage tile links to `work.html?project=<slug>`. The same page
can hold a simple film-only case or a longer story without duplicating HTML.

Available optional section types in `work-data.js`:
- `copy` — label, heading, paragraphs
- `stills` — images with alt text and optional captions
- `films` — additional films with titles, posters, and captions
- `credits` — role/name pairs
- `links` — external campaign or viewing links

Omit any section a campaign does not need. Do not add empty placeholders to the
case page; only published material is rendered.

## Media = self-hosted silent loops (not embeds)
Visible media = short silent autoplay loops as "living texture" (nakaza style) — no YouTube/FB chrome.
- Loops shown: `assets/loop/<slug>.mp4` (~8s, 720p, silent/no audio track, ~5.6 MB total). Markup: `<video autoplay muted loop playsinline preload="auto" poster="assets/img/<slug>.jpg"><source src="assets/loop/<slug>.mp4">`.
- `main.js` plays a chapter's loops when shown, pauses them when hidden.
- Full masters: `assets/video/<slug>.mp4` (720p `+faststart`, largest fab-mothers 58 MB, under GitHub's 100 MB/file cap). The case-study page loads these on demand with native controls.
- Pipelines (reusable, in scratchpad): `dlvid.sh <slug> <youtube_id>` (download+compress+poster) · `loop_all.sh` (cut short silent loops from every master; edit per-film start if a loop lands on a dull/black frame).
- Note: some source films have burned-in captions/supers — reselect a caption-free segment via `loop_all.sh` start times if cleaner texture is wanted.

## Provenance (source of each self-hosted film)
FAB Mother's Day `Jxdv92BXu_Q` · FAB Covid/United We Grow Stronger `gKdxtjV1xKk` · FAB Heartbeat `aYIcgXztZ7A` · Velar 360° VR `d5ytvTclQdI` · Jaguar Silence `6dJBczts-M8` · RR Sport Life is Simple `zY1TypuX4qU` (Gesture Sunblind) · LR Ramadan/Slow Down `S72p7yYcHMU` · LR Ready for More `r1Oxk9s0Aag` · LR Ramadan 2019 = FB `LandRoverMENA/videos/670920666670259`. Brands own these; self-hosted for portfolio use only.

## Open items (Ziad's pen — see vault spec "Portfolio Site — Design")
- Hero copy (current text is working draft)
- Apple Switchers + selected campaigns
- Campaign write-ups, stills, additional films, and credits in `work-data.js`
- Wordmark divergence + About bio
- Remove `noindex` meta when identity diverges from the reference and content is approved

## Alternate films harvested (swap-ins if preferred)
- Velar 360° VR: second film `tbEgZalU3bk`
- Jaguar Silence is a Virtue: second film `WJUkW0N7mY0`
- RR Sport Life is Simple: second film `Zq9Q-W1PpWw` (current: Gesture Sunblind)
- LR Ramadan 2019: second FB video `LandRoverMENA/videos/873038963088964`
