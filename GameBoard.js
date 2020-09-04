export const game_board = (() => {

  const theBoard = ["","","","","","","","","" ]

  const matchArrayToBoard = (number, value) => {
     theBoard[number] = value
     console.log(theBoard)
  }

  return{theBoard, matchArrayToBoard}


})();