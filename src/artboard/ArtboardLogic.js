// Behaviour for the artboard: the camera/view state machine, timers, measuring and every value the markup binds to.
// Ported unchanged from the prototype; only the class header and module wiring are new.
import { Logic } from './Logic.js';
import { MOBILE_INITIATIVES } from './mobileInitiatives.js';
import { parseRoute, routeHash } from './routes.js';

// Desktop uses its reference composition. Mobile uses the current viewport,
// with the original 390px artwork as a coordinate reference for the illustrations.
const FAM = '"Google Sans Flex", "Google Sans", system-ui, sans-serif';
// Ink boxes measured from the original comp: each line is fitted so its ink spans x0..x1 and sits on `base`.
const SPEC_D = {
  t1: { text: 'Explore our efforts in', x0: 156, x1: 1084, base: 253, fs: 93 },
  t2: { text: 'strengthening', x0: 211, x1: 1271, base: 390, fs: 157 },
  t3: { text: 'commitment', x0: 623, x1: 1200, base: 484, fs: 96 },
  t4b: { text: 'defence', x0: 300, x1: 801, base: 578, fs: 128 },
  t4c: { text: 'and supporting', x0: 827, x1: 1287, base: 558, fs: 63 },
  t5: { text: 'NSmen’s needs', x0: 253, x1: 1244, base: 702, fs: 136 }
};
const TO_D = { text: 'to', x0: 209, base: 558 };
// mobile headline: the same composition scaled to the 358px column (16px margins), centred in the screen
const HM = 358 / (1287 - 156), hmx = (x) => +(16 + (x - 156) * HM).toFixed(2), hmy = (y) => +(430 + (y - 477) * HM).toFixed(2);
const SPEC_M = Object.fromEntries(Object.entries(SPEC_D).map(([k, v]) => [k, { ...v, x0: hmx(v.x0), x1: hmx(v.x1), base: hmy(v.base), fs: +(v.fs * HM).toFixed(2) }]));
const TO_M = { ...TO_D, x0: hmx(TO_D.x0), base: hmy(TO_D.base) };
// Mobile masthead text boxes from the handover, relative to the 393px reference width.
const MOBILE_HEADLINE = {
  t1: [29.88, 326.22, 32], t2: [50.08, 354.22, 48], t3: [159.97, 406.22, 32],
  t4a: [18, 443.66, 22], t4b: [49.07, 431.18, 40], t4c: [214.46, 443.66, 22], t5: [43.49, 469.78, 44],
};
const CAM_D = { logo: 0, top: 0, s2: 0, tg: -918, s3: -918, s4: -1818, s5: -1818, s6: -1818, s7: -1818, s8: -1818, t2: -1818, mb: -1818, fc1: -1818, fc2: -2531, fy: -2718, wc: -2718, nx: -3618, end: -3618 }; // desktop: Clubs & Facilities (fc1) is the L2 page of card 5, scroll-linked from fc1 down to fc2 // '& beyond' (t2) removed: t2 now sits on fc1, the start of the Clubs & Facilities stretch // desktop: Membership (mb) is the L2 page of the Rewarding privileges card

let MOBILE = false, W = 1440, SPEC = SPEC_D, TO = TO_D, CAM = CAM_D;
let GLANCE_BASE = 1066;
let GL_FS = 72; // AT A GLANCE type size (small state)
let TG_SCALE = 160 / 72, TG_BASE = 918 + 546; // transition to At a glance: the heading at 160px, centred in the screen (Figma 3714:567) // AT A GLANCE baseline (143px into section 3; section 2 overlays section 1, section 3 sits below)
let BAR_END = 900; // the bar drips into the top of section 2's gradient
let CUE_X = 720; // centre of the arrow-down in section 2 (cam coords)
let S4_FS = { a: 63, b: 82 }; // statement above the topic cards
// statement lines: [key, text, font size, centre y in the section]. Desktop follows Figma 2116:2829 ("Beyond the numbers."), scaled to fit one screen;
// mobile keeps its own statement until its layout is redone.
const S4_LINES = () => MOBILE
  ? [['a', 'The numbers tell our impact.', S4_FS.a, 115 + 36], ['b', 'The stories show what it means.', S4_FS.b, 115 + 71 + 8 + 47]]
  : [['a', 'Discover how our initiatives', S4_FS.a, 106], ['b', 'made a difference in the lives of', S4_FS.b, 155], ['c', 'national servicemen and their families.', S4_FS.b, 204]];
