import { Component } from 'react';
import { setGameField, setNewPlayer } from '../../actions';
import { FieldLayout } from './FieldLayout';
import { connect } from 'react-redux';
class FieldContainer extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	 handleClick  (index) {
		if (!this.props.isGameEnded && this.props.field[index] === '') {
			if (this.props.currentPlayer === 'X') {
				this.props.dispatch(setGameField(this.props.field, 'X', index));
			} else {
				this.props.dispatch(setGameField(this.props.field, '0', index));
			}
			this.props.currentPlayer === 'X'
				? this.props.dispatch(setNewPlayer('0'))
				: this.props.dispatch(setNewPlayer('X'));
		}

	};

	render () {
		return (
			<>
				<FieldLayout handleClick={this.handleClick} />
			</>
		);
	}
};


const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	field: state.field,
})

export const Field = connect(mapStateToProps)(FieldContainer)