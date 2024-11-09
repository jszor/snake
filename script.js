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

// Defining the game loop

function moveSnake() {
    // Calculate new head position
    const head = snake[0];
    const newHead = head + dx + dy * boardSize;

    // Add new head to the front of the snake array
    snake.unshift(newHead);

    // Check if food is eaten
    if (newHead === foodPosition) {
        // Generate new food position if the snake eats food
        foodPosition = Math.floor(Math.random() * boardSize * boardSize);
    } else {
        // Remove the tail if food isn't eaten
        snake.pop();
    }

    drawBoard(); // Redraw the board to reflect movement
}

// Start the game loop
setInterval(moveSnake, 200); // Move the snake every 200 ms
