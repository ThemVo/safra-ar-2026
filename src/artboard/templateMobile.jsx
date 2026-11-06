// Markup for the artboard. Generated from the original prototype's template, then kept as plain JSX.
// `v` is the object returned by ArtboardLogic.renderVals(); every {{binding}} of the original reads from it.
import { Fragment } from 'react';
import { T, arr, css, s, bleedPath, tongueM } from './bind.jsx';

// the tab-shaped band under sections 9 and 12; its outer corners sit at the window edges
// Shared gradient for the band → Membership → Clubs & Facilities stretch, in camera coordinates: it runs at 30°
// from the band's top-left corner (y 3402) and reaches full orange at the bottom-right of Clubs & Facilities.
// mobile: the shared gradient starts at the band's top (2532 + 714) and runs at 30° down to Clubs & Facilities' end
const ZONE_GRAD = { x1: 0, y1: 3246, x2: 1338, y2: 4018 };

const TONGUE = 'M719.999 0C762.331 0 799.274 23.3611 818.941 58.046C835.286 86.8717 860.872 115.444 894.009 115.444H1332.24C1369.96 115.444 1388.82 115.444 1403.23 122.877C1415.9 129.415 1426.2 139.848 1432.66 152.679C1440 167.267 1440 178.167 1440 216.361H0C0 178.167 0.00020976 167.267 7.34089 152.679C13.7979 139.848 24.101 129.415 36.7735 122.877C51.1804 115.444 70.0402 115.444 107.76 115.444H545.989C579.126 115.444 604.712 86.8717 621.057 58.046C640.724 23.3611 677.667 0 719.999 0Z';

