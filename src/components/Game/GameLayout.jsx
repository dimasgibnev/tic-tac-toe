import { Field } from '../Field';
import { Information } from '../Information';
import styles from './GameLayout.module.css';

export const GameLayout = (props) => {
	return (
		<div className={styles.game}>
			<Field {...props} />
			<div className="game__information">
				<Information {...props} />
				{props.isGameEnded && (
					<button
						className={styles['game__start-button']}
						type="text"
						onClick={props.startAgain}
					>
						Начать заново
					</button>
				)}
			</div>
		</div>
	);
};
