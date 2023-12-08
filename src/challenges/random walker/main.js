const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

let walker = {
    x: center.x,
    y: center.y
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

pen.fillStyle = "white";
function moveWalker() {
    const direction = getRndInteger(1, 4);
    switch (direction) {
        case 1:
            walker.x -= 1;
            break;
        case 2:
            walker.y -= 1;
            break;
        case 3:
            walker.x += 1;
            break;
        case 4:
            walker.y += 1;
            break;
    }
    pen.fillRect(walker.x, walker.y, 1, 1);
    pen.fill();
    requestAnimationFrame(moveWalker);
}

moveWalker();