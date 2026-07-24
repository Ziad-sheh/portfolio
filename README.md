# Portfolio — ziad-sheh.github.io/portfolio

Hand-built static site. No build step: edit, commit, push — Pages redeploys.

## Editing content
- Work entries: `index.html` → `<article class="entry">` blocks (id, heading, media box).
- Rail index: `index.html` → `<nav class="index">` (keep in sync with entries).
- Chapters: `index.html` ticker stops + `main.js` `metaByChapter`.

## Media = self-hosted video (not embeds)
Films are downloaded, web-compressed, and served from this repo — no YouTube/Facebook chrome.
- Files: `assets/video/<slug>.mp4` (720p, H.264, `+faststart`), poster `assets/img/<slug>.jpg`.
- Markup: `<div class="media"><video controls preload="metadata" poster="assets/img/<slug>.jpg"><source src="assets/video/<slug>.mp4" type="video/mp4"></video></div>`.
- Pipeline (reusable): `scratchpad/dlvid.sh <slug> <youtube_id>` → yt-dlp download + ffmpeg compress + poster frame.
- `preload="metadata"` means files only download on play, so page load stays light. Total video ~145 MB; largest is fab-mothers 58 MB (under GitHub's 100 MB/file limit).

## Provenance (source of each self-hosted film)
FAB Mother's Day `Jxdv92BXu_Q` · FAB Covid/United We Grow Stronger `gKdxtjV1xKk` · FAB Heartbeat `aYIcgXztZ7A` · Velar 360° VR `d5ytvTclQdI` · Jaguar Silence `6dJBczts-M8` · RR Sport Life is Simple `zY1TypuX4qU` (Gesture Sunblind) · LR Ramadan/Slow Down `S72p7yYcHMU` · LR Ready for More `r1Oxk9s0Aag` · LR Ramadan 2019 = FB `LandRoverMENA/videos/670920666670259`. Brands own these; self-hosted for portfolio use only.

## Open items (Ziad's pen — see vault spec "Portfolio Site — Design")
- Hero copy (current text is working draft)
- **Two films need source files — YouTube sources went private (can't download or embed):** Journey of Rediscovery (`Rl0h8wZIVuM`), Tropic of Cancer (`9LOH41wSveM`). Supply the .mp4 and drop in `assets/video/`.
- Media still missing (no film found): The Land of Land Rovers, Gumball (dubbing), La Vache qui rit, Apple Switchers, Apple selected campaigns
- Wordmark divergence + About bio
- Remove `noindex` meta when identity diverges from the reference and content is approved

## Alternate films harvested (swap-ins if preferred)
- Velar 360° VR: second film `tbEgZalU3bk`
- Jaguar Silence is a Virtue: second film `WJUkW0N7mY0`
- RR Sport Life is Simple: second film `Zq9Q-W1PpWw` (current: Gesture Sunblind)
- LR Ramadan 2019: second FB video `LandRoverMENA/videos/873038963088964`
