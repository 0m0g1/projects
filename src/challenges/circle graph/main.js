const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

let angle = 0;

function plotCircle() {
    const x = 100 * Math.cos(angle) + center.x;
    const y = 100 * Math.sin(angle) + center.y;

    pen.fillRect(x, y, 1, 1);
    pen.fill();
    angle += 0.01;
    if (angle < 360) {
        requestAnimationFrame(plotCircle);
    }
}

plotCircle();