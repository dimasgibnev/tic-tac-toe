/* eslint-disable no-unused-expressions */
import { GameLayout } from './GameLayout';
import { store } from '../../store';
import { setDraw, setEndGame, setNewPlayer } from '../../actions';
import { WIN_PATTERNS } from '../../constants';


export const Game = () => {
	const { isGameEnded, currentPlayer, isDraw, field } = store.getState();

	if (getWinner() && !isGameEnded) {
		store.dispatch(setEndGame(true));
		currentPlayer === 'X'
			? store.dispatch(setNewPlayer('0'))
			: store.dispatch(setNewPlayer('X'));
	} else if (field.every((e) => e !== '') && !isDraw) {
		store.dispatch(setDraw(true));
		store.dispatch(setEndGame(true));
	}

	function getWinner() {
		return (
			WIN_PATTERNS.some((pattern) => pattern.every((e) => field[e] === 'X')) ||
			WIN_PATTERNS.some((pattern) => pattern.every((e) => field[e] === '0'))
		);
	}

	return (
		<>
			<GameLayout />
		</>
	);
};
