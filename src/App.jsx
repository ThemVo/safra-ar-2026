import { useLayoutEffect, useRef, useState } from "react";
import Artboard from "./artboard/Artboard.jsx";
import { initializeMarker } from "./utils/marker.ts";

// Choose the composition from the viewport, including desktop mobile previews.
const MOBILE_MAX = 899;
const isMobile = () => window.innerWidth <= MOBILE_MAX;
const DESKTOP_FRAME = [1440, 900];

initializeMarker();

export default function App() {
  const wrap = useRef(null);
  const [mobile, setMobile] = useState(isMobile);
  const [gx, setGx] = useState(0);
  const [mobileHeight, setMobileHeight] = useState(window.innerHeight);
  const [mobileWidth, setMobileWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    let resizeTimer;
    const fit = () => {
      const narrow = isMobile();
      if (narrow !== mobile) {
        setMobile(narrow);
        return;
      } // re-runs with the new layout
      const el = wrap.current;
      if (!el) return;
      // Browser chrome and rotation resize the viewport without replaying the camera transition.
      if (mobile) {
        el.style.setProperty('--camera-duration', '0s');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => el.style.removeProperty('--camera-duration'), 120);
      }
      const [fw, fh] = DESKTOP_FRAME;
      const vw = window.innerWidth,
        vh = window.visualViewport?.height || window.innerHeight;
      const k = mobile ? 1 : Math.min(vw / fw, vh / fh);
      const height = mobile ? vh / k : fh;
      const g = mobile ? 0 : Math.max(0, (vw / k - fw) / 2); // side gutter, in artboard pixels
      el.style.width = (mobile ? vw : fw) + "px";
      el.style.setProperty("--mobile-unit", `${vw / 390}px`);
      el.style.height = height + "px";
      el.style.setProperty("--mobile-height", `${height}px`);
      if (mobile) { setMobileHeight(height); setMobileWidth(vw); }
      el.style.transform = mobile ? "none" : `scale(${k})`;
      el.style.setProperty("--gx", `${g.toFixed(2)}px`);
      el.style.setProperty(
        "--gy",
        `${mobile ? 0 : Math.max(0, (vh / k - fh) / 2).toFixed(2)}px`,
      ); // band above/below the artboard, in artboard pixels
      setGx(+g.toFixed(2));
    };
    fit();
    window.addEventListener("resize", fit);
    window.visualViewport?.addEventListener("resize", fit);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", fit);
      window.visualViewport?.removeEventListener("resize", fit);
    };
  }, [mobile]);

  return (
    <div className={"stage" + (mobile ? " stage-m" : "")}>
      <div className="wrap" id="wrap" ref={wrap}>
        {/* crossing the breakpoint remounts the artboard so it starts fresh in the new geometry */}
        <Artboard key={mobile ? "m" : "d"} mobile={mobile} mobileHeight={mobileHeight} mobileWidth={mobileWidth} gx={gx} />
      </div>
    </div>
  );
}
