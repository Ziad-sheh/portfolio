# Ziad Shehade — Portfolio

Live site: https://ziad-sheh.github.io/portfolio/

A static portfolio for Ziad Shehade, creative director and copywriter. The homepage shows all 17 campaigns. Project stories, role statements and public references come from `work-data.js`; original campaign films and artwork retain their published language. Site copy is English.

## Editing

- `index.html`: opening, navigation, portrait, About and contact.
- `work-data.js`: canonical campaign titles, roles, stories, credits, films and public sources.
- `choices.js`: homepage images, preview clips and featured case films.
- `personal-touches.js`: project arrangements, handwritten notes and selected film moments.
- `bts-content.js`: supplied Switchers and Relax behind-the-scenes material.
- `background-data.js`: approved professional background, experience and education.
- `site.js` / `site.css`: shared interaction and responsive design.
- `hero-deck.js` / `opening.css`: the three-card photo stack, drag and keyboard shuffle, and opening layout.
- `collection.css`: consistent paper frames, hover/focus movement and the invitation circle.
- `image-dimensions.js`: intrinsic media dimensions that reserve layout space while images load.
- `assets/`: original portfolio web media. `media/`: selected cover frames, short previews, portrait and BTS derivatives.
- `fonts/`, `fonts.css`, `marks/`: local fonts and hand-drawn accents; licence files are retained.

Keep campaign facts in `work-data.js`. New editorial readings should not introduce unconfirmed personal credits, production identities or outcome claims. The visible portrait includes the requested subtle smile edit; original personal files remain outside this public site.

## Checks

Run `node scripts/verify-release.mjs` and `node scripts/verify-hero-touch.mjs` before publishing. The touch regression checks model implicit capture and descendant event bubbling; a narrow viewport alone does not test touch input. For browser checks at the correct deployment base path, serve the parent directory of a checkout named `portfolio`, then open `/portfolio/`. Check a photo shuffle by button, keyboard and drag; a short drag should settle back, vertical gestures should not open a campaign, and Pause motion should settle an interrupted shuffle. Only the front card should play video or receive keyboard focus. Verify a fresh homepage load, an old `work.html?project=<slug>` URL, About, video playback, photo navigation and phone layouts.

Case links use `index.html#project=<slug>`. Old `work.html?project=<slug>`, `about.html` and homepage campaign anchors remain supported. Local preview/review controls are not shipped.

## Publishing

GitHub Pages publishes the `main` branch from the repository root. There is no bundler or application server. Jekyll copies the static files; `_config.yml` excludes source-side research, tools and media provenance from the published website. Do not add `.nojekyll`, which would bypass those exclusions.

Prepare changes on a release branch, run the verifier and browser checks, then publish the reviewed commit to `main` without force-pushing. Confirm the Pages build SHA and inspect the live site after deployment. HTML script/style references carry a release version to avoid mixing cached campaign data with a newer layout.

Campaign films and artwork remain owned by their respective rights holders and are shown as portfolio work. Font and illustration sources are documented in `LICENSES.md`. Research history is retained in Git and `RESEARCH.md`, outside the published Pages output.
