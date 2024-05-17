import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';
import { store } from '../../store';

export const FieldLayout = ({ handleClick }) => {
	const { field } = store.getState();

	return (
		<div className={styles.field}>
			{field.map((cell, i) => (
				<li
					key={i}
					className={styles['field__cell']}
					onClick={() => handleClick(i)}
				>
					{cell}
				</li>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	handleClick: PropTypes.func,
};
