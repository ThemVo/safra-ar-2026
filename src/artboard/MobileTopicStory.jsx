import { screenId, SECTION_IDS } from "./routes.js";
import { assetUrl } from "../utils/assetUrl.js";

// Reuse desktop/gallery source photos; only the slots and crops vary by viewport.
// Figma slots and source-image crops on the 375px mobile handover frames.
const photo = (filename, slot, crop, gallery) => ({
  src: assetUrl(filename),
  slot,
  crop,
  gallery,
});
const stories = {
  "s8-0": {
    panelTop: 60,
    height: 359,
    progress: 45,
    title: "Celebrating the SG60 journey",
    stats: [["Over", "52K", "people engaged"]],
    copy: "SAFRA’s National Day celebrations at Marina Bay and across all SAFRA clubs brought loved ones together for the live screening of the NDP, live performances and nostalgic games.",
    photos: [
      photo(
        "national-day-celebration-main.jpg",
        [182, 0, 177, 209],
        [0, 0, 177, 209],
        0,
      ),
      photo(
        "national-day-celebration-gallery-05.jpg",
        [198.75, 347, 150, 130],
        [-15.24, -0.66, 196.045, 130.664],
        2,
      ),
      photo(
        "national-day-celebration-crowd-mobile.jpg",
        [23.75, 508, 180, 108],
        [-51.37, -41.35, 244.256, 172.429],
        1,
      ),
    ],
  },
  "s8-1": {
    panelTop: 60,
    height: 359,
    progress: 60,
    statWidth: 88,
    title: "Creating cherished family memories",
    stats: [
      ["Over", "1.2K", "people\nparticipated"],
      ["Over", "420", "babies &\ntoddlers raced"],
    ],
    copy: "SG60 SAFRA Family Fiesta brought families together for fun-filled activities, including the SAFRA Diaper Dash and sing-along sessions with their favourite Pororo & Friends characters.",
    photos: [
      photo(
        "family-fiesta-gallery-03.jpg",
        [182, 0, 177, 209],
        [-89.6, -25.85, 352.443, 234.846],
        0,
      ),
      photo(
        "family-fiesta-gallery-01.jpg",
        [199, 374, 160, 110],
        [0, 0, 160, 110],
        2,
      ),
      photo(
        "family-fiesta-archive-gallery-03.jpg",
        [38.4, 516, 140, 100],
        [-0.3, -5.26, 140.35, 105.262],
        1,
      ),
    ],
  },
  "s8-2": {
    panelTop: 60,
    height: 359.6,
    progress: 85,
    statWidth: 101,
    title: "Strengthening teamwork and camaraderie",
    stats: [
      ["Over", "637", "national servicemen\nengaged"],
      ["", "52K", "cohesion\nevents"],
    ],
    copy: "Cohesion events were organised for SAF NS units at various SAFRA clubs and SAF camps, featuring a  wide range of activities such as archery tag, bowling, inflatable games, water telematches and various sports competitions.",
    photos: [
      photo(
        "ns-unit-cohesion-gallery-03.jpg",
        [182, 0, 177, 209],
        [-22.07, -34.74, 202.421, 269.894],
        0,
      ),
      photo(
        "ns-unit-cohesion-gallery-06.jpg",
        [199, 374, 160, 109.474],
        [-22.05, 0.15, 207.945, 116.969],
        2,
      ),
      photo(
        "ns-unit-cohesion-gallery-01.jpg",
        [24, 516, 120, 100],
        [-4.69, -40.41, 128.933, 171.91],
        1,
      ),
    ],
  },
  "s8-3": {
    panelTop: 60,
    height: 359,
    progress: 110,
    title: "Connecting youths through shared interests",
    stats: [["Over", "1.2K", "youths participated"]],
    copy: "SAFRA Youth Fiesta brought youths together to compete in the Ultimate Frisbee Tournament and indulge in Japanese pop culture at the DoujinFes Fair and Hololive Official Card Game community workshops.",
    photos: [
      photo(
        "youth-fiesta-gallery-02.jpg",
        [182, 0, 177, 209],
        [-91.52, -47.98, 385.656, 256.976],
        0,
      ),
      photo(
        "youth-fiesta-gallery-01.jpg",
        [179, 353, 180, 125],
        [-3.42, -5.44, 183.418, 131.596],
        2,
      ),
      photo(
        "youth-fiesta-gallery-03.jpg",
        [24, 521, 145, 95],
        [0.1, -0.24, 144.776, 96.47],
        1,
      ),
    ],
  },
  "s8-4": {
    panelTop: 60,
    height: 359,
    progress: 149.646,
    title: "Unwinding with buddies",
    stats: [["Over", "430", "people enjoyed"]],
    copy: "Soundbyte Beer Music Play brought national servicemen and their friends together to enjoy live band performances, high-energy DJ sets, games and free flow of drinks.",
    photos: [
      photo(
        "soundbyte-music-event-gallery-01.jpg",
        [182, 0, 177, 209],
        [-103.42, -41.13, 375.383, 250.127],
        0,
      ),
      photo(
        "soundbyte-music-event-gallery-03.jpg",
        [197.77, 359.75, 160, 117.333],
        [-1.33, 0.01, 162.555, 117.323],
        2,
      ),
      photo(
        "soundbyte-music-event-gallery-02.jpg",
        [24, 511.082, 160, 104.918],
        [-4.6, -8.05, 169.536, 112.967],
        1,
      ),
    ],
  },
  "s8-5": {
    panelTop: 60,
    height: 359,
    progress: 215.701,
    next: ["Rewarding", "Privileges"],
    title: "Lending a helping hand",
    stats: [
      ["Over", "5.5K", "participants"],
      ["Close to", "$290K", "raised"],
    ],
    copy: "SAFRA Swim for Hope rallied the community to swim for charity and raise funds for the less privileged and those in need.",
    photos: [
      photo(
        "swim-for-hope-main.jpg",
        [170, 0, 172, 125],
        [-0.14, 0.37, 187.113, 124.694],
        0,
      ),
      photo(
        "swim-for-hope-gallery-02.jpg",
        [147.62, 400, 199.375, 145],
        [0.34, -0.2, 200, 150],
        1,
      ),
    ],
  },
  "s6-0": {
    panelTop: 32,
    height: 300,
    progress: 58.494,
    center: true,
    title: "Making defence more accessible",
    stats: [
      ["Over", "500", "participants"],
      ["", "13", "camps"],
    ],
    copy: "Through NS Experience Camps, families got a taste of NS-inspired activities, gaining a deeper appreciation of their loved ones’ service.",
    photos: [
      photo(
        "ns-experience-camp-gallery-01.jpg",
        [182, 8, 177, 209],
        [-106, 0, 400, 225],
        0,
      ),
      photo(
        "ns-experience-camp-gallery-03.jpg",
        [206, 272.68, 140, 170],
        [-18, 0, 270, 192],
        1,
      ),
      photo(
        "topic-defence-preview.jpg",
        [40, 464.36, 165, 110],
        [-5.4945, 0, 231, 130.984],
        2,
      ),
    ],
  },
  "s6-1": {
    panelTop: 32,
    height: 300,
    progress: 94.012,
    center: true,
    title: "Commemorating SAF60 at SAFRA",
    stats: [["Over", "140K", "people engaged"]],
    copy: "Be@SAFRA Open Houses brought families together to reflect on the SAF's role as they enjoyed interactive activities, flight simulators and military K9 encounters.",
    photos: [
      photo(
        "safra-open-house-gallery-01.jpg",
        [182, 8, 177, 209],
        [0, 0.36, 267, 209],
        0,
      ),
      photo(
        "safra-open-house-gallery-03.jpg",
        [174, 291, 181, 120],
        [-13, -29, 194, 149],
        1,
      ),
      photo(
        "safra-open-house-gallery-02.jpg",
        [24, 378.36, 130, 180],
        [-11.39, -26.32, 159.408, 215.124],
        2,
      ),
    ],
  },
  "s6-2": {
    height: 300,
    panelTop: 32,
    progress: 148.92,
    center: true,
    title: "Sharing lessons from the past",
    stats: [["Over", "20K", "people engaged"]],
    copy: "Commitment to Defence (C2D) Ambassadors from the SAF Veterans’ League shared real-life experiences, reinforcing the importance of a strong defence.",
    photos: [
      photo(
        "defence-veterans-gallery-01.jpg",
        [182, 8, 177, 209],
        [-38, -65.64, 369, 277],
        0,
      ),
      photo(
        "defence-veterans-gallery-02.jpg",
        [123, 353.36, 148, 205],
        [-230, -47, 697, 313],
        1,
      ),
    ],
  },
  "s6-3": {
    header: 96,
    panelTop: 32,
    height: 300,
    progress: 210,
    center: true,
    next: ["Appreciating", "NSmen"],
    nextRight: true,
    title: "Building preparedness together",
    stats: [["Over", "40K", "people engaged"]],
    copy: "Total Defence Day commemorative activities equipped participants with practical skills through hands-on demonstrations and interactive games.",
    photos: [
      photo(
        "total-defence-day-gallery-01.jpg",
        [182, 8, 177, 209],
        [-51, 0.36, 316, 211],
        0,
      ),
      photo(
        "total-defence-day-gallery-02.jpg",
        [200, 318, 163, 108],
        [0, -48, 298, 224],
        1,
      ),
      photo(
        "total-defence-day-gallery-03.jpg",
        [33, 403, 141, 124],
        [-19, -31, 233, 156],
        2,
      ),
    ],
  },
  "s7-0": {
    statWidth: 67,
    panelTop: 32,
    height: 344,
    progress: 58.494,
    title: "Nurturing appreciation from young",
    stats: [
      ["Over", "35K", "preschoolers"],
      ["Over", "460", "preschools centres"],
    ],
    copy: "Through the Appreciating NSmen Art Jam initiative, preschoolers learnt about national servicemen's contributions and made personalised gifts to thank their fathers for defending Singapore.",
    photos: [
      photo(
        "nsmen-art-jam-thank-you-card.jpg",
        [210, 0, 153, 209],
        [-38.3, -54.8, 415.5, 318.8],
        2,
      ),
      photo(
        "nsmen-art-jam-main.jpg",
        [163, 303, 180, 120],
        [0, 0, 180, 121],
        0,
      ),
      photo(
        "nsmen-art-jam-children.jpg",
        [24, 446, 158, 120],
        [0, 0.18, 211.205, 140.82],
        1,
      ),
    ],
  },
  "s7-1": {
    panelTop: 32,
    height: 344,
    progress: 94.012,
    video: true,
    title: "Expressing gratitude through storytelling",
    stats: [
      ["", "145", "students"],
      ["", "44", "videos"],
    ],
    copy: "The Appreciating NSmen Video Competition saw students using creative storytelling to highlight the contributions of national servicemen and show their support.",
    photos: [
      photo(
        "gratitude-in-bloom-poster.jpg",
        [207, 0, 156, 92],
        [0, -5, 161, 99],
        0,
      ),
      photo(
        "serving-together-poster.jpg",
        [217, 220, 150, 100],
        [-9, 0, 209, 100],
        1,
      ),
      photo(
        "once-upon-a-time-poster.jpg",
        [24, 392, 160, 96],
        [-11.78, -1.54, 189.865, 99.06],
        2,
      ),
      photo(
        "the-strength-within-poster.jpg",
        [199, 474, 160, 100],
        [-11.57, -0.05, 180.419, 100.385],
        3,
      ),
    ],
  },
  "s7-2": {
    statWidth: 94,
    panelTop: 32,
    height: 344,
    progress: 148.92,
    title: "Turning business support into everyday benefits",
    stats: [
      ["Over", "180", "partner merchants"],
      ["Over", "240", "deals"],
    ],
    copy: "A wide range of appreciation deals for national servicemen, ranging from daily essentials to recreation, were secured through collaborations with merchants islandwide.",
    photos: [
      photo("nsmen-deals-klook-3.jpg", [222, 0, 141, 140], [0, 0, 141, 141], 2),
      photo(
        "nsmen-deals-jungle-upsara-spa.jpg",
        [221, 266, 134, 134],
        [0, -1, 135, 135],
        3,
      ),
      photo(
        "nsmen-deals-burger-king.jpg",
        [36, 406.5, 125, 125],
        [1, 0, 124, 124],
        0,
      ),
      photo(
        "nsmen-deals-gallery-04.jpg",
        [188, 460, 109, 109],
        [1, 0, 109, 109],
        1,
      ),
    ],
  },
  "s7-3": {
    statWidth: 62,
    panelTop: 32,
    height: 344,
    progress: 210,
    next: ["Strengthening", "Bonds"],
    nextRight: true,
    title: "Fueling up our national servicemen",
    stats: [
      ["Over", "15K", "snacks"],
      ["", "15", "food truck activations"],
    ],
    copy: "SAFRA gave away complimentary snacks to national servicemen at various SAF camps, SAFRA clubs and events.",
    photos: [
      photo(
        "nsmen-food-truck-gallery-03.jpg",
        [215, 0, 148, 175],
        [-28, 0, 240, 180],
        0,
      ),
      photo(
        "nsmen-food-truck-archive-gallery-02.jpg",
        [183, 311, 180, 120],
        [-51, -47, 250, 167],
        1,
      ),
      photo(
        "nsmen-food-truck-archive-gallery-03.jpg",
        [24, 446, 177, 120],
        [-10, -13, 192, 144],
        2,
      ),
    ],
  },
};
// Keep the mobile line breaks in the handover artwork.
const copyLines = {
  "s8-0": [
    "SAFRA’s National Day",
    "celebrations at Marina Bay and",
    "across all SAFRA clubs brought",
    "loved ones together for",
    "the live screening of the",
    "NDP, live performances and",
    "nostalgic games.",
  ],
  "s8-1": [
    "SG60 SAFRA Family Fiesta",
    "brought families together for",
    "fun-filled activities, including",
    "the SAFRA Diaper Dash and",
    "sing-along sessions with their",
    "favourite Pororo & Friends",
    "characters.",
  ],
  "s8-2": [
    "Cohesion events were",
    "organised for SAF NS units at",
    "various SAFRA clubs and SAF",
    "camps, featuring a  wide range",
    "of activities such as archery",
    "tag, bowling, inflatable games,",
    "water telematches and various",
    "sports competitions.",
  ],
  "s8-3": [
    "SAFRA Youth Fiesta brought",
    "youths together to compete in",
    "the Ultimate Frisbee",
    "Tournament and indulge in",
    "Japanese pop culture at the",
    "DoujinFes Fair and Hololive",
    "Official Card Game community",
    "workshops.",
  ],
  "s8-4": [
    "Soundbyte Beer Music Play",
    "brought national servicemen",
    "and their friends together to",
    "enjoy live band performances,",
    "high-energy DJ sets, games",
    "and free flow of drinks.",
  ],
  "s8-5": [
    "SAFRA Swim for Hope rallied",
    "the community to swim for",
    "charity and raise funds for",
    "the less privileged and those",
    "in need.",
  ],
  "s6-0": [
    "Through NS Experience Camps,",
    "families got a taste of NS-",
    "inspired activities, gaining",
    "a deeper appreciation of",
    "their loved ones’ service.",
  ],
  "s6-1": [
    "Be@SAFRA Open Houses",
    "brought families together to",
    "reflect on the SAF's role as they",
    "enjoyed interactive activities,",
    "flight simulators and military K9",
    "encounters.",
  ],
  "s6-3": [
    "Total Defence Day",
    "commemorative activities",
    "equipped participants with",
    "practical skills through",
    "hands-on demonstrations and",
    "interactive games.",
  ],
  "s7-0": [
    "Through the Appreciating",
    "NSmen Art Jam initiative,",
    "preschoolers learnt about",
    "national servicemen's",
    "contributions and made",
    "personalised gifts to thank their",
    "fathers for defending",
    "Singapore.",
  ],
  "s7-1": [
    "The Appreciating NSmen Video",
    "Competition saw students",
    "using creative storytelling to",
    "highlight the contributions of",
    "national servicemen and show",
    "their support.",
  ],
  "s7-2": [
    "A wide range of appreciation",
    "deals for national servicemen,",
    "ranging from daily essentials to",
    "recreation, were secured",
    "through collaborations with",
    "merchants islandwide.",
  ],
  "s7-3": [
    "SAFRA gave away",
    "complimentary snacks to",
    "national servicemen at various",
    "SAF camps, SAFRA clubs",
    "and events.",
  ],
};
export function hasMobileTopicStory(view, index) {
  return Boolean(stories[`${view}-${index}`]);
}
export default function MobileTopicStory({ v, photos }) {
  const id = `${v.mobileView}-${v.mobileStory}`;
  const data = stories[id];
  const motion = v[`d${v.mobileView.slice(1)}`]?.[`s${v.mobileStory}`] || {};
  const reveal = (y, a) => ({
    transform: `translateY(${y || 0}px)`,
    opacity: a ?? 1,
  });
  const header = 88;
  const lines = copyLines[`${v.mobileView}-${v.mobileStory}`];
  return (
    <section
      id={SECTION_IDS[v.mobileView]}
      className="mobile-figma-story mobile-bonds-story"
      style={{
        "--story-header": `${header}px`,
        "--story-height": v.mobileView === "s8" ? "632px" : "590px",
      }}
    >
      <div className="mobile-topic-header" aria-hidden="true" />
      <article
        id={screenId(v.mobileView, v.mobileStory)}
        aria-label={data.title}
        className="mobile-figma-collage"
      >
        {data.photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className={`mobile-story-photo${data.video ? ` story-video video-${i}` : ""}`}
            onClick={photos[p.gallery]?.props.onClick}
            aria-label={photos[p.gallery]?.props["aria-label"]}
            style={{
              left: p.slot[0],
              top: p.slot[1],
              width: p.slot[2],
              height: p.slot[3],
            }}
          >
            <span
              className="mobile-story-image"
              style={{ transform: `translateY(${motion.ph || 0}%)` }}
            >
              <img
                src={p.src}
                alt=""
                style={{
                  left: p.crop[0],
                  top: p.crop[1],
                  "--crop-width": `${p.crop[2]}px`,
                  "--crop-height": `${p.crop[3]}px`,
                }}
              />
            </span>
            {data.video && (
              <img
                className="mobile-story-play"
                src={assetUrl("video-play.svg")}
                alt=""
              />
            )}
          </button>
        ))}
        <div
          className={`mobile-story-panel figma-story-panel${data.center ? " panel-centered" : ""}`}
          style={{ top: data.panelTop ?? 60, height: data.height }}
        >
          <h3 style={reveal(motion.yt, motion.at)}>{data.title}</h3>
          <div className="figma-story-details">
            <div
              className="figma-story-stats"
              style={{ "--first-stat-width": `${data.statWidth || 81}px` }}
            >
              {data.stats.map(([over, value, label], i) => (
                <div key={label} className="figma-story-stat">
                  {over && (
                    <span
                      style={reveal(motion[`yb${i * 2}`], motion[`ab${i * 2}`])}
                    >
                      {over}
                    </span>
                  )}
                  <strong>
                    {motion[`c${id === "s8-2" ? 1 - i : i}`] ?? value}
                  </strong>
                  <span
                    style={reveal(
                      motion[`yb${i * 2 + 1}`],
                      motion[`ab${i * 2 + 1}`],
                    )}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="figma-story-divider" aria-hidden="true" />
            <p aria-label={data.copy}>
              {lines
                ? lines.map((line, i) => (
                    <span
                      className="figma-story-copy-line"
                      key={i}
                      style={v.mobileStoryLine(i)}
                    >
                      {line}
                      {i < lines.length - 1 ? " " : ""}
                    </span>
                  ))
                : data.copy}
            </p>
          </div>
          <div
            className="mobile-story-progress"
            aria-hidden="true"
            style={{
              width: data.progress,
              transform: `scaleX(${Math.min(1, (motion.bar ?? 0) / ((v.mobileView === "s8" ? 520 / 6 : 130) * (v.mobileStory + 1)))})`,
              transformOrigin: "left",
            }}
          />
        </div>
        {data.next && (
          <div
            className={`mobile-story-next${data.nextRight ? " next-right" : ""}`}
          >
            Next:
            <br />
            {data.next[0]}
            <br />
            {data.next[1]}
          </div>
        )}
      </article>
    </section>
  );
}
