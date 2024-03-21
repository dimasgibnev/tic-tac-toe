import PropTypes from 'prop-types';
import { Field } from '../Field';
import { Information } from '../Information';
import styles from './GameLayout.module.css';

export const GameLayout = ({
	field,
	handleClick,
	currentPlayer,
	isDraw,
	isGameEnded,
	startAgain,
}) => {
	return (
		<div className={styles.game}>
			<Field field={field} handleClick={handleClick} />
			<div className="game__information">
				<Information
					currentPlayer={currentPlayer}
					isDraw={isDraw}
					isGameEnded={isGameEnded}
				/>
				{isGameEnded && (
					<button
						className={styles['game__start-button']}
						type="text"
						onClick={startAgain}
					>
						Начать заново
					</button>
				)}
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	startAgain: PropTypes.func,
};
