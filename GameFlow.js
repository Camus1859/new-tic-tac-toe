import {player1, player2 } from "/Player.js";
import {game_board} from "/GameBoard.js"
import {ui} from "/UI.js"

export const game_flow = (() => {

  let currentPlayer = player1
  const cells = document.querySelectorAll('.cell')

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


  const updatGameScore = (winner) => {
    if (winner.letter ===  "X"){
      player1.score =  player1.score + 1
      document.getElementById('player1-score').textContent = player1.score
    }
    else if(winner.letter === "O"){
      player2.score =  player2.score + 1
      document.getElementById('player2-score').textContent = player2.score
    }
  }

  const disableClick = () => {
    return cells.forEach(cell => cell.style.pointerEvents = "none")
    }

    const allowClicking = () => {
      return cells.forEach(cell => cell.style.pointerEvents = "auto")
      }

  const effectsOfWinningGame = () => {
    disableClick()
    recentWinner(currentPlayer)
    getWinner(currentPlayer)
    updatGameScore(currentPlayer)
    currentPlayer = alternateXandO()
    disableReset()
    document.getElementById('play-again-btn').style.pointerEvents = "auto"
  }

  const getWinner = (justWon) => {
    return justWon
  }

  const alternatePlayersTurn = () => {
    return document.getElementById('players-Turn').textContent = currentPlayer.name
  }

 const alternateXandO = (previousWinner) => {
    if (previousWinner !== undefined) {
    return  currentPlayer = previousWinner
    }else{
    return currentPlayer === player2 ? currentPlayer = player1 : currentPlayer = player2
   }
  }


  const grabCurrentPlayer = () => {
    return currentPlayer === player1 ? currentPlayer = player1 : currentPlayer = player2
   }

   const winnerOfGame = () => {
    let gameBoardArray = game_board.getBoard()
     if (gameBoardArray[0] !== "" && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]){
      effectsOfWinningGame()
      
     }

     else if (gameBoardArray[0] !== "" && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]){
      effectsOfWinningGame()
     }

     else if (gameBoardArray[6] !== "" && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]){
      effectsOfWinningGame()
     }

     else if (gameBoardArray[2] !== "" && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]){
      effectsOfWinningGame()
     }

     else if (gameBoardArray[0] !== "" && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]){
      effectsOfWinningGame()
     }

     else if (gameBoardArray[2] !== "" && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]){
      effectsOfWinningGame()
     }

     else if (gameBoardArray[3] !== "" && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]){
      effectsOfWinningGame()
     }

     else if (gameBoardArray[1] !== "" && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]){
      effectsOfWinningGame()
     }

   }

   const getWinnerOfGame = () => {
    return winnerOfGame()
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
 
   return{alternateXandO, currentPlayer, getWinnerOfGame, grabCurrentPlayer, disableClick, allowClicking, getWinner, disableReset, disablePlayAgainBtn, clearBoardandArray, alternatePlayersTurn}

})();