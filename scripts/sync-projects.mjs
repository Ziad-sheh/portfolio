import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'work-data.js'), 'utf8'), context);
const projects = context.window.PORTFOLIO_PROJECTS;
const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const title = project => `${escape(project.client)} <em>“${escape(project.title)}”</em>`;

for (const filename of ['index.html', 'work.html', 'about.html']) {
  let html = fs.readFileSync(path.join(root, filename), 'utf8');
  const prefix = filename === 'index.html' ? '' : 'index.html';
  const navigation = projects.map(project => `    <a href="${prefix}#${escape(project.slug)}">${title(project)}</a>`).join('\n');
  html = html.replace(/(<nav class="index" aria-label="Work index">)[\s\S]*?(<\/nav>)/, `$1\n${navigation}\n  $2`);
  if (filename === 'index.html') {
    const entries = projects.map(project => {
      const fallbackLoop = `assets/loop/${project.slug}.mp4`;
      const loop = project.loop || (fs.existsSync(path.join(root, fallbackLoop)) ? fallbackLoop : null);
      const media = loop
        ? `<video class="home-loop" muted loop playsinline preload="none" poster="${escape(project.poster)}" aria-hidden="true" tabindex="-1" disablepictureinpicture disableremoteplayback><source src="${escape(loop)}" type="video/mp4"></video>`
        : `<img src="${escape(project.poster)}" alt="" loading="lazy">`;
      return `    <article class="entry" id="${escape(project.slug)}">\n      <a class="project-card" href="work.html?project=${escape(project.slug)}">\n        <div class="media">${media}</div>\n        <h2>${title(project)}</h2>\n      </a>\n    </article>`;
    }).join('\n');
    html = html.replace(/(<div class="entries">)[\s\S]*?(\n  <\/div>\n<\/main>)/, `$1\n${entries}$2`);
  }
  fs.writeFileSync(path.join(root, filename), html);
}
console.log(`Synced ${projects.length} projects across homepage and navigation.`);
