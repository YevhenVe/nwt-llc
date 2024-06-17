import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactGA from 'react-ga4';
import './styles/Index.scss';
import './i18n';

ReactGA.initialize('G-BKHZCKPVK5');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