const S4_W = () => MOBILE ? 400 : 500; // font weight
const S4_LS = () => MOBILE ? 0 : 0.02; // letter spacing (em)
let TABS_X = [40, 578, 1037], TABS_W = [458, 379, 281];
const MB_OPEN = 422; // Membership (desktop): open card height — 422 − 32 + 2 × 103 + 112 = the 708px under the header
let MB_STEP = 107; // Membership: how much of each stacked card shows
let NX_LEFT = [0, 0, 0]; // Looking forward: indicator offset per topic (mobile: the labels run across)
let FC_RANGE, LINKS;
let H = 844;
function applyGeo(mobile, height = 844, width = 390) {
  H = height;
  MOBILE = !!mobile;
  if (MOBILE) {
    W = width;
    const ratio = W / 390;
    SPEC = Object.fromEntries(Object.entries(SPEC_M).map(([key, value]) => [key, { ...value, x0: value.x0 * ratio, x1: value.x1 * ratio, fs: value.fs * ratio, base: H / 2 + (value.base - 422) * ratio }]));
    TO = { ...TO_M, x0: TO_M.x0 * ratio, base: H / 2 + (TO_M.base - 422) * ratio };
    // Each stop occupies exactly one viewport; the facilities story keeps its longer scroll range.
    CAM = { logo: 0, top: 0, s2: 0, tg: -H, s3: -H,
      s4: -2 * H, s5: -2 * H, s6: -2 * H, s7: -2 * H, s8: -2 * H,
      t2: -2 * H, mb: -2 * H, fc1: -2 * H, fc2: -2 * H,
      fy: -3 * H, wc: -3 * H, nx: -3 * H, end: -3 * H };
    GL_FS = 32; GLANCE_BASE = H + 70; TG_SCALE = 52 / 32; TG_BASE = H + H / 2; BAR_END = H; CUE_X = W / 2;
    S4_FS = { a: +(63 * 0.3105).toFixed(2), b: +(82 * 0.3105).toFixed(2) };
    TABS_X = [16, 140, 264].map(x => x * W / 390); TABS_W = [110, 110, 110].map(x => x * W / 390); MB_STEP = 56; NX_LEFT = [0, 124, 248];
  } else {
    W = 1440; SPEC = SPEC_D; TO = TO_D; CAM = CAM_D;
    GL_FS = 72; GLANCE_BASE = 1066; TG_SCALE = 160 / 72; TG_BASE = 918 + 546; BAR_END = 900; CUE_X = 720;
    S4_FS = { a: 44.2, b: 44.2 }; TABS_X = [40, 578, 1037]; TABS_W = [458, 379, 281]; MB_STEP = 107; NX_LEFT = [0, 0, 0];
  }
  FC_RANGE = CAM.fc1 - CAM.fc2; // Clubs & Facilities' own scroll length inside the stretch
  // Stretches of the page that scroll continuously (the camera follows the scroll 1:1); between them, sections snap.
  // at: where each view starts within the stretch; enter: how far in each section's entrance starts.
  const a = CAM.t2 - CAM.mb, b = CAM.mb - CAM.fc1, c = CAM.wc - CAM.nx, a1 = CAM.t2 - CAM.fc1;
  LINKS = {
    z1: MOBILE
      ? { top: CAM.t2, len: CAM.t2 - CAM.fc2, at: [['t2', 0], ['mb', a / 2], ['fc1', a + b / 2]], enter: { s10: 0.35 * a, s15: a + 0.35 * b, s16: a + b + 0.3 * FC_RANGE } }
      : { top: CAM.t2, len: CAM.t2 - CAM.fc2, at: [['t2', 0], ['fc1', a1 / 2]], enter: { s15: 0.35 * a1, s16: a1 + 0.3 * FC_RANGE } },
    // z2 (wc → Looking forward, continuous) is off while Looking forward is hidden (NX_OFF)
  };
}
applyGeo(false);
const AGM_AT = Date.parse('2026-11-22T14:30:00+08:00'); // 53rd SAFRA AGM start, Singapore time
// section 6 stories, in the order given: values, description lines (as laid out), red bar width, photos
const DC = [{"stats": ["500", "13"], "desc": ["Through NS Experience Camps, families got a", "taste of NS-inspired activities, gaining a deeper", "appreciation of their loved ones’ service."], "bar": 130, "photos": ["./assets/dc4-main.jpg", "./assets/dc4-a2.jpg", "./assets/dc4-b2.jpg"], "alts": ["Participants in life vests sit in an inflatable boat in a swimming pool", "Children and adults assemble a raft frame from white water containers and pipes on a turf court", "Families stretch a green tarp between trees to build a shelter"], "gallery": ["./assets/g1-0.jpg", "./assets/g1-1.jpg", "./assets/g1-2.jpg", "./assets/g1-3.jpg", "./assets/g1-4.jpg", "./assets/g1-5.jpg", "./assets/g1-6.jpg"], "gi": [0, 2, 1]}, {"stats": ["140K"], "desc": ["Be@SAFRA Open Houses brought families", "together to reflect on the SAF's role as they", "enjoyed interactive activities, flight simulators and", "military K9 encounters."], "bar": 260, "photos": ["./assets/dc3-main.jpg", "./assets/dc3-a.jpg", "./assets/dc3-b.jpg"], "alts": ["Parents and children play a giant board game with large red dice on a turf court", "Children play with toy blasters among camouflage tents on a green court", "An adult and child pose in flight suits and helmets against camouflage netting"], "gallery": ["./assets/g2b-0.jpg", "./assets/g2b-1.jpg", "./assets/g2b-2.jpg", "./assets/g2b-3.jpg", "./assets/g2b-4.jpg", "./assets/g2b-5.jpg"], "gi": [0, 2, 1]}, {"stats": ["20K"], "desc": ["Commitment to Defence (C2D)", "Ambassadors from the SAF Veterans’ League", "shared real-life experiences, reinforcing the", "importance of a strong defence."], "bar": 390, "photos": ["./assets/dc1-main.jpg", "./assets/dc1-a2.jpg"], "alts": ["A speaker addresses pupils seated in a classroom", "Service personnel seated outdoors listen to standing speakers"], "gallery": ["./assets/g3-0.jpg", "./assets/g3-1.jpg"], "gi": [0, 1]}, {"stats": ["40K"], "desc": ["Total Defence Day commemorative activities", "equipped participants with practical skills through", "hands-on demonstrations and interactive games."], "bar": 520, "photos": ["./assets/dc2-main.jpg", "./assets/dc2-a2.jpg", "./assets/dc2-b2.jpg"], "alts": ["Children practise CPR on training manikins with instructors", "Emergency responders demonstrate a rescue to an audience under a sheltered walkway", "Boys look into a camouflage field pack held open by an instructor"], "gallery": ["./assets/g4-0.jpg", "./assets/g4-1.jpg", "./assets/g4-2.jpg", "./assets/g4-3.jpg"], "gi": [0, 1, 2]}]; // red bar = story progress: 1/4 … 4/4 of the panel
const DC_WORDS = ['BRINGING', 'DEFENCE', 'CLOSER', 'TO', 'THE', 'COMMUNITY'];
// section 7: Appreciating national servicemen (four stories)
const DC7 = [{"stats": ["35K", "460"], "desc": ["Through the Appreciating NSmen Art Jam", "initiative, preschoolers learnt about national", "servicemen's contributions and made", "personalised gifts to thank their fathers for", "defending Singapore."], "bar": 130, "photos": ["./assets/an1-main3.jpg", "./assets/an1-kids2.jpg", "./assets/an1-card2.jpg"], "alts": ["A preschool teacher shows the class photos of servicemen", "Preschoolers cut out and decorate thank-you cards at a table", "A preschooler writes a thank-you card with a family photo for an NSman father"], "gallery": ["./assets/an1g-0.jpg", "./assets/an1g-1.jpg", "./assets/an1g-2.jpg", "./assets/an1g-3.jpg"], "gi": [0, 1, 2]}, {"stats": ["145", "44"], "desc": ["The Appreciating NSmen Video Competition saw", "students using creative storytelling to highlight the", "contributions of national servicemen and show", "their support."], "bar": 260, "photos": ["./assets/an2-v1.jpg", "./assets/an2-v2.jpg", "./assets/an2-v3.jpg", "./assets/an2-v4.jpg"], "alts": ["Video still: an animated serviceman gives a thumbs-up at a hawker stall offering 30% off to all NSmen", "Video still: a young serviceman shares a home-cooked meal with his family", "Video still: paper-craft figures in different service uniforms stand in front of the Singapore skyline", "Video still: cartoon characters representing different services stand side by side"], "gallery": ["./assets/an2-v1.jpg", "./assets/an2-v2.jpg", "./assets/an2-v3.jpg", "./assets/an2-v4.jpg"], "videos": ["./assets/an2-v1-video.mp4", "./assets/an2-v2-video.mp4", "./assets/an2-v3-video.mp4", "./assets/an2-v4-video.mp4"], "gi": [0, 1, 2, 3]}, {"stats": ["180", "240"], "desc": ["A wide range of appreciation deals for national", "servicemen, ranging from daily essentials to", "recreation, were secured through collaborations", "with merchants islandwide."], "bar": 390, "photos": ["./assets/an3-bk.jpg", "./assets/an3-popeyes.jpg", "./assets/an3-klook.jpg", "./assets/an3-spa.jpg"], "alts": ["Appreciating NSmen Deals: free Whopper at Burger King", "Appreciating NSmen Deals: $6 Hormat SG60 bundle at Popeyes", "Appreciating NSmen Deals: $30 off hotel bookings on Klook", "Appreciating NSmen Deals: 50% off all services at The Jungle Spa and The Upsara Spa"], "gallery": ["./assets/an3g-0.jpg", "./assets/an3g-1.jpg", "./assets/an3g-2.jpg", "./assets/an3g-3.jpg", "./assets/an3g-4.jpg", "./assets/an3g-5.jpg", "./assets/an3g-6.jpg", "./assets/an3g-7.jpg", "./assets/an3g-8.jpg", "./assets/an3g-9.jpg", "./assets/an3g-10.jpg", "./assets/an3g-11.jpg"], "gi": [0, 3, 5, 7]}, {"stats": ["15K", "15"], "desc": ["SAFRA gave away complimentary snacks to", "national servicemen at various SAF camps, SAFRA", "clubs and events."], "bar": 520, "photos": ["./assets/an4-main.jpg", "./assets/an4-truck.jpg", "./assets/an4-group.jpg"], "alts": ["National servicemen in PT kit hold up complimentary Old Chang Kee snacks", "A serviceman picks up a snack at the Canadian 2 for 1 Pizza food truck", "National servicemen with snacks in front of a food truck and an Appreciating NSmen banner"], "gallery": ["./assets/an4s-0.jpg", "./assets/an4s-1.jpg", "./assets/an4s-2.jpg", "./assets/an4s-3.jpg", "./assets/an4s-4.jpg"], "gi": [2, 0, 4]}];
const AN_WORDS = ['APPRECIATING', 'NATIONAL', 'SERVICEMEN'];
// photos each topic card flips through on hover (from its own section)
const CARD_IMGS = {
  '#dc-title': ['./assets/dc1-big.jpg', './assets/dc2-a.jpg', './assets/dc3-big.jpg', './assets/dc4-a.jpg', './assets/dc1-a.jpg', './assets/dc2-big.jpg', './assets/dc3-a.jpg', './assets/dc4-big.jpg', './assets/dc1-b.jpg', './assets/dc2-b.jpg', './assets/dc4-b.jpg'],
  '#an-title': ['./assets/an1-main.jpg', './assets/an1-kids.jpg', './assets/an1-card.jpg'],
  '#sb-title': ['./assets/sb1-big.jpg', './assets/sb1-a.jpg', './assets/sb1-b.jpg']
};
// section 8: Strengthening bonds (six stories)
const DC8 = [{"stats": ["52K"], "desc": ["SAFRA’s National Day celebrations at Marina Bay", "and across all SAFRA clubs brought loved ones", "together for the live screening of the NDP, live", "performances and nostalgic games."], "bar": 86.67, "photos": ["./assets/sb1-main.jpg", "./assets/sb1-crowd.jpg", "./assets/sb1-mascot.jpg"], "alts": ["A family smiles in front of red fireworks at a National Day celebration", "Members cheer with SAFRA thunder sticks at a National Day celebration", "A family on a picnic mat with the SAFRA mascot at a SG60 celebration"], "gallery": ["./assets/sb1g-0.jpg", "./assets/sb1g-1.jpg", "./assets/sb1g-2.jpg", "./assets/sb1g-3.jpg", "./assets/sb1g-4.jpg"], "gi": [3, 1, 4]}, {"stats": ["1.2K", "420"], "desc": ["SG60 SAFRA Family Fiesta brought families", "together for fun-filled activities, including the", "SAFRA Diaper Dash and sing-along sessions with", "their favourite Pororo & Friends characters."], "bar": 173.33, "photos": ["./assets/sb2-main.jpg", "./assets/sb2-race.jpg", "./assets/sb2-dash2.jpg"], "alts": ["Children pose with Pororo & Friends characters at the SG60 SAFRA Family Fiesta", "Babies and toddlers race across a colourful mat as families cheer at the SAFRA Diaper Dash", "Parents and toddlers holding Pororo plush toys wait at the start of the SAFRA Diaper Dash"], "gallery": ["./assets/sb2s-0.jpg", "./assets/sb2s-1.jpg", "./assets/sb2s-2.jpg"], "gi": [2, 1, 0]}, {"stats": ["637", "52K"], "desc": ["Cohesion events were organised for SAF NS units", "at various SAFRA clubs and SAF camps, featuring", "a wide range of activities such as archery tag,", "bowling, inflatable games, water telematches and", "various sports competitions."], "bar": 260, "photos": ["./assets/sb3-main.jpg", "./assets/sb3-archery.jpg", "./assets/sb3-team.jpg"], "alts": ["National servicemen play human foosball on an inflatable pitch", "National servicemen in face masks pose with archery tag bows", "An NS unit poses for a team photo after a football match"], "gallery": ["./assets/sb3g-0.jpg", "./assets/sb3g-1.jpg", "./assets/sb3g-2.jpg", "./assets/sb3g-3.jpg", "./assets/sb3g-4.jpg", "./assets/sb3g-5.jpg", "./assets/sb3g-6.jpg"], "gi": [2, 0, 5]}, {"stats": ["1.2K"], "desc": ["SAFRA Youth Fiesta brought youths together to", "compete in the Ultimate Frisbee Tournament", "and indulge in Japanese pop culture at the", "DoujinFes Fair and Hololive Official Card Game", "community workshops."], "bar": 346.67, "photos": ["./assets/sb4-main.jpg", "./assets/sb4-cosplay.jpg", "./assets/sb4-frisbee.jpg"], "alts": ["Youths compete in the Ultimate Frisbee Tournament at SAFRA Youth Fiesta", "Cosplayers at the DoujinFes Fair", "A player throws a frisbee past a defender during the Ultimate Frisbee Tournament"], "gallery": ["./assets/sb4g-0.jpg", "./assets/sb4g-1.jpg", "./assets/sb4g-2.jpg"], "gi": [1, 2, 0]}, {"stats": ["430"], "desc": ["Soundbyte Beer Music Play brought national", "servicemen and their friends together to enjoy live", "band performances, high-energy DJ sets, games", "and free flow of drinks."], "bar": 433.33, "photos": ["./assets/sb5-main.jpg", "./assets/sb5-hall.jpg", "./assets/sb5-game.jpg"], "alts": ["Guests dance with their arms raised at Soundbyte Beer Music Play", "A packed hall of guests raises their drinks at Soundbyte Beer Music Play", "Friends play an arcade button game at Soundbyte Beer Music Play"], "gallery": ["./assets/sb5g-0.jpg", "./assets/sb5g-1.jpg", "./assets/sb5g-2.jpg"], "gi": [0, 1, 2]}, {"stats": ["5.5K", "$290K"], "desc": ["SAFRA Swim for Hope rallied the community to", "swim for charity and raise funds for the less", "privileged and those in need."], "bar": 520, "photos": ["./assets/sb6-main.jpg", "./assets/sb6-pool.jpg"], "alts": ["Organisers and partners present a S$290,000 cheque at SAFRA Swim for Hope", "Participants swim for charity at SAFRA Swim for Hope"], "gallery": ["./assets/sb6g-0.jpg", "./assets/sb6g-1.jpg"], "gi": [0, 1]}];
export const STORY_DATA = { 6: DC, 7: DC7, 8: DC8 };
// section 10: membership categories
const NX_TABS = ['Bringing defence closer', 'Creating better spaces', 'Making visits seamless'];
const MB_TABS = ['FOOD & GROCERIES', 'EDUCATION', 'MOVIES & LIVE ENTERTAINMENT', 'TRAVEL, STAYCATIONS & LOCAL ATTRACTIONS'];
// how far along the page each view is (views off the main ORDER sit beside their neighbours)
const rankOf = (v) => ((v === 'mb' || v === 'fc1' || v === 'fc2') && !MOBILE ? 4 : RANK[v]); // desktop: Membership and Clubs & Facilities are L2 pages like s6–s8
const linkOf = (v) => Object.keys(LINKS).find((k) => LINKS[k].at.some(([x]) => x === v));
const RANK = { logo: -1, top: 0, s2: 1, tg: 2, s3: 2, s5: 3, s6: 4, s7: 4, s8: 4, t2: 5, mb: 6, fc1: 6, fc2: 6, fy: 7, wc: 8, nx: 9, end: 10 };
const SCR = { cps: 60, settle: 0.3, set: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!%#_' };
const SLIDE = { dur: 0.7, stag: 0.08, dist: 24 }; // description lines: slide-in timing (s) and travel (px)
const dcSeconds = (d) => Math.max(0.8, 1.25, (d.desc.length - 1) * SLIDE.stag + SLIDE.dur);
const eOut2 = (x) => 1 - Math.pow(1 - x, 3); // power2.out
const eOut1 = (x) => 1 - Math.pow(1 - x, 2); // power1.out
const fmtCount = (v, k) => { const m = /^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/.exec(v); if (!m) return v; const dec = m[2].includes('.') ? m[2].split('.')[1].length : 0; const n = Number(m[2].replace(/,/g, '')) * k; return m[1] + n.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: m[2].includes(',') }) + m[3]; };
function scramble(lines, t, seed) {
  let o = 0; const step = Math.floor(Math.max(0, t) * SCR.cps);
  return lines.map((line) => { let out = ''; for (const c of line) { const at = o / SCR.cps; if (t >= at) out += (t >= at + SCR.settle || /\s/.test(c)) ? c : SCR.set[(Math.imul(seed + o * 31 + step * 7, 2654435761) >>> 0) % SCR.set.length]; o++; } o++; return out; });
}
const ORDER = ['top', 'tg', 's3', 's5']; // '& beyond' (t2) removed: below the cards comes Clubs & Facilities (desktop) / Membership (mobile)
const AFTER = () => (MOBILE ? 'mb' : 'wc'); // the initiatives (s6/s7/s8) are L2 pages opened from the topic cards, off the main scroll; // section 2 (AGM countdown) removed: the masthead leads straight into At a glance // s7 is reached from the last s6 story via the cards (see go) // the statement and the topic cards are one stop (s5)
const STEM_TOP = 732 + 56; // top of the arrow's stem (cam coords)
const ROLL_AFTER = 1500, ROLL_DUR = 1200; // countdown roll-up once the tiles have slid in
const viewOf = (v) => /^10|membership/i.test(v || '') ? 'mb' : /^9|transition-2/i.test(v || '') ? 's5' : /^8|strengthening|1sg60/i.test(v || '') ? 's8' : /^7|appreciating/i.test(v || '') ? 's7' : /^6|defence closer|community/i.test(v || '') ? 's6' : /^5|topic/i.test(v || '') ? 's5' : /^4|transition/i.test(v || '') ? 's5' : /^3|glance/i.test(v || '') ? 's3' : /^2|countdown|registration/i.test(v || '') ? 's2' : 'top';
const AGM_INK_TOP = 561.2; // logo's visible bottom edge (513.2 at 80%) + 48px
const AGM_FS = 27.2;
const COUNT_AFTER = 1600; // ms after arriving at section 3
const INTRO_DONE = 7000; // last headline line has landed → masthead animation complete
const CURSOR_AFTER = 0; // the red circle cursor appears as soon as the headline has fully revealed
const TG_AUTO = 1900; // large AT A GLANCE: ms after arriving before it shrinks to the small heading by itself (camera move ≈ 1.2s + a beat to read it)
const REPLAY_DONE = 5100; // logo → masthead: the headline's last line lands (.post timings: 4.0s delay + 1.1s)

