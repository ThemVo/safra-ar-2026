import { SECTION_IDS, screenId } from './routes.js';
// Markup for the artboard. Generated from the original prototype's template, then kept as plain JSX.
// `v` is the object returned by ArtboardLogic.renderVals(); every {{binding}} of the original reads from it.
import { Fragment } from 'react';
import { T, arr, css, s, bleedPath } from './bind.jsx';

// the tab-shaped band under sections 9 and 12; its outer corners sit at the window edges
// Shared gradient for the band → Membership → Clubs & Facilities stretch, in camera coordinates: it runs at 30°
// from the band's top-left corner (y 3402) and reaches full orange at the bottom-right of Clubs & Facilities.
const ZONE_GRAD = { x1: 0, y1: 3402, x2: 2269.8, y2: 4712.5 };

const TONGUE = 'M719.999 0C762.331 0 799.274 23.3611 818.941 58.046C835.286 86.8717 860.872 115.444 894.009 115.444H1332.24C1369.96 115.444 1388.82 115.444 1403.23 122.877C1415.9 129.415 1426.2 139.848 1432.66 152.679C1440 167.267 1440 178.167 1440 216.361H0C0 178.167 0.00020976 167.267 7.34089 152.679C13.7979 139.848 24.101 129.415 36.7735 122.877C51.1804 115.444 70.0402 115.444 107.76 115.444H545.989C579.126 115.444 604.712 86.8717 621.057 58.046C640.724 23.3611 677.667 0 719.999 0Z';

