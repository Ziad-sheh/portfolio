// One source of truth for case-study content.
// Sections are optional and can be mixed in any order:
// { type: "copy", label: "The idea", heading: "...", paragraphs: ["..."] }
// { type: "stills", label: "Campaign stills", items: [{ src, alt, caption }] }
// { type: "films", label: "More films", items: [{ title, src, poster, caption }] }
// { type: "credits", label: "Credits", items: [{ role, names }] }
window.PORTFOLIO_PROJECTS = [
  {
    slug: "velar-vr",
    client: "Range Rover Velar",
    title: "360° VR Experience",
    poster: "assets/img/velar-vr.jpg",
    primaryFilm: "assets/video/velar-vr.mp4",
    sections: [],
  },
  {
    slug: "lr-land-of",
    client: "Land Rover",
    title: "The Land of Land Rovers",
    poster: "assets/img/lr-land-of.jpg",
    primaryFilm: "assets/video/lr-land-of.mp4",
    sections: [],
  },
  {
    slug: "jaguar-silence",
    client: "Jaguar",
    title: "Silence is a Virtue",
    poster: "assets/img/jaguar-silence.jpg",
    primaryFilm: "assets/video/jaguar-silence.mp4",
    sections: [],
  },
  {
    slug: "lr-ramadan-2019",
    client: "Land Rover",
    title: "Ramadan 2019",
    poster: "assets/img/lr-ramadan-2019.jpg",
    primaryFilm: "assets/video/lr-ramadan-2019.mp4",
    sections: [],
  },
  {
    slug: "rrs-life-simple",
    client: "Range Rover Sport",
    title: "Life is Simple",
    poster: "assets/img/rrs-life-simple.jpg",
    primaryFilm: "assets/video/rrs-life-simple.mp4",
    sections: [],
  },
  {
    slug: "lr-rediscovery",
    client: "Land Rover",
    title: "Journey of Rediscovery",
    poster: "assets/img/lr-rediscovery.jpg",
    primaryFilm: "assets/video/lr-rediscovery.mp4",
    sections: [],
  },
  {
    slug: "lr-ramadan",
    client: "Land Rover",
    title: "Ramadan",
    poster: "assets/img/lr-ramadan.jpg",
    primaryFilm: "assets/video/lr-ramadan.mp4",
    sections: [],
  },
  {
    slug: "lr-ready-more",
    client: "Land Rover",
    title: "Ready for More",
    poster: "assets/img/lr-ready-more.jpg",
    primaryFilm: "assets/video/lr-ready-more.mp4",
    sections: [],
  },
  {
    slug: "fab-mothers",
    client: "FAB",
    title: "Mother's Day",
    poster: "assets/img/fab-mothers.jpg",
    primaryFilm: "assets/video/fab-mothers.mp4",
    sections: [],
  },
  {
    slug: "fab-covid",
    client: "FAB",
    title: "Covid",
    poster: "assets/img/fab-covid.jpg",
    primaryFilm: "assets/video/fab-covid.mp4",
    sections: [],
  },
  {
    slug: "fab-heartbeat",
    client: "FAB",
    title: "Make Every Heartbeat Count",
    poster: "assets/img/fab-heartbeat.jpg",
    primaryFilm: "assets/video/fab-heartbeat.mp4",
    sections: [],
  },
  {
    slug: "lvqr-stayhome",
    client: "La Vache qui rit",
    title: "Stay Home Together",
    poster: "assets/img/lvqr-stayhome.jpg",
    primaryFilm: "assets/video/lvqr-stayhome.mp4",
    sections: [],
  },
  {
    slug: "cn-gumball",
    client: "Cartoon Network",
    title: "The Amazing World of Gumball",
    poster: "assets/img/cn-gumball.jpg",
    loop: "assets/loop/cn-gumball.mp4",
    primaryLabel: "Campaign preview",
    primaryCaption: "Arabic dub. Full episodes are available below.",
    sections: [
      {
        type: "links",
        label: "Full episodes",
        items: [
          { title: "Wrinkles", href: "https://www.youtube.com/watch?v=BdqV31Aw6hw" },
          { title: "Punishment", href: "https://www.youtube.com/watch?v=m0Hs8IYTZ3g" },
          { title: "The Picture", href: "https://www.youtube.com/watch?v=_rYxr1B0C2o" },
        ],
      },
    ],
  },
];
