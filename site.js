const projects = new Map(window.PORTFOLIO_PROJECTS.map(project => [project.slug, project]));
const allChoices = window.COVER_CHOICES;
const choices = allChoices.filter(choice => !projects.get(choice.slug).parent);
const touches = window.PERSONAL_TOUCHES;
const behindTheScenes = window.BEHIND_THE_SCENES;
const imageDimensions = window.IMAGE_DIMENSIONS;
const imageSize = src => imageDimensions[src] ? `width="${imageDimensions[src].width}" height="${imageDimensions[src].height}"` : '';
const photoDialog = document.querySelector('#photo-dialog');
let photoIndex = 0;
let photoSet = [];
let surprisePool = [];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const grid = document.querySelector('#project-grid');
const caseDialog = document.querySelector('#case-dialog');
const reviewDialog = document.querySelector('#review-dialog');
const contactDialog = document.querySelector('#contact-dialog');
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const original = path => path;
const siteTitle = document.title;
let motionPaused = reducedMotion.matches;
let heroVisible = true;
let currentProject = null;
let returnTarget = null;
let returnScroll = 0;
let hasCaseOrigin = false;
const moments = ['apple-relax-saudi', 'apple-switchers', 'lr-journey-rediscovery'].map(slug => choices.find(choice => choice.slug === slug));

function motionAllowed() { return !motionPaused; }

function syncMotionButton() {
  const button = document.querySelector('#motion-toggle');
  button.textContent = motionPaused ? 'Play motion' : 'Pause motion';
  button.setAttribute('aria-pressed', String(motionPaused));
  const body = document.querySelector('body');
  if (motionPaused) body.classList.add('motion-paused');
  else body.classList.remove('motion-paused');
  document.documentElement?.classList.toggle('motion-playing', !motionPaused && reducedMotion.matches);
}

const previewWanted = new WeakMap();

async function playPreview(video) {
  if (!video || motionPaused || document.hidden || caseDialog.open || reviewDialog.open || contactDialog.open) return;
  previewWanted.set(video, true);
  try {
    await video.play();
    if (!previewWanted.get(video) || motionPaused || document.hidden || caseDialog.open || reviewDialog.open || contactDialog.open || !video.isConnected) pausePreview(video);
    else video.classList.add('playing');
  } catch { video.classList.remove('playing'); }
}

function pausePreview(video) { previewWanted.set(video, false); video.pause(); video.classList.remove('playing'); }

const heroDeck = window.createHeroDeck({
  stack: document.querySelector('.moment-stack'), moments, projects, brandMarkup: window.portfolioBrandMarkup,
  open: openCase, play: playPreview, pause: pausePreview,
  canPlay: () => heroVisible && !motionPaused && !document.hidden && !caseDialog.open && !reviewDialog.open && !contactDialog.open,
  canAnimate: () => motionAllowed() && !document.hidden,
});
function syncHero() { heroDeck.sync(); }

new IntersectionObserver(entries => {heroVisible = entries[0].isIntersecting; syncHero();}, {threshold: 0.2}).observe(document.querySelector('.moment-stack'));
document.addEventListener('visibilitychange', () => {if (document.hidden) document.querySelectorAll('video').forEach(pausePreview); syncHero();});
reducedMotion.addEventListener('change', () => {motionPaused = reducedMotion.matches; syncMotionButton(); syncHero(); if (motionPaused) document.querySelectorAll('.project-cover video').forEach(pausePreview);});
document.querySelector('#motion-toggle').addEventListener('click', () => {
  motionPaused = !motionPaused;
  syncMotionButton();
  if (motionPaused) document.querySelectorAll('.project-cover video').forEach(pausePreview);
  syncHero();
});
syncMotionButton();

