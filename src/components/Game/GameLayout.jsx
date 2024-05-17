import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import styles from './GameLayout.module.css';
import { store } from '../../store';
import { setNewGame } from '../../actions';

export const GameLayout = () => {
	const { isGameEnded } = store.getState();

	return (
		<div className={styles.game}>
			<Field />
			<div className={styles['game__information']}>
				<Information />
				{isGameEnded && (
					<button
						className={styles['game__start-button']}
						type="text"
						onClick={() => store.dispatch(setNewGame())}
					>
						Начать заново
					</button>
				)}
			</div>
		</div>
	);
};
