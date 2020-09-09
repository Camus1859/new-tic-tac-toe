export const Player = (name, score, letter) => {

  return{name, score, letter}
};

let name1 = document.getElementById('name-space-1').value
let name2 = document.getElementById('name-space-2').value

const player1 = Player(name1, 0, 'X')
const player2 = Player (name2, 0, 'O')

export {player1, player2}