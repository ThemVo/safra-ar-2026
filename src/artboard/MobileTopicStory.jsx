import { screenId, SECTION_IDS } from './routes.js';

const image = (node, name) => `./assets/mobile-${node}-${name}.png`;
// Figma slots and source-image crops, measured on its 393 × 853 frame.
const photo = (node, name, slot, crop, gallery) => ({src:image(node,name), slot, crop, gallery});
const stories = {
  's8-0': {node:1004,arrowNode:1184,height:359,progress:45,
    title:'Celebrating the SG60 journey',stats:[['Over','52K','people engaged']],
    copy:'SAFRA’s National Day celebrations at Marina Bay and across all SAFRA clubs brought loved ones together for the live screening of the NDP, live performances and nostalgic games.',
    photos:[photo(1004,'imgZ6332741',[173,0,220,260],[-105.59,-96.9,514.34,342.816],0),photo(1004,'imgZ6331361',[126,345.01,200,175],[-13.04,-.95,262.593,175.018],2),photo(1004,'img20260213021500022IOs3',[28,564,220,132],[-45.24,-50.54,280.995,210.746],1)]},
  's8-1': {node:1184,height:359,progress:60,statWidth:88,
    title:'Creating cherished family memories',stats:[['Over','1.2K','people\nparticipated'],['Over','420','babies &\ntoddlers raced']],
    copy:'SG60 SAFRA Family Fiesta brought families together for fun-filled activities, including the SAFRA Diaper Dash and sing-along sessions with their favourite Pororo & Friends characters.',
    photos:[photo(1184,'imgZ8139921',[173,0,220,260],[-89.85,-15.58,413.576,275.582],0),photo(1184,'imgImg2',[187,396,190,130],[0,0,190,130],2),photo(1184,'img50265229411588683429462705279656615173318113N1',[28,576,183,120],[-.4,-17.59,183.457,137.593],1)]},
  's8-2': {node:1218,height:359.6,panelTop:74.7,progress:85,statWidth:101,
    title:'Strengthening teamwork and camaraderie',stats:[['Over','53K','national servicemen\nengaged'],['','637','cohesion\nevents']],
    copy:'Cohesion events were organised for SAF NS units at various SAFRA clubs and SAF camps, featuring a  wide range of activities such as archery tag, bowling, inflatable games, water telematches and various sports competitions.',
    photos:[photo(1218,'imgDdc7Ef85Fcc94E5A8Ed1A38F5A78B3Fe1',[173,0,220,260],[-8.86,-46.92,239.529,319.372],0),photo(1218,'imgF573A9F383374341Bc5B779E69C9837B2',[187.25,396,190,130],[-26.19,.18,246.936,138.901],2),photo(1218,'imgD41523BdC6E743B695041D420Eac95Af1',[28,576,140,120],[-5.47,-47.15,150.421,200.562],1)]},
  's8-3': {node:1253,height:359,progress:110,
    title:'Connecting youths through shared interests',stats:[['Over','1.2K','youths participated']],
    copy:'SAFRA Youth Fiesta brought youths together to compete in the Ultimate Frisbee Tournament and indulge in Japanese pop culture at the DoujinFes Fair and Hololive Official Card Game community workshops.',
    photos:[photo(1253,'img232A59031',[173,0,220,260],[-82.72,-18.64,437.637,291.612],0),photo(1253,'img232A62441',[155.13,355.01,220,160],[-2.67,-.45,249.353,166.154],2),photo(1253,'img232A55251',[27.5,576,183,120],[.13,-.31,182.875,121.856],1)]},
  's8-4': {node:1283,height:359,progress:149.646,
    title:'Unwinding with buddies',stats:[['Over','430','people enjoyed']],
    copy:'Soundbyte Beer Music Play brought national servicemen and their friends together to enjoy live band performances, high-energy DJ sets, games and free flow of drinks.',
    photos:[photo(1283,'imgZ637864Opq30121851551',[173,0,220,260],[-92.03,-19.69,419.744,279.686],0),photo(1283,'imgZ810897Opq30121830141',[187.75,396,190,130],[-.1,.01,195.034,129.988],2),photo(1283,'imgZ810822Opq30121822871',[28,576,183,120],[-5.27,-9.21,193.906,129.206],1)]},
  's8-5': {node:1313,height:359,progress:215.701,next:['Rewarding','Privileges'],
    title:'Lending a helping hand',stats:[['Over','5.5K','participants'],['Close to','$290K','raised']],
    copy:'SAFRA Swim for Hope rallied the community to swim for charity and raise funds for the less privileged and those in need.',
    photos:[photo(1313,'imgDsc1696Opq30101140061',[193,0,200,140],[7.52,.37,209.531,139.634],0),photo(1313,'imgPhoto6287364833657162515Y1',[156.63,462.8,220,160],[.38,-.21,220,165],1)]},
  's6-0': {node:926, height:300, progress:58.494, center:true,
    title:'Making defence more accessible', stats:[['Over','500','participants'],['','13','camps']],
    copy:'Through NS Experience Camps, families got a taste of NS-inspired activities, gaining a deeper appreciation of their loved ones’ service.',
    photos:[photo(926,'imgMagnificEnhanceThePhotoToBeBSOluCrdUb84',[173,0,220,260],[-134,0,497.778,280],0),photo(926,'imgScreenshot20261008At31848Pm8',[185.5,312.68,140,170],[-29.41,0,292.312,208.162],1),photo(926,'imgScreenshot20251129At20117Am13',[43,536,240,160],[-10.41,.38,367.12,208.166],2)]},
  's6-1': {node:1346,height:300,progress:94.012,center:true,
    title:'Commemorating SAFRA60 at SAFRA',stats:[['Over','140K','people engaged']],
    copy:"Be@SAFRA Open Houses brought families together to reflect on the SAF's role as they enjoyed interactive activities, flight simulators and military K9 encounters.",
    photos:[photo(1346,'imgTdReadyExperiential21',[173,0,220,260],[0,-14.15,349.201,273.154],0),photo(1346,'imgGames21',[141.5,323,220,146],[-28.29,-35.21,248.292,190.508],1),photo(1346,'imgUniformTryouts2',[39.31,516,130,180],[-11.39,-26.32,159.408,215.124],2)]},
  's6-3': {node:1402,header:96,height:300,panelTop:86,progress:210,center:true,next:['Appreciating','NSmen'],
    title:'Building preparedness together',stats:[['Over','40K','people engaged']],
    copy:'Total Defence Day commemorative activities equipped participants with practical skills through hands-on demonstrations and interactive games.',
    photos:[photo(1402,'imgZ6332741',[173,0,220,260],[-49,.36,389.877,259.885],0),photo(1402,'img20260213021500022IOs3',[104,407.5,185,123],[0,-62,335,252],1),photo(1402,'imgZ6331361',[217,563,160,140.832],[-23.45,-45.05,278.901,185.887],2)]},
  's7-0': {node:958,statWidth:67,height:344,progress:58.494,
    title:'Nurturing appreciation from young',stats:[['Over','35K','preschoolers'],['Over','460','preschools centres']],
    copy:"Through the Appreciating NSmen Art Jam initiative, preschoolers learnt about national servicemen's contributions and made personalised gifts to thank their fathers for defending Singapore.",
    photos:[photo(958,'imgGames21',[173,0,220,260],[-48.51,-68.2,516.644,396.407],2),photo(958,'imgDsc057871',[109.88,366.99,240,160],[-.25,.37,240.248,160.185],0),photo(958,'imgDsc059112',[28,555.168,160,140.832],[-7.176,.01,211.205,140.82],1)]},
  's7-1': {node:1480,height:344,progress:94.012,video:true,
    title:'Expressing gratitude through storytelling',stats:[['','145','students'],['','44','videos']],
    copy:'The Appreciating NSmen Video Competition saw students using creative storytelling to highlight the contributions of national servicemen and show their support.',
    photos:[photo(1480,'imgVideoComp11',[173,-.63,220,130],[0,-5.29,220,135.29],0),photo(1480,'imgVideoComp21',[154,291.37,210,140],[-28.39,0,292.236,140],1),photo(1480,'imgVideoComp31',[28,476.37,160,96],[-11.78,-1.54,189.865,99.06],2),photo(1480,'imgServingTogether1',[233,596,160,100],[-11.57,-.05,180.419,100.385],3)]},
  's7-2': {node:1527,statWidth:94,height:344,progress:148.92,
    title:'Turning business support into everyday benefits',stats:[['Over','180','partner merchants'],['Over','240','deals']],
    copy:'A wide range of appreciation deals for national servicemen, ranging from daily essentials to recreation, were secured through collaborations with merchants islandwide.',
    photos:[photo(1527,'imgFbCarouselAnsmDeals2025Wave4Klook1',[213,0,180,180],[0,0,180,180],2),photo(1527,'imgFbCarouselAnsmDeals2025Wave6JungleAndUpsaraSpa2',[180,278.01,180,180],[0,0,180,180],3),photo(1527,'imgFbCarouselAnsmDeals2025Wave1BkWhopper1',[28,471.01,160,160],[0,0,160,160],0),photo(1527,'imgFbCarouselAnsmDeals2025Wave2Popeyes1',[243,576,120,120],[0,0,120,120],1)]},
  's7-3': {node:1564,statWidth:62,height:344,progress:210,next:['Strengthening','Bonds'],nextRight:true,
    title:'Fueling up our national servicemen',stats:[['Over','15K','snacks'],['','15','food truck activities']],
    copy:'SAFRA gave away complimentary snacks to national servicemen at various SAF camps, SAFRA clubs and events.',
    photos:[photo(1564,'imgMedia62',[173,0,220,260],[-65,-20.15,342.613,256.96],0),photo(1564,'img2260317',[99.75,348,260,180],[-129.53,-79.52,389.525,259.521],1),photo(1564,'imgMedia41',[28,576.37,183,120],[0,-1.28,183.426,137.569],2)]},
};
// Keep the mobile line breaks in the handover artwork.
const copyLines = {
  's8-0': ['SAFRA’s National Day','celebrations at Marina Bay and','across all SAFRA clubs brought','loved ones together for','the live screening of the','NDP, live performances and','nostalgic games.'],
  's8-1': ['SG60 SAFRA Family Fiesta','brought families together for','fun-filled activities, including','the SAFRA Diaper Dash and','sing-along sessions with their','favourite Pororo & Friends','characters.'],
  's8-2': ['Cohesion events were','organised for SAF NS units at','various SAFRA clubs and SAF','camps, featuring a  wide range','of activities such as archery','tag, bowling, inflatable games,','water telematches and various','sports competitions.'],
  's8-3': ['SAFRA Youth Fiesta brought','youths together to compete in','the Ultimate Frisbee','Tournament and indulge in','Japanese pop culture at the','DoujinFes Fair and Hololive','Official Card Game community','workshops.'],
  's8-4': ['Soundbyte Beer Music Play','brought national servicemen','and their friends together to','enjoy live band performances,','high-energy DJ sets, games','and free flow of drinks.'],
  's8-5': ['SAFRA Swim for Hope rallied','the community to swim for','charity and raise funds for','the less privileged and those','in need.'],
  "s6-0": [
    "Through NS Experience Camps,",
    "families got a taste of NS-",
    "inspired activities, gaining",
    "a deeper appreciation of",
    "their loved ones’ service."
  ],
  "s6-1": [
    "Be@SAFRA Open Houses",
    "brought families together to",
    "reflect on the SAF's role as they",
    "enjoyed interactive activities,",
    "flight simulators and military K9",
    "encounters."
  ],
  "s6-3": [
    "Total Defence Day",
    "commemorative activities",
    "equipped participants with",
    "practical skills through",
    "hands-on demonstrations and",
    "interactive games."
  ],
  "s7-0": [
    "Through the Appreciating",
    "NSmen Art Jam initiative,",
    "preschoolers learnt about",
    "national servicemen's",
    "contributions and made",
    "personalised gifts to thank their",
    "fathers for defending",
    "Singapore."
  ],
  "s7-1": [
    "The Appreciating NSmen Video",
    "Competition saw students",
    "using creative storytelling to",
    "highlight the contributions of",
    "national servicemen and show",
    "their support."
  ],
  "s7-2": [
    "A wide range of appreciation",
    "deals for national servicemen,",
    "ranging from daily essentials to",
    "recreation, were secured",
    "through collaborations with",
    "merchants islandwide."
  ],
  "s7-3": [
    "SAFRA gave away",
    "complimentary snacks to",
    "national servicemen at various",
    "SAF camps, SAFRA clubs",
    "and events."
  ]
};
export function hasMobileTopicStory(view, index) { return Boolean(stories[`${view}-${index}`]); }
export default function MobileTopicStory({v, photos}) {
  const data = stories[`${v.mobileView}-${v.mobileStory}`];
  const defence = v.mobileView === 's6';
  const header = data.header || 117;
  const lines = copyLines[`${v.mobileView}-${v.mobileStory}`];
  return <section id={SECTION_IDS[v.mobileView]} className={`mobile-figma-story${v.mobileView === 's8' ? ' mobile-bonds-story' : ''}`} style={{'--story-header':`${header}px`}}>
    <header className="mobile-topic-header">
      <button type="button" onClick={v[{s6:'back6',s7:'back7',s8:'back8'}[v.mobileView]]} aria-label="Back to the topics"><img src={`./assets/mobile-${data.arrowNode || data.node}-imgArrow.svg`} alt="" /></button>
      <h2 className="mobile-gradient">{defence ? <>Bringing Defence Closer<br/>to The Community</> : v.mobileView === 's8' ? 'Strengthening bonds' : 'Appreciating NSmen'}</h2>
    </header>
    <article id={screenId(v.mobileView,v.mobileStory)} aria-label={data.title} className="mobile-figma-collage">
      {data.photos.map((p,i) => <button key={p.src} type="button" className={`mobile-story-photo${data.video ? ` story-video video-${i}` : ''}`} onClick={photos[p.gallery]?.props.onClick} aria-label={photos[p.gallery]?.props['aria-label']} style={{left:p.slot[0],top:p.slot[1],width:p.slot[2],height:p.slot[3]}}>
        <img src={p.src} alt="" style={{left:p.crop[0],top:p.crop[1],'--crop-width':`${p.crop[2]}px`,'--crop-height':`${p.crop[3]}px`}} />
        {data.video && <img className="mobile-story-play" src={`./assets/mobile-1480-imgAkarIconsCircleTriangleRightFill${[1,'',2,3][i]}.svg`} alt="" />}
      </button>)}
      <div className={`mobile-story-panel figma-story-panel${data.center ? ' panel-centered' : ''}`} style={{top:data.panelTop || 75,height:data.height}}>
        <h3>{data.title}</h3>
        <div className="figma-story-details"><div className="figma-story-stats" style={{'--first-stat-width':`${data.statWidth || 81}px`}}>{data.stats.map(([over,value,label]) => <div key={label} className="figma-story-stat">{over && <span>{over}</span>}<strong>{value}</strong><span>{label}</span></div>)}</div>
        <img className="figma-story-divider" src={`./assets/mobile-${data.node}-imgLine1.svg`} alt="" />
        <p aria-label={data.copy}>{lines ? lines.map((line,i) => <span className="figma-story-copy-line" key={i}>{line}{i < lines.length - 1 ? ' ' : ''}</span>) : data.copy}</p></div>
        <div className="mobile-story-progress" aria-hidden="true" style={{width:data.progress}} />
      </div>
      {data.next && <div className={`mobile-story-next${data.nextRight ? ' next-right' : ''}`}>Next:<br/>{data.next[0]}<br/>{data.next[1]}</div>}
    </article>
  </section>;
}
