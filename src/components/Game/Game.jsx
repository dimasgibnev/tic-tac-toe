/* eslint-disable no-unused-expressions */

import { useEffect } from 'react';
import { GameLayout } from './GameLayout';
import { store } from '../../store';
import { SET_DRAW, SET_END_GAME, SET_NEW_GAME } from '../../actions';
import { gameData } from '../../state';
import { addPlayer } from '../../utils';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const Game = () => {
	const { isGameEnded, currentPlayer, isDraw, field } = store.getState();

	useEffect(() => {
		store.dispatch({ type: SET_NEW_GAME, payload: gameData });
	}, []);

	// if (getWinner() && !isGameEnded) {
	// 	store.dispatch({ type: SET_END_GAME, payload: true });
	// 	currentPlayer === 'X'
	// 		? store.dispatch(addPlayer('0'))
	// 		: store.dispatch(addPlayer('X'));
	// } else if (field.every((e) => e !== '') && !isDraw) {
	// 	store.dispatch({ type: SET_DRAW, payload: true });
	// 	store.dispatch({ type: SET_END_GAME, payload: true });
	// }

	// function getWinner() {
	// 	return (
	// 		WIN_PATTERNS.some((pattern) => pattern.every((e) => field[e] === 'X')) ||
	// 		WIN_PATTERNS.some((pattern) => pattern.every((e) => field[e] === '0'))
	// 	);
	// }

	return (
		<>
			<GameLayout />
		</>
	);
};
