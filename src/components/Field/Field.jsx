import { setGameField, setNewPlayer } from '../../actions';
import { store } from '../../store';
import { FieldLayout } from './FieldLayout';

export const Field = () => {
	const handleClick = (index) => {
		const { isGameEnded, field, currentPlayer } = store.getState();

		if (!isGameEnded && field[index] === '') {
			if (currentPlayer === 'X') {
				store.dispatch(setGameField(field, 'X', index));
			} else {
				store.dispatch(setGameField(field, '0', index));
			}
			currentPlayer === 'X'
				? store.dispatch(setNewPlayer('0'))
				: store.dispatch(setNewPlayer('X'));
		}
	};

	return (
		<>
			<FieldLayout handleClick={handleClick} />
		</>
	);
};
