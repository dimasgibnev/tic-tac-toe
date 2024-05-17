import styles from './InformationLayout.module.css';
import { store } from '../../store';

export const InformationLayout = () => {
	const {isDraw, isGameEnded, currentPlayer } = store.getState()

	return (
		<div className={styles.information}>
			<p className={styles['information__text']}>
				{isDraw
					? isGameEnded
						? 'Ничья'
						: ''
					: isGameEnded
						? `Победил игрок: ${currentPlayer}`
						: `Ходит игрок: ${currentPlayer}`}
			</p>
		</div>
	);
};
