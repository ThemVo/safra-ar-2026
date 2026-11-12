import { useEffect, useRef } from 'react';
import { MOBILE_INITIATIVES } from "./mobileInitiatives.js";
import { SECTION_IDS, screenId } from './routes.js';
import { TopicIcon, TopicArrow } from './MobileTopicIcons.jsx';

const Photo = ({ src, alt, className = '', style }) => <div className={`cd frame ${className}`} style={style}><img className="pic" src={src} alt={alt} /></div>;
function Stat({ label, value, over = false, note, className = '', style }) {
  return <div className={`cd mobile-stat ${className}`} style={style}><p>{label}</p><p className="mobile-stat-number">{over && <small>Over</small>}{value}</p>{note && <p className="mobile-stat-note">{note}</p>}</div>;
}
export function MobileGlance({ v, height }) {
  return <section id={SECTION_IDS.s3} className="s3c mobile-glance" aria-labelledby="glance-title" style={{ top: height, height }}>
    <div id={screenId('s3', 0)} data-mobile-scroll="" className={`sl ${v.sl0}`} aria-label="Membership">
      <h3 className="sub">Membership</h3>
      <div className="mobile-glance-grid mobile-membership">
        <Stat label="Members" value={v.v?.m1} over style={{ '--i': 0 }} />
        <Photo src="./assets/ag-run.jpg" alt="SAFRA members posing together after a run" style={{ '--i': 1 }} />
        <Photo src="./assets/25ac34a7bb7e63a91ebb2d45156f874c.png" alt="Members and their families celebrating with the gingerbread mascot" className="mobile-membership-family" style={{ '--i': 2 }} />
        <Stat label="Satisfaction Rating" value={v.v?.m2} className="mobile-membership-rating" style={{ '--i': 3 }} />
      </div>
    </div>
    <div id={screenId('s3', 1)} data-mobile-scroll="" className={`sl ${v.sl1}`} aria-label="Outreach and Engagement">
      <h3 className="sub">Outreach &amp; Engagement</h3>
      <div className="mobile-glance-grid mobile-outreach">
        <div className="mobile-outreach-row"><Stat label="Participation in SAFRA Activities" value={v.v?.o1} over style={{ '--i': 0 }} /><Photo src="./assets/ag-bikes.jpg" alt="Children racing balance bikes at a SAFRA event" style={{ '--i': 1 }} /></div>
        <div className="mobile-outreach-row"><Photo src="./assets/ag-blaster.jpg" alt="Children trying water blasters during a defence initiative" style={{ '--i': 2 }} /><Stat label="Participation in Defence Initiatives" value={v.v?.o3} over style={{ '--i': 3 }} /></div>
        <div className="mobile-outreach-row"><Stat label="People Engaged Through Appreciating NSmen Initiatives" value={v.v?.o2} over style={{ '--i': 4 }} /><Photo src="./assets/ag-card.jpg" alt="A handmade thank-you card for a national serviceman" style={{ '--i': 5 }} /></div>
        <div className="mobile-outreach-row"><Photo src="./assets/ag-group.jpg" alt="National servicemen participating in a cohesion activity" style={{ '--i': 6 }} /><Stat label="Participation in Cohesion Activities for NS Units" value={v.v?.o4} over style={{ '--i': 7 }} /></div>
      </div>
    </div>
    <div id={screenId('s3', 2)} data-mobile-scroll="" className={`sl ${v.sl2}`} aria-label="Sustainability">
      <h3 className="sub">Sustainability</h3>
      <div className="mobile-glance-grid mobile-sustainability">
        <Photo src="./assets/ag-solar-fy26.jpg" alt="Solar panels at a SAFRA club" style={{ '--i': 0 }} />
        <Stat label="Number of Solar Panels Across SAFRA Clubs Inclusive of 870 New Panels Installed at SAFRA Yishun" value={v.v?.s3} style={{ '--i': 1 }} />
        <Stat label="Solar Energy Generated" value={v.v?.s1} note="Equivalent to the electricity usage of over 320 4-room HDB flats for a year" style={{ '--i': 2 }} />
        <Stat label="Reduction in Carbon Dioxide (CO₂) Emissions" value={v.v?.s2} note="Equivalent to the annual CO₂ absorption of 19,800 trees" style={{ '--i': 3 }} />
        <Photo src="./assets/ag-trees-fy26.jpg" alt="Sunlight through the canopy of mature trees" style={{ '--i': 4 }} />
      </div>
    </div>
    <div className="sweep" aria-hidden="true" style={{ transform: `scaleX(${v.sweepS})` }} />
  </section>;
}

export function MobileTopics({ v, height }) {
  const section = useRef(null);
  useEffect(() => {
    if (v.mobileView !== 's5' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.IntersectionObserver) return;
    const root = section.current;
    const cards = [...root.querySelectorAll('.mobile-topic')];
    const observer = new IntersectionObserver(entries => {
      let stagger = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty('--topic-reveal-delay', `${stagger++ * 80}ms`);
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { root, threshold: 0.12 });
    root.classList.add('topic-reveal-ready');
    cards.forEach(card => observer.observe(card));
    return () => {
      observer.disconnect();
      root.classList.remove('topic-reveal-ready');
      cards.forEach(card => {
        card.classList.remove('is-revealed');
        card.style.removeProperty('--topic-reveal-delay');
      });
    };
  }, [v.mobileView]);
  return <section ref={section} id={SECTION_IDS.s5} className="s45 mobile-topics" aria-labelledby="t1-title" data-mobile-scroll="" style={{ top: height * 2, height }}>
    <h2 id="t1-title">Discover how our initiatives made a difference in the lives of national servicemen and their families.</h2>
    <nav aria-label="Topics">{MOBILE_INITIATIVES.map(([title, copy, view, handler, icon], i) => <a key={view} className="mobile-topic" href={`#${SECTION_IDS[view]}`} onClick={v[handler]} style={{ '--i': i }}>
      <TopicIcon index={icon} /><div><h3>{title}</h3><p>{copy}</p></div><TopicArrow />
    </a>)}</nav>
  </section>;
}
