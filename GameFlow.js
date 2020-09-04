import {player1, player2 } from "/Player.js";

export const game_flow = (() => {

  let currentPlayer = player2
  
  const alternateXandO = () => {
    return currentPlayer === player2 ? currentPlayer = player1 : currentPlayer = player2
   }

   return{alternateXandO,currentPlayer}

})();