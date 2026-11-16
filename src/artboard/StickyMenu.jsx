import { useEffect, useRef } from 'react';

// Shared section links, handlers and theme classes for both viewport layouts.
export default function StickyMenu({ v, mobile = false }) {
  const menuRef = useRef(null);
  const open = v.menu?.exp === 'true';

  useEffect(() => {
    if (!mobile || !open) return;
    const closeOutside = (event) => {
      if (menuRef.current?.contains(event.target)) return;
      event.preventDefault();
      v.menuClose(event);
    };
    // Capture taps even when the page content is inert while the menu is open.
    document.addEventListener('click', closeOutside, true);
    return () => document.removeEventListener('click', closeOutside, true);
  }, [mobile, open, v.menuClose]);

  return (
    <nav ref={menuRef} className={`smenu ${v.menu?.cls || ""}`} onKeyDown={(e) => { if (e.key === "Escape") v.menuClose(e); }} aria-label="Sections">
      <button
        className="sm-btn"
        type="button"
        aria-label="Open menu"
        aria-expanded={v.menu?.exp}
        onClick={v.menuOpen}
      >
        <svg
          className="sm-ic sm-ic-w"
          width="21"
          height="18"
          viewBox="0 0 21 18"
          aria-hidden="true"
        >
          <path
            d="M1 1h19M1 9h19M1 17h19"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="sm-ic sm-ic-g"
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id={mobile ? "smG-mobile" : "smG"}
              x1="1"
              y1="0"
              x2="22"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6252A4" />
              <stop offset="0.490385" stopColor="#F14192" />
              <stop offset="0.927885" stopColor="#F6765D" />
              <stop offset="0.9999" stopColor="#F69141" />
            </linearGradient>
          </defs>
          <path
            d="M1 1H22M1 10H22M1 19H22"
            stroke={mobile ? "url(#smG-mobile)" : "url(#smG)"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="sm-panel" onClick={v.menuStop}>
        <button
          className="sm-x"
          type="button"
          aria-label="Close menu"
          onClick={v.menuClose}
        >
          <svg
            className="sm-xw"
            width="18"
            height="15"
            viewBox="0 0 18 15"
            aria-hidden="true"
            style={{ overflow: "visible" }}
          >
            <path
              d="M1.5 0l15 15M16.5 0l-15 15"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="sm-xg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1.04199 18L17.6862 1.35579"
              stroke="#F34141"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1.04199 1L17.6862 17.6442"
              stroke="#F34141"
              strokeWidth="2"
              strokeLinecap="round"
            />
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
              <button className="nvi" type="button" onClick={v.nav_s5}>
                Bringing defence closer <br />
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
              <button
                className="nvi nvi-w"
                type="button"
                onClick={v.nav_mb}
              >
                Rewarding privileges
              </button>
            </li>
            <li>
              <button
                className="nvi nvi-w"
                type="button"
                onClick={v.nav_fc}
              >
                Enhancing SAFRA <br />
                clubs & facilities
              </button>
            </li>
            <li>
              <button className="nvi" type="button" onClick={v.nav_nx}>
                Looking forward
              </button>
            </li>
          </ul>
          <a
            className="sm-cta"
            href={import.meta.env.URL_PDF}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              className="sm-dlg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              aria-hidden="true"
              style={{ flex: "none", overflow: "visible" }}
            >
              <defs>
                <linearGradient
                  id={mobile ? "smdl-mobile" : "smdl"}
                  x1="0"
                  y1="0"
                  x2="22"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#6252A4" />
                  <stop offset=".55" stopColor="#F14192" />
                  <stop offset="1" stopColor="#F6765D" />
                </linearGradient>
              </defs>
              <path
                d="M11 1v11.5M6.5 8l4.5 4.5L15.5 8M1.5 14v4.5h19V14"
                fill="none"
                stroke={mobile ? "url(#smdl-mobile)" : "url(#smdl)"}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="sm-dlw"
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              aria-hidden="true"
              style={{ flex: "none" }}
            >
              <path
                d="M12.5 14.8333V1.5M16.9 10.3889L12.5 14.8333L8.1 10.3889M1.5 17.0556L2.1831 19.8167C2.30207 20.2974 2.57671 20.7242 2.96336 21.0292C3.35002 21.3342 3.82651 21.4999 4.3171 21.5H20.6818C21.1724 21.4999 21.6489 21.3342 22.0355 21.0292C22.4222 20.7242 22.6968 20.2974 22.8158 19.8167L23.5 17.0556"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="sm-ctat"
              style={{
                background:
                  "linear-gradient(90deg, #6252A4 0%, #F14192 49.04%, #F6765D 92.79%, #F69141 99.99%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {"DOWNLOAD "}
              <br />
              ANNUAL REPORT
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
