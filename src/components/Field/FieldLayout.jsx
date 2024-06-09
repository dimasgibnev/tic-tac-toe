import { Component } from 'react';
import { connect } from 'react-redux';

class FieldLayoutContainer extends Component {
	render() {
		return (
			<div className="flex flex-wrap flex-row text-8xl w-96">
				{this.props.field.map((cell, i) => (
					<li
						key={i}
						className="bg-slate-200 block list-none border border-solid border-black w-1/3 h-1/3 text-center cursor-pointer"
						onClick={() => this.props.handleClick(i)}
					>
						{cell}
					</li>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ field: state.field });

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
