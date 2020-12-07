import {game_flow} from "./gameFlow.js";
import {game_board} from  "./gameBoard.js"
import {player1, player2} from "./player.js";

export const ui = (() => {
  const cells = document.querySelectorAll('.cell')
  const form = document.querySelector('#myForm')
  let name1 = document.getElementById('name-space-1').value
  let name2 = document.getElementById('name-space-2').value
  
  const submitPlayerInfo =(e) => {
    name1 = document.getElementById('name-space-1').value
    name2 = document.getElementById('name-space-2').value
    if (name1 === "" || name2 === ""){
      alert('Fill in both names!')
      return
    }
    player1.name = name1
    player2.name = name2

    document.getElementById('myForm').style.display = "none"
    document.getElementById('center-Players-Turn').style.display = "grid"
    document.getElementById('players-winner').style.display = "none"
    document.getElementById('players-name').textContent = `${player1.name}'s Turn`
    e.preventDefault()
  }
  
  document.getElementById('center-Players-Turn').style.display = "none"

  form.addEventListener('submit', submitPlayerInfo)

  const displayXorO = () => {
    cells.forEach(cell => cell.addEventListener('click', (e) =>{
      if(cell.textContent !== ""){
        cell.style.pointerEvents ="none"
      } else if(name1 === "" || name2 === ""){
        alert("Enter player names to begin!")
        return
      }
      else{
        e.target.textContent =  game_flow.grabCurrentPlayer().letter
        let x = game_flow.grabCurrentPlayer().letter
        const dataNumberClicked = e.target.getAttribute('data-number')
        const valueOnSquare = e.target.textContent
        game_board.matchArrayToBoard(dataNumberClicked, valueOnSquare)
        document.getElementById('reset-btn').style.pointerEvents = "auto"
        game_flow.disablePlayAgainBtn()
        game_flow.getWinnerOfGame()
        console.log(game_flow.alternateXandO())
        console.log(game_flow.alternatePlayersTurn())
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
    console.log(x)
   console.log(game_flow.alternateXandO(x))
   console.log(game_flow.alternatePlayersTurn())
   console.log(game_flow.grabCurrentPlayer())
   document.getElementById('reset-btn').style.pointerEvents = "none"

  }

  const playGame = () => {
      game_flow.clearBoardandArray()
      game_flow.allowClicking()
      document.getElementById('players-winner').style.display = "none"
      document.getElementById('players-name').style.display = "grid"
  }


  return {displayXorO, resetGame, playAgainBtn, resetGameClicked, submitPlayerInfo }

})();

