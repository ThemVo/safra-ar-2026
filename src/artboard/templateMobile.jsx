import { MobileStories } from "./MobileStories.jsx";
import { MobileFacilities } from "./MobileFacilities.jsx";
import { MobileEnding } from "./MobileEnding.jsx";
import { MobileRewards } from "./MobileRewards.jsx";
import { MobileGlance, MobileTopics } from "./MobileSections.jsx";
import { SECTION_IDS } from './routes.js';
// Markup for the artboard. Generated from the original prototype's template, then kept as plain JSX.
// `v` is the object returned by ArtboardLogic.renderVals(); every {{binding}} of the original reads from it.
import { Fragment } from 'react';
import { T, arr, s } from './bind.jsx';

export default function render(v) {
  const H = v.mobileHeight || 844;
  const u = (value) => `calc(${value} * var(--mobile-unit))`;

  return (
    <>
    <div className={`mh ${s(v.lvClass)} ${s(v.dirClass)} ${s(v.freshClass)} ${s(v.stageClass)} ${s(v.s2Class)} ${s(v.s3Class)} ${s(v.viewClass)} ${s(v.go2Class)} ${s(v.go3Class)} ${s(v.s4Class)} ${s(v.go5Class)} ${s(v.postClass)} ${s(v.lgClass)} ${s(v.s6Class)} ${s(v.go6Class)} ${s(v.s7Class)} ${s(v.go7Class)} ${s(v.s8Class)} ${s(v.go8Class)} ${s(v.s9Class)} ${s(v.s10Class)} ${s(v.s11Class)} ${s(v.s12Class)} ${s(v.s13Class)} ${s(v.s14Class)} ${s(v.s15Class)} ${s(v.s16Class)} ${s(v.tgClass)} ${s(v.b3Class)} ${s(v.i4Class)} ${s(v.endClass)} ${s(v.hdClass)} ${s(v.fcFreeClass)} ${s(v.mClass)}`} onMouseMove={v.move} onMouseLeave={v.leave} onWheel={v.wheel} onClick={v.tap} onTouchStart={v.touchStart} onTouchMove={v.touchMove} onTouchEnd={v.touchEnd} style={{ position: "relative", width: "100%", height: `${H}px`, "--b3x": `${s(v.bar3?.cx)}px`, "--b3w": `${s(v.bar3?.cw)}px`, clipPath: "inset(0 calc(-1 * var(--gx, 0px)))", background: "#272C3F", boxShadow: "0 0 0 var(--gx, 0px) #272C3F", fontFamily: "'Google Sans Flex', 'Google Sans', system-ui, sans-serif", fontWeight: "400", color: "#F3F4F7" }}>
      <div className="cam" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: `${4 * H}px`, transform: `translateY(${s(v.camY)}px)` }}>
        <section id={SECTION_IDS.top} className="layer1" aria-label="SAFRA masthead" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: `${H}px`, overflow: "hidden", transformOrigin: "50% 80%" }}>
          <div className="layer" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: `${H}px`, transformOrigin: "50% 46%" }}>
            <div className="px" style={{ position: "absolute", left: u(152), top: "0px", width: u(238), height: u(150), borderRadius: "12px", overflow: "hidden", transform: `${s(v.pFamily)}` }}>
              <img className="ph ph1" src="./assets/mh-tr.jpg" alt="A father and child crawl under camouflage netting on an obstacle course" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="px" style={{ position: "absolute", left: u(0), top: `${H * .259}px`, width: u(200), height: u(126), borderRadius: "12px", overflow: "hidden", transform: `${s(v.pConcert)}` }}>
              <img className="ph ph2" src="./assets/mh-tl.jpg" alt="A family in red poses with the SAFRA mascot at a National Day picnic" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="px" style={{ position: "absolute", left: u(0), top: `calc(${H}px - ${u(138)})`, width: u(220), height: u(138), borderRadius: "12px", overflow: "hidden", transform: `${s(v.pKids)}` }}>
              <img className="ph ph3" src="./assets/mh-bl.jpg" alt="Members on exercise bikes in a spin class" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="px" style={{ position: "absolute", left: u(230), top: `${H * .623}px`, width: u(160), height: u(101), borderRadius: "12px", overflow: "hidden", transform: `${s(v.pTyres)}` }}>
              <img className="ph ph4" src="./assets/mh-br.jpg" alt="A group of members holding bowling balls at a bowling alley" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div className="dim" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: `${H}px`, background: "#272C3F", pointerEvents: "none" }} />
          <img onLoad={v.hook} src="./assets/ff8847615d28660626f1034069988996.png" alt="" style={{ display: "none" }} />
          <div id={SECTION_IDS.logo} className="logo" style={{ position: "absolute", left: u(16), top: `${H / 2 - 26}px`, width: u(358), display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", textAlign: "center", pointerEvents: "none" }}>
            <p className="lgl lg1" style={{ margin: "0", fontSize: "19.5px", fontWeight: "500", lineHeight: "24.4px", color: "#FFFFFF", whiteSpace: "nowrap" }}>
              <span style={{ color: "#F34141" }}>
                SAFRA
              </span>
              {" Annual Report"}<br />FY 2025/2026
            </p>
            <p className="lgl lg2" style={{ margin: "0", padding: "0 .04em", fontSize: "19.5px", fontWeight: "600", lineHeight: "24.4px", whiteSpace: "nowrap", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              KEY HIGHLIGHTS
            </p>
          </div>
          <p className="agm" style={{ display: "none", position: "absolute", left: u(0), top: `${s(v.agmTop)}px`, width: "100%", margin: "0", textAlign: "center", fontSize: "27.2px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", whiteSpace: "nowrap", color: "#6E778B", pointerEvents: "none" }}>
            53
            <sup style={{ fontSize: "0.6em", lineHeight: "0", verticalAlign: "0.45em", marginLeft: "1px" }}>
              rd
            </sup>
            {" SAFRA Annual General Meeting"}
          </p>
          <h1 aria-label="Explore our efforts in strengthening commitment to defence and supporting NSmen’s needs" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: `${H}px`, margin: "0", fontWeight: "400", lineHeight: "1", whiteSpace: "nowrap", pointerEvents: "none" }}>
            <span className="ln ln1" aria-hidden="true" style={{ position: "absolute", left: `${s(v.t?.t1?.x)}px`, top: `${s(v.t?.t1?.y)}px`, fontSize: `${s(v.t?.t1?.fs)}px`, color: "#6E778B" }}>
              {arr(v.L_t1).map((c, $index) => (
                <Fragment key={$index}>
                  <span className="lt" style={{ transform: `${s(c?.tf)}` }}>
                    <T v={c?.ch} />
                  </span>
                </Fragment>
              ))}
            </span>
            <span className="ln ln2" aria-hidden="true" style={{ position: "absolute", left: `${s(v.t?.t2?.x)}px`, top: `${s(v.t?.t2?.y)}px`, fontSize: `${s(v.t?.t2?.fs)}px` }}>
              {arr(v.L_t2).map((c, $index) => (
                <Fragment key={$index}>
                  <span className="lt gl" style={{ transform: `${s(c?.tf)}`, backgroundSize: `${s(c?.bw)}px 100%`, backgroundPosition: `${s(c?.bx)}px 0` }}>
                    <T v={c?.ch} />
                  </span>
                </Fragment>
              ))}
            </span>
            <span className="ln ln3" aria-hidden="true" style={{ position: "absolute", left: `${s(v.t?.t3?.x)}px`, top: `${s(v.t?.t3?.y)}px`, fontSize: `${s(v.t?.t3?.fs)}px`, color: "#6E778B" }}>
              {arr(v.L_t3).map((c, $index) => (
                <Fragment key={$index}>
                  <span className="lt" style={{ transform: `${s(c?.tf)}` }}>
                    <T v={c?.ch} />
                  </span>
                </Fragment>
              ))}
            </span>
            <span className="ln ln4 ln4a" aria-hidden="true" style={{ position: "absolute", left: `${s(v.t?.t4a?.x)}px`, top: `${s(v.t?.t4a?.y)}px`, fontSize: `${s(v.t?.t4a?.fs)}px`, color: "#6E778B" }}>
              {arr(v.L_t4a).map((c, $index) => (
                <Fragment key={$index}>
                  <span className="lt" style={{ transform: `${s(c?.tf)}` }}>
                    <T v={c?.ch} />
                  </span>
                </Fragment>
              ))}
            </span>
            <span className="ln ln4 ln4b" aria-hidden="true" style={{ position: "absolute", left: `${s(v.t?.t4b?.x)}px`, top: `${s(v.t?.t4b?.y)}px`, fontSize: `${s(v.t?.t4b?.fs)}px` }}>
              {arr(v.L_t4b).map((c, $index) => (
                <Fragment key={$index}>
                  <span className="lt gl" style={{ transform: `${s(c?.tf)}`, backgroundSize: `${s(c?.bw)}px 100%`, backgroundPosition: `${s(c?.bx)}px 0` }}>
                    <T v={c?.ch} />
                  </span>
                </Fragment>
              ))}
            </span>
            <span className="ln ln4 ln4c" aria-hidden="true" style={{ position: "absolute", left: `${s(v.t?.t4c?.x)}px`, top: `${s(v.t?.t4c?.y)}px`, fontSize: `${s(v.t?.t4c?.fs)}px`, color: "#6E778B" }}>
              {arr(v.L_t4c).map((c, $index) => (
                <Fragment key={$index}>
                  <span className="lt" style={{ transform: `${s(c?.tf)}` }}>
                    <T v={c?.ch} />
                  </span>
                </Fragment>
              ))}
            </span>
            <span className="ln ln5" aria-hidden="true" style={{ position: "absolute", left: `${s(v.t?.t5?.x)}px`, top: `${s(v.t?.t5?.y)}px`, fontSize: `${s(v.t?.t5?.fs)}px` }}>
              {arr(v.L_t5).map((c, $index) => (
                <Fragment key={$index}>
                  <span className="lt gl" style={{ transform: `${s(c?.tf)}`, backgroundSize: `${s(c?.bw)}px 100%`, backgroundPosition: `${s(c?.bx)}px 0` }}>
                    <T v={c?.ch} />
                  </span>
                </Fragment>
              ))}
            </span>
          </h1>
          <button className="mobile-mast-cue" type="button" aria-label="Scroll for more" onClick={v.next}><img className="arw" src="./assets/ecab593f3aa08a52a88a40fbfd710038.svg" alt="" /><img className="ring" src="./assets/c5353b1ebbdc4fab6ae53df32b4380dd.svg" alt="" /></button>
        </section>
        <span className="bar" aria-hidden="true" style={{ position: "absolute", left: `${s(v.bar?.x)}px`, top: `${s(v.bar?.y)}px`, display: "block", width: `${s(v.bar?.w)}px`, height: `${s(v.bar?.h)}px`, background: "linear-gradient(180deg, #E84392 0%, #F5765E 40%, #F3597B 72%, #E8448F 100%)", clipPath: `${s(v.bar?.clip)}`, pointerEvents: "none" }} />
        <MobileGlance v={v} height={H} />
        <MobileTopics v={v} height={H} />
        <MobileStories v={v} height={H} />
        <MobileRewards v={v} height={H} />
        <MobileFacilities v={v} height={H} />
        <MobileEnding height={H} />
        <span className="bar3w" aria-hidden="true" style={{ "--dx": `${s(v.bar3?.dx)}px`, "--k": `${s(v.bar3?.k)}`, position: "absolute", left: `${s(v.bar3?.x)}px`, top: `${s(v.bar3?.y)}px`, display: "block", width: `${s(v.bar3?.w)}px`, height: `${s(v.bar3?.h)}px`, pointerEvents: "none" }}>
          <span className="bar3s" style={{ position: "absolute", inset: "0", display: "block", transform: `scale(${s(v.bar3?.sx)}, ${s(v.bar3?.sy)})` }}>
            <span className="bar3" style={{ position: "absolute", inset: "0", display: "block", background: "linear-gradient(180deg, #DD4493 0%, #E2448F 55%, #E9468D 100%)" }} />
          </span>
        </span>
        <div id={SECTION_IDS.tg} className="glance" style={{ position: "absolute", left: `${s(v.head?.x)}px`, top: `${s(v.head?.y)}px`, transformOrigin: `${s(v.head?.ox)}px ${s(v.head?.oy)}px`, transform: `translateY(${s(v.head?.ty)}px) scale(${s(v.head?.s)})`, pointerEvents: "none" }}>
          <h2 id="glance-title" className="hd" style={{ "--wl": `${s(v.wipe?.l)}%`, "--wr": `${s(v.wipe?.r)}%`, margin: "0", whiteSpace: "nowrap", fontSize: "32px", fontWeight: "500", lineHeight: "1", letterSpacing: "0.005em", textTransform: "uppercase", background: "linear-gradient(90deg, #6C51A2 0%, #B0489E 32%, #E8448F 50%, #F3606F 74%, #F68A49 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            At a g
            <span className="gL" style={{ position: "relative", visibility: "hidden" }}>
              l
              <span className="gLb" style={{ display: "inline-block", width: "0", height: "0" }} />
              <span className="gLs" style={{ visibility: "visible", position: "absolute", left: `${s(v.L?.sx)}px`, top: `${s(v.L?.st)}px`, width: `${s(v.L?.sw)}px`, height: `${s(v.L?.sh)}px`, background: "linear-gradient(180deg, #E8448F, #EA478C)" }} />
              <span className="gLf" style={{ visibility: "visible", position: "absolute", left: `${s(v.L?.sx)}px`, top: `${s(v.L?.ft)}px`, width: `${s(v.L?.fw)}px`, height: `${s(v.L?.fh)}px`, background: "linear-gradient(90deg, #EA478C, #EE4F86)" }} />
            </span>
            ance
          </h2>
        </div>
      </div>
      <div className={`lb ${s(v.lbv?.cls)}`} role="dialog" aria-modal="true" aria-label="Photo gallery" style={{ position: "absolute", inset: "0", zIndex: "20", background: "#18212A", borderImage: "linear-gradient(#18212A, #18212A) 0 fill / 0 / 0 var(--gx, 0px)" }}>
        <div style={{ position: "absolute", left: u(16), top: "140px", width: u(358), height: "440px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img className={`lb-img ${s(v.lbv?.imgCls)}`} key={v.lbv?.gk} src={v.lbv?.src} alt={v.lbv?.alt} style={{ width: "auto", maxWidth: u(358), objectFit: "contain", display: "block", maxHeight: "440px"  }} />
          {v.lbv?.vid ? <video className="lb-vid" key={v.lbv?.vid} src={v.lbv?.vid} poster={v.lbv?.poster} aria-label={v.lbv?.vidT} controls autoPlay playsInline preload="auto" style={{ position: "absolute", left: "0", top: "119.5px", width: u(358), height: "201px", border: "0", borderRadius: "0", background: "#000" , objectFit: "contain" }} /> : null}
        </div>
        <div className={`lb-row ${s(v.lbv?.tv)}`} data-mobile-scroll="" style={{ position: "absolute", left: "0", top: "620px", width: "100%", display: "flex", justifyContent: "center", gap: "8px" }}>
          <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}><defs><linearGradient id="lbPlayG" x1="2" y1="24" x2="46" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#6252A4" /><stop offset="0.490385" stopColor="#F14192" /><stop offset="0.927885" stopColor="#F6765D" /><stop offset="0.9999" stopColor="#F69141" /></linearGradient></defs></svg>
          <button className={`lb-t ${s(v.lbv?.c0)}`} type="button" aria-label="Photo 1" onClick={v.lbT0} style={{ position: "relative", width: u(44), height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-0`} src={v.lbv?.t0} alt="" style={{ width: u(44), height: "44px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c1)}`} type="button" aria-label="Photo 2" onClick={v.lbT1} style={{ position: "relative", width: u(44), height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-1`} src={v.lbv?.t1} alt="" style={{ width: u(44), height: "44px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c2)}`} type="button" aria-label="Photo 3" onClick={v.lbT2} style={{ position: "relative", width: u(44), height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-2`} src={v.lbv?.t2} alt="" style={{ width: u(44), height: "44px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c3)}`} type="button" aria-label="Photo 4" onClick={v.lbT3} style={{ position: "relative", width: u(44), height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-3`} src={v.lbv?.t3} alt="" style={{ width: u(44), height: "44px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c4)}`} type="button" aria-label="Photo 5" onClick={v.lbT4} style={{ position: "relative", width: u(44), height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-4`} src={v.lbv?.t4} alt="" style={{ width: u(44), height: "44px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c5)}`} type="button" aria-label="Photo 6" onClick={v.lbT5} style={{ position: "relative", width: u(44), height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-5`} src={v.lbv?.t5} alt="" style={{ width: u(44), height: "44px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c6)}`} type="button" aria-label="Photo 7" onClick={v.lbT6} style={{ position: "relative", width: u(44), height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-6`} src={v.lbv?.t6} alt="" style={{ width: u(44), height: "44px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
        </div>
        <button className="lb-x" type="button" aria-label="Close gallery" onClick={v.lbClose} style={{ position: "absolute", left: u(330), top: "16px", width: u(44), height: "44px", padding: "0", border: "0", background: "transparent", cursor: "pointer" }}>
          <svg width="52" height="52" viewBox="1366 22 52 52" aria-hidden="true">
            <rect x="1368" y="24" width="48" height="48" rx="24" fill="none" stroke="#F34141" strokeWidth="3" />
            <path d="M1382.1 38.1L1401.9 57.9M1382.1 57.9L1401.9 38.1" stroke="#F34141" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <nav className={`smenu ${s(v.menu?.cls)}`} aria-label="Sections">
        <button className="sm-btn" type="button" aria-label="Open menu" aria-expanded={v.menu?.exp} onClick={v.menuOpen}>
          <svg className="sm-ic sm-ic-w" width="21" height="18" viewBox="0 0 21 18" aria-hidden="true">
            <path d="M1 1h19M1 9h19M1 17h19" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <img className="sm-ic sm-ic-g" src="./assets/mobile-menu.svg" alt="" aria-hidden="true" />
        </button>
        <div className="sm-panel" data-mobile-scroll="" onClick={v.menuStop}>
          <button className="sm-x" type="button" aria-label="Close menu" onClick={v.menuClose}>
            <svg className="sm-xw" width="18" height="15" viewBox="0 0 18 15" aria-hidden="true" style={{ overflow: "visible" }}>
              <path d="M1.5 0l15 15M16.5 0l-15 15" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg className="sm-xg" width="19" height="19" viewBox="0 0 19 19" fill="none" aria-hidden="true">
              <path d="M1.04199 18L17.6862 1.35579" stroke="#F34141" strokeWidth="2" strokeLinecap="round" />
              <path d="M1.04199 1L17.6862 17.6442" stroke="#F34141" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="sm-body">
            <ul className="sm-list">
              <li>
                <button className="nvi" type="button" onClick={v.nav_s3}>
                  At a glance
                </button>
              </li>
              <li>
                <button className="nvi" type="button" onClick={v.nav_s6}>
                  Bringing defence closer{" "}
                  <br />
                  to the community
                </button>
              </li>
              <li>
                <button className="nvi" type="button" onClick={v.nav_s7}>
                  Appreciating NSmen
                </button>
              </li>
              <li>
                <button className="nvi" type="button" onClick={v.nav_s8}>
                  Strengthening bonds
                </button>
              </li>
              <li>
                <button className="nvi nvi-w" type="button" onClick={v.nav_mb}>
                  Rewarding privileges
                </button>
              </li>
              <li>
                <button className="nvi nvi-w" type="button" onClick={v.nav_fc}>
                  Enhancing SAFRA{" "}
                  <br />
                  clubs + facilities
                </button>
              </li>
              <li>
                <button className="nvi" type="button" onClick={v.nav_wc}>
                  Looking forward
                </button>
              </li>
            </ul>
            <a className="sm-cta" href={import.meta.env.URL_PDF} target="_blank" rel="noopener noreferrer">
              <svg className="sm-dlg" width="22" height="20" viewBox="0 0 22 20" aria-hidden="true" style={{ flex: "none", overflow: "visible" }}>
                <defs>
                  <linearGradient id="smdl" x1="0" y1="0" x2="22" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#6252A4" />
                    <stop offset=".55" stopColor="#F14192" />
                    <stop offset="1" stopColor="#F6765D" />
                  </linearGradient>
                </defs>
                <path d="M11 1v11.5M6.5 8l4.5 4.5L15.5 8M1.5 14v4.5h19V14" fill="none" stroke="url(#smdl)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className="sm-dlw" width="25" height="23" viewBox="0 0 25 23" fill="none" aria-hidden="true" style={{ flex: "none" }}>
                <path d="M12.5 14.8333V1.5M16.9 10.3889L12.5 14.8333L8.1 10.3889M1.5 17.0556L2.1831 19.8167C2.30207 20.2974 2.57671 20.7242 2.96336 21.0292C3.35002 21.3342 3.82651 21.4999 4.3171 21.5H20.6818C21.1724 21.4999 21.6489 21.3342 22.0355 21.0292C22.4222 20.7242 22.6968 20.2974 22.8158 19.8167L23.5 17.0556" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sm-ctat" style={{ background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                {"DOWNLOAD "}
                <br />
                ANNUAL REPORT
              </span>
            </a>
          </div>
        </div>
      </nav>
      <div className="cur" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: u(120), height: "120px", transform: `translate(${s(v.cur?.x)}px, ${s(v.cur?.y)}px)`, opacity: `${s(v.cur?.o)}`, pointerEvents: "none", zIndex: "10" }}>
        <div className="cur-in" style={{ position: "relative", width: u(120), height: "120px", transform: `scale(${s(v.cur?.s)})` }}>
          <div style={{ position: "absolute", left: "0", top: "0", width: u(120), height: "120px", borderRadius: "50%", background: "#F34141" }} />
          <img className="arw" src="./assets/ecab593f3aa08a52a88a40fbfd710038.svg" alt="" style={{ position: "absolute", left: "0", top: "0", width: u(120), height: "120px" }} />
          <img className="ring" src="./assets/c5353b1ebbdc4fab6ae53df32b4380dd.svg" alt="" style={{ position: "absolute", left: "0", top: "0", width: u(120), height: "120px" }} />
        </div>
      </div>
    </div>
    </>
  );
}
