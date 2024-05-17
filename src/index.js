import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './components/Game/Game';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
	root.render(<Game />);
};

renderApp();

store.subscribe(renderApp);
