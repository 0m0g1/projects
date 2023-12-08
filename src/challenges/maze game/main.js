let playerPos = {
    x: 0,
    y: 0
};
let goal = {
    x: 0,
    y: 0
};
let body = []
const cellSize = 32;
const gameCanvas = document.querySelector("#game-canvas");
const gridCanvas = document.querySelector("#grid-canvas");
const pen = gameCanvas.getContext("2d");
const pen2 = gridCanvas.getContext("2d");
const canvases = [gameCanvas, gridCanvas];
let maze = [];
let gameInterval = "";

function getRndInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

canvases.forEach((canvas) => {
    canvas.width = Math.round(window.innerWidth / cellSize) * cellSize;
    canvas.height = (Math.round(window.innerHeight / cellSize) * cellSize) + cellSize;
});

const bounds = {
    x: gameCanvas.width - cellSize,
    y: gameCanvas.height - cellSize
}

function drawGrid() {
    pen2.beginPath();
    for (let x = 0; x < gridCanvas.width; x += cellSize) {
        pen2.moveTo(x, 0);
        pen2.lineTo(x, gridCanvas.height);
    }
    for (let y = 0; y < gridCanvas.height; y += cellSize) {
        pen2.moveTo(0, y);
        pen2.lineTo(gridCanvas.width, y);
    }
    pen2.stroke();
}

function drawSquare(x, y) {
    pen.fillRect(x, y, cellSize, cellSize);
}

function isOnWall(tempPlayer) {
    const gridX = tempPlayer.x / cellSize;
    const gridY = tempPlayer.y / cellSize;

    if (maze[gridY][gridX] == 0  || maze[gridY][gridX] == 2) {
        playerPos = tempPlayer;
    }
}

function movePlayer(direction) {
    pen.clearRect(0, 0, gridCanvas.width, gridCanvas.height);
    
    let tempPlayer = {
        x: playerPos.x,
        y: playerPos.y
    };

    switch(direction) {
        case "w":
            tempPlayer.y -= cellSize;
            break;
        case "a":
            tempPlayer.x -= cellSize;
            break;
        case "s":
            tempPlayer.y += cellSize;
            break;
        case "d":
            tempPlayer.x += cellSize;
            break;
        default:
            break;
    }

    isOnWall(tempPlayer);
    drawMaze();
    pen.fillStyle = "#00a4eb";
    drawSquare(playerPos.x, playerPos.y);
    console.log(playerPos);
    checkWin();
}

function checkWin() {
    if (playerPos.x == goal.x && playerPos.y == goal.y) {
        alert("You win");
        startGame();
    }
}

document.onkeydown = (e) => {
    switch(e.key) {
        case "w":
            movePlayer("w");
            break;
        case "a":
            movePlayer("a");
            break;
        case "s":
            movePlayer("s");
            break;
        case "d":
            movePlayer("d");
            break;
        default:
            break;
    }
}

function generateMaze() {
    maze = [];
    
    //fill the maze with rows
    for (let y = 0; y < gameCanvas.height; y += cellSize) {
        let row = [];
        for (let x = 0; x < gameCanvas.width; x += cellSize) {
            row.push(1);
        }
        maze.push(row);
    }

    const rows = maze.length - 1;
    const cols = maze[0].length - 1;

    let no = 0;
    function carvePassages(row, col) {
        maze[row][col] = 0;
        no++;
        
        // Set the last cell of the generated maze to the goal
        if (no == 210) {
            maze[row][col] = 2;
            goal.x = col * 32;
            goal.y = row * 32;
            console.log(goal);
        }
       
        const directions = [
            [0, 2],
            [2, 0],
            [0, -2],
            [-2, 0]
        ];

        for (let i = 0; i < directions.length; i++) {
            let j = getRndInt(0, directions.length - 1);
            [directions[i], directions[j]] = [directions[j], directions[i]];
        }

        for (const [rowDiff, colDif] of directions) {
            const newRow = row + rowDiff;
            const newCol = col + colDif;

            if (newRow >= 0 && newRow <= rows && newCol >= 0 && newCol <= cols && maze[newRow][newCol] === 1) {
                const cellY = row + rowDiff / 2;
                const cellX = col + colDif / 2;
                maze[cellY][cellX] = 0;
                carvePassages(newRow, newCol);
            }
        }
    }

    const startRow = getRndInt(0, rows);
    const startCol = getRndInt(0, cols);

    const oddStartRow = startRow % 2 === 0 ? startRow + 1 : startRow;
    const oddStartCol = startCol % 2 === 0 ? startCol + 1 : startCol;
    
    if (no == 0) {
        playerPos.x = oddStartCol * 32;
        playerPos.y = oddStartRow * 32;
    }
    carvePassages(oddStartRow, oddStartCol);
}

function drawMaze() {
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            let pos = {
                x: j * 32,
                y: i * 32
            };
            if (maze[i][j] == 1) {
                pen.fillStyle = "black";
                drawSquare(pos.x, pos.y);
            
            } else if (maze[i][j] == 2) {
                pen.fillStyle = "#00eba4";
                drawSquare(pos.x, pos.y);
            }
        }
    }
}

function startGame() {
     // alert("press T to toggle game mode so that you can be able to pass through walls or not");
     pen.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
     pen2.clearRect(0, 0, gridCanvas.width, gridCanvas.height);
     // drawGrid();
     drawSquare(0, 0);
     generateMaze();
     drawMaze();
     pen.fillStyle = "#00a4eb";
     drawSquare(playerPos.x, playerPos.y);
}


window.onload = () => {
   startGame();
}