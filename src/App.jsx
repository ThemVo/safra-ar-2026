import { useLayoutEffect, useRef, useState } from "react";
import Artboard from "./artboard/Artboard.jsx";
import { initializeMarker } from "./utils/marker.ts";

// Layout follows the viewport width, including tablets and narrow desktop windows.
const isMobile = () => window.innerWidth < 970;
const FRAME = { d: [1440, 900] };

initializeMarker();

export default function App() {
  const wrap = useRef(null);
  const [mobile, setMobile] = useState(isMobile);
  const [gx, setGx] = useState(0);
  const [gy, setGy] = useState(0);

  useLayoutEffect(() => {
    const fit = () => {
      const narrow = isMobile();
      if (narrow !== mobile) {
        setMobile(narrow);
        return;
      } // re-runs with the new layout
      const el = wrap.current;
      if (!el) return;
      const [fw, fh] = mobile ? [window.innerWidth, window.innerHeight] : FRAME.d;
      const vw = window.innerWidth,
        vh = window.innerHeight;
      // Preserve the artwork's proportions while using all available height whenever the width allows it.
      const k = mobile ? 1 : Math.min(vw / fw, vh / fh);
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
      setGy(+Math.max(0, (vh / k - fh) / 2).toFixed(2));
    };
    fit();
    window.addEventListener("resize", fit);
    window.visualViewport?.addEventListener("resize", fit);
    return () => {
      window.removeEventListener("resize", fit);
      window.visualViewport?.removeEventListener("resize", fit);
    };
  }, [mobile]);

  return (
    <div className={"stage" + (mobile ? " stage-m" : "")}>
      <div className="wrap" id="wrap" ref={wrap}>
        {/* crossing the breakpoint remounts the artboard and restores the current section/story from its URL */}
        <Artboard key={mobile ? "m" : "d"} mobile={mobile} gx={gx} gy={gy} />
      </div>
    </div>
  );
}
