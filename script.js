// Drawing the board 

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

// Movement logic

let dx = 1;
let dy = 0;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (dy === 0) { dx = 0; dy = -1; } // Move up
            break;
        case 'ArrowDown':
            if (dy === 0) { dx = 0; dy = 1; }  // Move down
            break;
        case 'ArrowLeft':
            if (dx === 0) { dx = -1; dy = 0; } // Move left
            break;
        case 'ArrowRight':
            if (dx === 0) { dx = 1; dy = 0; }  // Move right
            break;
    }
});