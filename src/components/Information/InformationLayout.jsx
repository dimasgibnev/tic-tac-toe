import styles from './InformationLayout.module.css'
export const InformationLayout = (props) => {
	const { currentPlayer, isDraw, isGameEnded } = props;
	return (
		<>
			<div className={styles.information}>
				{isDraw
					?  isGameEnded ? `Победил игрок: ${currentPlayer}` : 'Ничья'
					: `Ходит игрок : ${currentPlayer}`}
			</div>
		</>
	);
};
