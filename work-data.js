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
    deck: "The project was an exploration in sensory immersion, combining carefully selected visuals and a tailored musical score to create a comprehensive experience of the Velar. My role involved managing various creative details, from the script to scene transitions, to ensure a smooth and engaging journey for the viewer.",
    primaryLabel: "Arabic film",
    primaryCaption: "Range Rover Velar — Virtual Drive Experience",
    sections: [
      {
        type: "films",
        label: "English film",
        items: [
          {
            title: "Virtual Drive Experience",
            src: "assets/video/velar-vr-2.mp4",
            poster: "assets/img/velar-vr-2.jpg",
            caption: "English version",
          },
        ],
      },
    ],
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
    primaryLabel: "Silence is a Virtue",
    sections: [
      {
        type: "films",
        label: "More films",
        items: [
          {
            title: "لأن الهدوء فضيلة",
            src: "assets/video/jaguar-silence-2.mp4",
            poster: "assets/img/jaguar-silence-2.jpg",
            caption: "Jaguar I-PACE",
          },
        ],
      },
    ],
  },
  {
    slug: "lr-ramadan-2019",
    client: "Land Rover",
    title: "Ramadan 2019",
    poster: "assets/img/lr-ramadan-2019.jpg",
    primaryFilm: "assets/video/lr-ramadan-2019.mp4",
    primaryLabel: "Stay Grounded",
    primaryCaption: "Automatic Access Height",
    sections: [
      {
        type: "films",
        label: "More films",
        items: [
          {
            title: "Light Your Path",
            src: "assets/video/lr-ramadan-2019-2.mp4",
            poster: "assets/img/lr-ramadan-2019-2.jpg",
            caption: "Pixel Laser LED Headlights",
          },
        ],
      },
    ],
  },
  {
    slug: "rrs-life-simple",
    client: "Range Rover Sport",
    title: "Life is Simple",
    poster: "assets/img/rrs-life-simple.jpg",
    primaryFilm: "assets/video/rrs-life-simple.mp4",
    deck: "Social media campaign | concept | script",
    primaryLabel: "Gesture Sunblind",
    sections: [
      {
        type: "films",
        label: "More films",
        items: [
          {
            title: "Powered Gesture Tailgate",
            src: "assets/video/rrs-life-simple-2.mp4",
            poster: "assets/img/rrs-life-simple-2.jpg",
          },
        ],
      },
    ],
  },
  {
    slug: "lr-rediscovery",
    client: "Land Rover",
    title: "Journey of Rediscovery",
    poster: "assets/img/lr-rediscovery.jpg",
    primaryFilm: "assets/video/lr-rediscovery.mp4",
    deck: "Social media video",
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
    deck: "Social media campaign",
    primaryLabel: "The Journey of Challenges",
    sections: [
      {
        type: "films",
        label: "More films",
        items: [
          {
            title: "The Routine Challenge",
            src: "assets/video/lr-ready-more-routine.mp4",
            poster: "assets/img/lr-ready-more-routine.jpg",
          },
          {
            title: "The Darkness Challenge",
            src: "assets/video/lr-ready-more-darkness.mp4",
            poster: "assets/img/lr-ready-more-darkness.jpg",
          },
          {
            title: "The Heights Challenge",
            src: "assets/video/lr-ready-more-heights.mp4",
            poster: "assets/img/lr-ready-more-heights.jpg",
          },
          {
            title: "The Sea Challenge",
            src: "assets/video/lr-ready-more-sea.mp4",
            poster: "assets/img/lr-ready-more-sea.jpg",
          },
        ],
      },
    ],
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
    deck: "Concept | Execution",
    sections: [],
  },
  {
    slug: "cn-gumball",
    client: "Cartoon Network",
    title: "The Amazing World of Gumball",
    poster: "assets/img/cn-gumball.jpg",
    loop: "assets/loop/cn-gumball.mp4",
    deck: "Script & dubbing",
    primaryLabel: "Campaign preview",
    primaryCaption: "Arabic dub. Three original episodes from the old portfolio are available below.",
    sections: [
      {
        type: "links",
        label: "Full episodes",
        items: [
          { title: "العش", href: "https://www.youtube.com/watch?v=d5YTXxsAKSA" },
          { title: "الأصول", href: "https://www.youtube.com/watch?v=UckS3lgytIk" },
          { title: "الخائن", href: "https://www.youtube.com/watch?v=_gj-ewiHXSQ" },
        ],
      },
    ],
  },
];
