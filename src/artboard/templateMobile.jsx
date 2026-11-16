import MobileTopicStory, { hasMobileTopicStory } from "./MobileTopicStory.jsx";
import StickyMenu from "./StickyMenu.jsx";
import { Children, cloneElement, isValidElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import renderDesktop from './template.jsx';
import MobileGlance from './MobileGlance.jsx';
import MobileOpening from './MobileOpening.jsx';
import AnnualReportDownload from './AnnualReportDownload.jsx';
import { SECTION_IDS, screenId } from './routes.js';

// Reuse desktop content, icons, counters and handlers. Only its layout is changed.
function find(node, test) {
  for (const child of Children.toArray(node)) {
    if (!isValidElement(child)) continue;
    if (test(child)) return child;
    const match = find(child.props.children, test);
    if (match) return match;
  }
  return null;
}
function all(node, test) {
  return Children.toArray(node).flatMap(child => !isValidElement(child) ? [] :
    test(child) ? [child] : all(child.props.children, test));
}
const has = (node, name) => (node.props.className || '').split(' ').includes(name);
const MOBILE_ASSETS = {
  mastheadTR: './assets/mobile-mastheadTR.jpg',
  mastheadTL: './assets/mobile-mastheadTL.jpg',
  mastheadBL: './assets/mobile-mastheadBL.jpg',
  mastheadBR: './assets/mobile-mastheadBR.jpg',
  topicDefence: './assets/mobile-topicDefence.jpg',
  topicNSmen: './assets/mobile-topicNSmen.jpg',
  topicBonds: './assets/mobile-topicBonds.jpg',
  topicRewards: './assets/mobile-topicRewards.jpg',
  topicFacilities: './assets/mobile-topicFacilities.jpg',
};
const asset = name => MOBILE_ASSETS[name];
const topics = [
  ['s6', 'Bringing defence closer to the community', 'Families gained a deeper understanding of the importance of National Service and their role in Total Defence.', 'topicDefence'],
  ['s7', 'Appreciating NSmen', 'Preschools, educational institutions and businesses showed appreciation to national servicemen in meaningful ways.', 'topicNSmen'],
  ['s8', 'Strengthening bonds', 'National servicemen had more opportunities to spend quality time with their buddies and loved ones.', 'topicBonds'],
  ['mb', 'Rewarding privileges', 'National servicemen and their families benefitted from new and improved facilities to keep fit, connect and unwind.', 'topicRewards'],
  ['fc1', 'Enhancing SAFRA Clubs & Facilities', 'Members enjoyed exclusive benefits and greater cost savings on a wide range of offerings.', 'topicFacilities'],
];

// Convert artwork's positioned text to normal flow without changing its copy or bindings.
function flow(node, copyLines) {
  return Children.map(node, child => {
    if (!isValidElement(child) || typeof child.type !== 'string') return child;
    if (child.type === 'br') return ' ';
    const style = { ...child.props.style };
    const offers = Children.toArray(child.props.children).some(n => isValidElement(n) && has(n, 'mbi'));
    if (offers) { style.display = 'grid'; style.gridTemplateColumns = 'repeat(2,minmax(0,1fr))'; style.gap = '8px'; }
    for (const k of ['position', 'inset', 'left', 'right', 'top', 'bottom', 'width', 'height', 'minHeight', 'maxHeight', 'paddingRight', 'translate', 'clipPath', 'zIndex']) delete style[k];
    if (child.props.style?.height === '1px') style.height = '1px';
    if (style.fontSize) {
      const fs = parseFloat(style.fontSize);
      if (fs >= 36) style.fontSize = '28px';
      else if (fs >= 20) style.fontSize = '16px';
      else if (fs >= 16) style.fontSize = '14px';
    }
    if (style.gap && parseFloat(style.gap) > 24) style.gap = '24px';
    if (style.whiteSpace) style.whiteSpace = 'normal';
    if (child.props['aria-label'] && child.type === 'p' && all(child.props.children, n => has(n, 'dcl')).length) {
      return cloneElement(child, { style, className: 'mobile-copy-reveal' }, copyLines ? copyLines.map((line, i) => <span key={i} className="mobile-story-copy-line">{line}</span>) : child.props['aria-label']);
    }
    return cloneElement(child, { style, className: offers ? 'mobile-offer-grid' : child.props.className, ...(child.props.role === 'tab' ? {onKeyDown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); child.props.onClick?.(e); } }} : {}) }, flow(child.props.children, copyLines));
  });
}

