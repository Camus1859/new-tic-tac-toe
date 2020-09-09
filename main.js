import {Player} from '/Player.js'
import {ui} from '/UI.js'
import {game_flow} from '/GameFlow.js'
import {game_board} from '/GameBoard.js'
ui.displayXorO()
ui.playAgainBtn()
ui.resetGame()
game_flow.disablePlayAgainBtn()
game_flow.disableReset()
