import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field, handleClick }) => {
	return (
		<div className={styles.field}>
			{field.map((cell, i) => (
				<li key={i} className={styles['field__cell']} onClick={() => handleClick(i)}>
					{cell}
				</li>
			))}
		</div>
	);
};
