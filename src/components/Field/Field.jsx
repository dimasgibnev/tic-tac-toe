import { FieldLayout } from './FieldLayout';

export const Field = (props) => {
	const { setField, currentPlayer} = props

function handleClick(index) {
	if (currentPlayer === 'X') {
		setField(prev => prev.map((e, i) => index === i && prev[i] !== '0' ? 'X' : e))
	} else {
		setField(prev => prev.map((e, i) => index === i && prev[i] !== 'X' ? '0' : e))
	}
}
	return (
		<>
			<FieldLayout {...props} handleClick={handleClick} />
		</>
	);
};
