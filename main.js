const homeLoops = [...document.querySelectorAll(".home-loop")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionToggle = document.querySelector(".motion-toggle");
let motionPaused = false;

function playLoop(video) {
  if (reducedMotion.matches || motionPaused || document.hidden) return;
  video.muted = true;
  video.controls = false;
  video.setAttribute("autoplay", "");
  const playback = video.play();
  if (playback) playback.catch(() => {});
}

function updateLoopMotion() {
  if (motionToggle) motionToggle.hidden = reducedMotion.matches;
  homeLoops.forEach(video => {
    if (reducedMotion.matches || motionPaused || document.hidden) {
      video.pause();
    } else if (video.dataset.inView === "true") {
      playLoop(video);
    }
  });
}

// Only load and play loops close to the viewport. Off-screen projects remain
// lightweight, while every visible card behaves like a moving window.
if ("IntersectionObserver" in window) {
  const playObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      video.dataset.inView = String(entry.isIntersecting);
      if (entry.isIntersecting) playLoop(video);
      else video.pause();
    });
  }, { rootMargin: "180px 0px", threshold: 0.08 });

  homeLoops.forEach(video => playObserver.observe(video));
} else {
  homeLoops.forEach(video => {
    video.dataset.inView = "true";
    playLoop(video);
  });
}

document.addEventListener("visibilitychange", updateLoopMotion);
reducedMotion.addEventListener?.("change", updateLoopMotion);

if (motionToggle) {
  motionToggle.addEventListener("click", () => {
    motionPaused = !motionPaused;
    document.body.classList.toggle("motion-paused", motionPaused);
    motionToggle.textContent = motionPaused ? "Resume motion" : "Pause motion";
    updateLoopMotion();
  });
}
updateLoopMotion();
