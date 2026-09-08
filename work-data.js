// One source of truth for case-study content.
// Sections are optional and can be mixed in any order:
// { type: "copy", label: "The idea", heading: "...", paragraphs: ["..."] }
// { type: "stills", label: "Campaign stills", items: [{ src, alt, caption }] }
// { type: "films", label: "More films", items: [{ title, src, poster, caption }] }
// { type: "credits", label: "Credits", items: [{ role, names }] }
// { type: "coverage", label: "Conversation & coverage", intro, items: [{ kind, scope, author, platform, quote, summary, href, linkLabel }] }
// Optional factual fields:
// role: "Exact credited role"
// meta: [{ label: "Versions", value: "Arabic · English" }]
window.PORTFOLIO_PROJECTS = [
  {
    "slug": "apple-switchers",
    "client": "Apple",
    "title": "Switchers",
    "poster": "assets/img/apple-switchers-tahani.jpg",
    "primaryFilm": "assets/video/apple-switchers-tahani.mp4",
    "deck": "Real iPhone switchers in Saudi Arabia and the UAE, telling their own stories through Memoji.",
    "role": "Creative Director & copy",
    "meta": [
      {
        "label": "Markets",
        "value": "UAE · Saudi Arabia"
      },
      {
        "label": "Scope",
        "value": "Around 20 short edits"
      }
    ],
    "primaryLabel": "Tahani · Photography",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "The stories came before the films. We began by meeting people who had moved to iPhone, listening for the experiences behind the switch: a missed photograph, a battery giving up mid-game, a phone freezing at the wrong moment. Small frustrations, told in their own words.",
          "A second round of interviews let us go deeper. From those conversations, we shaped short edits around the details that made each person’s story theirs. Tahani’s photography, Khaled’s battery life and Ziad’s gaming became distinct Memoji performances, each keeping the participant’s recorded voice."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "As creative director, I led the team from candidate review and interviews through to the finished films. I reviewed profiles, helped select the stories and shaped the edits, working with animators and the music team as the interviews became Memoji performances. Together, we made around 20 short edits across Saudi Arabia and the UAE."
        ]
      },
      {
        "type": "films",
        "label": "Selected Saudi stories",
        "layout": "grid",
        "items": [
          {
            "title": "Khaled · Battery life",
            "src": "assets/video/apple-switchers-khaled.mp4",
            "poster": "assets/img/apple-switchers-khaled.jpg"
          },
          {
            "title": "Ziad · Gaming",
            "src": "assets/video/apple-switchers-ziad.mp4",
            "poster": "assets/img/apple-switchers-ziad.jpg"
          }
        ]
      },
      {
        "type": "copy",
        "label": "Voice, character & music",
        "paragraphs": [
          "Casting here meant finding people with something specific to say. The creative work continued in the edit: how much of a pause to keep, where an expression could carry the thought, how to give a short story a beginning and a payoff. Memoji gave those everyday experiences a playful visual form.",
          "Music helped give the stories a local character. Syn created original music for the wider Switchers campaign, which included Saudi Arabia and the UAE. Their production account describes working with regional instrumentalists, including Saudi oud players. Together, voice, animation and music turn an interview excerpt into a small performance."
        ],
        "sources": [
          {
            "title": "Syn · Creating the Switchers music",
            "href": "https://www.syn.world/work/apple-switchers"
          }
        ]
      },
      {
        "type": "coverage",
        "label": "Conversation & coverage",
        "items": [
          {
            "kind": "Production perspective",
            "scope": "The wider Switchers campaign",
            "author": "Syn",
            "summary": "The music team’s account describes giving real switchers’ stories a regional sound, including collaborations with Saudi oud players.",
            "href": "https://www.syn.world/work/apple-switchers",
            "linkLabel": "Read the music story"
          }
        ]
      }
    ],
    "loop": "assets/loop/apple-switchers-tahani.mp4"
  },
  {
    "slug": "apple-relax-saudi",
    "client": "Apple",
    "title": "Relax, it’s iPhone",
    "poster": "assets/img/apple-relax-matchmaker.jpg",
    "primaryFilm": "assets/video/apple-relax-matchmaker.mp4",
    "deck": "Saudi stories where iPhone camera features become part of the comedy.",
    "role": "Creative Director & copy",
    "meta": [
      {
        "label": "Market",
        "value": "Saudi Arabia"
      },
      {
        "label": "Campaigns",
        "value": "2025 · 2026"
      }
    ],
    "primaryLabel": "The Matchmaker · 2025",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "A little family drama can make a camera feature easy to understand. For Ramadan 2025, the Saudi Relax films borrowed the heightened emotions and familiar relationships of Saudi soap operas. Each story lets an iPhone feature tip the scene in an unexpected direction.",
          "In The Matchmaker, an aunt uses slow motion to make a potential husband look rather more impressive. In The Favourite Son, a father can rearrange his loyalties simply by changing the focus of a photograph. The demonstration and the joke happen at the same moment."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "As creative director, I led the team from strategy through production, developing the situations and writing the scripts and copy. We shaped the cultural choices and cast together. I worked closely with the director and composer on performance, timing and music."
        ]
      },
      {
        "type": "films",
        "label": "2025",
        "layout": "grid",
        "items": [
          {
            "title": "The Favourite Son",
            "src": "assets/video/apple-relax-favourite-son.mp4",
            "poster": "assets/img/apple-relax-favourite-son.jpg",
            "caption": "Next-generation portraits. A father’s change of heart becomes a change of focus."
          }
        ]
      },
      {
        "type": "copy",
        "label": "Familiar faces",
        "paragraphs": [
          "We considered a broad range of actors before settling on recognisable Saudi names. A familiar face does useful work in a short film: the audience can place the character quickly, leaving more room for the joke.",
          "The 2025 cast brings together Abdullah Al Sadhan, known for two decades of Tash Ma Tash; Adwa Bader, the lead in NAGA and a 2023 TIFF Rising Star; Reem Al Habeeb; and Waleed Alkahtany. Established television comedy meets a newer generation of Saudi screen talent."
        ],
        "sources": [
          {
            "title": "Campaign Middle East · The cast",
            "href": "https://campaignme.com/apple-pays-homage-to-saudi-soap-operas-in-latest-tv-commercials/"
          },
          {
            "title": "Red Sea Film Festival · Abdullah Al Sadhan",
            "href": "https://redseafilmfest.com/en/press/red-sea-film-festival-reveals-full-juries-for-2023-edition/"
          },
          {
            "title": "TIFF · Adwa Bader",
            "href": "https://www.linkedin.com/posts/tiff-net_tiff-announces-exciting-2023-rising-stars-activity-7102290906183069697-rpib"
          }
        ]
      },
      {
        "type": "copy",
        "label": "Direction & music",
        "paragraphs": [
          "The 2025 films were directed by Ali Kalthami, co-founder of Telfaz11 and director of Mandoob. The stories give ordinary exchanges the weight of a television drama; the comedy comes from how seriously the characters take them.",
          "That dramatic world carries into the score. Composer Layal Watfeh, whose work spans film and television, created the 2025 music, with Ahmad Mostafa Zaky credited as assistant composer. We worked across writing, performance and music to keep that comic idea consistent."
        ],
        "sources": [
          {
            "title": "shots · Film and music credits",
            "href": "https://shots.net/news/view/apple-launches-a-special-ramadan-series"
          },
          {
            "title": "Arab Cinema Center · Ali Kalthami",
            "href": "https://acc.film/cannes100/2024/ali-kalthami.php"
          },
          {
            "title": "Alliance for Women Film Composers · Layal Watfeh",
            "href": "https://theawfc.com/spotlight/layal-watfeh/"
          }
        ]
      },
      {
        "type": "copy",
        "label": "The next chapter · 2026",
        "paragraphs": [
          "The 2026 films take the same instinct into new settings: a confrontation, an unsteady ride, a volleyball court and an office nap. Dual Capture, stabilisation, Center Stage and zoom each become a way to reveal the comedy in the situation. The scenes change; the feature still earns its place in the story."
        ]
      },
      {
        "type": "films",
        "label": "2026",
        "layout": "grid",
        "items": [
          {
            "title": "The Confrontation",
            "src": "assets/video/apple-relax-confrontation.mp4",
            "poster": "assets/img/apple-relax-confrontation.jpg",
            "caption": "Dual Capture"
          },
          {
            "title": "Steady Steps",
            "src": "assets/video/apple-relax-skating.mp4",
            "poster": "assets/img/apple-relax-skating.jpg",
            "caption": "Video stabilisation"
          },
          {
            "title": "The Winning Selfie",
            "src": "assets/video/apple-relax-selfie.mp4",
            "poster": "assets/img/apple-relax-selfie.jpg",
            "caption": "Center Stage"
          },
          {
            "title": "Office Nap",
            "src": "assets/video/apple-relax-office.mp4",
            "poster": "assets/img/apple-relax-office.jpg",
            "caption": "8× zoom"
          }
        ]
      },
      {
        "type": "coverage",
        "label": "Conversation & coverage",
        "items": [
          {
            "kind": "Social coverage",
            "scope": "The Favourite Son · 2025",
            "author": "Smashi Business",
            "platform": "YouTube",
            "summary": "Smashi Business picked up the Saudi ad’s dark humour and portrait-focus reveal in a short video about Apple in the Kingdom.",
            "href": "https://www.youtube.com/shorts/HZoA20lidWc",
            "linkLabel": "Watch the commentary"
          },
          {
            "kind": "Creative commentary",
            "scope": "The Favourite Son · 2025",
            "author": "Mohammad Ibrahim",
            "platform": "LinkedIn",
            "summary": "Ibrahim singled out the way family expectations and the portrait-focus feature become one comic story, praising the cultural detail and product integration.",
            "href": "https://www.linkedin.com/posts/md-ib_marketing-localization-brandstorytelling-activity-7308493482484985856-BRW1",
            "linkLabel": "Read the post"
          },
          {
            "kind": "Media coverage",
            "scope": "The Saudi films · 2025",
            "author": "Campaign Middle East",
            "summary": "The publication framed the films as an homage to Saudi soap operas, highlighting the familiar cast and the everyday drama behind the jokes.",
            "href": "https://campaignme.com/apple-pays-homage-to-saudi-soap-operas-in-latest-tv-commercials/",
            "linkLabel": "Read the feature"
          }
        ]
      }
    ],
    "loop": "assets/loop/apple-relax-matchmaker.mp4"
  },
  {
    "slug": "apple-snaptacular",
    "client": "Apple",
    "title": "Snaptacular",
    "poster": "assets/img/apple-snaptacular.jpg",
    "primaryImage": {
      "src": "assets/img/apple-snaptacular.jpg",
      "alt": "iPhone 15 outdoor campaign in Dubai, with the Arabic wordplay above Snaptacular and colourful cameras framing the headline."
    },
    "deck": "One word. A little photographic licence.",
    "role": "Arabic copy & localisation",
    "meta": [
      {
        "label": "Product",
        "value": "iPhone 15"
      },
      {
        "label": "Format",
        "value": "Outdoor · UAE"
      }
    ],
    "primaryLabel": "The headline in the city",
    "primaryCaption": "The Arabic localisation alongside the English campaign line.",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "heading": "A familiar word. A small surprise.",
        "paragraphs": [
          "Snaptacular packs a camera promise into an invented word. The Arabic line needed its own piece of wordplay: something people could recognise, then enjoy discovering.",
          "The line folds the Arabic word for “fantastic” into the familiar sound of “photographic”. The result keeps photography in the word itself, with a little exaggeration built in. On the billboard, the colourful cameras frame a headline that can do its work in a glance."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I wrote the Arabic localisation line for the wider campaign. My part was finding wordplay that gave Arabic readers the same pleasure of recognition and surprise."
        ]
      },
      {
        "type": "coverage",
        "label": "Conversation & coverage",
        "intro": "The line prompted a public discussion about Arabic wordplay and the craft of localisation. These are selected reactions to the billboard, shared on LinkedIn.",
        "items": [
          {
            "kind": "Social reaction",
            "author": "Wafa AlAnazi",
            "platform": "LinkedIn",
            "quote": "I love how Apple sets the standard in Arabic localization",
            "href": "https://www.linkedin.com/posts/wafaalanazi_in-the-realm-of-outdoor-advertising-arabic-activity-7193937600544489473-D2FN",
            "linkLabel": "Read the post"
          },
          {
            "kind": "Comment on the headline",
            "author": "Moey Shawash",
            "platform": "LinkedIn",
            "quote": "one of my favourite Arabic headlines",
            "href": "https://www.linkedin.com/posts/georges-gerges-7951511a_in-the-realm-of-outdoor-advertising-arabic-activity-7193930754492395520-QIhu",
            "linkLabel": "Read the discussion"
          },
          {
            "kind": "Comment on the headline",
            "author": "Hala Al Bassar",
            "platform": "LinkedIn",
            "quote": "We feel your creativity and love for the craft.",
            "href": "https://www.linkedin.com/posts/georges-gerges-7951511a_in-the-realm-of-outdoor-advertising-arabic-activity-7193930754492395520-QIhu",
            "linkLabel": "Read the discussion"
          }
        ]
      }
    ]
  },
  {
    "slug": "apple-pay-riyadh",
    "client": "Apple",
    "title": "Tap. Ride. Done.",
    "poster": "assets/img/apple-pay-metro-ar.jpg",
    "primaryFilm": "assets/video/apple-pay-metro-ar.mp4",
    "deck": "An English and Arabic campaign welcoming Apple Pay to journeys on Riyadh Metro and the city’s buses.",
    "role": "Creative Director & copy",
    "meta": [
      {
        "label": "Languages",
        "value": "English · Arabic"
      },
      {
        "label": "Work",
        "value": "Film · Social · Display"
      }
    ],
    "primaryLabel": "Metro · Arabic",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "Riyadh Metro introduced a new way to move around the city. The campaign brought Apple Pay into that moment with a simple sequence: tap, ride, done. It had to welcome people to the service and make the payment step immediately clear.",
          "The idea works through movement. A hand, a device, a tap, and the journey continues. English and Arabic films for the metro and buses expand into display layouts and six-second social edits, each keeping that same easy rhythm."
        ],
        "sources": [
          {
            "title": "Apple · Travel with Apple Pay in Riyadh",
            "href": "https://www.apple.com/sa/apple-pay/transport/"
          }
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "As creative director, I led the team’s work on the campaign and wrote the English and Arabic copy. We shaped the music, animation and cultural details together, from the rhythm of the films to the illustrated characters."
        ]
      },
      {
        "type": "copy",
        "label": "Making it feel like Riyadh",
        "paragraphs": [
          "The illustration system features the work of Stephen Cheetham. Localisation continued inside that visual world: exploring the shemagh, agal and everyday dress so the characters belonged in the city around them.",
          "Copy, animation and music share a practical job. They carry the viewer through the tap quickly enough for a short film to feel effortless. The smallest edits focus on a single benefit, such as travelling without unlocking the device or using Face ID."
        ]
      },
      {
        "type": "films",
        "label": "Metro & bus",
        "layout": "grid",
        "items": [
          {
            "title": "Metro · English",
            "src": "assets/video/apple-pay-metro-en.mp4",
            "poster": "assets/img/apple-pay-metro-en.jpg"
          },
          {
            "title": "Bus · Arabic",
            "src": "assets/video/apple-pay-bus-ar.mp4",
            "poster": "assets/img/apple-pay-bus-ar.jpg"
          },
          {
            "title": "Bus · English",
            "src": "assets/video/apple-pay-bus-en.mp4",
            "poster": "assets/img/apple-pay-bus-en.jpg"
          }
        ]
      },
      {
        "type": "stills",
        "label": "Display · Arabic",
        "layout": "portrait",
        "items": [
          {
            "src": "assets/img/apple-pay-display-easy-ar.jpg",
            "alt": "Arabic Apple Pay display ad for Riyadh Metro, showing contactless travel."
          },
          {
            "src": "assets/img/apple-pay-display-iphone-ar.jpg",
            "alt": "Arabic Apple Pay display ad for Riyadh Metro, showing an iPhone payment."
          },
          {
            "src": "assets/img/apple-pay-display-watch-ar.jpg",
            "alt": "Arabic Apple Pay display ad for Riyadh Metro, showing an Apple Watch payment."
          }
        ]
      },
      {
        "type": "stills",
        "label": "Display · English",
        "layout": "portrait",
        "items": [
          {
            "src": "assets/img/apple-pay-display-easy-en.jpg",
            "alt": "English Apple Pay display ad for Riyadh Metro, showing contactless travel."
          },
          {
            "src": "assets/img/apple-pay-display-iphone-en.jpg",
            "alt": "English Apple Pay display ad for Riyadh Metro, showing an iPhone payment."
          },
          {
            "src": "assets/img/apple-pay-display-watch-en.jpg",
            "alt": "English Apple Pay display ad for Riyadh Metro, showing an Apple Watch payment."
          }
        ]
      },
      {
        "type": "films",
        "label": "Six seconds · Arabic",
        "layout": "portrait",
        "items": [
          {
            "title": "Hello Riyadh",
            "src": "assets/video/apple-pay-hello-ar.mp4",
            "poster": "assets/img/apple-pay-hello-ar.jpg"
          },
          {
            "title": "No Face ID",
            "src": "assets/video/apple-pay-no-face-id-ar.mp4",
            "poster": "assets/img/apple-pay-no-face-id-ar.jpg"
          },
          {
            "title": "No unlocking",
            "src": "assets/video/apple-pay-no-unlock-ar.mp4",
            "poster": "assets/img/apple-pay-no-unlock-ar.jpg"
          }
        ]
      },
      {
        "type": "films",
        "label": "Six seconds · English",
        "layout": "portrait",
        "items": [
          {
            "title": "Hello Riyadh",
            "src": "assets/video/apple-pay-hello-en.mp4",
            "poster": "assets/img/apple-pay-hello-en.jpg"
          },
          {
            "title": "No Face ID",
            "src": "assets/video/apple-pay-no-face-id-en.mp4",
            "poster": "assets/img/apple-pay-no-face-id-en.jpg"
          },
          {
            "title": "No unlocking",
            "src": "assets/video/apple-pay-no-unlock-en.mp4",
            "poster": "assets/img/apple-pay-no-unlock-en.jpg"
          }
        ]
      },
      {
        "type": "coverage",
        "label": "Conversation & coverage",
        "intro": "Public conversation around the service introduced in the campaign.",
        "items": [
          {
            "kind": "Launch conversation",
            "author": "Sabre Bugri",
            "platform": "LinkedIn",
            "summary": "At launch, Bugri highlighted the simplicity of using Express Mode on Riyadh’s metro and buses: tap and travel without unlocking the device.",
            "href": "https://www.linkedin.com/posts/sabre_apple-pay-express-mode-activity-7272457413524377600-cTSW",
            "linkLabel": "Read the launch post"
          }
        ]
      }
    ],
    "loop": "assets/loop/apple-pay-metro-ar.mp4"
  },
  {
    "slug": "apple-watch-saudi",
    "client": "Apple",
    "title": "A day with Apple Watch",
    "poster": "assets/img/apple-watch-saudi.jpg",
    "primaryFilm": "assets/video/apple-watch-saudi.mp4",
    "deck": "An Apple Watch film built around a Saudi day, from sleep and swimming to an evening out with friends.",
    "role": "Creative Director & copy",
    "meta": [
      {
        "label": "Market",
        "value": "Saudi Arabia"
      },
      {
        "label": "Language",
        "value": "Arabic"
      }
    ],
    "primaryLabel": "Apple Watch · Saudi Arabia",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "The film follows a Saudi day through the people living it: waking up, getting in the water, checking in on health and heading out with friends. Each moment gives an Apple Watch feature a natural place in a routine.",
          "The Arabic narration keeps the story moving, with encouragement and a little humour. A quiet morning gives way to activity, then to an evening out. That change of pace lets the film cover several features while still feeling like a day unfolding."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "As creative director, I led the team through strategy and production, developing the situations and writing the script and copy. I helped choose the cast and worked with the director and composer to connect the performances, music and cultural detail."
        ]
      },
      {
        "type": "copy",
        "label": "People, performance & pace",
        "paragraphs": [
          "The people and their reactions give the product story its warmth. A feature becomes more interesting when it belongs to someone waking up, swimming or spending time with friends. Casting and performance sit alongside the writing in making those moments feel familiar.",
          "Music and narration connect the different scenes. The voice moves between observation and encouragement, while the soundtrack carries the changing energy of the day. I worked with the team to keep those elements connected to the situations and cultural detail."
        ]
      }
    ],
    "loop": "assets/loop/apple-watch-saudi.mp4"
  },
  {
    "slug": "apple-ipad-musical",
    "client": "Apple",
    "title": "Your next computer",
    "poster": "assets/img/apple-ipad-musical.jpg",
    "primaryFilm": "assets/video/apple-ipad-musical.mp4",
    "deck": "Adapting an iPad musical into Arabic, from the words on the page to the voices singing them.",
    "role": "Arabic localisation lead",
    "meta": [
      {
        "label": "Craft",
        "value": "Lyrics · Casting · Singing direction"
      }
    ],
    "primaryLabel": "Your next computer is not a computer · Arabic",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "People stuck at their computers look out at a different way of working. The global iPad film turns that wish into a musical, using Part of Your World from The Little Mermaid, written by Alan Menken and Howard Ashman. A song about longing becomes a playful argument for the freedom of iPad.",
          "The Arabic version had to carry the idea through a new language and a new vocal performance. Every line needed to make sense on first hearing, fit the existing melody and feel at home with the person singing on screen."
        ],
        "sources": [
          {
            "title": "D23 · The original song",
            "href": "https://d23.com/a-to-z/part-of-your-world/"
          },
          {
            "title": "iSpot · The global iPad film",
            "href": "https://www.ispot.tv/ad/ONSz/apple-ipad-your-next-computer"
          }
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I led the Arabic adaptation with the localisation team, reshaping the lyrics, choosing the singers and directing the singing sessions. Working with the performers, I brought the words, phrasing and vocal delivery into the existing film."
        ]
      },
      {
        "type": "copy",
        "label": "Writing for the voice",
        "paragraphs": [
          "In a musical, the adaptation is only finished when it is sung. A phrase has to fit a breath, land its emphasis on the right beat and still sound like something the character could mean. The humour depends on people giving a very ordinary frustration a surprisingly heartfelt performance.",
          "Choosing the singers and directing the sessions were part of the same creative task as reshaping the lyrics. The Arabic voices had to belong to the faces and moods already in the film, and work together as the song gathered momentum."
        ]
      },
      {
        "type": "coverage",
        "label": "Conversation & coverage",
        "items": [
          {
            "kind": "Media coverage",
            "scope": "Global original · 2021",
            "author": "MacRumors",
            "summary": "MacRumors highlighted the musical premise and visual storytelling: people at conventional computers singing about the freedom of iPad.",
            "href": "https://www.macrumors.com/2021/06/12/ipad-pro-ad-little-mermaid/",
            "linkLabel": "Read the feature"
          }
        ]
      }
    ],
    "loop": "assets/loop/apple-ipad-musical.mp4"
  },
  {
    "slug": "apple-gaming",
    "client": "Apple",
    "title": "A leap in gaming",
    "poster": "assets/img/apple-gaming-day.jpg",
    "primaryImage": {
      "src": "assets/img/apple-gaming-day.jpg",
      "alt": "iPhone 16 Pro billboard on King Fahd Road in Riyadh, featuring Assassin’s Creed Mirage and the Arabic campaign line."
    },
    "deck": "An outdoor idea for iPhone gaming, inspired by Assassin’s Creed’s signature move: the Leap of Faith.",
    "role": "Concept & copy",
    "meta": [
      {
        "label": "Market",
        "value": "Saudi Arabia"
      },
      {
        "label": "Format",
        "value": "Outdoor"
      }
    ],
    "primaryLabel": "King Fahd Road · Riyadh",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "Assassin’s Creed has a gesture players recognise: the Leap of Faith. With Mirage on iPhone, that offered a compact creative connection. A leap inside the game could also express a leap in what gaming on a phone could be.",
          "The Arabic headline builds on that connection. It gives players a reference they already understand, while the wider idea remains clear to someone simply passing the billboard. The line and game imagery work together at the scale of King Fahd Road in Riyadh."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I identified the opportunity and came up with the concept and Arabic headline. My starting point was the game itself: finding a familiar part of its world that could say something about gaming on iPhone."
        ]
      },
      {
        "type": "copy",
        "label": "The idea on the street",
        "paragraphs": [
          "Outdoor gives a headline very little time. Here, a familiar gaming reference carries the thought in a few words, with the visual completing it. The day and night photographs show the same simple relationship holding across two very different views of the city."
        ]
      },
      {
        "type": "stills",
        "label": "After dark",
        "items": [
          {
            "src": "assets/img/apple-gaming-night.jpg",
            "alt": "The illuminated iPhone 16 Pro gaming billboard in Riyadh at night."
          }
        ]
      }
    ]
  },
  {
    "slug": "apple-arabic-localisation",
    "client": "Apple",
    "title": "In Arabic",
    "poster": "assets/img/apple-health-ar.jpg",
    "primaryFilm": "assets/video/apple-health-ar.mp4",
    "deck": "Arabic adaptations of global Apple films, spanning health, privacy, everyday activity and adventure.",
    "role": "Arabic localisation lead",
    "meta": [
      {
        "label": "Work",
        "value": "Adaptation · Casting · Dubbing direction"
      }
    ],
    "primaryLabel": "Health with iPhone + Apple Watch · Arabic",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "A global film arrives with its own characters, timing and tone. The Arabic adaptation has to bring those elements together again in performance. Across this collection, that means a crowd of conflicting health advice, an uncomfortably public waiting room, playful encouragement and the drama of an expedition.",
          "Each film needs a different voice. A joke has to arrive with the reaction on screen. A short exchange has to feel conversational inside a fixed edit. A more dramatic script needs room to build. The work happens in the relationship between the wording and the delivery."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I led the team’s Arabic localisation work, shaping the copy and directing the dubbing actors. My role was to help the performances carry each film’s humour, pace and character into Arabic, within the existing direction and edit. The English Health film is included below for comparison."
        ]
      },
      {
        "type": "copy",
        "label": "Health · voices & music",
        "paragraphs": [
          "In Health with iPhone + Apple Watch, strangers offer advice until their voices become a wall of opinions. The Arabic performances need to feel like individual people while building that collective noise. The turn comes when the woman looks at information about her own health.",
          "The global film was directed by Björn Rühmann and uses Dhund Lo Mujhe by performer-composer Sheherazaad. Her music accompanies the shift from other people’s opinions to the woman’s own perspective. My part was the Arabic adaptation and dubbing direction within that existing film."
        ],
        "sources": [
          {
            "title": "Muse by Clio · Film credits",
            "href": "https://musebyclios.com/health/listen-to-your-body-not-unsolicited-health-advice-says-apple/"
          },
          {
            "title": "Erased Tapes Music · Sheherazaad’s track",
            "href": "https://www.erasedtapesmusic.com/work/apple-listen-to-your-body"
          }
        ]
      },
      {
        "type": "films",
        "label": "Selected films",
        "layout": "grid",
        "items": [
          {
            "title": "The Waiting Room",
            "src": "assets/video/apple-waiting-room.mp4",
            "poster": "assets/img/apple-waiting-room.jpg",
            "caption": "The global film pairs Jane Lynch’s intrusive narration with Craig Gillespie’s direction: a waiting room hears everyone’s private health details. I led the Arabic adaptation and dubbing, carrying the escalating embarrassment into a new voice.",
            "sources": [
              {
                "title": "The Drum · The original performance",
                "href": "https://www.thedrum.com/news/jane-lynch-stars-health-shaming-app-apple-data-privacy-ad"
              }
            ]
          },
          {
            "title": "Hello Sunshine",
            "src": "assets/video/apple-hello-sunshine.mp4",
            "poster": "assets/img/apple-hello-sunshine.jpg",
            "caption": "Apple Watch Series 6. Plans for a quiet summer keep expanding into another activity, giving the Arabic narration an increasingly busy rhythm."
          },
          {
            "title": "Answers",
            "src": "assets/video/apple-answers.mp4",
            "poster": "assets/img/apple-answers.jpg",
            "caption": "Apple Watch Series 7. Questions about movement, sleep and health lead the story, with the Watch providing the answers along the way."
          },
          {
            "title": "New Things",
            "src": "assets/video/apple-new-things.mp4",
            "poster": "assets/img/apple-new-things.jpg",
            "caption": "Apple Watch Series 8. A conversational introduction to new ways of understanding movement, sleep and health, alongside safety features."
          },
          {
            "title": "Call to the Wild",
            "src": "assets/video/apple-ultra.mp4",
            "poster": "assets/img/apple-ultra.jpg",
            "caption": "Apple Watch Ultra. An expedition-style invitation plays over a landscape of mountains, water and the Watch itself, calling for a more dramatic Arabic delivery."
          }
        ]
      },
      {
        "type": "films",
        "label": "Original English film",
        "layout": "grid",
        "items": [
          {
            "title": "Health with iPhone + Apple Watch",
            "src": "assets/video/apple-health-en.mp4",
            "poster": "assets/img/apple-health-en.jpg",
            "caption": "Global original · shown for comparison"
          }
        ]
      },
      {
        "type": "coverage",
        "label": "Conversation & coverage",
        "intro": "Coverage and recognition of the global films. My contribution was their Arabic localisation and dubbing direction.",
        "items": [
          {
            "kind": "Creative commentary",
            "scope": "Global original · Health",
            "author": "Natalie Hogg",
            "platform": "LinkedIn",
            "quote": "The noise is relentless and instantly familiar.",
            "summary": "Hogg praised the film for recognising how overwhelming contradictory health advice can feel.",
            "href": "https://www.linkedin.com/posts/nhogg1_i-was-watching-an-apple-ad-last-week-and-activity-7472649261697011712-NI5i",
            "linkLabel": "Read the post"
          },
          {
            "kind": "Campaign recognition",
            "scope": "Global original · The Waiting Room",
            "author": "The One Show",
            "summary": "Silver Pencil, Health & Wellness / Craft / Writing, 2024.",
            "href": "https://www.oneclub.org/awards/theoneshow/-award/52967/the-waiting-room/",
            "linkLabel": "View the award & credits"
          }
        ]
      }
    ],
    "loop": "assets/loop/apple-health-ar.mp4"
  },
  {
    "slug": "velar-vr",
    "client": "Range Rover Velar",
    "title": "360° VR Experience",
    "poster": "assets/img/velar-vr.jpg",
    "primaryFilm": "assets/video/velar-vr.mp4",
    "role": "Creative & copy lead",
    "meta": [
      {
        "label": "Format",
        "value": "360° film"
      },
      {
        "label": "Languages",
        "value": "Arabic · English"
      }
    ],
    "primaryLabel": "Virtual Drive Experience — Arabic",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "The experience begins on an open road, then takes the viewer inside the Velar. Rock formations pass the windows, the light changes and the journey continues into a night sky. The cabin remains the point of reference as the world moves around it.",
          "The 360° format gives the viewer a part in the film: deciding where to look. Product details emerge along the route, from the displays and interior lighting to the panoramic roof. The journey provides a reason to explore the car."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I led the Arabic and English copy and worked with the team on the concept, creative vision and music direction. Working within the wider production, my focus was a script that could guide attention while leaving room for the viewer to explore."
        ]
      },
      {
        "type": "copy",
        "label": "Writing around the viewer",
        "paragraphs": [
          "A conventional film can cut straight to the detail it wants you to notice. Here, the viewer may be looking elsewhere. The writing, scene transitions and music need to keep the journey legible as attention moves around the cabin.",
          "The changing landscape gives the film its progression. Daylight, rock and darkness create different settings for the same interior, while the music connects those changes into a continuous drive. The Arabic and English versions follow that shared visual rhythm."
        ]
      },
      {
        "type": "films",
        "label": "English-language version",
        "items": [
          {
            "title": "Virtual Drive Experience — English",
            "src": "assets/video/velar-vr-2.mp4",
            "poster": "assets/img/velar-vr-2.jpg",
            "caption": "The English version follows the same journey, with copy timed to the changing surroundings and feature reveals."
          }
        ]
      },
      {
        "type": "credits",
        "label": "Credits",
        "items": [
          {
            "role": "Agency",
            "names": "Spark44"
          },
          {
            "role": "CGI & VFX",
            "names": "RéCH"
          },
          {
            "role": "Colour grade",
            "names": "Dan Moran"
          }
        ]
      }
    ],
    "deck": "A virtual drive that lets the viewer choose where to look.",
    "primaryCaption": "Panoramic preview of the Arabic film."
  },
  {
    "slug": "lr-land-of",
    "client": "Land Rover",
    "title": "The Land of Land Rovers",
    "poster": "assets/img/lr-land-of.jpg",
    "primaryFilm": "assets/video/lr-land-of.mp4",
    "role": "Creative & copy",
    "primaryLabel": "The Land of Land Rovers",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "In Maneybhanjang, on the India–Nepal border, old Series Land Rovers are part of everyday life. They carry people and supplies up the steep route towards Sandakphu. Drivers maintain them, neighbours depend on them, and stories about the vehicles become stories about the community.",
          "For Land Rover’s 70th anniversary, the film follows that relationship through the people who live it. Pride, practical knowledge and affection give the brand’s heritage a human scale. The cars’ age matters because they are still doing the work."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I contributed to the concept, idea development and scripts as part of the creative team. My focus was helping the community’s experiences come together as a story."
        ]
      },
      {
        "type": "copy",
        "label": "People, place & music",
        "paragraphs": [
          "Director Matt Hopkins describes spending ten days in the village, meeting people and researching their stories. That closeness is visible in the film: conversations in shops and homes sit beside the rough mountain journey itself. The landscape explains what the vehicles face; the people explain why they matter.",
          "Matt Shaw’s photography moves between those intimate encounters and the scale of the hills. Dan Graves created the music and sound design. Together, the images and sound give the journey space while keeping the villagers’ voices at its centre."
        ],
        "sources": [
          {
            "title": "Matt Hopkins · Making the documentary",
            "href": "https://matthopkins.co/work/land-rover"
          },
          {
            "title": "Dan Graves · Music & sound design",
            "href": "https://vimeo.com/344901207"
          }
        ]
      },
      {
        "type": "credits",
        "label": "Credits",
        "items": [
          {
            "role": "Agency",
            "names": "Spark44"
          },
          {
            "role": "Director",
            "names": "Matt Hopkins"
          },
          {
            "role": "Production company",
            "names": "The Progress Film Company"
          },
          {
            "role": "Director of photography",
            "names": "Matt Shaw"
          },
          {
            "role": "Music & sound design",
            "names": "Dan Graves"
          },
          {
            "role": "Agency producer",
            "names": "Chris Hook"
          },
          {
            "role": "Production producer",
            "names": "Richard “Rich” Guy"
          },
          {
            "role": "India production",
            "names": "Angles Unlimited India"
          }
        ]
      },
      {
        "type": "coverage",
        "label": "Conversation & coverage",
        "items": [
          {
            "kind": "Creative commentary",
            "author": "Chris Lema",
            "summary": "Lema used the film to explain how a community can lead a brand story, with the vehicle earning its place through the people’s lives.",
            "href": "https://chrislema.com/the-art-of-telling-stories/",
            "linkLabel": "Read the story analysis"
          },
          {
            "kind": "Production perspective",
            "author": "Dan Drage, Spark44",
            "platform": "Travel Video Awards",
            "summary": "In a filmmaker Q&A, Drage discussed the relationship between the villagers and their vehicles, and the response to a story grounded in that bond.",
            "href": "https://thetravelvideoawards.com/spotlight_article/spark44-the-land-of-land-rovers/",
            "linkLabel": "Read the interview"
          },
          {
            "kind": "Campaign recognition",
            "author": "NAB Show & Citizine",
            "scope": "2019 Travel Video Awards",
            "summary": "Nominated for Best Video by a Lifestyle Brand at the 2019 Travel Video Awards.",
            "href": "https://www.nab.org/documents/newsroom/pressRelease.asp?id=4951",
            "linkLabel": "View the official nominees"
          }
        ]
      }
    ],
    "deck": "A mountain community tells the story of the vehicles it has kept alive.",
    "meta": [
      {
        "label": "Format",
        "value": "Documentary"
      },
      {
        "label": "Occasion",
        "value": "Land Rover’s 70th anniversary"
      }
    ]
  },
  {
    "slug": "lr-ramadan-2019",
    "client": "Land Rover",
    "title": "Ramadan 2019",
    "poster": "assets/img/lr-ramadan-2019.jpg",
    "primaryFilm": "assets/video/lr-ramadan-2019.mp4",
    "role": "Concept & copy lead",
    "primaryLabel": "Stay Grounded",
    "primaryCaption": "Automatic Access Height lowers the vehicle as “Stay Grounded” appears.",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "The campaign connects Ramadan with two simple thoughts: humility and guidance. Each is expressed through a Land Rover feature, giving the seasonal message a physical action on screen.",
          "In Stay Grounded, the vehicle lowers itself using Automatic Access Height. In Light Your Path, headlights illuminate a winding road through the trees. Each headline describes the feature and carries a second meaning for the occasion."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I led the idea development and copy within the creative team, shaping the campaign around humility and guidance. The challenge for me was to let each vehicle feature carry the seasonal thought."
        ]
      },
      {
        "type": "copy",
        "label": "A feature becomes a thought",
        "paragraphs": [
          "The films are deliberately compact. The movement happens, the headline lands, and the feature name completes the thought. That sequence gives the audience a moment to make the connection themselves.",
          "Both executions use the same structure, so they feel like parts of one campaign. A small physical change carries the message: a body lowering towards the ground, or a beam revealing the road ahead. The copy stays close to what is actually happening in the image."
        ]
      },
      {
        "type": "films",
        "label": "The films",
        "items": [
          {
            "title": "Light Your Path",
            "src": "assets/video/lr-ramadan-2019-2.mp4",
            "poster": "assets/img/lr-ramadan-2019-2.jpg",
            "caption": "Pixel-Laser LED headlights illuminate the route, turning a product demonstration into a message about guidance."
          }
        ]
      }
    ],
    "deck": "Two Ramadan messages, found in what the vehicle already does.",
    "meta": [
      {
        "label": "Format",
        "value": "Two short films"
      },
      {
        "label": "Year",
        "value": "2019"
      }
    ]
  },
  {
    "slug": "rrs-life-simple",
    "client": "Range Rover Sport",
    "title": "Life is Simple",
    "poster": "assets/img/rrs-life-simple.jpg",
    "primaryFilm": "assets/video/rrs-life-simple.mp4",
    "role": "Concept & copy lead",
    "primaryLabel": "Gesture Sunblind",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "A man wants to shut out the morning light without leaving his pillow. A woman carrying a tray would like a kitchen cupboard to close with a movement of her foot. Both reach for a small convenience that ordinary life refuses to provide.",
          "The same gestures work in the Range Rover Sport. Its gesture sunblind and powered tailgate become the answers to the opening frustrations. “If only life was that simple” connects the two worlds, giving each feature a familiar situation to solve."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I led the idea development and copy within the creative team. I worked on the comic setup of each film, connecting a familiar frustration with the gesture that makes the feature useful."
        ]
      },
      {
        "type": "copy",
        "label": "The joke is in the gesture",
        "paragraphs": [
          "The performances keep the frustration small: a wave, a glance, a pause when nothing happens. Those reactions make the wish recognisable. The car then answers it with the same movement, so the viewer understands the feature through the joke.",
          "The structure works across both films without repeating the situation. One begins in bed, the other in a kitchen. Matching the human action to the vehicle response holds the campaign together and keeps the demonstration easy to follow."
        ]
      },
      {
        "type": "films",
        "label": "The films",
        "items": [
          {
            "title": "Powered Gesture Tailgate",
            "src": "assets/video/rrs-life-simple-2.mp4",
            "poster": "assets/img/rrs-life-simple-2.jpg",
            "caption": "With her hands full, a woman tries closing a cupboard with her foot. The powered gesture tailgate makes the same wish work outside."
          }
        ]
      }
    ],
    "deck": "Everyday frustrations meet a car that understands the gesture.",
    "meta": [
      {
        "label": "Format",
        "value": "Two social films"
      },
      {
        "label": "Campaign line",
        "value": "If only life was that simple"
      }
    ],
    "primaryCaption": "A sleepy wave does little for the bedroom blinds. In the Range Rover Sport, the gesture works."
  },
  {
    "slug": "lr-journey-rediscovery",
    "client": "Land Rover",
    "title": "A Journey of Rediscovery",
    "poster": "assets/img/lr-journey-rediscovery.jpg",
    "primaryFilm": "assets/video/lr-journey-rediscovery.mp4",
    "role": "Creative & copywriter",
    "primaryLabel": "A Journey of Rediscovery",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "Robin Webb and Majid Awwad arrived in the Trucial States as civil engineers in the 1960s. Their Land Rovers took them between settlements, work sites and stretches of country where roads were scarce. Decades later, their memories reveal a different view of the Emirates.",
          "Created for Land Rover’s 70th anniversary, the film combines their present-day accounts with Webb’s own archive. Boats on the creek, early buildings and vehicles on rough tracks place the stories in the world the two men remember. The brand’s history becomes part of a much larger story of change."
        ],
        "sources": [
          {
            "title": "Hind Shoufani · The film and its archive",
            "href": "https://hindshoufani.com/portfolio-item/journey/"
          }
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I worked with the team on the script as a creative and copywriter, and helped choose the music. My contribution was to the storytelling and tone as the film moved between the two men’s memories and the archive."
        ]
      },
      {
        "type": "copy",
        "label": "Memory on screen",
        "paragraphs": [
          "Hind Shoufani directed, edited and produced the documentary. Webb’s own films and photographs give his recollections something tangible to meet, fifty years after he recorded them.",
          "The two men speak from experience. Their voices and the surviving images carry the detail, while the music helps the transitions hold together emotionally. The result is intimate in scale: the growth of a country seen through journeys, daily work and the people who remember them."
        ]
      },
      {
        "type": "credits",
        "label": "Credits",
        "items": [
          {
            "role": "Agency",
            "names": "Spark44 MENA"
          },
          {
            "role": "Production company",
            "names": "Discontent"
          },
          {
            "role": "Executive producer",
            "names": "Iain Akerman"
          },
          {
            "role": "Director, editor & producer",
            "names": "Hind Shoufani"
          },
          {
            "role": "Director of photography",
            "names": "Nick Zajicek"
          },
          {
            "role": "Colour grade",
            "names": "Belal Hibri — Lucid, Beirut"
          },
          {
            "role": "Business director",
            "names": "Jose Acar"
          }
        ]
      },
      {
        "type": "coverage",
        "label": "Conversation & coverage",
        "items": [
          {
            "kind": "Media coverage",
            "author": "The National",
            "summary": "The National featured the film’s look at life in the Trucial States, connecting the engineers’ memories with the early history of the UAE.",
            "href": "https://www.thenationalnews.com/arts-culture/timeframe-land-rover-celebrated-in-the-trucial-states-1.758807",
            "linkLabel": "Read the feature"
          },
          {
            "kind": "Media coverage",
            "author": "Gulf News",
            "summary": "Gulf News covered the documentary as a window into life in the Emirates 50 years earlier, highlighting the personal accounts and historic footage.",
            "href": "https://gulfnews.com/going-out/society/new-film-documents-life-in-uae-50-years-ago-1.2260451",
            "linkLabel": "Read the feature"
          },
          {
            "kind": "Director’s perspective",
            "author": "Hind Shoufani",
            "summary": "Shoufani describes revisiting Robin Webb’s archive and extending the documentary into two shorter portraits for the online and social release.",
            "href": "https://hindshoufani.com/portfolio-item/journey/",
            "linkLabel": "Read the production account"
          }
        ]
      }
    ],
    "deck": "Two engineers, an old film archive, and a country taking shape.",
    "meta": [
      {
        "label": "Format",
        "value": "Documentary · 2018"
      },
      {
        "label": "Setting",
        "value": "The Trucial States, 1960s"
      }
    ]
  },
  {
    "slug": "lr-ready-more",
    "client": "Land Rover",
    "title": "Ready for More",
    "poster": "assets/img/lr-ready-more.jpg",
    "primaryFilm": "assets/video/lr-ready-more.mp4",
    "role": "Creative & copywriter",
    "primaryLabel": "The Journey of Challenges",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "Ready for More pairs Land Rover Discovery with explorer Mostafa Salameh on a journey across Jordan. Four participants face challenges involving routine, darkness, heights and the sea. A lead film introduces Mostafa’s own relationship with adventure; the following stories bring it down to the scale of an individual decision.",
          "The connection to Discovery grows out of the journey. The vehicle carries people towards unfamiliar places, while the real question is what they will do when they arrive. Each episode gives “Ready for More” a different personal meaning."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I worked with the team on the scripts as a creative and copywriter, and helped choose the music. I focused on connecting Mostafa’s perspective with each participant’s experience while giving the stories their own character."
        ]
      },
      {
        "type": "copy",
        "label": "The person behind the challenge",
        "paragraphs": [
          "Mostafa is a mountaineer who has completed the Explorers Grand Slam, including the Seven Summits and both poles. That experience gives his encouragement weight. In the films, he listens, explains and takes the next step alongside the participant.",
          "Director Nizar Sfair keeps the journeys close to the people undertaking them. The dramatic landscape gives each challenge its scale; the conversations and moments of hesitation give it a personal stake. Music helps carry the movement from anticipation into action."
        ],
        "sources": [
          {
            "title": "Mostafa Salameh · His story and the collaboration",
            "href": "https://www.mostafasalameh.com/speaking"
          }
        ]
      },
      {
        "type": "films",
        "label": "The challenges",
        "items": [
          {
            "title": "The Routine Challenge",
            "src": "assets/video/lr-ready-more-routine.mp4",
            "poster": "assets/img/lr-ready-more-routine.jpg",
            "caption": "A familiar working day gives way to a journey through water and rock. The challenge begins with leaving the usual routine behind."
          },
          {
            "title": "The Darkness Challenge",
            "src": "assets/video/lr-ready-more-darkness.mp4",
            "poster": "assets/img/lr-ready-more-darkness.jpg",
            "caption": "Bahaa talks about his fear before entering a dark space with Mostafa. The lantern light keeps the focus on the next step."
          },
          {
            "title": "The Heights Challenge",
            "src": "assets/video/lr-ready-more-heights.mp4",
            "poster": "assets/img/lr-ready-more-heights.jpg",
            "caption": "Bashar faces a climb with Mostafa beside him. The wide landscape and close views of hands and feet give the ascent two very different scales."
          },
          {
            "title": "The Sea Challenge",
            "src": "assets/video/lr-ready-more-sea.mp4",
            "poster": "assets/img/lr-ready-more-sea.jpg",
            "caption": "The journey moves from the shore into open water, following the participant from preparation towards the first dive."
          }
        ],
        "layout": "grid"
      },
      {
        "type": "credits",
        "label": "Credits",
        "items": [
          {
            "role": "Agency",
            "names": "Spark44"
          },
          {
            "role": "Production company",
            "names": "Rolling Thunder Dubai"
          },
          {
            "role": "Director",
            "names": "Nizar Sfair"
          },
          {
            "role": "Explorer",
            "names": "Mostafa Salameh"
          },
          {
            "role": "The Darkness Challenge — Director of photography",
            "names": "Robo Wilson"
          },
          {
            "role": "The Darkness Challenge — Second camera & Ronin",
            "names": "Martin Leahy"
          },
          {
            "role": "The Darkness Challenge — Editor",
            "names": "David Zavadescu"
          }
        ]
      },
      {
        "type": "coverage",
        "label": "Conversation & coverage",
        "items": [
          {
            "kind": "Director’s post",
            "scope": "The Darkness Challenge",
            "author": "Nizar Sfair",
            "platform": "Vimeo",
            "summary": "Sfair shared the episode in which Bahaa faces his fear of darkness with explorer Mostafa Salameh, alongside the film’s production credits.",
            "href": "https://vimeo.com/303594285",
            "linkLabel": "View the director’s post"
          },
          {
            "kind": "Explorer’s perspective",
            "author": "Mostafa Salameh",
            "summary": "Salameh features the collaboration in his own work, connecting the episodes with his approach to courage, perseverance and guiding others through a challenge.",
            "href": "https://www.mostafasalameh.com/speaking",
            "linkLabel": "Explore the collaboration"
          }
        ]
      }
    ],
    "deck": "An explorer helps four people take a step beyond the familiar.",
    "meta": [
      {
        "label": "Format",
        "value": "Five-film series"
      },
      {
        "label": "Location",
        "value": "Jordan"
      }
    ]
  },
  {
    "slug": "fab-heartbeat",
    "client": "FAB",
    "title": "Make Every Heartbeat Count",
    "poster": "assets/img/fab-heartbeat.jpg",
    "primaryFilm": "assets/video/fab-heartbeat.mp4",
    "role": "Concept & copywriter",
    "primaryLabel": "Make Every Heartbeat Count",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "For FAB’s association with the Formula 1 Etihad Airways Abu Dhabi Grand Prix, the campaign finds a shared rhythm between racing and everyday life. A band performs, a vehicle crosses open ground, a couple dances among moving boxes. The film keeps returning to the track.",
          "“Make Every Heartbeat Count” gives these different scenes a common thought. The excitement of a race sits alongside smaller moments of anticipation, freedom and celebration. That connection gives the sponsorship a place in people’s lives beyond the circuit."
        ],
        "sources": [
          {
            "title": "FAB Connects · The original campaign film",
            "href": "https://www.youtube.com/watch?v=aYIcgXztZ7A"
          }
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I worked on the idea, concept and script as part of the creative team. My focus was the connection between the energy of Formula 1 and the smaller moments that make a heartbeat count."
        ]
      },
      {
        "type": "copy",
        "label": "A film built on rhythm",
        "paragraphs": [
          "The band is part of the film’s visual world, appearing between scenes of movement and racing. Performance, faces and speed give the edit a recurring rhythm, bringing very different kinds of excitement into the same minute.",
          "The line holds that movement together. It can speak to the driver on the track, the person on stage or the couple starting something new. Each scene adds another way to understand the same invitation."
        ]
      }
    ],
    "deck": "The energy of race day, connected to the moments that move us.",
    "meta": [
      {
        "label": "Format",
        "value": "Campaign film"
      },
      {
        "label": "Occasion",
        "value": "Abu Dhabi Grand Prix"
      }
    ]
  },
  {
    "slug": "lvqr-stayhome",
    "client": "La Vache qui rit",
    "title": "Stay Home Together",
    "poster": "assets/img/lvqr-stayhome.jpg",
    "primaryFilm": "assets/video/lvqr-stayhome.mp4",
    "role": "Concept & copywriter",
    "primaryLabel": "Stay Home Together",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "The film opens with a question parents knew well during lockdown: what could the children do at home today? Everyone shares a room, but boredom has settled in. A snack brings the family together, then the room becomes a place to play.",
          "The campaign turns the stay-at-home message into something a family can act on. The film ends by directing people to La Vache qui rit Arabia’s social account for more games and activities under #StayHomeTogether. The invitation continues beyond the thirty-second story."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I came up with the idea and worked with the team as copywriter and conceptualiser, with a part in the music too. I wanted to turn time at home into an invitation to spend it together."
        ]
      },
      {
        "type": "copy",
        "label": "From stillness to play",
        "paragraphs": [
          "The story stays inside an ordinary home. Its change comes through the family: slouched bodies give way to movement, the children start playing and the adults join in. That visible shift makes the idea easy to recognise.",
          "The product sits within the shared moment, and the final call to action gives it a practical next step. Keeping the writing close to a familiar afternoon lets the film offer a small, achievable change of mood."
        ]
      }
    ],
    "deck": "A bored afternoon becomes something the family does together.",
    "meta": [
      {
        "label": "Format",
        "value": "Campaign film"
      },
      {
        "label": "Context",
        "value": "COVID-19 stay-at-home period"
      }
    ]
  },
  {
    "slug": "cn-gumball",
    "client": "Cartoon Network",
    "title": "The Amazing World of Gumball",
    "poster": "assets/img/cn-gumball.jpg",
    "loop": "assets/loop/cn-gumball.mp4",
    "role": "Arabic scripts & actor management",
    "meta": [
      {
        "label": "Scope",
        "value": "Multiple seasons"
      },
      {
        "label": "Selection",
        "value": "Three representative episodes"
      }
    ],
    "primaryLabel": "Selected scenes · silent preview",
    "primaryCaption": "Three full Arabic episodes are linked below as examples of the wider work.",
    "sections": [
      {
        "type": "copy",
        "label": "The project",
        "paragraphs": [
          "Gumball moves quickly. Ordinary family conversations can become an argument, a visual joke or a completely surreal situation within a few lines. The Arabic adaptation has to move with those changes while keeping each character recognisable.",
          "Across multiple seasons, the work was to make the scripts play naturally in Arabic within the timing of the original animation. Meaning, character and the placement of the joke all have to arrive together."
        ]
      },
      {
        "type": "copy",
        "label": "My role",
        "paragraphs": [
          "I worked on the Arabic scripts and localisation and managed the actors involved in the dub. Working with the performers kept the writing close to how the jokes and characters needed to sound."
        ]
      },
      {
        "type": "copy",
        "label": "Writing for the performance",
        "paragraphs": [
          "A line can be accurate on the page and still take too long to say. A joke may depend on an expression that has no useful equivalent in Arabic. The writing needs to find a phrase that fits the moment, sounds like the character and leaves room for the reaction on screen.",
          "Working with the actors brings the adaptation into performance. Pace, emphasis and character matter alongside the words themselves. Across a series, the audience also needs continuity: the voices should feel like the same people even as the stories become increasingly strange."
        ]
      },
      {
        "type": "copy",
        "label": "Selected episodes",
        "paragraphs": [
          "The Nest, The Origins and The Traitor are included as representative samples of the wider work. They offer a way to hear the Arabic adaptation in the context of complete scenes and stories."
        ]
      },
      {
        "type": "links",
        "label": "Full episodes",
        "items": [
          {
            "title": "The Nest",
            "href": "https://www.youtube.com/watch?v=d5YTXxsAKSA"
          },
          {
            "title": "The Origins",
            "href": "https://www.youtube.com/watch?v=UckS3lgytIk"
          },
          {
            "title": "The Traitor",
            "href": "https://www.youtube.com/watch?v=_gj-ewiHXSQ"
          }
        ]
      }
    ],
    "deck": "Keeping the jokes, characters and comic timing alive in Arabic."
  },
];
