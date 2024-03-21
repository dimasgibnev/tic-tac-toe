import PropTypes from 'prop-types';
import styles from './InformationLayout.module.css';
export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
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

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};