export default function render(v) {
  return (
    <>
    <div className={`mh ${s(v.lvClass)} ${s(v.dirClass)} ${s(v.freshClass)} ${s(v.stageClass)} ${s(v.s2Class)} ${s(v.s3Class)} ${s(v.viewClass)} ${s(v.go2Class)} ${s(v.go3Class)} ${s(v.s4Class)} ${s(v.go5Class)} ${s(v.postClass)} ${s(v.lgClass)} ${s(v.s6Class)} ${s(v.go6Class)} ${s(v.s7Class)} ${s(v.go7Class)} ${s(v.s8Class)} ${s(v.go8Class)} ${s(v.s9Class)} ${s(v.s10Class)} ${s(v.s11Class)} ${s(v.s12Class)} ${s(v.s13Class)} ${s(v.s14Class)} ${s(v.s15Class)} ${s(v.s16Class)} ${s(v.tgClass)} ${s(v.hdClass)} ${s(v.fcFreeClass)} ${s(v.mClass)}`} onMouseMove={v.move} onMouseLeave={v.leave} onWheel={v.wheel} onClick={v.tap} onTouchStart={v.touchStart} onTouchMove={v.touchMove} onTouchEnd={v.touchEnd} style={{ position: "relative", width: "390px", height: "844px", clipPath: "inset(0 calc(-1 * var(--gx, 0px)))", background: "#272C3F", boxShadow: "0 0 0 var(--gx, 0px) #272C3F", fontFamily: "'Google Sans Flex', 'Google Sans', system-ui, sans-serif", fontWeight: "400", color: "#F3F4F7" }}>
      <div className="cam" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "8192px", transform: `translateY(${s(v.camY)}px)` }}>
        <section className="layer1" aria-label="SAFRA masthead" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "844px", overflow: "hidden", transformOrigin: "50% 80%" }}>
          <div className="layer" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "844px", transformOrigin: "50% 46%" }}>
            <div className="px" style={{ position: "absolute", left: "190px", top: "0px", width: "200px", height: "126px", borderRadius: "12px", overflow: "hidden", transform: `${s(v.pFamily)}` }}>
              <img className="ph ph1" src="./assets/mh-tr.jpg" alt="A father and child crawl under camouflage netting on an obstacle course" style={{ display: "block", width: "200px", height: "126px" }} />
            </div>
            <div className="px" style={{ position: "absolute", left: "16px", top: "96px", width: "150px", height: "95px", borderRadius: "12px", overflow: "hidden", transform: `${s(v.pConcert)}` }}>
              <img className="ph ph2" src="./assets/mh-tl.jpg" alt="A family in red poses with the SAFRA mascot at a National Day picnic" style={{ display: "block", width: "150px", height: "95px" }} />
            </div>
            <div className="px" style={{ position: "absolute", left: "0px", top: "731px", width: "180px", height: "113px", borderRadius: "12px", overflow: "hidden", transform: `${s(v.pKids)}` }}>
              <img className="ph ph3" src="./assets/mh-bl.jpg" alt="Members on exercise bikes in a spin class" style={{ display: "block", width: "180px", height: "113px" }} />
            </div>
            <div className="px" style={{ position: "absolute", left: "266px", top: "766px", width: "124px", height: "78px", borderRadius: "12px", overflow: "hidden", transform: `${s(v.pTyres)}` }}>
              <img className="ph ph4" src="./assets/mh-br.jpg" alt="A group of members holding bowling balls at a bowling alley" style={{ display: "block", width: "124px", height: "78px" }} />
            </div>
          </div>
          <div className="dim" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "844px", background: "#272C3F", pointerEvents: "none" }} />
          <img onLoad={v.hook} src="./assets/ff8847615d28660626f1034069988996.png" alt="" style={{ display: "none" }} />
          <div className="logo" style={{ position: "absolute", left: "16px", top: "396px", width: "358px", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", textAlign: "center", pointerEvents: "none" }}>
            <p className="lgl lg1" style={{ margin: "0", fontSize: "19.5px", fontWeight: "500", lineHeight: "24.4px", color: "#FFFFFF", whiteSpace: "nowrap" }}>
              <span style={{ color: "#F34141" }}>
                SAFRA
              </span>
              {" Annual Report FY 2025/2026"}
            </p>
            <p className="lgl lg2" style={{ margin: "0", padding: "0 .04em", fontSize: "19.5px", fontWeight: "600", lineHeight: "24.4px", whiteSpace: "nowrap", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              KEY HIGHLIGHTS
            </p>
          </div>
          <p className="agm" style={{ display: "none", position: "absolute", left: "0px", top: `${s(v.agmTop)}px`, width: "390px", margin: "0", textAlign: "center", fontSize: "27.2px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", whiteSpace: "nowrap", color: "#6E778B", pointerEvents: "none" }}>
            53
            <sup style={{ fontSize: "0.6em", lineHeight: "0", verticalAlign: "0.45em", marginLeft: "1px" }}>
              rd
            </sup>
            {" SAFRA Annual General Meeting"}
          </p>
          <h1 aria-label="Explore our efforts in strengthening commitment to defence and supporting NSmen’s needs" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "844px", margin: "0", fontWeight: "400", lineHeight: "1", whiteSpace: "nowrap", pointerEvents: "none" }}>
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
        <section className="s2" aria-labelledby="cd-title" style={{ "--cx": `${s(v.bloomX)}px`, position: "absolute", left: "0", top: "0", width: "390px", height: "844px", overflow: "hidden", background: "linear-gradient(122deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%)", borderImage: "linear-gradient(122deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%) 0 fill / 0 / 0 var(--gx, 0px)", display: "none"  }}>
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
        <section className="s3c" aria-labelledby="glance-title" style={{ position: "absolute", left: "0", top: "844px", width: "390px", height: "844px" }}>
          <div className={`sl ${s(v.sl0)}`} aria-label="Membership">
            <div className="sub" style={{ position: "absolute", left: "0", top: "112px", width: "390px", textAlign: "center" }}>
              <h3 style={{ display: "inline-block", margin: "0", padding: "0 .04em .12em", fontSize: "20px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "-0.005em", background: "linear-gradient(90deg, #6C51A2 0%, #B0489E 30%, #E8448F 58%, #F3606F 80%, #F68A49 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Membership
              </h3>
            </div>
            <div className="cd" style={{ "--i": "0", position: "absolute", left: "16px", top: "152px", width: "175px", height: "150px", boxSizing: "border-box", padding: "0 14px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "4.8px", borderRadius: "10px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                Members
              </p>
              <p aria-label="Over 417K" style={{ margin: "0", fontSize: "39.6px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <span style={{ marginRight: "8.4px", fontSize: "13.2px", letterSpacing: "0", verticalAlign: "0.3em" }}>
                  Over
                </span>
                <T v={v.v?.m1} />
              </p>
            </div>
            <div className="cd frame" style={{ "--i": "1", position: "absolute", left: "16px", top: "618px", width: "358px", height: "202px", borderRadius: "10px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-run.jpg" alt="A running group of members in SAFRA singlets posing outdoors at sunset" style={{ display: "block", width: "358px", height: "202px", objectFit: "cover" }} />
            </div>
            <div className="cd frame" style={{ "--i": "2", position: "absolute", left: "16px", top: "310px", width: "358px", height: "300px", borderRadius: "10px", overflow: "hidden" }}>
              <img className="pic" src="./assets/25ac34a7bb7e63a91ebb2d45156f874c.png" alt="Members and their children with a gingerbread mascot at a festive celebration" style={{ display: "block", width: "358px", height: "300px", objectFit: "cover" }} />
            </div>
            <div className="cd" style={{ "--i": "3", position: "absolute", left: "199px", top: "152px", width: "175px", height: "150px", boxSizing: "border-box", padding: "14px 14px 18px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "4.8px", borderRadius: "10px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                Satisfaction Rating
              </p>
              <p aria-label="86%" style={{ margin: "0", fontSize: "39.6px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <T v={v.v?.m2} />
              </p>
            </div>
          </div>
          <div className={`sl ${s(v.sl1)}`} aria-label="Outreach and Engagement">
            <div className="sub" style={{ position: "absolute", left: "0", top: "112px", width: "390px", textAlign: "center" }}>
              <h3 style={{ display: "inline-block", margin: "0", padding: "0 .04em .12em", fontSize: "20px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "-0.005em", background: "linear-gradient(90deg, #6C51A2 0%, #B0489E 30%, #E8448F 58%, #F3606F 80%, #F68A49 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                {"Outreach & Engagement"}
              </h3>
            </div>
            <div className="cd frame" style={{ "--i": "0", position: "absolute", left: "16px", top: "448px", width: "175px", height: "182px", borderRadius: "10px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-bikes.jpg" alt="Young children racing on balance bikes at a SAFRA event" style={{ display: "block", width: "175px", height: "182px", objectFit: "cover" }} />
            </div>
            <div className="cd" style={{ "--i": "1", position: "absolute", left: "16px", top: "152px", width: "175px", height: "140px", boxSizing: "border-box", padding: "14px 14px 16px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "4.8px", borderRadius: "10px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                Participation in SAFRA
                <br />
                Activities
              </p>
              <p aria-label="Over 1.72M" style={{ margin: "0", fontSize: "39.6px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <span style={{ marginRight: "8.4px", fontSize: "13.2px", letterSpacing: "0", verticalAlign: "0.3em" }}>
                  Over
                </span>
                <T v={v.v?.o1} />
              </p>
            </div>
            <div className="cd" style={{ "--i": "5", position: "absolute", left: "16px", top: "300px", width: "175px", height: "140px", boxSizing: "border-box", padding: "14px 14px 16px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "4.8px", borderRadius: "10px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                People Engaged Through
                <br />
                Appreciating NSmen
                <br />
                Initiatives
              </p>
              <p aria-label="Over 75K" style={{ margin: "0", fontSize: "39.6px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <span style={{ marginRight: "8.4px", fontSize: "13.2px", letterSpacing: "0", verticalAlign: "0.3em" }}>
                  Over
                </span>
                <T v={v.v?.o2} />
              </p>
            </div>
            <div className="cd frame" style={{ "--i": "4", position: "absolute", left: "16px", top: "638px", width: "175px", height: "182px", borderRadius: "10px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-card.jpg" alt="A child’s handmade thank-you card with a family photo for an NSman father" style={{ display: "block", width: "175px", height: "182px", objectFit: "cover" }} />
            </div>
            <div className="cd frame" style={{ "--i": "3", position: "absolute", left: "199px", top: "448px", width: "175px", height: "182px", borderRadius: "10px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-blaster.jpg" alt="Children in Army T-shirts trying out water blasters" style={{ display: "block", width: "175px", height: "182px", objectFit: "cover" }} />
            </div>
            <div className="cd" style={{ "--i": "2", position: "absolute", left: "199px", top: "152px", width: "175px", height: "140px", boxSizing: "border-box", padding: "14px 14px 16px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "4.8px", borderRadius: "10px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                Participation in Defence
                <br />
                Outreach Initiatives
              </p>
              <p aria-label="Over 211K" style={{ margin: "0", fontSize: "39.6px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <span style={{ marginRight: "8.4px", fontSize: "13.2px", letterSpacing: "0", verticalAlign: "0.3em" }}>
                  Over
                </span>
                <T v={v.v?.o3} />
              </p>
            </div>
            <div className="cd" style={{ "--i": "6", position: "absolute", left: "199px", top: "300px", width: "175px", height: "140px", boxSizing: "border-box", padding: "14px 14px 16px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "4.8px", borderRadius: "10px", background: "#18212A" }}>
              <p style={{ margin: "0", fontSize: "12px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                Participation in Cohesion
                <br />
                Activities for NS Units
              </p>
              <p aria-label="Over 52K" style={{ margin: "0", fontSize: "39.6px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                <span style={{ marginRight: "8.4px", fontSize: "13.2px", letterSpacing: "0", verticalAlign: "0.3em" }}>
                  Over
                </span>
                <T v={v.v?.o4} />
              </p>
            </div>
            <div className="cd frame" style={{ "--i": "7", position: "absolute", left: "199px", top: "638px", width: "175px", height: "182px", borderRadius: "10px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-group.jpg" alt="A group of NSmen in singlets cheering with snack packs" style={{ display: "block", width: "175px", height: "182px", objectFit: "cover" }} />
            </div>
          </div>
          <div className={`sl ${s(v.sl2)}`} aria-label="Sustainability">
            <div className="sub" style={{ position: "absolute", left: "0", top: "112px", width: "390px", textAlign: "center" }}>
              <h3 style={{ display: "inline-block", margin: "0", padding: "0 .04em .12em", fontSize: "20px", fontWeight: "500", lineHeight: "1.4", letterSpacing: "0", background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Sustainability
              </h3>
            </div>
            <div className="cd frame" style={{ "--i": "0", position: "absolute", left: "16px", top: "152px", width: "358px", height: "150px", borderRadius: "10px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-solar-fy26.jpg" alt="Rooftop solar panels under a blue sky" style={{ display: "block", width: "358px", height: "150px", objectFit: "cover" }} />
            </div>
            <div className="cd" style={{ "--i": "1", position: "absolute", left: "16px", top: "310px", width: "175px", height: "214px", boxSizing: "border-box", padding: "14px", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: "10px", background: "#18212A", overflow: "hidden" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4.8px" }}>
                <p style={{ margin: "0", fontSize: "12px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                  Solar Energy Generated
                </p>
                <p aria-label="1,074 MWh" style={{ margin: "0", fontSize: "26px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                  <T v={v.v?.s1} />
                </p>
                <p style={{ margin: "2.4px 0 0", fontSize: "11px", fontWeight: "400", lineHeight: "1.3", color: "rgba(255,255,255,.92)" }}>
                  Equivalent to the electricity usage of over 320
                  <br />
                  4-room HDB flats for a year
                </p>
              </div>
            </div>
            <div className="cd" style={{ "--i": "2", position: "absolute", left: "199px", top: "310px", width: "175px", height: "214px", boxSizing: "border-box", padding: "14px", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: "10px", background: "#18212A", overflow: "hidden" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4.8px" }}>
                <p style={{ margin: "0", fontSize: "12px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                  Reduction in Carbon Dioxide (CO
                  <sub style={{ fontSize: ".65em", verticalAlign: "-0.25em", lineHeight: "0" }}>
                    2
                  </sub>
                  )
                  <br />
                  Emissions
                </p>
                <p aria-label="432 Tonnes" style={{ margin: "0", fontSize: "26px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                  <T v={v.v?.s2} />
                </p>
                <p style={{ margin: "2.4px 0 0", fontSize: "11px", fontWeight: "400", lineHeight: "1.3", color: "rgba(255,255,255,.92)" }}>
                  Equivalent to the annual CO
                  <sub style={{ fontSize: ".7em", verticalAlign: "-0.25em", lineHeight: "0" }}>
                    2
                  </sub>
                  {" absorption of"}
                  <br />
                  19.8K mature trees
                </p>
              </div>
            </div>
            <div className="cd" style={{ "--i": "3", position: "absolute", left: "16px", top: "532px", width: "358px", height: "120px", boxSizing: "border-box", padding: "14px", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: "10px", background: "#18212A", overflow: "hidden" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4.8px" }}>
                <p style={{ margin: "0", fontSize: "12px", fontWeight: "400", lineHeight: "1.25", color: "#FFFFFF" }}>
                  Number of Solar Panels Across
                  <br />
                  SAFRA Clubs Inclusive of 870 New Panels
                  <br />
                  Installed at SAFRA Yishun
                </p>
                <p aria-label="6,850" style={{ margin: "0", fontSize: "26px", fontWeight: "400", lineHeight: "1.05", letterSpacing: "0", color: "#F34241" }}>
                  <T v={v.v?.s3} />
                </p>
              </div>
            </div>
            <div className="cd frame" style={{ "--i": "4", position: "absolute", left: "16px", top: "660px", width: "358px", height: "160px", borderRadius: "10px", overflow: "hidden" }}>
              <img className="pic" src="./assets/ag-trees-fy26.jpg" alt="Looking up into the green canopy of a large tree" style={{ display: "block", width: "358px", height: "160px", objectFit: "cover" }} />
            </div>
          </div>
          <div className="sweep" aria-hidden="true" style={{ position: "absolute", left: "calc(-1 * var(--gx, 0px))", top: "836px", width: `calc(390px + 2 * var(--gx, 0px))`, height: "6px", transform: `scaleX(${s(v.sweepS)})`, background: "linear-gradient(90deg, #74509F 0%, #F46074 55%, #F68F43 100%)" }} />
        </section>
        <section className="s45" aria-labelledby="t1-title" style={{ position: "absolute", left: "0", top: "1688px", width: "390px", height: "844px", overflow: "hidden" }}>
          <div className="tx" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "220px" }}>
            <h2 id="t1-title" aria-label="The numbers tell our impact. The stories show what it means." style={{ position: "absolute", left: "0", top: "112px", width: "390px", margin: "0", textAlign: "center", fontWeight: "400", lineHeight: "1.12" }}>
              <span className="t4a" aria-hidden="true" style={{ display: "block", fontSize: "18px", color: "#6E778B", whiteSpace: "nowrap" }}>
                {arr(v.L_s4a).map((c, $index) => (
                  <Fragment key={$index}>
                    <span className="lt" style={{ transform: `${s(c?.tf)}` }}>
                      <T v={c?.ch} />
                    </span>
                  </Fragment>
                ))}
              </span>
              <span className="t4b" aria-hidden="true" style={{ display: "inline-block", marginTop: "3px", fontSize: "23.4px", whiteSpace: "nowrap" }}>
                {arr(v.L_s4b).map((c, $index) => (
                  <Fragment key={$index}>
                    <span className="lt gl" style={{ transform: `${s(c?.tf)}`, backgroundImage: "linear-gradient(90deg, #6452A4 0%, #A84A9C 22%, #E8448F 45%, #F3477F 62%, #F3666A 82%, #F68C45 100%)", backgroundSize: `${s(c?.bw)}px 100%`, backgroundPosition: `${s(c?.bx)}px 0` }}>
                      <T v={c?.ch} />
                    </span>
                  </Fragment>
                ))}
              </span>
            </h2>
          </div>
          <nav aria-label="Topics">
            <a className={`tc ${s(v.lv1)}`} href="#dc-title" onClick={v.topic1} aria-label="Bringing defence closer to the community" style={{ "--i": "0", position: "absolute", left: "16px", top: "236px", width: "358px", height: "184px", boxSizing: "border-box", padding: "18px 20px", borderRadius: "16px", textDecoration: "none" }}>
              <svg className="tc-s" aria-hidden="true" width="358" height="184" viewBox="0 0 358 184" style={{ position: "absolute", left: "0", top: "0", overflow: "visible", pointerEvents: "none" }}>
                <defs>
                  <linearGradient id="tcs0" x1="0" y1="0" x2="358" y2="184" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#6452A4" />
                    <stop offset=".45" stopColor="#F04290" />
                    <stop offset="1" stopColor="#F68C45" />
                  </linearGradient>
                </defs>
                <rect className="tc-r tc-tail" x="1.5" y="1.5" width="355" height="181" rx="14.5" pathLength="100" fill="none" stroke="url(#tcs0)" strokeWidth="4" strokeDasharray="46 54" strokeLinecap="round" opacity=".28" />
                <rect className="tc-r tc-head" x="1.5" y="1.5" width="355" height="181" rx="14.5" pathLength="100" fill="none" stroke="url(#tcs0)" strokeWidth="4" strokeDasharray="24 76" strokeLinecap="round" />
              </svg>
              <span className="tc-t" style={{ position: "relative", display: "block", fontSize: "22px", fontWeight: "700", lineHeight: "28px", letterSpacing: "0.012em", textTransform: "uppercase", color: "#A7A9AE" }}>
                Bringing
                <br />
                defence closer
                <br />
                to the
                <br />
                community
                <span className="tc-g" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", paddingBottom: ".1em", background: "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Bringing
                  <br />
                  defence closer
                  <br />
                  to the
                  <br />
                  community
                </span>
              </span>
              <span className="tc-stk" aria-hidden="true" style={{ display: "none" }}>
                <img className="stk" alt="" src="" style={{ display: "none" }} />
                <img className="stk" alt="" src="" style={{ display: "none" }} />
                <img className="stk" alt="" src="" style={{ display: "none" }} />
                <img className="stk" alt="" src="" style={{ display: "none" }} />
              </span>
              <span className="tc-b" style={{ position: "absolute", left: "34px", top: "33px", right: "30px", fontSize: "21px", fontWeight: "400", lineHeight: "40px", letterSpacing: "0", color: "#A7A9AE", display: "none"  }}>
                Fostering a deeper understanding of how the wider community can play a part in Total Defence.
              </span>
              <svg className="tc-i" aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" style={{ position: "absolute", right: "16px", bottom: "16px", overflow: "visible" }}>
                <defs>
                  <linearGradient id="tcg0" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#6452A4" />
                    <stop offset=".55" stopColor="#F04290" />
                    <stop offset="1" stopColor="#F68C45" />
                  </linearGradient>
                </defs>
                <g className="ig">
                  <path d="M12 2.2 4.2 5.1v6.2c0 4.9 3.3 9.1 7.8 10.5 4.5-1.4 7.8-5.6 7.8-10.5V5.1L12 2.2Z" fill="none" stroke="#A7A9AE" strokeWidth="2.1" strokeLinejoin="round" />
                  <path d="M12 6.1 7.6 7.8v3.7c0 2.9 1.9 5.4 4.4 6.3 2.5-.9 4.4-3.4 4.4-6.3V7.8L12 6.1Z" fill="#A7A9AE" />
                </g>
                <g className="ic">
                  <path d="M12 2.2 4.2 5.1v6.2c0 4.9 3.3 9.1 7.8 10.5 4.5-1.4 7.8-5.6 7.8-10.5V5.1L12 2.2Z" fill="none" stroke="url(#tcg0)" strokeWidth="2.1" strokeLinejoin="round" />
                  <path d="M12 6.1 7.6 7.8v3.7c0 2.9 1.9 5.4 4.4 6.3 2.5-.9 4.4-3.4 4.4-6.3V7.8L12 6.1Z" fill="url(#tcg0)" />
                </g>
              </svg>
            </a>
            <a className={`tc ${s(v.lv2)}`} href="#an-title" onClick={v.topic2} aria-label="Appreciating national servicemen" style={{ "--i": "1", position: "absolute", left: "16px", top: "432px", width: "358px", height: "184px", boxSizing: "border-box", padding: "18px 20px", borderRadius: "16px", textDecoration: "none" }}>
              <svg className="tc-s" aria-hidden="true" width="358" height="184" viewBox="0 0 358 184" style={{ position: "absolute", left: "0", top: "0", overflow: "visible", pointerEvents: "none" }}>
                <defs>
                  <linearGradient id="tcs1" x1="0" y1="0" x2="358" y2="184" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#6452A4" />
                    <stop offset=".45" stopColor="#F04290" />
                    <stop offset="1" stopColor="#F68C45" />
                  </linearGradient>
                </defs>
                <rect className="tc-r tc-tail" x="1.5" y="1.5" width="355" height="181" rx="14.5" pathLength="100" fill="none" stroke="url(#tcs1)" strokeWidth="4" strokeDasharray="46 54" strokeLinecap="round" opacity=".28" />
                <rect className="tc-r tc-head" x="1.5" y="1.5" width="355" height="181" rx="14.5" pathLength="100" fill="none" stroke="url(#tcs1)" strokeWidth="4" strokeDasharray="24 76" strokeLinecap="round" />
              </svg>
              <span className="tc-t" style={{ position: "relative", display: "block", fontSize: "22px", fontWeight: "700", lineHeight: "28px", letterSpacing: "0.012em", textTransform: "uppercase", color: "#A7A9AE" }}>
                Appreciating
                <br />
                national
                <br />
                servicemen
                <span className="tc-g" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", paddingBottom: ".1em", background: "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Appreciating
                  <br />
                  national
                  <br />
                  servicemen
                </span>
              </span>
              <span className="tc-stk" aria-hidden="true" style={{ display: "none" }}>
                <img className="stk" alt="" src="" style={{ display: "none" }} />
                <img className="stk" alt="" src="" style={{ display: "none" }} />
                <img className="stk" alt="" src="" style={{ display: "none" }} />
                <img className="stk" alt="" src="" style={{ display: "none" }} />
              </span>
              <span className="tc-b" style={{ position: "absolute", left: "34px", top: "33px", right: "30px", fontSize: "21px", fontWeight: "400", lineHeight: "40px", letterSpacing: "0", color: "#A7A9AE", display: "none"  }}>
                Education institutions and
                <br />
                businesses step up to honour
                <br />
                the ongoing dedication of our
                <br />
                national servicemen.
              </span>
              <svg className="tc-i" aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" style={{ position: "absolute", right: "16px", bottom: "16px", overflow: "visible" }}>
                <defs>
                  <linearGradient id="tcg1" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#6452A4" />
                    <stop offset=".55" stopColor="#F04290" />
                    <stop offset="1" stopColor="#F68C45" />
                  </linearGradient>
                </defs>
                <g className="ig">
                  <path fillRule="evenodd" d="M12 2.5a9.5 9.5 0 0 0-8.3 14.1L2.6 21.4l4.9-1.2A9.5 9.5 0 1 0 12 2.5Zm0 13.6-3.5-3.4a2.1 2.1 0 0 1 3-3l.5.5.5-.5a2.1 2.1 0 0 1 3 3L12 16.1Z" fill="#A7A9AE" />
                </g>
                <g className="ic">
                  <path fillRule="evenodd" d="M12 2.5a9.5 9.5 0 0 0-8.3 14.1L2.6 21.4l4.9-1.2A9.5 9.5 0 1 0 12 2.5Zm0 13.6-3.5-3.4a2.1 2.1 0 0 1 3-3l.5.5.5-.5a2.1 2.1 0 0 1 3 3L12 16.1Z" fill="url(#tcg1)" />
                </g>
              </svg>
            </a>
            <a className={`tc ${s(v.lv3)}`} href="#sb-title" onClick={v.topic3} aria-label="Strengthening bonds" style={{ "--i": "2", position: "absolute", left: "16px", top: "628px", width: "358px", height: "184px", boxSizing: "border-box", padding: "18px 20px", borderRadius: "16px", textDecoration: "none" }}>
              <svg className="tc-s" aria-hidden="true" width="358" height="184" viewBox="0 0 358 184" style={{ position: "absolute", left: "0", top: "0", overflow: "visible", pointerEvents: "none" }}>
                <defs>
                  <linearGradient id="tcs2" x1="0" y1="0" x2="358" y2="184" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#6452A4" />
                    <stop offset=".45" stopColor="#F04290" />
                    <stop offset="1" stopColor="#F68C45" />
                  </linearGradient>
                </defs>
                <rect className="tc-r tc-tail" x="1.5" y="1.5" width="355" height="181" rx="14.5" pathLength="100" fill="none" stroke="url(#tcs2)" strokeWidth="4" strokeDasharray="46 54" strokeLinecap="round" opacity=".28" />
                <rect className="tc-r tc-head" x="1.5" y="1.5" width="355" height="181" rx="14.5" pathLength="100" fill="none" stroke="url(#tcs2)" strokeWidth="4" strokeDasharray="24 76" strokeLinecap="round" />
              </svg>
              <span className="tc-t" style={{ position: "relative", display: "block", fontSize: "22px", fontWeight: "700", lineHeight: "28px", letterSpacing: "0.012em", textTransform: "uppercase", color: "#A7A9AE" }}>
                Strengthening
                <br />
                bonds
                <span className="tc-g" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", paddingBottom: ".1em", background: "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Strengthening
                  <br />
                  bonds
                </span>
              </span>
              <span className="tc-stk" aria-hidden="true" style={{ display: "none" }}>
                <img className="stk" alt="" src="" style={{ display: "none" }} />
                <img className="stk" alt="" src="" style={{ display: "none" }} />
                <img className="stk" alt="" src="" style={{ display: "none" }} />
                <img className="stk" alt="" src="" style={{ display: "none" }} />
              </span>
              <span className="tc-b" style={{ position: "absolute", left: "34px", top: "33px", right: "30px", fontSize: "21px", fontWeight: "400", lineHeight: "40px", letterSpacing: "0", color: "#A7A9AE", display: "none"  }}>
                Forging closer bonds among national servicemen and creating opportunity for quality time with their loved ones.
              </span>
              <svg className="tc-i" aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" style={{ position: "absolute", right: "16px", bottom: "16px", overflow: "visible" }}>
                <defs>
                  <linearGradient id="tcg2" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#6452A4" />
                    <stop offset=".55" stopColor="#F04290" />
                    <stop offset="1" stopColor="#F68C45" />
                  </linearGradient>
                </defs>
                <g className="ig">
                  <circle cx="12" cy="6.3" r="2.4" fill="#A7A9AE" />
                  <circle cx="4.5" cy="9.6" r="2.2" fill="#A7A9AE" />
                  <circle cx="19.5" cy="9.6" r="2.2" fill="#A7A9AE" />
                  <path d="M8.9 10.2h6.2c.7 0 1.2.5 1.2 1.2v1.8L12 17.2l-4.3-4V11.4c0-.7.5-1.2 1.2-1.2Z" fill="#A7A9AE" />
                  <path d="M1.2 20.8v-5.2c0-1.2 1-2.2 2.2-2.2h1.4c1.2 0 2.2 1 2.2 2.2v5.2H1.2Zm15.8 0v-5.2c0-1.2 1-2.2 2.2-2.2h1.4c1.2 0 2.2 1 2.2 2.2v5.2H17Z" fill="#A7A9AE" />
                  <path d="M6.3 14.6 9.5 18.4c1.4 1.7 3.6 1.7 5 0l3.2-3.8" fill="none" stroke="#A7A9AE" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <g className="ic">
                  <circle cx="12" cy="6.3" r="2.4" fill="url(#tcg2)" />
                  <circle cx="4.5" cy="9.6" r="2.2" fill="url(#tcg2)" />
                  <circle cx="19.5" cy="9.6" r="2.2" fill="url(#tcg2)" />
                  <path d="M8.9 10.2h6.2c.7 0 1.2.5 1.2 1.2v1.8L12 17.2l-4.3-4V11.4c0-.7.5-1.2 1.2-1.2Z" fill="url(#tcg2)" />
                  <path d="M1.2 20.8v-5.2c0-1.2 1-2.2 2.2-2.2h1.4c1.2 0 2.2 1 2.2 2.2v5.2H1.2Zm15.8 0v-5.2c0-1.2 1-2.2 2.2-2.2h1.4c1.2 0 2.2 1 2.2 2.2v5.2H17Z" fill="url(#tcg2)" />
                  <path d="M6.3 14.6 9.5 18.4c1.4 1.7 3.6 1.7 5 0l3.2-3.8" fill="none" stroke="url(#tcg2)" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </a>
          </nav>
        </section>
        <section className="s6" aria-labelledby="dc-title" style={{ position: "absolute", left: "0", top: "1688px", width: "390px", height: "844px", overflow: "hidden", background: "#272C3F", borderImage: "linear-gradient(#272C3F, #272C3F) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <div className="z6" style={{ position: "absolute", inset: "0" }}>
            <div className="dcb" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "844px" }}>
              <h2 id="dc-title" aria-label="Bringing defence closer to the community" style={{ position: "absolute", left: "63px", top: "80px", margin: "0", fontSize: "56px", fontWeight: "600", lineHeight: "67px", letterSpacing: "0.004em" }}>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.0s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dcw?.w0)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      BRINGING
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.125s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dcw?.w1)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      DEFENCE
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.25s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dcw?.w2)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      CLOSER
                    </span>
                  </span>
                </span>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.375s", "--wy": "1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dcw?.w3)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      TO
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.5s", "--wy": "1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dcw?.w4)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      THE
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi" style={{ "--wd": "0.625s", "--wy": "1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dcw?.w5)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      COMMUNITY
                    </span>
                  </span>
                </span>
              </h2>
              <button className="skipb" type="button" data-z="1" onClick={v.skip6} style={{ position: "absolute", left: "1010px", top: "119px", width: "366px", height: "56px", boxSizing: "border-box", padding: "0", border: "1.5px solid #DDDDDD", borderRadius: "10px", background: "transparent", color: "#DDDDDD", fontFamily: "inherit", fontSize: "20px", fontWeight: "500", letterSpacing: "0.01em", whiteSpace: "nowrap", cursor: "pointer" }}>
                SKIP TO ‘APPRECIATING NSMEN’
              </button>
              <article className={`st6 ${s(v.d6?.on0)}`} aria-label="Making defence more accessible">
                <button className="dcph" type="button" aria-label="View photo: Participants in life vests sit in an inflatable boat in a swimming pool" onClick={v.lb_0_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "16px", top: "136px", width: "358px", height: "204px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/dc4-big.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Children and adults assemble a raft frame from white water containers and pipes on a turf court" onClick={v.lb_0_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "16px", top: "348px", width: "175px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/dc4-a.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Families stretch a green tarp between trees to build a shelter" onClick={v.lb_0_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "199px", top: "348px", width: "175px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/dc4-b.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s0?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "16px", top: "494px", width: "358px", height: "334px", boxSizing: "border-box", padding: "19.97px 22.03px 28.92px", borderRadius: "11.02px", background: "#000722", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "17.9px", fontWeight: "500", lineHeight: "23.41px", letterSpacing: "0.003em", color: "#F34141" }}>
                    Making defence more accessible
                  </h3>
                  <p style={{ margin: "30.98px 0 0", fontSize: "11.02px", lineHeight: "13.77px", color: "#FFFFFF" }}>
                    Over
                  </p>
                  <div style={{ display: "flex", gap: "31.67px" }}>
                    <div style={{ minWidth: "103.27px" }}>
                      <p aria-label="500" style={{ margin: "0", fontSize: "44.06px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                        <T v={v.d6?.s0?.c0} />
                      </p>
                      <p style={{ margin: "9.64px 0 0", fontSize: "15.15px", lineHeight: "1.2", color: "#FFFFFF" }}>
                        participants
                      </p>
                    </div>
                    <div style={{ minWidth: "103.27px" }}>
                      <p aria-label="13" style={{ margin: "0", fontSize: "44.06px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                        <T v={v.d6?.s0?.c1} />
                      </p>
                      <p style={{ margin: "9.64px 0 0", fontSize: "15.15px", lineHeight: "1.2", color: "#FFFFFF" }}>
                        camps
                      </p>
                    </div>
                  </div>
                  <div style={{ height: "0.69px", marginTop: "24.78px", background: "rgba(255,255,255,.3)" }} />
                  <p aria-label="Through NS Experience Camps, families got a taste of NS-inspired activities, gaining a deeper appreciation of their loved ones’ service." style={{ margin: "20.65px 0 0", fontSize: "12.39px", lineHeight: "22.31px", color: "#FFFFFF" }}>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s0?.l0} />
                    </span>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s0?.l1} />
                    </span>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s0?.l2} />
                    </span>
                  </p>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "5.51px", width: `${s(v.d6?.s0?.bar)}px`, borderRadius: "0 2.75px 2.75px 0", background: "#F34141" }} />
                </div>
              </article>
              <article className={`st6 ${s(v.d6?.on1)}`} aria-label="Making defence more accessible">
                <button className="dcph" type="button" aria-label="View photo: Parents and children play a giant board game with large red dice on a turf court" onClick={v.lb_1_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "16px", top: "136px", width: "358px", height: "204px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/dc3-big.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s1?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Children play with toy blasters among camouflage tents on a green court" onClick={v.lb_1_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "16px", top: "348px", width: "175px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/dc3-a.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s1?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: An adult and child pose in flight suits and helmets against camouflage netting" onClick={v.lb_1_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "199px", top: "348px", width: "175px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/dc3-b.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s1?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "16px", top: "494px", width: "358px", height: "334px", boxSizing: "border-box", padding: "19.97px 22.03px 28.92px", borderRadius: "11.02px", background: "#000722", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "17.9px", fontWeight: "500", lineHeight: "23.41px", letterSpacing: "0.003em", color: "#F34141" }}>
                    Making defence more accessible
                  </h3>
                  <div style={{ display: "flex", gap: "31.67px", marginTop: "44.75px" }}>
                    <div style={{ minWidth: "103.27px" }}>
                      <p aria-label="140K+" style={{ margin: "0", fontSize: "44.06px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                        <T v={v.d6?.s1?.c0} />
                      </p>
                      <p style={{ margin: "9.64px 0 0", fontSize: "15.15px", lineHeight: "1.2", color: "#FFFFFF" }}>
                        celebrated at SAFRA clubs
                      </p>
                    </div>
                  </div>
                  <div style={{ height: "0.69px", marginTop: "24.78px", background: "rgba(255,255,255,.3)" }} />
                  <p aria-label="SAF60 Be@SAFRA Open House brought the SAF closer to families through flight simulators, military K9 encounters and interactive activities." style={{ margin: "20.65px 0 0", fontSize: "12.39px", lineHeight: "22.31px", color: "#FFFFFF" }}>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s1?.l0} />
                    </span>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s1?.l1} />
                    </span>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s1?.l2} />
                    </span>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s1?.l3} />
                    </span>
                  </p>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "5.51px", width: `${s(v.d6?.s1?.bar)}px`, borderRadius: "0 2.75px 2.75px 0", background: "#F34141" }} />
                </div>
              </article>
              <article className={`st6 ${s(v.d6?.on2)}`} aria-label="Sharing lessons from the past">
                <button className="dcph" type="button" aria-label="View photo: A speaker addresses pupils seated in a classroom" onClick={v.lb_2_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "16px", top: "136px", width: "358px", height: "204px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/dc1-big.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s2?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Service personnel seated outdoors listen to standing speakers" onClick={v.lb_2_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "16px", top: "348px", width: "358px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/dc1-a.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s2?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "16px", top: "494px", width: "358px", height: "334px", boxSizing: "border-box", padding: "19.97px 22.03px 28.92px", borderRadius: "11.02px", background: "#000722", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "17.9px", fontWeight: "500", lineHeight: "23.41px", letterSpacing: "0.003em", color: "#F34141" }}>
                    Sharing lessons from the past
                  </h3>
                  <p style={{ margin: "30.98px 0 0", fontSize: "11.02px", lineHeight: "13.77px", color: "#FFFFFF" }}>
                    Over
                  </p>
                  <div style={{ display: "flex", gap: "31.67px" }}>
                    <div style={{ minWidth: "103.27px" }}>
                      <p aria-label="20K+" style={{ margin: "0", fontSize: "44.06px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                        <T v={v.d6?.s2?.c0} />
                      </p>
                      <p style={{ margin: "9.64px 0 0", fontSize: "15.15px", lineHeight: "1.2", color: "#FFFFFF" }}>
                        people engaged
                      </p>
                    </div>
                  </div>
                  <div style={{ height: "0.69px", marginTop: "24.78px", background: "rgba(255,255,255,.3)" }} />
                  <p aria-label="Commitment to Defence (C2D) Ambassadors from the SAF Veterans’ League shared real-life experiences, reinforcing the importance of a strong defence." style={{ margin: "20.65px 0 0", fontSize: "12.39px", lineHeight: "22.31px", color: "#FFFFFF" }}>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s2?.l0} />
                    </span>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s2?.l1} />
                    </span>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s2?.l2} />
                    </span>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s2?.l3} />
                    </span>
                  </p>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "5.51px", width: `${s(v.d6?.s2?.bar)}px`, borderRadius: "0 2.75px 2.75px 0", background: "#F34141" }} />
                </div>
              </article>
              <article className={`st6 ${s(v.d6?.on3)}`} aria-label="Building preparedness together">
                <button className="dcph" type="button" aria-label="View photo: Children practise CPR on training manikins with instructors" onClick={v.lb_3_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "16px", top: "136px", width: "358px", height: "204px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/dc2-big.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s3?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Emergency responders demonstrate a rescue to an audience under a sheltered walkway" onClick={v.lb_3_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "16px", top: "348px", width: "175px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 20px)" }}>
                  <img src="./assets/dc2-a.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s3?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Boys look into a camouflage field pack held open by an instructor" onClick={v.lb_3_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "199px", top: "348px", width: "175px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 14px)" }}>
                  <img src="./assets/dc2-b.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d6?.s3?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "16px", top: "494px", width: "358px", height: "334px", boxSizing: "border-box", padding: "19.97px 22.03px 28.92px", borderRadius: "11.02px", background: "#000722", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "17.9px", fontWeight: "500", lineHeight: "23.41px", letterSpacing: "0.003em", color: "#F34141" }}>
                    Building preparedness together
                  </h3>
                  <p style={{ margin: "30.98px 0 0", fontSize: "11.02px", lineHeight: "13.77px", color: "#FFFFFF" }}>
                    Over
                  </p>
                  <div style={{ display: "flex", gap: "31.67px" }}>
                    <div style={{ minWidth: "103.27px" }}>
                      <p aria-label="40K+" style={{ margin: "0", fontSize: "44.06px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                        <T v={v.d6?.s3?.c0} />
                      </p>
                      <p style={{ margin: "9.64px 0 0", fontSize: "15.15px", lineHeight: "1.2", color: "#FFFFFF" }}>
                        people engaged
                      </p>
                    </div>
                  </div>
                  <div style={{ height: "0.69px", marginTop: "24.78px", background: "rgba(255,255,255,.3)" }} />
                  <p aria-label="Total Defence Day commemorative activities equipped participants with practical skills through hands-on demonstrations and interactive games." style={{ margin: "20.65px 0 0", fontSize: "12.39px", lineHeight: "22.31px", color: "#FFFFFF" }}>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s3?.l0} />
                    </span>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s3?.l1} />
                    </span>
                    <span style={{ display: "block", height: "22.31px", whiteSpace: "pre" }}>
                      <T v={v.d6?.s3?.l2} />
                    </span>
                  </p>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "5.51px", width: `${s(v.d6?.s3?.bar)}px`, borderRadius: "0 2.75px 2.75px 0", background: "#F34141" }} />
                </div>
              </article>
            </div>
          </div>
          <div className="nv6" aria-hidden="true" />
        </section>
        <section className="s7" aria-labelledby="an-title" style={{ position: "absolute", left: "0", top: "1688px", width: "390px", height: "844px", overflow: "hidden", background: "#272C3F", borderImage: "linear-gradient(#272C3F, #272C3F) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <div className="z7" style={{ position: "absolute", inset: "0" }}>
            <div className="dcb" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "844px" }}>
              <h2 id="an-title" aria-label="Appreciating national servicemen" style={{ position: "absolute", left: "63px", top: "80px", margin: "0", fontSize: "56px", fontWeight: "600", lineHeight: "67px", letterSpacing: "0.004em" }}>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi7" style={{ "--wd": "0.0s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw7?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dcw7?.w0)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      APPRECIATING
                    </span>
                  </span>
                </span>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi7" style={{ "--wd": "0.125s", "--wy": "1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw7?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dcw7?.w1)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      NATIONAL
                    </span>
                  </span>
                  {" "}
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi7" style={{ "--wd": "0.25s", "--wy": "1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw7?.W)}px 100%`, backgroundRepeat: "no-repeat", backgroundPosition: `${s(v.dcw7?.w2)}px 0`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      SERVICEMEN
                    </span>
                  </span>
                </span>
              </h2>
              <button className="skipb" type="button" data-z="1" onClick={v.skip7} style={{ position: "absolute", left: "986px", top: "119px", width: "390px", height: "56px", boxSizing: "border-box", padding: "0", border: "1.5px solid #DDDDDD", borderRadius: "10px", background: "transparent", color: "#DDDDDD", fontFamily: "inherit", fontSize: "20px", fontWeight: "500", letterSpacing: "0.01em", whiteSpace: "nowrap", cursor: "pointer" }}>
                SKIP TO ‘STRENGTHENING BONDS’
              </button>
              <article className={`st6 ${s(v.d7?.on0)}`} aria-label="Nurturing appreciation from young">
                <button className="dcph" type="button" aria-label="View photo: A child holds a hand-drawn thank-you card with a family photo for an NSman father" onClick={v.lb7_0_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "16px", top: "136px", width: "358px", height: "204px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/an1-big.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d7?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: A preschool teacher shows the class photos of servicemen" onClick={v.lb7_0_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "16px", top: "348px", width: "175px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an1-a.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d7?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: A preschooler works on an art gift at a table" onClick={v.lb7_0_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "199px", top: "348px", width: "175px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/an1-b.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d7?.s0?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "16px", top: "494px", width: "358px", height: "334px", boxSizing: "border-box", padding: "19.97px 22.03px 28.92px", borderRadius: "11.02px", background: "#000722", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "17.9px", fontWeight: "500", lineHeight: "23.41px", letterSpacing: "0.003em", color: "#F34141" }}>
                    Nurturing appreciation from young
                  </h3>
                  <div style={{ display: "flex", gap: "46.82px", marginTop: "35.11px" }}>
                    <div style={{ minWidth: "103.27px" }}>
                      <p aria-label="35K+" style={{ margin: "0", fontSize: "44.06px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                        <T v={v.d7?.s0?.c0} />
                      </p>
                      <p style={{ margin: "9.64px 0 0", fontSize: "15.15px", lineHeight: "1.2", color: "#FFFFFF" }}>
                        preschoolers
                      </p>
                    </div>
                    <div style={{ minWidth: "103.27px" }}>
                      <p aria-label="460" style={{ margin: "0", fontSize: "44.06px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                        <T v={v.d7?.s0?.c1} />
                      </p>
                      <p style={{ margin: "9.64px 0 0", fontSize: "15.15px", lineHeight: "1.2", color: "#FFFFFF" }}>
                        preschool centres
                      </p>
                    </div>
                  </div>
                  <div style={{ height: "0.69px", marginTop: "30.29px", background: "rgba(255,255,255,.3)" }} />
                  <p aria-label="Through the Appreciating NSmen Art Jam, preschoolers learnt of NSmen's contributions and made heartfelt gifts for their fathers." style={{ margin: "26.16px 0 0", fontSize: "13.77px", lineHeight: "24.78px", color: "#FFFFFF" }}>
                    <span style={{ display: "block", height: "24.78px", whiteSpace: "pre" }}>
                      <T v={v.d7?.s0?.l0} />
                    </span>
                    <span style={{ display: "block", height: "24.78px", whiteSpace: "pre" }}>
                      <T v={v.d7?.s0?.l1} />
                    </span>
                    <span style={{ display: "block", height: "24.78px", whiteSpace: "pre" }}>
                      <T v={v.d7?.s0?.l2} />
                    </span>
                  </p>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "5.51px", width: `${s(v.d7?.s0?.bar)}px`, borderRadius: "0 2.75px 2.75px 0", background: "#F34141" }} />
                </div>
              </article>
            </div>
          </div>
          <div className="nv7" aria-hidden="true" />
        </section>
        <section className="s8" aria-labelledby="sb-title" style={{ position: "absolute", left: "0", top: "1688px", width: "390px", height: "844px", overflow: "hidden", background: "#272C3F", borderImage: "linear-gradient(#272C3F, #272C3F) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <div className="z8" style={{ position: "absolute", inset: "0" }}>
            <div className="dcb" style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "844px" }}>
              <h2 id="sb-title" aria-label="Strengthening bonds" style={{ position: "absolute", left: "63px", top: "80px", margin: "0", fontSize: "56px", fontWeight: "600", lineHeight: "67px", letterSpacing: "0.004em" }}>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi8" style={{ "--wd": "0.0s", "--wy": "-1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw8?.W)}px 100%`, backgroundRepeat: "no-repeat", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      STRENGTHENING
                    </span>
                  </span>
                </span>
                <span style={{ display: "block", whiteSpace: "nowrap" }}>
                  <span className="dcw" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", padding: "0 .03em .14em", margin: "0 -.03em -.14em" }}>
                    <span className="dcwi8" style={{ "--wd": "0.125s", "--wy": "1", display: "inline-block", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", backgroundSize: `${s(v.dcw8?.W)}px 100%`, backgroundRepeat: "no-repeat", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                      BONDS
                    </span>
                  </span>
                </span>
              </h2>
              <button className="skipb" type="button" data-z="1" onClick={v.skip8} style={{ position: "absolute", left: "1095px", top: "119px", width: "281px", height: "56px", boxSizing: "border-box", padding: "0", border: "1.5px solid #DDDDDD", borderRadius: "10px", background: "transparent", color: "#DDDDDD", fontFamily: "inherit", fontSize: "20px", fontWeight: "500", letterSpacing: "0.01em", whiteSpace: "nowrap", cursor: "pointer" }}>
                SKIP TO NEXT SECTION
              </button>
              <article className={`st6 ${s(v.d8?.on0)}`} aria-label="Celebrating the nation we defend">
                <button className="dcph" type="button" aria-label="View photo: A family smiles in front of heart-shaped red fireworks" onClick={v.lb8_0_0} style={{ translate: `${s(v.pp?.d0)}`, position: "absolute", left: "16px", top: "136px", width: "358px", height: "204px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px 0 0 0)" }}>
                  <img src="./assets/sb1-big.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: Members cheer with SAFRA thunder sticks at a National Day celebration" onClick={v.lb8_0_1} style={{ translate: `${s(v.pp?.d1)}`, position: "absolute", left: "16px", top: "348px", width: "175px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb1-a.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s0?.ph)}%)` }} />
                </button>
                <button className="dcph" type="button" aria-label="View photo: A family on a picnic mat with the SAFRA mascot at a SG60 celebration" onClick={v.lb8_0_2} style={{ translate: `${s(v.pp?.d2)}`, position: "absolute", left: "199px", top: "348px", width: "175px", height: "138px", padding: "0", border: "0", borderRadius: "12px", overflow: "hidden", background: "transparent", clipPath: "inset(0 round 16px)" }}>
                  <img src="./assets/sb1-b.jpg" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", transform: `translateY(${s(v.d8?.s0?.ph)}%)` }} />
                </button>
                <div className="dcpn" style={{ position: "absolute", left: "16px", top: "494px", width: "358px", height: "334px", boxSizing: "border-box", padding: "19.97px 22.03px 28.92px", borderRadius: "11.02px", background: "#000722", overflow: "hidden" }}>
                  <h3 style={{ margin: "0", fontSize: "17.9px", fontWeight: "500", lineHeight: "23.41px", letterSpacing: "0.003em", color: "#F34141" }}>
                    Celebrating the nation we defend
                  </h3>
                  <div style={{ display: "flex", gap: "46.82px", marginTop: "35.11px" }}>
                    <div style={{ minWidth: "103.27px" }}>
                      <p aria-label="52K+" style={{ margin: "0", fontSize: "44.06px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                        <T v={v.d8?.s0?.c0} />
                      </p>
                      <p style={{ margin: "9.64px 0 0", fontSize: "15.15px", lineHeight: "1.2", color: "#FFFFFF" }}>
                        {"NSmen & their families"}
                      </p>
                    </div>
                  </div>
                  <div style={{ height: "0.69px", marginTop: "30.29px", background: "rgba(255,255,255,.3)" }} />
                  <p aria-label="SAFRA's Vibrant Heartbeat SG60 National Day celebrations brought NSmen and families together to celebrate national pride." style={{ margin: "26.16px 0 0", fontSize: "13.77px", lineHeight: "24.78px", color: "#FFFFFF" }}>
                    <span style={{ display: "block", height: "24.78px", whiteSpace: "pre" }}>
                      <T v={v.d8?.s0?.l0} />
                    </span>
                    <span style={{ display: "block", height: "24.78px", whiteSpace: "pre" }}>
                      <T v={v.d8?.s0?.l1} />
                    </span>
                    <span style={{ display: "block", height: "24.78px", whiteSpace: "pre" }}>
                      <T v={v.d8?.s0?.l2} />
                    </span>
                  </p>
                  <div aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", height: "5.51px", width: `${s(v.d8?.s0?.bar)}px`, borderRadius: "0 2.75px 2.75px 0", background: "#F34141" }} />
                </div>
              </article>
            </div>
          </div>
          <div className="nv8" aria-hidden="true" />
        </section>
        <section className="s9" aria-labelledby="t2-title" style={{ position: "absolute", left: "0", top: "2532px", width: "390px", height: "844px", clipPath: "inset(0 calc(-1 * var(--gx, 0px)))", background: "#272C3F", borderImage: "linear-gradient(#272C3F, #272C3F) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <h2 id="t2-title" aria-label="& beyond National Service, we support NSmen and their families in everyday life." style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "714px", margin: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", fontWeight: "400", textAlign: "center" }}>
            <span className="t9 t9a" style={{ display: "block", fontSize: "18.52px", fontWeight: "400", lineHeight: "1.1", letterSpacing: "0.37px", color: "#6E778B" }}>
              <span className="hv" aria-hidden="true" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                <span className="lt">
                  {"&"}
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
                  y
                </span>
                <span className="lt">
                  o
                </span>
                <span className="lt">
                  n
                </span>
                <span className="lt">
                  d
                </span>
                <span className="lt">
                  {" "}
                </span>
                <span className="lt">
                  N
                </span>
                <span className="lt">
                  a
                </span>
                <span className="lt">
                  t
                </span>
                <span className="lt">
                  i
                </span>
                <span className="lt">
                  o
                </span>
                <span className="lt">
                  n
                </span>
                <span className="lt">
                  a
                </span>
                <span className="lt">
                  l
                </span>
                <span className="lt">
                  {" "}
                </span>
                <span className="lt">
                  S
                </span>
                <span className="lt">
                  e
                </span>
                <span className="lt">
                  r
                </span>
                <span className="lt">
                  v
                </span>
                <span className="lt">
                  i
                </span>
                <span className="lt">
                  c
                </span>
                <span className="lt">
                  e
                </span>
                <span className="lt">
                  ,
                </span>
              </span>
            </span>
            <span className="t9 t9b" style={{ display: "block", width: "358px", paddingBottom: ".1em", fontSize: "20.84px", fontWeight: "400", lineHeight: "1.1", letterSpacing: "0.42px" }}>
              <span className="hv" data-g="1" aria-hidden="true" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                <span className="lt hvg">
                  w
                </span>
                <span className="lt hvg">
                  e
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  s
                </span>
                <span className="lt hvg">
                  u
                </span>
                <span className="lt hvg">
                  p
                </span>
                <span className="lt hvg">
                  p
                </span>
                <span className="lt hvg">
                  o
                </span>
                <span className="lt hvg">
                  r
                </span>
                <span className="lt hvg">
                  t
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  N
                </span>
                <span className="lt hvg">
                  S
                </span>
                <span className="lt hvg">
                  m
                </span>
                <span className="lt hvg">
                  e
                </span>
                <span className="lt hvg">
                  n
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  a
                </span>
                <span className="lt hvg">
                  n
                </span>
                <span className="lt hvg">
                  d
                </span>
              </span>
            </span>
            <span className="t9 t9c" style={{ display: "block", width: "358px", marginTop: "calc(-3px - .1em)", paddingBottom: ".12em", fontSize: "20.84px", fontWeight: "400", lineHeight: "1.1", letterSpacing: "0.42px" }}>
              <span className="hv" data-g="1" aria-hidden="true" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
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
                  i
                </span>
                <span className="lt hvg">
                  r
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  f
                </span>
                <span className="lt hvg">
                  a
                </span>
                <span className="lt hvg">
                  m
                </span>
                <span className="lt hvg">
                  i
                </span>
                <span className="lt hvg">
                  l
                </span>
                <span className="lt hvg">
                  i
                </span>
                <span className="lt hvg">
                  e
                </span>
                <span className="lt hvg">
                  s
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  i
                </span>
                <span className="lt hvg">
                  n
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  e
                </span>
                <span className="lt hvg">
                  v
                </span>
                <span className="lt hvg">
                  e
                </span>
                <span className="lt hvg">
                  r
                </span>
                <span className="lt hvg">
                  y
                </span>
                <span className="lt hvg">
                  d
                </span>
                <span className="lt hvg">
                  a
                </span>
                <span className="lt hvg">
                  y
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  l
                </span>
                <span className="lt hvg">
                  i
                </span>
                <span className="lt hvg">
                  f
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
          <svg className="tg9" aria-hidden="true" style={{ position: "absolute", left: `${-(v.gx || 0)}px`, top: "714px", width: `${390 + 2 * (v.gx || 0)}px`, height: "130px", display: "block" }} viewBox={`${-(v.gx || 0)} 0 ${390 + 2 * (v.gx || 0)} 130`} preserveAspectRatio="none">
            <defs>
              {/* the shared gradient (see ZONE_GRAD), in this band's own coordinates: it starts at the band's top */}
              <linearGradient id="tg9G" x1={ZONE_GRAD.x1} y1={ZONE_GRAD.y1 - 3246} x2={ZONE_GRAD.x2} y2={ZONE_GRAD.y2 - 3246} gradientUnits="userSpaceOnUse">
                <stop stopColor="#6252A4" />
                <stop offset="0.4" stopColor="#F14192" />
                <stop offset="0.75" stopColor="#F6765D" />
                <stop offset="1" stopColor="#F69141" />
              </linearGradient>
            </defs>
            <path fill="url(#tg9G)" d={tongueM(TONGUE, v.gx)} />
          </svg>
          <button className="cue9" type="button" aria-label="Scroll to continue" onClick={v.next} style={{ position: "absolute", left: "147px", top: "731px", width: "96px", height: "96px", padding: "0", border: "0", borderRadius: "50%", background: "transparent", cursor: "pointer" }}>
            <svg width="96" height="96" viewBox="0 0 160 160" style={{ display: "block", overflow: "visible" }}>
              <defs>
                <path id="cue9P" d="M80 80 m-64 0 a64 64 0 1 0 128 0 a64 64 0 1 0 -128 0" />
              </defs>
              <g className="txt">
                <text fontSize="15" fontFamily="'Google Sans Flex','Google Sans',system-ui,sans-serif" letterSpacing="1.2" fill="#FFFFFF">
                  <textPath href="#cue9P" startOffset="10" textLength="382" lengthAdjust="spacing">
                    {"SCROLL TO CONTINUE  •  SCROLL TO CONTINUE  •"}
                  </textPath>
                </text>
              </g>
              <g className="dn">
                <path d="M80 56 V102" stroke="#FFFFFF" strokeWidth={v.lw} strokeLinecap="butt" fill="none" />
                <path d="M62 86 L80 104 L98 86" stroke="#FFFFFF" strokeWidth={v.lw} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4" fill="none" />
              </g>
            </svg>
          </button>
        </section>
        {/* one gradient behind the band under section 9, Membership and Clubs & Facilities, so it flows through all three */}
        <svg className="zbg" aria-hidden="true" style={{ position: "absolute", left: `${-(v.gx || 0)}px`, top: "3376px", width: `${390 + 2 * (v.gx || 0)}px`, height: "2284px", display: "block", pointerEvents: "none" }} viewBox={`${-(v.gx || 0)} 3376 ${390 + 2 * (v.gx || 0)} 2284`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="zG" x1={ZONE_GRAD.x1} y1={ZONE_GRAD.y1} x2={ZONE_GRAD.x2} y2={ZONE_GRAD.y2} gradientUnits="userSpaceOnUse">
                <stop stopColor="#6252A4" />
                <stop offset="0.4" stopColor="#F14192" />
                <stop offset="0.75" stopColor="#F6765D" />
                <stop offset="1" stopColor="#F69141" />
            </linearGradient>
          </defs>
          <rect x={-(v.gx || 0)} y="3376" width={390 + 2 * (v.gx || 0)} height="2284" fill="url(#zG)" />
        </svg>
        <section className="s10" aria-labelledby="mb-title" style={{ position: "absolute", left: "0", top: "3376px", width: "390px", height: "844px", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "844px", transformOrigin: "0 0", transform: "none" }}>
            <div style={{ position: "absolute", left: "16px", top: "76px", width: "358px", paddingTop: "0px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2 id="mb-title" className="mbk mk2" aria-label="Membership, made more rewarding" style={{ margin: "0", fontSize: "24px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "0.48px", textTransform: "uppercase" }}>
                <span style={{ display: "block", color: "#FFFFFF" }}>
                  Membership, made more rewarding
                </span>
              </h2>
              <div className="mbk mk4" style={{ fontSize: "13px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.26px", color: "#DDDDDD" }}>
                <p style={{ margin: "0" }}>
                  From staying active and unwinding to enjoying greater value on everyday essentials.
                </p>
                <p style={{ margin: "0" }}>
                  <br aria-hidden="true" />
                  SAFRA continues to support NSmen and their families beyond National Service.
                </p>
              </div>
            </div>
            <div className="mbk mk5" role="group" aria-label="Membership categories" style={{ position: "absolute", left: "16px", top: "256px", width: "358px", height: "572px", overflow: "hidden", borderRadius: "12px" }}>
              <div className={`mbs ${s(v.mbv?.v0)}`} style={{ position: "absolute", left: "0", top: `${s(v.mbv?.y0)}px`, zIndex: `${s(v.mbv?.z0)}`, width: "358px", height: "404px", boxSizing: "border-box", padding: "18px", display: "flex", flexDirection: "column", gap: "14px", borderRadius: "12px", background: "#272C3F" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.e0} onClick={v.mbTab3} style={{ display: "flex", alignItems: "center", gap: "14.88px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb-ic-travel.svg" alt="" width="30" height="30" style={{ display: "block", flex: "none", width: "29.76px", height: "29.76px" }} />
                    <span style={{ fontSize: "14.88px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "normal" }}>
                      {"Travel, Staycations & Local attractions"}
                    </span>
                  </button>
                </h3>
                <div className="mbc">
                  <p style={{ margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
                    Content for this category is still to come.
                  </p>
                </div>
              </div>
              <div className={`mbs ${s(v.mbv?.v1)}`} style={{ position: "absolute", left: "0", top: `${s(v.mbv?.y1)}px`, zIndex: `${s(v.mbv?.z1)}`, width: "358px", height: "404px", boxSizing: "border-box", padding: "18px", display: "flex", flexDirection: "column", gap: "14px", borderRadius: "12px", background: "#313851" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.e1} onClick={v.mbTab2} style={{ display: "flex", alignItems: "center", gap: "14.88px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb-ic-movies.svg" alt="" width="30" height="30" style={{ display: "block", flex: "none", width: "29.76px", height: "29.76px" }} />
                    <span style={{ fontSize: "14.88px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "normal" }}>
                      {"Movies & Entertainment"}
                    </span>
                  </button>
                </h3>
                <div className="mbc">
                  <p style={{ margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
                    Content for this category is still to come.
                  </p>
                </div>
              </div>
              <div className={`mbs ${s(v.mbv?.v2)}`} style={{ position: "absolute", left: "0", top: `${s(v.mbv?.y2)}px`, zIndex: `${s(v.mbv?.z2)}`, width: "358px", height: "404px", boxSizing: "border-box", padding: "18px", display: "flex", flexDirection: "column", gap: "14px", borderRadius: "12px", background: "#272C3F" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.e2} onClick={v.mbTab1} style={{ display: "flex", alignItems: "center", gap: "14.88px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb-ic-education.svg" alt="" width="30" height="30" style={{ display: "block", flex: "none", width: "29.76px", height: "29.76px" }} />
                    <span style={{ fontSize: "14.88px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "normal" }}>
                      Education
                    </span>
                  </button>
                </h3>
                <div className="mbc">
                  <p style={{ margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
                    Content for this category is still to come.
                  </p>
                </div>
              </div>
              <div className={`mbs ${s(v.mbv?.v3)}`} style={{ position: "absolute", left: "0", top: `${s(v.mbv?.y3)}px`, zIndex: `${s(v.mbv?.z3)}`, width: "358px", height: "404px", boxSizing: "border-box", padding: "18px", display: "flex", flexDirection: "column", gap: "14px", borderRadius: "12px", background: "#313851" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.e3} onClick={v.mbTab0} style={{ display: "flex", alignItems: "center", gap: "14.88px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb-ic-food.svg" alt="" width="30" height="30" style={{ display: "block", flex: "none", width: "29.76px", height: "29.76px" }} />
                    <span style={{ fontSize: "14.88px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "normal" }}>
                      {"Food & Groceries"}
                    </span>
                  </button>
                </h3>
                <div className="mbc" style={{ display: "flex", flexDirection: "column", gap: "19.84px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "19.84px" }}>
                    <div style={{ display: "flex", gap: "9.92px" }}>
                      <div style={{ flex: "1 0 0", minWidth: "0" }}>
                        <p aria-label="100+" style={{ margin: "0 0 -2.48px", fontSize: "34.72px", fontWeight: "400", letterSpacing: "0", lineHeight: "1.4", color: "#EEEEEE", whiteSpace: "nowrap" }}>
                          <T v={v.mbv?.c0} />
                        </p>
                        <p style={{ margin: "0", fontSize: "14.88px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "0.6px", color: "#EEEEEE" }}>
                          {"F&B establishments"}
                        </p>
                      </div>
                      <div style={{ flex: "1 0 0", minWidth: "0" }}>
                        <p aria-label="180,000+" style={{ margin: "0 0 -2.48px", fontSize: "34.72px", fontWeight: "400", letterSpacing: "0", lineHeight: "1.4", color: "#EEEEEE", whiteSpace: "nowrap" }}>
                          <T v={v.mbv?.c1} />
                        </p>
                        <p style={{ margin: "0", fontSize: "14.88px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "0.6px", color: "#EEEEEE" }}>
                          SG60 vouchers enjoyed
                        </p>
                      </div>
                    </div>
                    <p style={{ margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
                      {"From dining deals to discounted vouchers, members enjoyed greater savings on everyday favourites across a wide range of F&B establishments and merchants."}
                    </p>
                  </div>
                  <div style={{ paddingTop: "19.84px", display: "flex", gap: "14.88px", alignItems: "flex-start" }}>
                    <div className="mbi" style={{ flex: "1 0 0", minWidth: "0", aspectRatio: "1", overflow: "hidden" }}>
                      <img src="./assets/mb-f1.jpg" alt="Délifrance 1-for-1 signature sandwich offer for SAFRA members" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="mbi" style={{ flex: "1 0 0", minWidth: "0", aspectRatio: "1", overflow: "hidden" }}>
                      <img src="./assets/mb-f2.jpg" alt="PlayMade 1-for-1 beverage offer for SAFRA members" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="mbi" style={{ flex: "1 0 0", overflow: "hidden", minWidth: "0", aspectRatio: "1"  }}>
                      <img src="./assets/mb-f3.jpg" alt="Hawker discount day at Bukit Merah Central Food Centre" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="s15" aria-labelledby="fc-title" style={{ position: "absolute", left: "0", top: "4220px", width: "390px", height: "1440px", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "16px", top: "84px", width: "358px", display: "flex", flexDirection: "column", gap: "12px", textAlign: "center" }}>
            <h2 id="fc-title" className="fck fc1k" style={{ "--d": ".45s", margin: "0", fontSize: "24px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "0.48px", textTransform: "uppercase" }}>
              <span style={{ color: "#FFFFFF" }}>
                {"Enhancing SAFRA Clubs & Facilities"}
              </span>
            </h2>
            <p className="fck fc1k" style={{ "--d": ".6s", margin: "0", fontSize: "14px", fontWeight: "400", lineHeight: "1.55", letterSpacing: "0.28px", color: "#DDDDDD" }}>
              We continued to enhance our SAFRA clubs and facilities to better serve as vibrant community spaces where national servicemen and their families can bond, stay active, unwind and feel a sense of belonging.
            </p>
          </div>
          <div className="fci fcin fc1k" style={{ "--d": ".75s", "--r": "-3deg", "--fx": "-60px", "--fr": "-12deg", position: "absolute", left: "16px", top: "290px", width: "358px", height: "239px" }}>
            <img className="fcp" src="./assets/fc-gym.jpg" alt="EnergyOne Gym at SAFRA Toa Payoh with its illuminated ceiling sign, free weights and training zones" style={{ display: "block", width: "358px", height: "239px", borderRadius: "14px", objectFit: "cover" }} />
          </div>
          <article className="fcin fc1k" style={{ "--d": ".95s", "--r": "0deg", "--fx": "60px", "--fr": "6deg", position: "absolute", left: "32px", top: "490px", width: "326px", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px", borderRadius: "12px", background: "#000722" }}>
            <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.3px", color: "#F34141" }}>
              Elevated experience
              <br />
              at EnergyOne Gym
            </h3>
            <p style={{ margin: "0", fontSize: "13.5px", fontWeight: "400", lineHeight: "1.8", color: "#DDDDDD", opacity: ".8" }}>
              We enhanced EnergyOne Gym at SAFRA Toa Payoh with redesigned workout zones, new functional training equipment, Booty Builder machines and refreshed amenities to improve members’ fitness experience.
            </p>
          </article>
          <div className="fci fcin fc2k" style={{ "--d": ".35s", "--r": "2deg", "--fx": "60px", "--fr": "10deg", position: "absolute", left: "16px", top: "860px", width: "358px", height: "235px" }}>
            <img className="fcp" src="./assets/fc-cmpb-cafe.jpg" alt="Diners at the new SAFRA café lounge at Central Manpower Base" style={{ display: "block", width: "358px", height: "235px", borderRadius: "14px", objectFit: "cover" }} />
          </div>
          <div className="fci fcin fc2k" style={{ "--d": ".6s", "--r": "-4deg", "--fx": "50px", "--fr": "-14deg", position: "absolute", left: "214px", top: "1050px", width: "160px", height: "107px" }}>
            <img className="fcp" src="./assets/fc-cmpb-lounge.jpg" alt="The SAFRA@CMPB lounge with sofas and a membership promotion screen" style={{ display: "block", width: "160px", height: "107px", borderRadius: "10px", objectFit: "cover" }} />
          </div>
          <article className="fcin fc2k" style={{ "--d": ".5s", "--r": "0deg", "--fx": "-60px", "--fr": "-6deg", position: "absolute", left: "32px", top: "1080px", width: "326px", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "14px", borderRadius: "12px", background: "#000722" }}>
            <h3 style={{ margin: "0", fontSize: "16px", fontWeight: "500", lineHeight: "1.2", letterSpacing: "0.3px", color: "#F34141" }}>
              Launch of SAFRA@CMPB
            </h3>
            <p style={{ margin: "0", fontSize: "13.5px", fontWeight: "400", lineHeight: "1.8", color: "#DDDDDD", opacity: ".8" }}>
              We opened the new café lounge at the new Central Manpower Base (CMPB) to provide a cosy place where pre-enlistees, national servicemen and MINDEF staff can recharge, socialise and get to know more about SAFRA.
            </p>
          </article>
        </section>
        <section className="s11" hidden aria-labelledby="fy-title" style={{ position: "absolute", left: "0", top: "6151px", width: "1440px", height: "900px", overflow: "hidden", background: "linear-gradient(123.69deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", borderImage: "linear-gradient(123.69deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%) 0 fill / 0 / 0 var(--gx, 0px)" }}>
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
        <section className="s12" aria-labelledby="wc-title" style={{ position: "absolute", left: "0", top: "5660px", width: "390px", height: "844px", clipPath: "inset(0 calc(-1 * var(--gx, 0px)))", background: "#272C3F", borderImage: "linear-gradient(#272C3F, #272C3F) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <h2 id="wc-title" aria-label="The year may be over. Our work continues." style={{ position: "absolute", left: "0", top: "0", width: "390px", height: "714px", margin: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", fontWeight: "400", textAlign: "center" }}>
            <span className="t12 t12a" style={{ display: "block", fontSize: "18.52px", fontWeight: "400", lineHeight: "1.1", letterSpacing: "0.37px", color: "#6E778B" }}>
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
            <span className="t12 t12b" style={{ display: "block", paddingBottom: ".12em", fontSize: "23.15px", fontWeight: "400", lineHeight: "1.1", letterSpacing: "0.46px" }}>
              <span className="hv" data-g="1" aria-hidden="true" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                <span className="lt hvg">
                  O
                </span>
                <span className="lt hvg">
                  u
                </span>
                <span className="lt hvg">
                  r
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  w
                </span>
                <span className="lt hvg">
                  o
                </span>
                <span className="lt hvg">
                  r
                </span>
                <span className="lt hvg">
                  k
                </span>
                <span className="lt hvg">
                  {" "}
                </span>
                <span className="lt hvg">
                  c
                </span>
                <span className="lt hvg">
                  o
                </span>
                <span className="lt hvg">
                  n
                </span>
                <span className="lt hvg">
                  t
                </span>
                <span className="lt hvg">
                  i
                </span>
                <span className="lt hvg">
                  n
                </span>
                <span className="lt hvg">
                  u
                </span>
                <span className="lt hvg">
                  e
                </span>
                <span className="lt hvg">
                  s
                </span>
                <span className="lt hvg">
                  .
                </span>
              </span>
            </span>
          </h2>
          <svg className="tg2" aria-hidden="true" style={{ position: "absolute", left: `${-(v.gx || 0)}px`, top: "714px", width: `${390 + 2 * (v.gx || 0)}px`, height: "130px", display: "block" }} viewBox={`${-(v.gx || 0)} 0 ${390 + 2 * (v.gx || 0)} 130`} preserveAspectRatio="none">
            <path fill="#18212A" d={tongueM(TONGUE, v.gx)} />
          </svg>
          <button className="cue2" type="button" aria-label="Scroll down to see what's next for SAFRA" onClick={v.next} style={{ position: "absolute", left: "147px", top: "731px", width: "96px", height: "96px", padding: "0", border: "0", borderRadius: "50%", background: "transparent", cursor: "pointer" }}>
            <svg width="96" height="96" viewBox="0 0 160 160" style={{ display: "block", overflow: "visible" }}>
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
        <section className="s13" aria-labelledby="nx-title" style={{ position: "absolute", left: "0", top: "6504px", width: "390px", height: "844px", overflow: "hidden", background: "#18212A", borderImage: "linear-gradient(#18212A, #18212A) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <div style={{ position: "absolute", left: "16px", top: "76px", width: "358px", display: "flex", flexDirection: "column", gap: "8px", textAlign: "center" }}>
            <h2 id="nx-title" className="nxk" style={{ "--d": ".55s", margin: "0", fontSize: "24px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "0.48px", textTransform: "uppercase" }}>
              <span style={{ background: "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Looking forward
              </span>
            </h2>
            <p className="nxk" style={{ "--d": ".7s", margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.5", letterSpacing: "0.26px", color: "#DDDDDD" }}>
              Continuing to strengthen support for NSmen and their families,
              {" "}
              while creating more ways for the wider community to understand and contribute to National Service.
            </p>
          </div>
          <nav className="nxk" role="tablist" aria-label="Looking forward" style={{ "--d": ".85s", position: "absolute", left: "16px", top: "206px", width: "358px", display: "flex", gap: "14px"  }}>
            <span aria-hidden="true" style={{ position: "absolute", left: "0", width: "358px", height: "1px", background: "rgba(170,170,170,.5)", bottom: "0px"  }} />
            <span className="nxi" aria-hidden="true" style={{ left: `${s(v.nxv?.left)}px` }} />
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
          <div className="nxk" style={{ "--d": "1s", position: "absolute", left: "16px", top: "272px", width: "358px", bottom: "0" }}>
            <div className="nxs" style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
              <div style={{ position: "relative", paddingBottom: "44.64px" }}>
                <div className={`nxp ${s(v.nxv?.p0)}`} style={{ display: "flex", flexDirection: "column", gap: "9.92px", paddingBottom: "4.96px" }}>
                  <article style={{ boxSizing: "border-box", padding: "19.84px", display: "flex", flexDirection: "column", borderRadius: "9.92px", background: "#272C3F", gap: "14.88px" }}>
                    <h3 style={{ margin: "0", fontSize: "15px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                      Expanding NS Experience Camps
                    </h3>
                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", flexDirection: "column"  }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", paddingBottom: "9.92px", display: "flex", flexDirection: "column", gap: "1.24px" }}>
                        <p style={{ margin: "0", fontSize: "34.72px", fontWeight: "400", letterSpacing: "0", lineHeight: "1.4", color: "#EEEEEE" }}>
                          3,000
                        </p>
                        <p style={{ margin: "0", fontSize: "15px", fontWeight: "400", lineHeight: "1.4", color: "#EEEEEE" }}>
                          participants targeted
                        </p>
                      </div>
                      <p style={{ flex: "1 0 0", minWidth: "0", margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                        More families, children and women can experience National Service through hands-on, NS-inspired activities.
                      </p>
                    </div>
                  </article>
                  <article style={{ boxSizing: "border-box", padding: "19.84px", display: "flex", flexDirection: "column", borderRadius: "9.92px", background: "#272C3F", gap: "14.88px" }}>
                    <h3 style={{ margin: "0", fontSize: "15px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                      Taking NS-inspired fitness further
                    </h3>
                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", flexDirection: "column"  }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", paddingBottom: "9.92px", display: "flex", flexDirection: "column", gap: "1.24px" }}>
                        <p style={{ margin: "0", fontSize: "34.72px", fontWeight: "400", letterSpacing: "0", lineHeight: "1.4", color: "#EEEEEE" }}>
                          1,300+
                        </p>
                        <p style={{ margin: "0", fontSize: "15px", fontWeight: "400", lineHeight: "1.4", color: "#EEEEEE" }}>
                          participants expected
                        </p>
                      </div>
                      <p style={{ flex: "1 0 0", minWidth: "0", margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                        The inaugural FitX Challenge brings people together through
                        {" "}
                        NS-inspired obstacles and functional fitness.
                      </p>
                    </div>
                  </article>
                  <article style={{ boxSizing: "border-box", padding: "19.84px", display: "flex", flexDirection: "column", borderRadius: "9.92px", background: "#272C3F", gap: "9.92px" }}>
                    <h3 style={{ margin: "0", fontSize: "15px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                      Bringing defence into community
                    </h3>
                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", flexDirection: "column"  }}>
                      <div style={{ flex: "1 0 0", minWidth: "0", paddingBottom: "9.92px", display: "flex", flexDirection: "column", gap: "1.24px" }}>
                        <p style={{ margin: "0", fontSize: "34.72px", fontWeight: "400", letterSpacing: "0", lineHeight: "1.4", color: "#EEEEEE" }}>
                          2027
                        </p>
                        <p style={{ margin: "0", fontSize: "15px", fontWeight: "400", lineHeight: "1.4", color: "#EEEEEE" }}>
                          community activities
                        </p>
                      </div>
                      <p style={{ flex: "1 0 0", minWidth: "0", margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                        Family-friendly activities and hands-on experiences will bring defence closer to the community.
                        {" "}
                        {" "}
                      </p>
                    </div>
                  </article>
                  <div style={{ display: "flex", gap: "9.92px", alignItems: "stretch", flexDirection: "column"  }}>
                    <article style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "19.84px", display: "flex", flexDirection: "column", borderRadius: "9.92px", background: "#272C3F", gap: "14.88px" }}>
                      <h3 style={{ margin: "0", fontSize: "15px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                        Creating more ways to contribute
                      </h3>
                      <p style={{ margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                        The SG Defence Volunteer Network gives volunteers more ways to contribute their skills towards defence and support NSmen and families.
                      </p>
                    </article>
                    <article style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "19.84px", display: "flex", flexDirection: "column", borderRadius: "9.92px", background: "#272C3F", gap: "14.88px" }}>
                      <h3 style={{ margin: "0", fontSize: "15px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                        Making defence part of everyday spaces
                      </h3>
                      <p style={{ margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                        The upcoming Defence Engagement Gallery brings Singapore’s defence story to life through immersive and interactive experiences.
                      </p>
                    </article>
                  </div>
                </div>
                <div className={`nxp ${s(v.nxv?.px)}`}>
                  <article style={{ boxSizing: "border-box", padding: "19.84px", display: "flex", flexDirection: "column", borderRadius: "9.92px", background: "#272C3F", gap: "14.88px" }}>
                    <h3 style={{ margin: "0", fontSize: "15px", fontWeight: "400", lineHeight: "1.2", color: "#F34141" }}>
                      <T v={v.nxv?.name} />
                    </h3>
                    <p style={{ margin: "0", fontSize: "13px", fontWeight: "400", lineHeight: "1.6", color: "#EEEEEE", opacity: ".8" }}>
                      Content for this topic is still to come.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="s14" aria-labelledby="end-title" style={{ position: "absolute", left: "0", top: "7348px", width: "390px", height: "844px", overflow: "hidden", background: "linear-gradient(90deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%)", borderImage: "linear-gradient(90deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%) 0 fill / 0 / 0 var(--gx, 0px)" }}>
          <h2 id="end-title" className="enk" style={{ "--d": ".55s", position: "absolute", left: "16px", top: "170px", margin: "0", fontSize: "30px", fontWeight: "600", lineHeight: "36px", letterSpacing: "0.01em", color: "#FFFFFF" }}>
            ONE YEAR.
            <br />
            MANY CONNECTIONS.
            <br />
            ONE SHARED PURPOSE.
          </h2>
          <div style={{ position: "absolute", left: "16px", top: "320px", width: "358px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px" }}>
            <p className="enk" style={{ "--d": ".75s", width: "358px", margin: "0", fontSize: "16px", lineHeight: "27px", color: "#FFFFFF" }}>
              From supporting NSmen and their families to strengthening community ties and our collective commitment to defence, SAFRA continues to bring people together through National Service.
            </p>
            <a className="enk dlb" href="#" onClick={v.noop} style={{ "--d": ".95s", width: "358px", height: "72px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: "14px", padding: "0 20px", borderRadius: "12px", background: "#FFFFFF", textDecoration: "none" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" style={{ flex: "none" }}>
                <defs>
                  <linearGradient id="dlg" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#C0469A" />
                    <stop offset="1" stopColor="#F3606F" />
                  </linearGradient>
                </defs>
                <path d="M14 3v13M8.5 11l5.5 5.5 5.5-5.5M3.5 19v4.5h21V19" fill="none" stroke="url(#dlg)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: "18px", fontWeight: "600", lineHeight: "24px", background: "linear-gradient(90deg, #6452A4 0%, #A2489F 22%, #E3449A 42%, #F04290 55%, #F3606F 78%, #F68C45 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                DOWNLOAD FULL
                <br />
                2025/26 ANNUAL REPORT
              </span>
            </a>
          </div>
        </section>
        <span className="bar3w" aria-hidden="true" style={{ "--dx": `${s(v.bar3?.dx)}px`, "--k": `${s(v.bar3?.k)}`, position: "absolute", left: `${s(v.bar3?.x)}px`, top: `${s(v.bar3?.y)}px`, display: "block", width: `${s(v.bar3?.w)}px`, height: `${s(v.bar3?.h)}px`, pointerEvents: "none" }}>
          <span className="bar3" style={{ position: "absolute", inset: "0", display: "block", background: "linear-gradient(180deg, #DD4493 0%, #E2448F 55%, #E9468D 100%)" }} />
        </span>
        <div className="glance" style={{ position: "absolute", left: `${s(v.head?.x)}px`, top: `${s(v.head?.y)}px`, transformOrigin: `${s(v.head?.ox)}px ${s(v.head?.oy)}px`, transform: `translateY(${s(v.head?.ty)}px) scale(${s(v.head?.s)})`, pointerEvents: "none" }}>
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
        <div style={{ position: "absolute", left: "16px", top: "140px", width: "358px", height: "440px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img className="lb-img" src={v.lbv?.src} alt={v.lbv?.alt} style={{ width: "auto", maxWidth: "358px", objectFit: "contain", display: "block", maxHeight: "440px"  }} />
        </div>
        <div style={{ position: "absolute", left: "0", top: "620px", width: "390px", display: "flex", justifyContent: "center", gap: "8px" }}>
          <button className={`lb-t ${s(v.lbv?.c0)}`} type="button" aria-label="Photo 1" onClick={v.lbT0} style={{ position: "relative", width: "44px", height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img src={v.lbv?.t0} alt="" style={{ width: "44px", height: "44px", objectFit: "cover", display: "block" }} />
          </button>
          <button className={`lb-t ${s(v.lbv?.c1)}`} type="button" aria-label="Photo 2" onClick={v.lbT1} style={{ position: "relative", width: "44px", height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img src={v.lbv?.t1} alt="" style={{ width: "44px", height: "44px", objectFit: "cover", display: "block" }} />
          </button>
          <button className={`lb-t ${s(v.lbv?.c2)}`} type="button" aria-label="Photo 3" onClick={v.lbT2} style={{ position: "relative", width: "44px", height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img src={v.lbv?.t2} alt="" style={{ width: "44px", height: "44px", objectFit: "cover", display: "block" }} />
          </button>
          <button className={`lb-t ${s(v.lbv?.c3)}`} type="button" aria-label="Photo 4" onClick={v.lbT3} style={{ position: "relative", width: "44px", height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img src={v.lbv?.t3} alt="" style={{ width: "44px", height: "44px", objectFit: "cover", display: "block" }} />
          </button>
          <button className={`lb-t ${s(v.lbv?.c4)}`} type="button" aria-label="Photo 5" onClick={v.lbT4} style={{ position: "relative", width: "44px", height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img src={v.lbv?.t4} alt="" style={{ width: "44px", height: "44px", objectFit: "cover", display: "block" }} />
          </button>
          <button className={`lb-t ${s(v.lbv?.c5)}`} type="button" aria-label="Photo 6" onClick={v.lbT5} style={{ position: "relative", width: "44px", height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img src={v.lbv?.t5} alt="" style={{ width: "44px", height: "44px", objectFit: "cover", display: "block" }} />
          </button>
          <button className={`lb-t ${s(v.lbv?.c6)}`} type="button" aria-label="Photo 7" onClick={v.lbT6} style={{ position: "relative", width: "44px", height: "44px", padding: "0", border: "0", overflow: "hidden", background: "#000", flex: "none" }}>
            <img src={v.lbv?.t6} alt="" style={{ width: "44px", height: "44px", objectFit: "cover", display: "block" }} />
          </button>
        </div>
        <button className="lb-x" type="button" aria-label="Close gallery" onClick={v.lbClose} style={{ position: "absolute", left: "330px", top: "16px", width: "44px", height: "44px", padding: "0", border: "0", background: "transparent", cursor: "pointer" }}>
          <svg width="52" height="52" viewBox="1366 22 52 52" aria-hidden="true">
            <rect x="1368" y="24" width="48" height="48" rx="24" fill="none" stroke="#F34141" strokeWidth="3" />
            <path d="M1382.1 38.1L1401.9 57.9M1382.1 57.9L1401.9 38.1" stroke="#F34141" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className={`tabs ${s(v.tabs?.cls)}`} role="tablist" aria-label="Our impact topics">
        <span className="tt-div" aria-hidden="true" style={{ left: "132px" }} />
        <span className="tt-div" aria-hidden="true" style={{ left: "256px" }} />
        <button className={`tt ${s(v.tabs?.s6)}`} type="button" role="tab" aria-selected={v.tabs?.s6sel} onClick={v.tab_s6} style={{ left: "16px", width: "110px"  }}>
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
        <button className={`tt ${s(v.tabs?.s7)}`} type="button" role="tab" aria-selected={v.tabs?.s7sel} onClick={v.tab_s7} style={{ left: "140px", width: "110px"  }}>
          <span className="tt-l">
            <span className="tt-g">
              Appreciating
            </span>
          </span>
          <span className="tt-l">
            <span className="tt-g">
              national servicemen
            </span>
          </span>
        </button>
        <button className={`tt ${s(v.tabs?.s8)}`} type="button" role="tab" aria-selected={v.tabs?.s8sel} onClick={v.tab_s8} style={{ left: "264px", width: "110px"  }}>
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
          <svg className="sm-ic sm-ic-g" width="23" height="20" viewBox="0 0 23 20" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="smG" x1="1" y1="0" x2="22" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6252A4" />
                <stop offset="0.490385" stopColor="#F14192" />
                <stop offset="0.927885" stopColor="#F6765D" />
                <stop offset="0.9999" stopColor="#F69141" />
              </linearGradient>
            </defs>
            <path d="M1 1H22M1 10H22M1 19H22" stroke="url(#smG)" strokeWidth="2" strokeLinecap="round" />
          </svg>
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
                <button className="nvi" type="button" onClick={v.nav_top}>
                  Overview
                </button>
              </li>
              <li>
                <button className="nvi" type="button" onClick={v.nav_s3}>
                  At a glance
                </button>
              </li>
              <li>
                <button className="nvi" type="button" onClick={v.nav_s5}>
                  Our impact
                </button>
              </li>
              <li>
                <button className="nvi" type="button" onClick={v.nav_nx}>
                  Future plan
                </button>
              </li>
            </ul>
            <a className="sm-cta" href="#" onClick={v.menuStop}>
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
                DOWNLOAD FULL
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
