import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

// Structural release checks complement the real-browser interaction review.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const exists = relative => fs.existsSync(path.join(root, relative));
const entryFiles = ['index.html', 'work.html', 'about.html'];
const dataFiles = ['work-data.js', 'background-data.js', 'choices.js', 'personal-touches.js', 'bts-content.js', 'image-dimensions.js'];
const runtimeFiles = [...entryFiles, ...dataFiles, 'site.js', 'legacy-route.js', 'site.css', 'fonts.css', 'favicon.svg', 'robots.txt', 'sitemap.xml'];
const allFiles = [];

function inventory(directory = '') {
  for (const item of fs.readdirSync(path.join(root, directory), { withFileTypes: true })) {
    if (item.name === '.git') continue;
    const relative = path.posix.join(directory, item.name);
    check(!item.isSymbolicLink(), `Symlink is not deployable with branch Pages: ${relative}`);
    if (item.isDirectory()) inventory(relative);
    else if (item.isFile()) allFiles.push(relative);
  }
}
inventory();

const config = read('_config.yml');
const exclusions = [...config.matchAll(/^\s*-\s+([^#\n]+?)\s*$/gm)].map(match => match[1].replace(/^['"]|['"]$/g, ''));
const isExcluded = relative => exclusions.some(excluded => relative === excluded || relative.startsWith(excluded + '/'));
for (const relative of ['README.md', 'RESEARCH.md', 'scripts', 'assets/apple-media.json']) {
  check(exclusions.includes(relative), `Pages must exclude source-side file/directory: ${relative}`);
}
check(!exists('.nojekyll'), '.nojekyll would bypass the configured source-side exclusions');

const deployedFiles = allFiles.filter(relative => !isExcluded(relative) && !relative.split('/').some(part => /^[._#]/.test(part) || part.endsWith('~')));
for (const relative of deployedFiles) {
  const size = fs.statSync(path.join(root, relative)).size;
  check(size <= 100 * 1024 * 1024, `File exceeds GitHub 100 MiB limit: ${relative}`);
  check(!/(?:^|\/)(?:node_modules|review|release|original)(?:\/|$)/.test(relative), `Non-runtime directory would be published: ${relative}`);
  check(!/(?:asset-manifest|publishing-plan|design-plan|assets-from-ziad|prepare_|-review\.)/.test(relative), `Source-side artifact would be published: ${relative}`);
}
const publishedBytes = deployedFiles.reduce((sum, relative) => sum + fs.statSync(path.join(root, relative)).size, 0);
check(publishedBytes < 1024 ** 3, `Site exceeds 1 GiB Pages size limit: ${publishedBytes} bytes`);

for (const relative of runtimeFiles) {
  check(exists(relative), `Required runtime file is missing: ${relative}`);
  if (!exists(relative)) continue;
  const source = read(relative);
  check(!/localhost|127\.0\.0\.1|file:\/\/|\/Users\/|\/private\/|\/var\/folders\//i.test(source), `Local machine reference in runtime: ${relative}`);
  check(!/original\/|about-source\.html|proposal\.(?:js|css)|asset-sources\.md|publishing-plan\.md/.test(source), `Preview dependency in runtime: ${relative}`);
  check(!isExcluded(relative), `Runtime entry is excluded from Pages: ${relative}`);
  if (relative.endsWith('.js')) {
    try { new vm.Script(source, { filename: relative }); }
    catch (error) { failures.push(`JavaScript syntax error in ${relative}: ${error.message}`); }
  }
}
check(!/<meta[^>]+(?:noindex|nofollow)/i.test(read('index.html')), 'Homepage must be indexable');
check(/rel="canonical" href="https:\/\/ziad-sheh\.github\.io\/portfolio\/"/.test(read('index.html')), 'Homepage canonical URL is missing or wrong');

// Evaluate only repository JavaScript in a DOM-shaped inert context, without network or browser access.
const nodes = new Map();
function node(selector) {
  if (!nodes.has(selector)) nodes.set(selector, {
    innerHTML: '', textContent: '', style: {}, dataset: {}, open: false, isConnected: true,
    addEventListener() {}, setAttribute() {}, querySelector: node, querySelectorAll: () => [],
    classList: { add() {}, remove() {} }, pause() {}, focus() {},
  });
  return nodes.get(selector);
}
const context = {
  window: { matchMedia: () => ({ matches: true, addEventListener() {} }), addEventListener() {} },
  document: { querySelector: node, querySelectorAll: () => [], addEventListener() {}, hidden: false },
  location: { hash: '' }, IntersectionObserver: class { observe() {} }, console,
};
vm.createContext(context);
for (const relative of dataFiles) vm.runInContext(read(relative), context, { filename: relative });
const projects = context.window.PORTFOLIO_PROJECTS;
const choices = context.window.COVER_CHOICES;
const touches = context.window.PERSONAL_TOUCHES;
check(projects.length === 17, `Expected 17 canonical campaigns; found ${projects.length}`);
check(choices.length === 17, `Expected 17 homepage covers; found ${choices.length}`);
check(new Set(choices.map(choice => choice.slug)).size === 17, 'Homepage campaign covers contain duplicate slugs');
for (const project of projects) {
  check(choices.some(choice => choice.slug === project.slug), `Campaign missing from homepage: ${project.slug}`);
  check(Boolean(touches[project.slug]), `Campaign has no layout/handwriting data: ${project.slug}`);
}
for (const choice of choices) {
  check(Boolean(choice.alt), `Cover lacks descriptive alt text: ${choice.slug}`);
  check(!('why' in choice || 'need' in choice), `Internal review request remains in cover data: ${choice.slug}`);
}

const canonicalFlag = process.argv.indexOf('--canonical');
const canonicalSource = canonicalFlag >= 0
  ? fs.readFileSync(process.argv[canonicalFlag + 1], 'utf8')
  : execFileSync('git', ['show', '3e927e7:work-data.js'], { cwd: root, encoding: 'utf8' });
check(read('work-data.js') === canonicalSource, 'Canonical campaign content differs from the approved editorial baseline');
const sourceLinks = [];
function collectLinks(value) {
  if (!value || typeof value !== 'object') return;
  for (const [key, child] of Object.entries(value)) {
    if (key === 'href') sourceLinks.push(child);
    else collectLinks(child);
  }
}
collectLinks(projects);
check(sourceLinks.length === 44, `Expected 44 campaign source-link entries; found ${sourceLinks.length}`);
check(sourceLinks.every(href => /^https:\/\//.test(href)), 'Campaign source links must use HTTPS');

const localReferences = new Set();
function reference(value, owner) {
  const decoded = value.replace(/&amp;/g, '&').trim();
  if (!decoded || /^(?:https?:|mailto:|data:|#)/i.test(decoded) || decoded.includes('${')) return;
  const filename = decoded.split(/[?#]/)[0];
  check(!path.isAbsolute(filename), `Root-absolute link would escape /portfolio/: ${owner} -> ${filename}`);
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(owner), filename));
  check(!resolved.startsWith('../'), `Reference escapes the site root: ${owner} -> ${filename}`);
  check(exists(resolved), `Missing local dependency: ${owner} -> ${filename}`);
  check(!isExcluded(resolved), `Dependency excluded from Pages: ${owner} -> ${filename}`);
  localReferences.add(resolved);
}
function auditHtml(html, owner) {
  for (const match of html.matchAll(/\b(?:href|src|poster)="([^"]*)"/g)) reference(match[1], owner);
  check(!/>\s*(?:Design notes|Cover selection|Review covers|Open proposal|Local preview|Show all campaigns)\s*(?:[↗↓])?\s*</i.test(html), `Draft controls in rendered HTML: ${owner}`);
  check(!/(?:undefined|\[object Object\])/.test(html), `Missing data rendered into HTML: ${owner}`);
}
for (const relative of entryFiles) auditHtml(read(relative), relative);
for (const relative of ['site.css', 'fonts.css']) {
  for (const match of read(relative).matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g)) reference(match[1], relative);
}
let renderedCases = 0;
const renderedSourceLinks = [];
try {
  vm.runInContext(read('site.js') + '\n globalThis.releaseAudit = {caseMarkup, backgroundNotes};', context, { filename: 'site.js' });
  const gridHtml = node('#project-grid').innerHTML;
  check((gridHtml.match(/data-campaign=/g) || []).length === 17, 'Rendered homepage does not contain all 17 campaigns');
  auditHtml(gridHtml, 'index.html');
  auditHtml(node('#moment-collection').innerHTML, 'index.html');
  auditHtml(context.releaseAudit.backgroundNotes(), 'index.html');
  for (const project of projects) {
    try {
      const choice = choices.find(item => item.slug === project.slug);
      const html = context.releaseAudit.caseMarkup(project, choice);
      auditHtml(html, 'index.html');
      if (project.primaryCaption) {
        const caption = project.primaryCaption.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
        check(html.includes(caption), `Approved primary-media caption is not rendered: ${project.slug}`);
      }
      const hrefs = [...html.matchAll(/href="([^"]*)"/g)].map(match => match[1].replace(/&amp;/g, '&'));
      renderedSourceLinks.push(...hrefs.filter(href => /^https:\/\//.test(href)));
      check(html.includes('id="case-title"'), `Case has no visible title: ${project.slug}`);
      renderedCases++;
    } catch (error) { failures.push(`Case render failed (${project.slug}): ${error.message}`); }
  }
} catch (error) { failures.push(`Site initialization failed: ${error.message}`); }
check(renderedSourceLinks.length === 44, `Expected 44 rendered source links; found ${renderedSourceLinks.length}`);
const frequency = values => [...values.reduce((map, value) => map.set(value, (map.get(value) || 0) + 1), new Map())].sort();
check(JSON.stringify(frequency(sourceLinks)) === JSON.stringify(frequency(renderedSourceLinks)), 'Rendered campaign source links differ from canonical content');

const legacyCode = read('legacy-route.js');
function legacyDestination(route, query) {
  let destination;
  const legacyContext = {
    URL, URLSearchParams,
    document: { body: { dataset: { legacyRoute: route } } },
    window: { PORTFOLIO_PROJECTS: projects, location: {
      href: `https://ziad-sheh.github.io/portfolio/${route}.html${query}`,
      search: query, replace: value => { destination = value; },
    } },
  };
  vm.runInNewContext(legacyCode, legacyContext);
  return destination;
}
for (const project of projects) {
  check(legacyDestination('work', `?project=${project.slug}`) === `https://ziad-sheh.github.io/portfolio/index.html#project=${project.slug}`, `Legacy case URL does not preserve campaign: ${project.slug}`);
  check(read('work.html').includes(`index.html#project=${project.slug}`), `Legacy no-JS campaign link missing: ${project.slug}`);
}
check(legacyDestination('work', '?project=missing') === 'https://ziad-sheh.github.io/portfolio/index.html#work', 'Unknown legacy campaign does not return to the collection');
check(legacyDestination('about', '') === 'https://ziad-sheh.github.io/portfolio/index.html#about', 'Legacy About URL is broken');
for (const relative of ['fonts/Caveat-OFL.txt', 'fonts/DM-Sans-OFL.txt', 'fonts/Bricolage-Grotesque-OFL.txt']) check(exists(relative), `Font licence missing: ${relative}`);

if (failures.length) {
  console.error(`Release verification failed (${failures.length} checks):\n${failures.map(message => '- ' + message).join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Release verified: ${renderedCases} campaigns rendered, 44 source links preserved, ${localReferences.size} local dependencies found.`);
  console.log(`Legacy routes passed. ${deployedFiles.length} deployable files; ${(publishedBytes / 1024 ** 2).toFixed(1)} MiB. No symlinks, oversized files, local paths or draft controls.`);
  console.log('Pages exclusions checked statically. Browser interactions and the built/live Pages output require separate verification.');
}
