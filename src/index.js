import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './components/Game/Game';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<Game />
	</Provider>,
);
