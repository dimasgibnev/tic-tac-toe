import { setGameField, setNewPlayer } from '../../actions';
import { FieldLayout } from './FieldLayout';
import { useDispatch, useSelector } from 'react-redux';

export const Field = () => {
	const { isGameEnded, field, currentPlayer } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleClick = (index) => {
		if (!isGameEnded && field[index] === '') {
			if (currentPlayer === 'X') {
				dispatch(setGameField(field, 'X', index));
			} else {
				dispatch(setGameField(field, '0', index));
			}
			currentPlayer === 'X'
				? dispatch(setNewPlayer('0'))
				: dispatch(setNewPlayer('X'));
		}
	};

	return (
		<>
			<FieldLayout handleClick={handleClick} />
		</>
	);
};
