const projects = window.PORTFOLIO_PROJECTS || [];
const projectSlug = new URLSearchParams(window.location.search).get("project");
const projectIndex = projects.findIndex(project => project.slug === projectSlug);
const project = projects[projectIndex];

const shell = document.getElementById("work-shell");
const missing = document.getElementById("work-missing");

function addText(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function addVideo({ src, poster, label, autoplay = false, loop = false }) {
  const video = document.createElement("video");
  video.controls = !autoplay;
  video.autoplay = autoplay;
  video.muted = autoplay;
  video.loop = loop;
  video.playsInline = true;
  // Multi-film cases can contain several long masters. Posters keep the page
  // immediate; each full film begins loading only when the viewer asks for it.
  video.preload = autoplay ? "auto" : "none";
  if (poster) video.poster = poster;
  if (label) video.setAttribute("aria-label", label);
  if (autoplay) {
    video.setAttribute("aria-hidden", "true");
    video.tabIndex = -1;
  }

  const source = document.createElement("source");
  source.src = src;
  source.type = "video/mp4";
  video.appendChild(source);
  return video;
}

function renderCopySection(section) {
  const wrapper = document.createElement("section");
  wrapper.className = "work-content work-copy";
  wrapper.appendChild(addText("div", "work-section-label", section.label || "Campaign"));

  const body = document.createElement("div");
  body.className = "work-copy-body";
  if (section.heading) body.appendChild(addText("h2", "", section.heading));
  (section.paragraphs || []).forEach(paragraph => {
    body.appendChild(addText("p", "", paragraph));
  });
  wrapper.appendChild(body);
  return wrapper;
}

function renderStillsSection(section) {
  const wrapper = document.createElement("section");
  wrapper.className = "work-content";
  wrapper.appendChild(addText("div", "work-section-label", section.label || "Campaign stills"));

  const grid = document.createElement("div");
  grid.className = "work-stills";
  (section.items || []).forEach(item => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt || "";
    image.loading = "lazy";
    figure.appendChild(image);
    if (item.caption) figure.appendChild(addText("figcaption", "", item.caption));
    grid.appendChild(figure);
  });
  wrapper.appendChild(grid);
  return wrapper;
}

function renderFilmsSection(section) {
  const wrapper = document.createElement("section");
  wrapper.className = "work-content";
  wrapper.appendChild(addText("div", "work-section-label", section.label || "More films"));

  const grid = document.createElement("div");
  grid.className = "work-films";
  (section.items || []).forEach(item => {
    const figure = document.createElement("figure");
    figure.appendChild(addVideo({ src: item.src, poster: item.poster, label: item.title || "Campaign film" }));
    if (item.title) figure.appendChild(addText("h2", "", item.title));
    if (item.caption) figure.appendChild(addText("figcaption", "", item.caption));
    grid.appendChild(figure);
  });
  wrapper.appendChild(grid);
  return wrapper;
}

function renderCreditsSection(section) {
  const wrapper = document.createElement("section");
  wrapper.className = "work-content work-credits";
  wrapper.appendChild(addText("div", "work-section-label", section.label || "Credits"));

  const list = document.createElement("dl");
  (section.items || []).forEach(item => {
    list.appendChild(addText("dt", "", item.role));
    list.appendChild(addText("dd", "", item.names));
  });
  wrapper.appendChild(list);
  return wrapper;
}

function renderLinksSection(section) {
  const wrapper = document.createElement("section");
  wrapper.className = "work-content work-links";
  wrapper.appendChild(addText("div", "work-section-label", section.label || "Watch"));

  const list = document.createElement("div");
  list.className = "work-link-list";
  (section.items || []).forEach(item => {
    const link = document.createElement("a");
    link.href = item.href;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = `${item.title} ↗`;
    list.appendChild(link);
  });
  wrapper.appendChild(list);
  return wrapper;
}

const sectionRenderers = {
  copy: renderCopySection,
  stills: renderStillsSection,
  films: renderFilmsSection,
  credits: renderCreditsSection,
  links: renderLinksSection,
};

function setCampaignLink(element, targetProject, direction) {
  element.href = `work.html?project=${targetProject.slug}`;
  element.replaceChildren(
    addText("span", "work-nav-direction", direction),
    addText("span", "work-nav-title", `${targetProject.client} — “${targetProject.title}”`)
  );
}

if (!project) {
  missing.hidden = false;
} else {
  document.title = `${project.client} — ${project.title} | Ziad Shehade`;
  document.getElementById("work-back").href = `index.html#${project.slug}`;
  const currentIndexLink = document.querySelector(`.index a[href="index.html#${project.slug}"]`);
  if (currentIndexLink) currentIndexLink.setAttribute("aria-current", "page");
  document.getElementById("work-client").textContent = project.client;
  document.getElementById("work-title").textContent = project.title;

  if (project.deck) {
    const deck = document.getElementById("work-deck");
    deck.textContent = project.deck;
    deck.hidden = false;
  }

  const primaryLabel = document.getElementById("primary-label");
  primaryLabel.textContent = project.primaryLabel || "Full film";

  const primaryMedia = document.getElementById("work-primary-media");
  if (project.primaryFilm) {
    primaryMedia.appendChild(addVideo({
      src: project.primaryFilm,
      poster: project.poster,
      label: project.primaryLabel || "Full campaign film",
    }));
  } else if (project.loop) {
    primaryMedia.appendChild(addVideo({
      src: project.loop,
      poster: project.poster,
      autoplay: true,
      loop: true,
    }));
  }

  if (project.primaryCaption) {
    const caption = document.getElementById("work-primary-caption");
    caption.textContent = project.primaryCaption;
    caption.hidden = false;
  }

  const sections = document.getElementById("work-sections");
  (project.sections || []).forEach(section => {
    const renderer = sectionRenderers[section.type];
    if (renderer) sections.appendChild(renderer(section));
  });

  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  setCampaignLink(document.getElementById("work-previous"), previousProject, "← Previous");
  setCampaignLink(document.getElementById("work-next"), nextProject, "Next →");

  shell.hidden = false;
}
