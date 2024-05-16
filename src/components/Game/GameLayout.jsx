import { Field } from '../Field';
import { Information } from '../Information';
import styles from './GameLayout.module.css';
import { store } from '../../store';
import {  SET_NEW_GAME} from '../../actions';
import { gameData } from '../../state';


export const GameLayout = () => {
	const { isGameEnded} = store.getState();

	return (
		<div className={styles.game}>
			<Field />
			<div className="game__information">
				<Information/>
				{isGameEnded && (
					<button
						className={styles['game__start-button']}
						type="text"
						onClick={() => store.dispatch({ type: SET_NEW_GAME, payload: gameData })}
					>
						Начать заново
					</button>
				)}
			</div>
		</div>
	);
};

