import { SET_NEW_PLAYER } from './actions';

export const addPlayer = (player) => {
	return {
		type: SET_NEW_PLAYER,
		player,
	};
};

export const setField = (field, player, index) => {
	const newField = field.map((e, i) =>
		index === i && field[i] !== '0' && field[i] !== 'X' ? player : e,
	);
	return newField;
};
