import {
	SET_DRAW,
	SET_END_GAME,
	SET_GAME_FIELD,
	SET_NEW_GAME,
	SET_NEW_PLAYER,
} from './actions';

const initialState = {};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_NEW_GAME: {
			return payload;
		}
		case SET_NEW_PLAYER: {
			return {...state, currentPlayer: payload};
		}
		case SET_END_GAME: {
			return {
				...state,
				isGameEnded: payload
			};
		}
		case SET_DRAW: {
			return {
				...state,
				isDraw: payload
			};
		}
		case SET_GAME_FIELD: {
			return {
				...state,
				field: payload
			};
		}
		default:
			return state;
	}
};
