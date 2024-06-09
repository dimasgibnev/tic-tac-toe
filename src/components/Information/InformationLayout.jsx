import { connect } from 'react-redux';
import { Component } from 'react';

class InformationLayoutContainer extends Component {
	render() {
		return (
			<div className='bg-slate-200 h-1/5 w-full p-2 text-center'>
				<p className='block mb-1 font-bold'>
					{this.props.isDraw
						? this.props.isGameEnded
							? 'Ничья'
							: ''
						: this.props.isGameEnded
							? `Победил игрок: ${this.props.currentPlayer}`
							: `Ходит игрок: ${this.props.currentPlayer}`}
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const InformationLayout = connect(mapStateToProps)(
	InformationLayoutContainer,
);
