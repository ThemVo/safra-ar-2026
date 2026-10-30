/* eslint-disable */
// The 1440×900 SAFRA AR highlights artboard. All copy is live text; icons are inline SVG.
// Markup generated from the design component's template — every {{binding}} reads from
// `v`, the object returned by ArtboardLogic#renderVals().
import React from 'react';
import { ArtboardLogic } from './ArtboardLogic.js';
import './artboard.css';

export const ARTBOARD_DEFAULTS = {"startView": "1 · Masthead", "showFinal": false, "parallax": 1};
export const START_VIEWS = ["1 · Masthead", "2 · Countdown", "3 · At a glance", "4 · Statement + Topics", "6 · Defence closer to the community", "7 · Appreciating NSmen", "8 · Strengthening bonds (1SG60)", "9 · Transition-2", "10 · Membership", "11 · Year in summary", "12 · Our work continues", "13 · What's next", "14 · One year (closing)"];

export default class Artboard extends ArtboardLogic {
  static defaultProps = ARTBOARD_DEFAULTS;

  render() {
    const v = { ...this.props, ...this.renderVals() };
    return (
      <>
      <div className={`mh ${v.lvClass ?? ""} ${v.dirClass ?? ""} ${v.freshClass ?? ""} ${v.stageClass ?? ""} ${v.s2Class ?? ""} ${v.s3Class ?? ""} ${v.viewClass ?? ""} ${v.go2Class ?? ""} ${v.go3Class ?? ""} ${v.s4Class ?? ""} ${v.go5Class ?? ""} ${v.postClass ?? ""} ${v.lgClass ?? ""} ${v.s6Class ?? ""} ${v.go6Class ?? ""} ${v.s7Class ?? ""} ${v.go7Class ?? ""} ${v.s8Class ?? ""} ${v.go8Class ?? ""} ${v.s9Class ?? ""} ${v.s10Class ?? ""} ${v.s11Class ?? ""} ${v.s12Class ?? ""} ${v.s13Class ?? ""} ${v.s14Class ?? ""}`} onMouseMove={v.move} onMouseLeave={v.leave} onWheel={v.wheel} onClick={v.tap} onTouchStart={v.touchStart} onTouchEnd={v.touchEnd} style={{ "position": "relative", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "#272C3F", "fontFamily": "'Google Sans Flex', 'Google Sans', system-ui, sans-serif", "fontWeight": "400", "color": "#F3F4F7" }}>
        <div className={"cam"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "4518px", "transform": `translateY(${v.camY ?? ""}px)` }}>
          <section className={"layer1"} aria-label={"SAFRA masthead"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "900px", "overflow": "hidden", "transformOrigin": "50% 80%" }}>
            <div className={"layer"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "900px", "transformOrigin": "50% 46%" }}>
              <div className={"px"} style={{ "position": "absolute", "left": "885px", "top": "0px", "width": "555px", "height": "349px", "borderRadius": "0 0 0 16px", "overflow": "hidden", "transform": v.pFamily }}>
                <img className={"ph ph1"} src={"/assets/mh-tr.jpg"} alt={"A father and child crawl under camouflage netting on an obstacle course"} style={{ "display": "block", "width": "555px", "height": "349px" }} />
              </div>
              <div className={"px"} style={{ "position": "absolute", "left": "104px", "top": "141px", "width": "339px", "height": "214px", "borderRadius": "16px", "overflow": "hidden", "transform": v.pConcert }}>
                <img className={"ph ph2"} src={"/assets/mh-tl.jpg"} alt={"A family in red poses with the SAFRA mascot at a National Day picnic"} style={{ "display": "block", "width": "339px", "height": "214px" }} />
              </div>
              <div className={"px"} style={{ "position": "absolute", "left": "0px", "top": "652px", "width": "394px", "height": "248px", "borderRadius": "0 16px 0 0", "overflow": "hidden", "transform": v.pKids }}>
                <img className={"ph ph3"} src={"/assets/mh-bl.jpg"} alt={"Members on exercise bikes in a spin class"} style={{ "display": "block", "width": "394px", "height": "248px" }} />
              </div>
              <div className={"px"} style={{ "position": "absolute", "left": "1196px", "top": "746px", "width": "244px", "height": "154px", "borderRadius": "16px 0 0 0", "overflow": "hidden", "transform": v.pTyres }}>
                <img className={"ph ph4"} src={"/assets/mh-br.jpg"} alt={"A group of members holding bowling balls at a bowling alley"} style={{ "display": "block", "width": "244px", "height": "154px" }} />
              </div>
            </div>
            <div className={"dim"} aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "900px", "background": "#272C3F", "pointerEvents": "none" }} />
            <img onLoad={v.hook} src={"/assets/ff8847615d28660626f1034069988996.png"} alt={""} style={{ "display": "none" }} />
            <div className={"logo"} style={{ "position": "absolute", "left": "210px", "top": "419px", "width": "1021px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px", "textAlign": "center", "pointerEvents": "none" }}>
              <p className={"lgl lg1"} style={{ "margin": "0", "fontSize": "56px", "fontWeight": "500", "lineHeight": "70px", "color": "#FFFFFF", "whiteSpace": "nowrap" }}>
                <span style={{ "color": "#F34141" }}>
                  {"SAFRA"}
                </span>
                {" Annual Report FY 2025/2026"}
              </p>
              <p className={"lgl lg2"} style={{ "margin": "0", "padding": "0 .04em", "fontSize": "56px", "fontWeight": "600", "lineHeight": "70px", "whiteSpace": "nowrap", "background": "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                {"KEY HIGHLIGHTS"}
              </p>
            </div>
            <p className={"agm"} style={{ "display": "none", "position": "absolute", "left": "40px", "top": `${v.agmTop ?? ""}px`, "width": "1400px", "margin": "0", "textAlign": "center", "fontSize": "27.2px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "0", "whiteSpace": "nowrap", "color": "#6E778B", "pointerEvents": "none" }}>
              {"53"}
              <sup style={{ "fontSize": "0.6em", "lineHeight": "0", "verticalAlign": "0.45em", "marginLeft": "1px" }}>
                {"rd"}
              </sup>
              {" SAFRA Annual General Meeting"}
            </p>
            <h1 aria-label={"Explore our efforts in strengthening commitment to defence and supporting NSmen’s needs"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "900px", "margin": "0", "fontWeight": "400", "lineHeight": "1", "whiteSpace": "nowrap", "pointerEvents": "none" }}>
              <span className={"ln ln1"} aria-hidden={"true"} style={{ "position": "absolute", "left": `${v.t?.t1?.x ?? ""}px`, "top": `${v.t?.t1?.y ?? ""}px`, "fontSize": `${v.t?.t1?.fs ?? ""}px`, "color": "#6E778B" }}>
                {(v.L_t1 ?? []).map((c, $index) => (
                  <React.Fragment key={$index}>
                    <span className={"lt"} style={{ "transform": c?.tf }}>
                      {c?.ch}
                    </span>
                  </React.Fragment>
                ))}
              </span>
              <span className={"ln ln2"} aria-hidden={"true"} style={{ "position": "absolute", "left": `${v.t?.t2?.x ?? ""}px`, "top": `${v.t?.t2?.y ?? ""}px`, "fontSize": `${v.t?.t2?.fs ?? ""}px` }}>
                {(v.L_t2 ?? []).map((c, $index) => (
                  <React.Fragment key={$index}>
                    <span className={"lt gl"} style={{ "transform": c?.tf, "backgroundSize": `${c?.bw ?? ""}px 100%`, "backgroundPosition": `${c?.bx ?? ""}px 0` }}>
                      {c?.ch}
                    </span>
                  </React.Fragment>
                ))}
              </span>
              <span className={"ln ln3"} aria-hidden={"true"} style={{ "position": "absolute", "left": `${v.t?.t3?.x ?? ""}px`, "top": `${v.t?.t3?.y ?? ""}px`, "fontSize": `${v.t?.t3?.fs ?? ""}px`, "color": "#6E778B" }}>
                {(v.L_t3 ?? []).map((c, $index) => (
                  <React.Fragment key={$index}>
                    <span className={"lt"} style={{ "transform": c?.tf }}>
                      {c?.ch}
                    </span>
                  </React.Fragment>
                ))}
              </span>
              <span className={"ln ln4 ln4a"} aria-hidden={"true"} style={{ "position": "absolute", "left": `${v.t?.t4a?.x ?? ""}px`, "top": `${v.t?.t4a?.y ?? ""}px`, "fontSize": `${v.t?.t4a?.fs ?? ""}px`, "color": "#6E778B" }}>
                {(v.L_t4a ?? []).map((c, $index) => (
                  <React.Fragment key={$index}>
                    <span className={"lt"} style={{ "transform": c?.tf }}>
                      {c?.ch}
                    </span>
                  </React.Fragment>
                ))}
              </span>
              <span className={"ln ln4 ln4b"} aria-hidden={"true"} style={{ "position": "absolute", "left": `${v.t?.t4b?.x ?? ""}px`, "top": `${v.t?.t4b?.y ?? ""}px`, "fontSize": `${v.t?.t4b?.fs ?? ""}px` }}>
                {(v.L_t4b ?? []).map((c, $index) => (
                  <React.Fragment key={$index}>
                    <span className={"lt gl"} style={{ "transform": c?.tf, "backgroundSize": `${c?.bw ?? ""}px 100%`, "backgroundPosition": `${c?.bx ?? ""}px 0` }}>
                      {c?.ch}
                    </span>
                  </React.Fragment>
                ))}
              </span>
              <span className={"ln ln4 ln4c"} aria-hidden={"true"} style={{ "position": "absolute", "left": `${v.t?.t4c?.x ?? ""}px`, "top": `${v.t?.t4c?.y ?? ""}px`, "fontSize": `${v.t?.t4c?.fs ?? ""}px`, "color": "#6E778B" }}>
                {(v.L_t4c ?? []).map((c, $index) => (
                  <React.Fragment key={$index}>
                    <span className={"lt"} style={{ "transform": c?.tf }}>
                      {c?.ch}
                    </span>
                  </React.Fragment>
                ))}
              </span>
              <span className={"ln ln5"} aria-hidden={"true"} style={{ "position": "absolute", "left": `${v.t?.t5?.x ?? ""}px`, "top": `${v.t?.t5?.y ?? ""}px`, "fontSize": `${v.t?.t5?.fs ?? ""}px` }}>
                {(v.L_t5 ?? []).map((c, $index) => (
                  <React.Fragment key={$index}>
                    <span className={"lt gl"} style={{ "transform": c?.tf, "backgroundSize": `${c?.bw ?? ""}px 100%`, "backgroundPosition": `${c?.bx ?? ""}px 0` }}>
                      {c?.ch}
                    </span>
                  </React.Fragment>
                ))}
              </span>
            </h1>
          </section>
          <span className={"bar"} aria-hidden={"true"} style={{ "position": "absolute", "left": `${v.bar?.x ?? ""}px`, "top": `${v.bar?.y ?? ""}px`, "display": "block", "width": `${v.bar?.w ?? ""}px`, "height": `${v.bar?.h ?? ""}px`, "background": "linear-gradient(180deg, #E84392 0%, #F5765E 40%, #F3597B 72%, #E8448F 100%)", "clipPath": v.bar?.clip, "pointerEvents": "none" }} />
          <section className={"s2"} aria-labelledby={"cd-title"} style={{ "--cx": `${v.bloomX ?? ""}px`, "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "linear-gradient(122deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%)" }}>
            <h2 id={"cd-title"} style={{ "position": "absolute", "left": "104px", "top": "160px", "margin": "0", "fontSize": "56px", "fontWeight": "500", "lineHeight": "1.12", "letterSpacing": "-0.01em", "color": "#FFFFFF" }}>
              <span className={"k k1a"} style={{ "display": "block" }}>
                {"Countdown to"}
              </span>
              <span className={"k k1b"} style={{ "display": "block" }}>
                {"the 53rd SAFRA AGM"}
              </span>
            </h2>
            <div role={"timer"} aria-live={"off"} aria-label={v.cd?.aria}>
              <div className={"k k2"} style={{ "position": "absolute", "left": "104px", "top": "332px", "width": "118px", "height": "120px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "borderRadius": "11px", "background": "#EFEFEF" }}>
                <span className={"gt"} style={{ "fontSize": "61px", "fontWeight": "600", "lineHeight": "1", "letterSpacing": "-2px", "fontVariantNumeric": "tabular-nums", "backgroundImage": "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", "padding": "0 .04em .05em" }}>
                  {v.cd?.d}
                </span>
                <span className={"gt"} style={{ "marginTop": "3px", "fontSize": "17px", "fontWeight": "500", "lineHeight": "1", "letterSpacing": "0", "backgroundImage": "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", "paddingBottom": ".15em" }}>
                  {"DAY"}
                </span>
              </div>
              <div className={"k k3"} style={{ "position": "absolute", "left": "229px", "top": "332px", "width": "118px", "height": "120px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "borderRadius": "11px", "background": "#EFEFEF" }}>
                <span className={"gt"} style={{ "fontSize": "61px", "fontWeight": "600", "lineHeight": "1", "letterSpacing": "-2px", "fontVariantNumeric": "tabular-nums", "backgroundImage": "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", "padding": "0 .04em .05em" }}>
                  {v.cd?.h}
                </span>
                <span className={"gt"} style={{ "marginTop": "3px", "fontSize": "17px", "fontWeight": "500", "lineHeight": "1", "letterSpacing": "0", "backgroundImage": "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", "paddingBottom": ".15em" }}>
                  {"HOUR"}
                </span>
              </div>
              <div className={"k k4"} style={{ "position": "absolute", "left": "354px", "top": "332px", "width": "118px", "height": "120px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "borderRadius": "11px", "background": "#EFEFEF" }}>
                <span className={"gt"} style={{ "fontSize": "61px", "fontWeight": "600", "lineHeight": "1", "letterSpacing": "-2px", "fontVariantNumeric": "tabular-nums", "backgroundImage": "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", "padding": "0 .04em .05em" }}>
                  {v.cd?.m}
                </span>
                <span className={"gt"} style={{ "marginTop": "3px", "fontSize": "17px", "fontWeight": "500", "lineHeight": "1", "letterSpacing": "0", "backgroundImage": "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", "paddingBottom": ".15em" }}>
                  {"MIN"}
                </span>
              </div>
              <div className={"k k4s"} style={{ "position": "absolute", "left": "479px", "top": "332px", "width": "118px", "height": "120px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "borderRadius": "11px", "background": "#EFEFEF" }}>
                <span className={"gt"} style={{ "fontSize": "61px", "fontWeight": "600", "lineHeight": "1", "letterSpacing": "-2px", "fontVariantNumeric": "tabular-nums", "backgroundImage": "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", "padding": "0 .04em .05em" }}>
                  {v.cd?.s}
                </span>
                <span className={"gt"} style={{ "marginTop": "3px", "fontSize": "17px", "fontWeight": "500", "lineHeight": "1", "letterSpacing": "0", "backgroundImage": "linear-gradient(90deg, #6452A4 0%, #F04290 52%, #F68C45 100%)", "paddingBottom": ".15em" }}>
                  {"SEC"}
                </span>
              </div>
            </div>
            <div className={"k k5"} style={{ "position": "absolute", "left": "823px", "top": "170px", "display": "flex", "alignItems": "flex-start" }}>
              <span style={{ "flex": "none", "width": "84px", "marginTop": "15px", "fontSize": "16px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "0.02em", "color": "#FFFFFF" }}>
                {"DATE"}
              </span>
              <span style={{ "fontSize": "42px", "fontWeight": "500", "lineHeight": "1.1", "letterSpacing": "-0.005em", "color": "#FFFFFF" }}>
                <time dateTime={"2026-11-22"}>
                  {"22 NOV 2026 (SUN)"}
                </time>
              </span>
            </div>
            <div className={"k k6"} style={{ "position": "absolute", "left": "823px", "top": "283px", "display": "flex", "alignItems": "flex-start" }}>
              <span style={{ "flex": "none", "width": "77px", "marginTop": "15px", "fontSize": "16px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "0.02em", "color": "#FFFFFF" }}>
                {"TIME"}
              </span>
              <span>
                <span style={{ "display": "block", "fontSize": "42px", "fontWeight": "500", "lineHeight": "1.1", "letterSpacing": "-0.005em", "color": "#FFFFFF" }}>
                  <time dateTime={"2026-11-22T14:30+08:00"}>
                    {"2:30PM"}
                  </time>
                </span>
                <span style={{ "display": "block", "marginTop": "12px", "fontSize": "17px", "fontWeight": "400", "lineHeight": "1.42", "color": "#FFFFFF" }}>
                  {"Kindly arrive earlier for attendance check-in onsite."}
                  <br />
                  {"Counters open from 1pm"}
                </span>
              </span>
            </div>
            <div className={"k k7"} style={{ "position": "absolute", "left": "823px", "top": "444px", "display": "flex", "alignItems": "flex-start" }}>
              <span style={{ "flex": "none", "width": "77px", "marginTop": "15px", "fontSize": "16px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "0.02em", "color": "#FFFFFF" }}>
                {"VENUE"}
              </span>
              <span style={{ "fontSize": "42px", "fontWeight": "500", "lineHeight": "1.1", "letterSpacing": "-0.005em", "color": "#FFFFFF" }}>
                {"SAFRA MOUNT FABER"}
              </span>
            </div>
            <a className={"k k8 more"} href={"#"} onClick={v.noop} style={{ "position": "absolute", "left": "823px", "top": "548px", "width": "441px", "height": "66px", "boxSizing": "border-box", "padding": "0 30px 0 32px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "borderRadius": "8px", "background": "#FFFFFF", "textDecoration": "none" }}>
              <span className={"rt"} style={{ "fontSize": "28px", "fontWeight": "600", "letterSpacing": "-0.005em" }}>
                <span className={"rt-a"}>
                  {"MORE ABOUT AGM 2026"}
                </span>
                <span className={"rt-v"} aria-hidden={"true"}>
                  <span className={"rt-w"} style={{ "--ci": "0", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"M"}
                    </span>
                    <span className={"rt-l"}>
                      {"M"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "1", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"O"}
                    </span>
                    <span className={"rt-l"}>
                      {"O"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "2", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"R"}
                    </span>
                    <span className={"rt-l"}>
                      {"R"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "3", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"E"}
                    </span>
                    <span className={"rt-l"}>
                      {"E"}
                    </span>
                  </span>
                  <span className={"rt-sp"} />
                  <span className={"rt-w"} style={{ "--ci": "5", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"A"}
                    </span>
                    <span className={"rt-l"}>
                      {"A"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "6", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"B"}
                    </span>
                    <span className={"rt-l"}>
                      {"B"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "7", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"O"}
                    </span>
                    <span className={"rt-l"}>
                      {"O"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "8", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"U"}
                    </span>
                    <span className={"rt-l"}>
                      {"U"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "9", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"T"}
                    </span>
                    <span className={"rt-l"}>
                      {"T"}
                    </span>
                  </span>
                  <span className={"rt-sp"} />
                  <span className={"rt-w"} style={{ "--ci": "11", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"A"}
                    </span>
                    <span className={"rt-l"}>
                      {"A"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "12", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"G"}
                    </span>
                    <span className={"rt-l"}>
                      {"G"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "13", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"M"}
                    </span>
                    <span className={"rt-l"}>
                      {"M"}
                    </span>
                  </span>
                  <span className={"rt-sp"} />
                  <span className={"rt-w"} style={{ "--ci": "15", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"2"}
                    </span>
                    <span className={"rt-l"}>
                      {"2"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "16", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"0"}
                    </span>
                    <span className={"rt-l"}>
                      {"0"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "17", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"2"}
                    </span>
                    <span className={"rt-l"}>
                      {"2"}
                    </span>
                  </span>
                  <span className={"rt-w"} style={{ "--ci": "18", "--ct": "19" }}>
                    <span className={"rt-u"}>
                      {"6"}
                    </span>
                    <span className={"rt-l"}>
                      {"6"}
                    </span>
                  </span>
                </span>
              </span>
              <svg className={"ar"} aria-hidden={"true"} width={"26"} height={"26"} viewBox={"0 0 26 26"} fill={"none"}>
                <defs>
                  <linearGradient id={"arG"} x1={"0"} y1={"26"} x2={"26"} y2={"0"} gradientUnits={"userSpaceOnUse"}>
                    <stop offset={"0"} stopColor={"#F04290"} />
                    <stop offset={"1"} stopColor={"#F68C45"} />
                  </linearGradient>
                </defs>
                <path d={"M5 21 L20 6 M8 5 H21 V18"} stroke={"url(#arG)"} strokeWidth={"4.2"} strokeLinecap={"round"} strokeLinejoin={"round"} />
              </svg>
            </a>
            <svg className={"k tg"} aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "top": "697px", "width": "1440px", "height": "204px", "display": "block" }} viewBox={"0 0 1440 204"} preserveAspectRatio={"none"}>
              <path fill={"#272C3F"} d={"M0 204 V200 C0 150 36 120 96 120 H540 C580 120 598 92 626 56 C652 22 684 4 720 4 C756 4 788 22 814 56 C842 92 860 120 900 120 H1344 C1404 120 1440 150 1440 200 V204 Z"} />
            </svg>
            <button className={"k k9 cue"} type={"button"} aria-label={"Scroll down to see Annual Report Highlights"} onClick={v.next} style={{ "position": "absolute", "left": "640px", "top": "732px", "width": "160px", "height": "160px", "padding": "0", "border": "0", "borderRadius": "50%", "background": "transparent", "cursor": "pointer" }}>
              <svg width={"160"} height={"160"} viewBox={"0 0 160 160"} style={{ "display": "block", "overflow": "visible" }}>
                <defs>
                  <linearGradient id={"cueG"} x1={"10"} y1={"80"} x2={"150"} y2={"80"} gradientUnits={"userSpaceOnUse"}>
                    <stop offset={"0"} stopColor={"#6452A4"} />
                    <stop offset={".55"} stopColor={"#F04290"} />
                    <stop offset={"1"} stopColor={"#F68C45"} />
                  </linearGradient>
                  <linearGradient id={"dnG"} x1={"0"} y1={"52"} x2={"0"} y2={"106"} gradientUnits={"userSpaceOnUse"}>
                    <stop offset={"0"} stopColor={"#8D4FA0"} />
                    <stop offset={".55"} stopColor={"#F04290"} />
                    <stop offset={"1"} stopColor={"#F5765E"} />
                  </linearGradient>
                  <path id={"cueP"} d={"M80 80 m-64 0 a64 64 0 1 0 128 0 a64 64 0 1 0 -128 0"} />
                </defs>
                <g className={"rg"}>
                  <g className={"txt"}>
                    <text fontSize={"16"} fontFamily={"'Google Sans Flex','Google Sans',system-ui,sans-serif"} fill={"url(#cueG)"}>
                      <textPath href={"#cueP"} startOffset={"10"} textLength={"382"} lengthAdjust={"spacing"}>
                        {"Scroll down to see Annual Report Highlights  •"}
                      </textPath>
                    </text>
                  </g>
                </g>
                <g className={"dn"}>
                  <path d={"M80 56 V102"} stroke={"url(#dnG)"} strokeWidth={v.lw} strokeLinecap={"butt"} fill={"none"} />
                  <path className={"wg"} d={"M62 86 L80 104 L98 86"} stroke={"url(#dnG)"} strokeWidth={v.lw} strokeLinecap={"butt"} strokeLinejoin={"miter"} strokeMiterlimit={"4"} fill={"none"} />
                </g>
              </svg>
            </button>
          </section>
          <section aria-labelledby={"glance-title"} style={{ "position": "absolute", "left": "0", "top": "900px", "width": "1440px", "height": "918px" }}>
            <div className={`sl ${v.sl0 ?? ""}`} aria-label={"Membership"}>
              <div className={"sub"} style={{ "position": "absolute", "left": "0", "top": "206px", "width": "1440px", "textAlign": "center" }}>
                <h3 style={{ "display": "inline-block", "margin": "0", "padding": "0 .04em .12em", "fontSize": "40px", "fontWeight": "500", "lineHeight": "1.2", "letterSpacing": "-0.005em", "background": "linear-gradient(90deg, #6C51A2 0%, #B0489E 30%, #E8448F 58%, #F3606F 80%, #F68A49 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                  {"Membership"}
                </h3>
              </div>
              <div className={"cd"} style={{ "--i": "0", "position": "absolute", "left": "64px", "top": "290px", "width": "316px", "height": "222px", "boxSizing": "border-box", "padding": "0 24px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "8px", "borderRadius": "14px", "background": "#18212A" }}>
                <p style={{ "margin": "0", "fontSize": "20px", "fontWeight": "400", "lineHeight": "1.25", "color": "#FFFFFF" }}>
                  {"Members"}
                </p>
                <p aria-label={"Over 417K"} style={{ "margin": "0", "fontSize": "66px", "fontWeight": "400", "lineHeight": "1.05", "letterSpacing": "-0.04em", "color": "#F34241", "fontVariantNumeric": "tabular-nums" }}>
                  <span style={{ "marginRight": "14px", "fontSize": "22px", "letterSpacing": "0", "verticalAlign": "0.3em" }}>
                    {"Over"}
                  </span>
                  {v.v?.m1}
                </p>
              </div>
              <div className={"cd frame"} style={{ "--i": "1", "position": "absolute", "left": "64px", "top": "530px", "width": "316px", "height": "329px", "borderRadius": "14px", "overflow": "hidden" }}>
                <img className={"pic"} src={"/assets/ag-run.jpg"} alt={"A running group of members in SAFRA singlets posing outdoors at sunset"} style={{ "display": "block", "width": "316px", "height": "329px", "objectFit": "cover" }} />
              </div>
              <div className={"cd frame"} style={{ "--i": "2", "position": "absolute", "left": "397px", "top": "290px", "width": "647px", "height": "569px", "borderRadius": "14px", "overflow": "hidden" }}>
                <img className={"pic"} src={"/assets/25ac34a7bb7e63a91ebb2d45156f874c.png"} alt={"Members and their children with a gingerbread mascot at a festive celebration"} style={{ "display": "block", "width": "647px", "height": "569px", "objectFit": "cover" }} />
              </div>
              <div className={"cd"} style={{ "--i": "3", "position": "absolute", "left": "1061px", "top": "290px", "width": "315px", "height": "569px", "boxSizing": "border-box", "padding": "24px 24px 36px", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "gap": "8px", "borderRadius": "14px", "background": "#18212A" }}>
                <p style={{ "margin": "0", "fontSize": "20px", "fontWeight": "400", "lineHeight": "1.25", "color": "#FFFFFF" }}>
                  {"Satisfaction Rating"}
                </p>
                <p aria-label={"86%"} style={{ "margin": "0", "fontSize": "66px", "fontWeight": "400", "lineHeight": "1.05", "letterSpacing": "-0.04em", "color": "#F34241", "fontVariantNumeric": "tabular-nums" }}>
                  {v.v?.m2}
                </p>
              </div>
            </div>
            <div className={`sl ${v.sl1 ?? ""}`} aria-label={"Outreach and Engagement"}>
              <div className={"sub"} style={{ "position": "absolute", "left": "0", "top": "206px", "width": "1440px", "textAlign": "center" }}>
                <h3 style={{ "display": "inline-block", "margin": "0", "padding": "0 .04em .12em", "fontSize": "40px", "fontWeight": "500", "lineHeight": "1.2", "letterSpacing": "-0.005em", "background": "linear-gradient(90deg, #6C51A2 0%, #B0489E 30%, #E8448F 58%, #F3606F 80%, #F68A49 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                  {"Outreach & Engagement"}
                </h3>
              </div>
              <div className={"cd frame"} style={{ "--i": "0", "position": "absolute", "left": "64px", "top": "290px", "width": "316px", "height": "357px", "borderRadius": "14px", "overflow": "hidden" }}>
                <img className={"pic"} src={"/assets/ag-bikes.jpg"} alt={"Young children racing on balance bikes at a SAFRA event"} style={{ "display": "block", "width": "316px", "height": "357px", "objectFit": "cover" }} />
              </div>
              <div className={"cd"} style={{ "--i": "1", "position": "absolute", "left": "64px", "top": "664px", "width": "316px", "height": "195px", "boxSizing": "border-box", "padding": "24px 24px 30px", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "gap": "8px", "borderRadius": "14px", "background": "#18212A" }}>
                <p style={{ "margin": "0", "fontSize": "20px", "fontWeight": "400", "lineHeight": "1.25", "color": "#FFFFFF" }}>
                  {"Participation in SAFRA"}
                  <br />
                  {"Activities"}
                </p>
                <p aria-label={"Over 1.72M"} style={{ "margin": "0", "fontSize": "66px", "fontWeight": "400", "lineHeight": "1.05", "letterSpacing": "-0.04em", "color": "#F34241", "fontVariantNumeric": "tabular-nums" }}>
                  <span style={{ "marginRight": "14px", "fontSize": "22px", "letterSpacing": "0", "verticalAlign": "0.3em" }}>
                    {"Over"}
                  </span>
                  {v.v?.o1}
                </p>
              </div>
              <div className={"cd"} style={{ "--i": "5", "position": "absolute", "left": "729px", "top": "597px", "width": "316px", "height": "262px", "boxSizing": "border-box", "padding": "24px 24px 30px", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "gap": "8px", "borderRadius": "14px", "background": "#18212A" }}>
                <p style={{ "margin": "0", "fontSize": "20px", "fontWeight": "400", "lineHeight": "1.25", "color": "#FFFFFF" }}>
                  {"People Engaged Through"}
                  <br />
                  {"Appreciating NSmen"}
                  <br />
                  {"Initiatives"}
                </p>
                <p aria-label={"Over 75K"} style={{ "margin": "0", "fontSize": "66px", "fontWeight": "400", "lineHeight": "1.05", "letterSpacing": "-0.04em", "color": "#F34241", "fontVariantNumeric": "tabular-nums" }}>
                  <span style={{ "marginRight": "14px", "fontSize": "22px", "letterSpacing": "0", "verticalAlign": "0.3em" }}>
                    {"Over"}
                  </span>
                  {v.v?.o2}
                </p>
              </div>
              <div className={"cd frame"} style={{ "--i": "4", "position": "absolute", "left": "729px", "top": "290px", "width": "316px", "height": "290px", "borderRadius": "14px", "overflow": "hidden" }}>
                <img className={"pic"} src={"/assets/ag-card.jpg"} alt={"A child’s handmade thank-you card with a family photo for an NSman father"} style={{ "display": "block", "width": "316px", "height": "290px", "objectFit": "cover" }} />
              </div>
              <div className={"cd frame"} style={{ "--i": "3", "position": "absolute", "left": "397px", "top": "502px", "width": "315px", "height": "357px", "borderRadius": "14px", "overflow": "hidden" }}>
                <img className={"pic"} src={"/assets/ag-blaster.jpg"} alt={"Children in Army T-shirts trying out water blasters"} style={{ "display": "block", "width": "315px", "height": "357px", "objectFit": "cover" }} />
              </div>
              <div className={"cd"} style={{ "--i": "2", "position": "absolute", "left": "397px", "top": "290px", "width": "315px", "height": "195px", "boxSizing": "border-box", "padding": "24px 24px 30px", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "gap": "8px", "borderRadius": "14px", "background": "#18212A" }}>
                <p style={{ "margin": "0", "fontSize": "20px", "fontWeight": "400", "lineHeight": "1.25", "color": "#FFFFFF" }}>
                  {"Participation in Defence"}
                  <br />
                  {"Outreach Initiatives"}
                </p>
                <p aria-label={"Over 211K"} style={{ "margin": "0", "fontSize": "66px", "fontWeight": "400", "lineHeight": "1.05", "letterSpacing": "-0.04em", "color": "#F34241", "fontVariantNumeric": "tabular-nums" }}>
                  <span style={{ "marginRight": "14px", "fontSize": "22px", "letterSpacing": "0", "verticalAlign": "0.3em" }}>
                    {"Over"}
                  </span>
                  {v.v?.o3}
                </p>
              </div>
              <div className={"cd"} style={{ "--i": "6", "position": "absolute", "left": "1061px", "top": "290px", "width": "316px", "height": "262px", "boxSizing": "border-box", "padding": "24px 24px 30px", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "gap": "8px", "borderRadius": "14px", "background": "#18212A" }}>
                <p style={{ "margin": "0", "fontSize": "20px", "fontWeight": "400", "lineHeight": "1.25", "color": "#FFFFFF" }}>
                  {"Participation in Cohesion"}
                  <br />
                  {"Activities for NS Units"}
                </p>
                <p aria-label={"Over 52K"} style={{ "margin": "0", "fontSize": "66px", "fontWeight": "400", "lineHeight": "1.05", "letterSpacing": "-0.04em", "color": "#F34241", "fontVariantNumeric": "tabular-nums" }}>
                  <span style={{ "marginRight": "14px", "fontSize": "22px", "letterSpacing": "0", "verticalAlign": "0.3em" }}>
                    {"Over"}
                  </span>
                  {v.v?.o4}
                </p>
              </div>
              <div className={"cd frame"} style={{ "--i": "7", "position": "absolute", "left": "1061px", "top": "569px", "width": "316px", "height": "290px", "borderRadius": "14px", "overflow": "hidden" }}>
                <img className={"pic"} src={"/assets/ag-group.jpg"} alt={"A group of NSmen in singlets cheering with snack packs"} style={{ "display": "block", "width": "316px", "height": "290px", "objectFit": "cover" }} />
              </div>
            </div>
            <div className={`sl ${v.sl2 ?? ""}`} aria-label={"Sustainability"}>
              <div className={"sub"} style={{ "position": "absolute", "left": "0", "top": "206px", "width": "1440px", "textAlign": "center" }}>
                <h3 style={{ "display": "inline-block", "margin": "0", "padding": "0 .04em .12em", "fontSize": "40px", "fontWeight": "500", "lineHeight": "1.2", "letterSpacing": "-0.005em", "background": "linear-gradient(90deg, #6C51A2 0%, #B0489E 30%, #E8448F 58%, #F3606F 80%, #F68A49 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                  {"Sustainability"}
                </h3>
              </div>
              <div className={"cd frame"} style={{ "--i": "0", "position": "absolute", "left": "64px", "top": "290px", "width": "467px", "height": "279px", "borderRadius": "14px", "overflow": "hidden" }}>
                <img className={"pic"} src={"/assets/ag-solar.jpg"} alt={"Rooftop solar panels under a blue sky"} style={{ "display": "block", "width": "467px", "height": "279px", "objectFit": "cover" }} />
              </div>
              <div className={"cd"} style={{ "--i": "1", "position": "absolute", "left": "548px", "top": "290px", "width": "406px", "height": "279px", "boxSizing": "border-box", "padding": "24px 24px 26px", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "gap": "8px", "borderRadius": "14px", "background": "#18212A" }}>
                <p style={{ "margin": "0", "fontSize": "20px", "fontWeight": "400", "lineHeight": "1.25", "color": "#FFFFFF" }}>
                  {"Solar Energy Generated"}
                </p>
                <p aria-label={"1,074 MWh"} style={{ "margin": "0", "fontSize": "52px", "fontWeight": "400", "lineHeight": "1.05", "letterSpacing": "-0.04em", "color": "#F34241", "fontVariantNumeric": "tabular-nums" }}>
                  {v.v?.s1}
                </p>
                <p style={{ "margin": "4px 0 0", "fontSize": "16px", "fontWeight": "400", "lineHeight": "1.25", "color": "rgba(255,255,255,.92)" }}>
                  {"Equivalent to the electricity usage of over 320"}
                  <br />
                  {"4-room HDB flats for a year"}
                </p>
              </div>
              <div className={"cd"} style={{ "--i": "2", "position": "absolute", "left": "971px", "top": "290px", "width": "406px", "height": "279px", "boxSizing": "border-box", "padding": "24px 24px 26px", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "gap": "8px", "borderRadius": "14px", "background": "#18212A" }}>
                <p style={{ "margin": "0", "fontSize": "20px", "fontWeight": "400", "lineHeight": "1.25", "color": "#FFFFFF" }}>
                  {"Reduction in Carbon Dioxide (CO"}
                  <sub style={{ "fontSize": ".65em", "verticalAlign": "-0.25em", "lineHeight": "0" }}>
                    {"2"}
                  </sub>
                  {")"}
                  <br />
                  {"Emissions"}
                </p>
                <p aria-label={"432 Tonnes"} style={{ "margin": "0", "fontSize": "52px", "fontWeight": "400", "lineHeight": "1.05", "letterSpacing": "-0.04em", "color": "#F34241", "fontVariantNumeric": "tabular-nums" }}>
                  {v.v?.s2}
                </p>
                <p style={{ "margin": "4px 0 0", "fontSize": "16px", "fontWeight": "400", "lineHeight": "1.25", "color": "rgba(255,255,255,.92)" }}>
                  {"Equivalent to the annual CO"}
                  <sub style={{ "fontSize": ".7em", "verticalAlign": "-0.25em", "lineHeight": "0" }}>
                    {"2"}
                  </sub>
                  {" absorption of"}
                  <br />
                  {"19.8K mature trees"}
                </p>
              </div>
              <div className={"cd"} style={{ "--i": "3", "position": "absolute", "left": "64px", "top": "586px", "width": "467px", "height": "273px", "boxSizing": "border-box", "padding": "24px 24px 30px", "display": "flex", "flexDirection": "column", "justifyContent": "flex-end", "gap": "8px", "borderRadius": "14px", "background": "#18212A" }}>
                <p style={{ "margin": "0", "fontSize": "20px", "fontWeight": "400", "lineHeight": "1.25", "color": "#FFFFFF" }}>
                  {"Number of Solar Panels Across"}
                  <br />
                  {"SAFRA Clubs Inclusive of 870 New Panels"}
                  <br />
                  {"Installed at SAFRA Yishun"}
                </p>
                <p aria-label={"6,850"} style={{ "margin": "0", "fontSize": "52px", "fontWeight": "400", "lineHeight": "1.05", "letterSpacing": "-0.04em", "color": "#F34241", "fontVariantNumeric": "tabular-nums" }}>
                  {v.v?.s3}
                </p>
              </div>
              <div className={"cd frame"} style={{ "--i": "4", "position": "absolute", "left": "548px", "top": "586px", "width": "829px", "height": "273px", "borderRadius": "14px", "overflow": "hidden" }}>
                <img className={"pic"} src={"/assets/ag-trees.jpg"} alt={"Lush rain trees in front of city buildings"} style={{ "display": "block", "width": "829px", "height": "273px", "objectFit": "cover" }} />
              </div>
            </div>
            <div className={"sweep"} aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "top": "910px", "width": "1440px", "height": "8px", "transform": `scaleX(${v.sweepS ?? ""})`, "background": "linear-gradient(90deg, #74509F 0%, #F46074 55%, #F68F43 100%)" }} />
          </section>
          <section className={"s45"} aria-labelledby={"t1-title"} style={{ "position": "absolute", "left": "0", "top": "1818px", "width": "1440px", "height": "900px", "overflow": "hidden" }}>
            <div className={"tx"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "490px" }}>
              <h2 id={"t1-title"} aria-label={"The numbers tell our impact. The stories show what it means."} style={{ "position": "absolute", "left": "0", "top": "115px", "width": "1440px", "margin": "0", "textAlign": "center", "fontWeight": "400", "lineHeight": "1.12" }}>
                <span className={"t4a"} aria-hidden={"true"} style={{ "display": "block", "fontSize": "63px", "color": "#6E778B", "whiteSpace": "nowrap" }}>
                  {(v.L_s4a ?? []).map((c, $index) => (
                    <React.Fragment key={$index}>
                      <span className={"lt"} style={{ "transform": c?.tf }}>
                        {c?.ch}
                      </span>
                    </React.Fragment>
                  ))}
                </span>
                <span className={"t4b"} aria-hidden={"true"} style={{ "display": "inline-block", "marginTop": "8px", "fontSize": "82px", "whiteSpace": "nowrap" }}>
                  {(v.L_s4b ?? []).map((c, $index) => (
                    <React.Fragment key={$index}>
                      <span className={"lt gl"} style={{ "transform": c?.tf, "backgroundImage": "linear-gradient(90deg, #6452A4 0%, #A84A9C 22%, #E8448F 45%, #F3477F 62%, #F3666A 82%, #F68C45 100%)", "backgroundSize": `${c?.bw ?? ""}px 100%`, "backgroundPosition": `${c?.bx ?? ""}px 0` }}>
                        {c?.ch}
                      </span>
                    </React.Fragment>
                  ))}
                </span>
              </h2>
            </div>
            <nav aria-label={"Topics"}>
              <a className={`tc ${v.lv1 ?? ""}`} href={"#dc-title"} onClick={v.topic1} aria-label={"Bringing defence closer to the community"} style={{ "--i": "0", "position": "absolute", "left": "104px", "top": "365px", "width": "394px", "height": "420px", "boxSizing": "border-box", "padding": "37px 34px", "borderRadius": "22px", "textDecoration": "none" }}>
                <svg className={"tc-s"} aria-hidden={"true"} width={"394"} height={"420"} viewBox={"0 0 394 420"} style={{ "position": "absolute", "left": "0", "top": "0", "overflow": "visible", "pointerEvents": "none" }}>
                  <defs>
                    <linearGradient id={"tcs0"} x1={"0"} y1={"0"} x2={"394"} y2={"420"} gradientUnits={"userSpaceOnUse"}>
                      <stop offset={"0"} stopColor={"#6452A4"} />
                      <stop offset={".45"} stopColor={"#F04290"} />
                      <stop offset={"1"} stopColor={"#F68C45"} />
                    </linearGradient>
                  </defs>
                  <rect className={"tc-r tc-tail"} x={"1.5"} y={"1.5"} width={"391"} height={"417"} rx={"20.5"} pathLength={"100"} fill={"none"} stroke={"url(#tcs0)"} strokeWidth={"4"} strokeDasharray={"46 54"} strokeLinecap={"round"} opacity={".28"} />
                  <rect className={"tc-r tc-head"} x={"1.5"} y={"1.5"} width={"391"} height={"417"} rx={"20.5"} pathLength={"100"} fill={"none"} stroke={"url(#tcs0)"} strokeWidth={"4"} strokeDasharray={"24 76"} strokeLinecap={"round"} />
                </svg>
                <span className={"tc-t"} style={{ "position": "relative", "display": "block", "fontSize": "32px", "fontWeight": "700", "lineHeight": "41px", "letterSpacing": "0.012em", "textTransform": "uppercase", "color": "#A7A9AE" }}>
                  {"Bringing"}
                  <br />
                  {"defence closer"}
                  <br />
                  {"to the"}
                  <br />
                  {"community"}
                  <span className={"tc-g"} aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "top": "0", "paddingBottom": ".1em", "background": "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                    {"Bringing"}
                    <br />
                    {"defence closer"}
                    <br />
                    {"to the"}
                    <br />
                    {"community"}
                  </span>
                </span>
                <span className={"tc-stk"} aria-hidden={"true"}>
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                </span>
                <span className={"tc-b"} style={{ "position": "absolute", "left": "34px", "top": "33px", "right": "30px", "fontSize": "21px", "fontWeight": "400", "lineHeight": "40px", "letterSpacing": "0", "color": "#A7A9AE" }}>
                  {"Fostering a deeper understanding of how the wider community can play a part in Total Defence."}
                </span>
                <svg className={"tc-i"} aria-hidden={"true"} width={"58"} height={"58"} viewBox={"0 0 24 24"} style={{ "position": "absolute", "right": "28px", "bottom": "27px", "overflow": "visible" }}>
                  <defs>
                    <linearGradient id={"tcg0"} x1={"2"} y1={"22"} x2={"22"} y2={"2"} gradientUnits={"userSpaceOnUse"}>
                      <stop offset={"0"} stopColor={"#6452A4"} />
                      <stop offset={".55"} stopColor={"#F04290"} />
                      <stop offset={"1"} stopColor={"#F68C45"} />
                    </linearGradient>
                  </defs>
                  <g className={"ig"}>
                    <path d={"M12 2.2 4.2 5.1v6.2c0 4.9 3.3 9.1 7.8 10.5 4.5-1.4 7.8-5.6 7.8-10.5V5.1L12 2.2Z"} fill={"none"} stroke={"#A7A9AE"} strokeWidth={"2.1"} strokeLinejoin={"round"} />
                    <path d={"M12 6.1 7.6 7.8v3.7c0 2.9 1.9 5.4 4.4 6.3 2.5-.9 4.4-3.4 4.4-6.3V7.8L12 6.1Z"} fill={"#A7A9AE"} />
                  </g>
                  <g className={"ic"}>
                    <path d={"M12 2.2 4.2 5.1v6.2c0 4.9 3.3 9.1 7.8 10.5 4.5-1.4 7.8-5.6 7.8-10.5V5.1L12 2.2Z"} fill={"none"} stroke={"url(#tcg0)"} strokeWidth={"2.1"} strokeLinejoin={"round"} />
                    <path d={"M12 6.1 7.6 7.8v3.7c0 2.9 1.9 5.4 4.4 6.3 2.5-.9 4.4-3.4 4.4-6.3V7.8L12 6.1Z"} fill={"url(#tcg0)"} />
                  </g>
                </svg>
              </a>
              <a className={`tc ${v.lv2 ?? ""}`} href={"#an-title"} onClick={v.topic2} aria-label={"Appreciating national servicemen"} style={{ "--i": "1", "position": "absolute", "left": "524px", "top": "365px", "width": "394px", "height": "420px", "boxSizing": "border-box", "padding": "37px 34px", "borderRadius": "22px", "textDecoration": "none" }}>
                <svg className={"tc-s"} aria-hidden={"true"} width={"394"} height={"420"} viewBox={"0 0 394 420"} style={{ "position": "absolute", "left": "0", "top": "0", "overflow": "visible", "pointerEvents": "none" }}>
                  <defs>
                    <linearGradient id={"tcs1"} x1={"0"} y1={"0"} x2={"394"} y2={"420"} gradientUnits={"userSpaceOnUse"}>
                      <stop offset={"0"} stopColor={"#6452A4"} />
                      <stop offset={".45"} stopColor={"#F04290"} />
                      <stop offset={"1"} stopColor={"#F68C45"} />
                    </linearGradient>
                  </defs>
                  <rect className={"tc-r tc-tail"} x={"1.5"} y={"1.5"} width={"391"} height={"417"} rx={"20.5"} pathLength={"100"} fill={"none"} stroke={"url(#tcs1)"} strokeWidth={"4"} strokeDasharray={"46 54"} strokeLinecap={"round"} opacity={".28"} />
                  <rect className={"tc-r tc-head"} x={"1.5"} y={"1.5"} width={"391"} height={"417"} rx={"20.5"} pathLength={"100"} fill={"none"} stroke={"url(#tcs1)"} strokeWidth={"4"} strokeDasharray={"24 76"} strokeLinecap={"round"} />
                </svg>
                <span className={"tc-t"} style={{ "position": "relative", "display": "block", "fontSize": "32px", "fontWeight": "700", "lineHeight": "41px", "letterSpacing": "0.012em", "textTransform": "uppercase", "color": "#A7A9AE" }}>
                  {"Appreciating"}
                  <br />
                  {"national"}
                  <br />
                  {"servicemen"}
                  <span className={"tc-g"} aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "top": "0", "paddingBottom": ".1em", "background": "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                    {"Appreciating"}
                    <br />
                    {"national"}
                    <br />
                    {"servicemen"}
                  </span>
                </span>
                <span className={"tc-stk"} aria-hidden={"true"}>
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                </span>
                <span className={"tc-b"} style={{ "position": "absolute", "left": "34px", "top": "33px", "right": "30px", "fontSize": "21px", "fontWeight": "400", "lineHeight": "40px", "letterSpacing": "0", "color": "#A7A9AE" }}>
                  {"Education institutions and"}
                  <br />
                  {"businesses step up to honour"}
                  <br />
                  {"the ongoing dedication of our"}
                  <br />
                  {"national servicemen."}
                </span>
                <svg className={"tc-i"} aria-hidden={"true"} width={"58"} height={"58"} viewBox={"0 0 24 24"} style={{ "position": "absolute", "right": "28px", "bottom": "27px", "overflow": "visible" }}>
                  <defs>
                    <linearGradient id={"tcg1"} x1={"2"} y1={"22"} x2={"22"} y2={"2"} gradientUnits={"userSpaceOnUse"}>
                      <stop offset={"0"} stopColor={"#6452A4"} />
                      <stop offset={".55"} stopColor={"#F04290"} />
                      <stop offset={"1"} stopColor={"#F68C45"} />
                    </linearGradient>
                  </defs>
                  <g className={"ig"}>
                    <path fillRule={"evenodd"} d={"M12 2.5a9.5 9.5 0 0 0-8.3 14.1L2.6 21.4l4.9-1.2A9.5 9.5 0 1 0 12 2.5Zm0 13.6-3.5-3.4a2.1 2.1 0 0 1 3-3l.5.5.5-.5a2.1 2.1 0 0 1 3 3L12 16.1Z"} fill={"#A7A9AE"} />
                  </g>
                  <g className={"ic"}>
                    <path fillRule={"evenodd"} d={"M12 2.5a9.5 9.5 0 0 0-8.3 14.1L2.6 21.4l4.9-1.2A9.5 9.5 0 1 0 12 2.5Zm0 13.6-3.5-3.4a2.1 2.1 0 0 1 3-3l.5.5.5-.5a2.1 2.1 0 0 1 3 3L12 16.1Z"} fill={"url(#tcg1)"} />
                  </g>
                </svg>
              </a>
              <a className={`tc ${v.lv3 ?? ""}`} href={"#sb-title"} onClick={v.topic3} aria-label={"Strengthening bonds"} style={{ "--i": "2", "position": "absolute", "left": "944px", "top": "365px", "width": "394px", "height": "420px", "boxSizing": "border-box", "padding": "37px 34px", "borderRadius": "22px", "textDecoration": "none" }}>
                <svg className={"tc-s"} aria-hidden={"true"} width={"394"} height={"420"} viewBox={"0 0 394 420"} style={{ "position": "absolute", "left": "0", "top": "0", "overflow": "visible", "pointerEvents": "none" }}>
                  <defs>
                    <linearGradient id={"tcs2"} x1={"0"} y1={"0"} x2={"394"} y2={"420"} gradientUnits={"userSpaceOnUse"}>
                      <stop offset={"0"} stopColor={"#6452A4"} />
                      <stop offset={".45"} stopColor={"#F04290"} />
                      <stop offset={"1"} stopColor={"#F68C45"} />
                    </linearGradient>
                  </defs>
                  <rect className={"tc-r tc-tail"} x={"1.5"} y={"1.5"} width={"391"} height={"417"} rx={"20.5"} pathLength={"100"} fill={"none"} stroke={"url(#tcs2)"} strokeWidth={"4"} strokeDasharray={"46 54"} strokeLinecap={"round"} opacity={".28"} />
                  <rect className={"tc-r tc-head"} x={"1.5"} y={"1.5"} width={"391"} height={"417"} rx={"20.5"} pathLength={"100"} fill={"none"} stroke={"url(#tcs2)"} strokeWidth={"4"} strokeDasharray={"24 76"} strokeLinecap={"round"} />
                </svg>
                <span className={"tc-t"} style={{ "position": "relative", "display": "block", "fontSize": "32px", "fontWeight": "700", "lineHeight": "41px", "letterSpacing": "0.012em", "textTransform": "uppercase", "color": "#A7A9AE" }}>
                  {"Strengthening"}
                  <br />
                  {"bonds"}
                  <span className={"tc-g"} aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "top": "0", "paddingBottom": ".1em", "background": "linear-gradient(120deg, #6452A4 0%, #C0469A 35%, #F04290 60%, #F68C45 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                    {"Strengthening"}
                    <br />
                    {"bonds"}
                  </span>
                </span>
                <span className={"tc-stk"} aria-hidden={"true"}>
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                  <img className={"stk"} alt={""} src={""} style={{ "display": "none" }} />
                </span>
                <span className={"tc-b"} style={{ "position": "absolute", "left": "34px", "top": "33px", "right": "30px", "fontSize": "21px", "fontWeight": "400", "lineHeight": "40px", "letterSpacing": "0", "color": "#A7A9AE" }}>
                  {"Forging closer bonds among national servicemen and creating opportunity for quality time with their loved ones."}
                </span>
                <svg className={"tc-i"} aria-hidden={"true"} width={"58"} height={"58"} viewBox={"0 0 24 24"} style={{ "position": "absolute", "right": "28px", "bottom": "27px", "overflow": "visible" }}>
                  <defs>
                    <linearGradient id={"tcg2"} x1={"2"} y1={"22"} x2={"22"} y2={"2"} gradientUnits={"userSpaceOnUse"}>
                      <stop offset={"0"} stopColor={"#6452A4"} />
                      <stop offset={".55"} stopColor={"#F04290"} />
                      <stop offset={"1"} stopColor={"#F68C45"} />
                    </linearGradient>
                  </defs>
                  <g className={"ig"}>
                    <circle cx={"12"} cy={"6.3"} r={"2.4"} fill={"#A7A9AE"} />
                    <circle cx={"4.5"} cy={"9.6"} r={"2.2"} fill={"#A7A9AE"} />
                    <circle cx={"19.5"} cy={"9.6"} r={"2.2"} fill={"#A7A9AE"} />
                    <path d={"M8.9 10.2h6.2c.7 0 1.2.5 1.2 1.2v1.8L12 17.2l-4.3-4V11.4c0-.7.5-1.2 1.2-1.2Z"} fill={"#A7A9AE"} />
                    <path d={"M1.2 20.8v-5.2c0-1.2 1-2.2 2.2-2.2h1.4c1.2 0 2.2 1 2.2 2.2v5.2H1.2Zm15.8 0v-5.2c0-1.2 1-2.2 2.2-2.2h1.4c1.2 0 2.2 1 2.2 2.2v5.2H17Z"} fill={"#A7A9AE"} />
                    <path d={"M6.3 14.6 9.5 18.4c1.4 1.7 3.6 1.7 5 0l3.2-3.8"} fill={"none"} stroke={"#A7A9AE"} strokeWidth={"2.3"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                  </g>
                  <g className={"ic"}>
                    <circle cx={"12"} cy={"6.3"} r={"2.4"} fill={"url(#tcg2)"} />
                    <circle cx={"4.5"} cy={"9.6"} r={"2.2"} fill={"url(#tcg2)"} />
                    <circle cx={"19.5"} cy={"9.6"} r={"2.2"} fill={"url(#tcg2)"} />
                    <path d={"M8.9 10.2h6.2c.7 0 1.2.5 1.2 1.2v1.8L12 17.2l-4.3-4V11.4c0-.7.5-1.2 1.2-1.2Z"} fill={"url(#tcg2)"} />
                    <path d={"M1.2 20.8v-5.2c0-1.2 1-2.2 2.2-2.2h1.4c1.2 0 2.2 1 2.2 2.2v5.2H1.2Zm15.8 0v-5.2c0-1.2 1-2.2 2.2-2.2h1.4c1.2 0 2.2 1 2.2 2.2v5.2H17Z"} fill={"url(#tcg2)"} />
                    <path d={"M6.3 14.6 9.5 18.4c1.4 1.7 3.6 1.7 5 0l3.2-3.8"} fill={"none"} stroke={"url(#tcg2)"} strokeWidth={"2.3"} strokeLinecap={"round"} strokeLinejoin={"round"} />
                  </g>
                </svg>
              </a>
            </nav>
          </section>
          <section className={"s6"} aria-labelledby={"dc-title"} style={{ "position": "absolute", "left": "0", "top": "1818px", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "#272C3F" }}>
            <div className={"z6"} style={{ "position": "absolute", "inset": "0" }}>
              <div className={"dcb"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "1185px", "transformOrigin": "0 0", "transform": "translateX(173.1px) scale(0.75949)" }}>
                <h2 id={"dc-title"} aria-label={"Bringing defence closer to the community"} style={{ "position": "absolute", "left": "63px", "top": "80px", "margin": "0", "fontSize": "56px", "fontWeight": "600", "lineHeight": "67px", "letterSpacing": "0.004em" }}>
                  <span style={{ "display": "block", "whiteSpace": "nowrap" }}>
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi"} style={{ "--wd": "0.0s", "--wy": "-1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "backgroundPosition": `${v.dcw?.w0 ?? ""}px 0`, "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"BRINGING"}
                      </span>
                    </span>
                    {" "}
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi"} style={{ "--wd": "0.125s", "--wy": "-1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "backgroundPosition": `${v.dcw?.w1 ?? ""}px 0`, "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"DEFENCE"}
                      </span>
                    </span>
                    {" "}
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi"} style={{ "--wd": "0.25s", "--wy": "-1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "backgroundPosition": `${v.dcw?.w2 ?? ""}px 0`, "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"CLOSER"}
                      </span>
                    </span>
                  </span>
                  <span style={{ "display": "block", "whiteSpace": "nowrap" }}>
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi"} style={{ "--wd": "0.375s", "--wy": "1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "backgroundPosition": `${v.dcw?.w3 ?? ""}px 0`, "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"TO"}
                      </span>
                    </span>
                    {" "}
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi"} style={{ "--wd": "0.5s", "--wy": "1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "backgroundPosition": `${v.dcw?.w4 ?? ""}px 0`, "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"THE"}
                      </span>
                    </span>
                    {" "}
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi"} style={{ "--wd": "0.625s", "--wy": "1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "backgroundPosition": `${v.dcw?.w5 ?? ""}px 0`, "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"COMMUNITY"}
                      </span>
                    </span>
                  </span>
                </h2>
                <button className={"skipb"} type={"button"} data-z={"1"} onClick={v.skip6} style={{ "position": "absolute", "left": "1010px", "top": "119px", "width": "366px", "height": "56px", "boxSizing": "border-box", "padding": "0", "border": "1.5px solid #DDDDDD", "borderRadius": "10px", "background": "transparent", "color": "#DDDDDD", "fontFamily": "inherit", "fontSize": "20px", "fontWeight": "500", "letterSpacing": "0.01em", "whiteSpace": "nowrap", "cursor": "pointer" }}>
                  {"SKIP TO ‘APPRECIATING NSMEN’"}
                </button>
                <article className={`st6 ${v.d6?.on0 ?? ""}`} aria-label={"Making defence more accessible"}>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: Participants in life vests sit in an inflatable boat in a swimming pool"} onClick={v.lb_0_0} style={{ "translate": v.pp?.d0, "position": "absolute", "left": "747px", "top": "238px", "width": "694px", "height": "947px", "padding": "0", "border": "0", "borderRadius": "16px 0 0 0", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px 0 0 0)" }}>
                    <img src={"/assets/dc4-big.jpg"} alt={""} style={{ "display": "block", "width": "694px", "height": "947px", "objectFit": "cover", "transform": `translateY(${v.d6?.s0?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: Children and adults assemble a raft frame from white water containers and pipes on a turf court"} onClick={v.lb_0_1} style={{ "translate": v.pp?.d1, "position": "absolute", "left": "150px", "top": "268px", "width": "340px", "height": "390px", "padding": "0", "border": "0", "borderRadius": "16px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px)" }}>
                    <img src={"/assets/dc4-a.jpg"} alt={""} style={{ "display": "block", "width": "100%", "height": "100%", "objectFit": "cover", "transform": `translateY(${v.d6?.s0?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: Families stretch a green tarp between trees to build a shelter"} onClick={v.lb_0_2} style={{ "translate": v.pp?.d2, "position": "absolute", "left": "70px", "top": "744px", "width": "370px", "height": "260px", "padding": "0", "border": "0", "borderRadius": "16px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px)" }}>
                    <img src={"/assets/dc4-b.jpg"} alt={""} style={{ "display": "block", "width": "100%", "height": "100%", "objectFit": "cover", "transform": `translateY(${v.d6?.s0?.ph ?? ""}%)` }} />
                  </button>
                  <div className={"dcpn"} style={{ "position": "absolute", "left": "460px", "top": "459px", "width": "520px", "height": "485px", "boxSizing": "border-box", "padding": "29px 32px 42px", "borderRadius": "16px", "background": "#000722", "overflow": "hidden" }}>
                    <h3 style={{ "margin": "0", "fontSize": "26px", "fontWeight": "500", "lineHeight": "34px", "letterSpacing": "0.003em", "color": "#F34141" }}>
                      {"Making defence more accessible"}
                    </h3>
                    <p style={{ "margin": "45px 0 0", "fontSize": "16px", "lineHeight": "20px", "color": "#FFFFFF" }}>
                      {"Over"}
                    </p>
                    <div style={{ "display": "flex", "gap": "46px" }}>
                      <div style={{ "minWidth": "150px" }}>
                        <p aria-label={"500"} style={{ "margin": "0", "fontSize": "64px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "-0.04em", "color": "#FFFFFF", "fontVariantNumeric": "tabular-nums", "whiteSpace": "nowrap" }}>
                          {v.d6?.s0?.c0}
                        </p>
                        <p style={{ "margin": "14px 0 0", "fontSize": "22px", "lineHeight": "1.2", "color": "#FFFFFF" }}>
                          {"participants"}
                        </p>
                      </div>
                      <div style={{ "minWidth": "150px" }}>
                        <p aria-label={"13"} style={{ "margin": "0", "fontSize": "64px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "-0.04em", "color": "#FFFFFF", "fontVariantNumeric": "tabular-nums", "whiteSpace": "nowrap" }}>
                          {v.d6?.s0?.c1}
                        </p>
                        <p style={{ "margin": "14px 0 0", "fontSize": "22px", "lineHeight": "1.2", "color": "#FFFFFF" }}>
                          {"camps"}
                        </p>
                      </div>
                    </div>
                    <div style={{ "height": "1px", "marginTop": "36px", "background": "rgba(255,255,255,.3)" }} />
                    <p aria-label={"Through NS Experience Camps, families got a taste of NS-inspired activities, gaining a deeper appreciation of their loved ones’ service."} style={{ "margin": "30px 0 0", "fontSize": "20px", "lineHeight": "36px", "color": "#FFFFFF" }}>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s0?.l0}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s0?.l1}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s0?.l2}
                      </span>
                    </p>
                    <div aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "bottom": "0", "height": "8px", "width": `${v.d6?.s0?.bar ?? ""}px`, "borderRadius": "0 4px 4px 0", "background": "#F34141" }} />
                  </div>
                </article>
                <article className={`st6 ${v.d6?.on1 ?? ""}`} aria-label={"Commemorating SAF60 at SAFRA"}>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: Parents and children play a giant board game with large red dice on a turf court"} onClick={v.lb_1_0} style={{ "translate": v.pp?.d0, "position": "absolute", "left": "747px", "top": "238px", "width": "694px", "height": "947px", "padding": "0", "border": "0", "borderRadius": "16px 0 0 0", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px 0 0 0)" }}>
                    <img src={"/assets/dc3-big.jpg"} alt={""} style={{ "display": "block", "width": "694px", "height": "947px", "objectFit": "cover", "transform": `translateY(${v.d6?.s1?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: Children play with toy blasters among camouflage tents on a green court"} onClick={v.lb_1_1} style={{ "translate": v.pp?.d1, "position": "absolute", "left": "64px", "top": "300px", "width": "450px", "height": "300px", "padding": "0", "border": "0", "borderRadius": "16px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px)" }}>
                    <img src={"/assets/dc3-a.jpg"} alt={""} style={{ "display": "block", "width": "450px", "height": "300px", "objectFit": "cover", "transform": `translateY(${v.d6?.s1?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: An adult and child pose in flight suits and helmets against camouflage netting"} onClick={v.lb_1_2} style={{ "translate": v.pp?.d2, "position": "absolute", "left": "132px", "top": "735px", "width": "251px", "height": "333px", "padding": "0", "border": "0", "borderRadius": "16px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px)" }}>
                    <img src={"/assets/dc3-b.jpg"} alt={""} style={{ "display": "block", "width": "251px", "height": "333px", "objectFit": "cover", "transform": `translateY(${v.d6?.s1?.ph ?? ""}%)` }} />
                  </button>
                  <div className={"dcpn"} style={{ "position": "absolute", "left": "460px", "top": "459px", "width": "520px", "height": "485px", "boxSizing": "border-box", "padding": "29px 32px 42px", "borderRadius": "16px", "background": "#000722", "overflow": "hidden" }}>
                    <h3 style={{ "margin": "0", "fontSize": "26px", "fontWeight": "500", "lineHeight": "34px", "letterSpacing": "0.003em", "color": "#F34141" }}>
                      {"Commemorating SAF60 at SAFRA"}
                    </h3>
                    <p style={{ "margin": "45px 0 0", "fontSize": "16px", "lineHeight": "20px", "color": "#FFFFFF" }}>
                      {"Over"}
                    </p>
                    <div style={{ "display": "flex", "gap": "46px" }}>
                      <div style={{ "minWidth": "150px" }}>
                        <p aria-label={"140K+"} style={{ "margin": "0", "fontSize": "64px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "-0.04em", "color": "#FFFFFF", "fontVariantNumeric": "tabular-nums", "whiteSpace": "nowrap" }}>
                          {v.d6?.s1?.c0}
                        </p>
                        <p style={{ "margin": "14px 0 0", "fontSize": "22px", "lineHeight": "1.2", "color": "#FFFFFF" }}>
                          {"people engaged"}
                        </p>
                      </div>
                    </div>
                    <div style={{ "height": "1px", "marginTop": "36px", "background": "rgba(255,255,255,.3)" }} />
                    <p aria-label={"Be@SAFRA Open Houses brought families together to reflect on the SAF’s role as they enjoyed interactive activities, flight simulators and military K9 encounters."} style={{ "margin": "30px 0 0", "fontSize": "20px", "lineHeight": "36px", "color": "#FFFFFF" }}>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s1?.l0}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s1?.l1}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s1?.l2}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s1?.l3}
                      </span>
                    </p>
                    <div aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "bottom": "0", "height": "8px", "width": `${v.d6?.s1?.bar ?? ""}px`, "borderRadius": "0 4px 4px 0", "background": "#F34141" }} />
                  </div>
                </article>
                <article className={`st6 ${v.d6?.on2 ?? ""}`} aria-label={"Sharing lessons from the past"}>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: A speaker addresses pupils seated in a classroom"} onClick={v.lb_2_0} style={{ "translate": v.pp?.d0, "position": "absolute", "left": "747px", "top": "238px", "width": "694px", "height": "947px", "padding": "0", "border": "0", "borderRadius": "16px 0 0 0", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px 0 0 0)" }}>
                    <img src={"/assets/dc1-big.jpg"} alt={""} style={{ "display": "block", "width": "694px", "height": "947px", "objectFit": "cover", "transform": `translateY(${v.d6?.s2?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: Service personnel seated outdoors listen to standing speakers"} onClick={v.lb_2_1} style={{ "translate": v.pp?.d1, "position": "absolute", "left": "64px", "top": "317px", "width": "440px", "height": "528px", "padding": "0", "border": "0", "borderRadius": "16px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px)" }}>
                    <img src={"/assets/dc1-a.jpg"} alt={""} style={{ "display": "block", "width": "440px", "height": "528px", "objectFit": "cover", "transform": `translateY(${v.d6?.s2?.ph ?? ""}%)` }} />
                  </button>
                  <div className={"dcpn"} style={{ "position": "absolute", "left": "460px", "top": "459px", "width": "520px", "height": "485px", "boxSizing": "border-box", "padding": "29px 32px 42px", "borderRadius": "16px", "background": "#000722", "overflow": "hidden" }}>
                    <h3 style={{ "margin": "0", "fontSize": "26px", "fontWeight": "500", "lineHeight": "34px", "letterSpacing": "0.003em", "color": "#F34141" }}>
                      {"Sharing lessons from the past"}
                    </h3>
                    <p style={{ "margin": "45px 0 0", "fontSize": "16px", "lineHeight": "20px", "color": "#FFFFFF" }}>
                      {"Over"}
                    </p>
                    <div style={{ "display": "flex", "gap": "46px" }}>
                      <div style={{ "minWidth": "150px" }}>
                        <p aria-label={"20K+"} style={{ "margin": "0", "fontSize": "64px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "-0.04em", "color": "#FFFFFF", "fontVariantNumeric": "tabular-nums", "whiteSpace": "nowrap" }}>
                          {v.d6?.s2?.c0}
                        </p>
                        <p style={{ "margin": "14px 0 0", "fontSize": "22px", "lineHeight": "1.2", "color": "#FFFFFF" }}>
                          {"people engaged"}
                        </p>
                      </div>
                    </div>
                    <div style={{ "height": "1px", "marginTop": "36px", "background": "rgba(255,255,255,.3)" }} />
                    <p aria-label={"Commitment to Defence (C2D) Ambassadors from the SAF Veterans’ League shared real-life experiences, reinforcing the importance of a strong defence."} style={{ "margin": "30px 0 0", "fontSize": "20px", "lineHeight": "36px", "color": "#FFFFFF" }}>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s2?.l0}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s2?.l1}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s2?.l2}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s2?.l3}
                      </span>
                    </p>
                    <div aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "bottom": "0", "height": "8px", "width": `${v.d6?.s2?.bar ?? ""}px`, "borderRadius": "0 4px 4px 0", "background": "#F34141" }} />
                  </div>
                </article>
                <article className={`st6 ${v.d6?.on3 ?? ""}`} aria-label={"Building preparedness together"}>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: Children practise CPR on training manikins with instructors"} onClick={v.lb_3_0} style={{ "translate": v.pp?.d0, "position": "absolute", "left": "747px", "top": "238px", "width": "694px", "height": "947px", "padding": "0", "border": "0", "borderRadius": "16px 0 0 0", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px 0 0 0)" }}>
                    <img src={"/assets/dc2-big.jpg"} alt={""} style={{ "display": "block", "width": "694px", "height": "947px", "objectFit": "cover", "transform": `translateY(${v.d6?.s3?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: Emergency responders demonstrate a rescue to an audience under a sheltered walkway"} onClick={v.lb_3_1} style={{ "translate": v.pp?.d1, "position": "absolute", "left": "64px", "top": "298px", "width": "480px", "height": "295px", "padding": "0", "border": "0", "borderRadius": "20px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 20px)" }}>
                    <img src={"/assets/dc2-a.jpg"} alt={""} style={{ "display": "block", "width": "480px", "height": "295px", "objectFit": "cover", "transform": `translateY(${v.d6?.s3?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: Boys look into a camouflage field pack held open by an instructor"} onClick={v.lb_3_2} style={{ "translate": v.pp?.d2, "position": "absolute", "left": "144px", "top": "771px", "width": "339px", "height": "295px", "padding": "0", "border": "0", "borderRadius": "14px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 14px)" }}>
                    <img src={"/assets/dc2-b.jpg"} alt={""} style={{ "display": "block", "width": "339px", "height": "295px", "objectFit": "cover", "transform": `translateY(${v.d6?.s3?.ph ?? ""}%)` }} />
                  </button>
                  <div className={"dcpn"} style={{ "position": "absolute", "left": "460px", "top": "459px", "width": "520px", "height": "485px", "boxSizing": "border-box", "padding": "29px 32px 42px", "borderRadius": "16px", "background": "#000722", "overflow": "hidden" }}>
                    <h3 style={{ "margin": "0", "fontSize": "26px", "fontWeight": "500", "lineHeight": "34px", "letterSpacing": "0.003em", "color": "#F34141" }}>
                      {"Building preparedness together"}
                    </h3>
                    <p style={{ "margin": "45px 0 0", "fontSize": "16px", "lineHeight": "20px", "color": "#FFFFFF" }}>
                      {"Over"}
                    </p>
                    <div style={{ "display": "flex", "gap": "46px" }}>
                      <div style={{ "minWidth": "150px" }}>
                        <p aria-label={"40K+"} style={{ "margin": "0", "fontSize": "64px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "-0.04em", "color": "#FFFFFF", "fontVariantNumeric": "tabular-nums", "whiteSpace": "nowrap" }}>
                          {v.d6?.s3?.c0}
                        </p>
                        <p style={{ "margin": "14px 0 0", "fontSize": "22px", "lineHeight": "1.2", "color": "#FFFFFF" }}>
                          {"people engaged"}
                        </p>
                      </div>
                    </div>
                    <div style={{ "height": "1px", "marginTop": "36px", "background": "rgba(255,255,255,.3)" }} />
                    <p aria-label={"Total Defence Day commemorative activities equipped participants with practical skills through hands-on demonstrations and interactive games."} style={{ "margin": "30px 0 0", "fontSize": "20px", "lineHeight": "36px", "color": "#FFFFFF" }}>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s3?.l0}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s3?.l1}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d6?.s3?.l2}
                      </span>
                    </p>
                    <div aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "bottom": "0", "height": "8px", "width": `${v.d6?.s3?.bar ?? ""}px`, "borderRadius": "0 4px 4px 0", "background": "#F34141" }} />
                  </div>
                </article>
              </div>
            </div>
            <div className={"nv6"} aria-hidden={"true"} />
          </section>
          <section className={"s7"} aria-labelledby={"an-title"} style={{ "position": "absolute", "left": "0", "top": "1818px", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "#272C3F" }}>
            <div className={"z7"} style={{ "position": "absolute", "inset": "0" }}>
              <div className={"dcb"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "1185px", "transformOrigin": "0 0", "transform": "translateX(173.1px) scale(0.75949)" }}>
                <h2 id={"an-title"} aria-label={"Appreciating national servicemen"} style={{ "position": "absolute", "left": "63px", "top": "80px", "margin": "0", "fontSize": "56px", "fontWeight": "600", "lineHeight": "67px", "letterSpacing": "0.004em" }}>
                  <span style={{ "display": "block", "whiteSpace": "nowrap" }}>
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi7"} style={{ "--wd": "0.0s", "--wy": "-1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw7?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "backgroundPosition": `${v.dcw7?.w0 ?? ""}px 0`, "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"APPRECIATING"}
                      </span>
                    </span>
                  </span>
                  <span style={{ "display": "block", "whiteSpace": "nowrap" }}>
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi7"} style={{ "--wd": "0.125s", "--wy": "1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw7?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "backgroundPosition": `${v.dcw7?.w1 ?? ""}px 0`, "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"NATIONAL"}
                      </span>
                    </span>
                    {" "}
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi7"} style={{ "--wd": "0.25s", "--wy": "1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw7?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "backgroundPosition": `${v.dcw7?.w2 ?? ""}px 0`, "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"SERVICEMEN"}
                      </span>
                    </span>
                  </span>
                </h2>
                <button className={"skipb"} type={"button"} data-z={"1"} onClick={v.skip7} style={{ "position": "absolute", "left": "986px", "top": "119px", "width": "390px", "height": "56px", "boxSizing": "border-box", "padding": "0", "border": "1.5px solid #DDDDDD", "borderRadius": "10px", "background": "transparent", "color": "#DDDDDD", "fontFamily": "inherit", "fontSize": "20px", "fontWeight": "500", "letterSpacing": "0.01em", "whiteSpace": "nowrap", "cursor": "pointer" }}>
                  {"SKIP TO ‘STRENGTHENING BONDS’"}
                </button>
                <article className={`st6 ${v.d7?.on0 ?? ""}`} aria-label={"Nurturing appreciation from young"}>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: A child holds a hand-drawn thank-you card with a family photo for an NSman father"} onClick={v.lb7_0_0} style={{ "translate": v.pp?.d0, "position": "absolute", "left": "747px", "top": "238px", "width": "694px", "height": "947px", "padding": "0", "border": "0", "borderRadius": "16px 0 0 0", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px 0 0 0)" }}>
                    <img src={"/assets/an1-big.jpg"} alt={""} style={{ "display": "block", "width": "694px", "height": "947px", "objectFit": "cover", "transform": `translateY(${v.d7?.s0?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: A preschool teacher shows the class photos of servicemen"} onClick={v.lb7_0_1} style={{ "translate": v.pp?.d1, "position": "absolute", "left": "64px", "top": "300px", "width": "450px", "height": "300px", "padding": "0", "border": "0", "borderRadius": "16px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px)" }}>
                    <img src={"/assets/an1-a.jpg"} alt={""} style={{ "display": "block", "width": "450px", "height": "300px", "objectFit": "cover", "transform": `translateY(${v.d7?.s0?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: A preschooler works on an art gift at a table"} onClick={v.lb7_0_2} style={{ "translate": v.pp?.d2, "position": "absolute", "left": "132px", "top": "735px", "width": "251px", "height": "333px", "padding": "0", "border": "0", "borderRadius": "16px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px)" }}>
                    <img src={"/assets/an1-b.jpg"} alt={""} style={{ "display": "block", "width": "251px", "height": "333px", "objectFit": "cover", "transform": `translateY(${v.d7?.s0?.ph ?? ""}%)` }} />
                  </button>
                  <div className={"dcpn"} style={{ "position": "absolute", "left": "460px", "top": "459px", "width": "520px", "height": "485px", "boxSizing": "border-box", "padding": "29px 32px 42px", "borderRadius": "16px", "background": "#000722", "overflow": "hidden" }}>
                    <h3 style={{ "margin": "0", "fontSize": "26px", "fontWeight": "500", "lineHeight": "34px", "letterSpacing": "0.003em", "color": "#F34141" }}>
                      {"Nurturing appreciation from young"}
                    </h3>
                    <div style={{ "display": "flex", "gap": "68px", "marginTop": "51px" }}>
                      <div style={{ "minWidth": "150px" }}>
                        <p aria-label={"35K+"} style={{ "margin": "0", "fontSize": "64px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "-0.04em", "color": "#FFFFFF", "fontVariantNumeric": "tabular-nums", "whiteSpace": "nowrap" }}>
                          {v.d7?.s0?.c0}
                        </p>
                        <p style={{ "margin": "14px 0 0", "fontSize": "22px", "lineHeight": "1.2", "color": "#FFFFFF" }}>
                          {"preschoolers"}
                        </p>
                      </div>
                      <div style={{ "minWidth": "150px" }}>
                        <p aria-label={"460"} style={{ "margin": "0", "fontSize": "64px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "-0.04em", "color": "#FFFFFF", "fontVariantNumeric": "tabular-nums", "whiteSpace": "nowrap" }}>
                          {v.d7?.s0?.c1}
                        </p>
                        <p style={{ "margin": "14px 0 0", "fontSize": "22px", "lineHeight": "1.2", "color": "#FFFFFF" }}>
                          {"preschool centres"}
                        </p>
                      </div>
                    </div>
                    <div style={{ "height": "1px", "marginTop": "44px", "background": "rgba(255,255,255,.3)" }} />
                    <p aria-label={"Through the Appreciating NSmen Art Jam, preschoolers learnt of NSmen's contributions and made heartfelt gifts for their fathers."} style={{ "margin": "38px 0 0", "fontSize": "20px", "lineHeight": "36px", "color": "#FFFFFF" }}>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d7?.s0?.l0}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d7?.s0?.l1}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d7?.s0?.l2}
                      </span>
                    </p>
                    <div aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "bottom": "0", "height": "8px", "width": `${v.d7?.s0?.bar ?? ""}px`, "borderRadius": "0 4px 4px 0", "background": "#F34141" }} />
                  </div>
                </article>
              </div>
            </div>
            <div className={"nv7"} aria-hidden={"true"} />
          </section>
          <section className={"s8"} aria-labelledby={"sb-title"} style={{ "position": "absolute", "left": "0", "top": "1818px", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "#272C3F" }}>
            <div className={"z8"} style={{ "position": "absolute", "inset": "0" }}>
              <div className={"dcb"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "1185px", "transformOrigin": "0 0", "transform": "translateX(173.1px) scale(0.75949)" }}>
                <h2 id={"sb-title"} aria-label={"Strengthening bonds"} style={{ "position": "absolute", "left": "63px", "top": "80px", "margin": "0", "fontSize": "56px", "fontWeight": "600", "lineHeight": "67px", "letterSpacing": "0.004em" }}>
                  <span style={{ "display": "block", "whiteSpace": "nowrap" }}>
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi8"} style={{ "--wd": "0.0s", "--wy": "-1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw8?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"STRENGTHENING"}
                      </span>
                    </span>
                  </span>
                  <span style={{ "display": "block", "whiteSpace": "nowrap" }}>
                    <span className={"dcw"} style={{ "display": "inline-block", "overflow": "hidden", "verticalAlign": "top", "padding": "0 .03em .14em", "margin": "0 -.03em -.14em" }}>
                      <span className={"dcwi8"} style={{ "--wd": "0.125s", "--wy": "1", "display": "inline-block", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 26%, #E3449A 48%, #F04290 62%, #F3606F 100%)", "backgroundSize": `${v.dcw8?.W ?? ""}px 100%`, "backgroundRepeat": "no-repeat", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                        {"BONDS"}
                      </span>
                    </span>
                  </span>
                </h2>
                <button className={"skipb"} type={"button"} data-z={"1"} onClick={v.skip8} style={{ "position": "absolute", "left": "1095px", "top": "119px", "width": "281px", "height": "56px", "boxSizing": "border-box", "padding": "0", "border": "1.5px solid #DDDDDD", "borderRadius": "10px", "background": "transparent", "color": "#DDDDDD", "fontFamily": "inherit", "fontSize": "20px", "fontWeight": "500", "letterSpacing": "0.01em", "whiteSpace": "nowrap", "cursor": "pointer" }}>
                  {"SKIP TO NEXT SECTION"}
                </button>
                <article className={`st6 ${v.d8?.on0 ?? ""}`} aria-label={"Celebrating the nation we defend"}>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: A family smiles in front of heart-shaped red fireworks"} onClick={v.lb8_0_0} style={{ "translate": v.pp?.d0, "position": "absolute", "left": "747px", "top": "238px", "width": "693px", "height": "947px", "padding": "0", "border": "0", "borderRadius": "16px 0 0 0", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px 0 0 0)" }}>
                    <img src={"/assets/sb1-big.jpg"} alt={""} style={{ "display": "block", "width": "693px", "height": "947px", "objectFit": "cover", "transform": `translateY(${v.d8?.s0?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: Members cheer with SAFRA thunder sticks at a National Day celebration"} onClick={v.lb8_0_1} style={{ "translate": v.pp?.d1, "position": "absolute", "left": "64px", "top": "298px", "width": "480px", "height": "296px", "padding": "0", "border": "0", "borderRadius": "16px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px)" }}>
                    <img src={"/assets/sb1-a.jpg"} alt={""} style={{ "display": "block", "width": "480px", "height": "296px", "objectFit": "cover", "transform": `translateY(${v.d8?.s0?.ph ?? ""}%)` }} />
                  </button>
                  <button className={"dcph"} type={"button"} aria-label={"View photo: A family on a picnic mat with the SAFRA mascot at a SG60 celebration"} onClick={v.lb8_0_2} style={{ "translate": v.pp?.d2, "position": "absolute", "left": "144px", "top": "771px", "width": "339px", "height": "296px", "padding": "0", "border": "0", "borderRadius": "16px", "overflow": "hidden", "background": "transparent", "clipPath": "inset(0 round 16px)" }}>
                    <img src={"/assets/sb1-b.jpg"} alt={""} style={{ "display": "block", "width": "339px", "height": "296px", "objectFit": "cover", "transform": `translateY(${v.d8?.s0?.ph ?? ""}%)` }} />
                  </button>
                  <div className={"dcpn"} style={{ "position": "absolute", "left": "460px", "top": "459px", "width": "520px", "height": "485px", "boxSizing": "border-box", "padding": "29px 32px 42px", "borderRadius": "16px", "background": "#000722", "overflow": "hidden" }}>
                    <h3 style={{ "margin": "0", "fontSize": "26px", "fontWeight": "500", "lineHeight": "34px", "letterSpacing": "0.003em", "color": "#F34141" }}>
                      {"Celebrating the nation we defend"}
                    </h3>
                    <div style={{ "display": "flex", "gap": "68px", "marginTop": "51px" }}>
                      <div style={{ "minWidth": "150px" }}>
                        <p aria-label={"52K+"} style={{ "margin": "0", "fontSize": "64px", "fontWeight": "400", "lineHeight": "1", "letterSpacing": "-0.04em", "color": "#FFFFFF", "fontVariantNumeric": "tabular-nums", "whiteSpace": "nowrap" }}>
                          {v.d8?.s0?.c0}
                        </p>
                        <p style={{ "margin": "14px 0 0", "fontSize": "22px", "lineHeight": "1.2", "color": "#FFFFFF" }}>
                          {"NSmen & their families"}
                        </p>
                      </div>
                    </div>
                    <div style={{ "height": "1px", "marginTop": "44px", "background": "rgba(255,255,255,.3)" }} />
                    <p aria-label={"SAFRA's Vibrant Heartbeat SG60 National Day celebrations brought NSmen and families together to celebrate national pride."} style={{ "margin": "38px 0 0", "fontSize": "20px", "lineHeight": "36px", "color": "#FFFFFF" }}>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d8?.s0?.l0}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d8?.s0?.l1}
                      </span>
                      <span style={{ "display": "block", "height": "36px", "whiteSpace": "pre" }}>
                        {v.d8?.s0?.l2}
                      </span>
                    </p>
                    <div aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "bottom": "0", "height": "8px", "width": `${v.d8?.s0?.bar ?? ""}px`, "borderRadius": "0 4px 4px 0", "background": "#F34141" }} />
                  </div>
                </article>
              </div>
            </div>
            <div className={"nv8"} aria-hidden={"true"} />
          </section>
          <section className={"s9"} aria-labelledby={"t2-title"} style={{ "position": "absolute", "left": "0", "top": "2718px", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "#272C3F" }}>
            <h2 id={"t2-title"} aria-label={"& beyond National Service, we support NSmen and their families in everyday life."} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "900px", "margin": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "fontWeight": "400", "textAlign": "center" }}>
              <span className={"t9 t9a"} style={{ "display": "block", "fontSize": "63px", "lineHeight": "1.15", "letterSpacing": "-0.003em", "color": "#6E778B" }}>
                <span className={"hv"} aria-hidden={"true"} style={{ "display": "inline-block", "whiteSpace": "nowrap" }}>
                  <span className={"lt"}>
                    {"&"}
                  </span>
                  <span className={"lt"}>
                    {" "}
                  </span>
                  <span className={"lt"}>
                    {"b"}
                  </span>
                  <span className={"lt"}>
                    {"e"}
                  </span>
                  <span className={"lt"}>
                    {"y"}
                  </span>
                  <span className={"lt"}>
                    {"o"}
                  </span>
                  <span className={"lt"}>
                    {"n"}
                  </span>
                  <span className={"lt"}>
                    {"d"}
                  </span>
                  <span className={"lt"}>
                    {" "}
                  </span>
                  <span className={"lt"}>
                    {"N"}
                  </span>
                  <span className={"lt"}>
                    {"a"}
                  </span>
                  <span className={"lt"}>
                    {"t"}
                  </span>
                  <span className={"lt"}>
                    {"i"}
                  </span>
                  <span className={"lt"}>
                    {"o"}
                  </span>
                  <span className={"lt"}>
                    {"n"}
                  </span>
                  <span className={"lt"}>
                    {"a"}
                  </span>
                  <span className={"lt"}>
                    {"l"}
                  </span>
                  <span className={"lt"}>
                    {" "}
                  </span>
                  <span className={"lt"}>
                    {"S"}
                  </span>
                  <span className={"lt"}>
                    {"e"}
                  </span>
                  <span className={"lt"}>
                    {"r"}
                  </span>
                  <span className={"lt"}>
                    {"v"}
                  </span>
                  <span className={"lt"}>
                    {"i"}
                  </span>
                  <span className={"lt"}>
                    {"c"}
                  </span>
                  <span className={"lt"}>
                    {"e"}
                  </span>
                  <span className={"lt"}>
                    {","}
                  </span>
                </span>
              </span>
              <span className={"t9 t9b"} style={{ "display": "block", "width": "1120px", "marginTop": "14px", "paddingBottom": ".1em", "fontSize": "80px", "lineHeight": "88px", "letterSpacing": "-0.005em" }}>
                <span className={"hv"} data-g={"1"} aria-hidden={"true"} style={{ "display": "inline-block", "whiteSpace": "nowrap" }}>
                  <span className={"lt hvg"}>
                    {"w"}
                  </span>
                  <span className={"lt hvg"}>
                    {"e"}
                  </span>
                  <span className={"lt hvg"}>
                    {" "}
                  </span>
                  <span className={"lt hvg"}>
                    {"s"}
                  </span>
                  <span className={"lt hvg"}>
                    {"u"}
                  </span>
                  <span className={"lt hvg"}>
                    {"p"}
                  </span>
                  <span className={"lt hvg"}>
                    {"p"}
                  </span>
                  <span className={"lt hvg"}>
                    {"o"}
                  </span>
                  <span className={"lt hvg"}>
                    {"r"}
                  </span>
                  <span className={"lt hvg"}>
                    {"t"}
                  </span>
                  <span className={"lt hvg"}>
                    {" "}
                  </span>
                  <span className={"lt hvg"}>
                    {"N"}
                  </span>
                  <span className={"lt hvg"}>
                    {"S"}
                  </span>
                  <span className={"lt hvg"}>
                    {"m"}
                  </span>
                  <span className={"lt hvg"}>
                    {"e"}
                  </span>
                  <span className={"lt hvg"}>
                    {"n"}
                  </span>
                  <span className={"lt hvg"}>
                    {" "}
                  </span>
                  <span className={"lt hvg"}>
                    {"a"}
                  </span>
                  <span className={"lt hvg"}>
                    {"n"}
                  </span>
                  <span className={"lt hvg"}>
                    {"d"}
                  </span>
                </span>
              </span>
              <span className={"t9 t9c"} style={{ "display": "block", "width": "1120px", "marginTop": "-.1em", "paddingBottom": ".12em", "fontSize": "80px", "lineHeight": "88px", "letterSpacing": "-0.005em" }}>
                <span className={"hv"} data-g={"1"} aria-hidden={"true"} style={{ "display": "inline-block", "whiteSpace": "nowrap" }}>
                  <span className={"lt hvg"}>
                    {"t"}
                  </span>
                  <span className={"lt hvg"}>
                    {"h"}
                  </span>
                  <span className={"lt hvg"}>
                    {"e"}
                  </span>
                  <span className={"lt hvg"}>
                    {"i"}
                  </span>
                  <span className={"lt hvg"}>
                    {"r"}
                  </span>
                  <span className={"lt hvg"}>
                    {" "}
                  </span>
                  <span className={"lt hvg"}>
                    {"f"}
                  </span>
                  <span className={"lt hvg"}>
                    {"a"}
                  </span>
                  <span className={"lt hvg"}>
                    {"m"}
                  </span>
                  <span className={"lt hvg"}>
                    {"i"}
                  </span>
                  <span className={"lt hvg"}>
                    {"l"}
                  </span>
                  <span className={"lt hvg"}>
                    {"i"}
                  </span>
                  <span className={"lt hvg"}>
                    {"e"}
                  </span>
                  <span className={"lt hvg"}>
                    {"s"}
                  </span>
                  <span className={"lt hvg"}>
                    {" "}
                  </span>
                  <span className={"lt hvg"}>
                    {"i"}
                  </span>
                  <span className={"lt hvg"}>
                    {"n"}
                  </span>
                  <span className={"lt hvg"}>
                    {" "}
                  </span>
                  <span className={"lt hvg"}>
                    {"e"}
                  </span>
                  <span className={"lt hvg"}>
                    {"v"}
                  </span>
                  <span className={"lt hvg"}>
                    {"e"}
                  </span>
                  <span className={"lt hvg"}>
                    {"r"}
                  </span>
                  <span className={"lt hvg"}>
                    {"y"}
                  </span>
                  <span className={"lt hvg"}>
                    {"d"}
                  </span>
                  <span className={"lt hvg"}>
                    {"a"}
                  </span>
                  <span className={"lt hvg"}>
                    {"y"}
                  </span>
                  <span className={"lt hvg"}>
                    {" "}
                  </span>
                  <span className={"lt hvg"}>
                    {"l"}
                  </span>
                  <span className={"lt hvg"}>
                    {"i"}
                  </span>
                  <span className={"lt hvg"}>
                    {"f"}
                  </span>
                  <span className={"lt hvg"}>
                    {"e"}
                  </span>
                  <span className={"lt hvg"}>
                    {"."}
                  </span>
                </span>
              </span>
            </h2>
          </section>
          <section className={"s10"} aria-labelledby={"mb-title"} style={{ "position": "absolute", "left": "0", "top": "3618px", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "#272C3F" }}>
            <div style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "1032px", "transformOrigin": "0 0", "transform": "translate(72px, -36px) scale(0.9)" }}>
              <h2 id={"mb-title"} className={"mbk mk2"} aria-label={"Membership, made more rewarding"} style={{ "position": "absolute", "left": "0", "top": "102px", "width": "1440px", "margin": "0", "textAlign": "center", "fontSize": "62px", "fontWeight": "600", "lineHeight": "70px", "letterSpacing": "0.004em", "whiteSpace": "nowrap" }}>
                <span style={{ "paddingBottom": ".08em", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 22%, #E3449A 42%, #F04290 55%, #F3606F 78%, #F68C45 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                  {"MEMBERSHIP, MADE MORE REWARDING"}
                </span>
              </h2>
              <p className={"mbk mk4"} style={{ "position": "absolute", "left": "0", "top": "196px", "width": "1440px", "margin": "0", "textAlign": "center", "fontSize": "24px", "lineHeight": "38px", "color": "#DADCE2" }}>
                {"From staying active and unwinding to enjoying greater value on everyday essentials,"}
                <br />
                {"SAFRA continues to support NSmen and their families beyond National Service."}
              </p>
              <nav className={"mbk mk5"} aria-label={"Membership categories"} style={{ "position": "absolute", "left": "104px", "top": "335px", "width": "380px", "borderLeft": "1.5px solid rgba(255,255,255,.3)" }}>
                <span aria-hidden={"true"} style={{ "position": "absolute", "left": "-2px", "top": `${v.mbv?.ind ?? ""}px`, "width": "3px", "height": `${v.mbv?.indh ?? ""}px`, "background": "#F34141", "transition": "top .35s cubic-bezier(.2,.7,.2,1), height .35s cubic-bezier(.2,.7,.2,1)" }} />
                <button className={`mbt ${v.mbv?.t0 ?? ""}`} type={"button"} onClick={v.mbTab0} style={{ "display": "block", "width": "340px", "padding": "15px 0 15px 49px", "margin": "0", "border": "0", "background": "transparent", "textAlign": "left", "fontFamily": "inherit", "fontSize": "24px", "lineHeight": "34px", "cursor": "pointer" }}>
                  {"Food & Groceries"}
                </button>
                <button className={`mbt ${v.mbv?.t1 ?? ""}`} type={"button"} onClick={v.mbTab1} style={{ "display": "block", "width": "340px", "padding": "15px 0 15px 49px", "margin": "0", "border": "0", "background": "transparent", "textAlign": "left", "fontFamily": "inherit", "fontSize": "24px", "lineHeight": "34px", "cursor": "pointer" }}>
                  {"Education"}
                </button>
                <button className={`mbt ${v.mbv?.t2 ?? ""}`} type={"button"} onClick={v.mbTab2} style={{ "display": "block", "width": "340px", "padding": "15px 0 15px 49px", "margin": "0", "border": "0", "background": "transparent", "textAlign": "left", "fontFamily": "inherit", "fontSize": "24px", "lineHeight": "34px", "cursor": "pointer" }}>
                  {"Movies & Entertainment"}
                </button>
                <button className={`mbt ${v.mbv?.t3 ?? ""}`} type={"button"} onClick={v.mbTab3} style={{ "display": "block", "width": "340px", "padding": "13px 0 13px 49px", "margin": "0", "border": "0", "background": "transparent", "textAlign": "left", "fontFamily": "inherit", "fontSize": "24px", "lineHeight": "34px", "cursor": "pointer" }}>
                  {"Travel, Staycations & Local attractions"}
                </button>
              </nav>
              <div className={"mbk mk6"} style={{ "position": "absolute", "left": "564px", "top": "335px", "width": "772px", "height": "593px", "borderRadius": "16px", "background": "#1A1F2A", "overflow": "hidden" }}>
                <div className={`mbp ${v.mbv?.p0 ?? ""}`}>
                  <h3 style={{ "position": "absolute", "left": "0", "top": "0", "margin": "0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "30px", "color": "#F34141", "whiteSpace": "nowrap" }}>
                    {"Food & Groceries"}
                  </h3>
                  <div style={{ "position": "absolute", "left": "0", "top": "66px" }}>
                    <p aria-label={"100+"} style={{ "margin": "0", "fontSize": "64px", "fontWeight": "400", "lineHeight": "64px", "letterSpacing": "-0.04em", "color": "#FFFFFF", "fontVariantNumeric": "tabular-nums", "whiteSpace": "nowrap" }}>
                      {v.mbv?.c0}
                    </p>
                    <p style={{ "margin": "12px 0 0", "fontSize": "26px", "lineHeight": "32px", "letterSpacing": "0.01em", "color": "#FFFFFF", "whiteSpace": "nowrap" }}>
                      {"F&B establishments"}
                    </p>
                  </div>
                  <div style={{ "position": "absolute", "left": "346px", "top": "66px" }}>
                    <p aria-label={"180,000+"} style={{ "margin": "0", "fontSize": "64px", "fontWeight": "400", "lineHeight": "64px", "letterSpacing": "-0.04em", "color": "#FFFFFF", "fontVariantNumeric": "tabular-nums", "whiteSpace": "nowrap" }}>
                      {v.mbv?.c1}
                    </p>
                    <p style={{ "margin": "12px 0 0", "fontSize": "26px", "lineHeight": "32px", "letterSpacing": "0.01em", "color": "#FFFFFF", "whiteSpace": "nowrap" }}>
                      {"SG60 vouchers enjoyed"}
                    </p>
                  </div>
                  <p style={{ "position": "absolute", "left": "0", "top": "210px", "width": "670px", "margin": "0", "fontSize": "20px", "lineHeight": "32px", "color": "#A7A9AE" }}>
                    {"From dining deals to discounted vouchers, members enjoyed greater savings on everyday favourites across a wide range of F&B establishments and merchants."}
                  </p>
                  <div style={{ "position": "absolute", "left": "0", "top": "352px", "display": "flex", "gap": "24px" }}>
                    <div className={"mbi"} style={{ "width": "135px", "height": "135px", "overflow": "hidden" }}>
                      <img src={"/assets/mb-f1.jpg"} alt={"Délifrance 1-for-1 signature sandwich offer for SAFRA members"} style={{ "display": "block", "width": "135px", "height": "135px", "objectFit": "cover" }} />
                    </div>
                    <div className={"mbi"} style={{ "width": "135px", "height": "135px", "overflow": "hidden" }}>
                      <img src={"/assets/mb-f2.jpg"} alt={"PlayMade 1-for-1 beverage offer for SAFRA members"} style={{ "display": "block", "width": "135px", "height": "135px", "objectFit": "cover" }} />
                    </div>
                    <div className={"mbi"} style={{ "width": "358px", "height": "135px", "overflow": "hidden" }}>
                      <img src={"/assets/mb-f3.jpg"} alt={"Hawker discount day at Bukit Merah Central Food Centre"} style={{ "display": "block", "width": "358px", "height": "135px", "objectFit": "cover" }} />
                    </div>
                  </div>
                </div>
                <div className={`mbp mbx ${v.mbv?.px ?? ""}`}>
                  <h3 style={{ "margin": "0", "display": "inline-block", "fontSize": "24px", "fontWeight": "500", "lineHeight": "30px", "letterSpacing": "0.01em", "color": "#F34141" }}>
                    {v.mbv?.name}
                  </h3>
                  <p style={{ "margin": "40px 0 0", "fontSize": "20px", "lineHeight": "32px", "color": "#A7A9AE" }}>
                    {"Content for this category is still to come."}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={"s11"} aria-labelledby={"fy-title"} style={{ "position": "absolute", "left": "0", "top": "4518px", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "linear-gradient(122deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%)" }}>
            <div style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "1203px", "transformOrigin": "0 0", "transform": "translate(144px, -40px) scale(0.8)" }}>
              <h2 id={"fy-title"} className={"fyk"} style={{ "--d": ".55s", "position": "absolute", "left": "0", "top": "102px", "width": "1440px", "margin": "0", "textAlign": "center", "fontSize": "62px", "fontWeight": "600", "lineHeight": "70px", "letterSpacing": "0.004em", "color": "#FFFFFF" }}>
                {"OUR YEAR IN SUMMARY"}
              </h2>
              <p className={"fyk"} style={{ "--d": ".7s", "position": "absolute", "left": "0", "top": "196px", "width": "1440px", "margin": "0", "textAlign": "center", "fontSize": "24px", "lineHeight": "38px", "color": "#FFFFFF" }}>
                {"A look at SAFRA’s financial performance for FY2025/26"}
              </p>
              <article className={"fyk fyc"} style={{ "--d": "1.00s", "position": "absolute", "left": "105px", "top": "282px", "width": "394px", "height": "400px", "boxSizing": "border-box", "padding": "36px 30px", "borderRadius": "16px", "background": "#FFFFFF" }}>
                <p style={{ "margin": "0", "fontSize": "56px", "fontWeight": "500", "lineHeight": "64px", "letterSpacing": "-0.01em", "whiteSpace": "nowrap" }}>
                  <span style={{ "background": "linear-gradient(100deg, #6452A4 0%, #C0469A 45%, #F04290 75%, #F3606F 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                    {"$134.6M"}
                  </span>
                </p>
                <p style={{ "margin": "4px 0 0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "34px", "color": "#1E2230" }}>
                  {"total income"}
                </p>
                <p style={{ "display": "inline-block", "margin": "22px 0 0", "padding": "12px 16px", "borderRadius": "3px", "background": "#DCEBFC", "fontSize": "20px", "fontWeight": "600", "lineHeight": "24px", "color": "#1E2230", "whiteSpace": "nowrap" }}>
                  {"↑ 4.9% from 2024/25"}
                </p>
                <p style={{ "margin": "28px 0 0", "fontSize": "19px", "lineHeight": "30px", "letterSpacing": "-0.005em", "color": "#50566A" }}>
                  {"Income increased by $6.3M, mainly from media, rental, facilities and gym."}
                </p>
              </article>
              <article className={"fyk fyc"} style={{ "--d": "1.08s", "position": "absolute", "left": "523px", "top": "282px", "width": "394px", "height": "400px", "boxSizing": "border-box", "padding": "36px 30px", "borderRadius": "16px", "background": "#FFFFFF" }}>
                <p style={{ "margin": "0", "fontSize": "56px", "fontWeight": "500", "lineHeight": "64px", "letterSpacing": "-0.01em", "whiteSpace": "nowrap" }}>
                  <span style={{ "background": "linear-gradient(100deg, #6452A4 0%, #C0469A 45%, #F04290 75%, #F3606F 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                    {"$154.2M"}
                  </span>
                </p>
                <p style={{ "margin": "4px 0 0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "34px", "color": "#1E2230" }}>
                  {"total expenditure"}
                </p>
                <p style={{ "display": "inline-block", "margin": "22px 0 0", "padding": "12px 16px", "borderRadius": "3px", "background": "#DCEBFC", "fontSize": "20px", "fontWeight": "600", "lineHeight": "24px", "color": "#1E2230", "whiteSpace": "nowrap" }}>
                  {"↑ 10.3% from 2024/25"}
                </p>
                <p style={{ "margin": "28px 0 0", "fontSize": "19px", "lineHeight": "30px", "letterSpacing": "-0.005em", "color": "#50566A" }}>
                  {"Expenditure increased by $14.4M, due to higher production and manpower costs."}
                </p>
              </article>
              <article className={"fyk fyc"} style={{ "--d": "1.16s", "position": "absolute", "left": "941px", "top": "282px", "width": "394px", "height": "400px", "boxSizing": "border-box", "padding": "36px 30px", "borderRadius": "16px", "background": "#FFFFFF" }}>
                <p style={{ "margin": "0", "fontSize": "56px", "fontWeight": "500", "lineHeight": "64px", "letterSpacing": "-0.01em", "whiteSpace": "nowrap" }}>
                  <span style={{ "background": "linear-gradient(100deg, #6452A4 0%, #C0469A 45%, #F04290 75%, #F3606F 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                    {"$19.6M"}
                  </span>
                </p>
                <p style={{ "margin": "4px 0 0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "34px", "color": "#1E2230" }}>
                  {"deficit before"}
                  <br />
                  {"government grants"}
                </p>
                <p style={{ "display": "inline-block", "margin": "22px 0 0", "padding": "12px 16px", "borderRadius": "3px", "background": "#DCEBFC", "fontSize": "20px", "fontWeight": "600", "lineHeight": "24px", "color": "#1E2230", "whiteSpace": "nowrap" }}>
                  {"Was $11.5M in 2024/25"}
                </p>
                <p style={{ "margin": "28px 0 0", "fontSize": "19px", "lineHeight": "30px", "letterSpacing": "-0.005em", "color": "#50566A" }}>
                  {"Reflects the increase in expenditure outpacing income growth."}
                </p>
              </article>
              <article className={"fyk fyc"} style={{ "--d": "1.24s", "position": "absolute", "left": "105px", "top": "700px", "width": "394px", "height": "430px", "boxSizing": "border-box", "padding": "36px 30px", "borderRadius": "16px", "background": "#FFFFFF" }}>
                <p style={{ "margin": "0", "fontSize": "56px", "fontWeight": "500", "lineHeight": "64px", "letterSpacing": "-0.01em", "whiteSpace": "nowrap" }}>
                  <span style={{ "background": "linear-gradient(100deg, #6452A4 0%, #C0469A 45%, #F04290 75%, #F3606F 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                    {"$20.9M"}
                  </span>
                </p>
                <p style={{ "margin": "4px 0 0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "34px", "color": "#1E2230" }}>
                  {"government grants received"}
                </p>
                <p style={{ "display": "inline-block", "margin": "22px 0 0", "padding": "12px 16px", "borderRadius": "3px", "background": "#DCEBFC", "fontSize": "20px", "fontWeight": "600", "lineHeight": "24px", "color": "#1E2230", "whiteSpace": "nowrap" }}>
                  {"↑ $2M from 2024/25"}
                </p>
                <p style={{ "margin": "28px 0 0", "fontSize": "19px", "lineHeight": "30px", "letterSpacing": "-0.005em", "color": "#50566A" }}>
                  {"Government grants received were higher than the previous financial year."}
                </p>
              </article>
              <article className={"fyk fyc"} style={{ "--d": "1.32s", "position": "absolute", "left": "523px", "top": "700px", "width": "394px", "height": "430px", "boxSizing": "border-box", "padding": "36px 30px", "borderRadius": "16px", "background": "#FFFFFF" }}>
                <p style={{ "margin": "0", "fontSize": "56px", "fontWeight": "500", "lineHeight": "64px", "letterSpacing": "-0.01em", "whiteSpace": "nowrap" }}>
                  <span style={{ "background": "linear-gradient(100deg, #6452A4 0%, #C0469A 45%, #F04290 75%, #F3606F 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                    {"$1.9M"}
                  </span>
                </p>
                <p style={{ "margin": "4px 0 0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "34px", "color": "#1E2230" }}>
                  {"net surplus"}
                </p>
                <p style={{ "display": "inline-block", "margin": "22px 0 0", "padding": "12px 16px", "borderRadius": "3px", "background": "#DCEBFC", "fontSize": "20px", "fontWeight": "600", "lineHeight": "24px", "color": "#1E2230", "whiteSpace": "nowrap" }}>
                  {"Was $8.1M in 2024/25"}
                </p>
                <p style={{ "margin": "28px 0 0", "fontSize": "19px", "lineHeight": "30px", "letterSpacing": "-0.005em", "color": "#50566A" }}>
                  {"After government grants, amortisation of development fund and income tax, the Group recorded a net surplus for the year."}
                </p>
              </article>
              <article className={"fyk fyc"} style={{ "--d": "1.40s", "position": "absolute", "left": "941px", "top": "700px", "width": "394px", "height": "430px", "boxSizing": "border-box", "padding": "36px 30px", "borderRadius": "16px", "background": "#FFFFFF" }}>
                <p style={{ "margin": "0", "fontSize": "56px", "fontWeight": "500", "lineHeight": "64px", "letterSpacing": "-0.01em", "whiteSpace": "nowrap" }}>
                  <span style={{ "background": "linear-gradient(100deg, #6452A4 0%, #C0469A 45%, #F04290 75%, #F3606F 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                    {"$405.5M"}
                  </span>
                </p>
                <p style={{ "margin": "4px 0 0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "34px", "color": "#1E2230" }}>
                  {"total reserves"}
                </p>
                <p style={{ "display": "inline-block", "margin": "22px 0 0", "padding": "12px 16px", "borderRadius": "3px", "background": "#DCEBFC", "fontSize": "20px", "fontWeight": "600", "lineHeight": "24px", "color": "#1E2230", "whiteSpace": "nowrap" }}>
                  {"↓ 0.3% from 2024/25"}
                </p>
                <p style={{ "margin": "28px 0 0", "fontSize": "19px", "lineHeight": "30px", "letterSpacing": "-0.005em", "color": "#50566A" }}>
                  {"Reserves remain set aside for future developments, upgrading projects and programmes supporting NSmen and their families."}
                </p>
              </article>
            </div>
          </section>
          <section className={"s12"} aria-labelledby={"wc-title"} style={{ "position": "absolute", "left": "0", "top": "5418px", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "#272C3F" }}>
            <h2 id={"wc-title"} aria-label={"The year may be over. Our work continues."} style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "900px", "margin": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "fontWeight": "400", "textAlign": "center" }}>
              <span className={"t12 t12a"} style={{ "display": "block", "fontSize": "63px", "lineHeight": "1.15", "letterSpacing": "-0.003em", "color": "#6E778B" }}>
                <span className={"hv"} aria-hidden={"true"} style={{ "display": "inline-block", "whiteSpace": "nowrap" }}>
                  <span className={"lt"}>
                    {"T"}
                  </span>
                  <span className={"lt"}>
                    {"h"}
                  </span>
                  <span className={"lt"}>
                    {"e"}
                  </span>
                  <span className={"lt"}>
                    {" "}
                  </span>
                  <span className={"lt"}>
                    {"y"}
                  </span>
                  <span className={"lt"}>
                    {"e"}
                  </span>
                  <span className={"lt"}>
                    {"a"}
                  </span>
                  <span className={"lt"}>
                    {"r"}
                  </span>
                  <span className={"lt"}>
                    {" "}
                  </span>
                  <span className={"lt"}>
                    {"m"}
                  </span>
                  <span className={"lt"}>
                    {"a"}
                  </span>
                  <span className={"lt"}>
                    {"y"}
                  </span>
                  <span className={"lt"}>
                    {" "}
                  </span>
                  <span className={"lt"}>
                    {"b"}
                  </span>
                  <span className={"lt"}>
                    {"e"}
                  </span>
                  <span className={"lt"}>
                    {" "}
                  </span>
                  <span className={"lt"}>
                    {"o"}
                  </span>
                  <span className={"lt"}>
                    {"v"}
                  </span>
                  <span className={"lt"}>
                    {"e"}
                  </span>
                  <span className={"lt"}>
                    {"r"}
                  </span>
                  <span className={"lt"}>
                    {"."}
                  </span>
                </span>
              </span>
              <span className={"t12 t12b"} style={{ "display": "block", "marginTop": "14px", "paddingBottom": ".12em", "fontSize": "80px", "lineHeight": "88px", "letterSpacing": "-0.005em" }}>
                <span className={"hv"} data-g={"1"} aria-hidden={"true"} style={{ "display": "inline-block", "whiteSpace": "nowrap" }}>
                  <span className={"lt hvg"}>
                    {"O"}
                  </span>
                  <span className={"lt hvg"}>
                    {"u"}
                  </span>
                  <span className={"lt hvg"}>
                    {"r"}
                  </span>
                  <span className={"lt hvg"}>
                    {" "}
                  </span>
                  <span className={"lt hvg"}>
                    {"w"}
                  </span>
                  <span className={"lt hvg"}>
                    {"o"}
                  </span>
                  <span className={"lt hvg"}>
                    {"r"}
                  </span>
                  <span className={"lt hvg"}>
                    {"k"}
                  </span>
                  <span className={"lt hvg"}>
                    {" "}
                  </span>
                  <span className={"lt hvg"}>
                    {"c"}
                  </span>
                  <span className={"lt hvg"}>
                    {"o"}
                  </span>
                  <span className={"lt hvg"}>
                    {"n"}
                  </span>
                  <span className={"lt hvg"}>
                    {"t"}
                  </span>
                  <span className={"lt hvg"}>
                    {"i"}
                  </span>
                  <span className={"lt hvg"}>
                    {"n"}
                  </span>
                  <span className={"lt hvg"}>
                    {"u"}
                  </span>
                  <span className={"lt hvg"}>
                    {"e"}
                  </span>
                  <span className={"lt hvg"}>
                    {"s"}
                  </span>
                  <span className={"lt hvg"}>
                    {"."}
                  </span>
                </span>
              </span>
            </h2>
          </section>
          <section className={"s13"} aria-labelledby={"nx-title"} style={{ "position": "absolute", "left": "0", "top": "6318px", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "#191E27" }}>
            <div style={{ "position": "absolute", "left": "0", "top": "0", "width": "1440px", "height": "1227px", "transformOrigin": "0 0", "transform": "translate(129.6px, -70px) scale(0.82)" }}>
              <h2 id={"nx-title"} className={"nxk"} style={{ "--d": ".55s", "position": "absolute", "left": "0", "top": "120px", "width": "1440px", "margin": "0", "textAlign": "center", "fontSize": "62px", "fontWeight": "600", "lineHeight": "70px", "letterSpacing": "0.004em", "whiteSpace": "nowrap" }}>
                <span style={{ "paddingBottom": ".08em", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 22%, #E3449A 42%, #F04290 55%, #F3606F 78%, #F68C45 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                  {"WHAT’S NEXT FOR SAFRA"}
                </span>
              </h2>
              <p className={"nxk"} style={{ "--d": ".7s", "position": "absolute", "left": "0", "top": "204px", "width": "1440px", "margin": "0", "textAlign": "center", "fontSize": "24px", "lineHeight": "38px", "color": "#DADCE2" }}>
                {"Continuing to strengthen support for NSmen and their families,"}
                <br />
                {"while creating more ways for the wider community to understand and contribute to National Service."}
              </p>
              <nav className={"nxk"} aria-label={"What’s next"} style={{ "--d": ".85s", "position": "absolute", "left": "243px", "top": "330px", "width": "955px", "display": "flex", "borderBottom": "1.5px solid rgba(255,255,255,.3)" }}>
                <span aria-hidden={"true"} style={{ "position": "absolute", "left": `${v.nxv?.x ?? ""}px`, "bottom": "-2px", "width": `${v.nxv?.w ?? ""}px`, "height": "3px", "background": "#F34141", "transition": "left .35s cubic-bezier(.2,.7,.2,1), width .35s cubic-bezier(.2,.7,.2,1)" }} />
                <button className={`nxt ${v.nxv?.t0 ?? ""}`} type={"button"} onClick={v.nxTab0} style={{ "padding": "0 33px 26px", "margin": "0", "border": "0", "background": "transparent", "fontFamily": "inherit", "fontSize": "24px", "lineHeight": "30px", "whiteSpace": "nowrap" }}>
                  {"Bringing defence closer"}
                </button>
                <button className={`nxt ${v.nxv?.t1 ?? ""}`} type={"button"} onClick={v.nxTab1} style={{ "padding": "0 33px 26px", "margin": "0", "border": "0", "background": "transparent", "fontFamily": "inherit", "fontSize": "24px", "lineHeight": "30px", "whiteSpace": "nowrap" }}>
                  {"Creating better spaces"}
                </button>
                <button className={`nxt ${v.nxv?.t2 ?? ""}`} type={"button"} onClick={v.nxTab2} style={{ "padding": "0 33px 26px", "margin": "0", "border": "0", "background": "transparent", "fontFamily": "inherit", "fontSize": "24px", "lineHeight": "30px", "whiteSpace": "nowrap" }}>
                  {"Making visits seamless"}
                </button>
              </nav>
              <div className={"nxk"} style={{ "--d": "1s", "position": "absolute", "left": "104px", "top": "434px", "width": "1232px", "height": "672px" }}>
                <div className={`nxp ${v.nxv?.p0 ?? ""}`}>
                  <article style={{ "position": "absolute", "left": "0px", "top": "0", "width": "394px", "height": "428px", "boxSizing": "border-box", "padding": "32px", "borderRadius": "16px", "background": "#272C3F" }}>
                    <h3 style={{ "margin": "0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "30px", "color": "#F34141" }}>
                      {"Expanding NS Experience Camps"}
                    </h3>
                    <p style={{ "margin": "42px 0 0", "fontSize": "56px", "fontWeight": "400", "lineHeight": "60px", "letterSpacing": "-0.02em", "color": "#FFFFFF" }}>
                      {"3,000"}
                    </p>
                    <p style={{ "margin": "12px 0 0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "32px", "color": "#FFFFFF" }}>
                      {"participants targeted"}
                    </p>
                    <p style={{ "margin": "30px 0 0", "fontSize": "20px", "lineHeight": "32px", "color": "#B9BCC6" }}>
                      {"More families, children and women can experience National Service through hands-on, NS-inspired activities."}
                    </p>
                  </article>
                  <article style={{ "position": "absolute", "left": "418px", "top": "0", "width": "394px", "height": "428px", "boxSizing": "border-box", "padding": "32px", "borderRadius": "16px", "background": "#272C3F" }}>
                    <h3 style={{ "margin": "0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "30px", "color": "#F34141" }}>
                      {"Taking NS-inspired fitness further"}
                    </h3>
                    <p style={{ "margin": "42px 0 0", "fontSize": "56px", "fontWeight": "400", "lineHeight": "60px", "letterSpacing": "-0.02em", "color": "#FFFFFF" }}>
                      {"1,300+"}
                    </p>
                    <p style={{ "margin": "12px 0 0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "32px", "color": "#FFFFFF" }}>
                      {"participants expected"}
                    </p>
                    <p style={{ "margin": "30px 0 0", "fontSize": "20px", "lineHeight": "32px", "color": "#B9BCC6" }}>
                      {"The inaugural FitX Challenge brings people together through NS-inspired obstacles and functional fitness."}
                    </p>
                  </article>
                  <article style={{ "position": "absolute", "left": "836px", "top": "0", "width": "394px", "height": "428px", "boxSizing": "border-box", "padding": "32px", "borderRadius": "16px", "background": "#272C3F" }}>
                    <h3 style={{ "margin": "0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "30px", "color": "#F34141" }}>
                      {"Bringing defence into community"}
                    </h3>
                    <p style={{ "margin": "42px 0 0", "fontSize": "56px", "fontWeight": "400", "lineHeight": "60px", "letterSpacing": "-0.02em", "color": "#FFFFFF" }}>
                      {"2027"}
                    </p>
                    <p style={{ "margin": "12px 0 0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "32px", "color": "#FFFFFF" }}>
                      {"community activities"}
                    </p>
                    <p style={{ "margin": "30px 0 0", "fontSize": "20px", "lineHeight": "32px", "color": "#B9BCC6" }}>
                      {"Family-friendly activities and hands-on experiences will bring defence closer to the community."}
                    </p>
                  </article>
                  <article style={{ "position": "absolute", "left": "0px", "top": "452px", "width": "604px", "height": "220px", "boxSizing": "border-box", "padding": "32px", "borderRadius": "16px", "background": "#272C3F" }}>
                    <h3 style={{ "margin": "0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "30px", "color": "#F34141" }}>
                      {"Creating more ways to contribute"}
                    </h3>
                    <p style={{ "margin": "30px 0 0", "fontSize": "20px", "lineHeight": "32px", "color": "#B9BCC6" }}>
                      {"The SG Defence Volunteer Network gives volunteers more ways to contribute their skills towards defence and support NSmen and families."}
                    </p>
                  </article>
                  <article style={{ "position": "absolute", "left": "628px", "top": "452px", "width": "604px", "height": "220px", "boxSizing": "border-box", "padding": "32px", "borderRadius": "16px", "background": "#272C3F" }}>
                    <h3 style={{ "margin": "0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "30px", "color": "#F34141" }}>
                      {"Making defence part of everyday spaces"}
                    </h3>
                    <p style={{ "margin": "30px 0 0", "fontSize": "20px", "lineHeight": "32px", "color": "#B9BCC6" }}>
                      {"The upcoming Defence Engagement Gallery brings Singapore’s defence story to life through immersive and interactive experiences."}
                    </p>
                  </article>
                </div>
                <div className={`nxp ${v.nxv?.px ?? ""}`} style={{ "padding": "32px", "boxSizing": "border-box", "borderRadius": "16px", "background": "#272C3F", "height": "220px" }}>
                  <h3 style={{ "margin": "0", "fontSize": "24px", "fontWeight": "500", "lineHeight": "30px", "color": "#F34141" }}>
                    {v.nxv?.name}
                  </h3>
                  <p style={{ "margin": "30px 0 0", "fontSize": "20px", "lineHeight": "32px", "color": "#B9BCC6" }}>
                    {"Content for this topic is still to come."}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={"s14"} aria-labelledby={"end-title"} style={{ "position": "absolute", "left": "0", "top": "7218px", "width": "1440px", "height": "900px", "overflow": "hidden", "background": "linear-gradient(90deg, #5D55A7 0%, #A3499F 17%, #E3439A 33%, #F04290 44%, #F35C79 62%, #F5765E 82%, #F68C45 100%)" }}>
            <h2 id={"end-title"} className={"enk"} style={{ "--d": ".55s", "position": "absolute", "left": "104px", "top": "325px", "margin": "0", "fontSize": "56px", "fontWeight": "600", "lineHeight": "64px", "letterSpacing": "0.01em", "color": "#FFFFFF" }}>
              {"ONE YEAR."}
              <br />
              {"MANY CONNECTIONS."}
              <br />
              {"ONE SHARED PURPOSE."}
            </h2>
            <p className={"enk"} style={{ "--d": ".75s", "position": "absolute", "left": "838px", "top": "285px", "width": "500px", "margin": "0", "fontSize": "22px", "lineHeight": "37px", "color": "#FFFFFF" }}>
              {"From supporting NSmen and their families to strengthening community ties and our collective commitment to defence, SAFRA continues to bring people together through National Service."}
            </p>
            <a className={"enk dlb"} href={"#"} onClick={v.noop} style={{ "--d": ".95s", "position": "absolute", "left": "838px", "top": "518px", "width": "499px", "height": "100px", "boxSizing": "border-box", "display": "flex", "alignItems": "center", "gap": "22px", "padding": "0 30px", "borderRadius": "16px", "background": "#FFFFFF", "textDecoration": "none" }}>
              <svg width={"28"} height={"28"} viewBox={"0 0 28 28"} aria-hidden={"true"} style={{ "flex": "none" }}>
                <defs>
                  <linearGradient id={"dlg"} x1={"0"} y1={"0"} x2={"28"} y2={"28"} gradientUnits={"userSpaceOnUse"}>
                    <stop offset={"0"} stopColor={"#C0469A"} />
                    <stop offset={"1"} stopColor={"#F3606F"} />
                  </linearGradient>
                </defs>
                <path d={"M14 3v13M8.5 11l5.5 5.5 5.5-5.5M3.5 19v4.5h21V19"} fill={"none"} stroke={"url(#dlg)"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} />
              </svg>
              <span style={{ "fontSize": "26px", "fontWeight": "600", "lineHeight": "34px", "background": "linear-gradient(90deg, #6452A4 0%, #A2489F 22%, #E3449A 42%, #F04290 55%, #F3606F 78%, #F68C45 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
                {"DOWNLOAD FULL"}
                <br />
                {"2025/26 ANNUAL REPORT"}
              </span>
            </a>
          </section>
          <span className={"bar3"} aria-hidden={"true"} style={{ "position": "absolute", "left": `${v.bar3?.x ?? ""}px`, "top": `${v.bar3?.y ?? ""}px`, "display": "block", "width": `${v.bar3?.w ?? ""}px`, "height": `${v.bar3?.h ?? ""}px`, "borderRadius": `${v.bar3?.r ?? ""}px ${v.bar3?.r ?? ""}px 0 0`, "background": "linear-gradient(180deg, #8D4FA0 0%, #F04290 22%, #F5765E 48%, #F3597B 76%, #E8448F 100%)", "pointerEvents": "none" }} />
          <div className={"glance"} style={{ "position": "absolute", "left": `${v.head?.x ?? ""}px`, "top": `${v.head?.y ?? ""}px`, "transformOrigin": `${v.head?.ox ?? ""}px ${v.head?.oy ?? ""}px`, "transform": `scale(${v.head?.s ?? ""})`, "pointerEvents": "none" }}>
            <h2 id={"glance-title"} className={"hd"} style={{ "--wl": `${v.wipe?.l ?? ""}%`, "--wr": `${v.wipe?.r ?? ""}%`, "margin": "0", "whiteSpace": "nowrap", "fontSize": "72px", "fontWeight": "500", "lineHeight": "1", "letterSpacing": "0.005em", "textTransform": "uppercase", "background": "linear-gradient(90deg, #6C51A2 0%, #B0489E 32%, #E8448F 50%, #F3606F 74%, #F68A49 100%)", "WebkitBackgroundClip": "text", "backgroundClip": "text", "color": "transparent" }}>
              {"At a g"}
              <span className={"gL"} style={{ "position": "relative", "visibility": "hidden" }}>
                {"l"}
                <span className={"gLb"} style={{ "display": "inline-block", "width": "0", "height": "0" }} />
                <span className={"gLs"} style={{ "visibility": "visible", "position": "absolute", "left": `${v.L?.sx ?? ""}px`, "top": `${v.L?.st ?? ""}px`, "width": `${v.L?.sw ?? ""}px`, "height": `${v.L?.sh ?? ""}px`, "background": "linear-gradient(180deg, #E8448F, #EA478C)" }} />
                <span className={"gLf"} style={{ "visibility": "visible", "position": "absolute", "left": `${v.L?.sx ?? ""}px`, "top": `${v.L?.ft ?? ""}px`, "width": `${v.L?.fw ?? ""}px`, "height": `${v.L?.fh ?? ""}px`, "background": "linear-gradient(90deg, #EA478C, #EE4F86)" }} />
              </span>
              {"ance"}
            </h2>
          </div>
        </div>
        <div className={`lb ${v.lbv?.cls ?? ""}`} role={"dialog"} aria-modal={"true"} aria-label={"Photo gallery"} style={{ "position": "absolute", "inset": "0", "zIndex": "20", "background": "#18212A" }}>
          <div style={{ "position": "absolute", "left": "64px", "top": "142px", "width": "1312px", "height": "590px", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
            <img className={"lb-img"} src={v.lbv?.src} alt={v.lbv?.alt} style={{ "height": "590px", "width": "auto", "maxWidth": "1312px", "objectFit": "contain", "display": "block" }} />
          </div>
          <div style={{ "position": "absolute", "left": "0", "top": "772px", "width": "1440px", "display": "flex", "justifyContent": "center", "gap": "16px" }}>
            <button className={`lb-t ${v.lbv?.c0 ?? ""}`} type={"button"} aria-label={"Photo 1"} onClick={v.lbT0} style={{ "position": "relative", "width": "88px", "height": "88px", "padding": "0", "border": "0", "overflow": "hidden", "background": "#000", "flex": "none" }}>
              <img src={v.lbv?.t0} alt={""} style={{ "width": "88px", "height": "88px", "objectFit": "cover", "display": "block" }} />
            </button>
            <button className={`lb-t ${v.lbv?.c1 ?? ""}`} type={"button"} aria-label={"Photo 2"} onClick={v.lbT1} style={{ "position": "relative", "width": "88px", "height": "88px", "padding": "0", "border": "0", "overflow": "hidden", "background": "#000", "flex": "none" }}>
              <img src={v.lbv?.t1} alt={""} style={{ "width": "88px", "height": "88px", "objectFit": "cover", "display": "block" }} />
            </button>
            <button className={`lb-t ${v.lbv?.c2 ?? ""}`} type={"button"} aria-label={"Photo 3"} onClick={v.lbT2} style={{ "position": "relative", "width": "88px", "height": "88px", "padding": "0", "border": "0", "overflow": "hidden", "background": "#000", "flex": "none" }}>
              <img src={v.lbv?.t2} alt={""} style={{ "width": "88px", "height": "88px", "objectFit": "cover", "display": "block" }} />
            </button>
            <button className={`lb-t ${v.lbv?.c3 ?? ""}`} type={"button"} aria-label={"Photo 4"} onClick={v.lbT3} style={{ "position": "relative", "width": "88px", "height": "88px", "padding": "0", "border": "0", "overflow": "hidden", "background": "#000", "flex": "none" }}>
              <img src={v.lbv?.t3} alt={""} style={{ "width": "88px", "height": "88px", "objectFit": "cover", "display": "block" }} />
            </button>
            <button className={`lb-t ${v.lbv?.c4 ?? ""}`} type={"button"} aria-label={"Photo 5"} onClick={v.lbT4} style={{ "position": "relative", "width": "88px", "height": "88px", "padding": "0", "border": "0", "overflow": "hidden", "background": "#000", "flex": "none" }}>
              <img src={v.lbv?.t4} alt={""} style={{ "width": "88px", "height": "88px", "objectFit": "cover", "display": "block" }} />
            </button>
            <button className={`lb-t ${v.lbv?.c5 ?? ""}`} type={"button"} aria-label={"Photo 6"} onClick={v.lbT5} style={{ "position": "relative", "width": "88px", "height": "88px", "padding": "0", "border": "0", "overflow": "hidden", "background": "#000", "flex": "none" }}>
              <img src={v.lbv?.t5} alt={""} style={{ "width": "88px", "height": "88px", "objectFit": "cover", "display": "block" }} />
            </button>
            <button className={`lb-t ${v.lbv?.c6 ?? ""}`} type={"button"} aria-label={"Photo 7"} onClick={v.lbT6} style={{ "position": "relative", "width": "88px", "height": "88px", "padding": "0", "border": "0", "overflow": "hidden", "background": "#000", "flex": "none" }}>
              <img src={v.lbv?.t6} alt={""} style={{ "width": "88px", "height": "88px", "objectFit": "cover", "display": "block" }} />
            </button>
          </div>
          <button className={"lb-x"} type={"button"} aria-label={"Close gallery"} onClick={v.lbClose} style={{ "position": "absolute", "left": "1366px", "top": "22px", "width": "52px", "height": "52px", "padding": "0", "border": "0", "background": "transparent", "cursor": "pointer" }}>
            <svg width={"52"} height={"52"} viewBox={"1366 22 52 52"} aria-hidden={"true"}>
              <rect x={"1368"} y={"24"} width={"48"} height={"48"} rx={"24"} fill={"none"} stroke={"#F34141"} strokeWidth={"3"} />
              <path d={"M1382.1 38.1L1401.9 57.9M1382.1 57.9L1401.9 38.1"} stroke={"#F34141"} strokeWidth={"3"} strokeLinecap={"round"} />
            </svg>
          </button>
        </div>
        <div className={"cur"} aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "120px", "height": "120px", "transform": `translate(${v.cur2?.x ?? ""}px, ${v.cur2?.y ?? ""}px)`, "opacity": v.cur2?.o, "pointerEvents": "none", "zIndex": "10" }}>
          <div className={"cur-in"} style={{ "position": "relative", "width": "120px", "height": "120px", "transform": `scale(${v.cur2?.s ?? ""})` }}>
            <div style={{ "position": "absolute", "left": "0", "top": "0", "width": "120px", "height": "120px", "borderRadius": "50%", "background": "#F34141" }} />
            <img className={"arw"} src={"/assets/scroll-arrow.svg"} alt={""} style={{ "position": "absolute", "left": "0", "top": "0", "width": "120px", "height": "120px" }} />
            <img className={"ring"} src={"/assets/scroll-ring.svg"} alt={""} style={{ "position": "absolute", "left": "0", "top": "0", "width": "120px", "height": "120px" }} />
          </div>
        </div>
        <div className={"cur"} aria-hidden={"true"} style={{ "position": "absolute", "left": "0", "top": "0", "width": "120px", "height": "120px", "transform": `translate(${v.cur?.x ?? ""}px, ${v.cur?.y ?? ""}px)`, "opacity": v.cur?.o, "pointerEvents": "none", "zIndex": "10" }}>
          <div className={"cur-in"} style={{ "position": "relative", "width": "120px", "height": "120px", "transform": `scale(${v.cur?.s ?? ""})` }}>
            <div style={{ "position": "absolute", "left": "0", "top": "0", "width": "120px", "height": "120px", "borderRadius": "50%", "background": "#F34141" }} />
            <img className={"arw"} src={"/assets/ecab593f3aa08a52a88a40fbfd710038.svg"} alt={""} style={{ "position": "absolute", "left": "0", "top": "0", "width": "120px", "height": "120px" }} />
            <img className={"ring"} src={"/assets/c5353b1ebbdc4fab6ae53df32b4380dd.svg"} alt={""} style={{ "position": "absolute", "left": "0", "top": "0", "width": "120px", "height": "120px" }} />
          </div>
        </div>
      </div>
      </>
    );
  }
}
