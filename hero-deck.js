/* Fixed photo cards move through the stack; their media never swaps mid-animation. */
window.createHeroDeck = function ({stack, moments, projects, open, play, pause, canPlay, canAnimate}) {
  const deck = stack.querySelector('.moment-deck');
  const nextButton = stack.querySelector('#next-moment');
  const status = stack.querySelector('.deck-status');
  const escape = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const positions = [
    'translate3d(0, 0, 0) rotate(3deg) scale(1)',
    'translate3d(-4%, -2%, 0) rotate(-5deg) scale(.98)',
    'translate3d(3%, -3%, 0) rotate(7deg) scale(.96)',
  ];
  deck.innerHTML = moments.map((choice, index) => {
    const project = projects.get(choice.slug);
    return `<figure class="moment-frame" data-slot="${index}"${index ? ' inert aria-hidden="true"' : ''}><button type="button" class="moment-image" aria-label="Open ${escape(project.title)}"${index ? ' tabindex="-1"' : ''}><img src="${choice.image}" alt="${escape(choice.alt)}" draggable="false"${index ? '' : ' fetchpriority="high"'}><video src="${choice.clip}" muted playsinline loop preload="none" aria-hidden="true"></video></button><figcaption>${escape(project.client)} · ${escape(project.title)}</figcaption></figure>`;
  }).join('');
  const cards = [...deck.querySelectorAll('.moment-frame')];
  let order = cards.map((_, index) => index);
  let busy = false;
  let gesture = null;
  let suppressPointerClick = false;
  let animations = [];

  function syncMedia() {
    cards.forEach((card, index) => {
      const video = card.querySelector('video');
      if (index === order[0] && !busy && canPlay()) play(video);
      else pause(video);
    });
  }

  function applyOrder(nextOrder) {
    order = nextOrder;
    order.forEach((index, slot) => {
      const card = cards[index];
      const button = card.querySelector('button');
      card.dataset.slot = slot;
      card.inert = slot !== 0;
      card.setAttribute('aria-hidden', String(slot !== 0));
      card.style.transform = '';
      card.style.zIndex = '';
      button.tabIndex = slot ? -1 : 0;
      button.id = slot ? '' : 'hero-project';
    });
  }

  function animate(card, keyframes, options) {
    const animation = card.animate(keyframes, {...options, fill: 'both'});
    animations.push(animation);
    // Each card can be cancelled before the next animation phase awaits it.
    const finished = animation.finished;
    finished.catch(() => {});
    return finished;
  }

  async function shuffle(direction = -1) {
    if (busy) return;
    busy = true;
    nextButton.setAttribute('aria-disabled', 'true');
    deck.classList.add('is-shuffling');
    const front = cards[order[0]];
    const nextOrder = [...order.slice(1), order[0]];
    const focusWasOnCard = front.contains(document.activeElement);
    const start = front.style.transform || positions[0];
    syncMedia();
    try {
      if (canAnimate()) {
        const reach = `translate3d(${direction * 86}%, -14%, 0) rotate(${direction * 17}deg) scale(1.025)`;
        const advancing = order.slice(1).map((index, slot) => animate(cards[index], [
          {transform: positions[slot + 1]}, {transform: positions[slot]},
        ], {duration: 740, easing: 'cubic-bezier(.22,.7,.22,1)'}));
        await animate(front, [{transform: start}, {transform: reach}], {
          duration: 320, easing: 'cubic-bezier(.32,0,.4,1)',
        });
        // Change the order while the outgoing print is clear of its neighbours.
        front.style.zIndex = '1';
        cards[nextOrder[0]].style.zIndex = '3';
        cards[nextOrder[1]].style.zIndex = '2';
        await Promise.all([
          ...advancing,
          animate(front, [{transform: reach}, {transform: positions[2]}], {
            duration: 420, easing: 'cubic-bezier(.16,.78,.24,1)',
          }),
        ]);
      }
    } catch (error) {
      if (error.name !== 'AbortError') console.warn('Photo shuffle interrupted:', error);
    } finally {
      animations.forEach(animation => animation.cancel());
      animations = [];
      applyOrder(nextOrder);
      busy = false;
      nextButton.setAttribute('aria-disabled', 'false');
      deck.classList.remove('is-shuffling');
      const project = projects.get(moments[order[0]].slug);
      status.textContent = project.client + ' · ' + project.title;
      if (focusWasOnCard) cards[order[0]].querySelector('button').focus({preventScroll: true});
      syncMedia();
    }
  }

  async function settle(card) {
    const start = card.style.transform;
    if (!start) { syncMedia(); return; }
    busy = true;
    nextButton.setAttribute('aria-disabled', 'true');
    try {
      if (canAnimate()) await animate(card, [{transform: start}, {transform: positions[0]}], {
        duration: 280, easing: 'cubic-bezier(.2,.8,.2,1)',
      });
    } catch (error) {
      if (error.name !== 'AbortError') console.warn('Photo settling interrupted:', error);
    } finally {
      animations.forEach(animation => animation.cancel());
      animations = [];
      card.style.transform = '';
      busy = false;
      nextButton.setAttribute('aria-disabled', 'false');
      syncMedia();
    }
  }

  function releaseGesture(event, cancelled = false) {
    if (!gesture || event.pointerId !== gesture.id) return;
    const finished = gesture;
    gesture = null;
    deck.classList.remove('is-dragging');
    if (finished.button.hasPointerCapture(event.pointerId)) finished.button.releasePointerCapture(event.pointerId);
    if (!finished.horizontal) return;
    suppressPointerClick = true;
    if (!cancelled && Math.abs(finished.dx) >= Math.max(38, finished.width * .16)) {
      shuffle(Math.sign(finished.dx));
    } else settle(finished.card);
  }

  cards.forEach((card, index) => {
    const button = card.querySelector('button');
    button.addEventListener('pointerdown', event => {
      if (busy || index !== order[0] || !event.isPrimary || event.button !== 0) return;
      suppressPointerClick = false;
      gesture = {id: event.pointerId, x: event.clientX, y: event.clientY, dx: 0, horizontal: false, card, button, width: card.getBoundingClientRect().width};
    });
    button.addEventListener('pointermove', event => {
      if (!gesture || event.pointerId !== gesture.id) return;
      const dx = event.clientX - gesture.x;
      const dy = event.clientY - gesture.y;
      if (!gesture.horizontal) {
        if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) { suppressPointerClick = true; gesture = null; return; }
        if (Math.abs(dx) < 9 || Math.abs(dx) < Math.abs(dy) * 1.15) return;
        gesture.horizontal = true;
        button.setPointerCapture(event.pointerId);
        deck.classList.add('is-dragging');
        pause(card.querySelector('video'));
      }
      gesture.dx = dx;
      event.preventDefault();
      if (canAnimate()) card.style.transform = `translate3d(${dx}px, ${Math.max(-30, Math.min(30, dy * .2))}px, 0) rotate(${3 + dx / gesture.width * 12}deg)`;
    });
    button.addEventListener('pointerup', event => releaseGesture(event));
    button.addEventListener('pointercancel', event => releaseGesture(event, true));
    button.addEventListener('lostpointercapture', event => {
      // If touch starts with implicit capture on an image, its capture-loss event
      // bubbles here when the button takes over; that is not a cancelled swipe.
      if (event.target === button) releaseGesture(event, true);
    });
    button.addEventListener('click', event => {
      if (event.detail > 0 && suppressPointerClick) { suppressPointerClick = false; event.preventDefault(); return; }
      if (!busy && !gesture?.horizontal && index === order[0]) open(moments[index].slug, button);
    });
  });
  nextButton.addEventListener('click', () => shuffle());
  applyOrder(order);
  return {
    sync() {
      if (!canAnimate()) animations.forEach(animation => animation.cancel());
      syncMedia();
    },
  };
};
