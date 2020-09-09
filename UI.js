import {game_flow} from "/GameFlow.js";
import {game_board} from  "/GameBoard.js"
import {player1, player2, Player } from "/Player.js";

export const ui = (() => {
  const cells = document.querySelectorAll('.cell')
  const form = document.querySelector('#myForm')
  
  const grabPlayerNames =(e) => {
    let name1 = document.getElementById('name-space-1').value
    let name2 = document.getElementById('name-space-2').value
    if (name1 === "" || name2 === ""){
      alert('Fill in both names!')
    }
    player1.name = name1
    player2.name = name2

    document.getElementById('myForm').style.display = "none"
    document.getElementById('center-Players-Turn').style.display = "grid"
    document.getElementById('players-Turn').textContent = player1.name
    
    e.preventDefault()
  }
  

  document.getElementById('center-Players-Turn').style.display = "none"

  form.addEventListener('submit', grabPlayerNames)




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
        game_flow.disablePlayAgainBtn()
        game_flow.getWinnerOfGame()
        game_flow.alternateXandO()
      }
   }))
 }

  const resetGame = () => {
    const resetBtn = document.getElementById('reset-btn')
    resetBtn.addEventListener('click', resetGameClicked)
  }

  const playAgainBtn = () => {
    const playBtn = document.getElementById('play-again-btn')
    playBtn.addEventListener('click', playGame)
  }

  const resetGameClicked = () => {
    cells.forEach(cell => cell.textContent = "")
    game_board.gameBoardCleared()
   let x = game_flow.getWinner()
   game_flow.alternateXandO(x)
  }

  const playGame = () => {
      game_flow.clearBoardandArray()
      game_flow.allowClicking()
  }


  return {displayXorO, resetGame, playAgainBtn, resetGameClicked, grabPlayerNames }

})();