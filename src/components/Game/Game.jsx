/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], 
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	  ];

	  function getWinner() {

		return WIN_PATTERNS.some((pattern) =>  pattern.every((e) => field[e] === 'X'))

	  }

	  if (getWinner() && !isGameEnded) {
			setIsGameEnded(true)
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
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setSsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				field={field}
				setField={setField}
				startAgain={startAgain}
			/>
		</>
	);
};
