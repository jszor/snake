const boardSize = 20;
const board = document.getElementById('game-board');
const cells = [];

for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
    cells.push(cell);
}

let snake = [2, 1, 0]; 
let foodPosition = 50;

function drawBoard() {
    cells.forEach(cell => cell.classList.remove('snake', 'food'));
    snake.forEach(index => cells[index].classList.add('snake'));
    cells[foodPosition].classList.add('food');
}

drawBoard(); 