function Cue({ v, future = false }) {
  return <button type="button" className={`mobile-cue ${future ? 'future' : ''}`} onClick={e => { e.stopPropagation(); v.next(); }} aria-label={future ? "See what's next for SAFRA" : 'Scroll for more'}>
    <img src="./assets/mobile-cursor.svg" alt="" />
  </button>;
}
function ForwardIntro() {
  return <div className="mobile-forward-intro"><div><h2 className="mobile-gradient">LOOKING FORWARD</h2><p>In the coming years, SAFRA will do more to strengthen the collective will of Singaporeans to defend Singapore and support the lifestyle needs of national servicemen and their families.</p></div><strong>CHECK OUT THE HIGHLIGHTS OF<br />OUR 3 KEY PRIORITIES</strong></div>;
}
function Header({ v, title, gradient = true }) {
  return <header className="mobile-topic-header">
    <button type="button" onClick={v[{ s6: 'back6', s7: 'back7', s8: 'back8', mb: 'backMb', fc1: 'backFc' }[v.mobileView]]} aria-label="Back to the topics">
      <img src="./assets/mobile-topic-back.svg" alt="" />
    </button>
    <h2 className={gradient ? 'mobile-gradient' : ''}>{title}</h2>
  </header>;
}
function Story({ v, desktop }) {
  const topic = topics.find(([id]) => id === v.mobileView);
  const section = find(desktop, n => n.props.id === SECTION_IDS[v.mobileView]);
  const story = find(section, n => n.props.id === screenId(v.mobileView, v.mobileStory));
  const panel = find(story, n => has(n, 'dcpn'));
  const photos = all(story, n => has(n, 'dcph'));
  if (hasMobileTopicStory(v.mobileView, v.mobileStory)) return <MobileTopicStory v={v} photos={photos} />;
  const veterans = v.mobileView === 's6' && v.mobileStory === 2;
  return <section id={SECTION_IDS[v.mobileView]} className={`mobile-story-section${veterans ? ' mobile-veterans-story' : ''}`}>
    <Header v={v} title={topic[1]} />
    <article id={screenId(v.mobileView, v.mobileStory)} key={v.mobileStory} aria-label={story?.props['aria-label']} className="mobile-collage">
      {photos.map((photo, i) => cloneElement(photo, { key: i, style: {}, className: `mobile-story-photo photo-${i}` }, veterans ? <img src={`./assets/mobile-defence-story3-${i === 0 ? 'classroom' : 'personnel'}.png`} alt="" /> : photo.props.children))}
      <div className="mobile-story-panel">{flow(panel?.props.children, veterans ? ['Commitment to Defence (C2D)', 'Ambassadors from the SAF', 'Veterans’ League shared real-', 'life experiences, reinforcing', 'the importance of a', 'strong defence.'] : undefined)}<div className="mobile-story-progress" aria-hidden="true" style={{width:`${veterans ? 148.92 : (v[`d${v.mobileView.slice(1)}`]?.[`s${v.mobileStory}`]?.bar || 0) / 520 * 100}${veterans ? 'px' : '%'}`}} /></div>
    </article>
  </section>;
}
function Membership({ v, desktop }) {
  const section = find(desktop, n => n.props.id === SECTION_IDS.mb);
  const cards = all(section, n => has(n, 'mbs'));
  return <section id={SECTION_IDS.mb} className="mobile-membership">
    <Header v={v} title="Rewarding privileges" gradient={false} />
    <p>SAFRA members enjoyed a world of benefits whole year round, ranging from exclusive privileges to preferential rates at SAFRA clubs and partner merchants islandwide.</p>
    <h3 className="mobile-top-picks">TOP PICKS</h3>
    <div className="mobile-membership-cards" data-mobile-scroll onScroll={v.mobileMembershipScroll}>
      {cards.map((card, i) => <article key={i} id={screenId('mb', i)} className={`mobile-membership-card ${v.mobileMembership === i ? 'on' : ''}`}>
        {flow(find(card, n => has(n, 'mbh')))}
        <div className="mobile-membership-fold" inert={v.mobileMembership === i ? undefined : ''}>
          <div>{flow(find(card, n => has(n, 'mbc')))}</div>
        </div>
      </article>)}
    </div>
  </section>;
}
function Facilities({ v, desktop }) {
  const section = find(desktop, n => n.props.id === SECTION_IDS.fc1);
  const cards = all(section, n => n.type === 'article');
  const photos = all(section, n => n.type === 'img');
  return <section id={SECTION_IDS.fc1} className="mobile-facilities">
    <Header v={v} title="Enhancing SAFRA Clubs & Facilities" />
    {cards.map((card, i) => <article key={i} className="mobile-facility-card">
      <img src={photos[i === 0 ? 0 : 1]?.props.src} alt={photos[i === 0 ? 0 : 1]?.props.alt || ''} />
      <div>{flow(card.props.children)}</div>
      {i === 1 && photos[2] && <img className="mobile-facility-detail" src={photos[2].props.src} alt={photos[2].props.alt || ''} />}
    </article>)}
  </section>;
}
function Priorities({ v, desktop, supporting = false }) {
  const root = useRef(null);
  useLayoutEffect(() => {
    const list = root.current.querySelector(supporting ? '.lf3s' : '.lf2l');
    // Retain the largest story's space so a shorter story cannot clamp scrollTop.
    const observer = new ResizeObserver(() => {
      list.style.minHeight = `${Math.max(parseFloat(list.style.minHeight) || 0, list.offsetHeight)}px`;
    });
    observer.observe(list);
    return () => observer.disconnect();
  }, [supporting]);
  const id = supporting ? 'lf3' : 'lf2';
  const section = find(desktop, n => n.props.id === SECTION_IDS[id]);
  const list = find(section, n => has(n, supporting ? 'lf3s' : 'lf2l'));
  const photos = all(section, n => has(n, 'lf-photo'));
  return <section ref={root} id={SECTION_IDS[id]} className={`mobile-priorities ${supporting ? 'supporting' : ''}`}>
    <h2 className="mobile-gradient"><span>{supporting ? '03' : '02'}</span>{supporting ? 'Supporting NSmen’s needs' : 'Strengthening commitment to defence'}</h2>
    <div className="mobile-priority-photos">{photos.map((p, i) => <div key={i}>{flow(p)}{!supporting && <p>{i ? 'FitX Challenge' : 'NS Experience Camp'}</p>}</div>)}</div>
    {supporting && <p className="mobile-photo-caption">{v.lf3v.c1 === 'on' ? 'SAFRA Jurong' : v.lf3v.c2 === 'on' ? 'Future location of SAFRA Bayshore' : 'iBat at SAFRA Tampines'}</p>}
    {flow(list)}
  </section>;
}
function Gallery({ v, desktop }) {
  const gallery = find(desktop, n => has(n, 'lb'));
  const thumbs = all(gallery, n => has(n, 'lb-t')).filter(n => !has(n, 'none'));
  const row = useRef(null);
  const gesture = useRef(null);
  const index = v.mobileGallery?.i || 0;
  useEffect(() => { row.current?.children[index]?.scrollIntoView({ block: 'nearest', inline: 'nearest' }); }, [index]);
  const select = dir => v[`lbT${(index + dir + thumbs.length) % thumbs.length}`]?.({stopPropagation() {}});
  return <div className="mobile-gallery" role="dialog" aria-modal="true" aria-label="Photo and video gallery" onClick={e => e.stopPropagation()} onKeyDown={e => { if (e.key === 'Escape') v.lbClose(e); if (e.key === 'ArrowRight') select(1); if (e.key === 'ArrowLeft') select(-1); }}>
    <button autoFocus className="mobile-gallery-close" type="button" onClick={v.lbClose} aria-label="Close gallery">×</button>
    <div className="mobile-gallery-media" onTouchStart={e => { e.stopPropagation(); gesture.current = e.touches[0].clientX; }} onTouchEnd={e => { e.stopPropagation(); const dx = gesture.current - e.changedTouches[0].clientX; if (Math.abs(dx) > 40) select(dx > 0 ? 1 : -1); }}>
      {v.lbv.vid ? <video key={v.lbv.vid} src={v.lbv.vid} poster={v.lbv.poster} controls playsInline autoPlay /> : <img key={v.lbv.src} src={v.lbv.src} alt={v.lbv.alt} />}
    </div>
    <div className="mobile-gallery-navigation"><button type="button" onClick={() => select(-1)} aria-label="Previous photo">←</button><span>{index + 1} / {thumbs.length}</span><button type="button" onClick={() => select(1)} aria-label="Next photo">→</button></div>
    <div className="mobile-gallery-thumbs" ref={row}>{thumbs.map((t, i) => cloneElement(t, { key: i, style: {}, className: `mobile-gallery-thumb ${i === index ? 'selected' : ''}` }, <img src={v.lbv[`t${i}`]} alt={`Photo ${i + 1}`} />))}</div>
  </div>;
}
function MobileExperience({ v }) {
  const desktop = renderDesktop(v);
  const scroller = useRef(null);
  const frame = useRef(null);
  const view = v.mobileView;
  // Keep the masthead mounted so desktop's reverse/replay transitions can interpolate.
  const masthead = view === 'top' || view === 'logo';
  const opening = masthead || view === 'tg' || view === 's3';
  const continuous = ['s5', 'fc1', 'fc2', 'wc', 'nx'].includes(view);
  const futureOrigin = useRef(['fc1', 'fc2'].includes(view) ? 'fc1' : 's5');
  if (view === 's5') futureOrigin.current = 's5';
  if (['fc1', 'fc2'].includes(view)) futureOrigin.current = 'fc1';
  const futureGated = ['s5', 'fc1', 'fc2'].includes(view);
  const [forwardRevealed, setForwardRevealed] = useState(view === 'nx');
  useLayoutEffect(() => {
    if (view === 'nx') setForwardRevealed(true);
    else if (futureGated || !continuous) setForwardRevealed(false);
  }, [view, futureGated, continuous]);
  const priority = view === 'nx' && v.mobilePriority;
  const previousPriority = useRef(priority);
  const [closingPriority, setClosingPriority] = useState(false);
  useLayoutEffect(() => {
    if (previousPriority.current && !priority && view === 'nx') {
      setClosingPriority(true);
      scroller.current?.scrollTo(0, document.getElementById(SECTION_IDS.nx)?.offsetTop || 0);
    }
    previousPriority.current = priority;
  }, [priority, view]);
  useEffect(() => {
    if (!closingPriority) return;
    const timer = setTimeout(() => setClosingPriority(false), 900);
    return () => clearTimeout(timer);
  }, [closingPriority]);
  const scrollSection = useRef(null);
  const scrollable = (continuous && !priority && !closingPriority) || ['s5', 'fc1', 'fc2', 'lf2', 'lf3', 'end'].includes(view);
  const previousScrollView = useRef(view);
  const enteringFuture = useRef(false);
  const screenKey = opening ? 'opening' : continuous ? `${futureOrigin.current}-future` : ['lf2', 'lf3', 'end'].includes(view) ? (view === 'end' ? 'lf3' : view) : `${view}-${view === 's3' ? v.mobileStep : v.mobileStory}`;
  useLayoutEffect(() => {
    const from = previousScrollView.current;
    previousScrollView.current = view;
    if (['s5', 'fc1', 'fc2'].includes(from) && view === 'wc') {
      const main = scroller.current;
      const boundary = Math.max(0, document.getElementById(SECTION_IDS.wc).offsetTop - main.clientHeight);
      enteringFuture.current = true;
      main.scrollTo({ top: boundary + Math.min(80, main.clientHeight * .1), behavior: 'smooth' });
      return;
    }
    if (scrollSection.current === view) { scrollSection.current = null; return; }
    if (['lf2', 'lf3', 'end'].includes(view)) {
      const main = scroller.current;
      const section = main.querySelector('.mobile-priorities');
      const boundary = Math.max(0, section.offsetHeight - main.clientHeight);
      if (view === 'end') {
        main.dataset.mobileScrollMin = boundary;
        if (from === 'lf3') {
          main.scrollTo(0, boundary);
          const reveal = requestAnimationFrame(() => main.scrollTo({ top: main.scrollHeight, behavior: 'smooth' }));
          return () => cancelAnimationFrame(reveal);
        }
        main.scrollTo(0, main.scrollHeight);
      } else {
        delete main.dataset.mobileScrollMin;
        main.scrollTo(0, v.mobileScrollDirection < 0 ? main.scrollHeight : 0);
      }
      return;
    }
    const top = ['wc', 'nx'].includes(view) ? document.getElementById(SECTION_IDS[view])?.offsetTop || 0 : view === 'fc1' ? v.mobileScrollOffset : 0;
    scroller.current?.scrollTo(0, top);
  }, [screenKey, continuous && view, view === 'end']);
  const onScroll = continuous ? e => {
    if (priority || closingPriority) return;
    const main = e.currentTarget;
    if (futureGated) {
      if (view === 'fc1') v.mobileScroll(e);
      return;
    }
    v.mobileContentScroll(e);
    const commitment = main.querySelector('.mobile-with-commitment');
    const boundary = Math.max(0, commitment.offsetTop - main.clientHeight);
    if (enteringFuture.current) {
      if (main.scrollTop <= boundary + 1) return;
      enteringFuture.current = false;
    }
    const cue = commitment.querySelector('.mobile-future-cue').getBoundingClientRect();
    const passedFutureCue = cue.bottom <= main.getBoundingClientRect().top + 2;
    const nextView = main.scrollTop <= boundary + 1 ? futureOrigin.current : passedFutureCue ? 'nx' : 'wc';
    if (nextView !== view) { scrollSection.current = nextView; v.mobileScrollSection(nextView); }
  } : ['lf2', 'lf3', 'end'].includes(view) ? e => {
    const main = e.currentTarget;
    const minimum = Number(main.dataset.mobileScrollMin || 0);
    // Return to the preceding story in the same native scroll gesture.
    // Clamping here forced users to stop and swipe again to leave the footer.
    if (view === 'end' && main.scrollTop < minimum - 2) {
      delete main.dataset.mobileScrollMin;
      scrollSection.current = 'lf3';
      v.mobileScrollSection('lf3');
    }
    v.mobileContentScroll(e);
  } : view === 'fc1' ? v.mobileScroll : undefined;
  useLayoutEffect(() => {
    const outer = scroller.current, inner = frame.current;
    if (!outer || !inner) return;
    const fit = () => {
      const scale = continuous || scrollable ? 1 : Math.min(1, outer.clientWidth / Math.max(1, inner.offsetWidth), outer.clientHeight / Math.max(1, inner.offsetHeight));
      inner.style.setProperty('--screen-scale', scale);
      inner.style.setProperty('--screen-offset-x', `${Math.min(0, (outer.clientWidth - inner.offsetWidth) / 2)}px`);
      inner.style.setProperty('--screen-offset', `${continuous || scrollable ? 0 : Math.max(0, (outer.clientHeight - inner.offsetHeight * scale) / 2)}px`);
    };
    const observer = new ResizeObserver(fit);
    observer.observe(outer); observer.observe(inner); fit();
    return () => observer.disconnect();
  }, [screenKey]);
  const classes = ['mh', 'm', 'mobile-layout', v.stageClass, opening && v.postClass, masthead && v.lgClass, v.s3Class, v.s4Class, v.s6Class, v.s7Class, v.s8Class, v.s10Class, v.s12Class, v.s13Class, v.s15Class, v.s16Class, v.hdClass].filter(Boolean).join(' ');
  let content;
  if (opening) {
    const artwork = MobileGlance(v);
    const slide = find(artwork, n => has(n, 'sl') && has(n, 'on'));
    const children = Children.toArray(slide.props.children);
    const panel = <><div key={v.mobileStep} id={screenId('s3', v.mobileStep)} className={`sl on glance-panel-${v.mobileStep}`} aria-label={slide.props['aria-label']}>
      {flow(children.filter(n => has(n, 'sub')))}
      <div className="mobile-glance-cards">{flow(children.filter(n => has(n, 'cd')))}</div>
    </div><div className="mobile-glance-progress" aria-hidden="true"><span style={{transform:`scaleX(${(v.mobileStep + 1) / 3})`}} /></div></>;
    const hero = <section id={SECTION_IDS.top} className="mobile-masthead" onClick={v.tap}>
    <div className="mobile-masthead-photos">{['TR','TL','BL','BR'].map((slot,i) => <img key={slot} className={`ph ph${i + 1} ${slot}`} src={asset(`masthead${slot}`)} alt="" />)}<div className="dim mobile-masthead-dim" /></div>
    <div id={SECTION_IDS.logo} className="logo mobile-logo"><div className="lgl lg1"><span className="mobile-logo-brand">SAFRA</span> Annual Report<br />FY 2025/2026</div><div className="lgl lg2 mobile-gradient">KEY HIGHLIGHTS</div></div>
    <h1 className="mobile-headline" aria-label="Explore our efforts in strengthening commitment to defence and supporting NSmen’s needs">
      <span className="ln ln1">Explore our efforts in</span><span className="ln ln2 mobile-gradient">strengthening</span><span className="ln ln3">commitment</span><span className="mobile-headline-row"><span className="ln ln4 ln4a">to</span> <span className="ln ln4 ln4b mobile-gradient">defence</span> <span className="ln ln4 ln4c">and supporting</span></span><span className="ln ln5 mobile-gradient">NSme<span className="mobile-n-stem">n</span>’s needs</span>
    </h1>
    <Cue v={v} />
    </section>;
    content = <MobileOpening view={view} masthead={hero} panel={panel} />;
  }
  else if (continuous) content = <>{futureOrigin.current === 'fc1' ? <Facilities v={v} desktop={desktop} /> : <section id={SECTION_IDS.s5} className="mobile-initiatives"><h2 className="mobile-gradient">Discover how our initiatives made a difference in the lives of national servicemen and their families.</h2><nav aria-label="Topics">{topics.map(([id,title,desc,image],i) => <a key={id} className="mobile-topic" href={`#${SECTION_IDS[id]}`} onClick={v[`topic${i + 1}`]} style={{'--i':i}}><div><h3>{title}</h3><span className="mobile-topic-image"><img src={asset(image)} alt="" /></span></div><p>{desc}</p><span className="mobile-topic-arrow"><img src="./assets/mobile-arrow.svg" alt="" /></span></a>)}</nav></section>}<section id={SECTION_IDS.wc} className="mobile-with-commitment"><h2><span>The year may over.</span><strong className="mobile-gradient">We’re building for<br />the future.</strong></h2><img className="mobile-tongue" src="./assets/mobile-tongue.svg" alt="" /><button type="button" className="mobile-future-cue" onClick={e => { e.stopPropagation(); scroller.current?.scrollTo({ top: document.getElementById(SECTION_IDS.nx).offsetTop, behavior: 'smooth' }); }} aria-label="See what’s next for SAFRA"><img src="./assets/mobile-future-cue.svg" alt="" /></button></section><section id={SECTION_IDS.nx} className={`mobile-looking-forward ${view === 'nx' || forwardRevealed ? 'forward-visible' : ''} ${priority ? 'priority-open' : ''}`}>
      <div className="mobile-forward-base" inert={priority ? '' : undefined} aria-hidden={priority}><ForwardIntro /></div>
      <div className="mobile-priority-reveal" inert={!priority ? '' : undefined} aria-hidden={!priority}>
        <div id={screenId('nx', 0)} className="mobile-priority-one">{flow(find(find(desktop,n => n.props.id === SECTION_IDS.nx),n => has(n,'lf1c'))?.props.children)}</div>
      </div>
    </section></>;
  else if (['s6','s7','s8'].includes(view)) content = <Story v={v} desktop={desktop} />;
  else if (view === 'mb' || view === 't2') content = <Membership v={v} desktop={desktop} />;
  else if (view === 'lf2' || view === 'lf3' || view === 'end') content = <><Priorities v={v} desktop={desktop} supporting={view !== 'lf2'} />{view === 'end' && <footer id={SECTION_IDS.end} className="mobile-footer"><AnnualReportDownload /></footer>}</>;
  return <div className={classes} data-view={view} onWheel={v.wheel} onTouchStart={v.touchStart} onTouchMove={v.touchMove} onTouchEnd={v.touchEnd}>
    <main ref={scroller} key={screenKey} className={`mobile-screen ${view === 's5' ? 'mobile-topics' : ''} screen-${view} ${priority || closingPriority ? 'priority-locked' : ''} ${futureGated ? 'future-gated' : ''}`} data-mobile-scroll={scrollable ? true : undefined} onScroll={onScroll} tabIndex={0} onKeyDown={e => { if (e.target !== e.currentTarget || scrollable) return; if (['ArrowDown', 'PageDown', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); v.mobileAdvance(['ArrowDown', 'PageDown'].includes(e.key) ? 1 : -1); } }} inert={v.mobileGallery || v.mobileMenu ? '' : undefined}>
      <div ref={frame} className="mobile-content" key={screenKey}>{content}</div>
    </main>
    {!['top','logo','tg'].includes(view) && <StickyMenu v={v} mobile />}
    {v.mobileGallery && <Gallery v={v} desktop={desktop} />}
  </div>;
}
export default function render(v) { return <MobileExperience v={v} />; }