function renderGrid() {
  document.querySelectorAll('.project-cover video').forEach(pausePreview);
  grid.innerHTML = choices.map(choice => {
    const project = projects.get(choice.slug);
    const touch = touches[choice.slug];
    return `<article class="project-card" data-campaign="${choice.slug}"><figure class="cover-mount"><button type="button" class="project-cover" data-project="${choice.slug}" aria-label="Open ${escapeHtml(project.title)}" style="--cover-position:${choice.gridPosition || choice.position};--cover-scale:${choice.gridScale || 1};--cover-origin:${choice.gridOrigin || '50% 50%'}"><img src="${choice.gridImage || choice.image}" alt="${escapeHtml(choice.gridAlt || choice.alt)}" ${imageSize(choice.gridImage || choice.image)} loading="lazy">${(choice.gridClip || choice.clip) ? `<video data-preview src="${choice.gridClip || choice.clip}" poster="${choice.gridImage || choice.image}" loop muted playsinline preload="none" aria-hidden="true"></video>` : ''}<span class="open-hint">Take a look ↗</span></button><figcaption class="project-annotation hand">${escapeHtml(touch.note)}</figcaption></figure><div class="project-info"><h3><button type="button" data-project="${choice.slug}">${escapeHtml(project.title)}</button></h3><span class="client">${window.portfolioBrandMarkup(project.client)}</span></div><p class="project-description">${escapeHtml(project.deck)}</p></article>`;
  }).join('');
  grid.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openCase(button.dataset.project, button)));
  grid.querySelectorAll('.project-cover').forEach(button => {
    const video = button.querySelector('video');
    if (!video) return;
    button.addEventListener('pointerenter', () => playPreview(video));
    button.addEventListener('pointerleave', () => pausePreview(video));
    button.addEventListener('focus', () => playPreview(video));
    button.addEventListener('blur', () => pausePreview(video));
  });
}

document.querySelector('#surprise-project').addEventListener('click', event => {
  // Refill after every project has had a turn, rather than repeating one by chance.
  if (!surprisePool.length) surprisePool = choices.map(choice => choice.slug);
  const pick = Math.floor(Math.random() * surprisePool.length);
  openCase(surprisePool.splice(pick, 1)[0], event.currentTarget);
});

const momentCollection = document.querySelector('#moment-collection');
momentCollection.innerHTML = window.FILM_MOMENTS.map(moment => `<figure class="little-frame"><button type="button" data-project="${moment.slug}" aria-label="Open ${escapeHtml(projects.get(moment.slug).title)} from this film moment"><img src="${moment.image}" alt="${escapeHtml(moment.alt)}" ${imageSize(moment.image)} loading="lazy"></button><figcaption class="hand">${escapeHtml(moment.caption)}</figcaption></figure>`).join('');
momentCollection.querySelectorAll('button').forEach(button => button.addEventListener('click', () => openCase(button.dataset.project, button)));

function resourceLink(href, label) {
  return `<a class="resource-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(label)}</span><span class="resource-arrow" aria-hidden="true">↗</span></a>`;
}

function links(sources = []) {
  return sources.length ? `<div class="source-links">${sources.map(source => resourceLink(source.href, source.title)).join('')}</div>` : '';
}

function captionTracks(src) {
  const caption = window.FILM_CAPTIONS[src];
  if (!caption) return '';
  return `<track kind="subtitles" srclang="en" label="English" src="${escapeHtml(caption.src)}"${caption.default ? ' default' : ''}>`;
}

function filmMarkup(film) {
  return `<figure><video src="${escapeHtml(original(film.src))}" poster="${escapeHtml(original(film.poster || ''))}" controls playsinline preload="none" aria-label="${escapeHtml(film.title || 'Campaign film')}">${captionTracks(film.src)}</video><figcaption>${film.title ? `<strong>${escapeHtml(film.title)}</strong>` : ''}${escapeHtml(film.caption || '')}${links(film.sources)}</figcaption></figure>`;
}

function campaignMarkup(section) {
  const film = section.variants[0];
  return `<section class="case-section campaign-chapter${section.standalone ? ' campaign-standalone' : ''}" id="campaign-${section.id}">
    ${section.standalone ? '' : `<header class="campaign-heading"><p class="hand">${escapeHtml(section.heading)}</p><h3 tabindex="-1">${escapeHtml(section.title)}</h3></header>`}
    <div class="film-versions" data-film-section="${section.id}">
      <div class="film-language-heading"><span>Watch in</span><span class="film-market" data-current-market aria-live="polite">${escapeHtml(film.market)} · ${escapeHtml(film.treatment)}</span></div>
      <div class="film-language-options" role="group" aria-label="${escapeHtml(section.title)} film language">${section.variants.map((variant, index) => `<button type="button" data-film-version="${index}" aria-pressed="${index === 0}" aria-controls="film-${section.id}">${escapeHtml(variant.language)}</button>`).join('')}</div>
      <video id="film-${section.id}" class="hero-media" src="${escapeHtml(film.src)}" poster="${escapeHtml(film.poster)}" controls playsinline preload="none" aria-label="${escapeHtml(section.title + ' · ' + film.language)}">${captionTracks(film.src)}</video>
      <p class="film-error" hidden>This film couldn’t load. <a href="${escapeHtml(film.source.href)}" target="_blank" rel="noopener noreferrer">Watch the official version</a>.</p>
    </div>
    <details class="market-sources"><summary>Official market films</summary>${links(section.variants.map(variant => variant.source).concat(section.sources || []))}</details>
    <div class="case-copy campaign-story"><h3>How it came together</h3><div>${section.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}</div></div>
  </section>`;
}

