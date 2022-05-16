import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import './styl/main.styl';

const root = createRoot(document.getElementById('root'));

root.render(
	<App />
);
