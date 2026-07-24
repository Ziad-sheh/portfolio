# Portfolio — ziad-sheh.github.io/portfolio

Hand-built static site. No build step: edit, commit, push — Pages redeploys.

## Editing content
- Work entries: `index.html` → `<article class="entry">` blocks (id, heading, media box).
- Rail index: `index.html` → `<nav class="index">` (keep in sync with entries).
- Media: replace `<div class="media placeholder">…</div>` with an `<iframe>` (YouTube/Vimeo) or `<video>`/`<img>` inside `<div class="media">`.
- Chapters: `index.html` tabs + `main.js` `metaByChapter`.

## Open items (Ziad's pen — see vault spec "Portfolio Site — Design")
- Hero copy + journey line (current text is working draft)
- Apple start year on the tab
- Campaign picks + media embeds
- LinkedIn URL (`.todo-link` in the rail)
- Wordmark divergence + About bio
- Remove `noindex` meta when identity diverges from the reference and content is approved
