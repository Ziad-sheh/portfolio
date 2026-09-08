# Portfolio — ziad-sheh.github.io/portfolio

Hand-built static site. No build step: edit, commit, push — Pages redeploys.

## Editing content
All website copy, navigation and media labels are in English. Original campaign films and artwork retain their published language.

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
- `coverage` — selected public reactions, media coverage and production accounts; each item has a source URL, attribution and an explicit scope where needed
- `credits` — role/name pairs
- `links` — external campaign or viewing links

Omit any section a campaign does not need. Do not add empty placeholders to the
case page; only published material is rendered. Unfinished campaigns also stay
off the public homepage until their media is ready.

## Media = self-hosted silent loops (not embeds)
Visible media = short silent autoplay loops as "living texture" (nakaza style) — no YouTube/FB chrome and no homepage player controls.
- Every published homepage tile is one project link. Its video ignores pointer input, so the complete window is the click target.
- Loops shown: `assets/loop/<slug>.mp4` (short, 720p, silent/no audio track), with a still poster for loading and reduced-motion visitors. Image-led projects use a still.
- `main.js` loads and plays loops near the viewport, pauses them off-screen or while the page is hidden, and respects reduced-motion preferences. The homepage’s Pause motion control stops both the loops and the career ticker; it works with pointer and keyboard input.
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

### Conversation & coverage · September 2026

Snaptacular adds Ziad’s iPhone 15 Arabic headline and the original supplied billboard photograph. All 17 selected projects were searched for campaign-specific public discussion. Nine cases have selected references in the shared `coverage` layout. Quotes are brief, attributed and linked; summaries are visually distinct from quotations. Global campaign recognition, production accounts and service-launch discussion are labelled by scope. No reach, virality or campaign-effectiveness metrics are inferred from these posts.

See [RESEARCH.md](RESEARCH.md) for the campaign-by-campaign source audit and remaining gaps. Cases without a verified relevant reference have no empty coverage section.

Validation: all 17 case pages rendered at 390px and 1280px without horizontal overflow or missing cases; homepage keyboard activation and next/previous navigation passed. The 16 coverage entries have complete attributions and HTTPS links. All 103 referenced media paths exist, the supplied photograph is byte-for-byte unchanged, existing roles and primary films are preserved, and browser checks reported no warnings or errors.

### Older project stories · 8 September 2026

All nine earlier projects now have fuller project context, a concise role statement and a craft section grounded in the work. Ziad’s latest clarifications are reflected in Journey, Ready for More, FAB, Stay Home Together and Gumball. Personal authorship is separated from editorial observations about the finished films.

New references include Hind Shoufani’s production account, Mostafa Salameh’s collaboration page and the official Travel Video Awards nomination for The Land of Land Rovers (Best Video by a Lifestyle Brand). Filmmaker/music credits, the original FAB release and Velar’s interactive viewing links sit beside the relevant copy. The shared coverage component now contains 19 entries across nine cases; unavailable or mismatched social reactions remain outside the site.

Ready for More presents its four challenge films in a responsive grid with individual captions. Velar’s self-hosted movie is labelled as a panoramic preview, with links to the original Arabic and English 360° versions.

Validation for this pass: all nine older cases checked at 390px and 1280px, with no horizontal overflow, missing titles or empty captions; representative desktop/mobile layouts visually inspected. Native playback advanced without errors in the Ready for More grid. Homepage keyboard activation and next-case navigation passed, and Switchers was checked at both widths as a control. JavaScript syntax, source structure and whitespace checks passed; all 103 media paths exist. All eight Apple objects, earlier media and existing credits are unchanged. No browser warnings or errors were reported. Saved locally on the editorial branch; no deployment.

### Whole-site voice and consistency · 8 September 2026

The current editorial convention is first person for Ziad’s responsibility and shared language for team delivery. Switchers, Saudi Relax, Riyadh Metro and the Saudi Watch film identify his Creative Director role. Headline authorship, original concepts and Arabic adaptation credits remain scoped to the work he described. Named collaborators, production credits and all 19 public-reference entries are retained. About now describes leading and working with a team, without broad claims about sole ownership, headcount or agency-wide tool adoption. His current title is Creative Director; the Apple timeline combines 2020–present without assigning an unconfirmed promotion date.

All campaigns open with title, role and primary work. The four older credit lists now appear in their normal story sequence. Shared section headings retain the existing small label style; captions share 12px type and 1.5 line height; secondary film titles keep the same colour as primary titles. Film captions use valid figure structure, inner pages have one visible page heading, and case pages link directly to About. The Gumball excerpt is labelled as a silent preview and uses native controls instead of autoplay.

Validation: all 19 pages checked at actual CSS widths of 320, 390, 768, 1023 and 1280px with no horizontal overflow or heading/caption errors. Representative layouts were visually inspected. The homepage motion control paused all loops and the ticker, and resumed with Space-key activation. Case-to-About-to-home navigation passed; Gumball’s eight-second preview completed without a media error. Syntax, whitespace, shared version tags, local links and all 103 media paths passed. All project titles, media, source entries and four production-credit blocks are preserved. No new campaign research or external-link availability audit was performed in this editorial pass.
