import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// No <StrictMode>: the artboard runs timers and rAF timelines from componentDidMount,
// and StrictMode's dev-only double mount would start them twice.
createRoot(document.getElementById('root')).render(<App />);
