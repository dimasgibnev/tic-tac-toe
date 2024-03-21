/* eslint-disable no-unused-expressions */

import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	function handleClick(index) {
		if (!isGameEnded && field[index] === '') {
			if (currentPlayer === 'X') {
				setField((prev) =>
					prev.map((e, i) =>
						index === i && prev[i] !== '0' && prev[i] !== 'X' ? 'X' : e,
					),
				);
			} else {
				setField((prev) =>
					prev.map((e, i) =>
						index === i && prev[i] !== '0' && prev[i] !== 'X' ? '0' : e,
					),
				);
			}
			currentPlayer === 'X' ? setCurrentPlayer('0') : setCurrentPlayer('X');
		}
	}

	function getWinner() {
		return (
			WIN_PATTERNS.some((pattern) => pattern.every((e) => field[e] === 'X')) ||
			WIN_PATTERNS.some((pattern) => pattern.every((e) => field[e] === '0'))
		);
	}

	if (getWinner() && !isGameEnded) {
		setIsGameEnded(true);
		currentPlayer === 'X' ? setCurrentPlayer('0') : setCurrentPlayer('X');
	} else if (field.every((e) => e !== '') && !isDraw) {
		setIsDraw(true);
		setIsGameEnded(true);
	}

	function startAgain() {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	}

	return (
		<>
			<GameLayout
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				field={field}
				handleClick={handleClick}
				startAgain={startAgain}
			/>
		</>
	);
};
