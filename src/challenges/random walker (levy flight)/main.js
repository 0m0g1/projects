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
pen.strokeStyle = "white";
let prevPos = walker.copy();
function moveWalker() {
    const direction = getRndInteger(1, 8);
    const step = (getRndInteger(0, 1000) < 990) ? getRndInteger(2, 5) : getRndInteger(60, 90);

    switch (direction) {
        case 1:
            walker.add(new Vector2D(-1, 0).scalarMultiply(step));
            break;
        case 2:
            walker.add(new Vector2D(0, -1).scalarMultiply(step))
            break;
        case 3:
            walker.add(new Vector2D(1, 0).scalarMultiply(step))
            break;
        case 4:
            walker.add(new Vector2D(0, 1).scalarMultiply(step))
            break;
        case 5:
            walker.add(new Vector2D(-1, -1).scalarMultiply(step));
            break;
        case 6:
            walker.add(new Vector2D(1, -1).scalarMultiply(step))
            break;
        case 7:
            walker.add(new Vector2D(1, 1).scalarMultiply(step))
            break;
        case 8:
            walker.add(new Vector2D(-1, 1).scalarMultiply(step))
            break;
        }

    if (walker.x <= 0) walker.x = 0;
    else if (walker.x >= canvas.width) walker.x = canvas.width;
    else if (walker.y <= 0) walker.y = 0;
    else if (walker.y >= canvas.height) walker.y = canvas.height;
    prevPos = walker.copy();
    pen.lineTo(walker.x, walker.y);
    pen.moveTo(walker.x, walker.y);
    pen.stroke();
    requestAnimationFrame(moveWalker);
}

moveWalker();