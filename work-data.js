// One source of truth for case-study content.
// Sections are optional and can be mixed in any order:
// { type: "copy", label: "The idea", heading: "...", paragraphs: ["..."] }
// { type: "stills", label: "Campaign stills", items: [{ src, alt, caption }] }
// { type: "films", label: "More films", items: [{ title, src, poster, caption }] }
// { type: "credits", label: "Credits", items: [{ role, names }] }
// Optional factual fields:
// role: "Exact credited role"
// meta: [{ label: "Versions", value: "Arabic · English" }]
window.PORTFOLIO_PROJECTS = [
  {
    slug: "velar-vr",
    client: "Range Rover Velar",
    title: "360° VR Experience",
    poster: "assets/img/velar-vr.jpg",
    primaryFilm: "assets/video/velar-vr.mp4",
    role: "Copy Lead — Led Arabic and English copy, concept development, creative vision and music direction.",
    meta: [{ label: "Languages", value: "Arabic · English" }],
    primaryLabel: "Virtual Drive Experience — Arabic",
    sections: [
      {
        type: "copy",
        label: "Creative approach",
        paragraphs: [
          "An exploration of how 360° VR could create an immersive experience of the Range Rover Velar. Script, visuals, scene transitions and a tailored musical score work together as one continuous virtual drive, guiding viewers smoothly through the experience in Arabic and English.",
        ],
      },
      {
        type: "films",
        label: "English-language version",
        items: [
          {
            title: "Virtual Drive Experience — English",
            src: "assets/video/velar-vr-2.mp4",
            poster: "assets/img/velar-vr-2.jpg",
          },
        ],
      },
      {
        type: "credits",
        label: "Credits",
        items: [
          {
            role: "Agency",
            names: "Spark44",
          },
          {
            role: "CGI & VFX",
            names: "RéCH",
          },
          {
            role: "Colour grade",
            names: "Dan Moran",
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
    role: "Creative — Contributed to the campaign concept, idea development and scripts.",
    primaryLabel: "The Land of Land Rovers",
    sections: [
      {
        type: "copy",
        label: "The story",
        paragraphs: [
          "To mark Land Rover’s 70th anniversary, The Land of Land Rovers follows a community in the foothills of the Himalayas that has kept its fleet of Series Land Rovers on the road for generations. Set along the 31 km route between Maneybhanjang and Sandakphu in West Bengal, the film celebrates the enduring relationship between the people, the landscape and the vehicles they maintain.",
        ],
      },
      {
        type: "credits",
        label: "Credits",
        items: [
          {
            role: "Agency",
            names: "Spark44",
          },
          {
            role: "Director",
            names: "Matt Hopkins",
          },
          {
            role: "Production company",
            names: "The Progress Film Company",
          },
          {
            role: "Director of photography",
            names: "Matt Shaw",
          },
          {
            role: "Music & sound design",
            names: "Dan Graves",
          },
          {
            role: "Agency producer",
            names: "Chris Hook",
          },
          {
            role: "Production producer",
            names: "Richard “Rich” Guy",
          },
          {
            role: "India production",
            names: "Angles Unlimited India",
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
    role: "Copy Lead — Led the campaign idea, concept development and copy, shaping its creative direction.",
    primaryLabel: "Stay Grounded",
    primaryCaption: "Automatic Access Height",
    sections: [
      {
        type: "copy",
        label: "The idea",
        paragraphs: [
          "A pair of product-led Ramadan films that turn Land Rover technology into simple seasonal messages. Stay Grounded uses Automatic Access Height as a gesture of humility, while Light Your Path connects Pixel-Laser LED headlights with the idea of guidance.",
        ],
      },
      {
        type: "films",
        label: "The films",
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
    role: "Copy Lead — Led the campaign idea, concept development and copy, shaping its creative direction.",
    primaryLabel: "Gesture Sunblind",
    sections: [
      {
        type: "copy",
        label: "The idea",
        paragraphs: [
          "Life is Simple is a two-film social campaign built around everyday moments made effortless by Range Rover Sport technology. Gesture controls for the sunblind and powered tailgate become the payoff to each story, bringing the thought “If only life was that simple” to life through the vehicle’s features.",
        ],
      },
      {
        type: "films",
        label: "The films",
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
    slug: "lr-journey-rediscovery",
    client: "Land Rover",
    title: "A Journey of Rediscovery",
    poster: "assets/img/lr-journey-rediscovery.jpg",
    primaryFilm: "assets/video/lr-journey-rediscovery.mp4",
    role: "Copy Lead — Led the campaign idea, concept development and copy, shaping its creative vision and music direction for the original score.",
    primaryLabel: "A Journey of Rediscovery",
    sections: [
      {
        type: "copy",
        label: "The story",
        paragraphs: [
          "Created for Land Rover’s 70th anniversary, A Journey of Rediscovery traces the experiences of civil engineers Robin Webb and Majid Awwad, who relied on Land Rovers while working across the Trucial States in the 1960s. Combining their memories with previously unseen 8mm footage, the film looks back at a time before roads connected the Emirates, and at the vehicles that made their work—and their return home—possible.",
        ],
      },
      {
        type: "credits",
        label: "Credits",
        items: [
          {
            role: "Agency",
            names: "Spark44 MENA",
          },
          {
            role: "Production company",
            names: "Discontent",
          },
          {
            role: "Executive producer",
            names: "Iain Akerman",
          },
          {
            role: "Director, editor & producer",
            names: "Hind Shoufani",
          },
          {
            role: "Director of photography",
            names: "Nick Zajicek",
          },
          {
            role: "Colour grade",
            names: "Belal Hibri — Lucid, Beirut",
          },
          {
            role: "Business director",
            names: "Jose Acar",
          },
        ],
      },
    ],
  },
  {
    slug: "lr-ready-more",
    client: "Land Rover",
    title: "Ready for More",
    poster: "assets/img/lr-ready-more.jpg",
    primaryFilm: "assets/video/lr-ready-more.mp4",
    role: "Copy Lead — Led the campaign idea, concept development and copy, shaping its creative vision and music direction.",
    primaryLabel: "The Journey of Challenges",
    sections: [
      {
        type: "copy",
        label: "The journey",
        paragraphs: [
          "Ready for More is a five-film adventure series for the Land Rover Discovery, following explorer Mostafa Salameh and four participants as they confront personal challenges across Jordan. Each story transforms a familiar obstacle—routine, darkness, heights or the sea—into a journey beyond the comfort zone.",
        ],
      },
      {
        type: "films",
        label: "The challenges",
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
      {
        type: "credits",
        label: "Credits",
        items: [
          {
            role: "Agency",
            names: "Spark44",
          },
          {
            role: "Production company",
            names: "Rolling Thunder Dubai",
          },
          {
            role: "Director",
            names: "Nizar Sfair",
          },
          {
            role: "Explorer",
            names: "Mostafa Salameh",
          },
          {
            role: "The Darkness Challenge — Director of photography",
            names: "Robo Wilson",
          },
          {
            role: "The Darkness Challenge — Second camera & Ronin",
            names: "Martin Leahy",
          },
          {
            role: "The Darkness Challenge — Editor",
            names: "David Zavadescu",
          },
        ],
      },
    ],
  },
  {
    slug: "fab-heartbeat",
    client: "FAB",
    title: "Make Every Heartbeat Count",
    poster: "assets/img/fab-heartbeat.jpg",
    primaryFilm: "assets/video/fab-heartbeat.mp4",
    role: "Copy Lead — Led the campaign idea, concept development and copy, shaping its creative direction.",
    primaryLabel: "Make Every Heartbeat Count",
    sections: [
      {
        type: "copy",
        label: "The idea",
        paragraphs: [
          "Created around FAB’s association with the Formula 1 Etihad Airways Abu Dhabi Grand Prix, Make Every Heartbeat Count connects the pulse of the racetrack with the moments that make everyday life feel alive. The film moves between racing and personal scenes of energy, anticipation and celebration, building a shared rhythm around the campaign line.",
        ],
      },
    ],
  },
  {
    slug: "lvqr-stayhome",
    client: "La Vache qui rit",
    title: "Stay Home Together",
    poster: "assets/img/lvqr-stayhome.jpg",
    primaryFilm: "assets/video/lvqr-stayhome.mp4",
    role: "Copy Lead — Led the campaign idea, concept development and copy, shaping its creative direction.",
    primaryLabel: "Stay Home Together",
    sections: [
      {
        type: "copy",
        label: "The idea",
        paragraphs: [
          "Created during the COVID-19 lockdowns, Stay Home Together reframed time at home as an opportunity for families to reconnect through play. The film turns an ordinary afternoon indoors into a shared family moment, extending the idea through games and activities under #StayHomeTogether.",
        ],
      },
    ],
  },
  {
    slug: "cn-gumball",
    client: "Cartoon Network",
    title: "The Amazing World of Gumball",
    poster: "assets/img/cn-gumball.jpg",
    loop: "assets/loop/cn-gumball.mp4",
    role: "Copy Lead — Led Arabic script adaptation and copy across multiple seasons.",
    meta: [{ label: "Selection", value: "Three representative episodes" }],
    primaryLabel: "Selected scenes",
    primaryCaption: "Arabic dub. Three selected episodes are included below as references for the wider multi-season work.",
    sections: [
      {
        type: "copy",
        label: "The adaptation",
        paragraphs: [
          "Arabic-language adaptation work across multiple seasons of The Amazing World of Gumball, shaped to preserve the series’ pace, humour and character voices for a regional audience. The work focused on natural, performable Arabic dialogue while keeping the timing and comic beats aligned with the original animation. Three selected episodes are included below as representative samples.",
        ],
      },
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
