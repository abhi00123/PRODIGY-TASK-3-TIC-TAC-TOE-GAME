const squares = document.getElementsByClassName('square');
const restart = document.getElementById('restart');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const playerTurnDisplay = document.getElementById('player-turn'); // Add this line

const handleClick = (event) => {
    const id = event.target.id;
    if (gameBoard[id] === '') {
        gameBoard[id] = currentPlayer;
        event.target.innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerTurnDisplay.innerText = `Current Turn: ${currentPlayer}`;
    }

    checkWin();
}

const checkWin = () => {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`Player ${gameBoard[a]} has won!`);
            restartGame();
            return;
        }
    }

    if (!gameBoard.includes('')) {
        alert('It\'s a tie!');
        restartGame();
        return;
    }
}

const restartGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = '';
    }
    currentPlayer = 'X';
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', handleClick);
}

restart.addEventListener('click', restartGame);