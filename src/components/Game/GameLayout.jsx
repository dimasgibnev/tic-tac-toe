import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import { setNewGame } from '../../actions';
import { Component } from 'react';
import { connect } from 'react-redux';

class GameLayoutContainer extends Component {
	render() {
		return (
			<div className="relative top-24 flex w-96 h-64 mr-auto">
				<Field />
				<div className="flex flex-column">
					<Information />
					{this.props.isGameEnded && (
						<button
							className="w-full border-none rounded bg-red-600 text-white cursor-pointer delay-300 p-1 hover: scale-105"
							type="text"
							onClick={() => this.props.dispatch(setNewGame())}
						>
							Начать заново
						</button>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ isGameEnded: state.isGameEnded });

export const GameLayout = connect(mapStateToProps)(GameLayoutContainer);
