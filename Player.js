export const Player = (name, score, letter) => {

  return {name, score, letter}
};

const player1 = Player('player1', 0, 'X')
const player2 = Player ('player2', 0, 'O')

export {player1, player2}