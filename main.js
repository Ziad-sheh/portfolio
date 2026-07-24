// Play loops only while in view; pause off-screen (keeps many loops light).
const playObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) { const p = v.play(); if (p) p.catch(() => {}); }
    else v.pause();
  });
}, { rootMargin: "150px 0px", threshold: 0.15 });
document.querySelectorAll(".media video").forEach(v => playObserver.observe(v));

// Click a loop to open the full film with sound + controls (masters live in assets/video).
document.querySelectorAll(".media video").forEach(loop => {
  const src = loop.querySelector("source") ? loop.querySelector("source").getAttribute("src") : "";
  if (!src.includes("/loop/") || src.includes("cn-gumball")) return; // gumball opens via episode links
  const media = loop.closest(".media");
  media.classList.add("openable");
  media.addEventListener("click", () => {
    if (media.dataset.open) return;
    document.querySelectorAll(".media video").forEach(v => { if (v.controls) v.pause(); });
    media.dataset.open = "1";
    const full = document.createElement("video");
    full.controls = true;
    full.autoplay = true;
    full.playsInline = true;
    const poster = loop.getAttribute("poster");
    if (poster) full.setAttribute("poster", poster);
    const s = document.createElement("source");
    s.src = src.replace("/loop/", "/video/");
    s.type = "video/mp4";
    full.appendChild(s);
    media.replaceChildren(full);
  });
});