function bindCampaignFilms(project) {
  for (const section of project.sections.filter(section => section.type === 'campaign')) {
    const player = caseDialog.querySelector(`[data-film-section="${section.id}"]`);
    const video = player.querySelector('video');
    const error = player.querySelector('.film-error');
    video.addEventListener('error', () => { error.hidden = false; });
    player.querySelectorAll('[data-film-version]').forEach(button => button.addEventListener('click', () => {
      if (button.getAttribute('aria-pressed') === 'true') return;
      const film = section.variants[Number(button.dataset.filmVersion)];
      video.pause();
      player.querySelectorAll('[data-film-version]').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
      error.hidden = true;
      error.querySelector('a').href = film.source.href;
      video.innerHTML = captionTracks(film.src);
      video.poster = film.poster;
      video.src = film.src;
      video.setAttribute('aria-label', `${section.title} · ${film.language}`);
      video.load();
      player.querySelector('[data-current-market]').textContent = `${film.market} · ${film.treatment}`;
    }));
  }
}

function renderSection(section) {
  const label = section.label || section.heading || '';
  const friendlyLabels = {'The project':'How it came together', 'My role':'My part in it', 'Credits':'The team', 'Conversation & coverage':'Out in the world'};
  const heading = `<h3>${escapeHtml(friendlyLabels[label] || label)}</h3>`;
  if (section.type === 'collection') return `<section class="case-section campaign-collection" aria-label="${escapeHtml(label)}"><div class="campaign-card-grid">${section.items.map(slug => {
    const project = projects.get(slug);
    const choice = allChoices.find(choice => choice.slug === slug);
    return `<article class="project-card" data-collection-project="${slug}"><figure class="cover-mount"><button type="button" class="project-cover" data-child-project="${slug}" aria-label="Open ${escapeHtml(project.title)}"><img src="${choice.image}" alt="${escapeHtml(choice.alt)}" ${imageSize(choice.image)}><span class="open-hint">Take a look ↗</span></button><figcaption class="project-annotation hand">${escapeHtml(touches[slug].note)}</figcaption></figure><div class="project-info"><h3><button type="button" data-child-project="${slug}">${escapeHtml(project.title)}</button></h3></div><p class="project-description">${escapeHtml(project.deck)}</p></article>`;
  }).join('')}</div></section>`;
  if (section.type === 'campaign') return campaignMarkup(section);
  if (section.type === 'social') return `<section class="case-section case-social">${heading}<p>${escapeHtml(section.intro)}</p><div class="social-films">${section.items.map(film => `<figure><video src="${escapeHtml(film.src)}" poster="${escapeHtml(film.poster)}" controls playsinline preload="none" style="aspect-ratio:${escapeHtml(film.aspect)}" aria-label="Health social film · ${escapeHtml(film.title)}"></video><figcaption>${escapeHtml(film.title)}<span>${escapeHtml(film.caption)}</span></figcaption></figure>`).join('')}</div>${links(section.sources)}</section>`;
  if (section.type === 'related') return `<section class="case-section case-related">${heading}<button type="button" class="resource-link" data-related-project="${escapeHtml(section.slug)}"><span><strong>${escapeHtml(section.title)}</strong><span class="related-description">${escapeHtml(section.description)}</span></span><span class="resource-arrow" aria-hidden="true">↗</span></button></section>`;
  if (section.type === 'links') return `<section class="case-section case-links">${heading}${links(section.items)}</section>`;
  if (section.type === 'copy') return `<section class="case-section case-copy">${heading}<div>${section.heading ? `<p><strong>${escapeHtml(section.heading)}</strong></p>` : ''}${(section.paragraphs || []).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}${links(section.sources)}</div></section>`;
  if (section.type === 'films') return `<section class="case-section case-films${section.layout === 'compact' ? ' case-films-compact' : ''}">${heading}<div class="film-grid ${section.items.length===1?'single':''}">${section.items.map(filmMarkup).join('')}</div></section>`;
  if (section.type === 'stills') return `<section class="case-section case-stills">${heading}<div class="still-grid">${section.items.map(item=>`<figure><img src="${escapeHtml(original(item.src))}" alt="${escapeHtml(item.alt || '')}" ${imageSize(item.src)} loading="lazy">${item.caption?`<figcaption>${escapeHtml(item.caption)}</figcaption>`:''}</figure>`).join('')}</div></section>`;
  if (section.type === 'credits') return `<section class="case-section case-credits">${heading}<ul>${section.items.map(item=>`<li><strong>${escapeHtml(item.role)}</strong>${escapeHtml(Array.isArray(item.names)?item.names.join(', '):item.names)}</li>`).join('')}</ul></section>`;
  if (section.type === 'coverage') return `<section class="case-section case-coverage">${heading}${section.intro?`<p>${escapeHtml(section.intro)}</p>`:''}${section.items.map(item=>`<article class="coverage-item"><div class="source-label">${escapeHtml(item.kind || '')}<br>${escapeHtml(item.author || item.platform || '')}${item.scope?`<p>${escapeHtml(item.scope)}</p>`:''}</div><div>${item.quote?`<p>“${escapeHtml(item.quote)}”</p>`:''}<p>${escapeHtml(item.summary || '')}</p>${resourceLink(item.href, item.linkLabel || 'View source')}</div></article>`).join('')}</section>`;
  return '';
}

