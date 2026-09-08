(() => {
  const destination = new URL('index.html', window.location.href);
  const route = document.body.dataset.legacyRoute;

  if (route === 'about') {
    destination.hash = 'about';
  } else {
    const slug = new URLSearchParams(window.location.search).get('project');
    const projects = window.PORTFOLIO_PROJECTS || [];
    const projectExists = projects.some(project => project.slug === slug);
    destination.hash = projectExists ? `project=${encodeURIComponent(slug)}` : 'work';
  }

  window.location.replace(destination.href);
})();
