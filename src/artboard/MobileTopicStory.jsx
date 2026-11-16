import { screenId, SECTION_IDS } from "./routes.js";
import { assetUrl } from "../utils/assetUrl.js";

// Reuse desktop/gallery source photos; only the slots and crops vary by viewport.
// Figma slots and source-image crops, measured on its 393 × 853 frame.
const photo = (filename, slot, crop, gallery) => ({
  src: assetUrl(filename),
  slot,
  crop,
  gallery,
});
const stories = {
  "s8-0": {
    height: 359,
    progress: 45,
    title: "Celebrating the SG60 journey",
    stats: [["Over", "52K", "people engaged"]],
    copy: "SAFRA’s National Day celebrations at Marina Bay and across all SAFRA clubs brought loved ones together for the live screening of the NDP, live performances and nostalgic games.",
    photos: [
      photo(
        "national-day-celebration-gallery-04.jpg",
        [173, 0, 220, 260],
        [-105.59, -96.9, 514.34, 342.816],
        0,
      ),
      photo(
        "national-day-celebration-gallery-05.jpg",
        [126, 345.01, 200, 175],
        [-13.04, -0.95, 262.593, 175.018],
        2,
      ),
      photo(
        "national-day-celebration-crowd-mobile.jpg",
        [28, 564, 220, 132],
        [-45.24, -50.54, 280.995, 210.746],
        1,
      ),
    ],
  },
  "s8-1": {
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
        [173, 0, 220, 260],
        [-89.85, -15.58, 413.576, 275.582],
        0,
      ),
      photo(
        "family-fiesta-gallery-01.jpg",
        [187, 396, 190, 130],
        [0, 0, 190, 130],
        2,
      ),
      photo(
        "family-fiesta-archive-gallery-03.jpg",
        [28, 576, 183, 120],
        [-0.4, -17.59, 183.457, 137.593],
        1,
      ),
    ],
  },
  "s8-2": {
    height: 359.6,
    panelTop: 74.7,
    progress: 85,
    statWidth: 101,
    title: "Strengthening teamwork and camaraderie",
    stats: [
      ["Over", "53K", "national servicemen\nengaged"],
      ["", "637", "cohesion\nevents"],
    ],
    copy: "Cohesion events were organised for SAF NS units at various SAFRA clubs and SAF camps, featuring a  wide range of activities such as archery tag, bowling, inflatable games, water telematches and various sports competitions.",
    photos: [
      photo(
        "ns-unit-cohesion-gallery-03.jpg",
        [173, 0, 220, 260],
        [-8.86, -46.92, 239.529, 319.372],
        0,
      ),
      photo(
        "ns-unit-cohesion-gallery-06.jpg",
        [187.25, 396, 190, 130],
        [-26.19, 0.18, 246.936, 138.901],
        2,
      ),
      photo(
        "ns-unit-cohesion-gallery-01.jpg",
        [28, 576, 140, 120],
        [-5.47, -47.15, 150.421, 200.562],
        1,
      ),
    ],
  },
  "s8-3": {
    height: 359,
    progress: 110,
    title: "Connecting youths through shared interests",
    stats: [["Over", "1.2K", "youths participated"]],
    copy: "SAFRA Youth Fiesta brought youths together to compete in the Ultimate Frisbee Tournament and indulge in Japanese pop culture at the DoujinFes Fair and Hololive Official Card Game community workshops.",
    photos: [
      photo(
        "youth-fiesta-gallery-02.jpg",
        [173, 0, 220, 260],
        [-82.72, -18.64, 437.637, 291.612],
        0,
      ),
      photo(
        "youth-fiesta-gallery-01.jpg",
        [155.13, 355.01, 220, 160],
        [-2.67, -0.45, 249.353, 166.154],
        2,
      ),
      photo(
        "youth-fiesta-gallery-03.jpg",
        [27.5, 576, 183, 120],
        [0.13, -0.31, 182.875, 121.856],
        1,
      ),
    ],
  },
  "s8-4": {
    height: 359,
    progress: 149.646,
    title: "Unwinding with buddies",
    stats: [["Over", "430", "people enjoyed"]],
    copy: "Soundbyte Beer Music Play brought national servicemen and their friends together to enjoy live band performances, high-energy DJ sets, games and free flow of drinks.",
    photos: [
      photo(
        "soundbyte-music-event-gallery-01.jpg",
        [173, 0, 220, 260],
        [-92.03, -19.69, 419.744, 279.686],
        0,
      ),
      photo(
        "soundbyte-music-event-gallery-03.jpg",
        [187.75, 396, 190, 130],
        [-0.1, 0.01, 195.034, 129.988],
        2,
      ),
      photo(
        "soundbyte-music-event-gallery-02.jpg",
        [28, 576, 183, 120],
        [-5.27, -9.21, 193.906, 129.206],
        1,
      ),
    ],
  },
  "s8-5": {
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
        [193, 0, 200, 140],
        [7.52, 0.37, 209.531, 139.634],
        0,
      ),
      photo(
        "swim-for-hope-gallery-02.jpg",
        [156.63, 462.8, 220, 160],
        [0.38, -0.21, 220, 165],
        1,
      ),
    ],
  },
  "s6-0": {
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
        [173, 0, 220, 260],
        [-134, 0, 497.778, 280],
        0,
      ),
      photo(
        "ns-experience-camp-gallery-03.jpg",
        [185.5, 312.68, 140, 170],
        [-29.41, 0, 292.312, 208.162],
        1,
      ),
      photo(
        "topic-defence-preview.jpg",
        [43, 536, 240, 160],
        [-10.41, 0.38, 367.12, 208.166],
        2,
      ),
    ],
  },
  "s6-1": {
    height: 300,
    progress: 94.012,
    center: true,
    title: "Commemorating SAFRA60 at SAFRA",
    stats: [["Over", "140K", "people engaged"]],
    copy: "Be@SAFRA Open Houses brought families together to reflect on the SAF's role as they enjoyed interactive activities, flight simulators and military K9 encounters.",
    photos: [
      photo(
        "safra-open-house-gallery-01.jpg",
        [173, 0, 220, 260],
        [0, -14.15, 349.201, 273.154],
        0,
      ),
      photo(
        "safra-open-house-gallery-03.jpg",
        [141.5, 323, 220, 146],
        [-28.29, -35.21, 248.292, 190.508],
        1,
      ),
      photo(
        "safra-open-house-gallery-02.jpg",
        [39.31, 516, 130, 180],
        [-11.39, -26.32, 159.408, 215.124],
        2,
      ),
    ],
  },
  "s6-3": {
    header: 96,
    height: 300,
    panelTop: 86,
    progress: 210,
    center: true,
    next: ["Appreciating", "NSmen"],
    title: "Building preparedness together",
    stats: [["Over", "40K", "people engaged"]],
    copy: "Total Defence Day commemorative activities equipped participants with practical skills through hands-on demonstrations and interactive games.",
    photos: [
      photo(
        "total-defence-day-gallery-01.jpg",
        [173, 0, 220, 260],
        [-49, 0.36, 389.877, 259.885],
        0,
      ),
      photo(
        "total-defence-day-gallery-02.jpg",
        [104, 407.5, 185, 123],
        [0, -62, 335, 252],
        1,
      ),
      photo(
        "total-defence-day-gallery-03.jpg",
        [217, 563, 160, 140.832],
        [-23.45, -45.05, 278.901, 185.887],
        2,
      ),
    ],
  },
  "s7-0": {
    statWidth: 67,
    height: 344,
    progress: 58.494,
    title: "Nurturing appreciation from young",
    stats: [
      ["Over", "35K", "preschoolers"],
      ["Over", "460", "preschools centres"],
    ],
    copy: "Through the Appreciating NSmen Art Jam initiative, preschoolers learnt about national servicemen's contributions and made personalised gifts to thank their fathers for defending Singapore.",
    photos: [
      photo(
        "nsmen-art-jam-thank-you-card.jpg",
        [173, 0, 220, 260],
        [-48.51, -68.2, 516.644, 396.407],
        2,
      ),
      photo(
        "nsmen-art-jam-main.jpg",
        [109.88, 366.99, 240, 160],
        [-0.25, 0.37, 240.248, 160.185],
        0,
      ),
      photo(
        "nsmen-art-jam-children.jpg",
        [28, 555.168, 160, 140.832],
        [-7.176, 0.01, 211.205, 140.82],
        1,
      ),
    ],
  },
  "s7-1": {
    height: 344,
    progress: 94.012,
    video: true,
    title: "Expressing gratitude through storytelling",
    stats: [
      ["", "145", "students"],
      ["", "44", "videos"],
    ],
    copy: "The Appreciating NSmen Video Competition saw students using creative storytelling to highlight the contributions of national servicemen and show their support.",
    photos: [
      photo(
        "gratitude-in-bloom-poster.jpg",
        [173, -0.63, 220, 130],
        [0, -5.29, 220, 135.29],
        0,
      ),
      photo(
        "serving-together-poster.jpg",
        [154, 291.37, 210, 140],
        [-28.39, 0, 292.236, 140],
        1,
      ),
      photo(
        "once-upon-a-time-poster.jpg",
        [28, 476.37, 160, 96],
        [-11.78, -1.54, 189.865, 99.06],
        2,
      ),
      photo(
        "the-strength-within-poster.jpg",
        [233, 596, 160, 100],
        [-11.57, -0.05, 180.419, 100.385],
        3,
      ),
    ],
  },
  "s7-2": {
    statWidth: 94,
    height: 344,
    progress: 148.92,
    title: "Turning business support into everyday benefits",
    stats: [
      ["Over", "180", "partner merchants"],
      ["Over", "240", "deals"],
    ],
    copy: "A wide range of appreciation deals for national servicemen, ranging from daily essentials to recreation, were secured through collaborations with merchants islandwide.",
    photos: [
      photo("nsmen-deals-klook-3.jpg", [213, 0, 180, 180], [0, 0, 180, 180], 2),
      photo(
        "nsmen-deals-jungle-upsara-spa.jpg",
        [180, 278.01, 180, 180],
        [0, 0, 180, 180],
        3,
      ),
      photo(
        "nsmen-deals-burger-king.jpg",
        [28, 471.01, 160, 160],
        [0, 0, 160, 160],
        0,
      ),
      photo(
        "nsmen-deals-gallery-04.jpg",
        [243, 576, 120, 120],
        [0, 0, 120, 120],
        1,
      ),
    ],
  },
  "s7-3": {
    statWidth: 62,
    height: 344,
    progress: 210,
    next: ["Strengthening", "Bonds"],
    nextRight: true,
    title: "Fueling up our national servicemen",
    stats: [
      ["Over", "15K", "snacks"],
      ["", "15", "food truck activities"],
    ],
    copy: "SAFRA gave away complimentary snacks to national servicemen at various SAF camps, SAFRA clubs and events.",
    photos: [
      photo(
        "nsmen-food-truck-gallery-03.jpg",
        [173, 0, 220, 260],
        [-65, -20.15, 342.613, 256.96],
        0,
      ),
      photo(
        "nsmen-food-truck-archive-gallery-02.jpg",
        [99.75, 348, 260, 180],
        [-129.53, -79.52, 389.525, 259.521],
        1,
      ),
      photo(
        "nsmen-food-truck-archive-gallery-03.jpg",
        [28, 576.37, 183, 120],
        [0, -1.28, 183.426, 137.569],
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
    "brought national servicemen",
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
    "national servicemen's",
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
    "national servicemen and show",
    "their support.",
  ],
  "s7-2": [
    "A wide range of appreciation",
    "deals for national servicemen,",
    "ranging from daily essentials to",
    "recreation, were secured",
    "through collaborations with",
    "merchants islandwide.",
  ],
  "s7-3": [
    "SAFRA gave away",
    "complimentary snacks to",
    "national servicemen at various",
    "SAF camps, SAFRA clubs",
    "and events.",
  ],
};
export function hasMobileTopicStory(view, index) {
  return Boolean(stories[`${view}-${index}`]);
}
export default function MobileTopicStory({ v, photos }) {
  const data = stories[`${v.mobileView}-${v.mobileStory}`];
  const motion = v[`d${v.mobileView.slice(1)}`]?.[`s${v.mobileStory}`] || {};
  const reveal = (y, a) => ({
    transform: `translateY(${y || 0}px)`,
    opacity: a ?? 1,
  });
  const header = data.header || 117;
  const lines = copyLines[`${v.mobileView}-${v.mobileStory}`];
  return (
    <section
      id={SECTION_IDS[v.mobileView]}
      className={`mobile-figma-story${v.mobileView === "s8" ? " mobile-bonds-story" : ""}`}
      style={{ "--story-header": `${header}px` }}
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
              left: Math.min(p.slot[0], 393 - 16 - p.slot[2]),
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
          style={{ top: data.panelTop || 75, height: data.height }}
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
                  <strong>{motion[`c${i}`] ?? value}</strong>
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
            <div
              className="figma-story-divider"
              aria-hidden="true"
            />
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
