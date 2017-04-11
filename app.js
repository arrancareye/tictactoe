'use strict';
window.onload = function(){
	let board 	= document.querySelector('#board');
	let childs 	= board.childNodes;
	let modal 	= document.querySelector('#modal');
	for(let i = 0; i<9; i++){
		let square = document.createElement('div');
		square.className = 'square';
		board.appendChild(square);
	}
	let squares = document.querySelectorAll('#board .square');
	console.log(squares);
	let restart = document.createElement('button');
	restart.innerHTML 	= 'restart';
	restart.className 	= 'restart';
	board.appendChild(restart);
	let playerXSign 	= 'X';
	let playerYSign 	= 'Y';
	let xColor 				= '#c0392b';
	let yColor 				= '#1abc9c';
	let currentPlayer = playerXSign;
	let currentColor 	= xColor;
	let counter 			= 0;
	let currentSide 	= document.querySelector('.leftSide');
	let rightSide 		= document.querySelector('.rightSide');
	let side = rightSide;
	let clearRows = () => {
		let rowsLeft = document.querySelector('.leftSide');
		let rowsRight = document.querySelector('.rightSide');
		rowsLeft.innerHTML = '';
		rowsRight.innerHTML = '';
	}
	function checkForTheWinner(){
		let sqrs = Array.prototype.slice.call(squares, 0);
		let winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];
		let symbols = sqrs.map(function(square){
			return square.innerHTML;
		});
		return winningCombos.find(function(combo){
			if(symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]){
				return symbols[combo[0]];
			} else {
				return false;
			}
		});
		console.log(symbols);
	}
	board.addEventListener('click', function(e){
		counter++;
		if(String(e.target.innerHTML).length!==0){
			return;
		}
		side = side === currentSide ? rightSide : currentSide;
		let row 					= document.createElement('div');
		row.className 		= 'row';
		row.innerHTML = counter + ' ' + currentPlayer;
		side.appendChild(row);
		e.target.innerHTML = currentPlayer;
		e.target.style.background = currentColor;
		currentColor = currentColor === xColor ? yColor : xColor;
		if(checkForTheWinner()){
			console.log(currentPlayer);
			modal.classList.toggle('visible');
			modal.innerHTML = '';
			modal.innerHTML = 'The winner is ' + currentPlayer;
		}
		currentPlayer = currentPlayer === playerXSign ? playerYSign : playerXSign;
	});
	restart.addEventListener('click', function(e){
		for(let i = 0; i<squares.length; i++){
			squares[i].innerHTML = '';
			squares[i].style.background = 'none'
		}
		clearRows();
		modal.classList.toggle('visible');
		currentPlayer = playerXSign;
	});
};