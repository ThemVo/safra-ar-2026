import { useEffect, useRef } from 'react';
import Artboard from './artboard/Artboard.jsx';

// The artboard is designed at 1440 × 900 and scaled to fit the window, centred.
export default function App() {
  const wrap = useRef(null);
  useEffect(() => {
    const fit = () => {
      const k = Math.min(window.innerWidth / 1440, window.innerHeight / 900);
      if (wrap.current) wrap.current.style.transform = `scale(${k})`;
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return (
    <div className="stage">
      <div className="wrap" id="wrap" ref={wrap}>
        <Artboard />
      </div>
    </div>
  );
}
