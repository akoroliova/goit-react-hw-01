import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>
);
