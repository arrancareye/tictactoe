'use strict';
window.onload = function(){
	let board 	= document.querySelector('#board');
	let childs 	= board.childNodes;
	let modal 	= document.querySelector('#modal');
	for(let i = 0; i<9; i++){
		let square = document.createElement('div');
		square.className = 'square';
		square.id = 'square';
		board.appendChild(square);
	}
	let squares = document.querySelectorAll('#board #square');
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
		currentPlayer = currentPlayer === playerXSign ? playerYSign : playerXSign;
		for(let i = 0; i<childs.length; i++){
			if(childs[i].innerHTML === 'X' && childs[i+1].innerHTML === 'X' && childs[i-1].innerHTML === 'X'){
				modal.innerHTML = '';
				modal.innerHTML = 'You are the winner ' + playerXSign + ' player';
				modal.classList.toggle('visible');
				setTimeout(function(){
					modal.classList.toggle('visible');
				}, 5000);
				return;
			}
		}
	});
	restart.addEventListener('click', function(e){
		for(let i = 0; i<squares.length; i++){
			squares[i].innerHTML = '';
			squares[i].style.background = 'none'
		}
		clearRows();
		modal.classList.toggle('visible');
	});
};