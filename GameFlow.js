import {player1, player2 } from "/Player.js";
import {game_board} from "/GameBoard.js"
import {ui} from "/UI.js"

export const game_flow = (() => {

  let currentPlayer = player2

  const alternateXandO = () => {
    return currentPlayer === player2 ? currentPlayer = player1 : currentPlayer = player2
   }

   const winnerOfGame = () => {
     const gameBoardArray = game_board.theBoard
     if (gameBoardArray[0] !== "" && gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]){
       ui.disableClick()
     }

     else if (gameBoardArray[0] !== "" && gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]){
      ui.disableClick()
     }

     else if (gameBoardArray[6] !== "" && gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]){
      ui.disableClick()
     }

     else if (gameBoardArray[2] !== "" && gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]){
      ui.disableClick()
     }

     else if (gameBoardArray[0] !== "" && gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]){
      ui.disableClick()
     }

     else if (gameBoardArray[2] !== "" && gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]){
      ui.disableClick()
     }

     else if (gameBoardArray[3] !== "" && gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]){
      ui.disableClick()
     }

     else if (gameBoardArray[1] !== "" && gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]){
      ui.disableClick()

     }

   }

   const getWinnerOfGame = () => {
    return winnerOfGame()
   }

   return{alternateXandO, currentPlayer, getWinnerOfGame}

})();