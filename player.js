export const Player = (name, score, letter) => {

  return{name, score, letter}
};

let name1 = document.getElementById('name-space-1').value
let name2 = document.getElementById('name-space-2').value

let score1 = document.getElementById('player1-score').textContent = 0
let score2 = document.getElementById('player2-score').textContent = 0


const player1 = Player(name1, score1, 'X')
const player2 = Player (name2, score2, 'O')

export {player1, player2}