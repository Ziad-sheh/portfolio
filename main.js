const stops = document.querySelectorAll(".stop[data-chapter]");
const chapters = document.querySelectorAll(".chapter");
const metaBrand = document.getElementById("meta-brand");
const metaEra = document.getElementById("meta-era");
const metaByChapter = {
  apple: ["Media Arts Lab — Apple", "Since 2020"],
  spark44: ["Spark44 — Jaguar Land Rover", "Dubai"],
  havas: ["Havas Worldwide", "Dubai"],
  jwt: ["JWT", "Dubai"],
  saatchi: ["Saatchi & Saatchi", "Dubai"],
  meraas: ["Meraas", "Dubai"],
  diff: ["Dubai International Film Festival", "Dubai"],
  other: ["Some other stuff", "Various"],
};

function activate(name) {
  stops.forEach(s => {
    const on = s.dataset.chapter === name;
    s.classList.toggle("is-active", on);
  });
  chapters.forEach(c => { c.hidden = c.dataset.chapter !== name; });
  const meta = metaByChapter[name];
  if (meta) {
    metaBrand.textContent = meta[0];
    metaEra.textContent = meta[1];
  }
}

stops.forEach(s => s.addEventListener("click", () => activate(s.dataset.chapter)));

document.querySelectorAll(".index a[data-chapter]").forEach(link => {
  link.addEventListener("click", () => activate(link.dataset.chapter));
});
