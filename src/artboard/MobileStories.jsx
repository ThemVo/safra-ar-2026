import { useLayoutEffect, useRef, useState } from "react";
import { MOBILE_STORY_CROPS } from "./mobileStoryCrops.js";
import { STORY_DATA } from './ArtboardLogic.js';
import { SECTION_IDS, screenId } from './routes.js';

export function MobileBack({ onClick, light = false }) {
  return <button className={`mobile-back${light ? ' light' : ''}`} type="button" aria-label="Back to the topics" onClick={onClick}><svg width="20" height="20" viewBox="0 0 38 32" fill="none" aria-hidden="true"><path d="M36.5 16H2.5M16 2.5 2.5 16 16 29.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>;
}
const META = {
  6: [
    ['Making defence more accessible', ['participants', 'camps'], ['Over', ''], 300],
    ['Commemorating SAF60 at SAFRA', ['people engaged'], ['Over'], 300],
    ['Sharing lessons from the past', ['people engaged'], ['Over'], 300],
    ['Building preparedness together', ['people engaged'], ['Over'], 300],
  ],
  7: [
    ['Nurturing appreciation from young', ['preschoolers', 'preschools centres'], ['Over', 'Over'], 344],
    ['Expressing gratitude through storytelling', ['students', 'videos'], ['', ''], 344],
    ['Turning business support into everyday benefits', ['partner merchants', 'deals'], ['Over', 'Over'], 344],
    ['Fueling up our national servicemen', ['snacks', 'food truck activities'], ['Over', ''], 344],
  ],
  8: [
    ['Celebrating the SG60 journey', ['people engaged'], ['Over'], 359],
    ['Creating cherished family memories', ['people participated', 'babies & toddlers raced'], ['Over', 'Over'], 359],
    ['Strengthening teamwork and camaraderie', ['cohesion events', 'national servicemen engaged'], ['', 'Over'], 359],
    ['Connecting youths through shared interests', ['youths participated'], ['Over'], 359],
    ['Unwinding with buddies', ['people enjoyed'], ['Over'], 359],
    ['Lending a helping hand', ['participants', 'raised'], ['Over', 'Close to'], 359],
  ],
};
// Positions belong to individual photographs, keeping the collage responsive without scaling text.
const LAYOUTS = {
  '6-0': [[0,173,0,220,260],[1,185,313,140,170],[2,43,536,240,160]],
  '6-1': [[0,173,0,220,260],[1,141,323,220,147],[2,39,516,130,180]],
  '6-2': [[0,173,0,220,260],[1,80,428,193,268]],
  '6-3': [[0,173,0,220,260],[1,104,407,184,123],[2,217,563,160,133]],
  '7-0': [[2,173,0,220,260],[0,110,367,240,160],[1,28,556,160,140]],
  '7-1': [[0,173,0,220,130],[1,155,291,210,140],[2,28,476,160,96],[3,233,596,160,100]],
  '7-2': [[2,213,0,180,180],[3,180,278,180,180],[0,28,471,160,160],[1,243,576,120,120]],
  '7-3': [[0,173,0,220,260],[1,100,348,260,180],[2,28,576,183,120]],
  '8-0': [[0,173,0,220,260],[2,126,345,200,174],[1,28,564,220,132]],
  '8-1': [[0,173,0,220,260],[2,187,396,190,130],[1,28,576,183,120]],
  '8-2': [[0,173,0,220,260],[2,187,396,190,130],[1,28,576,140,120]],
  '8-3': [[0,173,0,220,260],[2,155,355,220,160],[1,28,576,183,120]],
  '8-4': [[0,173,0,220,260],[2,188,396,190,130],[1,28,576,183,120]],
  '8-5': [[0,193,0,200,140],[1,83,490,220,160]],
};
// Fit the full reference composition into the space below the section header.
function StoryFitFrame({ children }) {
  const frame = useRef(null);
  const [scale, setScale] = useState(0);
  useLayoutEffect(() => {
    const el = frame.current;
    const fit = () => setScale(Math.min(el.clientWidth / 393, el.clientHeight / 696));
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={frame} className="mobile-story-fit"><div className="mobile-story-fit-canvas" style={{ transform: `translateX(-50%) scale(${scale})` }}>{children}</div></div>;
}

export function MobileStories({ v, height }) {
  const topic = Number(v.mobileView?.slice(1));
  if (![6, 7, 8].includes(topic)) return null;
  const index = v.mobileSteps[topic];
  const data = STORY_DATA[topic][index];
  const live = v[`d${topic}`][`s${index}`];
  const [title, labels, prefixes, panelHeight] = META[topic][index];
  const layout = LAYOUTS[`${topic}-${index}`];
  const cropNames = topic === 8 && index === 0 ? ['main img', 'img 4', 'img 2'] : topic === 7 && index === 2 ? ['img 1', 'img 4', 'img 5', 'img 3'] : ['main img', 'img 2', 'img 3'];
  const back = v[`back${topic}`];
  const collage = (
    <article key={`${topic}-${index}`} id={screenId(`s${topic}`, index)} className={`mobile-story-collage collage-${topic}-${index}`} aria-label={title} style={{ '--panel-height': `${panelHeight}px`, '--collage-height': `${Math.max(696, height - 157)}px` }}>
      {layout.map(([photo, x, y, w, h], slot) => {
        const crop = MOBILE_STORY_CROPS[`${topic}-${index}`]?.[cropNames[slot]];
        const src = crop ? data.gallery[data.gi[photo]] : data.photos[photo];
        return <button key={photo} className="mobile-story-photo" aria-label={`View photo: ${data.alts[photo]}`} onClick={v[topic === 6 ? `lb_${index}_${photo}` : `lb${topic}_${index}_${photo}`]} style={{ left: `${x / 393 * 100}%`, top: `${y / 696 * 100}%`, width: `${w / 393 * 100}%`, aspectRatio: `${w} / ${h}` }}>
        <img src={src} alt={data.alts[photo]} style={crop ? { position: "absolute", width: `${crop.width}%`, height: `${crop.height}%`, left: `${crop.left}%`, top: `${crop.top}%` } : undefined} />{data.videos && <span className="mobile-video-play" aria-hidden="true">▶</span>}
      </button>; })}
      <div className="mobile-story-panel">
        <h3>{title}</h3>
        <div className="mobile-story-stats">{data.stats.map((value, i) => <div key={i}><small>{prefixes[i] || '\u00a0'}</small><strong>{topic === 8 && index === 2 && i === 1 ? '53K' : live[`c${i}`]}</strong><span>{labels[i]}</span></div>)}</div>
        <div className="mobile-story-rule" />
        <p>{data.desc.join(' ')}</p>
        <span className="mobile-story-progress" aria-hidden="true" style={{ transform: `scaleX(${(index + 1) / STORY_DATA[topic].length})` }} />
      </div>
    </article>
  );
  return <section id={SECTION_IDS[`s${topic}`]} className={`mobile-stories story-topic-${topic}`} style={{ top: 2 * height, height }} aria-label={topic === 6 ? 'Bringing defence closer to the community' : topic === 7 ? 'Appreciating NSmen' : 'Strengthening bonds'}>
    <header className="mobile-story-header"><MobileBack onClick={back} /><div><h2>{topic === 6 ? <>Bringing defence closer<br />to the community</> : topic === 7 ? 'Appreciating NSmen' : 'Strengthening bonds'}</h2><button type="button" onClick={v.mobileInitiativeNext.click}>Next: {v.mobileInitiativeNext.label}</button></div></header>
    <StoryFitFrame>{collage}</StoryFitFrame>
  </section>;
}
