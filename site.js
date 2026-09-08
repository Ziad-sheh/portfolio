const projects = new Map(window.PORTFOLIO_PROJECTS.map(project => [project.slug, project]));
const choices = window.COVER_CHOICES;
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
let motionPaused = reducedMotion.matches;
let heroVisible = true;
let currentProject = null;
let returnTarget = null;
let returnScroll = 0;
let hasCaseOrigin = false;
const moments = [choices[0], choices[1], choices[3]];

function motionAllowed() { return !motionPaused && !reducedMotion.matches; }

function syncMotionButton() {
  const button = document.querySelector('#motion-toggle');
  button.textContent = motionPaused ? 'Play motion' : 'Pause motion';
  button.setAttribute('aria-pressed', String(motionPaused));
  const body = document.querySelector('body');
  if (motionPaused) body.classList.add('motion-paused');
  else body.classList.remove('motion-paused');
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
  grid.innerHTML = choices.map((choice, index) => {
    const project = projects.get(choice.slug);
    const touch = touches[choice.slug];
    return `<article class="project-card treatment-${touch.treatment}" style="--column:${touch.column};--push:${touch.push}px;--ratio:${touch.ratio};--note-turn:${touch.turn}deg" data-campaign="${choice.slug}"><div class="project-annotation hand">${escapeHtml(touch.note)}${index % 3 === 0 ? '<span class="mark mark-arrow" aria-hidden="true"></span>' : ''}</div><div class="cover-mount"><button type="button" class="project-cover" data-project="${choice.slug}" aria-label="Open ${escapeHtml(project.title)}"><img src="${choice.image}" alt="${escapeHtml(choice.alt)}" ${imageSize(choice.image)} loading="lazy" style="object-position:${choice.position}">${choice.clip ? `<video data-preview src="${choice.clip}" poster="${choice.image}" loop muted playsinline preload="none" aria-hidden="true"></video>` : ''}<span class="open-hint">Take a look ↗</span></button></div><div class="project-info"><h3><button type="button" data-project="${choice.slug}">${escapeHtml(project.title)}</button></h3><span class="client">${window.portfolioBrandMarkup(project.client)}</span></div><p class="project-description">${escapeHtml(project.deck)}</p></article>`;
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

function renderSection(section) {
  const label = section.label || section.heading || '';
  const friendlyLabels = {'The project':'How it came together', 'My role':'My part in it', 'Credits':'The team', 'Conversation & coverage':'Out in the world'};
  const heading = `<h3>${escapeHtml(friendlyLabels[label] || label)}</h3>`;
  if (section.type === 'links') return `<section class="case-section case-links">${heading}${links(section.items)}</section>`;
  if (section.type === 'copy') return `<section class="case-section case-copy">${heading}<div>${section.heading ? `<p><strong>${escapeHtml(section.heading)}</strong></p>` : ''}${(section.paragraphs || []).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}${links(section.sources)}</div></section>`;
  if (section.type === 'films') return `<section class="case-section case-films">${heading}<div class="film-grid ${section.items.length===1?'single':''}">${section.items.map(filmMarkup).join('')}</div></section>`;
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
  const next = choices[(choices.indexOf(choice) + 1) % choices.length];
  const nextProject = projects.get(next.slug);
  const heroCaption = project.slug === 'cn-gumball' ? 'Scene preview · silent' : project.slug === 'apple-switchers' ? 'Real voices. Animated selves.' : choice.note;
  const primaryCaption = project.primaryCaption && (!project.primaryFilm || project.primaryFilm === heroFilm) ? project.primaryCaption : '';
  const frame = touch.frame ? `<figure class="case-moment"><img src="${touch.frame}" alt="${escapeHtml(touch.frameCaption)}" ${imageSize(touch.frame)} loading="lazy"><figcaption><span class="hand">${escapeHtml(touch.frameCaption)}</span><span class="frame-origin">A moment from the film</span></figcaption></figure>` : '';
  const story = sections.map((section,index)=>renderSection(section) + (index===1 ? btsMarkup(project.slug) + frame : '')).join('');
  return `<header class="case-head"><div class="case-title-group"><p class="case-sidenote hand">${escapeHtml(touch.chapter)}</p><h2 id="case-title" tabindex="-1">${escapeHtml(project.title)}</h2></div><div><p class="case-deck">${escapeHtml(project.deck)}</p><div class="case-facts"><p class="case-role">My role<strong>${escapeHtml(project.role || '')}</strong></p>${(project.meta || []).map(meta=>`<p class="case-role">${escapeHtml(meta.label)}<strong>${escapeHtml(meta.value)}</strong></p>`).join('')}</div>${behindTheScenes[project.slug] ? '<button class="bts-jump" type="button" data-bts-jump>Behind the scenes ↓</button>' : ''}</div></header><figure class="case-hero">${heroMedia}${heroCaption || primaryCaption ? `<figcaption>${heroCaption ? `<span>${escapeHtml(heroCaption)}</span>` : ''}${primaryCaption ? `<span class="media-context">${escapeHtml(primaryCaption)}</span>` : ''}</figcaption>` : ''}</figure>${extraPrimary}${story}<div class="case-end"><button type="button" data-back>Back to the collection ↖</button><button class="next-story" type="button" data-next aria-label="Next project: ${escapeHtml(nextProject.title)}"><span><span class="hand">one more?</span><strong>${escapeHtml(nextProject.title)} ↗</strong></span><img src="${next.image}" alt="" ${imageSize(next.image)} loading="lazy" style="object-position:${next.position}"></button></div>`;
}

async function openCase(slug, target, updateUrl = true) {
  const project = projects.get(slug);
  const choice = choices.find(item=>item.slug===slug);
  if (!project || !choice) {
    if (caseDialog.open) finishClose();
    history.replaceState(null, '', '#work');
    document.querySelector('#work').scrollIntoView();
    document.querySelector('#work-heading').focus({preventScroll:true});
    return;
  }
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
    currentProject = slug;
    if (!caseDialog.open) caseDialog.showModal();
    caseDialog.scrollTop = 0;
    document.querySelector('#case-title').focus({preventScroll:true});
    const cover = caseDialog.querySelector('.hero-media');
    if (thumb && document.startViewTransition && motionAllowed()) cover.style.viewTransitionName = 'selected-cover';
    caseDialog.querySelector('[data-back]').addEventListener('click', closeCase);
    caseDialog.querySelector('[data-next]').addEventListener('click', nextCase);
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
    if (updateUrl) history.pushState({project:slug, returnToWork:true},'', '#project='+slug);
  };
  if (thumb && document.startViewTransition && motionAllowed()) {
    const transition = document.startViewTransition(render);
    await transition.finished.catch(()=>{});
    const cover = caseDialog.querySelector('.hero-media');
    if (cover) cover.style.viewTransitionName = '';
  } else render();
}

function finishClose() {
  if (photoDialog.open) photoDialog.close();
  caseDialog.querySelectorAll('video').forEach(video=>video.pause());
  caseDialog.close();
  currentProject = null;
  window.scrollTo({top:returnScroll,behavior:'instant'});
  if (returnTarget?.isConnected) returnTarget.focus({preventScroll:true});
  syncHero();
}

function closeCase() {
  if (hasCaseOrigin && location.hash.startsWith('#project=') && history.state?.returnToWork) history.back();
  else { history.replaceState(null, '', location.pathname + location.search + '#work'); finishClose(); }
}
function nextCase() {
  const index = choices.findIndex(choice=>choice.slug===currentProject);
  openCase(choices[(index+1)%choices.length].slug, null, false);
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
