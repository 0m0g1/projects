const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// no of cells and cellsize
const noOfCells = 32;
const cellSize = Math.floor(canvas.width / noOfCells);

// Set up tileset
const tileset = {
    up: new Image(),
    right: new Image(),
    down: new Image(),
    left: new Image(),
    center: new Image()
};

tileset.up.src = "./tiles/up.png";
tileset.right.src = "./tiles/right.png";
tileset.down.src = "./tiles/down.png";
tileset.left.src = "./tiles/left.png";
tileset.center.src = "./tiles/blank.png";

// Set up the tilemap
const tilemap = [];

// Set up directions
const directions = Object.freeze({
    up: "up",
    right: "right",
    down: "down",
    left: "left",
    center: "center"
})


// Set up the rules
const rules = {
    up: ""
}

// Function to get random integers between a min and max value
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Draw the grid
function drawGrid() {
    for (let x = cellSize; x < canvas.width; x += cellSize) {
        pen.moveTo(x, 0);
        pen.lineTo(x, canvas.height);
    }
    for (let y = cellSize; y < canvas.height; y += cellSize) {
        pen.moveTo(0, y);
        pen.lineTo(canvas.width, y);
    }
    pen.stroke();
}

function initializeTileMap() {
    for (let y = 0; y < canvas.height; y += cellSize) {
        const index = y / cellSize;
        tilemap.push([]);
        for (let x = 0; x < canvas.width; x += cellSize) {
            tilemap[index].push(-1);
        }
    }
}

window.onload = () => {
    initializeTileMap();
    drawGrid();
}