export class ArtboardLogic extends Logic {
  constructor(props) {
    super(props);
    applyGeo(props.mobile, props.mobileHeight, props.mobileWidth);
    const sv = viewOf(props.startView);
    this.state = { phase: 'run', mx: 0, my: 0, p: 0, lay: null, view: sv, s2: sv !== 'top', s3: ['top', 'tg', 's3', 's5', 's6'].indexOf(sv) >= 2, s4: ['top', 'tg', 's3', 's5', 's6'].indexOf(sv) >= 3, s6: sv === 's6', step6: 0, t6: null, s7: sv === 's7', step7: 0, t7: null, s8: sv === 's8', step8: 0, t8: null, s9: sv === 't2' || sv === 'mb', s10: sv === 'mb', mbTab: MOBILE ? 0 : -1, mbOrd: [3, 2, 1, 0], mbMv: null, lb: null, hx: null, hy: null, ready: false, now: Date.now(), step: 0, fresh: sv === 's3', cdP: sv === 'top' ? 0 : 1 };
    this.played2 = sv !== 'top';
  }
  componentDidMount() {
    this.urlMounted = true;
    this.onUrlChange = () => this.restoreUrl();
    window.addEventListener('popstate', this.onUrlChange);
    window.addEventListener('hashchange', this.onUrlChange);
    if (this.state.view === 'tg' || this.state.view === 's3') this.b3T = setTimeout(() => this.setState({ b3ok: true }), 950);
    this.readyT = setTimeout(() => this.setState({ ready: true }), INTRO_DONE);
    this.curT = setTimeout(() => this.setState({ curOn: true }), INTRO_DONE + CURSOR_AFTER);
    this.tick = setInterval(() => this.setState({ now: Date.now() }), 1000);
    this.startTimers();
    if (window.location.hash) this.restoreUrl(); else this.queueUrlSync();
    const go = () => requestAnimationFrame(() => this.measure());
    try {
      if (document.fonts && document.fonts.load) {
        Promise.all([
          document.fonts.load('400 100px "Google Sans Flex"'),
          document.fonts.load('500 72px "Google Sans Flex"'),
          document.fonts.load('400 100px "Google Sans"'),
          document.fonts.load('500 72px "Google Sans"')
        ]).then(go, go);
        document.fonts.ready.then(go, go);
      } else { go(); }
    } catch (e) { go(); }
    setTimeout(go, 1500);
    setTimeout(() => this.hvLayout(), 600); setTimeout(() => this.hvLayout(), 2500);
    setTimeout(go, 4000);
  }
  queueUrlSync() {
    if (!this.urlMounted || this.restoringUrl || this.urlQueued) return;
    this.urlQueued = true;
    queueMicrotask(() => {
      this.urlQueued = false;
      if (!this.urlMounted || this.restoringUrl) return;
      const hash = routeHash({ ...this.state, ...(this.state.view === 'fc1' && this.state.link ? { fcY: CAM.fc1 - this.camNow() } : {}) });
      if (hash === null || hash === window.location.hash) return;
      const old = window.location.hash ? parseRoute(window.location.hash, MOBILE) : { view: 'top' };
      const next = parseRoute(hash, MOBILE) || { view: 'top' };
      // Continuous motion and automatic intro transitions should not fill browser history.
      const replace = !old || old.view === next.view || (old.view === 'tg' && next.view === 's3');
      const url = hash || window.location.pathname + window.location.search;
      window.history[replace ? 'replaceState' : 'pushState'](window.history.state, '', url);
    });
  }
  restoreUrl() {
    const route = parseRoute(window.location.hash, MOBILE);
    this.restoringUrl = true;
    try {
      const to = route?.view || 'top';
      this.jumpTo(to);
      const patch = { lb: null, ready: true, s3: to !== 'top', s4: to !== 'top',
        step: 0, fresh: false, hd: to === 'tg' || to === 's3', mbTab: MOBILE ? 0 : -1, mbOrd: [3, 2, 1, 0] };
      if (to === 's3') patch.step = route.index ?? 0;
      if (to === 'mb' && route.index != null) {
        patch.mbTab = route.index;
        const ord = [3, 2, 1, 0];
        while (ord[3] !== route.index) ord.unshift(ord.pop());
        patch.mbOrd = ord;
      }
      if (to === 'wc') patch.s12 = true;
      if (to === 'end') patch.s14 = true;
      if (to === 'fc1') { patch.fcY = Math.min(FC_RANGE, route.offset); patch.s16 = patch.fcY > 0; this.fcPos = patch.fcY; }
      if (['s6', 's7', 's8'].includes(to)) {
        const n = route.index ?? 0, topic = Number(to.slice(1));
        this['play' + topic](n, 0);
        const data = { s6: DC, s7: DC7, s8: DC8 }[to][n];
        if (route.photo > 0 && route.photo <= data.gallery.length) patch.lb = { t: topic, s: n, i: route.photo - 1 };
      }
      this.setState(patch);
    } finally { this.restoringUrl = false; }
    this.queueUrlSync();
  }
  // leaving section 6/7 for the cards: hold the entered card navy and quiet until the camera has pulled back out
  leaveTo5(from) { clearTimeout(this.lvT); this.setState({ lv: from }); this.lvT = setTimeout(() => this.setState({ lv: null }), 1500); }
  // Only the long connector extension waits for the camera to settle (b3ok).
  // The viewport clip opens immediately so the moving connector stays continuous.
  setState(update, cb) {
    const was = this.state.view; super.setState(update, cb); const now = this.state.view;
    this.queueUrlSync();
    if (now !== was && now === 's5' && !this.played5) { this.played5 = true; super.setState({ i4: true }); clearTimeout(this.i4T); this.i4T = setTimeout(() => super.setState({ i4: false }), 4500); }
    if (now !== was) {
      const at = (v) => v === 'tg' || v === 's3';
      // Returning from Topics: keep the connector fragments out of the moving
      // viewport until At a glance has landed.
      super.setState({ glanceReturn: was === 's5' && at(now) });
      clearTimeout(this.b3T);
      if (!(at(now) && at(was)) && this.state.b3ok) super.setState({ b3ok: false });
      if (at(now) && !this.state.b3ok) this.b3T = setTimeout(() => { if (at(this.state.view)) super.setState({ b3ok: true, glanceReturn: false }); }, 950);
    }
  }
  componentDidUpdate(prev, prevState) {
    if (this.props.mobile && (prev.mobileHeight !== this.props.mobileHeight || prev.mobileWidth !== this.props.mobileWidth)) {
      const linked = this.state.link;
      const progress = linked ? this.state.linkY / LINKS[linked].len : 0;
      applyGeo(true, this.props.mobileHeight, this.props.mobileWidth);
      if (linked) this.state.linkY = progress * LINKS[linked].len;
      this.measure();
      this.camToDom();
    }
    if (this.stkCard && this.state.view !== 's5') this.cardStack(null);
    if (prevState && prevState.view !== this.state.view && this.state.view === 't2') { this.hvLayout(); setTimeout(() => this.hvLayout(), 400); }
    // leaving section 6/7 for the cards: hold the entered card navy until the camera has pulled back out

    if (prev.startView !== this.props.startView) {
      const v = viewOf(this.props.startView);
      this.setState({ view: v });
      if (v !== 'top') this.setState({ s2: true });
      if (v === 's3') this.arrive3();
      if (v === 's4' || v === 's5') this.setState({ s3: true, s4: true });
    }
  }
  // generic letter hover for statement text (.hv): same push/tilt as the masthead headline
  // topic-card hover: cycle the card's section photos as a popping, tilted stack
  cardStack(card) {
    if (card === this.stkCard) return;
    clearInterval(this.stkT);
    if (this.stkCard) { const old = this.stkCard; clearTimeout(old._stkOff); old._stkOff = setTimeout(() => { if (old !== this.stkCard) old.querySelectorAll('.stk').forEach((im) => { im.style.display = 'none'; im.classList.remove('pop', 'out', 'now'); }); }, 200); }
    this.stkCard = card;
    if (!card) return;
    if (card.querySelector('.tc-one')) return; // static hover photo (Figma 2121:4281): no auto-changing stack
    const src = { '#dc-title': DC, '#an-title': DC7, '#sb-title': DC8 }[card.getAttribute('href')] || [];
    const list = [...new Set(src.flatMap((d) => d.gallery || []))];
    if (!list.length) return;
    clearTimeout(card._stkOff);
    const slots = [...card.querySelectorAll('.stk')].slice(0, 2); let n = 0;
    const TILT = [-4, 3.5, -2.5, 4.5];
    const step = () => {
      const im = slots[n % 2], prev = slots[(n + 1) % 2];
      if (n > 0) { prev.style.zIndex = '1'; }
      im.classList.remove('out', 'pop', 'now'); im.src = list[n % list.length];
      im.style.setProperty('--sr', TILT[n % TILT.length] + 'deg'); im.style.zIndex = '2'; im.style.display = 'block';
      void im.offsetWidth; im.classList.add(n === 0 ? 'now' : 'pop');
      n++;
    };
    step(); this.stkT = setInterval(step, 1100);
  }
  hvLayout() {
    const root = this.findRoot(); if (!root) return;
    if (document.fonts && document.fonts.status !== 'loaded') document.fonts.ready.then(() => this.hvLayout());
    root.querySelectorAll('.hv[data-g]').forEach((line) => {
      const w = line.offsetWidth; line.querySelectorAll('.lt').forEach((l) => { l.style.backgroundSize = w + 'px 100%'; l.style.backgroundPosition = (line.offsetLeft - l.offsetLeft) + 'px 0'; });
    });
  }
  hvMove(cx, cy, scale) {
    const root = this.findRoot(); if (!root) return;
    const rb = root.getBoundingClientRect(), R = 170;
    root.querySelectorAll('.hv').forEach((line) => {
      const sec = line.closest('section'); const vis = sec && getComputedStyle(sec).visibility !== 'hidden';
      const fs = parseFloat(getComputedStyle(line).fontSize) || 60;
      line.querySelectorAll('.lt').forEach((l) => {
        let tf = '';
        if (vis && cx != null && l.textContent.trim()) {
          const b = l.getBoundingClientRect(); if (b.bottom > rb.top && b.top < rb.bottom) {
            const x = (b.left + b.width / 2 - rb.left) * scale, y = (b.top + b.height * 0.55 - rb.top) * scale, dx = x - cx, dy = y - cy, d = Math.hypot(dx, dy);
            if (d < R) { const f = Math.pow(1 - d / R, 2), n = d || 1, push = 0.34 * fs * f;
              tf = 'translate(' + (dx / n * push).toFixed(1) + 'px,' + (dy / n * push - fs * 0.08 * f).toFixed(1) + 'px) rotate(' + ((dx >= 0 ? 1 : -1) * 16 * f).toFixed(1) + 'deg) scale(' + (1 + 0.12 * f).toFixed(3) + ')'; }
          }
        }
        if (l.style.transform !== tf) l.style.transform = tf;
      });
    });
  }
  componentWillUnmount() { this.urlMounted = false; window.removeEventListener('popstate', this.onUrlChange); window.removeEventListener('hashchange', this.onUrlChange); clearInterval(this.stkT); this.clearAll(); clearInterval(this.tick); clearTimeout(this.hopT); if (this.raf6) cancelAnimationFrame(this.raf6); if (this.raf7) cancelAnimationFrame(this.raf7); if (this.raf8) cancelAnimationFrame(this.raf8); }
  // Section 6: play a story's entrance (photos rise into their frames, numbers count, description decodes, red bar fills)
  play6(n, delay, hold) {
    if (this.raf6) cancelAnimationFrame(this.raf6);
    this.hold = hold || 0;
    const dur = dcSeconds(DC[n]) + this.hold, t0 = performance.now() + delay * 1000;
    this.bar6From = this.state.s6 && this.state.view === 's6' ? DC[this.state.step6 || 0].bar : 0; // progress bar continues from the story we're leaving
    this.setState({ step6: n, t6: -delay });
    const tick = (now) => {
      const t = (now - t0) / 1000;
      if (t >= dur) { this.raf6 = 0; this.setState({ t6: null }); return; }
      this.setState({ t6: t });
      this.raf6 = requestAnimationFrame(tick);
    };
    this.raf6 = requestAnimationFrame(tick);
  }
  // Section 7: same story engine
  play7(n, delay, hold) {
    if (this.raf7) cancelAnimationFrame(this.raf7);
    this.hold = hold || 0;
    const dur = dcSeconds(DC7[n]) + this.hold, t0 = performance.now() + delay * 1000;
    this.bar7From = this.state.s7 && this.state.view === 's7' ? DC7[this.state.step7 || 0].bar : 0;
    this.setState({ step7: n, t7: -delay });
    const tick = (now) => { const t = (now - t0) / 1000; if (t >= dur) { this.raf7 = 0; this.setState({ t7: null }); return; } this.setState({ t7: t }); this.raf7 = requestAnimationFrame(tick); };
    this.raf7 = requestAnimationFrame(tick);
  }
  play8(n, delay, hold) {
    if (this.raf8) cancelAnimationFrame(this.raf8);
    this.hold = hold || 0;
    this.bar8From = this.state.s8 && this.state.view === 's8' ? DC8[this.state.step8 || 0].bar : 0;
    const dur = dcSeconds(DC8[n]) + this.hold, t0 = performance.now() + delay * 1000;
    this.setState({ step8: n, t8: -delay });
    const tick = (now) => { const t = (now - t0) / 1000; if (t >= dur) { this.raf8 = 0; this.setState({ t8: null }); return; } this.setState({ t8: t }); this.raf8 = requestAnimationFrame(tick); };
    this.raf8 = requestAnimationFrame(tick);
  }
  land() { clearTimeout(this.landT); this.setState({ landing: true }); this.landT = setTimeout(() => this.setState({ landing: false }), 1150); }
  arrive8() { this.land(); this.setState({ s8: true }); this.play8(0, 0.15, 0.3); }
  // Membership (desktop): scale the card stack so the open card shows whole within the 708px below the header
  mbFit() {
    if (MOBILE) return;
    const el = document.querySelector('.s10 .mbs.on'); if (!el) return;
    const sc = Math.min(1, 708 / (MB_STEP * 3 + el.offsetHeight));
    if (Math.abs(sc - (this.state.mbSc ?? 1)) > 0.002) this.setState({ mbSc: sc });
  }
  mbTo(t) {
    // accordion: tap a card to open it (the open one folds shut), tap the open card again to close it;
    // the content height animates, and the stack scrolls back so it sits from the top
    const cur = this.state.mbTab ?? -1, next = t === cur ? -1 : t;
    const box = (i) => document.querySelector(`.s10 .mbs:nth-child(${i + 1}) .mbc`);
    const a = cur >= 0 ? box(cur) : null, b = next >= 0 ? box(next) : null;
    if (a) a.style.height = a.offsetHeight + 'px';
    if (b) b.style.height = '0px';
    if (a || b) void (a || b).offsetHeight;
    clearTimeout(this.mbHT);
    this.setState({ mbTab: next }, () => requestAnimationFrame(() => {
      if (a) a.style.height = '0px';
      if (b) b.style.height = b.scrollHeight + 'px';
      this.mbHT = setTimeout(() => { if (a) a.style.height = ''; if (b) b.style.height = ''; }, 560);
      const sc = document.querySelector('.s10 .mbsc'); if (sc && next >= 0) sc.scrollTo({ top: 0, behavior: 'smooth' });
    }));
  }

