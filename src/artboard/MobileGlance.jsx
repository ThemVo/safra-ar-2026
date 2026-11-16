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
                  src="./assets/mobile-glanceMembers.jpg"
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
                  src="./assets/mobile-glanceFamily.jpg"
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
            <div
              id={screenId("s3", 1)}
              className={`sl ${s(v.sl1)}`}
              aria-label="Outreach and Engagement"
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
                  {"Outreach & Engagement"}
                </h3>
              </div>
              <div
                className="cd frame"
                style={{
                  "--i": "0",
                  position: "absolute",
                  left: "16px",
                  top: "448px",
                  width: "175px",
                  height: "182px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="pic"
                  src="./assets/ag-bikes.jpg"
                  alt="Young children racing on balance bikes at a SAFRA event"
                  style={{
                    display: "block",
                    width: "175px",
                    height: "182px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="cd"
                style={{
                  "--i": "1",
                  position: "absolute",
                  left: "16px",
                  top: "152px",
                  width: "175px",
                  height: "140px",
                  boxSizing: "border-box",
                  padding: "14px 14px 16px",
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
                  Participation in SAFRA
                  <br />
                  Activities
                </p>
                <p
                  aria-label="Over 1.72M"
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
                  <T v={v.v?.o1} />
                </p>
              </div>
              <div
                className="cd"
                style={{
                  "--i": "5",
                  position: "absolute",
                  left: "16px",
                  top: "300px",
                  width: "175px",
                  height: "140px",
                  boxSizing: "border-box",
                  padding: "14px 14px 16px",
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
                  People Engaged Through
                  <br />
                  Appreciating NSmen
                  <br />
                  Initiatives
                </p>
                <p
                  aria-label="Over 75K"
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
                  <T v={v.v?.o2} />
                </p>
              </div>
              <div
                className="cd frame"
                style={{
                  "--i": "4",
                  position: "absolute",
                  left: "16px",
                  top: "638px",
                  width: "175px",
                  height: "182px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="pic"
                  src="./assets/ag-card.jpg"
                  alt="A child’s handmade thank-you card with a family photo for an NSman father"
                  style={{
                    display: "block",
                    width: "175px",
                    height: "182px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="cd frame"
                style={{
                  "--i": "3",
                  position: "absolute",
                  left: "199px",
                  top: "448px",
                  width: "175px",
                  height: "182px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="pic"
                  src="./assets/ag-blaster.jpg"
                  alt="Children in Army T-shirts trying out water blasters"
                  style={{
                    display: "block",
                    width: "175px",
                    height: "182px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="cd"
                style={{
                  "--i": "2",
                  position: "absolute",
                  left: "199px",
                  top: "152px",
                  width: "175px",
                  height: "140px",
                  boxSizing: "border-box",
                  padding: "14px 14px 16px",
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
                  Participation in Defence
                  <br />
                  Outreach Initiatives
                </p>
                <p
                  aria-label="Over 211K"
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
                  <T v={v.v?.o3} />
                </p>
              </div>
              <div
                className="cd"
                style={{
                  "--i": "6",
                  position: "absolute",
                  left: "199px",
                  top: "300px",
                  width: "175px",
                  height: "140px",
                  boxSizing: "border-box",
                  padding: "14px 14px 16px",
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
                  Participation in Cohesion
                  <br />
                  Activities for NS Units
                </p>
                <p
                  aria-label="Over 52K"
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
                  <T v={v.v?.o4} />
                </p>
              </div>
              <div
                className="cd frame"
                style={{
                  "--i": "7",
                  position: "absolute",
                  left: "199px",
                  top: "638px",
                  width: "175px",
                  height: "182px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="pic"
                  src="./assets/ag-group.jpg"
                  alt="A group of NSmen in singlets cheering with snack packs"
                  style={{
                    display: "block",
                    width: "175px",
                    height: "182px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div
              id={screenId("s3", 2)}
              className={`sl ${s(v.sl2)}`}
              aria-label="Sustainability"
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
                    lineHeight: "1.4",
                    letterSpacing: "0",
                    background:
                      "linear-gradient(90deg, #6252A4 0%, #F14192 49.038%, #F6765D 92.788%, #F69141 99.99%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Sustainability
                </h3>
              </div>
              <div
                className="cd frame"
                style={{
                  "--i": "0",
                  position: "absolute",
                  left: "16px",
                  top: "152px",
                  width: "358px",
                  height: "150px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="pic"
                  src="./assets/ag-solar-fy26.jpg"
                  alt="Rooftop solar panels under a blue sky"
                  style={{
                    display: "block",
                    width: "358px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="cd"
                style={{
                  "--i": "1",
                  position: "absolute",
                  left: "16px",
                  top: "310px",
                  width: "175px",
                  height: "214px",
                  boxSizing: "border-box",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  borderRadius: "10px",
                  background: "#18212A",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4.8px",
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
                    Solar Energy Generated
                  </p>
                  <p
                    aria-label="1,074 MWh"
                    style={{
                      margin: "0",
                      fontSize: "26px",
                      fontWeight: "400",
                      lineHeight: "1.05",
                      letterSpacing: "0",
                      color: "#F34241",
                    }}
                  >
                    <T v={v.v?.s1} />
                  </p>
                  <p
                    style={{
                      margin: "2.4px 0 0",
                      fontSize: "11px",
                      fontWeight: "400",
                      lineHeight: "1.3",
                      color: "#DDDDDD",
                    }}
                  >
                    Equivalent to the electricity usage of over 320
                    <br />
                    4-room HDB flats for a year
                  </p>
                </div>
              </div>
              <div
                className="cd"
                style={{
                  "--i": "2",
                  position: "absolute",
                  left: "199px",
                  top: "310px",
                  width: "175px",
                  height: "214px",
                  boxSizing: "border-box",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  borderRadius: "10px",
                  background: "#18212A",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4.8px",
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
                    Reduction in Carbon Dioxide (CO
                    <sub
                      style={{
                        fontSize: ".65em",
                        verticalAlign: "-0.25em",
                        lineHeight: "0",
                      }}
                    >
                      2
                    </sub>
                    )
                    <br />
                    Emissions
                  </p>
                  <p
                    aria-label="432 Tonnes"
                    style={{
                      margin: "0",
                      fontSize: "26px",
                      fontWeight: "400",
                      lineHeight: "1.05",
                      letterSpacing: "0",
                      color: "#F34241",
                    }}
                  >
                    <T v={v.v?.s2} />
                  </p>
                  <p
                    style={{
                      margin: "2.4px 0 0",
                      fontSize: "11px",
                      fontWeight: "400",
                      lineHeight: "1.3",
                      color: "#DDDDDD",
                    }}
                  >
                    Equivalent to the annual CO
                    <sub
                      style={{
                        fontSize: ".7em",
                        verticalAlign: "-0.25em",
                        lineHeight: "0",
                      }}
                    >
                      2
                    </sub>
                    {" absorption of"}
                    <br />
                    19,800 mature trees
                  </p>
                </div>
              </div>
              <div
                className="cd"
                style={{
                  "--i": "3",
                  position: "absolute",
                  left: "16px",
                  top: "532px",
                  width: "358px",
                  height: "120px",
                  boxSizing: "border-box",
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  borderRadius: "10px",
                  background: "#18212A",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4.8px",
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
                    Number of Solar Panels Across
                    <br />
                    SAFRA Clubs Inclusive of 870 New Panels
                    <br />
                    Installed at SAFRA Yishun
                  </p>
                  <p
                    aria-label="6,850"
                    style={{
                      margin: "0",
                      fontSize: "26px",
                      fontWeight: "400",
                      lineHeight: "1.05",
                      letterSpacing: "0",
                      color: "#F34241",
                    }}
                  >
                    <T v={v.v?.s3} />
                  </p>
                </div>
              </div>
              <div
                className="cd frame"
                style={{
                  "--i": "4",
                  position: "absolute",
                  left: "16px",
                  top: "660px",
                  width: "358px",
                  height: "160px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="pic"
                  src="./assets/ag-trees-fy26.jpg"
                  alt="Looking up into the green canopy of a large tree"
                  style={{
                    display: "block",
                    width: "358px",
                    height: "160px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div
              className="sweep"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "calc(-1 * var(--gx, 0px))",
                top: "calc(838px + var(--gy, 0px))",
                width: `calc(390px + 2 * var(--gx, 0px))`,
                height: "6px",
                transform: `scaleX(${s(v.sweepS)})`,
                background:
                  "linear-gradient(90deg, #74509F 0%, #F46074 55%, #F68F43 100%)",
              }}
            />
          </section>); }
