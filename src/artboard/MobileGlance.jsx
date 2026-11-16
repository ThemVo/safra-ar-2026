import { T, s } from "./bind.jsx";
import { SECTION_IDS, screenId } from "./routes.js";
export default function MobileGlance(v) { return (<section
            id={SECTION_IDS.s3}
            className="s3c"
            aria-labelledby="glance-title"
            style={{
              position: "absolute",
              left: "0",
              top: "844px",
              width: "390px",
              height: "844px",
            }}
          >
            <div
              id={screenId("s3", 0)}
              className={`sl ${s(v.sl0)}`}
              aria-label="Membership"
            >
              <div
                className="sub"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "112px",
                  width: "390px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    display: "inline-block",
                    margin: "0",
                    padding: "0 .04em .12em",
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "1.2",
                    letterSpacing: "-0.005em",
                    background:
                      "linear-gradient(90deg, #6C51A2 0%, #B0489E 30%, #E8448F 58%, #F3606F 80%, #F68A49 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Membership
                </h3>
              </div>
              <div
                className="cd"
                style={{
                  "--i": "0",
                  position: "absolute",
                  left: "16px",
                  top: "152px",
                  width: "175px",
                  height: "150px",
                  boxSizing: "border-box",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: "4.8px",
                  borderRadius: "10px",
                  background: "#18212A",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "1.25",
                    color: "#FFFFFF",
                  }}
                >
                  Members
                </p>
                <p
                  aria-label="Over 417K"
                  style={{
                    margin: "0",
                    fontSize: "39.6px",
                    fontWeight: "400",
                    lineHeight: "1.05",
                    letterSpacing: "0",
                    color: "#F34241",
                  }}
                >
                  <span
                    style={{
                      marginRight: "8.4px",
                      fontSize: "13.2px",
                      letterSpacing: "0",
                      verticalAlign: "0.3em",
                    }}
                  >
                    Over
                  </span>
                  <T v={v.v?.m1} />
                </p>
              </div>
              <div
                className="cd frame"
                style={{
                  "--i": "1",
                  position: "absolute",
                  left: "16px",
                  top: "618px",
                  width: "358px",
                  height: "202px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="pic"
                  src="./assets/membership-running-group-mobile.jpg"
                  alt="A running group of members in SAFRA singlets posing outdoors at sunset"
                  style={{
                    display: "block",
                    width: "358px",
                    height: "202px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="cd frame"
                style={{
                  "--i": "2",
                  position: "absolute",
                  left: "16px",
                  top: "310px",
                  width: "358px",
                  height: "300px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="pic"
                  src="./assets/membership-family-celebration-mobile.jpg"
                  alt="Members and their children with a gingerbread mascot at a festive celebration"
                  style={{
                    display: "block",
                    width: "358px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="cd"
                style={{
                  "--i": "3",
                  position: "absolute",
                  left: "199px",
                  top: "152px",
                  width: "175px",
                  height: "150px",
                  boxSizing: "border-box",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: "4.8px",
                  borderRadius: "10px",
                  background: "#18212A",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "1.25",
                    color: "#FFFFFF",
                  }}
                >
                  Satisfaction Rating
                </p>
                <p
                  aria-label="86%"
                  style={{
                    margin: "0",
                    fontSize: "39.6px",
                    fontWeight: "400",
                    lineHeight: "1.05",
                    letterSpacing: "0",
                    color: "#F34241",
                  }}
                >
                  <T v={v.v?.m2} />
                </p>
              </div>
            </div>
            <div id={screenId("s3", 1)} className={`sl ${s(v.sl1)}`} aria-label="Outreach and Engagement">
              <div className="sub"><h3 className="mobile-gradient">Outreach &amp; Engagement</h3></div>
              {photo('outreach-bikes', './assets/outreach-balance-bike-race-mobile.png', 'Children participating in a SAFRA cycling activity')}
              {stat('outreach-activities', 'Participation in SAFRA Activities', 'Over 1.72M', v.v?.o1, true)}
              {stat('outreach-appreciation', 'People Engaged Through Appreciating NSmen Initiatives', 'Over 75K', v.v?.o2, true)}
              {photo('outreach-card', './assets/nsmen-art-jam-thank-you-card.jpg', 'A handmade card showing appreciation for NSmen')}
              {photo('outreach-defence-photo', './assets/ns-experience-camp-gallery-06.jpg', 'Participants taking part in a defence activity')}
              {stat('outreach-defence', 'Participation in Defence Initiatives', 'Over 211K', v.v?.o3, true)}
              {stat('outreach-cohesion', 'Participation in Cohesion Activities for NS Units', 'Over 52K', v.v?.o4, true)}
              {photo('outreach-group', './assets/nsmen-food-truck-gallery-03.jpg', 'NSmen posing together at a cohesion activity')}
            </div>
            <div id={screenId("s3", 2)} className={`sl ${s(v.sl2)}`} aria-label="Sustainability">
              <div className="sub"><h3 className="mobile-gradient">Sustainability</h3></div>
              {photo('sustainability-solar', './assets/sustainability-solar-panels-mobile.png', 'Solar panels under a blue sky')}
              {stat('sustainability-panels', 'Number of Solar Panels Across SAFRA Clubs Inclusive of 870 New Panels Installed at SAFRA Yishun', '6,850', v.v?.s3)}
              {stat('sustainability-energy', 'Solar Energy Generated', '1074 MWh', v.v?.s1?.replace(',', ''), false, 'Equivalent to the electricity usage of over 320 4-room HDB flats for a year')}
              {stat('sustainability-carbon', <>Reduction in Carbon Dioxide (CO<sub>2</sub>) Emissions</>, '432 Tonnes', v.v?.s2, false, <>Equivalent to the annual CO<sub>2</sub> absorption of 19,800 trees</>)}
              {photo('sustainability-trees', './assets/sustainability-tree-canopy-mobile.png', 'Sunlight shining through a green tree canopy')}
            </div>
          </section>); }

function photo(slot, src, alt) {
  return <div className={`cd frame ${slot}`} key={slot}><img className="pic" src={src} alt={alt} /></div>;
}

function stat(slot, label, accessibleValue, value, over = false, note) {
  return <div className={`cd mobile-glance-stat ${slot}`} key={slot}>
    <p className="mobile-glance-label">{label}</p>
    <p className="mobile-glance-value" aria-label={accessibleValue}>{over && <span>Over</span>}<T v={value} /></p>
    {note && <p className="mobile-glance-note">{note}</p>}
  </div>;
}
