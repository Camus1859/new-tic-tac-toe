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
      document.getElementById('reset-btn').style.pointerEvents = "auto"
      ui.disablePlayAgainBtn()
      game_flow.getWinnerOfGame()
   }))
 }

  const disableClick = () => {
  return cells.forEach(cell => cell.style.pointerEvents = "none")
  }

  const allowClicking = () => {
  return cells.forEach(cell => cell.style.pointerEvents = "auto")
  }

  const resetGame = () => {
    const resetBtn = document.getElementById('reset-btn')
    resetBtn.addEventListener('click', resetGameClicked)
  }

  const resetGameClicked = () => {
    cells.forEach(cell => cell.textContent = "")
    game_board.gameBoardCleared()
  }

  const playAgainBtn = () => {
    const playBtn = document.getElementById('play-again-btn')
    playBtn.addEventListener('click', playGame)
  }

  const disableReset = () => {
    return document.getElementById('reset-btn').style.pointerEvents = "none"
  }

  const disablePlayAgainBtn = () => {
   return document.getElementById('play-again-btn').style.pointerEvents = "none"
  }

  const clearBoardandArray = () => {
    cells.forEach(cell => cell.textContent = "")
    game_board.gameBoardCleared()
  }


  const playGame = () => {
      clearBoardandArray()
      allowClicking()




  }

  return {boardClick, displayXorO, disableClick, resetGame, playAgainBtn, resetGameClicked, disableReset, disablePlayAgainBtn, clearBoardandArray}

})();