export default function render(v) {
  return (
    <>
    <div className={`mh ${s(v.lvClass)} ${s(v.dirClass)} ${s(v.freshClass)} ${s(v.stageClass)} ${s(v.s2Class)} ${s(v.s3Class)} ${s(v.viewClass)} ${s(v.go2Class)} ${s(v.go3Class)} ${s(v.s4Class)} ${s(v.go5Class)} ${s(v.postClass)} ${s(v.lgClass)} ${s(v.s6Class)} ${s(v.go6Class)} ${s(v.s7Class)} ${s(v.go7Class)} ${s(v.s8Class)} ${s(v.go8Class)} ${s(v.goMClass)} ${s(v.goFClass)} ${s(v.s9Class)} ${s(v.s10Class)} ${s(v.s11Class)} ${s(v.s12Class)} ${s(v.s13Class)} ${s(v.s14Class)} ${s(v.s15Class)} ${s(v.s16Class)} ${s(v.tgClass)} ${s(v.b3Class)} ${s(v.i4Class)} ${s(v.endClass)} ${s(v.hdClass)} ${s(v.fcFreeClass)}`} onMouseMove={v.move} onMouseLeave={v.leave} onWheel={v.wheel} onClick={v.tap} onTouchStart={v.touchStart} onTouchEnd={v.touchEnd} style={{ position: "relative", width: "1440px", height: "900px", "--b3x": `${s(v.bar3?.cx)}px`, "--b3w": `${s(v.bar3?.cw)}px`, clipPath: "inset(0 calc(-1 * var(--gx, 0px)))", background: "#272C3F", boxShadow: "0 0 0 var(--gx, 0px) #272C3F", fontFamily: "'Google Sans Flex', 'Google Sans', system-ui, sans-serif", fontWeight: "400", color: "#F3F4F7" }}>
      <div className="cam" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "5418px", transform: `translateY(${s(v.camY)}px)` }}>
        <section id={SECTION_IDS.top} className="layer1" aria-label="SAFRA masthead" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "900px", overflow: "visible", clipPath: "inset(calc(-1 * var(--gy, 0px)) 0)", transformOrigin: "50% 80%" }}>
          <div className="layer" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "900px", transformOrigin: "50% 46%" }}>
            <div className="px" style={{ position: "absolute", left: "885px", top: "calc(-1 * var(--gy, 0px))", width: "555px", height: "349px", borderRadius: "16px", overflow: "hidden", transform: `${s(v.pFamily)}` }}>
              <img className="ph ph1" src="./assets/mh-tr.jpg" alt="A father and child crawl under camouflage netting on an obstacle course" style={{ display: "block", width: "555px", height: "349px" }} />
            </div>
            <div className="px" style={{ position: "absolute", left: "104px", top: "141px", width: "339px", height: "214px", borderRadius: "16px", overflow: "hidden", transform: `${s(v.pConcert)}` }}>
              <img className="ph ph2" src="./assets/mh-tl.jpg" alt="A family in red poses with the SAFRA mascot at a National Day picnic" style={{ display: "block", width: "339px", height: "214px" }} />
            </div>
            <div className="px" style={{ position: "absolute", left: "0px", top: "calc(652px + var(--gy, 0px))", width: "394px", height: "248px", borderRadius: "16px", overflow: "hidden", transform: `${s(v.pKids)}` }}>
              <img className="ph ph3" src="./assets/mh-bl.jpg" alt="Members on exercise bikes in a spin class" style={{ display: "block", width: "394px", height: "248px" }} />
            </div>
            <div className="px" style={{ position: "absolute", left: "1196px", top: "calc(746px + var(--gy, 0px))", width: "244px", height: "154px", borderRadius: "16px", overflow: "hidden", transform: `${s(v.pTyres)}` }}>
              <img className="ph ph4" src="./assets/mh-br.jpg" alt="A group of members holding bowling balls at a bowling alley" style={{ display: "block", width: "244px", height: "154px" }} />
            </div>
          </div>
          <div className="dim" aria-hidden="true" style={{ position: "absolute", left: "0", top: "calc(-1 * var(--gy, 0px))", width: "1440px", height: "calc(900px + 2 * var(--gy, 0px))", background: "#272C3F", pointerEvents: "none" }} />
          <img onLoad={v.hook} src="./assets/ff8847615d28660626f1034069988996.png" alt="" style={{ display: "none" }} />
          <div id={SECTION_IDS.logo} className="logo" style={{ position: "absolute", left: "210px", top: "419px", width: "1021px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textAlign: "center", pointerEvents: "none" }}>
            <p className="lgl lg1" style={{ margin: "0", fontSize: "56px", fontWeight: "500", lineHeight: "70px", color: "#FFFFFF", whiteSpace: "nowrap" }}>
              <span style={{ color: "#F34141" }}>
                SAFRA
              </span>
              {" Annual Report FY 2025/2026"}
            </p>
            <p className="lgl lg2" style={{ margin: "0", padding: "0 .04em", fontSize: "56px", fontWeight: "600", lineHeight: "70px", whiteSpace: "nowrap", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              KEY HIGHLIGHTS
            </p>
          </div>
          <p className="agm" style={{ display: "none", position: "absolute", left: "40px", top: `${s(v.agmTop)}px`, width: "1400px", margin: "0", textAlign: "center", fontSize: "27.2px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", whiteSpace: "nowrap", color: "#6E778B", pointerEvents: "none" }}>
            53
            <sup style={{ fontSize: "0.6em", lineHeight: "0", verticalAlign: "0.45em", marginLeft: "1px" }}>
              rd
            </sup>
            {" SAFRA Annual General Meeting"}
          </p>
          <h1 aria-label="Explore our efforts in strengthening commitment to defence and supporting NSmen’s needs" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "900px", margin: "0", fontWeight: "400", lineHeight: "1", whiteSpace: "nowrap", pointerEvents: "none" }}>
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
        </section>
        <span className="bar" aria-hidden="true" style={{ position: "absolute", left: `${s(v.bar?.x)}px`, top: `${s(v.bar?.y)}px`, display: "block", width: `${s(v.bar?.w)}px`, height: `${s(v.bar?.h)}px`, background: "linear-gradient(180deg, #E84392 0%, #F5765E 40%, #F3597B 72%, #E8448F 100%)", clipPath: `${s(v.bar?.clip)}`, pointerEvents: "none" }} />
        <section className="s2" aria-labelledby="cd-title" style={{ "--cx": `${s(v.bloomX)}px`, position: "absolute", left: "0", top: "0", width: "1440px", height: "900px", overflow: "hidden", background: "linear-gradient(122deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%)", borderImage: "linear-gradient(122deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <h2 id="cd-title" style={{ position: "absolute", left: "104px", top: "160px", margin: "0", fontSize: "56px", fontWeight: "500", lineHeight: "1.12", letterSpacing: "-0.01em", color: "#FFFFFF" }}>
            <span className="k k1a" style={{ display: "block" }}>
              Countdown to
            </span>
            <span className="k k1b" style={{ display: "block" }}>
              the 53rd SAFRA AGM
            </span>
          </h2>
          <div role="timer" aria-live="off" aria-label={v.cd?.aria}>
            <div className="k k2" style={{ position: "absolute", left: "104px", top: "332px", width: "118px", height: "120px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "11px", background: "#EFEFEF" }}>
              <span className="gt" style={{ fontSize: "61px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", backgroundImage: "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", padding: "0 .04em .05em" }}>
                <T v={v.cd?.d} />
              </span>
              <span className="gt" style={{ marginTop: "3px", fontSize: "17px", fontWeight: "500", lineHeight: "1", letterSpacing: "0", backgroundImage: "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", paddingBottom: ".15em" }}>
                DAY
              </span>
            </div>
            <div className="k k3" style={{ position: "absolute", left: "229px", top: "332px", width: "118px", height: "120px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "11px", background: "#EFEFEF" }}>
              <span className="gt" style={{ fontSize: "61px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", backgroundImage: "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", padding: "0 .04em .05em" }}>
                <T v={v.cd?.h} />
              </span>
              <span className="gt" style={{ marginTop: "3px", fontSize: "17px", fontWeight: "500", lineHeight: "1", letterSpacing: "0", backgroundImage: "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", paddingBottom: ".15em" }}>
                HOUR
              </span>
            </div>
            <div className="k k4" style={{ position: "absolute", left: "354px", top: "332px", width: "118px", height: "120px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "11px", background: "#EFEFEF" }}>
              <span className="gt" style={{ fontSize: "61px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", backgroundImage: "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", padding: "0 .04em .05em" }}>
                <T v={v.cd?.m} />
              </span>
              <span className="gt" style={{ marginTop: "3px", fontSize: "17px", fontWeight: "500", lineHeight: "1", letterSpacing: "0", backgroundImage: "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", paddingBottom: ".15em" }}>
                MIN
              </span>
            </div>
            <div className="k k4s" style={{ position: "absolute", left: "479px", top: "332px", width: "118px", height: "120px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: "11px", background: "#EFEFEF" }}>
              <span className="gt" style={{ fontSize: "61px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", backgroundImage: "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", padding: "0 .04em .05em" }}>
                <T v={v.cd?.s} />
              </span>
              <span className="gt" style={{ marginTop: "3px", fontSize: "17px", fontWeight: "500", lineHeight: "1", letterSpacing: "0", backgroundImage: "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", paddingBottom: ".15em" }}>
                SEC
              </span>
            </div>
          </div>
          <div className="k k5" style={{ position: "absolute", left: "823px", top: "170px", display: "flex", alignItems: "flex-start" }}>
            <span style={{ flex: "none", width: "84px", marginTop: "15px", fontSize: "16px", fontWeight: "400", lineHeight: "1", letterSpacing: "0.02em", color: "#FFFFFF" }}>
              DATE
            </span>
            <span style={{ fontSize: "42px", fontWeight: "500", lineHeight: "1.1", letterSpacing: "-0.005em", color: "#FFFFFF" }}>
              <time datetime="2026-11-22">
                22 NOV 2026 (SUN)
              </time>
            </span>
          </div>
          <div className="k k6" style={{ position: "absolute", left: "823px", top: "283px", display: "flex", alignItems: "flex-start" }}>
            <span style={{ flex: "none", width: "77px", marginTop: "15px", fontSize: "16px", fontWeight: "400", lineHeight: "1", letterSpacing: "0.02em", color: "#FFFFFF" }}>
              TIME
            </span>
            <span>
              <span style={{ display: "block", fontSize: "42px", fontWeight: "500", lineHeight: "1.1", letterSpacing: "-0.005em", color: "#FFFFFF" }}>
                <time datetime="2026-11-22T14:30+08:00">
                  2:30PM
                </time>
              </span>
              <span style={{ display: "block", marginTop: "12px", fontSize: "17px", fontWeight: "400", lineHeight: "1.42", color: "#FFFFFF" }}>
                Kindly arrive earlier for attendance check-in onsite.
                <br />
                Counters open from 1pm
              </span>
            </span>
          </div>
          <div className="k k7" style={{ position: "absolute", left: "823px", top: "444px", display: "flex", alignItems: "flex-start" }}>
            <span style={{ flex: "none", width: "77px", marginTop: "15px", fontSize: "16px", fontWeight: "400", lineHeight: "1", letterSpacing: "0.02em", color: "#FFFFFF" }}>
              VENUE
            </span>
            <span style={{ fontSize: "42px", fontWeight: "500", lineHeight: "1.1", letterSpacing: "-0.005em", color: "#FFFFFF" }}>
              SAFRA MOUNT FABER
            </span>
          </div>
          <a className="k k8 more" href="#" onClick={v.noop} style={{ position: "absolute", left: "823px", top: "548px", width: "441px", height: "66px", boxSizing: "border-box", padding: "0 30px 0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "8px", background: "#FFFFFF", textDecoration: "none" }}>
            <span className="rt" style={{ fontSize: "28px", fontWeight: "600", letterSpacing: "-0.005em" }}>
              <span className="rt-a">
                MORE ABOUT AGM 2026
              </span>
              <span className="rt-v" aria-hidden="true">
                <span className="rt-w" style={{ "--ci": "0", "--ct": "19" }}>
                  <span className="rt-u">
                    M
                  </span>
                  <span className="rt-l">
                    M
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "1", "--ct": "19" }}>
                  <span className="rt-u">
                    O
                  </span>
                  <span className="rt-l">
                    O
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "2", "--ct": "19" }}>
                  <span className="rt-u">
                    R
                  </span>
                  <span className="rt-l">
                    R
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "3", "--ct": "19" }}>
                  <span className="rt-u">
                    E
                  </span>
                  <span className="rt-l">
                    E
                  </span>
                </span>
                <span className="rt-sp" />
                <span className="rt-w" style={{ "--ci": "5", "--ct": "19" }}>
                  <span className="rt-u">
                    A
                  </span>
                  <span className="rt-l">
                    A
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "6", "--ct": "19" }}>
                  <span className="rt-u">
                    B
                  </span>
                  <span className="rt-l">
                    B
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "7", "--ct": "19" }}>
                  <span className="rt-u">
                    O
                  </span>
                  <span className="rt-l">
                    O
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "8", "--ct": "19" }}>
                  <span className="rt-u">
                    U
                  </span>
                  <span className="rt-l">
                    U
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "9", "--ct": "19" }}>
                  <span className="rt-u">
                    T
                  </span>
                  <span className="rt-l">
                    T
                  </span>
                </span>
                <span className="rt-sp" />
                <span className="rt-w" style={{ "--ci": "11", "--ct": "19" }}>
                  <span className="rt-u">
                    A
                  </span>
                  <span className="rt-l">
                    A
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "12", "--ct": "19" }}>
                  <span className="rt-u">
                    G
                  </span>
                  <span className="rt-l">
                    G
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "13", "--ct": "19" }}>
                  <span className="rt-u">
                    M
                  </span>
                  <span className="rt-l">
                    M
                  </span>
                </span>
                <span className="rt-sp" />
                <span className="rt-w" style={{ "--ci": "15", "--ct": "19" }}>
                  <span className="rt-u">
                    2
                  </span>
                  <span className="rt-l">
                    2
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "16", "--ct": "19" }}>
                  <span className="rt-u">
                    0
                  </span>
                  <span className="rt-l">
                    0
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "17", "--ct": "19" }}>
                  <span className="rt-u">
                    2
                  </span>
                  <span className="rt-l">
                    2
                  </span>
                </span>
                <span className="rt-w" style={{ "--ci": "18", "--ct": "19" }}>
                  <span className="rt-u">
                    6
                  </span>
                  <span className="rt-l">
                    6
                  </span>
                </span>
              </span>
            </span>
            <svg className="ar" aria-hidden="true" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <defs>
                <linearGradient id="arG" x1="0" y1="26" x2="26" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#F04290" />
                  <stop offset="1" stopColor="#F68C45" />
                </linearGradient>
              </defs>
              <path d="M5 21 L20 6 M8 5 H21 V18" stroke="url(#arG)" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <svg className="k tg" aria-hidden="true" style={{ position: "absolute", left: "0", top: "697px", width: "1440px", height: "204px", display: "block" }} viewBox="0 0 1440 204" preserveAspectRatio="none">
            <path fill="#272C3F" d="M0 204 V200 C0 150 36 120 96 120 H540 C580 120 598 92 626 56 C652 22 684 4 720 4 C756 4 788 22 814 56 C842 92 860 120 900 120 H1344 C1404 120 1440 150 1440 200 V204 Z" />
          </svg>
          <button className="k k9 cue" type="button" aria-label="Scroll down to see Annual Report Highlights" onClick={v.next} style={{ position: "absolute", left: "640px", top: "732px", width: "160px", height: "160px", padding: "0", border: "0", borderRadius: "50%", background: "transparent", cursor: "pointer" }}>
            <svg width="160" height="160" viewBox="0 0 160 160" style={{ display: "block", overflow: "visible" }}>
              <defs>
                <linearGradient id="cueG" x1="10" y1="80" x2="150" y2="80" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#6452A4" />
                  <stop offset=".55" stopColor="#F04290" />
                  <stop offset="1" stopColor="#F68C45" />
                </linearGradient>
                <linearGradient id="dnG" x1="0" y1="52" x2="0" y2="106" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#8D4FA0" />
                  <stop offset=".55" stopColor="#F04290" />
                  <stop offset="1" stopColor="#F5765E" />
                </linearGradient>
                <path id="cueP" d="M80 80 m-64 0 a64 64 0 1 0 128 0 a64 64 0 1 0 -128 0" />
              </defs>
              <g className="rg">
                <g className="txt">
                  <text fontSize="16" fontFamily="'Google Sans Flex','Google Sans',system-ui,sans-serif" fill="url(#cueG)">
                    <textPath href="#cueP" startOffset="10" textLength="382" lengthAdjust="spacing">
                      {"Scroll down to see Annual Report Highlights  •"}
                    </textPath>
                  </text>
                </g>
              </g>
              <g className="dn">
                <path d="M80 56 V102" stroke="url(#dnG)" strokeWidth={v.lw} strokeLinecap="butt" fill="none" />
                <path className="wg" d="M62 86 L80 104 L98 86" stroke="url(#dnG)" strokeWidth={v.lw} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" fill="none" />
              </g>
            </svg>
          </button>
        </section>
        <section id={SECTION_IDS.s3} className="s3c" aria-labelledby="glance-title" style={{ position: "absolute", left: "0", top: "900px", width: "1440px", height: "918px" }}>
          <div id={screenId("s3", 0)} className={`sl ${s(v.sl0)}`} aria-label="Membership">
            <div className="sub" style={{ position: "absolute", left: "0", top: "206px", width: "1440px", textAlign: "center" }}>
              <h3 style={{ display: "inline-block", margin: "0", padding: "0 .04em .12em", fontSize: "40px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "-0.005em", background: "linear-gradient(90deg, #6C51A2 0%, #B0489E 30%, #E8448F 58%, #F3606F 80%, #F68A49 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Membership
              </h3>
            </div>
            <div className="cd" style={{ "--i": "0", position: "absolute", left: "64px", top: "290px", width: "316px", height: "222px", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "8px", borderRadius: "14px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                Members
              </p>
              <p aria-label="Over 417K" style={{ margin: "0", fontSize: "66px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <span style={{ marginRight: "14px", fontSize: "22px", letterSpacing: "0", verticalAlign: "0.3em" }}>
                  Over
                </span>
                <T v={v.v?.m1} />
              </p>
            </div>
            <div className="cd frame" style={{ "--i": "1", position: "absolute", left: "64px", top: "530px", width: "316px", height: "329px", borderRadius: "14px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-run.jpg" alt="A running group of members in SAFRA singlets posing outdoors at sunset" style={{ display: "block", width: "316px", height: "329px", objectFit: "cover" }} />
            </div>
            <div className="cd frame" style={{ "--i": "2", position: "absolute", left: "397px", top: "290px", width: "647px", height: "569px", borderRadius: "14px", overflow: "hidden" }}>
              <img className="pic" src="./assets/25ac34a7bb7e63a91ebb2d45156f874c.png" alt="Members and their children with a gingerbread mascot at a festive celebration" style={{ display: "block", width: "647px", height: "569px", objectFit: "cover" }} />
            </div>
            <div className="cd" style={{ "--i": "3", position: "absolute", left: "1061px", top: "290px", width: "315px", height: "569px", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "8px", borderRadius: "14px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                Satisfaction Rating
              </p>
              <p aria-label="86%" style={{ margin: "0", fontSize: "66px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <T v={v.v?.m2} />
              </p>
            </div>
          </div>
          <div id={screenId("s3", 1)} className={`sl ${s(v.sl1)}`} aria-label="Outreach and Engagement">
            <div className="sub" style={{ position: "absolute", left: "0", top: "206px", width: "1440px", textAlign: "center" }}>
              <h3 style={{ display: "inline-block", margin: "0", padding: "0 .04em .12em", fontSize: "40px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "-0.005em", background: "linear-gradient(90deg, #6C51A2 0%, #B0489E 30%, #E8448F 58%, #F3606F 80%, #F68A49 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                {"Outreach & Engagement"}
              </h3>
            </div>
            <div className="cd frame" style={{ "--i": "0", position: "absolute", left: "64px", top: "290px", width: "316px", height: "357px", borderRadius: "14px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-bikes.jpg" alt="Young children racing on balance bikes at a SAFRA event" style={{ display: "block", width: "316px", height: "357px", objectFit: "cover" }} />
            </div>
            <div className="cd" style={{ "--i": "1", position: "absolute", left: "64px", top: "664px", width: "316px", height: "195px", boxSizing: "border-box", padding: "24px 24px 30px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "8px", borderRadius: "14px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                Participation in SAFRA
                <br />
                Activities
              </p>
              <p aria-label="Over 1.72M" style={{ margin: "0", fontSize: "66px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <span style={{ marginRight: "14px", fontSize: "22px", letterSpacing: "0", verticalAlign: "0.3em" }}>
                  Over
                </span>
                <T v={v.v?.o1} />
              </p>
            </div>
            <div className="cd" style={{ "--i": "5", position: "absolute", left: "729px", top: "597px", width: "316px", height: "262px", boxSizing: "border-box", padding: "24px 24px 30px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "8px", borderRadius: "14px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                People Engaged Through
                <br />
                Appreciating NSmen
                <br />
                Initiatives
              </p>
              <p aria-label="Over 75K" style={{ margin: "0", fontSize: "66px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <span style={{ marginRight: "14px", fontSize: "22px", letterSpacing: "0", verticalAlign: "0.3em" }}>
                  Over
                </span>
                <T v={v.v?.o2} />
              </p>
            </div>
            <div className="cd frame" style={{ "--i": "4", position: "absolute", left: "729px", top: "290px", width: "316px", height: "290px", borderRadius: "14px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-card.jpg" alt="A child’s handmade thank-you card with a family photo for an NSman father" style={{ display: "block", width: "316px", height: "290px", objectFit: "cover" }} />
            </div>
            <div className="cd frame" style={{ "--i": "3", position: "absolute", left: "397px", top: "502px", width: "315px", height: "357px", borderRadius: "14px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-blaster.jpg" alt="Children in Army T-shirts trying out water blasters" style={{ display: "block", width: "315px", height: "357px", objectFit: "cover" }} />
            </div>
            <div className="cd" style={{ "--i": "2", position: "absolute", left: "397px", top: "290px", width: "315px", height: "195px", boxSizing: "border-box", padding: "24px 24px 30px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "8px", borderRadius: "14px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                Participation in Defence
                <br />
                Outreach Initiatives
              </p>
              <p aria-label="Over 211K" style={{ margin: "0", fontSize: "66px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <span style={{ marginRight: "14px", fontSize: "22px", letterSpacing: "0", verticalAlign: "0.3em" }}>
                  Over
                </span>
                <T v={v.v?.o3} />
              </p>
            </div>
            <div className="cd" style={{ "--i": "6", position: "absolute", left: "1061px", top: "290px", width: "316px", height: "262px", boxSizing: "border-box", padding: "24px 24px 30px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "8px", borderRadius: "14px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                Participation in Cohesion
                <br />
                Activities for NS Units
              </p>
              <p aria-label="Over 52K" style={{ margin: "0", fontSize: "66px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <span style={{ marginRight: "14px", fontSize: "22px", letterSpacing: "0", verticalAlign: "0.3em" }}>
                  Over
                </span>
                <T v={v.v?.o4} />
              </p>
            </div>
            <div className="cd frame" style={{ "--i": "7", position: "absolute", left: "1061px", top: "569px", width: "316px", height: "290px", borderRadius: "14px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-group.jpg" alt="A group of NSmen in singlets cheering with snack packs" style={{ display: "block", width: "316px", height: "290px", objectFit: "cover" }} />
            </div>
          </div>
          <div id={screenId("s3", 2)} className={`sl ${s(v.sl2)}`} aria-label="Sustainability">
            <div className="sub" style={{ position: "absolute", left: "0", top: "202px", width: "1440px", textAlign: "center" }}>
              <h3 style={{ display: "inline-block", margin: "0", padding: "0 .04em .12em", fontSize: "40px", fontWeight: "500", lineHeight: "1.4", letterSpacing: "0", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Sustainability
              </h3>
            </div>
            <div className="cd frame" style={{ "--i": "0", position: "absolute", left: "64px", top: "282px", width: "468px", height: "280px", borderRadius: "16px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-solar-fy26.jpg" alt="Rooftop solar panels under a blue sky" style={{ display: "block", width: "468px", height: "280px", objectFit: "cover" }} />
            </div>
            <div className="cd" style={{ "--i": "1", position: "absolute", left: "548px", top: "282px", width: "406.5px", height: "280px", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: "16px", background: "#18212A", overflow: "hidden" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                  Solar Energy Generated
                </p>
                <p aria-label="1,074 MWh" style={{ margin: "0", fontSize: "52px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                  <T v={v.v?.s1} />
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "16px", fontWeight: "400", lineHeight: "1.25", color: "#DDDDDD" }}>
                  Equivalent to the electricity usage of over 320
                  <br />
                  4-room HDB flats for a year
                </p>
              </div>
            </div>
            <div className="cd" style={{ "--i": "2", position: "absolute", left: "970.5px", top: "282px", width: "406.5px", height: "280px", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: "16px", background: "#18212A", overflow: "hidden" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                  Reduction in Carbon Dioxide (CO
                  <sub style={{ fontSize: ".65em", verticalAlign: "-0.25em", lineHeight: "0" }}>
                    2
                  </sub>
                  )
                  <br />
                  Emissions
                </p>
                <p aria-label="432 Tonnes" style={{ margin: "0", fontSize: "52px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                  <T v={v.v?.s2} />
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "16px", fontWeight: "400", lineHeight: "1.25", color: "#DDDDDD" }}>
                  Equivalent to the annual CO
                  <sub style={{ fontSize: ".7em", verticalAlign: "-0.25em", lineHeight: "0" }}>
                    2
                  </sub>
                  {" absorption of"}
                  <br />
                  19,800 mature trees
                </p>
              </div>
            </div>
            <div className="cd" style={{ "--i": "3", position: "absolute", left: "64px", top: "578px", width: "468px", height: "274px", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: "16px", background: "#18212A", overflow: "hidden" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                  Number of Solar Panels Across
                  <br />
                  SAFRA Clubs Inclusive of 870 New Panels
                  <br />
                  Installed at SAFRA Yishun
                </p>
                <p aria-label="6,850" style={{ margin: "0", fontSize: "52px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                  <T v={v.v?.s3} />
                </p>
              </div>
            </div>
            <div className="cd frame" style={{ "--i": "4", position: "absolute", left: "548px", top: "578px", width: "828px", height: "274px", borderRadius: "16px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-trees-fy26.jpg" alt="Looking up into the green canopy of a large tree" style={{ display: "block", marginLeft: "2px", width: "826px", height: "274px", objectFit: "cover" }} />
            </div>
          </div>
          <div className="sweep" aria-hidden="true" style={{ position: "absolute", left: "calc(-1 * var(--gx, 0px))", top: "calc(910px + var(--gy, 0px))", width: "calc(1440px + 2 * var(--gx, 0px))", height: "8px", transform: `scaleX(${s(v.sweepS)})`, background: "linear-gradient(90deg, #74509F 0%, #F46074 55%, #F68F43 100%)" }} />
        </section>
        <section id={SECTION_IDS.s5} className="s45" aria-labelledby="t1-title" style={{ position: "absolute", left: "0", top: "1818px", width: "1440px", height: "900px", overflow: "hidden" }}>
          <div className="tx" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "280px" }}>
            <h2 id="t1-title" aria-label="Discover how our initiatives made a difference in the lives of national servicemen and their families." style={{ position: "absolute", left: "0", top: "82px", width: "1440px", margin: "0", textAlign: "center", fontWeight: "500", lineHeight: "1.1" }}>
              <span className="t4a" aria-hidden="true" style={{ display: "block", fontSize: "44.2px", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
                {arr(v.L_s4a).map((c, $index) => (
                  <Fragment key={$index}>
                    <span className="lt gl" style={{ transform: `${s(c?.tf)}`, backgroundImage: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 100%)", backgroundSize: `${s(c?.bw)}px 100%`, backgroundPosition: `${s(c?.bx)}px 0` }}>
                      <T v={c?.ch} />
                    </span>
                  </Fragment>
                ))}
              </span>
              <span className="t4b" aria-hidden="true" style={{ display: "block", fontSize: "44.2px", letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
                <span style={{ display: "block" }}>
                  {arr(v.L_s4b).map((c, $index) => (
                    <Fragment key={$index}>
                      <span className="lt gl" style={{ transform: `${s(c?.tf)}`, backgroundImage: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 100%)", backgroundSize: `${s(c?.bw)}px 100%`, backgroundPosition: `${s(c?.bx)}px 0` }}>
                        <T v={c?.ch} />
                      </span>
                    </Fragment>
                  ))}
                </span>
                <span style={{ display: "block" }}>
                  {arr(v.L_s4c).map((c, $index) => (
                    <Fragment key={$index}>
                      <span className="lt gl" style={{ transform: `${s(c?.tf)}`, backgroundImage: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 100%)", backgroundSize: `${s(c?.bw)}px 100%`, backgroundPosition: `${s(c?.bx)}px 0` }}>
                        <T v={c?.ch} />
                      </span>
                    </Fragment>
                  ))}
                </span>
              </span>
            </h2>
          </div>
          <nav aria-label="Topics">
            <div className="tcw" style={{ position: "absolute", left: "299.42px", top: "289.6px", width: "1237px", height: "800px", transform: "scale(0.68)", transformOrigin: "0 0" }}>
              <a className={`tc ${s(v.lv1)}`} href={`#${SECTION_IDS.s6}`} onClick={v.topic1} aria-label="Bringing defence closer to the community" style={{ "--i": "0", position: "absolute", left: "0px", top: "0px", width: "396.33px", height: "384px", boxSizing: "border-box", padding: "36px", borderRadius: "24px", textDecoration: "none" }}>
                <svg className="tc-s" aria-hidden="true" width="396.33" height="384" viewBox="0 0 396.33 384" style={{ position: "absolute", left: "0", top: "0", overflow: "visible", pointerEvents: "none" }}>
                  <defs>
                    <linearGradient id="tcs0" x1="0" y1="0" x2="396.33" y2="384" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#6452A4" />
                      <stop offset=".45" stopColor="#F04290" />
                      <stop offset="1" stopColor="#F68C45" />
                    </linearGradient>
                  </defs>
                  <rect className="tc-r tc-tail" x="2" y="2" width="392.33" height="380" rx="22" pathLength="100" fill="none" stroke="url(#tcs0)" strokeWidth="4" strokeDasharray="46 54" strokeLinecap="round" opacity=".28" />
                  <rect className="tc-r tc-head" x="2" y="2" width="392.33" height="380" rx="22" pathLength="100" fill="none" stroke="url(#tcs0)" strokeWidth="4" strokeDasharray="24 76" strokeLinecap="round" />
                </svg>
                <span className="tc-t" style={{ position: "relative", display: "block", marginTop: "68px", fontSize: "32px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "0.02em", textTransform: "uppercase", color: "#AAAAAA" }}>
                  {"Bringing Defence Closer to The Community"}
                  <span className="tc-g" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", paddingBottom: ".1em", background: "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    {"Bringing Defence Closer to The Community"}
                  </span>
                </span>
                <span className="tc-stk tc-one" aria-hidden="true">
                  <img className="tc-ph" alt="" src="./assets/tc1-hover.jpg" style={{ position: "absolute", left: "0px", top: "-6.77px", width: "433.836px", height: "245.995px", maxWidth: "none", objectFit: "cover" }} />
                </span>
                <span className="tc-b" style={{ position: "absolute", left: "36px", top: "33px", right: "36px", fontSize: "21px", fontWeight: "400", lineHeight: "40px", letterSpacing: "0", color: "#A7A9AE" }}>
                  {"Families gained a deeper understanding of the importance of National Service and their role in Total Defence."}
                </span>
                <svg className="tc-i" aria-hidden="true" width="42" height="44" viewBox="0 0 42 44" fill="none" style={{ position: "absolute", left: "36px", top: "36px", overflow: "visible" }}>
                  <g className="ig"><path d="M21 43.9995C20.1846 44.0117 19.3801 43.8193 18.6667 43.4416L17.9667 43.0622C12.5144 40.1122 7.97839 35.8312 4.82192 30.6563C1.66544 25.4814 0.00156343 19.5982 0.00018702 13.6072V13.2948C-0.00720944 12.5046 0.204908 11.7267 0.61486 11.0407C1.02481 10.3546 1.6179 9.78487 2.3335 9.38979L18.6667 0.597913C19.3761 0.206213 20.1808 0 21 0C21.8192 0 22.6239 0.206213 23.3333 0.597913L39.6665 9.38979C40.3821 9.78487 40.9752 10.3546 41.3851 11.0407C41.7951 11.7267 42.0072 12.5046 41.9998 13.2948V13.6072C41.9938 19.6026 40.3228 25.4889 37.1579 30.6641C33.993 35.8394 29.4476 40.1179 23.9866 43.0622L23.2866 43.4416C22.587 43.8118 21.7996 44.0039 21 43.9995Z" fill="#AAAAAA" /><path d="M21 35.9997C20.4952 36.0074 19.9972 35.885 19.5556 35.6446L19.1222 35.4032C15.747 33.5259 12.939 30.8016 10.985 27.5086C9.03099 24.2155 8.00097 20.4716 8.00012 16.6591V16.4603C7.99554 15.9575 8.12685 15.4625 8.38063 15.0259C8.63441 14.5893 9.00156 14.2267 9.44455 13.9753L19.5556 8.38049C19.9947 8.13123 20.4929 8 21 8C21.5071 8 22.0053 8.13123 22.4444 8.38049L32.5555 13.9753C32.9984 14.2267 33.3656 14.5893 33.6194 15.0259C33.8732 15.4625 34.0045 15.9575 33.9999 16.4603V16.6591C33.9961 20.4744 32.9618 24.2202 31.0025 27.5135C29.0433 30.8069 26.2295 33.5296 22.8489 35.4032L22.4155 35.6446C21.9824 35.8803 21.495 36.0025 21 35.9997Z" stroke="#272C3F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></g>
                </svg>
                <svg className="tc-i tc-a" aria-hidden="true" width="38" height="32" viewBox="0 0 38 32" fill="none" style={{ position: "absolute", right: "36px", bottom: "36px", overflow: "visible" }}>
                  <path d="M1.5 16H36M21 1.5 35.5 16 21 30.5" stroke="#AAAAAA" strokeWidth="3" />
                </svg>
              </a>
              <a className={`tc ${s(v.lv2)}`} href={`#${SECTION_IDS.s7}`} onClick={v.topic2} aria-label="Appreciating national servicemen" style={{ "--i": "1", position: "absolute", left: "420.33px", top: "0px", width: "396.33px", height: "384px", boxSizing: "border-box", padding: "36px", borderRadius: "24px", textDecoration: "none" }}>
                <svg className="tc-s" aria-hidden="true" width="396.33" height="384" viewBox="0 0 396.33 384" style={{ position: "absolute", left: "0", top: "0", overflow: "visible", pointerEvents: "none" }}>
                  <defs>
                    <linearGradient id="tcs1" x1="0" y1="0" x2="396.33" y2="384" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#6452A4" />
                      <stop offset=".45" stopColor="#F04290" />
                      <stop offset="1" stopColor="#F68C45" />
                    </linearGradient>
                  </defs>
                  <rect className="tc-r tc-tail" x="2" y="2" width="392.33" height="380" rx="22" pathLength="100" fill="none" stroke="url(#tcs1)" strokeWidth="4" strokeDasharray="46 54" strokeLinecap="round" opacity=".28" />
                  <rect className="tc-r tc-head" x="2" y="2" width="392.33" height="380" rx="22" pathLength="100" fill="none" stroke="url(#tcs1)" strokeWidth="4" strokeDasharray="24 76" strokeLinecap="round" />
                </svg>
                <span className="tc-t" style={{ position: "relative", display: "block", marginTop: "72px", fontSize: "32px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "0.02em", textTransform: "uppercase", color: "#AAAAAA" }}>
                  {"Appreciating NSmen"}
                  <span className="tc-g" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", paddingBottom: ".1em", background: "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    {"Appreciating NSmen"}
                  </span>
                </span>
                <span className="tc-stk tc-one" aria-hidden="true">
                  <img className="tc-ph" alt="" src="./assets/tc2-hover.jpg" style={{ position: "absolute", left: "-2.63px", top: "-29.5px", width: "392.995px", height: "262.028px", maxWidth: "none", objectFit: "cover" }} />
                </span>
                <span className="tc-b" style={{ position: "absolute", left: "36px", top: "33px", right: "36px", fontSize: "21px", fontWeight: "400", lineHeight: "40px", letterSpacing: "0", color: "#A7A9AE" }}>
                  {"Preschools, educational institutions and businesses showed appreciation to national servicemen in meaningful ways."}
                </span>
                <svg className="tc-i" aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ position: "absolute", left: "36px", top: "36px", overflow: "visible" }}>
                  <g className="ig"><path fillRule="evenodd" clipRule="evenodd" d="M48 24C48 37.2547 37.2547 48 24 48C20.1607 48 16.5321 47.0986 13.3141 45.4956C12.4589 45.0698 11.4814 44.928 10.5585 45.175L5.21604 46.6044C2.89682 47.2248 0.77508 45.1032 1.39562 42.7841L2.82509 37.4414C3.07202 36.5186 2.93026 35.5411 2.5043 34.686C0.901488 31.4678 0 27.8393 0 24C0 10.7452 10.7452 0 24 0C37.2547 0 48 10.7452 48 24ZM13.2 21.8602C13.2 25.1443 16.3652 28.5902 19.2686 31.0601C21.2458 32.7422 22.2346 33.5834 24 33.5834C25.7654 33.5834 26.7542 32.7422 28.7314 31.0601C31.6349 28.5902 34.8 25.1443 34.8 21.8602C34.8 15.435 28.8598 13.0361 24 17.9995C19.1402 13.0361 13.2 15.435 13.2 21.8602Z" fill="#AAAAAA" /></g>
                </svg>
                <svg className="tc-i tc-a" aria-hidden="true" width="38" height="32" viewBox="0 0 38 32" fill="none" style={{ position: "absolute", right: "36px", bottom: "36px", overflow: "visible" }}>
                  <path d="M1.5 16H36M21 1.5 35.5 16 21 30.5" stroke="#AAAAAA" strokeWidth="3" />
                </svg>
              </a>
              <a className={`tc ${s(v.lv3)}`} href={`#${SECTION_IDS.s8}`} onClick={v.topic3} aria-label="Strengthening bonds" style={{ "--i": "2", position: "absolute", left: "840.67px", top: "0px", width: "396.33px", height: "384px", boxSizing: "border-box", padding: "36px", borderRadius: "24px", textDecoration: "none" }}>
                <svg className="tc-s" aria-hidden="true" width="396.33" height="384" viewBox="0 0 396.33 384" style={{ position: "absolute", left: "0", top: "0", overflow: "visible", pointerEvents: "none" }}>
                  <defs>
                    <linearGradient id="tcs2" x1="0" y1="0" x2="396.33" y2="384" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#6452A4" />
                      <stop offset=".45" stopColor="#F04290" />
                      <stop offset="1" stopColor="#F68C45" />
                    </linearGradient>
                  </defs>
                  <rect className="tc-r tc-tail" x="2" y="2" width="392.33" height="380" rx="22" pathLength="100" fill="none" stroke="url(#tcs2)" strokeWidth="4" strokeDasharray="46 54" strokeLinecap="round" opacity=".28" />
                  <rect className="tc-r tc-head" x="2" y="2" width="392.33" height="380" rx="22" pathLength="100" fill="none" stroke="url(#tcs2)" strokeWidth="4" strokeDasharray="24 76" strokeLinecap="round" />
                </svg>
                <span className="tc-t" style={{ position: "relative", display: "block", marginTop: "66.67px", fontSize: "32px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "0.02em", textTransform: "uppercase", color: "#AAAAAA" }}>
                  {"Strengthening bonds"}
                  <span className="tc-g" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", paddingBottom: ".1em", background: "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    {"Strengthening bonds"}
                  </span>
                </span>
                <span className="tc-stk tc-one" aria-hidden="true">
                  <img className="tc-ph" alt="" src="./assets/tc3-hover.jpg" style={{ position: "absolute", left: "-5.75px", top: "-93.05px", width: "404.2px", height: "303.15px", maxWidth: "none", objectFit: "cover" }} />
                </span>
                <span className="tc-b" style={{ position: "absolute", left: "36px", top: "33px", right: "36px", fontSize: "21px", fontWeight: "400", lineHeight: "40px", letterSpacing: "0", color: "#A7A9AE" }}>
                  {"National servicemen had more opportunities to spend quality time with their buddies and loved ones."}
                </span>
                <svg className="tc-i" aria-hidden="true" width="53.31" height="42.67" viewBox="0 0 53.31 42.67" fill="none" style={{ position: "absolute", left: "36px", top: "36px", overflow: "visible" }}>
                  <g className="ig"><path d="M26.6933 0C25.2788 0 23.9223 0.561903 22.9221 1.5621C21.9219 2.56229 21.36 3.91885 21.36 5.33333C21.36 6.74782 21.9219 8.10437 22.9221 9.10457C23.9223 10.1048 25.2788 10.6667 26.6933 10.6667C28.1078 10.6667 29.4644 10.1048 30.4646 9.10457C31.4648 8.10437 32.0267 6.74782 32.0267 5.33333C32.0267 3.91885 31.4648 2.56229 30.4646 1.5621C29.4644 0.561903 28.1078 0 26.6933 0ZM8.02667 8C6.61218 8 5.25562 8.5619 4.25543 9.5621C3.25524 10.5623 2.69333 11.9188 2.69333 13.3333C2.69333 14.7478 3.25524 16.1044 4.25543 17.1046C5.25562 18.1048 6.61218 18.6667 8.02667 18.6667C9.44115 18.6667 10.7977 18.1048 11.7979 17.1046C12.7981 16.1044 13.36 14.7478 13.36 13.3333C13.36 11.9188 12.7981 10.5623 11.7979 9.5621C10.7977 8.5619 9.44115 8 8.02667 8ZM45.36 8C43.9455 8 42.589 8.5619 41.5888 9.5621C40.5886 10.5623 40.0267 11.9188 40.0267 13.3333C40.0267 14.7478 40.5886 16.1044 41.5888 17.1046C42.589 18.1048 43.9455 18.6667 45.36 18.6667C46.7745 18.6667 48.131 18.1048 49.1312 17.1046C50.1314 16.1044 50.6933 14.7478 50.6933 13.3333C50.6933 11.9188 50.1314 10.5623 49.1312 9.5621C48.131 8.5619 46.7745 8 45.36 8ZM46.6933 21.3333H44.8267C42.5867 21.3333 40.5333 22.4533 39.28 24.2933L30.5867 37.3333H22.7733L14.08 24.2933C12.8533 22.4267 10.7733 21.3333 8.53333 21.3333H6.66667C4.89856 21.3333 3.20286 22.0357 1.95262 23.286C0.702379 24.5362 0 26.2319 0 28L0 42.6667H13.3333V32.8L18.32 40.2933C19.3067 41.7867 20.96 42.6667 22.7467 42.6667H30.56C32.3467 42.6667 34 41.7867 34.9867 40.2933L39.9733 32.8V42.6667H53.3067V28C53.3067 26.2319 52.6043 24.5362 51.354 23.286C50.1038 22.0357 48.4081 21.3333 46.64 21.3333H46.6933Z" fill="#AAAAAA" /><path d="M27.7334 31.9999L34.6934 21.5733V17.3333C34.6934 15.1199 32.9067 13.3333 30.6934 13.3333H22.6934C20.48 13.3333 18.6934 15.1199 18.6934 17.3333V21.5733L25.6534 31.9999H27.76H27.7334Z" fill="#AAAAAA" /></g>
                </svg>
                <svg className="tc-i tc-a" aria-hidden="true" width="38" height="32" viewBox="0 0 38 32" fill="none" style={{ position: "absolute", right: "36px", bottom: "36px", overflow: "visible" }}>
                  <path d="M1.5 16H36M21 1.5 35.5 16 21 30.5" stroke="#AAAAAA" strokeWidth="3" />
                </svg>
              </a>
              <a className={`tc ${s(v.lv4)}`} href={`#${SECTION_IDS.mb}`} onClick={v.topic4} aria-label="Rewarding privileges" style={{ "--i": "3", position: "absolute", left: "210.17px", top: "416px", width: "396.33px", height: "384px", boxSizing: "border-box", padding: "36px", borderRadius: "24px", textDecoration: "none" }}>
                <svg className="tc-s" aria-hidden="true" width="396.33" height="384" viewBox="0 0 396.33 384" style={{ position: "absolute", left: "0", top: "0", overflow: "visible", pointerEvents: "none" }}>
                  <defs>
                    <linearGradient id="tcs3" x1="0" y1="0" x2="396.33" y2="384" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#6452A4" />
                      <stop offset=".45" stopColor="#F04290" />
                      <stop offset="1" stopColor="#F68C45" />
                    </linearGradient>
                  </defs>
                  <rect className="tc-r tc-tail" x="2" y="2" width="392.33" height="380" rx="22" pathLength="100" fill="none" stroke="url(#tcs3)" strokeWidth="4" strokeDasharray="46 54" strokeLinecap="round" opacity=".28" />
                  <rect className="tc-r tc-head" x="2" y="2" width="392.33" height="380" rx="22" pathLength="100" fill="none" stroke="url(#tcs3)" strokeWidth="4" strokeDasharray="24 76" strokeLinecap="round" />
                </svg>
                <span className="tc-t" style={{ position: "relative", display: "block", marginTop: "72px", fontSize: "32px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "0.02em", textTransform: "uppercase", color: "#AAAAAA" }}>
                  {"rewarding privileges"}
                  <span className="tc-g" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", paddingBottom: ".1em", background: "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    {"rewarding privileges"}
                  </span>
                </span>
                <span className="tc-stk tc-one" aria-hidden="true">
                  <img className="tc-ph" alt="" src="./assets/tc4-hover.jpg" style={{ position: "absolute", left: "-0.54px", top: "-31.03px", width: "388.542px", height: "259.154px", maxWidth: "none", objectFit: "cover" }} />
                </span>
                <span className="tc-b" style={{ position: "absolute", left: "36px", top: "33px", right: "36px", fontSize: "21px", fontWeight: "400", lineHeight: "40px", letterSpacing: "0", color: "#A7A9AE" }}>
                  {"Members enjoyed exclusive benefits and greater cost savings on a wide range of offerings."}
                </span>
                <svg className="tc-i" aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ position: "absolute", left: "36px", top: "36px", overflow: "visible" }}>
                  <g className="ig"><path d="M42.4 12.5H39.617C39.916 11.557 40.1 10.43 40.1 9.05C40.1 4.611 36.489 1 32.05 1C28.324 1 25.84 4.404 24.23 8.107C22.643 4.634 20.021 1 15.95 1C11.511 1 7.9 4.611 7.9 9.05C7.9 10.43 8.084 11.557 8.383 12.5H5.6C3.07 12.5 1 14.57 1 17.1C1 19.63 3.07 21.7 5.6 21.7H42.4C44.93 21.7 47 19.63 47 17.1C47 14.57 44.93 12.5 42.4 12.5ZM32.05 5.6C33.959 5.6 35.5 7.141 35.5 9.05C35.5 12.5 34.051 12.5 33.2 12.5H27.496C28.669 8.866 30.371 5.6 32.05 5.6ZM12.5 9.05C12.5 7.141 14.041 5.6 15.95 5.6C17.997 5.6 19.883 9.119 21.01 12.5H14.8C13.949 12.5 12.5 12.5 12.5 9.05ZM7.9 26.3H5.6V42.4C5.6 44.93 7.67 47 10.2 47H21.7V26.3H7.9ZM37.8 26.3H26.3V47H37.8C40.33 47 42.4 44.93 42.4 42.4V26.3H37.8Z" fill="#AAAAAA" /></g>
                </svg>
                <svg className="tc-i tc-a" aria-hidden="true" width="38" height="32" viewBox="0 0 38 32" fill="none" style={{ position: "absolute", right: "36px", bottom: "36px", overflow: "visible" }}>
                  <path d="M1.5 16H36M21 1.5 35.5 16 21 30.5" stroke="#AAAAAA" strokeWidth="3" />
                </svg>
              </a>
              <a className={`tc ${s(v.lv5)}`} href={`#${SECTION_IDS.fc1}`} onClick={v.topic5} aria-label="Enhancing SAFRA Clubs & Facilities" style={{ "--i": "4", position: "absolute", left: "630.5px", top: "416px", width: "396.33px", height: "384px", boxSizing: "border-box", padding: "36px", borderRadius: "24px", textDecoration: "none" }}>
                <svg className="tc-s" aria-hidden="true" width="396.33" height="384" viewBox="0 0 396.33 384" style={{ position: "absolute", left: "0", top: "0", overflow: "visible", pointerEvents: "none" }}>
                  <defs>
                    <linearGradient id="tcs4" x1="0" y1="0" x2="396.33" y2="384" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#6452A4" />
                      <stop offset=".45" stopColor="#F04290" />
                      <stop offset="1" stopColor="#F68C45" />
                    </linearGradient>
                  </defs>
                  <rect className="tc-r tc-tail" x="2" y="2" width="392.33" height="380" rx="22" pathLength="100" fill="none" stroke="url(#tcs4)" strokeWidth="4" strokeDasharray="46 54" strokeLinecap="round" opacity=".28" />
                  <rect className="tc-r tc-head" x="2" y="2" width="392.33" height="380" rx="22" pathLength="100" fill="none" stroke="url(#tcs4)" strokeWidth="4" strokeDasharray="24 76" strokeLinecap="round" />
                </svg>
                <span className="tc-t" style={{ position: "relative", display: "block", marginTop: "72px", fontSize: "32px", fontWeight: "700", lineHeight: "1.2", letterSpacing: "0.02em", textTransform: "uppercase", color: "#AAAAAA" }}>
                  Enhancing
                  <br />
                  {"SAFRA Clubs & Facilities"}
                  <span className="tc-g" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", right: "0", paddingBottom: ".1em", background: "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    Enhancing
                    <br />
                    {"SAFRA Clubs & Facilities"}
                  </span>
                </span>
                <span className="tc-stk tc-one" aria-hidden="true">
                  <img className="tc-ph" alt="" src="./assets/tc5-hover.jpg" style={{ position: "absolute", left: "0px", top: "-12.21px", width: "388px", height: "258.698px", maxWidth: "none", objectFit: "cover" }} />
                </span>
                <span className="tc-b" style={{ position: "absolute", left: "36px", top: "33px", right: "36px", fontSize: "21px", fontWeight: "400", lineHeight: "40px", letterSpacing: "0", color: "#A7A9AE" }}>
                  {"National servicemen and their families benefitted from new and improved facilities to keep fit, connect and unwind."}
                </span>
                <svg className="tc-i" aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ position: "absolute", left: "36px", top: "36px", overflow: "visible" }}>
                  <g className="ig"><path d="M38.0121 7.41008C38.386 7.27429 38.6907 6.99551 38.8591 6.63506C39.0275 6.27462 39.0459 5.86204 38.9101 5.48808C38.7743 5.11413 38.4955 4.80943 38.1351 4.64102C37.7746 4.47261 37.362 4.45429 36.9881 4.59008L12.0001 13.6761V6.00008C12.0001 5.60226 11.842 5.22073 11.5607 4.93942C11.2794 4.65812 10.8979 4.50008 10.5001 4.50008H7.50008C7.10226 4.50008 6.72073 4.65812 6.43942 4.93942C6.15812 5.22073 6.00008 5.60226 6.00008 6.00008V15.8601L3.98808 16.5901C3.61413 16.7259 3.30943 17.0047 3.14102 17.3651C2.97261 17.7255 2.95429 18.1381 3.09008 18.5121C3.22587 18.886 3.50466 19.1907 3.8651 19.3591C4.22555 19.5275 4.63813 19.5459 5.01208 19.4101L38.0121 7.41008Z" fill="#AAAAAA" /><path fillRule="evenodd" clipRule="evenodd" d="M6.038 22.228L36 11.334V18.176L44.012 21.09C44.386 21.2258 44.6907 21.5046 44.8591 21.865C45.0275 22.2254 45.0458 22.638 44.91 23.012C44.7742 23.3859 44.4954 23.6906 44.135 23.859C43.7745 24.0275 43.362 24.0458 42.988 23.91L42 23.55V40.5H43.5C43.8978 40.5 44.2794 40.658 44.5607 40.9393C44.842 41.2206 45 41.6022 45 42C45 42.3978 44.842 42.7793 44.5607 43.0606C44.2794 43.3419 43.8978 43.5 43.5 43.5H4.5C4.10218 43.5 3.72064 43.3419 3.43934 43.0606C3.15804 42.7793 3 42.3978 3 42C3 41.6022 3.15804 41.2206 3.43934 40.9393C3.72064 40.658 4.10218 40.5 4.5 40.5H6V22.242L6.038 22.228ZM36 40.5V21.368L39 22.46V40.5H36ZM18 28.5C17.6022 28.5 17.2206 28.658 16.9393 28.9393C16.658 29.2206 16.5 29.6022 16.5 30V39C16.5 39.828 17.172 40.5 18 40.5H24C24.3978 40.5 24.7794 40.342 25.0607 40.0606C25.342 39.7793 25.5 39.3978 25.5 39V30C25.5 29.6022 25.342 29.2206 25.0607 28.9393C24.7794 28.658 24.3978 28.5 24 28.5H18Z" fill="#AAAAAA" /></g>
                </svg>
                <svg className="tc-i tc-a" aria-hidden="true" width="38" height="32" viewBox="0 0 38 32" fill="none" style={{ position: "absolute", right: "36px", bottom: "36px", overflow: "visible" }}>
                  <path d="M1.5 16H36M21 1.5 35.5 16 21 30.5" stroke="#AAAAAA" strokeWidth="3" />
                </svg>
              </a>
            </div>
          </nav>
        </section>
        <section id={SECTION_IDS.s6} className="s6" aria-labelledby="dc-title" style={{ position: "absolute", left: "0", top: "1818px", width: "1440px", height: "900px", overflow: "hidden", background: "#272C3F", borderImage: "linear-gradient(#272C3F, #272C3F) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <div className="z6" style={{ position: "absolute", inset: "0" }}>
            <div className="dcb" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "900px" }}>
              <h2 id="dc-title" aria-label="Bringing defence closer to the community" style={{ position: "absolute", left: "160px", top: "32px", margin: "0", fontSize: "40px", fontWeight: "600", lineHeight: "48px", letterSpacing: "0.8px" }}>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.0s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", backgroundSize: `${s(v.dch?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dch?.w0)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      BRINGING
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.125s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", backgroundSize: `${s(v.dch?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dch?.w1)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      DEFENCE
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.25s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", backgroundSize: `${s(v.dch?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dch?.w2)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      CLOSER
                    </span>
                  </span>
                </span>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.375s", "--wy": "1", display: "inline-block", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", backgroundSize: `${s(v.dch?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dch?.w3)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      TO
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.5s", "--wy": "1", display: "inline-block", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", backgroundSize: `${s(v.dch?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dch?.w4)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      THE
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.625s", "--wy": "1", display: "inline-block", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", backgroundSize: `${s(v.dch?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dch?.w5)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      COMMUNITY
                    </span>
                  </span>
                </span>
              </h2>
              <button className="bkb" type="button" data-z="1" aria-label="Back to the topics" onClick={v.back6} style={{ position: "absolute", left: "64px", top: "48px", width: "64px", height: "64px", padding: "0", border: "0", borderRadius: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="38" height="32" viewBox="0 0 38 32" fill="none" aria-hidden="true">
                  <path d="M36.5 16H2.5M16 2.5 2.5 16 16 29.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p className="nxb" style={{ position: "absolute", right: "64px", top: "104px", height: "24px", margin: "0", fontSize: "20px", fontWeight: "600", lineHeight: "1.2", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                Next: Appreciating NSmen
              </p>
              <article id={screenId("s6", 0)} className={`st6 ${s(v.d6?.on0)}`} aria-label="Making defence more accessible">
                <button className="dcph" type="button" aria-label="View photo: Participants in life vests sit in an inflatable boat in a swimming pool" onClick={v.lb_0_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "648px", padding: "0", border: "0", borderRadius: "16px 0 0 0", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/dc4-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Children and adults assemble a raft frame from white water containers and pipes on a turf court" onClick={v.lb_0_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "206.59px", top: "208px", width: "265px", height: "325px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/dc4-a2.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Families stretch a green tarp between trees to build a shelter" onClick={v.lb_0_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "64px", top: "607.53px", width: "298.03px", height: "198.68px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/dc4-b2.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s0?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "258px", width: "520px", height: "536px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "48px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d6?.s0?.yt)}px)`, opacity: `${s(v.d6?.s0?.at)}` }}>
                    Making defence more accessible
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "24px", paddingRight: "40px" }}>
                    <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d6?.s0?.yb0)}px)`, opacity: `${s(v.d6?.s0?.ab0)}` }}>Over</span>
                        </p>
                        <p aria-label="500" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                          <T v={v.d6?.s0?.c0} />
                        </p>
                      </div>
                      <p style={{ margin: "0", fontSize: "24px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                        <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d6?.s0?.yb1)}px)`, opacity: `${s(v.d6?.s0?.ab1)}` }}>participants</span>
                      </p>
                    </div>
                    <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p aria-label="13" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                          <T v={v.d6?.s0?.c1} />
                        </p>
                      </div>
                      <p style={{ margin: "0", fontSize: "24px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                        <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d6?.s0?.yb2)}px)`, opacity: `${s(v.d6?.s0?.ab2)}` }}>camps</span>
                      </p>
                    </div>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="Through NS Experience Camps, families got a taste of NS-inspired activities, gaining a deeper appreciation of their loved ones’ service." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s0?.y0)}px)`, opacity: `${s(v.d6?.s0?.a0)}` }}><T v={v.d6?.s0?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s0?.y1)}px)`, opacity: `${s(v.d6?.s0?.a1)}` }}><T v={v.d6?.s0?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s0?.y2)}px)`, opacity: `${s(v.d6?.s0?.a2)}` }}><T v={v.d6?.s0?.l2} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d6?.s0?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s6", 1)} className={`st6 ${s(v.d6?.on1)}`} aria-label="Commemorating SAF60 at SAFRA">
                <button className="dcph" type="button" aria-label="View photo: Parents and children play a giant board game with large red dice on a turf court" onClick={v.lb_1_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "648px", padding: "0", border: "0", borderRadius: "16px 0 0 0", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/dc3-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s1?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Children play with toy blasters among camouflage tents on a green court" onClick={v.lb_1_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "99px", top: "222px", width: "380px", height: "253.33px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 12px)" }}>
                  <img src="./assets/dc3-a.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s1?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: An adult and child pose in flight suits and helmets against camouflage netting" onClick={v.lb_1_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "168.5px", top: "546px", width: "200px", height: "260px", padding: "0", border: "0", borderRadius: "13.18px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 13.18px)" }}>
                  <img src="./assets/dc3-b.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s1?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "258px", width: "520px", height: "536px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141", whiteSpace: "nowrap" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d6?.s1?.yt)}px)`, opacity: `${s(v.d6?.s1?.at)}` }}>
                    Commemorating SAF60 at SAFRA
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d6?.s1?.yb0)}px)`, opacity: `${s(v.d6?.s1?.ab0)}` }}>Over</span>
                        </p>
                        <p aria-label="140K" style={{ margin: "0", fontSize: "64px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                          <T v={v.d6?.s1?.c0} />
                        </p>
                      </div>
                      <p style={{ margin: "0", fontSize: "24px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                        <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d6?.s1?.yb1)}px)`, opacity: `${s(v.d6?.s1?.ab1)}` }}>people engaged</span>
                      </p>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="Be@SAFRA Open Houses brought families together to reflect on the SAF's role as they enjoyed interactive activities, flight simulators and military K9 encounters." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s1?.y0)}px)`, opacity: `${s(v.d6?.s1?.a0)}` }}><T v={v.d6?.s1?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s1?.y1)}px)`, opacity: `${s(v.d6?.s1?.a1)}` }}><T v={v.d6?.s1?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s1?.y2)}px)`, opacity: `${s(v.d6?.s1?.a2)}` }}><T v={v.d6?.s1?.l2} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s1?.y3)}px)`, opacity: `${s(v.d6?.s1?.a3)}` }}><T v={v.d6?.s1?.l3} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d6?.s1?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s6", 2)} className={`st6 ${s(v.d6?.on2)}`} aria-label="Sharing lessons from the past">
                <button className="dcph" type="button" aria-label="View photo: A speaker addresses pupils seated in a classroom" onClick={v.lb_2_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "648px", padding: "0", border: "0", borderRadius: "16px 0 0 0", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/dc1-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s2?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Service personnel seated outdoors listen to standing speakers" onClick={v.lb_2_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "128px", top: "239px", width: "364px", height: "432px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/dc1-a2.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s2?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "258px", width: "520px", height: "536px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141", whiteSpace: "nowrap" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d6?.s2?.yt)}px)`, opacity: `${s(v.d6?.s2?.at)}` }}>
                    Sharing lessons from the past
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d6?.s2?.yb0)}px)`, opacity: `${s(v.d6?.s2?.ab0)}` }}>Over</span>
                        </p>
                        <p aria-label="20K" style={{ margin: "0", fontSize: "64px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                          <T v={v.d6?.s2?.c0} />
                        </p>
                      </div>
                      <p style={{ margin: "0", fontSize: "24px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                        <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d6?.s2?.yb1)}px)`, opacity: `${s(v.d6?.s2?.ab1)}` }}>people engaged</span>
                      </p>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="Commitment to Defence (C2D) Ambassadors from the SAF Veterans’ League shared real-life experiences, reinforcing the importance of a strong defence." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s2?.y0)}px)`, opacity: `${s(v.d6?.s2?.a0)}` }}><T v={v.d6?.s2?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s2?.y1)}px)`, opacity: `${s(v.d6?.s2?.a1)}` }}><T v={v.d6?.s2?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s2?.y2)}px)`, opacity: `${s(v.d6?.s2?.a2)}` }}><T v={v.d6?.s2?.l2} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s2?.y3)}px)`, opacity: `${s(v.d6?.s2?.a3)}` }}><T v={v.d6?.s2?.l3} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d6?.s2?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s6", 3)} className={`st6 ${s(v.d6?.on3)}`} aria-label="Building preparedness together">
                <button className="dcph" type="button" aria-label="View photo: Children practise CPR on training manikins with instructors" onClick={v.lb_3_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "648px", padding: "0", border: "0", borderRadius: "16px 0 0 0", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/dc2-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s3?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Emergency responders demonstrate a rescue to an audience under a sheltered walkway" onClick={v.lb_3_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "64px", top: "237px", width: "440.78px", height: "270.82px", padding: "0", border: "0", borderRadius: "20px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 20px)" }}>
                  <img src="./assets/dc2-a2.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s3?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Boys look into a camouflage field pack held open by an instructor" onClick={v.lb_3_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "135px", top: "583px", width: "260px", height: "223px", padding: "0", border: "0", borderRadius: "14px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 14px)" }}>
                  <img src="./assets/dc2-b2.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s3?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "258px", width: "520px", height: "536px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141", whiteSpace: "nowrap" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d6?.s3?.yt)}px)`, opacity: `${s(v.d6?.s3?.at)}` }}>
                    Building preparedness together
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d6?.s3?.yb0)}px)`, opacity: `${s(v.d6?.s3?.ab0)}` }}>Over</span>
                        </p>
                        <p aria-label="40K" style={{ margin: "0", fontSize: "64px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                          <T v={v.d6?.s3?.c0} />
                        </p>
                      </div>
                      <p style={{ margin: "0", fontSize: "24px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                        <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d6?.s3?.yb1)}px)`, opacity: `${s(v.d6?.s3?.ab1)}` }}>people engaged</span>
                      </p>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="Total Defence Day commemorative activities equipped participants with practical skills through hands-on demonstrations and interactive games." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s3?.y0)}px)`, opacity: `${s(v.d6?.s3?.a0)}` }}><T v={v.d6?.s3?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s3?.y1)}px)`, opacity: `${s(v.d6?.s3?.a1)}` }}><T v={v.d6?.s3?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d6?.s3?.y2)}px)`, opacity: `${s(v.d6?.s3?.a2)}` }}><T v={v.d6?.s3?.l2} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d6?.s3?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
            </div>
          </div>
          <div className="nv6" aria-hidden="true" />
        </section>
        <section id={SECTION_IDS.s7} className="s7" aria-labelledby="an-title" style={{ position: "absolute", left: "0", top: "1818px", width: "1440px", height: "900px", overflow: "hidden", background: "#272C3F", borderImage: "linear-gradient(#272C3F, #272C3F) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <div className="z7" style={{ position: "absolute", inset: "0" }}>
            <div className="dcb" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "900px" }}>
              <h2 id="an-title" aria-label="Appreciating NSmen" style={{ position: "absolute", left: "160px", top: "56px", margin: "0", fontSize: "40px", fontWeight: "600", lineHeight: "48px", letterSpacing: "0.8px" }}>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi7" style={{ "--wd": "0.0s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", backgroundSize: `${s(v.dch7?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dch7?.w0)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      APPRECIATING
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi7" style={{ "--wd": "0.125s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", backgroundSize: `${s(v.dch7?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dch7?.w1)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      NSMEN
                    </span>
                  </span>
                </span>
              </h2>
              <button className="bkb" type="button" data-z="1" aria-label="Back to the topics" onClick={v.back7} style={{ position: "absolute", left: "64px", top: "48px", width: "64px", height: "64px", padding: "0", border: "0", borderRadius: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="38" height="32" viewBox="0 0 38 32" fill="none" aria-hidden="true">
                  <path d="M36.5 16H2.5M16 2.5 2.5 16 16 29.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p className="nxb" style={{ position: "absolute", right: "64px", top: "104px", height: "24px", margin: "0", fontSize: "20px", fontWeight: "600", lineHeight: "1.2", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                Next: Strengthening Bonds
              </p>
              <article id={screenId("s7", 0)} className={`st6 ${s(v.d7?.on0)}`} aria-label="Nurturing appreciation from young">
                <button className="dcph" type="button" aria-label="View photo: A preschool teacher shows the class photos of servicemen" onClick={v.lb7_0_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "817px", top: "202px", width: "623px", height: "648px", padding: "0", border: "0", borderRadius: "16px 0 0 0", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/an1-main3.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%", transform: `translateY(${s(v.d7?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Preschoolers cut out and decorate thank-you cards at a table" onClick={v.lb7_0_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "64px", top: "217px", width: "450px", height: "300px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an1-kids2.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%", transform: `translateY(${s(v.d7?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: A preschooler writes a thank-you card with a family photo for an NSman father" onClick={v.lb7_0_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "144px", top: "586px", width: "222px", height: "220px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an1-card2.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%", transform: `translateY(${s(v.d7?.s0?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "251px", width: "520px", height: "550px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141", whiteSpace: "nowrap" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d7?.s0?.yt)}px)`, opacity: `${s(v.d7?.s0?.at)}` }}>
                    Nurturing appreciation from young
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "24px", paddingRight: "40px" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s0?.yb0)}px)`, opacity: `${s(v.d7?.s0?.ab0)}` }}>Over</span>
                          </p>
                          <p aria-label="35K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d7?.s0?.c0} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s0?.yb1)}px)`, opacity: `${s(v.d7?.s0?.ab1)}` }}>preschoolers</span>
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s0?.yb2)}px)`, opacity: `${s(v.d7?.s0?.ab2)}` }}>Over</span>
                          </p>
                          <p aria-label="460" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d7?.s0?.c1} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s0?.yb3)}px)`, opacity: `${s(v.d7?.s0?.ab3)}` }}>preschool centres</span>
                        </p>
                      </div>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="Through the Appreciating NSmen Art Jam initiative, preschoolers learnt about national servicemen's contributions and made personalised gifts to thank their fathers for defending Singapore." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s0?.y0)}px)`, opacity: `${s(v.d7?.s0?.a0)}` }}><T v={v.d7?.s0?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s0?.y1)}px)`, opacity: `${s(v.d7?.s0?.a1)}` }}><T v={v.d7?.s0?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s0?.y2)}px)`, opacity: `${s(v.d7?.s0?.a2)}` }}><T v={v.d7?.s0?.l2} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s0?.y3)}px)`, opacity: `${s(v.d7?.s0?.a3)}` }}><T v={v.d7?.s0?.l3} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s0?.y4)}px)`, opacity: `${s(v.d7?.s0?.a4)}` }}><T v={v.d7?.s0?.l4} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d7?.s0?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s7", 1)} className={`st6 ${s(v.d7?.on1)}`} aria-label="Expressing gratitude through storytelling">
                <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}>
                  <defs>
                    <linearGradient id="vplayG" x1="2" y1="24" x2="46" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6252A4" />
                      <stop offset="0.490385" stopColor="#F14192" />
                      <stop offset="0.927885" stopColor="#F6765D" />
                      <stop offset="0.9999" stopColor="#F69141" />
                    </linearGradient>
                  </defs>
                </svg>
                <button className="dcph" type="button" aria-label="View: Video still: an animated serviceman gives a thumbs-up at a hawker stall offering 30% off to all NSmen" onClick={v.lb7_1_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "320px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an2-v1.jpg" alt="" style={{ position: "absolute", left: "0px", top: "-31.88px", width: "625px", height: "384.35px", maxWidth: "none", objectFit: "cover", filter: "brightness(0.8)", transform: `translateY(${s(v.d7?.s1?.ph)}%)` }} />
                  <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ position: "absolute", left: "calc(50% - 24px)", top: "calc(50% - 24px)", pointerEvents: "none", transform: `translateY(calc(${s(v.d7?.s1?.ph)} * 3.8435px))` }}>
                    <circle cx="24" cy="24" r="22" fill="url(#vplayG)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" />
                  </svg>
                </button>
                <button className="dcph" type="button" aria-label="View: Video still: a young serviceman shares a home-cooked meal with his family" onClick={v.lb7_1_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "112px", top: "202px", width: "380px", height: "250px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an2-v2.jpg" alt="" style={{ position: "absolute", left: "-51.37px", top: "0px", width: "521.85px", height: "250px", maxWidth: "none", objectFit: "cover", filter: "brightness(0.8)", transform: `translateY(${s(v.d7?.s1?.ph)}%)` }} />
                  <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ position: "absolute", left: "calc(50% - 24px)", top: "calc(50% - 24px)", pointerEvents: "none", transform: `translateY(calc(${s(v.d7?.s1?.ph)} * 2.5000px))` }}>
                    <circle cx="24" cy="24" r="22" fill="url(#vplayG)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" />
                  </svg>
                </button>
                <button className="dcph" type="button" aria-label="View: Video still: paper-craft figures in different service uniforms stand in front of the Singapore skyline" onClick={v.lb7_1_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "64px", top: "547.66px", width: "340px", height: "210px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an2-v3.jpg" alt="" style={{ position: "absolute", left: "-28.17px", top: "-4.51px", width: "414.31px", height: "219.02px", maxWidth: "none", objectFit: "cover", filter: "brightness(0.7)", transform: `translateY(${s(v.d7?.s1?.ph)}%)` }} />
                  <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ position: "absolute", left: "calc(50% - 24px)", top: "calc(50% - 24px)", pointerEvents: "none", transform: `translateY(calc(${s(v.d7?.s1?.ph)} * 2.1902px))` }}>
                    <circle cx="24" cy="24" r="22" fill="url(#vplayG)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" />
                  </svg>
                </button>
                <button className="dcph" type="button" aria-label="View: Video still: cartoon characters representing different services stand side by side" onClick={v.lb7_1_3} style={{ translate: `${s(v.pp?.d3)}`, position: "absolute", left: "1037px", top: "606px", width: "334px", height: "200px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an2-v4.jpg" alt="" style={{ position: "absolute", left: "-19.93px", top: "-1.47px", width: "379.73px", height: "211.28px", maxWidth: "none", objectFit: "cover", filter: "brightness(0.8)", transform: `translateY(${s(v.d7?.s1?.ph)}%)` }} />
                  <svg aria-hidden="true" width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ position: "absolute", left: "calc(50% - 24px)", top: "calc(50% - 24px)", pointerEvents: "none", transform: `translateY(calc(${s(v.d7?.s1?.ph)} * 2.1128px))` }}>
                    <circle cx="24" cy="24" r="22" fill="url(#vplayG)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" />
                  </svg>
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "251px", width: "520px", height: "550px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d7?.s1?.yt)}px)`, opacity: `${s(v.d7?.s1?.at)}` }}>
                    Expressing gratitude through storytelling
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "24px", paddingRight: "40px" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <p aria-label="145" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                          <T v={v.d7?.s1?.c0} />
                        </p>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s1?.yb0)}px)`, opacity: `${s(v.d7?.s1?.ab0)}` }}>students</span>
                        </p>
                      </div>
                      <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <p aria-label="44" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                          <T v={v.d7?.s1?.c1} />
                        </p>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s1?.yb1)}px)`, opacity: `${s(v.d7?.s1?.ab1)}` }}>videos</span>
                        </p>
                      </div>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="The Appreciating NSmen Video Competition saw students using creative storytelling to highlight the contributions of national servicemen and show their support." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s1?.y0)}px)`, opacity: `${s(v.d7?.s1?.a0)}` }}><T v={v.d7?.s1?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s1?.y1)}px)`, opacity: `${s(v.d7?.s1?.a1)}` }}><T v={v.d7?.s1?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s1?.y2)}px)`, opacity: `${s(v.d7?.s1?.a2)}` }}><T v={v.d7?.s1?.l2} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s1?.y3)}px)`, opacity: `${s(v.d7?.s1?.a3)}` }}><T v={v.d7?.s1?.l3} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d7?.s1?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s7", 2)} className={`st6 ${s(v.d7?.on2)}`} aria-label="Turning business support into everyday benefits">
                <button className="dcph" type="button" aria-label="View: Appreciating NSmen Deals: free Whopper at Burger King" onClick={v.lb7_2_0} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "64px", top: "242.57px", width: "280px", height: "280px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an3-bk.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d7?.s2?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View: Appreciating NSmen Deals: $6 Hormat SG60 bundle at Popeyes" onClick={v.lb7_2_1} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "189.5px", top: "586px", width: "220px", height: "220px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an3-popeyes.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d7?.s2?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View: Appreciating NSmen Deals: $30 off hotel bookings on Klook" onClick={v.lb7_2_2} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "963.4px", top: "202px", width: "280px", height: "280px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an3-klook.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d7?.s2?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View: Appreciating NSmen Deals: 50% off all services at The Jungle Spa and The Upsara Spa" onClick={v.lb7_2_3} style={{ translate: `${s(v.pp?.d3)}`, position: "absolute", left: "1096px", top: "526px", width: "280px", height: "280px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an3-spa.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d7?.s2?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "251px", width: "520px", height: "550px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d7?.s2?.yt)}px)`, opacity: `${s(v.d7?.s2?.at)}` }}>
                    <span style={{ whiteSpace: "nowrap" }}>Turning business support into everyday</span>
                    <br />
                    benefits
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "24px", paddingRight: "40px" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s2?.yb0)}px)`, opacity: `${s(v.d7?.s2?.ab0)}` }}>Over</span>
                          </p>
                          <p aria-label="180" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d7?.s2?.c0} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s2?.yb1)}px)`, opacity: `${s(v.d7?.s2?.ab1)}` }}>partner merchants</span>
                        </p>
                      </div>
                      <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s2?.yb2)}px)`, opacity: `${s(v.d7?.s2?.ab2)}` }}>Over</span>
                          </p>
                          <p aria-label="240" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d7?.s2?.c1} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s2?.yb3)}px)`, opacity: `${s(v.d7?.s2?.ab3)}` }}>deals</span>
                        </p>
                      </div>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="A wide range of appreciation deals for national servicemen, ranging from daily essentials to recreation, were secured through collaborations with merchants islandwide." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s2?.y0)}px)`, opacity: `${s(v.d7?.s2?.a0)}` }}><T v={v.d7?.s2?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s2?.y1)}px)`, opacity: `${s(v.d7?.s2?.a1)}` }}><T v={v.d7?.s2?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s2?.y2)}px)`, opacity: `${s(v.d7?.s2?.a2)}` }}><T v={v.d7?.s2?.l2} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s2?.y3)}px)`, opacity: `${s(v.d7?.s2?.a3)}` }}><T v={v.d7?.s2?.l3} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d7?.s2?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s7", 3)} className={`st6 ${s(v.d7?.on3)}`} aria-label="Fueling up our national servicemen">
                <button className="dcph" type="button" aria-label="View photo: National servicemen in PT kit hold up complimentary Old Chang Kee snacks" onClick={v.lb7_3_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "648px", padding: "0", border: "0", borderRadius: "16px 0 0 0", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/an4-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%", transform: `translateY(${s(v.d7?.s3?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: A serviceman picks up a snack at the Canadian 2 for 1 Pizza food truck" onClick={v.lb7_3_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "64px", top: "237px", width: "440.78px", height: "270.82px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an4-truck.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%", transform: `translateY(${s(v.d7?.s3?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: National servicemen with snacks in front of a food truck and an Appreciating NSmen banner" onClick={v.lb7_3_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "64px", top: "607.32px", width: "298.03px", height: "198.68px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an4-group.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 50%", transform: `translateY(${s(v.d7?.s3?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "251px", width: "520px", height: "550px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141", whiteSpace: "nowrap" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d7?.s3?.yt)}px)`, opacity: `${s(v.d7?.s3?.at)}` }}>
                    Fueling up our national servicemen
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "24px", paddingRight: "40px" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", paddingRight: "40px", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s3?.yb0)}px)`, opacity: `${s(v.d7?.s3?.ab0)}` }}>Over</span>
                          </p>
                          <p aria-label="15K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d7?.s3?.c0} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s3?.yb1)}px)`, opacity: `${s(v.d7?.s3?.ab1)}` }}>snacks</span>
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p aria-hidden="true" style={{ margin: "0", fontSize: "18px", lineHeight: "1.2", opacity: "0" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s3?.yb2)}px)`, opacity: `${s(v.d7?.s3?.ab2)}` }}>Over</span>
                          </p>
                          <p aria-label="15" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d7?.s3?.c1} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d7?.s3?.yb3)}px)`, opacity: `${s(v.d7?.s3?.ab3)}` }}>food truck activations</span>
                        </p>
                      </div>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="SAFRA gave away complimentary snacks to national servicemen at various SAF camps, SAFRA clubs and events." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s3?.y0)}px)`, opacity: `${s(v.d7?.s3?.a0)}` }}><T v={v.d7?.s3?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s3?.y1)}px)`, opacity: `${s(v.d7?.s3?.a1)}` }}><T v={v.d7?.s3?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d7?.s3?.y2)}px)`, opacity: `${s(v.d7?.s3?.a2)}` }}><T v={v.d7?.s3?.l2} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d7?.s3?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
            </div>
          </div>
          <div className="nv7" aria-hidden="true" />
        </section>
        <section id={SECTION_IDS.s8} className="s8" aria-labelledby="sb-title" style={{ position: "absolute", left: "0", top: "1818px", width: "1440px", height: "900px", overflow: "hidden", background: "#272C3F", borderImage: "linear-gradient(#272C3F, #272C3F) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <div className="z8" style={{ position: "absolute", inset: "0" }}>
            <div className="dcb" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "900px" }}>
              <h2 id="sb-title" aria-label="Strengthening bonds" style={{ position: "absolute", left: "160px", top: "56px", margin: "0", fontSize: "40px", fontWeight: "600", lineHeight: "48px", letterSpacing: "0.8px" }}>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi8" style={{ "--wd": "0.0s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", backgroundSize: `${s(v.dch8?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dch8?.w0)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      STRENGTHENING
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi8" style={{ "--wd": "0.125s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", backgroundSize: `${s(v.dch8?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dch8?.w1)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      BONDS
                    </span>
                  </span>
                </span>
              </h2>
              <button className="bkb" type="button" data-z="1" aria-label="Back to the topics" onClick={v.back8} style={{ position: "absolute", left: "64px", top: "48px", width: "64px", height: "64px", padding: "0", border: "0", borderRadius: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="38" height="32" viewBox="0 0 38 32" fill="none" aria-hidden="true">
                  <path d="M36.5 16H2.5M16 2.5 2.5 16 16 29.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p className="nxb" style={{ position: "absolute", right: "64px", top: "104px", height: "24px", margin: "0", fontSize: "20px", fontWeight: "600", lineHeight: "1.2", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                Next: Rewarding Privileges
              </p>
              <article id={screenId("s8", 0)} className={`st6 ${s(v.d8?.on0)}`} aria-label="Celebrating the SG60 journey">
                <button className="dcph" type="button" aria-label="View photo: A family smiles in front of red fireworks at a National Day celebration" onClick={v.lb8_0_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "648px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb1-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Members cheer with SAFRA thunder sticks at a National Day celebration" onClick={v.lb8_0_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "64px", top: "626px", width: "300px", height: "180px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb1-crowd.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: A family on a picnic mat with the SAFRA mascot at a SG60 celebration" onClick={v.lb8_0_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "142.5px", top: "231.83px", width: "423px", height: "295px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb1-mascot.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s0?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "236.5px", width: "520px", height: "579px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141", whiteSpace: "nowrap" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d8?.s0?.yt)}px)`, opacity: `${s(v.d8?.s0?.at)}` }}>
                    Celebrating the SG60 journey
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s0?.yb0)}px)`, opacity: `${s(v.d8?.s0?.ab0)}` }}>Over</span>
                        </p>
                        <p aria-label="52K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                          <T v={v.d8?.s0?.c0} />
                        </p>
                      </div>
                      <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                        <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s0?.yb1)}px)`, opacity: `${s(v.d8?.s0?.ab1)}` }}>people engaged</span>
                      </p>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="SAFRA’s National Day celebrations at Marina Bay and across all SAFRA clubs brought loved ones together for the live screening of the NDP, live performances and nostalgic games." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s0?.y0)}px)`, opacity: `${s(v.d8?.s0?.a0)}` }}><T v={v.d8?.s0?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s0?.y1)}px)`, opacity: `${s(v.d8?.s0?.a1)}` }}><T v={v.d8?.s0?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s0?.y2)}px)`, opacity: `${s(v.d8?.s0?.a2)}` }}><T v={v.d8?.s0?.l2} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s0?.y3)}px)`, opacity: `${s(v.d8?.s0?.a3)}` }}><T v={v.d8?.s0?.l3} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d8?.s0?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s8", 1)} className={`st6 ${s(v.d8?.on1)}`} aria-label="Creating cherished family memories">
                <button className="dcph" type="button" aria-label="View photo: Children pose with Pororo &amp; Friends characters at the SG60 SAFRA Family Fiesta" onClick={v.lb8_1_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "648px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb2-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s1?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Babies and toddlers race across a colourful mat as families cheer at the SAFRA Diaper Dash" onClick={v.lb8_1_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "64px", top: "607.5px", width: "298.05px", height: "198.7px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb2-race.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s1?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Parents and toddlers holding Pororo plush toys wait at the start of the SAFRA Diaper Dash" onClick={v.lb8_1_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "84.5px", top: "202px", width: "381px", height: "250px", padding: "0", border: "0", borderRadius: "14.78px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 14.78px)" }}>
                  <img src="./assets/sb2-dash2.jpg" alt="" style={{ position: "absolute", left: "0.1px", top: "0.17px", width: "380.73px", height: "253.76px", maxWidth: "none", display: "block", objectFit: "cover", transform: `translateY(${s(v.d8?.s1?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "236.5px", width: "520px", height: "579px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141", whiteSpace: "nowrap" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d8?.s1?.yt)}px)`, opacity: `${s(v.d8?.s1?.at)}` }}>
                    Creating cherished family memories
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s1?.yb0)}px)`, opacity: `${s(v.d8?.s1?.ab0)}` }}>Over</span>
                          </p>
                          <p aria-label="1.2K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d8?.s1?.c0} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s1?.yb1)}px)`, opacity: `${s(v.d8?.s1?.ab1)}` }}>people participated</span>
                        </p>
                      </div>
                      <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s1?.yb2)}px)`, opacity: `${s(v.d8?.s1?.ab2)}` }}>Over</span>
                          </p>
                          <p aria-label="420" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d8?.s1?.c1} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s1?.yb3)}px)`, opacity: `${s(v.d8?.s1?.ab3)}` }}>{"babies & toddlers raced"}</span>
                        </p>
                      </div>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="SG60 SAFRA Family Fiesta brought families together for fun-filled activities, including the SAFRA Diaper Dash and sing-along sessions with their favourite Pororo &amp; Friends characters." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s1?.y0)}px)`, opacity: `${s(v.d8?.s1?.a0)}` }}><T v={v.d8?.s1?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s1?.y1)}px)`, opacity: `${s(v.d8?.s1?.a1)}` }}><T v={v.d8?.s1?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s1?.y2)}px)`, opacity: `${s(v.d8?.s1?.a2)}` }}><T v={v.d8?.s1?.l2} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s1?.y3)}px)`, opacity: `${s(v.d8?.s1?.a3)}` }}><T v={v.d8?.s1?.l3} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d8?.s1?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s8", 2)} className={`st6 ${s(v.d8?.on2)}`} aria-label="Strengthening teamwork and camaraderie">
                <button className="dcph" type="button" aria-label="View photo: National servicemen play human foosball on an inflatable pitch" onClick={v.lb8_2_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "648px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb3-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s2?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: National servicemen in face masks pose with archery tag bows" onClick={v.lb8_2_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "136.5px", top: "585.83px", width: "247px", height: "220px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb3-archery.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s2?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: An NS unit poses for a team photo after a football match" onClick={v.lb8_2_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "64px", top: "217px", width: "450px", height: "300px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb3-team.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s2?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "236.5px", width: "520px", height: "579px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d8?.s2?.yt)}px)`, opacity: `${s(v.d8?.s2?.at)}` }}>
                    Strengthening teamwork and
                    <br />
                    camaraderie
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "24px" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p aria-label="637" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d8?.s2?.c0} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s2?.yb0)}px)`, opacity: `${s(v.d8?.s2?.ab0)}` }}>cohesion events</span>
                        </p>
                      </div>
                      <div style={{ flex: "none", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s2?.yb1)}px)`, opacity: `${s(v.d8?.s2?.ab1)}` }}>Over</span>
                          </p>
                          <p aria-label="52K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d8?.s2?.c1} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s2?.yb2)}px)`, opacity: `${s(v.d8?.s2?.ab2)}` }}>national servicemen engaged</span>
                        </p>
                      </div>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="Cohesion events were organised for SAF NS units at various SAFRA clubs and SAF camps, featuring a wide range of activities such as archery tag, bowling, inflatable games, water telematches and various sports competitions." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s2?.y0)}px)`, opacity: `${s(v.d8?.s2?.a0)}` }}><T v={v.d8?.s2?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s2?.y1)}px)`, opacity: `${s(v.d8?.s2?.a1)}` }}><T v={v.d8?.s2?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s2?.y2)}px)`, opacity: `${s(v.d8?.s2?.a2)}` }}><T v={v.d8?.s2?.l2} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s2?.y3)}px)`, opacity: `${s(v.d8?.s2?.a3)}` }}><T v={v.d8?.s2?.l3} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s2?.y4)}px)`, opacity: `${s(v.d8?.s2?.a4)}` }}><T v={v.d8?.s2?.l4} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d8?.s2?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s8", 3)} className={`st6 ${s(v.d8?.on3)}`} aria-label="Connecting youths through shared interests">
                <button className="dcph" type="button" aria-label="View photo: Youths compete in the Ultimate Frisbee Tournament at SAFRA Youth Fiesta" onClick={v.lb8_3_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "648px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb4-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s3?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Cosplayers at the DoujinFes Fair" onClick={v.lb8_3_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "64px", top: "607.53px", width: "298.03px", height: "198.68px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb4-cosplay.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s3?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: A player throws a frisbee past a defender during the Ultimate Frisbee Tournament" onClick={v.lb8_3_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "64px", top: "202px", width: "440.78px", height: "270.82px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb4-frisbee.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s3?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "236.5px", width: "520px", height: "579px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d8?.s3?.yt)}px)`, opacity: `${s(v.d8?.s3?.at)}` }}>
                    Connecting youths through shared
                    <br />
                    interests
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s3?.yb0)}px)`, opacity: `${s(v.d8?.s3?.ab0)}` }}>Over</span>
                        </p>
                        <p aria-label="1.2K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                          <T v={v.d8?.s3?.c0} />
                        </p>
                      </div>
                      <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                        <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s3?.yb1)}px)`, opacity: `${s(v.d8?.s3?.ab1)}` }}>youths participated</span>
                      </p>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="SAFRA Youth Fiesta brought youths together to compete in the Ultimate Frisbee Tournament and indulge in Japanese pop culture at the DoujinFes Fair and Hololive Official Card Game community workshops." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s3?.y0)}px)`, opacity: `${s(v.d8?.s3?.a0)}` }}><T v={v.d8?.s3?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s3?.y1)}px)`, opacity: `${s(v.d8?.s3?.a1)}` }}><T v={v.d8?.s3?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s3?.y2)}px)`, opacity: `${s(v.d8?.s3?.a2)}` }}><T v={v.d8?.s3?.l2} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s3?.y3)}px)`, opacity: `${s(v.d8?.s3?.a3)}` }}><T v={v.d8?.s3?.l3} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s3?.y4)}px)`, opacity: `${s(v.d8?.s3?.a4)}` }}><T v={v.d8?.s3?.l4} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d8?.s3?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s8", 4)} className={`st6 ${s(v.d8?.on4)}`} aria-label="Unwinding with buddies">
                <button className="dcph" type="button" aria-label="View photo: Guests dance with their arms raised at Soundbyte Beer Music Play" onClick={v.lb8_4_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "815px", top: "202px", width: "625px", height: "648px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb5-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s4?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: A packed hall of guests raises their drinks at Soundbyte Beer Music Play" onClick={v.lb8_4_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "107.5px", top: "626px", width: "300px", height: "180px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb5-hall.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s4?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Friends play an arcade button game at Soundbyte Beer Music Play" onClick={v.lb8_4_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "63.5px", top: "201.83px", width: "441px", height: "318px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb5-game.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s4?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "236.5px", width: "520px", height: "579px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141", whiteSpace: "nowrap" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d8?.s4?.yt)}px)`, opacity: `${s(v.d8?.s4?.at)}` }}>
                    Unwinding with buddies
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s4?.yb0)}px)`, opacity: `${s(v.d8?.s4?.ab0)}` }}>Over</span>
                        </p>
                        <p aria-label="430" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                          <T v={v.d8?.s4?.c0} />
                        </p>
                      </div>
                      <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                        <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s4?.yb1)}px)`, opacity: `${s(v.d8?.s4?.ab1)}` }}>people enjoyed</span>
                      </p>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="Soundbyte Beer Music Play brought national servicemen and their friends together to enjoy live band performances, high-energy DJ sets, games and free flow of drinks." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s4?.y0)}px)`, opacity: `${s(v.d8?.s4?.a0)}` }}><T v={v.d8?.s4?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s4?.y1)}px)`, opacity: `${s(v.d8?.s4?.a1)}` }}><T v={v.d8?.s4?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s4?.y2)}px)`, opacity: `${s(v.d8?.s4?.a2)}` }}><T v={v.d8?.s4?.l2} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s4?.y3)}px)`, opacity: `${s(v.d8?.s4?.a3)}` }}><T v={v.d8?.s4?.l3} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d8?.s4?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
              <article id={screenId("s8", 5)} className={`st6 ${s(v.d8?.on5)}`} aria-label="Lending a helping hand">
                <button className="dcph" type="button" aria-label="View photo: Organisers and partners present a S$290,000 cheque at SAFRA Swim for Hope" onClick={v.lb8_5_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "954px", top: "202px", width: "486px", height: "324px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb6-main.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s5?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Participants swim for charity at SAFRA Swim for Hope" onClick={v.lb8_5_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "64px", top: "504px", width: "324.52px", height: "232.95px", padding: "0", border: "0", borderRadius: "16px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb6-pool.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s5?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "460px", top: "236.5px", width: "520px", height: "579px", boxSizing: "border-box", padding: "32px 32px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "64px", borderRadius: "16px", background: "#000722", color: "#FFFFFF", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141", whiteSpace: "nowrap" }}>
                    <span className="dct" style={{ display: "block", transform: `translateY(${s(v.d8?.s5?.yt)}px)`, opacity: `${s(v.d8?.s5?.at)}` }}>
                    Lending a helping hand
                    </span>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s5?.yb0)}px)`, opacity: `${s(v.d8?.s5?.ab0)}` }}>Over</span>
                          </p>
                          <p aria-label="5.5K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d8?.s5?.c0} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s5?.yb1)}px)`, opacity: `${s(v.d8?.s5?.ab1)}` }}>participants</span>
                        </p>
                      </div>
                      <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.2" }}>
                            <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s5?.yb2)}px)`, opacity: `${s(v.d8?.s5?.ab2)}` }}>Close to</span>
                          </p>
                          <p aria-label="$290K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", lineHeight: "1.2", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.d8?.s5?.c1} />
                          </p>
                        </div>
                        <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.5", whiteSpace: "nowrap" }}>
                          <span className="dcb" style={{ display: "inline-block", transform: `translateY(${s(v.d8?.s5?.yb3)}px)`, opacity: `${s(v.d8?.s5?.ab3)}` }}>raised</span>
                        </p>
                      </div>
                    </div>
                    <div style={{ height: "1px", background: "rgba(255,255,255,.3)" }} />
                    <p aria-label="SAFRA Swim for Hope rallied the community to swim for charity and raise funds for the less privileged and those in need." style={{ margin: "0", fontSize: "20px", lineHeight: "1.8", color: "#DDDDDD" }}>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s5?.y0)}px)`, opacity: `${s(v.d8?.s5?.a0)}` }}><T v={v.d8?.s5?.l0} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s5?.y1)}px)`, opacity: `${s(v.d8?.s5?.a1)}` }}><T v={v.d8?.s5?.l1} /></span>
                      </span>
                      <span style={{ display: "block", height: "36px", whiteSpace: "pre" }}>
                        <span className="dcl" style={{ display: "block", transform: `translateY(${s(v.d8?.s5?.y2)}px)`, opacity: `${s(v.d8?.s5?.a2)}` }}><T v={v.d8?.s5?.l2} /></span>
                      </span>
                    </p>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "8px", width: `${s(v.d8?.s5?.bar)}px`, borderRadius: "0 4px 4px 0", background: "#F34141" }} />
                </div>
              </article>
            </div>
          </div>
          <div className="nv8" aria-hidden="true" />
        </section>
                {/* one gradient behind the band under section 9 and Clubs & Facilities, so it flows through both (Membership is an L2 page on desktop) */}
        <section id={SECTION_IDS.mb} className="s10" aria-labelledby="mb-title" style={{ position: "absolute", left: "0", top: "1818px", width: "1440px", height: "900px", overflow: "hidden", background: "linear-gradient(120.35deg, #6252A4 0.57%, #F14192 47.17%, #F6765D 88.75%, #F69141 95.59%)", borderImage: "linear-gradient(120.35deg, #6252A4 0.57%, #F14192 47.17%, #F6765D 88.75%, #F69141 95.59%) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <button className="bkb mbbk" type="button" data-z="1" aria-label="Back to the topics" onClick={v.backMb} style={{ position: "absolute", left: "64px", top: "48px", width: "64px", height: "64px", padding: "0", border: "1.5px solid #FFFFFF", borderRadius: "80px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box", zIndex: "3" }}>
            <svg width="38" height="32" viewBox="0 0 38 32" fill="none" aria-hidden="true">
              <path d="M36.5 16H2.5M16 2.5 2.5 16 16 29.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="nxb mbnx" style={{ position: "absolute", right: "64px", top: "104px", height: "24px", margin: "0", fontSize: "20px", fontWeight: "600", lineHeight: "1.2", textTransform: "uppercase", whiteSpace: "nowrap", color: "rgba(255,255,255,.64)", pointerEvents: "none" }}>
            {"Next: Enhancing SAFRA Clubs & Facilities"}
          </p>
          {/* Figma 2110:7454: below the 152px header the copy on the left stays fixed; only the card stack scrolls, and only when an open card makes it taller than the space (wheel anywhere here drives it) */}
          <div onWheel={v.mbScroll} style={{ position: "absolute", left: "0", top: "152px", width: "1440px", height: "748px" }}>
            <div style={{ position: "absolute", left: "104px", top: "16px", width: "396px", display: "flex", flexDirection: "column", gap: "24px" }}>
              <h2 id="mb-title" className="mbk mk2" aria-label="Our top rewarding privileges" style={{ margin: "0", fontSize: "56px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "1.12px", textTransform: "uppercase", color: "#FFFFFF" }}>
                Our top
                <br />
                Rewarding
                <br />
                privileges
              </h2>
              <p className="mbk mk4" style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.6", letterSpacing: "0.48px", color: "#DDDDDD" }}>
                Preferential rates and exclusive privileges enabled SAFRA members to stretch every dollar and reap greater cost savings on a wide variety of product and services throughout the year.
              </p>
            </div>
            <p className="mbk mk5" style={{ display: "none", position: "absolute", left: "564px", top: "104px", width: "772px", margin: "0", textAlign: "center", fontSize: "32px", fontWeight: "700", lineHeight: "1.6", letterSpacing: "0.64px", color: "#FFFFFF" }}>
              TOP PICKS
            </p>
            <div className="mbsc" style={{ position: "absolute", left: "564px", top: "0", width: "772px", height: "748px", boxSizing: "border-box", padding: "16px 0 24px", overflowX: "hidden", overflowY: "auto", overscrollBehavior: "contain" }}>
            <div className="mbk mk5" role="group" aria-label="Top picks by category" style={{ position: "relative", width: "772px", borderRadius: "16px" }}>
              <div id={screenId("mb", 0)} className={`mbs ${s(v.mbv?.dv0)}`} style={{ position: "relative", zIndex: "1", marginTop: "0", width: "772px", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", gap: "40px", borderRadius: "16px", background: "#313851" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.de0} onClick={v.mbTab0} style={{ display: "flex", alignItems: "center", gap: "24px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb2-ic-food.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                    <span style={{ flex: "1 1 auto", minWidth: "0", fontSize: "24px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "nowrap" }}>
                      {"Food & Groceries"}
                    </span>
                    <img className="mbpl" src={v.mbv?.de0 ? "./assets/mb-minus.svg" : "./assets/mb-plus.svg"} alt="" aria-hidden="true" width="40" height="40" style={{ display: "block", flex: "none" }} />
                  </button>
                </h3>
                <div className="mbc" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", color: "#FFFFFF", lineHeight: "1.4" }}>
                    <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                      Discounts at over
                    </p>
                    <p aria-label="100" style={{ margin: "0", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap" }}>
                      <T v={v.mbv?.c2} />
                    </p>
                    <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                      establishments
                    </p>
                  </div>
                  <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
                    {"Members enjoyed attractive deals such as special 1-for-1 offers and up to 50% off at outlets islandwide. They could also purchase F&B vouchers at a special rate of $6 (U.P. $10) via the SAFRA Treats & Deals portal."}
                  </p>
                  <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                    <div className="mbi" style={{ flex: "none", width: "151px", height: "151px", overflow: "hidden" }}>
                      <img src="./assets/mb-f1.jpg" alt="Délifrance 1-for-1 signature sandwich offer for SAFRA members" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="mbi" style={{ flex: "none", width: "151px", height: "151px", overflow: "hidden" }}>
                      <img src="./assets/mb-f2.jpg" alt="PlayMade 1-for-1 beverage offer for SAFRA members" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="mbi" style={{ flex: "none", width: "358px", height: "136px", overflow: "hidden" }}>
                      <img src="./assets/mb-f3.jpg" alt="Hawker discount day at Bukit Merah Central Food Centre" style={{ display: "block", width: "358px", height: "136px", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div id={screenId("mb", 1)} className={`mbs ${s(v.mbv?.dv1)}`} style={{ position: "relative", zIndex: "2", marginTop: "-32px", width: "772px", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", gap: "40px", borderRadius: "16px", background: "#272C3F" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.de1} onClick={v.mbTab1} style={{ display: "flex", alignItems: "center", gap: "24px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb2-ic-education.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                    <span style={{ flex: "1 1 auto", minWidth: "0", fontSize: "24px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "nowrap" }}>
                      {"Education"}
                    </span>
                    <img className="mbpl" src={v.mbv?.de1 ? "./assets/mb-minus.svg" : "./assets/mb-plus.svg"} alt="" aria-hidden="true" width="40" height="40" style={{ display: "block", flex: "none" }} />
                  </button>
                </h3>
                <div className="mbc" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "24px", color: "#FFFFFF", lineHeight: "1.4" }}>
                    <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <p aria-label="27" style={{ margin: "0", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap" }}>
                        <T v={v.mbv?.c3} />
                      </p>
                      <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                        sponsorships awarded
                      </p>
                    </div>
                    <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                        Worth over
                      </p>
                      <p aria-label="$615K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap" }}>
                        <T v={v.mbv?.c4} />
                      </p>
                    </div>
                  </div>
                  <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
                    These bond-free sponsorships helped members as they pursued their diplomas, bachelor’s and master’s degrees, in support of their education and career aspirations.
                  </p>
                  <div className="mbi" style={{ flex: "none", width: "100%", height: "260px", overflow: "hidden", background: "#FFFFFF" }}>
                    <img src="./assets/mb-edu2.jpg" alt="Sponsorship recipients on stage at the SAFRA Bond-Free Education Scheme Awards Presentation" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
              <div id={screenId("mb", 2)} className={`mbs ${s(v.mbv?.dv2)}`} style={{ position: "relative", zIndex: "3", marginTop: "-32px", width: "772px", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", gap: "40px", borderRadius: "16px", background: "#313851" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.de2} onClick={v.mbTab2} style={{ display: "flex", alignItems: "center", gap: "24px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb2-ic-movies.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                    <span style={{ flex: "1 1 auto", minWidth: "0", fontSize: "24px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "nowrap" }}>
                      {"Movies & Entertainment"}
                    </span>
                    <img className="mbpl" src={v.mbv?.de2 ? "./assets/mb-minus.svg" : "./assets/mb-plus.svg"} alt="" aria-hidden="true" width="40" height="40" style={{ display: "block", flex: "none" }} />
                  </button>
                </h3>
                <div className="mbc" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "24px", color: "#FFFFFF", lineHeight: "1.4" }}>
                    <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                        Over
                      </p>
                      <p aria-label="240K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap" }}>
                        <T v={v.mbv?.c5} />
                      </p>
                      <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                        discounted movie tickets
                        <br />
                        and vouchers purchased
                      </p>
                    </div>
                    <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                        Close to
                      </p>
                      <p aria-label="12K" style={{ margin: "0", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap" }}>
                        <T v={v.mbv?.c6} />
                      </p>
                      <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                        complimentary movie
                        <br />
                        tickets given away
                      </p>
                    </div>
                  </div>
                  <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
                    Members enjoyed daily discounts and a 1-for-1 weekend movie ticket deal at Shaw Theatres, along with complimentary ticket giveaways to watch blockbuster movies throughout the year. They also enjoyed up to 20% off on a variety of concerts, musicals and events.
                  </p>
                  <div style={{ paddingTop: "32px", display: "flex", gap: "24px", alignItems: "flex-start" }}>
                    <div className="mbi" style={{ flex: "1 0 0", minWidth: "0", aspectRatio: "1", overflow: "hidden" }}>
                      <img src="./assets/mb-mv3.jpg" alt={"SAFRA Members’ Exclusive movie deals: daily discounts, 1-for-1 weekend tickets, Free Fridays and voucher deals"} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="mbi" style={{ flex: "1 0 0", minWidth: "0", aspectRatio: "1", overflow: "hidden" }}>
                      <img src="./assets/mb-mv1.jpg" alt={"Disney On Ice Magic in the Stars: SAFRA members enjoy 12% off"} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="mbi" style={{ flex: "1 0 0", minWidth: "0", aspectRatio: "1", overflow: "hidden" }}>
                      <img src="./assets/mb-mv2.jpg" alt={"Singapore Festival of Football: SAFRA exclusive 20% off Arsenal vs AC Milan tickets"} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div id={screenId("mb", 3)} className={`mbs ${s(v.mbv?.dv3)}`} style={{ position: "relative", zIndex: "4", marginTop: "-32px", width: "772px", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", gap: "40px", borderRadius: "16px", background: "#272C3F" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.de3} onClick={v.mbTab3} style={{ display: "flex", alignItems: "center", gap: "24px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb2-ic-travel.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                    <span style={{ flex: "1 1 auto", minWidth: "0", fontSize: "24px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "nowrap" }}>
                      {"Travel, Staycations & Local Attractions"}
                    </span>
                    <img className="mbpl" src={v.mbv?.de3 ? "./assets/mb-minus.svg" : "./assets/mb-plus.svg"} alt="" aria-hidden="true" width="40" height="40" style={{ display: "block", flex: "none" }} />
                  </button>
                </h3>
                <div className="mbc" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "16px", alignItems: "stretch" }}>
                    <div style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px", borderRadius: "8px", background: "#313851", color: "#FFFFFF", lineHeight: "1.4" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.64px" }}>
                            Up to
                          </p>
                          <p aria-label="60% off" style={{ margin: "0", fontSize: "44px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.mbv?.c7} /><span style={{ fontSize: "28px" }}>% off</span>
                          </p>
                        </div>
                        <img src="./assets/mb-tv-plane.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                      </div>
                      <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                        on travel booking platforms
                      </p>
                    </div>
                    <div style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px", borderRadius: "8px", background: "#313851", color: "#FFFFFF", lineHeight: "1.4" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.64px" }}>
                            Up to
                          </p>
                          <p aria-label="63% off" style={{ margin: "0", fontSize: "44px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.mbv?.c8} /><span style={{ fontSize: "28px" }}>% off</span>
                          </p>
                        </div>
                        <img src="./assets/mb-tv-hotel.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                      </div>
                      <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                        on local and overseas accommodations
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "16px", alignItems: "stretch" }}>
                    <div style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px", borderRadius: "8px", background: "#313851", color: "#FFFFFF", lineHeight: "1.4" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.64px" }}>
                            Free
                          </p>
                          <p style={{ margin: "0", fontSize: "26px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "0" }}>
                            Upgrades, onboard
                            <br />
                            {"credits & deals"}
                          </p>
                        </div>
                        <img src="./assets/mb-tv-ship.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                      </div>
                      <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                        on cruises
                      </p>
                    </div>
                    <div style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px", borderRadius: "8px", background: "#313851", color: "#FFFFFF", lineHeight: "1.4" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.64px" }}>
                            Up to
                          </p>
                          <p aria-label="30% off" style={{ margin: "0", fontSize: "44px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.mbv?.c9} /><span style={{ fontSize: "28px" }}>% off</span>
                          </p>
                        </div>
                        <img src="./assets/mb-tv-wheel2.png" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                      </div>
                      <p style={{ margin: "0", fontSize: "16px", letterSpacing: "0.32px" }}>
                        on admission tickets to local attractions
                      </p>
                    </div>
                  </div>
                  </div>
                  <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
                    Members unlocked exclusive deals that made travel and recreation more affordable.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
        <section id={SECTION_IDS.fc1} className="s15" aria-labelledby="fc-title" style={{ position: "absolute", left: "0", top: "1818px", width: "1440px", height: "1613px", overflow: "hidden", clipPath: "inset(0 calc(-1 * var(--gx, 0px)))", background: "#272C3F", borderImage: "linear-gradient(#272C3F, #272C3F) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          {/* Figma 2110:7585: L2 header (back + next), title left-aligned at 232, cards from 339 */}
          <button className="bkb fcbk" type="button" data-z="1" aria-label="Back to the topics" onClick={v.backFc} style={{ position: "absolute", left: "64px", top: "48px", width: "64px", height: "64px", padding: "0", border: "1.5px solid #FFFFFF", borderRadius: "80px", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box", zIndex: "3" }}>
            <svg width="38" height="32" viewBox="0 0 38 32" fill="none" aria-hidden="true">
              <path d="M36.5 16H2.5M16 2.5 2.5 16 16 29.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="nxb fcnx" style={{ position: "absolute", right: "64px", top: "88px", height: "24px", margin: "0", fontSize: "20px", fontWeight: "600", lineHeight: "1.2", textTransform: "uppercase", whiteSpace: "nowrap", color: "#6E778B", pointerEvents: "none" }}>
            Next: Looking forward
          </p>
          <div style={{ position: "absolute", left: "104px", top: "232px", width: "1232px", textAlign: "left" }}>
            <h2 id="fc-title" className="fck fc1k" style={{ "--d": ".45s", margin: "0", fontSize: "56px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "1.12px", textTransform: "uppercase" }}>
              <span style={{ background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone" }}>
                {"Enhancing SAFRA Clubs & Facilities"}
              </span>
            </h2>
          </div>
          <div className="fci fcin fc1k" style={{ "--d": ".75s", "--r": "-3deg", "--fx": "-180px", "--fr": "-12deg", position: "absolute", left: "104px", top: "359.2px", width: "788px", height: "525.4px" }}>
            <img className="fcp" src="./assets/fc-gym.jpg" alt="EnergyOne Gym at SAFRA Toa Payoh with its illuminated ceiling sign, free weights and training zones" style={{ display: "block", width: "788px", height: "525.4px", borderRadius: "24px", objectFit: "cover" }} />
          </div>
          <article className="fcin fc1k" style={{ "--d": ".95s", "--r": "0deg", "--fx": "180px", "--fr": "6deg", position: "absolute", left: "812px", top: "418.5px", width: "524px", height: "366px", boxSizing: "border-box", padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px", borderRadius: "16px", background: "#000722" }}>
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141" }}>
              Elevated experience
              <br />
              at EnergyOne Gym
            </h3>
            <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.8", color: "#DDDDDD", opacity: ".8" }}>
              The gym at SAFRA Toa Payoh was enhanced with redesigned workout zones, new functional training equipment, Booty Builder machines and refreshed amenities to improve members’ fitness experience.
            </p>
          </article>
          <div className="fci fcin fc2k" style={{ "--d": ".35s", "--r": "2deg", "--fx": "180px", "--fr": "10deg", position: "absolute", left: "548px", top: "917.6px", width: "788px", height: "518.3px" }}>
            <img className="fcp" src="./assets/fc-cmpb-cafe.jpg" alt="Diners at the new SAFRA café lounge at Central Manpower Base" style={{ display: "block", width: "788px", height: "518.3px", borderRadius: "24px", objectFit: "cover" }} />
          </div>
          <div className="fci fcin fc2k" style={{ "--d": ".6s", "--r": "-4deg", "--fx": "140px", "--fr": "-14deg", position: "absolute", left: "1064px", top: "1296px", width: "320px", height: "213px" }}>
            <img className="fcp" src="./assets/fc-cmpb-lounge.jpg" alt="The SAFRA@CMPB lounge with sofas and a membership promotion screen" style={{ display: "block", width: "320px", height: "213px", borderRadius: "16px", objectFit: "cover" }} />
          </div>
          <article className="fcin fc2k" style={{ "--d": ".5s", "--r": "0deg", "--fx": "-180px", "--fr": "-6deg", position: "absolute", left: "104px", top: "983.5px", width: "524px", height: "366px", boxSizing: "border-box", padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px", borderRadius: "16px", background: "#000722" }}>
            <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.48px", color: "#F34141" }}>
              Launch of SAFRA@CMPB
            </h3>
            <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.8", color: "#DDDDDD", opacity: ".8" }}>
              A new café lounge was opened at the new Central Manpower Base (CMPB) to provide a cosy place where pre-enlistees, national servicemen and MINDEF staff can recharge, socialise and get to know more about SAFRA.
            </p>
          </article>
        </section>
        <section className="s11" hidden aria-labelledby="fy-title" style={{ position: "absolute", left: "0", top: "2718px", width: "1440px", height: "900px", overflow: "hidden", background: "linear-gradient(123.69deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", borderImage: "linear-gradient(123.69deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <div style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "1207px", transformOrigin: "0 0", transform: "translate(144px, -40px) scale(0.8)" }}>
            <h2 id="fy-title" className="fyk" style={{ "--d": ".55s", position: "absolute", left: "0", top: "104px", width: "1440px", margin: "0", textAlign: "center", fontSize: "56px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "1.12px", textTransform: "uppercase", color: "#FFFFFF" }}>
              Our year in summary
            </h2>
            <p className="fyk" style={{ "--d": ".7s", position: "absolute", left: "0", top: "179px", width: "1440px", margin: "0", textAlign: "center", fontSize: "24px", fontWeight: "400", lineHeight: "1.6", letterSpacing: "0.48px", color: "#FFFFFF" }}>
              A look at SAFRA’s financial performance for FY2025/26
            </p>
            <div style={{ position: "absolute", left: "108.83px", top: "269.41px", width: "394px", height: "380px", transform: "rotate(1deg)" }}>
              <article className="fyk fyc" style={{ "--d": "1.00s", width: "100%", minHeight: "100%", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px", borderRadius: "16px", background: "#FFFFFF" }}>
                <div style={{ width: "100%", fontWeight: "500", lineHeight: "1.4" }}>
                  <p style={{ margin: "0 0 -4px", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} aria-label="$134.6M">
                    <T v={v.fyv?.n0} />
                  </p>
                  <p style={{ margin: "0", fontSize: "24px", color: "#272C3F" }}>
                    total income
                  </p>
                </div>
                <p style={{ margin: "0", padding: "8px 16px", borderRadius: "4px", background: "#D5EAFF", fontSize: "20px", fontWeight: "600", lineHeight: "1.6", color: "#272C3F", whiteSpace: "nowrap" }}>
                  ↑ 4.9% from 2024/25
                </p>
                <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#272C3F", opacity: ".8" }}>
                  Income increased by $6.3M, mainly from media, rental, facilities and gym.
                </p>
              </article>
            </div>
            <div style={{ position: "absolute", left: "523.48px", top: "269.41px", width: "394px", height: "380px", transform: "rotate(0deg)" }}>
              <article className="fyk fyc" style={{ "--d": "1.08s", width: "100%", minHeight: "100%", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px", borderRadius: "16px", background: "#FFFFFF" }}>
                <div style={{ width: "100%", fontWeight: "500", lineHeight: "1.4" }}>
                  <p style={{ margin: "0 0 -4px", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} aria-label="$154.2M">
                    <T v={v.fyv?.n1} />
                  </p>
                  <p style={{ margin: "0", fontSize: "24px", color: "#272C3F" }}>
                    total expenditure
                  </p>
                </div>
                <p style={{ margin: "0", padding: "8px 16px", borderRadius: "4px", background: "#D5EAFF", fontSize: "20px", fontWeight: "600", lineHeight: "1.6", color: "#272C3F", whiteSpace: "nowrap" }}>
                  ↑ 10.3% from 2024/25
                </p>
                <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#272C3F", opacity: ".8" }}>
                  Expenditure increased by $14.4M, due to higher production and manpower costs.
                </p>
              </article>
            </div>
            <div style={{ position: "absolute", left: "944.79px", top: "275.29px", width: "394px", height: "382px", transform: "rotate(-1deg)" }}>
              <article className="fyk fyc" style={{ "--d": "1.16s", width: "100%", minHeight: "100%", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px", borderRadius: "16px", background: "#FFFFFF" }}>
                <div style={{ width: "100%", fontWeight: "500", lineHeight: "1.4" }}>
                  <p style={{ margin: "0 0 -4px", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} aria-label="$19.6M">
                    <T v={v.fyv?.n2} />
                  </p>
                  <p style={{ margin: "0", fontSize: "24px", color: "#272C3F" }}>
                    deficit before
                    <br />
                    government grants
                  </p>
                </div>
                <p style={{ margin: "0", padding: "8px 16px", borderRadius: "4px", background: "#D5EAFF", fontSize: "20px", fontWeight: "600", lineHeight: "1.6", color: "#272C3F", whiteSpace: "nowrap" }}>
                  Was $11.5M in 2024/25
                </p>
                <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#272C3F", opacity: ".8" }}>
                  Reflects the increase in expenditure outpacing income growth.
                </p>
              </article>
            </div>
            <div style={{ position: "absolute", left: "98.43px", top: "684.57px", width: "394px", height: "412px", transform: "rotate(0deg)" }}>
              <article className="fyk fyc" style={{ "--d": "1.24s", width: "100%", minHeight: "100%", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px", borderRadius: "16px", background: "#FFFFFF" }}>
                <div style={{ width: "100%", fontWeight: "500", lineHeight: "1.4" }}>
                  <p style={{ margin: "0 0 -4px", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} aria-label="$20.9M">
                    <T v={v.fyv?.n3} />
                  </p>
                  <p style={{ margin: "0", fontSize: "24px", color: "#272C3F" }}>
                    government grants received
                  </p>
                </div>
                <p style={{ margin: "0", padding: "8px 16px", borderRadius: "4px", background: "#D5EAFF", fontSize: "20px", fontWeight: "600", lineHeight: "1.6", color: "#272C3F", whiteSpace: "nowrap" }}>
                  ↑ $2M from 2024/25
                </p>
                <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#272C3F", opacity: ".8" }}>
                  Government grants received were higher than the previous financial year.
                </p>
              </article>
            </div>
            <div style={{ position: "absolute", left: "537.88px", top: "684.57px", width: "394px", height: "412px", transform: "rotate(2deg)" }}>
              <article className="fyk fyc" style={{ "--d": "1.32s", width: "100%", minHeight: "100%", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px", borderRadius: "16px", background: "#FFFFFF" }}>
                <div style={{ width: "100%", fontWeight: "500", lineHeight: "1.4" }}>
                  <p style={{ margin: "0 0 -4px", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} aria-label="$1.9M">
                    <T v={v.fyv?.n4} />
                  </p>
                  <p style={{ margin: "0", fontSize: "24px", color: "#272C3F" }}>
                    net surplus
                  </p>
                </div>
                <p style={{ margin: "0", padding: "8px 16px", borderRadius: "4px", background: "#D5EAFF", fontSize: "20px", fontWeight: "600", lineHeight: "1.6", color: "#272C3F", whiteSpace: "nowrap" }}>
                  Was $8.1M in 2024/25
                </p>
                <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#272C3F", opacity: ".8" }}>
                  After government grants, amortisation of development fund and income tax, the Group recorded a net surplus for the year.
                </p>
              </article>
            </div>
            <div style={{ position: "absolute", left: "948.57px", top: "684.57px", width: "394px", height: "412px", transform: "rotate(0deg)" }}>
              <article className="fyk fyc" style={{ "--d": "1.40s", width: "100%", minHeight: "100%", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px", borderRadius: "16px", background: "#FFFFFF" }}>
                <div style={{ width: "100%", fontWeight: "500", lineHeight: "1.4" }}>
                  <p style={{ margin: "0 0 -4px", fontSize: "56px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }} aria-label="$405.5M">
                    <T v={v.fyv?.n5} />
                  </p>
                  <p style={{ margin: "0", fontSize: "24px", color: "#272C3F" }}>
                    total reserves
                  </p>
                </div>
                <p style={{ margin: "0", padding: "8px 16px", borderRadius: "4px", background: "#D5EAFF", fontSize: "20px", fontWeight: "600", lineHeight: "1.6", color: "#272C3F", whiteSpace: "nowrap" }}>
                  ↓ 0.3% from 2024/25
                </p>
                <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#272C3F", opacity: ".8" }}>
                  Reserves remain set aside for future developments, upgrading projects and programmes supporting NSmen and their families.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id={SECTION_IDS.wc} className="s12" aria-labelledby="wc-title" style={{ position: "absolute", left: "0", top: "2718px", width: "1440px", height: "900px", clipPath: "inset(0 calc(-1 * var(--gx, 0px)))", background: "#272C3F", borderImage: "linear-gradient(#272C3F, #272C3F) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <h2 id="wc-title" aria-label="The year may be over. We’re building for the future." style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "684px", margin: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", fontWeight: "400", textAlign: "center" }}>
            <span className="t12 t12a" style={{ display: "block", fontSize: "64px", fontWeight: "400", lineHeight: "1.1", letterSpacing: "1.28px", color: "#6E778B" }}>
              <span className="hv" aria-hidden="true" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                <span className="lt">
                  T
                </span>
                <span className="lt">
                  h
                </span>
                <span className="lt">
                  e
                </span>
                <span className="lt">
                  {" "}
                </span>
                <span className="lt">
                  y
                </span>
                <span className="lt">
                  e
                </span>
                <span className="lt">
                  a
                </span>
                <span className="lt">
                  r
                </span>
                <span className="lt">
                  {" "}
                </span>
                <span className="lt">
                  m
                </span>
                <span className="lt">
                  a
                </span>
                <span className="lt">
                  y
                </span>
                <span className="lt">
                  {" "}
                </span>
                <span className="lt">
                  b
                </span>
                <span className="lt">
                  e
                </span>
                <span className="lt">
                  {" "}
                </span>
                <span className="lt">
                  o
                </span>
                <span className="lt">
                  v
                </span>
                <span className="lt">
                  e
                </span>
                <span className="lt">
                  r
                </span>
                <span className="lt">
                  .
                </span>
              </span>
            </span>
            <span className="t12 t12b" style={{ display: "block", paddingBottom: ".12em", fontSize: "80px", fontWeight: "400", lineHeight: "1.1", letterSpacing: "1.6px" }}>
              <span className="hv" data-g="1" aria-hidden="true" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                <span className="lt hvg">
                  W
                </span>
                <span className="lt hvg">
                  e
                </span>
                <span className="lt hvg">
                  ’
                </span>
                <span className="lt hvg">
                  r
                </span>
                <span className="lt hvg">
                  e
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  b
                </span>
                <span className="lt hvg">
                  u
                </span>
                <span className="lt hvg">
                  i
                </span>
                <span className="lt hvg">
                  l
                </span>
                <span className="lt hvg">
                  d
                </span>
                <span className="lt hvg">
                  i
                </span>
                <span className="lt hvg">
                  n
                </span>
                <span className="lt hvg">
                  g
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  f
                </span>
                <span className="lt hvg">
                  o
                </span>
                <span className="lt hvg">
                  r
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  t
                </span>
                <span className="lt hvg">
                  h
                </span>
                <span className="lt hvg">
                  e
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  f
                </span>
                <span className="lt hvg">
                  u
                </span>
                <span className="lt hvg">
                  t
                </span>
                <span className="lt hvg">
                  u
                </span>
                <span className="lt hvg">
                  r
                </span>
                <span className="lt hvg">
                  e
                </span>
                <span className="lt hvg">
                  .
                </span>
              </span>
            </span>
          </h2>
          <svg className="tg2" hidden aria-hidden="true" style={{ position: "absolute", left: `${-(v.gx || 0)}px`, top: "684px", width: `${1440 + 2 * (v.gx || 0)}px`, height: "217px", display: "block" }} viewBox={`${-(v.gx || 0)} 0 ${1440 + 2 * (v.gx || 0)} 217`} preserveAspectRatio="none">
            <path fill="#18212A" d={bleedPath(TONGUE, v.gx)} />
          </svg>
          <button className="cue2" hidden type="button" aria-label="Scroll down to see what's next for SAFRA" onClick={v.next} style={{ position: "absolute", left: "642px", top: "712px", width: "160px", height: "160px", padding: "0", border: "0", borderRadius: "50%", background: "transparent", cursor: "pointer" }}>
            <svg width="160" height="160" viewBox="0 0 160 160" style={{ display: "block", overflow: "visible" }}>
              <defs>
                <linearGradient id="cue2G" x1="10" y1="80" x2="150" y2="80" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#6452A4" />
                  <stop offset=".55" stopColor="#F04290" />
                  <stop offset="1" stopColor="#F68C45" />
                </linearGradient>
                <linearGradient id="dn2G" x1="0" y1="52" x2="0" y2="106" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#8D4FA0" />
                  <stop offset=".55" stopColor="#F04290" />
                  <stop offset="1" stopColor="#F5765E" />
                </linearGradient>
                <path id="cue2P" d="M80 80 m-64 0 a64 64 0 1 0 128 0 a64 64 0 1 0 -128 0" />
              </defs>
              <g className="txt">
                <text fontSize="16" fontFamily="'Google Sans Flex','Google Sans',system-ui,sans-serif" fill="url(#cue2G)">
                  <textPath href="#cue2P" startOffset="10" textLength="382" lengthAdjust="spacing">
                    {"What’s next for SAFRA  •  What’s next for SAFRA  •"}
                  </textPath>
                </text>
              </g>
              <g className="dn">
                <path d="M80 56 V102" stroke="url(#dn2G)" strokeWidth={v.lw} strokeLinecap="butt" fill="none" />
                <path d="M62 86 L80 104 L98 86" stroke="url(#dn2G)" strokeWidth={v.lw} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" fill="none" />
              </g>
            </svg>
          </button>
        </section>
        <section className="s13" hidden aria-labelledby="nx-title" style={{ position: "absolute", left: "0", top: "3618px", width: "1440px", height: "900px", overflow: "hidden", background: "#18212A", borderImage: "linear-gradient(#18212A, #18212A) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <div style={{ position: "absolute", left: "104px", top: "120px", width: "1232px", display: "flex", flexDirection: "column", gap: "16px", textAlign: "center" }}>
            <h2 id="nx-title" className="nxk" style={{ "--d": ".55s", margin: "0", fontSize: "56px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "1.12px", textTransform: "uppercase" }}>
              <span style={{ background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Looking forward
              </span>
            </h2>
            <p className="nxk" style={{ "--d": ".7s", margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.6", letterSpacing: "0.48px", color: "#DDDDDD" }}>
              Continuing to strengthen support for NSmen and their families,
              <br />
              while creating more ways for the wider community to understand and contribute to National Service.
            </p>
          </div>
          <nav className="nxk" role="tablist" aria-label="Looking forward" style={{ "--d": ".85s", position: "absolute", left: "104px", top: "328px", width: "393px" }}>
            <span aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "1px", height: "192px", background: "#AAAAAA" }} />
            <span className="nxi" aria-hidden="true" style={{ top: `${s(v.nxv?.top)}px` }} />
            <button className={`nxt ${s(v.nxv?.t0)}`} type="button" role="tab" aria-selected={v.nxv?.a0} onClick={v.nxTab0}>
              <span className="nxl">
                Bringing defence closer
              </span>
            </button>
            <button className={`nxt ${s(v.nxv?.t1)}`} type="button" role="tab" aria-selected={v.nxv?.a1} onClick={v.nxTab1}>
              <span className="nxl">
                Creating better spaces
              </span>
            </button>
            <button className={`nxt ${s(v.nxv?.t2)}`} type="button" role="tab" aria-selected={v.nxv?.a2} onClick={v.nxTab2}>
              <span className="nxl">
                Making visits seamless
              </span>
            </button>
          </nav>
          <div className="nxk" style={{ "--d": "1s", position: "absolute", left: "545px", top: "328px", width: "791px", bottom: "0" }}>
            <div className="nxs" style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
              <div style={{ position: "relative", paddingBottom: "72px" }}>
                <div className={`nxp ${s(v.nxv?.p0)}`} style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "8px" }}>
                  <article style={{ boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", borderRadius: "16px", background: "#272C3F", gap: "24px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                      Expanding NS Experience Camps
                    </h3>
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <p style={{ margin: "0", fontSize: "56px", fontWeight: "400", letterSpacing: "0", lineHeight: "1.4", color: "#EEEEEE" }}>
                          3,000
                        </p>
                        <p style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.4", color: "#EEEEEE" }}>
                          participants targeted
                        </p>
                      </div>
                      <p style={{ flex: "1 0 0", minWidth: "0", margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                        More families, children and women can experience National Service through hands-on, NS-inspired activities.
                      </p>
                    </div>
                  </article>
                  <article style={{ boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", borderRadius: "16px", background: "#272C3F", gap: "24px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                      Taking NS-inspired fitness further
                    </h3>
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <p style={{ margin: "0", fontSize: "56px", fontWeight: "400", letterSpacing: "0", lineHeight: "1.4", color: "#EEEEEE" }}>
                          1,300+
                        </p>
                        <p style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.4", color: "#EEEEEE" }}>
                          participants expected
                        </p>
                      </div>
                      <p style={{ flex: "1 0 0", minWidth: "0", margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                        The inaugural FitX Challenge brings people together through
                        <br />
                        NS-inspired obstacles and functional fitness.
                      </p>
                    </div>
                  </article>
                  <article style={{ boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", borderRadius: "16px", background: "#272C3F", gap: "16px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                      Bringing defence into community
                    </h3>
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <p style={{ margin: "0", fontSize: "56px", fontWeight: "400", letterSpacing: "0", lineHeight: "1.4", color: "#EEEEEE" }}>
                          2027
                        </p>
                        <p style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.4", color: "#EEEEEE" }}>
                          community activities
                        </p>
                      </div>
                      <p style={{ flex: "1 0 0", minWidth: "0", margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                        Family-friendly activities and hands-on experiences will bring defence closer to the community.
                        <br />
                        <br />
                      </p>
                    </div>
                  </article>
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <article style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", borderRadius: "16px", background: "#272C3F", gap: "24px" }}>
                      <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                        Creating more ways to contribute
                      </h3>
                      <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                        The SG Defence Volunteer Network gives volunteers more ways to contribute their skills towards defence and support NSmen and families.
                      </p>
                    </article>
                    <article style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", borderRadius: "16px", background: "#272C3F", gap: "24px" }}>
                      <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                        Making defence part of everyday spaces
                      </h3>
                      <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                        The upcoming Defence Engagement Gallery brings Singapore’s defence story to life through immersive and interactive experiences.
                      </p>
                    </article>
                  </div>
                </div>
                <div className={`nxp ${s(v.nxv?.px)}`}>
                  <article style={{ boxSizing: "border-box", padding: "32px", display: "flex", flexDirection: "column", borderRadius: "16px", background: "#272C3F", gap: "24px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                      <T v={v.nxv?.name} />
                    </h3>
                    <p style={{ margin: "0", fontSize: "20px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                      Content for this topic is still to come.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id={SECTION_IDS.end} className="s14" aria-labelledby="end-title" style={{ position: "absolute", left: "0", top: "3618px", width: "1440px", height: "900px", overflow: "hidden", background: "linear-gradient(90deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%)", borderImage: "linear-gradient(90deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%) 0 fill / 0 / var(--gy, 0px) var(--gx, 0px)" }}>
          <h2 id="end-title" className="enk" style={{ "--d": ".55s", position: "absolute", left: "104px", top: "325px", margin: "0", fontSize: "56px", fontWeight: "600", lineHeight: "64px", letterSpacing: "0.01em", color: "#FFFFFF" }}>
            ONE YEAR.
            <br />
            MANY CONNECTIONS.
            <br />
            ONE SHARED PURPOSE.
          </h2>
          <div style={{ position: "absolute", left: "838px", top: "285px", width: "500px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "48px" }}>
            <p className="enk" style={{ "--d": ".75s", width: "500px", margin: "0", fontSize: "22px", lineHeight: "37px", color: "#FFFFFF" }}>
              From supporting NSmen and their families to strengthening community ties and our collective commitment to defence, SAFRA continues to bring people together through National Service.
            </p>
            <a className="enk dlb" href={import.meta.env.URL_PDF} target="_blank" rel="noopener noreferrer" style={{ "--d": ".95s", width: "499px", height: "100px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "22px", padding: "0 30px", borderRadius: "16px", background: "#FFFFFF", textDecoration: "none" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" style={{ flex: "none" }}>
                <defs>
                  <linearGradient id="dlg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#C0469A" />
                    <stop offset="1" stopColor="#F3606F" />
                  </linearGradient>
                </defs>
                <path d="M14 3v13M8.5 11l5.5 5.5 5.5-5.5M3.5 19v4.5h21V19" fill="none" stroke="url(#dlg)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: "26px", fontWeight: "600", lineHeight: "34px", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 22%, #E3449A 42%, #F04290 55%, #F3606F 78%, #F68C45 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                DOWNLOAD FULL
                <br />
                2025/26 ANNUAL REPORT
              </span>
            </a>
          </div>
        </section>
        <span className="bar3w" aria-hidden="true" style={{ "--dx": `${s(v.bar3?.dx)}px`, "--k": `${s(v.bar3?.k)}`, position: "absolute", left: `${s(v.bar3?.x)}px`, top: `${s(v.bar3?.y)}px`, display: "block", width: `${s(v.bar3?.w)}px`, height: `${s(v.bar3?.h)}px`, pointerEvents: "none" }}>
          <span className="bar3s" style={{ position: "absolute", inset: "0", display: "block", transform: `scale(${s(v.bar3?.sx)}, ${s(v.bar3?.sy)})` }}>
            <span className="bar3" style={{ position: "absolute", inset: "0", display: "block", background: "linear-gradient(180deg, #DD4493 0%, #E2448F 55%, #E9468D 100%)" }} />
          </span>
        </span>
        <div id={SECTION_IDS.tg} className="glance" style={{ position: "absolute", left: `${s(v.head?.x)}px`, top: `${s(v.head?.y)}px`, transformOrigin: `${s(v.head?.ox)}px ${s(v.head?.oy)}px`, transform: `translateY(${s(v.head?.ty)}px) scale(${s(v.head?.s)})`, pointerEvents: "none" }}>
          <h2 id="glance-title" className="hd" style={{ "--wl": `${s(v.wipe?.l)}%`, "--wr": `${s(v.wipe?.r)}%`, margin: "0", whiteSpace: "nowrap", fontSize: "72px", fontWeight: "500", lineHeight: "1", letterSpacing: "0.005em", textTransform: "uppercase", background: "linear-gradient(90deg, #6C51A2 0%, #B0489E 32%, #E8448F 50%, #F3606F 74%, #F68A49 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
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
        <div className="lb-media" style={{ position: "absolute", left: "64px", top: "142px", width: "1312px", height: "590px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img className={`lb-img ${s(v.lbv?.imgCls)}`} key={v.lbv?.gk} src={v.lbv?.src} alt={v.lbv?.alt} style={{ height: "590px", width: "auto", maxWidth: "1312px", objectFit: "contain", display: "block" }} />
          {v.lbv?.vid ? <video className="lb-vid" key={v.lbv?.vid} src={v.lbv?.vid} poster={v.lbv?.poster} aria-label={v.lbv?.vidT} controls autoPlay playsInline preload="auto" style={{ position: "absolute", left: "131.5px", top: "0", width: "1049px", height: "590px", border: "0", borderRadius: "0", background: "#000" , objectFit: "contain" }} /> : null}
        </div>
        <div className={`lb-row ${s(v.lbv?.tv)}`} style={{ position: "absolute", left: "0", top: "772px", width: "1440px", display: "flex", justifyContent: "center", gap: "16px" }}>
          <svg aria-hidden="true" width="0" height="0" style={{ position: "absolute" }}><defs><linearGradient id="lbPlayG" x1="2" y1="24" x2="46" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#6252A4" /><stop offset="0.490385" stopColor="#F14192" /><stop offset="0.927885" stopColor="#F6765D" /><stop offset="0.9999" stopColor="#F69141" /></linearGradient></defs></svg>
          <button className={`lb-t ${s(v.lbv?.c0)}`} type="button" aria-label="Photo 1" onClick={v.lbT0} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-0`} src={v.lbv?.t0} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c1)}`} type="button" aria-label="Photo 2" onClick={v.lbT1} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-1`} src={v.lbv?.t1} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c2)}`} type="button" aria-label="Photo 3" onClick={v.lbT2} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-2`} src={v.lbv?.t2} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c3)}`} type="button" aria-label="Photo 4" onClick={v.lbT3} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-3`} src={v.lbv?.t3} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c4)}`} type="button" aria-label="Photo 5" onClick={v.lbT4} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-4`} src={v.lbv?.t4} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c5)}`} type="button" aria-label="Photo 6" onClick={v.lbT5} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-5`} src={v.lbv?.t5} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c6)}`} type="button" aria-label="Photo 7" onClick={v.lbT6} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-6`} src={v.lbv?.t6} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c7)}`} type="button" aria-label="Photo 8" onClick={v.lbT7} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-7`} src={v.lbv?.t7} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c8)}`} type="button" aria-label="Photo 9" onClick={v.lbT8} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-8`} src={v.lbv?.t8} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c9)}`} type="button" aria-label="Photo 10" onClick={v.lbT9} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-9`} src={v.lbv?.t9} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c10)}`} type="button" aria-label="Photo 11" onClick={v.lbT10} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-10`} src={v.lbv?.t10} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
          <button className={`lb-t ${s(v.lbv?.c11)}`} type="button" aria-label="Photo 12" onClick={v.lbT11} style={{ position: "relative", width: "88px", height: "88px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img key={`${v.lbv?.gk}-11`} src={v.lbv?.t11} alt="" style={{ width: "88px", height: "88px", objectFit: "cover", display: "block" }} />
            <svg className="lb-tp" aria-hidden="true" width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="url(#lbPlayG)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 2C11.85 2 2 11.85 2 24C2 36.15 11.85 46 24 46C36.15 46 46 36.15 46 24C46 11.85 36.15 2 24 2ZM20 17.6C20 17.01 20.304 16.468 20.792 16.19C21.0291 16.0536 21.3006 15.9885 21.5738 16.0027C21.847 16.0169 22.1103 16.1097 22.332 16.27L31.332 22.67C31.5403 22.8233 31.7095 23.0237 31.8256 23.2549C31.9417 23.486 32.0014 23.7413 32 24C32.0017 24.259 31.9421 24.5147 31.826 24.7462C31.7099 24.9778 31.5406 25.1785 31.332 25.332L22.332 31.732C22.1103 31.8923 21.847 31.9851 21.5738 31.9993C21.3006 32.0135 21.0291 31.9484 20.792 31.812C20.5477 31.6668 20.346 31.4599 20.207 31.212C20.068 30.9642 19.9966 30.6841 20 30.4V17.6Z" fill="#FFFFFF" /></svg>
          </button>
        </div>
        <button className="lb-x" type="button" aria-label="Close gallery" onClick={v.lbClose} style={{ position: "absolute", left: "1366px", top: "22px", width: "52px", height: "52px", padding: "0", border: "0", background: "transparent", cursor: "pointer" }}>
          <svg width="52" height="52" viewBox="1366 22 52 52" aria-hidden="true">
            <rect x="1368" y="24" width="48" height="48" rx="24" fill="none" stroke="#F34141" strokeWidth="3" />
            <path d="M1382.1 38.1L1401.9 57.9M1382.1 57.9L1401.9 38.1" stroke="#F34141" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className={`tabs ${s(v.tabs?.cls)}`} role="tablist" aria-label="Our impact topics">
        <span className="tt-div" aria-hidden="true" style={{ left: "538px" }} />
        <span className="tt-div" aria-hidden="true" style={{ left: "997px" }} />
        <button className={`tt ${s(v.tabs?.s6)}`} type="button" role="tab" aria-selected={v.tabs?.s6sel} onClick={v.tab_s6} style={{ left: "40px" }}>
          <span className="tt-l">
            <span className="tt-g">
              Bringing defence closer
            </span>
          </span>
          <span className="tt-l">
            <span className="tt-g">
              to the community
            </span>
          </span>
        </button>
        <button className={`tt ${s(v.tabs?.s7)}`} type="button" role="tab" aria-selected={v.tabs?.s7sel} onClick={v.tab_s7} style={{ left: "578px" }}>
          <span className="tt-l">
            <span className="tt-g">
              Appreciating
            </span>
          </span>
          <span className="tt-l">
            <span className="tt-g">
              NSmen
            </span>
          </span>
        </button>
        <button className={`tt ${s(v.tabs?.s8)}`} type="button" role="tab" aria-selected={v.tabs?.s8sel} onClick={v.tab_s8} style={{ left: "1037px" }}>
          <span className="tt-l">
            <span className="tt-g">
              Strengthening
            </span>
          </span>
          <span className="tt-l">
            <span className="tt-g">
              bonds
            </span>
          </span>
        </button>
      </div>
      <nav className={`smenu ${s(v.menu?.cls)}`} aria-label="Sections">
        <button className="sm-btn" type="button" aria-label="Open menu" aria-expanded={v.menu?.exp} onClick={v.menuOpen}>
          <svg className="sm-ic sm-ic-w" width="21" height="18" viewBox="0 0 21 18" aria-hidden="true">
            <path d="M1 1h19M1 9h19M1 17h19" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <img className="sm-ic sm-ic-g" src="./assets/mobile-menu.svg" alt="" aria-hidden="true" />
        </button>
        <div className="sm-panel" onClick={v.menuStop}>
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
              <li hidden>
                <button className="nvi" type="button" onClick={v.nav_nx}>
                  Looking forwards
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
      <div className="cur" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "120px", height: "120px", transform: `translate(${s(v.cur?.x)}px, ${s(v.cur?.y)}px)`, opacity: `${s(v.cur?.o)}`, pointerEvents: "none", zIndex: "10" }}>
        <div className="cur-in" style={{ position: "relative", width: "120px", height: "120px", transform: `scale(${s(v.cur?.s)})` }}>
          <div style={{ position: "absolute", left: "0", top: "0", width: "120px", height: "120px", borderRadius: "50%", background: "#F34141" }} />
          <img className="arw" src="./assets/ecab593f3aa08a52a88a40fbfd710038.svg" alt="" style={{ position: "absolute", left: "0", top: "0", width: "120px", height: "120px" }} />
          <img className="ring" src="./assets/c5353b1ebbdc4fab6ae53df32b4380dd.svg" alt="" style={{ position: "absolute", left: "0", top: "0", width: "120px", height: "120px" }} />
        </div>
      </div>
    </div>
    </>
  );
}
