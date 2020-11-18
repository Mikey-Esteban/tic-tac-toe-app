// Module for Gameboard
const Gameboard = () => {
  let board =
  [
    [
      null, null, null
    ],
    [
      null, null, null
    ],
    [
      null, null, null
    ]
  ]

  const placePiece = (type, id) => {
    const legend = {
      'one': { row: 0, col: 0 },
      'two': { row: 0, col: 1 },
      'three': { row: 0, col: 2 },
      'four': { row: 1, col: 0 },
      'five': { row: 1, col: 1 },
      'six': { row: 1, col: 2 },
      'seven': { row: 2, col: 0 },
      'eight': { row: 2, col: 1 },
      'nine': { row: 2, col: 2 }
    }
    const { row, col } = legend[id];
    console.log(`row is ${row}`);
    console.log(`col is ${col}`);
    board[row][col] = type;
  }

  const isFull = () => {
    for (let arr of board) {
      if (!arr[0] || !arr[1] || !arr[2]) {
        return false
      }
    }
    return true
  }

  const isWon = () => {
    if (
      // Check each Column
      board[0][0] && board[0][0] == board[1][0] && board[0][0] == board[2][0] ||
      board[0][1] && board[0][1] == board[1][1] && board[0][1] == board[2][1] ||
      board[0][2] && board[0][2] == board[1][2] && board[0][2] == board[2][2] ||
      // Check each Row
      board[0][0] && board[0][0] == board[0][1] && board[0][0] == board[0][2] ||
      board[1][0] && board[1][0] == board[1][1] && board[1][0] == board[1][2] ||
      board[2][0] && board[2][0] == board[2][1] && board[2][0] == board[2][2] ||
      // Check Diagonals
      board[0][0] && board[0][0] == board[1][1] && board[0][0] == board[2][2] ||
      board[0][2] && board[0][2] == board[1][1] && board[0][2] == board[2][0]
    ) { return true }

    return false

  }

  return { board, placePiece, isFull, isWon }
}

// Module for Gameplay
const Gameplay = () => {
  let player = 'X';

  const switchPlayer = () => {
    return player == 'X' ? player = 'O' : player = 'X';
  }

  const board = Gameboard();

  return { player, switchPlayer, board }
};

// IIFE for User Interface
const UI = (() => {
  const box1 = document.querySelector('#one');
  const box2 = document.querySelector('#two');
  const box3 = document.querySelector('#three');
  const box4 = document.querySelector('#four');
  const box5 = document.querySelector('#five');
  const box6 = document.querySelector('#six');
  const box7 = document.querySelector('#seven');
  const box8 = document.querySelector('#eight');
  const box9 = document.querySelector('#nine');
  const turnDescription = document.querySelector('#turnDescription');
  const winnerBanner = document.querySelector('#winnerBanner');

  const allPositions = [ box1, box2, box3, box4, box5, box6, box7, box8, box9 ];

  game = Gameplay();

  for (let box of allPositions) {
    box.addEventListener('click', () => {
      // change UI box
      box.innerText = game.player;
      // add piece to gameboard
      game.board.placePiece(game.player, box.id)
      // switch player
      game.player = game.switchPlayer();

      turnDescription.innerText == 'Player X turn' ?
        turnDescription.innerText = 'Player O turn' :
        turnDescription.innerText = 'Player X turn' ;
      winnerBanner.classList.toggle('hidden');
    });
  }

})();