function btsMarkup(slug) {
  const bts = behindTheScenes[slug];
  if (!bts) return '';
  const media = bts.video
    ? `<figure class="bts-video"><video src="${bts.video}" poster="${bts.poster}" width="${bts.width}" height="${bts.height}" controls playsinline preload="none" aria-label="Switchers behind the scenes">${captionTracks(bts.video)}</video><figcaption>${escapeHtml(bts.caption)}</figcaption></figure>`
    : `<div class="bts-photo-grid">${bts.images.map((item,index)=>`<figure><button type="button" data-bts-photo="${index}" aria-label="View Relax behind-the-scenes photo ${index+1}"><img src="${item.src}" width="${item.width}" height="${item.height}" alt="${escapeHtml(item.alt)}" loading="lazy"><span class="photo-expand" aria-hidden="true">↗</span></button></figure>`).join('')}</div>`;
  return `<section class="case-section case-bts ${bts.video?'bts-with-video':'bts-with-photos'}" id="case-bts"><div class="bts-intro"><h3 class="hand" tabindex="-1">${escapeHtml(bts.heading)}</h3><p>${escapeHtml(bts.intro)}</p></div>${media}</section>`;
}

function showPhoto(index) {
  photoIndex = (index + photoSet.length) % photoSet.length;
  const item = photoSet[photoIndex];
  const img = document.querySelector('#photo-image');
  img.src = item.src;
  img.alt = item.alt;
  img.width = item.width;
  img.height = item.height;
  document.querySelector('#photo-caption').textContent = 'Relax, it’s iPhone · behind the scenes';
  document.querySelector('#photo-count').textContent = `${photoIndex+1} / ${photoSet.length}`;
  if (!photoDialog.open) {
    caseDialog.querySelectorAll('video').forEach(video=>video.pause());
    photoDialog.showModal();
  }
}
document.querySelector('#photo-close').addEventListener('click',()=>photoDialog.close());
document.querySelector('#photo-previous').addEventListener('click',()=>showPhoto(photoIndex-1));
document.querySelector('#photo-next').addEventListener('click',()=>showPhoto(photoIndex+1));
photoDialog.addEventListener('keydown',event=>{
  if (event.key==='ArrowLeft') { event.preventDefault(); showPhoto(photoIndex-1); }
  if (event.key==='ArrowRight') { event.preventDefault(); showPhoto(photoIndex+1); }
});

