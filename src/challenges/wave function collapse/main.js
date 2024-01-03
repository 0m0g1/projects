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
    center: 0,
    up: 1,
    right: 2,
    down: 3,
    left: 4
})


// Set up the rules
const rules = {
    up: ""
}

// Function to get random integers between a min and max value
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get random choice from an array
function arrayGetRandom(array) {
    return array[getRndInt(0, array.length - 1)];
}

function screenCoordinatesToGridCoordinates(screenX, screenY) {
    const x = Math.floor(screenX / cellSize);
    const y = Math.floor(screenY / cellSize);
    return {x: x, y: y};
}

function gridCoordinatesToScreenCoordinates(gridX, gridY) {
    const x = Math.floor(gridX * cellSize);
    const y = Math.floor(gridY * cellSize);
    return {x: x, y: y};
}

// Draw the grid
function drawGrid() {
    for (let x = 0; x < canvas.width; x += cellSize) {
        pen.moveTo(x, 0);
        pen.lineTo(x, canvas.height);
    }
    for (let y = 0; y < canvas.height; y += cellSize) {
        pen.moveTo(0, y);
        pen.lineTo(canvas.width, y);
    }
    pen.stroke();
}

function initializeTileMap() {
    for (let y = 0; y < canvas.height; y += cellSize) {
        const index = Math.floor(y / cellSize);
        tilemap.push([]);
        for (let x = 0; x <= canvas.width; x += cellSize) {
            tilemap[index].push({
                collapsed: false,
                options: [tileset.center, tileset.up, tileset.right, tileset.down, tileset.left]
            });
        }
    }
}


function drawTileMap() {
    tilemap.forEach((row, y) => {
        row.forEach((column, x) => {
            if (column.collapsed == true) {
                const tile = tilemap[y][x].options[0];
                pen.drawImage(tile, x * cellSize, y * cellSize, cellSize, cellSize);
            }
        })
    })
}

canvas.onmousedown = (e) => {
    const gridCoordinates = screenCoordinatesToGridCoordinates(e.clientX, e.clientY);
    startCollapse(gridCoordinates.x, gridCoordinates.y);
}

function filterOption(neighbour, tile) {
    neighbour.options = neighbour.options.filter((img) => img !== tile.options[0]);
}

function startCollapse(startX, startY) {
    const maxTiles = tilemap.length * tilemap[0].length;
    function collapse(x, y) {
        const tile = tilemap[y][x];
        if (tile.options.length > 1) {
            tile.collapsed = true;
            tile.options = [tile.options[getRndInt(0, tile.options.length - 1)]];
        }

        const availableNeighbours = [];

        for (let relativeY = -1; relativeY < 2; relativeY++) {
            const neighbourY = y + relativeY;

            if (neighbourY < 0 || neighbourY > tilemap.length) continue;

            for (let relativeX = -1; relativeX < 2; relativeX++) {
                if (relativeX == relativeY || relativeX * -1 == relativeY) continue;

                const neighbourX = x + relativeX;

                console.log([neighbourX, neighbourX]);
                const neighbour = tilemap[neighbourY][neighbourX];
                if (neighbour.collapsed) continue;

                filterOption(neighbour, tile);

                availableNeighbours.push({x: neighbourX, y: neighbourY});
            }
        }
        drawTileMap();

        availableNeighbours.forEach((n) => {
            collapse(n.x, n.y);
        })
    }


    collapse(startX, startY);
}

window.onload = () => {
    initializeTileMap();
    drawGrid();
}