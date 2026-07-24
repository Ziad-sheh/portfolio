const stops = document.querySelectorAll(".stop[data-chapter]");
const chapters = document.querySelectorAll(".chapter");
const metaBrand = document.getElementById("meta-brand");
const metaEra = document.getElementById("meta-era");
const metaByChapter = {
  apple: ["Media Arts Lab — Apple", "Since 2020"],
  spark44: ["Spark44 — Jaguar Land Rover", "Dubai"],
  havas: ["Havas Worldwide", "Dubai"],
  meraas: ["Meraas", "Dubai"],
  other: ["Some other stuff", "Various"],
};

function activate(name) {
  stops.forEach(s => {
    s.classList.toggle("is-active", s.dataset.chapter === name);
  });
  chapters.forEach(c => {
    const shown = c.dataset.chapter === name;
    c.hidden = !shown;
    c.querySelectorAll("video").forEach(v => {
      if (shown) { const p = v.play(); if (p) p.catch(() => {}); }
      else v.pause();
    });
  });
  const meta = metaByChapter[name];
  if (meta) {
    metaBrand.textContent = meta[0];
    metaEra.textContent = meta[1];
  }
}

document.querySelectorAll(".index a[data-chapter]").forEach(link => {
  link.addEventListener("click", () => activate(link.dataset.chapter));
});