function nextChoice(project) {
  const parent = projects.get(project.parent);
  const siblings = parent
    ? parent.sections.find(section => section.type === 'collection').items.map(slug => allChoices.find(choice => choice.slug === slug))
    : choices;
  const index = siblings.findIndex(choice => choice.slug === project.slug);
  return siblings[(index + 1) % siblings.length];
}

function caseMarkup(project, choice) {
  const heroFilm = choice.source.endsWith('.mp4') && !choice.crop ? choice.source : null;
  const heroMedia = heroFilm
    ? `<video class="hero-media" src="${escapeHtml(original(heroFilm))}" poster="${choice.image}" controls playsinline preload="none" aria-label="${escapeHtml(project.slug === 'cn-gumball' ? 'Gumball scene preview, silent' : project.title + ' film')}">${captionTracks(heroFilm)}</video>`
    : `<img class="hero-media" src="${choice.image}" alt="${escapeHtml(choice.alt)}" ${imageSize(choice.image)} style="object-position:${choice.position}">`;
  const extraPrimary = project.primaryFilm && project.primaryFilm !== heroFilm
    ? `<section class="case-section case-films"><h3>${escapeHtml(project.primaryLabel || 'The film')}</h3><div class="film-grid single">${filmMarkup({src:project.primaryFilm,poster:project.poster,title:project.primaryLabel || project.title,caption:project.primaryCaption})}</div></section>` : '';
  const sections = project.sections.map(section => {
    if (section.type !== 'films' || !heroFilm) return section;
    return {...section, items:section.items.filter(item=>item.src!==heroFilm)};
  }).filter(section=>section.type!=='films'||section.items.length);
  const touch = touches[project.slug];
  const next = nextChoice(project);
  const nextProject = projects.get(next.slug);
  const heroCaption = project.slug === 'cn-gumball' ? 'Scene preview · silent' : project.slug === 'apple-switchers' ? 'Real voices. Animated selves.' : choice.note;
  const primaryCaption = project.primaryCaption && (!project.primaryFilm || project.primaryFilm === heroFilm) ? project.primaryCaption : '';
  const frame = touch.frame ? `<figure class="case-moment"><img src="${touch.frame}" alt="${escapeHtml(touch.frameCaption)}" ${imageSize(touch.frame)} loading="lazy"><figcaption><span class="hand">${escapeHtml(touch.frameCaption)}</span><span class="frame-origin">A moment from the film</span></figcaption></figure>` : '';
  const story = sections.map((section,index)=>renderSection(section) + (index===1 ? btsMarkup(project.slug) + frame : '')).join('');
  const chapterNav = project.layout === 'chapters' ? `<nav class="campaign-nav" aria-label="Campaigns in this collection">${sections.filter(section => section.type === 'campaign').map(section => `<button type="button" data-case-jump="campaign-${section.id}">${escapeHtml(section.title)} <span aria-hidden="true">↓</span></button>`).join('')}</nav>` : '';
  const hero = ['collection', 'campaign'].includes(project.layout) ? '' : project.layout === 'chapters' ? chapterNav : `<figure class="case-hero">${heroMedia}${heroCaption || primaryCaption ? `<figcaption>${heroCaption ? `<span>${escapeHtml(heroCaption)}</span>` : ''}${primaryCaption ? `<span class="media-context">${escapeHtml(primaryCaption)}</span>` : ''}</figcaption>` : ''}</figure>`;
  const backLabel = project.parent ? `Back to ${projects.get(project.parent).title} ↖` : 'Back to work ↖';
  const nextLink = project.layout === 'collection' ? '<button type="button" data-next>Next project →</button>' : `<button class="next-story" type="button" data-next aria-label="Next project: ${escapeHtml(nextProject.title)}"><span><span class="hand">one more?</span><strong>${escapeHtml(nextProject.title)} ↗</strong></span><img src="${next.image}" alt="" ${imageSize(next.image)} loading="lazy" style="object-position:${next.position}"></button>`;
  return `<header class="case-head"><div class="case-title-group"><p class="case-sidenote hand">${escapeHtml(touch.chapter)}</p><h2 id="case-title" tabindex="-1">${escapeHtml(project.title)}</h2></div><div><p class="case-deck">${escapeHtml(project.deck)}</p><div class="case-facts"><p class="case-role">My role<strong>${escapeHtml(project.role || '')}</strong></p>${(project.meta || []).map(meta=>`<p class="case-role">${escapeHtml(meta.label)}<strong>${escapeHtml(meta.value)}</strong></p>`).join('')}</div>${behindTheScenes[project.slug] ? '<button class="bts-jump" type="button" data-bts-jump>Behind the scenes ↓</button>' : ''}</div></header>${hero}${extraPrimary}${story}<div class="case-end"><button type="button" data-back>${escapeHtml(backLabel)}</button>${nextLink}</div>`;
}

