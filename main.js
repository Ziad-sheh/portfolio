// Play loops only while in view; pause off-screen (keeps many loops light).
const playObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) { const p = v.play(); if (p) p.catch(() => {}); }
    else v.pause();
  });
}, { rootMargin: "150px 0px", threshold: 0.15 });
document.querySelectorAll(".media video").forEach(v => playObserver.observe(v));
