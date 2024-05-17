import {
	SET_NEW_PLAYER,
	SET_DRAW,
	SET_END_GAME,
	SET_GAME_FIELD,
	SET_NEW_GAME,
} from './constants';
import { defaultState } from './state';

export const setNewGame = () => {
	return {
		type: SET_NEW_GAME,
		payload: defaultState,
	};
};
export const setDraw = (isDraw) => {
	return { type: SET_DRAW, payload: isDraw }
};
export const setEndGame = (isGameEnd) => {
	return { type: SET_END_GAME, payload: isGameEnd }
};

export const setNewPlayer = (player) => {
	return {
		type: SET_NEW_PLAYER,
		payload: player,
	};
};

export const setGameField = (field, player, index) => {
	const newField = field.map((e, i) =>
		index === i && field[i] !== '0' && field[i] !== 'X' ? player : e,
	);
	return { type: SET_GAME_FIELD, payload: newField };
};
