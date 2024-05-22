import PropTypes from 'prop-types';
import styles from './FieldLayout.module.css';
import { useSelector } from 'react-redux';

export const FieldLayout = ({ handleClick }) => {
	const { field } = useSelector((state) => state);

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
