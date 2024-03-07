import Sudoku from './components/Sudoku';
import React from "react";
import './styles/main.scss';

function Puzzle() {
	return (
		<div className="App">
			<h1 style={{ fontSize: '40px', textAlign: 'center', margin: '40px 0 20px 0' }}>Sudoku</h1>
			<hr style={{ width: '80%', margin: '30px auto' }}/>
			<Sudoku/>
		</div>
	);
}

export default Puzzle;
