// Get canvas and context
const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');

// Game variables
const gridSize = 20; // 20x20 grid
const tileCount = canvas.width / gridSize;
let score = 0;
let gameSpeed = 100; // milliseconds

// Snake array - each element is {x, y}
let snake = [
    {x: 10, y: 10}
];

// Food position
let food = {
    x: Math.floor(Math.random() * tileCount),
    y: Math.floor(Math.random() * tileCount)
};

// Direction (start moving right)
let direction = {x: 1, y: 0};
let nextDirection = {x: 1, y: 0};

// Input handler
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            if (direction.y === 0) nextDirection = {x: 0, y: -1};
            break;
        case 'ArrowDown':
            if (direction.y === 0) nextDirection = {x: 0, y: 1};
            break;
        case 'ArrowLeft':
            if (direction.x === 0) nextDirection = {x: -1, y: 0};
            break;
        case 'ArrowRight':
            if (direction.x === 0) nextDirection = {x: 1, y: 0};
            break;
    }
});

// Draw a tile (pixel block)
function drawTile(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.strokeRect(x * gridSize, y * gridSize, gridSize, gridSize);
}

// Draw game
function draw() {
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    snake.forEach((segment, index) => {
        if (index === 0) {
            drawTile(segment.x, segment.y, '#00ff00'); // Head in bright green
        } else {
            drawTile(segment.x, segment.y, '#00cc00'); // Body in darker green
        }
    });

    // Draw food
    drawTile(food.x, food.y, '#ff0000');
}

// Update game logic
function update() {
    // Update direction
    direction = nextDirection;

    // Calculate new head position
    const head = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };

    // Check wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        gameOver();
        return;
    }

    // Check self collision
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        gameOver();
        return;
    }

    // Add new head
    snake.unshift(head);

    // Check if food eaten
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreDisplay.textContent = score;
        // New food position
        food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
        // Speed up slightly
        gameSpeed = Math.max(50, gameSpeed - 1);
    } else {
        // Remove tail if no food eaten
        snake.pop();
    }
}

// Game over
function gameOver() {
    alert(`GAME OVER!\nFinal Score: ${score}\n\nPress OK to restart.`);
    location.reload();
}

// Game loop
function gameLoop() {
    update();
    draw();
}

// Start game
setInterval(gameLoop, gameSpeed);