import { SECTION_IDS } from './routes.js';
export function MobileEnding({ height }) {
  return <section id={SECTION_IDS.wc} className="mobile-ending" style={{ top: height * 3, height }} data-mobile-scroll="">
    <div className="mobile-ending-statement"><h2><span>The year may over.</span><span>Our works continues.</span></h2></div>
    <div id={SECTION_IDS.end} className="mobile-ending-closing"><h2>One year.<br />Many connections.<br />One shared purpose.</h2><p>From supporting NSmen and their families to strengthening community ties and our collective commitment to defence,<br />SAFRA continues to bring people together through National Service.</p><a href={import.meta.env.URL_PDF} target="_blank" rel="noopener noreferrer"><svg width="22" height="20" viewBox="0 0 22 20" aria-hidden="true" fill="none"><path d="M11 1v12m-4-4 4 4 4-4M1 13v5h20v-5" stroke="#F14192" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg><span>Download full<br />annual report</span></a></div>
  </section>;
}
