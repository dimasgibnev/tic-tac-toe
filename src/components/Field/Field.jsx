import { SET_GAME_FIELD } from '../../actions';
import { store } from '../../store';
import { addPlayer, setField } from '../../utils';
import { FieldLayout } from './FieldLayout';

export const Field = () => {
	const handleClick = (index) => {
		const { isGameEnded, field, currentPlayer } = store.getState();

		if (!isGameEnded && field[index] === '') {
			if (currentPlayer === 'X') {
				store.dispatch({
					type: SET_GAME_FIELD,
					payload: setField(field, 'X', index),
				});
			} else {
				store.dispatch({
					type: SET_GAME_FIELD,
					payload: setField(field, '0', index),
				});
			}
			currentPlayer === 'X'
				? store.dispatch(addPlayer('0'))
				: store.dispatch(addPlayer('X'));
		}
	};

	return (
		<>
			<FieldLayout handleClick={handleClick} />
		</>
	);
};
