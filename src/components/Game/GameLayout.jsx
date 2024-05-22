import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import styles from './GameLayout.module.css';
import { setNewGame } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

export const GameLayout = () => {
	const { isGameEnded } = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<div className={styles.game}>
			<Field />
			<div className={styles['game__information']}>
				<Information />
				{isGameEnded && (
					<button
						className={styles['game__start-button']}
						type="text"
						onClick={() => dispatch(setNewGame())}
					>
						Начать заново
					</button>
				)}
			</div>
		</div>
	);
};
