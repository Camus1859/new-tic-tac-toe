import { ui } from "/UI.js";

export const game_board = (() => {

  let theBoard = ["","","","","","","","","" ]

  const gameBoardCleared = () => {
    return theBoard = ["","","","","","","","","" ]
  }

  const matchArrayToBoard = (number, value) => {
     theBoard[number] = value
     console.log(theBoard)
  }

  return{theBoard, matchArrayToBoard, gameBoardCleared}

})();