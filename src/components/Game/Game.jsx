/* eslint-disable no-unused-expressions */
import { GameLayout } from './GameLayout';
import { Component } from 'react';
import { setNewPlayer, setDraw, setEndGame } from '../../actions';
import { WIN_PATTERNS } from '../../constants';
import { connect } from 'react-redux';
export class GameContainer extends Component {
	constructor(props) {
		super(props);
		this.getWinner = this.getWinner.bind(this);
	}

	componentDidUpdate () {
		if (this.getWinner() && !this.props.isGameEnded) {
			this.props.dispatch(setEndGame(true));
			this.props.currentPlayer === 'X'
				? this.props.dispatch(setNewPlayer('0'))
				: this.props.dispatch(setNewPlayer('X'));
		} else if (this.props.field.every((e) => e !== '') && !this.props.isDraw) {
			this.props.dispatch(setDraw(true));
			this.props.dispatch(setEndGame(true));
		}
	}

	getWinner () {
		return (
			WIN_PATTERNS.some((pattern) =>
				pattern.every((e) => this.props.field[e] === 'X'),
			) ||
			WIN_PATTERNS.some((pattern) =>
				pattern.every((e) => this.props.field[e] === '0'),
			)
		);
	}

	render() {
		return (
			<>
				<GameLayout />
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
	field: state.field,
})

export const Game = connect(mapStateToProps)(GameContainer)