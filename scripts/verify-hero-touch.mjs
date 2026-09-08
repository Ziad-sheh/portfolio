import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

// Model pointer-event bubbling and pending capture transfers without a browser dependency.
// Instant motion keeps these checks focused on gesture semantics; visual motion is checked in-browser.
const filename = process.argv[2] || new URL('../hero-deck.js', import.meta.url);
const source = fs.readFileSync(filename, 'utf8');

function setup() {
  let capture = null;
  let pendingCapture = null;
  const document = {activeElement: null};
  const opened = [];
  const events = [];
  class Element {
    constructor(name, parent = null) {
      this.name = name;
      this.parent = parent;
      this.handlers = new Map();
      this.style = {};
      this.dataset = {};
      this.children = [];
      this.attributes = {};
      const classes = new Set();
      this.classList = {add: name => classes.add(name), remove: name => classes.delete(name), contains: name => classes.has(name)};
    }
    addEventListener(type, callback) { this.handlers.set(type, callback); }
    setAttribute(key, value) { this.attributes[key] = value; }
    setPointerCapture(id) { assert.equal(id, 1); pendingCapture = this; }
    hasPointerCapture(id) { return id === 1 && pendingCapture === this; }
    releasePointerCapture(id) { if (id === 1 && pendingCapture === this) pendingCapture = null; }
    querySelector(selector) { return this.children.find(child => child.name === selector); }
    contains(other) { return other === this || this.children.some(child => child.contains(other)); }
    getBoundingClientRect() { return {width: 300}; }
    focus() { document.activeElement = this; }
  }
  const deck = new Element('deck');
  const next = new Element('next');
  const status = new Element('status');
  const cards = Array.from({length: 3}, (_, index) => {
    const card = new Element('card-' + index);
    const button = new Element('button', card);
    const img = new Element('img', button);
    const video = new Element('video', button);
    button.children = [img, video];
    card.children = [button, video];
    return card;
  });
  deck.querySelectorAll = () => cards;
  const stack = {querySelector: selector => ({'.moment-deck': deck, '#next-moment': next, '.deck-status': status}[selector])};
  const moments = cards.map((_, index) => ({slug: String(index), image: 'image.jpg', clip: 'clip.mp4', alt: 'poster'}));
  const projects = new Map(moments.map(moment => [moment.slug, {title: moment.slug, client: 'Apple'}]));
  const window = {};
  vm.runInNewContext(source, {window, document, console});
  window.createHeroDeck({stack, moments, projects, open: slug => opened.push(slug), play() {}, pause() {}, canPlay: () => false, canAnimate: () => false});
  function dispatch(type, target, options = {}) {
    const event = {type, target, currentTarget: null, pointerId: 1, isPrimary: true, button: 0, clientX: 200, clientY: 100, detail: 1, prevented: false, preventDefault() { this.prevented = true; }, ...options};
    events.push(type + ':' + target.name);
    for (let current = target; current; current = current.parent) {
      event.currentTarget = current;
      current.handlers.get(type)?.(event);
    }
    return event;
  }
  function processCapture() {
    if (capture !== pendingCapture && capture) dispatch('lostpointercapture', capture);
    if (capture !== pendingCapture && pendingCapture) dispatch('gotpointercapture', pendingCapture);
    capture = pendingCapture;
  }
  const button = cards[0].querySelector('button');
  const img = button.querySelector('img');
  function down(target = img, touch = true) {
    // Pointer Events: direct-manipulation pointers implicitly capture their hit-test target.
    if (touch) pendingCapture = target;
    dispatch('pointerdown', target, {pointerType: touch ? 'touch' : 'mouse'});
  }
  function move(x, y = 100) { processCapture(); dispatch('pointermove', capture || img, {clientX: x, clientY: y}); }
  function up(x = 110, y = 100) {
    processCapture();
    dispatch('pointerup', capture || img, {clientX: x, clientY: y});
    pendingCapture = null;
    processCapture();
  }
  function cancel() {
    processCapture();
    dispatch('pointercancel', capture || img);
    pendingCapture = null;
    processCapture();
  }
  function loseCapture() { processCapture(); pendingCapture = null; processCapture(); }
  return {cards, button, img, down, move, up, cancel, loseCapture, dispatch, opened, events, front: () => cards.findIndex(card => Number(card.dataset.slot) === 0)};
}

const cases = [
  ['touch img capture transfers to button without cancelling swipe', s => { s.down(); s.move(180); s.move(110); s.up(); assert.equal(s.front(), 1); assert.ok(s.events.includes('lostpointercapture:img')); }],
  ['direct touch on button advances once', s => { s.down(s.button); s.move(180); s.move(110); s.up(); assert.equal(s.front(), 1); }],
  ['desktop button swipe advances once', s => { s.down(s.button, false); s.move(180); s.move(110); s.up(); assert.equal(s.front(), 1); }],
  ['completed swipe suppresses its click and keeps keyboard activation', s => { s.down(); s.move(180); s.move(110); s.up(); s.dispatch('click', s.img); assert.deepEqual(s.opened, []); s.dispatch('click', s.cards[1].querySelector('button'), {detail: 0}); assert.deepEqual(s.opened, ['1']); }],
  ['short touch drag settles without opening case', s => { s.down(); s.move(180); s.up(180); s.dispatch('click', s.img); assert.equal(s.front(), 0); assert.deepEqual(s.opened, []); }],
  ['tap opens current campaign', s => { s.down(); s.up(200); s.dispatch('click', s.img); assert.deepEqual(s.opened, ['0']); }],
  ['vertical scroll neither shuffles nor opens case', s => { s.down(); s.move(198, 125); s.cancel(); s.dispatch('click', s.img); assert.equal(s.front(), 0); assert.deepEqual(s.opened, []); }],
  ['actual button capture loss cancels horizontal gesture', s => { s.down(); s.move(180); s.move(110); s.loseCapture(); s.up(); assert.equal(s.front(), 0); }],
  ['pointercancel cancels horizontal gesture', s => { s.down(); s.move(180); s.move(110); s.cancel(); assert.equal(s.front(), 0); }],
  ['keyboard activation is not swallowed after touch drag', s => { s.down(); s.move(180); s.up(180); s.dispatch('click', s.button, {detail: 0}); assert.deepEqual(s.opened, ['0']); }],
  ['fresh tap opens after a cancelled gesture', s => { s.down(); s.move(180); s.cancel(); s.down(); s.up(200); s.dispatch('click', s.img); assert.deepEqual(s.opened, ['0']); }],
];
let failures = 0;
for (const [name, run] of cases) {
  try { run(setup()); console.log('PASS ' + name); }
  catch (error) { failures++; console.log('FAIL ' + name + ': ' + error.message); }
}
console.log(`${cases.length - failures}/${cases.length} passed`);
process.exitCode = failures ? 1 : 0;
