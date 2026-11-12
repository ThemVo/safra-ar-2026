import { MobileBack } from './MobileStories.jsx';
import { SECTION_IDS } from './routes.js';
export function MobileFacilities({ v, height }) {
  if (v.mobileView !== 'fc1' && v.mobileView !== 'fc2') return null;
  return <section id={SECTION_IDS.fc1} className="mobile-facilities" style={{ top: height * 2, height }} aria-labelledby="fc-title" data-mobile-scroll="">
    <header className="mobile-story-header"><MobileBack onClick={v.backFc} /><button className="mobile-next" type="button" onClick={v.mobileInitiativeNext.click}>Next: {v.mobileInitiativeNext.label}</button></header>
    <div className="mobile-facilities-body"><h2 id="fc-title">Enhancing SAFRA<br />clubs &amp; facilities</h2><p>We continued to enhance our SAFRA clubs and facilities to better serve as vibrant community spaces where national servicemen and their families can bond, stay active, unwind and feel a sense of belonging.</p>
      <article className="mobile-facility"><img src="./assets/fc-gym.jpg" alt="EnergyOne Gym at SAFRA Toa Payoh" /><div><h3>Elevated experience<br />at EnergyOne Gym</h3><p>The gym at SAFRA Toa Payoh was enhanced with redesigned workout zones, new functional training equipment, Booty Builder machines and refreshed amenities to improve members’ fitness experience.</p></div></article>
      <article className="mobile-facility cmpb"><div className="mobile-facility-photos"><img src="./assets/fc-cmpb-cafe.jpg" alt="The new SAFRA café lounge at CMPB" /><img src="./assets/fc-cmpb-lounge.jpg" alt="Seating in the SAFRA@CMPB lounge" /></div><div><h3>Launch of SAFRA@CMPB</h3><p>A new café lounge was opened at the new Central Manpower Base (CMPB) to provide a cosy place where pre-enlistees, national servicemen and MINDEF staff can recharge, socialise and get to know more about SAFRA.</p></div></article>
    </div>
  </section>;
}
