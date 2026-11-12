import { MobileBack } from "./MobileStories.jsx";
import { SECTION_IDS, screenId } from './routes.js';
import { s, T } from './bind.jsx';
// Reuse the desktop categories, content, offers and icon assets on mobile.
export function MobileRewards({ v, height }) {
  if (v.mobileView !== "mb") return null;
  return <section id={SECTION_IDS.mb} className="s10 mobile-rewards" aria-labelledby="mb-title" data-mobile-scroll="" style={{ top: 2 * height, height }}>
    <header className="mobile-story-header"><MobileBack onClick={v.backMb} light /><button className="mobile-next" type="button" onClick={v.mobileInitiativeNext.click}>Next: {v.mobileInitiativeNext.label}</button></header>
    <h2 id="mb-title" className="mbk mk2">Rewarding privileges</h2>
    <p className="mbk mk4">SAFRA members enjoyed a world of benefits whole year round, ranging from exclusive privileges to preferential rates at SAFRA clubs and partner merchants islandwide.</p>
<h3 className="mbk mobile-top-picks">TOP PICKS</h3>
<div className="mbk mk5" role="group" aria-label="Top picks by category" style={{ position: "relative", width: "100%", borderRadius: "16px" }}>
              <div id={screenId("mb", 0)} className={`mbs ${s(v.mbv?.dv0)}`} style={{ position: "relative", zIndex: "1", marginTop: "0", width: "100%", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", gap: "24px", borderRadius: "16px", background: "#313851" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.de0} aria-controls="mobile-reward-panel-0" onClick={v.mbTab0} style={{ display: "flex", alignItems: "center", gap: "24px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb2-ic-food.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                    <span style={{ flex: "1 1 auto", minWidth: "0", fontSize: "15.0px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "nowrap" }}>
                      {"Food & Groceries"}
                    </span>
                    <span className="mbpl" aria-hidden="true"><img className="mb-icon-plus" src="./assets/mb-plus.svg" alt="" width="40" height="40" /><img className="mb-icon-minus" src="./assets/mb-minus.svg" alt="" width="40" height="40" /></span>
                  </button>
                </h3>
                <div id="mobile-reward-panel-0" className="mbc" inert={v.mbv?.de0 === "true" ? undefined : ""} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", color: "#FFFFFF", lineHeight: "1.4" }}>
                    <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                      Discounts at over
                    </p>
                    <p aria-label="100" style={{ margin: "0", fontSize: "35.0px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap" }}>
                      <T v={v.mbv?.c2} />
                    </p>
                    <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                      establishments
                    </p>
                  </div>
                  <p style={{ margin: "0", fontSize: "12.5px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
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
              <div id={screenId("mb", 1)} className={`mbs ${s(v.mbv?.dv1)}`} style={{ position: "relative", zIndex: "2", marginTop: "-32px", width: "100%", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", gap: "24px", borderRadius: "16px", background: "#272C3F" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.de1} aria-controls="mobile-reward-panel-1" onClick={v.mbTab1} style={{ display: "flex", alignItems: "center", gap: "24px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb2-ic-education.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                    <span style={{ flex: "1 1 auto", minWidth: "0", fontSize: "15.0px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "nowrap" }}>
                      {"Education"}
                    </span>
                    <span className="mbpl" aria-hidden="true"><img className="mb-icon-plus" src="./assets/mb-plus.svg" alt="" width="40" height="40" /><img className="mb-icon-minus" src="./assets/mb-minus.svg" alt="" width="40" height="40" /></span>
                  </button>
                </h3>
                <div id="mobile-reward-panel-1" className="mbc" inert={v.mbv?.de1 === "true" ? undefined : ""} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "24px", color: "#FFFFFF", lineHeight: "1.4" }}>
                    <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <p aria-label="27" style={{ margin: "0", fontSize: "35.0px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap" }}>
                        <T v={v.mbv?.c3} />
                      </p>
                      <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                        sponsorships awarded
                      </p>
                    </div>
                    <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                        Worth over
                      </p>
                      <p aria-label="$615K" style={{ margin: "0", fontSize: "35.0px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap" }}>
                        <T v={v.mbv?.c4} />
                      </p>
                    </div>
                  </div>
                  <p style={{ margin: "0", fontSize: "12.5px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
                    These bond-free sponsorships helped members as they pursued their diplomas, bachelor’s and master’s degrees, in support of their education and career aspirations.
                  </p>
                  <div className="mbi" style={{ flex: "none", width: "100%", height: "260px", overflow: "hidden", background: "#FFFFFF" }}>
                    <img src="./assets/mb-edu2.jpg" alt="Sponsorship recipients on stage at the SAFRA Bond-Free Education Scheme Awards Presentation" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
              <div id={screenId("mb", 2)} className={`mbs ${s(v.mbv?.dv2)}`} style={{ position: "relative", zIndex: "3", marginTop: "-32px", width: "100%", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", gap: "24px", borderRadius: "16px", background: "#313851" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.de2} aria-controls="mobile-reward-panel-2" onClick={v.mbTab2} style={{ display: "flex", alignItems: "center", gap: "24px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb2-ic-movies.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                    <span style={{ flex: "1 1 auto", minWidth: "0", fontSize: "15.0px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "nowrap" }}>
                      {"Movies & Entertainment"}
                    </span>
                    <span className="mbpl" aria-hidden="true"><img className="mb-icon-plus" src="./assets/mb-plus.svg" alt="" width="40" height="40" /><img className="mb-icon-minus" src="./assets/mb-minus.svg" alt="" width="40" height="40" /></span>
                  </button>
                </h3>
                <div id="mobile-reward-panel-2" className="mbc" inert={v.mbv?.de2 === "true" ? undefined : ""} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "24px", color: "#FFFFFF", lineHeight: "1.4" }}>
                    <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                        Over
                      </p>
                      <p aria-label="240K" style={{ margin: "0", fontSize: "35.0px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap" }}>
                        <T v={v.mbv?.c5} />
                      </p>
                      <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                        discounted movie tickets
                        <br />
                        and vouchers purchased
                      </p>
                    </div>
                    <div style={{ flex: "1 0 0", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                        Close to
                      </p>
                      <p aria-label="12K" style={{ margin: "0", fontSize: "35.0px", fontWeight: "400", letterSpacing: "0", whiteSpace: "nowrap" }}>
                        <T v={v.mbv?.c6} />
                      </p>
                      <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                        complimentary movie
                        <br />
                        tickets given away
                      </p>
                    </div>
                  </div>
                  <p style={{ margin: "0", fontSize: "12.5px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
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
              <div id={screenId("mb", 3)} className={`mbs ${s(v.mbv?.dv3)}`} style={{ position: "relative", zIndex: "4", marginTop: "-32px", width: "100%", boxSizing: "border-box", padding: "24px", display: "flex", flexDirection: "column", gap: "24px", borderRadius: "16px", background: "#272C3F" }}>
                <h3 style={{ margin: "0" }}>
                  <button className="mbh" type="button" aria-expanded={v.mbv?.de3} aria-controls="mobile-reward-panel-3" onClick={v.mbTab3} style={{ display: "flex", alignItems: "center", gap: "24px", width: "100%", padding: "0", margin: "0", border: "0", background: "transparent", textAlign: "left", fontFamily: "inherit", cursor: "pointer" }}>
                    <img src="./assets/mb2-ic-travel.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                    <span style={{ flex: "1 1 auto", minWidth: "0", fontSize: "15.0px", fontWeight: "600", lineHeight: "1.2", color: "#F34141", whiteSpace: "nowrap" }}>
                      {"Travel, Staycations & Local Attractions"}
                    </span>
                    <span className="mbpl" aria-hidden="true"><img className="mb-icon-plus" src="./assets/mb-plus.svg" alt="" width="40" height="40" /><img className="mb-icon-minus" src="./assets/mb-minus.svg" alt="" width="40" height="40" /></span>
                  </button>
                </h3>
                <div id="mobile-reward-panel-3" className="mbc" inert={v.mbv?.de3 === "true" ? undefined : ""} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div className="mobile-travel-grid">
                  <div className="mobile-travel-row">
                    <div style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px", borderRadius: "8px", background: "#313851", color: "#FFFFFF", lineHeight: "1.4" }}>
                      <div className="mobile-travel-card-heading">
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.64px" }}>
                            Up to
                          </p>
                          <p aria-label="60% off" style={{ margin: "0", fontSize: "27.5px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.mbv?.c7} /><span style={{ fontSize: "17.5px" }}>% off</span>
                          </p>
                        </div>
                        <img src="./assets/mb-tv-plane.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                      </div>
                      <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                        on travel booking platforms
                      </p>
                    </div>
                    <div style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px", borderRadius: "8px", background: "#313851", color: "#FFFFFF", lineHeight: "1.4" }}>
                      <div className="mobile-travel-card-heading">
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.64px" }}>
                            Up to
                          </p>
                          <p aria-label="63% off" style={{ margin: "0", fontSize: "27.5px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.mbv?.c8} /><span style={{ fontSize: "17.5px" }}>% off</span>
                          </p>
                        </div>
                        <img src="./assets/mb-tv-hotel.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                      </div>
                      <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                        on local and overseas accommodations
                      </p>
                    </div>
                  </div>
                  <div className="mobile-travel-row">
                    <div style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px", borderRadius: "8px", background: "#313851", color: "#FFFFFF", lineHeight: "1.4" }}>
                      <div className="mobile-travel-card-heading">
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.64px" }}>
                            Free
                          </p>
                          <p style={{ margin: "0", fontSize: "16.25px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "0" }}>
                            Upgrades, onboard
                            <br />
                            {"credits & deals"}
                          </p>
                        </div>
                        <img src="./assets/mb-tv-ship.svg" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                      </div>
                      <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                        on cruises
                      </p>
                    </div>
                    <div style={{ flex: "1 0 0", minWidth: "0", boxSizing: "border-box", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px", borderRadius: "8px", background: "#313851", color: "#FFFFFF", lineHeight: "1.4" }}>
                      <div className="mobile-travel-card-heading">
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.64px" }}>
                            Up to
                          </p>
                          <p aria-label="30% off" style={{ margin: "0", fontSize: "27.5px", fontWeight: "400", lineHeight: "1.4", letterSpacing: "0", whiteSpace: "nowrap" }}>
                            <T v={v.mbv?.c9} /><span style={{ fontSize: "17.5px" }}>% off</span>
                          </p>
                        </div>
                        <img src="./assets/mb-tv-wheel2.png" alt="" width="48" height="48" style={{ display: "block", flex: "none", width: "48px", height: "48px" }} />
                      </div>
                      <p style={{ margin: "0", fontSize: "10.0px", letterSpacing: "0.32px" }}>
                        on admission tickets to local attractions
                      </p>
                    </div>
                  </div>
                  </div>
                  <p style={{ margin: "0", fontSize: "12.5px", fontWeight: "400", lineHeight: "1.6", color: "#DDDDDD", opacity: ".8" }}>
                    Members unlocked exclusive deals that made travel and recreation more affordable.
                  </p>
                </div>
              </div>
            </div>
  </section>;
}
