const tabs = document.querySelectorAll(".tab[data-chapter]");
const chapters = document.querySelectorAll(".chapter");
const metaBrand = document.getElementById("meta-brand");
const metaEra = document.getElementById("meta-era");
const metaByChapter = {
  apple: ["Apple", "Present"],
  agency: ["Agency years", "Dubai / Abu Dhabi"],
};

function activate(name) {
  tabs.forEach(t => {
    const on = t.dataset.chapter === name;
    t.classList.toggle("is-active", on);
    t.setAttribute("aria-selected", String(on));
  });
  chapters.forEach(c => { c.hidden = c.dataset.chapter !== name; });
  const meta = metaByChapter[name];
  if (meta) {
    metaBrand.textContent = meta[0];
    metaEra.textContent = meta[1];
  }
}

tabs.forEach(t => t.addEventListener("click", () => activate(t.dataset.chapter)));

document.querySelectorAll(".index a[data-chapter]").forEach(link => {
  link.addEventListener("click", () => activate(link.dataset.chapter));
});
