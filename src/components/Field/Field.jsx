import { FieldLayout } from './FieldLayout';

export const Field = (props) => {
	const { setField, currentPlayer} = props

function handleClick(index) {
	if (currentPlayer === 'X') {
		setField()
	} else {
		setField()
	}
}
	return (
		<>
			<FieldLayout {...props} handleClick={handleClick} />
		</>
	);
};
