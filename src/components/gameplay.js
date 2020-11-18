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
    // Check Each Col
    if ( board[0][0] && board[0][0] == board[1][0] && board[0][0] == board[2][0] ) { return ['one', 'four', 'seven'] }
    if ( board[0][1] && board[0][1] == board[1][1] && board[0][1] == board[2][1] ) { return ['two', 'five', 'eight'] }
    if ( board[0][2] && board[0][2] == board[1][2] && board[0][2] == board[2][2] ) { return ['three', 'six', 'nine'] }
    // Check Each Row
    if ( board[0][0] && board[0][0] == board[0][1] && board[0][0] == board[0][2] ) { return ['one', 'two', 'three'] }
    if ( board[1][0] && board[1][0] == board[1][1] && board[1][0] == board[1][2] ) { return ['four', 'five', 'six'] }
    if ( board[2][0] && board[2][0] == board[2][1] && board[2][0] == board[2][2] ) { return ['seven', 'eight', 'nine'] }
    // Check Diangonals
    if ( board[0][0] && board[0][0] == board[1][1] && board[0][0] == board[2][2] ) { return ['one', 'five', 'nine'] }
    if ( board[0][2] && board[0][2] == board[1][1] && board[0][2] == board[2][0] ) { return ['three', 'five', 'seven'] }
      // Check each Column
      // board[0][0] && board[0][0] == board[1][0] && board[0][0] == board[2][0] ||
      // board[0][1] && board[0][1] == board[1][1] && board[0][1] == board[2][1] ||
      // board[0][2] && board[0][2] == board[1][2] && board[0][2] == board[2][2] ||
      // Check each Row
      // board[0][0] && board[0][0] == board[0][1] && board[0][0] == board[0][2] ||
      // board[1][0] && board[1][0] == board[1][1] && board[1][0] == board[1][2] ||
      // board[2][0] && board[2][0] == board[2][1] && board[2][0] == board[2][2] ||
      // Check Diagonals
      // board[0][0] && board[0][0] == board[1][1] && board[0][0] == board[2][2] ||
      // board[0][2] && board[0][2] == board[1][1] && board[0][2] == board[2][0]
    // ) { return true }

    return false
  }

  return { player, board, switchPlayer, placePiece, isFull, isWon }
};
