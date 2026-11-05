import { useLayoutEffect, useRef, useState } from "react";
import Artboard from "./artboard/Artboard.jsx";

const MOBILE_QUERY = "(max-width: 767px)";
const FRAME = { desktop: [1440, 900], mobile: [390, 844] };

export default function App() {
  const wrap = useRef(null);
  const [mobile, setMobile] = useState(
    () => window.matchMedia(MOBILE_QUERY).matches,
  );
  const [gx, setGx] = useState(0);

  useLayoutEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    const fit = () => {
      const el = wrap.current;
      if (!el) return;
      const [fw, fh] = mobile ? FRAME.mobile : FRAME.desktop;
      const vw = document.documentElement.clientWidth;
      const vh = window.visualViewport?.height ?? window.innerHeight;
      const scale = Math.min(mobile ? Infinity : 1, vw / fw, vh / fh);
      // Keep content fitted while every section background fills the viewport width.
      const gutter = Math.max(0, (vw / scale - fw) / 2);
      el.style.width = `${fw}px`;
      el.style.height = `${fh}px`;
      el.style.transform = `scale(${scale})`;
      el.style.setProperty("--gx", `${gutter.toFixed(2)}px`);
      setGx(+gutter.toFixed(2));
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
        <Artboard key={mobile ? "m" : "d"} mobile={mobile} gx={gx} />
      </div>
    </div>
  );
}
