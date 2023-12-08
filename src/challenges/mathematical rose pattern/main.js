const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
const k = document.querySelector("#k");
const n = document.querySelector("#n");
const kLabel = document.querySelector("#k-label");
const nLabel = document.querySelector("#n-label");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

let angle = 0;

k.onchange = (e) => {
    kLabel.innerHTML = k.value;
    start();
}

n.onchange = (e) => {
    nLabel.innerHTML = n.value;
    start();
}

pen.lineWidth = 0.5;

function plotRose() {
    const r = 200 * Math.cos((k.value / n.value) * angle);
    const x = r * Math.cos(angle) + center.x;
    const y = r * Math.sin(angle) + center.y;
    
    if (angle == 0) {
        pen.moveTo(x, y);
    } else {
        pen.lineTo(x, y)
    }
    pen.stroke();
    
    if (angle < 360) {
        angle += 0.01;
        requestAnimationFrame(plotRose);
    }
}

function start() {
    angle = 0;
    pen.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    plotRose();
}

window.onload = () => {
    kLabel.innerHTML = k.value;
    nLabel.innerHTML = n.value;
    start();
}