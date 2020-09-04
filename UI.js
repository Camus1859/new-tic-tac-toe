import {player1, player2 } from "/Player.js";

export const ui = (() => {
  let currentPlayer = player2

  const boardClick = () => {
    const cell = document.querySelectorAll('.cell')
    cell.forEach(square => square.addEventListener('click', displayXorO))
  }

   const displayXorO = (e) => {
     currentPlayer === player2 ? currentPlayer = player1 : currentPlayer = player2
     e.target.textContent = currentPlayer.letter
     e.target !== ""? e.target.removeEventListener('click', displayXorO) : e.target
    }

  return {boardClick, displayXorO}

})();