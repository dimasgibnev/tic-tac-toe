import { Field } from '../Field';
import { Information } from '../Information';
import styles from './GameLayout.module.css'

export const GameLayout = (props) => {
	const {
		field,
		setField,
		...rest
	} = props;
	return (
		<div className={styles.game}>
			<Field field={field} setField={setField} />
			<Information
				{...rest}
			/>
		</div>
	);
};
