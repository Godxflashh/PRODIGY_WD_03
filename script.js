let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function handleClick(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + ' wins!');
      resetGame();
      return;
    }
    if (board.every(cell => cell !== '')) {
      alert('Draw!');
      resetGame();
      return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return board[a] !== '' && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.innerText = '');
}