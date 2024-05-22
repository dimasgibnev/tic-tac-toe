import styles from './InformationLayout.module.css';
import { useSelector } from 'react-redux';

export const InformationLayout = () => {
	const {isDraw, isGameEnded, currentPlayer } = useSelector((state) => state);

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
