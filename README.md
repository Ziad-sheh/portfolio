# Portfolio — ziad-sheh.github.io/portfolio

Hand-built static site. No build step: edit, commit, push — Pages redeploys.

## Editing content
- Work entries and all three rail indexes: edit `work-data.js`, then run `node scripts/sync-projects.mjs` to regenerate the static HTML.
- Case-study content: `work-data.js` → one object per campaign.
- Case-study layout: `work.html` + `work.css`; optional blocks are rendered by `work.js`.

## Campaign case studies
Every populated homepage tile links to `work.html?project=<slug>`. The same page
can hold a simple film-only case or a longer story without duplicating HTML.

Available optional section types in `work-data.js`:
- `copy` — label, heading, paragraphs, optional `sources: [{ title, href }]`
- `stills` — images with alt text and optional captions
- `films` — additional films with titles, posters, captions, and optional per-film `sources`
- `credits` — role/name pairs
- `links` — external campaign or viewing links

Omit any section a campaign does not need. Do not add empty placeholders to the
case page; only published material is rendered. Unfinished campaigns also stay
off the public homepage until their media is ready.

## Media = self-hosted silent loops (not embeds)
Visible media = short silent autoplay loops as "living texture" (nakaza style) — no YouTube/FB chrome and no homepage player controls.
- Every published homepage tile is one project link. Its video ignores pointer input, so the complete window is the click target.
- Loops shown: `assets/loop/<slug>.mp4` (short, 720p, silent/no audio track), with a still poster for loading and reduced-motion visitors. Image-led projects use a still.
- `main.js` loads and plays loops near the viewport, pauses them off-screen or while the page is hidden, and respects reduced-motion preferences.
- Full masters: `assets/video/<slug>.mp4` (720p `+faststart`, largest fab-mothers 58 MB, under GitHub's 100 MB/file cap). The case-study page loads these on demand with native controls.
- Pipelines (reusable, in scratchpad): `dlvid.sh <slug> <youtube_id>` (download+compress+poster) · `loop_all.sh` (cut short silent loops from every master; edit per-film start if a loop lands on a dull/black frame).
- Note: some source films have burned-in captions/supers — reselect a caption-free segment via `loop_all.sh` start times if cleaner texture is wanted.

## Provenance (source of each self-hosted film)
FAB Mother's Day `Jxdv92BXu_Q` · FAB Covid/United We Grow Stronger `gKdxtjV1xKk` · FAB Heartbeat `aYIcgXztZ7A` · Velar 360° VR Arabic `d5ytvTclQdI` + English `tbEgZalU3bk` · Jaguar Silence `6dJBczts-M8` + `WJUkW0N7mY0` · RR Sport Life is Simple `zY1TypuX4qU` + `Zq9Q-W1PpWw` · LR Ramadan/Slow Down `S72p7yYcHMU` · LR Ready for More `r1Oxk9s0Aag`, `suXj2Jij5wA`, `V5wFy-ETLHw`, `LDRryH4CB2I`, `3M6_ClTzKio` · LR Ramadan 2019 = FB `LandRoverMENA/videos/670920666670259` + `LandRoverMENA/videos/873038963088964`. Brands own these; self-hosted for portfolio use only.

Gumball episodes remain external YouTube links because they are full-length episodes:
`d5YTXxsAKSA` (العش), `UckS3lgytIk` (الأصول), and `_gj-ewiHXSQ` (الخائن).

Media and available write-ups were matched campaign-by-campaign against the old
Adobe Portfolio. Its Apple Switchers page is empty. Its FAB Rally the Nation page
does not match any of the three FAB campaigns currently selected for this site, so
that film has not been attached to an unrelated campaign.

## Open items (Ziad's pen — see vault spec "Portfolio Site — Design")
- Hero copy (current text is working draft)
- Remaining campaign assets and behind-the-scenes material when supplied
- Additional write-ups, stills, and credits when supplied
- Wordmark divergence + About bio
- Remove `noindex` meta when identity diverges from the reference and content is approved

## Apple additions · September 2026

Seven case studies: Switchers, Saudi Relax (2025 + 2026), Apple Pay / Riyadh Metro, Watch Saudi Arabia, iPad musical adaptation, gaming OOH, and Arabic localisation. Role statements come from Ziad’s project descriptions; uncertain launch dates, results and gaming-event attribution are omitted. Older global Relax films remain outside this pass.

Media are web derivatives of the supplied Apple Portfolio assets. Original campaign files stay in the source collection. Known black tails are trimmed; films retain their sound. The three Switchers films use Apple’s clean, published landscape versions, replacing the counter-bearing review exports for presentation. The English Health film is explicitly labelled as the global original for comparison.

The Metro page presents the four landscape films, six short social films and six display layouts from the deck. Alternate crops and reference imagery are not displayed. The gaming page uses the two original photographs extracted from the supplied PDF.

`assets/apple-media.json` records media provenance. `primaryImage` supports image-led cases; `films` sections accept `layout: "grid"` or `"portrait"`; portrait stills use the same layout value. No publishing step is part of this update.

Validation for this pass: all seven Apple cases checked at 390px and 1280px; native playback checked on a landscape and a vertical film; all 28 films fully decoded with H.264 video, AAC audio and faststart verified. All 16 projects have valid assets and matching indexes. The nine existing case objects are unchanged.

### Campaign stories and public credits

The Apple stories now include casting, performance and music context. Source links live beside the relevant copy in `work-data.js`. Saudi cast, director and music credits are explicitly scoped to the 2025 films. Syn’s music account describes the wider Switchers campaign, without assigning individual global composers to a particular local edit. The Waiting Room award and original Jane Lynch performance are credited to the global campaign; Ziad’s role remains Arabic localisation.

Public names remain unconfirmed for the 2026 Relax cast/music, the Saudi Watch cast/composer, the iPad Arabic singers and other Arabic dubbing performers. Gaming-event attribution is still unconfirmed. These gaps do not appear as placeholders or invented credits on the site. Creative commentary is editorial portfolio copy based on the films; personal role statements use Ziad’s descriptions, without invented session anecdotes.
