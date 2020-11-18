// Module for boardFactory
const boardFactory = () => {
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

  return { board }
}

// Module for Gameplay
const Gameplay = () => {
  // initialize game with board and player x
  let board = boardFactory().board;
  let player = 'X';

  const switchPlayer = () => {
    return player == 'X' ? player = 'O' : player = 'X';
  }

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
    };
    const { row, col } = legend[id];
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

  return { player, board, switchPlayer, placePiece, isFull, isWon }
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
  const tieBanner = document.querySelector('#tieBanner');

  const allPositions = [ box1, box2, box3, box4, box5, box6, box7, box8, box9 ];

  game = Gameplay();

  for (let box of allPositions) {
    box.addEventListener('click', () => {
      // if statement to see if click is valid
      if (box.innerText == '') {
        // change UI box
        box.innerText = game.player;
        // handle padding change
        box.classList.remove('py-6');
        box.classList.add('pb-5', 'pt-6');
        // add piece to gameboard
        game.placePiece(game.player, box.id)
        // check if winner
        if (game.isWon()) { winnerBanner.classList.remove('hidden') }
        if (game.isFull()) { tieBanner.classList.remove('hidden') }
        // switch player
        game.player = game.switchPlayer();

        turnDescription.innerText == 'Player X turn' ?
          turnDescription.innerText = 'Player O turn' :
          turnDescription.innerText = 'Player X turn' ;
        // winnerBanner.classList.toggle('hidden');
      } else {
        alert('sorry, that space is already taken!')
      }

    });
  }

})();
