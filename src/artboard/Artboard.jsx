import { Component } from "react";
import { ArtboardLogic } from "./ArtboardLogic.js";
import render from "./template.jsx";
import renderMobile from "./templateMobile.jsx";
import "../styles/artboard.css";
import "../styles/mobile.css";

// Default settings from the prototype's component props.
const DEFAULTS = { startView: "1 · Masthead", showFinal: false, parallax: 1 };

// Hosts the artboard (desktop markup, or the mobile markup when `mobile` is set): owns one ArtboardLogic instance, forwards lifecycle calls to it and renders the markup
// with the values it returns.
export default class Artboard extends Component {
  constructor(props) {
    super(props);
    this.state = { tick: 0 };
    this.logic = new ArtboardLogic(this.logicProps());
    this.logic.host = this;
  }
  logicProps() {
    const { children, ...rest } = this.props;
    return { ...DEFAULTS, ...rest };
  }
  refresh(callback) {
    this.setState((s) => ({ tick: s.tick + 1 }), callback);
  }
  componentDidMount() {
    try {
      this.logic.componentDidMount();
    } catch (e) {
      console.error(e);
    }
    // Scrolls and swipes over the side gutters (outside the 1440px column) drive the page too.
    const outside = (e) =>
      !(e.target && e.target.closest && e.target.closest(".mh"));
    this.onWheel = (e) => {
      if (outside(e)) this.vals?.wheel?.(e);
    };
    this.onTouchStart = (e) => {
      if (outside(e)) this.vals?.touchStart?.(e);
    };
    this.onTouchEnd = (e) => {
      if (outside(e)) this.vals?.touchEnd?.(e);
    };
    this.onTouchMove = (e) => {
      if (outside(e)) {
        const mh = document.querySelector(".mh");
        this.vals?.touchMove?.({ touches: e.touches, currentTarget: mh });
      }
    };
    // Pointer over the side margins: hand it to the artboard as if it were over the 1440px column.
    this.onMove = (e) => {
      if (!outside(e)) return;
      const mh = document.querySelector(".mh");
      if (!mh) return;
      this.vals?.move?.({
        currentTarget: mh,
        target: e.target,
        clientX: e.clientX,
        clientY: e.clientY,
      });
    };
    this.onLeave = () => this.vals?.leave?.();
    window.addEventListener("wheel", this.onWheel, { passive: true });
    window.addEventListener("touchstart", this.onTouchStart, { passive: true });
    window.addEventListener("touchend", this.onTouchEnd, { passive: true });
    window.addEventListener("touchmove", this.onTouchMove, { passive: true });
    window.addEventListener("mousemove", this.onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", this.onLeave);
  }
  componentDidUpdate(prevProps) {
    this.logic.props = this.logicProps();
    try {
      this.logic.componentDidUpdate({ ...DEFAULTS, ...prevProps });
    } catch (e) {
      console.error(e);
    }
  }
  componentWillUnmount() {
    window.removeEventListener("wheel", this.onWheel);
    window.removeEventListener("touchstart", this.onTouchStart);
    window.removeEventListener("touchend", this.onTouchEnd);
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("mousemove", this.onMove);
    document.documentElement.removeEventListener("mouseleave", this.onLeave);
    this.logic.host = null;
    try {
      this.logic.componentWillUnmount();
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    this.logic.props = this.logicProps();
    const v = { ...this.logic.props, ...this.logic.renderVals() };
    this.vals = v;
    return (
      <div className="sc-host">
        {this.props.mobile ? renderMobile(v) : render(v)}
      </div>
    );
  }
}