  // While AT A GLANCE scales down, the connector is trimmed so it never runs past the top of the L;
  // scaling back up lets it reach up to the masthead again.
  arriveFy() {
    if (this.playedFy) return; this.playedFy = true;
    if (this.rafF) cancelAnimationFrame(this.rafF);
    const t0 = performance.now() + 1100; // cards have started rising
    const step = (now) => { const x = Math.min(1, Math.max(0, (now - t0) / 1400)); this.setState({ pF: 1 - Math.pow(1 - x, 3) }); if (x < 1) this.rafF = requestAnimationFrame(step); };
    this.setState({ pF: 0 }); this.rafF = requestAnimationFrame(step);
  }
  // Looking forward: the section holds still while the right column scrolls; at the end of a topic's
  // content the indicator moves to the next label (and back up at the top); past the last/first topic the page moves on.
  nxEl() { try { return document.querySelector('.mh .nxs'); } catch (err) { return null; } }
  nxMax(el) { return Math.max(0, el.scrollHeight - el.clientHeight); }
  nxPin() { return 0; }
  nxFade() {}
  nxReveal() {}
  nxGo(el, target) {
    this.nxPos = target;
    if (this.nxRaf) return;
    const tick = () => {
      const e = this.nxEl(); if (!e) { this.nxRaf = 0; return; }
      const cur = e.scrollTop, d = this.nxPos - cur;
      e.scrollTop = Math.abs(d) < 0.5 ? this.nxPos : cur + d * 0.16;
      this.nxReveal(e);
      this.nxRaf = Math.abs(d) < 0.5 ? 0 : requestAnimationFrame(tick);
    };
    this.nxRaf = requestAnimationFrame(tick);
  }
  nxSet(k, at) {
    this.setState({ nxTab: k });
    requestAnimationFrame(() => { const el = this.nxEl(); if (!el) return; el.style.scrollBehavior = 'auto'; if (this.nxRaf) { cancelAnimationFrame(this.nxRaf); this.nxRaf = 0; } el.scrollTop = at === 'end' ? this.nxMax(el) : 0; this.nxPos = el.scrollTop; this.nxReveal(el); el.style.scrollBehavior = ''; });
  }
  nxWheel(dy) {
    if (this.state.view !== 'nx' || this.state.lb || this.state.link) return false;
    const now = Date.now();
    if (this.lockUntil && now < this.lockUntil) return true;
    const el = this.nxEl(); if (!el) return false;
    const max = this.nxMax(el), k = this.state.nxTab || 0, min = k > 0 ? this.nxPin(el) : 0;
    const streak = now - (this.nxLast || 0) < 160; this.nxLast = now; // a continuing wheel/trackpad stream
    const pos = this.nxPos ?? el.scrollTop;
    if (dy > 0 && pos < max - 1) { this.nxGo(el, Math.min(max, pos + dy)); this.nxEdge = now; return true; }
    if (dy < 0 && pos > min + 1) { this.nxGo(el, Math.max(min, pos + dy)); this.nxEdge = now; return true; }
    if (streak && now - (this.nxEdge || 0) < 900) return true; // just hit the edge: let the scroll settle before moving on
    if (dy > 0 && k < 2) { this.lockUntil = now + 650; this.nxSet(k + 1, 'pin'); this.nxEdge = now; return true; }
    if (dy < 0 && k > 0) { this.lockUntil = now + 650; this.nxSet(k - 1, 'end'); this.nxEdge = now; return true; }
    this.nxPos = null;
    return false;
  }
  // Arriving at Clubs & Facilities by a snap (from below): sit at its bottom so the stretch continues from there.
  fcEnter(dir) {
    const y = dir > 0 ? 0 : FC_RANGE;
    this.fcPos = y; this.fcEdge = Date.now();
    this.setState({ fcY: y, ...(dir < 0 ? { s16: true } : {}) });
  }
  // Scroll-linked stretches (see LINKS): the camera follows the scroll; sections' entrances start as they come in.
  // At either end of a stretch the scroll waits for a fresh gesture, then snaps on to the next section.
  linkPosOf(key) {
    const v = this.state.view, L = LINKS[key];
    const at = L.at.find(([x]) => x === v); if (!at) return 0;
    if (v === 'fc1') return CAM.t2 - CAM.fc1 + (this.state.fcY || 0);
    return v === L.at[0][0] ? 0 : CAM.t2 === L.top ? L.top - CAM[v] : L.len;
  }
  linkWheel(dy) {
    if (MOBILE) return false;
    if (this.state.lb) return false;
    const now = Date.now(), streak = now - (this.lkLast || 0) < 160; this.lkLast = now;
    let key = this.state.link;
    if (!key) {
      if (this.lockUntil && now < this.lockUntil) return false;
      key = linkOf(this.state.view); if (!key) return false;
      const y0 = this.linkPosOf(key), L0 = LINKS[key];
      if ((dy < 0 && y0 <= 0) || (dy > 0 && y0 >= L0.len)) return false; // already at the end: let it snap on
      this.lkPos = y0; this.lkEdge = 0; this.setState({ link: key, linkY: y0 });
    }
    const L = LINKS[key], pos = this.lkPos ?? this.state.linkY ?? 0;
    const atEnd = (dy < 0 && pos <= 0.5) || (dy > 0 && pos >= L.len - 0.5);
    if (atEnd) {
      if (streak && now - (this.lkEdge || 0) < 900) { this.lkEdge = now; return true; } // reached the end with this gesture: wait
      this.linkSettle();
      return this.state.view === 'nx' && dy > 0; // fresh gesture at the end: hand over to the snap (or to Looking Forward's own column)
    }
    this.linkGo(Math.max(0, Math.min(L.len, pos + dy)));
    if (this.lkPos <= 0 || this.lkPos >= L.len) this.lkEdge = now;
    return true;
  }
  linkGo(target) {
    this.lkPos = target;
    if (this.lkRaf) return;
    const tick = () => {
      const key = this.state.link; if (!key) { this.lkRaf = 0; return; }
      const L = LINKS[key], cur = this.state.linkY || 0, d = this.lkPos - cur;
      const y = Math.abs(d) < 0.5 ? this.lkPos : cur + d * 0.2;
      let view = L.at[0][0]; for (const [v, from] of L.at) if (y >= from) view = v;
      const up = {};
      if (view !== this.state.view) up.view = view;
      for (const f in L.enter) if (y >= L.enter[f] && !this.state[f]) up[f] = true;
      if (Object.keys(up).length) { this.setState({ linkY: y, ...up }); if (up.s10) this.arriveMb(); } else this.quiet({ linkY: y });
      this.camToDom();
      this.lkRaf = Math.abs(d) < 0.5 ? 0 : requestAnimationFrame(tick);
    };
    this.lkRaf = requestAnimationFrame(tick);
  }
  // leave the stretch where the camera is: settle into the section it sits in (no movement)
  linkSettle() {
    const key = this.state.link; if (!key) return;
    if (this.lkRaf) { cancelAnimationFrame(this.lkRaf); this.lkRaf = 0; }
    const L = LINKS[key], y = this.state.linkY || 0;
    let view = L.at[0][0]; for (const [v, from] of L.at) if (y >= from) view = v;
    const patch = { link: null, linkY: 0, view };
    if (view === 'fc1') { patch.fcY = Math.max(0, y - (CAM.t2 - CAM.fc1)); this.fcPos = patch.fcY; }
    this.setState(patch);
    if (view === 'nx') this.nxEnter(1);
    if (view === 'wc') setTimeout(() => this.hvLayout(), 60);
  }
  linkStop() { if (this.lkRaf) { cancelAnimationFrame(this.lkRaf); this.lkRaf = 0; } if (this.state.link) this.linkSettle(); }
  // Camera position. While a scroll-linked move is running, each frame writes it straight to the camera element
  // (quiet state, no re-render of the whole page), which keeps the motion smooth.
  camNow() {
    const view = this.state.view;
    return this.state.link ? +(LINKS[this.state.link].top - (this.state.linkY || 0)).toFixed(2) : view === 'fc1' ? +(CAM.fc1 - (this.state.fcY || 0)).toFixed(2) : (CAM[view] ?? 0);
  }
  quiet(patch) { this.state = { ...this.state, ...patch }; this.queueUrlSync(); }
  camToDom() {
    if (!this.camEl || !this.camEl.isConnected) { const r = this.findRoot(); this.camEl = r && r.querySelector('.cam'); }
    if (this.camEl) this.camEl.style.transform = `translateY(${this.camNow()}px)`;
  }
  nxEnter(dir) { this.nxPos = null; this.nxEdge = Date.now(); this.nxSet(dir > 0 ? 0 : 2, dir > 0 ? 'top' : 'end'); }
  arriveMb() {
    const first = !this.state.s10; this.setState({ s10: true });
    if (!first) return;
    if (this.rafM) cancelAnimationFrame(this.rafM);
    const t0 = performance.now() + 1400;
    const step = (now) => { const x = Math.min(1, Math.max(0, (now - t0) / 1300)); this.setState({ pM: 1 - Math.pow(1 - x, 3) }); if (x < 1) this.rafM = requestAnimationFrame(step); };
    this.setState({ pM: 0 }); this.rafM = requestAnimationFrame(step);
  }
  arrive7() { this.land(); const first = !this.state.s7; this.setState({ s7: true }); this.play7(0, 0.15, 0.3); }
  // 6 ⇄ 7 travels through the topic cards: zoom back out to the cards, then into the next card
  // leave a topic (or transition-2) and come back to the three cards — the visitor picks what's next
  toCards() {
    clearTimeout(this.hopT);
    const from = this.state.view;
    this.lockUntil = Date.now() + 1500;
    if (from !== 't2' && from !== 'wc' && !(MOBILE && (from === 'mb' || from === 'fc1'))) this.leaveTo5(from); // straight back up from the section below: no card zoom-out
    this.setState({ view: 's5', hopping: false });
  }
  // skip buttons: straight to the named screen — the story panel grows to full navy, then the next section opens out of it
  // sticky menu: jump straight to a section
  jumpTo(to) {
    if (this.raf6) cancelAnimationFrame(this.raf6); if (this.raf7) cancelAnimationFrame(this.raf7); if (this.raf8) cancelAnimationFrame(this.raf8);
    clearTimeout(this.hopT); clearTimeout(this.lvT);
    this.lockUntil = Date.now() + 1300;
    const flag = { fy: 's11', nx: 's13' }[to];
    this.linkStop(); this.setState({ menu: false, lv: null, hopping: false, view: to, ...(flag ? { [flag]: true } : {}), ...(to === 's5' ? { s4: true } : {}) });
    if (to === 's2') this.arrive2();
    if (to === 'fy') this.arriveFy();
    if (to === 'nx') this.nxEnter(1);
    if (['s6', 's7', 's8', 'mb', 'fc1'].includes(to)) { // topic / inner pages: the cards sit behind them, then the page opens as from its card
      if (this.raf6) cancelAnimationFrame(this.raf6); if (this.raf7) cancelAnimationFrame(this.raf7); if (this.raf8) cancelAnimationFrame(this.raf8);
      this.setState({ s4: true, ...(to in { s6: 1, s7: 1, s8: 1 } ? { tabLast: { s6: 0, s7: 1, s8: 2 }[to] } : {}) });
      if (to === 's6') this.arrive6(); else if (to === 's7') this.arrive7(); else if (to === 's8') this.arrive8();
      else if (to === 'mb') this.arriveMb(); else { this.setState({ s15: true }); this.fcEnter(1); }
    }
    if (to === 's3') { clearTimeout(this.tgT); if (this.played3 && this.state.s3) { if (this.state.step !== 0) this.setStep(0); } else this.arrive3(true); }
  }
  // desktop: the five card pages (L2) read as one vertical run — past the last story of one card the scroll moves
  // straight on to the next card's page (back up lands on the previous page's last story)
  l2To(to, dir) {
    if (this.raf6) cancelAnimationFrame(this.raf6); if (this.raf7) cancelAnimationFrame(this.raf7); if (this.raf8) cancelAnimationFrame(this.raf8);
    clearTimeout(this.hopT); clearTimeout(this.lvT);
    this.lockUntil = Date.now() + 1100;
    this.setState({ view: to, lv: null, hopping: false, s4: true, ...(to in { s6: 1, s7: 1, s8: 1 } ? { tabLast: { s6: 0, s7: 1, s8: 2 }[to] } : {}) });
    const back = dir < 0;
    if (to === 's6') { this.land(); this.setState({ s6: true }); this.play6(back ? DC.length - 1 : 0, 0.15, 0.3); this.bar6From = 0; }
    else if (to === 's7') { this.land(); this.setState({ s7: true }); this.play7(back ? DC7.length - 1 : 0, 0.15, 0.3); this.bar7From = 0; }
    else if (to === 's8') { this.land(); this.setState({ s8: true }); this.play8(back ? DC8.length - 1 : 0, 0.15, 0.3); this.bar8From = 0; }
    else if (to === 'mb') this.arriveMb();
    else if (to === 'fc1') { this.setState({ s15: true }); this.fcEnter(dir); }
  }
  // topic tabs: switch straight to a topic (always its first story)
  tabTo(to) {
    const from = this.state.view;
    if (from === to || !['s6', 's7', 's8'].includes(from)) return;
    if (this.raf6) cancelAnimationFrame(this.raf6); if (this.raf7) cancelAnimationFrame(this.raf7); if (this.raf8) cancelAnimationFrame(this.raf8);
    clearTimeout(this.hopT);
    this.lockUntil = Date.now() + 900;
    this.setState({ view: to, tabLast: { s6: 0, s7: 1, s8: 2 }[to] });
    if (to === 's6') { this.setState({ s6: true }); this.play6(0, 0.15, 0.3); } else if (to === 's7') this.arrive7(); else this.arrive8();
  }
  skipTo(to) {
    const from = this.state.view;
    if (this.raf6) cancelAnimationFrame(this.raf6); if (this.raf7) cancelAnimationFrame(this.raf7); if (this.raf8) cancelAnimationFrame(this.raf8);
    clearTimeout(this.hopT); clearTimeout(this.lvT);
    this.lockUntil = Date.now() + 1600;
    this.setState({ lv: from, hopping: true }); // panel grows back to full-screen navy
    this.hopT = setTimeout(() => {
      this.setState({ view: to, hopping: false, lv: null, s9: to === 't2' ? true : this.state.s9 });
      if (to === 's7') this.arrive7(); else if (to === 's8') this.arrive8();
      else if (to === 'fc1') { this.setState({ s15: true }); this.fcEnter(1); }
      else if (to === 'wc') { this.setState({ s12: true }); setTimeout(() => this.hvLayout(), 60); }
      else if (to === 'mb') this.arriveMb();
      else if (to === 's6') { this.land(); this.setState({ s6: true }); this.play6(DC.length - 1, 0.15, 0.3); } // back up into the last story
    }, 40);
  }
  hop(to) {
    clearTimeout(this.hopT);
    const from = this.state.view, viaT2 = to === 't2' || from === 't2';
    this.lockUntil = Date.now() + (viaT2 ? 2700 : 4600);
    this.leaveTo5(from);
    this.setState({ view: 's5', hopping: true });
    this.hopT = setTimeout(() => {
      this.setState({ view: to, hopping: false });
      if (to === 's7') this.arrive7();
      else if (to === 's8') this.arrive8();
      else if (to === 't2') this.setState({ s9: true });
      else { this.setState({ s6: true }); this.play6(DC.length - 1, 0.7); }
    }, viaT2 ? 1600 : 3000); // card ⇄ card: pull back, hold ~2s, zoom into the next card; to/from transition-2: pull back, then glide down
  }
  arrive6() {
    this.land();
    const first = !this.state.s6;
    this.setState({ s6: true });
    this.play6(0, 0.15, 0.3);
  }
  clearAll() {
    clearTimeout(this.resetT); clearTimeout(this.countT); clearTimeout(this.swapT); clearTimeout(this.readyT); clearTimeout(this.curT); clearTimeout(this.rollT);
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this.rafC) cancelAnimationFrame(this.rafC);
  }
  startTimers() {
    if (this.state.s3) this.arrive3(true);
  }
  // First arrival at section 3 plays its sequence once.
  arrive3(force) {
    if (this.props.showFinal) return;
    if (this.played3 && !force) return;
    this.played3 = true;
    clearTimeout(this.countT);
    this.setState({ s2: true, s3: true, hd: true, p: 0, step: 0, fresh: true });
    this.countT = setTimeout(() => this.countUp(), COUNT_AFTER);
  }
  // Section 1.5 plays its entrance the first time it is reached.
  arrive2() {
    if (this.props.showFinal || this.played2) { if (!this.state.s2) this.setState({ s2: true }); return; }
    this.played2 = true;
    this.setState({ s2: true, cdP: 0 });
    clearTimeout(this.rollT);
    this.rollT = setTimeout(() => {
      const t0 = performance.now();
      const step = (now) => {
        const x = Math.min(1, (now - t0) / ROLL_DUR);
        this.setState({ cdP: 1 - Math.pow(1 - x, 3) });
        if (x < 1) this.rafC = requestAnimationFrame(step);
      };
      this.rafC = requestAnimationFrame(step);
    }, ROLL_AFTER);
  }
  // Step between the three At a glance panels; the numbers count up again on each.
  setStep(n) {
    clearTimeout(this.countT);
    if (this.raf) cancelAnimationFrame(this.raf);
    this.setState({ step: n, fresh: false, p: 0, dirB: n < this.state.step });
    this.countT = setTimeout(() => this.countUp(), 420);
  }
  go(dir) {
    const now = Date.now();
    if (this.state.link) this.linkStop();
    if (this.lockUntil && now < this.lockUntil) return;
    // section 1 ⇄ the SAFRA logo it started from
    if (this.state.view === 'top' && dir < 0) { if (this.state.ready) { this.lockUntil = now + 1700; this.setState({ view: 'logo' }); } return; }
    if (this.state.view === 'logo') { if (dir > 0) { this.lockUntil = now + 1300; this.setState({ view: 'top', curOn: false }); clearTimeout(this.curT); this.curT = setTimeout(() => this.setState({ curOn: true }), REPLAY_DONE + CURSOR_AFTER); } return; }
    if (this.state.lb) return; // gallery open
    if (MOBILE) {
      const order = MOBILE_INITIATIVES.map(topic => topic[2]);
      const view = this.state.view === 'fc2' ? 'fc1' : this.state.view;
      const index = order.indexOf(view);
      if (view === 's5' && dir > 0) { this.lockUntil = now + 1200; this.setState({ view: 'wc', s12: true, s14: true }); return; }
      if (index >= 0) {
        const stories = STORY_DATA[Number(view.slice(1))];
        const step = this.state[{ s6: 'step6', s7: 'step7', s8: 'step8' }[view]] || 0;
        // Read every story within a topic before moving to its neighbour in the list.
        if (!stories || step + dir < 0 || step + dir >= stories.length) {
          const to = order[index + dir];
          if (to) this.l2To(to, dir);
          else if (dir < 0) this.toCards();
          else this.skipTo('wc');
          return;
        }
      }
    }
    if (MOBILE && ['wc', 'end'].includes(this.state.view)) {
      if (dir < 0) this.toCards();
      else this.setState({ view: 'end', s14: true });
      return;
    }
    if (!MOBILE && this.state.view === 'mb') { this.l2To(dir > 0 ? 'fc1' : 's8', dir); return; } // Membership: on to Clubs & Facilities / back to Strengthening Bonds
    if (!MOBILE && this.state.view === 'fc1') { if (dir > 0) this.skipTo(AFTER()); else this.l2To('mb', -1); return; } // Clubs & Facilities page: once its own scroll ends, on below the cards / back up to the cards // Membership page: down to & beyond, up back to the cards
    { const TAIL = (MOBILE ? ['mb', 'fc1', 'wc', 'end'] : ['wc', 'end']) /* 'nx' (Looking forward) hidden for now — NX_OFF */ /* 'fy' (Our year in summary) removed */, ti = TAIL.indexOf(this.state.view);
      if (ti >= 0) {
        if (ti === 0 && dir < 0) { this.toCards(); return; }
        const nv = TAIL[ti + dir]; if (!nv) return;
        this.lockUntil = now + 1200; this.setState({ view: nv, [{ fc1: 's15', fc2: 's16', fy: 's11', wc: 's12', nx: 's13', end: 's14' }[nv] || 's10']: true });
        if (nv === 'fc1') this.fcEnter(dir);
        if (nv === 'wc') setTimeout(() => this.hvLayout(), 60);
        if (nv === 'fy') this.arriveFy();
        if (nv === 'nx') this.nxEnter(dir);
        return;
      } }
    if (this.state.view === 't2') {
      if (dir > 0) { this.lockUntil = now + 1200; if (MOBILE) { this.setState({ view: 'mb' }); this.arriveMb(); } else { this.setState({ view: 'fc1', s15: true }); this.fcEnter(1); } }
      else this.toCards();
      return;
    }
    if (this.state.view === 's8') {
      const ns = (this.state.step8 || 0) + dir;
      if (ns >= DC8.length) { if (MOBILE) this.skipTo(AFTER()); else this.l2To('mb', 1); return; }
      if (ns < 0) { if (MOBILE) this.toCards(); else this.l2To('s7', -1); return; }
      this.lockUntil = now + 900; this.play8(ns, 0.2); return;
    }
    if (this.state.view === 's7') {
      const ns = (this.state.step7 || 0) + dir;
      if (ns >= DC7.length) { if (MOBILE) this.skipTo('s8'); else this.l2To('s8', 1); return; }
      if (ns < 0) { if (MOBILE) this.toCards(); else this.l2To('s6', -1); return; }
      this.lockUntil = now + 900; this.play7(ns, 0.2); return;
    }
    if (this.state.view === 's6') {
      const ns = (this.state.step6 || 0) + dir;
      if (ns >= DC.length) { if (MOBILE) this.skipTo(AFTER()); else this.l2To('s7', 1); return; }
      if (ns < 0) { this.toCards(); return; }
      this.lockUntil = now + 900; this.play6(ns, 0.2); return;
    }
    if (this.state.view === 's3') {
      const ns = this.state.step + dir;
      if (ns >= 0 && ns <= 2) { this.lockUntil = now + 1150; this.setStep(ns); return; }
    }
    if (this.state.view === 's5' && dir > 0) { this.lockUntil = now + 1200; if (MOBILE) { this.setState({ view: 'wc', s12: true, s14: true }); } else { this.setState({ view: 'wc', s12: true }); setTimeout(() => this.hvLayout(), 60); } return; }
    const j = ORDER.indexOf(this.state.view) + dir;
    if (j < 0 || j >= ORDER.length) return;
    const v = ORDER[j];
    this.lockUntil = now + ((v === 's6' || this.state.view === 's6') ? 1400 : 1200); // let the navy zoom finish
    if (this.state.view === 's6' && v === 's5') this.leaveTo5('s6');
    this.setState({ view: v });
    if (v === 's2') this.arrive2();
    if (v === 'tg') {
      this.setState({ hd: true }); this.holdTg = true;
      // back up from the cards: once they've faded out, reset At a glance so the next visit plays its entrance again
      clearTimeout(this.tgT);
      if (dir < 0) this.tgT = setTimeout(() => { if (this.state.view === 'tg') this.setState({ s3: false, fresh: false }); }, 500);
      // coming down: the large AT A GLANCE heading holds a moment, then shrinks into place on its own (on into At a glance)
      clearTimeout(this.tgA);
      if (dir > 0) this.tgA = setTimeout(() => { if (this.state.view === 'tg' && !this.state.menu) { this.lockUntil = 0; this.holdTg = false; this.go(1); } }, TG_AUTO);
    }
    if (v === 's3') {
      clearTimeout(this.tgT);
      if (!this.played3) this.arrive3();
      else if (dir > 0) { // coming down from the large heading again: replay the first entrance (heading shrinks, then the cards rise in)
        if (this.state.s3) { this.setState({ s3: false }); requestAnimationFrame(() => requestAnimationFrame(() => { if (this.state.view === 's3') this.arrive3(true); })); }
        else this.arrive3(true);
      }
    }
    if (v === 's5') this.setState({ s4: true });
    if (v === 't2') this.setState({ s9: true });
  }
  countUp() {
    if (this.raf) cancelAnimationFrame(this.raf);
    const t0 = performance.now(), dur = 1400;
    const step = (now) => {
      const x = Math.min(1, (now - t0) / dur);
      this.setState({ p: 1 - Math.pow(1 - x, 3) });
      if (x < 1) this.raf = requestAnimationFrame(step);
    };
    this.raf = requestAnimationFrame(step);
  }
  restart() {
    this.clearAll();
    this.played3 = false; this.played2 = false;
    this.lockUntil = Date.now() + 1200;
    this.setState({ phase: 'reset', p: 0, cdP: 0, step: 0, fresh: false, s2: false, s3: false, hd: false, view: 'top', ready: false, curOn: false });
    this.readyT = setTimeout(() => this.setState({ ready: true }), INTRO_DONE + 90);
    this.curT = setTimeout(() => this.setState({ curOn: true }), INTRO_DONE + 90 + CURSOR_AFTER);
    this.resetT = setTimeout(() => { this.setState({ phase: 'run' }); }, 90);
  }
  // Draw one glyph and return its ink columns on a given row (relative to the pen position) and its cap/ascender top.
  glyph(ch, font, size) {
    const W = Math.ceil(size * 2) + 40, H = Math.ceil(size * 1.6) + 20, ox = 20, oy = Math.ceil(size * 1.2);
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const ctx = c.getContext('2d'); ctx.font = font; ctx.fillText(ch, ox, oy);
    const d = ctx.getImageData(0, 0, W, H).data;
    const ink = (x, y) => d[(y * W + x) * 4 + 3] > 128;
    let top = -1;
    for (let y = 0; y < oy && top < 0; y++) for (let x = 0; x < W; x++) if (ink(x, y)) { top = y; break; }
    return { ink, ox, oy, W, top: top < 0 ? null : oy - top };
  }
  runs(g, row) {
    const out = []; let s = -1;
    for (let x = 0; x <= g.W; x++) {
      const on = x < g.W && g.ink(x, row);
      if (on && s < 0) s = x;
      if (!on && s >= 0) { out.push([s - g.ox, x - 1 - g.ox]); s = -1; }
    }
    return out;
  }
  findRoot() {
    if (this.root && this.root.isConnected) return this.root;
    const walk = (r) => {
      const f = r.querySelector && r.querySelector('.mh');
      if (f) return f;
      const all = r.querySelectorAll ? r.querySelectorAll('*') : [];
      for (const el of all) if (el.shadowRoot) { const x = walk(el.shadowRoot); if (x) return x; }
      return null;
    };
    try { this.root = walk(document); } catch (e) { this.root = null; }
    return this.root;
  }
  measure() {
    try {
      const c = document.createElement('canvas');
      const ctx = c.getContext('2d');
      ctx.font = '400 100px ' + FAM;
      const t = {};
      const place = (m, k, x0, base) => {
        const fs = 100 * k;
        const A = (m.fontBoundingBoxAscent ?? 92) * k, D = (m.fontBoundingBoxDescent ?? 24) * k;
        const baseOff = (fs - (A + D)) / 2 + A;
        return { x: +(x0 + m.actualBoundingBoxLeft * k).toFixed(2), y: +(base - baseOff).toFixed(2), fs: +fs.toFixed(2) };
      };
      for (const id in SPEC) {
        const s = SPEC[id];
        const m = ctx.measureText(s.text);
        const inkW = m.actualBoundingBoxLeft + m.actualBoundingBoxRight;
        if (!(inkW > 0)) return;
        t[id] = place(m, (s.x1 - s.x0 + 1) / inkW, s.x0, s.base);
      }
      t.t4a = place(ctx.measureText(TO.text), t.t4c.fs / 100, TO.x0, TO.base);
      if (MOBILE) {
        const ratio = W / 393;
        for (const [id, [x, y, fs]] of Object.entries(MOBILE_HEADLINE)) t[id] = { x: x * ratio, y: H / 2 + (y - 426) * ratio, fs: fs * ratio };
        ctx.font = '500 100px ' + FAM;
      }
      const TEXTS = { t1: SPEC.t1.text, t2: SPEC.t2.text, t3: SPEC.t3.text, t4a: TO.text, t4b: SPEC.t4b.text, t4c: SPEC.t4c.text, t5: SPEC.t5.text };
      for (const id in TEXTS) {
        const kk = t[id].fs / 100; let acc = 0; const offs = [], ws = [];
        for (const ch of Array.from(TEXTS[id])) { const w = ctx.measureText(ch).width * kk; offs.push(+acc.toFixed(2)); ws.push(+w.toFixed(2)); acc += w; }
        t[id].offs = offs; t[id].ws = ws; t[id].w = +acc.toFixed(2);
      }
      const mA = ctx.measureText('53 SAFRA');
      const k34 = AGM_FS / 100, A34 = (mA.fontBoundingBoxAscent ?? 92) * k34, D34 = (mA.fontBoundingBoxDescent ?? 24) * k34;
      const agmBase = AGM_INK_TOP + mA.actualBoundingBoxAscent * k34;
      const agmTop = +(agmBase - ((AGM_FS - (A34 + D34)) / 2 + A34)).toFixed(2);

      // The bar = the right stem of the second "n" in NSmen.
      const fs5 = t.t5.fs;
      ctx.font = '400 ' + fs5 + 'px ' + FAM;
      const adv = t.t5.offs[4];
      const gn = this.glyph('n', '400 ' + fs5 + 'px ' + FAM, fs5);
      const nRuns = this.runs(gn, gn.oy - Math.round(fs5 * 0.08));
      if (nRuns.length < 2) return;
      const st = nRuns[nRuns.length - 1];
      const barX = t.t5.x + adv + st[0];
      const barW = st[1] - st[0] + 1;
      const barTop = MOBILE ? t.t5.y + fs5 * .88 : SPEC.t5.base - Math.round(fs5 * 0.12);

      // The L of AT A GLANCE (72px, 500): its shape from the font, its place from the page.
      const gl = this.glyph('L', '500 ' + GL_FS + 'px ' + FAM, GL_FS);
      if (!gl.top) return;
      const capH = gl.top;
      const lRuns = this.runs(gl, Math.round(gl.oy - capH * 0.5));
      if (!lRuns.length) return;
      const lsb = lRuns[0][0], lW = lRuns[0][1] - lRuns[0][0] + 1;
      const fRuns = this.runs(gl, gl.oy - 2);
      const footR = fRuns.length ? fRuns[fRuns.length - 1][1] : lsb + 32;
      const fw = footR - lsb + 1;
      let fh = 0;
      const fx = gl.ox + lsb + Math.round(fw * 0.8);
      for (let y = gl.oy - 1; y > gl.oy - capH && gl.ink(fx, y); y--) fh++;
      if (fh < 3 || fh > capH / 3) fh = lW;

      const root = this.findRoot();
      const span = root && root.querySelector('.gL');
      const mark = root && root.querySelector('.gLb');
      let Lx, Lbase;
      if (span && mark && span.offsetParent) {
        // sub-pixel exact (offsetLeft/Top round to whole pixels, which left the line ~0.5px off the L)
        const pe = span.offsetParent, pr = pe.getBoundingClientRect(), k = pe.offsetWidth ? pr.width / pe.offsetWidth : 1;
        const sr = span.getBoundingClientRect(), mr = mark.getBoundingClientRect();
        Lx = k ? (sr.left - pr.left) / k - pe.clientLeft : span.offsetLeft;
        Lbase = k ? (mr.top - pr.top) / k - pe.clientTop : span.offsetTop + mark.offsetTop;
      } else {
        ctx.font = '500 ' + GL_FS + 'px ' + FAM;
        const mh = ctx.measureText('A');
        const hA = mh.fontBoundingBoxAscent ?? 66, hD = mh.fontBoundingBoxDescent ?? 17;
        Lx = ctx.measureText('AT A G').width + 6 * 0.36;
        Lbase = (GL_FS - (hA + hD)) / 2 + hA;
      }
      const markTop = mark ? mark.offsetTop : null;
      const ox = Lx + lsb + lW / 2;
      const oy = Lbase - capH;
      const head = { x: +(CUE_X - ox).toFixed(2), y: +(GLANCE_BASE - Lbase).toFixed(2), ox: +ox.toFixed(2), oy: +oy.toFixed(2) };
      const base = markTop != null ? markTop : (Lbase - (span ? span.offsetTop : 0));
      const Ld = { sx: lsb, st: +(base - capH).toFixed(2), sw: lW, sh: capH, ft: +(base - fh).toFixed(2), fw, fh };
      const barH = Math.max(40, Math.round(BAR_END - barTop));
      // the wipe starts as exactly the L, then opens out to the whole heading
      const h2 = root && root.querySelector('#glance-title');
      let wipe = { l: 45, r: 45 };
      if (h2 && h2.offsetWidth) {
        const hl = h2.offsetLeft, hw = h2.offsetWidth;
        wipe = { l: +((Lx + lsb - hl) / hw * 100).toFixed(3), r: +(100 - (Lx + lsb + fw - hl) / hw * 100).toFixed(3) };
      }
      // section 4: per-letter offsets/widths so each letter carries its slice of the line's gradient and can react to the cursor
      const s4 = {};
      S4_LINES().forEach(([k, txt, fs]) => {
        ctx.font = S4_W() + ' ' + fs + 'px ' + FAM; let acc = 0; const offs = [], ws = []; const ls = S4_LS() * fs;
        for (const ch of Array.from(txt)) { const w = ctx.measureText(ch).width + ls; offs.push(+acc.toFixed(2)); ws.push(+w.toFixed(2)); acc += w; }
        s4[k] = { txt, fs, offs, ws, w: +acc.toFixed(2) };
      });
      // section 6 heading: each word carries the shared gradient, offset by where it sits in its line
      ctx.font = '600 56px ' + FAM;
      const sp = ctx.measureText(' ').width, dcw = [];
      let dcW = 0;
      [[0, 1, 2], [3, 4, 5]].forEach((ids) => { let x = 0; ids.forEach((i) => { dcw[i] = -Math.round(x * 10) / 10; x += ctx.measureText(DC_WORDS[i]).width + sp; }); dcW = Math.max(dcW, Math.ceil(x - sp + 4)); });
      // desktop section 6 header title: 40px, 0.8px tracking
      ctx.font = '600 40px ' + FAM; const dch = []; let dcHW = 0;
      const wTr = (w) => ctx.measureText(w).width + 0.8 * Array.from(w).length, spT = ctx.measureText(' ').width + 0.8;
      [[0, 1, 2], [3, 4, 5]].forEach((ids) => { let x = 0; ids.forEach((i) => { dch[i] = -Math.round(x * 10) / 10; x += wTr(DC_WORDS[i]) + spT; }); dcHW = Math.max(dcHW, Math.ceil(x - spT + 4)); });
      const dch7 = []; let dcHW7 = 0; ctx.font = '600 40px ' + FAM;
      [[0, 1]].forEach((ids) => { let x = 0; ids.forEach((i) => { dch7[i] = -Math.round(x * 10) / 10; x += wTr(['APPRECIATING', 'NSMEN'][i]) + spT; }); dcHW7 = Math.max(dcHW7, Math.ceil(x - spT + 4)); });
      ctx.font = '600 56px ' + FAM;
      const dcw7 = []; let dcW7 = 0;
      [[0], [1, 2]].forEach((ids) => { let x = 0; ids.forEach((i) => { dcw7[i] = -Math.round(x * 10) / 10; x += ctx.measureText(AN_WORDS[i]).width + sp; }); dcW7 = Math.max(dcW7, Math.ceil(x - sp + 4)); });
      const dch8 = []; let dcHW8 = 0; ctx.font = '600 40px ' + FAM;
      [[0, 1]].forEach((ids) => { let x = 0; ids.forEach((i) => { dch8[i] = -Math.round(x * 10) / 10; x += wTr(['STRENGTHENING', 'BONDS'][i]) + spT; }); dcHW8 = Math.max(dcHW8, Math.ceil(x - spT + 4)); });
      ctx.font = '600 56px ' + FAM; const dcW8 = Math.ceil(Math.max(ctx.measureText('STRENGTHENING').width, ctx.measureText('BONDS').width) + 4);
      this.setState({ lay: { t, agmTop, barX, barW, barTop, barH, lW, lBase: GLANCE_BASE, head, Ld, wipe, dcw, dcW, dch, dcHW, dch7, dcHW7, dch8, dcHW8, s4, dcw7, dcW7, dcW8 } });
      requestAnimationFrame(() => this.hvLayout());
    } catch (e) {}
  }
  renderVals() {
    const k = this.props.parallax ?? 1;
    const { mx, my } = this.state;
    const p = this.props.showFinal ? 1 : this.state.p;
    const tr = (d) => 'translate3d(' + (mx * d * k).toFixed(1) + 'px,' + (my * d * k).toFixed(1) + 'px,0)';
    const stageClass = this.props.showFinal ? 'is-final' : (this.state.phase === 'run' ? 'is-run' : 'is-reset');

    const lay = this.state.lay;
    const t = lay ? lay.t : {};
    for (const id in SPEC) if (!t[id]) { const s = SPEC[id]; t[id] = { x: s.x0, y: s.base - s.fs * 0.8, fs: s.fs }; }
    if (!t.t4a) t.t4a = { x: TO.x0, y: TO.base - 50, fs: 63 };

    const barW = lay ? lay.barW : 15, barX = lay ? lay.barX : 696, barTop = lay ? lay.barTop : 698;
    const barH = lay ? lay.barH : 202;
    const clip = 'none';
    const head = lay ? lay.head : { x: 478, y: 986, ox: 226, oy: 6 };
    // live countdown to the AGM
    const left = Math.max(0, AGM_AT - this.state.now);
    const cdD = Math.floor(left / 864e5), cdH = Math.floor(left / 36e5) % 24, cdM = Math.floor(left / 6e4) % 60, cdS = Math.floor(left / 1e3) % 60;
    const cp = this.props.showFinal ? 1 : this.state.cdP;
    const cd = { d: Math.round(cdD * cp), h: Math.round(cdH * cp), m: Math.round(cdM * cp), s: Math.round(cdS * cp),
      aria: cdD + ' days, ' + cdH + ' hours, ' + cdM + ' minutes and ' + cdS + ' seconds to the 53rd SAFRA AGM' };

    const TEXTS = { t1: SPEC.t1.text, t2: SPEC.t2.text, t3: SPEC.t3.text, t4a: TO.text, t4b: SPEC.t4b.text, t4c: SPEC.t4c.text, t5: SPEC.t5.text };
    const hx = this.state.hx, hy = this.state.hy;
    const active = !MOBILE && hx != null && this.state.view === 'top' && this.state.phase === 'run';
    const R = 170;
    const letters = {};
    for (const id in TEXTS) {
      const line = t[id], chars = Array.from(TEXTS[id]);
      const fs = line.fs, w = line.w || chars.length * fs * 0.5;
      letters['L_' + id] = chars.map((ch, i) => {
        const off = line.offs ? line.offs[i] : i * fs * 0.5;
        const cw = line.ws ? line.ws[i] : fs * 0.5;
        let tf = 'none';
        const fixed = id === 't5' && i === 4; // the n the bar grows from
        if (active && !fixed && ch !== ' ') {
          const cx = line.x + off + cw / 2, cy = line.y + fs * 0.55;
          const dx = cx - hx, dy = cy - hy, d = Math.hypot(dx, dy);
          if (d < R) {
            const f = Math.pow(1 - d / R, 2), n = d || 1;
            const push = 0.34 * fs * f;
            tf = 'translate(' + (dx / n * push).toFixed(1) + 'px,' + (dy / n * push - fs * 0.08 * f).toFixed(1) + 'px) rotate(' + ((dx >= 0 ? 1 : -1) * 16 * f).toFixed(1) + 'deg) scale(' + (1 + 0.12 * f).toFixed(3) + ')';
          }
        }
        return { ch, tf, bw: w.toFixed(1), bx: (-off).toFixed(1) };
      });
    }
    // section 4 letters: push/tilt away from the cursor while the statement is on screen
    {
      const s4 = lay && lay.s4, v = this.state.view, on4 = hx != null && (v === 's4' || v === 's5');
      const ty = 0; // statement sits above the cards
      const lines = S4_LINES();
      const wOf = (k, txt, fs) => (s4 && s4[k] ? s4[k].w : Array.from(txt).length * fs * 0.48);
      const gw = Math.max(...lines.filter(([k]) => MOBILE ? k !== 'a' : true).map(([k, txt, fs]) => wOf(k, txt, fs))); // the gradient spans the whole block
      lines.forEach(([k, txt, fs, cy0]) => {
        const m = s4 && s4[k], chars = Array.from(txt), w = wOf(k, txt, fs), x0 = (W - w) / 2;
        const bw = MOBILE ? w : gw, lead = MOBILE ? 0 : (gw - w) / 2; /* desktop: one gradient across all three lines */
        letters['L_s4' + k] = chars.map((ch, i) => {
          const off = m ? m.offs[i] : i * fs * 0.48, cw = m ? m.ws[i] : fs * 0.48;
          let tf = 'none';
          if (on4 && ch !== ' ') {
            const cx = x0 + off + cw / 2, cy = cy0 + ty, dx = cx - hx, dy = cy - hy, d = Math.hypot(dx, dy);
            if (d < R) { const f = Math.pow(1 - d / R, 2), n = d || 1, push = 0.34 * fs * f;
              tf = 'translate(' + (dx / n * push).toFixed(1) + 'px,' + (dy / n * push - fs * 0.08 * f).toFixed(1) + 'px) rotate(' + ((dx >= 0 ? 1 : -1) * 16 * f).toFixed(1) + 'deg) scale(' + (1 + 0.12 * f).toFixed(3) + ')'; }
          }
          return { ch, tf, bw: bw.toFixed(1), bx: (-off - lead).toFixed(1) };
        });
      });
    }
    const fin = !!this.props.showFinal;
    const view = this.state.view;
    const masthead = view === 'top' || view === 'logo';
    const mobile = MOBILE; // arrow cursor while the headline reveals, then the red circle replaces it
    const circle = masthead && (this.state.curOn || fin);
    return {
      stageClass,
      mobileHeight: H,
      mobileWidth: W,
      mobileView: view,
      mobileInitiativeNext: (() => {
        const index = MOBILE_INITIATIVES.findIndex(topic => topic[2] === (view === 'fc2' ? 'fc1' : view));
        const next = MOBILE_INITIATIVES[index + 1];
        return { label: next?.[0] || 'Looking forward', click: (e) => {
          e.stopPropagation();
          if (next) this.jumpTo(next[2]); else this.skipTo('wc');
        } };
      })(),
      mobileSteps: { 6: this.state.step6 || 0, 7: this.state.step7 || 0, 8: this.state.step8 || 0 },
      mClass: MOBILE ? 'm' : '',
      s2Class: (fin || this.state.s2) ? 'is-s2' : '',
      s3Class: (fin || this.state.s3) ? 'is-s3' : '',
      viewClass: masthead ? 'v-top' + (circle ? ' v-cur' : '') : ('v-in' + (view === 't2' ? ' v-t2' : '')),
      camY: this.camNow(),
      fcFreeClass: this.state.link ? 'fcfree' : '',
      go2Class: (rankOf(view) ?? 0) >= 1 ? 'go2' : '',
      postClass: (this.state.ready && this.state.phase === 'run') ? 'post' : '',
      lgClass: view === 'logo' ? 'lg' : '',
      go3Class: (rankOf(view) ?? 0) >= 2 ? 'go3' : '',
      s4Class: (fin || this.state.s4) ? 'is-s4' : '',
      go5Class: (rankOf(view) ?? 0) >= 3 ? 'go5' : '', // cards stay put while the camera zooms into a card
      s6Class: (fin || this.state.s6) ? 'is-s6' : '',
      go6Class: (view === 's6' ? 'go6' : '') + (this.state.landing ? ' landing' : ''),
      s7Class: (fin || this.state.s7) ? 'is-s7' : '',
      lvClass: this.state.lv ? 'lv' : '', lv1: this.state.lv === 's6' ? 'lvc' : '', lv2: this.state.lv === 's7' ? 'lvc' : '', lv3: this.state.lv === 's8' ? 'lvc' : '', lv4: this.state.lv === 'mb' ? 'lvc' : '', lv5: this.state.lv === 'fc1' ? 'lvc' : '',
      go7Class: (view === 's7' ? 'go7' : '') + (this.state.hopping ? ' hopping' : ''),
      s8Class: (fin || this.state.s8) ? 'is-s8' : '',
      go8Class: view === 's8' ? 'go8' : '',
      goMClass: !MOBILE && view === 'mb' ? 'goM' : '',
      goFClass: !MOBILE && view === 'fc1' ? 'goF' : '',
      s9Class: (fin || this.state.s9) ? 'is-s9' : '',
      fyv: (() => { const k = fin ? 1 : (this.state.pF ?? 0); const r = {}; ['$134.6M', '$154.2M', '$19.6M', '$20.9M', '$1.9M', '$405.5M'].forEach((v, i) => { r['n' + i] = fmtCount(v, k); }); return r; })(),
      s10Class: (fin || this.state.s10) ? 'is-s10' : '',
      s11Class: (fin || this.state.s11) ? 'is-s11' : '', s12Class: (fin || this.state.s12) ? 'is-s12' : '', s13Class: (fin || this.state.s13) ? 'is-s13' : '', s14Class: (fin || this.state.s14) ? 'is-s14' : '', s15Class: (fin || this.state.s15) ? 'is-s15' : '', s16Class: (fin || this.state.s16) ? 'is-s16' : '',
      nxv: (() => { const k = this.state.nxTab || 0; return { t0: k === 0 ? 'on' : '', t1: k === 1 ? 'on' : '', t2: k === 2 ? 'on' : '', a0: String(k === 0), a1: String(k === 1), a2: String(k === 2), top: 64 * k, left: NX_LEFT[k], p0: k === 0 ? 'on' : '', px: k === 0 ? '' : 'on', name: NX_TABS[k] }; })(),
      nxTab0: (e) => { e.stopPropagation(); this.nxSet(0, 'pin'); }, nxTab1: (e) => { e.stopPropagation(); this.nxSet(1, 'pin'); }, nxTab2: (e) => { e.stopPropagation(); this.nxSet(2, 'pin'); },
      back6: (e) => { e.stopPropagation(); if (this.state.view === 's6') this.toCards(); },
      skip6: (e) => { e.stopPropagation(); if (this.state.view === 's6') this.skipTo('s7'); },
      back7: (e) => { e.stopPropagation(); if (this.state.view === 's7') this.toCards(); },
      skip7: (e) => { e.stopPropagation(); if (this.state.view === 's7') this.skipTo('s8'); },
      back8: (e) => { e.stopPropagation(); if (this.state.view === 's8') this.toCards(); },
      backFc: (e) => { e.stopPropagation(); if (this.state.view === 'fc1') this.toCards(); },
      backMb: (e) => { e.stopPropagation(); if (this.state.view === 'mb') this.toCards(); },
      skip8: (e) => { e.stopPropagation(); if (this.state.view === 's8') this.skipTo(MOBILE ? 'fc1' : AFTER()); },
      topic3: (e) => { e.preventDefault(); e.stopPropagation(); if (this.state.view === 's5' && !(this.lockUntil && Date.now() < this.lockUntil)) { this.lockUntil = Date.now() + 1400; this.setState({ view: 's8' }); this.arrive8(); } },
      dch8: (() => { const o = (this.state.lay && this.state.lay.dch8) || [0, -360]; const r = { W: (this.state.lay && this.state.lay.dcHW8) || 500 }; o.forEach((v, i) => { r['w' + i] = v; }); return r; })(),
      dcw8: { W: (this.state.lay && this.state.lay.dcW8) || 480 },
      d8: (() => {
        const st = this.state.step8 || 0, t = fin ? null : (this.state.t8 ?? null), r = {};
        DC8.forEach((d, i) => {
          r['on' + i] = st === i ? 'on' : '';
          const live = i === st && t !== null, tt = live ? t : 99;
          const pPh = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1, pC = live ? eOut1(Math.min(1, Math.max(0, (tt - (this.hold || 0)) / 1.25))) : 1, pB = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1;
          const from = this.bar8From ?? 0, o = { ph: ((1 - pPh) * 100).toFixed(2), bar: Math.round(from + (d.bar - from) * pB) };
          d.stats.forEach((v, k) => { o['c' + k] = live ? fmtCount(v, pC) : v; });
          d.desc.forEach((l, k) => { const q = live ? eOut2(Math.min(1, Math.max(0, (tt - (this.hold || 0) - k * SLIDE.stag) / SLIDE.dur))) : 1; o['l' + k] = l; o['y' + k] = ((1 - q) * SLIDE.dist).toFixed(1); o['a' + k] = q.toFixed(3); }); // description: lines slide up in, one after another
          for (let j = 0; j < 6; j++) { const q = live ? eOut2(Math.min(1, Math.max(0, (tt - (this.hold || 0) - j * SLIDE.stag) / SLIDE.dur))) : 1; o['yb' + j] = ((1 - q) * SLIDE.dist).toFixed(1); o['ab' + j] = q.toFixed(3); } // stat labels above/below the numbers: same slide-in
          { const q = live ? eOut2(Math.min(1, Math.max(0, (tt - (this.hold || 0)) / SLIDE.dur))) : 1; o.yt = ((1 - q) * SLIDE.dist).toFixed(1); o.at = q.toFixed(3); } // the red story title: same slide-in, leading the copy
          r['s' + i] = o;
        });
        return r;
      })(),
      mbv: (() => {
        const k = this.state.mbTab ?? 0, pm = fin ? 1 : (this.state.pM ?? 1), mbSc = MOBILE ? 1 : (this.state.mbSc ?? 1), r = { sc: mbSc.toFixed(4), sh: (708 / mbSc).toFixed(1), ind: [0, 64, 128, 192][k], indh: [62, 62, 62, 98][k], p0: k === 0 ? 'on' : '', px: k === 0 ? '' : 'on', name: MB_TABS[k],
          c0: fmtCount('100+', pm), c1: fmtCount('180,000+', pm), c2: fmtCount('100', pm), c7: fmtCount('60', pm), c8: fmtCount('63', pm), c9: fmtCount('30', pm), c3: fmtCount('27', pm), c4: fmtCount('$615K', pm), c5: fmtCount('240K', pm), c6: fmtCount('12K', pm) };
        { const ord = this.state.mbOrd || [3, 2, 1, 0], mv = this.state.mbMv; [3, 2, 1, 0].forEach((t, j) => { const q = ord.indexOf(t); r['y' + j] = MB_STEP * q; r['z' + j] = q + 1; r['v' + j] = (q === 3 ? 'on' : '') + (t === mv ? ' mv' : ''); r['e' + j] = q === 3 ? 'true' : 'false'; }); }
        // desktop: fixed order Food → Education → Movies → Travel; tapping a card expands it in place (accordion).
        // Collapsed cards show 103px each; the open card is 422px (64px bottom padding, 32px under the next card),
        // or 399px when it is the last card (nothing covers it) — either way the stack fills the 708px under the header
        { [0, 1, 2, 3].forEach((i) => { r['dy' + i] = i <= k ? i * 103 : k * 103 + MB_OPEN - 32 + (i - k - 1) * 103; r['dz' + i] = i + 1; r['dv' + i] = i === k ? 'on' : ''; r['de' + i] = i === k ? 'true' : 'false'; }); }
        MB_TABS.forEach((_, i) => { r['t' + i] = i === k ? 'on' : ''; });
        return r;
      })(),
      ...(() => { const r = {}; MB_TABS.forEach((_, i) => { r['mbTab' + i] = (e) => { e.stopPropagation(); this.mbTo(i); }; }); return r; })(),
      ...(() => { const r = {}; DC8.forEach((d, si) => d.photos.forEach((_, pi) => { r['lb8_' + si + '_' + pi] = (e) => { e.stopPropagation(); this.setState({ lb: { t: 8, s: si, i: d.gi[pi] } }); }; })); return r; })(),
      // a Top picks card taller than its space scrolls inside; the page only moves on once that content is at its end
      mbScroll: (e) => {
        // the card stack (.mbsc) is the only thing that scrolls; a wheel over the copy beside it drives the stack too
        const el = MOBILE ? e.currentTarget : (e.currentTarget.querySelector('.mbsc') || e.currentTarget), dy = e.deltaY;
        if (el !== e.currentTarget && !el.contains(e.target) && el.scrollHeight - el.clientHeight > 1) el.scrollTop += dy;
        const top = el.scrollTop, prev = this.mbPrevEl === el ? this.mbPrevTop : 0;
        this.mbPrevEl = el; this.mbPrevTop = top;
        const room = el.scrollHeight - el.clientHeight > 1;
        // the browser may already have scrolled the content for this event, so "it moved" counts as well as "it can still move"
        const can = room && (top !== prev || (dy > 0 ? top + el.clientHeight < el.scrollHeight - 1 : top > 0));
        const now = Date.now(), streak = now - (this.mbLast || 0) < 300; this.mbLast = now;
        if (can) { this.mbIn = true; this.mbEndAt = 0; e.stopPropagation(); return; }
        // reached the end: a brief pause (so the content settles at its end), then continued scrolling
        // carries on to the next section — even within the same gesture (trackpad momentum included)
        if (this.mbIn && streak) { if (!this.mbEndAt) this.mbEndAt = now; if (now - this.mbEndAt < 350) { e.stopPropagation(); return; } }
        this.mbIn = false; this.mbEndAt = 0;
      },
      topic4: (e) => { e.preventDefault(); e.stopPropagation(); if (this.state.view === 's5' && !(this.lockUntil && Date.now() < this.lockUntil)) { this.lockUntil = Date.now() + 1400; this.setState({ view: 'mb' }); this.arriveMb(); } }, // Rewarding privileges → Membership page
      topic5: (e) => { e.preventDefault(); e.stopPropagation(); if (this.state.view === 's5' && !(this.lockUntil && Date.now() < this.lockUntil)) { this.lockUntil = Date.now() + 1400; this.setState({ view: 'fc1', s15: true }); this.fcEnter(1); } }, // Enhancing SAFRA Clubs & Facilities → its page
      topic2: (e) => { e.preventDefault(); e.stopPropagation(); if (this.state.view === 's5' && !(this.lockUntil && Date.now() < this.lockUntil)) { this.lockUntil = Date.now() + 1400; this.setState({ view: 's7' }); this.arrive7(); } },
      dch7: (() => { const o = (this.state.lay && this.state.lay.dch7) || [0, -340]; const r = { W: (this.state.lay && this.state.lay.dcHW7) || 480 }; o.forEach((v, i) => { r['w' + i] = v; }); return r; })(),
      dcw7: (() => { const o = (this.state.lay && this.state.lay.dcw7) || [0, 0, -440]; const r = { W: (this.state.lay && this.state.lay.dcW7) || 846 }; o.forEach((v, i) => { r['w' + i] = v; }); return r; })(),
      d7: (() => {
        const st = this.state.step7 || 0, t = fin ? null : (this.state.t7 ?? null), r = {};
        DC7.forEach((d, i) => {
          r['on' + i] = st === i ? 'on' : '';
          const live = i === st && t !== null, tt = live ? t : 99;
          const pPh = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1, pC = live ? eOut1(Math.min(1, Math.max(0, (tt - (this.hold || 0)) / 1.25))) : 1;
          const from = this.bar7From ?? 0, pB = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1;
          const o = { ph: ((1 - pPh) * 100).toFixed(2), bar: Math.round(from + (d.bar - from) * pB) };
          d.stats.forEach((v, k) => { o['c' + k] = live ? fmtCount(v, pC) : v; });
          d.desc.forEach((l, k) => { const q = live ? eOut2(Math.min(1, Math.max(0, (tt - (this.hold || 0) - k * SLIDE.stag) / SLIDE.dur))) : 1; o['l' + k] = l; o['y' + k] = ((1 - q) * SLIDE.dist).toFixed(1); o['a' + k] = q.toFixed(3); }); // description: lines slide up in, one after another
          for (let j = 0; j < 6; j++) { const q = live ? eOut2(Math.min(1, Math.max(0, (tt - (this.hold || 0) - j * SLIDE.stag) / SLIDE.dur))) : 1; o['yb' + j] = ((1 - q) * SLIDE.dist).toFixed(1); o['ab' + j] = q.toFixed(3); } // stat labels above/below the numbers: same slide-in
          { const q = live ? eOut2(Math.min(1, Math.max(0, (tt - (this.hold || 0)) / SLIDE.dur))) : 1; o.yt = ((1 - q) * SLIDE.dist).toFixed(1); o.at = q.toFixed(3); } // the red story title: same slide-in, leading the copy
          r['s' + i] = o;
        });
        return r;
      })(),
      topic1: (e) => { e.preventDefault(); e.stopPropagation(); if (this.state.view === 's5' && !(this.lockUntil && Date.now() < this.lockUntil)) { this.lockUntil = Date.now() + 1400; this.setState({ view: 's6' }); this.arrive6(); } }, // always opens story 1
      dch: (() => { const o = (this.state.lay && this.state.lay.dch) || [0, -200, -390, 0, -60, -160]; const r = { W: (this.state.lay && this.state.lay.dcHW) || 572 }; o.forEach((v, i) => { r['w' + i] = v; }); return r; })(),
      dcw: (() => { const o = (this.state.lay && this.state.lay.dcw) || [0, -380, -720, 0, -130, -330]; const r = { W: (this.state.lay && this.state.lay.dcW) || 1014 }; o.forEach((v, i) => { r['w' + i] = v; }); return r; })(),
      d6: (() => {
        const st = this.state.step6 || 0, t = fin ? null : (this.state.t6 ?? null), r = {};
        DC.forEach((d, i) => {
          r['on' + i] = st === i ? 'on' : '';
          const live = i === st && t !== null, tt = live ? t : 99;
          const pPh = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1, pC = live ? eOut1(Math.min(1, Math.max(0, (tt - (this.hold || 0)) / 1.25))) : 1;
          const from = this.bar6From ?? 0, pB = live ? eOut2(Math.min(1, Math.max(0, tt / 0.8))) : 1;
          const o = { ph: ((1 - pPh) * 100).toFixed(2), bar: Math.round(from + (d.bar - from) * pB) };
          d.stats.forEach((v, k) => { o['c' + k] = live ? fmtCount(v, pC) : v; });
          d.desc.forEach((l, k) => { const q = live ? eOut2(Math.min(1, Math.max(0, (tt - (this.hold || 0) - k * SLIDE.stag) / SLIDE.dur))) : 1; o['l' + k] = l; o['y' + k] = ((1 - q) * SLIDE.dist).toFixed(1); o['a' + k] = q.toFixed(3); }); // description: lines slide up in, one after another
          for (let j = 0; j < 6; j++) { const q = live ? eOut2(Math.min(1, Math.max(0, (tt - (this.hold || 0) - j * SLIDE.stag) / SLIDE.dur))) : 1; o['yb' + j] = ((1 - q) * SLIDE.dist).toFixed(1); o['ab' + j] = q.toFixed(3); } // stat labels above/below the numbers: same slide-in
          { const q = live ? eOut2(Math.min(1, Math.max(0, (tt - (this.hold || 0)) / SLIDE.dur))) : 1; o.yt = ((1 - q) * SLIDE.dist).toFixed(1); o.at = q.toFixed(3); } // the red story title: same slide-in, leading the copy
          r['s' + i] = o;
        });
        return r;
      })(),
      lbv: (() => {
        const lbOpen = this.state.lb; if (lbOpen) this.lbLast = lbOpen; const lb = lbOpen || this.lbLast; /* while the viewer fades out, keep showing the story it was opened from */ const d = (lb && lb.t === 8 ? DC8 : lb && lb.t === 7 ? DC7 : DC)[lb ? lb.s : 0], g = d.gallery, k = lb ? lb.i : 0, r = { cls: lbOpen ? 'open' : '', gk: lb ? (lb.t || 6) + '-' + lb.s : '0', src: g[k], alt: 'Photo ' + (k + 1) + ' of ' + g.length };
        const yt = lbOpen && d.videos && d.videos[k]; /* video stories: play the clip (mp4) in the viewer; only while open, so closing stops it */ r.vid = yt || ''; r.poster = yt ? g[k] : ''; r.vidT = yt ? 'Video ' + (k + 1) + ' of ' + g.length : ''; r.imgCls = d.videos ? 'lb-hide' : ''; r.tv = d.videos ? 'lb-tv' : '';
        for (let i = 0; i < 12; i++) { r['t' + i] = g[i] || g[0]; r['c' + i] = i >= g.length ? 'none' : (i === k ? 'sel' : ''); }
        return r;
      })(),
      lbClose: (e) => { e.stopPropagation(); this.setState({ lb: null }); },
      ...(() => { const r = {}; for (let i = 0; i < 12; i++) r['lbT' + i] = (e) => { e.stopPropagation(); if (this.state.lb) this.setState({ lb: { ...this.state.lb, i } }); }; return r; })(),
      ...(() => { const r = {}; DC7.forEach((d, si) => d.photos.forEach((_, pi) => { r['lb7_' + si + '_' + pi] = (e) => { e.stopPropagation(); this.setState({ lb: { t: 7, s: si, i: d.gi[pi] } }); }; })); return r; })(),
      ...(() => { const r = {}; DC.forEach((d, si) => d.photos.forEach((_, pi) => { r['lb_' + si + '_' + pi] = (e) => { e.stopPropagation(); this.setState({ lb: { s: si, i: d.gi[pi] } }); }; })); return r; })(),
      lw: lay ? lay.lW : 9,
      bar3: (() => { const big = this.state.view === 'tg', lw0 = lay ? lay.lW : 9, nx = lay ? lay.barX : 696, nw = lay ? lay.barW : 15, top = lay ? lay.barTop : 686, bot0 = lay ? lay.lBase : GLANCE_BASE; // the n's stem drips down and becomes the L's upright
        // the box is the small-heading geometry; the large heading is reached with a transform (scale about the top centre),
        // run on the compositor in step with the heading's own scale — no width/height animation that could lag behind it
        const h0 = bot0 - top, sx = big ? TG_SCALE : 1, sy = big ? (TG_BASE - top) / h0 : 1, lw = lw0 * sx;
        return { x: +(CUE_X - lw0 / 2).toFixed(2), y: +top.toFixed(2), w: lw0, h: +h0.toFixed(2), sx: +sx.toFixed(4), sy: +sy.toFixed(4), cx: +(CUE_X - lw0 * TG_SCALE / 2).toFixed(2), cw: +(lw0 * TG_SCALE).toFixed(2), // slot through the band above: always the large width, so the line is never trimmed while it narrows
          // while it leaves the masthead it is offset/narrowed to sit on the n's stem
          dx: +((nx + nw / 2) - CUE_X).toFixed(2), k: +(nw / lw0).toFixed(4) }; })(),
      endClass: view === 'end' ? 'at-end' : view === 's5' ? 'at-topics' : view === 'wc' ? 'at-future' : '', // viewport-edge treatments for desktop sections
      i4Class: this.state.i4 ? 'i4' : '', // Our impact, first reveal: the statement lands first, then the cards rise one by one
      b3Class: (view === 'tg' || view === 's3') ? 'b3top' + (this.state.b3ok ? ' b3settled' : '') + (this.state.glanceReturn ? ' b3return' : '') : '', // open the viewport slot during the move; extend upward only after settling
      tgClass: view === 'tg' ? 'at-tg' : '', hdClass: (fin || this.state.hd) ? 'is-hd' : '',
      cd,
      next: () => this.go(1),
      noop: (e) => { e.preventDefault(); e.stopPropagation(); },
      cur: { x: ((hx ?? 720) - 60).toFixed(1), y: ((hy ?? 450) - 60).toFixed(1), o: (circle && hx != null && !mobile) ? 1 : 0, s: (circle && hx != null) ? 1 : 0.4 },
      wheel: (e) => {
        if (Math.abs(e.deltaY) < 4 || this.state.lb) return;
        const sc = e.target?.closest?.('[data-mobile-scroll]');
        // Finish scrolling the list, then require a new gesture to leave either edge.
        if (MOBILE && this.state.view === 's5' && sc?.classList?.contains('mobile-topics')) {
          const now = Date.now(), dir = e.deltaY > 0 ? 1 : -1;
          const edge = dir > 0 ? sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 1 : sc.scrollTop <= 1;
          const continuing = now - (this.topicWheelAt ?? -Infinity) < 220 && this.topicWheelDir === dir;
          this.topicWheelAt = now; this.topicWheelDir = dir;
          if (!continuing) this.topicWheelCanLeave = edge;
          if (edge && this.topicWheelCanLeave) { this.topicWheelCanLeave = false; this.go(dir); }
          return;
        }
        if (MOBILE && sc && (e.deltaY > 0 ? sc.scrollTop + sc.clientHeight < sc.scrollHeight - 1 : sc.scrollTop > 0)) return;
        // one wheel/trackpad gesture (events < 220ms apart, incl. momentum) can't carry on past the large AT A GLANCE heading
        const now = Date.now(), cont = now - (this.lastWheel || 0) < 220; this.lastWheel = now;
        if (this.holdTg && cont && this.state.view === 'tg') return;
        this.holdTg = false;
        if (this.state.menu) { this.setState({ menu: false }); return; } if (this.nxWheel(e.deltaY)) return; if (this.linkWheel(e.deltaY)) return; this.go(e.deltaY > 0 ? 1 : -1);
      },
      tabs: (() => { const k = { s6: 0, s7: 1, s8: 2 }[view], on = k != null && MOBILE /* desktop: each topic page has its own header (back · title · next), so the tabs only show on mobile */ && !this.state.lb; /* desktop topic 1 has its own header */ const i = k ?? (this.state.tabLast ?? 0); return { cls: on ? 'on' : '', x: TABS_X[i], w: TABS_W[i], s6: i === 0 ? 'on' : '', s7: i === 1 ? 'on' : '', s8: i === 2 ? 'on' : '', s6sel: String(i === 0), s7sel: String(i === 1), s8sel: String(i === 2) }; })(),
      tab_s6: (e) => { e.stopPropagation(); this.tabTo('s6'); }, tab_s7: (e) => { e.stopPropagation(); this.tabTo('s7'); }, tab_s8: (e) => { e.stopPropagation(); this.tabTo('s8'); },
      menu: { cls: ((rankOf(view) ?? 0) >= 2 && !this.state.lb ? 'on' : '') + (this.state.menu ? ' open' : '') + ((MOBILE ? ['fy', 'end', 'mb', 'fc1', 'fc2'] : ['fy', 'end', 'mb']).includes(view) ? ' grad' : ''), exp: this.state.menu ? 'true' : 'false' },
      menuOpen: (e) => { e.stopPropagation(); this.setState({ menu: true }); },
      menuClose: (e) => { e.stopPropagation(); this.setState({ menu: false }); },
      menuStop: (e) => { e.stopPropagation(); if (e.currentTarget.tagName === 'A') e.preventDefault(); },
      nav_top: (e) => { e.stopPropagation(); this.jumpTo('top'); },
      nav_s2: (e) => { e.stopPropagation(); this.jumpTo('s2'); },
      nav_s3: (e) => { e.stopPropagation(); this.jumpTo('s3'); },
      nav_s5: (e) => { e.stopPropagation(); this.jumpTo('s5'); },
      nav_fy: (e) => { e.stopPropagation(); this.jumpTo('fy'); },
      nav_wc: (e) => { e.stopPropagation(); this.jumpTo('wc'); },
      nav_nx: (e) => { e.stopPropagation(); this.jumpTo('nx'); },
      nav_s6: (e) => { e.stopPropagation(); this.jumpTo('s6'); },
      nav_s7: (e) => { e.stopPropagation(); this.jumpTo('s7'); },
      nav_s8: (e) => { e.stopPropagation(); this.jumpTo('s8'); },
      nav_mb: (e) => { e.stopPropagation(); this.jumpTo('mb'); },
      nav_fc: (e) => { e.stopPropagation(); this.jumpTo('fc1'); },
      tap: () => { if (this.state.menu) { this.setState({ menu: false }); return; } if (this.state.view === 'top' || this.state.view === 'logo' || this.state.view === 't2') this.go(1); },
      touchStart: (e) => { this.touchScroller = e.target?.closest?.('[data-mobile-scroll]'); this.touchScrollTop = this.touchScroller?.scrollTop || 0; this.ty = e.touches && e.touches[0] ? e.touches[0].clientY : null; this.tyLast = this.ty; this.tMoved = false; },
      // mobile: inside the scroll-linked stretches (and Looking forward's column) the page follows the finger
      touchMove: (e) => {
        const y = e.touches && e.touches[0] ? e.touches[0].clientY : null;
        if (!MOBILE || y == null || this.tyLast == null || this.state.menu || this.state.lb) return;
        const sc = this.touchScroller;
        if (sc && (Math.abs(sc.scrollTop - this.touchScrollTop) > 1 || (this.tyLast > y ? sc.scrollTop + sc.clientHeight < sc.scrollHeight - 1 : sc.scrollTop > 0))) { this.tMoved = true; this.tyLast = y; return; }
        const r = e.currentTarget && e.currentTarget.getBoundingClientRect ? e.currentTarget.getBoundingClientRect() : null;
        const k = r && r.width ? W / r.width : 1; // screen px → artboard px
        const dy = (this.tyLast - y) * k; this.tyLast = y;
        if (Math.abs(dy) < 0.5) return;
        if (this.nxWheel(dy) || ((this.state.link || linkOf(this.state.view)) && this.linkWheel(dy))) this.tMoved = true;
      },
      touchEnd: (e) => {
        const y = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : null;
        if (this.ty == null || y == null || this.state.menu || this.state.lb) return;
        if (this.tMoved) { this.tMoved = false; return; } // already followed the finger
        if (Math.abs(this.ty - y) > 30) { if (this.nxWheel((this.ty - y) * 1.5)) return; if (this.linkWheel((this.ty - y) * 1.5)) return; this.go(this.ty > y ? 1 : -1); }
      },
      t,
      ...letters,
      agmTop: lay ? lay.agmTop : 556,
      bar: { x: barX, y: barTop, w: barW, h: barH, clip },
      // section 2 starts as exactly the bar's rectangle, then opens to the full frame
      wipe: lay && lay.wipe ? lay.wipe : { l: 45, r: 45 },
      bloomX: (+barX + barW / 2).toFixed(2),
      head: (() => { const big = view === 'tg', capH = lay && lay.Ld ? lay.Ld.sh : 52; return { x: head.x, y: head.y, ox: head.ox, oy: head.oy, s: big ? TG_SCALE.toFixed(4) : 1, ty: big ? +(TG_BASE - GLANCE_BASE - capH * (TG_SCALE - 1)).toFixed(2) : 0 }; })(),
      v: (() => {
        const st = this.state.step, q = (i) => (st === i ? p : 1);
        const K = (n, i, suf) => Math.round(n * q(i)) + suf;
        const C = (n, i) => Math.round(n * q(i)).toLocaleString('en-US');
        return { m1: K(417, 0, 'K'), m2: K(86, 0, '%'), o1: (1.72 * q(1)).toFixed(2) + 'M', o2: K(75, 1, 'K'), o3: K(211, 1, 'K'), o4: K(52, 1, 'K'),
          s1: C(1074, 2) + ' MWh', s2: K(432, 2, ' Tonnes'), s3: C(6850, 2) };
      })(),
      sl0: this.state.step === 0 ? 'on' : '', sl1: this.state.step === 1 ? 'on' : '', sl2: this.state.step === 2 ? 'on' : '',
      sweepS: ((this.state.step + 1) / 3).toFixed(4),
      freshClass: this.state.fresh ? 'fresh' : '',
      dirClass: this.state.dirB ? 'dirb' : '',
      pFamily: tr(-18),
      pConcert: tr(-30),
      pKids: tr(-24),
      pTyres: tr(-36),
      pp: (() => { const v = this.state.view, on = false && (v === 's6' || v === 's7' || v === 's8'), /* cursor drift removed */ f = (d) => on ? (mx * d * k).toFixed(1) + 'px ' + (my * d * k).toFixed(1) + 'px' : '0px 0px'; return { d0: f(-14), d1: f(-24), d2: f(-20), d3: f(-18) }; })(), // section 6/7 photos drift with the cursor
      move: (e) => {
        if (MOBILE) return;
        if (!this.root) { this.root = e.currentTarget; requestAnimationFrame(() => this.measure()); }
        const r = e.currentTarget.getBoundingClientRect();
        if (!r.width) return;
        const s = 1440 / r.width;
        const cl = (x) => Math.max(-0.5, Math.min(0.5, x));
        this.setState({ mx: cl((e.clientX - r.left) / r.width - 0.5), my: cl((e.clientY - r.top) / (r.width * 0.625) - 0.5), hx: (e.clientX - r.left) * s, hy: (e.clientY - r.top) * s });
        this.hvMove((e.clientX - r.left) * s, (e.clientY - r.top) * s, s);
        const tc = e.target && e.target.closest ? e.target.closest('.tc') : null; this.cardStack(this.state.view === 's5' ? tc : null);
      },
      leave: (e) => { if (MOBILE) return; if (e && e.relatedTarget) return; /* still in the window (side margins): keep following */ this.setState({ mx: 0, my: 0, hx: null, hy: null }); this.hvMove(null, null, 1); this.cardStack(null); },
      hook: (e) => {
        try { const r = e.currentTarget.closest('.mh'); if (r) { this.root = r; requestAnimationFrame(() => this.measure()); } } catch (err) {}
      },
      L: lay && lay.Ld ? lay.Ld : { sx: 6, st: 6, sw: 9, sh: 52, ft: 49, fw: 32, fh: 9 },
      replay: () => this.restart()
    };
  }
}
