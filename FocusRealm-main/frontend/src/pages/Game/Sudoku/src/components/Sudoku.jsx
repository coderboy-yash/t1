import { Component } from 'react';
import Button from '/src/components/shared/Button/Button';
import Toggle from './Toggle';
import NumberInput from './NumberInput';
import React from "react";

import '../styles/sudoku.scss';
// import { Button } from '@material-ui/core';

class Sudoku extends Component {
	mat = null;
	matIncomplete = null;
	N = 9; 
	K = 35; 
	SRN = -1; 
	maxIterations = 9999;

    // Constructor
    constructor(props) {
		super(props);

		this.state = {
			showSolution: props.showSolution || false,
			realTimeCorrection: false
		}

		let tmp = Array(this.N);
		for(let i = 0; i<this.N; i++){
			tmp[i] = Array(this.N);

			for(let j = 0; j<this.N; j++){
				tmp[i][j] = 0;
			}
		}

       
        this.SRN = Math.sqrt(this.N);
		this.mat = tmp;

		for(let i = 0; i<3; i++)
			this.mat[Math.floor(Math.random()*9)][Math.floor(Math.random()*9)] = 1+Math.floor(Math.random()*9);
		
		this.mat = this.solve(this.mat, 0);
		this.matIncomplete = clone(this.mat);

		this.matIncomplete = this.unSolveK(this.matIncomplete, this.K);
    }

	reload = () => {
		let tmp = Array(this.N);
		for(let i = 0; i<this.N; i++){
			tmp[i] = Array(this.N);

			for(let j = 0; j<this.N; j++){
				tmp[i][j] = 0;
			}
		}

        this.SRN = Math.sqrt(this.N);
		this.mat = tmp;

		for(let i = 0; i<3; i++)
			this.mat[Math.floor(Math.random()*9)][Math.floor(Math.random()*9)] = 1+Math.floor(Math.random()*9);
		
		this.mat = this.solve(this.mat, 0);

		this.matIncomplete = clone(this.mat);
		this.matIncomplete = this.unSolveK(this.matIncomplete, this.K);
	}
 
	shuffle = (array) => {
		var currentIndex = array.length,  randomIndex;
	  
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
		
			[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
	  
		return array;
	}

	nextEmptySpot = (mat) => {
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (mat[i][j] === 0) 
					return [i, j];
			}
		}

		return [-1, -1];
	}

    checkRow = (mat, row, value) => {
		for(let i = 0; i < mat[row].length; i++) {
			if(mat[row][i] === value) {
				return false;
			}
		}
	   
		return true;
	}

	checkColumn = (mat, column, value) => {
		for(let i = 0; i < mat.length; i++) {
			if(mat[i][column] === value) {
				return false;
			}
		}
	
		return true;
	}

	checkSquare = (mat, row, column, value) => {
		let boxRow = Math.floor(row / 3) * 3;
		let boxCol = Math.floor(column / 3) * 3;
		
		for (var r = 0; r < 3; r++){
			for (var c = 0; c < 3; c++){
				if (mat[boxRow + r][boxCol + c] === value)
					return false;
			}
		}

		return true;
	}

	checkValue = (mat, row, column, value) => {
		if(this.checkRow(mat, row, value) &&
			this.checkColumn(mat, column, value) &&
			this.checkSquare(mat, row, column, value)) {
			return true;
		}
		
		return false; 
	}

	randNum = () => {
		return Math.floor(Math.random()*this.N)+1;
	}

	solve = (mat, count) => {
		if(count >= this.maxIterations)
			return null;

		let emptySpot = this.nextEmptySpot(mat);
		let row = emptySpot[0];
		let col = emptySpot[1];
		
		if (row === -1){
			return mat;
		}

		let nums = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		nums.forEach(num => {
			if(this.checkValue(mat, row, col, num)){
				mat[row][col] = num;
				this.solve(mat, count+1);
			}
		});

		if (this.nextEmptySpot(mat)[0] !== -1)
			mat[row][col] = 0;
	
		return mat;
	}

	unSolveK = (matrix, K) => {
		let m = [...matrix];
		for(let i = 0; i<K; i++){
			let randX, randY;

			do{
				randX = Math.floor(Math.random()*this.N);
				randY = Math.floor(Math.random()*this.N);
			}while(m[randX][randY] === -1);

			m[randX][randY] = -1;
		}

		return m;
	}

	toggleComplete = () => {
		this.setState({showSolution: !this.state.showSolution});
	}

	checkInput = (i, j, e) => {
		let val = Number(e.target.value);
		let isCorrect = this.mat[i][j] === val;

		return isCorrect;
	}

	render(){
		let rows;
		
		if(this.state.showSolution){
			rows = this.mat.map((item, i) => {
				let entry = item.map((element, j) => {
					return ( 
						<td key={j}>{element}</td>
					);
				});
				return (
					<tr key={i}>{entry}</tr>
				);
			});
		}else{
			rows = this.matIncomplete.map((item, i) => {
				let entry = item.map((element, j) => {
					if(element !== -1){
						return ( 
							<td key={j}>{element}</td>
						);
					}else{
						return (
							<td className={"empty" + (this.state.realTimeCorrection?" realtime":"")} key={j}>
								<NumberInput
									realtime={this.state.realTimeCorrection}
									correction={e => {return this.checkInput(i, j, e)}}
								/>
							</td>
						);
					}
				});
				return (
					<tr key={i}>{entry}</tr>
				);
			});
		}

		let btnText = this.showComplete?"Hide solution":"Show solution";

		return (
			<div className="sudoku-container">
				<table className="sudoku">
					<tbody>
					{rows}
					</tbody>
				</table>

				<div className="buttons">
					<Button title={'Refresh'} onClick={()=>{
							this.reload(); 
							this.forceUpdate(); 
							console.log("reloading");
						}}>Refresh</Button>

					<div className="spacer"></div>

					<Button title={'Show Solution'} onClick={()=>{
							this.toggleComplete();
							console.log(!this.state.showSolution?"Showing solution":"Hiding solution");
						}}>{btnText}</Button>

					<Toggle onToggle={(isActive) => {this.setState({realTimeCorrection: isActive})}}/>
				</div>

			</div>
		);
	}
}

const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

export default Sudoku;