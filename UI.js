import {game_flow} from "/GameFlow.js";
import {game_board} from  "/GameBoard.js"
import {player1, player2 } from "/Player.js";


export const ui = (() => {

  const cells = document.querySelectorAll('.cell')

  const displayXorO = () => {
    cells.forEach(cell => cell.addEventListener('click', (e) =>{
      if(cell.textContent !== ""){
        cell.style.pointerEvents ="none"
      }else{
        e.target.textContent =  game_flow.grabCurrentPlayer().letter
        const dataNumberClicked = e.target.getAttribute('data-number')
        const valueOnSquare = e.target.textContent
        game_board.matchArrayToBoard(dataNumberClicked, valueOnSquare)
        document.getElementById('reset-btn').style.pointerEvents = "auto"
        ui.disablePlayAgainBtn()
        game_flow.getWinnerOfGame()
        game_flow.alternateXandO()
      }
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

  let arrayWithOneWinner = []
  const recentWinner = (winner) => {
   let reset = document.getElementById('reset-btn')
   document.addEventListener('click', (e)=> {
    if (e.target === reset ){
      arrayWithOneWinner.push(winner)   
     let previousWinner = arrayWithOneWinner.pop()
      game_flow.alternateXandO(previousWinner)
    }
   })
  }

  const resetGameClicked = () => {
    cells.forEach(cell => cell.textContent = "")
    game_board.gameBoardCleared()
   let x = getWinner()
   game_flow.alternateXandO(x)
  }

  const getWinner = (justWon) => {
    return justWon
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



  return {displayXorO, disableClick, resetGame, playAgainBtn, resetGameClicked, disableReset, disablePlayAgainBtn, clearBoardandArray, recentWinner, getWinner}

})();