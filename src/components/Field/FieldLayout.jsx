import styles from './FieldLayout.module.css';

export const FieldLayout = ({field, setField}) => {
	return (
		<ul className={styles.field}>
			{field.map((cell, i) => (
				<li>{cell}</li>
			))}
		</ul>
	);
};
