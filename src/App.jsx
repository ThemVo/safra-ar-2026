import { useEffect, useRef, useState } from "react";
import Artboard from "./artboard/Artboard.jsx";
import { initializeMarker } from "./utils/marker.ts";

// Responsive: one artboard, layout chosen from the window width.
// - desktop (window 768px and wider): the 1440 × 900 comp, scaled down to fit (never above 100%, so the content
//   is at most 1440px wide); section backgrounds stretch out to fill the full window width.
// - mobile (phones narrower than 768px): a 390 × 844 portrait frame, scaled to fit the screen the same way.
// Crossing the breakpoint (resize / rotate) switches layout automatically.
const MOBILE_MAX = 767;
// Desktop is the default: the mobile layout is used only on touch-first devices (phones) narrower than 768px.
// A narrow desktop browser window (or a side panel preview) keeps the desktop layout, scaled down to fit.
const isMobile = () =>
  window.innerWidth <= MOBILE_MAX &&
  !!(
    window.matchMedia &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches
  );
const FRAME = { d: [1440, 900], m: [390, 844] };

initializeMarker();

export default function App() {
  const wrap = useRef(null);
  const [mobile, setMobile] = useState(isMobile);
  const [gx, setGx] = useState(0);

  useEffect(() => {
    const fit = () => {
      const narrow = isMobile();
      if (narrow !== mobile) {
        setMobile(narrow);
        return;
      } // re-runs with the new layout
      const el = wrap.current;
      if (!el) return;
      const [fw, fh] = mobile ? FRAME.m : FRAME.d;
      const vw = window.innerWidth,
        vh = window.innerHeight;
      const k = mobile
        ? Math.min(vw / fw, vh / fh)
        : Math.min(1, vw / fw, vh / fh);
      const g = Math.max(0, (vw / k - fw) / 2); // side gutter, in artboard pixels
      el.style.width = fw + "px";
      el.style.height = fh + "px";
      el.style.transform = `scale(${k})`;
      el.style.setProperty("--gx", `${g.toFixed(2)}px`);
      el.style.setProperty(
        "--gy",
        `${Math.max(0, (vh / k - fh) / 2).toFixed(2)}px`,
      ); // band above/below the artboard, in artboard pixels
      setGx(+g.toFixed(2));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [mobile]);

  return (
    <div className={"stage" + (mobile ? " stage-m" : "")}>
      <div className="wrap" id="wrap" ref={wrap}>
        {/* crossing the breakpoint remounts the artboard so it starts fresh in the new geometry */}
        <Artboard key={mobile ? "m" : "d"} mobile={mobile} gx={gx} />
      </div>
    </div>
  );
}
