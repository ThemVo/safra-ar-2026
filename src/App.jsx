import React, { useEffect, useState } from 'react';
import Artboard from './artboard/Artboard.jsx';

const W = 1440;
const H = 900;

// Optional deep link: ?view=6 (or any start-view label) and ?final=1 for the end state.
function readParams() {
  const q = new URLSearchParams(window.location.search);
  const props = {};
  if (q.get('view')) props.startView = q.get('view');
  if (q.get('final') === '1') props.showFinal = true;
  return props;
}

// Scales the fixed 1440×900 artboard to fit the window, letterboxed and centred.
export default function App() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / W, window.innerHeight / H));
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  return (
    <div className="stage">
      <div className="frame" style={{ width: W, height: H, transform: `scale(${scale})` }}>
        <Artboard {...readParams()} />
      </div>
    </div>
  );
}