async function openCase(slug, target, updateUrl = true) {
  const project = projects.get(slug);
  const choice = allChoices.find(item=>item.slug===slug);
  if (!project || !choice) {
    if (caseDialog.open) finishClose();
    history.replaceState(null, '', '#work');
    document.querySelector('#work').scrollIntoView();
    document.querySelector('#work-heading').focus({preventScroll:true});
    return;
  }
  const caseDepth = caseDialog.open ? (history.state?.caseDepth || 1) + 1 : 1;
  const parentOrigin = project.parent === currentProject ? project.parent : undefined;
  if (!caseDialog.open) {
    hasCaseOrigin = Boolean(target && updateUrl);
    returnTarget = target || document.querySelector('#work-heading');
    returnScroll = target ? window.scrollY : Math.max(0,document.querySelector('#work').getBoundingClientRect().top + window.scrollY - 28);
  }
  document.querySelectorAll('video').forEach(pausePreview);
  document.querySelectorAll('.playing').forEach(video=>video.classList.remove('playing'));
  const thumb = target?.querySelector('img');
  if (thumb && document.startViewTransition && motionAllowed()) thumb.style.viewTransitionName = 'selected-cover';
  const render = () => {
    if (thumb) thumb.style.viewTransitionName = '';
    document.querySelector('#case-content').innerHTML = caseMarkup(project, choice);
    document.querySelector('#case-client').innerHTML = window.portfolioBrandMarkup(project.client);
    document.querySelector('#case-close').textContent = project.parent ? `← ${projects.get(project.parent).title}` : '← Back to work';
    document.querySelector('#case-next').textContent = project.parent ? 'Next campaign →' : 'Next project →';
    currentProject = slug;
    if (!caseDialog.open) caseDialog.showModal();
    caseDialog.scrollTop = 0;
    document.querySelector('#case-title').focus({preventScroll:true});
    const cover = caseDialog.querySelector('.hero-media');
    if (cover && thumb && document.startViewTransition && motionAllowed()) cover.style.viewTransitionName = 'selected-cover';
    caseDialog.querySelector('[data-back]').addEventListener('click', closeCase);
    caseDialog.querySelector('[data-next]').addEventListener('click', nextCase);
    bindCampaignFilms(project);
    caseDialog.querySelectorAll('[data-child-project]').forEach(button => button.addEventListener('click', () => {
      openCase(button.dataset.childProject, button);
    }));
    caseDialog.querySelectorAll('[data-case-jump]').forEach(button => button.addEventListener('click', () => {
      const section = caseDialog.querySelector(`#${button.dataset.caseJump}`);
      section.scrollIntoView({behavior:motionAllowed()?'smooth':'instant',block:'start'});
      section.querySelector('h3').focus({preventScroll:true});
    }));
    caseDialog.querySelectorAll('[data-related-project]').forEach(button => button.addEventListener('click', () => {
      openCase(button.dataset.relatedProject, null, false);
      history.replaceState({...history.state, project:currentProject}, '', '#project=' + currentProject);
    }));
    caseDialog.querySelector('[data-bts-jump]')?.addEventListener('click',()=>{
      const section=caseDialog.querySelector('#case-bts');
      section.scrollIntoView({behavior:motionAllowed()?'smooth':'instant',block:'start'});
      section.querySelector('h3').focus({preventScroll:true});
    });
    caseDialog.querySelectorAll('[data-bts-photo]').forEach(button=>button.addEventListener('click',()=>{
      photoSet=behindTheScenes[slug].images;
      showPhoto(Number(button.dataset.btsPhoto));
    }));
    caseDialog.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>{
      caseDialog.querySelectorAll('video').forEach(other=>{if(other!==video) other.pause();});
    }));
    if (updateUrl) history.pushState({project:slug, returnToWork:true, caseDepth, parent:parentOrigin},'', '#project='+slug);
    document.title = `${project.title} — Ziad Shehade`;
  };
  if (thumb && document.startViewTransition && motionAllowed()) {
    const transition = document.startViewTransition(render);
    await transition.finished.catch(()=>{});
    const cover = caseDialog.querySelector('.hero-media');
    if (cover) cover.style.viewTransitionName = '';
  } else render();
}

