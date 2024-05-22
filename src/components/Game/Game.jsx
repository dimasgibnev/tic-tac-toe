/* eslint-disable no-unused-expressions */
import { GameLayout } from './GameLayout';
import { setDraw, setEndGame, setNewPlayer } from '../../actions';
import { WIN_PATTERNS } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';

export const Game = () => {
	const { isGameEnded, currentPlayer, isDraw, field } = useSelector((state) => state);
	const dispatch = useDispatch();

	if (getWinner() && !isGameEnded) {
		dispatch(setEndGame(true));
		currentPlayer === 'X' ? dispatch(setNewPlayer('0')) : dispatch(setNewPlayer('X'));
	} else if (field.every((e) => e !== '') && !isDraw) {
		dispatch(setDraw(true));
		dispatch(setEndGame(true));
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
