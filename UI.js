import {game_flow} from "./GameFlow.js";
import {game_board} from "./GameBoard.js"

export const ui = (() => {

  const boardClick = () => {
    const cell = document.querySelectorAll('.cell')
    cell.forEach(square => square.addEventListener('click', displayXorO))
  }

  const displayXorO = (e) => {
    e.target.textContent = game_flow.alternateXandO().letter
    const dataNumberClicked = e.target.getAttribute('data-number')
    const valueOnSquare = e.target.textContent
    game_board.matchArrayToBoard(dataNumberClicked, valueOnSquare)
    e.target !== ""? e.target.removeEventListener('click', displayXorO) : e.target
  }

  return {boardClick, displayXorO}

})();