function finishClose() {
  document.title = siteTitle;
  if (photoDialog.open) photoDialog.close();
  caseDialog.querySelectorAll('video').forEach(video=>video.pause());
  caseDialog.close();
  currentProject = null;
  window.scrollTo({top:returnScroll,behavior:'instant'});
  if (returnTarget?.isConnected) returnTarget.focus({preventScroll:true});
  syncHero();
}

function closeCase() {
  const parent = projects.get(currentProject)?.parent;
  if (parent) {
    if (history.state?.parent === parent) history.back();
    else {
      openCase(parent, null, false);
      history.replaceState({...history.state, project:parent, parent:undefined}, '', '#project=' + parent);
    }
    return;
  }
  if (hasCaseOrigin && location.hash.startsWith('#project=') && history.state?.returnToWork) history.go(-(history.state.caseDepth || 1));
  else { history.replaceState(null, '', location.pathname + location.search + '#work'); finishClose(); }
}
function nextCase() {
  openCase(nextChoice(projects.get(currentProject)).slug, null, false);
  history.replaceState({...history.state, project:currentProject},'', '#project='+currentProject);
}
document.querySelector('#case-close').addEventListener('click', closeCase);
document.querySelector('#case-next').addEventListener('click', nextCase);
caseDialog.addEventListener('cancel', event=>{event.preventDefault(); closeCase();});
function syncRoute() {
  const legacySlug = location.hash.slice(1);
  if (projects.has(legacySlug)) history.replaceState(null, '', '#project=' + legacySlug);
  if (location.hash.startsWith('#project=')) {
    const slug = location.hash.slice(9);
    if (!caseDialog.open || currentProject !== slug) openCase(slug,null,false);
  } else if (caseDialog.open) finishClose();
}
window.addEventListener('popstate', syncRoute);
window.addEventListener('hashchange', syncRoute);

function backgroundNotes() {
  const background = window.PORTFOLIO_BACKGROUND;
  const sections = background.sections.map(section => `<section><h3>${escapeHtml(section.heading)}</h3>${section.paragraphs.map(p=>`<p>${escapeHtml(p)}</p>`).join('')}${section.entries.length ? `<dl class="background-timeline">${section.entries.map(entry=>`<div><dt>${escapeHtml(entry.label)}</dt><dd>${escapeHtml(entry.detail)}</dd></div>`).join('')}</dl>` : ''}</section>`).join('');
  return `<div class="review-body background-body"><p class="hand background-hello">a little more about me.</p><h3>Words, people<br>and the work.</h3><p>${escapeHtml(background.deck)}</p>${sections}<button class="background-contact" type="button" data-contact-open aria-haspopup="dialog" aria-controls="contact-dialog">Say hello ↗</button></div>`;
}

function showBackground() {
  document.querySelectorAll('video').forEach(pausePreview);
  document.querySelectorAll('.playing').forEach(video=>video.classList.remove('playing'));
  document.querySelector('#review-content').innerHTML = backgroundNotes();
  if (!reviewDialog.open) reviewDialog.showModal();
  reviewDialog.scrollTop = 0;
}
document.querySelector('#background-open').addEventListener('click',showBackground);
document.querySelector('#review-close').addEventListener('click',()=>reviewDialog.close());
reviewDialog.addEventListener('close',syncHero);

document.addEventListener('click', event => {
  if (!event.target.closest('[data-contact-open]')) return;
  document.querySelectorAll('video').forEach(pausePreview);
  if (!contactDialog.open) contactDialog.showModal();
});
document.querySelector('#contact-close').addEventListener('click', () => contactDialog.close());
contactDialog.addEventListener('close', syncHero);
contactDialog.addEventListener('click', event => {
  if (event.target !== contactDialog) return;
  const bounds = contactDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) contactDialog.close();
});

renderGrid();
syncRoute();
