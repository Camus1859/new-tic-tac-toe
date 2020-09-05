import {game_flow} from "/GameFlow.js";
import {game_board} from  "/GameBoard.js"

export const ui = (() => {

  const cells = document.querySelectorAll('.cell')

  const boardClick = () => {
    cells.forEach(cell => cell.addEventListener('click', displayXorO))
  }

  const displayXorO = () => {
    cells.forEach(cell => cell.addEventListener('click', (e) =>{
      cell.textContent !== "" ? cell.style.pointerEvents ="none" : 
      e.target.textContent = game_flow.alternateXandO().letter
      const dataNumberClicked = e.target.getAttribute('data-number')
      const valueOnSquare = e.target.textContent
      game_board.matchArrayToBoard(dataNumberClicked, valueOnSquare)
      game_flow.getWinnerOfGame()
   }))
 }

  const disableClick = () => {
  return cells.forEach(cell => cell.style.pointerEvents = "none")
  }

  const resetGame = () => {
    const resetBtn = document.getElementById('reset-btn')
    resetBtn.addEventListener('click', resetGameClicked)
  }

  const resetGameClicked = () => {
    let gameboard = game_board.theBoard
    cells.forEach(cell => cell.textContent = "")
    game_board.gameBoardCleared()
  }

  return {boardClick, displayXorO, disableClick, resetGame}

})();