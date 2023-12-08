import Vector2D from "../../modules/Vector2D.js"
const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

let walker = new Vector2D(center.x, center.y);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

pen.fillStyle = "white";
function moveWalker() {
    const direction = getRndInteger(1, 8);
    switch (direction) {
        case 1:
            walker.add(new Vector2D(-1, 0));
            break;
        case 2:
            walker.add(new Vector2D(0, -1))
            break;
        case 3:
            walker.add(new Vector2D(1, 0))
            break;
        case 4:
            walker.add(new Vector2D(0, 1))
            break;
        case 5:
            walker.add(new Vector2D(-1, -1));
            break;
        case 6:
            walker.add(new Vector2D(1, -1))
            break;
        case 7:
            walker.add(new Vector2D(1, 1))
            break;
        case 8:
            walker.add(new Vector2D(-1, 1))
            break;
    }
    pen.fillRect(walker.x, walker.y, 1, 1);
    pen.fill();
    requestAnimationFrame(moveWalker);
}

moveWalker();