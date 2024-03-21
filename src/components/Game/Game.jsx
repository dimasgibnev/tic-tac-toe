import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(true);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']);

	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
	  ];

	//   function getWinner() {
	// 	return field.some((e, i) => e === WIN_PATTERNS[i])
	//   }
	//   if (getWinner()) {
	// 	setIsGameEnded(true)
	//   }

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
